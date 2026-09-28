'use strict';
/* ============================================================================
   THE BRIEF LOG — Task 4, 6 Aug 2026. Scout PRD §6.7.

   A brief is the assignment: what we need and who we are looking for, in a
   member's own words. It is the only place a human tells the engine what to
   hunt, and until now the engine had no idea it existed — `check` took one
   handle and the brief was a string that arrived with it.

   Same shape as observations.jsonl and for the same reasons (§10.1): append
   only, nothing updated in place, the current state computed by reading
   forward. §6.7 requires it directly — "editing makes a version, decisions
   stay attached to the version they were made under" — and a mutable brief
   row makes that unbuildable later rather than merely unbuilt.

   Three kinds of row:

     brief      the text, its slug, when it was written
     candidate  a name to check under it, and WHERE THE NAME CAME FROM
     run        a pass over every candidate: when it started, when it ended

   The `source` field on a candidate is the whole of Task 4's guard on
   discovery. A model proposes names and nothing verifies the PERSON the way
   the engine verifies the inventory, so the source travels with the name from
   here to the report and every surface says which it was. See §11.1: finding
   people is reasoning over public text and is the model's proper job; it is
   also the one place its output is not checked by anything.

   ---------------------------------------------------------------------------
   SCOPE — Q24, deferred and still deferred.
   ---------------------------------------------------------------------------
   This is not discovery at scale. It is one brief producing ten to twenty
   candidates in one call, so that the ladder can be run over a handful of
   people and aggregated into something that looks like a day's work. A crawler
   is a different piece of work and naming it here keeps the demo from being
   read as infrastructure.
   ========================================================================== */

const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const BRIEFS = path.join(DATA, 'briefs.jsonl');

const SOURCES = ['proposed', 'named'];

function ensure() {
  if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });
}

function append(row) {
  ensure();
  fs.appendFileSync(BRIEFS, JSON.stringify(row) + '\n');
  return row;
}

function readAll() {
  ensure();
  if (!fs.existsSync(BRIEFS)) return [];
  return fs.readFileSync(BRIEFS, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));
}

/** A short name a person can type. `warhol run food` beats `warhol run b_m4x1`. */
function slugify(text) {
  const stop = new Set(['a', 'an', 'the', 'and', 'or', 'of', 'in', 'on', 'for', 'with', 'who', 'that', 'to', 'no', 'not', 'their', 'any', 'anyone', 'someone', 'people']);
  const words = String(text).toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/)
    .filter((w) => w && !stop.has(w)).slice(0, 4);
  return words.join('-') || 'brief';
}

function listBriefs() {
  const rows = readAll();
  const briefs = rows.filter((r) => r.kind === 'brief');
  return briefs.map((b) => ({
    ...b,
    candidates: rows.filter((r) => r.kind === 'candidate' && r.brief === b.slug).length,
    runs: rows.filter((r) => r.kind === 'run' && r.brief === b.slug && r.finished_at).length,
  }));
}

/**
 * Resolve what a person typed. Exact slug, then exact id, then a unique
 * prefix. Ambiguity is an error with the options named — silently picking one
 * of two briefs would attach a day's decisions to the wrong assignment.
 */
function getBrief(ref) {
  const briefs = listBriefs();
  if (!ref) return null;
  const needle = String(ref).toLowerCase();
  const exact = briefs.find((b) => b.slug === needle || b.id === needle);
  if (exact) return exact;
  const hits = briefs.filter((b) => b.slug.startsWith(needle));
  if (hits.length === 1) return hits[0];
  if (hits.length > 1) {
    throw new Error(`"${ref}" matches ${hits.length} briefs: ${hits.map((b) => b.slug).join(', ')}`);
  }
  return null;
}

function createBrief(text) {
  const clean = String(text || '').trim();
  if (!clean) throw new Error('a brief is a description in your own words — there is nothing to write down');

  const taken = new Set(listBriefs().map((b) => b.slug));
  const base = slugify(clean);
  let slug = base;
  for (let n = 2; taken.has(slug); n++) slug = `${base}-${n}`;

  return append({
    kind: 'brief',
    id: `b_${Date.now().toString(36)}`,
    slug,
    text: clean,
    created_at: new Date().toISOString(),
  });
}

/**
 * Add candidates. Deduplicated against everything already under this brief, so
 * proposing twice does not double the bill.
 *
 * @param {string} slug
 * @param {Array<{creatorId, why, source}>} candidates
 */
function addCandidates(slug, candidates) {
  const already = new Set(candidatesFor(slug).map((c) => c.creator_id));
  const added = [];
  for (const c of candidates) {
    if (!c.creatorId || already.has(c.creatorId)) continue;
    if (!SOURCES.includes(c.source)) throw new Error(`a candidate needs a source, one of: ${SOURCES.join(', ')}`);
    already.add(c.creatorId);
    added.push(append({
      kind: 'candidate',
      brief: slug,
      creator_id: c.creatorId,
      why: c.why || null,
      source: c.source,
      at: new Date().toISOString(),
    }));
  }
  return added;
}

function candidatesFor(slug) {
  return readAll().filter((r) => r.kind === 'candidate' && r.brief === slug);
}

/** A run is two rows — one when it starts, one when it stops — so a run that
 *  died halfway is visibly a run that died halfway rather than one that never
 *  happened. The bill is sliced out of costs.jsonl by brief, not by clock. */
function startRun(slug) {
  return append({ kind: 'run', brief: slug, run_id: `r_${Date.now().toString(36)}`, started_at: new Date().toISOString() });
}

function finishRun(run, summary) {
  return append({
    kind: 'run', brief: run.brief, run_id: run.run_id,
    started_at: run.started_at, finished_at: new Date().toISOString(), ...summary,
  });
}

function runsFor(slug) {
  return readAll().filter((r) => r.kind === 'run' && r.brief === slug);
}

module.exports = { createBrief, listBriefs, getBrief, addCandidates, candidatesFor, startRun, finishRun, runsFor, slugify, BRIEFS };
