'use strict';
/* ============================================================================
   THE OBSERVATION LOG — append-only. PRD §10.1.

   Every fact the engine learns is one line in observations.jsonl. Nothing is
   ever updated in place. A creator record is not stored; it is COMPUTED from
   the observations, filtered to a date (see project.js). That is what makes
   "as of January 2024" work at all — §7 is impossible without this shape, and
   retrofitting it later is a rewrite rather than a change.

   This file also enforces THE WALL as a runtime rule, not a convention:

       an observation written by the LLM may not carry a verification_state.

   Five lines, and it means no model can ever author "no newsletter" — the
   most important claim in the product — no matter what anyone writes later.
   ========================================================================== */

const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const OBS = path.join(DATA, 'observations.jsonl');
const COSTS = path.join(DATA, 'costs.jsonl');

const STATES = ['present', 'verified_absent', 'not_found'];
const ENGINES = ['rule', 'llm', 'http'];

function ensure() {
  if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });
}

let seq = 0;
function id(prefix) {
  seq += 1;
  return `${prefix}_${Date.now().toString(36)}${seq.toString(36)}`;
}

/**
 * Append one observation.
 *
 * { creatorId, key, value, source_url, observed_at, verification_state,
 *   engine, pass, http_status, evidence }
 */
function appendObservation(obs) {
  ensure();

  if (!obs.creatorId) throw new Error('observation needs a creatorId');
  if (!obs.key) throw new Error('observation needs a key');
  if (!ENGINES.includes(obs.engine)) throw new Error(`unknown engine: ${obs.engine}`);

  // PRD §10.2 — verification state is not nullable where it applies, and is
  // never one of anything else.
  if (obs.verification_state != null && !STATES.includes(obs.verification_state)) {
    throw new Error(`illegal verification_state: ${obs.verification_state}`);
  }

  // ---- THE WALL -----------------------------------------------------------
  if (obs.engine === 'llm' && obs.verification_state != null) {
    throw new Error(
      'WALL VIOLATION: an LLM-produced observation tried to write a verification ' +
      'state. Discovery may be a model guessing well; deciding whether a thing ' +
      'exists may not. See PRD §5.3.'
    );
  }
  // -------------------------------------------------------------------------

  const row = {
    id: id('obs'),
    creator_id: obs.creatorId,
    key: obs.key,
    value: obs.value === undefined ? null : obs.value,
    source_url: obs.source_url || null,
    observed_at: obs.observed_at || new Date().toISOString(),
    verification_state: obs.verification_state || null,
    engine: obs.engine,
    pass: obs.pass || null,
    http_status: obs.http_status === undefined ? null : obs.http_status,
    evidence: obs.evidence || null,
    advisory: !!obs.advisory,
  };

  fs.appendFileSync(OBS, JSON.stringify(row) + '\n');
  return row;
}

function readObservations(creatorId, asOf) {
  ensure();
  if (!fs.existsSync(OBS)) return [];
  const cut = asOf ? new Date(asOf).getTime() : null;

  return fs.readFileSync(OBS, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l))
    .filter((o) => (!creatorId || o.creator_id === creatorId))
    // §7: nothing learned after `as_of` is visible when rewound.
    .filter((o) => (cut === null || new Date(o.observed_at).getTime() <= cut));
}

function listCreators() {
  const seen = new Map();
  for (const o of readObservations(null, null)) {
    if (!seen.has(o.creator_id)) seen.set(o.creator_id, o.observed_at);
  }
  return [...seen.entries()].map(([creator_id, first_seen]) => ({ creator_id, first_seen }));
}

/* ============================================================================
   WHO A COST BELONGS TO — Task 4, 6 Aug 2026.

   §11.4 wants the bill for twenty creators end to end, which means every
   request and every model call has to say which creator and which brief it was
   spent on. The calls that write cost rows are four modules deep (http.js,
   llm.js, youtube.js) and none of them has any business knowing what a brief
   is, so threading it down would have put a product concept into the fetcher.

   AsyncLocalStorage carries it sideways instead. Each creator's whole check
   runs inside one `withCost({ brief, creator }, ...)`, and every cost row
   written anywhere underneath — including from five concurrent creators at
   once — comes out stamped with the right one. The context follows the async
   chain, which is exactly the shape of the thing being measured.

   An explicit field on the event still wins, so a caller can always override.
   ========================================================================== */
const { AsyncLocalStorage } = require('async_hooks');
const costContext = new AsyncLocalStorage();

function withCost(ctx, fn) { return costContext.run(ctx, fn); }

/** Cost events. PRD §11.4 — the gradient is a measurement, not a decision. */
function appendCost(event) {
  ensure();
  const ctx = costContext.getStore() || {};
  const row = { id: id('cost'), at: new Date().toISOString(), ...ctx, ...event };
  fs.appendFileSync(COSTS, JSON.stringify(row) + '\n');
  return row;
}

function readCosts() {
  ensure();
  if (!fs.existsSync(COSTS)) return [];
  return fs.readFileSync(COSTS, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));
}

