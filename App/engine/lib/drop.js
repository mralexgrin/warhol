'use strict';
/* ============================================================================
   THE DROP — Task 4, 6 Aug 2026. Scout PRD §5.4, §6.1.

   Every candidate under one brief, ranked, with the gates applied: who cleared,
   who did not, and the reason for each. This is the first thing in the engine
   that is about a DAY rather than about a person.

   Two rules from §5.4 are structural here rather than cosmetic:

   1. THRESHOLD-GATED WITH A CAP. The cap protects attention, the threshold
      protects trust. A creator is dropped from the cap having already cleared
      every gate, so the line saying so has to be different from the line about
      a creator who failed one — "ten was the cap today" is not a judgment
      about the eleventh.

   2. A ZERO-RESULT DAY IS A LEGITIMATE OUTPUT. "Warhol found nothing worth
      your time today" is the feature, not the error path. It renders as a
      designed state with the arithmetic behind it, because a blank screen and
      a considered no are the same pixels and opposite claims.

   Nothing here is stored. The drop is computed from the observation log and
   the brief log every time it is asked for, exactly as a report is (§10.1) —
   which is what makes `--as-of` work on a whole day's work and not just on one
   creator. §8 is explicit that In Drop is computed, not stored.
   ========================================================================== */

const path = require('path');
const { project } = require('./project');
const { getBrief, candidatesFor, runsFor } = require('./briefs');
const { readCosts } = require('./store');

const WEIGHTS = require(path.join(__dirname, '..', 'config', 'weights.json'));

/**
 * Why this creator is not in the drop, in the order a person would ask.
 *
 * ALL blocking gates are returned, not the first — the ones who fail on score
 * and the ones who fail on fit are different stories and the column has to show
 * which is which.
 *
 * Decision 113: `not_established` is NOT listed here, because it no longer
 * blocks. It used to be, and it was on every single row of every drop — which
 * is what made the day-one shape visible in the first place and is exactly why
 * it stopped being a gate. It surfaces as `score.trajectory.stated` on the
 * card instead, where it is a disclosure rather than a verdict.
 */
function blockedBy(score) {
  const out = [];
  if (!score.gates.scoreOverThreshold) out.push({ gate: 'score', why: `${score.total}, under the threshold of ${score.threshold}` });
  if (!score.gates.confidenceOverFloor) out.push({ gate: 'confidence', why: `${Math.round(score.confidence.value * 100)}%, under the floor of ${Math.round(WEIGHTS.minimumConfidence * 100)}% — ${score.confidence.resolved} of ${score.confidence.total} checks settled` });
  if (score.gates.fit !== 'pass') out.push({ gate: 'fit', why: score.fit.because });
  if (score.trajectory.blocks) out.push({ gate: 'trajectory', why: score.trajectory.why });
  return out;
}

/**
 * The bill for one brief. §11.4 asks for a measurement and this is where it
 * lands: cost rows carry the brief they were spent under (see withCost in
 * store.js), so the slice is exact rather than a guess at a time window.
 *
 * `waited` is separated from wall time deliberately. §11.4 says the ratio is
 * what matters, and the ratio it turns out to matter most is not model spend
 * against HTTP — it is time spent fetching against time spent being polite.
 */
