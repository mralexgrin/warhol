'use strict';
/* ============================================================================
   THE REPORT, in a terminal. Same order as PRD §6.2:
   Demand → why they're on this list → Pressure → Missing.
   Plain English throughout; every absence carries where we looked.
   ========================================================================== */

const C = {
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
};

const RULE = '─'.repeat(74);

function n(x) {
  if (x == null) return '?';
  if (x >= 1e6) return `${(x / 1e6).toFixed(1)}m`;
  if (x >= 1e3) return `${Math.round(x / 1e3)}k`;
  return String(x);
}

function mark(state) {
  if (state === 'present') return C.green('✓');
  if (state === 'verified_absent') return C.red('✗');
  return C.yellow('?');
}

function render(report, opts = {}) {
  const s = report.score;
  const out = [];
  const p = (l = '') => out.push(l);

  p();
  p(C.bold(`${report.creatorId}`) + '   ' + C.dim(report.surfaces.filter((x) => x.read).map((x) => `${x.platform} ${n(x.followers)}`).join(' · ') || 'no readable profile'));
  p(C.dim(`score ${s.total}  ·  threshold ${s.threshold}  ·  confidence ${Math.round(s.confidence.value * 100)}% (${s.confidence.resolved} of ${s.confidence.total} checks we can settle either way)`));
  if (s.confidence.cannotSee) {
    const names = report.inventory.filter((i) => i.presenceOnly || i.requiresApi).map((i) => i.label.toLowerCase());
    p(C.dim(`${' '.repeat(0)}${s.confidence.cannotSee} we can't settle at all: ${names.join(', ')} — they can show up as present, never as absent`));
  }
  // Q10 — an unconfirmed hit is the state confidence exists to express, so it
  // is named where the number is, not buried in the inventory list.
  if (s.confidence.unconfirmed) {
    const names = report.inventory.filter((i) => i.state === 'present' && i.corroborated === false).map((i) => i.label.toLowerCase());
    p(C.dim(`${s.confidence.unconfirmed} found at their name but not confirmed as theirs: ${names.join(', ')} — counted as unresolved`));
  }
  // Task 4 — a name a person typed and a name a model produced are different
  // claims, and only one of them has a human behind it. §6.4 treats Run a Name
  // as an explicit hunch; a proposed name is not even that until somebody looks
  // at it. The inventory below is checked either way; the PERSON is not.
  if (report.source === 'proposed') {
    p(C.yellow('proposed by a model from a brief — nothing has checked this is the person it meant'));
    if (report.sourceWhy) p(C.dim(`  ${trim(report.sourceWhy, 96)}`));
  }
  if (report.asOf) p(C.cyan(`as of ${report.asOf} — the question is today's, the evidence is not`));
  p(RULE);

  // DEMAND
  p(C.bold('DEMAND') + C.dim('   Do people want to buy?') + `${' '.repeat(28)}+${s.demand.points}`);
  if (s.demand.signalCount) {
    p(`  ${s.demand.signalCount} line${s.demand.signalCount === 1 ? '' : 's'} asking to buy or subscribe, in text we could read.`);
    for (const sig of s.demand.signals.slice(0, 3)) p(C.dim(`    "${trim(sig.quote, 62)}"  → ${sig.points_at}`));
  } else {
    // Q6 — four different silences, and they are not the same sentence. §11.3
    // is explicit that an unreadable comment section and an empty one mean
    // different things about a creator, and until the YouTube API landed the
    // report could not tell them apart. `fit = not_judged` is how the score
    // already records "no model ran", so it doubles as the test for whether
    // anything looked at the comments we fetched.
    const read = report.commentsRead;
    const modelRan = s.fit.verdict !== 'not_judged';
    let why;
    if (read == null) why = 'we did not get as far as their comments';
    else if (read === 0) why = 'no comment section anywhere would give us its text — TikTok is gated, Instagram is closed (§11.3)';
    else if (!modelRan) why = `we read ${read} comment${read === 1 ? '' : 's'} and nothing has classified them — the model pass did not run`;
    else why = `nothing in the ${read} comment${read === 1 ? '' : 's'} we read asked to buy`;
    p(C.dim(`  not found — ${why}`));
    p(C.dim('  scores neutral and lowers confidence. PRD §11.3: this is the designed behaviour.'));
  }
  p();

  // WHY THEY'RE ON THIS LIST
  p(C.bold("WHY THEY'RE ON THIS LIST"));
  p(`  Audience ${n(report.audience)}${report.audienceWhy ? ` · ${report.audienceWhy}` : ''}`);
  // Q11(b) said it in words, not a percentage. This is the words.
  for (const sep of report.audienceSeparate || []) {
    p(C.dim(`    ${n(sep.followers)} more at the same handle — ${sep.why}`));
  }
  // Decision 113 — when there is no reading yet, lead with the plain statement
  // the card carries and keep the reasoning behind it. `not_established` is a
  // disclosure now, not a verdict, and printing it in the verdict register was
  // half of why it read as a failure.
  if (s.trajectory.stated) {
    p(`  Trajectory: ${s.trajectory.stated}`);
    p(C.dim(`    ${s.trajectory.why}`));
  } else {
    p(`  Trajectory: ${gateWord(s.trajectory.verdict)} — ${s.trajectory.why}`);
  }
  p(`  Fit: ${gateWord(s.fit.verdict)} — ${s.fit.because}`);
  p(C.dim(`  against the brief: "${trim(report.brief || s.brief || '', 62)}"`));
  p();

  // PRESSURE
  p(C.bold('PRESSURE') + C.dim('   Will they take the call?') + `${' '.repeat(23)}${s.pressure.points}/${s.pressure.max}`);
  const quoted = s.pressure.parts.find((x) => x.quote);
  if (quoted) p(`  "${trim(quoted.quote, 66)}"  ${C.dim('— them')}`);
  for (const part of s.pressure.parts.filter((x) => !x.quote)) {
    const tag = part.unavailable ? C.dim('  ·') : (part.points > 0 ? C.red('  ●') : C.dim('  ○'));
    p(`${tag} ${part.unavailable ? C.dim(part.line) : part.line}`);
  }
  // The ceiling is a fact about THIS creator, not about the engine (Q6). One
  // with a readable YouTube reaches 34 of 40; one without still reaches 22, and
  // each dark signal has said why on its own line just above.
  const dark = s.pressure.parts.filter((x) => x.unavailable);
  p(C.dim(dark.length
    ? `  Ceiling on this look is ${s.pressure.ceilingToday} of ${s.pressure.max} — ${dark.length} of ${s.pressure.parts.length} signals we can't read yet.`
    : `  All ${s.pressure.parts.length} signals read on this look — the ceiling is the full ${s.pressure.max}.`));
  p();

  // MISSING
  p(C.bold('MISSING') + C.dim('   Is there anything to buy?') + `${' '.repeat(23)}+${s.missing.points}`);
  p(C.dim('  WHAT THEY\'VE BUILT'));
  for (const item of report.inventory.filter((i) => i.half === 'built')) {
    p(`  ${mark(item.state)} ${pad(item.label, 24)} ${item.why}`);
  }
  p(C.dim(`  WHAT THEY'VE SWITCHED ON — ${s.missing.switchedOn}`));
  for (const item of report.inventory.filter((i) => i.half === 'switched_on')) {
    p(`  ${mark(item.state)} ${pad(item.label, 24)} ${item.why}`);
  }
  p();
  p(RULE);

  // VERDICT
  const gates = s.gates;
  p(C.bold(s.entersDrop ? C.green('ENTERS THE DROP') : 'DOES NOT ENTER THE DROP'));
  p(`  score ≥ ${s.threshold}       ${bool(gates.scoreOverThreshold)}  (${s.total})`);
  p(`  confidence ≥ ${Math.round(0.6 * 100)}%   ${bool(gates.confidenceOverFloor)}  (${Math.round(s.confidence.value * 100)}%)`);
  p(`  fit = pass        ${bool(gates.fit === 'pass')}  (${gates.fit})`);
  // Decision 113 — three verdicts, one of which does not block. Printing a red
  // "no" beside a reading nobody has yet is the bug this decision fixed, so the
  // unread state gets its own mark and says outright that it is not a blocker.
  if (s.trajectory.blocks === false && s.trajectory.verdict === 'not_established') {
    p(C.dim(`  trajectory        —    (no reading yet — does not block)`));
  } else {
    p(`  trajectory = pass ${bool(gates.trajectory === 'pass')}  (${gates.trajectory})`);
  }
  p();
  p(C.dim(`How we checked · ${report.checkRecord.checks} checks across ${report.checkRecord.places} places, ${report.checkRecord.from.slice(0, 10)}–${report.checkRecord.to.slice(0, 10)}`));
  p(C.dim(`   warhol checks ${report.creatorId}   to open them`));
  p();
  return out.join('\n');
}

