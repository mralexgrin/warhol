/* ============================================================================
   WARHOL SCOUT — CURATED SEED COHORT (prototype data)
   ----------------------------------------------------------------------------
   Classic script. Sets window.WARHOL. No modules, no fetch, no network.
   Works from file:// — do not convert this to an ES module.

   ALL CREATORS ARE FICTIONAL. Structurally realistic, deliberately not real
   people, because the app fabricates evidence quotes and strain claims.
   Swapping in verified real data is a change to THIS FILE only.

   ---------------------------------------------------------------------------
   SCHEMA (mirrors PRD-WARHOL-SCOUT.md §5, §8, §10)
   ---------------------------------------------------------------------------
   mandate    { id, name, category, platforms[], audienceBand, geo, language,
                owner, ownerInitials }

   candidate  {
     id, name, handle, initials, accent, headline, mandateId,
     primaryPlatform,
     platforms[]        { name, handle, followers, url, matchConfidence }
     audience           { total, growth90d }
     score              0-100 composite
     scoreDelta         change since previous scoring run (null if first)
     confidence         0-1  = share of absence checks RESOLVED. Never folded
                        into score. PRD §5.3.
     pillars {
       gap    { score, max:60, engine, coverage, subsignals[] }
       strain { score, max:40, engine, subsignals[] }
       fit    { verdict:'pass'|'fail', engine, subsignals[] }   // GATE, no points
     }
     subsignal { key, label, engine:'rule'|'llm'|'rule+llm',
                 value, weightPct, detail }
     inventory[]        { item, state, surfacesChecked, note, observedAt, source }
                        state ∈ 'present' | 'verified_absent' | 'not_found'
                        ONLY verified_absent scores as a gap. PRD §5.3.
     evidence[]         { kind:'comment'|'caption'|'signal', quote, platform,
                          url, observedAt, engine, label }
     samples[]          { title, platform, metric, length, tone, observedAt }
     play               { id, label, why }
     status             'in_drop'|'watched'|'promoted'|'passed'|'candidate'
     resurfaced         null | { reason, trigger, since, previousScore }
     passed             null | { reasonCode, by, at, suppression }
     promoted           null | { by, at }
     outreach           { subject, opener, bullets[], close }
     outcome            null | { window, followersNow, built[], headline, note }
                        Backtest reveal only. PRD §7.
     asOf               ISO date this snapshot was observed at
     watchedSince       ISO date (watchlist members)
     nextTrigger        string (watchlist members)
     alert              null | { level:'acute', text, at }
   }

   window.WARHOL = { meta, user, scouts, mandates, plays, passReasons,
                     candidates[], drops{}, timeline[] }

   drops[asOfDate][mandateId] = [candidateId, ...]   // ranked, already gated
   A mandate key present with an EMPTY array is a real zero-result day and must
   render the designed empty state. PRD §5.4 — this is a feature, not a bug.
   ========================================================================== */

