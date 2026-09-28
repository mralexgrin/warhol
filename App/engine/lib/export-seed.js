'use strict';
/* ============================================================================
   THE ADAPTER — Task 6, 6 Aug 2026. Engine → the prototype's seed shape.

   The prototype at App/scout/ runs entirely on two files: the frozen
   cohort (`warhol-seed.js`, byte-identical across five prototype directories
   and never forked) and the v1.3 layer over it (`v52-seed.js`). This writes a
   drop-in replacement for the FIRST one, built from real observations, so the
   demo stops running on fiction without a line of app code changing.

   ---------------------------------------------------------------------------
   WHY THE FROZEN FILE AND NOT THE v1.3 LAYER
   ---------------------------------------------------------------------------
   Because the layer already knows how to derive itself. `claims()` in
   v52-seed.js reads `V13[c.id] || {}` and falls back to `derivedBuilt(c)`,
   `derivedOn(c)` and the pillar subsignals for everything the table does not
   carry. A creator with no V13 entry gets the derived reading of their own
   record, which is exactly what we want: the V13 table is the AUTHORED half —
   citations, reliability, "nobody else films laminated dough in a single
   unbroken take" — and those are judgments about fictional people. Emitting
   none of it is not a gap in the export. It is the export refusing to make
   things up.

   ---------------------------------------------------------------------------
   WHAT IS REAL AND WHAT IS NOT
   ---------------------------------------------------------------------------
   Three fields in the seed schema have no engine equivalent — `play`,
   `outreach`, `accent`. They are real product features
   that are not built, not oversights, and each one is stubbed and MARKED. A
   demo that cannot tell you which half is real is worse than one running
   entirely on fiction, so every stub carries `generated: true`, the file says
   so in its own header, and `warhol export` prints the split.
   ========================================================================== */

const path = require('path');
const { buildDrop } = require('./drop');
const { readCosts } = require('./store');

const WEIGHTS = require(path.join(__dirname, '..', 'config', 'weights.json'));

/* ===========================================================================
   THE VOCABULARY TRANSLATION — one function, marked, deletable.

   The engine says demand / missing / pressure (decision 72). The frozen seed
   schema says gap / strain, and it is frozen, so it will go on saying that
   until the v5 rename lands (§13.2) and the cohort is regenerated. The
   translation lives HERE and nowhere else: the day the rename happens, this
   function is deleted and its callers pass the pillars straight through.

   Do not push the seed's vocabulary back into the engine. It is one direction
   only, and this is the boundary.

   Note that the sum is preserved and re-derived rather than carried: the seed
   stores gap.score, and gap is demand + missing capped at the opportunity
   maximum, which is what score.js already computed. Reading it back off the
   engine's own arithmetic means the two can never disagree.
   =========================================================================== */
function pillarsFromEngine(score, cadence) {
  const d = score.demand;
  const m = score.missing;
  const p = score.pressure;

  return {
    // gap = demand + missing. Both halves survive as subsignals so the
    // prototype can still show the split it was designed around.
    gap: {
      // Whole points, matching the frozen cohort's convention. v52-seed's
      // points() splits this by a share and subtracts, so a fractional score
      // came out of the arithmetic as +7.399999999999999 on the report.
      score: Math.round(score.opportunity),
      max: WEIGHTS.pillars.opportunityMax,
      engine: 'rule+llm',
      // §5.3's coverage, which the engine calls confidence.
      coverage: score.confidence.value,
      subsignals: [
        {
          key: 'owned',
          label: 'Owned-channel absence',
          engine: 'rule',
          value: m.lines.length
            ? `No ${m.lines.slice(0, 3).map((l) => l.label.toLowerCase()).join(', no ')}`
            : 'Nothing verified absent',
          weightPct: pct(m.points, d.points + m.points),
          detail: `${score.confidence.resolved} of ${score.confidence.total} checks we can settle either way came back settled. ${m.switchedOn}.`,
        },
        {
          key: 'demand',
          label: 'Unmet demand',
          engine: 'llm+rule',
          value: d.signalCount
            ? `${d.signalCount} purchase-intent comment${d.signalCount === 1 ? '' : 's'}`
            : 'No purchase intent we could read',
          weightPct: pct(d.points, d.points + m.points),
          detail: d.signalCount
            ? `${d.signalCount} lines classified as intent to buy or subscribe, in text the engine fetched first.`
            : 'Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero.',
        },
      ],
    },

    strain: {
      score: Math.round(p.points),
      max: p.max,
      engine: 'rule+llm',
      // Each Pressure signal keeps the key v52-seed.js looks for — `abandon`
      // and `cadence` are read by name in claims(), so renaming them here
      // would silently empty two lines on the report.
      subsignals: p.parts.map((part) => ({
        key: SIGNAL_KEYS[part.signal] || part.signal,
        label: LABELS[part.signal] || part.signal,
        engine: part.engine,
        /* The cadence value is FORMATTED, not passed through, and the reason is
           worth stating. v52-seed's `postingLine()` reads this field with
           `firstNum()` — the first run of digits in the string — and decides
           "less" or "more" from whether it starts with a minus. The engine's
           own sentence is "0.7 videos a month now, against 2.5 before that —
           down 73%", whose first number is 0, so the line silently vanished.
           Had it read "2.5 videos a month" instead it would have rendered
           "Posting 2% MORE than they used to" about someone who posts 73%
           less. A shape mismatch that inverts a claim is not a formatting
           problem, so the adapter meets the contract the reader actually has. */
        value: part.signal === 'cadence_decay' ? cadenceValue(part, cadence) : (part.unavailable ? 'not readable on this look' : part.line),
        weightPct: pct(part.points, p.points),
        detail: part.unavailable
          ? part.line
          : `${part.line} — ${part.points} of the ${p.max} Pressure points. Ceiling on this look is ${p.ceilingToday}.`,
      })),
    },

    // A gate, no points — unchanged in both vocabularies.
    fit: {
      verdict: score.fit.verdict,
      engine: 'llm',
      subsignals: [{
        key: 'brief', label: 'Against the brief', engine: 'llm',
        value: score.fit.verdict, detail: score.fit.because,
      }],
    },
  };
}