function renderChecks(report) {
  const out = [];
  const p = (l = '') => out.push(l);
  p();
  p(C.bold(`How we checked — ${report.creatorId}`));
  p(C.dim('Every place, the date, the URL, and what came back. This is what makes'));
  p(C.dim('"we looked in 6 places" a fact rather than a claim.'));
  p();
  for (const item of report.inventory) {
    p(`${mark(item.state)} ${C.bold(item.label)}  ${C.dim(item.why)}`);
    for (const c of item.checks) {
      const badge = c.outcome === 'hit' ? C.green('hit ') : c.outcome === 'miss' ? C.red('miss') : C.yellow('??? ');
      p(`    ${badge} ${pad(String(c.status ?? '-'), 4)} ${pad(c.place, 18)} ${C.dim(trim(c.url || '', 46))}`);
      p(`         ${C.dim(c.why)}`);
    }
    p();
  }
  return out.join('\n');
}

/* ============================================================================
   THE DROP — a day's work on one screen. Scout PRD §5.4, §6.1.

   The order is the argument: what cleared, then what did not and why, then the
   bill. A zero-result day gets more words than a full one, not fewer, because
   an empty list and a considered no are the same pixels otherwise.
   ========================================================================== */
function renderDrop(drop) {
  const out = [];
  const p = (l = '') => out.push(l);
  const d = drop;

  p();
  p(C.bold(`Today's drop — ${d.brief.slug}`));
  p(C.dim(`  "${trim(d.brief.text, 88)}"`));
  const when = d.lastRun ? d.lastRun.finished_at.slice(0, 16).replace('T', ' ') : (d.asOf ? 'not yet, at this date' : 'never');
  p(C.dim(`  ${d.checked} of ${d.candidates} candidates checked · last run ${when}${d.proposed ? ` · ${d.proposed} of them proposed by a model` : ''}`));
  if (d.asOf) p(C.cyan(`  as of ${d.asOf} — the question is today's, the evidence is not`));
  p(C.dim('  Demo-scoped: one brief, up to 20 candidates, one model call. Not a crawler (Q24).'));
  p(RULE);

  if (!d.checked) {
    p(C.yellow('  NOTHING HAS BEEN CHECKED UNDER THIS BRIEF YET'));
    p(`  ${d.candidates} candidate${d.candidates === 1 ? '' : 's'} waiting. Run: warhol run ${d.brief.slug}`);
    p();
    return out.join('\n');
  }

  if (d.cleared.length) {
    p(C.bold(C.green(`${d.cleared.length} IN THE DROP`)));
    p();
    for (const x of d.cleared) p(card(x));
  } else {
    /* §5.4 verbatim: "Warhol found nothing worth your time today" is a feature.
       A fixed daily ten forces filler on thin days and quietly teaches the
       Scout the list is arbitrary. So the empty state carries the arithmetic
       that produced it — that is the difference between a considered no and a
       page that failed to load. */
    p(C.bold(C.yellow('WARHOL FOUND NOTHING WORTH YOUR TIME TODAY')));
    p();
    p(`  ${d.checked} creator${d.checked === 1 ? '' : 's'} went through the full ladder and none of them cleared every gate.`);
    p('  That is a designed outcome, not an error (§5.4). A fixed daily ten forces');
    p('  filler on thin days and teaches you the list is arbitrary. Everyone who was');
    p('  looked at is below, with what stopped them.');
    p();
  }

  if (d.overflow.length) {
    p(C.dim(`  ${d.overflow.length} more cleared every gate and lost to the cap of ${d.cap} — the cap protects attention, not the judgment.`));
    for (const x of d.overflow) p(C.dim(`    ${pad(x.creatorId, 22)} ${x.score.total}`));
    p();
  }

  if (d.held.length) {
    p(C.bold('WHO ELSE WAS LOOKED AT, AND WHAT STOPPED THEM'));
    p(C.dim(`  ${pad('creator', 22)}${pad('score', 7)}${pad('conf', 6)}${pad('audience', 10)}what stopped them`));
    for (const x of d.held) {
      const s = x.score;
      const conf = `${Math.round(s.confidence.value * 100)}%`;
      const gates = x.blocked.map((b) => b.gate).join(', ');
      p(`  ${pad(x.creatorId, 22)}${pad(s.total, 7)}${pad(conf, 6)}${pad(n(x.report.audience), 10)}${C.dim(gates)}`);
      /* The one sentence worth carrying is a statement about THEM. A real fit
         failure is the best of those. `not_judged` is not one — it says only
         that no model ran, it is identical on every row, and leading with it
         would print the same sentence twenty times and teach the reader the
         column is decoration. Trajectory is last for the same reason: on a
         first look it is `not_established` for everybody, structurally. */
      const realFit = x.blocked.find((b) => b.gate === 'fit' && x.score.fit.verdict === 'fail');
      const lead = realFit
        || x.blocked.find((b) => b.gate === 'score')
        || x.blocked.find((b) => b.gate === 'confidence')
        || x.blocked[0];
      if (lead) p(C.dim(`  ${' '.repeat(22)}${trim(`${lead.gate}: ${lead.why}`, 68)}`));
    }
    p();
  }

  if (d.unchecked.length) {
    p(C.dim(`  ${d.unchecked.length} candidate${d.unchecked.length === 1 ? '' : 's'} proposed but never checked: ${d.unchecked.map((c) => c.creator_id).join(', ')}`));
    p();
  }

  p(RULE);
  p(renderBill(d.bill, d.checked, d.lastRun, d.escalated));
  // §6.7 — a brief is a standing job that spends every day it runs, so the
  // running total is a different question from what one day cost.
  if (d.standing && d.standing.runs > 1) {
    p(C.dim(`  Standing total for this brief: ${d.standing.runs} runs, ${d.standing.rows} calls, ${d.standing.units} quota units, $${d.standing.usd.toFixed(4)}.`));
    p();
  }
  return out.join('\n');
}

