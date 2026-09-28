'use strict';
/* ============================================================================
   ONE CREATOR, ONE LADDER — Task 4, 6 Aug 2026.

   This is the body of `warhol check`, lifted out of the CLI so that `warhol
   run` executes exactly the same thing twenty times.

   It is lifted rather than copied on purpose. The engine PRD §5 says the gate
   between Probe and Study "is the same rule governing the automated pipeline —
   which is what keeps manually-added and machine-found names comparable." Two
   implementations of a ladder drift within a week, and the day they drift the
   comparison quietly stops being true while every screen still claims it.

   The only thing the drop path does differently is that it is quieter and it
   knows which brief it is spending against.
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const { sweep, probe, study, shouldStudy } = require('./passes');
const { project } = require('./project');
const { appendObservation, withCost, DATA } = require('./store');
const llm = require('./llm');

const WEIGHTS = require(path.join(__dirname, '..', 'config', 'weights.json'));

/**
 * Sweep → Probe → the spend rule → Study, and write the report.
 *
 * @param {string} handle
 * @param {object} opts
 *   brief   the text every creator is judged against (Q20 — required; the
 *           caller defaults it to the house brief, this refuses to invent one)
 *   source  'named' — a human typed this handle
 *           'proposed' — a model produced it from a brief and NOTHING has
 *           checked that it is the person the model meant (§11.1, Task 4)
 *   why     the model's one line on why it proposed them
 *   briefSlug  which brief this is being spent against, for the bill
 * @param {object} cfg
 * @param {function} log
 */
async function checkOne(handle, opts, cfg, log) {
  const { brief, source = 'named', why = null, briefSlug = null, runId = null } = opts;
  if (!brief || !String(brief).trim()) {
    throw new Error('every creator is checked against a brief — the house brief at worst (§6.1)');
  }

  const t0 = Date.now();

  // Everything below runs inside one cost context, so every request, every
  // quota unit and every model call underneath comes out stamped with this
  // creator and this brief. Five of these run concurrently in a drop and each
  // keeps its own — that is the whole reason it is async-local and not global.
  return withCost({ brief: briefSlug, creator: handle.toLowerCase(), run: runId }, async () => {
    // ---- SWEEP
    const dossier = await sweep(handle, cfg, log);

    /* WHERE THE NAME CAME FROM — Task 4's one guard on discovery.
       Written as an observation rather than held in the brief log alone,
       because it has to travel to the report: §6.4 says a name a human pasted
       is their hunch, and a name a model proposed is not the same claim. The
       wall does the rest — this row is engine 'llm' for a proposed name, so it
       is structurally incapable of ever carrying a verification state. */
    appendObservation({
      creatorId: dossier.creatorId, pass: 'sweep', key: 'creator.source', value: source,
      engine: source === 'proposed' ? 'llm' : 'rule',
      evidence: source === 'proposed'
        ? `a model proposed this handle from a brief — ${why || 'no reason given'}. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity.`
        : 'a person typed this handle in',
    });

    // Q20 — the brief this check was judged against, recorded so a report
    // rebuilt later knows what the question was.
    appendObservation({
      creatorId: dossier.creatorId, pass: 'sweep', key: 'brief.text', value: brief, engine: 'rule',
      evidence: brief === WEIGHTS.houseBrief ? 'the house brief' : 'the brief this check was run against',
    });

    const readable = dossier.surfaces.filter((s) => s.read);
    log(`sweep · ${readable.length} readable · audience ${dossier.audience.toLocaleString()} · ${dossier.links.length} links they publish`);
    for (const s of dossier.audienceSeparate || []) {
      log(`sweep · ${s.platform} ${s.followers.toLocaleString()} is NOT in that total — same handle, but nothing links the two (Q11b)`);
    }
    if (!readable.length) {
      log('sweep · nothing of theirs was readable. Everything downstream will resolve "not found", which is the honest answer.');
    }

    // ---- optional: let the model propose MORE PLACES (never verdicts)
    let extraPlaces = [];
    if (llm.available() && !cfg.noModel) {
      const proposed = await llm.proposePlaces(dossier, cfg.llm);
      if (proposed.ok) {
        extraPlaces = proposed.urls;
        log(`sweep · the model proposed ${extraPlaces.length} more places to look (it does not get to say what is at them)`);
      }
    }

    // ---- PROBE
    const probed = await probe(dossier, cfg, log, extraPlaces);
    const present = probed.inventory.filter((i) => i.state === 'present');
    const absent = probed.inventory.filter((i) => i.state === 'verified_absent');
    const unknown = probed.inventory.filter((i) => i.state === 'not_found');
    log(`probe · ${present.length} present · ${absent.length} verified absent · ${unknown.length} not found`);

    /* ---- the spend rule.

       `--no-model` is not the ladder declining. It is us declining to ask, and
       the two must not be written down as the same event: §5.6 counts how
       often the ladder escalated as a MEASUREMENT of the cost gradient, and
       filing a suppressed run as "the rule said no" would quietly bias that
       table toward looking thriftier than the rule actually is.

       What makes the flag worth having: the log is append-only and the report
       is computed from it (§10.1), so a Fit verdict or a demand signal bought
       on an earlier run is still there and still projects. A no-model pass
       therefore refreshes everything that is HTTP and rules — inventory,
       feeds, samples, posting rate — while the judgments stand as last
       recorded. Free, and honest about which half is fresh. */
    const gate = cfg.noModel
      ? {
        go: false,
        suppressed: true,
        why: 'the model passes were switched off for this run, so nothing was re-judged — any Fit verdict and demand signals stand as last recorded',
      }
      : shouldStudy(dossier, probed, WEIGHTS);

    /* Task 4 — the ladder writing down its own decision. §5.7 asserts a cost
       gradient and §11.4 asks for it as a measurement; "Study ran on 4 of 20"
       is that measurement, and until now the verdict was printed to a terminal
       and then forgotten. Counting it from the cost rows instead would have
       undercounted every creator who escalated and had no YouTube to read, so
       the escalation says so itself. */
    appendObservation({
      creatorId: dossier.creatorId, pass: 'probe',
      // A run we chose not to spend on is not a rung of the ladder, so it does
      // not get filed as one. `null` reads as "not asked" where false reads as
      // "asked and declined".
      key: 'ladder.escalated', value: gate.suppressed ? null : gate.go,
      engine: 'rule', evidence: gate.why,
    });

    let studied = { available: false, ran: [], skipped: [], why: gate.why };
    if (gate.go) {
      log(`study · escalating — ${gate.why}`);
      studied = await study(dossier, probed, brief, cfg, log);
    } else {
      log(gate.suppressed
        ? `study · not asked — ${gate.why}`
        : `study · stopped before the expensive pass — ${gate.why}`);
    }
    if (studied.fabricated) {
      log(`study · dropped ${studied.fabricated} quote(s) the model produced that do not appear in the source text`);
    }

    const report = project(dossier.creatorId, null);
    fs.writeFileSync(path.join(DATA, `${dossier.creatorId}.json`), JSON.stringify(report, null, 2));

    return { creatorId: dossier.creatorId, report, gate, studied, source, ms: Date.now() - t0 };
  });
}

