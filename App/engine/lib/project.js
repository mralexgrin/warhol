'use strict';
/* ============================================================================
   THE PROJECTION — observations + a date → one creator's report. PRD §7, §10.1.

   Nothing is read from a creator record, because there is no creator record.
   The report is computed from the log every time, filtered to `as_of`. That
   is what makes "same screen, different date" true rather than staged: the
   rewind is not a mode, it is the absence of rows written after a date.

   The check record (§6.10) is a read view over the same rows, which is why
   it is close to free to build.
   ========================================================================== */

const path = require('path');
const { readObservations } = require('./store');
const { score } = require('./score');

const WEIGHTS = require(path.join(__dirname, '..', 'config', 'weights.json'));
const PROBES = require(path.join(__dirname, '..', 'config', 'probes.json'));

const ITEM_META = new Map(PROBES.inventory.map((i) => [i.item, i]));

function project(creatorId, asOf) {
  const rows = readObservations(creatorId, asOf);
  if (!rows.length) return null;

  const latest = new Map();          // key -> newest row at or before as_of
  const all = { demand: [], strain: [], dead: [], checks: [], audience: [] };
  const sampleRows = new Map();      // sample key -> newest reading of that post

  for (const r of rows) {
    if (r.key === 'demand.signal') { all.demand.push({ points_at: r.value, quote: r.evidence, at: r.observed_at }); continue; }
    if (r.key === 'pressure.self_reported') { all.strain.push({ reading: r.value, quote: r.evidence, at: r.observed_at }); continue; }
    if (r.key === 'pressure.abandonment') { all.dead.push({ url: r.value, status: r.http_status, at: r.observed_at }); continue; }
    if (r.key.startsWith('check.')) { all.checks.push(r); continue; }
    if (r.key === 'audience.total') { all.audience.push({ audience: r.value, at: r.observed_at }); continue; }
    if (r.key.startsWith('proposal.')) continue;    // §5.6's hit-rate table; not part of a creator's report
    /* SAMPLES ARE LATEST-WINS PER KEY, not append-and-keep.

       Each key is one post, so two rows under it are two readings of the same
       post — which is what a second `warhol check` produces. Pushing every row
       showed a re-checked creator their work twice, and a third check three
       times. Keyed by post and taking the newest reading, a re-check refreshes
       a sample instead of duplicating it.

       `at` is the POST'S publish date and must survive: it is the one fact a
       feed row carries, and spreading the observation time over it stamped
       every sample with the moment we looked. When we saw it is a different
       question and gets its own field. */
    if (r.key.startsWith('sample.')) {
      if (r.value) sampleRows.set(r.key, { ...r.value, seenAt: r.observed_at, status: r.http_status });
      else sampleRows.delete(r.key);
      continue;
    }

    const prev = latest.get(r.key);
    if (!prev || new Date(r.observed_at) >= new Date(prev.observed_at)) latest.set(r.key, r);
  }

  // ---- surfaces
  const surfaces = [];
  for (const [key, row] of latest) {
    if (!key.startsWith('surface.')) continue;
    const id = key.slice('surface.'.length);
    const place = PROBES.identity.find((p) => p.id === id);
    surfaces.push({
      id,
      platform: place ? place.label : id,
      read: !!row.value,
      followers: row.value && row.value.followers,
      // §6.12 — carried through with its expiry so the interface can fall back
      // to initials BEFORE the image breaks rather than after. `avatarStale` is
      // computed here rather than on screen because "is this link dead yet" is
      // a fact about the record, and two surfaces should not each answer it.
      avatar: (row.value && row.value.avatar) || null,
      avatarStale: !!(row.value && row.value.avatar && row.value.avatar.expires
        && new Date(row.value.avatar.expires) < new Date(asOf || Date.now())),
      status: row.http_status,
      url: row.source_url,
      why: row.evidence,
    });
  }

  // ---- inventory + its checks
  const inventory = [];
  for (const [key, row] of latest) {
    if (!key.startsWith('inventory.')) continue;
    const item = key.slice('inventory.'.length);
    const meta = ITEM_META.get(item) || {};
    const checks = all.checks
      .filter((c) => c.key.startsWith(`check.${item}.`))
      .map((c) => ({
        place: c.key.split('.').slice(2).join('.'),
        outcome: c.value,
        url: c.source_url,
        status: c.http_status,
        why: c.evidence,
        advisory: !!c.advisory,
        at: c.observed_at,
      }));
    const corr = latest.get(`corroboration.${item}`);
    inventory.push({
      item,
      label: meta.label || item,
      half: meta.half || 'built',
      tier: meta.tier || 3,
      state: row.verification_state,
      presenceOnly: !!meta.presenceOnly,
      requiresApi: !!meta.requiresApi,
      // undefined, not false, when nothing was recorded — a check that ran
      // before corroboration existed is not the same as one that failed it,
      // and confidence (Q10) only penalises the second.
      corroborated: corr ? !!corr.value : undefined,
      corroboratedWhy: corr ? corr.evidence : null,
      why: row.evidence,
      evidence: row.source_url,
      placesLooked: checks.filter((c) => c.outcome === 'miss').length,
      checks,
    });
  }
  inventory.sort((a, b) => a.tier - b.tier);

  const fitRow = latest.get('fit.verdict');
  const audienceHistory = all.audience.sort((a, b) => new Date(a.at) - new Date(b.at));
  const totalAudience = audienceHistory.length ? audienceHistory[audienceHistory.length - 1].audience : 0;

  // Q11(b): the short-form figure is the one from the MERGED total, not a fresh
  // sum over every surface — re-adding here would quietly undo the refusal to
  // merge. Older rows have no such observation and fall back to the old sum.
  const shortFormRow = latest.get('audience.shortform');
  const shortForm = shortFormRow ? (shortFormRow.value || 0) : surfaces
    .filter((s) => /TikTok|Instagram/.test(s.platform))
    .reduce((n, s) => n + (s.followers || 0), 0);

  // The sentence the merge rule wrote at the time, carried rather than
  // re-derived: a report rewound to before Q11(b) must not claim a merge that
  // was never performed.
  const audienceRow = rows.filter((r) => r.key === 'audience.total').pop();
  const audienceWhy = audienceRow ? audienceRow.evidence : null;

  const audienceSeparate = [...latest.entries()]
    .filter(([k]) => k.startsWith('audience.separate.'))
    .map(([k, r]) => ({ id: k.slice('audience.separate.'.length), followers: r.value, url: r.source_url, why: r.evidence }));

  // Q20 — a brief always exists. One recorded with the run wins; otherwise the
  // house brief, which is what the real product would have had (§6.1). This is
  // the reason `unknown` can no longer appear as a fit verdict.
  const briefRow = latest.get('brief.text');
  const brief = (briefRow && briefRow.value) || WEIGHTS.houseBrief;

  /* Q6 — cadence is read back out of the log rather than recomputed, which is
     what keeps §7's rewind honest about it. A report projected at a date before
     the API was wired finds no row here and says so; it does not reach for
     today's YouTube and quietly backfill a posting rate onto a January
     screenshot. The row carries the whole reading when it computed, and the
     reason it did not when it didn't. */
  const cadRow = latest.get('pressure.cadence');
  const cadence = cadRow
    ? (cadRow.value || { computable: false, why: cadRow.evidence })
    : { computable: false, why: 'nothing had read their posting history at this point in the record' };

  const commentsRow = latest.get('demand.comments_read');

  /* Task 4 — where the name came from. Absent on every creator checked before
     6 Aug 2026, and absent is not 'named': those runs predate the question, and
     answering it retroactively would be inventing a provenance. */
  const sourceRow = latest.get('creator.source');

  // Whether the spend rule opened. null on every check run before it started
  // writing itself down, which is not the same as `false`.
  const ladderRow = latest.get('ladder.escalated');

  const dossier = { creatorId, handle: creatorId, surfaces, brief, audience: totalAudience, shortFormAudience: shortForm, firstPartyRead: surfaces.some((s) => s.read) };
  const probed = { inventory, deadLinks: all.dead, cadence };
  const studied = {
    available: all.demand.length > 0 || all.strain.length > 0 || !!fitRow,
    ran: [...(all.demand.length ? ['demand'] : []), ...(all.strain.length ? ['strain'] : []), ...(fitRow ? ['fit'] : [])],
    demand: all.demand,
    strain: all.strain,
    fit: fitRow ? { verdict: fitRow.value, because: fitRow.evidence } : null,
  };

  const scored = score(dossier, probed, studied, audienceHistory, WEIGHTS);

  return {
    creatorId,
    asOf: asOf || null,
    observedThrough: rows[rows.length - 1].observed_at,
    observationCount: rows.length,
    brief,
    source: sourceRow ? sourceRow.value : null,
    sourceWhy: sourceRow ? sourceRow.evidence : null,
    escalated: ladderRow ? !!ladderRow.value : null,
    escalatedWhy: ladderRow ? ladderRow.evidence : null,
    surfaces,
    inventory,
    deadLinks: all.dead,
    cadence,
    /* What their work looks like. Newest first, and the count of what was
       looked for is carried beside it: an empty list means "we found none they
       had linked", which §6.6 needs stated rather than inferred from a length
       of zero. Rewinds correctly for free — a report projected before the
       harvester existed finds no rows and no searched-row, and says so. */
    samples: [...sampleRows.values()].sort((a, b) => new Date(b.at || 0) - new Date(a.at || 0)),
    /* The verdict line, when Study wrote one. Null is the ordinary case, not a
       fault: the line is dropped outright if it carried a number that is not in
       the record, and the report has a countable-facts fallback for exactly
       that. Carried with its rests_on so a reader can ask what it stands on. */
    headline: latest.has('creator.headline')
      ? { sentence: latest.get('creator.headline').value, restsOn: latest.get('creator.headline').evidence }
      : null,
    samplesSearched: latest.has('samples.searched')
      ? { count: latest.get('samples.searched').value, why: latest.get('samples.searched').evidence }
      : null,
    // How much of the comment section we actually got to read. null means the
    // question was never reached — Study did not run — which is not the same
    // as reaching it and finding nothing.
    commentsRead: commentsRow ? commentsRow.value : null,
    audienceHistory,
    audience: totalAudience,
    audienceWhy,
    audienceSeparate,
    score: scored,
    checkRecord: {
      checks: all.checks.length,
      places: new Set(all.checks.map((c) => c.source_url).filter(Boolean)).size,
      from: rows[0].observed_at,
      to: rows[rows.length - 1].observed_at,
    },
  };
}

module.exports = { project, WEIGHTS };
