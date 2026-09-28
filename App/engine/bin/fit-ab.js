#!/usr/bin/env node
'use strict';
/* ============================================================================
   FIT, ON TWO MODELS — 11 August 2026.

   Fit is 46% of the model bill, and it is on Opus for a reason the config
   states plainly: it is a GATE (§5.4), so a wrong verdict does not lower
   confidence the way a missed demand signal does — it silently admits or
   excludes a person, and nothing downstream can tell.

   That reasoning is sound and it is also untested. It was written when this
   file offered one alternative, Haiku, which is genuinely too weak for a gate.
   It was never weighed against a middle tier, because there was none. So the
   premium has been assumed rather than measured for as long as it has existed.

   WHY FIT IS THE ONE CALL WORTH TESTING THIS WAY. Its output is a two-value
   verdict. There is no rubric to write and no grader to trust: run both models
   over the same creators and count how often they disagree. Demand and
   Pressure return free text and would need judgment about judgment; Fit
   answers itself.

   WHAT THIS DOES NOT DO. It does not route anything. Nothing in the engine
   reads its result, and `models.judge` stays on Opus until a person reads this
   table and changes it. A measurement that also acts on itself is not a
   measurement.

   WHAT DISAGREEMENT MEANS, decided before the numbers arrive so the threshold
   is not fitted to them:

     agreement >= 95%   the premium is not buying verdicts. Switch.
     90-95%             switch only if the disagreements are on creators whose
                        Fit was borderline anyway. Read them.
     < 90%              Opus is earning it. Keep it, and this file is the
                        evidence for why.

   Run:  zsh -lc 'node bin/fit-ab.js [--limit 40]'
   ========================================================================== */

const path = require('path');
const { project } = require('../lib/project');
const { listCreators } = require('../lib/store');
const llm = require('../lib/llm');

const WEIGHTS = require(path.join(__dirname, '..', 'config', 'weights.json'));

const CHALLENGER = 'claude-sonnet-5';

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

/* The same shape judgeFit reads in the real pass — handle, platforms, bio,
   captions. Rebuilt from the log rather than re-fetched, so the two models see
   byte-identical input and the only variable is the model. */
function dossierFor(report) {
  return {
    handle: report.creatorId,
    surfaces: (report.surfaces || []).map((s) => ({
      platform: s.platform,
      followers: s.followers,
      bio: s.bio,
      captions: s.captions || [],
    })),
  };
}

async function judgeWith(model, brief, dossier) {
  const cfg = {
    ...WEIGHTS.llm,
    models: { ...WEIGHTS.llm.models, judge: model },
  };
  const t0 = Date.now();
  const r = await llm.judgeFit(brief, dossier, cfg);
  return { ...r, ms: Date.now() - t0, model };
}

async function main() {
  if (!llm.available()) {
    console.error(`\n  Cannot run: ${llm.reason()}\n`);
    process.exitCode = 1;
    return;
  }

  const limit = Number(arg('limit', 40));

  /* Only creators the engine has actually judged. A creator with no recorded
     Fit has no incumbent verdict to disagree with, and including them would
     measure the two models against each other rather than against the answer
     the product has been shipping. */
  const pool = [];
  for (const { creator_id } of listCreators()) {
    const r = project(creator_id, null);
    if (!r || !r.score || !r.score.fit) continue;
    if (r.score.fit.verdict !== 'pass' && r.score.fit.verdict !== 'fail') continue;
    if (!(r.surfaces || []).some((s) => s.read)) continue;
    pool.push(r);
    if (pool.length >= limit) break;
  }

  if (!pool.length) {
    console.error('\n  No creator in the log has a recorded Fit verdict to compare against.\n');
    process.exitCode = 1;
    return;
  }

  const est = pool.length * 0.0136;
  console.error(`\n  ${pool.length} creators · two models each · roughly $${est.toFixed(2)}\n`);

  const rows = [];
  for (const r of pool) {
    const d = dossierFor(r);
    const [a, b] = await Promise.all([
      judgeWith(WEIGHTS.llm.models.judge, r.brief, d),
      judgeWith(CHALLENGER, r.brief, d),
    ]);
    if (!a.ok || !b.ok) {
      console.error(`  ${r.creatorId} · skipped — ${(a.ok ? b : a).why}`);
      continue;
    }
    const agree = a.verdict === b.verdict;
    rows.push({ id: r.creatorId, incumbent: r.score.fit.verdict, opus: a.verdict, sonnet: b.verdict, agree, aMs: a.ms, bMs: b.ms, aWhy: a.because, bWhy: b.because });
    process.stderr.write(agree ? '.' : 'X');
  }
  process.stderr.write('\n\n');

  if (!rows.length) {
    console.error('  Every comparison failed. Nothing to report.\n');
    process.exitCode = 1;
    return;
  }

  const agreed = rows.filter((r) => r.agree).length;
  const pct = (agreed / rows.length) * 100;

  console.log('  FIT — OPUS 5 vs SONNET 5');
  console.log('  ' + '─'.repeat(72));
  console.log('  creator'.padEnd(30) + 'recorded'.padEnd(11) + 'opus'.padEnd(8) + 'sonnet'.padEnd(9) + 'agree');
  for (const r of rows) {
    console.log('  ' + r.id.slice(0, 28).padEnd(30) + r.incumbent.padEnd(11) +
      r.opus.padEnd(8) + r.sonnet.padEnd(9) + (r.agree ? 'yes' : 'NO'));
  }
  console.log('  ' + '─'.repeat(72));
  console.log(`  ${agreed} of ${rows.length} agree — ${pct.toFixed(1)}%`);

  const median = (xs) => { const s = [...xs].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
  console.log(`  median latency · opus ${median(rows.map((r) => r.aMs))}ms · sonnet ${median(rows.map((r) => r.bMs))}ms`);

  /* Both models against the verdict the product has been shipping. A model
     that disagrees with the incumbent is not necessarily wrong — the incumbent
     was itself one Opus call on one day — but a large gap on either side is
     the thing to read before trusting the headline number. */
  const vs = (k) => rows.filter((r) => r[k] === r.incumbent).length;
  console.log(`  against the recorded verdict · opus ${vs('opus')}/${rows.length} · sonnet ${vs('sonnet')}/${rows.length}`);

  const disagreements = rows.filter((r) => !r.agree);
  if (disagreements.length) {
    console.log('\n  WHERE THEY DIVERGE — read these before deciding.');
    for (const r of disagreements) {
      console.log(`\n  ${r.id}  ·  opus=${r.opus}  sonnet=${r.sonnet}`);
      console.log(`    opus   — ${(r.aWhy || '').slice(0, 150)}`);
      console.log(`    sonnet — ${(r.bWhy || '').slice(0, 150)}`);
    }
  }

  console.log('\n  ' + (pct >= 95
    ? 'At or above 95%: the premium is not buying verdicts. Switch models.judge to claude-sonnet-5.'
    : pct >= 90
      ? '90-95%: read the divergences above. Switch only if they were borderline anyway.'
      : 'Below 90%: Opus is earning its price on this gate. Keep it.'));
  console.log('  Nothing was routed. models.judge is unchanged.\n');
}

main();