function bill(slug, runId) {
  /* Sliced to ONE RUN, not to the brief's whole history. §11.4 asks what
     twenty creators cost end to end, and a brief run twice answered that
     question with forty. The standing figure §6.7 wants — "about $12/month to
     keep watching" — is the other question and gets its own line, so neither
     one has to be inferred by dividing. */
  // Three cases, and they are all reachable: a run id narrows to that run;
  // omitting the argument entirely gives the brief's standing total; and an
  // explicit null — a drop rewound to before this brief had ever run — gives
  // nothing, because no rows carry `run: null`.
  const rows = readCosts().filter((c) => c.brief === slug && (runId === undefined || c.run === runId));
  const byPass = {};
  for (const c of rows) {
    const k = c.pass || 'unknown';
    const b = byPass[k] = byPass[k] || { requests: 0, ms: 0, waited: 0, usd: 0, units: 0, blocked: 0, errors: 0, creators: new Set() };
    b.requests += 1;
    b.ms += c.ms || 0;
    b.waited += c.waited || 0;
    b.usd += c.usd || 0;
    b.units += c.units || 0;
    if (c.blocked) b.blocked += 1;
    if (c.error) b.errors += 1;
    if (c.creator) b.creators.add(c.creator);
  }
  const passes = Object.entries(byPass).map(([pass, b]) => ({ pass, ...b, creators: b.creators.size }));
  return {
    passes,
    rows: rows.length,
    /* Split by kind, because the two are different claims and the drop head
       makes one of them. "N checks across every source that was switched on"
       is fetches — an HTTP request against a place in the catalogue. Counting
       model calls in with them inflates the checking claim with work that did
       no checking, and on a --no-model run the two totals are identical, which
       is exactly when the conflation is invisible. */
    fetches: rows.filter((c) => c.kind === 'http').length,
    calls: rows.filter((c) => c.kind === 'llm').length,
    creators: new Set(rows.map((c) => c.creator).filter(Boolean)).size,
    usd: passes.reduce((a, p) => a + p.usd, 0),
    units: passes.reduce((a, p) => a + p.units, 0),
    ms: passes.reduce((a, p) => a + p.ms, 0),
    waited: passes.reduce((a, p) => a + p.waited, 0),
  };
}

/**
 * @param {string} ref   a brief slug, id, or unique prefix
 * @param {string|null} asOf  §7 — the same rewind, applied to a whole day
 */
function buildDrop(ref, asOf) {
  const brief = getBrief(ref);
  if (!brief) return null;

  const candidates = candidatesFor(brief.slug);
  /* §7 applied to a whole day, not just to one creator. A drop rewound to
     Tuesday must not head itself "last run Thursday" and then bill Thursday's
     requests against Tuesday's evidence — the rewind is the absence of rows,
     and a run is a row like any other. */
  const cut = asOf ? new Date(asOf).getTime() : null;
  const runs = runsFor(brief.slug)
    .filter((r) => r.finished_at)
    .filter((r) => cut === null || new Date(r.finished_at).getTime() <= cut);
  const lastRun = runs.length ? runs[runs.length - 1] : null;

  const checked = [];
  const unchecked = [];
  for (const c of candidates) {
    const report = project(c.creator_id, asOf);
    if (!report) { unchecked.push(c); continue; }
    checked.push({
      creatorId: c.creator_id,
      /* THE BRIEF'S OWN CANDIDATE ROW WINS, and the order used to be the other
         way round. `creator.source` is one observation per creator and the
         latest one is the one project() returns — so a person somebody typed
         into the house brief, later proposed by a model under a second brief,
         came back through here tagged `proposed` in BOTH drops. It surfaced as
         a PROPOSED tag on the top card of the house drop, against a name a
         human had chosen: §11.1's tag saying the opposite of what happened.

         Provenance is a fact about (creator, brief), and the candidate row is
         where that pair is written down. The observation stays as the fallback
         for `warhol check`, where there is no brief and therefore no row. */
      source: c.source || report.source,
      why: c.why,
      report,
      score: report.score,
      blocked: blockedBy(report.score),
    });
  }

  checked.sort((a, b) => b.score.total - a.score.total);

  const eligible = checked.filter((x) => x.score.entersDrop);
  const cap = WEIGHTS.run.dropCap;
  const cleared = eligible.slice(0, cap);
  // Cleared every gate and lost to the cap. A different sentence from "held
  // back", and §5.4 is the reason it needs one.
  const overflow = eligible.slice(cap);
  const held = checked.filter((x) => !x.score.entersDrop);

  return {
    brief,
    asOf: asOf || null,
    lastRun,
    candidates: candidates.length,
    checked: checked.length,
    unchecked,
    cleared,
    overflow,
    held,
    cap,
    threshold: WEIGHTS.threshold,
    proposed: checked.filter((x) => x.source === 'proposed').length,
    // §5.7's gradient as a count rather than an assertion: how many of them the
    // spend rule actually let through to the expensive pass.
    escalated: checked.filter((x) => x.report.escalated).length,
    bill: bill(brief.slug, lastRun ? lastRun.run_id : null),
    standing: { ...bill(brief.slug), runs: runs.length },
  };
}

module.exports = { buildDrop, blockedBy, bill };