/* ============================================================================
   RETENTION — Q18, 6 Aug 2026. Scout PRD §12.1, in one rule:

       keep the decisions, drop the evidence.

   Decisions are tiny, they are about US — who we looked at and what we
   concluded — and they are the only asset v1 is actually building (§5.6).
   Evidence is bulky, it is about THEM, and the sensitive part of it is a dated
   record of a stranger's own words. A creator who never surfaced in a drop has
   no claim on us that justifies keeping that forever.

   So: for a creator never surfaced whose newest observation is older than the
   window, the evidence rows go and the conclusions stay. Nothing at all is
   dropped for a creator who did surface — while they are live, we keep it all.

   This is the one operation that rewrites the append-only log, so it announces
   itself in the log: a retention.swept row per creator, saying how much went
   and why. An empty deletion nobody can see is worse than no deletion.

   Known and accepted: a swept creator's report gets thinner. The report is
   COMPUTED from evidence (§10.1), so deleting the evidence takes the points
   that were built on it — the conclusions stay, their arithmetic does not. The
   alternative is freezing a computed record, which is the one thing the log
   shape exists to avoid.

   Written now, at 41 rows, because it is twenty lines today and a migration
   later.
   ========================================================================== */

// About us — kept. What we concluded, what we were asked, what the model
// proposed and whether it paid off.
/* `creator.source` is here for a reason worth stating. It looks like metadata,
   but it records where the NAME came from — whether a person typed it or a
   model proposed it — and Task 4's only guard on unverified discovery is that
   the tag travels to every surface. Filed as evidence it would age out, and a
   swept creator's report would quietly stop saying "proposed" and start
   reading like a name somebody chose. It is a fact about us, and it stays. */
const DECISION_KEYS = [/^inventory\./, /^corroboration\./, /^fit\.verdict$/, /^audience\./, /^brief\.text$/, /^proposal\./, /^retention\./, /^creator\./, /^ladder\./];

function isDecision(key) { return DECISION_KEYS.some((re) => re.test(key)); }

/**
 * @param {object} opts
 *   days      retention window for evidence (default 90)
 *   surfaced  (creatorId) => boolean — did this creator ever enter a drop?
 *             Supplied by the caller because answering it means projecting a
 *             report, and the log does not get to depend on the reader.
 *   apply     false (default) plans; true rewrites the log.
 */
function sweepRetention(opts = {}) {
  ensure();
  const days = opts.days == null ? 90 : Number(opts.days);
  const surfaced = opts.surfaced || (() => false);
  const now = opts.now ? new Date(opts.now).getTime() : Date.now();
  const cutoff = now - days * 86400000;

  const rows = readObservations(null, null);
  const byCreator = new Map();
  for (const r of rows) {
    if (!byCreator.has(r.creator_id)) byCreator.set(r.creator_id, []);
    byCreator.get(r.creator_id).push(r);
  }

  const plan = [];
  const keep = new Set(rows.map((r) => r.id));

  for (const [creatorId, theirs] of byCreator) {
    const newest = theirs.reduce((t, r) => Math.max(t, new Date(r.observed_at).getTime()), 0);
    const ageDays = Math.floor((now - newest) / 86400000);
    const everSurfaced = !!surfaced(creatorId);
    const evidence = theirs.filter((r) => !isDecision(r.key));
    const eligible = !everSurfaced && newest < cutoff && evidence.length > 0;

    plan.push({
      creatorId,
      rows: theirs.length,
      evidence: evidence.length,
      ageDays,
      surfaced: everSurfaced,
      eligible,
      why: everSurfaced ? 'surfaced in a drop — everything stays while they are live'
        : newest >= cutoff ? `last seen ${ageDays} days ago, inside the ${days}-day window`
        : evidence.length ? `never surfaced, last seen ${ageDays} days ago — the evidence goes, the conclusions stay`
        : 'never surfaced, and the evidence has already gone',
    });

    if (eligible) for (const r of evidence) keep.delete(r.id);
  }

  const dropped = rows.length - keep.size;
  if (opts.apply && dropped) {
    const tmp = `${OBS}.tmp`;
    fs.writeFileSync(tmp, rows.filter((r) => keep.has(r.id)).map((r) => JSON.stringify(r)).join('\n') + '\n');
    fs.renameSync(tmp, OBS);
    for (const p of plan.filter((x) => x.eligible)) {
      appendObservation({
        creatorId: p.creatorId, key: 'retention.swept', value: p.evidence, engine: 'rule',
        evidence: `${p.evidence} evidence rows dropped — never surfaced, last seen ${p.ageDays} days ago. §12.1: keep the decisions, drop the evidence.`,
      });
    }
  }

  return { days, plan, dropped, applied: !!(opts.apply && dropped), total: rows.length };
}

module.exports = { appendObservation, readObservations, listCreators, appendCost, readCosts, withCost, sweepRetention, isDecision, DATA };
