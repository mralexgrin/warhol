#!/usr/bin/env node
'use strict';
/* ============================================================================
   warhol — the single-creator path.

     warhol check <handle> [--brief "..."] [--no-robots] [--browser-ua]
     warhol report <handle> [--as-of 2026-01-15]
     warhol checks <handle>          the check record: every URL, every status
     warhol cost                     what the passes actually cost
     warhol proposals                what the model proposed, and what was there
     warhol forget [--confirm]       retention: keep the decisions, drop the evidence
     warhol list

   Paste a handle, it goes and checks the places, it returns a report.

   ---------------------------------------------------------------------------
   And the drop — Task 4, 6 Aug 2026. One brief, a handful of candidates, a
   day's work. Demo-scoped: Q24 defers discovery at scale and still does.

     warhol brief "<description>"    a model proposes candidates from a brief
     warhol brief                    the briefs that exist
     warhol run <brief>              the ladder over every candidate, in parallel
     warhol drop <brief>             the aggregate: who cleared, who didn't, the bill
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const { project } = require('../lib/project');
const { render, renderChecks, renderDrop } = require('../lib/render');
const { readCosts, readObservations, sweepRetention, DATA } = require('../lib/store');
const { checkOne, runMany } = require('../lib/run');
const briefs = require('../lib/briefs');
const { buildDrop } = require('../lib/drop');
const { buildSeed } = require('../lib/export-seed');
const llm = require('../lib/llm');

const WEIGHTS = require(path.join(__dirname, '..', 'config', 'weights.json'));

function parseArgs(argv) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) { out[key] = next; i++; } else out[key] = true;
    } else out._.push(a);
  }
  return out;
}

function cleanHandle(raw) {
  let h = String(raw || '').trim();
  const m = h.match(/(?:tiktok\.com|instagram\.com|youtube\.com)\/@?([A-Za-z0-9._-]+)/);
  if (m) return m[1].toLowerCase();
  return h.replace(/^@/, '').toLowerCase();
}

const log = (msg) => process.stderr.write(`\x1b[2m  ${msg}\x1b[0m\n`);

/** The flags that change how we fetch, in one place, because three commands
 *  now take them and a drop that quietly ignored --no-robots would be worse
 *  than one that never offered it. */
function configFrom(args) {
  return {
    http: {
      ...WEIGHTS.http,
      respectRobots: args['no-robots'] ? false : WEIGHTS.http.respectRobots,
      identify: args['browser-ua'] ? false : WEIGHTS.http.identify,
    },
    llm: WEIGHTS.llm,
    youtube: WEIGHTS.youtube,
    /* REDDIT WAS MISSING HERE UNTIL 12 AUG 2026, and it was not a cosmetic
       omission. passes.js reads `cfg.reddit || {}`, so every field arrived
       undefined — including minHandleChars, which its own note calls the
       safety rule rather than a tuning knob. `clean.length < undefined` is
       false for every handle, so the refusal that stops a three-letter name
       collecting a stranger's conversation has never once fired. maxPosts and
       maxThreads went out as undefined limits alongside it. */
    reddit: WEIGHTS.reddit,
    bluesky: WEIGHTS.bluesky,
    run: WEIGHTS.run,
    /* Every dollar this engine spends is a model call, and there are two of
       them: the places the model proposes during Sweep, and Study. This
       switches off both. Sweep and Probe are HTTP and rules and cost nothing,
       so a --no-model run refreshes the whole verified half of a report — the
       inventory, the feeds, the samples, the posting rate — for free, and
       leaves the judgments as they were last recorded. */
    noModel: !!args['no-model'],
  };
}

// Q20 — every creator is checked against a brief. When none is given the house
// brief applies, exactly as it would in the product (§6.1); it is a floor, not
// a default, and the engine refuses to score below it.
function briefText(args) {
  return typeof args.brief === 'string' && args.brief.trim() ? args.brief.trim() : WEIGHTS.houseBrief;
}

