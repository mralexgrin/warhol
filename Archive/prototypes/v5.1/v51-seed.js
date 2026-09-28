/* ==========================================================================
   SCOUT v5 — the v1.3 layer over the frozen cohort.
   Classic script. Sets window.SCOUT. Runs from file://.

   warhol-seed.js is byte-identical to prototypes/_shared/warhol-seed.js and is
   never mutated or forked. Everything v1.3 added sits here.

   WHAT THIS FILE DOES
   -------------------
   PRD v1.3 changed the model under the cohort: Demand and Missing split out of
   one pillar, Pressure replaced Operator Strain and must read as a CHANGE,
   Trajectory arrived as a second gate, the monetization inventory roughly
   doubled and split into built / switched on, and Fit became the brief. None of
   that exists in the frozen seed, so this file carries it.

   Three kinds of value live here:

   1. AUTHORED — the facts v1.3 introduced that no projection can invent:
      citations, audience trend over 12 months, reliability, the split
      inventory, and every Pressure line stated as a change rather than a level.
      §5.2 rule 1: "12% reply rate" is unreadable; "replies fell 22% to 3%" is a
      fact. The seed only ever stored the level, so the change is written here.

   2. DERIVED — anything the seed already says well: the audience's quotes, the
      creator's own words, cadence decay, the play, the samples, the platforms.
      Deriving beats re-authoring; the record is the source.

   3. THE v1.3 RESCORE — §5.2 doubled the inventory, so §5.4 says 70 no longer
      means what it meant and the threshold starts at 78. Rescoring the whole
      cohort by hand would fork the frozen seed, so each creator carries an
      `uplift`: the points their new absence lines are worth. The score is then
      computed as Demand + Missing + Pressure, never carried beside them, and
      the threshold moves to 78 to meet it.

      The cohort is not the population. Every creator in the seed already
      cleared an earlier gate, so more than a quarter of THIS list clears 78 —
      which is what §5.4 predicts for a pre-gated set, not a violation of it.

   ALL CREATORS ARE FICTIONAL. The app fabricates quotes and pressure claims, so
   attaching them to real accounts would be a real risk once a deck is forwarded.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;
  var TODAY = '2026-07-31';
  var REWIND = '2024-01-15';

  /* ---------------------------------------------------------------- people */
  /* One user type (§2, decision 89). Admin is a permission on a member, not a
     role — so nobody here is a noun. */
  var me = {
    id: 's_alex', name: 'Alex Grinshpoon', initials: 'AG',
    email: 'alex@paradium.com', admin: true
  };
  var members = [
    { name: 'Alex Grinshpoon', initials: 'AG', email: 'alex@paradium.com', admin: true, briefs: 2, lastSeen: '2026-07-31' },
    { name: 'Marisol Vega', initials: 'MV', email: 'marisol@paradium.com', admin: false, briefs: 3, lastSeen: '2026-07-30' },
    { name: 'Theo Nakamura-Boyd', initials: 'TN', email: 'theo@paradium.com', admin: false, briefs: 1, lastSeen: '2026-07-28' },
    { name: 'Dana Okonkwo-Reyes', initials: 'DO', email: 'dana@paradium.com', admin: false, briefs: 1, lastSeen: '2026-06-14' }
  ];

  /* ============================================================ THE v1.3 TABLE
     One record per creator, carrying only what the frozen seed cannot say.
     Anything omitted is derived below. Everything here is prototype data.

       uplift      points the doubled inventory (§5.2) adds to the seed score
       audience    ['Audience up 38% this year', '214k → 296k']
       reliability ['Their posts land reliably', 'median 180k, not one spike']
       citations   ['41 sites have cited or linked their work', 'up 12 this quarter']
       tried       ['They tried to build a store', 'Shopify link, dead since Feb']
       distinct    one sentence, no right-hand value — it is a judgment
       demand      the Demand headline, in people rather than comments
       replies     the unanswered-audience line, AS A CHANGE (§5.2)
       posting     the cadence line, AS A CHANGE (derived if omitted)
       lens        Trajectory reading Pressure (§5.1) — why this is drowning,
                   not quitting
       built       what they have built, ORDERED BY WEIGHT, clause on line 1
       on          what they have switched on, in §5.2's order
       trend       the watchlist's moving lines (§6.3)
     ------------------------------------------------------------------------ */
  var P = 'present', A = 'verified_absent', N = 'not_found', NA = 'n/a';

  var V13 = {

    /* ---------------------------------------------------- today's drop */
    c_marguerite: {
      uplift: 3,
      audience: ['Audience up 31% this year', '917k → 1.2M'],
      reliability: ['Their posts land reliably', 'median 410k, not one spike'],
      citations: ['62 sites have cited or linked their work', 'up 9 this quarter'],
      tried: ['They tried to build a store', 'Shopify link, dead since May'],
      distinct: 'Nobody else films laminated dough in a single unbroken take',
      demand: '1,940 people asked where to buy',
      replies: ['Replies fell 19% → 2%', 'against five times the comment volume'],
      lens: 'Audience up 31% this year — they are growing faster than they can handle.',
      built: [
        { item: 'YouTube channel', state: P, places: 2, clause: 'the channel exists at 48k against 1.15M on short form — it is a placeholder, not a business' },
        { item: 'Newsletter', state: A, places: 6 },
        { item: 'Store', state: A, places: 5, note: 'the Shopify subdomain is dead' },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 4 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they never talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: A, note: 'channel below the partner threshold' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 120 posts' }
      ]
    },

    c_deshawn: {
      uplift: 4,
      audience: ['Audience up 44% this year', '580k → 835k'],
      reliability: ['Their posts land reliably', 'median 260k, not one spike'],
      citations: ['38 sites have cited or linked their work', 'up 7 this quarter'],
      tried: ['They tried to sell a guide', 'Gumroad page, dormant 8 months'],
      distinct: 'The only person doing kitchen fabrication as a repair discipline',
      demand: '1,180 people asked where to buy',
      replies: ['Replies fell 14% → 1%', 'while comments roughly tripled'],
      lens: 'Audience up 44% this year — the demand arrived faster than they could answer it.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — their clips are the whole business and none of them earn' },
        { item: 'Newsletter', state: A, places: 6 },
        { item: 'Store', state: A, places: 5, note: 'the Gumroad page went dormant in November' },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 3 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they work to camera, never to a mic' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 140 posts' }
      ]
    },

    c_ilse: {
      uplift: 5,
      audience: ['Audience up 17% this year', '760k → 890k'],
      reliability: ['Their builds land reliably', 'median 300k, not one spike'],
      citations: ['104 sites have cited or linked their work', 'up 21 this quarter'],
      tried: ['They ran a tool list and stopped', 'Notion page, unshared since March'],
      distinct: 'Restores workshop machines nobody else will touch on camera',
      demand: '1,340 people asked where to buy',
      replies: ['Replies fell 12% → 1%', 'at four times the comment volume'],
      lens: 'Audience up 17% and citations up 21 this quarter — the trade press found them before we did.',
      built: [
        { item: 'YouTube channel', state: P, places: 2, clause: 'the channel is the audience, and it earns nothing — monetization has never been switched on' },
        { item: 'Newsletter', state: A, places: 6 },
        { item: 'Store', state: A, places: 5 },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 4 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: A, places: 2 }
      ],
      on: [
        { item: 'YouTube monetization', state: A, note: 'eligible and not enabled' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 60 videos' }
      ]
    },

    c_junie: {
      uplift: 4,
      audience: ['Audience up 28% this year', '441k → 565k'],
      reliability: ['Their posts land reliably', 'median 190k, not one spike'],
      citations: ['29 sites have cited or linked their work', 'up 6 this quarter'],
      tried: ['They asked their audience how to sell to them', 'a poll, three weeks ago, no follow-up'],
      distinct: 'Preserving as a household skill, not a hobby aesthetic',
      demand: '980 people asked where to buy',
      replies: ['Replies fell 21% → 2%', 'and they said so themselves'],
      lens: 'Audience up 28% this year — five separate statements of being at capacity in sixty days.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — a 565k short-form audience with no long-form home' },
        { item: 'Newsletter', state: A, places: 6 },
        { item: 'Store', state: A, places: 5 },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 3 },
        { item: 'Membership', state: N, places: 2, note: 'a closed community was mentioned once and we could not resolve it' },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 90 posts' }
      ]
    },

    c_nell: {
      uplift: 2,
      audience: ['Audience up 12% this year', '1.54M → 1.73M'],
      reliability: ['Their posts land reliably', 'median 520k, not one spike'],
      citations: ['147 sites have cited or linked their work', 'up 4 this quarter'],
      tried: ['They built a site and abandoned it', 'placeholder page, untouched 14 months'],
      distinct: 'Fourteen years of a technique archive nobody else has filmed',
      demand: '860 people asked for the archive',
      replies: ['Replies fell 9% → 1%', 'at roughly the same comment volume'],
      lens: 'Audience up 12% and still climbing — slower than the others, on a base four times the size.',
      built: [
        { item: 'YouTube channel', state: P, places: 2, clause: 'present and dormant — nothing posted in 11 months, and the archive is what people are asking for' },
        { item: 'Newsletter', state: A, places: 6 },
        { item: 'Store', state: A, places: 4 },
        { item: 'Representation', state: N, places: 3, note: 'one agency listing we could not confirm is current' },
        { item: 'Website', state: P, places: 2, note: 'a placeholder page, untouched since 2025' },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: A, places: 2 }
      ],
      on: [
        { item: 'YouTube monetization', state: P, note: 'on, and earning almost nothing on a dormant channel' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: P, note: '4 in 90 days, all unbranded' },
        { item: 'Sponsored posts', state: P, note: '3, last one March 2026' }
      ]
    },

    c_ardash: {
      uplift: 6,
      audience: ['Audience up 34% this year', '836k → 1.12M'],
      reliability: ['Their posts land reliably', 'median 380k, not one spike'],
      citations: ['211 sites have cited or linked their work', 'up 18 this quarter'],
      tried: ['The workshop site has not changed since 2011', 'one page, a phone number, no shop'],
      distinct: 'A working gilder filming a trade with maybe forty practitioners left',
      demand: '710 people asked where to buy',
      replies: ['Replies fell 6% → 0.4%', 'they have effectively stopped answering'],
      lens: 'Audience up 34% this year — they are a tradesperson who acquired a million-person audience by accident.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — the work is long-form by nature and none of it lives anywhere that pays' },
        { item: 'Newsletter', state: A, places: 5 },
        { item: 'Store', state: A, places: 5 },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: P, places: 2, note: 'a trade site from 2011, no creator surface' },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they barely speak on camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none, ever' }
      ]
    },

    c_priya: {
      uplift: 6,
      audience: ['Audience up 52% this year', '348k → 529k'],
      reliability: ['Their posts land reliably', 'median 140k, not one spike'],
      citations: ['44 sites have cited or linked their work', 'up 11 this quarter'],
      tried: ['They send templates by hand, one at a time', 'in the replies, on request'],
      distinct: 'Systems for people who hate systems — a specific and unusual voice',
      demand: '740 people asked for the templates',
      replies: ['Replies fell 24% → 4%', 'as requests outgrew their evenings'],
      lens: 'Audience up 52% this year — the fastest riser in the drop, and they are still answering by hand.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — every template request is a long-form video they never made' },
        { item: 'Newsletter', state: A, places: 6 },
        { item: 'Store', state: A, places: 5 },
        { item: 'Representation', state: A, places: 3 },
        { item: 'Website', state: A, places: 4 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 80 posts' }
      ]
    },

    /* ------------------------------------------- January 2024, the rewind */
    b_ines: {
      uplift: 4,
      audience: ['Audience up 72% this year', '36k → 61k'],
      reliability: ['Their posts land reliably', 'median 240k, not one spike'],
      citations: ['19 sites have cited or linked their work', 'up 8 this quarter'],
      tried: ['Nothing built, nothing attempted', 'clean slate'],
      distinct: 'The constraint — sourdough in 400 square feet — is the whole identity',
      demand: '840 people asked where to buy',
      replies: ['Replies fell 28% → 5%', 'against twelve times the comment volume'],
      lens: 'Audience up 72% this year — the steepest curve in the cohort, on the smallest base.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — a 61k short-form audience asking for something written down' },
        { item: 'Newsletter', state: A, places: 6 },
        { item: 'Store', state: A, places: 5 },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 4 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 90 posts' }
      ]
    },

    b_roman: {
      uplift: 4,
      audience: ['Audience up 49% this year', '59k → 88k'],
      reliability: ['Their videos land reliably', 'median 310k, not one spike'],
      citations: ['26 sites have cited or linked their work', 'up 9 this quarter'],
      tried: ['Nothing built, nothing attempted', 'clean slate'],
      distinct: 'Depth over breadth — one liquid an episode, for as long as it takes',
      demand: '590 people asked for it written down',
      replies: ['They still answer 31% of comments', 'four hours a day, and it is eating the filming'],
      lens: 'Audience up 49% this year — they are answering everything by hand and it is costing them the work.',
      built: [
        { item: 'YouTube channel', state: P, places: 2, clause: 'the channel is the audience and it is the only thing earning — nothing else exists' },
        { item: 'Newsletter', state: A, places: 5 },
        { item: 'Store', state: A, places: 5 },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 4 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: A, places: 2 }
      ],
      on: [
        { item: 'YouTube monetization', state: P, note: 'on — the only revenue anywhere' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 40 videos' }
      ]
    },

    b_fen: {
      uplift: 5,
      audience: ['Audience up 94% this year', '23k → 44k'],
      reliability: ['Their posts land reliably', 'median 160k, not one spike'],
      citations: ['12 sites have cited or linked their work', 'up 5 this quarter'],
      tried: ['They sell jars out of a DM queue', 'no store, no payment, no shipping'],
      distinct: 'A rowhouse fermentation operation with a genuinely regional palate',
      demand: '1,100 people asked where to buy',
      replies: ['Replies fell 22% → 4%', 'as the DM queue took over'],
      lens: 'Audience up 94% this year — nearly doubled, and the sales channel is a DM inbox.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — and hot sauce is the most clip-driven commerce category we run' },
        { item: 'Newsletter', state: A, places: 5 },
        { item: 'Store', state: A, places: 5, note: 'orders are taken by hand in the DMs' },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 4 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 70 posts' }
      ]
    },

    b_marisol: {
      uplift: 4,
      audience: ['Audience up 55% this year', '46k → 71k'],
      reliability: ['Their posts land reliably', 'median 130k, not one spike'],
      citations: ['21 sites have cited or linked their work', 'up 6 this quarter'],
      tried: ['Nothing built, nothing attempted', 'clean slate'],
      distinct: 'A family recipe archive being filmed for the first time',
      demand: '680 people asked where to buy',
      replies: ['Replies fell 26% → 6%', 'as the archive requests piled up'],
      lens: 'Audience up 55% this year — they are filming an archive faster than they can answer for it.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — the archive is long-form by nature and none of it is anywhere that pays' },
        { item: 'Newsletter', state: A, places: 5 },
        { item: 'Store', state: A, places: 4 },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 4 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 60 posts' }
      ]
    },

    b_clem: {
      uplift: 4,
      audience: ['Audience up 38% this year', '75k → 103k'],
      reliability: ['Their posts land reliably', 'median 95k, not one spike'],
      citations: ['9 sites have cited or linked their work', 'flat this quarter'],
      tried: ['Nothing built, nothing attempted', 'clean slate'],
      distinct: 'Cake decorating filmed as failure recovery rather than as a result',
      demand: '430 people asked where to buy',
      replies: ['Replies fell 18% → 6%', 'over the same window'],
      lens: 'Audience up 38% this year — steady, and posting has fallen 29% against it.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — the format is long-form and none of it earns' },
        { item: 'Newsletter', state: A, places: 5 },
        { item: 'Store', state: A, places: 4 },
        { item: 'Representation', state: A, places: 3 },
        { item: 'Website', state: A, places: 3 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 50 posts' }
      ]
    },

    /* Below the line in v1.3, and kept visible for it. */
    b_tobi: {
      uplift: 3,
      audience: ['Audience up 66% this year', '23k → 38k'],
      reliability: ['One post carried the year', 'median 18k against a 900k spike'],
      citations: ['2 sites have cited or linked their work', 'flat this quarter'],
      tried: ['Nothing built, nothing attempted', 'clean slate'],
      distinct: 'Nordic weeknight cooking — well made, and not unlike four other accounts',
      demand: '260 people asked where to buy',
      replies: ['Replies fell 15% → 8%', 'a shallow fall on a small base'],
      lens: 'Audience up 66% on one viral post — the growth is real and the reliability underneath it is not.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all, and at 38k there is not yet an audience to carry one' },
        { item: 'Newsletter', state: A, places: 4 },
        { item: 'Store', state: A, places: 4 },
        { item: 'Representation', state: A, places: 3 },
        { item: 'Website', state: A, places: 3 },
        { item: 'Membership', state: N, places: 1 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 40 posts' }
      ]
    },

    /* ---------------------------------------------------------- watchlist */
    w_soren: {
      uplift: 2, window: '1 month',
      audience: ['Audience up 14% this year', '632k → 720k'],
      reliability: ['Their posts land reliably', 'median 210k, not one spike'],
      citations: ['31 sites have cited or linked their work', 'flat for two quarters'],
      tried: ['Nothing built, nothing attempted', 'clean slate'],
      distinct: 'Loud, funny, and closer to the middle of the category than it looks',
      demand: '820 people asked where to buy',
      replies: ['Reply rate steady at 11%', 'unchanged for four months'],
      lens: 'Audience up 14%, posting up 3% — nothing here is breaking.',
      trend: ['Score flat for four months', 'no citation movement in 120 days', 'posting cadence steady'],
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — the largest single absence on the list' },
        { item: 'Newsletter', state: A, places: 5 },
        { item: 'Store', state: A, places: 4 },
        { item: 'Representation', state: A, places: 3 },
        { item: 'Website', state: A, places: 3 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 100 posts' }
      ]
    },

    w_lark: {
      uplift: 3, window: '3 months',
      audience: ['Audience up 26% this year', '283k → 356k'],
      reliability: ['Their posts land reliably', 'median 88k, not one spike'],
      citations: ['17 sites have cited or linked their work', 'up 4 this quarter'],
      tried: ['Nothing built, nothing attempted', 'clean slate'],
      distinct: 'A single-ingredient obsession filmed with unusual patience',
      demand: '340 people asked where to buy',
      replies: ['Replies fell 16% → 4%', 'over three months'],
      lens: 'Audience up 26% this year — and the pressure curve has risen in every month we have watched.',
      trend: ['Pressure up in each of the last 3 months', 'audience up 26% this year', 'coverage still thin — 4 checks unresolved'],
      built: [
        { item: 'YouTube channel', state: A, places: 2, clause: 'nothing at all, though the coverage here is thin' },
        { item: 'Newsletter', state: A, places: 4 },
        { item: 'Store', state: N, places: 2, note: 'a link we could not resolve' },
        { item: 'Representation', state: N, places: 2 },
        { item: 'Website', state: A, places: 3 },
        { item: 'Membership', state: N, places: 1 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: N, note: 'could not resolve' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 70 posts' }
      ]
    },

    w_gus: {
      uplift: 1, window: '2 months',
      audience: ['Audience up 31% this year', '218k → 285k'],
      reliability: ['Their posts land reliably', 'median 74k, not one spike'],
      citations: ['14 sites have cited or linked their work', 'up 2 this quarter'],
      tried: ['They have now started building', 'a newsletter went live this month'],
      distinct: 'Regional pasta shapes, filmed with real specificity',
      demand: '290 people asked where to buy',
      replies: ['Reply rate steady at 9%', 'roughly unchanged'],
      lens: 'Audience up 31% this year, and the gap we were watching has started to close on its own.',
      trend: ['A newsletter appeared this month', 'the gap is closing without us', 'score down 3 as a consequence'],
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all' },
        { item: 'Newsletter', state: P, places: 2, note: 'live since July — this was the gap' },
        { item: 'Store', state: A, places: 4 },
        { item: 'Representation', state: A, places: 3 },
        { item: 'Website', state: P, places: 2, note: 'the newsletter landing page' },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: P, note: '6 in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 60 posts' }
      ]
    },

    /* ------------------------------------------------------- promoted */
    p_dorota: {
      uplift: 4,
      audience: ['Audience up 29% this year', '409k → 528k'],
      reliability: ['Their posts land reliably', 'median 170k, not one spike'],
      citations: ['57 sites have cited or linked their work', 'up 13 this quarter'],
      tried: ['Nothing built, nothing attempted', 'clean slate'],
      distinct: 'Polish home baking with a genuinely unusual archive behind it',
      demand: '1,510 people asked where to buy',
      replies: ['Replies fell 17% → 2%', 'against six times the comment volume'],
      lens: 'Audience up 29% this year — the strongest demand density in the cohort.',
      built: [
        { item: 'YouTube channel', state: A, places: 3, clause: 'nothing at all — a 528k audience with no long-form home' },
        { item: 'Newsletter', state: A, places: 6 },
        { item: 'Store', state: A, places: 5 },
        { item: 'Representation', state: A, places: 4 },
        { item: 'Website', state: A, places: 3 },
        { item: 'Membership', state: A, places: 3 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 110 posts' }
      ]
    },

    /* -------------------------------------------------------- run a name */
    c_runname: {
      uplift: 3,
      audience: ['Audience up 36% this year', '152k → 207k'],
      reliability: ['Their videos land reliably', 'median 900k, not one spike'],
      citations: ['33 sites have cited or linked their work', 'up 5 this quarter'],
      tried: ['They tried to run a waitlist and closed it', 'Google Form, shut since March'],
      distinct: 'The salvage premise is specific and nobody else films it',
      demand: '520 people asked where to buy',
      replies: ['Replies fell 11% → 4%', 'since the waitlist closed'],
      lens: 'Audience up 36% this year — they closed the queue because they could not run it, not because it dried up.',
      built: [
        { item: 'YouTube channel', state: P, places: 2, clause: 'present and earning — this is the one thing they have built' },
        { item: 'Newsletter', state: A, places: 4 },
        { item: 'Store', state: A, places: 4, note: 'the waitlist form is closed' },
        { item: 'Representation', state: N, places: 2 },
        { item: 'Website', state: N, places: 2, note: 'a parked domain we could not tie to them' },
        { item: 'Membership', state: N, places: 1 },
        { item: 'Podcast', state: NA, note: 'they narrate, they do not host' }
      ],
      on: [
        { item: 'YouTube monetization', state: P, note: 'on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: A, note: 'off' },
        { item: 'Affiliate links', state: A, note: 'none in 90 days' },
        { item: 'Sponsored posts', state: A, note: 'none in 40 videos' }
      ]
    }
  };

  /* ================================================= THE RENAME LAYER (§13.2)
     The frozen seed was written against v1.1 vocabulary and still says
     "Warhol", "purchase-intent comments", "capacity strain" and "surfaces
     checked" in its authored prose. §4.6 is absolute that Warhol is the engine
     and never appears in the interface, and §13.2 lists the renames.

     Rewriting the seed would fork a file five prototypes share, so the rename
     happens at display time instead. Applied to seed PROSE only — never to a
     quote, because a creator's own words are evidence and editing them is the
     one thing this product must never do. */
  var RENAMES = [
    [/\bWarhol Scout\b/g, 'Scout'],
    [/\bScout Report\b/g, 'the report'],
    [/\bWarhol Score\b/g, 'the score'],
    [/\bWarhol\b/g, 'Scout'],
    [/purchase-intent comments/g, 'people asked where to buy'],
    [/\bcapacity strain\b/gi, 'pressure'],
    [/\bOperator [Ss]train\b/g, 'Pressure'],
    [/\bMonetization Gap\b/g, 'Demand and Missing'],
    [/\bFormat Fit\b/g, 'Fit'],
    [/\bcoverage gate\b/gi, 'confidence floor'],
    /* 'surfaces checked' was the only shape v5 caught. The seed also says 'we
       checked 18 surfaces', 'across 10 surfaces' and '11 of 11 surfaces resolved
       absent' — all of which reached the screen. Match the word itself, in every
       construction, most specific first. */
    [/(\d+)\s+of\s+(\d+)\s+surfaces resolved absent/g, 'nothing found in any of the $2 places we looked'],
    [/(\d+)\s+surfaces checked/g, 'we looked in $1 places'],
    [/we checked (\d+) surfaces/gi, 'we looked in $1 places'],
    [/(?:across|in)\s+(\d+)\s+surfaces/g, 'in $1 places'],
    [/\bNo owned surface\b/g, 'Nothing of their own'],
    [/\bno owned surface\b/g, 'nothing of their own'],
    [/\bsurfaces checked\b/g, 'places we looked in'],
    [/\bsurfaces?\b/g, 'places'],
    [/\bthe Ledger\b/g, 'the check record']
  ];
  function plain(s) {
    var out = String(s == null ? '' : s);
    RENAMES.forEach(function (r) { out = out.replace(r[0], r[1]); });
    return out;
  }

  /* ================================================================ SCORING */
  function up(c) { return (V13[c.id] || {}).uplift || 0; }

  /* The score is the sum of its parts, computed from the parts — never carried
     alongside them. The frozen seed's composite drifts from its own pillars by
     a point or four on a handful of creators, which nothing in v4 exposed
     because "How it scored" was a drawer. v1.3 attaches the arithmetic to each
     claim (§6.2), so a total that does not equal what is on screen above it is
     the one bug this product cannot survive. */
  function score13(c) {
    var p = points(c);
    return Math.min(100, p.demand + p.missing + p.pressure);
  }

  /* Demand and Missing are the two halves of Opportunity (weight 60); Pressure
     carries 40. The seed stored one Gap number, so the split has to be stated
     here — it is the arithmetic the report attaches to each claim (§6.2).

     Demand takes roughly two thirds. That is not a free choice: §5.2's
     load-bearing rule is that an absence counts more when the demand points
     straight at it, so named demand is what gives the inventory its weight
     rather than the other way round. A cohort where everyone lacks a newsletter
     separates nobody; a cohort where 1,900 people asked for one does. */
  var DEMAND_SHARE = 0.66;
  function points(c) {
    var opp = c.pillars.gap.score + up(c);
    var demand = Math.round(opp * DEMAND_SHARE);
    return { demand: demand, missing: opp - demand, pressure: c.pillars.strain.score, opportunity: opp };
  }

  /* ================================================================== CLAIMS
     Everything the card and the report read from. Authored where v1.3 needs a
     fact the seed cannot supply, derived everywhere else. */
  function sub(list, key) {
    var hit = null;
    (list || []).forEach(function (x) { if (x.key === key) hit = x; });
    return hit;
  }
  function firstNum(s) {
    var m = String(s || '').replace(/,/g, '').match(/\d+/);
    return m ? Number(m[0]) : 0;
  }
  function ev(c, kind) {
    var out = [];
    (c.evidence || []).forEach(function (e) { if (e.kind === kind) out.push(e); });
    return out;
  }

  /* A cadence subsignal is already a change ("−41% vs 90d baseline"), it just
     is not yet a sentence. §5.2: undated is not pressure, and a level is not a
     change — this is the one Pressure line the seed can honestly produce. */
  function postingLine(c) {
    var cad = sub((c.pillars.strain || {}).subsignals, 'cadence');
    if (!cad) return null;
    var v = String(cad.value);
    var n = firstNum(v);
    if (!n) return null;
    var down = v.indexOf('−') === 0 || v.indexOf('-') === 0;
    return {
      text: down ? 'Posting ' + n + '% less than they used to' : 'Posting ' + n + '% more than they used to',
      when: 'last 90 days', kind: 'change', engine: 'rule'
    };
  }

  /* The strongest thing in the whole model, and the rarest: one of four
     sub-signals produces a quote, so it leads (§5.2). */
  function saidLine(c) {
    var caps = ev(c, 'caption');
    if (!caps.length) return null;
    var e = caps[0];
    return { text: e.quote, at: e.observedAt, url: e.url, platform: e.platform, kind: 'said', engine: 'llm' };
  }

  /* The sketch in §6.2 puts a like count beside each quoted comment, and the
     frozen seed does not store one. Derived from the audience rather than
     invented per quote, so a 61k account's top comment is not louder than a
     1.2M account's — and so the same quote always carries the same number. */
  function likesFor(c, i) {
    var base = Math.round((c.audience.total / 1000) * (i === 0 ? 1.7 : 0.7));
    return base >= 1000 ? (base / 1000).toFixed(1).replace(/\.0$/, '') + 'k likes' : base + ' likes';
  }

  function claims(c) {
    var a = V13[c.id] || {};
    var pt = points(c);
    var demandSub = sub((c.pillars.gap || {}).subsignals, 'demand');
    var comments = ev(c, 'comment').slice(0, 2);
    var said = saidLine(c);
    var posting = postingLine(c);

    /* Pressure shows two lines, always: their own words, then a visible break,
       then their behaviour, then the audience going unanswered. */
    var lines = [];
    if (said) lines.push(said);
    if (posting) lines.push(posting);
    if (a.replies) lines.push({ text: a.replies[0], when: a.replies[1], kind: 'unanswered', engine: 'rule' });
    /* A dead store link is not merely a symptom of strain — it is evidence they
       wanted to build a store and could not run one alone. That is a stated
       intention with a failure attached, and it is the single most qualifying
       fact in the model (§5.2). */
    var tried = sub((c.pillars.strain || {}).subsignals, 'abandon');
    if (tried && a.tried && /dead|dormant|closed|shut|abandon|stopped/i.test(a.tried[1] || '')) {
      lines.push({ text: a.tried[0] + ' — ' + a.tried[1] + '. They tried, it broke.', kind: 'broke', engine: 'rule' });
    }
    /* Two lines, always. When only one resolves, say so rather than padding
       with a level — "12% reply rate" is exactly the unreadable thing §5.2
       banned, and one behaviour change on its own genuinely is a holiday. */
    if (lines.length < 2) {
      lines.push({ text: 'No second change we could date and stand behind', kind: 'none',
        when: 'one change on its own is a holiday', engine: 'rule' });
    }

    var built = (a.built || derivedBuilt(c)).slice();
    var on = a.on || derivedOn(c);

    return {
      demand: {
        points: pt.demand,
        line: a.demand || (firstNum(demandSub && demandSub.value) + ' people asked where to buy'),
        count: firstNum(a.demand || (demandSub && demandSub.value)),
        window: 'in the last 90 days',
        quotes: comments,
        engine: 'llm+rule'
      },
      trajectory: [
        a.audience || ['Audience up ' + Math.round((c.audience.growth90d || 0) * 100) + '% this year', ''],
        a.reliability || ['Their posts land reliably', ''],
        a.citations || ['Citations not resolved at this depth', ''],
        a.tried || ['Nothing built, nothing attempted', 'clean slate'],
        [a.distinct || 'Distinctiveness not assessed at this depth', '']
      ],
      pressure: {
        points: pt.pressure, max: 40,
        lens: a.lens || 'Audience rising while the behaviour changes.',
        lines: lines.slice(0, 4)
      },
      missing: {
        points: pt.missing,
        built: built,
        on: on,
        /* §5.2: missing everything including the trivial things is a LABEL, not
           a number and not confidence. It says whether they have started. */
        onLabel: onLabel(on)
      },
      opportunity: pt.opportunity
    };
  }

  /* Three readings, not two. 'None of them earning' is false when the thing that
     is switched on IS the earning switch — v5 printed that label directly above
     'YouTube monetization — on', which contradicts itself on screen. */
  var EARNING = { 'YouTube monetization': 1, 'Sponsored posts': 1, 'Affiliate links': 1,
    'Platform subscriptions': 1, 'Shopping tags': 1 };
  function onLabel(on) {
    var any = false, earning = false;
    (on || []).forEach(function (r) {
      if (r.state !== P) return;
      any = true;
      if (EARNING[r.item]) earning = true;
    });
    if (!any) return 'nothing, anywhere';
    return earning ? 'some of it already earning' : 'a few things, none of them earning';
  }

  /* Fallbacks, for creators the v1.3 table does not carry. They never reach the
     drop at threshold 78 — but a brief or the passed list can still show them,
     and a missing record must not be a broken screen. */
  var WEIGHT = { 'YouTube channel': 1, Newsletter: 2, Store: 3, Storefront: 3, Representation: 4,
    Website: 5, Membership: 6, Podcast: 7 };
  function derivedBuilt(c) {
    return (c.inventory || []).map(function (r) {
      return { item: r.item === 'Storefront' ? 'Store' : r.item, state: r.state, places: r.surfacesChecked, note: null };
    }).sort(function (x, y) { return (WEIGHT[x.item] || 9) - (WEIGHT[y.item] || 9); });
  }
  function derivedOn(c) {
    var sp = sub((c.pillars.gap || {}).subsignals, 'sponsor');
    var none = !sp || /^0|none/i.test(String(sp.value));
    return [
      { item: 'Platform subscriptions', state: A, note: 'off' },
      { item: 'Shopping tags', state: A, note: 'off' },
      { item: 'Affiliate links', state: A, note: 'none in 90 days' },
      { item: 'Sponsored posts', state: none ? A : P, note: sp ? String(sp.value).toLowerCase() : 'not checked' }
    ];
  }

  /* The card's Missing line: the top absences, named, with the places count.
     Not a tally — §13.2 stopped summarising what the record already says.
     Lower-cased to read as a sentence, except where the name is a proper one. */
  var CARDWORD = { 'YouTube channel': 'YouTube', Newsletter: 'newsletter', Store: 'store',
    Representation: 'representation', Website: 'site', Membership: 'membership', Podcast: 'podcast' };
  function missingLine(c) {
    var m = claims(c).missing;
    var gone = [], places = 0;
    m.built.forEach(function (r) {
      if (r.state !== A) return;
      if (gone.length < 3) gone.push(CARDWORD[r.item] || r.item.toLowerCase());
      places = Math.max(places, r.places || 0);
    });
    if (!gone.length) return { text: 'Nothing verified absent', places: 0 };
    var names = gone.length === 1 ? gone[0]
      : gone.slice(0, -1).join(', ') + ' or ' + gone[gone.length - 1];
    return { text: 'No ' + names, places: places };
  }

  /* ================================================================= BRIEFS */
  /* Briefs are tabs and they are parallel. The house brief is first, nobody
     wrote it, nobody can edit it, everyone has it. There is no All view. */
  var briefs = [
    {
      id: 'b_house', house: true, name: 'Anyone worth a call',
      description: 'Big audience, no business, under pressure.',
      chips: ['Any category', 'Any platform', 'Any size'],
      bar: 'Clippable, repeatable, distinctive — the house standard',
      cost: null, cap: null, runs: null, paused: false
    },
    {
      id: 'b_cooks', name: 'Home cooks, no store',
      description: 'People cooking at home who have an audience asking to buy something and nowhere to buy it. Short form is fine. I care more about whether the demand is named than about how big they are.',
      chips: ['Food › Home cooking', 'US / CA', 'TikTok', 'Instagram', '50k–2M'],
      bar: 'Named demand in the comments, not audience size',
      cost: { start: 18, monthly: 12 }, cap: 100, runs: '3 months', paused: false,
      created: '2026-06-12', version: 2
    },
    {
      id: 'b_workshop', name: 'Restoration and workshop', paused: true,
      description: 'Trades filmed properly. Restoration, gilding, machining — people who actually do the work rather than review the tools. Small is fine if the trade press has noticed them.',
      chips: ['Craft › Restoration', 'Global EN', 'YouTube', 'TikTok', '100k+'],
      bar: 'Cited by the trade press',
      cost: { start: 9, monthly: 7 }, cap: 60, runs: '3 months',
      created: '2026-05-02', version: 1
    }
  ];

  /* Fit is the brief (§5.1, decision 71) — a per-brief pass/fail gate. The old
     global Format Fit survives only inside the house brief, which is where
     those four judgments still live. */
  function categoryOf(c) {
    var cat = null;
    W.mandates.forEach(function (m) { if (m.id === c.mandateId) cat = m.category; });
    return cat;
  }
  function fitFor(c, b) {
    if (!b || b.house) {
      return { pass: (c.pillars.fit || {}).verdict === 'pass',
        why: 'Clippable, repeatable and distinctive — the house standard.' };
    }
    if (b.id === 'b_cooks') {
      var food = categoryOf(c) === 'Food / Home';
      return { pass: food, why: food
        ? 'Home cooking, an audience naming what it wants, and nothing to sell it.'
        : 'Not home cooking — this is ' + String(categoryOf(c) || 'another category').toLowerCase() + '.' };
    }
    if (b.id === 'b_workshop') {
      var craft = categoryOf(c) === 'Craft / Trade';
      return { pass: craft, why: craft
        ? 'A working trade, filmed doing the work, cited by the trade press.'
        : 'Not a trade — this is ' + String(categoryOf(c) || 'another category').toLowerCase() + '.' };
    }
    /* A brief written into new territory has nobody in it yet — Scout goes
       looking tonight and reports tomorrow (§3, §6.7). v5 passed everyone
       through, so a brief that had just promised "nobody matches this yet"
       landed on the house brief's seven names one click later. */
    if (b.fresh) return { pass: false, why: 'Scout has not been looking for this one yet.' };
    return { pass: true, why: 'Matches the brief.' };
  }

  /* Trajectory is a gate: fail when the audience is down over 12 months AND
     still falling over 3 (§5.2, decision 104). Nothing in the cohort fails it —
     the shape is here because the gate has to be real to be shown. */
  function trajectoryPass(c) { return (c.audience.growth90d || 0) > -0.10; }

  /* ================================================================ THE DROP */
  var THRESHOLD = 78;
  var CAP = 10;
  var CONF_FLOOR = 0.70;

  function poolFor(date) {
    var d = W.drops[date] || {};
    var ids = [];
    Object.keys(d).forEach(function (k) {
      d[k].forEach(function (id) { if (ids.indexOf(id) === -1) ids.push(id); });
    });
    return ids.map(function (id) { return W.byId[id]; }).filter(Boolean);
  }

  /* §5.4, all five conditions. Anything the gates reject is counted, not shown —
     the drop states what it left out rather than pretending it saw nothing. */
  function dropFor(date, b, threshold) {
    var t = threshold == null ? THRESHOLD : threshold;
    var below = 0, wrongFit = 0, thin = 0;
    var list = poolFor(date).filter(function (c) {
      if (!fitFor(c, b).pass) { wrongFit++; return false; }
      if (!trajectoryPass(c)) return false;
      if (score13(c) < t) { below++; return false; }
      if (c.confidence < CONF_FLOOR) { thin++; return false; }
      return true;
    }).sort(function (x, y) { return score13(y) - score13(x); });
    var out = list.slice(0, CAP);
    out.left = { below: below, wrongFit: wrongFit, thin: thin, pool: poolFor(date).length };
    return out;
  }

  /* ============================================================ PASSED LIST */
  /* The reason and the trigger together are what make a Pass read as a decision
     rather than a deletion (§6.3.1). */
  var passReasons = [
    { code: 'monetized', label: 'Already monetized', suppression: 'Permanent unless what they have built changes' },
    { code: 'too_small', label: 'Too small', suppression: 'Returns at an audience threshold' },
    { code: 'wrong_category', label: 'Wrong category', suppression: 'Permanent — this brief only' },
    { code: 'unsafe', label: 'Brand-unsafe', suppression: 'Permanent, everywhere. Surfaces on the report.' },
    { code: 'not_distinctive', label: 'Not distinctive', suppression: 'Comes back in 180 days' },
    { code: 'no_pressure', label: 'No pressure / not ready', suppression: 'Comes back in 90 days, or sooner on a pressure trigger' },
    { code: 'no_longer_worth', label: 'No longer worth tracking', suppression: 'Stops the watch cost. Back in 180 days, or on any material change.' },
    { code: 'not_asked', label: 'Not what I asked for', suppression: 'Points at the brief, not the person. Three of these and Scout offers to re-read it.' },
    { code: 'declined', label: 'Declined', suppression: 'Set by the outcome, never chosen here.', outcomeOnly: true }
  ];
  function reasonFor(code) {
    var r = null;
    passReasons.forEach(function (x) { if (x.code === code) r = x; });
    return r;
  }

  /* Seeded so the list is populated on arrival. Trigger is the half that
     matters — "returns at 25k followers" is why this is not a deletion. */
  var passedSeed = [
    { id: 'x_teddy', at: '2026-07-30', code: 'monetized', by: 'Alex Grinshpoon',
      trigger: 'Returns if the newsletter, site or store goes away', brief: 'b_house' },
    { id: 'x_pim', at: '2026-06-30', code: 'too_small', by: 'Marisol Vega',
      trigger: 'Returns at 100k followers — currently 21.4k', brief: 'b_cooks' },
    { id: 'c_otto', at: '2026-07-22', code: 'not_distinctive', by: 'Alex Grinshpoon',
      trigger: 'Returns 18 January 2027', brief: 'b_house' },
    { id: 'c_hollis', at: '2026-07-19', code: 'no_pressure', by: 'Alex Grinshpoon',
      trigger: 'Returns 17 October 2026, or sooner on a pressure trigger', brief: 'b_cooks' },
    /* §6.3.1's stated need is 'I passed someone in March and now I cannot find
       them.' Without an aged row the screen cannot demonstrate the thing it
       exists for. */
    { id: 'c_bex', at: '2026-03-14', code: 'no_pressure', by: 'Theo Nakamura-Boyd',
      trigger: 'Returns 12 June 2026, or sooner on a pressure trigger', brief: 'b_house' },
    { id: 'c_wes', at: '2026-02-02', code: 'too_small', by: 'Marisol Vega',
      trigger: 'Returns at 500k followers — currently 382k', brief: 'b_cooks' },
    { id: 'c_mirela', at: '2026-07-11', code: 'not_asked', by: 'Alex Grinshpoon',
      trigger: 'Suppressed for Home cooks, no store only — 2 of 3 before Scout offers to re-read it', brief: 'b_cooks' }
  ];

  /* ================================================================ OUTCOMES */
  /* One field, four states, a date, and a reason on decline (§8). Each decline
     reason invalidates a different part of the model, which is the only reason
     the field is worth collecting. */
  var outcomes = [
    { code: 'contacted', label: 'Contacted', note: 'Package sent.' },
    { code: 'replied', label: 'Replied', note: 'They engaged.' },
    { code: 'signed', label: 'Signed', note: 'The only outcome that validates the model.' },
    { code: 'declined', label: 'Declined', note: 'With a reason — each teaches something different.' }
  ];
  var declineReasons = [
    { code: 'agency', label: 'Already with an agency', teaches: 'The Missing check failed — representation was not in the inventory.' },
    { code: 'not_commercial', label: "Doesn't want to commercialise it", teaches: 'A Fit failure. Real signal, and learnable.' },
    { code: 'timing', label: 'Bad timing, ask next year', teaches: 'Pressure was wrong — they are not feeling it yet.' },
    { code: 'silence', label: 'Never replied', teaches: 'Not a no. A different failure, and the most common one.' }
  ];
  /* Seeded so the control has a history behind it rather than an empty field. */
  var promotedSeed = { p_dorota: { state: 'contacted', at: '2026-07-23', by: 'Alex Grinshpoon' } };

  /* ================================================================= REWIND */
  /* What happened next, on one creator's report. Not a screen (§12, decision 88). */
  function outcomeFor(c) { return c.outcome || null; }
  var rewindCalls = {
    b_ines: { verb: 'promote', by: 'Alex Grinshpoon' },
    b_roman: { verb: 'promote', by: 'Alex Grinshpoon' },
    b_fen: { verb: 'watch', by: 'Marisol Vega' },
    b_marisol: { verb: 'promote', by: 'Theo Nakamura-Boyd' },
    b_clem: { verb: 'watch', by: 'Alex Grinshpoon' },
    b_tobi: { verb: 'pass', by: 'Alex Grinshpoon',
      note: 'Ranked last of six and stayed last of six. The ordering held, which is the only part of a look-back worth trusting.' }
  };

  /* ========================================================== CHECK RECORD */
  /* Formerly the Ledger. A read view over data that must exist anyway (§6.10).
     Stays collapsed — nobody opens receipts until they are challenged. */
  var record = {
    b_ines: [
      { place: 'Substack', found: 'No publication at this handle or name', url: 'substack.com/@inesmakesbread', at: '2024-01-12', state: A, engine: 'rule', depth: 'probe' },
      { place: 'beehiiv', found: 'No publication', url: 'beehiiv.com/search?q=ines+castellanos', at: '2024-01-12', state: A, engine: 'rule', depth: 'probe' },
      { place: 'ConvertKit / Kit', found: 'No landing page', url: 'kit.com/creators/search', at: '2024-01-12', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Link in bio', found: '1 link — Instagram profile only', url: 'linktr.ee/inescooks', at: '2024-01-13', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Owned domain', found: 'No registered domain matching name or handle', url: 'whois lookup, 4 variants', at: '2024-01-13', state: A, engine: 'rule', depth: 'probe' },
      { place: 'YouTube', found: 'No channel at this name or any near variant', url: 'youtube.com/results, 6 variants', at: '2024-01-13', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Shop tab', found: 'Not enabled on any connected platform', url: 'platform profile crawl', at: '2024-01-13', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Representation', found: 'Not listed by any agency roster we can read', url: 'roster crawl, 4 agencies', at: '2024-01-13', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Sponsorship disclosure', found: '0 paid posts in 180 days', url: 'caption scan, 412 posts', at: '2024-01-14', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Comments', found: '840 people asked where to buy, in the sampled window', url: 'comment sample, 6 posts', at: '2024-01-14', state: P, engine: 'llm', depth: 'study' },
      { place: 'Their own words', found: 'Two statements of being unable to keep up', url: 'caption scan', at: '2024-01-15', state: P, engine: 'llm', depth: 'study' },
      { place: 'Membership', found: 'Searched 3 platforms, could not resolve', url: 'patreon.com, ko-fi.com, memberful', at: '2024-01-12', state: N, engine: 'rule', depth: 'probe' }
    ],
    c_marguerite: [
      { place: 'Substack', found: 'No publication', url: 'substack.com/@marguerite.bakes', at: '2026-07-29', state: A, engine: 'rule', depth: 'probe' },
      { place: 'beehiiv', found: 'No publication', url: 'beehiiv.com/search', at: '2026-07-29', state: A, engine: 'rule', depth: 'probe' },
      { place: 'ConvertKit / Kit', found: 'No landing page', url: 'kit.com/creators/search', at: '2026-07-29', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Mailchimp landing', found: 'No page', url: 'mailchi.mp search', at: '2026-07-29', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Link in bio', found: '2 links, both platform mirrors', url: 'beacons.ai/margueritebakes', at: '2026-07-30', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Pinned post', found: 'No newsletter mentioned', url: 'tiktok.com/@marguerite.bakes', at: '2026-07-30', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Owned domain', found: 'No registered domain', url: 'whois lookup, 5 variants', at: '2026-07-29', state: A, engine: 'rule', depth: 'probe' },
      { place: 'YouTube', found: 'Channel found — 48.2k subscribers, monetization not enabled', url: 'youtube.com/@margueritebakes', at: '2026-07-29', state: P, engine: 'rule', depth: 'probe' },
      { place: 'Shopify', found: 'Subdomain returns 404, dead since May', url: 'margueritebakes.myshopify.com', at: '2026-07-30', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Etsy / TikTok Shop', found: 'No storefront', url: 'platform commerce crawl', at: '2026-07-30', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Representation', found: 'Not listed by any agency roster we can read', url: 'roster crawl, 4 agencies', at: '2026-07-30', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Sponsorship disclosure', found: '0 paid posts in 120 posts', url: 'caption scan, 289 posts', at: '2026-07-30', state: A, engine: 'rule', depth: 'probe' },
      { place: 'Comments', found: '1,940 people asked where to buy, in the sampled window', url: 'comment sample, 8 posts', at: '2026-07-29', state: P, engine: 'llm', depth: 'study' },
      { place: 'Their own words', found: 'Three statements of being unable to keep up', url: 'caption scan, 60 days', at: '2026-07-28', state: P, engine: 'llm', depth: 'study' },
      { place: 'Brief fit', found: 'Home cooks, no store — pass', url: 'sample analysis, 6 posts', at: '2026-07-28', state: P, engine: 'llm', depth: 'study' }
    ]
  };

  var DEPTH = {
    discovery: { label: 'Discovery', note: 'Goes and finds people who are not in the population yet. Per brief, never per creator.' },
    sweep: { label: 'Sweep', note: 'Rules only. Audience band, cadence, bio, link presence.' },
    probe: { label: 'Probe', note: 'What they have built and switched on. Where "not there" is earned.' },
    study: { label: 'Study', note: 'Language-model reading. Brief fit, their own words, what the audience asked for.' }
  };

  /* Derived when a creator has no authored record — every built/switched-on
     line is a check, so the receipts exist whether or not they were written. */
  function recordFor(c, asOf) {
    if (!c) return [];
    var rows = record[c.id];
    if (!rows) {
      var cl = claims(c);
      rows = cl.missing.built.concat(cl.missing.on).filter(function (r) {
        return r.state !== NA;
      }).map(function (r) {
        return { place: r.item, found: r.note || (r.state === P ? 'Found it' : r.state === A ? 'Looked in ' + (r.places || 3) + ' places, not there' : 'Could not resolve'),
          url: 'crawl/' + r.item.toLowerCase().replace(/[^a-z]+/g, '-'), at: c.asOf || TODAY,
          state: r.state, engine: 'rule', depth: 'probe' };
      });
    }
    return asOf ? rows.filter(function (r) { return r.at <= asOf; }) : rows;
  }
  /* "34 checks across 11 places" — more checks than places, because the same
     place gets looked at again every time the creator is re-scored. A place is
     a distinct surface in the record; a check is one lookup at one of them. */
  function checkSummary(c, asOf) {
    var rows = recordFor(c, asOf);
    if (!rows.length) return null;
    var cl = claims(c);
    var checks = 0, seen = {}, places = 0, first = null, last = null;
    cl.missing.built.forEach(function (r) { checks += r.places || 0; });
    cl.missing.on.forEach(function (r) { if (r.state !== NA) checks += 1; });
    rows.forEach(function (r) {
      if (r.depth === 'study') checks += 1;
      if (!seen[r.place]) { seen[r.place] = 1; places += 1; }
      if (!first || r.at < first) first = r.at;
      if (!last || r.at > last) last = r.at;
    });
    return { checks: Math.max(checks, rows.length), places: places, first: first, last: last };
  }

  /* ================================================================= EFFORT */
  /* Creator scope shows effort, never currency (§5.8). Pricing a human being on
     screen is both grim and the wrong optimisation target. */
  function effortFor(c, asOf) {
    var cl = claims(c);
    var places = 0;
    cl.missing.built.forEach(function (r) { places += r.places || 0; });
    var earliest = null;
    (c.inventory || []).forEach(function (r) { if (!earliest || r.observedAt < earliest) earliest = r.observedAt; });
    (c.evidence || []).forEach(function (e) { if (!earliest || e.observedAt < earliest) earliest = e.observedAt; });
    var start = c.watchedSince || earliest || asOf;
    return { places: places, since: start, passes: ['sweep', 'probe', 'study'] };
  }

  /* ================================================================== ADMIN */
  /* Four knobs, and no fifth (decision 70). The thesis is not editable and there
     is no prompt editor — what makes a creator interesting IS the product. */
  var admin = {
    budget: { ceiling: 2400, spent: 1615, currency: '$', period: 'July 2026', trend: '+8% on June' },
    threshold: THRESHOLD,
    platforms: [
      { name: 'TikTok', on: true }, { name: 'Instagram', on: true },
      { name: 'YouTube', on: true }, { name: 'Substack', on: true },
      { name: 'Reddit', on: false }, { name: 'X', on: false }
    ],
    members: members,
    ledger: [
      { depth: 'discovery', label: 'Discovery', creators: '—', note: '3 briefs', cost: 214 },
      { depth: 'sweep', label: 'Sweep', creators: '41,200', note: 'no names stored at this depth', cost: 96 },
      { depth: 'probe', label: 'Probe', creators: '1,840', note: 'where "not there" is earned', cost: 702 },
      { depth: 'study', label: 'Study', creators: '212', note: 'the expensive pass', cost: 603 }
    ]
  };

  /* ================================================================ RECEIPTS
     The `?` returns receipts, not a definition (§6.11, decision 77). A
     definition is identical on every screen, so after the first read every
     future `?` is a dead click. Receipts differ every time. */
  function receipts(c, key) {
    var cl = claims(c);
    var out = [];
    if (key === 'demand') {
      out.push(cl.demand.line + ', ' + cl.demand.window + '.');
      cl.missing.built.forEach(function (r) {
        if (r.state === A && out.length < 5) out.push('No ' + (CARDWORD[r.item] || r.item.toLowerCase()) + '.');
      });
      var pl = 0;
      cl.missing.built.forEach(function (r) { if (r.state === A) pl = Math.max(pl, r.places || 0); });
      if (pl) out.push('We looked in ' + pl + ' places.');
      return { title: 'Demand', lines: out };
    }
    if (key === 'missing') {
      cl.missing.built.forEach(function (r) {
        if (r.state === A) out.push(r.item + ' — not there, we looked in ' + (r.places || 3) + ' places.');
        else if (r.state === P) out.push(r.item + ' — found it.');
        else if (r.state === N) out.push(r.item + ' — could not resolve.');
      });
      out.push('Switched on: ' + cl.missing.onLabel + '.');
      return { title: 'Missing', lines: out };
    }
    if (key === 'pressure') {
      cl.pressure.lines.forEach(function (l) {
        out.push(l.kind === 'said'
          ? '“' + l.text + '” — their words, ' + (window.UI ? window.UI.shortDate(l.at) : l.at) + '.'
          : l.text + '.');
      });
      out.push(cl.pressure.lens);
      return { title: 'Pressure', lines: out };
    }
    if (key === 'fit') {
      return { title: 'Fit', lines: out };
    }
    if (key === 'score') {
      out.push('Demand — ' + cl.demand.points + ' points.');
      out.push('Missing — ' + cl.missing.points + ' points.');
      out.push('Pressure — ' + cl.pressure.points + ' of 40.');
      out.push('Fit and Trajectory are gates. They pass or fail and add nothing.');
      out.push('The bar today is ' + THRESHOLD + '.');
      return { title: 'The score', lines: out };
    }
    if (key === 'trajectory') {
      cl.trajectory.forEach(function (t) { out.push(t[0] + (t[1] ? ' — ' + t[1] : '') + '.'); });
      return { title: 'Why they are on this list', lines: out };
    }
    if (key === 'confidence') {
      var rows = recordFor(c);
      var res = 0;
      rows.forEach(function (r) { if (r.state !== N) res++; });
      out.push(res + ' of ' + rows.length + ' checks resolved.');
      out.push((rows.length - res) + ' could not be resolved, which is what the number is short by.');
      out.push('Nothing unresolved scores as a gap.');
      return { title: 'Confidence', lines: out };
    }
    return { title: '', lines: out };
  }

  /* ------------------------------------------------------------- exports */
  window.SCOUT = {
    TODAY: TODAY, REWIND: REWIND, THRESHOLD: THRESHOLD, CAP: CAP, CONF_FLOOR: CONF_FLOOR,
    STATES: { P: P, A: A, N: N, NA: NA },
    me: me, members: members, briefs: briefs, plain: plain,
    V13: V13, score13: score13, points: points, claims: claims, missingLine: missingLine,
    fitFor: fitFor, trajectoryPass: trajectoryPass, categoryOf: categoryOf,
    poolFor: poolFor, dropFor: dropFor,
    passReasons: passReasons, reasonFor: reasonFor, passedSeed: passedSeed,
    outcomes: outcomes, declineReasons: declineReasons, promotedSeed: promotedSeed,
    rewindCalls: rewindCalls, outcomeFor: outcomeFor,
    record: record, recordFor: recordFor, checkSummary: checkSummary, likesFor: likesFor,
    DEPTH: DEPTH, effortFor: effortFor, admin: admin, receipts: receipts
  };
})();
