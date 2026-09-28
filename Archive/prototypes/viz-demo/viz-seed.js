/* ==========================================================================
   SCOUT — v1.3 DATA LAYER over the frozen cohort
   --------------------------------------------------------------------------
   Classic script. Sets window.VIZ. Runs from file://.

   warhol-seed.js is byte-identical to prototypes/_shared/warhol-seed.js and
   is never mutated or forked. This file adds ONLY what v1.3 introduced and
   the 2026-07-31 seed predates:

     · TRAJECTORY  — the second gate (§5.1). Audience over 12 months,
                     citations, reliability, evidence-they-tried,
                     distinctiveness. Carries trends, never a score.
     · THE FORK    — audience vs posting, both as % against the creator's own
                     prior baseline. Posting is derived from the seed's own
                     cadence sub-signal, so the fork is reading the canonical
                     record rather than a number invented here.
     · INVENTORY   — YouTube channel and representation, which §5.2 added and
                     the seed has never checked, plus the built / switched-on
                     split.
     · WATCH       — the check-back: window, the days Scout actually looked,
                     what moved, what held.

   Everything else — score, confidence, quotes, samples, plays, existing
   inventory — is read straight from window.WARHOL. If a field exists there,
   it is NOT redeclared here.

   ALL FIGURES ARE SYNTHETIC and the creators are deliberately fictional, for
   the reason warhol-seed.js gives: fabricating evidence quotes and strain
   claims about real accounts is a real risk once a deck gets forwarded.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;

  /* ------------------------------------------------------------- helpers */

  /* Posting change comes out of the seed's OWN cadence sub-signal
     ("−41% vs 90d baseline"), so the fork can never disagree with the
     Pressure block two lines below it. */
  function postingPct(c) {
    var s = (((c.pillars || {}).strain || {}).subsignals || [])
      .filter(function (x) { return x.key === 'cadence'; })[0];
    if (!s) return null;
    var m = String(s.value).replace('−', '-').match(/-?\d+(\.\d+)?/);
    return m ? parseFloat(m[0]) : null;
  }

  /* Reply rate, before and after, from the seed's unanswered sub-signal and
     its detail line. §5.2: every Pressure signal is a change, never a level. */
  function replies(c) {
    var s = (((c.pillars || {}).strain || {}).subsignals || [])
      .filter(function (x) { return x.key === 'unanswered'; })[0];
    if (!s) return null;
    var now = String(s.value).match(/[\d.]+/);
    var was = String(s.detail || '').match(/(\d+)%\s*twelve months/);
    if (!now || !was) return null;
    return { from: parseFloat(was[1]), to: parseFloat(now[0]) };
  }

  function fmt(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1e3) return Math.round(n / 1e3) + 'k';
    return String(n);
  }

  /* -------------------------------------------------------- TRAJECTORY
     One entry per creator the demo shows. Audience is a 12-month pair
     because §5.2's gate tests the audience over 12 months and still-falling
     over 3 — the seed only carries growth90d.

     citations: null means the signal doesn't discriminate here. #105 —
     zero is "tells us little here", NOT "reject", and per D2 it renders as
     a sentence with no mark. Two entries below are deliberately null so the
     demo shows that case rather than only the flattering one.

     reliability / tried / distinct are SENTENCES. They get no mark:
     reliability is a property of a distribution, "she tried" is an event,
     distinctiveness is a judgment. None of the three is two dated
     observations, so none of them is a slope. */
  var TRAJ = {
    c_marguerite: {
      audience: { from: 872000, to: 1201200, months: 12 },
      citations: { from: 29, to: 41, note: 'up 12 this quarter' },
      reliability: 'median 4.1M views, not one spike',
      tried: 'Shopify link, dead since May',
      distinct: 'The no-cut constraint is the whole identity — a volume account cannot copy it',
      gate: 'pass'
    },
    c_deshawn: {
      audience: { from: 341000, to: 468000, months: 12 },
      citations: { from: 4, to: 6, note: 'flat' },
      reliability: 'median 620k, consistent across 90 days',
      tried: null,
      distinct: 'West African weeknight cooking at this production level has no peer in the category',
      gate: 'pass'
    },
    c_junie: {
      audience: { from: 210000, to: 388000, months: 12 },
      citations: null,               /* entertainment-led — separates nobody */
      reliability: 'median 940k, one outlier at 6M',
      tried: 'Patreon opened 2025, three posts, dormant since January',
      distinct: 'Kitchen-failure format nobody else will film',
      gate: 'pass'
    },
    c_nell: {
      audience: { from: 604000, to: 690000, months: 12 },
      citations: { from: 51, to: 74, note: 'up 23 this quarter' },
      reliability: 'median 310k, not one spike',
      tried: null,
      distinct: 'Cited by trade press as a source on fermentation safety',
      gate: 'pass'
    },
    /* The Trajectory gate doing its job. Every Pressure signal fires harder
       on someone quitting than on someone overwhelmed; without this gate the
       highest-scoring creator in the system is a person giving up. */
    c_hollis: {
      audience: { from: 512000, to: 441000, months: 12 },
      citations: null,
      reliability: 'median falling quarter on quarter',
      tried: 'Store closed in March',
      distinct: null,
      gate: 'fail',
      gateWhy: 'Audience down 14% across the year and still falling over the last 3 months. ' +
               'Posting less and replies collapsing read as giving up here, not as being overwhelmed.'
    },
    /* Comments unreadable on Instagram (§11.3) — Demand resolves to
       not-found, and the fork still draws, because cadence and audience
       trend are visible without comment access. */
    c_otto: {
      audience: { from: 198000, to: 244000, months: 12 },
      citations: { from: 11, to: 13, note: 'up 2 this quarter' },
      reliability: 'median 88k, steady',
      tried: 'Domain registered 2024, never resolved to a site',
      distinct: 'Regional smoked-fish knowledge that is genuinely scarce',
      gate: 'pass'
    }
  };

  /* --------------------------------------------------- INVENTORY, v1.3
     Split into what they have BUILT and what they have SWITCHED ON — a
     dormant channel is two lines, not a fourth verification state. Ordered
     by money on the table, highest first, with a clause on the top line only
     (§5.2 — weight is order, never a badge).

     `na` rows are NOT verification states. They are lifted out of the list
     and rendered as a sentence beneath it — see app.js. */
  function inv(built, on, na) {
    return { built: built, on: on, na: na || [] };
  }
  var INV = {
    c_marguerite: inv(
      [
        { item: 'YouTube channel', state: 'verified_absent', checked: 4,
          note: '48k subscribers, nothing posted in 14 months — her clips are the whole business and none of them earn' },
        { item: 'Newsletter',      state: 'verified_absent', checked: 6, note: 'not there' },
        { item: 'Store',           state: 'verified_absent', checked: 5, note: 'not there' },
        { item: 'Representation',  state: 'verified_absent', checked: 4, note: 'not there' },
        { item: 'Website',         state: 'verified_absent', checked: 4, note: 'not there' },
        { item: 'Cookbook',        state: 'not_found',       checked: 2, note: 'publisher databases not covered at this depth' }
      ],
      [
        { item: 'Platform subscriptions', state: 'verified_absent', checked: 2, note: 'off' },
        { item: 'Shopping tags',          state: 'verified_absent', checked: 2, note: 'off' },
        { item: 'Affiliate links',        state: 'verified_absent', checked: 3, note: 'none in 120 posts' },
        { item: 'Sponsored posts',        state: 'verified_absent', checked: 1, note: 'zero disclosures in 120 posts' }
      ],
      [{ item: 'Podcast', why: 'she has never spoken to camera' }]
    ),
    c_otto: inv(
      [
        { item: 'YouTube channel', state: 'verified_absent', checked: 4,
          note: 'nothing at all — the largest unbuilt business here' },
        { item: 'Newsletter',      state: 'verified_absent', checked: 6, note: 'not there' },
        { item: 'Store',           state: 'verified_absent', checked: 5, note: 'not there' },
        { item: 'Representation',  state: 'not_found',       checked: 3, note: 'inconclusive — one unverified agency mention' },
        { item: 'Website',         state: 'present',         checked: 2, note: 'a single page, last updated 2024' }
      ],
      [
        { item: 'Platform subscriptions', state: 'verified_absent', checked: 2, note: 'off' },
        { item: 'Shopping tags',          state: 'present',         checked: 2, note: 'on, 3 products, none his own' },
        { item: 'Affiliate links',        state: 'present',         checked: 3, note: '4 in 90 days' }
      ],
      []
    )
  };

  /* Missing everything, including the trivial things, is a LABEL — not a
     number and not confidence (#103). Computed, stated as a heading. */
  function switchedOnLabel(id) {
    var o = (INV[id] || {}).on || [];
    var any = o.some(function (r) { return r.state === 'present'; });
    return any ? 'a few things, none of them earning' : 'nothing, anywhere';
  }

  /* --------------------------------------------------------- THE WATCH
     A hypothesis with a date (§5.8). The check-back grades the bet.

     `series` is the ONLY place a sparkline is legal in this product: five
     real checks over a month. `held` is not the weaker lane — "still no
     newsletter" after a month is the hypothesis surviving, and it is the
     most common outcome. */
  var WATCH = {
    w_soren: {
      since: '4 March', until: '4 April', windowMonths: 1, days: 31,
      checks: [0, 7, 14, 22, 31],
      bet: 'something changes here within a month',
      scoreFrom: 71, scoreTo: 74,
      moved: [
        { label: 'Audience', from: '296k', to: '314k', pct: 6,
          series: [296, 299, 301, 306, 309, 314], field: 'trajectory', tail: '+6%' },
        { label: 'Posting',  from: '2/wk', to: '4/wk', pct: 80, field: 'pressure', tail: 'back up' },
        { label: 'Citations', from: '41',  to: '47',   pct: 15, field: 'trajectory', tail: '' }
      ],
      held: [
        { item: 'Newsletter',     checked: 6, note: 'still not there · we looked in 6 places, twice' },
        { item: 'Store',          checked: 5, note: 'still dead — 404 since February' },
        { item: 'Representation', checked: 4, note: 'still none' }
      ]
    },
    /* The flat month. §5.8's prune recommendation writing itself, and the
       single most useful check-back there is. */
    w_gus: {
      since: '11 May', until: '11 June', windowMonths: 1, days: 31,
      checks: [0, 8, 15, 23, 31],
      bet: 'the store link breaking means he is ready to talk',
      scoreFrom: 64, scoreTo: 63,
      moved: [],
      held: [
        { item: 'Newsletter',     checked: 6, note: 'still not there' },
        { item: 'Store',          checked: 5, note: 'still dead — no change since March' },
        { item: 'Posting',        checked: 0, note: 'unchanged at 3/wk' },
        { item: 'Audience',       checked: 0, note: 'unchanged, 285k' }
      ],
      flat: 'A month, and nothing moved. Scout recommends you stop watching — ' +
            'the pass reason is “no longer worth tracking,” and he comes back on any material change.'
    },
    w_lark: {
      since: '2 April', until: '2 May', windowMonths: 1, days: 30,
      checks: [0, 9, 18, 30],
      bet: 'the two unresolved checks resolve and the gap gets real',
      scoreFrom: 68, scoreTo: 72,
      moved: [
        { label: 'Audience', from: '356k', to: '381k', pct: 7,
          series: [356, 361, 369, 381], field: 'trajectory', tail: '+7%' },
        { label: 'Replies',  from: '11%',  to: '4%',   pct: -64, field: 'pressure', tail: 'collapsing' }
      ],
      held: [
        { item: 'Newsletter',    checked: 6, note: 'still not there' },
        { item: 'Membership',    checked: 3, note: 'still inconclusive — the two checks did not resolve' }
      ]
    }
  };

  /* ------------------------------------------------- THE WATCHLIST ROWS
     §6.3: what the watchlist watches is the Trajectory block, and an alert
     quotes the trend, never the score delta — "score dropped 4 points" says
     nothing a person can act on.

     This is the slope's strongest home, and it is not the report: a column
     of slopes is the only thing that lets you see WHO IS MOVING without
     reading ten rows. */
  var ROWS = {
    w_soren: { move: 6,   moveLabel: 'audience +6% since you watched', due: 'due today',        field: 'trajectory' },
    w_lark:  { move: 7,   moveLabel: 'audience +7%, replies collapsing', due: '3 days left',    field: 'trajectory' },
    w_gus:   { move: 0.4, moveLabel: 'nothing has moved in a month',   due: 'overdue by 2 days', field: 'trajectory' }
  };

  /* ------------------------------------------------------ THE DECISIONS
     Week two of a real desk. Deliberately thin, because it is week two —
     the empty modules are the point (D18: no cut is drawn below its minimum
     n; the screen says "not enough yet" and names what it is waiting for). */
  var DECISIONS = {
    months: [
      { m: 'Jul', p: 2, w: 5, x: 9, e: 3, quiet: 4 },
      { m: 'Aug', p: 3, w: 7, x: 14, e: 5, quiet: 6 }
    ],
    bands: [
      { b: '90+',   p: 3, w: 1, x: 0 },
      { b: '86–90', p: 2, w: 4, x: 2 },
      { b: '82–86', p: 0, w: 5, x: 6 },
      { b: '78–82', p: 0, w: 2, x: 15 }
    ],
    reasons: [
      ['Already monetized', 9], ['Too small', 6], ['Not what I asked for', 5],
      ['No pressure / not ready', 4], ['Not distinctive', 2], ['Wrong category', 1]
    ],
    reasonNote: '“Not what I asked for” — 4 of 5 on one brief. §6.7 fires at three: offer to re-read it.',
    outcomes: { contacted: 5, replied: 2, signed: 0, pending: 12 },
    notEnough: [
      { module: 'Which kinds convert', answers: 'keep-rate by category, band, platform, play',
        status: '4 categories, n = 3–11. Not enough yet.' },
      { module: 'Machine vs. human', answers: '§6.4 — does Scout find what humans miss?',
        status: '6 manual adds. Not enough yet.' }
    ]
  };

  window.VIZ = {
    TRAJ: TRAJ, INV: INV, WATCH: WATCH, ROWS: ROWS, DECISIONS: DECISIONS,
    postingPct: postingPct, replies: replies, fmt: fmt,
    switchedOnLabel: switchedOnLabel,
    traj: function (id) { return TRAJ[id] || null; },
    inv:  function (id) { return INV[id] || null; },

    /* The fork needs BOTH limbs. If either is missing it does not draw —
       D2, a one-limbed fork claims a relationship it cannot see. */
    forkFor: function (c) {
      var t = TRAJ[c.id];
      var p = postingPct(c);
      if (!t || !t.audience || p === null) return null;
      var a = (t.audience.to - t.audience.from) / t.audience.from * 100;
      return { audience: a, posting: p };
    },

    /* Creators the demo drives, in the order they appear in the picker. */
    cast: ['c_marguerite', 'c_otto', 'c_hollis'],
    watched: ['w_soren', 'w_lark', 'w_gus']
  };
})();
