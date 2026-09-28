'use strict';
/* ============================================================================
   THE SCORE — PRD §5.1–5.4.

     Opportunity (60) = Demand (25) + Missing (35)
     Pressure    (40)
     Fit         gate, no points
     Trajectory  gate, no points

   Two things here are deliberately visible rather than hidden:

   1. Missing is a WEIGHTED SUM, not a count (§5.2, §10.6), and an absence is
      worth more when the demand points straight at it (decision 102). Nearly
      every creator lacks affiliate links; counting them separates nobody.

   2. Some of what Pressure and Trajectory want is a change over time, and a
      first look is one point. Q6 (6 Aug 2026) moved the line: the YouTube API
      hands over the publish date of every upload, so posting cadence is now
      readable in a single visit and the first-look Pressure ceiling went from
      22/40 to 34/40. Audience trend did not move and will not — nobody stamps
      a follower count — so `unanswered_audience` stays dark and Trajectory
      still returns "not_established", which is neither a pass nor a fail. The
      alternative is inventing a trend from one data point, which is the exact
      failure §5.3 exists to prevent.
   ========================================================================== */

function demandPoints(signals, weights) {
  const n = signals.length;
  if (!n) return { points: 0, n: 0 };
  const { halfPoint } = weights.demandCurve;
  const points = weights.pillars.demandMax * (n / (n + halfPoint));
  return { points: round(points), n };
}