async function cmdCheck(args) {
  const handle = cleanHandle(args._[0]);
  if (!handle) return usage('a handle, please: warhol check @someone');

  const cfg = configFrom(args);
  const brief = briefText(args);

  const t0 = Date.now();
  process.stderr.write(`\n\x1b[1m  checking @${handle}\x1b[0m\n`);
  log(`brief · ${brief}${brief === WEIGHTS.houseBrief ? '  (the house brief — pass --brief to narrow it)' : ''}`);
  if (!cfg.http.respectRobots) log('robots.txt: IGNORED (--no-robots)');
  if (!cfg.http.identify) log('user agent: browser (--browser-ua)');

  // The same ladder the drop runs, and deliberately the same code — see the
  // header of lib/run.js for why two of them would be a slow lie.
  const { report, gate } = await checkOne(handle, { brief, source: 'named' }, cfg, log);
  if (!gate.go) {
    process.stderr.write(`\n\x1b[33m  Stopped before the expensive pass.\x1b[0m\n  ${gate.why}\n`);
  }

  process.stdout.write(render(report));
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  const costs = readCosts();
  const http = costs.filter((c) => c.kind === 'http').length;
  const usd = costs.filter((c) => c.kind === 'llm').reduce((a, c) => a + (c.usd || 0), 0);
  process.stderr.write(`\x1b[2m  ${secs}s · ${http} requests · $${usd.toFixed(4)} of model · saved to data/${handle}.json\x1b[0m\n\n`);
}

/* ===========================================================================
   warhol brief "<description>"  — the model's proper job. §11.1, Task 4.

   A brief is written in a member's own words (§6.7) and the model reads it and
   proposes names. That is the left side of the wall: finding people is
   reasoning over public text, and it is the one thing here an LLM is genuinely
   better at than a rule.

   --handles is the same command without the model. It exists because the
   deterministic half of this engine needs no API key and that is the point of
   the whole design (§3) — you can write a brief, seed it with names you
   already have, and run the entire ladder and the entire drop over them for
   $0.00. Names seeded that way are tagged `named`, not `proposed`, because a
   person typed them.
   =========================================================================== */
async function cmdBrief(args) {
  const text = args._.join(' ').trim();

  if (!text) {
    const all = briefs.listBriefs();
    if (!all.length) return console.log('\n  no briefs yet — write one: warhol brief "who you are looking for"\n');
    console.log('\n  brief                          candidates   runs   written\n  ' + '─'.repeat(74));
    for (const b of all) {
      console.log(`  ${pad(b.slug, 31)}${pad(b.candidates, 13)}${pad(b.runs, 7)}${b.created_at.slice(0, 10)}`);
      console.log(`    \x1b[2m${b.text.slice(0, 88)}\x1b[0m`);
    }
    console.log();
    return;
  }

  const brief = briefs.createBrief(text);
  console.log(`\n  \x1b[1m${brief.slug}\x1b[0m`);
  console.log(`  \x1b[2m"${brief.text}"\x1b[0m\n`);

  const limit = Number(args.limit) > 0 ? Math.min(Number(args.limit), WEIGHTS.run.maxCandidates) : WEIGHTS.run.maxCandidates;

  // Hand-seeded names: no model, no proposal, no doubt about the person.
  if (typeof args.handles === 'string') {
    const named = args.handles.split(',').map((h) => cleanHandle(h)).filter(Boolean)
      .map((h) => ({ creatorId: h, source: 'named', why: 'seeded by hand with --handles' }));
    const added = briefs.addCandidates(brief.slug, named);
    console.log(`  ${added.length} candidate${added.length === 1 ? '' : 's'} seeded by hand — a person typed these, so nothing is tagged as proposed.\n`);
    return console.log(`  Next: warhol run ${brief.slug}\n`);
  }

  if (!llm.available()) {
    console.log(`  \x1b[33mNo model, so nobody can propose names\x1b[0m — ${llm.reason()}.`);
    console.log('  The brief is saved. Seed it by hand and everything downstream still runs:\n');
    console.log(`    warhol brief "..." --handles handle1,handle2,handle3\n`);
    return;
  }

  process.stderr.write('\x1b[2m  asking the model who might match — it proposes names, it never says what they have\x1b[0m\n');
  const proposed = await llm.proposeCandidates(brief.text, limit, WEIGHTS.llm);
  if (!proposed.ok) return console.log(`\n  the model could not answer — ${proposed.why}\n`);

  const added = briefs.addCandidates(brief.slug, proposed.candidates.map((c) => ({
    creatorId: cleanHandle(c.handle), source: 'proposed', why: c.why,
  })));

  console.log(`  ${added.length} candidate${added.length === 1 ? '' : 's'} proposed\n`);
  for (const c of added) console.log(`  \x1b[1m@${c.creator_id}\x1b[0m\n    \x1b[2m${c.why}\x1b[0m`);
  console.log('\n  \x1b[2mNothing has checked that any of these handles belongs to the person the model');
  console.log('  meant. A wrong one survives Sweep as an empty report rather than a false one,');
  console.log('  and every screen downstream says "proposed". Person verification is the next');
  console.log('  wall and it is not built (§11, open question 6).\x1b[0m');
  console.log(`\n  Next: warhol run ${brief.slug}\n`);
}