/** "−73%" / "+12%", or nothing at all when we could not read their rate.
 *  Never a bare number: postingLine() reads the leading minus as the direction. */
function cadenceValue(part, cadence) {
  if (part.unavailable || !cadence || !cadence.computable) return 'not readable on this look';
  const decline = Math.round((cadence.decline || 0) * 100);
  return decline > 0 ? `−${decline}% vs baseline` : `+${Math.abs(decline)}% vs baseline`;
}

/* Engine labels → the item names the prototype orders and matches on. Its
   WEIGHT table keys on 'Representation' and 'Website'; an unmapped label sorts
   to the bottom as weight 9, which quietly buries the highest-value gaps. */
const ITEM_LABELS = {
  'Own website': 'Website',
  'Representation / management': 'Representation',
  Storefront: 'Store',
};

const SIGNAL_KEYS = {
  cadence_decay: 'cadence',
  self_reported_strain: 'selfreport',
  unanswered_audience: 'unanswered',
  abandonment_markers: 'abandon',
};
const LABELS = {
  cadence_decay: 'Cadence decay',
  self_reported_strain: 'Self-reported strain',
  unanswered_audience: 'Unanswered audience',
  abandonment_markers: 'Abandonment markers',
};

/* ===========================================================================
   ONE CREATOR
   =========================================================================== */

/** Which fields on this record were invented rather than observed. */
/* `samples` left this list on 10 August 2026, and it is the first field ever
   to do so. The engine now reads a creator's own work — feed posts, podcast
   episodes, YouTube uploads, and TikToks they linked from a page we could
   already read — so the report's "what their work looks like" is observation
   rather than invention. Everything still here is a real product feature that
   is not built, each one marked, because a demo that cannot tell you which
   half is real is worse than one running entirely on fiction. */
const STUBBED = ['accent', 'play', 'outreach'];

/* A CANDIDATE ID IS SCOPED BY BRIEF, and it has to be.

   One creator checked under two briefs is two records, not one: different Fit
   verdict, different score, different reason for being on the list. §5.1 makes
   Fit per-brief, so "is this person in the drop" has no answer until you say
   which drop. An unscoped `c_pantheorganizer` asserts there is one.

   It only became visible when several single-brief exports were merged into one
   file — the general drop carries all 58 creators and every category brief is a
   subset of them, so the collision is guaranteed rather than unlucky. Before the
   merge tool existed each seed held one brief and the bug had nowhere to show
   itself. Written here rather than patched during the merge because the merge
   would then be repairing ids the exporter should never have produced. */
function candidateId(creatorId, mandateId) {
  const c = String(creatorId).replace(/[^a-z0-9]+/gi, '_').toLowerCase();
  const m = String(mandateId || '').replace(/^m_/, '').replace(/[^a-z0-9]+/gi, '_').toLowerCase();
  return m ? `c_${m}__${c}` : `c_${c}`;
}

/* ONE PER PLATFORM FIRST, THEN BY DATE. Six samples off two feeds would
   otherwise be six rows from the same publication, which shows a reader
   nothing they did not already know from the accounts list. Capped at four:
   the block sits above the fold and its job is to let someone judge the work,
   not to hold an archive. */