function alignmentByItem(signals) {
  const counts = {};
  for (const s of signals) {
    const k = s.points_at && s.points_at !== 'unspecified' ? s.points_at : null;
    if (k) counts[k] = (counts[k] || 0) + 1;
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  const out = {};
  for (const [k, v] of Object.entries(counts)) out[k] = v / total;
  return out;
}

function missingPoints(inventory, signals, dossier, weights) {
  const align = alignmentByItem(signals || []);
  const base = weights.absenceWeights;
  const boost = weights.demandAlignment.maxMultiplier - 1;

  let applicable = 0;
  let earned = 0;
  const lines = [];

  for (const item of inventory) {
    if (item.state === 'doesnt_apply') continue;
    let w = base[item.item] || 0;

    // §5.2 — no YouTube is the top line only against a LARGE short-form audience.
    if (item.item === 'youtube_channel' && dossier.shortFormAudience < weights.youtubeGap.shortFormAudienceFloor) {
      w = 4;
    }

    applicable += w;
    if (item.state !== 'verified_absent') continue;

    const a = align[item.item] || 0;
    const effective = w * (1 + boost * a);
    earned += effective;
    lines.push({
      item: item.item,
      label: item.label,
      half: item.half,
      base: w,
      effective: round(effective),
      demandAligned: a > 0,
      why: item.why,
    });
  }

  lines.sort((x, y) => y.effective - x.effective);   // weight is order, not a badge
  const share = applicable ? earned / applicable : 0;
  const points = Math.min(weights.pillars.missingMax, weights.pillars.missingMax * share);
  return { points: round(points), lines, share: round(share, 3) };
}

/**
 * Q6, 6 Aug 2026 — cadence decay became a day-one signal, and the ceiling
 * became a fact about THIS creator rather than a fact about the engine.
 *
 * Before: two of the four signals were changes over time we could not see on a
 * first look, so every first run printed a Pressure ceiling of 22/40. Now the
 * YouTube API hands over the publish date of every upload, so posting rate over
 * time is legible in one visit and the engine-wide ceiling is 34/40.
 *
 * But "available in principle" is not "available for her". A creator with no
 * YouTube channel we can find has no posting history to read, and their report
 * has to say 22 and say why — quoting 34 at them would be describing a
 * measurement we did not take. So the ceiling is computed from the signals that
 * actually resolved for this creator, and each one that did not carries its own
 * sentence. A cadence we measured and found steady scores zero and is still
 * AVAILABLE; that is a different thing from not knowing, and the ceiling
 * distinguishes them.
 */
function pressurePoints(inputs, weights) {
  const w = weights.pressureWeights;
  const parts = [];
  let total = 0;
  let unavailableMax = 0;

  const unavailable = (signal, line) => {
    unavailableMax += w[signal].max;
    parts.push({ signal, points: 0, unavailable: true, line, engine: 'rule' });
  };

  // Available on a first look
  if (inputs.deadLinks && inputs.deadLinks.length) {
    const p = Math.min(w.abandonment_markers.max, 6 * inputs.deadLinks.length);
    total += p;
    parts.push({ signal: 'abandonment_markers', points: round(p), line: `${inputs.deadLinks.length} dead link${inputs.deadLinks.length === 1 ? '' : 's'} they still publish — they tried, it broke`, engine: 'rule' });
  } else {
    parts.push({ signal: 'abandonment_markers', points: 0, line: 'nothing abandoned that we can see', engine: 'rule' });
  }

  if (inputs.strain && inputs.strain.length) {
    const p = Math.min(w.self_reported_strain.max, 5 * inputs.strain.length);
    total += p;
    parts.push({ signal: 'self_reported_strain', points: round(p), line: inputs.strain[0].quote, engine: 'llm', quote: inputs.strain[0].quote });
  } else {
    parts.push({ signal: 'self_reported_strain', points: 0, line: inputs.strainReadable === false ? "we couldn't read their captions" : 'they have not said anything like it', engine: 'llm' });
  }

  // Cadence — a change over time the engine can read in ONE look, because
  // YouTube stamps every upload with the date it went public. The config flag
  // is still consulted: if someone flips needsHistory back on, the signal goes
  // dark here rather than in six places.
  const cw = w.cadence_decay;
  const c = inputs.cadence;
  if (cw.needsHistory) {
    unavailable('cadence_decay', 'needs a second look — this is a change over time, and we have seen them once');
  } else if (c && c.computable) {
    const span = cw.declineFull - cw.declineFloor;
    const t = span > 0 ? (c.decline - cw.declineFloor) / span : 0;
    const p = cw.max * Math.min(1, Math.max(0, t));
    total += p;
    parts.push({ signal: 'cadence_decay', points: round(p), line: c.line, engine: 'rule' });
  } else {
    unavailable('cadence_decay', c && c.why
      ? `we could not read their posting rate — ${c.why}`
      : 'we could not read their posting rate — it needs a YouTube channel we can find, and there is not one');
  }

  // Still needs a second look, and will keep needing one: this is the audience
  // asking and going unanswered over time, and nobody stamps a comment thread
  // with "still waiting".
  unavailable('unanswered_audience', 'needs a second look — this is a change over time, and we have seen them once');

  return {
    points: round(total),
    max: weights.pillars.pressureMax,
    ceilingToday: weights.pillars.pressureMax - unavailableMax,
    parts,
  };
}

/**
 * §5.3 — share of checks resolved. "Doesn't apply" leaves both sides.
 *
 * Q1, 6 Aug 2026: the denominator is FALSIFIABLE checks only. Five of the
 * eleven inventory items can return present or not-found but never
 * verified_absent — three because the evidence is a sample or a
 * self-declaration, two because they need partner APIs we do not have. Left in
 * the denominator they sat permanently unresolved and capped confidence at
 * 0.545 against a floor of 0.60, so no creator could ever clear the gate.
 *
 * Confidence means "share of checks resolved", and a check we cannot perform is
 * not a check we ran. The uncheckable ones are named on the report instead —
 * dropping them from the maths without saying so would be hiding them.
 *
 * This is NOT "doesn't apply" (§4.3), which means we did not NEED to check.
 * These we needed to check and could not, which is a different sentence.
 *
 * Q10, 6 Aug 2026: an UNCORROBORATED hit does not count as resolved. "There is
 * a Substack at a name that looks like hers" is precisely the state confidence
 * exists to express, and counting it as settled overstated certainty on the one
 * line most likely to be wrong. It stays in the denominator — we did need to
 * check it — and out of the numerator until something ties it to her.
 */
function confidence(inventory) {
  const falsifiable = inventory.filter((i) => i.state !== 'doesnt_apply' && !i.presenceOnly && !i.requiresApi);
  const unfalsifiable = inventory.filter((i) => i.presenceOnly || i.requiresApi);
  if (!falsifiable.length) return { value: 0, resolved: 0, total: 0, cannotSee: unfalsifiable.length, unconfirmed: 0 };
  const settled = (i) => i.state === 'verified_absent' || (i.state === 'present' && i.corroborated !== false);
  const resolved = falsifiable.filter(settled).length;
  return {
    value: round(resolved / falsifiable.length, 3),
    resolved,
    total: falsifiable.length,
    cannotSee: unfalsifiable.length,
    unconfirmed: falsifiable.filter((i) => i.state === 'present' && i.corroborated === false).length,
  };
}

/** §5.2 decision 103 — a label, not a number. */
function switchedOnLabel(inventory) {
  const on = inventory.filter((i) => i.half === 'switched_on' && i.state === 'present');
  const known = inventory.filter((i) => i.half === 'switched_on' && i.state !== 'not_found');
  if (!known.length) return "we couldn't tell what they've switched on";
  return on.length ? 'a few things, none of them earning' : 'nothing, anywhere';
}

/**
 * Decision 113 — three verdicts, and only one of them blocks.
 *
 *   pass             we looked twice, they are not fading      → enters
 *   fail             we looked twice, they are fading          → blocked
 *   not_established  we have not looked twice yet              → stated, not blocked
 *
 * `stated` is the card line. It is written here rather than in the interface
 * because the reason the reading is missing is a fact about the record, and the
 * screen should not be reconstructing it from a verdict string.
 */
function trajectory(history, weights) {
  const g = weights.trajectoryGate;
  const gap = g.minObservationGapDays;

  if (!history || history.length < 2) {
    return {
      verdict: 'not_established',
      blocks: false,
      stated: `first look — no trend yet, we check back in ${gap} days`,
      why: "we have seen them once. A trend needs two looks at least 90 days apart, and inventing one from a single point is the failure this gate exists to prevent.",
    };
  }
  const sorted = [...history].sort((a, b) => new Date(a.at) - new Date(b.at));
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const days = (new Date(last.at) - new Date(first.at)) / 86400000;
  if (days < gap) {
    return {
      verdict: 'not_established',
      blocks: false,
      stated: `no trend yet — our two looks are ${Math.round(days)} days apart, the trend needs ${gap}`,
      why: `our two looks are ${Math.round(days)} days apart; the gate needs ${gap}.`,
    };
  }
  const yearChange = (last.audience - first.audience) / (first.audience || 1);
  const recent = sorted.slice(-2);
  const quarterChange = (recent[1].audience - recent[0].audience) / (recent[0].audience || 1);
  const failing = yearChange < g.yearDeclineFail && quarterChange < 0;
  return {
    verdict: failing ? 'fail' : 'pass',
    blocks: failing,
    stated: null,
    why: `audience ${pct(yearChange)} across the window, ${pct(quarterChange)} most recently`,
    yearChange: round(yearChange, 3),
    quarterChange: round(quarterChange, 3),
  };
}

function score(dossier, probed, studied, history, weights) {
  // Q20 — no brief, no score. Fit is a gate and a gate has two values; the
  // third one, `unknown`, existed only because a CLI flag was optional. Every
  // creator in the real product is judged against a brief, the house brief at
  // worst (§6.1), so refusing here is cheaper than describing a state that
  // should not exist. Callers default to the house brief; this catches the bug
  // where one forgets to.
  if (!dossier.brief || !String(dossier.brief).trim()) {
    throw new Error('The engine will not score without a brief. Pass one — the house brief is "anyone worth a call" (§6.1).');
  }

  const signals = (studied && studied.demand) || [];
  const d = demandPoints(signals, weights);
  const m = missingPoints(probed.inventory, signals, dossier, weights);
  const p = pressurePoints(
    {
      deadLinks: probed.deadLinks,
      strain: studied && studied.strain,
      strainReadable: !!(studied && studied.ran && studied.ran.includes('strain')),
      cadence: probed.cadence,
    },
    weights
  );

  const opportunity = Math.min(weights.pillars.opportunityMax, d.points + m.points);
  const total = Math.round(opportunity + p.points);
  const conf = confidence(probed.inventory);
  const traj = trajectory(history, weights);

  // Fit has two verdicts, pass and fail, and one way to have neither: nobody
  // made the judgment. That is not a third gate value — it is the absence of a
  // gate reading, it blocks the drop exactly as a fail does, and it names its
  // own cause. "No brief was given" is no longer among the causes (Q20).
  const fit = studied && studied.fit && studied.fit.verdict
    ? studied.fit
    : { verdict: 'not_judged', because: 'the model pass did not run, and Fit is a judgment — no model, no verdict' };

  const gates = {
    scoreOverThreshold: total >= weights.threshold,
    confidenceOverFloor: conf.value >= weights.minimumConfidence,
    fit: fit.verdict,
    trajectory: traj.verdict,
  };

  // Decision 113 (PRD §5.4a, locked 6 Aug 2026) — `not_established` does not
  // block. It is not a third gate value in the sense Q20 rejected for Fit; that
  // one was an artefact of an optional CLI flag. This one is a real and, on day
  // one, universal state of the world: a trend needs two looks 90 days apart,
  // so EVERY creator in a new cohort has no trajectory reading and the gate
  // failed all of them for a fact that does not exist yet. Measured 6 Aug:
  // twenty real brands, zero entering the drop, all three of score/fit/
  // trajectory failing on every row.
  //
  // A gate cannot be passed or failed on evidence nobody has. This is the same
  // position §5.3 takes on absence (not_found is not verified_absent) and §6.2
  // takes on a weak identity match — say what you know, say what you don't.
  // `fail` still blocks, so a creator who is genuinely fading is caught exactly
  // as designed the moment there is enough history to say so.
  //
  // What must NOT happen instead: backdating an observation so the gate can
  // compute. That is fabricated evidence and decision 99 exists to prevent it.
  const entersDrop = gates.scoreOverThreshold
    && gates.confidenceOverFloor
    && fit.verdict === 'pass'
    && !traj.blocks;

  return {
    total,
    brief: dossier.brief,
    demand: { points: d.points, max: weights.pillars.demandMax, signalCount: d.n, signals },
    missing: { points: m.points, max: weights.pillars.missingMax, lines: m.lines, share: m.share, switchedOn: switchedOnLabel(probed.inventory) },
    opportunity: round(opportunity),
    pressure: p,
    fit,
    trajectory: traj,
    confidence: conf,
    threshold: weights.threshold,
    entersDrop,
    gates,
  };
}

function round(n, dp = 1) { const f = 10 ** dp; return Math.round(n * f) / f; }
function pct(x) { const v = Math.round(x * 1000) / 10; return `${v > 0 ? 'up ' : 'down '}${Math.abs(v)}%`; }

module.exports = { score, confidence, trajectory };