/** §6.1's card: three claims and nothing else, in the order the report repeats. */
function card(x) {
  const s = x.score;
  const r = x.report;
  const lines = [];
  const tag = x.source === 'proposed' ? C.yellow(' proposed') : '';
  lines.push(`  ${C.bold(`(${s.total})`)}  ${C.bold(r.creatorId)}${tag}   ${C.dim(`${n(r.audience)} · confidence ${Math.round(s.confidence.value * 100)}%`)}`);
  const demand = s.demand.signalCount
    ? `${s.demand.signalCount} line${s.demand.signalCount === 1 ? '' : 's'} asking to buy or subscribe`
    : 'nothing we could read asked to buy';
  lines.push(`   ${dot(s.demand.points)} ${pad('Demand', 10)}${demand}`);
  const gaps = s.missing.lines.slice(0, 2).map((l) => l.label.toLowerCase());
  lines.push(`   ${dot(s.missing.points)} ${pad('Missing', 10)}${gaps.length ? `no ${gaps.join(', no ')}` : 'nothing verified absent'}`);
  const quote = s.pressure.parts.find((y) => y.quote);
  lines.push(`   ${dot(s.pressure.points)} ${pad('Pressure', 10)}${quote ? `"${trim(quote.quote, 52)}" — them` : s.pressure.parts.filter((y) => y.points > 0).map((y) => y.line)[0] || 'nothing we can read yet'}`);
  lines.push('');
  return lines.join('\n');
}