/* ===========================================================================
   warhol run <brief> — the ladder over every candidate.
   =========================================================================== */
async function cmdRun(args) {
  const brief = briefs.getBrief(args._[0]);
  if (!brief) return usage(`no brief called "${args._[0] || ''}" — see: warhol brief`);

  const candidates = briefs.candidatesFor(brief.slug)
    .map((c) => ({ creatorId: c.creator_id, source: c.source, why: c.why }));
  if (!candidates.length) return usage(`${brief.slug} has no candidates yet`);

  const cfg = configFrom(args);
  const width = Math.min(cfg.run.creatorConcurrency, candidates.length);

  process.stderr.write(`\n\x1b[1m  running ${brief.slug} — ${candidates.length} candidates\x1b[0m\n`);
  log(`brief · ${brief.text}`);
  log(`${width} creators at a time. The per-host delay is reserved, so twenty of them wanting one host still arrive ${cfg.http.perHostDelayMs}ms apart.`);
  if (!cfg.http.respectRobots) log('robots.txt: IGNORED (--no-robots)');
  process.stderr.write('\n');

  const run = briefs.startRun(brief.slug);
  const t0 = Date.now();
  let done = 0;

  const results = await runMany(candidates, { brief: brief.text, briefSlug: brief.slug, runId: run.run_id }, cfg, (r) => {
    done += 1;
    const n = `${String(done).padStart(2)}/${candidates.length}`;
    if (r.error) {
      process.stderr.write(`  \x1b[31m✗\x1b[0m ${n} ${pad(r.creatorId, 20)} ${r.error}\n`);
      return;
    }
    const s = r.report.score;
    const verdict = s.entersDrop ? '\x1b[32min the drop\x1b[0m' : `\x1b[2m${blockedWord(s)}\x1b[0m`;
    const studied = r.gate.go ? '' : ' \x1b[2m· stopped before Study\x1b[0m';
    process.stderr.write(`  \x1b[32m✓\x1b[0m ${n} ${pad(r.creatorId, 20)} score ${pad(s.total, 5)} ${pad(`${(r.ms / 1000).toFixed(1)}s`, 7)} ${verdict}${studied}\n`);
  });

  const errors = results.filter((r) => r.error);
  briefs.finishRun(run, {
    creators: candidates.length,
    checked: results.length - errors.length,
    errors: errors.length,
    ms: Date.now() - t0,
  });

  process.stderr.write(`\n\x1b[2m  ${((Date.now() - t0) / 1000).toFixed(1)}s for ${candidates.length} creators${errors.length ? ` · ${errors.length} failed` : ''}\x1b[0m\n`);
  process.stderr.write(`\x1b[2m  warhol drop ${brief.slug}   for the day's work and the bill\x1b[0m\n\n`);
}

