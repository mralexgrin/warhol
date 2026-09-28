/* ==========================================================================
   WARHOL SCOUT v2 — the access, onboarding and cost layer.
   Classic script. Sets window.WARHOL_V2. Runs from file://.

   warhol-seed.js is byte-identical to prototypes/_shared/warhol-seed.js and is
   NEVER mutated or forked. This file layers over it: new collections, sparse
   per-creator overlays, and accessors that always return a usable value.

   Vocabulary is governed by PRD §4 and §4.6. Internal identifiers may say
   "backtest" or "coverageGate"; nothing the user reads ever does.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;

  /* ---------------------------------------------------------------- people */
  /* v1's scouts[].role is a JOB TITLE ("Head of Origination"). v2's role means
     Scout or Spotter. Normalising here so nothing ever reads the wrong one. */
  var people = {
    s_alex: { id: 's_alex', name: 'Alex Grinshpoon', initials: 'AG', title: 'Head of Origination', role: 'scout' },
    s_marisol: { id: 's_marisol', name: 'Marisol Vega', initials: 'MV', title: 'Scout', role: 'scout' },
    s_theo: { id: 's_theo', name: 'Theo Nakamura-Boyd', initials: 'TN', title: 'Scout', role: 'scout' },
    p_dana: { id: 'p_dana', name: 'Dana Okonkwo-Reyes', initials: 'DO', title: 'GM, Home & Kitchen', role: 'spotter' },
    p_ravi: { id: 'p_ravi', name: 'Ravi Sundaram', initials: 'RS', title: 'GM, Commerce', role: 'spotter' }
  };

  /* --------------------------------------------------------------- wizard */
  /* Q1 — archetypes, not metrics. A GM cannot answer "which audience band"
     cold, but they can answer "what kind of person am I looking for". */
  var archetypes = [
    {
      id: 'unbuilt',
      label: 'Someone with an audience and nothing built for them',
      blurb: 'Large, engaged, and monetizing through nothing they own.',
      derives: { audienceBand: '100K – 2M', platforms: ['TikTok', 'Instagram', 'YouTube'] }
    },
    {
      id: 'drowning',
      label: 'Someone drowning in their own inbound',
      blurb: 'Demand has outgrown the one person answering it.',
      derives: { audienceBand: '250K – 5M', platforms: ['Instagram', 'YouTube', 'Substack'] }
    },
    {
      id: 'process',
      label: 'A maker whose process is the show',
      blurb: 'The craft itself is the format. Repeatable, clippable, teachable.',
      derives: { audienceBand: '250K – 5M', platforms: ['YouTube', 'TikTok'] }
    },
    {
      id: 'authority',
      label: 'A quiet authority the category already trusts',
      blurb: 'Modest reach, disproportionate influence on what gets bought.',
      derives: { audienceBand: '50K – 1M', platforms: ['Substack', 'YouTube', 'X'] }
    },
    {
      id: 'gathering',
      label: 'Someone who has accidentally built a community',
      blurb: 'People already show up for each other. Nothing holds it.',
      derives: { audienceBand: '50K – 1M', platforms: ['Instagram', 'Substack'] }
    }
  ];

  /* Q2 — the business opportunity, and where the overlap check fires.
     `cohort` maps a category onto the scanned surface that backs it. */
  /* `spoken` is the form that reads correctly inside a sentence — "three
     people already watch food and home" beats "…watch food / home". */
  var categories = [
    { id: 'food', label: 'Food / Home', spoken: 'food and home', cohort: 'm_food', note: 'Cooking, baking, home craft, kitchen goods' },
    { id: 'craft', label: 'Craft / Trade', spoken: 'craft and trade', cohort: 'm_making', note: 'Restoration, making, tools, workshop' },
    { id: 'finance', label: 'Finance', spoken: 'personal finance', cohort: 'm_money', note: 'Personal finance, money systems, investing' },
    { id: 'outdoor', label: 'Outdoor gear', spoken: 'outdoor gear', cohort: null, note: 'Packs, apparel, field testing, trail' }
  ];

  /* Q3 — the §5.5 play catalog, phrased as outcomes rather than product names.
     id-matched to W.plays so the wizard answer and a card's recommended play
     are the same object. */
  var outcomes = [
    { id: 'newsletter', label: 'A list we own and sell against', play: 'Newsletter + sponsorship slate' },
    { id: 'commerce', label: 'A product line they never have to ship', play: 'Storefront / commerce (Encore)' },
    { id: 'site', label: 'A destination we sell our own ads on', play: 'Standalone site + O&O ads' },
    { id: 'clips', label: 'Reach on surfaces they are not on yet', play: 'Clip-first distribution' },
    { id: 'membership', label: 'Recurring revenue from people already gathering', play: 'Membership / community' }
  ];

  /* ---------------------------------------------------------------- roster */
  /* Existing mandates, for the overlap check. The prompt's copy is COMPOSED
     from these fields, so the sentence and the data cannot drift apart. */
  var roster = [
    {
      id: 'm_food', name: 'Food & Home Craft', category: 'Food / Home',
      owner: 'Alex Grinshpoon',
      members: [people.s_alex, people.s_marisol, people.p_dana],
      savedScanCreators: 4200
    },
    {
      id: 'm_making', name: 'Restoration & Making', category: 'Craft / Trade',
      owner: 'Theo Nakamura-Boyd',
      members: [people.s_theo, people.p_ravi],
      savedScanCreators: 2600
    },
    {
      id: 'm_money', name: 'Personal Finance & Money Systems', category: 'Finance',
      owner: 'Marisol Vega',
      members: [people.s_marisol],
      savedScanCreators: 3100
    }
  ];

  /* ----------------------------------------------------------- annotations */
  /* Other members' calls appear ON the card. They never remove it and never
     grey it out — the disagreement is the most valuable label in the set. */
  var annotations = {
    c_deshawn: [
      { actor: 'Marisol Vega', initials: 'MV', role: 'scout', verb: 'watch', at: '2026-07-31', note: 'Wants a second week of strain data before backing him.' }
    ],
    c_nell: [
      { actor: 'Dana Okonkwo-Reyes', initials: 'DO', role: 'spotter', verb: 'refer', at: '2026-07-31', note: 'Says the kitchen-goods fit is obvious and wants a Study authorized.' }
    ],
    c_otto: [
      { actor: 'Marisol Vega', initials: 'MV', role: 'scout', verb: 'pass', reasonCode: 'not_distinctive', at: '2026-07-30', note: null }
    ]
  };

  /* -------------------------------------------------------------- the Ledger */
  /* PRD §10.1 row shape: {value, source_url, observed_at, verification_state,
     engine} — plus the surface checked and the depth that resolved it.
     Hand-authored for the two creators the demo opens; everything else is
     derived from c.inventory, which already carries four of the five fields. */
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

  /* ------------------------------------------------------------------ cost */
  /* Currency at org and mandate scope. EFFORT at creator scope — never a price
     tag on a human being (PRD §5.8). */
  var watchCost = {
    perMonth: 92,
    currency: '£',
    creatorsTracked: 3,
    trend: 'flat for six weeks'
  };

  /* Keyed to the WATCHLIST, which is where a recurring cost actually accrues.
     One recommended and one explicitly NOT, because the argument is the
     contrast: four months flat is expensive and going nowhere; four months
     with a rising strain curve is exactly what the money is for. A third
     watched name carries no recommendation at all, which is the normal case. */
  var pruneRecs = {
    w_soren: {
      recommend: true,
      headline: 'Recommend you stop watching',
      why: 'Four months tracked. The score has moved two points in either direction the whole time and the strain curve is flat. The spend is buying no new information.'
    },
    w_lark: {
      recommend: false,
      headline: 'Keep watching',
      why: 'Under three months tracked, and the strain curve has risen in every one of them. This is the shape the recurring cost exists to catch.'
    }
  };

  /* -------------------------------------------------------- extra pass reason */
  /* Pruning is a Pass reason, not a fourth verb (PRD §4.6). Never labelled
     "Prune" in the interface. */
  var pruneReason = {
    code: 'no_longer_worth',
    label: 'No longer worth tracking',
    suppression: 'Stops the recurring cost. Cooldown 180 days; resurfaces on any material change'
  };
  var passReasons = W.passReasons.concat([pruneReason]);

  /* ------------------------------------------------------------------ copy */
  /* Contested terms live here so a vocabulary fix is one edit, not fifteen. */
  var copy = {
    minConfidence: 'Minimum confidence',
    rewoundLabel: 'Rewound',
    scoutVerb: 'Promote',
    spotterVerb: 'Refer to desk',
    scoutState: 'Promoted',
    spotterState: 'Referred',
    wire: '06:00 wire'
  };

  /* ------------------------------------------------------------- accessors */
  function mandatesFor(state) {
    var extra = (state && state.userMandates) || [];
    return W.mandates.concat(extra);
  }

  function rosterFor(categoryLabel) {
    var hit = null;
    roster.forEach(function (r) { if (r.category === categoryLabel) hit = r; });
    return hit;
  }

  /* Overlap is an EXACT category match and never blocks. Exact matching has no
     false positives, and because joining is offered rather than enforced, a
     missed overlap is a mediocre suggestion rather than a blocked user. */
  function overlapFor(categoryLabel) {
    var r = rosterFor(categoryLabel);
    if (!r || r.members.length < 2) return null;
    return r;
  }

  function categoryFor(label) {
    var hit = null;
    categories.forEach(function (c) { if (c.label === label) hit = c; });
    return hit;
  }

  /* Which scanned cohort backs a mandate. A wizard-made mandate has no drop of
     its own in the seed, so it reads the cohort its category maps to. */
  function cohortFor(mandateId, state) {
    var all = mandatesFor(state);
    var m = null;
    all.forEach(function (x) { if (x.id === mandateId) m = x; });
    if (!m) return mandateId;
    if (W.drops[W.meta.today] && W.drops[W.meta.today][m.id] !== undefined) return m.id;
    var cat = categoryFor(m.category);
    return (cat && cat.cohort) || null;
  }

  /* Derive platforms, audience band and geo from the three answers. The wizard
     asks about outcomes and business goals, never mechanics — the mechanics are
     derived and shown as an editable summary before the mandate is created. */
  function derive(wiz) {
    var a = null;
    archetypes.forEach(function (x) { if (x.id === wiz.archetype) a = x; });
    var o = null;
    outcomes.forEach(function (x) { if (x.id === wiz.outcome) o = x; });
    var cat = wiz.category ? categoryFor(wiz.category) : null;

    var platforms = (a && a.derives.platforms.slice()) || ['YouTube', 'Instagram'];
    /* The outcome pulls one platform into the brief, because that is where the
       evidence for it would be. */
    if (wiz.outcome === 'newsletter' && platforms.indexOf('Substack') === -1) platforms.push('Substack');
    if (wiz.outcome === 'clips' && platforms.indexOf('TikTok') === -1) platforms.push('TikTok');
    if (wiz.outcome === 'commerce' && platforms.indexOf('Instagram') === -1) platforms.push('Instagram');

    return {
      id: 'm_new',
      name: (cat ? cat.label : 'Wildcard') + ' — ' + (o ? o.play : 'open brief'),
      category: cat ? cat.label : null,
      wildcard: !cat,
      platforms: platforms,
      audienceBand: (a && a.derives.audienceBand) || '100K – 2M',
      geo: 'US / CA',
      language: 'EN',
      archetype: a,
      outcome: o,
      freeText: wiz.freeText || ''
    };
  }

  function ledgerFor(c, asOf) {
    if (!c) return [];
    var authored = ledger[c.id];
    if (authored) {
      if (!asOf) return authored;
      return authored.filter(function (r) { return r.observedAt <= asOf; });
    }
    /* Derived fallback. c.inventory already carries surface, state, count,
       note, observedAt and source — four of the five required fields. */
    return (c.inventory || []).map(function (r) {
      return {
        surface: r.item,
        value: r.note,
        url: r.source,
        observedAt: r.observedAt,
        state: r.state,
        engine: 'rule',
        depth: 'probe',
        derived: true
      };
    });
  }

  /* Creator scope shows EFFORT, never currency: surfaces checked, days
     tracked, passes run. Mostly derivable, so no creator needs authoring. */
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
    var days = Math.max(0, window.UI ? window.UI.daysBetween(start, asOf) : 0);

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

  function annotationsFor(id) { return annotations[id] || []; }
  function pruneFor(id) { return pruneRecs[id] || null; }

  window.WARHOL_V2 = {
    people: people,
    archetypes: archetypes,
    categories: categories,
    outcomes: outcomes,
    roster: roster,
    annotations: annotations,
    ledger: ledger,
    DEPTH: DEPTH,
    watchCost: watchCost,
    pruneRecs: pruneRecs,
    passReasons: passReasons,
    pruneReason: pruneReason,
    copy: copy,
    mandatesFor: mandatesFor,
    rosterFor: rosterFor,
    overlapFor: overlapFor,
    categoryFor: categoryFor,
    cohortFor: cohortFor,
    derive: derive,
    ledgerFor: ledgerFor,
    effortFor: effortFor,
    annotationsFor: annotationsFor,
    pruneFor: pruneFor
  };
})();
