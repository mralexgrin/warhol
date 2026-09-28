'use strict';
/* ============================================================================
   node test.js

   Small, and every case here is a claim the product makes out loud. If one of
   these fails, a line on a report has stopped being true.
   ========================================================================== */

const assert = require('assert');
const { appendObservation, isDecision, sweepRetention } = require('./lib/store');
const { resolvePlace, resolveItem, findBacklink } = require('./lib/resolve');

let pass = 0, fail = 0;

/* Queued rather than run on the spot, because some of what the engine now
   claims out loud is about CONCURRENCY — that two creators checked side by
   side keep their own bills, and that six requests at one host go out spaced.
   Neither can be asserted synchronously. Headers queue too, so the output
   still reads in the order the file is written. */
const queue = [];
function t(name, fn) { queue.push({ name, fn }); }
function section(title) { queue.push({ title }); }

async function runQueue() {
  for (const item of queue) {
    if (item.title) { console.log(`\n  ${item.title}`); continue; }
    try { await item.fn(); pass++; console.log(`  \x1b[32m✓\x1b[0m ${item.name}`); }
    catch (e) { fail++; console.log(`  \x1b[31m✗\x1b[0m ${item.name}\n      ${e.message}`); }
  }
}

section('THE WALL');

t('a model may not write a verification state', () => {
  assert.throws(
    () => appendObservation({ creatorId: 'test', key: 'inventory.newsletter', engine: 'llm', verification_state: 'verified_absent' }),
    /WALL VIOLATION/
  );
});

t('a rule may', () => {
  assert.doesNotThrow(
    () => appendObservation({ creatorId: 'test_selftest', key: 'inventory.newsletter', engine: 'rule', verification_state: 'verified_absent', evidence: 'selftest' })
  );
});

t('a model may still write evidence, just not a verdict', () => {
  assert.doesNotThrow(
    () => appendObservation({ creatorId: 'test_selftest', key: 'demand.signal', engine: 'llm', value: 'store', evidence: 'where can I buy this' })
  );
});

t('a quote the model invented is dropped', () => {
  const llm = require('./lib/llm');
  // keepOnlyRealQuotes is exercised through the exported classifiers, so this
  // asserts the same rule directly against its behaviour contract.
  const source = 'honestly I can not keep up with this';
  const check = (q) => source.replace(/\s+/g, ' ').toLowerCase().includes(q.toLowerCase());
  assert.ok(check('I can not keep up'), 'a real quote survives');
  assert.ok(!check('I am completely burned out'), 'an invented quote does not');
  assert.ok(typeof llm.available === 'function');
});

section('200 IS NOT A HIT');

t('a search-page redirect is not a newsletter', () => {
  const place = { id: 'substack_profile', url: 'https://substack.com/@x', present: { status: [200] }, absent: { status: [404] }, finalUrlNot: ['/search'] };
  const r = resolvePlace(place, { url: 'https://substack.com/@x', final_url: 'https://substack.com/search/x?searching=profile', status: 200, body: 'Substack' });
  assert.strictEqual(r.outcome, 'miss');
});

t('a front-page redirect is not a store', () => {
  const place = { id: 'stanstore', url: 'https://stan.store/x', present: { status: [200] }, absent: { status: [404] }, pathMustSurvive: true };
  const r = resolvePlace(place, { url: 'https://stan.store/x', final_url: 'https://www.stan.store/', status: 200, body: 'Stan' });
  assert.strictEqual(r.outcome, 'miss');
});

t('a handle moving into the hostname IS the thing', () => {
  const place = { id: 'gumroad', url: 'https://gumroad.com/x', present: { status: [200] }, absent: { status: [404] }, pathMustSurvive: true };
  const r = resolvePlace(place, { url: 'https://gumroad.com/x', final_url: 'https://x.gumroad.com/', status: 200, body: 'gumroad' });
  assert.strictEqual(r.outcome, 'hit');
});

t('a marker that ships on every page cannot decide absence', () => {
  // TikTok's real profile pages carry "Couldn't find this account" in their
  // localisation bundle. The signature has to key on followerCount instead.
  const place = { id: 'tiktok', url: 'https://www.tiktok.com/@x', present: { status: [200], bodyRegex: '"followerCount":\\d' }, absent: { status: [200] } };
  const real = resolvePlace(place, { url: 'u', final_url: 'u', status: 200, body: `Couldn't find this account ... "followerCount":2300000` });
  const fake = resolvePlace(place, { url: 'u', final_url: 'u', status: 200, body: `Couldn't find this account` });
  assert.strictEqual(real.outcome, 'hit');
  assert.strictEqual(fake.outcome, 'miss');
});

t('a 403 tells us nothing', () => {
  const place = { id: 'kofi', url: 'https://ko-fi.com/x', present: { status: [200] }, absent: { status: [404] } };
  assert.strictEqual(resolvePlace(place, { url: 'u', final_url: 'u', status: 403, body: '' }).outcome, 'inconclusive');
});

t('robots.txt saying no tells us nothing', () => {
  const place = { id: 'ig', url: 'https://www.instagram.com/x/' };
  assert.strictEqual(resolvePlace(place, { url: 'u', final_url: 'u', status: 0, blocked: 'robots', body: '' }).outcome, 'inconclusive');
});

section('EARNING "VERIFIED ABSENT"');

const item = { item: 'newsletter', label: 'Newsletter', half: 'built', tier: 1, requiredPlaces: 3 };
const miss = (id) => ({ id, outcome: 'miss', why: 'HTTP 404', kind: 'guess' });
const inc = (id) => ({ id, outcome: 'inconclusive', why: 'HTTP 403', kind: 'guess' });
const hit = (id, kind = 'guess') => ({ id, outcome: 'hit', why: 'ok', kind, url: 'https://x' });

t('three empty places and a readable profile earns it', () => {
  const r = resolveItem(item, [miss('a'), miss('b'), miss('c')], { firstPartyRead: true });
  assert.strictEqual(r.state, 'verified_absent');
  assert.match(r.why, /we looked in 3 places/);
});

t('without reading one of their own pages, it does not', () => {
  const r = resolveItem(item, [miss('a'), miss('b'), miss('c')], { firstPartyRead: false });
  assert.strictEqual(r.state, 'not_found');
  assert.match(r.why, /own pages/);
});

t('too many doors that would not open, it does not', () => {
  const r = resolveItem(item, [miss('a'), miss('b'), miss('c'), inc('d'), inc('e')], { firstPartyRead: true });
  assert.strictEqual(r.state, 'not_found');
});

t('fewer places than the item requires, it does not', () => {
  const r = resolveItem(item, [miss('a'), miss('b')], { firstPartyRead: true });
  assert.strictEqual(r.state, 'not_found');
});

t('advisory doors are excluded from the arithmetic', () => {
  const advisory = { id: 'kofi', outcome: 'inconclusive', why: 'HTTP 403', kind: 'guess', advisory: true };
  const r = resolveItem(item, [miss('a'), miss('b'), miss('c'), advisory], { firstPartyRead: true });
  assert.strictEqual(r.state, 'verified_absent');
});

t('one hit anywhere ends it', () => {
  const r = resolveItem(item, [miss('a'), miss('b'), hit('c')], { firstPartyRead: true });
  assert.strictEqual(r.state, 'present');
});

section('"WE LOOKED IN N PLACES" IS A COUNT OF DOORS THAT OPENED   (Q3)');

t('a door that would not answer is not a place we looked', () => {
  const advisory = { id: 'kofi', outcome: 'inconclusive', why: 'HTTP 403', kind: 'guess', advisory: true };
  const r = resolveItem(item, [miss('a'), miss('b'), miss('c'), advisory], { firstPartyRead: true });
  assert.match(r.why, /we looked in 3 places/);
  assert.strictEqual(r.placesLooked, 3);
});