function pickSamples(samples, cap = 4) {
  /* ONE PIECE OF WORK, ONE ROW.

     A creator whose site feed mirrors their uploads produces two observations
     of the same thing — "Car Wash Shampoo Explained" arrives once from the
     YouTube API and once from their RSS — and both are true readings, so
     neither source is wrong to have written it down. Showing both is still
     wrong: it halves how much of their range four rows can show, and it reads
     as though they published twice.

     Deduped on the title, keeping the richer row. Richer means a metric or a
     thumbnail, which in practice means the YouTube reading wins over the feed
     echo of it — it carries a view count, and the feed carries no number at
     all. Titles that differ stay separate; this only collapses an exact match. */
  const byTitle = new Map();
  for (const s of samples || []) {
    const key = String(s.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
    if (!key) { byTitle.set(Symbol(), s); continue; }
    const held = byTitle.get(key);
    const richer = (x) => (x.metric != null ? 2 : 0) + (x.thumbnail ? 1 : 0);
    if (!held || richer(s) > richer(held)) byTitle.set(key, s);
  }

  const all = [...byTitle.values()].sort((a, b) => new Date(b.at || 0) - new Date(a.at || 0));
  const seen = new Set();
  const spread = [];
  for (const s of all) {
    const key = s.platform || s.kind || '?';
    if (seen.has(key)) continue;
    seen.add(key);
    spread.push(s);
  }
  const rest = all.filter((s) => !spread.includes(s));
  return [...spread, ...rest].slice(0, cap);
}

function candidateFrom(x, mandateId, today) {
  const r = x.report;
  const s = x.score;
  const id = candidateId(r.creatorId, mandateId);

  /* Q11(b) carried across intact. matchConfidence is 1.0 only where a surface
     was confirmed AND something linked it to the rest; anywhere else the seed
     gets no number at all rather than a plausible 0.83. The frozen cohort is
     full of 0.97s and 0.83s that mean nothing — inventing one here would put a
     fabricated certainty on the one line §14.3 says is hardest. */
  const counted = new Set((r.audienceSeparate || []).map((a) => a.id));
  /* A follower count is what makes something a PLATFORM here. The engine also
     reads link hubs — a Beacons or Linktree page — which are theirs and worth
     following but carry no audience, and passing one through put a chip
     reading "beacons null" next to "TikTok 7.3M" as though it were a third
     account. They are already in the record as the source of the links. */
  const platforms = r.surfaces.filter((p) => p.read && p.followers != null).map((p) => {
    const merged = !counted.has(p.id);
    return {
      name: p.platform,
      handle: `@${r.creatorId}`,
      followers: p.followers || null,
      url: p.url,
      // Decision 117 — the account list is clickable, so the URL was already
      // here; what was missing is the face and whether the link to it is still
      // alive. `avatarStale` travels with the seed because an exported seed is
      // a SNAPSHOT: a TikTok avatar signed today is dead in 48 hours, and the
      // demo has to fall back to initials rather than show a broken image.
      ...(p.avatar ? { avatar: p.avatar.url, avatarExpires: p.avatar.expires, avatarStale: !!p.avatarStale } : {}),
      // Present only when it can be justified; the app treats a missing value
      // as "not established", which is the true statement.
      ...(merged && p.followers ? { matchConfidence: 1.0 } : {}),
      ...(merged ? {} : { separate: true, why: (r.audienceSeparate.find((a) => a.id === p.id) || {}).why }),
    };
  });

  /* EVERY PLACE OF THEIRS SCOUT CAN OPEN, whether or not it has a follower count.

     `platforms` above is the ACCOUNTS — the things with an audience, which is
     what the score adds up. That filter is right for what it does and wrong as
     the only list the report has: it meant a person whose podcast Scout found,
     whose episodes Scout read, and whose website Scout confirmed showed exactly
     one chip saying TikTok, while the model's read underneath talked about the
     podcast and the website by name. The reader could see Scout knew, and could
     not get to any of it.

     The old note here was about "beacons null" — a link hub rendered as a third
     account with an unknown audience. That was a rendering problem wearing a
     data problem's clothes: the fix is a place with no number printed WITHOUT a
     number, not a place dropped. `followers: null` is the honest value and the
     report is what decides how to say it.

     Three sources, deduped by host, in the order a reader would want them:
     the counted accounts first, then anything present in the inventory that
     carries a real URL, then wherever the samples actually came from — which is
     how SoundCloud gets in, since it is where the episodes are even though the
     podcast resolves through Apple. */
  const places = [];
  const seenHost = new Set();
  const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return null; } };

  /* A PLACE IS SOMETHING A PERSON CAN OPEN. The ladder's addresses are mostly
     not that: it proves a podcast exists by querying an iTunes SEARCH endpoint
     and reads the episodes off an RSS feed, and neither is a page. Sending a
     reader to a JSON query to "see their podcast" is worse than showing no link,
     because it looks like a link and is not one. */
  const OPENABLE = (u) => u && !/\/search\?|\/xrpc\/|\/api\/|\.rss($|\?)|^https?:\/\/feeds\./i.test(u);
  /* Somewhere everybody has an account is not a place of THEIRS. `inalovelydream`
     publishes a gmail.com link — corroborated, genuinely a link they publish, and
     still not somewhere to send a reader who wants to see their work. */
  const NOT_A_PLACE = /^(mail\.google|google|gmail|outlook|yahoo|hotmail|mailto)\./i;
  const urlIn = (s) => (String(s || '').match(/https?:\/\/[^\s)"']+/) || [])[0] || null;

  /* soundcloud.com -> SoundCloud. Only ever used for a place we found by
     following their own work to it, where there is no label to use instead. */
  const PRETTY = { 'soundcloud.com': 'SoundCloud', 'podcasts.apple.com': 'Apple Podcasts',
    'open.spotify.com': 'Spotify', 'podcasters.spotify.com': 'Spotify',
    'creators.spotify.com': 'Spotify', 'linktr.ee': 'Linktree',
    'substack.com': 'Substack', 'youtu.be': 'YouTube' };
  /* Drop the suffix and take the label in front of it, so podcasters.spotify.com
     is Spotify rather than "Podcasters.spotify". The subdomain is which door you
     came in by; the name a reader recognises is one label further right. */
  const SUFFIXY = /^(com|co|net|org|uk|us|io|fm|app|tv)$/i;
  const nameForHost = (host) => {
    if (PRETTY[host]) return PRETTY[host];
    const parts = host.split('.');
    let i = parts.length - 2;                       // the label before the TLD
    while (i > 0 && SUFFIXY.test(parts[i])) i -= 1; // co.uk and friends
    const label = parts[Math.max(0, i)] || host;
    return label.replace(/^./, (m) => m.toUpperCase());
  };

  const addPlace = (name, url, followers) => {
    if (!OPENABLE(url)) return;
    const host = hostOf(url);
    if (!host || seenHost.has(host) || NOT_A_PLACE.test(`${host}.`)) return;
    seenHost.add(host);
    places.push({ name, url, host, followers: followers == null ? null : followers });
  };

  // The accounts first — they carry the audience and they are what the score counts.
  for (const p of platforms) addPlace(p.name, p.url, p.followers);

  /* Then anything the ladder PROVED is there. `why` is the human-facing sentence
     and usually carries the resolved address ("found it — https://podcasts…");
     `evidence` is the probe, which is the right link only when the probe was
     itself a page, as it is for a link hub they publish. Try them in that order
     and let OPENABLE throw out the queries.

     CORROBORATED ONLY, and that gate is doing real work. Uncorroborated means
     "something with the right name answered, and nothing ties it to them" — for
     `apexdetail` that is a hugedomains.com parking page, for `pailinskitchen` an
     Amazon search. Those are honest inventory findings and the report already
     says what they are worth; what they must not become is a link in the
     identity band, which is the one place on the page that says "this is them".
  */
  for (const i of r.inventory || []) {
    if (i.state !== 'present' || i.corroborated !== true) continue;
    const url = [urlIn(i.why), i.url, i.evidence].filter(OPENABLE)[0];
    if (url) addPlace(ITEM_LABELS[i.label] || i.label || i.item, url, null);
  }

  /* And wherever their work actually turned out to live. This is how SoundCloud
     arrives: the podcast resolves through Apple, but the episodes Scout read are
     SoundCloud pages, and a reader who wants to hear one should not have to go
     via a directory. Named for the host, because the sample's own `platform` is
     the KIND of thing it is ("Podcast") and would repeat the label above. */
  for (const sm of r.samples || []) {
    const host = hostOf(sm.url);
    if (host) addPlace(nameForHost(host), sm.url, null);
  }

  /* growth90d needs two observations and we usually have one. §7: never
     zero-fill a trend — a first look has no trajectory and the gate is
     designed to say `not_established` rather than guess. */
  const hist = r.audienceHistory || [];
  const growth = growth90d(hist);

  const evidence = [];
  for (const sig of s.demand.signals || []) {
    evidence.push({ kind: 'comment', quote: sig.quote, platform: 'YouTube', url: null, observedAt: day(r.observedThrough), engine: 'llm', label: sig.points_at });
  }
  for (const part of s.pressure.parts) {
    if (part.quote) evidence.push({ kind: 'caption', quote: part.quote, platform: 'their own post', url: null, observedAt: day(r.observedThrough), engine: 'llm', label: 'self-reported' });
  }
  for (const dead of r.deadLinks || []) {
    evidence.push({ kind: 'signal', quote: dead.url, platform: 'link they publish', url: dead.url, observedAt: day(dead.at), engine: 'rule', label: 'abandonment' });
  }

  return {
    id,
    name: r.creatorId,
    handle: `@${r.creatorId}`,
    initials: r.creatorId.slice(0, 2).toUpperCase(),
    // The one to show. Largest confirmed surface that still has a live link —
    // an unsigned YouTube avatar beats a TikTok one that expires on Saturday,
    // even when TikTok is the bigger account. Null falls back to initials,
    // which §6.12 makes a permanent state rather than a failure.
    avatar: pickAvatar(platforms),
    mandateId,
    primaryPlatform: (platforms[0] && platforms[0].name) || null,
    platforms,
    // Every place of theirs Scout can open, counted or not. See above.
    places,
    audience: { total: r.audience, ...(growth === null ? {} : { growth90d: growth }) },
    score: s.total,
    // A delta needs a previous scoring run. Omitted, not zeroed.
    scoreDelta: scoreDelta(hist),
    confidence: s.confidence.value,
    pillars: pillarsFromEngine(s, r.cadence),
    inventory: (r.inventory || []).map((i) => ({
      item: ITEM_LABELS[i.label] || i.label,
      // The engine's three states ARE the seed's three states — same strings,
      // different constant names. No mapping, and no place for one to drift.
      state: i.state,
      surfacesChecked: i.placesLooked,
      note: i.why,
      observedAt: day(r.observedThrough),
      source: i.item,
    })),
    evidence,
    status: s.entersDrop ? 'in_drop' : 'candidate',
    resurfaced: null,
    passed: null,
    promoted: null,
    outcome: null,
    asOf: day(r.observedThrough),
    alert: null,

    /* WHAT THEIR WORK LOOKS LIKE — observed, not invented.

       Ordered so the list SHOWS RANGE rather than depth: one per platform
       first, then the rest by date. A creator who makes three different things
       is a different proposition from one who makes one thing three times, and
       a straight date sort hides the difference behind whichever feed happened
       to publish most recently.

       `samplesSearched` travels with them because an empty list has to be
       readable as a sentence. §6.6: no readable work hides the block and names
       the reason — it never renders an empty labelled slot. */
    samples: pickSamples(r.samples),
    samplesSearched: r.samplesSearched || null,

    /* THE VERDICT LINE — observed judgment, not invention, and the first thing
       in this file to be neither wholly rule-written nor wholly made up.

       The engine used to emit "No headline — the engine does not write one."
       and decision 119 taught the report to recognise that string and print
       countable facts instead. That fallback stays exactly where it is: this is
       null for every creator Study did not reach, and null for every creator
       whose line was dropped for carrying a number not in the record. The
       report already knows what to do with nothing. */
    headline: r.headline ? r.headline.sentence : null,
    headlineRestsOn: r.headline ? r.headline.restsOn : null,

    /* ------------------------------------------------------------------ */
    /* EVERYTHING BELOW IS INVENTED. Real product features, not built yet.
       Each keeps its NATIVE TYPE — a string stays a string, a list stays a
       list. Wrapping them in { value, generated } to carry the marker put
       "[object Object]" on the report where the headline goes and a chip
       reading "beacons null" beside the platforms. A marker that breaks the
       thing it annotates does not survive contact with the demo, so the
       marking moved to `generatedFields` below, which nothing renders. */
    accent: '#6E6E6E',
    play: { id: null, label: 'No play recommended', why: 'The play catalog (§5.5) is a product decision the engine does not make.', generated: true },
    outreach: { subject: null, opener: null, bullets: [], close: null, generated: true, why: 'Generated on Promote (§6.5). Nothing generates it yet.' },

    // Which of this record's fields nobody observed. The one place the split
    // is machine-readable per creator; the file header and `warhol export`
    // say the same thing in words.
    generatedFields: STUBBED,

    /* Machine-proposed names never claim to be verified people (Task 4).
       Read off the DROP ENTRY, not off the report: the seed holds one record
       per (creator, brief) and provenance is a fact about that pair, while
       `report.source` is one row per creator and the newest one wins. buildDrop
       resolves the pair; taking the report here went round it, and a name typed
       into the house brief came out tagged proposed because a second brief had
       been run against the same person since. */
    source: x.source || r.source || null,
    sourceWhy: x.source && x.source !== r.source ? null : (r.sourceWhy || null),
  };
}

/** Two observations at least 90 days apart, or nothing. */
/**
 * Which face to show — decision 117.
 *
 * Prefer a link that will still resolve over a link that is merely bigger. An
 * unsigned googleusercontent avatar outlives an exported seed; a signed TikTok
 * one has about 48 hours. Between two live ones, take the larger account,
 * because that is the profile a person recognises.
 *
 * Returns null rather than a stale URL. §6.12 makes initials a permanent
 * fallback and not a failure state, and a broken image is worse than no image.
 */
function pickAvatar(platforms) {
  const live = platforms.filter((p) => p.avatar && !p.avatarStale);
  if (!live.length) return null;
  const unexpiring = live.filter((p) => !p.avatarExpires);
  const pool = unexpiring.length ? unexpiring : live;
  pool.sort((a, b) => (b.followers || 0) - (a.followers || 0));
  return pool[0].avatar;
}

function growth90d(hist) {
  if (!hist || hist.length < 2) return null;
  const first = hist[0];
  const last = hist[hist.length - 1];
  const days = (new Date(last.at) - new Date(first.at)) / 86400000;
  if (days < WEIGHTS.trajectoryGate.minObservationGapDays) return null;
  if (!first.audience) return null;
  return Math.round(((last.audience - first.audience) / first.audience) * 100) / 100;
}

function scoreDelta(hist) {
  // The log carries audience over time but not a per-run score, so a delta is
  // not computable yet. null is the schema's own value for "first run".
  return hist && hist.length > 1 ? null : null;
}

/* ===========================================================================
   THE FILE
   =========================================================================== */
/* ===========================================================================
   WHAT IT COST, READ OFF THE COST LOG — 11 Aug 2026.

   The admin screen's ledger was four rows typed into v52-seed.js by hand, and
   by today it read 83 creators / 1,244 calls / $4.76 against a real 218 / ~5,000
   / $25.35. It was not wrong when it was written. That is the problem with a
   number a person maintains: it is a snapshot that goes on presenting itself as
   a reading, and nothing in the product can tell the difference.

   Two things come out of the log instead.

   BY PASS is what the ledger already showed, now derived, and it carries the
   argument §11.4 exists to make: Sweep and Probe are HTTP and cost nothing;
   every dollar is Study. The gradient is a measurement, not a claim.

   BY CALL is new and it is what an operator actually needs to act. "Study cost
   $25" tells you nothing you can do something about. "judge_fit is $11.59 of
   it, at a penny a creator" points at the thing to change. Ordered by spend,
   because the top row is where the money is.

   THE HONEST LIMIT, and it belongs in the UI rather than here: this is a
   SNAPSHOT taken when the seed is exported. The prototype is a static file. It
   is current as of the export and not a second later, and the screen says so
   with the date on it.
   =========================================================================== */
function costsFromLog(rows) {
  const paid = rows.filter((r) => r.kind === 'llm');
  const http = rows.filter((r) => r.kind === 'http');
  const usd = (r) => Number(r.usd || r.model_usd || 0);

  const byCall = new Map();
  for (const r of paid) {
    const k = r.label || 'unlabelled';
    const v = byCall.get(k) || { label: k, calls: 0, cost: 0, refused: 0, inTok: 0, outTok: 0 };
    v.calls += 1;
    v.cost += usd(r);
    if (r.error) v.refused += 1;
    v.inTok += Number(r.input_tokens || 0);
    v.outTok += Number(r.output_tokens || 0);
    byCall.set(k, v);
  }

  const fetchesByPass = (p) => http.filter((r) => r.pass === p).length;
  const spend = paid.reduce((n, r) => n + usd(r), 0);

  /* HOW MANY PEOPLE THE BILL IS SPREAD OVER, counted rather than assumed.

     The old screen divided Study's spend by the size of the cohort on screen,
     which read "$25.35 across 58 creators, about 44 cents each" — wrong by
     twenty-five times. The money was spent on 218 creators over a week of
     development runs; this cohort is 58 of them. Dividing a historical total
     by a current list is not a per-creator cost, it is two unrelated numbers
     in a fraction.

     Every cost row is stamped with the creator it was spent on (store.js
     carries it sideways through AsyncLocalStorage), so the true denominator is
     just the distinct count. */
  const studied = new Set(paid.map((r) => r.creator).filter(Boolean));

  return {
    /* Stamped, because a snapshot that does not say when it was taken is the
       same defect the hand-written ledger had. */
    takenAt: new Date().toISOString(),
    spent: money(spend),
    studiedCreators: studied.size,
    perCreator: studied.size ? money(spend / studied.size) : null,
    fetches: http.length,
    calls: paid.length,
    refused: paid.filter((r) => r.error).length,
    byPass: ['sweep', 'probe', 'study'].map((p) => ({
      depth: p,
      fetches: fetchesByPass(p),
      calls: paid.filter((r) => r.pass === p).length,
      cost: money(paid.filter((r) => r.pass === p).reduce((n, r) => n + usd(r), 0)),
    })),
    byCall: [...byCall.values()]
      .sort((a, b) => b.cost - a.cost)
      .map((v) => ({
        label: v.label,
        calls: v.calls,
        cost: money(v.cost),
        perCall: v.calls ? money(v.cost / v.calls) : 0,
        refused: v.refused,
        /* Why one call costs more than another, in the only terms that explain
           it: you are billed for text, and these two numbers ARE the text. */
        avgIn: v.calls ? Math.round(v.inTok / v.calls) : 0,
        avgOut: v.calls ? Math.round(v.outTok / v.calls) : 0,
      })),
  };
}

function buildSeed(slug, asOf) {
  const drop = buildDrop(slug, asOf);
  if (!drop) return null;

  const today = day(new Date().toISOString());
  const mandateId = `m_${slug.replace(/-/g, '_')}`;
  const everyone = [...drop.cleared, ...drop.overflow, ...drop.held];
  const candidates = everyone
    .slice()
    .sort((a, b) => b.score.total - a.score.total)
    .map((x) => candidateFrom(x, mandateId, today));

  const mandate = {
    id: mandateId,
    name: drop.brief.slug,
    category: 'Real data',
    platforms: ['TikTok', 'YouTube', 'Instagram'],
    audienceBand: 'as found',
    geo: 'as found',
    language: 'en',
    owner: 'the engine',
    ownerInitials: 'WE',
    description: drop.brief.text,
  };

  /* THE DROPS INDEX IS THE POOL, NOT THE CLEARED SET — and the schema comment
     saying "ranked, already gated" is misleading about its own file. Checked
     against v5.2: `poolFor(date)` takes the union of these arrays as the
     population considered that day, and `dropFor(date, brief)` then applies
     Fit, Trajectory, threshold and confidence to it, counting what each one
     rejected. Writing only the cleared creators here empties the pool, and an
     empty pool means `left` comes back all zeros — the prototype renders a
     zero-result day that cannot say why, which is the one thing §5.4 insists
     the empty state must do.

     So everyone checked goes in, ranked, and the gates run where they were
     designed to run. On a first look nothing clears — Trajectory needs two
     observations 90 days apart (§8) — and the drop is empty WITH its reasons
     attached, which is the honest first-run output. */
  const inPool = everyone
    .slice()
    .sort((a, b) => b.score.total - a.score.total)
    .map((x) => candidateId(x.creatorId, mandateId));
  const inDrop = drop.cleared.map((x) => candidateId(x.creatorId, mandateId));

  const stubs = STUBBED.join(', ');
  const real = 'inventory, checks, scores, confidence, platforms, audience, evidence, samples, headline';

  const body = {
    meta: {
      product: 'Warhol Scout',
      today,
      /* No backtest date, deliberately. The prototype rewinds to this on first
         sign-in and the whole point of §7 is that the rewind is the absence of
         rows — so pointing it at today would produce a "you are reading Scout
         as of..." banner about the present, which is the rewind pretending to
         be a rewind. Null lets the layer fall back to its own date, finds
         nothing there because the engine has no 2024 observations, and renders
         the designed empty state. That is the true answer. */
      backtestDate: null,
      availableDates: [today],
      scoreThreshold: WEIGHTS.threshold,

      /* WHAT IT HAS COST, DERIVED. Replaces the hand-kept ledger in
         v52-seed.js, which read 83 creators and $4.76 against a real 218 and
         $25.35 — a snapshot still presenting itself as a reading. */
      costs: costsFromLog(readCosts()),

      /* THE DROP HEAD'S "LAST RUN" LINE, DERIVED — seventh instance of the
         calibrated-constant-with-copies defect.

         v52-seed.js kept this block by hand: 58 creators, 1,808 checks, $0.68,
         stamped 7 August, with a comment admitting whoever re-exported the
         seed had to retype it. Nobody did. The engine had by then run those 58
         creators for real and could say so to the second, so the one line on
         the front door whose entire job is to be a verifiable fact about when
         the work happened was five days stale and unfalsifiable from the
         screen. Same shape as the threshold's five copies and the ledger's
         two.

         Scoped to the LAST RUN, not the brief's standing total, because that
         is what the line claims. `bill()` already slices that way for §11.4. */
      lastRun: drop.lastRun ? {
        started: drop.lastRun.started_at,
        finished: drop.lastRun.finished_at,
        /* `checked` is how many actually went through; `creators` is how many
           were queued. A run that errored on three should not head itself with
           the number it hoped for. */
        creators: drop.lastRun.checked != null ? drop.lastRun.checked : drop.lastRun.creators,
        minutes: drop.lastRun.ms != null ? drop.lastRun.ms / 60000 : null,
        checks: drop.bill.fetches,
        calls: drop.bill.calls,
        cost: money(drop.bill.usd),
        /* The one figure here that is a policy, not a reading. There is no
           scheduler yet, so it is stated as the product's promise rather than
           dressed as an observation. */
        next: '06:00',
      } : null,
      dropCap: WEIGHTS.run.dropCap,
      coverageGate: WEIGHTS.minimumConfidence,

      /* THE HELP SCREEN'S NUMBERS, EXPORTED RATHER THAN RETYPED.
         Scout explains how the score is calculated, and every figure in that
         explanation is one of these. The threshold above is here for exactly
         this reason already — §5.4b moved the bar from 78 to 25 and the copy
         the prototype was holding did not move with it, which emptied the drop
         without producing an error anybody could see.
         A help screen is the worst place to repeat that: a wrong pillar weight
         on a report is a wrong number, and a wrong pillar weight on the page
         that TEACHES the model is a wrong mental model, carried out of the room
         by whoever read it. So the weights travel with the data they describe.
         Sub-signal wiring (needsHistory, declineFloor/declineFull) rides along
         because the screen has to say WHY a signal is dark on a first look, and
         reconstructing that from the points alone is guessing. */
      weights: {
        pillars: WEIGHTS.pillars,
        absence: WEIGHTS.absenceWeights,
        pressure: WEIGHTS.pressureWeights,
        demandHalfPoint: WEIGHTS.demandCurve.halfPoint,
        demandAlignmentMax: WEIGHTS.demandAlignment.maxMultiplier,
        shortFormAudienceFloor: WEIGHTS.youtubeGap.shortFormAudienceFloor,
        trajectory: WEIGHTS.trajectoryGate,
      },
      states: { PRESENT: 'present', ABSENT: 'verified_absent', UNKNOWN: 'not_found' },
      generatedBy: 'warhol export',
      generatedAt: new Date().toISOString(),
      brief: { slug: drop.brief.slug, text: drop.brief.text },
      real: real.split(', '),
      generated: STUBBED,
    },
    scouts: [{ id: 's_engine', name: 'The engine', initials: 'WE', role: 'Origination' }],
    mandates: [mandate],
    candidates,
    /* Only today. The app forces a rewind to its own hardcoded backtest date on
       first sign-in, and there is deliberately no key for it: the engine had
       observed nothing in January 2024, so the pool is empty because there are
       no rows, which is §7's rewind working rather than failing. Writing an
       empty mandate array instead would say "we looked that day and nobody
       qualified", and we did not look. */
    drops: { [today]: { [mandateId]: inPool } },
    timeline: [],

    /* RUN A NAME (§6.4) is `warhol check` — a human pasting one handle — so it
       gets a real record rather than null. The app dereferences this
       unconditionally (`id === W.runANameResult.id`), so null crashes the whole
       shell on sign-in; but a fabricated one would be a fictional creator
       smuggled back into a file whose entire point is that nobody in it is
       invented. The highest-scoring creator we actually checked is both. */
    runANameResult: candidates.length ? candidates[0] : null,
  };

  const text = `/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by \`warhol export --brief ${drop.brief.slug}\` on ${today}.
   Do not edit by hand; re-run the command.

   Classic script. Sets window.WARHOL. No modules, no fetch, no network.
   Drop-in replacement for the frozen cohort file of the same name.

   THESE CREATORS ARE REAL. That is the point of this file and it is also the
   thing to be careful about: every inventory line, every status code and every
   "we looked in N places" below traces to a URL the engine actually opened, on
   the date recorded. Run \`warhol checks <handle>\` in the engine to open them.

   WHAT IS REAL HERE
     ${real}

   WHAT IS INVENTED, AND MARKED
     ${stubs}

   Every invented field carries \`generated: true\`. They are real product
   features that are not built rather than oversights, and a demo that cannot
   tell you which half is which is worse than one running entirely on fiction.
   Nothing below fabricates a quote: the evidence array contains only text the
   engine fetched and the model quoted verbatim from it.

   The v1.3 layer (v52-seed.js) carries no V13 entry for anyone here, so it
   derives their reading from these records. That is deliberate — V13 is the
   authored half, and there is nobody to author.
   ========================================================================== */
(function () {
  'use strict';

  var DATA = ${JSON.stringify(body, null, 2).split('\n').join('\n  ')};

  var byId = {};
  DATA.candidates.forEach(function (c) { byId[c.id] = c; });

  window.WARHOL = {
    meta: DATA.meta,
    user: DATA.scouts[0],
    scouts: DATA.scouts,
    mandates: DATA.mandates,
    plays: [],
    passReasons: [
      { code: 'monetized', label: 'Already monetized', suppression: 'Permanent unless monetization inventory changes' },
      { code: 'too_small', label: 'Too small', suppression: 'Revisit at audience threshold' },
      { code: 'wrong_category', label: 'Wrong category', suppression: 'Permanent — this mandate only' },
      { code: 'unsafe', label: 'Brand-unsafe', suppression: 'Permanent, global' },
      { code: 'not_distinctive', label: 'Not distinctive', suppression: 'Cooldown 180 days' },
      { code: 'no_strain', label: 'No strain / not ready', suppression: 'Cooldown 90 days; resurface on strain trigger' }
    ],
    candidates: DATA.candidates,
    byId: byId,
    drops: DATA.drops,
    timeline: DATA.timeline,
    runANameResult: DATA.runANameResult,

    drop: function (asOf, mandateId) {
      var d = (DATA.drops[asOf] || {})[mandateId] || [];
      return d.map(function (id) { return byId[id]; }).filter(Boolean);
    },
    watchlist: function () { return DATA.candidates.filter(function (c) { return c.status === 'watched'; }); },
    byStatus: function (s) { return DATA.candidates.filter(function (c) { return c.status === s; }); },
    isBacktest: function () { return false; }
  };
})();
`;

  return {
    text,
    summary: {
      brief: drop.brief.slug,
      creators: candidates.length,
      inDrop: inDrop.length,
      proposed: candidates.filter((c) => c.source === 'proposed').length,
      checks: everyone.reduce((n, x) => n + (x.report.checkRecord ? x.report.checkRecord.checks : 0), 0),
      withGrowth: candidates.filter((c) => c.audience.growth90d != null).length,
      real: real.split(', '),
      generated: STUBBED,
    },
  };
}

function day(iso) { return String(iso || '').slice(0, 10); }
function round(n) { return Math.round(n * 10) / 10; }
/* Money needs four places; `round` above is 1dp and other callers depend on
   that, so the two roundings stay separate rather than one growing a flag. */
function money(n) { return Math.round(Number(n || 0) * 1e4) / 1e4; }
function pct(part, whole) { return whole ? Math.round((part / whole) * 100) : 0; }

module.exports = { buildSeed, pillarsFromEngine, growth90d, STUBBED };