/* ===========================================================================
   warhol drop <brief> — the aggregate.
   =========================================================================== */
function cmdDrop(args) {
  const drop = buildDrop(args._[0], args['as-of'] || null);
  if (!drop) return usage(`no brief called "${args._[0] || ''}" — see: warhol brief`);
  process.stdout.write(renderDrop(drop));
}

/* ===========================================================================
   warhol export --brief <slug> — point the prototype at real data. Task 6.

   Writes a drop-in replacement for the prototype's frozen cohort file. The
   prototype's app code is not touched and does not need to be: v5.2 reads
   window.WARHOL for the cohort and derives its v1.3 layer over whatever is
   there.
   =========================================================================== */
function cmdExport(args) {
  const ref = typeof args.brief === 'string' ? args.brief : args._[0];
  const built = buildSeed(ref, args['as-of'] || null);
  if (!built) return usage(`no brief called "${ref || ''}" — see: warhol brief`);

  const s = built.summary;
  if (!s.creators) return usage(`${s.brief} has no checked creators yet — run: warhol run ${s.brief}`);

  const out = args.out || path.join(DATA, `warhol-seed.${s.brief}.js`);
  fs.writeFileSync(out, built.text);

  console.log(`\n  ${out}`);
  console.log(`  ${s.creators} creators · ${s.checks} checks · ${s.inDrop} in the drop${s.proposed ? ` · ${s.proposed} machine-proposed` : ''}`);
  console.log(`\n  \x1b[32mreal\x1b[0m       ${s.real.join(', ')}`);
  console.log(`  \x1b[33mgenerated\x1b[0m  ${s.generated.join(', ')}`);
  console.log('\n  \x1b[2mEvery generated field carries `generated: true` in the file. They are product');
  console.log('  features that are not built, not oversights — and a demo that cannot tell you');
  console.log('  which half is real is worse than one running entirely on fiction.\x1b[0m');

  if (!s.withGrowth) {
    console.log('\n  \x1b[2mNo creator has a growth figure: that needs two observations 90 days apart');
    console.log('  and these have been seen once. Omitted rather than zero-filled.');
    // Decision 113 replaced what this used to say. It read "which is also why
    // nothing clears Trajectory and the drop may be empty" — true when the
    // unread state blocked, and quietly false since. Copy that explains a
    // behaviour is copy that has to change when the behaviour does.
    console.log('  Trajectory therefore reads "no trend yet" rather than blocking (decision 113),');
    console.log('  and the card carries that as a stated condition. A drop can still be empty —');
    console.log('  §5.4 says a zero-result day is a designed state and the prototype draws it');
    console.log('  as one — but it will not be empty for want of a reading nobody has.\x1b[0m');
  }

  console.log(`\n  To use it:  cp "${out}" ../scout/warhol-seed.js`);
  console.log('  \x1b[2m(back up the frozen one first — it is byte-identical across five archived');
  console.log('  builds and Archive/prototypes/seed-fictional/, and nothing regenerates it.)\x1b[0m\n');
}

/** The shortest true thing to put on a one-line run summary. */
function blockedWord(score) {
  const bad = [];
  if (!score.gates.scoreOverThreshold) bad.push('score');
  if (!score.gates.confidenceOverFloor) bad.push('confidence');
  if (score.gates.fit !== 'pass') bad.push('fit');
  // Decision 113 — only a real decline is held against them. `not_established`
  // is a missing reading, not a verdict, and it printed on every row.
  if (score.trajectory.blocks) bad.push('trajectory');
  return `held back — ${bad.join(', ')}`;
}