(function () {
  'use strict';

  // ---------------------------------------------------------------- helpers
  var PRESENT = 'present';
  var ABSENT = 'verified_absent';
  var UNKNOWN = 'not_found';

  // -------------------------------------------------------------- registry
  var plays = [
    { id: 'newsletter', label: 'Newsletter + sponsorship slate', blurb: 'Owned list, weekly cadence, sold against a category slate.' },
    { id: 'commerce', label: 'Storefront / commerce (Encore)', blurb: 'Product line on Encore rails; they never touch fulfilment.' },
    { id: 'site', label: 'Standalone site + O&O ads', blurb: 'Destination on the shared platform, our ad stack.' },
    { id: 'clips', label: 'Clip-first distribution', blurb: 'Cutter Studio pipeline, multi-surface syndication.' },
    { id: 'membership', label: 'Membership / community', blurb: 'Recurring tier around an existing gathering behaviour.' }
  ];

  var passReasons = [
    { code: 'monetized', label: 'Already monetized', suppression: 'Permanent unless monetization inventory changes' },
    { code: 'too_small', label: 'Too small', suppression: 'Revisit at audience threshold' },
    { code: 'wrong_category', label: 'Wrong category', suppression: 'Permanent — this mandate only' },
    { code: 'unsafe', label: 'Brand-unsafe', suppression: 'Permanent, global' },
    { code: 'not_distinctive', label: 'Not distinctive', suppression: 'Cooldown 180 days' },
    { code: 'no_strain', label: 'No strain / not ready', suppression: 'Cooldown 90 days; resurface on strain trigger' }
  ];

  var scouts = [
    { id: 's_alex', name: 'Alex Grinshpoon', initials: 'AG', role: 'Head of Origination' },
    { id: 's_marisol', name: 'Marisol Vega', initials: 'MV', role: 'Scout' },
    { id: 's_theo', name: 'Theo Nakamura-Boyd', initials: 'TN', role: 'Scout' }
  ];

  var mandates = [
    {
      id: 'm_food', name: 'Food & Home Craft', category: 'Food / Home',
      platforms: ['TikTok', 'Instagram', 'YouTube', 'Substack'],
      audienceBand: '100K – 2M', geo: 'US / CA', language: 'EN',
      owner: 'Alex Grinshpoon', ownerInitials: 'AG'
    },
    {
      id: 'm_money', name: 'Personal Finance & Money Systems', category: 'Finance',
      platforms: ['YouTube', 'Substack', 'X'],
      audienceBand: '50K – 1M', geo: 'US', language: 'EN',
      owner: 'Marisol Vega', ownerInitials: 'MV'
    },
    {
      id: 'm_making', name: 'Restoration & Making', category: 'Craft / Trade',
      platforms: ['YouTube', 'TikTok', 'Instagram'],
      audienceBand: '250K – 5M', geo: 'Global EN', language: 'EN',
      owner: 'Theo Nakamura-Boyd', ownerInitials: 'TN'
    }
  ];

  // ============================================================ CANDIDATES
  // ---- TODAY'S DROP — m_food — as of 2026-07-31 --------------------------

  var candidates = [];

  candidates.push({
    id: 'c_marguerite',
    name: 'Marguerite Vaillancourt', handle: '@marguerite.bakes', initials: 'MV',
    accent: '#C8622F',
    headline: 'Laminated dough, filmed in a single unbroken take. No music, no cuts.',
    mandateId: 'm_food', primaryPlatform: 'TikTok',
    platforms: [
      { name: 'TikTok', handle: '@marguerite.bakes', followers: 842000, url: 'tiktok.com/@marguerite.bakes', matchConfidence: 1.0 },
      { name: 'Instagram', handle: '@marguerite.bakes', followers: 311000, url: 'instagram.com/marguerite.bakes', matchConfidence: 0.97 },
      { name: 'YouTube', handle: 'Marguerite Bakes', followers: 48200, url: 'youtube.com/@margueritebakes', matchConfidence: 0.83 }
    ],
    audience: { total: 1201200, growth90d: 0.31 },
    score: 87, scoreDelta: 4, confidence: 0.92,
    pillars: {
      gap: {
        score: 55, max: 60, engine: 'rule', coverage: 0.94,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'No newsletter, no site, no store', weightPct: 45, detail: '11 of 12 surfaces resolved. Bio link resolves to a Linktree containing only platform mirrors.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / last 120 posts', weightPct: 30, detail: 'No #ad, #gifted, or platform paid-partnership flag in 120 posts back to 2026-02-14.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '1,940 purchase-intent comments', weightPct: 25, detail: '1,940 of 61,200 sampled comments classified purchase-or-subscribe intent (3.2%). Category median is 0.4%.' }
        ]
      },
      strain: {
        score: 32, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−41% vs 90d baseline', weightPct: 35, detail: '4.1 posts/wk trailing 90d against 6.9 posts/wk prior baseline.' },
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '3 explicit markers', weightPct: 30, detail: 'Three captions in 60 days containing capacity language. Classified, not counted — see evidence.' },
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '2.1% reply rate', weightPct: 25, detail: 'Down from 19% twelve months ago at one fifth the comment volume.' },
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: '1 dead link', weightPct: 10, detail: 'Bio link to "margueritebakes.myshopify.com" has returned 404 since 2026-05-02.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Single-take structure yields natural 20–40s cut points without re-edit.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'One dough, one take, one failure mode named at the end. Runs indefinitely.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Baking → mapped', detail: 'Maps to an active Paradium food vertical with two sold slates.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'No-cut constraint is the whole identity. Not replicable by a volume account.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 6, note: 'Substack, beehiiv, ConvertKit, Mailchimp landing, bio, pinned post — none.', observedAt: '2026-07-29', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'No registered domain matching handle or name. Shopify subdomain is dead.', observedAt: '2026-07-29', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'No Shopify, Etsy, Amazon storefront, or TikTok Shop.', observedAt: '2026-07-29', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'No Patreon, no channel membership, no Substack paid tier.', observedAt: '2026-07-29', source: 'crawl/membership' },
      { item: 'Cookbook / product', state: UNKNOWN, surfacesChecked: 2, note: 'Publisher databases not covered at this tier. Inconclusive.', observedAt: '2026-07-29', source: 'crawl/product' },
      { item: 'Sponsorship', state: ABSENT, surfacesChecked: 1, note: '120 posts scanned for disclosure markers. Zero.', observedAt: '2026-07-30', source: 'crawl/disclosure' }
    ],
    evidence: [
      { kind: 'comment', quote: 'i have watched this croissant video 40 times. where is the newsletter. i will pay for the newsletter.', platform: 'TikTok', url: 'tiktok.com/@marguerite.bakes/video/7412…', observedAt: '2026-07-22', engine: 'llm', label: 'subscribe intent' },
      { kind: 'comment', quote: 'do you sell the dough scraper?? the metal one??? i have looked everywhere', platform: 'Instagram', url: 'instagram.com/p/C9x…', observedAt: '2026-07-18', engine: 'llm', label: 'purchase intent' },
      { kind: 'comment', quote: 'genuinely would buy a $200 course from you tomorrow. no notes.', platform: 'TikTok', url: 'tiktok.com/@marguerite.bakes/video/7398…', observedAt: '2026-07-11', engine: 'llm', label: 'purchase intent' },
      { kind: 'caption', quote: 'sorry for the gap — filming these in one take means when it fails at 4am I have nothing to post.', platform: 'TikTok', url: 'tiktok.com/@marguerite.bakes/video/7405…', observedAt: '2026-07-14', engine: 'llm', label: 'capacity strain' },
      { kind: 'caption', quote: 'I keep meaning to set up somewhere to put the recipes. I know. I know.', platform: 'Instagram', url: 'instagram.com/p/C9k…', observedAt: '2026-06-28', engine: 'llm', label: 'unbuilt intent' },
      { kind: 'signal', quote: 'Shopify subdomain returns 404 — launched 2025-11, dormant since 2026-05.', platform: 'Web', url: 'margueritebakes.myshopify.com', observedAt: '2026-07-29', engine: 'rule', label: 'abandonment' }
    ],
    samples: [
      { title: 'Croissant, one take, no cuts', platform: 'TikTok', metric: '14.2M views', length: '3:41', tone: 0.2, observedAt: '2026-07-22' },
      { title: 'The lamination failed and I kept filming', platform: 'TikTok', metric: '8.9M views', length: '2:58', tone: 0.55, observedAt: '2026-06-30' },
      { title: 'Kouign-amann at 5am', platform: 'Instagram', metric: '2.1M views', length: '1:12', tone: 0.8, observedAt: '2026-07-04' }
    ],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'The demand is explicitly for the recipe, in writing, on a schedule. She has said twice she means to build it. The list is the product; the slate is already sold in this category.' },
    status: 'in_drop', resurfaced: null, passed: null, promoted: null,
    outreach: {
      subject: 'The thing you keep meaning to set up',
      opener: 'You mentioned twice this summer that you keep meaning to put the recipes somewhere. We build exactly that, we operate it, and you keep making the videos you already make.',
      bullets: [
        '1,940 comments in 90 days asking where to buy or subscribe — 8× the category norm',
        'No newsletter, no site, no store — we checked 18 surfaces',
        'We run the list, the sponsorship slate, and the ops. You film.'
      ],
      close: 'Fifteen minutes this week or next?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  });

  candidates.push({
    id: 'c_deshawn',
    name: 'Deshawn Okafor', handle: '@thesundaypot', initials: 'DO', accent: '#B4472E',
    headline: 'One pot, West African weeknight, under forty minutes, shot from a phone on a shelf.',
    mandateId: 'm_food', primaryPlatform: 'Instagram',
    platforms: [
      { name: 'Instagram', handle: '@thesundaypot', followers: 611000, url: 'instagram.com/thesundaypot', matchConfidence: 1.0 },
      { name: 'TikTok', handle: '@thesundaypot', followers: 224000, url: 'tiktok.com/@thesundaypot', matchConfidence: 0.99 }
    ],
    audience: { total: 835000, growth90d: 0.44 },
    score: 84, scoreDelta: 11, confidence: 0.88,
    pillars: {
      gap: {
        score: 52, max: 60, engine: 'rule', coverage: 0.9,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'No newsletter, no site', weightPct: 45, detail: '9 of 10 surfaces resolved. A dormant Gumroad exists with one unlisted product.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '2 disclosures / last 90 posts', weightPct: 30, detail: 'Two gifted-product posts, both grocery brands, both unbranded follow-up. Not a slate.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '1,180 purchase-intent comments', weightPct: 25, detail: 'Dominant ask is a printed or bound collection, not a course.' }
        ]
      },
      strain: {
        score: 32, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '4 explicit markers', weightPct: 35, detail: 'Repeated references to working a full-time job alongside filming.' },
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−28% vs baseline', weightPct: 30, detail: 'Sharp drop beginning week of 2026-05-18.' },
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '0.9% reply rate', weightPct: 25, detail: 'Effectively stopped replying in March.' },
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'Gumroad dormant 8mo', weightPct: 10, detail: 'One product, unlisted, no sales page traffic.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Fixed-frame format cuts cleanly at every step boundary.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Very high', detail: 'Format is a constraint, not a theme. Effectively unlimited.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Weeknight cooking → mapped', detail: 'Highest-CPM food subcategory we sell.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'Regional specificity with no competing account above 200K.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 6, note: 'No provider footprint on any surface.', observedAt: '2026-07-30', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'No domain. Bio links straight to Instagram.', observedAt: '2026-07-30', source: 'crawl/whois' },
      { item: 'Storefront', state: PRESENT, surfacesChecked: 5, note: 'Gumroad — 1 unlisted product, dormant 8 months.', observedAt: '2026-07-30', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2026-07-30', source: 'crawl/membership' },
      { item: 'Sponsorship', state: PRESENT, surfacesChecked: 1, note: '2 gifted posts, no ongoing relationship detected.', observedAt: '2026-07-30', source: 'crawl/disclosure' }
    ],
    evidence: [
      { kind: 'comment', quote: 'PLEASE make a book. my mother does not use instagram and she needs these.', platform: 'Instagram', url: 'instagram.com/p/C9r…', observedAt: '2026-07-25', engine: 'llm', label: 'purchase intent' },
      { kind: 'comment', quote: 'is there a website with all of them in one place? i keep losing the reels', platform: 'Instagram', url: 'instagram.com/p/C9m…', observedAt: '2026-07-09', engine: 'llm', label: 'subscribe intent' },
      { kind: 'caption', quote: 'filming these after a 10 hour shift is starting to catch up with me, be patient with me', platform: 'Instagram', url: 'instagram.com/p/C9p…', observedAt: '2026-07-16', engine: 'llm', label: 'capacity strain' },
      { kind: 'caption', quote: 'i genuinely do not know how people do this full time and also sleep', platform: 'TikTok', url: 'tiktok.com/@thesundaypot/video/7391…', observedAt: '2026-06-21', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'Jollof, 38 minutes, one pot', platform: 'Instagram', metric: '6.4M views', length: '0:58', tone: 0.3, observedAt: '2026-07-25' },
      { title: 'Egusi on a Tuesday', platform: 'Instagram', metric: '3.8M views', length: '1:04', tone: 0.65, observedAt: '2026-07-02' },
      { title: 'The pot my mother gave me', platform: 'TikTok', metric: '2.2M views', length: '1:47', tone: 0.9, observedAt: '2026-06-11' }
    ],
    play: { id: 'commerce', label: 'Storefront / commerce (Encore)', why: 'The stated ask is a physical object — a bound collection — and it recurs across a thousand comments. Encore ships it without him touching fulfilment, which is the constraint that matters given the day job.' },
    status: 'in_drop', resurfaced: null, passed: null, promoted: null,
    outreach: {
      subject: 'The book your comments keep asking for',
      opener: 'Your audience has asked for a bound collection over a thousand times in ninety days. We make and ship that; you approve the recipes and keep filming.',
      bullets: ['1,180 purchase-intent comments in 90 days', 'No newsletter, no site — 10 surfaces checked', 'Encore handles production, fulfilment and support end to end'],
      close: 'Worth fifteen minutes?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  });

  candidates.push({
    id: 'c_nell',
    name: 'Nell Braddock', handle: '@nellbraddock', initials: 'NB', accent: '#7A6A4F',
    headline: 'Cooks from index cards found in estate sales, then traces who wrote them.',
    mandateId: 'm_food', primaryPlatform: 'YouTube',
    platforms: [
      { name: 'YouTube', handle: 'Nell Braddock', followers: 1240000, url: 'youtube.com/@nellbraddock', matchConfidence: 1.0 },
      { name: 'TikTok', handle: '@nellbraddock', followers: 402000, url: 'tiktok.com/@nellbraddock', matchConfidence: 0.96 },
      { name: 'Instagram', handle: '@nell.braddock', followers: 88000, url: 'instagram.com/nell.braddock', matchConfidence: 0.71 }
    ],
    audience: { total: 1730000, growth90d: 0.12 },
    score: 79, scoreDelta: -2, confidence: 0.81,
    pillars: {
      gap: {
        score: 47, max: 60, engine: 'rule', coverage: 0.82,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'No newsletter; site is a placeholder', weightPct: 45, detail: 'Domain registered 2025, single-page "coming soon" unchanged for 14 months.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '6 disclosures / last 60 videos', weightPct: 30, detail: 'Ad-hoc integrations, three different brands, no repeat. Unmanaged.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '860 archive-access requests', weightPct: 25, detail: 'Dominant ask is access to the card archive itself, not the recipes.' }
        ]
      },
      strain: {
        score: 30, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'Site dormant 14mo', weightPct: 35, detail: 'Placeholder page, unchanged since registration.' },
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '1.4% reply rate', weightPct: 30, detail: 'Comment volume up 3× year over year, replies flat.' },
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−15% vs baseline', weightPct: 25, detail: 'Mild. Long-form cadence is inherently lumpy.' },
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '1 marker', weightPct: 10, detail: 'One reference to archive backlog.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Medium', detail: 'Long-form narrative; strong pull-quotes but needs a cut pass.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Card → dish → who wrote it. Structurally identical every episode.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Food heritage → mapped', detail: 'Adjacent to two existing Paradium verticals.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Very high', detail: 'No comparable account at any scale.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 6, note: 'None on any provider.', observedAt: '2026-07-28', source: 'crawl/owned-check' },
      { item: 'Website', state: PRESENT, surfacesChecked: 4, note: 'nellbraddock.com — placeholder, dormant 14 months.', observedAt: '2026-07-28', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-28', source: 'crawl/commerce' },
      { item: 'Membership', state: UNKNOWN, surfacesChecked: 2, note: 'YouTube membership tab not resolvable at this tier.', observedAt: '2026-07-28', source: 'crawl/membership' },
      { item: 'Archive / digital product', state: ABSENT, surfacesChecked: 3, note: 'The single most-requested thing does not exist.', observedAt: '2026-07-28', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'is the archive online anywhere? i would pay real money to just browse the cards.', platform: 'YouTube', url: 'youtube.com/watch?v=Qk…', observedAt: '2026-07-19', engine: 'llm', label: 'purchase intent' },
      { kind: 'comment', quote: 'my grandmother has a tin exactly like this. is there a place to submit them to you?', platform: 'YouTube', url: 'youtube.com/watch?v=Rf…', observedAt: '2026-07-06', engine: 'llm', label: 'contribution intent' },
      { kind: 'caption', quote: 'I have about 400 cards backlogged and no system. Suggestions welcome, genuinely.', platform: 'YouTube', url: 'youtube.com/watch?v=Tp…', observedAt: '2026-05-30', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'A card signed only "R.H., 1954"', platform: 'YouTube', metric: '3.1M views', length: '22:14', tone: 0.15, observedAt: '2026-07-19' },
      { title: 'I found her granddaughter', platform: 'YouTube', metric: '5.9M views', length: '28:40', tone: 0.5, observedAt: '2026-06-14' },
      { title: 'Estate sale haul, 1930s tin', platform: 'TikTok', metric: '1.4M views', length: '2:03', tone: 0.85, observedAt: '2026-07-01' }
    ],
    play: { id: 'site', label: 'Standalone site + O&O ads', why: 'The most-requested asset is a searchable archive — that is a destination, not a list. It also solves her stated backlog problem, which is the fastest way to a yes.' },
    status: 'in_drop', resurfaced: null, passed: null, promoted: null,
    outreach: {
      subject: 'A home for the 400 backlogged cards',
      opener: 'You said you have roughly four hundred cards and no system. We build the archive, run it, and put your name on it.',
      bullets: ['860 comments in 90 days asking for archive access', 'Site has been a placeholder for 14 months', 'We run the platform and the ad stack; you keep filming'],
      close: 'Fifteen minutes?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  });

  candidates.push({
    id: 'c_priya',
    name: 'Priya Raghunathan', handle: '@tiffinlogic', initials: 'PR', accent: '#2F6F62',
    headline: 'Meal systems, not meals. Four containers, five days, one shopping list.',
    mandateId: 'm_food', primaryPlatform: 'TikTok',
    platforms: [
      { name: 'TikTok', handle: '@tiffinlogic', followers: 388000, url: 'tiktok.com/@tiffinlogic', matchConfidence: 1.0 },
      { name: 'Instagram', handle: '@tiffinlogic', followers: 141000, url: 'instagram.com/tiffinlogic', matchConfidence: 0.98 }
    ],
    audience: { total: 529000, growth90d: 0.52 },
    score: 76, scoreDelta: 6, confidence: 0.86,
    pillars: {
      gap: {
        score: 49, max: 60, engine: 'rule', coverage: 0.88,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '8 of 9 surfaces resolved absent.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 90 posts', weightPct: 30, detail: 'Zero commercial activity of any kind.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '740 template requests', weightPct: 25, detail: 'The ask is specifically for the printable, which she posts as a screenshot.' }
        ]
      },
      strain: {
        score: 24, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '4.2% reply rate', weightPct: 35, detail: 'Falling but still engaged.' },
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−9% vs baseline', weightPct: 30, detail: 'Marginal.' },
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '2 markers', weightPct: 25, detail: 'Both about the manual work of remaking the same printable weekly.' },
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'No dead links.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Numbered-step structure.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Very high', detail: 'A system generator, not a recipe feed.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Meal planning → mapped', detail: 'Strong subscription conversion in this subcategory.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Medium-high', detail: 'Crowded space, but the systems framing is unusual.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 6, note: 'None.', observedAt: '2026-07-30', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-30', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-30', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2026-07-30', source: 'crawl/membership' },
      { item: 'Template / digital product', state: UNKNOWN, surfacesChecked: 1, note: 'Gumroad search inconclusive under alternate name.', observedAt: '2026-07-30', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'can you make the sheet downloadable instead of a screenshot, i am begging', platform: 'TikTok', url: 'tiktok.com/@tiffinlogic/video/7409…', observedAt: '2026-07-27', engine: 'llm', label: 'purchase intent' },
      { kind: 'comment', quote: 'i would subscribe monthly just to get this sent to me on sundays', platform: 'TikTok', url: 'tiktok.com/@tiffinlogic/video/7402…', observedAt: '2026-07-13', engine: 'llm', label: 'subscribe intent' },
      { kind: 'caption', quote: 'remaking this sheet every week by hand is not sustainable lol send help', platform: 'Instagram', url: 'instagram.com/p/C9t…', observedAt: '2026-07-20', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'Five days, four containers, one list', platform: 'TikTok', metric: '4.7M views', length: '1:22', tone: 0.25, observedAt: '2026-07-27' },
      { title: 'The Sunday reset', platform: 'TikTok', metric: '2.9M views', length: '0:51', tone: 0.6, observedAt: '2026-07-06' },
      { title: 'Why meal prep fails on Wednesday', platform: 'Instagram', metric: '980K views', length: '1:38', tone: 0.95, observedAt: '2026-06-25' }
    ],
    play: { id: 'membership', label: 'Membership / community', why: 'The audience has named the price and the cadence themselves — a weekly delivered plan. Recurring beats one-off here because the product is the refresh, not the file.' },
    status: 'in_drop', resurfaced: null, passed: null, promoted: null,
    outreach: {
      subject: 'The sheet, delivered on Sundays',
      opener: 'Your comments have priced and scheduled the product for you: a weekly plan, delivered. We build and run it.',
      bullets: ['740 requests for the printable in 90 days', 'Nothing owned — 9 surfaces checked', 'You stop remaking the sheet by hand'],
      close: 'Fifteen minutes this week?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  });

  candidates.push({
    id: 'c_otto',
    name: 'Otto Lindqvist', handle: '@coldsmokeotto', initials: 'OL', accent: '#4A6B84',
    headline: 'Cold smoking and curing from a shed in northern Minnesota. Deeply unhurried.',
    mandateId: 'm_food', primaryPlatform: 'YouTube',
    platforms: [
      { name: 'YouTube', handle: 'Cold Smoke Otto', followers: 254000, url: 'youtube.com/@coldsmokeotto', matchConfidence: 1.0 },
      { name: 'Instagram', handle: '@coldsmokeotto', followers: 61000, url: 'instagram.com/coldsmokeotto', matchConfidence: 0.94 }
    ],
    audience: { total: 315000, growth90d: 0.19 },
    score: 74, scoreDelta: null, confidence: 0.79,
    pillars: {
      gap: {
        score: 46, max: 60, engine: 'rule', coverage: 0.8,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '8 of 10 surfaces resolved absent.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '1 disclosure / 60 videos', weightPct: 30, detail: 'A single knife brand, eighteen months ago.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '410 purchase-intent comments', weightPct: 25, detail: 'Lower volume, but unusually high intent density — people asking to buy the cured product itself.' }
        ]
      },
      strain: {
        score: 26, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−22% vs baseline', weightPct: 35, detail: 'Seasonal, but below prior-year same-quarter.' },
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '6.8% reply rate', weightPct: 30, detail: 'Still replying, but volume is outpacing him.' },
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '2 markers', weightPct: 25, detail: 'Both about shipping requests he cannot legally fulfil.' },
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'No dead links.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Medium', detail: 'Slow pacing; requires a cut pass but the payoff shots are strong.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Seasonal cycle gives natural annual structure.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Craft food → mapped', detail: 'Premium-CPM niche, low supply.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Very high', detail: 'Almost no competition at this production quality.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 6, note: 'None.', observedAt: '2026-07-27', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-27', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None. He has stated he cannot ship cured product across state lines.', observedAt: '2026-07-27', source: 'crawl/commerce' },
      { item: 'Membership', state: UNKNOWN, surfacesChecked: 2, note: 'Inconclusive.', observedAt: '2026-07-27', source: 'crawl/membership' },
      { item: 'Equipment / kit', state: ABSENT, surfacesChecked: 3, note: 'The buildable product does not exist.', observedAt: '2026-07-27', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'do you ship? i will drive to minnesota. i am not joking.', platform: 'YouTube', url: 'youtube.com/watch?v=Vm…', observedAt: '2026-07-21', engine: 'llm', label: 'purchase intent' },
      { kind: 'comment', quote: 'sell the cold smoke box plans. take my money.', platform: 'YouTube', url: 'youtube.com/watch?v=Wn…', observedAt: '2026-06-30', engine: 'llm', label: 'purchase intent' },
      { kind: 'caption', quote: 'I get asked to ship every single day and I have to say no every single day.', platform: 'YouTube', url: 'youtube.com/watch?v=Xr…', observedAt: '2026-07-08', engine: 'llm', label: 'unfulfilled demand' }
    ],
    samples: [
      { title: 'Sixty days of cold smoke', platform: 'YouTube', metric: '2.4M views', length: '31:02', tone: 0.1, observedAt: '2026-07-21' },
      { title: 'Building the box', platform: 'YouTube', metric: '1.8M views', length: '24:55', tone: 0.45, observedAt: '2026-05-19' },
      { title: 'The shed in February', platform: 'Instagram', metric: '420K views', length: '0:44', tone: 0.75, observedAt: '2026-02-11' }
    ],
    play: { id: 'commerce', label: 'Storefront / commerce (Encore)', why: 'He turns down purchase requests daily for a regulatory reason we can solve — kit and equipment, not perishables. Encore ships the box; he never handles a package.' },
    status: 'in_drop', resurfaced: null, passed: null, promoted: null,
    outreach: {
      subject: 'You say no to this every day',
      opener: 'You have said you get asked to ship daily and have to decline daily. We can sell the thing you actually can ship — the box, the plans, the kit — and handle all of it.',
      bullets: ['410 high-intent purchase requests in 90 days', 'Nothing owned across 10 surfaces', 'Encore takes production, compliance and fulfilment'],
      close: 'Fifteen minutes?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  });

  candidates.push({
    id: 'c_bex',
    name: 'Bex Ferreira', handle: '@counterculturebex', initials: 'BF', accent: '#8A5A9B',
    headline: 'Fermentation, with the failures left in. Runs a 4,000-person Discord by hand.',
    mandateId: 'm_food', primaryPlatform: 'TikTok',
    platforms: [
      { name: 'TikTok', handle: '@counterculturebex', followers: 505000, url: 'tiktok.com/@counterculturebex', matchConfidence: 1.0 },
      { name: 'Instagram', handle: '@counterculture.bex', followers: 97000, url: 'instagram.com/counterculture.bex', matchConfidence: 0.89 }
    ],
    audience: { total: 602000, growth90d: 0.23 },
    score: 72, scoreDelta: 3, confidence: 0.75,
    pillars: {
      gap: {
        score: 44, max: 60, engine: 'rule', coverage: 0.78,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Discord only — unmonetized', weightPct: 45, detail: 'A 4,000-member free Discord is the only owned surface. No list, no site.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 90 posts', weightPct: 30, detail: 'None.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '520 purchase-intent comments', weightPct: 25, detail: 'Starter cultures and a paid tier are the two named asks.' }
        ]
      },
      strain: {
        score: 28, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '3 markers', weightPct: 35, detail: 'All three about moderating the Discord alone.' },
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '3.1% reply rate', weightPct: 30, detail: 'Collapsed as the Discord grew.' },
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−18% vs baseline', weightPct: 25, detail: 'Consistent decline since March.' },
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'No dead links.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Failure-reveal structure is inherently a hook.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Ferment → wait → reveal. Endless.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Fermentation → mapped', detail: 'Small but high-conversion vertical.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'The failures-included editorial stance is rare.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-26', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-26', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-26', source: 'crawl/commerce' },
      { item: 'Membership', state: PRESENT, surfacesChecked: 3, note: 'Discord, 4,102 members, free, moderated solo.', observedAt: '2026-07-26', source: 'crawl/membership' },
      { item: 'Cultures / product', state: UNKNOWN, surfacesChecked: 2, note: 'Inconclusive — possible Etsy under a different name.', observedAt: '2026-07-26', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'would 100% pay for a paid discord tier if it meant you got help modding', platform: 'TikTok', url: 'tiktok.com/@counterculturebex/video/7407…', observedAt: '2026-07-24', engine: 'llm', label: 'subscribe intent' },
      { kind: 'comment', quote: 'do you sell starters? the ones from the video?', platform: 'TikTok', url: 'tiktok.com/@counterculturebex/video/7400…', observedAt: '2026-07-10', engine: 'llm', label: 'purchase intent' },
      { kind: 'caption', quote: 'the discord has gotten away from me. i am one person and i moderate at midnight.', platform: 'TikTok', url: 'tiktok.com/@counterculturebex/video/7404…', observedAt: '2026-07-17', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'Six weeks of kimchi, including the one that died', platform: 'TikTok', metric: '3.3M views', length: '2:11', tone: 0.35, observedAt: '2026-07-24' },
      { title: 'My starter is older than my lease', platform: 'TikTok', metric: '1.9M views', length: '1:04', tone: 0.7, observedAt: '2026-06-18' },
      { title: 'Discord Q&A: mould vs kahm', platform: 'Instagram', metric: '310K views', length: '3:20', tone: 0.9, observedAt: '2026-05-29' }
    ],
    play: { id: 'membership', label: 'Membership / community', why: 'The community already exists at 4,000 people and is actively costing her sleep. Converting it to a paid tier we operate solves her problem and monetises the asset she already built.' },
    status: 'in_drop', resurfaced: null, passed: null, promoted: null,
    outreach: {
      subject: 'Help moderating, and a tier that pays for it',
      opener: 'You said the Discord has gotten away from you and that you moderate at midnight. We staff it, run a paid tier, and you get your evenings back.',
      bullets: ['4,102 free members already assembled', '520 comments asking to pay', 'We operate the community; you stay the voice'],
      close: 'Fifteen minutes?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  });

  candidates.push({
    id: 'c_hollis',
    name: 'Hollis Yun', handle: '@hollisyun', initials: 'HY', accent: '#3F5A8A',
    headline: 'Pastry as physics. Explains why it failed, with a thermometer.',
    mandateId: 'm_food', primaryPlatform: 'Instagram',
    platforms: [
      { name: 'Instagram', handle: '@hollisyun', followers: 176000, url: 'instagram.com/hollisyun', matchConfidence: 1.0 },
      { name: 'TikTok', handle: '@hollisyunbakes', followers: 54000, url: 'tiktok.com/@hollisyunbakes', matchConfidence: 0.68 }
    ],
    audience: { total: 230000, growth90d: 0.61 },
    score: 71, scoreDelta: 9, confidence: 0.73,
    pillars: {
      gap: {
        score: 45, max: 60, engine: 'rule', coverage: 0.76,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '7 of 9 surfaces resolved absent.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 90 posts', weightPct: 30, detail: 'None.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '290 purchase-intent comments', weightPct: 25, detail: 'Lower absolute volume — smaller account — but rising steeply.' }
        ]
      },
      strain: {
        score: 22, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '8.4% reply rate', weightPct: 35, detail: 'Still healthy. Growth is outpacing capacity though.' },
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−6% vs baseline', weightPct: 30, detail: 'Marginal.' },
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '2 markers', weightPct: 25, detail: 'Both about DM volume.' },
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Diagnostic format, self-contained.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Very high', detail: 'Failure → cause → fix. Infinite supply of failures.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Baking education → mapped', detail: 'Direct fit with an existing slate.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Medium-high', detail: 'The instrumentation angle is unusual; the category is not.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-29', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-29', source: 'crawl/whois' },
      { item: 'Storefront', state: UNKNOWN, surfacesChecked: 3, note: 'Inconclusive.', observedAt: '2026-07-29', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2026-07-29', source: 'crawl/membership' },
      { item: 'Course', state: UNKNOWN, surfacesChecked: 1, note: 'Inconclusive — teaching platforms not covered at this tier.', observedAt: '2026-07-29', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'is there a course. please say there is a course.', platform: 'Instagram', url: 'instagram.com/p/C9v…', observedAt: '2026-07-28', engine: 'llm', label: 'purchase intent' },
      { kind: 'comment', quote: 'i would read a weekly email of just these. every single week.', platform: 'Instagram', url: 'instagram.com/p/C9u…', observedAt: '2026-07-15', engine: 'llm', label: 'subscribe intent' },
      { kind: 'caption', quote: 'my dms are at 900 unread and they are all good questions and I feel awful', platform: 'Instagram', url: 'instagram.com/p/C9s…', observedAt: '2026-07-12', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'Why your ganache split (it is 3°C)', platform: 'Instagram', metric: '1.7M views', length: '1:31', tone: 0.4, observedAt: '2026-07-28' },
      { title: 'Choux, four failures, one fix', platform: 'Instagram', metric: '1.1M views', length: '2:09', tone: 0.6, observedAt: '2026-07-05' },
      { title: 'The thermometer changes everything', platform: 'TikTok', metric: '640K views', length: '0:58', tone: 0.85, observedAt: '2026-06-22' }
    ],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'The audience explicitly asked for a weekly written version and she is drowning in DMs that a published answer would absorb. The list is the relief valve and the asset simultaneously.' },
    status: 'in_drop', resurfaced: null, passed: null, promoted: null,
    outreach: {
      subject: '900 unread DMs, one weekly email',
      opener: 'You mentioned 900 unread DMs of good questions. A weekly written diagnostic answers them once instead of nine hundred times — and it is also the asset.',
      bullets: ['290 requests for a course or an email, growing fast', 'Nothing owned across 9 surfaces', 'We write, produce and sell against it'],
      close: 'Fifteen minutes?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  });

  // ---- RESURFACED into today's drop -------------------------------------

  candidates.push({
    id: 'c_junie',
    name: 'Junie Castellanos', handle: '@junie.does.dinner', initials: 'JC', accent: '#C4472C',
    headline: 'Dinner for one, unapologetically. Was watched since March.',
    mandateId: 'm_food', primaryPlatform: 'TikTok',
    platforms: [
      { name: 'TikTok', handle: '@junie.does.dinner', followers: 447000, url: 'tiktok.com/@junie.does.dinner', matchConfidence: 1.0 },
      { name: 'Instagram', handle: '@juniedoesdinner', followers: 118000, url: 'instagram.com/juniedoesdinner', matchConfidence: 0.95 }
    ],
    audience: { total: 565000, growth90d: 0.28 },
    score: 81, scoreDelta: 17, confidence: 0.9,
    pillars: {
      gap: {
        score: 50, max: 60, engine: 'rule', coverage: 0.92,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '11 of 12 surfaces resolved absent.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 90 posts', weightPct: 30, detail: 'None.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '980 purchase-intent comments', weightPct: 25, detail: 'Up 140% since first scored in March.' }
        ]
      },
      strain: {
        score: 31, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '5 markers — NEW', weightPct: 35, detail: 'Five capacity markers in 30 days. In March there were zero. This is the trigger.' },
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−37% vs baseline', weightPct: 30, detail: 'Was −4% at first scoring.' },
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '1.8% reply rate', weightPct: 25, detail: 'Was 14% in March.' },
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Very high', detail: 'Short, punchy, self-contained.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'One person, one dinner, one opinion.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Solo cooking → mapped', detail: 'Underserved and growing.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'Voice-led; the stance is the differentiator.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 6, note: 'None.', observedAt: '2026-07-30', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-30', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-30', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2026-07-30', source: 'crawl/membership' },
      { item: 'Sponsorship', state: ABSENT, surfacesChecked: 1, note: 'Zero disclosures in 90 posts.', observedAt: '2026-07-30', source: 'crawl/disclosure' }
    ],
    evidence: [
      { kind: 'caption', quote: 'I have been doing this five nights a week for two years and I am so tired. not quitting. just saying it out loud.', platform: 'TikTok', url: 'tiktok.com/@junie.does.dinner/video/7411…', observedAt: '2026-07-26', engine: 'llm', label: 'capacity strain — acute' },
      { kind: 'caption', quote: 'if anyone knows how to make this an actual job please tell me because I am guessing', platform: 'TikTok', url: 'tiktok.com/@junie.does.dinner/video/7410…', observedAt: '2026-07-23', engine: 'llm', label: 'operator appetite' },
      { kind: 'comment', quote: 'take my money. newsletter. book. anything.', platform: 'TikTok', url: 'tiktok.com/@junie.does.dinner/video/7411…', observedAt: '2026-07-26', engine: 'llm', label: 'purchase intent' }
    ],
    samples: [
      { title: 'Dinner for one, night 612', platform: 'TikTok', metric: '5.1M views', length: '1:09', tone: 0.3, observedAt: '2026-07-26' },
      { title: 'You do not need to cook for anyone', platform: 'TikTok', metric: '3.4M views', length: '0:47', tone: 0.65, observedAt: '2026-07-02' },
      { title: 'Two years of this', platform: 'Instagram', metric: '890K views', length: '2:22', tone: 0.9, observedAt: '2026-06-08' }
    ],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'She asked, publicly and this week, how to make this an actual job. That is the whole pitch answered before we make it.' },
    status: 'in_drop',
    resurfaced: { reason: 'Strain trigger fired', trigger: 'Self-reported strain 0 → 5 markers in 30 days; cadence −37%', since: '2026-03-14', previousScore: 64 },
    passed: null, promoted: null,
    outreach: {
      subject: 'You asked how to make this an actual job',
      opener: 'Three days ago you said publicly that you are guessing at how to make this a job. That is literally what we do — we build and run the business, you keep making the thing.',
      bullets: ['Asked publicly this week how to turn it into a job', '980 purchase-intent comments, up 140% since March', 'Nothing owned — 12 surfaces checked'],
      close: 'Fifteen minutes this week? The window on this one is now.'
    },
    outcome: null, asOf: '2026-07-31',
    alert: { level: 'acute', text: 'Public operator-appetite statement 3 days ago. Windows like this close in weeks.', at: '2026-07-28' }
  });

  candidates.push({
    id: 'c_wes',
    name: 'Wes Tallow', handle: '@tallowandthyme', initials: 'WT', accent: '#6B7A3F',
    headline: 'Whole-animal butchery for home cooks. Passed in January at 94K — now 310K.',
    mandateId: 'm_food', primaryPlatform: 'YouTube',
    platforms: [
      { name: 'YouTube', handle: 'Tallow & Thyme', followers: 310000, url: 'youtube.com/@tallowandthyme', matchConfidence: 1.0 },
      { name: 'Instagram', handle: '@tallowandthyme', followers: 72000, url: 'instagram.com/tallowandthyme', matchConfidence: 0.93 }
    ],
    audience: { total: 382000, growth90d: 0.88 },
    score: 73, scoreDelta: 21, confidence: 0.84,
    pillars: {
      gap: {
        score: 46, max: 60, engine: 'rule', coverage: 0.86,
        subsignals: [
          { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '9 of 10 surfaces resolved absent.' },
          { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '1 disclosure / 40 videos', weightPct: 30, detail: 'A single knife sponsorship.' },
          { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '620 purchase-intent comments', weightPct: 25, detail: 'Requests for a butchery course dominate.' }
        ]
      },
      strain: {
        score: 27, max: 40, engine: 'rule+llm',
        subsignals: [
          { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '2.6% reply rate', weightPct: 35, detail: 'Collapsed as the audience tripled.' },
          { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−11% vs baseline', weightPct: 30, detail: 'Mild.' },
          { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '2 markers', weightPct: 25, detail: 'Both about balancing the shop with filming.' },
          { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
        ]
      },
      fit: {
        verdict: 'pass', engine: 'llm',
        subsignals: [
          { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Technique segments cut cleanly.' },
          { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Cut → cook → explain.' },
          { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Butchery → mapped', detail: 'Adjacent to an existing vertical.' },
          { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'Working butcher, not a hobbyist. Credibility is the moat.' }
        ]
      }
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-29', source: 'crawl/owned-check' },
      { item: 'Website', state: PRESENT, surfacesChecked: 4, note: 'Butcher-shop site. No creator commerce, no list capture.', observedAt: '2026-07-29', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'Shop site sells no online product.', observedAt: '2026-07-29', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2026-07-29', source: 'crawl/membership' },
      { item: 'Course', state: ABSENT, surfacesChecked: 3, note: 'The most-requested product does not exist.', observedAt: '2026-07-29', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'a real course on breaking down a lamb. i would pay $400 for that today.', platform: 'YouTube', url: 'youtube.com/watch?v=Ys…', observedAt: '2026-07-20', engine: 'llm', label: 'purchase intent' },
      { kind: 'comment', quote: 'do you ship the sausage? anywhere? at all?', platform: 'YouTube', url: 'youtube.com/watch?v=Zt…', observedAt: '2026-07-03', engine: 'llm', label: 'purchase intent' },
      { kind: 'caption', quote: 'six days in the shop and then filming on sunday is not a long term plan', platform: 'Instagram', url: 'instagram.com/p/C9w…', observedAt: '2026-06-27', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'A whole lamb, start to finish', platform: 'YouTube', metric: '4.2M views', length: '46:11', tone: 0.2, observedAt: '2026-07-20' },
      { title: 'The cut your butcher will not sell you', platform: 'YouTube', metric: '2.7M views', length: '18:33', tone: 0.55, observedAt: '2026-06-15' },
      { title: 'Sunday in the shop', platform: 'Instagram', metric: '510K views', length: '1:14', tone: 0.85, observedAt: '2026-05-31' }
    ],
    play: { id: 'site', label: 'Standalone site + O&O ads', why: 'A destination that hosts the course library and the shop together. He already has a business; what he lacks is a place on the internet that is his.' },
    status: 'in_drop',
    resurfaced: { reason: 'Passed "too small" — audience threshold crossed', trigger: 'Audience 94K → 310K since 2026-01-22 pass. Suppression rule expired.', since: '2026-01-22', previousScore: 52 },
    passed: null, promoted: null,
    outreach: {
      subject: 'A place on the internet that is yours',
      opener: 'The shop is the business but the audience has nowhere to go. We build the destination, host the course people keep asking for, and run the ad stack.',
      bullets: ['Audience tripled in six months', '620 comments asking for a course that does not exist', 'No newsletter, no creator commerce'],
      close: 'Fifteen minutes?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  });

  // ---- m_making drop, as of 2026-07-31 (3 names, lighter depth) ---------

  function light(o) {
    // fills the required shape with sensible defaults so every card renders
    return Object.assign({
      scoreDelta: null, confidence: 0.8, resurfaced: null, passed: null,
      promoted: null, outcome: null, asOf: '2026-07-31', alert: null,
      samples: [], evidence: [], inventory: []
    }, o);
  }

  candidates.push(light({
    id: 'c_ilse', name: 'Ilse Wouters', handle: '@wouterswoodshop', initials: 'IW', accent: '#8A6A3A',
    headline: 'Restores broken chairs sent in by strangers. Never charges.',
    mandateId: 'm_making', primaryPlatform: 'YouTube',
    platforms: [{ name: 'YouTube', handle: 'Wouters Woodshop', followers: 890000, url: 'youtube.com/@wouterswoodshop', matchConfidence: 1.0 }],
    audience: { total: 890000, growth90d: 0.17 },
    score: 82, scoreDelta: 5, confidence: 0.87,
    pillars: {
      gap: { score: 52, max: 60, engine: 'rule', coverage: 0.9, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '9 of 10 surfaces resolved absent.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 50 videos', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '1,340 purchase-intent comments', weightPct: 25, detail: 'People asking to pay for restoration and for tool lists.' }
      ]},
      strain: { score: 30, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '4 markers', weightPct: 35, detail: 'Repeated statements about the backlog of mailed-in chairs.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−24% vs baseline', weightPct: 30, detail: 'Steady decline since April.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '1.1% reply rate', weightPct: 25, detail: 'Effectively stopped.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Very high', detail: 'Before/after is the native unit.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Very high', detail: 'Chair in, chair out.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Restoration → mapped', detail: 'Strong fit.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Very high', detail: 'The never-charges premise is the entire story.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-28', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-28', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-28', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2026-07-28', source: 'crawl/membership' }
    ],
    evidence: [
      { kind: 'comment', quote: 'name a price. any price. my grandfather made this chair.', platform: 'YouTube', url: 'youtube.com/watch?v=Ab…', observedAt: '2026-07-17', engine: 'llm', label: 'purchase intent' },
      { kind: 'caption', quote: 'the garage has forty chairs in it and I have not opened the mail in a month', platform: 'YouTube', url: 'youtube.com/watch?v=Bc…', observedAt: '2026-07-09', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'A chair that survived a house fire', platform: 'YouTube', metric: '9.8M views', length: '34:20', tone: 0.25, observedAt: '2026-07-17' },
      { title: 'Forty chairs in the garage', platform: 'YouTube', metric: '2.2M views', length: '11:48', tone: 0.7, observedAt: '2026-07-09' }
    ],
    play: { id: 'membership', label: 'Membership / community', why: 'The queue is the product. A paid submission tier funds the work and clears the backlog she has publicly said is crushing her.' },
    status: 'in_drop',
    outreach: { subject: 'Forty chairs in the garage', opener: 'You said the garage has forty chairs and the mail is unopened. A paid submission queue solves the backlog and pays for the shop.', bullets: ['1,340 comments offering to pay', 'Nothing owned across 10 surfaces', 'We run the queue, the payments and the ops'], close: 'Fifteen minutes?' }
  }));

  candidates.push(light({
    id: 'c_ardash', name: 'Ardash Melkonian', handle: '@thegildersbench', initials: 'AM', accent: '#9A7B33',
    headline: 'Gold leaf, picture frames, third-generation bench. Silent videos.',
    mandateId: 'm_making', primaryPlatform: 'TikTok',
    platforms: [{ name: 'TikTok', handle: '@thegildersbench', followers: 1120000, url: 'tiktok.com/@thegildersbench', matchConfidence: 1.0 }],
    audience: { total: 1120000, growth90d: 0.34 },
    score: 77, confidence: 0.82,
    pillars: {
      gap: { score: 48, max: 60, engine: 'rule', coverage: 0.85, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Trade site only, no creator surface', weightPct: 45, detail: 'A commissions page from 2011. No list, no store.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 90 posts', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '710 purchase-intent comments', weightPct: 25, detail: 'Requests for materials and for a class.' }
      ]},
      strain: { score: 25, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '0.4% reply rate', weightPct: 35, detail: 'He does not use the platform conversationally.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−19% vs baseline', weightPct: 30, detail: 'Steady decline.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '0 markers', weightPct: 25, detail: 'Silent format — no caption signal available. Reduces confidence.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'Site dormant 15yr', weightPct: 10, detail: 'Commissions page unchanged since 2011.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Very high', detail: 'Silent, visual, no language dependency.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Frame in, frame out.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Fine craft → mapped', detail: 'Premium adjacency.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Very high', detail: 'Essentially no competition.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-26', source: 'crawl/owned-check' },
      { item: 'Website', state: PRESENT, surfacesChecked: 4, note: 'Trade commissions page, last updated 2011.', observedAt: '2026-07-26', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-26', source: 'crawl/commerce' },
      { item: 'Class / course', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2026-07-26', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'where do you buy the leaf. i have searched for an hour. sell me a kit.', platform: 'TikTok', url: 'tiktok.com/@thegildersbench/video/7406…', observedAt: '2026-07-14', engine: 'llm', label: 'purchase intent' }
    ],
    samples: [
      { title: 'Water gilding, no narration', platform: 'TikTok', metric: '18.4M views', length: '2:44', tone: 0.3, observedAt: '2026-07-14' },
      { title: 'My grandfather’s burnisher', platform: 'TikTok', metric: '6.1M views', length: '1:02', tone: 0.8, observedAt: '2026-06-02' }
    ],
    play: { id: 'commerce', label: 'Storefront / commerce (Encore)', why: 'The single repeated ask is a materials kit — a product with no fulfilment burden for him. It also requires nothing of a man who clearly does not want to be a poster.' },
    status: 'in_drop',
    outreach: { subject: 'The kit people keep asking for', opener: 'Your comments have asked for a materials kit hundreds of times. We make it, sell it and ship it. You keep gilding.', bullets: ['710 purchase-intent comments in 90 days', 'No newsletter, no store', 'Zero fulfilment burden on your bench'], close: 'Fifteen minutes?' }
  }));

  candidates.push(light({
    id: 'c_mirela', name: 'Mirela Petran', handle: '@petranrestores', initials: 'MP', accent: '#5A7A6B',
    headline: 'Rescues water-damaged books. Explains the chemistry as she goes.',
    mandateId: 'm_making', primaryPlatform: 'Instagram',
    platforms: [{ name: 'Instagram', handle: '@petranrestores', followers: 412000, url: 'instagram.com/petranrestores', matchConfidence: 1.0 }],
    audience: { total: 412000, growth90d: 0.41 },
    score: 71, confidence: 0.71,
    pillars: {
      gap: { score: 44, max: 60, engine: 'rule', coverage: 0.72, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '6 of 9 surfaces resolved absent. Coverage is thin — treat with care.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 60 posts', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '380 purchase-intent comments', weightPct: 25, detail: 'Requests to send books in.' }
      ]},
      strain: { score: 27, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '3.4% reply rate', weightPct: 35, detail: 'Falling.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−26% vs baseline', weightPct: 30, detail: 'Notable.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '2 markers', weightPct: 25, detail: 'About unanswerable restoration requests.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Transformation reveal.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Damage → method → result.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Conservation → mapped', detail: 'Niche but mapped.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'The chemistry narration is the differentiator.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-25', source: 'crawl/owned-check' },
      { item: 'Website', state: UNKNOWN, surfacesChecked: 2, note: 'Possible institutional page under maiden name. Inconclusive.', observedAt: '2026-07-25', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-25', source: 'crawl/commerce' },
      { item: 'Membership', state: UNKNOWN, surfacesChecked: 1, note: 'Inconclusive.', observedAt: '2026-07-25', source: 'crawl/membership' }
    ],
    evidence: [
      { kind: 'comment', quote: 'my mother’s bible was in the flood. can i send it to you. i will pay whatever.', platform: 'Instagram', url: 'instagram.com/p/C9y…', observedAt: '2026-07-19', engine: 'llm', label: 'purchase intent' }
    ],
    samples: [
      { title: 'A 1903 atlas, six weeks of drying', platform: 'Instagram', metric: '2.8M views', length: '1:52', tone: 0.4, observedAt: '2026-07-19' }
    ],
    play: { id: 'site', label: 'Standalone site + O&O ads', why: 'The requests are for a service with a queue and an intake form — that is a destination. Coverage on this one is thin at 72%; verify the institutional page before contact.' },
    status: 'in_drop',
    outreach: { subject: 'An intake queue for the books people want to send', opener: 'People are asking to send you their damaged books. Right now there is nowhere to send them. We build the intake, the queue and the site.', bullets: ['380 requests to send work in', 'No owned surface — though coverage is 72%, verify first', 'We run intake, payments and the platform'], close: 'Fifteen minutes?' }
  }));

  // ============================================================ BACKTEST
  // ---- as of 2024-01-15, m_food. Outcome reveals are the demo. ----------

  function backtest(o) {
    return Object.assign({
      scoreDelta: null, resurfaced: null, passed: null, promoted: null,
      asOf: '2024-01-15', alert: null, status: 'in_drop',
      outreach: { subject: '', opener: '', bullets: [], close: '' }
    }, o);
  }

  candidates.push(backtest({
    id: 'b_ines', name: 'Ines Calvo-Werner', handle: '@inesmakesbread', initials: 'IC', accent: '#B8763A',
    headline: 'Sourdough in a studio apartment. 61K followers. Nobody has heard of her.',
    mandateId: 'm_food', primaryPlatform: 'Instagram',
    platforms: [{ name: 'Instagram', handle: '@inesmakesbread', followers: 61400, url: 'instagram.com/inesmakesbread', matchConfidence: 1.0 }],
    audience: { total: 61400, growth90d: 0.72 },
    score: 88, confidence: 0.91,
    pillars: {
      gap: { score: 56, max: 60, engine: 'rule', coverage: 0.93, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '10 of 11 surfaces resolved absent.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 90 posts', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '840 purchase-intent comments', weightPct: 25, detail: '840 on a 61K account. Intent density 4.1% — the highest in the cohort.' }
      ]},
      strain: { score: 32, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '4 markers', weightPct: 35, detail: 'Explicit about not being able to answer questions.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '5.2% reply rate', weightPct: 30, detail: 'Falling fast against 12× comment growth.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−31% vs baseline', weightPct: 25, detail: 'Sharp.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Tight, self-contained.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Very high', detail: 'One loaf, one lesson.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Bread → mapped', detail: 'Core vertical.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'The constraint — a studio apartment — is the identity.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 6, note: 'None.', observedAt: '2024-01-12', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2024-01-12', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2024-01-12', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2024-01-12', source: 'crawl/membership' },
      { item: 'Book / product', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2024-01-12', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'do you have a newsletter?? i need these written down somewhere', platform: 'Instagram', url: 'instagram.com/p/C2a…', observedAt: '2024-01-09', engine: 'llm', label: 'subscribe intent' },
      { kind: 'caption', quote: 'I cannot answer all of these questions, I am so sorry, I am one person with one oven', platform: 'Instagram', url: 'instagram.com/p/C2b…', observedAt: '2024-01-04', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'Sourdough in 400 square feet', platform: 'Instagram', metric: '1.9M views', length: '1:18', tone: 0.3, observedAt: '2024-01-09' },
      { title: 'The oven that ruined three loaves', platform: 'Instagram', metric: '760K views', length: '0:52', tone: 0.7, observedAt: '2023-12-14' }
    ],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'The single most-repeated comment is a request for a written, subscribable version. Highest intent density in the cohort at a fraction of the audience size.' },
    outcome: {
      window: '30 months later',
      followersNow: '2.4M across four platforms',
      built: ['Newsletter — 190K subscribers, paid tier', 'Two-book deal, first title a bestseller', 'A branded bakeware line'],
      headline: 'Warhol ranked her #1 at 61K followers. She now has 2.4M.',
      note: 'Everything Warhol said was missing is now the business. Someone else built it.'
    }
  }));

  candidates.push(backtest({
    id: 'b_roman', name: 'Roman Adeyemi', handle: '@thebrothbench', initials: 'RA', accent: '#A8503A',
    headline: 'Stock, broth and braises. 88K. Answers every comment personally.',
    mandateId: 'm_food', primaryPlatform: 'YouTube',
    platforms: [{ name: 'YouTube', handle: 'The Broth Bench', followers: 88200, url: 'youtube.com/@thebrothbench', matchConfidence: 1.0 }],
    audience: { total: 88200, growth90d: 0.49 },
    score: 84, confidence: 0.88,
    pillars: {
      gap: { score: 53, max: 60, engine: 'rule', coverage: 0.9, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '9 of 10 surfaces resolved absent.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 40 videos', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '590 purchase-intent comments', weightPct: 25, detail: 'Requests for a written reference.' }
      ]},
      strain: { score: 31, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '31% reply rate — unsustainable', weightPct: 35, detail: 'He answers nearly everything. At 5× the audience this breaks.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−26% vs baseline', weightPct: 30, detail: 'Already slipping under comment load.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '3 markers', weightPct: 25, detail: 'About time spent replying.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Medium', detail: 'Long-form, needs a cut pass.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'One liquid per episode.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Technique → mapped', detail: 'Core.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'Depth over breadth.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2024-01-11', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2024-01-11', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2024-01-11', source: 'crawl/commerce' },
      { item: 'Membership', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2024-01-11', source: 'crawl/membership' }
    ],
    evidence: [
      { kind: 'comment', quote: 'is any of this written down? i want to print it and put it on the fridge', platform: 'YouTube', url: 'youtube.com/watch?v=Cd…', observedAt: '2024-01-07', engine: 'llm', label: 'subscribe intent' },
      { kind: 'caption', quote: 'I spent four hours on comments yesterday and did not film anything', platform: 'YouTube', url: 'youtube.com/watch?v=De…', observedAt: '2023-12-29', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [{ title: 'Chicken stock, 40 hours', platform: 'YouTube', metric: '1.2M views', length: '27:44', tone: 0.35, observedAt: '2024-01-07' }],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'He is burning his production time answering comments. A written reference answers them once and becomes the asset.' },
    outcome: {
      window: '30 months later',
      followersNow: '1.1M on YouTube',
      built: ['Paid newsletter — reportedly five figures monthly', 'A branded stockpot with a cookware manufacturer'],
      headline: 'The written reference his audience asked for is now the business.',
      note: 'He built it himself, eleven months after this snapshot.'
    }
  }));

  candidates.push(backtest({
    id: 'b_fen', name: 'Fen Okonkwo', handle: '@fenferments', initials: 'FO', accent: '#6B8A4A',
    headline: 'Hot sauce and pepper mashes from a Baltimore rowhouse. 44K.',
    mandateId: 'm_food', primaryPlatform: 'TikTok',
    platforms: [{ name: 'TikTok', handle: '@fenferments', followers: 44100, url: 'tiktok.com/@fenferments', matchConfidence: 1.0 }],
    audience: { total: 44100, growth90d: 0.94 },
    score: 81, confidence: 0.83,
    pillars: {
      gap: { score: 51, max: 60, engine: 'rule', coverage: 0.86, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '8 of 9 surfaces resolved absent.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '1,100 purchase-intent comments', weightPct: 25, detail: 'Overwhelmingly "where do I buy the sauce".' }
      ]},
      strain: { score: 30, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '3 markers', weightPct: 35, detail: 'About cottage-food law and kitchen capacity.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '4.1% reply rate', weightPct: 30, detail: 'Collapsing under growth.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−12% vs baseline', weightPct: 25, detail: 'Mild.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Very high', detail: 'Short, colourful, high completion.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Pepper → mash → sauce.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Specialty food → mapped', detail: 'Commerce-native.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'Place-specific.' }
      ]}
    },
    inventory: [
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'The single most-requested thing does not exist.', observedAt: '2024-01-13', source: 'crawl/commerce' },
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2024-01-13', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2024-01-13', source: 'crawl/whois' },
      { item: 'Membership', state: UNKNOWN, surfacesChecked: 2, note: 'Inconclusive.', observedAt: '2024-01-13', source: 'crawl/membership' }
    ],
    evidence: [
      { kind: 'comment', quote: 'WHERE DO I BUY THIS. i am not being dramatic. where.', platform: 'TikTok', url: 'tiktok.com/@fenferments/video/730…', observedAt: '2024-01-10', engine: 'llm', label: 'purchase intent' },
      { kind: 'caption', quote: 'I legally cannot sell this out of my kitchen and I do not know what the next step is', platform: 'TikTok', url: 'tiktok.com/@fenferments/video/729…', observedAt: '2023-12-19', engine: 'llm', label: 'operator appetite' }
    ],
    samples: [{ title: 'Fermenting scotch bonnets for 90 days', platform: 'TikTok', metric: '3.7M views', length: '1:04', tone: 0.5, observedAt: '2024-01-10' }],
    play: { id: 'commerce', label: 'Storefront / commerce (Encore)', why: 'A thousand people asked where to buy, and he said publicly that he does not know the next step. The blocker is production and compliance — exactly what Encore is.' },
    outcome: {
      window: '30 months later',
      followersNow: '780K',
      built: ['Hot sauce line in ~1,200 grocery doors', 'Co-packing deal, national distribution'],
      headline: 'He said he did not know the next step. Someone showed him.',
      note: 'A CPG incubator signed him in mid-2024 for reportedly 30% of the brand.'
    }
  }));

  candidates.push(backtest({
    id: 'b_clem', name: 'Clementine Bauer', handle: '@clembakes', initials: 'CB', accent: '#C08A9A',
    headline: 'Cakes decorated for people going through something. 103K.',
    mandateId: 'm_food', primaryPlatform: 'Instagram',
    platforms: [{ name: 'Instagram', handle: '@clembakes', followers: 103000, url: 'instagram.com/clembakes', matchConfidence: 1.0 }],
    audience: { total: 103000, growth90d: 0.38 },
    score: 76, confidence: 0.79,
    pillars: {
      gap: { score: 47, max: 60, engine: 'rule', coverage: 0.81, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '7 of 9 surfaces resolved absent.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '1 disclosure / 90 posts', weightPct: 30, detail: 'One gifted post.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '430 purchase-intent comments', weightPct: 25, detail: 'Requests to commission a cake.' }
      ]},
      strain: { score: 29, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '6.2% reply rate', weightPct: 35, detail: 'Falling.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−29% vs baseline', weightPct: 30, detail: 'Notable.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '2 markers', weightPct: 25, detail: 'About commission requests she cannot take.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Reveal format.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Story → cake → reveal.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Baking → mapped', detail: 'Core.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Very high', detail: 'The emotional premise is unreplicable.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2024-01-14', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2024-01-14', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2024-01-14', source: 'crawl/commerce' },
      { item: 'Book / product', state: UNKNOWN, surfacesChecked: 2, note: 'Inconclusive.', observedAt: '2024-01-14', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'my sister is in treatment. can i commission one. please.', platform: 'Instagram', url: 'instagram.com/p/C2c…', observedAt: '2024-01-08', engine: 'llm', label: 'purchase intent' }
    ],
    samples: [{ title: 'A cake for someone who did not want a party', platform: 'Instagram', metric: '2.6M views', length: '1:33', tone: 0.6, observedAt: '2024-01-08' }],
    play: { id: 'site', label: 'Standalone site + O&O ads', why: 'The commission requests need an intake queue and a story archive. That is a destination, not a list.' },
    outcome: {
      window: '30 months later',
      followersNow: '620K',
      built: ['A book about grief and baking', 'A commission queue run by a small studio'],
      headline: 'The commission queue exists now. It took her nineteen months to build it alone.',
      note: 'Warhol would have handed it to her in a week.'
    }
  }));

  candidates.push(backtest({
    id: 'b_tobi', name: 'Tobi Aarnio', handle: '@aarniocooks', initials: 'TA', accent: '#4A7A8A',
    headline: 'Nordic pantry cooking, shot on a windowsill. 37K.',
    mandateId: 'm_food', primaryPlatform: 'TikTok',
    platforms: [{ name: 'TikTok', handle: '@aarniocooks', followers: 37600, url: 'tiktok.com/@aarniocooks', matchConfidence: 1.0 }],
    audience: { total: 37600, growth90d: 0.66 },
    score: 73, confidence: 0.74,
    pillars: {
      gap: { score: 45, max: 60, engine: 'rule', coverage: 0.77, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '6 of 8 surfaces resolved absent.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '260 purchase-intent comments', weightPct: 25, detail: 'Modest but rising.' }
      ]},
      strain: { score: 28, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−34% vs baseline', weightPct: 35, detail: 'Sharp — seasonal or strain, ambiguous.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '7.8% reply rate', weightPct: 30, detail: 'Falling.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '1 marker', weightPct: 25, detail: 'One reference to burnout.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Short-form native.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Medium', detail: 'Seasonal ceiling.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Regional → mapped', detail: 'Thin but mapped.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Medium', detail: 'Aesthetic is strong; premise less so.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2024-01-13', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2024-01-13', source: 'crawl/whois' },
      { item: 'Storefront', state: UNKNOWN, surfacesChecked: 2, note: 'Inconclusive.', observedAt: '2024-01-13', source: 'crawl/commerce' }
    ],
    evidence: [
      { kind: 'comment', quote: 'i would read a newsletter of just the pantry lists', platform: 'TikTok', url: 'tiktok.com/@aarniocooks/video/731…', observedAt: '2024-01-06', engine: 'llm', label: 'subscribe intent' }
    ],
    samples: [{ title: 'Everything from one shelf', platform: 'TikTok', metric: '890K views', length: '0:49', tone: 0.45, observedAt: '2024-01-06' }],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'Modest signal but clean. The pantry-list format is inherently written.' },
    outcome: {
      window: '30 months later',
      followersNow: '52K',
      built: [],
      headline: 'Nothing happened. He posts about twice a month.',
      note: 'Warhol ranked him 5th of 6 and he is the one that went nowhere — which is the honest part of the backtest. Score ordering held.'
    }
  }));

  candidates.push(backtest({
    id: 'b_marisol', name: 'Marisol Duarte-Kim', handle: '@duartekitchen', initials: 'MD', accent: '#A85A6B',
    headline: 'Filipino-Mexican home cooking, two grandmothers, one kitchen. 71K.',
    mandateId: 'm_food', primaryPlatform: 'Instagram',
    platforms: [{ name: 'Instagram', handle: '@duartekitchen', followers: 71300, url: 'instagram.com/duartekitchen', matchConfidence: 1.0 }],
    audience: { total: 71300, growth90d: 0.55 },
    score: 79, confidence: 0.85,
    pillars: {
      gap: { score: 49, max: 60, engine: 'rule', coverage: 0.88, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '8 of 9 surfaces resolved absent.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '680 purchase-intent comments', weightPct: 25, detail: 'Book requests dominate.' }
      ]},
      strain: { score: 30, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '3 markers', weightPct: 35, detail: 'About caregiving alongside filming.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '5.9% reply rate', weightPct: 30, detail: 'Falling.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−21% vs baseline', weightPct: 25, detail: 'Steady.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Intergenerational dialogue clips well.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Two cuisines, one dish.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Heritage cooking → mapped', detail: 'Growing vertical.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Very high', detail: 'The specific pairing has no analogue.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2024-01-12', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2024-01-12', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2024-01-12', source: 'crawl/commerce' },
      { item: 'Book / product', state: ABSENT, surfacesChecked: 3, note: 'None.', observedAt: '2024-01-12', source: 'crawl/product' }
    ],
    evidence: [
      { kind: 'comment', quote: 'this needs to be a book. i will preorder it right now, today.', platform: 'Instagram', url: 'instagram.com/p/C2d…', observedAt: '2024-01-11', engine: 'llm', label: 'purchase intent' }
    ],
    samples: [{ title: 'Adobo, twice, argued about', platform: 'Instagram', metric: '1.4M views', length: '2:01', tone: 0.4, observedAt: '2024-01-11' }],
    play: { id: 'commerce', label: 'Storefront / commerce (Encore)', why: 'The named ask is a physical book, repeated hundreds of times.' },
    outcome: {
      window: '30 months later',
      followersNow: '940K',
      built: ['Cookbook, published 2025', 'A regular column with a national food publication'],
      headline: 'The book got made. It took a literary agent finding her first.',
      note: 'Eighteen months between this snapshot and the deal.'
    }
  }));

  // ============================================================ WATCHLIST
  // (in addition to c_junie / c_wes above, which have already resurfaced)

  candidates.push(light({
    id: 'w_soren', name: 'Soren Achebe', handle: '@sorencooksloud', initials: 'SA', accent: '#8A4A5A',
    headline: 'Loud, fast, funny. Kept in April — waiting on a strain signal.',
    mandateId: 'm_food', primaryPlatform: 'TikTok',
    platforms: [{ name: 'TikTok', handle: '@sorencooksloud', followers: 720000, url: 'tiktok.com/@sorencooksloud', matchConfidence: 1.0 }],
    audience: { total: 720000, growth90d: 0.14 },
    score: 66, scoreDelta: 2, confidence: 0.83,
    pillars: {
      gap: { score: 48, max: 60, engine: 'rule', coverage: 0.87, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: 'Strong gap.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '820 purchase-intent comments', weightPct: 25, detail: 'Merch and a book.' }
      ]},
      strain: { score: 18, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '+3% — no decay', weightPct: 35, detail: 'Cadence is holding. This is why he is not in the drop.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '11% reply rate', weightPct: 30, detail: 'Still engaged.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '0 markers', weightPct: 25, detail: 'None.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Very high', detail: 'Native.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Yes.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Entertainment cooking → mapped', detail: 'Yes.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Medium', detail: 'Crowded.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-30', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-30', source: 'crawl/whois' }
    ],
    evidence: [{ kind: 'comment', quote: 'sell the shirt. the one from the video. sell it.', platform: 'TikTok', url: 'tiktok.com/@sorencooksloud/video/7403…', observedAt: '2026-07-11', engine: 'llm', label: 'purchase intent' }],
    samples: [{ title: 'Twelve minutes, one wok, no apologies', platform: 'TikTok', metric: '5.6M views', length: '1:12', tone: 0.5, observedAt: '2026-07-11' }],
    play: { id: 'commerce', label: 'Storefront / commerce (Encore)', why: 'Gap is strong; strain is absent. Merch is the obvious play the day he wants it.' },
    status: 'watched', watchedSince: '2026-04-02',
    nextTrigger: 'Resurfaces at Strain ≥ 26 or any self-reported capacity marker',
    outreach: { subject: '', opener: '', bullets: [], close: '' }
  }));

  candidates.push(light({
    id: 'w_lark', name: 'Lark Osei', handle: '@larkonlyeats', initials: 'LO', accent: '#3A6A5A',
    headline: 'Single-ingredient deep dives. Kept in May — coverage was too thin to act.',
    mandateId: 'm_food', primaryPlatform: 'YouTube',
    platforms: [{ name: 'YouTube', handle: 'Lark Only Eats', followers: 356000, url: 'youtube.com/@larkonlyeats', matchConfidence: 1.0 }],
    audience: { total: 356000, growth90d: 0.26 },
    score: 68, scoreDelta: 4, confidence: 0.58,
    pillars: {
      gap: { score: 43, max: 60, engine: 'rule', coverage: 0.58, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Coverage too thin', weightPct: 45, detail: 'Only 5 of 9 surfaces resolved. Below the coverage gate — cannot enter the drop regardless of score.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '340 purchase-intent comments', weightPct: 25, detail: 'Moderate.' }
      ]},
      strain: { score: 25, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−23% vs baseline', weightPct: 35, detail: 'Present.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '4.4% reply rate', weightPct: 30, detail: 'Falling.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '1 marker', weightPct: 25, detail: 'One.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Medium', detail: 'Long-form.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Very high', detail: 'One ingredient per episode.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Food science → mapped', detail: 'Yes.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'Strong.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: UNKNOWN, surfacesChecked: 2, note: 'Possible beehiiv under a former handle. Unresolved — this is what is blocking the gate.', observedAt: '2026-07-24', source: 'crawl/owned-check' },
      { item: 'Website', state: UNKNOWN, surfacesChecked: 1, note: 'Inconclusive.', observedAt: '2026-07-24', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-24', source: 'crawl/commerce' }
    ],
    evidence: [{ kind: 'comment', quote: 'do you have a mailing list or am i just refreshing youtube forever', platform: 'YouTube', url: 'youtube.com/watch?v=Ef…', observedAt: '2026-07-02', engine: 'llm', label: 'subscribe intent' }],
    samples: [{ title: 'Salt. Just salt. For 40 minutes.', platform: 'YouTube', metric: '2.9M views', length: '41:12', tone: 0.35, observedAt: '2026-07-02' }],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'Held back by coverage, not by signal. Resolve the beehiiv question and this likely clears 70.' },
    status: 'watched', watchedSince: '2026-05-11',
    nextTrigger: 'Resurfaces when Monetization Gap coverage ≥ 75% — 2 unresolved checks',
    outreach: { subject: '', opener: '', bullets: [], close: '' }
  }));

  candidates.push(light({
    id: 'w_gus', name: 'Gus Perrone', handle: '@perronepasta', initials: 'GP', accent: '#8A7A3A',
    headline: 'Extruded pasta shapes, obsessively. Kept in June.',
    mandateId: 'm_food', primaryPlatform: 'Instagram',
    platforms: [{ name: 'Instagram', handle: '@perronepasta', followers: 285000, url: 'instagram.com/perronepasta', matchConfidence: 1.0 }],
    audience: { total: 285000, growth90d: 0.31 },
    score: 64, scoreDelta: -3, confidence: 0.81,
    pillars: {
      gap: { score: 41, max: 60, engine: 'rule', coverage: 0.83, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Newsletter appeared this month', weightPct: 45, detail: 'A Substack went live 2026-07-09. Gap is closing on its own — this is why the score fell.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '2 disclosures', weightPct: 30, detail: 'Two, both pasta equipment.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '290 purchase-intent comments', weightPct: 25, detail: 'For dies and moulds.' }
      ]},
      strain: { score: 23, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−14% vs baseline', weightPct: 35, detail: 'Mild.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '9.1% reply rate', weightPct: 30, detail: 'Healthy.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '1 marker', weightPct: 25, detail: 'One.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Very high', detail: 'Extrusion is hypnotic.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Very high', detail: 'One shape per post.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Pasta → mapped', detail: 'Yes.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Medium-high', detail: 'Good.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: PRESENT, surfacesChecked: 5, note: 'Substack, live 2026-07-09, 3 posts.', observedAt: '2026-07-28', source: 'crawl/owned-check' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-28', source: 'crawl/commerce' }
    ],
    evidence: [{ kind: 'comment', quote: 'where do you get the bronze dies', platform: 'Instagram', url: 'instagram.com/p/C9z…', observedAt: '2026-07-05', engine: 'llm', label: 'purchase intent' }],
    samples: [{ title: 'Twelve dies, twelve shapes', platform: 'Instagram', metric: '3.2M views', length: '1:41', tone: 0.55, observedAt: '2026-07-05' }],
    play: { id: 'commerce', label: 'Storefront / commerce (Encore)', why: 'Newsletter play is now taken. Commerce on dies and moulds is what remains.' },
    status: 'watched', watchedSince: '2026-06-08',
    nextTrigger: 'Score falling — flag for pass review at < 60',
    outreach: { subject: '', opener: '', bullets: [], close: '' }
  }));

  // ============================================================ PROMOTED

  candidates.push(light({
    id: 'p_dorota', name: 'Dorota Reyes-Kaminski', handle: '@dorotapreserves', initials: 'DR', accent: '#B06A4A',
    headline: 'Preserving, canning, cellar cooking. Promoted last Thursday.',
    mandateId: 'm_food', primaryPlatform: 'YouTube',
    platforms: [{ name: 'YouTube', handle: 'Dorota Preserves', followers: 528000, url: 'youtube.com/@dorotapreserves', matchConfidence: 1.0 }],
    audience: { total: 528000, growth90d: 0.29 },
    score: 85, scoreDelta: 6, confidence: 0.93,
    pillars: {
      gap: { score: 54, max: 60, engine: 'rule', coverage: 0.95, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '11 of 11 surfaces resolved absent.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '1,510 purchase-intent comments', weightPct: 25, detail: 'For a preserving guide and for jars.' }
      ]},
      strain: { score: 31, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '4 markers', weightPct: 35, detail: 'Explicit.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−33% vs baseline', weightPct: 30, detail: 'Sharp.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '1.9% reply rate', weightPct: 25, detail: 'Collapsed.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Yes.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'Very high', detail: 'Seasonal cycle.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Preserving → mapped', detail: 'Yes.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'Yes.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 6, note: 'None.', observedAt: '2026-07-23', source: 'crawl/owned-check' },
      { item: 'Website', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-23', source: 'crawl/whois' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 5, note: 'None.', observedAt: '2026-07-23', source: 'crawl/commerce' }
    ],
    evidence: [
      { kind: 'comment', quote: 'i need this as a book with the timings. i have burned two batches guessing.', platform: 'YouTube', url: 'youtube.com/watch?v=Gh…', observedAt: '2026-07-15', engine: 'llm', label: 'purchase intent' },
      { kind: 'caption', quote: 'canning season and I am filming at midnight again', platform: 'YouTube', url: 'youtube.com/watch?v=Hi…', observedAt: '2026-07-18', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [{ title: 'A cellar, a season, ninety jars', platform: 'YouTube', metric: '4.4M views', length: '38:02', tone: 0.4, observedAt: '2026-07-15' }],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'A seasonal preserving calendar delivered on schedule. The timings are the product.' },
    status: 'promoted',
    promoted: { by: 'Alex Grinshpoon', at: '2026-07-23' },
    outreach: {
      subject: 'The timings, on a schedule',
      opener: 'Your audience keeps asking for the timings written down, and you are filming at midnight in canning season. A seasonal calendar delivered weekly solves both.',
      bullets: ['1,510 purchase-intent comments in 90 days', 'Nothing owned — 11 of 11 surfaces resolved absent', 'We write, produce, and sell the slate'],
      close: 'Fifteen minutes?'
    }
  }));

  // ============================================================ PASSED

  candidates.push(light({
    id: 'x_teddy', name: 'Teddy Lascelles', handle: '@lascellesbakery', initials: 'TL', accent: '#7A7A7A',
    headline: 'Passed — already monetized.', mandateId: 'm_food', primaryPlatform: 'Instagram',
    platforms: [{ name: 'Instagram', handle: '@lascellesbakery', followers: 640000, url: 'instagram.com/lascellesbakery', matchConfidence: 1.0 }],
    audience: { total: 640000, growth90d: 0.2 }, score: 41, confidence: 0.96,
    pillars: {
      gap: { score: 12, max: 60, engine: 'rule', coverage: 0.96, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Newsletter, site, store all present', weightPct: 45, detail: 'Fully built out.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '14 disclosures / 90 posts', weightPct: 30, detail: 'Managed slate.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '90 comments', weightPct: 25, detail: 'Low — demand is being met.' }
      ]},
      strain: { score: 12, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '+8%', weightPct: 35, detail: 'Growing.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '12%', weightPct: 30, detail: 'Has a team.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '0 markers', weightPct: 25, detail: 'None.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Yes.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Yes.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Baking → mapped', detail: 'Yes.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Medium', detail: 'Fine.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: PRESENT, surfacesChecked: 6, note: 'beehiiv, 84K subscribers.', observedAt: '2026-07-20', source: 'crawl/owned-check' },
      { item: 'Website', state: PRESENT, surfacesChecked: 4, note: 'Full site with commerce.', observedAt: '2026-07-20', source: 'crawl/whois' },
      { item: 'Storefront', state: PRESENT, surfacesChecked: 5, note: 'Shopify, active.', observedAt: '2026-07-20', source: 'crawl/commerce' }
    ],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'Not applicable — already built.' },
    status: 'passed',
    passed: { reasonCode: 'monetized', by: 'Alex Grinshpoon', at: '2026-07-20', suppression: 'Permanent unless monetization inventory changes' },
    outreach: { subject: '', opener: '', bullets: [], close: '' }
  }));

  candidates.push(light({
    id: 'x_pim', name: 'Pim Halvorsen', handle: '@pimeatsdinner', initials: 'PH', accent: '#7A7A7A',
    headline: 'Passed — too small.', mandateId: 'm_food', primaryPlatform: 'TikTok',
    platforms: [{ name: 'TikTok', handle: '@pimeatsdinner', followers: 21400, url: 'tiktok.com/@pimeatsdinner', matchConfidence: 1.0 }],
    audience: { total: 21400, growth90d: 0.7 }, score: 74, confidence: 0.7,
    pillars: {
      gap: { score: 50, max: 60, engine: 'rule', coverage: 0.8, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: 'Strong gap.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '150 comments', weightPct: 25, detail: 'High density, low volume.' }
      ]},
      strain: { score: 24, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−17%', weightPct: 35, detail: 'Present.' },
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '22%', weightPct: 30, detail: 'Still replying.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '1 marker', weightPct: 25, detail: 'One.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: 'None', weightPct: 10, detail: 'None.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'High', detail: 'Yes.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Yes.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Mapped', detail: 'Yes.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'Medium-high', detail: 'Good.' }
      ]}
    },
    inventory: [{ item: 'Newsletter', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-06-30', source: 'crawl/owned-check' }],
    play: { id: 'newsletter', label: 'Newsletter + sponsorship slate', why: 'Right shape, wrong scale — for now.' },
    status: 'passed',
    passed: { reasonCode: 'too_small', by: 'Marisol Vega', at: '2026-06-30', suppression: 'Revisit at 100K audience — currently 21.4K' },
    outreach: { subject: '', opener: '', bullets: [], close: '' }
  }));

  // ============================================================ DROPS
  // A key present with an empty array = a real, designed zero-result day.

  var drops = {
    '2026-07-31': {
      m_food: ['c_marguerite', 'c_deshawn', 'c_junie', 'c_nell', 'c_priya', 'c_otto', 'c_wes', 'c_bex', 'c_hollis'],
      m_money: [],
      m_making: ['c_ilse', 'c_ardash', 'c_mirela']
    },
    '2024-01-15': {
      m_food: ['b_ines', 'b_roman', 'b_fen', 'b_marisol', 'b_clem', 'b_tobi'],
      m_money: [],
      m_making: []
    }
  };

  // A short activity trail, for surfaces that want one.
  var timeline = [
    { at: '2026-07-31T06:00', actor: 'Warhol', text: 'Drop generated — Food & Home Craft: 7 new, 2 resurfaced' },
    { at: '2026-07-31T06:00', actor: 'Warhol', text: 'Drop generated — Personal Finance: 0 above threshold' },
    { at: '2026-07-30T16:12', actor: 'Alex Grinshpoon', text: 'Passed Teddy Lascelles — already monetized' },
    { at: '2026-07-28T09:41', actor: 'Warhol', text: 'Acute alert — Junie Castellanos, operator-appetite statement' },
    { at: '2026-07-23T11:05', actor: 'Alex Grinshpoon', text: 'Promoted Dorota Reyes-Kaminski — outreach package generated' }
  ];

  // -------------------------------------------------- "Run a Name" fixture
  // Manual entry demo: any handle typed resolves to this, source-tagged
  // manual, threshold bypassed, flagged as a Scout override. PRD §6.4.
  var runANameResult = {
    id: 'c_runname', name: 'Aurelio Vance', handle: '@vancemakesknives', initials: 'AV', accent: '#5A5A6B',
    headline: 'Forges kitchen knives from salvaged steel. Manual entry — Scout override.',
    mandateId: 'm_making', primaryPlatform: 'YouTube',
    platforms: [
      { name: 'YouTube', handle: 'Vance Makes Knives', followers: 168000, url: 'youtube.com/@vancemakesknives', matchConfidence: 1.0 },
      { name: 'Instagram', handle: '@vancemakesknives', followers: 39000, url: 'instagram.com/vancemakesknives', matchConfidence: 0.91 }
    ],
    audience: { total: 207000, growth90d: 0.36 },
    score: 68, scoreDelta: null, confidence: 0.69,
    sourceTag: 'manual', override: true,
    pillars: {
      gap: { score: 45, max: 60, engine: 'rule', coverage: 0.69, subsignals: [
        { key: 'owned', label: 'Owned-channel absence', engine: 'rule', value: 'Nothing owned', weightPct: 45, detail: '6 of 9 surfaces resolved. Below the coverage gate — this is why it would not have entered the drop.' },
        { key: 'sponsor', label: 'Sponsorship absence', engine: 'rule', value: '0 disclosures / 40 videos', weightPct: 30, detail: 'None.' },
        { key: 'demand', label: 'Unmet demand', engine: 'llm+rule', value: '520 purchase-intent comments', weightPct: 25, detail: 'Almost entirely "are the knives for sale".' }
      ]},
      strain: { score: 23, max: 40, engine: 'rule+llm', subsignals: [
        { key: 'unanswered', label: 'Unanswered audience', engine: 'rule', value: '3.8% reply rate', weightPct: 35, detail: 'Falling.' },
        { key: 'cadence', label: 'Cadence decay', engine: 'rule', value: '−13% vs baseline', weightPct: 30, detail: 'Mild.' },
        { key: 'selfreport', label: 'Self-reported strain', engine: 'llm', value: '2 markers', weightPct: 25, detail: 'About a waitlist he stopped maintaining.' },
        { key: 'abandon', label: 'Abandonment markers', engine: 'rule', value: '1 dead form', weightPct: 10, detail: 'Waitlist Google Form closed since 2026-03.' }
      ]},
      fit: { verdict: 'pass', engine: 'llm', subsignals: [
        { key: 'clip', label: 'Clippability', engine: 'llm', value: 'Very high', detail: 'Forge footage is inherently watchable.' },
        { key: 'repeat', label: 'Repeatable format', engine: 'llm', value: 'High', detail: 'Steel in, knife out.' },
        { key: 'demandcat', label: 'Category demand', engine: 'llm+map', value: 'Bladesmithing → mapped', detail: 'Premium commerce adjacency.' },
        { key: 'distinct', label: 'Distinctiveness', engine: 'llm', value: 'High', detail: 'The salvage premise is specific.' }
      ]}
    },
    inventory: [
      { item: 'Newsletter', state: ABSENT, surfacesChecked: 4, note: 'None.', observedAt: '2026-07-31', source: 'manual/on-demand' },
      { item: 'Website', state: UNKNOWN, surfacesChecked: 2, note: 'Domain parked, ownership unconfirmed.', observedAt: '2026-07-31', source: 'manual/on-demand' },
      { item: 'Storefront', state: ABSENT, surfacesChecked: 4, note: 'Waitlist form is closed. No store.', observedAt: '2026-07-31', source: 'manual/on-demand' },
      { item: 'Membership', state: UNKNOWN, surfacesChecked: 1, note: 'Inconclusive.', observedAt: '2026-07-31', source: 'manual/on-demand' }
    ],
    evidence: [
      { kind: 'comment', quote: 'the waitlist form has been closed for months. is there another way to buy one?', platform: 'YouTube', url: 'youtube.com/watch?v=Jk…', observedAt: '2026-07-26', engine: 'llm', label: 'purchase intent' },
      { kind: 'caption', quote: 'I closed the waitlist because I could not keep up with it and I never reopened it', platform: 'YouTube', url: 'youtube.com/watch?v=Lm…', observedAt: '2026-06-14', engine: 'llm', label: 'capacity strain' }
    ],
    samples: [
      { title: 'A knife from a 1940s leaf spring', platform: 'YouTube', metric: '3.9M views', length: '19:22', tone: 0.3, observedAt: '2026-07-26' },
      { title: 'Why I closed the waitlist', platform: 'YouTube', metric: '1.1M views', length: '8:40', tone: 0.75, observedAt: '2026-06-14' }
    ],
    play: { id: 'commerce', label: 'Storefront / commerce (Encore)', why: 'A closed waitlist is a queue with demand and no operator. Encore runs the queue, the payments and the shipping; he forges.' },
    status: 'candidate', resurfaced: null, passed: null, promoted: null,
    outreach: {
      subject: 'The waitlist you closed',
      opener: 'You said you closed the waitlist because you could not keep up and never reopened it. We run exactly that — the queue, the payments, the shipping.',
      bullets: ['520 purchase-intent comments in 90 days', 'Waitlist closed since March; demand did not stop', 'Encore operates the commerce end to end'],
      close: 'Fifteen minutes?'
    },
    outcome: null, asOf: '2026-07-31', alert: null
  };

  // ------------------------------------------------------------- assembly
  var byId = {};
  candidates.forEach(function (c) { byId[c.id] = c; });

  window.WARHOL = {
    meta: {
      product: 'Warhol Scout',
      today: '2026-07-31',
      backtestDate: '2024-01-15',
      availableDates: ['2026-07-31', '2024-01-15'],
      scoreThreshold: 70,
      dropCap: 10,
      coverageGate: 0.75,
      states: { PRESENT: PRESENT, ABSENT: ABSENT, UNKNOWN: UNKNOWN }
    },
    user: scouts[0],
    scouts: scouts,
    mandates: mandates,
    plays: plays,
    passReasons: passReasons,
    candidates: candidates,
    byId: byId,
    drops: drops,
    timeline: timeline,
    runANameResult: runANameResult,

    // convenience selectors — asOf is honoured, nothing after it is visible
    drop: function (asOf, mandateId) {
      var d = (drops[asOf] || {})[mandateId] || [];
      return d.map(function (id) { return byId[id]; }).filter(Boolean);
    },
    watchlist: function () {
      return candidates.filter(function (c) { return c.status === 'watched'; });
    },
    byStatus: function (s) {
      return candidates.filter(function (c) { return c.status === s; });
    },
    isBacktest: function (asOf) { return asOf !== '2026-07-31'; }
  };
})();