/**
 * Run the ladder over many creators at once.
 *
 * PARALLELISE ACROSS CREATORS, NEVER AGAINST ONE HOST — Task 4. The two halves
 * of that sentence live in different files and both are load-bearing:
 *
 *   here          a worker pool over PEOPLE, so twenty creators do not queue
 *                 behind each other for no reason
 *   lib/http.js   a synchronously reserved per-host slot, so the twenty of them
 *                 all wanting substack.com still arrive 400ms apart
 *
 * Without the second, this function would be a way of hitting one host twenty
 * times at once while every individual request believed it had waited its turn.
 * The politeness delay is the binding constraint on a drop and it is supposed
 * to be — `warhol drop` prints how much of the wall clock went to it.
 *
 * A creator who throws does not take the drop down with them. The error is
 * carried on the result and named in the aggregate, because a run that checked
 * nineteen of twenty and said twenty is the kind of quiet lie this engine is
 * built to not tell.
 */
async function runMany(candidates, opts, cfg, onDone) {
  const results = new Array(candidates.length);
  const width = Math.max(1, Math.min(cfg.run.creatorConcurrency, candidates.length));
  let next = 0;

  const workers = Array.from({ length: width }, async () => {
    for (;;) {
      const i = next++;
      if (i >= candidates.length) return;
      const c = candidates[i];
      const lines = [];
      try {
        const r = await checkOne(c.creatorId, { ...opts, source: c.source, why: c.why }, cfg, (m) => lines.push(m));
        results[i] = { ...r, lines };
      } catch (e) {
        results[i] = { creatorId: c.creatorId, error: e.message, source: c.source, lines };
      }
      if (onDone) onDone(results[i], i, candidates.length);
    }
  });

  await Promise.all(workers);
  return results;
}

module.exports = { checkOne, runMany };
