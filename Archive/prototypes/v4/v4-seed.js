/* ==========================================================================
   WARHOL SCOUT v4 — the layer over the frozen cohort.
   Classic script. Sets window.WARHOL_V4. Runs from file://.

   warhol-seed.js is byte-identical to prototypes/_shared/warhol-seed.js and is
   never mutated or forked.

   What changed from v2, and why:
   · A BRIEF is now a free saved filter over one standing scan — not a scan
     surface you provision. So archetypes, outcomes, the derive() machinery and
     the whole mandate wizard are gone.
   · Brief MEMBERSHIP is gone with it. Annotations attach to the creator, so
     you see what the desk said about a person in any brief, including none.
   · There is no global rewind. The six creators with known outcomes live on
     TRACK RECORD, where each entry is that creator's report as of the day the
     call was made.
   · The watchlist shows no currency. Pruning argues from score movement.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;

  /* ---------------------------------------------------------------- people */
  /* W.scouts[].role is a JOB TITLE ("Head of Origination"). v3's role means
     Scout or Spotter. Normalised here so nothing ever reads the wrong one. */
  var people = {
    s_alex: { id: 's_alex', name: 'Alex Grinshpoon', initials: 'AG', title: 'Head of Origination', role: 'scout' },
    s_marisol: { id: 's_marisol', name: 'Marisol Vega', initials: 'MV', title: 'Scout', role: 'scout' },
    s_theo: { id: 's_theo', name: 'Theo Nakamura-Boyd', initials: 'TN', title: 'Scout', role: 'scout' },
    p_dana: { id: 'p_dana', name: 'Dana Okonkwo-Reyes', initials: 'DO', title: 'GM, Home & Kitchen', role: 'spotter' }
  };

  /* ----------------------------------------------------------- the drop */
  /* One standing scan. Today's drop is every creator above threshold, ranked
     and capped once — not once per brief. A user with three briefs used to get
     three capped lists, which quietly broke the cap's promise. */
  function dropFor(date) {
    var d = W.drops[date] || {};
    var ids = [];
    Object.keys(d).forEach(function (k) {
      d[k].forEach(function (id) { if (ids.indexOf(id) === -1) ids.push(id); });
    });
    return ids.map(function (id) { return W.byId[id]; })
      .filter(Boolean)
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, W.meta.dropCap);
  }

  /* --------------------------------------------------------------- briefs */
  /* A brief is a saved filter. It costs nothing, changes nothing about what is
     scanned, and can never leave you with an empty application. */
  var categories = [
    { id: 'food', label: 'Food / Home', note: 'Cooking, baking, home craft, kitchen goods' },
    { id: 'craft', label: 'Craft / Trade', note: 'Restoration, making, tools, workshop' },
    { id: 'finance', label: 'Finance', note: 'Personal finance, money systems, investing' },
    { id: 'outdoor', label: 'Outdoor gear', note: 'Packs, apparel, field testing, trail' }
  ];
  var bands = ['Any size', '50K – 250K', '250K – 1M', '1M+'];
  var platforms = ['TikTok', 'Instagram', 'YouTube', 'Substack', 'X'];

  /* Seeded so the filter row is never a single lonely chip on first run. */
  var briefs = [
    {
      id: 'b_kitchen', name: 'Kitchen & home goods', category: 'Food / Home',
      band: 'Any size', platforms: ['TikTok', 'Instagram', 'YouTube'], seeded: true
    },
    {
      id: 'b_newsletter', name: 'Newsletter-shaped', category: null,
      band: 'Any size', platforms: ['Substack', 'YouTube'], play: 'newsletter', seeded: true
    }
  ];

  /* Creators carry a mandateId, not a category — the category lives on the
     seeded mandate. Resolved here so a brief can filter on the human word. */
  function categoryOf(c) {
    var cat = null;
    W.mandates.forEach(function (m) { if (m.id === c.mandateId) cat = m.category; });
    return cat;
  }

  /* A brief filters the one drop. Nothing here can produce a creator the scan
     did not already find. */
  function applyBrief(list, brief) {
    if (!brief) return list;
    return list.filter(function (c) {
      if (brief.category && categoryOf(c) !== brief.category) return false;
      if (brief.play && c.play && c.play.id !== brief.play) return false;
      if (brief.band && brief.band !== 'Any size') {
        var n = c.audience.total;
        if (brief.band === '50K – 250K' && (n < 50000 || n >= 250000)) return false;
        if (brief.band === '250K – 1M' && (n < 250000 || n >= 1000000)) return false;
        if (brief.band === '1M+' && n < 1000000) return false;
      }
      if (brief.platforms && brief.platforms.length) {
        var hit = false;
        (c.platforms || []).forEach(function (p) {
          if (brief.platforms.indexOf(p.name) > -1) hit = true;
        });
        if (!hit) return false;
      }
      return true;
    });
  }

  /* ---------------------------------------------------------- track record */
  /* Every past call, hits AND the miss. A page with no misses reads as
     marketing, and the miss is the most credible thing on it. */
  var trackRecord = [
    { id: 'b_ines', calledOn: '2024-01-15', verb: 'promote', by: 'Alex Grinshpoon', hit: true },
    { id: 'b_roman', calledOn: '2024-01-15', verb: 'promote', by: 'Alex Grinshpoon', hit: true },
    { id: 'b_fen', calledOn: '2024-01-15', verb: 'watch', by: 'Marisol Vega', hit: true },
    { id: 'b_marisol', calledOn: '2024-01-15', verb: 'promote', by: 'Theo Nakamura-Boyd', hit: true },
    { id: 'b_clem', calledOn: '2024-01-15', verb: 'watch', by: 'Alex Grinshpoon', hit: true },
    { id: 'b_tobi', calledOn: '2024-01-15', verb: 'pass', by: 'Alex Grinshpoon', hit: false,
      missNote: 'Ranked fifth of six and stayed fifth of six. The ordering held, which is the only part of a look-back worth trusting.' }
  ];

  /* ------------------------------------------------------------ referrals */
  /* Status follows the creator. A Spotter learns whether their judgment was any
     good without a fourth destination — and the passed one carries WHY, which
     is the only version of this that improves anyone's judgment. */
  var referralStatus = {
    c_deshawn: { state: 'promote', by: 'Alex Grinshpoon', at: '2026-08-02',
      note: 'Backed. Outreach package generated and a Phase Two record created.' },
    c_junie: { state: 'pass', by: 'Marisol Vega', at: '2026-08-01', reasonCode: 'monetized',
      note: 'Already monetized — a storefront went live after the referral.' }
  };

  /* ---------------------------------------------------------- annotations */
  /* Attached to the CREATOR, not to brief membership. Never a removal. */
  var annotations = {
    c_deshawn: [{ actor: 'Marisol Vega', initials: 'MV', verb: 'watch', at: '2026-07-31',
      note: 'Wants a second week of strain data before backing him.' }],
    c_nell: [{ actor: 'Dana Okonkwo-Reyes', initials: 'DO', verb: 'refer', at: '2026-07-31',
      note: 'Says the kitchen-goods fit is obvious and wants a Study authorized.' }],
    c_otto: [{ actor: 'Marisol Vega', initials: 'MV', verb: 'pass', reasonCode: 'not_distinctive', at: '2026-07-30' }]
  };

  /* -------------------------------------------------------- the check record */
  var ledger = {
    b_ines: [
      { surface: 'Substack', value: 'No publication at this handle or name', url: 'substack.com/@inescastellanos', observedAt: '2024-01-12', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'beehiiv', value: 'No publication', url: 'beehiiv.com/search?q=ines+castellanos', observedAt: '2024-01-12', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'ConvertKit / Kit', value: 'No landing page', url: 'kit.com/creators/search', observedAt: '2024-01-12', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Link-in-bio', value: '1 link — Instagram profile only', url: 'linktr.ee/inescooks', observedAt: '2024-01-13', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Owned domain', value: 'No registered domain matching name or handle', url: 'whois lookup, 4 variants', observedAt: '2024-01-13', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Shop / storefront tab', value: 'Not enabled on any connected platform', url: 'platform profile crawl', observedAt: '2024-01-13', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Sponsorship disclosure', value: '2 paid posts in 180 days, both one-off', url: 'caption scan, 412 posts', observedAt: '2024-01-14', state: 'present', engine: 'rule', depth: 'probe' },
      { surface: 'Unmet-demand comments', value: '318 purchase-intent comments in the sampled window', url: 'comment sample, 6 posts', observedAt: '2024-01-14', state: 'present', engine: 'llm', depth: 'study' },
      { surface: 'Self-reported capacity', value: 'Two statements of being overwhelmed by requests', url: 'caption + story transcript', observedAt: '2024-01-15', state: 'present', engine: 'llm', depth: 'study' },
      { surface: 'Membership / Patreon', value: 'Searched 3 platforms, no tier found', url: 'patreon.com, ko-fi.com, memberful', observedAt: '2024-01-12', state: 'not_found', engine: 'rule', depth: 'probe' }
    ],
    c_marguerite: [
      { surface: 'Substack', value: 'No publication', url: 'substack.com/@marguerite.bakes', observedAt: '2026-07-29', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'beehiiv', value: 'No publication', url: 'beehiiv.com/search', observedAt: '2026-07-29', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'ConvertKit / Kit', value: 'No landing page', url: 'kit.com/creators/search', observedAt: '2026-07-29', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Owned domain', value: 'No registered domain', url: 'whois lookup, 5 variants', observedAt: '2026-07-29', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Link-in-bio', value: '2 links, both platform profiles', url: 'beacons.ai/margueritebakes', observedAt: '2026-07-30', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Shop / storefront tab', value: 'Not enabled', url: 'platform profile crawl', observedAt: '2026-07-30', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Sponsorship disclosure', value: '0 paid posts in 180 days', url: 'caption scan, 289 posts', observedAt: '2026-07-30', state: 'verified_absent', engine: 'rule', depth: 'probe' },
      { surface: 'Unmet-demand comments', value: 'Purchase-intent comments counted in sampled window', url: 'comment sample, 8 posts', observedAt: '2026-07-29', state: 'present', engine: 'llm', depth: 'study' },
      { surface: 'Format Fit assessment', value: 'Clippable, repeatable, single-operator', url: 'sample analysis, 6 posts', observedAt: '2026-07-28', state: 'present', engine: 'llm', depth: 'study' }
    ]
  };

  var DEPTH = {
    sweep: { label: 'Sweep', note: 'Rules only. Audience band, cadence, bio, link presence.' },
    probe: { label: 'Probe', note: 'The monetization inventory. Where verified absent is earned.' },
    study: { label: 'Study', note: 'Language-model analysis. Format Fit, strain, unmet demand.' }
  };

  /* ----------------------------------------------------------- prune recs */
  /* Argues from movement, not money. "Four months and the score hasn't moved"
     is a complete case, and it keeps a cost widget off a list of people. */
  var pruneRecs = {
    w_soren: { recommend: true, headline: 'Recommend you stop watching',
      why: 'Four months tracked. The score has moved two points in either direction the whole time and the strain curve is flat. Watching is buying no new information.' },
    w_lark: { recommend: false, headline: 'Keep watching',
      why: 'Under three months tracked, and the strain curve has risen in every one of them. This is the shape watching exists to catch.' }
  };

  var pruneReason = { code: 'no_longer_worth', label: 'No longer worth tracking',
    suppression: 'Stops the nightly re-score. Cooldown 180 days; resurfaces on any material change' };
  var passReasons = W.passReasons.concat([pruneReason]);

  /* --------------------------------------------------------- definitions */
  /* Guidance lives next to the term it explains, not in a queue of popups.
     Exactly the concepts that earned a hint in v2, minus the two our own
     decisions made unnecessary. */
  var DEFS = {
    score: {
      t: 'Warhol score',
      d: 'Out of 100. Monetization gap is worth up to 60, operator strain up to 40. Format Fit is a gate — it passes or fails and adds nothing.'
    },
    gap: {
      t: 'Monetization gap',
      d: 'The buy signal: demand that has nowhere to go. An audience asking to buy something the creator has not built.'
    },
    strain: {
      t: 'Operator strain',
      d: 'The timing trigger. Evidence they are at capacity — why this is worth a call now rather than someday.'
    },
    confidence: {
      t: 'Confidence',
      d: 'The share of absence checks that actually resolved. It sits beside the score and is never folded into it: a thin well-checked case and a strong half-checked one must not land on the same number.'
    },
    absent: {
      t: 'Verified absent',
      d: 'Warhol looked in every place this would be and found it in none of them. Only that scores as a gap. “Not found” means the check did not resolve — it scores neutral and pulls confidence down.'
    },
    engine: {
      t: 'Rule and LLM',
      d: 'Rule means counted: surfaces crawled, posts scanned, links resolved. LLM means classified by a language model, and it is set in a different voice so a judgment never reads as a measurement.'
    },
    fit: {
      t: 'Format Fit',
      d: 'A gate, not a pillar. Pass or fail, contributing zero points — it decides whether the opportunity is operable at all, not how big it is.'
    },
    depth: {
      t: 'Scan depth',
      d: 'Three passes of increasing evidence. Sweep is rules over thousands; Probe checks the monetization inventory; Study is language-model analysis. Budget decides how many creators reach Probe and Study — never how thoroughly one is checked.'
    }
  };

  /* ------------------------------------------------------------ accessors */
  function ledgerFor(c, asOf) {
    if (!c) return [];
    var authored = ledger[c.id];
    if (authored) return asOf ? authored.filter(function (r) { return r.observedAt <= asOf; }) : authored;
    return (c.inventory || []).map(function (r) {
      return { surface: r.item, value: r.note, url: r.source, observedAt: r.observedAt,
        state: r.state, engine: 'rule', depth: 'probe', derived: true };
    });
  }

  /* Creator scope shows EFFORT, never currency. Mostly derivable. */
  function effortFor(c, asOf) {
    if (!c) return null;
    var surfaces = 0, earliest = null;
    (c.inventory || []).forEach(function (r) {
      surfaces += r.surfacesChecked || 0;
      if (!earliest || r.observedAt < earliest) earliest = r.observedAt;
    });
    (c.evidence || []).forEach(function (e) {
      if (!earliest || e.observedAt < earliest) earliest = e.observedAt;
    });
    var start = c.watchedSince || earliest || asOf;
    var days = Math.max(1, window.UI ? window.UI.daysBetween(start, asOf) : 1);
    var passes = ['sweep'];
    if ((c.inventory || []).length) passes.push('probe');
    var hasLLM = false;
    ['gap', 'strain', 'fit'].forEach(function (k) {
      var p = c.pillars && c.pillars[k];
      if (!p) return;
      (p.subsignals || []).forEach(function (s) {
        if (String(s.engine || '').indexOf('llm') > -1) hasLLM = true;
      });
    });
    if (hasLLM) passes.push('study');
    return { surfaces: surfaces, days: days, passes: passes, since: start };
  }

  /* The strongest purchase-intent line, for the collapsed card. */
  function headlineQuote(c) {
    var ev = c.evidence || [];
    var comment = null, caption = null;
    ev.forEach(function (e) {
      if (!comment && e.kind === 'comment') comment = e;
      if (!caption && e.kind === 'caption') caption = e;
    });
    return comment || caption || ev[0] || null;
  }

  /* The strain fact, in the creator's own words where they said it out loud. */
  function strainFact(c) {
    var said = null;
    (c.evidence || []).forEach(function (e) {
      if (!said && e.kind === 'caption' && /capacity|strain|overwhelm|one person|can.t keep/i.test(e.label + ' ' + e.quote)) said = e;
    });
    if (said) return { quote: said.quote, at: said.observedAt };
    var sub = null;
    ((c.pillars.strain || {}).subsignals || []).forEach(function (s) {
      if (!sub && s.key === 'selfreport') sub = s;
    });
    return sub ? { value: sub.value } : null;
  }

  function annotationsFor(id) { return annotations[id] || []; }
  function pruneFor(id) { return pruneRecs[id] || null; }
  function referralFor(id) { return referralStatus[id] || null; }
  function trackFor(id) {
    var hit = null;
    trackRecord.forEach(function (t) { if (t.id === id) hit = t; });
    return hit;
  }

  window.WARHOL_V4 = {
    people: people, categories: categories, bands: bands, platforms: platforms,
    briefs: briefs, trackRecord: trackRecord, referralStatus: referralStatus,
    annotations: annotations, ledger: ledger, DEPTH: DEPTH, DEFS: DEFS,
    pruneRecs: pruneRecs, passReasons: passReasons, pruneReason: pruneReason,
    dropFor: dropFor, applyBrief: applyBrief, categoryOf: categoryOf,
    ledgerFor: ledgerFor, effortFor: effortFor,
    headlineQuote: headlineQuote, strainFact: strainFact,
    annotationsFor: annotationsFor, pruneFor: pruneFor,
    referralFor: referralFor, trackFor: trackFor
  };
})();
