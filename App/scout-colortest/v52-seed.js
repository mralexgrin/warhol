/* ==========================================================================
   SCOUT v5 — the v1.3 layer over the frozen cohort.
   Classic script. Sets window.SCOUT. Runs from file://.

   warhol-seed.js is byte-identical to Archive/prototypes/seed-fictional/warhol-seed.js and is
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
  /* Task 6, 6 Aug 2026 — read the cohort's own dates, fall back to the frozen
     ones. The seed this layer sits on used to be the only seed there would
     ever be, so its two dates were constants here. `warhol export` now writes
     a cohort of real creators observed on a real date, and a layer that goes
     on asking for 31 July 2026 finds an empty drop and reports "0 people were
     looked at" about twenty people it is holding.

     The frozen cohort carries meta.today === '2026-07-31' and
     meta.backtestDate === '2024-01-15', so these are byte-for-byte the old
     values for it and nothing about the fictional demo moves. */
  var TODAY = (W.meta && W.meta.today) || '2026-07-31';
  var REWIND = (W.meta && W.meta.backtestDate) || '2024-01-15';

  /* ---------------------------------------------------------------- people */
  /* One user type (§2, decision 89). Admin is a permission on a member, not a
     role — so nobody here is a noun. */
  var me = {
    id: 's_alex', name: 'Alex Grinshpoon', initials: 'AG',
    email: 'alex.grinshpoon@paradium.ai', admin: true
  };

  /* ONE SEAT, and the seed says so in one place.
     v5.4 shipped four members against a picker that let you become any of them,
     which is a workspace with four people in it — and every decision in the
     Passed list was attributed to one of the other three, so the product was
     already describing a team that does not exist yet. Scout has one account
     until somebody is invited into it (§8). Everything historical is therefore
     Alex's, because Alex is the only person who has ever been at the desk.

     The password is real in the sense that the gate checks it. It is not a
     secret: it is generated once, printed beside the field, and the point of it
     is that signing in is an IDENTIFIED act rather than a page transition —
     which is what §8 needs, since a Pass is a training label and a state is the
     past tense of a verb some particular human performed. */
  var account = {
    email: 'alex.grinshpoon@paradium.ai',
    password: 'k4Qm-7vTz-9Rha'
  };
  var members = [
    { name: 'Alex Grinshpoon', initials: 'AG', email: 'alex.grinshpoon@paradium.ai',
      admin: true, briefs: 2, lastSeen: '2026-07-31' }
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
        { item: 'Membership', state: N, places: 2, note: 'a closed community was mentioned once and we could not get into it' },
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
        { item: 'Store', state: N, places: 2, note: 'a link we could not follow' },
        { item: 'Representation', state: N, places: 2 },
        { item: 'Website', state: A, places: 3 },
        { item: 'Membership', state: N, places: 1 },
        { item: 'Podcast', state: NA, note: 'they do not talk to camera' }
      ],
      on: [
        { item: 'YouTube monetization', state: NA, note: 'no channel to switch on' },
        { item: 'Platform subscriptions', state: A, note: 'off' },
        { item: 'Shopping tags', state: N, note: 'could not tell' },
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
    /* v5.1's sweep matched the two-word forms and missed the bare pillar name,
       so a resurfaced card read "Strain trigger fired" and its trigger read
       "Self-reported strain 0 → 5 markers". Same defect as the surfaces leak,
       one rename along: match the word itself, after the compounds above have
       had their turn. Case is preserved so a sentence-initial use stays one. */
    [/\bStrain\b/g, 'Pressure'],
    [/\bstrain\b/g, 'pressure'],
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
    /* A per-rank factor so four stacked quotes carry four distinct counts
       instead of the top one and three identical also-rans. Deterministic:
       the same quote always lands on the same rank and the same number. */
    var factor = [1.7, 1.05, 0.72, 0.5][i] || 0.42;
    var base = Math.round((c.audience.total / 1000) * factor);
    return base >= 1000 ? (base / 1000).toFixed(1).replace(/\.0$/, '') + 'k likes' : base + ' likes';
  }

  function claims(c) {
    var a = V13[c.id] || {};
    var pt = points(c);
    var demandSub = sub((c.pillars.gap || {}).subsignals, 'demand');
    var comments = ev(c, 'comment').slice(0, 4);
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

    /* v5.3 — NOT FOUND IS NOT ZERO, AND THIS LINE WAS TURNING ONE INTO THE
       OTHER. firstNum() over the engine's "No purchase intent we could read"
       returns 0, and the card printed "0 people asked where to buy" — a
       measured finding about the creator, invented out of a sentence that says
       we could not read anything. §11.3 is explicit that unreadable scores
       neutral and is not a zero, and the engine's own detail on this subsignal
       says so in those words. On a screen whose whole claim is that every
       number traces to something we opened, a fabricated 0 is the worst
       available defect: it reads as a fact and it is not one.

       So: only build the counted sentence when there is genuinely a count.
       Otherwise use the engine's own words. */
    var demandCount = firstNum(a.demand || (demandSub && demandSub.value));
    /* The seeded cohort's demand counts were all in the hundreds, so "N people"
       was always right and the singular never came up. Real creators produce
       counts of 1, and "1 people asked where to buy" is the lead card of a live
       brief. */
    var demandLine = a.demand
      || (demandCount ? demandCount + (demandCount === 1 ? ' person' : ' people') + ' asked where to buy'
        : (demandSub && demandSub.value) || 'Nothing we could read asked to buy');

    return {
      demand: {
        points: pt.demand,
        line: demandLine,
        count: demandCount,
        unread: !a.demand && !demandCount,
        window: 'in the last 90 days',
        quotes: comments,
        engine: 'llm+rule'
      },
      /* v5.4 — THREE CONTRADICTIONS LIVED IN THIS ARRAY, all from the same
         habit: a fallback that asserts something when the real answer is that
         nothing was read.

         1. `(c.audience.growth90d || 0)` printed "Audience up 0% this year" for
            every creator with NO reading — the exact `|| 0` defect trajectoryOf()
            was written to kill, still alive one function away, and printed under
            a gate captioned "Rising or steady, never fading" and stamped PASS.
            A missing reading is not zero growth. It now defers to
            trajectoryOf(), which is the one place allowed to have an opinion
            about the trend.
         2. "Their posts land reliably" was asserted about everybody. Cadence is
            not derivable from a profile fetch — TikTok and YouTube hydrate video
            grids by XHR — so this was a claim about data the engine had never
            read, in a product whose rule is quote and count, never diagnose.
         3. "Nothing built, nothing attempted — clean slate" printed on the same
            screen as "Found it: YouTube channel / Website / Podcast", four
            inches apart. It now reads the inventory it is describing. */
      trajectory: (function () {
        var traj = trajectoryOf(c);
        var rows = [];
        rows.push(a.audience || (traj.verdict === 'not_established'
          ? ['Audience trend — could not tell', 'one look so far — a trend needs two, 90 days apart']
          : ['Audience ' + (c.audience.growth90d >= 0 ? 'up ' : 'down ') +
             Math.abs(Math.round(c.audience.growth90d * 100)) + '% this year', '']));
        if (a.reliability) rows.push(a.reliability);
        else rows.push(['Posting rhythm — could not tell', 'the video grid loads separately and we do not read it']);
        rows.push(a.citations || ['Citations — could not tell at this depth', '']);
        if (a.tried) rows.push(a.tried);
        else {
          var found = (built || []).filter(function (r) { return r.state === P; })
            .map(function (r) { return String(r.item).toLowerCase(); });
          rows.push(found.length
            ? ['Already built ' + found.slice(0, 3).join(', '), 'so not a clean slate']
            : ['Nothing built, nothing attempted', 'clean slate']);
        }
        rows.push([a.distinct || 'Distinctiveness — could not tell at this depth', '']);
        return rows;
      })(),
      pressure: {
        points: pt.pressure, max: 40,
        /* v5.4 — the fourth contradiction, and the one the other three were
           hiding. This fallback asserted "Audience rising while the behaviour
           changes" on every real record, four inches above "Audience trend not
           established" — Pressure's lede claiming the exact reading Trajectory
           had just said nobody has taken. It is also a diagnosis, which decision
           99 does not allow: Scout may quote and count. The honest lede states
           what Pressure is actually built from on a first look, and says the
           interpretation is missing rather than inventing one. */
        lens: a.lens || (trajectoryOf(c).verdict === 'not_established'
          ? 'A change in how they are working. What it means needs a second look.'
          : 'Audience rising while the behaviour changes.'),
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
    var any = false, earning = false, known = false;
    (on || []).forEach(function (r) {
      if (r.state !== N && r.state !== NA) known = true;
      if (r.state !== P) return;
      any = true;
      if (EARNING[r.item]) earning = true;
    });
    /* Task 6 — a fourth reading, and the honest one. 'Nothing, anywhere' is a
       claim that every switch is off, and it used to be printed whenever none
       was found ON. Against real creators every one of these resolves
       `not_found` — shopping tags and platform subscriptions need partner APIs
       nobody has — so the heading asserted a clean sweep directly above four
       lines each saying we could not tell. Not knowing is its own answer. */
    if (!known) return "we couldn't tell what they've switched on";
    if (!any) return 'nothing, anywhere';
    return earning ? 'some of it already earning' : 'a few things, none of them earning';
  }

  /* Fallbacks, for creators the v1.3 table does not carry. They never reach the
     drop at threshold 78 — but a brief or the passed list can still show them,
     and a missing record must not be a broken screen. */
  var WEIGHT = { 'YouTube channel': 1, Newsletter: 2, Store: 3, Storefront: 3, Representation: 4,
    Website: 5, Membership: 6, Podcast: 7 };
  /* Task 6, 6 Aug 2026 — the switched-on half comes from the record when the
     record has one.

     THIS WAS THE SERIOUS ONE. derivedOn used to return these four lines as
     constants: platform subscriptions "off", shopping tags "off", affiliate
     links "none in 90 days" — all four stated as verified_absent, all four
     authored rather than checked. Against a cohort of invented people that was
     just seed data written in the wrong place. Against real creators it is the
     screen asserting an absence the engine specifically refuses to assert:
     shopping tags and platform subscriptions are only visible through partner
     APIs nobody has, and sponsorship is sample-based, so the engine resolves
     all four `not_found` and says why. Rendering them as verified gaps about a
     real company is the §5.3 failure the whole engine exists to prevent,
     committed one layer above the engine.

     So: if the cohort's inventory carries these items, they are read. If it
     does not — the frozen cohort does not — the old constants stand and the
     fictional demo is unchanged. */
  var SWITCHED_ON = ['Platform subscriptions', 'Shopping tags', 'Affiliate links', 'Sponsored posts'];
  function isOn(item) { return SWITCHED_ON.indexOf(item) !== -1; }

  function derivedBuilt(c) {
    return (c.inventory || []).filter(function (r) { return !isOn(r.item); }).map(function (r) {
      return { item: r.item === 'Storefront' ? 'Store' : r.item, state: r.state, places: r.surfacesChecked, note: null };
    }).sort(function (x, y) { return (WEIGHT[x.item] || 9) - (WEIGHT[y.item] || 9); });
  }
  function derivedOn(c) {
    var fromRecord = (c.inventory || []).filter(function (r) { return isOn(r.item); });
    if (fromRecord.length) {
      return SWITCHED_ON.map(function (name) {
        var r = null;
        fromRecord.forEach(function (x) { if (x.item === name) r = x; });
        // Never seen at all is not the same as seen and found missing.
        if (!r) return { item: name, state: N, note: 'not checked' };
        return { item: name, state: r.state, note: r.note || null };
      });
    }
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
      places = Math.max(places, placesFor(r.item).length);
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
      /* THESE WORDS WERE THE BUG (PRD §5.4c). "Big audience, no business, under
         pressure" is a plain-English summary of the SCORE — Missing is 35 points
         of no business, Pressure is 40 of under pressure — and handing it to the
         Fit judge as a brief made the gate re-decide by eye what the score had
         already counted. The two highest scorers on the board both failed it.
         The house brief tests FORMAT, which is the one thing the score cannot
         see. Distinctiveness is deliberately absent: decision 93 moved it to
         Trajectory, and putting it back repeats the bug one signal over. */
      description: 'They make something clippable, in a format they can repeat, in a category people actually want.',
      /* v5.4 — TWO FIELDS, BECAUSE THE STRING HAD TWO JOBS AND THEY PULL APART.
         `description` is the text handed to judgeFit. `screenText` is what a
         person reads. They were one string, which is why the tab explained a
         list of eight with the gate half of its own definition and said nothing
         about why any of them were there — the score half was invisible.

         Keeping them separate is also the only durable fix for §5.4c. The bug
         was the SCORE's words reaching the judge; with one field, the moment
         anyone improves the on-screen sentence by mentioning audience or
         pressure, the judge starts failing people for facts Missing and Pressure
         already counted, and the two highest scorers fall off the board again.
         Now that sentence cannot reach the judge at all.

         Order is deliberate, and it is what the data supports rather than what
         the pitch would prefer. Across today's eight: Missing is true of 8,
         Fit of 8, Pressure of 4, Demand of 3. So the first sentence is the
         qualifier — every name on the board clears it — and demand and pressure
         are named as what RANKS them, which is exactly the job they do. Leading
         on "their audience is asking to buy" would have been contradicted by
         five of the eight cards underneath it. */
      screenText: 'An audience already there, nothing built to sell it, and work we could build on. ' +
        'The ones who move up the list are where we can hear the audience asking, or see something ' +
        'change in how they work.',
      chips: ['Any category', 'Any platform', 'Any size'],
      bar: 'Clippable, repeatable, in a category with demand',
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

  /* Task 6 — any brief the cohort brought with it becomes a tab of its own.
     A generated cohort carries the mandate the engine actually ran, and
     without this the real creators sit under the house brief while the tab
     row still advertises two fictional briefs nobody ran. The frozen cohort's
     mandates are already represented by the briefs above, so this runs only
     for a GENERATED cohort and the fictional demo keeps exactly three tabs.
     Keyed on how the file was made rather than on a list of mandate ids to
     skip, because a list drifts the first time somebody adds a mandate. */
  var generated = !!(W.meta && W.meta.generatedBy);

  /* v5.3 — A MERGED SEED CARRIES SEVERAL BRIEFS, and the two rules below were
     both written when it could only carry one.

     1. The absorb-into-the-house-brief rule exists because `warhol export
        --brief X` exports exactly one brief, so a tab for it would show the
        same creators twice. `merge-seeds.js` broke that premise: with three
        mandates, absorbing the first silently retitles NFL as "Anyone worth a
        call" and the brief disappears from the tab row. So absorb ONLY when
        the cohort really is one brief.

     2. The fictional briefs are demo furniture from the frozen cohort. Next to
        real creators they are the thing that gets forwarded and believed, so a
        generated cohort drops them rather than advertising briefs nobody ran. */
  /* 6 Aug, reconciling two sessions. `single` was the right fix for the wrong
     question. Counting mandates answers "is this a merged seed?", but what the
     absorb rule actually needs to know is "WHICH of these mandates is the house
     brief?" — and with a merged seed carrying a general drop plus four category
     briefs, the count says "not single" and the general drop ends up in a tab of
     its own beside an empty "Anyone worth a call".

     So it keys on identity: the house mandate is the one the engine ran against
     the house brief's own words, which is a fact about the text rather than
     about ordering or arity. `single` stays as the fallback for a seed whose
     one brief is not the house brief — a lone NFL export should still absorb
     rather than render an empty house tab beside itself. */
  /* Case-insensitive, because the two strings differ by exactly one letter and
     it is the first one: the brief record reads "They make something clippable"
     and the engine's mandate reads "Anyone worth a call — they make something
     clippable". A sentence that starts a description is capitalised; the same
     sentence after a dash is not. Matching exactly failed silently and put the
     general drop in a tab beside an empty house brief. */
  var HOUSE_TEXT = String(briefs[0].description || '').toLowerCase();
  var houseMandate = (W.mandates || []).filter(function (m) {
    return m.description && String(m.description).toLowerCase().indexOf(HOUSE_TEXT) !== -1;
  })[0] || null;
  var single = generated && (W.mandates || []).length === 1;
  if (generated) briefs = briefs.filter(function (b) { return b.house; });

  /* v5.6 — A MANDATE SEEDED FOR THE LIVE SCAN, WITH NO TAB OF ITS OWN.

     `car-detailing-diy-repair-3` was run through the real engine on 7 Aug
     against the exact words the demo types into New brief, so that when that
     brief is written on stage the names the scan pulls are the engine's genuine
     answer to those words rather than the nearest thing in an unrelated cohort.
     Its candidates have to be in the pool for that to work; its tab must not
     be, for two reasons.

     ONE — a tab called "Car detailing and DIY repair (live)" sitting next to
     "Car detailing and DIY repair" is a question nobody in the room can answer,
     and the honest answer ("the same brief, run twice, hours apart") is not
     worth the sentence it costs.

     TWO — `obsessedgarage` clears at 28 in the newer run on "no store", and
     obsessedgarage.com is a Shopify storefront. It is the same off-domain store
     miss as chefjeanpierre (lib/site.js only reads links on the creator's own
     registrable domain, deliberately — the MKBHD/dbrand rule). Nothing on the
     scan screen makes a claim about a store, so the beat is unaffected; a drop
     tab would put that claim on a card. Archiving is what keeps it off screen
     without deleting a real observation from the log.

     Delete this map the day either brief is meant to be browsable. */
  var STAGED = {
    m_car_detailing_diy_repair_3: true,
    /* v6.2 — the second brief written on stage, and staged for the same reason
       as the first: its 22 people have to be in the pool so the words typed into
       New brief pull real ones, and it must not have a tab, because a tab called
       "College Football" sitting in the row before anybody has written the brief
       gives away the beat. */
    m_southern_college_football_insiders: true
  };

  (generated ? (W.mandates || []) : []).forEach(function (m, i) {
    /* THE FIRST generated mandate IS the house brief, and giving it a tab of
       its own showed the same four creators twice under two different names.
       `warhol export --brief X` exports exactly one brief and that brief is the
       drop being demoed — so the house brief adopts its words and its verdicts
       instead of sitting beside it advertising the same people. Anything beyond
       the first is a genuinely separate brief and still gets a tab.

       The house brief's NAME does not change: §6.1 says nobody wrote it and
       nobody can edit it, so it stays "Anyone worth a call" whatever slug the
       CLI happened to generate. What it adopts is the text it was judged on. */
    if (houseMandate ? m.id === houseMandate.id : (single && i === 0)) {
      briefs[0].fromCohort = true;
      briefs[0].cohortId = m.id;
      /* Adopts the words it was JUDGED on — which is `description`, the judge's
         field. `screenText` is deliberately not overwritten: the engine has no
         opinion about how the brief is explained to a person, and letting a
         mandate slug's prose replace it is how the tab came to carry the gate
         sentence in the first place. */
      if (m.description) briefs[0].description = m.description;
      return;
    }
    briefs.push({
      /* `name` is what the tab prints, and it was printing m.name — which the
         engine sets to the SLUG (export-seed.js). That is how the tab row came
         to read "car-detailing-diy-repair". `title` is authored by
         merge-seeds.js for exactly this; m.name stays as the fallback so an
         un-merged single export still renders something. */
      id: m.id, fromCohort: true, name: m.title || m.name, slug: m.slug || m.name,
      description: m.description || m.title || m.name,
      chips: [m.category, m.geo, m.audienceBand].filter(Boolean),
      bar: 'Judged by the engine against this brief',
      cost: null, cap: null, runs: null, paused: false,
      created: (W.meta && W.meta.today) || null, version: 1,
      /* v5.6 — SEEDED FOR THE SCAN, NOT FOR A TAB. See STAGED below. */
      archived: STAGED[m.id] === true
    });
  });

  /* Fit is the brief (§5.1, decision 71) — a per-brief pass/fail gate. The old
     global Format Fit survives only inside the house brief, which is where
     those four judgments still live. */
  function categoryOf(c) {
    var cat = null;
    W.mandates.forEach(function (m) { if (m.id === c.mandateId) cat = m.category; });
    return cat;
  }
  /* ===================================================== v5.4 — WHOSE VERDICT
     A merged seed holds one record per (creator, brief), and merge-seeds.js
     copies the engine's Fit block onto every copy. So a creator found under
     "College football" arrives in the house cohort carrying the college
     football verdict, byte-identical, and fitFor() then printed it under the
     house brief's name: "This brief asks for Anyone worth a call. Nothing
     visible here shows college football content." One sentence contradicting
     itself, on the board whose entire job is to be checkable.

     MEASURED, and it is not a copy problem: all 58 house records carry a
     borrowed verdict and NONE was judged against the house brief's own words.
     The house drop is being gated by four other briefs' Fit tests — which is
     why the highest scorer in the seed, @itshunterfriesen at 39, is missing
     from "Anyone worth a call" for not doing college football.

     Suppressing the sentence would have hidden that. Attribution states it:
     the verdict stands, and the screen says whose it is. The real fix is to
     re-run Fit for the 58 against the house brief text — an engine job that
     needs a key, not a prototype job.

     Detection is exact rather than heuristic. Candidate ids are brief-scoped
     (c_<mandate>__<creator>), so the same creator under another brief is a
     lookup, and a byte-identical fit block means the verdict was copied rather
     than earned here. */
  var _fitOwner = null;
  function fitOwner(c) {
    if (!_fitOwner) {
      _fitOwner = {};
      var bySlug = {};
      W.candidates.forEach(function (x) {
        var s = String(x.id).split('__')[1] || x.id;
        (bySlug[s] = bySlug[s] || []).push(x);
      });
      W.candidates.forEach(function (x) {
        var s = String(x.id).split('__')[1] || x.id;
        var mine = JSON.stringify(x.pillars.fit);
        var twin = null;
        (bySlug[s] || []).forEach(function (y) {
          if (y.mandateId !== x.mandateId && !twin && JSON.stringify(y.pillars.fit) === mine) twin = y;
        });
        _fitOwner[x.id] = twin ? twin.mandateId : null;
      });
    }
    return _fitOwner[c.id] || null;
  }
  /* The mandate's own `name` is the export slug ("college-football-make-own").
     The brief carrying that cohort holds the display name, so read it there —
     printing a slug at a member is the bug export-seed.js already had once. */
  function briefNameFor(mandateId) {
    var out = null;
    briefs.forEach(function (b) {
      if (!b.house && (b.cohortId || b.id) === mandateId && !out) out = b.name;
    });
    return out;
  }

  function fitFor(c, b) {
    if (!b || b.house) {
      /* When the house brief has adopted a generated cohort, the engine already
         judged this creator against those exact words and wrote a sentence
         saying why. Use it. The old hardcoded line said "clippable, repeatable
         and DISTINCTIVE" — one word describing a signal that decision 93 moved
         to Trajectory, asserted identically about every creator on the list. */
      var hv = (c.pillars.fit || {}).verdict;
      var hs = (c.pillars.fit || {}).subsignals;
      var lender = briefNameFor(fitOwner(c));
      if (lender) {
        return { pass: hv === 'pass', borrowedFrom: lender,
          why: 'Judged against ' + lender + ', the brief this name was found under. ' +
            'Not re-judged for the house brief.' };
      }
      return { pass: hv === 'pass', borrowedFrom: null,
        why: (b && b.fromCohort && hs && hs[0] && hs[0].detail)
          ? hs[0].detail
          : 'Clippable, repeatable, in a category with demand — the house standard.' };
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
    /* Task 6 — a brief the engine ran. Fit was judged by the engine against
       this brief's own text and the verdict travelled with the record, so the
       gate reads it rather than re-deriving one from a category. `not_judged`
       is not a pass: it means no model ran, and §5.4 requires a pass. */
    if (b.fromCohort) {
      var v = (c.pillars.fit || {}).verdict;
      return { pass: v === 'pass', why: (c.pillars.fit || {}).subsignals
        && c.pillars.fit.subsignals[0] ? c.pillars.fit.subsignals[0].detail : 'No fit verdict on the record.' };
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
  /* DECISION 113. Three states, not two, because there are three situations and
     collapsing them loses the one that matters.

       falling        — down over the year and still going. BLOCKS.
       rising/steady  — a reading we have, and it is fine. Passes.
       no reading yet — we have seen them ONCE. A trend needs two looks 90 days
                        apart, and there is no honest verdict available.

     This used to be `(c.audience.growth90d || 0) > -0.10`, which turned a
     missing reading into the number zero and then let zero pass. It arrived at
     the right outcome by the wrong route, and silently: every real creator has
     been seen once, so every card was claiming "rising or steady" on the
     strength of a reading nobody had taken.

     `blocks` is what the drop filters on and it is deliberately false for
     no-reading — a gate cannot be failed on a fact that does not exist. But
     `stated` is what the surface says, so the card tells the truth about which
     of the three it is instead of quietly reporting the best case. Backdating
     an observation to make the gate computable was explicitly rejected: that is
     fabricated evidence, and decision 99 exists to prevent it. */
  function trajectoryOf(c) {
    var g = c && c.audience ? c.audience.growth90d : null;
    if (g == null) {
      return { verdict: 'not_established', blocks: false,
        stated: 'First look — no trend yet. We check back in 90 days.' };
    }
    if (g > -0.10) return { verdict: 'pass', blocks: false, stated: 'Rising or steady.' };
    return { verdict: 'fail', blocks: true,
      stated: 'The audience is falling. The model rewards decline without this gate, so a fading creator never enters a drop however wide the gap looks.' };
  }
  function trajectoryPass(c) { return !trajectoryOf(c).blocks; }

  /* ================================================================ THE DROP */
  /* THESE COME FROM THE SEED, and the day they stopped doing so cost the demo
     its front door. `warhol export` writes the engine's live threshold into
     meta.scoreThreshold; the prototype held its own copy at 78, and when the
     engine re-read the bar against real creators and moved it to 25 (§5.4b),
     the number here did not move with it. The result was not an error anyone
     could see — the drop rendered perfectly, said "20 people were looked at,
     6 scored under 78", and showed nothing. **A correct empty state is the one
     bug you cannot spot by looking**, because §6.1 designs an empty drop to
     look deliberate.

     So the number is read from the seed and the local value is only a fallback
     for a seed old enough not to carry one. Two copies of a calibrated constant
     is the defect; this makes the seed the single source. */
  var THRESHOLD = (W.meta && W.meta.scoreThreshold) || 78;
  var CAP = (W.meta && W.meta.dropCap) || 10;
  var CONF_FLOOR = (W.meta && W.meta.coverageGate) || 0.70;

  /* The same argument, one level down. `meta.weights` is the engine's own
     weights.json travelling with the data it produced, and the help screen
     (§6.13) is built entirely out of it — pillar maxima, the absence table, the
     four Pressure signals and which of them a first look can reach.

     NO FALLBACK TABLE, deliberately, and this is the one place in this file
     that refuses to guess. THRESHOLD above can fall back to 78 because a wrong
     bar shows up immediately as a drop of the wrong size. A fallback weights
     table would be invisible: the help screen would render perfectly and teach
     numbers the engine had stopped using, to the one reader who came to the
     page precisely because they did not already know them. So an older seed
     gets no weights, and the screen says it cannot show them rather than
     showing the wrong ones. */
  var WEIGHTS = (W.meta && W.meta.weights) || null;

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
  /* v5.3 — WHICH CREATORS A BRIEF IS EVEN ALLOWED TO CONSIDER.
     poolFor() unions every mandate's candidates for the date, which was the
     same thing as "this brief's candidates" for as long as a seed held one
     brief. A merged seed holds three, and without this every tab showed every
     other tab's passers: all four read "3".

     Restricting here rather than in fitFor() is deliberate. dropFor() counts
     what it rejected and shows those counts as "what stopped them" — route a
     non-candidate through fit and it is counted as a fit failure, so the NFL
     tab would report 38 people it never considered. Not being in this brief's
     population is not a rejection; it is not being in the room. */
  function poolForBrief(date, b) {
    var all = poolFor(date);
    if (!b || !b.fromCohort) return all;
    var mid = b.cohortId || b.id;
    return all.filter(function (c) { return c.mandateId === mid; });
  }

  function dropFor(date, b, threshold) {
    var t = threshold == null ? THRESHOLD : threshold;
    /* Trajectory used to fall out of this filter without incrementing anything,
       so a creator rejected for fading was the one rejection the product could
       not account for. Counted now, like the other four. */
    /* `unjudged` split from `wrongFit` on 12 Aug 2026. Both stop a creator at
       the same gate and they are not the same fact: one is a verdict that this
       is not who the desk asked for, the other is that no verdict exists
       because the model never ran. The engine has always distinguished them —
       it writes "no model, no verdict" — and this screen was reporting both as
       "did not match the brief", which says something untrue about a creator
       nobody judged. One name per state; see CLAUDE.md. */
    var below = 0, wrongFit = 0, thin = 0, fading = 0, unjudged = 0;
    var pool = poolForBrief(date, b);
    var list = pool.filter(function (c) {
      if (!fitFor(c, b).pass) {
        if (((c.pillars.fit || {}).verdict) === 'not_judged') unjudged++; else wrongFit++;
        return false;
      }
      if (!trajectoryPass(c)) { fading++; return false; }
      if (score13(c) < t) { below++; return false; }
      if (c.confidence < CONF_FLOOR) { thin++; return false; }
      return true;
    }).sort(function (x, y) { return score13(y) - score13(x); });
    var out = list.slice(0, CAP);
    out.left = { below: below, wrongFit: wrongFit, unjudged: unjudged, thin: thin, fading: fading, pool: pool.length };
    return out;
  }

  /* v5.3 — WHO ELSE WAS LOOKED AT, AND WHAT STOPPED THEM.
     dropFor() already computes this and throws the people away, keeping only
     four counts. "Scout also looked at 15 who did not match this brief" is an
     assertion; the same fifteen with their scores and the sentence that stopped
     each one is a receipt, and a receipt is the entire product.

     Deliberately NOT sorted by who came closest. Sorted by score, descending —
     the same order as the drop — because the interesting row is usually the
     high scorer that a gate rejected, and burying it under near-misses hides
     the one case worth arguing with.

     Every creator carries EVERY gate they failed, not the first. A name that
     failed on both score and fit has two different problems and showing one is
     how "why isn't this person in my drop" gets a misleading answer. */
  function rejectedFor(date, b, threshold) {
    var t = threshold == null ? THRESHOLD : threshold;
    var cleared = {};
    dropFor(date, b, t).forEach(function (c) { cleared[c.id] = true; });

    return poolForBrief(date, b)
      .filter(function (c) { return !cleared[c.id]; })
      .map(function (c) {
        /* gatesFor returns {all, failed, enters} — it has already done the
           filtering, and it is the one place that decides what "failed" means. */
        var failed = gatesFor(c, b, t).failed;
        return {
          creator: c,
          score: score13(c),
          failed: failed,
          /* The engine's CLI prints "score, fit" and people have read that
             board all day; keep the vocabulary identical across surfaces. */
          words: failed.map(function (g) { return g.key; })
        };
      })
      .sort(function (x, y) { return y.score - x.score; });
  }

  /* ================================================================== GATES */
  /* §5.4's five conditions, evaluated for one creator against one brief.
     Returned as sentences and only ever rendered where one FAILED — "why isn't
     this person in my drop" is a real question on the report of someone who did
     not get in (§6.4), and noise on someone who did. §8 is explicit that In Drop
     is computed, not stored, so this must read as a consequence rather than as a
     status field: no table of five passes, ever. */
  function gatesFor(c, b, threshold) {
    var t = threshold == null ? THRESHOLD : threshold;
    var fit = fitFor(c, b);
    var sc = score13(c);
    var g = [
      { key: 'fit', pass: !!fit.pass, label: 'Fit',
        /* v5.3 — a brief TITLE is a name and keeps its capitals. Lower-casing it
           to sit mid-sentence turns "NFL analysis" into "nfl analysis", which
           reads as a typo on a screen whose whole claim is care — the same
           mistake the inventory labels already had to fix. It was survivable
           when one sentence carried it; the who-else board prints it on every
           rejected row, fifteen times under one brief. */
        /* v5.4 — a borrowed verdict already names the brief it came from, so
           prefixing it with THIS brief's name produces the exact contradiction
           the attribution exists to remove. Say it once, and say whose it is. */
        borrowedFrom: fit.borrowedFrom || null,
        why: fit.borrowedFrom
          ? fit.why
          : (fit.pass ? fit.why : 'This brief asks for ' + (b && b.name ? b.name : 'something else') + '. ' + (fit.why || 'They are not it.')) },
      /* `pass` keys off `blocks`, so a first look never reads as a failure —
         but `why` carries the real state, which is how "no trend yet" reaches
         the screen instead of being rounded up to "rising or steady". */
      { key: 'trajectory', pass: !trajectoryOf(c).blocks, label: 'Why they are on this list',
        why: trajectoryOf(c).stated, verdict: trajectoryOf(c).verdict },
      { key: 'score', pass: sc >= t, label: 'The score',
        why: sc >= t ? sc + ' against a bar of ' + t + '.' : sc + ' is below the bar of ' + t + ', so the scan would never have surfaced this name on its own.' },
      { key: 'confidence', pass: c.confidence >= CONF_FLOOR, label: 'Confidence',
        why: c.confidence >= CONF_FLOOR ? Math.round(c.confidence * 100) + '% of checks resolved.'
          : Math.round(c.confidence * 100) + '% of checks resolved, under the ' + Math.round(CONF_FLOOR * 100) + '% floor. Too much of this is unread to argue from.' }
    ];
    var failed = g.filter(function (x) { return !x.pass; });
    return { all: g, failed: failed, enters: failed.length === 0 };
  }

  /* ============================================================ PASSED LIST */
  /* The reason and the trigger together are what make a Pass read as a decision
     rather than a deletion (§6.3.1). */
  /* v5.9 — `common` marks the three the tray opens with. Pass is the most-used
     action in the product, and eight reasons carrying eight different comeback
     rules made it the slowest screen: to pass one name you read eight policies.
     `short` is the same rule at a glance; `suppression` stays as the full
     sentence the Passed row prints, where there is room for it. */
  var passReasons = [
    { code: 'monetized', label: 'Already monetized', common: true, short: 'Back if that changes', suppression: 'Permanent unless what they have built changes' },
    { code: 'too_small', label: 'Too small', common: true, short: 'Back at an audience threshold', suppression: 'Returns at an audience threshold' },
    { code: 'not_asked', label: 'Not what I asked for', common: true, short: 'Points at the brief', suppression: 'Points at the brief, not the person. Three of these and Scout offers to re-read it.' },
    { code: 'wrong_category', label: 'Wrong category', short: 'This brief only', suppression: 'Permanent — this brief only' },
    { code: 'unsafe', label: 'Brand-unsafe', short: 'Permanent, everywhere', suppression: 'Permanent, everywhere. Surfaces on the report.' },
    { code: 'not_distinctive', label: 'Not distinctive', short: 'Back in 180 days', suppression: 'Comes back in 180 days' },
    { code: 'no_pressure', label: 'No pressure / not ready', short: 'Back in 90 days', suppression: 'Comes back in 90 days, or sooner on a pressure trigger' },
    { code: 'no_longer_worth', label: 'No longer worth tracking', short: 'Back in 180 days', suppression: 'Stops the watch cost. Back in 180 days, or on any material change.' },
    { code: 'declined', label: 'Declined', short: 'Set by the outcome', suppression: 'Set by the outcome, never chosen here.', outcomeOnly: true }
  ];
  function reasonFor(code) {
    var r = null;
    passReasons.forEach(function (x) { if (x.code === code) r = x; });
    return r;
  }

  /* Seeded so the list is populated on arrival. Trigger is the half that
     matters — "returns at 100k followers" is why this is not a deletion.

     v5.4 — RE-POINTED AT REAL CREATORS. Every id here was a fictional-cohort id
     (x_teddy, c_otto, c_bex …) that does not exist in the merged real seed, so
     passedList() dropped all seven on the `.filter(r.c)` and the screen rendered
     its empty state. Two of six nav destinations led nowhere and nothing said
     so, because an empty Passed list is a legitimate state.

     Each reason below is read off that creator's own inventory rather than
     invented: @richeisenshow really does have a newsletter, a site and a show
     already, and @hayesfawcett really is on 4.4k. A pass reason is a training
     label (§5.6) — a wrong one teaches the model something false, which is worse
     than an empty list.

     DATES ARE INSIDE THE OBSERVATION WINDOW, 3–6 August. §6.3.1 wants an aged
     row — "I passed someone in March and now I cannot find them" — and it cannot
     have one honestly: this cohort was first observed three days ago, so a March
     pass would assert Scout surfaced them in March. That is the backdating
     decision 113 refused, wearing different clothes. The screen demonstrates
     recall and the trigger; it cannot yet demonstrate age. */
  var passedSeed = [
    { id: 'c_worth_call_they_make_2__richeisenshow', at: '2026-08-06', code: 'monetized', by: 'Alex Grinshpoon',
      trigger: 'Returns if the newsletter or the show goes away', brief: 'b_house' },
    { id: 'c_worth_call_they_make_2__humblemechanic', at: '2026-08-06', code: 'monetized', by: 'Alex Grinshpoon',
      trigger: 'Returns if the store closes — 1.1M audience is worth re-reading', brief: 'b_house' },
    { id: 'c_worth_call_they_make_2__superfastmatt', at: '2026-08-05', code: 'monetized', by: 'Alex Grinshpoon',
      trigger: 'Store and membership both live — returns if either goes', brief: 'b_house' },
    { id: 'c_worth_call_they_make_2__blabbertok', at: '2026-08-05', code: 'monetized', by: 'Alex Grinshpoon',
      trigger: 'Returns if the newsletter stops', brief: 'b_house' },
    { id: 'c_worth_call_they_make_2__hayesfawcett', at: '2026-08-05', code: 'too_small', by: 'Alex Grinshpoon',
      trigger: 'Returns at 50k followers — currently 4.4k', brief: 'b_house' },
    { id: 'c_worth_call_they_make_2__gossipgilby', at: '2026-08-04', code: 'too_small', by: 'Alex Grinshpoon',
      trigger: 'Returns at 50k followers — currently 6.9k', brief: 'b_house' },
    { id: 'c_worth_call_they_make_2__marcelluswiley', at: '2026-08-04', code: 'monetized', by: 'Alex Grinshpoon',
      trigger: 'Newsletter and show already running — returns if either stops', brief: 'b_house' }
  ];

  /* v5.4 — THE WATCHLIST HAD THE SAME PROBLEM AND NO SEED AT ALL. watchlist()
     reads `status === 'watched'`, which no record in the merged seed carries, so
     the screen was permanently empty and §13's "at least one resurfaced name
     with its trigger" was undemonstrable.

     Stamped onto the real records rather than held in a parallel list, because
     watchlist() and closing() both read off the creator. Trend lines say what is
     actually true after one observation — "nothing has moved yet" is the honest
     reading of a cohort read once, and it is also the argument FOR the watchlist:
     the window is what turns one look into two. */
  var watchedSeed = [
    { id: 'c_worth_call_they_make_2__briansmobile1', since: '2026-08-05', window: '1 month',
      trend: ['467k on YouTube, nothing to sell them', 'scored 22 against a bar of 25 — close, not over'] },
    { id: 'c_worth_call_they_make_2__watchweswork', since: '2026-08-05', window: '1 month',
      trend: ['Read too little of them to argue from — 50% of checks resolved', 'the window is what gets us a second reading'] },
    { id: 'c_worth_call_they_make_2__girlwholove2gossip', since: '2026-08-04', window: '3 months',
      trend: ['46k, every check resolved, still under the bar', 'nothing has moved yet — one look so far'] }
  ];
  watchedSeed.forEach(function (w) {
    var c = W.byId[w.id];
    if (!c) return;
    c.status = 'watched';
    c.watchedSince = w.since;
    V13[c.id] = V13[c.id] || {};
    V13[c.id].window = w.window;
    V13[c.id].trend = w.trend;
  });

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
    b_fen: { verb: 'watch', by: 'Alex Grinshpoon' },
    b_marisol: { verb: 'promote', by: 'Alex Grinshpoon' },
    b_clem: { verb: 'watch', by: 'Alex Grinshpoon' },
    b_tobi: { verb: 'pass', by: 'Alex Grinshpoon',
      note: 'Ranked last of six and stayed last of six. The ordering held, which is the only part of a look-back worth trusting.' }
  };

  /* ========================================================== CHECK RECORD */
  /* Formerly the Ledger. A read view over data that must exist anyway (§6.10).
     Stays collapsed — nobody opens receipts until they are challenged.

     v5.1 authored these rows by hand, separately from the place counts on the
     inventory lines, and the two drifted. They are now generated from the probe
     catalogue below, so the table and the lines are the same rows. */

  var DEPTH = {
    discovery: { label: 'Discovery', note: 'Goes and finds people who are not in the population yet. Per brief, never per creator.' },
    sweep: { label: 'Sweep', note: 'Rules only. Audience band, cadence, bio, link presence.' },
    probe: { label: 'Probe', note: 'What they have built and switched on. Where "not there" is earned.' },
    study: { label: 'Study', note: 'Language-model reading. Brief fit, their own words, what the audience asked for.' }
  };

  /* ======================================================= PROBE CATALOGUE
     The list of places we go and look, per inventory item. Mirrors the shape of
     the engine's `config/probes.json` so Task 6's export drops straight into it.

     This exists because of the defect it fixes. v5.1 authored the place COUNT on
     the inventory line and the place ROWS in a separate flat table, so the two
     drifted: Ines claimed 25 places across six lines against a record of 12 rows,
     and "we looked in 6 places" on the newsletter line had three rows behind it.
     Nothing caught it because nothing had ever tried to open a single line.

     So the count is no longer authored. It is `placesFor(item).length`, derived
     from the rows the disclosure will actually show. The line cannot claim a
     door the receipts cannot open — not by discipline, by construction.

     `advisory: true` is the engine's own distinction (§probes.json): endpoints
     that answer 403 to everyone. Kept, because a hit there still counts;
     excluded from the count, because a door that never opens is not a place we
     looked. */
  var PROBES = {
    'YouTube channel': [
      { label: 'youtube.com/@handle', url: 'youtube.com/@{h}', kind: 'first_party' },
      { label: 'youtube.com/c/handle', url: 'youtube.com/c/{h}', kind: 'guess' },
      { label: 'youtube.com/user/handle', url: 'youtube.com/user/{h}', kind: 'guess' }
    ],
    Newsletter: [
      { label: 'handle.substack.com', url: '{h}.substack.com', kind: 'guess' },
      { label: 'substack.com/@handle', url: 'substack.com/@{h}', kind: 'guess' },
      { label: 'handle.beehiiv.com', url: '{h}.beehiiv.com', kind: 'guess' },
      { label: 'buttondown.com/handle', url: 'buttondown.com/{h}', kind: 'guess' },
      { label: 'handle.ghost.io', url: '{h}.ghost.io', kind: 'guess' },
      { label: 'kit.com/handle', url: 'kit.com/{h}', kind: 'guess' }
    ],
    Store: [
      { label: 'handle.myshopify.com', url: '{h}.myshopify.com', kind: 'guess' },
      { label: 'gumroad.com/handle', url: 'gumroad.com/{h}', kind: 'guess' },
      { label: 'stan.store/handle', url: 'stan.store/{h}', kind: 'guess' },
      { label: 'bigcartel.com/handle', url: '{h}.bigcartel.com', kind: 'guess' },
      { label: 'shop tab on their profile', url: 'platform commerce crawl', kind: 'first_party' },
      { label: 'ko-fi.com/handle', url: 'ko-fi.com/{h}', kind: 'guess', advisory: true },
      { label: 'etsy.com/shop/handle', url: 'etsy.com/shop/{h}', kind: 'guess', advisory: true }
    ],
    Representation: [
      { label: 'their own bio', url: 'profile bio, 3 platforms', kind: 'first_party' },
      { label: 'agency rosters', url: 'roster crawl, 12 agencies', kind: 'guess' },
      { label: 'management credit in captions', url: 'caption scan', kind: 'first_party' },
      { label: 'press and interview mentions', url: 'news search, 90 days', kind: 'guess' }
    ],
    Website: [
      { label: 'handle.com', url: '{h}.com', kind: 'guess' },
      { label: 'handle.co', url: '{h}.co', kind: 'guess' },
      { label: 'handle.net', url: '{h}.net', kind: 'guess' },
      { label: 'link in bio', url: 'linktr.ee/{h}, beacons.ai/{h}', kind: 'first_party' }
    ],
    Membership: [
      { label: 'patreon.com/handle', url: 'patreon.com/{h}', kind: 'guess' },
      { label: 'buymeacoffee.com/handle', url: 'buymeacoffee.com/{h}', kind: 'guess' },
      { label: 'memberful / circle', url: 'memberful.com, circle.so', kind: 'guess' }
    ],
    Podcast: [
      { label: 'Apple Podcasts directory', url: 'itunes.apple.com/search', kind: 'api' },
      { label: 'Spotify shows', url: 'open.spotify.com/search', kind: 'api' }
    ]
  };

  /* Switched-on items are presence-only or need an API we do not have. They can
     show up as present and never as absent, which is Q1 in the engine: they are
     excluded from the confidence denominator and named on the report instead. */
  var PRESENCE_ONLY = {
    'YouTube monetization': { url: 'channel page markers', why: 'Monetization state is only visible when it is on.' },
    'Platform subscriptions': { url: 'partner API — not available', why: 'Only visible through a partner API we do not have.', noApi: true },
    'Shopping tags': { url: 'partner API — not available', why: 'Only visible through a partner API we do not have.', noApi: true },
    'Affiliate links': { url: 'their own links, 90 days', why: 'We can see a disclosed link. We cannot see the absence of one.' },
    'Sponsored posts': { url: 'caption disclosure scan', why: 'We can see a disclosure. We cannot prove none exists.' }
  };

  /* The places that count toward "we looked in N places" — advisory excluded. */
  function placesFor(item) {
    return (PROBES[item] || []).filter(function (p) { return !p.advisory; });
  }

  var STATUS = { hit: 200, miss: 404, inconclusive: 403 };

  function slugFor(c) {
    return String(c.handle || c.name || '').replace(/^@/, '').replace(/[^A-Za-z0-9.]/g, '').toLowerCase();
  }

  /* A probe pass does not finish in one second, and the record is the thing that
     has to look like it came from a machine that actually ran. Items are dated
     across the days the pass took, deterministically, so the range on "How we
     checked" is a real span rather than a single instant repeated. */
  var PROBE_ORDER = Object.keys(PROBES);
  function dayBefore(iso, n) {
    if (!n) return iso;
    var d = new Date(iso + 'T00:00:00Z');
    d.setUTCDate(d.getUTCDate() - n);
    return d.toISOString().slice(0, 10);
  }
  function dateForItem(c, item) {
    var base = c.asOf || TODAY;
    var i = PROBE_ORDER.indexOf(item);
    /* Newest item last: the pass walks the tier-1 items first. */
    return dayBefore(base, i < 0 ? 0 : Math.floor((PROBE_ORDER.length - 1 - i) / 2));
  }

  /* One check row per place, for one inventory line. This is what the line's
     disclosure opens, and the same rows are what the flat table lists — one
     record, two views (§6.10), so the two can no longer disagree. */
  function checksFor(c, r) {
    var at = dateForItem(c, r.item), h = slugFor(c);
    if (r.state === NA) return [];
    var po = PRESENCE_ONLY[r.item];
    if (po) {
      return [{
        item: r.item, place: r.item.toLowerCase(), url: po.url,
        outcome: r.state === P ? 'hit' : 'inconclusive',
        status: po.noApi ? null : (r.state === P ? 200 : 200),
        why: r.state === P ? (r.note || 'Found it.') : po.why,
        presenceOnly: true, at: at, engine: 'rule', depth: 'probe',
        state: r.state === P ? P : N
      }];
    }
    var places = PROBES[r.item];
    if (!places) return [];
    /* Where an item is Present, the first place is the one that answered; the
       rest still get looked at, because a creator can have two of a thing. */
    return places.map(function (p, i) {
      var outcome;
      if (r.state === P) outcome = i === 0 ? 'hit' : 'miss';
      else if (r.state === N) outcome = 'inconclusive';
      else outcome = p.advisory ? 'inconclusive' : 'miss';
      return {
        item: r.item,
        place: p.label,
        url: String(p.url).replace(/\{h\}/g, h),
        kind: p.kind,
        advisory: !!p.advisory,
        outcome: outcome,
        status: p.advisory && outcome === 'inconclusive' ? 403
          : outcome === 'inconclusive' ? (p.kind === 'api' ? 429 : 403)
            : STATUS[outcome],
        why: outcome === 'hit' ? (r.clause ? 'Found it — ' + r.clause : 'Found it.')
          : outcome === 'miss' ? (p.kind === 'first_party' ? 'Nothing there.' : 'Nothing at this address.')
            : p.advisory ? 'Answers 403 to every identified client. A hit here would still count; an empty answer is not a look.'
              : 'Would not answer. Lowers confidence, never counts as a gap.',
        at: at, engine: 'rule', depth: 'probe',
        state: outcome === 'hit' ? P : outcome === 'miss' ? A : N
      };
    });
  }

  /* Study-depth rows sit outside the inventory: they are what Demand, Pressure
     and Fit were read from, and they belong in the record even though no
     inventory line owns them. */
  var studyRows = {
    b_ines: [
      { item: 'Demand', place: 'Comments', url: 'comment sample, 6 posts', outcome: 'hit', status: 200, why: '840 people asked where to buy, in the sampled window.', at: '2024-01-14', engine: 'llm', depth: 'study', state: P },
      { item: 'Pressure', place: 'Their own words', url: 'caption scan, 90 days', outcome: 'hit', status: 200, why: 'Two statements of being unable to keep up.', at: '2024-01-15', engine: 'llm', depth: 'study', state: P }
    ],
    c_marguerite: [
      { item: 'Demand', place: 'Comments', url: 'comment sample, 8 posts', outcome: 'hit', status: 200, why: '1,940 people asked where to buy, in the sampled window.', at: '2026-07-29', engine: 'llm', depth: 'study', state: P },
      { item: 'Pressure', place: 'Their own words', url: 'caption scan, 60 days', outcome: 'hit', status: 200, why: 'Three statements of being unable to keep up.', at: '2026-07-28', engine: 'llm', depth: 'study', state: P },
      { item: 'Fit', place: 'Brief fit', url: 'sample analysis, 6 posts', outcome: 'hit', status: 200, why: 'Home cooks, no store — pass.', at: '2026-07-28', engine: 'llm', depth: 'study', state: P }
    ]
  };

  /* The whole record, flat, for the table. Built from exactly the rows the
     per-line disclosures show, so the header total and the line totals are the
     same arithmetic rather than two authored numbers that drifted. */
  function recordFor(c, asOf) {
    if (!c) return [];
    var cl = claims(c);
    var rows = [];
    cl.missing.built.concat(cl.missing.on).forEach(function (r) {
      rows = rows.concat(checksFor(c, r));
    });
    rows = rows.concat(studyRows[c.id] || []);
    return asOf ? rows.filter(function (r) { return r.at <= asOf; }) : rows;
  }

  /* Every check row for one inventory line — what the line's own disclosure
     opens. §6.10: the proof sits under the claim it justifies. */
  function checksForItem(c, r, asOf) {
    var rows = checksFor(c, r);
    return asOf ? rows.filter(function (x) { return x.at <= asOf; }) : rows;
  }

  /* The number on the line, derived. Advisory places are excluded — a door that
     never opens is not a place we looked. Inconclusive ones are counted
     separately and stated (Q3: "· N we could not tell"). */
  function lookedIn(c, r, asOf) {
    var rows = checksForItem(c, r, asOf);
    var looked = 0, quiet = 0;
    rows.forEach(function (x) {
      if (x.advisory) { quiet++; return; }
      if (x.outcome === 'inconclusive') { quiet++; return; }
      looked++;
    });
    return { places: looked, quiet: quiet, rows: rows };
  }

  /* "34 checks across 11 places" — more checks than places, because the same
     place gets looked at again every time the creator is re-scored. A place is
     a distinct surface in the record; a check is one lookup at one of them. */
  function checkSummary(c, asOf) {
    var rows = recordFor(c, asOf);
    if (!rows.length) return null;
    var seen = {}, places = 0, first = null, last = null;
    rows.forEach(function (r) {
      if (!seen[r.place]) { seen[r.place] = 1; places += 1; }
      if (!first || r.at < first) first = r.at;
      if (!last || r.at > last) last = r.at;
    });
    /* Re-checks: a watched creator's places get looked at again on each pass.
       Stated as a multiple of the rows rather than authored, so it cannot drift
       away from them. */
    var passes = c.watchedSince ? 2 : 1;
    return { checks: rows.length * passes, places: places, first: first, last: last, rows: rows.length };
  }

  /* The items that can never resolve absent — Q1 in the engine, and the reason
     confidence is a statement about what was answerable rather than a score. */
  function cannotSettle(c) {
    var cl = claims(c);
    return cl.missing.on.filter(function (r) {
      return r.state !== NA && PRESENCE_ONLY[r.item];
    }).map(function (r) { return r.item.toLowerCase(); });
  }

  /* ================================================================= EFFORT */
  /* Creator scope shows effort, never currency (§5.8). Pricing a human being on
     screen is both grim and the wrong optimisation target. */
  function effortFor(c, asOf) {
    var cl = claims(c);
    var places = 0;
    cl.missing.built.forEach(function (r) { places += lookedIn(c, r, asOf).places; });
    var earliest = null;
    (c.inventory || []).forEach(function (r) { if (!earliest || r.observedAt < earliest) earliest = r.observedAt; });
    (c.evidence || []).forEach(function (e) { if (!earliest || e.observedAt < earliest) earliest = e.observedAt; });
    var start = c.watchedSince || earliest || asOf;
    return { places: places, since: start, passes: ['sweep', 'probe', 'study'] };
  }

  /* ================================================================== ADMIN */
  /* Four knobs, and no fifth (decision 70). The thesis is not editable and there
     is no prompt editor — what makes a creator interesting IS the product. */
  /* v5.4 — THE BILL IS MEASURED NOW. Every figure below is read off
     engine/data/costs.jsonl, 19,525 rows covering every run ever made.

     What was here before was invented, and it was invented in the wrong SHAPE:
     a $2,400 ceiling against $1,615 spent, with the biggest ledger line —
     Probe, $702 — sitting on the pass that consists entirely of HTTP fetching.
     Fetching is free. The Sources screen says so two clicks away, in those
     words, so the panel was teaching the opposite of the product's own claim.

       measured, all runs, re-read 7 Aug 2026
         18,168 fetches (http + api) ......... $0.0000
         928 classify calls, Haiku 4.5 ....... $1.3539
         316 judge calls, Opus 5 ............. $3.4107
         ------------------------------------  -------
         total ............................... $4.7645   across 83 creators

     $0.0574 per creator fully studied. The ceiling presets moved down two
     orders of magnitude to match — a $2,400 ceiling against a $4.76 bill is
     not a control, it is decoration, and the real number is a much better
     claim than the plausible one.

     The 7 Aug re-run added $1.36 to the all-time bill and it is the second
     time these 83 creators have been looked at, which is the honest reading of
     the per-creator figure: $0.057 is what the whole history divided by the
     people in it comes to, not what one look costs. One look costs about half
     that. The bigger number is the one on the screen. */
  /* v5.4 — THE LAST RUN, MEASURED. Nothing in the product said Scout runs
     continuously. The one sentence that did — "first names tomorrow morning, and
     every morning after that" — was buried in the new-brief confirmation, which
     nobody sees in a demo. So the drop read as a page that exists rather than as
     output that arrived, and "it is a cron job that finds you people worth the
     call" was a claim only the presenter could make.

     Every figure is read off engine/data/costs.jsonl, filtered to the house
     brief's rows for the run that produced this seed:

       7 Aug 26  11:46:45 → 11:50:00   3m 15s   1,808 fetches   $0.6848

     Re-measured 7 Aug 26. It was 11m 54s and 5,056 fetches on 6 Aug; the same
     58 creators now cost a third of that because the Study pass has fewer
     places left to propose on a second look. The figures here are stated to
     the second and they go stale the moment the engine runs again — anyone
     re-exporting the seed has to re-read this block too, which is the one
     hand-maintained number left on this screen.

     `checks` is fetches, not places: a place is a URL in the catalogue and gets
     checked once per creator, so 28 places across 58 creators is thousands of
     checks. Calling 1,808 "places" would inflate the catalogue by two orders of
     magnitude, which is the kind of number nobody can challenge in the room and
     everybody can challenge afterwards. */
  /* v6.1 — THE RUN NOW COMES FROM THE ENGINE. `meta.lastRun` is written by
     `warhol export` off the run record and that run's slice of the cost log, so
     the figures move when the engine moves. The block below is the fallback for
     a seed exported before lastRun travelled, and nothing else — it is the
     shape, not the reading.

     The paragraph above is what it was: a hand-kept snapshot that told anyone
     re-exporting to retype it, which nobody did for five days.

     Offsets, not Z, in the fallback. These are Eastern wall-clock times and the
     screen says so; stamping them UTC while printing "11:50 AM ET" would be a
     four-hour lie in the one line whose whole job is to be checkable. The
     engine writes real ISO stamps with real offsets, so this only matters
     while the fallback is in use. */
  var lastRun = (W.meta && W.meta.lastRun) || {
    started: '2026-08-07T11:46:45-04:00', finished: '2026-08-07T11:50:00-04:00',
    minutes: 3.25, creators: 58, checks: 1808, cost: 0.68, next: '06:00'
  };

  /* v6 — WHAT IT COST NOW COMES FROM THE ENGINE, NOT FROM THIS FILE.
     `meta.costs` is read off the engine's cost log at export. Everything below
     that duplicates it — `budget.spent`, the `ledger` rows — is the fallback
     for a seed exported before costs travelled, and is the reason this screen
     was five times out of date: a hand-kept number is a snapshot that goes on
     presenting itself as a reading. When the export carries costs, it wins. */
  var COSTS = (W.meta && W.meta.costs) || null;

  var admin = {
    costs: COSTS,
    budget: {
      ceiling: 250,
      spent: COSTS ? COSTS.spent : 4.76,
      currency: '$',
      period: 'August 2026',
      trend: 'measured across every run, not projected',
    },
    threshold: THRESHOLD,
    members: members,
    /* Ordered by the ladder, not by cost, so the shape of the bill is legible:
       everything up to Study is free, and Study is the whole of it. */
    /* v5.5c — THE COUNTS ARE FIELDS, NOT PROSE.
       `note` used to read "4,136 fetches, no names stored" and the summary
       paragraph under the table read "16,912 fetches ... 1,244 model calls",
       typed by hand. Two copies of the same four numbers, one of them a SUM of
       the others — so the paragraph had already drifted once (it said 13,837
       and 881 while the rows said 16,912 and 1,244) and nothing on screen could
       have told you which was right.

       Same defect as the five copies of the threshold and the watchlist's
       invented $4.20. `fetches` and `calls` are the record; the row's sentence
       and the paragraph's total are both rendered from them, so the total is
       arithmetic rather than a claim and cannot disagree with the rows above it.
       `note` keeps only the clause that has no number in it. */
    ledger: [
      { depth: 'discovery', label: 'Discovery', creators: '—', briefs: 5, note: '', cost: 0 },
      { depth: 'sweep', label: 'Sweep', creators: '83', fetches: 4136,
        note: 'no names stored', cost: 0 },
      { depth: 'probe', label: 'Probe', creators: '83', fetches: 12776,
        note: 'where "not there" is earned', cost: 0 },
      { depth: 'study', label: 'Study', creators: '83', calls: 1244,
        note: 'the entire bill', cost: 4.76 }
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
      cl.missing.built.forEach(function (r) { if (r.state === A) pl = Math.max(pl, lookedIn(c, r).places); });
      if (pl) out.push('We looked in ' + pl + ' places.');
      return { title: 'Demand', lines: out };
    }
    if (key === 'missing') {
      /* Every line here is now openable in place on the report itself, so this
         says what the list cannot: where the doors are, not that they exist. */
      cl.missing.built.forEach(function (r) {
        var li = lookedIn(c, r);
        if (r.state === A) {
          out.push(r.item + ' — ' + li.rows.filter(function (x) { return x.outcome === 'miss'; })
            .slice(0, 3).map(function (x) { return x.place; }).join(', ') +
            (li.places > 3 ? ' and ' + (li.places - 3) + ' more' : '') + '.');
        } else if (r.state === P) out.push(r.item + ' — found it at ' + (li.rows[0] ? li.rows[0].place : 'their own surface') + '.');
        else if (r.state === N) out.push(r.item + ' — could not tell.');
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
      /* Decision 82 killed "How it scored" as a section, and the first three
         lines here were that section restored one click away — Demand, Missing
         and Pressure restated verbatim from the claim headers a screen below.
         What survives is the two facts the headers genuinely do not carry: that
         the gates add nothing, and where the bar is. */
      out.push('Fit and Trajectory are gates. They pass or fail and add nothing.');
      out.push('The bar today is ' + THRESHOLD + '. Each claim carries its own points, on its own heading.');
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
      /* Q1: some checks can never settle either way. Naming them is what stops
         confidence reading as a score out of ten. */
      var cs = cannotSettle(c);
      if (cs.length) {
        out.push(cs.length + ' we cannot settle at all — ' + cs.join(', ') +
          '. They can show up as present, never as absent.');
      }
      return { title: 'Confidence', lines: out };
    }
    return { title: '', lines: out };
  }

  /* ------------------------------------------------------------- exports */
  window.SCOUT = {
    TODAY: TODAY, REWIND: REWIND, THRESHOLD: THRESHOLD, CAP: CAP, CONF_FLOOR: CONF_FLOOR,
    WEIGHTS: WEIGHTS,
    STATES: { P: P, A: A, N: N, NA: NA },
    me: me, members: members, account: account, briefs: briefs, plain: plain,
    V13: V13, score13: score13, points: points, claims: claims, missingLine: missingLine,
    fitFor: fitFor, trajectoryPass: trajectoryPass, trajectoryOf: trajectoryOf,
    categoryOf: categoryOf,
    poolFor: poolFor, dropFor: dropFor, gatesFor: gatesFor, rejectedFor: rejectedFor,
    passReasons: passReasons, reasonFor: reasonFor, passedSeed: passedSeed,
    outcomes: outcomes, declineReasons: declineReasons, promotedSeed: promotedSeed,
    rewindCalls: rewindCalls, outcomeFor: outcomeFor,
    recordFor: recordFor, checkSummary: checkSummary, likesFor: likesFor,
    PROBES: PROBES, placesFor: placesFor, checksForItem: checksForItem,
    lookedIn: lookedIn, cannotSettle: cannotSettle,
    DEPTH: DEPTH, effortFor: effortFor, admin: admin, lastRun: lastRun, receipts: receipts
  };
})();