function cmdReport(args) {
  const handle = cleanHandle(args._[0]);
  const report = project(handle, args['as-of'] || null);
  if (!report) return usage(`nothing observed for @${handle} yet — run: warhol check ${handle}`);
  if (args.html) return writeHtml(handle, report);
  process.stdout.write(render(report));
}

/** A self-contained page — no server, no fetch. Double-click it. */
function writeHtml(handle, report) {
  const tpl = fs.readFileSync(path.join(__dirname, '..', 'viewer', 'template.html'), 'utf8');
  const json = JSON.stringify(report).replace(/<\/script/gi, '<\\/script');
  const file = path.join(DATA, `${handle}.html`);
  fs.writeFileSync(file, tpl.replace('__DATA__', json));
  console.log(`\n  ${file}\n`);
}

function cmdChecks(args) {
  const handle = cleanHandle(args._[0]);
  const report = project(handle, args['as-of'] || null);
  if (!report) return usage(`nothing observed for @${handle} yet`);
  process.stdout.write(renderChecks(report));
}

function cmdCost() {
  // The suite writes real rows through the real function — that is the only
  // way to assert that a cost knows whose it is — and tags every one with a
  // brief beginning `__test_`. They belong in the log and not in this table.
  const costs = readCosts().filter((c) => !String(c.brief || '').startsWith('__test_'));
  const byPass = {};
  for (const c of costs) {
    const k = c.pass || 'unknown';
    byPass[k] = byPass[k] || { requests: 0, ms: 0, waited: 0, usd: 0, inTok: 0, outTok: 0, blocked: 0, errors: 0, units: 0 };
    const b = byPass[k];
    b.requests += 1;
    b.ms += c.ms || 0;
    b.waited += c.waited || 0;
    b.usd += c.usd || 0;
    b.inTok += c.input_tokens || 0;
    b.outTok += c.output_tokens || 0;
    b.units += c.units || 0;
    if (c.blocked) b.blocked += 1;
    if (c.error) b.errors += 1;
  }
  const rows = Object.entries(byPass);
  const total = rows.reduce((a, [, b]) => a + b.usd, 0);
  const units = rows.reduce((a, [, b]) => a + b.units, 0);

  const waited = rows.reduce((a, [, b]) => a + b.waited, 0);

  console.log('\n  What the passes actually cost — PRD §11.4, measured not asserted\n');
  console.log('  pass      requests   wall time   waiting   blocked   errors   api units   model $');
  console.log('  ' + '─'.repeat(84));
  for (const [pass, b] of rows) {
    console.log(`  ${pad(pass, 10)}${pad(b.requests, 11)}${pad((b.ms / 1000).toFixed(1) + 's', 12)}${pad((b.waited / 1000).toFixed(1) + 's', 10)}${pad(b.blocked, 10)}${pad(b.errors, 9)}${pad(b.units, 12)}$${b.usd.toFixed(4)}`);
  }
  console.log('  ' + '─'.repeat(84));
  console.log(`  total model spend: $${total.toFixed(4)}`);

  /* Task 4 — "waiting" is time held in the per-host politeness queue, and it is
     inside "wall time" rather than beside it. It is separated because §11.4
     asks which constraint binds, and a single wall-clock figure cannot answer:
     a drop that is 70% politeness does not get faster on a bigger machine.
     Rows written before 6 Aug 2026 have no waiting figure — they waited, it was
     simply never measured — so this line only appears once there is one. */
  if (waited) {
    console.log(`  of that wall time, ${(waited / 1000).toFixed(1)}s was the per-host politeness delay rather than fetching.`);
  }

  /* Q6 — the YouTube API is free and metered, so its bill is not in dollars and
     leaving it out of this table would have made the table quietly wrong. A
     list call is 1 unit whatever maxResults says; the free tier is 10,000 a
     day. Printing the divisor is the useful part: it is the number of creators
     a day this engine can look at before the door closes. */
  if (units) {
    const y = WEIGHTS.youtube;
    const worst = 1 + y.maxPages * 2 + y.commentVideos;
    console.log(`  youtube api: ${units} quota units used, against 10,000 a day on the free tier.`);
    console.log(`  A check costs at most ${worst} — 1 channel, ${y.maxPages} upload pages, ${y.maxPages} stat pages, ${y.commentVideos} comment reads —`);
    console.log(`  so the door closes at about ${Math.floor(10000 / worst)} creators a day. That, not dollars, is the`);
    console.log('  binding limit on the size of a drop.');
  }
  const sweepCost = (byPass.sweep && byPass.sweep.usd) || 0;
  const studyCost = (byPass.study && byPass.study.usd) || 0;
  if (studyCost > 0 && sweepCost + (byPass.probe ? byPass.probe.usd : 0) === 0) {
    console.log('\n  The ratio the PRD asks for: sweep and probe cost $0 in model spend —');
    console.log('  they are HTTP and rules. Every dollar is in Study. That is the gradient,');
    console.log('  and it is the argument for the ladder.');
  }
  console.log();
}