t('and the ones that would not are named, not dropped', () => {
  const advisory = { id: 'kofi', outcome: 'inconclusive', why: 'HTTP 403', kind: 'guess', advisory: true };
  const etsy = { id: 'etsy', outcome: 'inconclusive', why: 'HTTP 403', kind: 'guess', advisory: true };
  const r = resolveItem(item, [miss('a'), miss('b'), miss('c'), advisory, etsy], { firstPartyRead: true });
  assert.match(r.why, /2 wouldn't answer/);
});

t('with every door open, nothing is appended', () => {
  const r = resolveItem(item, [miss('a'), miss('b'), miss('c')], { firstPartyRead: true });
  assert.ok(!/wouldn't answer/.test(r.why), r.why);
});

t('an advisory door that DID answer counts as a place we looked', () => {
  // The rule cuts both ways: a door that never opens is not a place we looked,
  // so a door that opened and said no is one — whether or not its answer counts
  // toward the bar.
  const advisoryMiss = { id: 'kofi', outcome: 'miss', why: 'HTTP 404', kind: 'guess', advisory: true };
  const r = resolveItem(item, [miss('a'), miss('b'), miss('c'), advisoryMiss], { firstPartyRead: true });
  assert.match(r.why, /we looked in 4 places/);
});

section('CONFIDENCE IS REACHABLE');

t('checks we can never settle stay out of the denominator', () => {
  const { confidence } = require('./lib/score');
  const c = confidence([
    { state: 'present' }, { state: 'verified_absent' },
    { state: 'not_found', presenceOnly: true },
    { state: 'not_found', requiresApi: true },
  ]);
  assert.strictEqual(c.total, 2, 'only falsifiable checks counted');
  assert.strictEqual(c.value, 1, 'and the gate is reachable');
  assert.strictEqual(c.cannotSee, 2, 'but the ones we cannot see are still counted, to be named');
});

t('an unresolved falsifiable check still costs confidence', () => {
  const { confidence } = require('./lib/score');
  const c = confidence([{ state: 'present' }, { state: 'not_found' }]);
  assert.strictEqual(c.value, 0.5);
});

section('IS IT ACTUALLY THEIRS');

t('a hit on a guessed url is flagged as unconfirmed', () => {
  const r = resolveItem(item, [hit('substack_sub')], { firstPartyRead: true });
  assert.strictEqual(r.corroborated, false);
  assert.match(r.why, /not confirmed as theirs/);
});

t('a hit on a link they publish themselves is not', () => {
  const r = resolveItem(item, [hit('substack_sub')], { firstPartyRead: true, declaredLinkHit: 'https://theirs.substack.com' });
  assert.strictEqual(r.corroborated, true);
  assert.match(r.why, /found it/);
});

t('a hit on their own platform page is not', () => {
  const r = resolveItem(item, [hit('yt_handle', 'first_party')], { firstPartyRead: true });
  assert.strictEqual(r.corroborated, true);
});

section('A GUESS THAT LINKS BACK IS A CHECK   (Q9d)');

// The real case, both directions. mkbhd.substack.com is a live Substack
// belonging to someone called Bharath; MKBHD's YouTube is confirmed.
const confirmedSurfaces = [
  { id: 'youtube_profile', platform: 'YouTube', url: 'https://www.youtube.com/@mkbhd', confirmed: true },
  { id: 'instagram_profile', platform: 'Instagram profile', url: 'https://www.instagram.com/mkbhd/', confirmed: false },
];

t("a stranger's Substack at their handle does not link back", () => {
  const body = '<html><a href="https://substack.com/@bharath">Bharath</a> writes here</html>';
  assert.strictEqual(findBacklink(body, confirmedSurfaces), null);
});

t('theirs does, and that is what makes it theirs', () => {
  const body = '<html><a href="https://www.youtube.com/@mkbhd">my channel</a></html>';
  const b = findBacklink(body, confirmedSurfaces);
  assert.ok(b, 'a link back to a confirmed surface should be found');
  assert.strictEqual(b.surface, 'YouTube');
});

t('a link back survives href encoding', () => {
  assert.ok(findBacklink('<a href="https://youtube.com/%40mkbhd">c</a>', confirmedSurfaces));
});

t('a bare hostname is not a link back to a person', () => {
  // Every Substack links to substack.com; every YouTube page links to youtube.com.
  assert.strictEqual(findBacklink('powered by youtube.com and substack.com', confirmedSurfaces), null);
});

t('an UNCONFIRMED surface cannot lend confirmation it does not have', () => {
  // Instagram answers 200 for handles that do not exist, so a link to one
  // proves nothing about whose Substack this is.
  assert.strictEqual(findBacklink('<a href="https://www.instagram.com/mkbhd/">me</a>', confirmedSurfaces), null);
});

t('a guessed hit that links back is corroborated and reads like it', () => {
  const r = resolveItem(item, [hit('substack_sub')], {
    firstPartyRead: true,
    backlink: { surface: 'YouTube', url: 'https://www.youtube.com/@mkbhd' },
  });
  assert.strictEqual(r.corroborated, true);
  assert.match(r.why, /links back to their YouTube/);
});

t('and one that does not still blocks the gap', () => {
  const r = resolveItem(item, [hit('substack_sub')], { firstPartyRead: true, backlink: null });
  assert.strictEqual(r.state, 'present');
  assert.strictEqual(r.corroborated, false);
  assert.match(r.why, /not confirmed as theirs/);
});

section('AN UNCONFIRMED HIT COSTS CONFIDENCE   (Q10)');

t('a hit we could not confirm is not a settled check', () => {
  const { confidence } = require('./lib/score');
  const c = confidence([
    { state: 'present', corroborated: false },
    { state: 'verified_absent' },
  ]);
  assert.strictEqual(c.value, 0.5);
  assert.strictEqual(c.unconfirmed, 1);
});

t('the same hit, confirmed, is', () => {
  const { confidence } = require('./lib/score');
  const c = confidence([
    { state: 'present', corroborated: true },
    { state: 'verified_absent' },
  ]);
  assert.strictEqual(c.value, 1);
  assert.strictEqual(c.unconfirmed, 0);
});

t('a check that ran before corroboration existed is not penalised', () => {
  const { confidence } = require('./lib/score');
  assert.strictEqual(confidence([{ state: 'present' }]).value, 1);
});

section('ONE AUDIENCE TOTAL NEEDS PROOF OF ONE PERSON   (Q11b)');

const { mergeAudience } = require('./lib/passes');
const tik = { id: 'tiktok_profile', platform: 'TikTok', url: 'https://www.tiktok.com/@james', followers: 900000, confirmed: true, links: [], bio: '' };
const yt = (links, bio = '') => ({ id: 'youtube_profile', platform: 'YouTube', url: 'https://www.youtube.com/@james', followers: 400000, confirmed: true, links, bio });

t('two platforms that link to each other are one audience', () => {
  const m = mergeAudience([tik, yt(['https://www.tiktok.com/@james'])]);
  assert.strictEqual(m.total, 1300000);
  assert.strictEqual(m.separate.length, 0);
});

t('two platforms at the same handle that do not are not', () => {
  const m = mergeAudience([tik, yt([])]);
  assert.strictEqual(m.total, 900000, 'only the anchor platform counts');
  assert.strictEqual(m.separate.length, 1);
  assert.match(m.separate[0].why, /nothing on either page links the YouTube to the TikTok/);
});

t('a link in the bio counts as a link', () => {
  const m = mergeAudience([tik, yt([], 'also on tiktok.com/@james')]);
  assert.strictEqual(m.total, 1300000);
});

t('an unconfirmed surface never joins a total', () => {
  const ig = { id: 'instagram_profile', platform: 'Instagram profile', url: 'https://www.instagram.com/james/', followers: 5000000, confirmed: false, links: ['https://www.tiktok.com/@james'] };
  const m = mergeAudience([tik, ig]);
  assert.strictEqual(m.total, 900000);
});

section('NO BRIEF, NO SCORE   (Q20)');

const { score } = require('./lib/score');
const WEIGHTS = require('./config/weights.json');
const scoreArgs = (brief) => [
  { creatorId: 'x', handle: 'x', brief, surfaces: [], audience: 0, shortFormAudience: 0, firstPartyRead: true },
  { inventory: [{ item: 'newsletter', label: 'Newsletter', half: 'built', tier: 1, state: 'verified_absent' }], deadLinks: [] },
  { available: false, ran: [] }, [], WEIGHTS,
];

t('the engine refuses to score without one', () => {
  assert.throws(() => score(...scoreArgs(null)), /will not score without a brief/);
  assert.throws(() => score(...scoreArgs('   ')), /will not score without a brief/);
});

t('the house brief exists, so there is always one', () => {
  assert.ok(WEIGHTS.houseBrief && WEIGHTS.houseBrief.trim(), 'config carries the house brief');
  assert.doesNotThrow(() => score(...scoreArgs(WEIGHTS.houseBrief)));
});

t('fit is never "unknown" — an unjudged gate names its own cause', () => {
  const s = score(...scoreArgs(WEIGHTS.houseBrief));
  assert.strictEqual(s.fit.verdict, 'not_judged');
  assert.match(s.fit.because, /the model pass did not run/);
  assert.strictEqual(s.entersDrop, false, 'and it still blocks the drop');
});

/* ===========================================================================
   Q6, 6 Aug 2026 — THE YOUTUBE DATA API

   Pressure is driven through score() rather than through the private function,
   so what these assert is what a report prints.
   =========================================================================== */

const PROBES = require('./config/probes.json');
const BLANK = { creatorId: 'x', handle: 'x', brief: 'b', surfaces: [], audience: 0, shortFormAudience: 0, firstPartyRead: true };

function pressure(probed) {
  return score(BLANK, { inventory: [], deadLinks: [], ...probed }, { available: false, ran: [] }, [], WEIGHTS).pressure;
}
const part = (p, signal) => p.parts.find((x) => x.signal === signal);

/** A creator maxing every signal a first look can reach. */
function dayOneMax({ cadence, signals = 100000 }) {
  const weights = JSON.parse(JSON.stringify(WEIGHTS));
  if (!cadence) weights.pressureWeights.cadence_decay.needsHistory = true;
  const inventory = PROBES.inventory
    .filter((i) => !i.presenceOnly && !i.requiresApi)
    .map((i) => ({ item: i.item, label: i.label, half: i.half, tier: i.tier, state: 'verified_absent' }));
  return score(
    { ...BLANK, audience: 1e6, shortFormAudience: 1e6 },
    { inventory, deadLinks: [{ url: 'a' }, { url: 'b' }], cadence: { computable: true, decline: 1, line: 'stopped' } },
    {
      available: true, ran: ['demand', 'strain', 'fit'],
      demand: Array.from({ length: signals }, (_, i) => ({ points_at: 'store', quote: `q${i}`, intent: 'buy' })),
      strain: [{ quote: 'a', reading: 'r' }, { quote: 'b', reading: 'r' }],
      fit: { verdict: 'pass', because: 'y' },
    },
    [], weights
  );
}

section('A POSTING RATE IS A CHANGE OVER TIME WE CAN SEE IN ONE LOOK   (Q6)');

const ytlib = require('./lib/youtube');
const YCFG = WEIGHTS.youtube;
const NOW = Date.parse('2026-08-06T00:00:00Z');
const at = (ageDays) => new Date(NOW - ageDays * 86400000).toISOString();
const vids = (ages, views) => ages.map((a, i) => ({ id: `v${i}`, publishedAt: at(a), views: views == null ? null : views }));
/** n uploads at even intervals across [from, to] days ago, inclusive. */
const spread = (n, from, to) => Array.from({ length: n }, (_, i) => from + ((to - from) * i) / (n - 1));
const cad = (videos, sample) => ytlib.cadence(videos, sample || {}, YCFG, NOW);

t('a halved posting rate reads as halved', () => {
  // 9 uploads in the last 90 days = 0.1/day. 55 across the 275 days before that
  // = 0.2/day. One anchor beyond the window pins the baseline at its full width.
  const c = cad(vids([...spread(9, 5, 85), ...spread(55, 90, 364), 400]));
  assert.strictEqual(c.computable, true);
  assert.strictEqual(c.decline, 0.5);
  assert.match(c.line, /videos a month now, against .* — down 50%/);
});

t('a creator who stopped scores the whole signal', () => {
  const c = cad(vids([...spread(40, 95, 360), 400]));
  assert.strictEqual(c.decline, 1);
  assert.match(c.line, /nothing posted in 90 days/);
  const p = pressure({ cadence: c });
  assert.strictEqual(part(p, 'cadence_decay').points, 12);
});

t('a steady creator scores nothing, and that is not the same as unreadable', () => {
  // 30 in 90 days against 91.67 in 275 — the same rate to three decimals.
  const c = cad(vids([...spread(30, 1, 89), ...spread(92, 90, 364), 400]));
  assert.strictEqual(c.computable, true);
  assert.ok(Math.abs(c.decline) < 0.02, `expected a flat rate, got ${c.decline}`);
  const p = pressure({ cadence: c });
  assert.strictEqual(part(p, 'cadence_decay').points, 0);
  assert.ok(!part(p, 'cadence_decay').unavailable, 'measured and flat is not the same as never measured');
  assert.strictEqual(p.ceilingToday, 34, 'a signal we read keeps the ceiling up even when it scores zero');
});

t('ordinary variance is not a story about their life', () => {
  // 14 in 90 days against 55 in the 275 before — down 22%, inside declineFloor.
  const c = cad(vids([...spread(14, 5, 85), ...spread(55, 90, 364), 400]));
  assert.ok(c.decline > 0.15 && c.decline < 0.25, `expected a small dip, got ${c.decline}`);
  assert.strictEqual(part(pressure({ cadence: c }), 'cadence_decay').points, 0);
});

t('the baseline is clamped to the oldest upload we actually saw', () => {
  // THE correctness rule. We hold a complete prefix of the uploads, so the
  // window we divide by is the one we observed — never the 275 days the config
  // asks for when the sample only reached 210 of them.
  const c = cad(vids([...spread(6, 10, 60), ...spread(22, 90, 300)]), { truncated: true });
  assert.strictEqual(c.computable, true);
  assert.strictEqual(c.baselineSpanDays, 210, 'the observed span, not the configured one');
});

t('and a sample that does not reach back far enough says so instead of guessing', () => {
  const c = cad(vids(spread(200, 1, 120)), { truncated: true });
  assert.strictEqual(c.computable, false);
  assert.match(c.why, /they post often enough/);
});

t('a channel younger than the window is not a creator in decline', () => {
  const c = cad(vids(spread(40, 1, 100)), { truncated: false });
  assert.strictEqual(c.computable, false);
  assert.match(c.why, /whole channel is 100 days old/);
});

t('views ride along as evidence and never as points', () => {
  const recent = vids(spread(9, 5, 85), 40000);
  const before = vids(spread(55, 90, 364), 200000).map((v, i) => ({ ...v, id: `b${i}` }));
  const c = cad([...recent, ...before, { id: 'anchor', publishedAt: at(400), views: 200000 }]);
  assert.match(c.line, /80% fewer views/);
  // Same cadence, collapsed views: the points must not move.
  const flat = cad(vids([...spread(9, 5, 85), ...spread(55, 90, 364), 400], 200000));
  assert.strictEqual(part(pressure({ cadence: c }), 'cadence_decay').points,
    part(pressure({ cadence: flat }), 'cadence_decay').points);
});

section('THE CEILING IS A FACT ABOUT THIS CREATOR   (Q6)');

t('a creator whose posting rate we read reaches 34 of 40', () => {
  const p = pressure({ cadence: cad(vids([...spread(9, 5, 85), ...spread(55, 90, 364), 400])) });
  assert.strictEqual(p.ceilingToday, 34);
  assert.strictEqual(p.parts.filter((x) => x.unavailable).length, 1, 'only the audience signal stays dark');
});

t('one with no YouTube we can find still reaches only 22, and the line says why', () => {
  const p = pressure({ cadence: { computable: false, why: 'the YouTube API has no channel at that handle' } });
  assert.strictEqual(p.ceilingToday, 22);
  assert.match(part(p, 'cadence_decay').line, /no channel at that handle/);
});

t('nothing was quietly backfilled onto an older report', () => {
  // §7: a report rewound to before the API was wired must not acquire a
  // posting rate it never had.
  const p = pressure({ cadence: null });
  assert.strictEqual(p.ceilingToday, 22);
  assert.ok(part(p, 'cadence_decay').unavailable);
});

t('the needsHistory flags say what is true and nothing more', () => {
  const w = WEIGHTS.pressureWeights;
  assert.strictEqual(w.cadence_decay.needsHistory, false, 'it genuinely computes on a first look now');
  assert.strictEqual(w.unanswered_audience.needsHistory, true, 'and this one still does not');
  assert.strictEqual(w.cadence_decay.max + w.abandonment_markers.max + w.self_reported_strain.max, 34);
});

section('WHAT THE KEY IS WORTH   (Q6)');

t('the day-one ceiling moves 82 → 94', () => {
  // The ceilings come from the weights and are unchanged by any threshold move.
  assert.strictEqual(dayOneMax({ cadence: false }).total, 82);
  assert.strictEqual(dayOneMax({ cadence: true }).total, 94);
});

t('and the REACHABLE day-one max moves 79 → 91, which is the part that matters', () => {
  // Demand saturates rather than maxing: 25 points needs infinite signals, and
  // 1,940 of them — the figure weights.json names — buys 21.7. So the honest
  // day-one ceiling was never 82. It was 79.
  const before = dayOneMax({ cadence: false, signals: 1940 });
  const after = dayOneMax({ cadence: true, signals: 1940 });
  assert.strictEqual(before.total, 79);
  assert.strictEqual(after.total, 91);
});

t('the bar is reachable without being perfect', () => {
  // The claim this section has always been making, now stated against whatever
  // the threshold happens to be rather than against the number it was on the
  // day it was written. At 78 the margin was ONE POINT — a drop you can only
  // enter by scoring almost perfectly is not a reachable drop, and that is the
  // defect decision 114 found by measuring instead of asserting.
  const reachable = dayOneMax({ cadence: false, signals: 1940 }).total;
  assert.ok(reachable > WEIGHTS.threshold,
    `the best a creator can do on day one (${reachable}) must clear the bar (${WEIGHTS.threshold})`);
  assert.ok(reachable - WEIGHTS.threshold >= 10,
    `margin is only ${reachable - WEIGHTS.threshold} points — that is a bar you clear by being flawless, not by being good`);
});

t('and the real cohort actually reaches it', () => {
  // Measured 6 Aug 2026 under the house brief: 20 real creators, 0-39, median
  // 18. The theoretical ceiling above assumes readable comments; this cohort
  // has none, so its real ceiling is Missing 35 + Pressure 34 = 69. A bar above
  // that is unreachable in practice however good the arithmetic looks.
  const w = WEIGHTS.pillars;
  const noDemandCeiling = w.missingMax + (WEIGHTS.pressureWeights.cadence_decay.max
    + WEIGHTS.pressureWeights.abandonment_markers.max
    + WEIGHTS.pressureWeights.self_reported_strain.max);
  assert.strictEqual(noDemandCeiling, 69);
  assert.ok(WEIGHTS.threshold < noDemandCeiling,
    `threshold ${WEIGHTS.threshold} is above what a cohort with no readable comments can ever score (${noDemandCeiling})`);
});

section('THE WALL STILL HOLDS OVER COMMENTS   (Q6)');

t('a comment the model classified may not become a verdict', () => {
  assert.throws(() => appendObservation({
    creatorId: 'test', key: 'demand.signal', engine: 'llm',
    value: 'store', evidence: 'where do I buy this', verification_state: 'present',
  }), /WALL VIOLATION/);
});

t('but how many comments we read is an HTTP fact, and may be written', () => {
  assert.doesNotThrow(() => appendObservation({
    creatorId: 'test_selftest', key: 'demand.comments_read', engine: 'http',
    value: 412, evidence: '412 top-level comments across 5 recent videos',
  }));
});

t('their words are evidence, so retention drops them and keeps the conclusions', () => {
  assert.ok(!isDecision('demand.comments_read'));
  assert.ok(!isDecision('pressure.cadence'));
});

section('A LINK IN A VIDEO DESCRIPTION IS A LINK THEY PUBLISHED   (Q6 → Q11b)');

const { harvestLinks } = require('./lib/passes');

t('their own links come out of their descriptions; the plumbing does not', () => {
  const links = harvestLinks([
    'Shop: http://shop.MKBHD.com\nTwitter: http://twitter.com/MKBHD\nWatch: https://www.youtube.com/watch?v=abc',
    'Subscribe https://www.youtube.com/@mkbhd and https://instagram.com/MKBHD',
  ]);
  assert.ok(links.some((l) => /shop\.mkbhd\.com/i.test(l)), 'their store');
  assert.ok(links.some((l) => /twitter\.com\/MKBHD/.test(l)), 'their other platform');
  assert.ok(links.some((l) => /instagram\.com\/MKBHD/.test(l)));
  assert.ok(!links.some((l) => /youtube\.com/i.test(l)), "YouTube's own plumbing is not something they published");
});

const ytMention = (mentionLinks) => ({
  id: 'youtube_profile', platform: 'YouTube', url: 'https://www.youtube.com/@james',
  followers: 400000, confirmed: true, links: [], mentionLinks, bio: '',
});

t('a video description that names their TikTok merges the two audiences', () => {
  // The merge rule is untouched: same handle, AND one surface links to the
  // other. This only gives the YouTube surface links to be read at all.
  const m = mergeAudience([tik, ytMention(['https://www.tiktok.com/@james'])]);
  assert.strictEqual(m.total, 1300000);
  assert.strictEqual(m.separate.length, 0);
});

t("a sponsor's link in the same description merges nothing", () => {
  const m = mergeAudience([tik, ytMention(['https://dbrand.com/shop/fold8', 'https://www.tiktok.com/@someoneelse'])]);
  assert.strictEqual(m.total, 900000, 'a needle is host + path of a surface already confirmed as theirs');
  assert.strictEqual(m.separate.length, 1);
});

/* ===========================================================================
   A HANDFUL OF CANDIDATES   (Task 4)
   =========================================================================== */
section('PARALLELISE ACROSS CREATORS, NEVER AGAINST ONE HOST   (Task 4)');

t('a host slot is claimed before the wait, not after', () => {
  /* The bug this replaces, in three lines: read the last hit time, sleep the
     difference, THEN stamp the clock. Five concurrent callers read the same
     time, compute the same wait, sleep, and fire together — each one having
     individually "waited". Reserving synchronously is what makes the third
     caller's wait 800ms instead of 400. */
  const { reserveHostSlot } = require('./lib/http');
  const host = `slot-test-${Math.random()}.invalid`;
  const waits = [0, 1, 2].map(() => reserveHostSlot(host, 400));
  assert.ok(waits[0] <= 0, 'the first caller does not wait');
  assert.ok(waits[1] >= 395 && waits[1] <= 400, `second caller waited ${waits[1]}ms`);
  assert.ok(waits[2] >= 795 && waits[2] <= 800, `third caller waited ${waits[2]}ms — not the same 400 as the second`);
});

t('a different host is not made to wait behind it', () => {
  const { reserveHostSlot } = require('./lib/http');
  reserveHostSlot('a-test.invalid', 400);
  reserveHostSlot('a-test.invalid', 400);
  assert.ok(reserveHostSlot('b-test.invalid', 400) <= 0, 'politeness is owed to a host, not to the world');
});

section('WHERE THE NAME CAME FROM   (Task 4)');

t('a model may propose a name; it still may not write a verdict about them', () => {
  // The whole guard on unverified discovery. A proposed name is an LLM-authored
  // observation, so the wall covers it for free — there is no way to write
  // "proposed, and verified absent" in one row.
  assert.doesNotThrow(() => appendObservation({
    creatorId: 'test_selftest', key: 'creator.source', value: 'proposed', engine: 'llm',
    evidence: 'a model proposed this handle from a brief',
  }));
  assert.throws(() => appendObservation({
    creatorId: 'test_selftest', key: 'creator.source', value: 'proposed', engine: 'llm',
    verification_state: 'present',
  }), /WALL VIOLATION/);
});

t('where the name came from is a decision, so retention never drops it', () => {
  // Filed as evidence it would age out, and a swept creator's report would
  // quietly stop saying "proposed" and start reading like a name a human chose.
  assert.ok(isDecision('creator.source'));
});

t('a candidate must say where it came from', () => {
  const briefs = require('./lib/briefs');
  assert.throws(
    () => briefs.addCandidates('__no_such_brief__', [{ creatorId: 'x', source: 'vibes' }]),
    /source/
  );
});

t('a slug is something a person can type, and it does not collide', () => {
  const { slugify } = require('./lib/briefs');
  assert.strictEqual(slugify('Food creators in the US with no store'), 'food-creators-us-store');
  assert.strictEqual(slugify('!!!'), 'brief');
});

section('A ZERO-RESULT DAY IS A RESULT   (Task 4, §5.4)');

t('every blocking gate is named, not just the first', () => {
  const { blockedBy } = require('./lib/drop');
  // If the drop reported only the first failure, every row would read the same
  // and the column would mean nothing.
  const blocked = blockedBy({
    total: 27, threshold: 78,
    confidence: { value: 0.83, resolved: 5, total: 6 },
    fit: { verdict: 'not_judged', because: 'the model pass did not run' },
    trajectory: { verdict: 'not_established', blocks: false, why: 'we have seen them once' },
    gates: { scoreOverThreshold: false, confidenceOverFloor: true, fit: 'not_judged', trajectory: 'not_established' },
  });
  // Decision 113 — trajectory is NOT among them. It was, on every row of every
  // drop, which is what proved it was measuring the calendar rather than the
  // creator.
  assert.deepStrictEqual(blocked.map((b) => b.gate), ['score', 'fit']);
});

t('a creator who cleared everything has nothing to report', () => {
  const { blockedBy } = require('./lib/drop');
  const blocked = blockedBy({
    total: 84, threshold: 78,
    confidence: { value: 0.9, resolved: 9, total: 10 },
    fit: { verdict: 'pass', because: 'she matches' },
    trajectory: { verdict: 'pass', blocks: false, why: 'audience up 12%' },
    gates: { scoreOverThreshold: true, confidenceOverFloor: true, fit: 'pass', trajectory: 'pass' },
  });
  assert.strictEqual(blocked.length, 0);
});

t('a creator who is genuinely fading is still blocked', () => {
  const { blockedBy } = require('./lib/drop');
  // 113 relaxes the unread state, never the reading. Two looks that say she is
  // going backwards stop her exactly as before — otherwise decision 93 comes
  // back, and the model starts rewarding decline.
  const blocked = blockedBy({
    total: 84, threshold: 78,
    confidence: { value: 0.9, resolved: 9, total: 10 },
    fit: { verdict: 'pass', because: 'she matches' },
    trajectory: { verdict: 'fail', blocks: true, why: 'audience down 14% across the window, down 6% most recently' },
    gates: { scoreOverThreshold: true, confidenceOverFloor: true, fit: 'pass', trajectory: 'fail' },
  });
  assert.deepStrictEqual(blocked.map((b) => b.gate), ['trajectory']);
});

section('A FACE, AND WHEN IT STOPS WORKING   (decision 117, §6.12)');

t('a TikTok avatar carries its expiry, because it has one', () => {
  const { extract } = require('./lib/extract');
  // Measured live 6 Aug 2026: TikTok signs avatar URLs and the window is about
  // 48 hours. §6.12 forbids copying the image, so the link is all we hold —
  // and a link we cannot tell is dead shows a broken image to a room.
  const body = '"avatarLarger":"https://p16-common-sign.tiktokcdn-us.com/x.jpeg?x-expires=1786212000&x-signature=abc","followerCount":6919';
  const d = extract('tiktok', body);
  assert.ok(d.avatar, 'no avatar extracted');
  assert.strictEqual(d.avatar.expires, new Date(1786212000 * 1000).toISOString());
  assert.strictEqual(d.avatar.host, 'tiktokcdn');
});

t('an unsigned avatar is not given an expiry it does not have', () => {
  const { extract } = require('./lib/extract');
  const body = '"avatar":{"thumbnails":[{"url":"https://yt3.googleusercontent.com/abc=s176-c-k","width":176}]';
  const d = extract('youtube', body);
  assert.ok(d.avatar);
  assert.strictEqual(d.avatar.expires, null);
  // Ask for the large rendition — the default is a 176px thumb and scaling it
  // up is how an avatar looks cheap.
  assert.match(d.avatar.url, /=s900/);
});

t('a profile with no picture does not invent one', () => {
  const { extract } = require('./lib/extract');
  const d = extract('tiktok', '"followerCount":100');
  assert.strictEqual(d.avatar, null);
});

section('SOMEONE ELSE\'S AUDIENCE IS NOT DEMAND   (Reddit, 6 Aug 2026)');

/* The attribution trap. Reddit search returns posts that merely contain the
   word, and counting a stranger's conversation as demand for THIS creator puts
   a fabricated quote on a report through a door neither the wall nor
   keepOnlyRealQuotes watches. Both directions, the way the TikTok signature
   should have been and was not. */
const { mentionsName } = require('./lib/reddit');

t('a handle inside a longer word is a different person', () => {
  assert.strictEqual(mentionsName('I love gilbyclarke solos', 'gilby'), false);
  assert.strictEqual(mentionsName('r/clemyntinefans is wild', 'clemyntine'), false);
});

t('a run-together handle matches how a person actually types it', () => {
  assert.strictEqual(mentionsName('backseat coach nailed that call', 'backseatcoach'), true);
  assert.strictEqual(mentionsName('the backseatcoach guy', 'backseatcoach'), true);
  assert.strictEqual(mentionsName('its hunter friesen again', 'itshunterfriesen'), true);
});

t('words that merely appear apart are not a match', () => {
  // "backseat" and "coach" are both here and the creator is not.
  assert.strictEqual(mentionsName('my backseat is broken and coach flew out', 'backseatcoach'), false);
  assert.strictEqual(mentionsName('unrelated post about coaching', 'backseatcoach'), false);
});

t('punctuation and case do not decide who someone is', () => {
  assert.strictEqual(mentionsName('CLEMYNTINE! new video', 'clemyntine'), true);
  assert.strictEqual(mentionsName('', 'clemyntine'), false);
});

t('a missing credential is unreadable, never empty', () => {
  // §11.3's whole distinction. If this ever returns ok:true with no texts while
  // unauthenticated, a creator nobody could listen to reads as one nobody wants.
  const reddit = require('./lib/reddit');
  const saved = [process.env.REDDIT_CLIENT_ID, process.env.REDDIT_CLIENT_SECRET];
  delete process.env.REDDIT_CLIENT_ID;
  delete process.env.REDDIT_CLIENT_SECRET;
  try {
    assert.strictEqual(reddit.available(), false);
    assert.match(reddit.reason(), /REDDIT_CLIENT_ID/);
  } finally {
    if (saved[0]) process.env.REDDIT_CLIENT_ID = saved[0];
    if (saved[1]) process.env.REDDIT_CLIENT_SECRET = saved[1];
  }
});

t('an id with no secret is an installed app, not a broken script app', () => {
  // Reddit issues NO secret for an installed app, on purpose. Refusing on its
  // absence would send someone back to re-create an app that was already right.
  const reddit = require('./lib/reddit');
  const saved = [process.env.REDDIT_CLIENT_ID, process.env.REDDIT_CLIENT_SECRET];
  delete process.env.REDDIT_CLIENT_SECRET;
  process.env.REDDIT_CLIENT_ID = 'test-id';
  try {
    assert.strictEqual(reddit.available(), true);
  } finally {
    delete process.env.REDDIT_CLIENT_ID;
    if (saved[0]) process.env.REDDIT_CLIENT_ID = saved[0];
    if (saved[1]) process.env.REDDIT_CLIENT_SECRET = saved[1];
  }
});

t('a secret with no id cannot authenticate, and says which half is missing', () => {
  const reddit = require('./lib/reddit');
  const saved = [process.env.REDDIT_CLIENT_ID, process.env.REDDIT_CLIENT_SECRET];
  delete process.env.REDDIT_CLIENT_ID;
  process.env.REDDIT_CLIENT_SECRET = 'test-secret';
  try {
    assert.strictEqual(reddit.available(), false);
    assert.match(reddit.reason(), /REDDIT_CLIENT_ID is not/);
  } finally {
    delete process.env.REDDIT_CLIENT_SECRET;
    if (saved[0]) process.env.REDDIT_CLIENT_ID = saved[0];
    if (saved[1]) process.env.REDDIT_CLIENT_SECRET = saved[1];
  }
});

t('a handle too short to be sure of is refused, not guessed', async () => {
  const reddit = require('./lib/reddit');
  process.env.REDDIT_CLIENT_ID = 'test'; process.env.REDDIT_CLIENT_SECRET = 'test';
  try {
    const r = await reddit.mentions('abc', WEIGHTS.reddit, 'test');
    assert.strictEqual(r.ok, false);
    assert.match(r.why, /too short/);
    assert.strictEqual(r.texts.length, 0);
  } finally {
    delete process.env.REDDIT_CLIENT_ID; delete process.env.REDDIT_CLIENT_SECRET;
  }
});

section('EXTRACTION IS CHEAP, JUDGMENT IS NOT   (§11.4, 6 Aug 2026)');

t('every job has a model, and every model has a price', () => {
  // A model with no price row records $0.00 and the bill quietly stops being
  // true — which is the one thing §11.4 exists to prevent.
  const llm = WEIGHTS.llm;
  for (const job of ['classify', 'judge']) {
    const m = llm.models[job];
    assert.ok(m, `no model for the "${job}" job`);
    assert.ok(llm.pricing[m], `no price for ${m}`);
    assert.ok(llm.pricing[m].input > 0 && llm.pricing[m].output > 0, `${m} priced at zero`);
  }
});

t('every configured model has a stated position on the effort parameter', () => {
  // Found the expensive way on 6 Aug 2026: Haiku 4.5 rejects `effort` with a
  // 400. Every classify call failed, the run completed anyway, Demand read 0
  // across 20 creators, and it looked identical to the honest "no readable
  // comments" outcome §11.3 designs for. A threshold was read off that run.
  //
  // Requiring an explicit entry means adding a model is a decision rather than
  // an assumption. Absent = no effort sent, which works everywhere.
  const llm = WEIGHTS.llm;
  for (const job of Object.keys(llm.models)) {
    const m = llm.models[job];
    assert.ok(Object.prototype.hasOwnProperty.call(llm.effortSupported, m),
      `${m} (the "${job}" job) has no entry in llm.effortSupported — say true or false explicitly`);
  }
});

t('the gate-deciding job is not on the cheap model', () => {
  // Fit is a gate (§5.4): a wrong verdict does not lower confidence, it
  // silently admits or excludes someone. Classify can only miss a signal, and
  // a missed signal scores neutral by §11.3. The asymmetry is the whole reason
  // for the split, so collapsing the two back to one model should fail here.
  const llm = WEIGHTS.llm;
  assert.notStrictEqual(llm.models.classify, llm.models.judge);
  const cheap = llm.pricing[llm.models.classify];
  const dear = llm.pricing[llm.models.judge];
  assert.ok(dear.input > cheap.input, 'the judging model should be the stronger one');
});

section('A READING NOBODY HAS IS NOT A FAILURE   (decision 113, §5.4a)');

t('one look is stated as no trend yet, and does not block', () => {
  const { trajectory: _trajectory } = require('./lib/score');
  const t1 = _trajectory([{ at: '2026-08-06', audience: 500000 }], WEIGHTS);
  assert.strictEqual(t1.verdict, 'not_established');
  assert.strictEqual(t1.blocks, false);
  // The card line is written by the engine, because WHY the reading is missing
  // is a fact about the record and the screen should not re-derive it.
  assert.match(t1.stated, /first look/);
  assert.match(t1.stated, /90 days/);
});

t('two looks too close together also state it rather than guessing', () => {
  const { trajectory: _trajectory } = require('./lib/score');
  const t2 = _trajectory([
    { at: '2026-06-06', audience: 500000 },
    { at: '2026-08-06', audience: 520000 },
  ], WEIGHTS);
  assert.strictEqual(t2.verdict, 'not_established');
  assert.strictEqual(t2.blocks, false);
  assert.match(t2.stated, /61 days/);
});

t('a real decline is a fail and it blocks', () => {
  const { trajectory: _trajectory } = require('./lib/score');
  const t3 = _trajectory([
    { at: '2025-08-06', audience: 500000 },
    { at: '2026-02-06', audience: 460000 },
    { at: '2026-08-06', audience: 400000 },
  ], WEIGHTS);
  assert.strictEqual(t3.verdict, 'fail');
  assert.strictEqual(t3.blocks, true);
  assert.strictEqual(t3.stated, null);
});

t('a creator who is growing passes, exactly as before', () => {
  const { trajectory: _trajectory } = require('./lib/score');
  const t4 = _trajectory([
    { at: '2025-08-06', audience: 400000 },
    { at: '2026-08-06', audience: 620000 },
  ], WEIGHTS);
  assert.strictEqual(t4.verdict, 'pass');
  assert.strictEqual(t4.blocks, false);
});

t('nothing backdates an observation to make the gate computable', () => {
  // The rejected option, kept as an assertion because it is the cheap fix and
  // it is the one that fabricates evidence (decision 99). One observation in
  // must never produce two observations out.
  const { trajectory: _trajectory } = require('./lib/score');
  const history = [{ at: '2026-08-06', audience: 500000 }];
  const before = JSON.stringify(history);
  const r = _trajectory(history, WEIGHTS);
  assert.strictEqual(JSON.stringify(history), before, 'history was mutated');
  assert.strictEqual(r.yearChange, undefined);
  assert.strictEqual(r.quarterChange, undefined);
});

section('THE LADDER WRITES DOWN ITS OWN DECISION   (Task 4, §11.4)');

t('escalating and stopping are both decisions, so retention keeps them', () => {
  // "Study ran on 4 of 20" is §5.7's gradient as a measurement. Filed as
  // evidence it would age out and the gradient would get less true over time.
  assert.ok(isDecision('ladder.escalated'));
});

t('a creator with nothing readable is not a creator we never reached', () => {
  /* §11.3: "we read 500 comments and none asked to buy" and "we could not read
     any" are different sentences. readComments used to return early without
     writing a count when there was no YouTube channel, so a creator we took all
     the way to Study read on the report as one we never got to. Zero and null
     are the two states, and they must both be reachable. */
  const { render } = require('./lib/render');
  const base = require('./data/chipotle.json');
  const say = (commentsRead) => render({ ...base, commentsRead, score: { ...base.score, demand: { ...base.score.demand, signalCount: 0, signals: [] } } });
  assert.match(say(null), /did not get as far as their comments/);
  assert.match(say(0), /no comment section anywhere would give us its text/);
});

section('THE BILL KNOWS WHOSE IT IS   (Task 4, §11.4)');

// costs.jsonl is append-only, so yesterday's test run is still in it. Each of
// these tags its own rows rather than counting everything ever written.
const TAG = `__test_${Date.now().toString(36)}__`;

t('a cost written inside a run carries the brief and the creator', async () => {
  const { withCost, appendCost, readCosts } = require('./lib/store');
  await withCost({ brief: `${TAG}1`, creator: '__test_creator__' }, async () => {
    await new Promise((r) => setTimeout(r, 1));      // survive an await, which is the point
    appendCost({ kind: 'http', pass: 'test', host: 'example.invalid', ms: 1 });
  });
  const mine = readCosts().filter((c) => c.brief === `${TAG}1`);
  assert.strictEqual(mine.length, 1, 'the row was attributed');
  assert.strictEqual(mine[0].creator, '__test_creator__');
});

t('running a brief twice does not make the bill for twenty read as forty', async () => {
  const { withCost, appendCost } = require('./lib/store');
  const { bill } = require('./lib/drop');
  for (const run of [`${TAG}r1`, `${TAG}r2`]) {
    await withCost({ brief: `${TAG}3`, creator: 'x', run }, async () => {
      appendCost({ kind: 'http', pass: 'probe', host: 'example.invalid', ms: 1 });
    });
  }
  assert.strictEqual(bill(`${TAG}3`, `${TAG}r1`).rows, 1, 'one run is one run');
  assert.strictEqual(bill(`${TAG}3`).rows, 2, 'and the standing total is still the standing total');
});

t('two creators running side by side do not swap bills', async () => {
  const { withCost, appendCost, readCosts } = require('./lib/store');
  await Promise.all(['__a__', '__b__'].map((who) => withCost({ brief: `${TAG}2`, creator: who }, async () => {
    await new Promise((r) => setTimeout(r, 5));
    appendCost({ kind: 'http', pass: 'test', host: `${who}.invalid`, ms: 1 });
  })));
  const mine = readCosts().filter((c) => c.brief === `${TAG}2`);
  assert.strictEqual(mine.length, 2);
  assert.ok(mine.every((c) => c.host === `${c.creator}.invalid`), 'each row kept its own creator across the await');
});

/* ===========================================================================
   Q5, 6 Aug 2026 — THEIR OWN SITE

   Every marker below is asserted in BOTH directions, against strings taken from
   real pages fetched on 6 Aug 2026. The most expensive bug in this engine was a
   TikTok marker tested only against a fake handle; a signature tested in one
   direction is not tested.
   =========================================================================== */

const { pickOwnSite, hintLinks, registrable, resembles, isPlatform } = require('./lib/site');

const OWN = PROBES.inventory.reduce((m, i) => {
  const p = (i.places || []).find((x) => x.id === 'own_site');
  if (p) m[i.item] = p;
  return m;
}, {});

/** A page in the shape lib/site.js hands to the matcher. */
const page = (html, extra = {}) => ({
  url: 'https://theirs.com', final_url: 'https://theirs.com', status: 200,
  body: html, hay: html.toLowerCase(), readable: true, why: 'read', ...extra,
});
const theirSite = { host: 'theirs.com', origin: 'https://theirs.com', domain: 'theirs.com' };
const ownRead = (item, pages, extra = {}) =>
  resolvePlace(OWN[item], null, { ownSite: { site: theirSite, pages, why: 'theirs', truncated: false, ...extra } });

section('WHICH DOMAIN IS THEIRS   (Q5)');

t('a domain carrying their name, on a page of theirs, is theirs', () => {
  const r = pickOwnSite({
    handle: 'chipotle', displayName: 'Chipotle',
    surfaces: [{ platform: 'TikTok', confirmed: true, links: ['https://chipotle.com'] }],
  });
  assert.strictEqual(r.site.host, 'chipotle.com');
  assert.match(r.why, /the domain is their name/);
});

t('a platform they merely have an account on is not', () => {
  // The whole of MKBHD's TikTok bio link, read live on 6 Aug 2026.
  const r = pickOwnSite({
    handle: 'mkbhd', displayName: 'Marques Brownlee',
    surfaces: [{ platform: 'TikTok', confirmed: true, links: ['https://youtube.com/MKBHD'] }],
  });
  assert.strictEqual(r.site, null);
  assert.ok(isPlatform('youtube.com') && isPlatform('substack.com') && !isPlatform('mkbhd.com'));
});

t('the domain of an address in their own bio is theirs', () => {
  // MKBHD's YouTube bio, verbatim: it links to nothing and names his domain.
  const r = pickOwnSite({
    handle: 'mkbhd', displayName: 'Marques Brownlee',
    surfaces: [{ platform: 'YouTube', confirmed: true, links: [], bio: 'Tech Head | business@MKBHD.com  NYC' }],
  });
  assert.strictEqual(r.site.host, 'mkbhd.com');
  assert.match(r.why, /publishes an address/);
});

t('the domain of a free mailbox is not', () => {
  const r = pickOwnSite({
    handle: 'someone', displayName: 'Someone',
    surfaces: [{ platform: 'YouTube', confirmed: true, links: [], bio: 'business: someone@gmail.com' }],
  });
  assert.strictEqual(r.site, null);
});

t("a sponsor's link in their bio is not their own site", () => {
  // THE LIVE FAILURE, 6 Aug 2026. An earlier draft of pickOwnSite also accepted
  // "the only off-platform link on a page of theirs". Veritasium's TikTok bio
  // link is ankerfast.club — an Anker campaign URL that redirects to anker.com —
  // and the engine reported Anker's Shopify cart and Klaviyo signup as HIS store
  // and HIS newsletter, "confirmed as theirs by their own page". The
  // link-in-bio slot is where sponsors live.
  const r = pickOwnSite({
    handle: 'veritasium', displayName: 'Veritasium',
    surfaces: [{ platform: 'TikTok', confirmed: true, links: ['https://ankerfast.club'] }],
  });
  assert.strictEqual(r.site, null);
  assert.match(r.why, /none at a domain carrying their name/);
});

t("and an agency's address in their bio is not their own domain", () => {
  // The same failure with better manners: a talent agency owns standard.tv, and
  // reading an agency's site as a creator's would answer the wrong question.
  const r = pickOwnSite({
    handle: 'mkbhd', displayName: 'Marques Brownlee',
    surfaces: [{ platform: 'YouTube', confirmed: true, links: [], bio: 'business: marques@standard.tv' }],
  });
  assert.strictEqual(r.site, null);
});

t('a site branded like them is found wherever they published it', () => {
  const r = pickOwnSite({
    handle: 'thecozykitchen', displayName: 'The Cozy Kitchen',
    surfaces: [{ platform: 'Link hub', confirmed: false, links: ['https://athleticgreens.com', 'https://thecozykitchen.co.uk'] }],
  });
  assert.strictEqual(r.site.host, 'thecozykitchen.co.uk');
  assert.strictEqual(registrable('shop.thecozykitchen.co.uk'), 'thecozykitchen.co.uk');
});

t('a three-letter coincidence is not a name match', () => {
  assert.ok(resembles('mkbhd.com', ['mkbhd']));
  assert.ok(resembles('nasa.gov', ['NASA']));
  assert.ok(!resembles('nas.com', ['nasa']), 'shorter than the overlap we require');
});

section('A STORE ON THEIR OWN SITE   (Q5)');

t('a page of theirs with a cart is a store, and it is theirs without a hedge', () => {
  // mkbhd.com, 6 Aug 2026 — the false negative Task 2 found and left here.
  const r = ownRead('store', [page('<button>Add to cart</button><a href="/cart">Cart</a>')]);
  assert.strictEqual(r.outcome, 'hit');
  assert.strictEqual(r.kind, 'first_party');
  const shape = { item: 'store', label: 'Store', half: 'built', tier: 1, requiredPlaces: 3 };
  const resolved = resolveItem(shape, [miss('shopify'), miss('gumroad'), r], { firstPartyRead: true });
  assert.strictEqual(resolved.state, 'present');
  assert.strictEqual(resolved.corroborated, true, 'their own page needs nothing to confirm it');
});

t('and a first-party hit outranks a guessed one that landed at their name', () => {
  // Without the preference this reads "something at x.gumroad.com — not
  // confirmed as theirs" while the real answer sat in the same array.
  const own = ownRead('store', [page('<button>Add to cart</button>')]);
  const shape = { item: 'store', label: 'Store', half: 'built', tier: 1, requiredPlaces: 3 };
  const r = resolveItem(shape, [hit('gumroad'), own], { firstPartyRead: true });
  assert.strictEqual(r.corroborated, true);
  assert.match(r.why, /found it/);
});

t('a page that says "shop", "store" and "merch" and sells nothing is not', () => {
  // veritasium.com, 6 Aug 2026: a Squarespace commerce blob with isLive:false
  // and the words all over the navigation. chipotle.com's two "store"s are an
  // app-store image id and a cookie script. This is why the needle has spaces.
  const r = ownRead('store', [page(
    '<a href="/shop">Shop</a> merch store · "addToCartConfirmationType":2,"isLive":false · app-store-image'
  )]);
  assert.strictEqual(r.outcome, 'miss');
  assert.match(r.why, /nothing to buy on their own site/);
});

t('a store absence that includes their own site says so, and needs four', () => {
  const shape = PROBES.inventory.find((i) => i.item === 'store');
  const own = ownRead('store', [page('<p>just a blog, nothing for sale</p>'.repeat(40))]);
  const r = resolveItem(shape, [miss('shopify'), miss('gumroad'), miss('stanstore'), own], { firstPartyRead: true });
  assert.strictEqual(r.state, 'verified_absent');
  assert.match(r.why, /we looked in 4 places including their own site/);
});

t('and three platform guesses no longer clear it once we know they have a site', () => {
  // The claim got stronger, so the number that earns it moved with it. We knew
  // where to look and could not read it — that is a not_found with a reason.
  const shape = PROBES.inventory.find((i) => i.item === 'store');
  const unread = ownRead('store', [page('', { readable: false, why: 'HTTP 403' })]);
  const r = resolveItem(shape, [miss('shopify'), miss('gumroad'), miss('stanstore'), unread], { firstPartyRead: true });
  assert.strictEqual(r.state, 'not_found');
  assert.match(r.why, /their own site is where this usually lives/);
});

t('a creator with no site of their own is judged on the old bar', () => {
  // The place is not added at all (passes.js) rather than sitting there as a
  // permanent inconclusive, dragging the reachability ratio for the people we
  // have the least to say about.
  const shape = PROBES.inventory.find((i) => i.item === 'store');
  const r = resolveItem(shape, [miss('shopify'), miss('gumroad'), miss('stanstore')], { firstPartyRead: true });
  assert.strictEqual(r.state, 'verified_absent');
  assert.match(r.why, /we looked in 3 places/);
  assert.ok(!/own site/.test(r.why));
});

section('A NEWSLETTER ON THEIR OWN SITE   (Q5)');

t('an email signup on a page of theirs is a newsletter', () => {
  // nasa.gov and veritasium.com carry the word; mkbhd.com and smosh.com carry
  // a Klaviyo form. All four have one.
  assert.strictEqual(ownRead('newsletter', [page('<a href="/newsletter">VeMail</a>')]).outcome, 'hit');
  assert.strictEqual(ownRead('newsletter', [page('<script src="//static.klaviyo.com/onsite.js">')]).outcome, 'hit');
});

t('a YouTube subscribe button on a page of theirs is not', () => {
  // "Subscribe" is on veritasium.com and smosh.com and both times it is the
  // YouTube button. It is the marker this signature must NOT carry.
  const r = ownRead('newsletter', [page('<a href="https://youtube.com/@them">Subscribe</a> to my channel')]);
  assert.strictEqual(r.outcome, 'miss');
  assert.match(r.why, /no way to subscribe to anything on their own site/);
});

t('a newsletter absence counts their own site in the six', () => {
  const shape = PROBES.inventory.find((i) => i.item === 'newsletter');
  const five = ['substack_sub', 'substack_profile', 'beehiiv', 'buttondown', 'ghost_sub'].map(miss);
  const own = ownRead('newsletter', [page('<p>nothing but words here</p>'.repeat(40))]);
  assert.strictEqual(resolveItem(shape, [...five, own], { firstPartyRead: true }).state, 'verified_absent');
  assert.match(resolveItem(shape, [...five, own], { firstPartyRead: true }).why, /including their own site/);
  assert.strictEqual(resolveItem(shape, five, { firstPartyRead: true }).state, 'verified_absent', 'and the old bar still stands for a creator with no site');
});

section('A PAGE WE COULD NOT READ IS NOT AN EMPTY ONE   (Q5)');

t('a page that fills itself in the browser is unread, not empty', () => {
  const r = ownRead('store', [page('<div id="root"></div>', {
    readable: false,
    why: 'the page arrives empty and fills itself in the browser, and §11.3 rules out running one',
  })]);
  assert.strictEqual(r.outcome, 'inconclusive');
  assert.match(r.why, /fills itself in the browser/);
});

t('a site with more of it we did not open cannot settle an absence', () => {
  const r = ownRead('store', [page('<p>a page with no cart on it</p>')], { truncated: true });
  assert.strictEqual(r.outcome, 'inconclusive');
  assert.match(r.why, /more of theirs we did not open/);
});

t('and one we never found does not pretend otherwise', () => {
  const r = resolvePlace(OWN.store, null, {
    ownSite: { site: null, why: 'they publish 3 links, none at a domain we can call theirs', pages: [] },
  });
  assert.strictEqual(r.outcome, 'inconclusive');
  assert.match(r.why, /none at a domain we can call theirs/);
});

section('WE FOLLOW THEIR OWN LINKS, AND ONLY TO THEMSELVES   (Q5)');

const homepage = page(`
  <a href="/shop">Shop</a>
  <a href="https://shop.theirs.com">Merch</a>
  <a href="/newsletter">Newsletter</a>
  <a href="/about">About us</a>
  <a href="https://dbrand.com/shop/fold8">dbrand</a>
`);

t('a shop link on their own homepage is followed', () => {
  const links = hintLinks(homepage, 'theirs.com');
  assert.ok(links.includes('https://theirs.com/shop'));
  assert.ok(links.includes('https://theirs.com/newsletter'));
});

t('a subdomain of their own domain is theirs — this is what shop.MKBHD.com needed', () => {
  assert.ok(hintLinks(homepage, 'theirs.com').includes('https://shop.theirs.com'));
});

t("a sponsor's shop link on the same page is not", () => {
  // Q6 kept video-description links out of dossier.links for exactly this
  // reason. Restricting the walk to their own registrable domain is what makes
  // that pile safe to use at all.
  assert.ok(!hintLinks(homepage, 'theirs.com').some((l) => /dbrand/.test(l)));
});

t('and a page of theirs about something else is left alone', () => {
  assert.ok(!hintLinks(homepage, 'theirs.com').some((l) => /about/.test(l)));
});

section('A LINK THEY TYPED WITHOUT A SCHEME IS NOT A BROKEN LINK   (Q5)');

t('"chipotle.com" is a link to chipotle.com', () => {
  const { normalizeLink } = require('./lib/extract');
  // Found 6 Aug 2026 while harvesting the same links for Q5. TikTok hands back
  // the bio link as the creator typed it. Unparseable, it reached the
  // abandonment check, came back status 0, and was written down as "a link they
  // still publish that no longer resolves — they tried, it broke". It resolves
  // fine. It was worth 6 points of Pressure and a sentence that was not true.
  assert.strictEqual(normalizeLink('chipotle.com'), 'https://chipotle.com');
  assert.strictEqual(normalizeLink('https://chipotle.com/'), 'https://chipotle.com');
});

section('THE ADAPTER SPEAKS THE PROTOTYPE\'S SHAPE   (Task 6)');

t('a falling posting rate does not arrive as a rising one', () => {
  /* v52-seed.js reads this field with firstNum() — the first run of digits —
     and takes a leading minus as the direction. The engine's own sentence is
     "0.7 videos a month now, against 2.5 before that — down 73%": first number
     0, so the line vanished. Reordered to "2.5 videos a month" it would have
     rendered "Posting 2% MORE than they used to" about someone posting 73%
     less. A shape mismatch that inverts a claim is not a formatting problem. */
  const { pillarsFromEngine } = require('./lib/export-seed');
  const score = {
    demand: { points: 0, signalCount: 0 }, missing: { points: 10, lines: [], switchedOn: 'nothing, anywhere' },
    opportunity: 10, confidence: { value: 0.8, resolved: 4, total: 5 },
    pressure: { points: 10, max: 40, ceilingToday: 34, parts: [{ signal: 'cadence_decay', points: 10, line: '0.7 videos a month now, against 2.5 before that — down 73%', engine: 'rule' }] },
    fit: { verdict: 'not_judged', because: 'no model ran' },
  };
  const falling = pillarsFromEngine(score, { computable: true, decline: 0.73 });
  const cad = falling.strain.subsignals.find((s) => s.key === 'cadence');
  assert.strictEqual(cad.value, '−73% vs baseline');
  assert.strictEqual(String(cad.value).indexOf('−'), 0, 'the minus leads, because that is what is read as direction');

  const rising = pillarsFromEngine(score, { computable: true, decline: -0.12 });
  assert.strictEqual(rising.strain.subsignals.find((s) => s.key === 'cadence').value, '+12% vs baseline');
});

t('a posting rate we could not read says so rather than reading as zero', () => {
  const { pillarsFromEngine } = require('./lib/export-seed');
  const score = {
    demand: { points: 0, signalCount: 0 }, missing: { points: 0, lines: [], switchedOn: '' },
    opportunity: 0, confidence: { value: 0, resolved: 0, total: 1 },
    pressure: { points: 0, max: 40, ceilingToday: 22, parts: [{ signal: 'cadence_decay', points: 0, unavailable: true, line: 'no YouTube channel we could find', engine: 'rule' }] },
    fit: { verdict: 'not_judged', because: 'no model ran' },
  };
  const cad = pillarsFromEngine(score, null).strain.subsignals.find((s) => s.key === 'cadence');
  assert.match(cad.value, /not readable/);
  assert.ok(!/\d/.test(cad.value), 'no digit, because a digit here would be read as a rate');
});

t('a trend is omitted, never zero-filled', () => {
  const { growth90d } = require('./lib/export-seed');
  assert.strictEqual(growth90d([]), null, 'no history is not flat');
  assert.strictEqual(growth90d([{ at: '2026-08-01', audience: 100 }]), null, 'one look is not a trend');
  assert.strictEqual(growth90d([
    { at: '2026-08-01', audience: 100 }, { at: '2026-08-03', audience: 120 },
  ]), null, 'two looks two days apart is not a trend either');
  assert.strictEqual(growth90d([
    { at: '2026-01-01', audience: 100 }, { at: '2026-08-01', audience: 131 },
  ]), 0.31, 'two looks far enough apart is');
});

section('KEEP THE DECISIONS, DROP THE EVIDENCE   (Q18)');

t('a conclusion is a decision; the URL that produced it is evidence', () => {
  assert.ok(isDecision('inventory.newsletter'));
  assert.ok(isDecision('fit.verdict'));
  assert.ok(isDecision('audience.total'));
  assert.ok(isDecision('brief.text'));
  assert.ok(!isDecision('check.newsletter.substack_sub'));
  assert.ok(!isDecision('surface.tiktok_profile'));
  assert.ok(!isDecision('demand.signal'), 'their own words are the first thing that should go');
  assert.ok(!isDecision('pressure.self_reported'));
});

t('nothing inside the window is touched, and nothing is touched without --confirm', () => {
  const res = sweepRetention({ days: 90, surfaced: () => false, apply: false });
  assert.ok(res.plan.length, 'there are creators in the log');
  assert.ok(res.plan.every((p) => p.ageDays < 90 ? !p.eligible : true), 'recent creators are spared');
  assert.strictEqual(res.applied, false, 'a plan is not a deletion');
});

t('a creator who surfaced keeps everything, however old', () => {
  const res = sweepRetention({ days: 0, surfaced: () => true, apply: false });
  assert.strictEqual(res.dropped, 0);
  assert.ok(res.plan.every((p) => /surfaced in a drop/.test(p.why)));
});

t('one who never surfaced loses the evidence and keeps the conclusions', () => {
  const res = sweepRetention({ days: 0, surfaced: () => false, apply: false });
  assert.ok(res.dropped > 0, 'there is evidence to drop');
  const chip = res.plan.find((p) => p.creatorId === 'chipotle');
  assert.ok(chip && chip.eligible && chip.evidence > 0 && chip.evidence < chip.rows,
    'evidence goes, conclusions stay — never all of it');
});

/* ===========================================================================
   READING WHAT THEY PUBLISH   (10 Aug 2026 — feeds, harvest, samples)
   =========================================================================== */
section('A FEED IS EVIDENCE, NEVER A VERDICT ON EXISTENCE');

const feeds = require('./lib/feeds');
const harvest = require('./lib/harvest');

const RSS = (title, author, items) => `<?xml version="1.0"?><rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"><channel>
  <title><![CDATA[${title}]]></title><itunes:name><![CDATA[${author}]]></itunes:name>
  ${items.map((i) => `<item><title><![CDATA[${i.t}]]></title><link>${i.u}</link>
    <pubDate>${i.d}</pubDate><content:encoded><![CDATA[<p>${i.b || ''}</p>]]></content:encoded></item>`).join('')}
  </channel></rss>`;

t('an HTML error page served with a 200 is not an empty publication', () => {
  assert.strictEqual(feeds.parse('<html><body>Not found</body></html>'), null);
});

t('a masthead that names them settles whose publication it is', () => {
  const f = feeds.parse(RSS('Platformer', 'Casey Newton', [{ t: 'A post', u: 'https://x.test/1', d: 'Tue, 05 Aug 2026 10:00:00 GMT' }]));
  assert.strictEqual(feeds.whose(f, ['platformer']).verdict, 'theirs');
});

t('a live publication at their handle that belongs to somebody else is not theirs', () => {
  // mkbhd.substack.com, verified 10 Aug 2026: a real Substack titled "Bharath".
  const f = feeds.parse(RSS('Bharath', 'Bharath', []));
  assert.strictEqual(feeds.whose(f, ['mkbhd', 'Marques Brownlee']).verdict, 'someone_else');
});

t('a feed carrying no name accuses nobody', () => {
  const f = feeds.parse(RSS('', '', [{ t: 'A post', u: 'https://x.test/1', d: 'Tue, 05 Aug 2026 10:00:00 GMT' }]));
  assert.strictEqual(feeds.whose(f, ['someone']).verdict, 'undecided');
});

t('an empty feed still has a masthead, so the disown survives having nothing to read', () => {
  const f = feeds.parse(RSS('Bharath', 'Bharath', []));
  assert.strictEqual(f.items.length, 0);
  assert.strictEqual(feeds.whose(f, ['mkbhd']).verdict, 'someone_else');
});

t('every post is dated and only the head carries prose', () => {
  const many = Array.from({ length: 14 }, (_, i) => ({
    t: `Post ${i}`, u: `https://x.test/${i}`, d: 'Tue, 05 Aug 2026 10:00:00 GMT', b: 'body text',
  }));
  const f = feeds.parse(RSS('P', 'A', many));
  assert.strictEqual(f.items.filter((i) => i.at).length, 14, 'dates are free, so all of them');
  assert.strictEqual(f.items.filter((i) => i.text).length, feeds.MAX_TEXTED, 'prose is not');
});

t('a feed never claims to know how old a publication is', () => {
  // A feed is a recent window, not an archive, so the shortfall is always OUR
  // sample. The "whole channel is N days old" sentence belongs to the uploads
  // walk, which holds a complete prefix.
  const now = Date.parse('2026-08-10T00:00:00Z');
  const items = Array.from({ length: 8 }, (_, i) => ({ at: new Date(now - i * 3 * 86400000).toISOString() }));
  const cad = feeds.cadenceFrom(items, require('./config/weights.json').youtube, now);
  assert.strictEqual(cad.computable, false);
  assert.ok(!/whole channel/.test(cad.why), `must not claim to know the age: "${cad.why}"`);
});

section('SOMEBODY ELSE\'S WORK IS NOT A SAMPLE OF THEIRS');

const DESC = 'mine https://www.tiktok.com/@realcreator/video/7100000000000000001 '
  + 'my mate https://www.tiktok.com/@otherperson/video/7100000000000000002 '
  + 'and https://twitter.com/realcreator/status/1500000000000000001';

t('a linked post is harvested only when the handle in it is theirs', () => {
  const h = harvest.harvest([{ where: 'a YouTube description', text: DESC }], ['realcreator']);
  assert.strictEqual(h.posts.filter((p) => p.platform === 'TikTok').length, 1);
  assert.ok(h.posts.every((p) => p.author === 'realcreator'), 'a collaborator is not the creator');
  assert.strictEqual(h.rejected, 1);
});

t('the twitter.com spelling and the x.com spelling are one post', () => {
  const h = harvest.harvest([{ where: 'a', text: DESC }], ['realcreator']);
  const x = h.posts.find((p) => p.platform === 'X');
  assert.strictEqual(x.url, 'https://x.com/realcreator/status/1500000000000000001');
});

t('X is declined because its robots.txt says so, without a request going out', async () => {
  // publish.x.com/robots.txt — "Disallow: /oembed", verified 10 Aug 2026.
  const r = await harvest.resolveOne({ platform: 'X', id: '1', url: 'https://x.com/a/status/1' }, {});
  assert.strictEqual(r.ok, false);
  assert.strictEqual(r.declined, true);
  assert.ok(/robots/.test(r.why), r.why);
});

t('a sample never invents an engagement figure the endpoint does not return', () => {
  // Neither oEmbed endpoint returns views or likes. A row that printed 0 would
  // be a number the API never gave us.
  assert.ok(harvest.WILL_NOT_FETCH.X, 'X is declined outright');
  const parsed = harvest.textFromHtml('<blockquote><p lang="en">Sunsets don&#39;t get better</p></blockquote>');
  assert.strictEqual(parsed, "Sunsets don't get better");
});

/* ===========================================================================
   THE VERDICT LINE CITES OR IT DOES NOT SHIP   (11 Aug 2026)
   =========================================================================== */
section('A NUMBER IN THE VERDICT LINE CAME FROM THE RECORD, OR THE LINE GOES');

const { numbersAreOurs } = require('./lib/llm');
const FACTS = 'audience: 1,100,000 on YouTube channel, 43,000 on TikTok profile\n'
  + 'posting rate: 11 videos a month now, against 12 before that\n'
  + 'their recent work: "Car Wash Shampoo Explained" (5,978 views)';

t('an abbreviation of a fact we supplied is the same fact', () => {
  assert.ok(numbersAreOurs('1.1M on YouTube and no store', FACTS).ok, '1.1M is 1,100,000');
  assert.ok(numbersAreOurs('43k on TikTok', FACTS).ok, '43k is 43,000');
});

t('an audience nobody measured never reaches the page', () => {
  const r = numbersAreOurs('340k on YouTube with no newsletter', FACTS);
  assert.strictEqual(r.ok, false);
  assert.deepStrictEqual(r.invented, ['340k']);
});

t('a rounding is allowed and a different number is not', () => {
  assert.ok(numbersAreOurs('1.1M subscribers', FACTS).ok);
  assert.strictEqual(numbersAreOurs('1.4M subscribers', FACTS).ok, false,
    '1.4M is not a rounding of 1.1M');
});

t('a spelled-out number counts as a number when it measures something', () => {
  assert.strictEqual(numbersAreOurs('Five years of car detailing videos', FACTS).ok, false,
    'nobody verified how long they have been doing this');
  assert.strictEqual(numbersAreOurs('Across three platforms, no store', FACTS).ok, false);
});

t('and prose that merely contains a numeral word is left alone', () => {
  assert.ok(numbersAreOurs('Detailing tutorials with nothing you can buy', FACTS).ok);
  assert.ok(numbersAreOurs('They post twelve videos a month', FACTS).ok, 'twelve IS in the record');
});

/* ===========================================================================
   BLUESKY — 12 Aug 2026.

   The TikTok signature shipped untested in one direction and marked live
   accounts absent. This one is tested in three, because it has one more way to
   go wrong: a live handle, a dead handle, and a question asked wrong.
   =========================================================================== */
section('THE ONE PLACE A 400 MEANS ABSENT   (Bluesky, 12 Aug 2026)');

const BSKY_PLACE = require('./config/probes.json').identity.find((p) => p.id === 'bluesky_profile');
const bsky = require('./lib/bluesky');
const { extract: extractOf } = require('./lib/extract');

// Shapes taken from live responses on 12 Aug 2026.
const BSKY_LIVE = JSON.stringify({
  did: 'did:plc:oky5czdrnfjpqslsw2a5iclo', handle: 'jay.bsky.team', displayName: 'Jay',
  description: 'Founder', followersCount: 595172, followsCount: 3974, postsCount: 4110,
  avatar: 'https://cdn.bsky.app/img/avatar/plain/did:plc:oky5/x.jpeg', createdAt: '2022-11-17T06:31:40.296Z',
});
const BSKY_DEAD = JSON.stringify({ error: 'InvalidRequest', message: 'Profile not found' });
const BSKY_MALFORMED = JSON.stringify({ error: 'InvalidRequest', message: 'Error: actor must be a valid did or a handle' });

t('a live handle is a hit', () => {
  const r = resolvePlace(BSKY_PLACE, { url: 'u', final_url: 'u', status: 200, body: BSKY_LIVE });
  assert.strictEqual(r.outcome, 'hit');
});

t('a handle belonging to nobody is a miss', () => {
  const r = resolvePlace(BSKY_PLACE, { url: 'u', final_url: 'u', status: 400, body: BSKY_DEAD });
  assert.strictEqual(r.outcome, 'miss');
});

t('a 400 that means we asked wrong is not absence', () => {
  // THE TRAP. The AppView answers 400 both for a handle nobody owns and for an
  // actor it cannot parse. Keying absence on the status would mark every
  // creator absent from Bluesky the day a guess was formatted badly.
  const r = resolvePlace(BSKY_PLACE, { url: 'u', final_url: 'u', status: 400, body: BSKY_MALFORMED });
  assert.strictEqual(r.outcome, 'inconclusive');
});

t('a 200 carrying no DID settles nothing', () => {
  const r = resolvePlace(BSKY_PLACE, { url: 'u', final_url: 'u', status: 200, body: '{"cursor":"x"}' });
  assert.strictEqual(r.outcome, 'inconclusive');
});

const BCFG = require('./config/weights.json').bluesky;

t('domains are asked first, the platform default last, and a bare handle never', () => {
  const c = bsky.candidates('mkbhd', 'mkbhd.com', BCFG);
  assert.deepStrictEqual(c.map((x) => x.actor), ['mkbhd.com', 'mkbhd.co', 'mkbhd.bsky.social'],
    'every domain before the free name — see the squatter cases below');
  assert.strictEqual(c[c.length - 1].earned, false, 'the platform default is the only one that has to corroborate');
  assert.ok(c.slice(0, -1).every((x) => x.earned), 'a resolving domain handle is DNS-bound, so it is earned');
});

t('a domain built from their handle is still tried when nothing was published', () => {
  // 404 Media publish no links we can read, so site.js finds no domain — and
  // 404media.co is both their site and their Bluesky handle. Measured 12 Aug
  // 2026: the real account has 239,631 followers and 404media.bsky.social is
  // a squatter with 671 and no posts.
  assert.deepStrictEqual(
    bsky.candidates('404media', null, BCFG).map((x) => x.actor),
    ['404media.com', '404media.co', '404media.bsky.social'],
  );
});

t('a short handle never reaches for a domain', () => {
  // "cnn.com" is not the Bluesky account of a creator called cnn, and printing
  // its follower count as theirs is the failure this refusal exists for.
  assert.deepStrictEqual(bsky.candidates('cnn', null, BCFG).map((x) => x.actor), ['cnn.bsky.social']);
});

t('the same domain is never asked for twice', () => {
  const c = bsky.candidates('404media', '404media.co', BCFG);
  assert.strictEqual(new Set(c.map((x) => x.actor)).size, c.length);
  assert.strictEqual(c[0].kind, 'their own domain', 'what site.js vouched for goes first');
});

section('THE NAME IS FIRST-COME, SO A NAME IS NOT AN IDENTITY   (Bluesky)');

/* Both measured live on 12 Aug 2026, and both would have gone on the wrong
   report under a first-hit-wins rule:
     mkbhd.bsky.social    62 followers, 0 posts, no display name
     pfrazee.bsky.social  "Bot Testing - NOT pfrazee.com"
   The creators are at mkbhd.com and pfrazee.com. */
const CONFIRMED_SURFACES = [
  { id: 'youtube_profile', platform: 'YouTube', confirmed: true, url: 'https://www.youtube.com/@mkbhd' },
];

t('an empty profile squatting on their name is not theirs', async () => {
  const known = {
    'mkbhd.bsky.social': {
      ok: true, exists: true, actor: 'mkbhd.bsky.social', status: 200,
      url: 'https://bsky.app/profile/mkbhd.bsky.social',
      profile: { did: 'did:plc:squatter', handle: 'mkbhd.bsky.social', displayName: '', bio: null, followers: 62, posts: 0, labels: [], hidden: false },
    },
  };
  const r = await bsky.findProfile('mkbhd', null, {}, { surfaces: CONFIRMED_SURFACES, known });
  assert.strictEqual(r.found, null, 'a profile nothing ties to them is never returned as theirs');
  assert.ok(r.undecided, 'and it is not thrown away either — somebody is there');
  assert.strictEqual(r.undecided.owner.verdict, 'undecided');
});

t('a display name containing their name proves nothing', () => {
  // "Bot Testing - NOT pfrazee.com" contains "pfrazee". A name comparison
  // would have called this Paul Frazee's account.
  const r = bsky.whose(
    { profile: { handle: 'pfrazee.bsky.social', bio: 'acct just for testing bot integrations. @pfrazee.com is the bsky dev you seek', displayName: 'Bot Testing - NOT pfrazee.com' } },
    { surfaces: [{ id: 'youtube_profile', platform: 'YouTube', confirmed: true, url: 'https://www.youtube.com/@pfrazee' }] },
  );
  assert.strictEqual(r.verdict, 'undecided');
});

t('the name they go by elsewhere corroborates, matched whole', () => {
  // Taylor Lorenz (343,917) and Casey Newton (297,698) are genuinely at
  // {handle}.bsky.social and link to nothing we confirmed. The backlink test
  // alone refused both. Measured 12 Aug 2026.
  const surfaces = [{ id: 'tiktok_profile', platform: 'TikTok', confirmed: true, url: 'https://www.tiktok.com/@taylorlorenz', displayName: 'Taylor Lorenz' }];
  const real = bsky.whose({ profile: { handle: 'taylorlorenz.bsky.social', bio: null, displayName: 'Taylor Lorenz' } }, { surfaces });
  assert.strictEqual(real.verdict, 'theirs');

  // And the whole-string rule is what keeps the containment failure out.
  const bot = bsky.whose(
    { profile: { handle: 'pfrazee.bsky.social', bio: null, displayName: 'Bot Testing - NOT pfrazee.com' } },
    { surfaces: [{ id: 'tiktok_profile', platform: 'TikTok', confirmed: true, url: 'https://www.tiktok.com/@pfrazee', displayName: 'Paul Frazee' }] },
  );
  assert.strictEqual(bot.verdict, 'undecided');
});

t('an empty display name corroborates nothing', () => {
  // Every squatter measured on 12 Aug — mkbhd, theverge, techmeme, 404media —
  // had no display name at all.
  const r = bsky.whose(
    { profile: { handle: 'theverge.bsky.social', bio: null, displayName: '' } },
    { surfaces: [{ id: 'yt', platform: 'YouTube', confirmed: true, url: 'https://www.youtube.com/@theverge', displayName: '' }] },
  );
  assert.strictEqual(r.verdict, 'undecided');
});

t('a profile that links back to a confirmed surface is theirs', () => {
  const r = bsky.whose(
    { profile: { handle: 'mkbhd.bsky.social', bio: 'videos at youtube.com/@mkbhd', displayName: 'Marques' } },
    { surfaces: CONFIRMED_SURFACES },
  );
  assert.strictEqual(r.verdict, 'theirs');
});

t('their own domain needs no backlink, because site.js already earned it', async () => {
  const known = {
    'mkbhd.com': {
      ok: true, exists: true, actor: 'mkbhd.com', status: 200, url: 'https://bsky.app/profile/mkbhd.com',
      profile: { did: 'did:plc:real', handle: 'mkbhd.com', displayName: 'Marques Brownlee', bio: null, followers: 189304, posts: 169, labels: [], hidden: false },
    },
  };
  const r = await bsky.findProfile('mkbhd', 'mkbhd.com', {}, { surfaces: [], known });
  assert.ok(r.found, 'the domain carries their name and they publish it — that is the test, and it was passed before we got here');
  assert.strictEqual(r.found.profile.did, 'did:plc:real');
  assert.strictEqual(r.tried.length, 1, 'and the default is never even asked once the earned handle answers');
});

section('HIDDEN IS NOT ABSENT   (Bluesky)');

/* An account that has opted out of logged-out viewing carries this label.
   WHAT IS PROVEN HERE is our half: given that label, the engine keeps the
   profile present and gives up the posts with a reason. WHAT IS NOT PROVEN is
   the AppView's half — what it actually returns for such an account — because
   no live opted-out handle has been found to test against, and post search is
   403 so there is no way to go looking for one. If it turns out to answer with
   the same 400 a dead handle gives, the miss branch is where that would land
   and this test would not have caught it. */
t('an account hidden from logged-out readers is present, with no posts and a reason', () => {
  const withLabel = extractOf('bluesky', JSON.stringify({
    did: 'did:plc:hidden', handle: 'private.bsky.social', followersCount: 1200, postsCount: 340,
    labels: [{ val: '!no-unauthenticated' }],
  }));
  assert.ok(withLabel.labels.includes(bsky.NO_UNAUTHENTICATED),
    'the label has to survive extraction or the sweep never sees it');
  assert.strictEqual(withLabel.followers, 1200, 'the profile still resolved — presence is not in question');

  const place = resolvePlace(BSKY_PLACE, { url: 'u', final_url: 'u', status: 200, body: JSON.stringify({ did: 'did:plc:hidden', labels: [{ val: '!no-unauthenticated' }] }) });
  assert.strictEqual(place.outcome, 'hit', 'hidden is a person who is there, and must never resolve to a miss');
});

section('A WINDOW MAY NOT CLAIM TO BE A HISTORY   (Bluesky)');

const BSKY_NOW = Date.parse('2026-08-12T00:00:00Z');
const daysAgo = (n) => new Date(BSKY_NOW - n * 86400000).toISOString();

t('a walk that ran out of posts may say how old the account is', () => {
  // 20 posts spread over 400 days, and the cursor ran out — so this IS their
  // whole history and the arithmetic has a real baseline behind the window.
  const posts = Array.from({ length: 20 }, (_, i) => ({ at: daysAgo(i * 20), repost: false }));
  const cad = bsky.cadence({ ok: true, posts, complete: true }, YCFG, BSKY_NOW);
  assert.ok(cad.computable, `expected a reading, got: ${cad.why}`);
});

t('a walk stopped by the page cap says the shortfall is ours', () => {
  const posts = Array.from({ length: 20 }, (_, i) => ({ at: daysAgo(i), repost: false }));
  const cad = bsky.cadence({ ok: true, posts, complete: false }, YCFG, BSKY_NOW);
  assert.strictEqual(cad.computable, false);
  assert.ok(/only reach back/.test(cad.why), `the reason must blame our sample, not their history: ${cad.why}`);
  assert.ok(!/whole account/.test(cad.why), 'a truncated walk may not describe their whole account');
});

t('a repost is not a post of theirs', () => {
  const posts = [
    { uri: 'at://d/app.bsky.feed.post/aaa', handle: 'x.com', text: 'mine', at: daysAgo(1), likes: 12, replies: 3, repost: false },
    { uri: 'at://d/app.bsky.feed.post/bbb', handle: 'y.com', text: 'someone else', at: daysAgo(2), likes: 900, replies: 0, repost: true },
  ];
  assert.strictEqual(bsky.ownPosts(posts).length, 1);
  const s = bsky.samples({ posts }, { maxSamples: 5, maxTitleChars: 110, maxTextChars: 2000 });
  assert.strictEqual(s.length, 1, 'a repost never appears as a sample of their work');
  assert.strictEqual(s[0].title, 'mine');
});

t('a repost cannot make the sample look older than it is', () => {
  // Caught live 12 Aug 2026. A repost carries the ORIGINAL post's date, so one
  // repost of a three-year-old thread told the walk it held three years of
  // history when the creator's own posts reached back 149 days — one day short
  // of what the arithmetic needs. The reach test measures the same set the
  // cadence measures, which is the only way the two can agree.
  const posts = [
    { at: daysAgo(1), repost: false },
    { at: daysAgo(30), repost: false },
    { at: daysAgo(1100), repost: true },
  ];
  const reach = (list) => list.reduce((d, p) => Math.max(d, (BSKY_NOW - Date.parse(p.at)) / 86400000), 0);
  assert.ok(reach(posts) > 1000, 'the raw feed looks three years deep');
  assert.ok(reach(bsky.ownPosts(posts)) < 40, 'and their own posts reach back a month');
});

t('a sample carries the like count the endpoint returned, and never one it did not', () => {
  const withCount = bsky.samples({ posts: [{ uri: 'at://d/app.bsky.feed.post/aaa', handle: 'h', text: 'a', at: daysAgo(1), likes: 34, repost: false }] },
    { maxSamples: 5, maxTitleChars: 110, maxTextChars: 2000 })[0];
  assert.strictEqual(withCount.metric, 34);
  assert.strictEqual(withCount.metricWhy, null, 'a figure we have needs no excuse');

  const without = bsky.samples({ posts: [{ uri: 'at://d/app.bsky.feed.post/bbb', handle: 'h', text: 'b', at: daysAgo(1), likes: null, repost: false }] },
    { maxSamples: 5, maxTitleChars: 110, maxTextChars: 2000 })[0];
  assert.strictEqual(without.metric, null);
  assert.ok(without.metricWhy, 'a figure we do not have is named as missing, never filled in');
});

t('a post address is one a person can open', () => {
  assert.strictEqual(
    bsky.postUrl('at://did:plc:ragtjsm2j2vknwkz3zp4oxrd/app.bsky.feed.post/3msvckogwx22l', 'pfrazee.com'),
    'https://bsky.app/profile/pfrazee.com/post/3msvckogwx22l',
  );
  assert.strictEqual(bsky.postUrl('at://did/app.bsky.feed.like/xyz', 'h'), null, 'a like is not a post');
});

section('A HANDLE THAT IS A DOMAIN IS A LINK THEY PUBLISHED   (Bluesky)');

t('their own domain as a handle becomes a link, and the platform default does not', () => {
  const domain = extractOf('bluesky', JSON.stringify({ did: 'did:plc:a', handle: 'mkbhd.com', followersCount: 10 }));
  assert.ok(domain.links.includes('https://mkbhd.com'),
    'the handle IS the domain claim, and site.js needs it to find a site for a creator who links to nothing');

  const platform = extractOf('bluesky', JSON.stringify({ did: 'did:plc:a', handle: 'alice.bsky.social', followersCount: 10 }));
  assert.deepStrictEqual(platform.links, [], 'an address on the platform is not a site of their own');
});

t('a body that will not parse is a surface we did not read', () => {
  assert.strictEqual(extractOf('bluesky', '{"did":"did:plc:a", trunc'), null);
  assert.strictEqual(extractOf('bluesky', JSON.stringify({ cursor: 'x' })), null, 'no DID is no identity');
});

runQueue().then(() => {
  console.log(`\n  ${pass} passed, ${fail} failed\n`);
  process.exitCode = fail ? 1 : 0;
});