function dot(points) { return points > 0 ? C.red('●') : C.dim('○'); }

/* §11.4 — the measurement it asks for, sliced to one brief. */
function renderBill(b, creators, lastRun, escalated) {
  const out = [];
  const p = (l = '') => out.push(l);
  p(C.bold('THE BILL') + C.dim(`   ${creators} creator${creators === 1 ? '' : 's'}, end to end — PRD §11.4, measured not asserted`));
  p();
  // These are summed across creators running concurrently, so they add up to
  // more than the clock on the wall. Both figures are printed below and the
  // gap between them is what the parallelism bought.
  p(C.dim(`  ${pad('pass', 9)}${pad('creators', 10)}${pad('requests', 10)}${pad('fetching', 10)}${pad('waiting', 10)}${pad('api units', 11)}model $`));
  p('  ' + '─'.repeat(72));
  for (const x of b.passes) {
    p(`  ${pad(x.pass, 9)}${pad(x.creators, 10)}${pad(x.requests, 10)}${pad(secs(x.ms - x.waited), 10)}${pad(secs(x.waited), 10)}${pad(x.units, 11)}$${x.usd.toFixed(4)}`);
  }
  p('  ' + '─'.repeat(72));
  if (!creators) return out.join('\n');

  // A run whose requests were never attributed to it — one from before cost
  // rows carried a run id, or a drop rewound past the instrumentation. Zero
  // requests and zero dollars is the arithmetic; "we did not measure it" is
  // the fact, and printing the first without the second is how a cost table
  // starts claiming a run was free.
  if (!b.rows) {
    p(C.dim('  Nothing was billed to this run. Its requests were made before costs carried a'));
    p(C.dim('  run id, so they are in the standing total and not attributable to a day.'));
    p();
    return out.join('\n');
  }

  p(`  per creator: ${Math.round(b.rows / creators)} calls · $${(b.usd / creators).toFixed(4)} of model · ${(b.units / creators).toFixed(1)} quota units`);
  if (lastRun && lastRun.ms) {
    p(`  ${secs(lastRun.ms)} on the clock for all ${creators}, against ${secs(b.ms)} of request time added up —`);
    p(`  ${(b.ms / lastRun.ms).toFixed(1)}× is what running them side by side bought.`);
  }
  p();

  /* THE GRADIENT §5.7 ASSERTS, stated as what was actually measured — and the
     two halves of §11.4 kept apart, because only one of them has been answered.

     The ladder is measured: the spend rule opened on `escalated` of `creators`,
     and the rest stopped after Probe. That is real and it is the argument for
     the whole shape.

     The dollar figure is NOT measured until a model has run. The earlier
     version of this block said "every dollar is in Study" beside a total of
     $0.0000, which reads as a finding and is an absence — exactly the
     confusion §11.3 spends a paragraph on, committed by the cost table itself.
     So the condition is the spend, not the pass: a Study pass with HTTP rows
     and no model call has measured the comment read and nothing else. */
  p(C.dim(`  The ladder, measured: the spend rule opened on ${escalated} of ${creators}. The other`));
  p(C.dim(`  ${creators - escalated} stopped after Probe — no model call was ever going to be made for them.`));

  /* The Study row counts creators who cost something, and the gate opened on
     more than that. The gap is real and it is §11.3: a creator can be worth
     the expensive pass and still have no comment section anywhere that will
     hand over its text, so Study reaches them and finds nothing to buy. Left
     unexplained the two numbers look like one of them is wrong. */
  const study = b.passes.find((x) => x.pass === 'study');
  const billed = study ? study.creators : 0;
  if (escalated > billed) {
    p(C.dim(`  ${escalated - billed} of those ${escalated} cost nothing anyway — they escalated, and then no comment`));
    p(C.dim('  section anywhere would give us its text (§11.3). Reaching a creator is not'));
    p(C.dim('  the same as having something of theirs to read.'));
  }
  if (b.usd === 0) {
    p(C.dim('  Every figure here is $0.00 because no model ran, not because the passes are free.'));
    p(C.dim('  Sweep and Probe genuinely are — they are HTTP and rules — but the Study figure'));
    p(C.dim('  §11.4 asks for is still unmeasured, and needs ANTHROPIC_API_KEY to settle.'));
  } else {
    const free = b.passes.filter((x) => x.pass !== 'study').reduce((a, x) => a + x.usd, 0);
    p(C.dim(`  Sweep and Probe: $${free.toFixed(4)}. Study: $${(b.usd - free).toFixed(4)} across ${escalated} creators —`));
    p(C.dim(`  $${(escalated ? (b.usd - free) / escalated : 0).toFixed(4)} each. That ratio is the argument for the ladder.`));
  }
  if (b.waited > 0) {
    p(C.dim(`  ${Math.round((b.waited / (b.ms || 1)) * 100)}% of that request time was the per-host politeness delay, not fetching.`));
    p(C.dim('  Politeness is the binding constraint on the size of a drop, not compute (§11.4).'));
    p(C.dim('  Past this line more parallelism buys nothing — the queue is per host, and raising'));
    p(C.dim('  creatorConcurrency only makes more creators wait in the same one.'));
  }
  p();
  return out.join('\n');
}

function secs(ms) { return `${(ms / 1000).toFixed(1)}s`; }

function bool(b) { return b ? C.green('yes') : C.red('no '); }
function gateWord(v) {
  if (v === 'pass') return C.green('pass');
  if (v === 'fail') return C.red('fail');
  return C.yellow(v);
}
function pad(s, w) { s = String(s); return s.length >= w ? s : s + ' '.repeat(w - s.length); }
function trim(s, w) { s = String(s || '').replace(/\s+/g, ' '); return s.length <= w ? s : s.slice(0, w - 1) + '…'; }

module.exports = { render, renderChecks, renderDrop };