/**
 * Q21 — what the model proposed, and what was actually at it.
 *
 * The model's job on the left of the wall is to guess PLACES. This is the only
 * honest way to find out whether it is any good at it: a rate, per host, over
 * every creator we have run. Not retraining — a table you read and act on.
 */
function cmdProposals() {
  const rows = readObservations(null, null).filter((o) => o.key.startsWith('proposal.'));
  if (!rows.length) {
    return console.log('\n  The model has not proposed a place yet — it only runs when a model is available.\n');
  }

  const byHost = {};
  for (const r of rows) {
    let host = 'not a URL';
    try { host = new URL(r.source_url).hostname.replace(/^www\./, ''); } catch { /* unusable */ }
    const b = byHost[host] = byHost[host] || { proposed: 0, hit: 0, miss: 0, nothing: 0 };
    b.proposed += 1;
    if (r.value === 'hit') b.hit += 1;
    else if (r.value === 'miss') b.miss += 1;
    else b.nothing += 1;
  }

  const creators = new Set(rows.map((r) => r.creator_id)).size;
  const hits = rows.filter((r) => r.value === 'hit').length;

  console.log('\n  What the model proposed, and what was there — PRD §5.6, instrumented not asserted\n');
  console.log('  where it sent us                 proposed   hit   miss   nothing   hit rate');
  console.log('  ' + '─'.repeat(74));
  for (const [host, b] of Object.entries(byHost).sort((a, b2) => b2[1].proposed - a[1].proposed)) {
    console.log(`  ${pad(host, 33)}${pad(b.proposed, 11)}${pad(b.hit, 6)}${pad(b.miss, 7)}${pad(b.nothing, 10)}${Math.round((b.hit / b.proposed) * 100)}%`);
  }
  console.log('  ' + '─'.repeat(74));
  console.log(`  ${rows.length} proposals across ${creators} creator${creators === 1 ? '' : 's'} · ${hits} found something · ${Math.round((hits / rows.length) * 100)}% hit rate`);
  console.log('\n  A pattern that pays off is worth reusing; one that misses across fifty');
  console.log('  creators should be retired. The model never got to say what was at any');
  console.log('  of these — something else went and looked.\n');
}

