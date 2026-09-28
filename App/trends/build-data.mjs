/* Build trends-data.js from the real engine scan output.
   Nothing here is invented. Every number is counted off engine/data/*.json.
   Run:  node build-data.mjs                                                  */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolved against this file, not the shell's cwd — `path.resolve` on a bare
// relative path silently reads from wherever you happened to be standing.
const HERE = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.resolve(HERE, '..', 'engine', 'data');
const ITEMS = ['Membership', 'Store', 'Podcast', 'Newsletter', 'YouTube channel', 'Own website', 'TikTok', 'Instagram'];

const files = fs.readdirSync(DATA).filter(f => f.endsWith('.json'));
const creators = [];

for (const f of files) {
  let d;
  try { d = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8')); } catch { continue; }
  if (!d.creatorId || !d.score) continue;

  const inv = {};
  for (const i of (d.inventory || [])) inv[i.label] = i.state;   // present | verified_absent | not_found

  const surfaces = (d.surfaces || []).filter(s => s.read).map(s => s.platform);

  creators.push({
    id: d.creatorId,
    day: (d.observedThrough || '').slice(0, 10),
    audience: d.audience || 0,
    audienceWhy: d.audienceWhy || '',
    score: d.score.total,
    conf: d.score.confidence.value,
    fit: d.score.fit.verdict,
    drop: !!d.score.entersDrop,
    escalated: !!d.escalated,
    brief: (d.brief || '').slice(0, 46),
    comments: d.commentsRead || 0,
    checks: (d.checkRecord && d.checkRecord.checks) || 0,
    places: (d.checkRecord && d.checkRecord.places) || 0,
    observations: d.observationCount || 0,
    trajectory: d.score.trajectory.verdict,
    inv,
    surfaces,
    demand: (d.score.demand.signals || []).map(s => ({ at: s.points_at, q: s.quote })),
    pressure: (d.score.pressure.parts || []).filter(p => p.points > 0).map(p => ({ signal: p.signal, line: p.line })),
    unreadable: (d.score.pressure.parts || []).filter(p => p.unavailable).length
  });
}

const tally = (arr, key) => arr.reduce((a, x) => { const k = key(x); if (k != null) a[k] = (a[k] || 0) + 1; return a; }, {});
const sortDesc = o => Object.entries(o).sort((a, b) => b[1] - a[1]);

/* ---- inventory: three states, counted separately. `not_found` is NOT absence. */
const inventory = ITEMS.map(label => {
  const c = { label, present: 0, absent: 0, unknown: 0 };
  for (const cr of creators) {
    const s = cr.inv[label];
    if (s === 'present') c.present++;
    else if (s === 'verified_absent') c.absent++;
    else if (s === 'not_found') c.unknown++;
  }
  return c;
}).filter(c => c.present + c.absent + c.unknown > 0);

/* ---- gaps that travel together */
const pairs = {};
for (const cr of creators) {
  const miss = ITEMS.filter(i => cr.inv[i] === 'verified_absent');
  for (let i = 0; i < miss.length; i++)
    for (let j = i + 1; j < miss.length; j++)
      pairs[miss[i] + ' + ' + miss[j]] = (pairs[miss[i] + ' + ' + miss[j]] || 0) + 1;
}

/* ---- audience's own words, deduped: the same comment is quoted once per signal */
const seen = new Set();
const asks = [];
for (const cr of creators) for (const s of cr.demand) {
  const k = cr.id + '|' + s.q;
  if (seen.has(k)) continue;
  seen.add(k);
  asks.push({ id: cr.id, at: s.at, q: s.q });
}

const out = {
  builtFrom: 'engine/data — ' + files.length + ' files',
  creators: creators.length,
  days: sortDesc(tally(creators, c => c.day)).sort((a, b) => a[0] < b[0] ? -1 : 1),
  totals: {
    observations: creators.reduce((a, c) => a + c.observations, 0),
    comments: creators.reduce((a, c) => a + c.comments, 0),
    checks: creators.reduce((a, c) => a + c.checks, 0),
    escalated: creators.filter(c => c.escalated).length,
    drop: creators.filter(c => c.drop).length
  },
  fit: tally(creators, c => c.fit),
  trajectory: tally(creators, c => c.trajectory),
  platforms: sortDesc(tally(creators.flatMap(c => c.surfaces.map(s => ({ s }))), x => x.s)),
  inventory,
  pairs: sortDesc(pairs).slice(0, 10),
  /* Tallied off the DEDUPED asks. The engine records one signal per scoring
     pass, so the same comment appears up to five times under one creator;
     counting the raw signals would put the shares over 100%. */
  demandPointsAt: sortDesc(tally(asks, a => a.at)),
  pressure: sortDesc(tally(creators.flatMap(c => c.pressure), p => p.signal)),
  asks: asks.filter(a => a.at !== 'unspecified').concat(asks.filter(a => a.at === 'unspecified')).slice(0, 40),
  askCount: asks.length,
  briefs: sortDesc(tally(creators, c => c.brief)),
  rows: creators.sort((a, b) => b.score - a.score)
};

fs.writeFileSync(path.join(HERE, 'trends-data.js'), 'window.TRENDS = ' + JSON.stringify(out, null, 1) + ';\n');
console.log('creators', out.creators, '· days', out.days, '· asks', out.askCount);
console.log('inventory', out.inventory.map(i => `${i.label} ${i.present}/${i.absent}/${i.unknown}`).join(' | '));
console.log('platforms', out.platforms);
console.log('pressure', out.pressure, 'demand', out.demandPointsAt);