/** Q18 — the retention sweep. Plans by default; only --confirm rewrites. */
function cmdForget(args) {
  const days = args['older-than'] != null && args['older-than'] !== true
    ? Number(args['older-than'])
    : WEIGHTS.retention.evidenceDays;

  const surfaced = (creatorId) => {
    try { const r = project(creatorId, null); return !!(r && r.score && r.score.entersDrop); }
    catch { return true; }        // if we cannot tell, we do not delete
  };

  const res = sweepRetention({ days, surfaced, apply: !!args.confirm });

  console.log(`\n  Retention — keep the decisions, drop the evidence (§12.1). Window: ${res.days} days.\n`);
  console.log('  creator                   rows   evidence   last seen   what happens');
  console.log('  ' + '─'.repeat(88));
  for (const p of res.plan) {
    console.log(`  ${pad(p.creatorId, 26)}${pad(p.rows, 7)}${pad(p.evidence, 11)}${pad(p.ageDays + 'd', 12)}${p.why}`);
  }
  console.log('  ' + '─'.repeat(88));
  if (res.applied) {
    console.log(`\n  ${res.dropped} evidence row${res.dropped === 1 ? '' : 's'} deleted. Each sweep left a retention.swept row behind it —`);
    console.log('  the one destructive operation in an append-only log says so in the log.\n');
  } else if (res.dropped) {
    console.log(`\n  ${res.dropped} evidence row${res.dropped === 1 ? '' : 's'} would be deleted. Nothing has been touched.`);
    console.log('  Run it again with --confirm to actually delete them.\n');
  } else {
    console.log('\n  Nothing to drop. Conclusions are kept forever either way.\n');
  }
}

function cmdList() {
  const { listCreators } = require('../lib/store');
  const rows = listCreators();
  if (!rows.length) return console.log('\n  nothing checked yet\n');
  console.log();
  for (const r of rows) console.log(`  ${pad(r.creator_id, 24)} first seen ${r.first_seen.slice(0, 10)}`);
  console.log();
}

function pad(s, w) { s = String(s); return s.length >= w ? s + ' ' : s + ' '.repeat(w - s.length); }

function usage(msg) {
  if (msg) console.error(`\n  ${msg}`);
  console.error(`
  ONE CREATOR
  warhol check  <handle> [--brief "..."]   go and look; write observations; print the report
  warhol report <handle> [--as-of DATE]    rebuild the report from the log, at a date
  warhol checks <handle>                   every place, every status — the check record

  A DAY'S WORK — one brief, up to ${WEIGHTS.run.maxCandidates} candidates. Demo-scoped, not a crawler (Q24).
  warhol brief  "<description>"            a model proposes candidates from a brief
  warhol brief  "..." --handles a,b,c      seed by hand instead — no model needed
  warhol brief                             the briefs that exist
  warhol run    <brief>                    the ladder over every candidate, in parallel
  warhol drop   <brief> [--as-of DATE]     who cleared, who didn't, and the bill
  warhol export --brief <slug> [--out F]   write the prototype's seed from real observations

  THE RECORD
  warhol cost                              what the passes cost
  warhol proposals                         what the model proposed, and what was there
  warhol forget [--older-than N]           retention: what would age out (plan only)
  warhol list                              who has been checked

  flags:  --no-robots   ignore robots.txt (default: obey it)
          --browser-ua  send a browser user agent instead of identifying as a bot
          --no-model    HTTP and rules only. No model spend. Fit and demand
                        stand as last recorded rather than being re-judged.
          --limit N     on 'brief': how many candidates to ask for (max ${WEIGHTS.run.maxCandidates})
          --confirm     on 'forget': actually delete. Without it, nothing is touched.

  Every creator is checked against a brief. Without --brief the house brief
  applies — "${WEIGHTS.houseBrief}" — because in the product there is always one.
`);
  process.exitCode = 1;
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);
  switch (cmd) {
    case 'check': return cmdCheck(args);
    case 'brief': return cmdBrief(args);
    case 'run': return cmdRun(args);
    case 'drop': return cmdDrop(args);
    case 'export': return cmdExport(args);
    case 'report': return cmdReport(args);
    case 'checks': return cmdChecks(args);
    case 'cost': return cmdCost();
    case 'proposals': return cmdProposals();
    case 'forget': return cmdForget(args);
    case 'list': return cmdList();
    default: return usage();
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
