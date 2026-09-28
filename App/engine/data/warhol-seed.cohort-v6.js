/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief worth-call-they-make-2` on 2026-08-11.
   Do not edit by hand; re-run the command.

   Classic script. Sets window.WARHOL. No modules, no fetch, no network.
   Drop-in replacement for the frozen cohort file of the same name.

   THESE CREATORS ARE REAL. That is the point of this file and it is also the
   thing to be careful about: every inventory line, every status code and every
   "we looked in N places" below traces to a URL the engine actually opened, on
   the date recorded. Run `warhol checks <handle>` in the engine to open them.

   WHAT IS REAL HERE
     inventory, checks, scores, confidence, platforms, audience, evidence, samples, headline

   WHAT IS INVENTED, AND MARKED
     accent, play, outreach

   Every invented field carries `generated: true`. They are real product
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

  var DATA = {
    "meta": {
      "product": "Warhol Scout",
      "today": "2026-08-11",
      "backtestDate": null,
      "availableDates": [
        "2026-08-11"
      ],
      "scoreThreshold": 25,
      "costs": {
        "takenAt": "2026-08-11T19:26:57.041Z",
        "spent": 25.3525,
        "studiedCreators": 193,
        "perCreator": 0.1314,
        "fetches": 56938,
        "calls": 7428,
        "refused": 2351,
        "byPass": [
          {
            "depth": "sweep",
            "fetches": 9330,
            "calls": 0,
            "cost": 0
          },
          {
            "depth": "probe",
            "fetches": 47372,
            "calls": 0,
            "cost": 0
          },
          {
            "depth": "study",
            "fetches": 0,
            "calls": 7428,
            "cost": 25.3525
          }
        ],
        "byCall": [
          {
            "label": "judge_fit",
            "calls": 1189,
            "cost": 11.5927,
            "perCall": 0.0097,
            "refused": 43,
            "avgIn": 853,
            "avgOut": 219
          },
          {
            "label": "classify_demand",
            "calls": 1190,
            "cost": 6.1388,
            "perCall": 0.0052,
            "refused": 80,
            "avgIn": 4204,
            "avgOut": 191
          },
          {
            "label": "propose_candidates",
            "calls": 2207,
            "cost": 3.8565,
            "perCall": 0.0017,
            "refused": 2059,
            "avgIn": 41,
            "avgOut": 62
          },
          {
            "label": "propose_places",
            "calls": 1645,
            "cost": 3.2737,
            "perCall": 0.002,
            "refused": 84,
            "avgIn": 480,
            "avgOut": 302
          },
          {
            "label": "classify_strain",
            "calls": 1189,
            "cost": 0.4909,
            "perCall": 0.0004,
            "refused": 77,
            "avgIn": 375,
            "avgOut": 8
          },
          {
            "label": "write_headline",
            "calls": 8,
            "cost": 0,
            "perCall": 0,
            "refused": 8,
            "avgIn": 0,
            "avgOut": 0
          }
        ]
      },
      "dropCap": 10,
      "coverageGate": 0.6,
      "weights": {
        "pillars": {
          "opportunityMax": 60,
          "demandMax": 25,
          "missingMax": 35,
          "pressureMax": 40
        },
        "absence": {
          "youtube_channel": 14,
          "newsletter": 10,
          "store": 9,
          "representation": 4,
          "website": 4,
          "membership": 3,
          "podcast": 3,
          "sponsorships": 3,
          "affiliate_links": 0.5,
          "shopping_tags": 0.5,
          "platform_subscriptions": 0.5
        },
        "pressure": {
          "_comment": [
            "Q6, 6 Aug 2026: cadence_decay flipped to needsHistory:false, because with the",
            "YouTube Data API it genuinely computes on a FIRST look. YouTube stamps every",
            "upload with its publish date, so the change over time is already in the data —",
            "one visit reads it. Nobody stamps a follower count, which is why",
            "unanswered_audience stays true and Trajectory still needs two looks.",
            "",
            "So one of these four is unavailable on day one, not two, and the day-one",
            "Pressure ceiling is 34 of 40 rather than 22. The ceiling printed on a report is",
            "per creator, not this figure: a creator with no readable YouTube has no posting",
            "history either, and their report says 22 and why.",
            "",
            "declineFloor/declineFull scale the cadence points: no points until the posting",
            "rate is down declineFloor, full max at declineFull. A quarter off is inside",
            "ordinary variance for a person who makes things; four fifths off is a different",
            "sentence about their life."
          ],
          "cadence_decay": {
            "max": 12,
            "needsHistory": false,
            "declineFloor": 0.25,
            "declineFull": 0.8
          },
          "abandonment_markers": {
            "max": 12,
            "needsHistory": false
          },
          "self_reported_strain": {
            "max": 10,
            "needsHistory": false
          },
          "unanswered_audience": {
            "max": 6,
            "needsHistory": true
          }
        },
        "demandHalfPoint": 300,
        "demandAlignmentMax": 1.75,
        "shortFormAudienceFloor": 50000,
        "trajectory": {
          "_comment": "Decision 104: test the audience, never the posting rate. Fail only when down over 12 months AND still falling over 3. Needs two observations at least 90 days apart, so a first look returns not_established — which is not a pass and not a fail.",
          "yearDeclineFail": -0.1,
          "quarterMustAlsoBeFalling": true,
          "minObservationGapDays": 90
        }
      },
      "states": {
        "PRESENT": "present",
        "ABSENT": "verified_absent",
        "UNKNOWN": "not_found"
      },
      "generatedBy": "warhol export",
      "generatedAt": "2026-08-11T19:26:57.045Z",
      "brief": {
        "slug": "worth-call-they-make-2",
        "text": "Anyone worth a call — they make something clippable, in a format they can repeat, in a category people actually want."
      },
      "real": [
        "inventory",
        "checks",
        "scores",
        "confidence",
        "platforms",
        "audience",
        "evidence",
        "samples",
        "headline"
      ],
      "generated": [
        "accent",
        "play",
        "outreach"
      ]
    },
    "scouts": [
      {
        "id": "s_engine",
        "name": "The engine",
        "initials": "WE",
        "role": "Origination"
      }
    ],
    "mandates": [
      {
        "id": "m_worth_call_they_make_2",
        "name": "worth-call-they-make-2",
        "category": "Real data",
        "platforms": [
          "TikTok",
          "YouTube",
          "Instagram"
        ],
        "audienceBand": "as found",
        "geo": "as found",
        "language": "en",
        "owner": "the engine",
        "ownerInitials": "WE",
        "description": "Anyone worth a call — they make something clippable, in a format they can repeat, in a category people actually want."
      }
    ],
    "candidates": [
      {
        "id": "c_worth_call_they_make_2__pantheorganizer",
        "name": "pantheorganizer",
        "handle": "@pantheorganizer",
        "initials": "PA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@pantheorganizer",
            "followers": 43300,
            "url": "https://www.tiktok.com/@pantheorganizer",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/69c8a1fa80ba728dc3fb140a292c2148~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d4065ae5&x-expires=1786647600&x-signature=z%2FgGNIcFvs0qqLSfahvbhSQr2IE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-13T19:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@pantheorganizer",
            "followers": 1110000,
            "url": "https://www.youtube.com/@pantheorganizer",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 1110000
        },
        "score": 42,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 30,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter, no membership",
                "weightPct": 90,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "41 purchase-intent comments",
                "weightPct": 10,
                "detail": "41 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "13 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "13 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−9% vs baseline",
                "weightPct": 0,
                "detail": "11 videos a month now, against 12 before that — down 9%; the recent ones are getting 16% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "This is a dedicated car detailing tutorial channel doing hands-on work on vehicles with named products and tools in a repeating twice-weekly format, which is exactly what the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — youtube.com/@pantheorganizer",
            "observedAt": "2026-08-11",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 76,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-11",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 52,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-11",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 33,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 13,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-11",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — pantheorganizer.com",
            "observedAt": "2026-08-11",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-11",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-11",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-11",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I have purchased many products from DIY and CLEAN, and love both.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Just started using this product and love it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'll try this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I'm still hooked on Quickbeads.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I use the Diy wax , I can say it really does fill.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've used the Turtle wax graphene ceramic paste wax many times. I love it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have used the turtle wax ceramic plus graphene for a couple years now, very impressed how it compared to the others.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been trying different waxes for my summer car.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I had that exact Turtle Wax on my shelf for many years",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I bought it brand new when they made an unlimited edition for almost 50 bucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Lol I've BEEN using Envie glass sealant on my glass shower doors already 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Been using this as topper over my windshields coating. Works great",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have purchased many products from DIY and CLEAN, and love both.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Just started using this product and love it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Can't wait to try it out 🔥",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been using Aquapel. It used to be used by law enforcement on their vehicles. I'll try this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have a 80series landcruiser i been looking for a great product.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I use the Diy wax , I can say it really does fill.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been looking for wax to apply over my coating as I enjoy the experience of waxing and you have given me a few options to consider.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Love me some DIYDetail products, I'm still hooked on Quickbeads. My favorite so far, you have to pry it from my dead cold beaded hands. However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-11",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-11",
            "engine": "rule",
            "label": "abandonment"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-11",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Meet & Greet with my viewers on August 22 @TOC Supplies in Ontario!  🇨🇦",
            "url": "https://www.youtube.com/watch?v=gVv9JhsJscg",
            "at": "2026-08-10T13:00:15Z",
            "thumbnail": "https://i.ytimg.com/vi/gVv9JhsJscg/hqdefault.jpg",
            "excerpt": null,
            "metric": 1484,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:29.384Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Pan The Organizer",
            "kind": "writing",
            "title": "DIY Detail Envie Glass Sealant Tested! Does It Beat Ceramic Detail Spray?",
            "url": "https://pantheorganizer.com/diy-detail-envie-glass-sealant-tested-does-it-beat-ceramic-detail-spray/",
            "at": "2026-08-05T13:00:01.000Z",
            "thumbnail": null,
            "excerpt": "Today, we’re testing the brand-new DIY Detail Envie Glass Sealant and answering one important question: Why would you use a dedicated glass sealant when the Envie Ceramic Detail Spray already works on glass?\n Joined by special guest Yvan Lacroix from @diydetailofficial , we explore the technology be",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-11T19:02:35.527Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Car Wash Shampoo Explained: Everything You Need to Know",
            "url": "https://www.youtube.com/watch?v=A8oiNnKCeQ8",
            "at": "2026-08-08T13:00:31Z",
            "thumbnail": "https://i.ytimg.com/vi/A8oiNnKCeQ8/hqdefault.jpg",
            "excerpt": null,
            "metric": 6618,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:29.385Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Why Use a Glass Sealant If Ceramic Detail Spray Already Works?",
            "url": "https://www.youtube.com/watch?v=mtdkyRTbVaA",
            "at": "2026-08-05T13:00:01Z",
            "thumbnail": "https://i.ytimg.com/vi/mtdkyRTbVaA/hqdefault.jpg",
            "excerpt": null,
            "metric": 10139,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:29.385Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__itshunterfriesen",
        "name": "itshunterfriesen",
        "handle": "@itshunterfriesen",
        "initials": "IT",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=49f8cfb9&x-expires=1786647600&x-signature=TzzIRhNjg18HxQFOH6A5rYrHkpk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@itshunterfriesen",
            "followers": 103600,
            "url": "https://www.tiktok.com/@itshunterfriesen",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=49f8cfb9&x-expires=1786647600&x-signature=TzzIRhNjg18HxQFOH6A5rYrHkpk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-13T19:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 103600
        },
        "score": 39,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 27,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no newsletter, no store",
                "weightPct": 100,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "15 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "15 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He's clearly working in short-form video at scale — 103.6k TikTok followers and 4.0m likes means the clips land and the format repeats — and nothing visible contradicts the brief, though the actual category of his content isn't confirmed by anything here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 54,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-11",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 78,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-11",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-11",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-11",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 40,
            "note": "they link to it themselves",
            "observedAt": "2026-08-11",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — business inquiries",
            "observedAt": "2026-08-11",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-11",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-11",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-11",
            "engine": "rule",
            "label": "abandonment"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-11",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__brettkollmann",
        "name": "brettkollmann",
        "handle": "@brettkollmann",
        "initials": "BR",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_ngsjNgRvBs_OwjydpFOjS4dG0CRnIgvHsn4fH_rN8Elf8=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@brettkollmann",
            "followers": 41300,
            "url": "https://www.tiktok.com/@brettkollmann",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/dd7d7c4fdced004fee525ee4a9fcc459~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=97040e15&x-expires=1786647600&x-signature=m0b%2BHwbP228kM6IqKZhCjps5Jdg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-13T19:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@brettkollmann",
            "followers": 459000,
            "url": "https://www.youtube.com/@brettkollmann",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_ngsjNgRvBs_OwjydpFOjS4dG0CRnIgvHsn4fH_rN8Elf8=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 459000
        },
        "score": 36,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 25,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no own website",
                "weightPct": 100,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 11,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−77% vs baseline",
                "weightPct": 100,
                "detail": "0.3 videos a month now, against 1.4 before that — down 76%; the recent ones are getting 128% more views — 11.2 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He's an NFL-focused YouTuber whose bio ('All 32. Every City. Every Team.') and large YouTube following point squarely at on-camera NFL analysis, and while the scraped posts don't show the weekly cadence, nothing visible contradicts the brief."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 9,
            "note": "found it — youtube.com/@brettkollmann",
            "observedAt": "2026-08-11",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 53,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-11",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-11",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 24,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 14,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-11",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 24,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-11",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-11",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-11",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-11",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Does \"establishing the run\" even work?",
            "url": "https://www.youtube.com/watch?v=-W6orkJ_-Qg",
            "at": "2026-05-30T05:12:39Z",
            "thumbnail": "https://i.ytimg.com/vi/-W6orkJ_-Qg/hqdefault.jpg",
            "excerpt": null,
            "metric": 342663,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:01:50.455Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Why do so many elite pass rushers have short arms?",
            "url": "https://www.youtube.com/watch?v=sK78GNRzQ08",
            "at": "2026-04-23T18:28:18Z",
            "thumbnail": "https://i.ytimg.com/vi/sK78GNRzQ08/hqdefault.jpg",
            "excerpt": null,
            "metric": 220779,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:01:50.455Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The 2026 Live Mock Draft Special",
            "url": "https://www.youtube.com/watch?v=LuS4jVbKuxY",
            "at": "2026-04-22T01:26:35Z",
            "thumbnail": "https://i.ytimg.com/vi/LuS4jVbKuxY/hqdefault.jpg",
            "excerpt": null,
            "metric": 42630,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:01:50.456Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Drinking Malört and reviewing every team's offseason (so far)",
            "url": "https://www.youtube.com/watch?v=wypHhinnGrs",
            "at": "2026-03-28T04:39:06Z",
            "thumbnail": "https://i.ytimg.com/vi/wypHhinnGrs/hqdefault.jpg",
            "excerpt": null,
            "metric": 47590,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:01:50.456Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__pinehollowautodiagnostics",
        "name": "pinehollowautodiagnostics",
        "handle": "@pinehollowautodiagnostics",
        "initials": "PI",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_m6q_coUUXSjEwX1lDneeYhGejOp8A04xyoHz-JmQGV6Uc=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@pinehollowautodiagnostics",
            "followers": 277000,
            "url": "https://www.youtube.com/@pinehollowautodiagnostics",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_m6q_coUUXSjEwX1lDneeYhGejOp8A04xyoHz-JmQGV6Uc=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 277000
        },
        "score": 28,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 28,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter, no own website",
                "weightPct": 99,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "4 purchase-intent comments",
                "weightPct": 1,
                "detail": "4 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−2% vs baseline",
                "weightPct": 0,
                "detail": "14 videos a month now, against 15 before that — down 2%; the recent ones are getting 20% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He runs a repeatable format — live troubleshooting of real customer cars, organized into playlists by category and manufacturer — in automotive diagnostics, a category with proven demand, and the diagnostic 'gotcha' moments are naturally clippable even if his current uploads are long-form."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — youtube.com/@pinehollowautodiagnostics",
            "observedAt": "2026-08-11",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-11",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 29,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-11",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 11,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-11",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-11",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-11",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-11",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "First you got me back into soldering over crimping. You may be convincing me more after this video. Love my TS 101 still need a Battery pack just cord for now till I break down and buy a battery pack👊🏻",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Great video Ivan. Can I ask you a question? Can you please show us here on you tube on how to drag test and unpin wire connectors and is there any special tools that can help with this sort of work?? Have a great day and again great video.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "First you got me back into soldering over crimping. You may be convincing me more after this video. Love my TS 101 still need a Battery pack just cord for now till I break down and buy a battery pack👊🏻",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "i just have your videos teaching me everything 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-11",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "(Pt 3) Beached Whale for a YEAR?! CRAZY Conclusion!! ('16 Camaro Turbo)",
            "url": "https://www.youtube.com/watch?v=uJUEIADNgdA",
            "at": "2026-08-09T10:00:08Z",
            "thumbnail": "https://i.ytimg.com/vi/uJUEIADNgdA/hqdefault.jpg",
            "excerpt": null,
            "metric": 38911,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:01.668Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "(Pt 2) Beached Whale for a YEAR?! Cranks NON-STOP?! ('16 Camaro Turbo)",
            "url": "https://www.youtube.com/watch?v=s0ONDuxpRd8",
            "at": "2026-08-08T10:00:12Z",
            "thumbnail": "https://i.ytimg.com/vi/s0ONDuxpRd8/hqdefault.jpg",
            "excerpt": null,
            "metric": 37796,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:01.668Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "(Pt 1) Beached Whale for a YEAR?! Parts Cannon DISASTER! ('16 Camaro Turbo)",
            "url": "https://www.youtube.com/watch?v=zSlX5YJL3Nc",
            "at": "2026-08-07T10:00:28Z",
            "thumbnail": "https://i.ytimg.com/vi/zSlX5YJL3Nc/hqdefault.jpg",
            "excerpt": null,
            "metric": 40907,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:01.668Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Florida Caddy...BUTCHERED in PA?! ('10 Escalade V8: Runs on 4 Cylinders?!)",
            "url": "https://www.youtube.com/watch?v=6tKEZGtkUGE",
            "at": "2026-08-05T10:00:17Z",
            "thumbnail": "https://i.ytimg.com/vi/6tKEZGtkUGE/hqdefault.jpg",
            "excerpt": null,
            "metric": 42974,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:01.668Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__ratchetsandwrenches",
        "name": "ratchetsandwrenches",
        "handle": "@ratchetsandwrenches",
        "initials": "RA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d61c2b1b339a7bd130c84b5c5c9dc0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=dfca3526&x-expires=1786647600&x-signature=dG7KElz9pPSPZuWGQ609WS%2BoGTs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@ratchetsandwrenches",
            "followers": 18,
            "url": "https://www.tiktok.com/@ratchetsandwrenches",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d61c2b1b339a7bd130c84b5c5c9dc0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=dfca3526&x-expires=1786647600&x-signature=dG7KElz9pPSPZuWGQ609WS%2BoGTs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-13T19:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 18
        },
        "score": 28,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 28,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no youtube channel",
                "weightPct": 100,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Nothing visible is wrong for this brief — it's a working garage posting short videos, which is a repeatable clippable format in a category people genuinely watch, though I can't confirm the actual quality or consistency of the posts since none are readable here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 31,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-11",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-11",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 31,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-11",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 11,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-11",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-11",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-11",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-11",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-11",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__motorcitymechanic",
        "name": "motorcitymechanic",
        "handle": "@motorcitymechanic",
        "initials": "MO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kaFAoWrqsWdm_zVN9kvkf6_Rgh6XcM79nb_diHLVIPN-U=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@motorcitymechanic",
            "followers": 252000,
            "url": "https://www.youtube.com/@motorcitymechanic",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kaFAoWrqsWdm_zVN9kvkf6_Rgh6XcM79nb_diHLVIPN-U=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 252000
        },
        "score": 28,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 28,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter, no membership",
                "weightPct": 97,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "10 purchase-intent comments",
                "weightPct": 3,
                "detail": "10 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 5 uploads in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Nothing visible contradicts the brief — the handle and a 252k-subscriber YouTube channel point to auto repair, a category with real demand and a naturally repeatable, clippable fix-it format, though the scraped bio and 'recent posts' are just site boilerplate so the actual content and cadence are unconfirmed."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — youtube.com/@motorcitymechanic",
            "observedAt": "2026-08-11",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-11",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 29,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-11",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-11",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 13,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-11",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 8,
            "note": "something at youtube.com/user/vipertech30813 — not confirmed as theirs",
            "observedAt": "2026-08-11",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-11",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-11",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-11",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-11",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I currently have a valve cover leak. I purchased the 13mm wrenches as suggested.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I really appreciate your Channel, it's very helpful. My stepdaughter is on a budget with her Chrysler 200 and I'm going to need some cams. Are there any aftermarket cams that can be trusted?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I really appreciate your Channel, it's very helpful. My stepdaughter is on a budget with her Chrysler 200 and I'm going to need some cams. Are there any aftermarket cams that can be trusted?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I purchased the 13mm wrenches as suggested.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I purchased the 13mm wrenches as suggested.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-11",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-11",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "WARNING: Chrysler, Dodge, Jeep, Ram 3.6L Pentastar engine loose oil galley bolts, make sure to check",
            "url": "https://www.youtube.com/watch?v=KNZFFciXKk8",
            "at": "2025-12-18T16:08:38Z",
            "thumbnail": "https://i.ytimg.com/vi/KNZFFciXKk8/hqdefault.jpg",
            "excerpt": null,
            "metric": 79490,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:11.576Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "2021-2025 WL Jeep Grand Cherokee main battery replacement",
            "url": "https://www.youtube.com/watch?v=bFA2vI2Fiso",
            "at": "2025-10-10T16:01:13Z",
            "thumbnail": "https://i.ytimg.com/vi/bFA2vI2Fiso/hqdefault.jpg",
            "excerpt": null,
            "metric": 76114,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:11.577Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "2021-2025 WL Jeep Grand Cherokee Park Override Procedure",
            "url": "https://www.youtube.com/watch?v=yvvRtFe4nPQ",
            "at": "2025-10-07T16:01:41Z",
            "thumbnail": "https://i.ytimg.com/vi/yvvRtFe4nPQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 19323,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:11.577Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "2017-2021 Jeep Compass tail light bulbs and housing/assembly replacement",
            "url": "https://www.youtube.com/watch?v=NYO_b3dWwzQ",
            "at": "2025-09-10T16:00:43Z",
            "thumbnail": "https://i.ytimg.com/vi/NYO_b3dWwzQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 6508,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-11T19:02:11.577Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__missunderstoodpod",
        "name": "missunderstoodpod",
        "handle": "@missunderstoodpod",
        "initials": "MI",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/56838d8da04ad98f2e66d8d624c0c338~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4bf02dc4&x-expires=1786568400&x-signature=LLTfd0tsOeByhNU31FOtKUu6Yu0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@missunderstoodpod",
            "followers": 23600,
            "url": "https://www.tiktok.com/@missunderstoodpod",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/56838d8da04ad98f2e66d8d624c0c338~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4bf02dc4&x-expires=1786568400&x-signature=LLTfd0tsOeByhNU31FOtKUu6Yu0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 23600
        },
        "score": 26,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 14,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no youtube channel, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "14 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "14 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 2 dated posts came back — not enough to read a posting rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "A podcast that retells the full story behind people flattened into one headline is inherently clippable, the episode-per-subject structure repeats forever, and true-crime-adjacent culture retellings are a category with proven demand — the 528k likes on 23.6k followers back that up."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 54,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 77,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 50,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — https://podcasts.apple.com/us/podcast/miss-understood-podcast/id1229498987?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 37,
            "note": "they link to it themselves",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Miss Understood Podcast",
            "kind": "episode",
            "title": "Miss25 Mixdown",
            "url": "https://soundcloud.com/miss-understood-249347191/miss25-mixdown",
            "at": "2017-10-24T05:06:08.000Z",
            "thumbnail": null,
            "excerpt": "Can you still be innocent and a freak?\nContact Us: TheMissUnderstoodGirls@gmail.com\nTwitter: @MsUnderstoodPod\nIG: @MissUnderstoodPodcast \nFollow The Girls:\n@ChloesBeautyy\n@Kia____b, kiab26\n@tene.marie, flowerchild_t\n@mylittlebox_8",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:02.779Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Miss Understood Podcast",
            "kind": "episode",
            "title": "Episode 24: Back From Hiding",
            "url": "https://soundcloud.com/miss-understood-249347191/episode-24-back-from-hiding",
            "at": "2017-10-12T01:18:14.000Z",
            "thumbnail": null,
            "excerpt": "Episode 24: Back From Hiding by Miss Understood",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:02.780Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 2,
          "why": "2 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__forensicdetailingchannel",
        "name": "forensicdetailingchannel",
        "handle": "@forensicdetailingchannel",
        "initials": "FO",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/2a64c8be36e48471b71b096831a65819~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=fc66aac6&x-expires=1786568400&x-signature=BpvMx3I9FWrIq8CTtn5K156svck%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@forensicdetailingchannel",
            "followers": 169,
            "url": "https://www.tiktok.com/@forensicdetailingchannel",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/2a64c8be36e48471b71b096831a65819~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=fc66aac6&x-expires=1786568400&x-signature=BpvMx3I9FWrIq8CTtn5K156svck%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 169
        },
        "score": 25,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 25,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no own website",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Testing detailing products is a repeatable format that cuts easily into clips, and car care is a category with real, proven demand, so this clears the bar the brief actually sets."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 16,
            "note": "something at youtube.com/c/forensicdetailingchannel — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 23,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__briansmobile1",
        "name": "briansmobile1",
        "handle": "@briansmobile1",
        "initials": "BR",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_k6tpOwGmaLxlPyZ0PyEozFqokRSDNQTLOuaI_AZ5tHFg=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@briansmobile1",
            "followers": 467000,
            "url": "https://www.youtube.com/@briansmobile1",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_k6tpOwGmaLxlPyZ0PyEozFqokRSDNQTLOuaI_AZ5tHFg=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 467000
        },
        "score": 25,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 25,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no own website",
                "weightPct": 100,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 1 upload in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Car repair how-to is a category people actively search for, the diagnose-and-fix tutorial is an endlessly repeatable format, and individual fixes clip cleanly into short standalone segments — the scraped 'recent posts' field is junk metadata, but the channel's premise is confirmable enough."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — youtube.com/@briansmobile1",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 30,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 23,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "KIA Hyundai No Start. Starter Buzz Fix.",
            "url": "https://www.youtube.com/watch?v=ReXXaV8BS28",
            "at": "2026-02-15T21:30:04Z",
            "thumbnail": "https://i.ytimg.com/vi/ReXXaV8BS28/hqdefault.jpg",
            "excerpt": null,
            "metric": 2492,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:15.963Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Old Jeep Stuck Key Fixes 4K",
            "url": "https://www.youtube.com/watch?v=z49CF7VpfQE",
            "at": "2025-07-21T03:37:10Z",
            "thumbnail": "https://i.ytimg.com/vi/z49CF7VpfQE/hqdefault.jpg",
            "excerpt": null,
            "metric": 8542,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:15.963Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Speed governor options for 2017 Dodge vehicles using Xtool D7 scanner.  What option is better?",
            "url": "https://www.youtube.com/watch?v=1LMY1L6vxFs",
            "at": "2025-06-06T20:18:50Z",
            "thumbnail": "https://i.ytimg.com/vi/1LMY1L6vxFs/hqdefault.jpg",
            "excerpt": null,
            "metric": 5772,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:15.963Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "What to replace & why on vehicle drum brakes.",
            "url": "https://www.youtube.com/watch?v=iHVxY2s7T6o",
            "at": "2025-02-28T05:17:41Z",
            "thumbnail": "https://i.ytimg.com/vi/iHVxY2s7T6o/hqdefault.jpg",
            "excerpt": null,
            "metric": 5014,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:15.963Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__fordtechmakuloco",
        "name": "fordtechmakuloco",
        "handle": "@fordtechmakuloco",
        "initials": "FO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lbuR3B_9sJqPJffysQqEWqtN_KGvt0jg9H7jnNpxnPGWA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@fordtechmakuloco",
            "followers": 31,
            "url": "https://www.tiktok.com/@fordtechmakuloco",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/896cc8e0a896b78df1e7c50195d7cd99~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f7fd376c&x-expires=1786568400&x-signature=GGmSIHj9fCrNUPjyT3KdpczIv1k%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@fordtechmakuloco",
            "followers": 944000,
            "url": "https://www.youtube.com/@fordtechmakuloco",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lbuR3B_9sJqPJffysQqEWqtN_KGvt0jg9H7jnNpxnPGWA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 944000
        },
        "score": 25,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 25,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no own website",
                "weightPct": 99,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "2 purchase-intent comments",
                "weightPct": 1,
                "detail": "2 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "+22% vs baseline",
                "weightPct": 0,
                "detail": "2.7 videos a month now, against 2.2 before that — up 22%, they are posting more; the recent ones are getting 37% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He runs a repeatable how-to format — Ford repairs, upgrades and maintenance walkthroughs — in a DIY-auto category with real search demand, and repair steps clip cleanly into short segments."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — youtube.com/@fordtechmakuloco",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 39,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 19,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "Like to see repair video on 05 Ford Escspes",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Watch all your videos when are you going to make more repair videos showing how the problem is found and repaired on video?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "This Ford Explorer is a death trap!",
            "url": "https://www.youtube.com/watch?v=ZDCu5nIiL_c",
            "at": "2026-08-06T23:29:40Z",
            "thumbnail": "https://i.ytimg.com/vi/ZDCu5nIiL_c/hqdefault.jpg",
            "excerpt": null,
            "metric": 30395,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:22.059Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Always get a second or third opinion. It can save you thousands in unnecessary repairs! #shorts",
            "url": "https://www.youtube.com/watch?v=0pPhCpe65uE",
            "at": "2026-07-31T21:47:41Z",
            "thumbnail": "https://i.ytimg.com/vi/0pPhCpe65uE/hqdefault.jpg",
            "excerpt": null,
            "metric": 49883,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:22.059Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Another Ford F-150 Differential FAILURE! #shorts",
            "url": "https://www.youtube.com/watch?v=3eULZRjAyLE",
            "at": "2026-07-11T23:51:31Z",
            "thumbnail": "https://i.ytimg.com/vi/3eULZRjAyLE/hqdefault.jpg",
            "excerpt": null,
            "metric": 52306,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:22.059Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "They Just Don’t Make Them Like They Used To! #shorts",
            "url": "https://www.youtube.com/watch?v=lfx_j6Ioa3k",
            "at": "2026-07-11T00:16:15Z",
            "thumbnail": "https://i.ytimg.com/vi/lfx_j6Ioa3k/hqdefault.jpg",
            "excerpt": null,
            "metric": 72698,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:22.060Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__watchweswork",
        "name": "watchweswork",
        "handle": "@watchweswork",
        "initials": "WA",
        "avatar": "https://yt3.googleusercontent.com/aTizCBe5rDNn8Dm_gZir5mNP6fFQptCgUW370B9rBbHCsa7CQPfIllAUcZNkdIra2JSidqS8nQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@watchweswork",
            "followers": 65,
            "url": "https://www.tiktok.com/@watchweswork",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/237dcdad9218ef057dd9b3ccf763c2c9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8096ac99&x-expires=1786568400&x-signature=S8CYCnm9zNhTkpPqEMceJCUlrwE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@watchweswork",
            "followers": 447000,
            "url": "https://www.youtube.com/@watchweswork",
            "avatar": "https://yt3.googleusercontent.com/aTizCBe5rDNn8Dm_gZir5mNP6fFQptCgUW370B9rBbHCsa7CQPfIllAUcZNkdIra2JSidqS8nQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 447000
        },
        "score": 24,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 24,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter, no podcast",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "1 purchase-intent comment",
                "weightPct": 0,
                "detail": "1 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−24% vs baseline",
                "weightPct": 0,
                "detail": "0.7 videos a month now, against 0.9 before that — down 24%; the recent ones are getting 31% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He films real fix-it and build jobs — a repeatable format with obvious clippable moments in the home repair/DIY category, and a 446k YouTube audience says the format already works."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@watchweswork",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 25,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 7,
            "note": "something at patreon.com/WatchWesWork — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — watchweswork.com",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I bought a rock rake from Lee Valley. Great to see a genius at work!Thanks Wes.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "I Invented a New Tool - I Can't Explain Why",
            "url": "https://www.youtube.com/watch?v=dq2IHcjF9r8",
            "at": "2026-07-27T22:24:19Z",
            "thumbnail": "https://i.ytimg.com/vi/dq2IHcjF9r8/hqdefault.jpg",
            "excerpt": null,
            "metric": 264818,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:12.521Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "I Was Fixing a Fuel Tank - It Did Not Go Well",
            "url": "https://www.youtube.com/watch?v=s4moCCh2zDE",
            "at": "2026-05-16T12:04:47Z",
            "thumbnail": "https://i.ytimg.com/vi/s4moCCh2zDE/hqdefault.jpg",
            "excerpt": null,
            "metric": 477491,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:12.522Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Waking A Forgotten Cat and Boring A Stretched Hole",
            "url": "https://www.youtube.com/watch?v=DGKkuGtQKek",
            "at": "2026-03-17T17:35:43Z",
            "thumbnail": "https://i.ytimg.com/vi/DGKkuGtQKek/hqdefault.jpg",
            "excerpt": null,
            "metric": 841472,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:12.522Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "I Bought an Old Broken Press Brake - Can I Fix It?",
            "url": "https://www.youtube.com/watch?v=X4z7UmUZyig",
            "at": "2026-01-14T18:49:46Z",
            "thumbnail": "https://i.ytimg.com/vi/X4z7UmUZyig/hqdefault.jpg",
            "excerpt": null,
            "metric": 735282,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:12.522Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__packadaypodcast",
        "name": "packadaypodcast",
        "handle": "@packadaypodcast",
        "initials": "PA",
        "avatar": "https://yt3.googleusercontent.com/nuDc9RhuCOv3mGj3RPlk_K-fGC-J2PNtr5PuiK9URLdXuRNkEbK9yGWPkdTGDBpU-v9RTSz_-i8=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@packadaypodcast",
            "followers": 42800,
            "url": "https://www.youtube.com/@packadaypodcast",
            "avatar": "https://yt3.googleusercontent.com/nuDc9RhuCOv3mGj3RPlk_K-fGC-J2PNtr5PuiK9URLdXuRNkEbK9yGWPkdTGDBpU-v9RTSz_-i8=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 42800
        },
        "score": 23,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 23,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no membership",
                "weightPct": 99,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "2 purchase-intent comments",
                "weightPct": 1,
                "detail": "2 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — they post often enough that 200 videos only reach back 62 days — not far enough behind the last 90 to compare against"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "A daily Packers videocast is an obviously repeatable format in a category with huge built-in demand, and its news/rumors/grades segments are naturally clippable — the scraped 'recent posts' are page boilerplate, not real evidence against it."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@packadaypodcast",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 35,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 24,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 16,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 10,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 8,
            "note": "something at packadaypodcast.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "membership"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "membership"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "LIVE Packers Training Camp Day 10 Recap!!!",
            "url": "https://www.youtube.com/watch?v=phpr2N78sQ4",
            "at": "2026-08-10T20:14:21Z",
            "thumbnail": "https://i.ytimg.com/vi/phpr2N78sQ4/hqdefault.jpg",
            "excerpt": null,
            "metric": 2597,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:37.455Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Matthew Golden looked unstoppable on Family Night",
            "url": "https://www.youtube.com/watch?v=iDT0OPRcUj8",
            "at": "2026-08-10T14:17:29Z",
            "thumbnail": "https://i.ytimg.com/vi/iDT0OPRcUj8/hqdefault.jpg",
            "excerpt": null,
            "metric": 1455,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:37.456Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Packers Training Camp Report - Day 9!!!",
            "url": "https://www.youtube.com/watch?v=aJjAsNMSh6o",
            "at": "2026-08-10T09:00:34Z",
            "thumbnail": "https://i.ytimg.com/vi/aJjAsNMSh6o/hqdefault.jpg",
            "excerpt": null,
            "metric": 6327,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:37.456Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "LIVE Packers Training Camp Day 12 Recap!!!",
            "url": "https://www.youtube.com/watch?v=mBfHVlUrOe4",
            "at": "2026-08-10T06:30:44Z",
            "thumbnail": "https://i.ytimg.com/vi/mBfHVlUrOe4/hqdefault.jpg",
            "excerpt": null,
            "metric": 0,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:37.457Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__ratarossa",
        "name": "ratarossa",
        "handle": "@ratarossa",
        "initials": "RA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mvGJnO5rIlKwVo6rxjYaFII3Yu-G47uZ6-LuzEWN0Nduk=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@ratarossa",
            "followers": 2606,
            "url": "https://www.tiktok.com/@ratarossa",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7324875266119008261~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d6a4a03c&x-expires=1786568400&x-signature=9%2BrY1Mm5n1syA7UjP5ECULqUCHM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@ratarossa",
            "followers": 289000,
            "url": "https://www.youtube.com/@ratarossa",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mvGJnO5rIlKwVo6rxjYaFII3Yu-G47uZ6-LuzEWN0Nduk=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 289000
        },
        "score": 22,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 22,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no own website",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "+93% vs baseline",
                "weightPct": 0,
                "detail": "4 videos a month now, against 2.1 before that — up 93%, they are posting more; the recent ones are getting 16% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He buys and rebuilds cheap, broken Ferraris — a clippable premise in a repeatable project-car format inside the automotive category people clearly want, backed by 289k YouTube subscribers."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@ratarossa",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 25,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at patreon.com/ratarossa — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Was My Ferrari 308 Just Fixed With a Simple £18 Part !",
            "url": "https://www.youtube.com/watch?v=_gn0P3fl0ao",
            "at": "2026-08-09T18:00:15Z",
            "thumbnail": "https://i.ytimg.com/vi/_gn0P3fl0ao/hqdefault.jpg",
            "excerpt": null,
            "metric": 21866,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:27.651Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Why My Ferrari 308 Project Has Been Hiding In The Shadows...",
            "url": "https://www.youtube.com/watch?v=a1WZhk2mQ9w",
            "at": "2026-08-06T18:00:00Z",
            "thumbnail": "https://i.ytimg.com/vi/a1WZhk2mQ9w/hqdefault.jpg",
            "excerpt": null,
            "metric": 28465,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:27.651Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Rebuilding the Ferrari BBi: A Viewer Helped Recovering Lost Rare Parts",
            "url": "https://www.youtube.com/watch?v=CVWyYlJxhGM",
            "at": "2026-07-30T18:30:01Z",
            "thumbnail": "https://i.ytimg.com/vi/CVWyYlJxhGM/hqdefault.jpg",
            "excerpt": null,
            "metric": 80636,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:27.651Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Ferrari Refused to Help, So I Spent Insane Money to ReBuild It",
            "url": "https://www.youtube.com/watch?v=z3GJWOVbKw4",
            "at": "2026-07-25T18:08:36Z",
            "thumbnail": "https://i.ytimg.com/vi/z3GJWOVbKw4/hqdefault.jpg",
            "excerpt": null,
            "metric": 84079,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:27.651Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__thedraftnetwork",
        "name": "thedraftnetwork",
        "handle": "@thedraftnetwork",
        "initials": "TH",
        "avatar": "https://yt3.googleusercontent.com/g7wmZtzs6p2hNXa2XcJvAn4d4YMm1ZUjszkWYAc95A1dq0jS_KsSdGBSB0RPzs6RsHBaD3ez=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@thedraftnetwork",
            "followers": 3,
            "url": "https://www.tiktok.com/@thedraftnetwork",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/4acadc1d7690b971931cf0555a304d13~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=3369ad1f&x-expires=1786568400&x-signature=hLTA1KebH17eaB0p5K3NHNkzDGs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@thedraftnetwork",
            "followers": 15800,
            "url": "https://www.youtube.com/@thedraftnetwork",
            "avatar": "https://yt3.googleusercontent.com/g7wmZtzs6p2hNXa2XcJvAn4d4YMm1ZUjszkWYAc95A1dq0jS_KsSdGBSB0RPzs6RsHBaD3ez=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 15800
        },
        "score": 22,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 10,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−100% vs baseline",
                "weightPct": 100,
                "detail": "nothing posted in 90 days, after 45 a month before that — 12 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "NFL Draft film breakdowns are an inherently clippable, endlessly repeatable format in a category with huge built-in demand, and they have a real YouTube presence doing exactly that — the thin TikTok footprint doesn't contradict the brief."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@thedraftnetwork",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 40,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 19,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/commanding-the-huddle/id1614872756?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — thedraftnetwork.com",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Their site",
            "publication": "TheDraftNetwork.com",
            "kind": "writing",
            "title": "Keyshaun Elliott: Why the Chicago Bears' 2026 Draft Pick Could Be a Steal",
            "url": "https://www.thedraftnetwork.com/2026/05/06/keyshaun-elliott-chicago-bears-2026-draft-pick-steal",
            "at": "2026-05-06T14:14:17.000Z",
            "thumbnail": null,
            "excerpt": "Keyshaun Elliott might be the best value pick in the Chicago Bears' 2026 NFL Draft class. Before you sleep on the fifth-round linebacker, watch his Draft Network interview — then tell us he's just a depth chart filler.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:35:34.839Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Prince Dorbah's Brother The REAL MVP Behind His Success!",
            "url": "https://www.youtube.com/watch?v=xDLp4OhZYeM",
            "at": "2026-04-10T22:01:00Z",
            "thumbnail": "https://i.ytimg.com/vi/xDLp4OhZYeM/hqdefault.jpg",
            "excerpt": null,
            "metric": 1702,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:31.434Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Commanding The Huddle",
            "kind": "episode",
            "title": "Personal News... Thank you guys!!!",
            "url": "https://bleav.com/shows/commanding-the-huddle/episodes/personal-news-thank-you-guys/",
            "at": "2026-03-27T16:07:00.000Z",
            "thumbnail": null,
            "excerpt": "Thank you guys for everything over the years!! Stay in touch. Hosted by Simplecast, an AdsWizz company. See https://pcm.adswizz.com\nfor information about our collection and use of personal data for\nadvertising.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:34.838Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "TheDraftNetwork.com",
            "kind": "writing",
            "title": "2026 NFL Mock Draft: Final Predictions",
            "url": "https://www.thedraftnetwork.com/2026/04/19/2026-nfl-mock-draft-final",
            "at": "2026-04-20T02:16:19.000Z",
            "thumbnail": null,
            "excerpt": "It is finally 2026 NFL Draft week. Check out my final mock draft for the 2026 NFL Draft and see which players I have teams selecting.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:35:34.839Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 6,
          "why": "6 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__detailgroove",
        "name": "detailgroove",
        "handle": "@detailgroove",
        "initials": "DE",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nE6A6ydVDHJ9FONG2zKnvDEsUcLXL-DPPcBeb6kx3CeAY=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@detailgroove",
            "followers": 152,
            "url": "https://www.tiktok.com/@detailgroove",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7321576095327748101~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=58294101&x-expires=1786568400&x-signature=49bcCgjeKm4zLiq09hO%2FELCfK2c%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@detailgroove",
            "followers": 252000,
            "url": "https://www.youtube.com/@detailgroove",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nE6A6ydVDHJ9FONG2zKnvDEsUcLXL-DPPcBeb6kx3CeAY=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 252000
        },
        "score": 21,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 21,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−22% vs baseline",
                "weightPct": 0,
                "detail": "13 videos a month now, against 17 before that — down 22%; the recent ones are getting 53% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Car detailing is inherently clippable satisfying content in a repeatable before/after format and a category with proven demand, and the 252k YouTube following shows the format lands."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@detailgroove",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 29,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 16,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 11,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at detailgroove.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The ONE Thing Every Pro Detailer Ignores (You're Bleeding Money)",
            "url": "https://www.youtube.com/watch?v=Qg__FLULcdI",
            "at": "2026-08-07T22:56:10Z",
            "thumbnail": "https://i.ytimg.com/vi/Qg__FLULcdI/hqdefault.jpg",
            "excerpt": null,
            "metric": 602,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:06.637Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The REAL Math Behind Growing Your Detailing Business",
            "url": "https://www.youtube.com/watch?v=1bkV4JjJga8",
            "at": "2026-08-05T14:11:05Z",
            "thumbnail": "https://i.ytimg.com/vi/1bkV4JjJga8/hqdefault.jpg",
            "excerpt": null,
            "metric": 514,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:06.637Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Why Every Pro Detailer Should Use These Two Tools",
            "url": "https://www.youtube.com/watch?v=bL03mSCwhjY",
            "at": "2026-07-31T23:31:21Z",
            "thumbnail": "https://i.ytimg.com/vi/bL03mSCwhjY/hqdefault.jpg",
            "excerpt": null,
            "metric": 457,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:06.637Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "How To Detail Cars in EXTREME Heat (Must Do For Mobile Detailers)",
            "url": "https://www.youtube.com/watch?v=AcVq6qYPhEA",
            "at": "2026-07-29T12:22:25Z",
            "thumbnail": "https://i.ytimg.com/vi/AcVq6qYPhEA/hqdefault.jpg",
            "excerpt": null,
            "metric": 1364,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:06.637Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__schrodingersbox",
        "name": "schrodingersbox",
        "handle": "@schrodingersbox",
        "initials": "SC",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kP4aSo1P6OyrtDTooWQvhPoslPg9rwdAS5S8XQN_78DpM=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@schrodingersbox",
            "followers": null,
            "url": "https://www.tiktok.com/@schrodingersbox",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7324163600040656901~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=accdaf12&x-expires=1786568400&x-signature=Tigos25nVAzX7nnEylJDXG8ofQI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@schrodingersbox",
            "followers": 302000,
            "url": "https://www.youtube.com/@schrodingersbox",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kP4aSo1P6OyrtDTooWQvhPoslPg9rwdAS5S8XQN_78DpM=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 302000
        },
        "score": 21,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 21,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−19% vs baseline",
                "weightPct": 0,
                "detail": "4.3 videos a month now, against 5.3 before that — down 19%; the recent ones are getting 48% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "It's a DIY auto repair and diagnostics YouTube channel with 301,000 subscribers, well over the 25,000 threshold, and hands-on car work is the whole premise — though the thin post evidence means I can't directly confirm on-camera product/tool naming, nothing visible contradicts it."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@schrodingersbox",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 23,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 19,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 8,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 7,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Which of Us Will Win World's Hottest Chocolate Bar Challenge?",
            "url": "https://www.youtube.com/watch?v=9LO9zBBj1pc",
            "at": "2026-07-26T02:48:16Z",
            "thumbnail": "https://i.ytimg.com/vi/9LO9zBBj1pc/hqdefault.jpg",
            "excerpt": null,
            "metric": 1273,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:23.657Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "2021 Buick Intermittent Check Engine Light, Runs Rich, NO CODES  How Would You Fix??",
            "url": "https://www.youtube.com/watch?v=TU0V7b_3_bg",
            "at": "2026-07-15T23:16:47Z",
            "thumbnail": "https://i.ytimg.com/vi/TU0V7b_3_bg/hqdefault.jpg",
            "excerpt": null,
            "metric": 3678,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:23.657Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "I'm Back! Jeep No A/C after dealer fix, Plus 5 other problems!!",
            "url": "https://www.youtube.com/watch?v=5rQJMedJB34",
            "at": "2026-06-30T01:43:36Z",
            "thumbnail": "https://i.ytimg.com/vi/5rQJMedJB34/hqdefault.jpg",
            "excerpt": null,
            "metric": 3946,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:23.657Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Kingbolen K8 Pro Review-FREE Lifetime updates, NO FEES!!!",
            "url": "https://www.youtube.com/watch?v=LKSswkWT4XI",
            "at": "2026-06-18T20:54:31Z",
            "thumbnail": "https://i.ytimg.com/vi/LKSswkWT4XI/hqdefault.jpg",
            "excerpt": null,
            "metric": 6082,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:23.658Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__sharpfootballanalysis",
        "name": "sharpfootballanalysis",
        "handle": "@sharpfootballanalysis",
        "initials": "SH",
        "avatar": "https://yt3.googleusercontent.com/_-O1qQ4cb9I3_Sbg3lI0qQb2iIvNFFcuWZzUKJzG-q497uJA17hKQGhZRdQJoQhjFZzlQX1ECQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@sharpfootballanalysis",
            "followers": 13400,
            "url": "https://www.youtube.com/@sharpfootballanalysis",
            "avatar": "https://yt3.googleusercontent.com/_-O1qQ4cb9I3_Sbg3lI0qQb2iIvNFFcuWZzUKJzG-q497uJA17hKQGhZRdQJoQhjFZzlQX1ECQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 13400
        },
        "score": 21,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 19,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no membership",
                "weightPct": 100,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 2,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−36% vs baseline",
                "weightPct": 100,
                "detail": "23 videos a month now, against 37 before that — down 36%; the recent ones are getting 22% more views — 2.4 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "NFL betting and fantasy analytics is a category with huge appetite, and they run named recurring shows on a fixed Tuesday/Thursday/Sunday schedule with segment-style breakdowns, rankings and props that clip cleanly — the scraped 'recent posts' field is junk so actual clip performance is unconfirmed, but the format itself is clearly repeatable."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 17,
            "note": "found it — youtube.com/@sharpfootballanalysis",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 36,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — https://podcasts.apple.com/us/podcast/sharp-football-analysis-by-warren-sharp/id1485652145?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — sharpfootballanalysis.com",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Their site",
            "publication": "Sharp Football Analysis",
            "kind": "writing",
            "title": "NFL Season Long Player Props: 2026 QB, RB & WR Picks",
            "url": "https://www.sharpfootballanalysis.com/betting/nfl-season-long-player-props/",
            "at": "2026-08-10T20:26:44.000Z",
            "thumbnail": null,
            "excerpt": "2026 NFL Prop Bets: Best QB, RB & WR Over/Unders\n \n Josh Allen – Over 24.5 Passing Touchdowns (-110)\n Fernando Mendoza – Under 2299.5 Passing Yards (-115)\n \n The picks above are just a sampling of the FREE player prop picks offered at Sharp Football Analysis.\n Click on any of the articles below for ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:35:29.125Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Justin Herbert's New Passing Coach 💀 #chargers #NFL",
            "url": "https://www.youtube.com/watch?v=CkgOcGviq3w",
            "at": "2026-08-10T20:05:07Z",
            "thumbnail": "https://i.ytimg.com/vi/CkgOcGviq3w/hqdefault.jpg",
            "excerpt": null,
            "metric": 236,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:24.873Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Sharp Football Analysis by Warren Sharp",
            "kind": "episode",
            "title": "Why the 2026 NFL Season Is More Wide Open Than Ever",
            "url": "https://www.sharpfootballanalysis.com/?utm_source=link-bio",
            "at": "2026-06-23T22:15:42.000Z",
            "thumbnail": null,
            "excerpt": "2026 NFL Preview Book is live with 619 pages of football betting edges, fantasy football rankings, NFL win totals, team previews, schedule analysis and futures market insight. \n Get the 2026 Football Preview: https://sharp.football \n The 2026 NFL season starts now. The new Sharp Football Preview is ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:29.125Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Sharp Football Analysis",
            "kind": "writing",
            "title": "Warren Sharp’s New Book “2026 Football Preview” – Now Available for Download",
            "url": "https://www.sharpfootballanalysis.com/betting/warren-sharps-new-book-2026-football-preview-now-available/",
            "at": "2026-08-10T13:05:38.000Z",
            "thumbnail": null,
            "excerpt": "Warren Sharp's new book, “ 2026 Football Preview, ” is now available for download. \n If you’ve already purchased the book, simply log in to the site and download the 600+ page PDF via your Dashboard . You'll see a red download button at the top of the page. \n Why is this year's book the best ever?\n ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:35:29.125Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 6,
          "why": "6 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__backseatcoach",
        "name": "backseatcoach",
        "handle": "@backseatcoach",
        "initials": "BA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kHxOdcTl9pN1bXVsBim_rLEs0zQjE8Q2TKD0F6zCefhg=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@backseatcoach",
            "followers": 85800,
            "url": "https://www.tiktok.com/@backseatcoach",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7329012677399805994~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b3a4a5c7&x-expires=1786568400&x-signature=eGPi8GDdv7HYmX8XSVQ2ZBBDiIE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@backseatcoach",
            "followers": 36,
            "url": "https://www.youtube.com/@backseatcoach",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kHxOdcTl9pN1bXVsBim_rLEs0zQjE8Q2TKD0F6zCefhg=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "audience": {
          "total": 85800
        },
        "score": 20,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 8,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "15 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "15 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — they post often enough that 200 posts only reach back 19 days — not far enough behind the last 90 to compare against"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Sports commentary and highlight clips are inherently clippable, the highlights/previews/interviews/hype-vid formats are clearly repeatable, and college and women's pro football is a category with real appetite — 5.5m likes on 85.8k TikTok followers shows the clips land."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 24,
            "note": "found it — youtube.com/@backseatcoach",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 82,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 53,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/todd-n-tyler-radio-empire/id1110804593?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 42,
            "note": "they link to it themselves",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Todd N Tyler Radio Empire",
            "kind": "episode",
            "title": "8/10 5-3 WHOOP WHOOP!",
            "url": null,
            "at": "2026-08-10T14:30:00.000Z",
            "thumbnail": null,
            "excerpt": "It's a special day in the history of ICP.\n See Privacy Policy at https://art19.com/privacy and California Privacy Notice at https://art19.com/privacy#do-not-sell-my-info .",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:47.737Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Boston Renegades on 3rd Hour Today Show",
            "url": "https://www.youtube.com/watch?v=exo_Q9E7ScQ",
            "at": "2020-09-01T14:34:40Z",
            "thumbnail": "https://i.ytimg.com/vi/exo_Q9E7ScQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 263,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:40.460Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Todd N Tyler Radio Empire",
            "kind": "episode",
            "title": "8/10 5-2 Machete vs. Hatchet",
            "url": null,
            "at": "2026-08-10T14:18:00.000Z",
            "thumbnail": null,
            "excerpt": "Dumbasses.\n See Privacy Policy at https://art19.com/privacy and California Privacy Notice at https://art19.com/privacy#do-not-sell-my-info .",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:47.737Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Todd N Tyler Radio Empire",
            "kind": "episode",
            "title": "8/10 5-1 LIVE Mascots",
            "url": null,
            "at": "2026-08-10T14:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Mike, the Tiger?\n See Privacy Policy at https://art19.com/privacy and California Privacy Notice at https://art19.com/privacy#do-not-sell-my-info .",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:47.737Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__samhartman_10",
        "name": "samhartman_10",
        "handle": "@samhartman_10",
        "initials": "SA",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c69638fb51dd863b0cebce682e972469~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8179236f&x-expires=1786568400&x-signature=OwHm4fvaWm9tNbeM6GjS5l1hCN0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@samhartman_10",
            "followers": 118200,
            "url": "https://www.tiktok.com/@samhartman_10",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c69638fb51dd863b0cebce682e972469~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8179236f&x-expires=1786568400&x-signature=OwHm4fvaWm9tNbeM6GjS5l1hCN0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 118200
        },
        "score": 20,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 20,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no store, no own website",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 2 dated posts came back — not enough to read a posting rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He's built 118k followers on short-form video, which is clippable and repeatable by nature, and nothing visible contradicts the brief — though his category is unconfirmed since the bio is a single emoji and no post topics are shown."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 51,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 57,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 55,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 35,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — https://podcasts.apple.com/us/podcast/writers-room-rejects/id1882461291?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 47,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Writers' Room Rejects",
            "kind": "episode",
            "title": "Morally Gray & Narratively Lost",
            "url": "https://a019b11b-cdbe-4481-8661-38a83f0b2dee.libsyn.com/morally-gray-narratively-lost",
            "at": "2026-03-04T19:19:00.000Z",
            "thumbnail": null,
            "excerpt": "On today's episode, we discuss two musicals, an anime series, and a book - what do they have in common? They are about very morally gray, in some instances disturbing, lead protagonists.\n Our main focus is Jesus Christ Superstar. It is an incredible musical that took a huge risk: Discussing tabboo t",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:53.265Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Writers' Room Rejects",
            "kind": "episode",
            "title": "When They Die, They're Dead",
            "url": "https://a019b11b-cdbe-4481-8661-38a83f0b2dee.libsyn.com/when-they-die-theyre-dead",
            "at": "2026-03-04T19:12:00.000Z",
            "thumbnail": null,
            "excerpt": "We are kicking off our show with a big one—Jujutsu Kaisen. In the world of JJK, many beloved characters are killed off very suddenly. But, death is not always the end. And this leads us to our main question: From a storytelling standpoint, how impactful is death if some characters just bounce right ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:53.265Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 2,
          "why": "2 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__brandonfwalker",
        "name": "brandonfwalker",
        "handle": "@brandonfwalker",
        "initials": "BR",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/00b63407150e9355ffa920c96a0fe8f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=af7fa163&x-expires=1786568400&x-signature=QXLpqa%2FSP00iIleFZIq1NGnBviM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@brandonfwalker",
            "followers": 139600,
            "url": "https://www.tiktok.com/@brandonfwalker",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/00b63407150e9355ffa920c96a0fe8f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=af7fa163&x-expires=1786568400&x-signature=QXLpqa%2FSP00iIleFZIq1NGnBviM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 139600
        },
        "score": 20,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 20,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no store, no own website",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 0 posts in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He hosts multiple named sports shows (CFB Show, Mostly Sports, Wake Up Barstool, The Yak), which is a repeatable format that naturally produces clips in college football and sports talk — a category with obvious demand."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 66,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 72,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 49,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 33,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/rasslin-with-brandon-f-walker/id1540836655?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Rasslin' with Brandon F. Walker",
            "kind": "episode",
            "title": "Hulk Hogan Wanted To Turn Heel At WrestleMania VI, Botching A Shirt Rip, Bobby Heenan As A Wrestler",
            "url": "https://www.barstoolsports.com/shows/barstool-podcast-3",
            "at": "2024-09-25T14:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Hulk Hogan joins Rasslin' and officially makes this podcast IMMORTAL. Hulk gave us 30 minutes of stories about Bobby Heenan, Paul Orndoff, Vince McMahon and more. Plus, we learn the origin of his famous three poses ... BROTHER!\n0:00 - Intro\n0:42 - The Beer Business - REAL AMERICAN BEER\n2:09 - Botchi",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:55.141Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__hayesfawcett",
        "name": "hayesfawcett",
        "handle": "@hayesfawcett",
        "initials": "HA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/001079e3d679b4692167fc3de2c6a9bb~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=32f4333a&x-expires=1786568400&x-signature=KAb8%2Fc7x7HoEA6j9L0e1CrmLW1k%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@hayesfawcett",
            "followers": 4372,
            "url": "https://www.tiktok.com/@hayesfawcett",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/001079e3d679b4692167fc3de2c6a9bb~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=32f4333a&x-expires=1786568400&x-signature=KAb8%2Fc7x7HoEA6j9L0e1CrmLW1k%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 4372
        },
        "score": 19,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 19,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no youtube channel, no own website",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Sports edits, highlights and recruiting news are inherently clippable, the edit/highlight format repeats endlessly, and college sports recruiting is a category with real demand — the 41.9k likes against a small follower count suggests the clips travel."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 55,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 79,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 55,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 38,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 19,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 41,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__gossipgilby",
        "name": "gossipgilby",
        "handle": "@gossipgilby",
        "initials": "GO",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/048294af7a7edb72fe6b2c8042b4d945~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f968c089&x-expires=1786568400&x-signature=NsQc06O%2Bs%2FSZYs0xB4jrFj6Zp%2BE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@gossipgilby",
            "followers": 6927,
            "url": "https://www.tiktok.com/@gossipgilby",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/048294af7a7edb72fe6b2c8042b4d945~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f968c089&x-expires=1786568400&x-signature=NsQc06O%2Bs%2FSZYs0xB4jrFj6Zp%2BE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 6927
        },
        "score": 19,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 19,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no youtube channel, no own website",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Pop culture hot takes are inherently clippable, the gossip-commentary format repeats endlessly, and the category has obvious demand — the 4.9m likes against a small follower count suggest the clips do travel."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 60,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 89,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 54,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 44,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 42,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__thoughtswgracie2_0",
        "name": "thoughtswgracie2.0",
        "handle": "@thoughtswgracie2.0",
        "initials": "TH",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e91679ca13e0ac33d00d7d29ae879c31~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=0077e206&x-expires=1786568400&x-signature=%2FmOT9d9mChWNO0mWPgoF%2BZa1akI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@thoughtswgracie2.0",
            "followers": 43500,
            "url": "https://www.tiktok.com/@thoughtswgracie2.0",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e91679ca13e0ac33d00d7d29ae879c31~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=0077e206&x-expires=1786568400&x-signature=%2FmOT9d9mChWNO0mWPgoF%2BZa1akI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 43500
        },
        "score": 18,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 6,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no membership",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "14 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "14 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−2% vs baseline",
                "weightPct": 0,
                "detail": "21 posts a month now, against 22 before that — down 2% — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Pop culture, TV/film and fashion commentary is a category with obvious demand, the talking-head critic take is a format she can repeat endlessly, and 5.6m likes against 43.5k followers says the clips travel."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 51,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 34,
            "note": "4 of 5 places wouldn't answer; only 1 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 33,
            "note": "only 2 of the 3 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/kerusso-daily-devotional/id1395536128?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 35,
            "note": "they link to it themselves",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-06",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-10",
            "engine": "rule",
            "label": "abandonment"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Kerusso Daily Devotional",
            "kind": "episode",
            "title": "All for Jesus",
            "url": null,
            "at": "2026-08-10T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Ann was in her late eighties when her adult granddaughter asked, “Grandma, what was the very best time in your life? \n Ann was one of 10 kids born to Norwegian immigrants who arrived at Ellis Island and settled on the North Dakota prairie. She came from tough stock and was raised in the kind of circ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:57.594Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Kerusso Daily Devotional",
            "kind": "episode",
            "title": "Beyond Compare",
            "url": null,
            "at": "2026-08-07T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "As we wrap up our series on precious jewels, it is kind of fun to spotlight one last gemstone. One that isn’t immediately beautiful or desired.\n But it is the rarest!\n Discovered in East Asia by British mineralogist Arthur Pain, the so-called “Painite” gemstone can be found in several colors, and th",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:57.595Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Kerusso Daily Devotional",
            "kind": "episode",
            "title": "Far From Ordinary",
            "url": null,
            "at": "2026-08-06T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "In its natural state, the jaw-dropping gem known as emerald often resembles an ancient barrel-shaped decree from a king. It tells us things nothing else can.\n Today, the glittering green stone stops an onlooker. It takes our breath away. When set against a backdrop of shimmering gold, it is somethin",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:57.595Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__marcelluswiley",
        "name": "marcelluswiley",
        "handle": "@marcelluswiley",
        "initials": "MA",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7353902542427799598~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ff0efb87&x-expires=1786568400&x-signature=vmBRw1qhaDg4tf9qD2r5r7%2FEErY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@marcelluswiley",
            "followers": 80300,
            "url": "https://www.tiktok.com/@marcelluswiley",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7353902542427799598~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ff0efb87&x-expires=1786568400&x-signature=vmBRw1qhaDg4tf9qD2r5r7%2FEErY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 80300
        },
        "score": 18,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 18,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no store, no membership",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 0 posts in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "A daily 5AM live show gives him a repeatable format that naturally produces clippable takes, and sports commentary from a former All-Pro is a category with real demand."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 21,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 16,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — https://podcasts.apple.com/us/podcast/more-to-it-with-marcellus-wiley/id1649557188?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 8,
            "note": "something at marcelluswiley.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "More To It with Marcellus Wiley",
            "kind": "episode",
            "title": "Ep 187: Manziel never heard of 6 P’s? Michigan can’t stop! Micah is right!! CJ Gardner-Johnson ain’t scared!",
            "url": "https://omny.fm/shows/more-to-it-with-marcellus-wiley/manziel-never-heard-of-6-p-s-michigan-can-t-stop-m",
            "at": "2023-10-21T09:00:00.000Z",
            "thumbnail": null,
            "excerpt": "00:07 Show Open / Johnny Manziel\n 17:12 Michigan Sign Stealing\n 33:04 Parsons vs Martin\n 50:55 Bonus Topic Gardner Johnson & Deebo\n 58:49 Wiley's World Funk Up\n 01:02:19 Wileyism\n Manziel never heard of the 6 P’s!\n This year Michigan can’t stay out of trouble - or stop winning!\n Micah is right, Kimb",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:42.915Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "More To It with Marcellus Wiley",
            "kind": "episode",
            "title": "Ep 186: Wilbon talking bad! Bill Simmons thinks podcast future is bright! Micah Parsons vs. Cowboys Haters!",
            "url": "https://omny.fm/shows/more-to-it-with-marcellus-wiley/wilbon-talking-bad-bill-simmons-thinks-podcast-fut",
            "at": "2023-10-21T09:00:00.000Z",
            "thumbnail": null,
            "excerpt": "00:08 Show Open / Michael Wilbon\n 22:25 Bill Simmons\n 38:08 Cowboy Haters\n 54:28 Bonus Topic Joe Manchin\n 01:00:57 Wiley's World Funk Up\n 01:09:50 Wileyism\n Wilbon was talking bad about the arena or the people….but he needs to pick one!\n Bill Simmons thinks the future for podcasts is brighter than e",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:42.916Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "More To It with Marcellus Wiley",
            "kind": "episode",
            "title": "Ep 186: Problem w/ Skip & Sports Media! Lebron flexin on the bench! T.O. got hit by a car! Wiley Wins’Day!!!",
            "url": "https://omny.fm/shows/more-to-it-with-marcellus-wiley/problem-w-skip-sports-media-lebron-flexin-on-the-b",
            "at": "2023-10-19T09:00:00.000Z",
            "thumbnail": null,
            "excerpt": "0:07 Show Open / LeBron James\n 18:38 Terrell Owens\n 35:34 Skip vs Me\n 55:07 Wiley Wins'day\n 01:00:22 Wiley's World Funk Up\n 01:04:42 Wileyism\n Lebron was flexing and doing King Things on the sidelines\n T.O. got hit by a car fueled by jealousy!\n My problem with Skip Bayless & Sports Media then and no",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:42.916Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__yvanlacroix",
        "name": "yvanlacroix",
        "handle": "@yvanlacroix",
        "initials": "YV",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7351751250926387246~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=901f13b7&x-expires=1786568400&x-signature=Fx3mfBwm6G8VDYDuBUM7QduQyGY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@yvanlacroix",
            "followers": 558,
            "url": "https://www.tiktok.com/@yvanlacroix",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7351751250926387246~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=901f13b7&x-expires=1786568400&x-signature=Fx3mfBwm6G8VDYDuBUM7QduQyGY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 558
        },
        "score": 17,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 17,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no youtube channel, no own website",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Car detailing is a category with real demand and a teacher-consultant angle lends itself to short, repeatable how-to clips, and nothing visible here is wrong for the brief — though the actual content and format are unconfirmed since no posts are shown."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 27,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 22,
            "note": "something at substack.com/@yvanlacroix — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 27,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-auto-detailing-podcast/id903505596?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "The Auto Detailing Podcast",
            "kind": "episode",
            "title": "5 Ceramic Spray Mistakes That Ruin Your Results",
            "url": "https://autodetailingpodcast.libsyn.com/5-ceramic-spray-mistakes-that-ruin-your-results",
            "at": "2026-07-29T14:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Ceramic spray protection should be easy to apply, but small mistakes can cause streaking, uneven coverage, poor water behavior, and disappointing durability.\n In this video, I demonstrate the five most common mistakes people make when applying ceramic spray protection and show you exactly how to cor",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:14.787Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Auto Detailing Podcast",
            "kind": "episode",
            "title": "If I Had to Start My Detailing Business Over, I'd Buy These 6 Things First",
            "url": "https://autodetailingpodcast.libsyn.com/if-i-had-to-start-my-detailing-business-over-id-buy-these-6-things-first",
            "at": "2026-07-22T14:00:00.000Z",
            "thumbnail": null,
            "excerpt": "What are the best detailing tools to buy if you're starting from scratch?\n If I had to rebuild my detailing business today, these are the six tools I'd purchase before anything else. After more than 20 years in the auto detailing industry, I've learned that having the right tools matters far more th",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:14.787Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Auto Detailing Podcast",
            "kind": "episode",
            "title": "Why Simple Detailing Products Feel So Confusing",
            "url": "https://autodetailingpodcast.libsyn.com/why-simple-detailing-products-feel-so-confusing",
            "at": "2026-07-08T14:02:00.000Z",
            "thumbnail": null,
            "excerpt": "The detailing industry has a directions problem.\n A lot of products are not actually that hard to use, but the directions, product names, dilution ratios, and marketing make them way more confusing than they need to be.\n In this episode, I talk about why simple products like spray waxes, ceramic spr",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:14.787Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__superfastmatt",
        "name": "superfastmatt",
        "handle": "@superfastmatt",
        "initials": "SU",
        "avatar": "https://yt3.googleusercontent.com/nqgbsRZPop6g87lugiS2bCe3a7WfW7cRTW3WjIQIykcXdU9ykFmfSHRHRxRhUs5KtMNWc8iG6CA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@superfastmatt",
            "followers": 17700,
            "url": "https://www.tiktok.com/@superfastmatt",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/0b7ead6dbc777cca77f6d564a1916b41~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7ec69c7a&x-expires=1786568400&x-signature=%2B4N0a6KyqDcKpfdxNPEVcjG5zgk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@superfastmatt",
            "followers": 664000,
            "url": "https://www.youtube.com/@superfastmatt",
            "avatar": "https://yt3.googleusercontent.com/nqgbsRZPop6g87lugiS2bCe3a7WfW7cRTW3WjIQIykcXdU9ykFmfSHRHRxRhUs5KtMNWc8iG6CA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 681700
        },
        "score": 16,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 15,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no podcast",
                "weightPct": 73,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "59 purchase-intent comments",
                "weightPct": 27,
                "detail": "59 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 1,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−30% vs baseline",
                "weightPct": 100,
                "detail": "2 videos a month now, against 2.8 before that — down 29% — 1 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He makes automotive build and engine-swap content — a category with big proven demand — in a repeatable question-answering format, and his long-form projects clip naturally into shorts, which the TikTok presence already shows he does."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — youtube.com/@superfastmatt",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 47,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 22,
            "note": "something at superfastmatt.myshopify.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 8,
            "note": "something at patreon.com/superfastmatt — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 13,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 22,
            "note": "they link to it themselves",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I've got my fingers crossed that Slate makes it. I love small trucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "still bigger than i'd buy since i don't need a big car, but if the r3 is as small as promised, i might be convinced to get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I have my eye on an R2, once it level 3 self-drives.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'll probably buy a nice used R1T when they get a little more common.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really really want Aptera to succeed. I can't put my finger on why, but there's just something about them. I guess the design just makes a lot of sense for most people the majority of the time.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want Aptera to make it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Rivian is the only EV company I am fully hoping to buy into. They just seem so passionate about making a *good product* that *happens* to be an EV, rather than just trying to meet a quota and/or jump ship as soon as they are allowed (Honda >.>). I get to test the R2 tomorrow. I hope it goes well. Th",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I've got my fingers crossed that Slate makes it. I love small trucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I own a Rivian 2nd Gen R1T. I watched the videos and followed the growing pains through the 1st Gen product line before making my decision to purchase, and I am glad I did.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really really want Aptera to succeed. I can't put my finger on why, but there's just something about them. I guess the design just makes a lot of sense for most people the majority of the time.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope Slate makes it. The market needs a basic, economy EV to counter all the luxury laptops with wheels.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I think Aptera's going to make it, but initially be niche, which was the original intention anyways. Go Aptera!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I bought a used r1t launch edition over a year ago, and live where it's bitter cold about 19 months a year with a 6 minute 110° summer. I've asked myself if I'd ever get another gas cage, and I got sad thinking about the prospect.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want Aptera to make it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Rivian is the only EV company I am fully hoping to buy into. They just seem so passionate about making a *good product* that *happens* to be an EV, rather than just trying to meet a quota and/or jump ship as soon as they are allowed (Honda >.>). I get to test the R2 tomorrow. I hope it goes well.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have my eye on an R2, once it level 3 self-drives.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I too have a deposit on an R2, although it was more of a statement. I'll probably buy a nice used R1T when they get a little more common.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Rivian is the only EV company I am fully hoping to buy into. They just seem so passionate about making a *good product* that *happens* to be an EV, rather than just trying to meet a quota and/or jump ship as soon as they are allowed (Honda >.>). I get to test the R2 tomorrow. I hope it goes well. Th",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want Aptera to make it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really hope they do make it and can expand into Europe as well, I wouldn't mind a Tesla alternative tha",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "The R3 looks so sick, if it has decent self driving, the wife and I will be getting that.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "still bigger than i'd buy since i don't need a big car, but if the r3 is as small as promised, i might be convinced to get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Rivian is the only EV company I am fully hoping to buy into. They just seem so passionate about making a *good product* that *happens* to be an EV, rather than just trying to meet a quota and/or jump ship as soon as they are allowed (Honda >.>). I get to test the R2 tomorrow. I hope it goes well. Th",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want Aptera to make it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I unironically like the look of Rivian's cars. I just found out about the R3, and even that looks really cool in my opinion. Some sort of cross between a futuristic Jeep and an old Russian Lada. I really hope they do make it and can expand into Europe as well, I wouldn't mind a Tesla alternative tha",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "The R3 looks so sick, if it has decent self driving, the wife and I will be getting that.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I have my eye on an R2, once it level 3 self-drives.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "unspecified"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Rivian Is Gonna Be Alright",
            "url": "https://www.youtube.com/watch?v=JEmjg1q19GI",
            "at": "2026-07-26T14:57:04Z",
            "thumbnail": "https://i.ytimg.com/vi/JEmjg1q19GI/hqdefault.jpg",
            "excerpt": null,
            "metric": 256172,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:17.905Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The World's Best Driving Road Is Kinda Terrible",
            "url": "https://www.youtube.com/watch?v=o0mNM0LIFY4",
            "at": "2026-07-11T14:19:32Z",
            "thumbnail": "https://i.ytimg.com/vi/o0mNM0LIFY4/hqdefault.jpg",
            "excerpt": null,
            "metric": 449495,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:17.905Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "3D Print A Whole Race Car Body. Or Just Watch Me Do It. Whatever.",
            "url": "https://www.youtube.com/watch?v=nt85nTMnY1w",
            "at": "2026-06-20T23:53:10Z",
            "thumbnail": "https://i.ytimg.com/vi/nt85nTMnY1w/hqdefault.jpg",
            "excerpt": null,
            "metric": 406293,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:17.905Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "How To Turn A Clutch Into Glitter",
            "url": "https://www.youtube.com/watch?v=VOlQqJk9iTo",
            "at": "2026-06-15T15:20:00Z",
            "thumbnail": "https://i.ytimg.com/vi/VOlQqJk9iTo/hqdefault.jpg",
            "excerpt": null,
            "metric": 282500,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:17.905Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__50skid",
        "name": "50skid",
        "handle": "@50skid",
        "initials": "50",
        "avatar": "https://yt3.googleusercontent.com/AM6-7GHggO_tDUH0YH_faM8-pPFxJudfSfsDJuZ-oZ225F0p5VCYEfkv4Bv_UpjSYgdE-MKCnw=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@50skid",
            "followers": null,
            "url": "https://www.tiktok.com/@50skid",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5ffebab4&x-expires=1786568400&x-signature=J2J6IecAjzWYDntrFabXVDP7DnY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@50skid",
            "followers": 186000,
            "url": "https://www.youtube.com/@50skid",
            "avatar": "https://yt3.googleusercontent.com/AM6-7GHggO_tDUH0YH_faM8-pPFxJudfSfsDJuZ-oZ225F0p5VCYEfkv4Bv_UpjSYgdE-MKCnw=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 186000
        },
        "score": 16,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 16,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no podcast",
                "weightPct": 98,
                "detail": "3 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "5 purchase-intent comments",
                "weightPct": 2,
                "detail": "5 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 0 uploads in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He makes repeatable how-to content — car repair, furniture building, home remodeling — in a DIY category with proven demand, and the volume of repair questions he gets shows people actively seek him out for it."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 21,
            "note": "found it — youtube.com/@50skid",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 22,
            "note": "something at substack.com/@50skid — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 27,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 9,
            "note": "something at patreon.com/50skid — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 14,
            "note": "something at youtube.com/c/50sKidAuto — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Changing Shocks and Struts! - BMW 335i E90 Suspension DIY",
            "url": "https://www.youtube.com/watch?v=RSKmv4D4Sws",
            "at": "2024-05-19T15:00:30Z",
            "thumbnail": "https://i.ytimg.com/vi/RSKmv4D4Sws/hqdefault.jpg",
            "excerpt": null,
            "metric": 65667,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:25.880Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "I rebuilt my leaking steering rack -- BMW E46 Steering Rack Rebuild DIY",
            "url": "https://www.youtube.com/watch?v=Gh22cQBrgb8",
            "at": "2024-04-26T18:33:22Z",
            "thumbnail": "https://i.ytimg.com/vi/Gh22cQBrgb8/hqdefault.jpg",
            "excerpt": null,
            "metric": 56638,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:25.880Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Spinning Ball Joint Tip",
            "url": "https://www.youtube.com/watch?v=Cd77jeBatWQ",
            "at": "2023-11-20T04:15:43Z",
            "thumbnail": "https://i.ytimg.com/vi/Cd77jeBatWQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 25587,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:25.880Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "BMW E90 Front Suspension Refresh DIY",
            "url": "https://www.youtube.com/watch?v=hh9MiipfMMY",
            "at": "2023-11-19T16:00:33Z",
            "thumbnail": "https://i.ytimg.com/vi/hh9MiipfMMY/hqdefault.jpg",
            "excerpt": null,
            "metric": 30978,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:25.880Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__theherd",
        "name": "theherd",
        "handle": "@theherd",
        "initials": "TH",
        "avatar": "https://yt3.googleusercontent.com/MsZJLjPe1IndjYiKVaffbCoPJ6Crq4Fuhn9qbDwTizbwlHis01rMgZqroDj8rmM6UxUu5Fut3w=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@theherd",
            "followers": 995800,
            "url": "https://www.tiktok.com/@theherd",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d50ac45d79d4078c01ec6b40225f33c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=3047c18b&x-expires=1786568400&x-signature=vFxrDGmcZ8zV9sUfyRWrGmvC9r8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@theherd",
            "followers": 3090,
            "url": "https://www.youtube.com/@theherd",
            "avatar": "https://yt3.googleusercontent.com/MsZJLjPe1IndjYiKVaffbCoPJ6Crq4Fuhn9qbDwTizbwlHis01rMgZqroDj8rmM6UxUu5Fut3w=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "audience": {
          "total": 995800
        },
        "score": 15,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 8,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 7,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−56% vs baseline",
                "weightPct": 100,
                "detail": "2 videos a month now, against 4.6 before that — down 56%; the recent ones are getting 27% fewer views — 6.8 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Whichever account this is, the visible work is short sports-take clips on a near-million-follower TikTok with 76m likes — clippable by nature, in a repeatable daily-show format, in a category with obvious demand — though the bio's stray farm-simulator line means the identity itself is unconfirmed and worth checking on the call."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 19,
            "note": "found it — youtube.com/@theherd",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 19,
            "note": "something at substack.com/@theherd — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 23,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-herd-with-colin-cowherd/id1042368254?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 12,
            "note": "1 of 2 places wouldn't answer; only 1 of the 2 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "The Herd with Colin Cowherd",
            "kind": "episode",
            "title": "THE HERD – HOUR 1 – Bears Are For Real, Dodgers Are A Mess, Broncos Regression",
            "url": "https://omny.fm/shows/the-herd-with-colin-cowherd/the-herd-hour-1-bears-are-for-real-dodgers-are-a-mess-broncos-regression",
            "at": "2026-08-10T19:39:12.000Z",
            "thumbnail": null,
            "excerpt": "Colin Cowherd shares insight from his time attending Bears training camp. He pushes back against people labeling the Bears as a regression team this season and why they&rsquo;re break out team in 2026.\n He shares this week&rsquo;s edition of Where Colin Was Right, Where Colin Was Wrong: Colin says h",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:24.588Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "I ACCIDENTALLY DESTROYED MY OWN FIELD.. | Farming Simulator 25  | Episode 13",
            "url": "https://www.youtube.com/watch?v=GPq-fVPBPGw",
            "at": "2026-07-07T19:30:26Z",
            "thumbnail": "https://i.ytimg.com/vi/GPq-fVPBPGw/hqdefault.jpg",
            "excerpt": null,
            "metric": 53,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:20.493Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Herd with Colin Cowherd",
            "kind": "episode",
            "title": "THE HERD – HOUR 2 – Colin Was Right About The 49ers, Hasselbeck: Mike McCarthy Deserves Respect",
            "url": "https://omny.fm/shows/the-herd-with-colin-cowherd/the-herd-hour-2-colin-was-right-about-the-49ers-hasselbeck-mike-mccarthy-deserves-respect",
            "at": "2026-08-10T19:38:58.000Z",
            "thumbnail": null,
            "excerpt": "Where Colin was right and where he was wrong\n 3-time Pro Bowl QB Matt Hasselbeck joins the show to talk about the Steelers and why head coach Mike McCarthy deserves more respect as a top NFL offensive coach.\n See omnystudio.com/listener for privacy information.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:24.588Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Herd with Colin Cowherd",
            "kind": "episode",
            "title": "THE HERD – HOUR 3 – Notre Dame Would Win The SEC",
            "url": "https://omny.fm/shows/the-herd-with-colin-cowherd/the-herd-hour-3-notre-dame-would-win-the-sec",
            "at": "2026-08-10T19:38:55.000Z",
            "thumbnail": null,
            "excerpt": "Colin talks to college football commentator Josh Pate about the upcoming season including Notre Dame, the quarterbacks in the Big 10, and more\n See omnystudio.com/listener for privacy information.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:24.588Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__autofanatic",
        "name": "autofanatic",
        "handle": "@autofanatic",
        "initials": "AU",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_m1ijkD9rK50Wz60Y9dDYasyaS8TeHTMEHn3AGd-A7R1ck=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@autofanatic",
            "followers": null,
            "url": "https://www.tiktok.com/@autofanatic",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/b5f874fda0b0d3e1a3236948c2eefd86~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5752bb93&x-expires=1786568400&x-signature=vy7dE8iagJQn5LItrG%2Fagjv3h60%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@autofanatic",
            "followers": 412,
            "url": "https://www.youtube.com/@autofanatic",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_m1ijkD9rK50Wz60Y9dDYasyaS8TeHTMEHn3AGd-A7R1ck=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 412
        },
        "score": 14,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 14,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no membership, no podcast",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 3 dated uploads came back — not enough to read a posting rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "Everything visible here is a shop's service ad — a WhatsApp booking pitch with no actual posts, zero likes and a scraped page that shows no video output — so there's no clippable, repeatable format to point to even though cars are a category people want."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@autofanatic",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 19,
            "note": "something at autofanatic.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 14,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 8,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 18,
            "note": "something at autofanatic.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Vitrificação Automotiva Em Guarulhos [Polimento + Proteção] | AutoFanatic.com.br",
            "url": "https://www.youtube.com/watch?v=ExA24VGXqz0",
            "at": "2021-04-18T15:33:09Z",
            "thumbnail": "https://i.ytimg.com/vi/ExA24VGXqz0/hqdefault.jpg",
            "excerpt": null,
            "metric": 10147,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:06.190Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Vitrificação Automotiva em Guarulhos | Vitrificação Automotiva - AutoFanatic.com.br (#Shorts​​​)",
            "url": "https://www.youtube.com/watch?v=i31OODjQpfs",
            "at": "2021-04-05T00:32:43Z",
            "thumbnail": "https://i.ytimg.com/vi/i31OODjQpfs/hqdefault.jpg",
            "excerpt": null,
            "metric": 916,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:06.190Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "5 Sentidos [Auto Fanatic - Cuidando da sua conquista]",
            "url": "https://www.youtube.com/watch?v=UdVMPu7s5Vw",
            "at": "2020-09-17T17:14:24Z",
            "thumbnail": "https://i.ytimg.com/vi/UdVMPu7s5Vw/hqdefault.jpg",
            "excerpt": null,
            "metric": 126,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:06.191Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__humblemechanic",
        "name": "humblemechanic",
        "handle": "@humblemechanic",
        "initials": "HU",
        "avatar": "https://yt3.googleusercontent.com/CXZve3fL5X9V86aMVuIYCFQn2rIgADTJZJMc0cfNB5mMrNOOJv0urFZlctbffLIpD3byGVih=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@humblemechanic",
            "followers": 408100,
            "url": "https://www.tiktok.com/@humblemechanic",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/06704d2e5142f19148b419b7c69dc091~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=589ea8b7&x-expires=1786568400&x-signature=lo7fypnxwTyk0StMU4mB6ZpL2Go%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@humblemechanic",
            "followers": 1050000,
            "url": "https://www.youtube.com/@humblemechanic",
            "avatar": "https://yt3.googleusercontent.com/CXZve3fL5X9V86aMVuIYCFQn2rIgADTJZJMc0cfNB5mMrNOOJv0urFZlctbffLIpD3byGVih=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 1050000
        },
        "score": 14,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 11,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no membership",
                "weightPct": 100,
                "detail": "6 of 6 checks we can settle either way came back settled. a few things, none of them earning."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 3,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−39% vs baseline",
                "weightPct": 100,
                "detail": "1.3 videos a month now, against 2.2 before that — down 39% — 3 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Charles makes repeatable, highly clippable auto-repair content — tear-downs, diagnostics, engine swaps, tool reviews — in the car maintenance category people actively search for, and he runs it consistently across TikTok and YouTube."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/humblemechanic",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 27,
            "note": "they link to it themselves",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/humble-mechanic-podcast/id1281270865?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — humblemechanic.com",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://www.amazon.com/shop/humblemechanic",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Why Can't Porsche, VW & Audi Get This Part Right?",
            "url": "https://www.youtube.com/watch?v=OwqSHUVNnUQ",
            "at": "2026-08-02T14:00:19Z",
            "thumbnail": "https://i.ytimg.com/vi/OwqSHUVNnUQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 105476,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:16.471Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Humble Mechanic",
            "kind": "writing",
            "title": "How To Fix a Blower Motor Not Working ~ LOUD NOISES",
            "url": "https://humblemechanic.com/how-to-fix-a-blower-motor-not-working-loud-noises/",
            "at": "2022-02-09T16:26:05.000Z",
            "thumbnail": null,
            "excerpt": "How to fix a blower motor not working. Blower motors can fail in many ways, a blower motor resistor failure can cause only high speed function. Some times blower motors make noise, like this Jetta SportWagon. In this video we test the blower motor in a 2014 Jetta SportWagon, cover blower motor resis",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:34:29.816Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Humble Mechanic Podcast",
            "kind": "episode",
            "title": "Saying Goodbye to My 2005 VW Passat",
            "url": "https://humblemechanic.com/podcast/saying-goodbye-to-my-2005-vw-passat/",
            "at": "2020-02-24T21:04:09.000Z",
            "thumbnail": null,
            "excerpt": "Getting rid of a car is not easy. Selling a car, scrapping a car, donating a car, giving it away are all tough. Last week I donated my 2005 VW Passat to Second Chances Garage. They do amazing work top to bottom. The icing on the cake it the mentorship of automotive tech students. While […]",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:29.815Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Was an Audi RS3 DAZA Engine Swap Actually Worth It?",
            "url": "https://www.youtube.com/watch?v=0NewEXQ1_78",
            "at": "2026-07-12T14:00:13Z",
            "thumbnail": "https://i.ytimg.com/vi/0NewEXQ1_78/hqdefault.jpg",
            "excerpt": null,
            "metric": 135608,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:16.471Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 6,
          "why": "6 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__rj_young",
        "name": "rj_young",
        "handle": "@rj_young",
        "initials": "RJ",
        "avatar": "https://yt3.googleusercontent.com/doSyH-4GdDB2cJjKh35VTzxmaiL9X2zIbxPAx8m749h1BSufQK6QqR6FBLVeGoaywRjXUzIRnvk=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@rj_young",
            "followers": 12000,
            "url": "https://www.tiktok.com/@rj_young",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a2eb002be4c79599a080722aa8031f36~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d8010766&x-expires=1786568400&x-signature=RU21cCPhIkeYlmHaBN5nzlMPuaM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@rj_young",
            "followers": null,
            "url": "https://www.youtube.com/@rj_young",
            "avatar": "https://yt3.googleusercontent.com/doSyH-4GdDB2cJjKh35VTzxmaiL9X2zIbxPAx8m749h1BSufQK6QqR6FBLVeGoaywRjXUzIRnvk=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false
          }
        ],
        "audience": {
          "total": 12000
        },
        "score": 14,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 14,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no own website, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "+1079% vs baseline",
                "weightPct": 0,
                "detail": "18 posts a month now, against 1.5 before that — up 1079%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He's a national college football analyst on FOX with a named recurring show, so he's already making short sports commentary clips in a repeatable host format inside one of the most-wanted categories there is."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 39,
            "note": "found it — youtube.com/@rj_young",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 65,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 54,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 32,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — https://podcasts.apple.com/us/podcast/adapt-and-respond-with-rj-young-a-college-football-podcast/id1346315892?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Adapt and Respond with RJ Young: A College Football Podcast",
            "kind": "episode",
            "title": "Oregon's Dylan Raiola: Choice words for Nebraska | Selling on Belichick and UNC | Top 5 Heisman Dive",
            "url": "https://www.youtube.com/@RJYoungShow",
            "at": "2026-08-07T11:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Ex-Husker Dylan Raiola says the grass is greener in Oregon. Bill Belichick and UNC are writing a poor epilogue for the once GOAT. Oregon coach Ra'Shaad Samples has an all-pro alias. RJ breaks down early Heisman markets.\n Kalshi Promo Code: RJ Kalshi Offer Link: http://kalshi.com/r/RJ \n This is the o",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:38.246Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Checkout my new beats I made🔥🔥🔥🔥🔥",
            "url": "https://www.youtube.com/watch?v=FNFvu_79hX0",
            "at": "2024-02-16T06:19:56Z",
            "thumbnail": "https://i.ytimg.com/vi/FNFvu_79hX0/hqdefault.jpg",
            "excerpt": null,
            "metric": 15,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:35.511Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "(POLO G TYPE BEAT)🔥🔥🔥🙏🙏",
            "url": "https://www.youtube.com/watch?v=ChCVVq0IUAE",
            "at": "2024-02-16T06:01:20Z",
            "thumbnail": "https://i.ytimg.com/vi/ChCVVq0IUAE/hqdefault.jpg",
            "excerpt": null,
            "metric": 27,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:35.511Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "(trap beat)🔥🔥🔥🔥🔥🔥",
            "url": "https://www.youtube.com/watch?v=jvEAi8LsO7w",
            "at": "2024-02-16T05:47:25Z",
            "thumbnail": "https://i.ytimg.com/vi/jvEAi8LsO7w/hqdefault.jpg",
            "excerpt": null,
            "metric": 19,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:35.511Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__girlwholove2gossip",
        "name": "girlwholove2gossip",
        "handle": "@girlwholove2gossip",
        "initials": "GI",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e43a8f27450c242536d609604288004c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=11094682&x-expires=1786568400&x-signature=7AqOO9bJ6oFgBnTCZ83UK%2BFd56w%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@girlwholove2gossip",
            "followers": 45900,
            "url": "https://www.tiktok.com/@girlwholove2gossip",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e43a8f27450c242536d609604288004c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=11094682&x-expires=1786568400&x-signature=7AqOO9bJ6oFgBnTCZ83UK%2BFd56w%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 45900
        },
        "score": 14,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 14,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no youtube channel, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "+35% vs baseline",
                "weightPct": 0,
                "detail": "5 posts a month now, against 3.7 before that — up 35%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "She posts short-form celebrity, royal and political news commentary on TikTok — a repeatable format in a category with real appetite, and the 2.4m likes against 45.8k followers suggests the clips actually travel."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 54,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 79,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/chins-giggles/id1615113859?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 41,
            "note": "they link to it themselves",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Chins & Giggles",
            "kind": "episode",
            "title": "THIS HAS NEVER HAPPENED BEFORE!!",
            "url": "https://sonoromedia.com/",
            "at": "2026-07-24T21:22:42.000Z",
            "thumbnail": null,
            "excerpt": "This week on Chins & Giggles, we’re all over the place- in the best way possible. First let’s uncover closet nightmares (including something shocking Karina found hiding in her clothes room), debate whether Ed Hardy and rhinestones are officially making a comeback, dream up one last summer getaway, ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:55.965Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__inalovelydream",
        "name": "inalovelydream",
        "handle": "@inalovelydream",
        "initials": "IN",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/4e71cd9267114144b435a9528b3ce549~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=06eedc03&x-expires=1786568400&x-signature=t6MPwAjgqy2Jv80AWJB%2BWibzzi8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@inalovelydream",
            "followers": 25600,
            "url": "https://www.tiktok.com/@inalovelydream",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/4e71cd9267114144b435a9528b3ce549~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=06eedc03&x-expires=1786568400&x-signature=t6MPwAjgqy2Jv80AWJB%2BWibzzi8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 25600
        },
        "score": 14,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 14,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no youtube channel, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 0 posts in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Pop culture and blind items is a category with obvious demand, the talking-head gossip breakdown is inherently clippable, and the email-submission setup gives her a repeatable episode format she can run indefinitely."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 50,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 76,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 46,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/scrubs-off-duty/id1646817604?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 41,
            "note": "they link to it themselves",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Scrubs Off Duty",
            "kind": "episode",
            "title": "HAPPY NURSES WEEK",
            "url": null,
            "at": "2024-05-06T20:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Send a text \n Happy Nurses Week besties!! I love you all, thank you for everything you do. I hope you feel appreciated every day and not just Nurses Week, but BFFR we all know that probs doesn't happen. Sending all my love. Bri \n -all my links are here! https://msha.ke/bribrithenurse Make sure you f",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:01.259Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Scrubs Off Duty",
            "kind": "episode",
            "title": "You're Doing Enough.",
            "url": null,
            "at": "2024-04-09T21:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Send a text \n This episode hits a little close to home... I've been feeling like I am never doing enough, and constantly comparing myself to others. I know I'm not the only one. So hopefully doing a little Q1 recap will help you too :) \n Untethered & Wanderwise: Female Travel Over 45 A travel podcas",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:01.259Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Scrubs Off Duty",
            "kind": "episode",
            "title": "I Cohosted a Self Care Event?",
            "url": null,
            "at": "2024-04-01T12:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Send a text \n Hi guys! Long time no talk hahah. This episode is all about the Self Care is in Bloom event that I cohosted with my friend Mel! It was the most fun few days in Milwaukee, and I never want to forget these memories. Thank you so much to everyone who came to the event, donated, or just sh",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:01.259Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__celebriteablinds",
        "name": "celebriteablinds",
        "handle": "@celebriteablinds",
        "initials": "CE",
        "avatar": "https://yt3.googleusercontent.com/C3nyKmnL41fymejS7Qbb0W75Cua5s_XN9EITDs-rl6GBTRFZJUr_xk1DBPqb5lsvpdVLPaaNTQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@celebriteablinds",
            "followers": 24200,
            "url": "https://www.youtube.com/@celebriteablinds",
            "avatar": "https://yt3.googleusercontent.com/C3nyKmnL41fymejS7Qbb0W75Cua5s_XN9EITDs-rl6GBTRFZJUr_xk1DBPqb5lsvpdVLPaaNTQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 24200
        },
        "score": 14,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 14,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no own website, no podcast",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — they post often enough that 200 videos only reach back 111 days — not far enough behind the last 90 to compare against"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Celebrity blind items are an inherently clippable, endlessly repeatable format in one of the most in-demand categories online, and the multiple TikTok handles plus 24K YouTube subs show they're already running it as a repeatable series."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 32,
            "note": "found it — youtube.com/@celebriteablinds",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 76,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 51,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at patreon.com/CelebriteaBlinds — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 35,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Daily Blind Items : August 6 ",
            "url": "https://www.youtube.com/watch?v=FLmSY7vJiw4",
            "at": "2026-08-06T20:12:43Z",
            "thumbnail": "https://i.ytimg.com/vi/FLmSY7vJiw4/hqdefault.jpg",
            "excerpt": null,
            "metric": 2554,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:00.865Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Kylie Jenner’s BFF Stassie Is A Yacht Girl For 80-Year-Old BILLIONAIRE",
            "url": "https://www.youtube.com/watch?v=RduStlCa7Ec",
            "at": "2026-08-06T20:12:19Z",
            "thumbnail": "https://i.ytimg.com/vi/RduStlCa7Ec/hqdefault.jpg",
            "excerpt": null,
            "metric": 10227,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:00.865Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Blind Item Reveals : August 4 #blinditems",
            "url": "https://www.youtube.com/watch?v=n23f61wNpnk",
            "at": "2026-08-06T20:10:47Z",
            "thumbnail": "https://i.ytimg.com/vi/n23f61wNpnk/hqdefault.jpg",
            "excerpt": null,
            "metric": 10485,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:00.866Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Blind Item Reveals : August 5 ",
            "url": "https://www.youtube.com/watch?v=CXuiLiCNdac",
            "at": "2026-08-06T20:10:14Z",
            "thumbnail": "https://i.ytimg.com/vi/CXuiLiCNdac/hqdefault.jpg",
            "excerpt": null,
            "metric": 8685,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:00.866Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__kurtbenkert",
        "name": "kurtbenkert",
        "handle": "@kurtbenkert",
        "initials": "KU",
        "avatar": "https://yt3.googleusercontent.com/yUu3UVB4YdYszamWTYjjBv4GbMyWDPzV3uShn3C3O27f_7UeAsjtiE6CfWFrXBEkvHq0N44Smg=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@kurtbenkert",
            "followers": 725000,
            "url": "https://www.tiktok.com/@kurtbenkert",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/e5d8d770b89456ecfc81ec8d02b8e918~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4a4315fd&x-expires=1786568400&x-signature=zqJSg2bx7ec973o325%2FlaW6a2Kw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@kurtbenkert",
            "followers": 412000,
            "url": "https://www.youtube.com/@kurtbenkert",
            "avatar": "https://yt3.googleusercontent.com/yUu3UVB4YdYszamWTYjjBv4GbMyWDPzV3uShn3C3O27f_7UeAsjtiE6CfWFrXBEkvHq0N44Smg=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "audience": {
          "total": 725000
        },
        "score": 13,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 13,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership",
                "weightPct": 99,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "1 purchase-intent comment",
                "weightPct": 1,
                "detail": "1 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "+31% vs baseline",
                "weightPct": 0,
                "detail": "26 videos a month now, against 20 before that — up 31%, they are posting more; the recent ones are getting 45% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "A former NFL quarterback doing football teaching clips is repeatable short-form in a category with huge built-in demand, and his TikTok and YouTube followings show the format lands."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 20,
            "note": "found it — youtube.com/@kurtbenkert",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 39,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/something-like-that-with-kurt-benkert/id1827687305?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 9,
            "note": "something at pillar.io/KurtBenkert — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I think im coming back to madden this year.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-10",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Be honest, how many tries would it take? 👀",
            "url": "https://www.youtube.com/watch?v=9rrPlH3agP0",
            "at": "2026-08-09T14:22:28Z",
            "thumbnail": "https://i.ytimg.com/vi/9rrPlH3agP0/hqdefault.jpg",
            "excerpt": null,
            "metric": 3968,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:13.135Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Something Like That with Kurt Benkert",
            "kind": "episode",
            "title": "Something Like That - Trailer",
            "url": "https://rss.com/podcasts/slt-kurt-benkert/2121297",
            "at": "2025-07-19T14:55:55.000Z",
            "thumbnail": null,
            "excerpt": "Kurt talks about who he is, and what this show's gonna be. \n \n Simple. Business, life, marriage, family, raising his chickens, and everything in between. \n None of that social media \"guru\" stuff, just real perspective from a real human.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:20.973Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The CPU is SMARTER in #Madden27 🧠 #nfl #football #live #madden",
            "url": "https://www.youtube.com/watch?v=dgqP7KIwbO0",
            "at": "2026-08-08T22:48:35Z",
            "thumbnail": "https://i.ytimg.com/vi/dgqP7KIwbO0/hqdefault.jpg",
            "excerpt": null,
            "metric": 17436,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:13.135Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Quick tip for reading a defense in #Madden27 🧠👀",
            "url": "https://www.youtube.com/watch?v=OaZPIy6SMas",
            "at": "2026-08-07T22:13:47Z",
            "thumbnail": "https://i.ytimg.com/vi/OaZPIy6SMas/hqdefault.jpg",
            "excerpt": null,
            "metric": 12865,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:13.135Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 1,
          "why": "1 piece of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__lockedonnfl",
        "name": "lockedonnfl",
        "handle": "@lockedonnfl",
        "initials": "LO",
        "avatar": "https://yt3.googleusercontent.com/7YlCHc8K0RWeabDbGibfQtYCOvnIsEBUsSBi-tzzl731iD6YQNHwQ8zy_yLfOK1t_tbQPFnx1Q=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@lockedonnfl",
            "followers": 3,
            "url": "https://www.tiktok.com/@lockedonnfl",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/94dab4518abb7162d1f3f92a8b977ee1~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=31b1947f&x-expires=1786568400&x-signature=Mr6okaZvDbIyKfxEBC%2FQF0NILuU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@lockedonnfl",
            "followers": 16800,
            "url": "https://www.youtube.com/@lockedonnfl",
            "avatar": "https://yt3.googleusercontent.com/7YlCHc8K0RWeabDbGibfQtYCOvnIsEBUsSBi-tzzl731iD6YQNHwQ8zy_yLfOK1t_tbQPFnx1Q=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 16800
        },
        "score": 13,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 13,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership, no podcast",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 3 posts in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "A daily 30-minute NFL show is a repeatable format in one of the most in-demand categories going, and podcast segments cut cleanly into clips, even though the linked TikTok looks like an empty or squatted handle rather than their real short-form presence."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@lockedonnfl",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 34,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 24,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 19,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — lockedonpodcasts.com/podcasts/locked-on-nfl-tony-wiggins",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Detroit Lions BAD INJURY LUCK CONTINUES & Cincinnati Bengals MUST START FAST this Regular Season",
            "url": "https://www.youtube.com/watch?v=Dw0i6K9hBbk",
            "at": "2026-08-10T21:07:48Z",
            "thumbnail": "https://i.ytimg.com/vi/Dw0i6K9hBbk/hqdefault.jpg",
            "excerpt": null,
            "metric": 0,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:23.556Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Locked On Podcast Network",
            "kind": "writing",
            "title": "Locked On NFL Top 100 Players of 2026",
            "url": "https://lockedonpodcasts.com/locked-on-nfl-top-100-players-of-2026/",
            "at": "2026-07-27T21:49:38.000Z",
            "thumbnail": null,
            "excerpt": "32 Teams. 100 Players. Locked On’s NFL hosts voted on the best players of the 2026 NFL season, and the results have everyone across the Network willing to go to battle over their selections. The Eagles and 49ers had the most Top 100 Players with six each, while three teams tied for third with five p",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:35:28.755Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The Detroit Lions Lose ANOTHER Player As  Cade Mays OUT INDEFINITELY— Hurting Their PLAYOFF Dreams",
            "url": "https://www.youtube.com/watch?v=2j9A5Zd91jU",
            "at": "2026-08-10T18:00:05Z",
            "thumbnail": "https://i.ytimg.com/vi/2j9A5Zd91jU/hqdefault.jpg",
            "excerpt": null,
            "metric": 76,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:23.556Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Washington Commaders Laremy Tunsil DISASTER INJURY & Kirk Cousins FIGHTS Maxx Crosby at Raiders Camp",
            "url": "https://www.youtube.com/watch?v=P_4Qmo7ayWc",
            "at": "2026-08-10T12:00:06Z",
            "thumbnail": "https://i.ytimg.com/vi/P_4Qmo7ayWc/hqdefault.jpg",
            "excerpt": null,
            "metric": 299,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:23.556Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__upandadams",
        "name": "upandadams",
        "handle": "@upandadams",
        "initials": "UP",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_ns0jFD8b1x9wkHd7fWFYDYSce0NbAYYVB85PvgyFA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@upandadams",
            "followers": 3031,
            "url": "https://www.tiktok.com/@upandadams",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/33b697419bfcfe8e25dc70eeb2a9a1fe~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=62c70ae4&x-expires=1786568400&x-signature=ZC9qfreeMJZ183iQy1tKxHuLvbY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@upandadams",
            "followers": 1,
            "url": "https://www.youtube.com/@upandadams",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_ns0jFD8b1x9wkHd7fWFYDYSce0NbAYYVB85PvgyFA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "audience": {
          "total": 3031
        },
        "score": 13,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 13,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership, no podcast",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — playlistNotFound"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "He's making short vertical video on TikTok with real engagement (25k likes on ~3k followers) in travel/van-life, a category people genuinely watch, and his seasonal Grand Canyon setup gives him an obvious repeatable premise — though I can't actually see individual posts to confirm he's locked into a format, and the empty YouTube channel is a gap, not a disqualifier."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — youtube.com/@upandadams",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 40,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 19,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 12,
            "note": "something at upandadams.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__stiffmiesters_picks",
        "name": "stiffmiesters.picks",
        "handle": "@stiffmiesters.picks",
        "initials": "ST",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/e54fe4c0b105ec82892d057b44ca98af~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=13f3e8da&x-expires=1786568400&x-signature=eONuz4NH8EN6AlGVtLGrykku4kY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@stiffmiesters.picks",
            "followers": 4442,
            "url": "https://www.tiktok.com/@stiffmiesters.picks",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/e54fe4c0b105ec82892d057b44ca98af~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=13f3e8da&x-expires=1786568400&x-signature=eONuz4NH8EN6AlGVtLGrykku4kY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 4442
        },
        "score": 12,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 12,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no own website, no membership",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Daily sports betting picks are a short, repeatable format in a category with real demand, and the 27.2k likes against 4,445 followers suggests the clips actually travel."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 52,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 32,
            "note": "4 of 5 places wouldn't answer; only 1 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 28,
            "note": "only 2 of the 3 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 33,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 31,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__magic_maike",
        "name": "magic.maike",
        "handle": "@magic.maike",
        "initials": "MA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/667e273b519e276d83f8742ecf5a03ec~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=12222159&x-expires=1786568400&x-signature=wXpQiwC0qud3lCErzwQ%2FnFUXZYk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@magic.maike",
            "followers": 4868,
            "url": "https://www.tiktok.com/@magic.maike",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/667e273b519e276d83f8742ecf5a03ec~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=12222159&x-expires=1786568400&x-signature=wXpQiwC0qud3lCErzwQ%2FnFUXZYk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 4868
        },
        "score": 12,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 12,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no own website, no membership",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Pop culture commentary is a category with obvious demand, the 'follow for all the tea' angle is an inherently repeatable short-form format, and 720k likes against under 5k followers says the clips actually travel."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 34,
            "note": "4 of 5 places wouldn't answer; only 1 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 37,
            "note": "only 2 of the 3 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 41,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__isleepwitsockson",
        "name": "isleepwitsockson",
        "handle": "@isleepwitsockson",
        "initials": "IS",
        "avatar": "https://yt3.googleusercontent.com/0WNKPD6khi20EI5zD79dGDKky4nBDJy3a7p5u3ysJaFimxl8pHMHchmvpVUVe8nZE9Z-uMSsBQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@isleepwitsockson",
            "followers": 114700,
            "url": "https://www.tiktok.com/@isleepwitsockson",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0816bf7c97c5aeff48358448ae36e349~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5080ebd0&x-expires=1786568400&x-signature=eCHgqPxI6tIcsVeGma9vfRqGOZY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@isleepwitsockson",
            "followers": 24600,
            "url": "https://www.youtube.com/@isleepwitsockson",
            "avatar": "https://yt3.googleusercontent.com/0WNKPD6khi20EI5zD79dGDKky4nBDJy3a7p5u3ysJaFimxl8pHMHchmvpVUVe8nZE9Z-uMSsBQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "audience": {
          "total": 114700
        },
        "score": 11,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 11,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no own website, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−24% vs baseline",
                "weightPct": 0,
                "detail": "4 videos a month now, against 5.2 before that — down 24% — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Sports talk and athlete training is a category with proven demand, short-form video is inherently clippable and repeatable, and 14m likes across 114k TikTok followers shows the clips actually land."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 35,
            "note": "found it — youtube.com/@isleepwitsockson",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 67,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 51,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 36,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-old-switcharoo-gaming-retro-with-mike-and/id1702798095?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 36,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The PERFECT fall camp basket 💯 #football #fallcamp #sports #JAYMO",
            "url": "https://www.youtube.com/watch?v=MnIbmbkIgaQ",
            "at": "2026-08-04T15:56:57Z",
            "thumbnail": "https://i.ytimg.com/vi/MnIbmbkIgaQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 414,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:41.206Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Old SwitchAroo: Gaming Retro with Mike and Jaymo |A Nintendo Switch Online retro gaming podcast",
            "kind": "episode",
            "title": "S4E14: Fire Emblem- Path of Radiance - or- Hitting the Griddy",
            "url": "https://podcasters.spotify.com/pod/show/theoldswitcharoo/episodes/S4E14-Fire-Emblem--Path-of-Radiance---or--Hitting-the-Griddy-e3mhjt9",
            "at": "2026-07-29T09:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Stiltskin from the shrugbuds joins the party for some Fire Emblem: Path of Radiance (GameCube, 2005) with Mike and Jaymo as part of The Old SwitchAroo’s epic quest to research and review every retro game in Nintendo Switch Online’s Nintendo Classics catalog.\n \n In this episode, we welcome our first ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:44.814Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Old SwitchAroo: Gaming Retro with Mike and Jaymo |A Nintendo Switch Online retro gaming podcast",
            "kind": "episode",
            "title": "S4E13: Killer Instinct -or- ULTRA COMBO!",
            "url": "https://podcasters.spotify.com/pod/show/theoldswitcharoo/episodes/S4E13-Killer-Instinct--or--ULTRA-COMBO-e3m0kc0",
            "at": "2026-07-15T09:00:00.000Z",
            "thumbnail": null,
            "excerpt": "SSj3Butch returns to the arena to help pit Killer Instinct (SNES, 1994) and Killer Instinct Gold (N64, 1996) to help Mike and Jaymo decide which Killer Instinct reigns supreme as part of The Old SwitchAroo’s epic quest to research and review every retro game in Nintendo Switch Online’s Nintendo Clas",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:44.815Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Use code \"JAYMO\" to get up to $200 in Bonus Rewards as a new DraftKings customer @DraftKings",
            "url": "https://www.youtube.com/watch?v=5hXKh6tQUl0",
            "at": "2026-07-01T23:37:34Z",
            "thumbnail": "https://i.ytimg.com/vi/5hXKh6tQUl0/hqdefault.jpg",
            "excerpt": null,
            "metric": 431,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:34:41.206Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__clemyntine",
        "name": "clemyntine",
        "handle": "@clemyntine",
        "initials": "CL",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_l7AZ5OkPRyfZvWFYpSUofRrY2_DL5cm_g_BLep8InonA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@clemyntine",
            "followers": 284600,
            "url": "https://www.tiktok.com/@clemyntine",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0c98a9ca4fb4a859eea3b1a540062533~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=08fa7482&x-expires=1786568400&x-signature=Woi3oRq7eb67%2B%2Br8F4Iu31liUOk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@clemyntine",
            "followers": 4,
            "url": "https://www.youtube.com/@clemyntine",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_l7AZ5OkPRyfZvWFYpSUofRrY2_DL5cm_g_BLep8InonA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "audience": {
          "total": 284600
        },
        "score": 11,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 11,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no own website, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "+19% vs baseline",
                "weightPct": 0,
                "detail": "4.7 posts a month now, against 3.9 before that — up 19%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "Pop culture deep dives, blind items and gossip is a proven high-demand category, and her recurring talking-head deep-dive format is inherently clippable and repeatable, borne out by 19m likes across 284k TikTok followers."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 14,
            "note": "found it — youtube.com/@clemyntine",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 73,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/a-date-with-dateline/id1244348213?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 39,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "A Date With Dateline",
            "kind": "episode",
            "title": "The Day Dee Disappeared S.34 Ep.63",
            "url": "https://eaf71035-63b4-4dde-bc5a-5aec8b3ff54f.libsyn.com/the-day-dee-disappeared-s34-ep63",
            "at": "2026-08-05T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "The One With a Giant X-Ray and a Fiery, Feisty, and Flashy Farmer! AKA THE DAY DEE DISAPPEARED!\n \n Official Description from NBCU: When Dee Warner vanishes, a shocking piece of evidence reveals the truth three years later. Andrea Canning reports.\n \n Check out our Patreon or Supercast and get instant",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:06.775Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Boston Taxi",
            "url": "https://www.youtube.com/watch?v=09qz1GtujcU",
            "at": "2011-07-18T10:48:30Z",
            "thumbnail": "https://i.ytimg.com/vi/09qz1GtujcU/hqdefault.jpg",
            "excerpt": null,
            "metric": 163,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:01.203Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "A Date With Dateline",
            "kind": "episode",
            "title": "The Mushroom Mystery S.34 Ep.61",
            "url": "https://eaf71035-63b4-4dde-bc5a-5aec8b3ff54f.libsyn.com/the-mushroom-mystery-s34-ep61",
            "at": "2026-07-29T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "The One With All The Fungi/Funji Hunting, Men On Bicycles, and a Fake Shark Attack! AKA THE MUSHROOM MYSTERY!\n \n Official Description from NBCU: When a woman finds a body on a rural road outside of Indianapolis, police learn the victim might have been poisoned with mushrooms. Blayne Alexander report",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:06.775Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "A Date With Dateline",
            "kind": "episode",
            "title": "Slow Burn S.34 Ep.59",
            "url": "https://eaf71035-63b4-4dde-bc5a-5aec8b3ff54f.libsyn.com/slow-burn",
            "at": "2026-07-22T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "The One With Colt's Neck and Too Many New Jersey Italian Men To Keep Track Of! AKA The SLOW BURN!\n Official Description from NBCU: After a deadly fire at a New Jersey mansion, detectives uncover a link to an earlier blaze that exposes a shocking web of deception. Andrea Canning reports.\n Want more o",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:06.775Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__blabbertok",
        "name": "blabbertok",
        "handle": "@blabbertok",
        "initials": "BL",
        "avatar": "https://yt3.googleusercontent.com/DFc_GDj1cg1DopxiPuUPN4kf9YhvhNQAkar5ru5a26tnt9MqYzRpuGSQnxRu_sVR6JBhNNfK=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@blabbertok",
            "followers": 256000,
            "url": "https://www.tiktok.com/@blabbertok",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7310216441406423082~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ca72cb61&x-expires=1786568400&x-signature=Ymt%2BaRvglFHFxryzCWCCrue2zAk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@blabbertok",
            "followers": 31,
            "url": "https://www.youtube.com/@blabbertok",
            "avatar": "https://yt3.googleusercontent.com/DFc_GDj1cg1DopxiPuUPN4kf9YhvhNQAkar5ru5a26tnt9MqYzRpuGSQnxRu_sVR6JBhNNfK=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "audience": {
          "total": 256000
        },
        "score": 10,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 10,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership, no podcast",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — their whole channel is 132 days old, so there is no earlier stretch to compare the last 90 days against"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "They make short-form current-events commentary on TikTok — clippable by nature, a repeatable format they clearly run on volume, and a category with real appetite."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 29,
            "note": "found it — youtube.com/@blabbertok",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 44,
            "note": "something at substack.com/@blabbertok — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 51,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 37,
            "note": "they link to it themselves",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "#stitch with society.made.the.joker #chrisrock #willsmith... #Shorts #blabbertok",
            "url": "https://www.youtube.com/watch?v=WATSoAZzodI",
            "at": "2026-07-16T01:54:59Z",
            "thumbnail": "https://i.ytimg.com/vi/WATSoAZzodI/hqdefault.jpg",
            "excerpt": null,
            "metric": 0,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:05.136Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "New video from @blabbertok #Shorts #blabbertok",
            "url": "https://www.youtube.com/watch?v=-veEHLZSzHA",
            "at": "2026-07-15T06:05:36Z",
            "thumbnail": "https://i.ytimg.com/vi/-veEHLZSzHA/hqdefault.jpg",
            "excerpt": null,
            "metric": 0,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:05.136Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Chris Rock s first appearance since the Oscars. #Shorts #blabbertok",
            "url": "https://www.youtube.com/watch?v=ptKjL-e_Dvk",
            "at": "2026-07-15T01:54:59Z",
            "thumbnail": "https://i.ytimg.com/vi/ptKjL-e_Dvk/hqdefault.jpg",
            "excerpt": null,
            "metric": 3,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:05.136Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__cover1",
        "name": "cover1",
        "handle": "@cover1",
        "initials": "CO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mQ7xzBniFlXIr7nhXlNV5-hohN9iJJP8jRJd5HtUAbvk4=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@cover1",
            "followers": 2,
            "url": "https://www.tiktok.com/@cover1",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5ffebab4&x-expires=1786568400&x-signature=J2J6IecAjzWYDntrFabXVDP7DnY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@cover1",
            "followers": 101000,
            "url": "https://www.youtube.com/@cover1",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mQ7xzBniFlXIr7nhXlNV5-hohN9iJJP8jRJd5HtUAbvk4=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 101000
        },
        "score": 10,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 6,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No own website, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 4,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−44% vs baseline",
                "weightPct": 100,
                "detail": "24 videos a month now, against 44 before that — down 44% — 4.2 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@cover1",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 21,
            "note": "found it — cover1.substack.com",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at cover1.myshopify.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 14,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-margaret-cho/id1470515305?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Kaleb Elarms-Orr is IMPRESSIVE",
            "url": "https://www.youtube.com/watch?v=5EAvFEx3u-Y",
            "at": "2026-08-10T16:47:07Z",
            "thumbnail": "https://i.ytimg.com/vi/5EAvFEx3u-Y/hqdefault.jpg",
            "excerpt": null,
            "metric": 1748,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:12.327Z",
            "status": null
          },
          {
            "platform": "Newsletter",
            "publication": "Cover 1's Newsletter",
            "kind": "writing",
            "title": "Coming soon",
            "url": "https://cover1.substack.com/p/coming-soon",
            "at": "2022-01-31T13:59:16.000Z",
            "thumbnail": null,
            "excerpt": "This is Cover 1's Newsletter , a newsletter about In-depth football analysis.\n Subscribe now",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-10T21:35:17.697Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Margaret Cho",
            "kind": "episode",
            "title": "Chinatown Destruction with Sherry Cola",
            "url": "https://play.acast.com/s/cho/chinatowndestructionwithsherrycola",
            "at": "2021-06-17T04:06:53.000Z",
            "thumbnail": null,
            "excerpt": "In the season two finale of The Margaret Cho Mortal Minority, Margaret and comedian Sherry Cola discuss the unsolved 2017 murder of a Chinese-American teenager that has recently been reclassified as a hate crime. Also, the anti-Chinese laws in the Bay Area town Antioch that led to the destruction of",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:17.698Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Buffalo Bills Wrap on Training Camp; Initial Impressions of Highmark Stadium and More | ARH",
            "url": "https://www.youtube.com/watch?v=PuZFG6Qql5A",
            "at": "2026-08-10T12:37:10Z",
            "thumbnail": "https://i.ytimg.com/vi/PuZFG6Qql5A/hqdefault.jpg",
            "excerpt": null,
            "metric": 0,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:12.328Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 4,
          "why": "4 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__richeisenshow",
        "name": "richeisenshow",
        "handle": "@richeisenshow",
        "initials": "RI",
        "avatar": "https://yt3.googleusercontent.com/hxOYtjjvrWEso3-Y80JTcGL3VHCn28ZOdPvwg0Im0X6MYTIddoC2kj3e9NaS8zgjgb8zSKNyFQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@richeisenshow",
            "followers": 1110000,
            "url": "https://www.youtube.com/@richeisenshow",
            "avatar": "https://yt3.googleusercontent.com/hxOYtjjvrWEso3-Y80JTcGL3VHCn28ZOdPvwg0Im0X6MYTIddoC2kj3e9NaS8zgjgb8zSKNyFQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 1110000
        },
        "score": 10,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 10,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — they post often enough that 200 posts only reach back 87 days — not far enough behind the last 90 to compare against"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "A daily three-hour sports talk show built on celebrity and athlete interviews is inherently clippable, runs on a fixed repeatable weekday format, and sits squarely in sports — a category with huge demand."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — youtube.com/@richeisenshow",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 35,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 9,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-rich-eisen-show/id926642601?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 9,
            "note": "found it — richeisenshow.com · that page links back to their YouTube",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "This Phillies Fan Did an Inning of Play-by-Play and Absolutely Crushed It!!! | The Rich Eisen Show",
            "url": "https://www.youtube.com/watch?v=94ZFqw0doCk",
            "at": "2026-08-10T21:30:28Z",
            "thumbnail": "https://i.ytimg.com/vi/94ZFqw0doCk/hqdefault.jpg",
            "excerpt": null,
            "metric": 8,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:21.587Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Rich Eisen Show",
            "kind": "episode",
            "title": "Hour 3: Vikings ‘4-Downs’ Season Preview, plus Akbar Gbajabiamila & Matt Iseman Talk ‘ANW’ and Raiders",
            "url": null,
            "at": "2026-08-10T19:38:00.000Z",
            "thumbnail": null,
            "excerpt": "Rich reacts to the latest developments in the Cleveland Browns Shedeur Sanders vs Deshaun Watson QB competition, plays the ‘NFL Win-Loss Game’ with a Washington Commanders fan, and previews the Vikings‘ season with the top 4 questions facing Minnesota heading into the 2026 NFL campaign. \n Akbar Gbaj",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:27.571Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Rich Eisen Weighs In on the Latest Developments in the Cleveland Browns’ QB Competition",
            "url": "https://www.youtube.com/watch?v=6krdg95d4bw",
            "at": "2026-08-10T21:00:07Z",
            "thumbnail": "https://i.ytimg.com/vi/6krdg95d4bw/hqdefault.jpg",
            "excerpt": null,
            "metric": 648,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:21.587Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Dolphins HC Jeff Hafley: What It Will Talke to Restore Miami’s Winning Culture | The Rich Eisen Show",
            "url": "https://www.youtube.com/watch?v=oaWGSjBrKwg",
            "at": "2026-08-10T20:30:39Z",
            "thumbnail": "https://i.ytimg.com/vi/oaWGSjBrKwg/hqdefault.jpg",
            "excerpt": null,
            "metric": 266,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:21.587Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__robertgriffiniii",
        "name": "robertgriffiniii",
        "handle": "@robertgriffiniii",
        "initials": "RO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mKt46Tjr-gMi6EQr39WignvTZW2ibsakpLD7C3f9CSvA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@robertgriffiniii",
            "followers": null,
            "url": "https://www.youtube.com/@robertgriffiniii",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mKt46Tjr-gMi6EQr39WignvTZW2ibsakpLD7C3f9CSvA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false
          }
        ],
        "audience": {
          "total": 0
        },
        "score": 10,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 10,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "+28% vs baseline",
                "weightPct": 0,
                "detail": "4.3 posts a month now, against 3.4 before that — up 28%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "There's no visible content here at all — the bio is a frozen 2011 Baylor ticket promo and the only \"recent posts\" are YouTube player boilerplate, so nothing shows a clippable thing made in a repeatable format."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — youtube.com/@robertgriffiniii",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 35,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 25,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 17,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/outta-pocket-with-rg3/id1707075924?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 7,
            "note": "1 of 2 places wouldn't answer; only 1 of the 2 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Outta Pocket with RG3",
            "kind": "episode",
            "title": "The Cleveland Browns Need to Name Sheduer Sanders as Their Starter + Jake Paul’s NFL Dream and Why Arch Manning Earned the Hype",
            "url": null,
            "at": "2026-08-05T19:53:00.000Z",
            "thumbnail": null,
            "excerpt": "In this episode of Outta Pocket with RG3, Shedeur Sanders is turning heads at Browns training camp, Arch Manning is making a serious Heisman case, and Jake Paul says he wants to play in the NFL. RG3 and Grete Griffin break down the biggest storylines in football, including Travis Kelce's camp buzz, ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:29.911Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Outta Pocket with RG3",
            "kind": "episode",
            "title": "How the Bears, 49ers and Patriots win the Super Bowl and How the Ravens and Commanders keep the QB healthy",
            "url": null,
            "at": "2026-07-29T13:49:00.000Z",
            "thumbnail": null,
            "excerpt": "In this episode of Outta Pocket with RG3, we're breaking down some of the biggest storylines around the NFL. We discuss what Patrick Mahomes being cleared for training camp means for the Kansas City Chiefs and why it's such a huge development heading into the season. We also dive into why Xavier Wor",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:29.912Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Outta Pocket with RG3",
            "kind": "episode",
            "title": "World Cup Final Recap + NFL-NBA Dream Soccer team + NFL Training Camps Myths",
            "url": null,
            "at": "2026-07-21T19:43:00.000Z",
            "thumbnail": null,
            "excerpt": "On this episode of Outta Pocket with RG3 , we break down an unforgettable World Cup Final and what it means for the future of international soccer. We dive into Messi’s next chapter, discuss whether the GOAT’s journey is really nearing the end, and look at how his impact continues to shape the game.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:29.912Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__nightcap",
        "name": "nightcap",
        "handle": "@nightcap",
        "initials": "NI",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mVsjfWYFcZP8wSzYYT5onh83XDj3AOR8BiSU2ueXlw5A=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@nightcap",
            "followers": null,
            "url": "https://www.tiktok.com/@nightcap",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7327766559149621254~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=aee3a9d4&x-expires=1786568400&x-signature=gFLVt5xeGkEC563%2BcGSFFdXOLjw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@nightcap",
            "followers": 185,
            "url": "https://www.youtube.com/@nightcap",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mVsjfWYFcZP8wSzYYT5onh83XDj3AOR8BiSU2ueXlw5A=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 185
        },
        "score": 8,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 8,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No own website, no membership, no podcast",
                "weightPct": 100,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 0 posts in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 18,
            "note": "found it — youtube.com/@nightcap",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 15,
            "note": "found it — nightcap.substack.com",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 14,
            "note": "something at nightcap.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 14,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 12,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Newsletter",
            "publication": "Nightcap Newsletter",
            "kind": "writing",
            "title": "Music: An Invisible Mosaic",
            "url": "https://nightcap.substack.com/p/music-an-invisible-mosaic",
            "at": "2023-04-25T19:23:04.000Z",
            "thumbnail": null,
            "excerpt": "Photo by Elijah O'Donnell \n The top floor of the dorm was stuffy; its stairs a challenge to climb. Everyone around me embodied a literal \"I'm too old for this shit\" vibe towards the absurd circus that is academia. If I wanted to, I could reach out and grasp the palpable distress radiating from my fe",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-10T21:35:39.019Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Mordhau Soundtrack - Taiga (Metal Version)",
            "url": "https://www.youtube.com/watch?v=9QxIAHK1Uyo",
            "at": "2020-11-14T23:47:46Z",
            "thumbnail": "https://i.ytimg.com/vi/9QxIAHK1Uyo/hqdefault.jpg",
            "excerpt": null,
            "metric": 7990,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:32.235Z",
            "status": null
          },
          {
            "platform": "Newsletter",
            "publication": "Nightcap Newsletter",
            "kind": "writing",
            "title": "Navigating Taxonomy",
            "url": "https://nightcap.substack.com/p/navigating-taxonomy",
            "at": "2023-03-05T18:40:19.000Z",
            "thumbnail": null,
            "excerpt": "Photo by Mel Poole \n I live within walking distance of a police barracks. As a child, I have memories of the giant wall barricading the buildings as more monumental than they are today.\n At the entry gates were ominous security personnels. They had such husky voices and piercing looks, despite never",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-10T21:35:39.019Z",
            "status": null
          },
          {
            "platform": "Newsletter",
            "publication": "Nightcap Newsletter",
            "kind": "writing",
            "title": "Decoding the Depths",
            "url": "https://nightcap.substack.com/p/decoding-the-depths",
            "at": "2023-02-01T15:03:52.000Z",
            "thumbnail": null,
            "excerpt": "The Cables That Connect Us by Michael Dunphy \n It was a bright summer day in 2014, which meant sweaty armpits and that my tight school pants were even more uncomfortable than usual.\n Midday was approaching, and I, along with my fellow soon-to-be-senior peers, was being cajoled to the assembly hall o",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-10T21:35:39.019Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__pff",
        "name": "pff",
        "handle": "@pff",
        "initials": "PF",
        "avatar": "https://yt3.googleusercontent.com/vO4iHqnvyNDB9IejKp4HgXjLL2aIuAazHbVEznL9reQkrntBo733nNycQq1ZseMRzpXvRtczLDE=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@pff",
            "followers": 11100,
            "url": "https://www.youtube.com/@pff",
            "avatar": "https://yt3.googleusercontent.com/vO4iHqnvyNDB9IejKp4HgXjLL2aIuAazHbVEznL9reQkrntBo733nNycQq1ZseMRzpXvRtczLDE=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 11100
        },
        "score": 5,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 5,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No membership, no podcast",
                "weightPct": 100,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−9% vs baseline",
                "weightPct": 0,
                "detail": "32 videos a month now, against 35 before that — down 9% — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 16,
            "note": "found it — youtube.com/@pff",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 27,
            "note": "something at productforfounders.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 18,
            "note": "something at pff.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 10,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 14,
            "note": "found it — pff.com",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Their site",
            "publication": "Pro Football Focus",
            "kind": "writing",
            "title": "2026 NFL player rankings: PFF ranks the league’s best at every position",
            "url": "https://www.pff.com/news/nfl-player-rankings/",
            "at": "2026-08-10T12:52:52.000Z",
            "thumbnail": null,
            "excerpt": "PFF's 2026 NFL player rankings break down the league's best players at every position entering the new season. Josh Allen headlines the quarterback rankings, while reigning Defensive Player of the Year Myles Garrett leads the NFL's edge defenders. Explore every position using PFF grades, advanced me",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:35:43.868Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "8-3-26, 111 NJ 17, Hasbrouck Hts, Bergen Co, NJ, 3 Alarm Building Fire",
            "url": "https://www.youtube.com/watch?v=ohWSSJVMIWw",
            "at": "2026-08-03T16:02:12Z",
            "thumbnail": "https://i.ytimg.com/vi/ohWSSJVMIWw/hqdefault.jpg",
            "excerpt": null,
            "metric": 75,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-10T21:35:38.258Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Pro Football Focus",
            "kind": "writing",
            "title": "Tampa Bay Buccaneers 2026 preview: New era begins without Mike Evans, Lavonte David",
            "url": "https://www.pff.com/news/nfl-tampa-bay-buccaneers-2026-preview/",
            "at": "2026-08-10T12:29:34.000Z",
            "thumbnail": null,
            "excerpt": "The Tampa Bay Buccaneers enter 2026 without franchise fixtures Mike Evans and Lavonte David, but a revamped edge group provides reason for optimism. First-round pick Rueben Bain Jr. joins YaYa Diaby and Al-Quadin Muhammad in a deep pass-rush rotation, while Emeka Egbuka leads an evolving receiving c",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:35:43.869Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Pro Football Focus",
            "kind": "writing",
            "title": "New Orleans Saints 2026 preview: Tyler Shough looks to build on promising rookie season",
            "url": "https://www.pff.com/news/nfl-new-orleans-saints-2026-preview/",
            "at": "2026-08-10T12:00:24.000Z",
            "thumbnail": null,
            "excerpt": "The New Orleans Saints enter 2026 with Tyler Shough looking to build on a promising rookie season after leading all first-year quarterbacks in PFF passing grade. First-round receiver Jordyn Tyson joins Chris Olave in a revamped supporting cast, while Kelvin Banks Jr. enters Year 2 as a breakout cand",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-10T21:35:43.869Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__patmcafeeshow",
        "name": "patmcafeeshow",
        "handle": "@patmcafeeshow",
        "initials": "PA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7336709820382691333~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=150d49fb&x-expires=1786568400&x-signature=GaBX%2Bvyf%2FXvQsUgh6fL3Pi64Lg8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@patmcafeeshow",
            "followers": 24,
            "url": "https://www.tiktok.com/@patmcafeeshow",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7336709820382691333~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=150d49fb&x-expires=1786568400&x-signature=GaBX%2Bvyf%2FXvQsUgh6fL3Pi64Lg8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 24
        },
        "score": 3,
        "scoreDelta": null,
        "confidence": 0.333,
        "pillars": {
          "gap": {
            "score": 3,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.333,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No membership",
                "weightPct": 100,
                "detail": "2 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−5% vs baseline",
                "weightPct": 0,
                "detail": "16 posts a month now, against 17 before that — down 5% — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "The account presents as the Pat McAfee Show, a daily on-camera NFL opinion and analysis program with a fixed repeating format, which is exactly what the brief asks for — though this particular profile shows no visible posts, so the content itself is unconfirmed rather than wrong."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 19,
            "note": "something at youtube.com/user/patmcafeeshow — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 43,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 22,
            "note": "something at store.patmcafeeshow.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-pat-mcafee-show/id1435183458?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 8,
            "note": "something at patmcafeeshow.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "The Pat McAfee Show",
            "kind": "episode",
            "title": "PMS 2.0 1599 - Adam Schefter, Adam Vinatieri, Josh Allen, Tommy Fleetwood, Darius Butler, & AJ Hawk",
            "url": null,
            "at": "2026-08-10T20:03:00.000Z",
            "thumbnail": null,
            "excerpt": "On today's show, Pat, Darius Butler, AJ Hawk, and the boys discuss all the different camp highlights that have been making their rounds, the Hall of Fame induction this weekend and how it was an incredible time for all that attended, what’s going on in the MLB, Banana Ball still doing it, and everyt",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:22.307Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Pat McAfee Show",
            "kind": "episode",
            "title": "PMS 2.0 1598 - THE NFL IS BACK, Hall of Fame Game Preview, Going Camping with Rick Stroud, TJ Lang, David Lombardi, Akron Head Coach Joe Moorhead, Adam Schefter, Eric Hosmer, AQ Shipley, & AJ Hawk",
            "url": null,
            "at": "2026-08-06T19:39:00.000Z",
            "thumbnail": null,
            "excerpt": "On today's show, Pat, AJ Hawk, and the boys preview tonight’s Hall of Fame game between the Panthers and Cardinals, and chat about everything else happening around the sports world as they are also joined by several great guests including beat writers Rick Stroud with the Bucs, Super Bowl Champion, ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:22.307Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Pat McAfee Show",
            "kind": "episode",
            "title": "PMS 2.0 1597 - Ohio State Head Coach Ryan Day, Chris Olave, Chuck Pagano, Ian Rapoport, Darius Butler, & AJ Hawk",
            "url": null,
            "at": "2026-08-05T19:01:00.000Z",
            "thumbnail": null,
            "excerpt": "On today's show, Pat, Darius Butler, AJ Hawk, and the boys bounce around to more training camp’s around the NFL and check in on all the different highlights from multiple teams, discuss tomorrow night’s Hall of Fame game between the Cardinals and Panthers, check in on what’s going on in baseball pos",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:22.307Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__chrissimmsunbuttoned",
        "name": "chrissimmsunbuttoned",
        "handle": "@chrissimmsunbuttoned",
        "initials": "CH",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 3,
        "scoreDelta": null,
        "confidence": 0.167,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.167,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "1 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 3,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "−40% vs baseline",
                "weightPct": 100,
                "detail": "9.7 posts a month now, against 16 before that — down 40% — 3.2 of the 40 Pressure points. Ceiling on this look is 34."
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "not_found",
            "surfacesChecked": 29,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 39,
            "note": "only 4 of the 5 places we need actually answered; we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 26,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 18,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/chris-simms-unbuttoned/id1454809704?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 23,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Chris Simms Unbuttoned",
            "kind": "episode",
            "title": "Which teams will regress in 2026?",
            "url": "https://omny.fm/shows/chris-simms-unbuttoned/which-teams-will-regress-in-2026",
            "at": "2026-08-10T17:34:19.000Z",
            "thumbnail": null,
            "excerpt": "Whattup homies&hellip;on today&rsquo;s Chris Simms Unbuttoned with Connor Rogers, we have good news for 49ers fans as Kyle Shanahan as he&rsquo;s back on the sideline for the preseason opener&hellip; Bad news for a pair of NFC East teams who have some injury questions and which teams might be poised",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:22.128Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Chris Simms Unbuttoned",
            "kind": "episode",
            "title": "Hall of Fame Game: Carson Beck shines; CMC not Top 10 RB?",
            "url": "https://omny.fm/shows/chris-simms-unbuttoned/hall-of-fame-game-carson-beck-shines-cmc-not-top-10-rb",
            "at": "2026-08-07T17:20:05.000Z",
            "thumbnail": null,
            "excerpt": "Football is back! After a great Hall of Fame Game, Chris & Connor explain how excited we can get about Carson Beck & Haynes King. The guys then welcome on rising star Safety Xavier Watts to talk about the Falcons outlook for this season. Finally, the guys look at the highest-paid RBs&hellip;which na",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:22.128Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Chris Simms Unbuttoned",
            "kind": "episode",
            "title": "Zay Flowers on Cooking for Lamar Jackson",
            "url": "https://omny.fm/shows/chris-simms-unbuttoned/zay-flowers-on-cooking-for-lamar-jackson",
            "at": "2026-08-06T17:28:26.000Z",
            "thumbnail": null,
            "excerpt": "On a special edition of Unbuttoned, Chris speaks with Ravens WR Zay Flowers fresh off his new contract! Zay tells us how he&rsquo;s gonna spend all that new money he has, what do he and Lamar Jackson do when they&rsquo;re hanging out, and the 1 play he wishes he could have back. Plus, why did he put",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:22.128Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__alexrollins",
        "name": "alexrollins",
        "handle": "@alexrollins",
        "initials": "AL",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_n6ZBBa_3wssvZ-3uYejR-pYif7bZ3F-sJr33JSyktwwYCCLRkkFCHIjZW7Up1yAzVU4w=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@alexrollins",
            "followers": 3667,
            "url": "https://www.tiktok.com/@alexrollins",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/34f31962b1d06a75fdb80b95c7adbef0~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=2b164d9d&x-expires=1786568400&x-signature=DhhxxUzD6zGXszax2Upql7qxX%2Fk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-12T21:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@alexrollins",
            "followers": null,
            "url": "https://www.youtube.com/@alexrollins",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_n6ZBBa_3wssvZ-3uYejR-pYif7bZ3F-sJr33JSyktwwYCCLRkkFCHIjZW7Up1yAzVU4w=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false
          }
        ],
        "audience": {
          "total": 3667
        },
        "score": 3,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 3,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No membership",
                "weightPct": 100,
                "detail": "3 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — they post often enough that 100 posts only reach back 94 days — not far enough behind the last 90 to compare against"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 16,
            "note": "found it — youtube.com/@alexrollins",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 21,
            "note": "something at substack.com/@alexrollins — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 9,
            "note": "something at alexrollins.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 17,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-alex-marlow-show/id1777276736?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 10,
            "note": "something at alexrollins.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "The Alex Marlow Show",
            "kind": "episode",
            "title": "AOC IVF, WNBA Violence, GOP Gets Bad Polling News",
            "url": "https://omny.fm/shows/the-alex-marlow-show/aoc-ivf-wnba-violence-gop-gets-bad-polling-news",
            "at": "2026-08-10T18:30:00.000Z",
            "thumbnail": null,
            "excerpt": "In this episode of the Alex Marlow Show, Alex talks about the WNBA, where the he expresses frustration with the league's handling of a recent incident involving a player. He argues that the league is not doing enough to support its stars, particularly those who are making the sport more accessible t",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:37.918Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Alex Marlow Show",
            "kind": "episode",
            "title": "Marlow Reacts: Wild Kirk Theory, Trump Ends Birth Tourism, \"W\" NBA, Tate McRae MAGA?",
            "url": "https://omny.fm/shows/the-alex-marlow-show/marlow-reacts-wild-kirk-theory-trump-ends-birth-tourism-w-nba-tate-mcrae-maga",
            "at": "2026-08-08T12:00:00.000Z",
            "thumbnail": null,
            "excerpt": "In this episode of The Alex Marlow Show, Alex is covering topics that didn't get enough attention on his live radio show! From recent executive orders signed by the President regarding birthright citizenship and birth tourism, discussing the implications and potential consequences, to the WNBA and t",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:37.918Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Alex Marlow Show",
            "kind": "episode",
            "title": "Bizarre Jobs Report Breakdown, Blanche Nomination This Close, Abdul El-Sayed Chaos",
            "url": "https://omny.fm/shows/the-alex-marlow-show/bizarre-jobs-report-breakdown-blanche-nomination-thisclose-abdul-el-sayed-chaos",
            "at": "2026-08-07T19:17:35.000Z",
            "thumbnail": null,
            "excerpt": "The latest episode of The Alex Marlow Show, Alex breaks down the jobs report, discussing the impact of the government's focus on high-end, blue-collar to white-collar work and the effects of the border crackdown on immigration. Alex also touches on the manufacturing boom and the role of the governme",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:35:37.918Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__esotericcarcare",
        "name": "esotericcarcare",
        "handle": "@esotericcarcare",
        "initials": "ES",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 0,
        "scoreDelta": null,
        "confidence": 0,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "0 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "not_found",
            "surfacesChecked": 26,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 40,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 27,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 20,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 8,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 7,
            "note": "something at esotericcarcare.com — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__garagetherapyone",
        "name": "garagetherapyone",
        "handle": "@garagetherapyone",
        "initials": "GA",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 0,
        "scoreDelta": null,
        "confidence": 0,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "0 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "not_found",
            "surfacesChecked": 26,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 40,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 23,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 19,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 12,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 20,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__sidelineexposure",
        "name": "sidelineexposure",
        "handle": "@sidelineexposure",
        "initials": "SI",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 0,
        "scoreDelta": null,
        "confidence": 0.167,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.167,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "1 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 0 posts in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "not_found",
            "surfacesChecked": 55,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 81,
            "note": "2 of 5 places wouldn't answer; only 3 of the 5 places we need actually answered; we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 56,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 40,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — https://podcasts.apple.com/us/podcast/sideline-exposure-college-football-fanatic/id1594293479?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 43,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Sideline Exposure: College Football Fanatic",
            "kind": "episode",
            "title": "FOUR Possible Reasons Why Jim Knowles Left Ohio State For Penn State",
            "url": null,
            "at": "2025-02-02T22:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Jim Knowles leaving Ohio State for the same DC position at Penn State is the most surprising move so far this offseason. Here are four possible reasons why he would leave after just winning a National Championship with Ohio State: - Money, he's become the highest paid DC in College Football - Return",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:34.865Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Sideline Exposure: College Football Fanatic",
            "kind": "episode",
            "title": "Ohio State DOMINATES The College Football Playoff - Wins National Championship Over Notre Dame",
            "url": null,
            "at": "2025-01-22T02:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Did Ohio State just have the best 4 game run in College Football history? It sure seems like it. Two blowouts, a hard fought win vs Texas and a National Championship later, the Buckeyes find themselves back at the top of the CFB mountain. Ryan Day deserved all the criticism when they lost to Michiga",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:34.865Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Sideline Exposure: College Football Fanatic",
            "kind": "episode",
            "title": "The Road to Glory: Does Ohio State or Notre Dame Hoist College Football's Trophy?",
            "url": null,
            "at": "2025-01-18T05:00:00.000Z",
            "thumbnail": null,
            "excerpt": "It all comes down to this! This is a National Championship game preview episode from the perspective of an Ohio State fan. Notre Dame wants to run the football and has the best man coverage defense in the country! Ohio State has the most talented roster in the sport, and might have the best overall ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:34.865Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__joebroback",
        "name": "joebroback",
        "handle": "@joebroback",
        "initials": "JO",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 0,
        "scoreDelta": null,
        "confidence": 0.167,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.167,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "1 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — only 0 posts in the 275 days before that — too few to call it a rate"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 37,
            "note": "something at youtube.com/c/joebroback — not confirmed as theirs",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 78,
            "note": "only 4 of the 5 places we need actually answered; we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 53,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 37,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/cfb-breakdown/id1525719783?uo=4",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 45,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "CFB Breakdown",
            "kind": "episode",
            "title": "Texas A&M Aggies Top 10 Players for 2021",
            "url": "https://podcasters.spotify.com/pod/show/cfbbreakdown/episodes/Texas-AM-Aggies-Top-10-Players-for-2021-e12ehnr",
            "at": "2021-06-09T23:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Is this the year that Jimbo Fisher and the Aggies break through?",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:39.607Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "CFB Breakdown",
            "kind": "episode",
            "title": "North Texas Mean Green Top 10 Players for 2021",
            "url": "https://podcasters.spotify.com/pod/show/cfbbreakdown/episodes/North-Texas-Mean-Green-Top-10-Players-for-2021-e12ehls",
            "at": "2021-06-09T16:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Can Seth Littrell turn things around for North Texas?",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:39.607Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "CFB Breakdown",
            "kind": "episode",
            "title": "Army Black Knights Top 10 Players Returning for 2021",
            "url": "https://podcasters.spotify.com/pod/show/cfbbreakdown/episodes/Army-Black-Knights-Top-10-Players-Returning-for-2021-e129n1u",
            "at": "2021-06-08T17:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Jeff Monken sticks around for one more year, and it will be tough for Army to retain him if he continues his winning ways.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-10T21:34:39.607Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__darrengreenetiktok",
        "name": "darrengreenetiktok",
        "handle": "@darrengreenetiktok",
        "initials": "DA",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 0,
        "scoreDelta": null,
        "confidence": 0,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "0 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "not_found",
            "surfacesChecked": 55,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 69,
            "note": "only 4 of the 5 places we need actually answered; we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 48,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 35,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 16,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 34,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__jtosullivan",
        "name": "jtosullivan",
        "handle": "@jtosullivan",
        "initials": "JT",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 0,
        "scoreDelta": null,
        "confidence": 0,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "0 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "not_found",
            "surfacesChecked": 31,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 45,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 31,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 23,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 12,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 29,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__joegoodberry",
        "name": "joegoodberry",
        "handle": "@joegoodberry",
        "initials": "JO",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 0,
        "scoreDelta": null,
        "confidence": 0,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "0 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "not_found",
            "surfacesChecked": 27,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 39,
            "note": "only 4 of the 5 places we need actually answered; we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 27,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 18,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 10,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 24,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__rosstuckerpodcast",
        "name": "rosstuckerpodcast",
        "handle": "@rosstuckerpodcast",
        "initials": "RO",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "audience": {
          "total": 0
        },
        "score": 0,
        "scoreDelta": null,
        "confidence": 0,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
                "detail": "0 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "No purchase intent we could read",
                "weightPct": 0,
                "detail": "Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a zero."
              }
            ]
          },
          "strain": {
            "score": 0,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "nothing abandoned that we can see",
                "weightPct": 0,
                "detail": "nothing abandoned that we can see — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "selfreport",
                "label": "Self-reported strain",
                "engine": "llm",
                "value": "we couldn't read their captions",
                "weightPct": 0,
                "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 22."
              },
              {
                "key": "cadence",
                "label": "Cadence decay",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle"
              },
              {
                "key": "unanswered",
                "label": "Unanswered audience",
                "engine": "rule",
                "value": "not readable on this look",
                "weightPct": 0,
                "detail": "needs a second look — this is a change over time, and we have seen them once"
              }
            ]
          },
          "fit": {
            "verdict": "not_judged",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "not_judged",
                "detail": "the model pass did not run, and Fit is a judgment — no model, no verdict"
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "not_found",
            "surfacesChecked": 27,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 39,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 26,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 20,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 8,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 29,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-10",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-10",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-10",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-10",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-10",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-10",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": null,
        "headlineRestsOn": null,
        "accent": "#6E6E6E",
        "play": {
          "id": null,
          "label": "No play recommended",
          "why": "The play catalog (§5.5) is a product decision the engine does not make.",
          "generated": true
        },
        "outreach": {
          "subject": null,
          "opener": null,
          "bullets": [],
          "close": null,
          "generated": true,
          "why": "Generated on Promote (§6.5). Nothing generates it yet."
        },
        "generatedFields": [
          "accent",
          "play",
          "outreach"
        ],
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      }
    ],
    "drops": {
      "2026-08-11": {
        "m_worth_call_they_make_2": [
          "c_worth_call_they_make_2__pantheorganizer",
          "c_worth_call_they_make_2__itshunterfriesen",
          "c_worth_call_they_make_2__brettkollmann",
          "c_worth_call_they_make_2__pinehollowautodiagnostics",
          "c_worth_call_they_make_2__ratchetsandwrenches",
          "c_worth_call_they_make_2__motorcitymechanic",
          "c_worth_call_they_make_2__missunderstoodpod",
          "c_worth_call_they_make_2__forensicdetailingchannel",
          "c_worth_call_they_make_2__briansmobile1",
          "c_worth_call_they_make_2__fordtechmakuloco",
          "c_worth_call_they_make_2__watchweswork",
          "c_worth_call_they_make_2__packadaypodcast",
          "c_worth_call_they_make_2__ratarossa",
          "c_worth_call_they_make_2__thedraftnetwork",
          "c_worth_call_they_make_2__detailgroove",
          "c_worth_call_they_make_2__schrodingersbox",
          "c_worth_call_they_make_2__sharpfootballanalysis",
          "c_worth_call_they_make_2__backseatcoach",
          "c_worth_call_they_make_2__samhartman_10",
          "c_worth_call_they_make_2__brandonfwalker",
          "c_worth_call_they_make_2__hayesfawcett",
          "c_worth_call_they_make_2__gossipgilby",
          "c_worth_call_they_make_2__thoughtswgracie2_0",
          "c_worth_call_they_make_2__marcelluswiley",
          "c_worth_call_they_make_2__yvanlacroix",
          "c_worth_call_they_make_2__superfastmatt",
          "c_worth_call_they_make_2__50skid",
          "c_worth_call_they_make_2__theherd",
          "c_worth_call_they_make_2__autofanatic",
          "c_worth_call_they_make_2__humblemechanic",
          "c_worth_call_they_make_2__rj_young",
          "c_worth_call_they_make_2__girlwholove2gossip",
          "c_worth_call_they_make_2__inalovelydream",
          "c_worth_call_they_make_2__celebriteablinds",
          "c_worth_call_they_make_2__kurtbenkert",
          "c_worth_call_they_make_2__lockedonnfl",
          "c_worth_call_they_make_2__upandadams",
          "c_worth_call_they_make_2__stiffmiesters_picks",
          "c_worth_call_they_make_2__magic_maike",
          "c_worth_call_they_make_2__isleepwitsockson",
          "c_worth_call_they_make_2__clemyntine",
          "c_worth_call_they_make_2__blabbertok",
          "c_worth_call_they_make_2__cover1",
          "c_worth_call_they_make_2__richeisenshow",
          "c_worth_call_they_make_2__robertgriffiniii",
          "c_worth_call_they_make_2__nightcap",
          "c_worth_call_they_make_2__pff",
          "c_worth_call_they_make_2__patmcafeeshow",
          "c_worth_call_they_make_2__chrissimmsunbuttoned",
          "c_worth_call_they_make_2__alexrollins",
          "c_worth_call_they_make_2__esotericcarcare",
          "c_worth_call_they_make_2__garagetherapyone",
          "c_worth_call_they_make_2__sidelineexposure",
          "c_worth_call_they_make_2__joebroback",
          "c_worth_call_they_make_2__darrengreenetiktok",
          "c_worth_call_they_make_2__jtosullivan",
          "c_worth_call_they_make_2__joegoodberry",
          "c_worth_call_they_make_2__rosstuckerpodcast"
        ]
      }
    },
    "timeline": [],
    "runANameResult": {
      "id": "c_worth_call_they_make_2__pantheorganizer",
      "name": "pantheorganizer",
      "handle": "@pantheorganizer",
      "initials": "PA",
      "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
      "mandateId": "m_worth_call_they_make_2",
      "primaryPlatform": "TikTok profile",
      "platforms": [
        {
          "name": "TikTok profile",
          "handle": "@pantheorganizer",
          "followers": 43300,
          "url": "https://www.tiktok.com/@pantheorganizer",
          "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/69c8a1fa80ba728dc3fb140a292c2148~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d4065ae5&x-expires=1786647600&x-signature=z%2FgGNIcFvs0qqLSfahvbhSQr2IE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
          "avatarExpires": "2026-08-13T19:00:00.000Z",
          "avatarStale": false,
          "separate": true,
          "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
        },
        {
          "name": "YouTube channel",
          "handle": "@pantheorganizer",
          "followers": 1110000,
          "url": "https://www.youtube.com/@pantheorganizer",
          "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
          "avatarExpires": null,
          "avatarStale": false,
          "matchConfidence": 1
        }
      ],
      "audience": {
        "total": 1110000
      },
      "score": 42,
      "scoreDelta": null,
      "confidence": 1,
      "pillars": {
        "gap": {
          "score": 30,
          "max": 60,
          "engine": "rule+llm",
          "coverage": 1,
          "subsignals": [
            {
              "key": "owned",
              "label": "Owned-channel absence",
              "engine": "rule",
              "value": "No store, no newsletter, no membership",
              "weightPct": 90,
              "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
            },
            {
              "key": "demand",
              "label": "Unmet demand",
              "engine": "llm+rule",
              "value": "41 purchase-intent comments",
              "weightPct": 10,
              "detail": "41 lines classified as intent to buy or subscribe, in text the engine fetched first."
            }
          ]
        },
        "strain": {
          "score": 12,
          "max": 40,
          "engine": "rule+llm",
          "subsignals": [
            {
              "key": "abandon",
              "label": "Abandonment markers",
              "engine": "rule",
              "value": "13 dead links they still publish — they tried, it broke",
              "weightPct": 100,
              "detail": "13 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
            },
            {
              "key": "selfreport",
              "label": "Self-reported strain",
              "engine": "llm",
              "value": "we couldn't read their captions",
              "weightPct": 0,
              "detail": "we couldn't read their captions — 0 of the 40 Pressure points. Ceiling on this look is 34."
            },
            {
              "key": "cadence",
              "label": "Cadence decay",
              "engine": "rule",
              "value": "−9% vs baseline",
              "weightPct": 0,
              "detail": "11 videos a month now, against 12 before that — down 9%; the recent ones are getting 16% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
            },
            {
              "key": "unanswered",
              "label": "Unanswered audience",
              "engine": "rule",
              "value": "not readable on this look",
              "weightPct": 0,
              "detail": "needs a second look — this is a change over time, and we have seen them once"
            }
          ]
        },
        "fit": {
          "verdict": "pass",
          "engine": "llm",
          "subsignals": [
            {
              "key": "brief",
              "label": "Against the brief",
              "engine": "llm",
              "value": "pass",
              "detail": "This is a dedicated car detailing tutorial channel doing hands-on work on vehicles with named products and tools in a repeating twice-weekly format, which is exactly what the brief asks for."
            }
          ]
        }
      },
      "inventory": [
        {
          "item": "YouTube channel",
          "state": "present",
          "surfacesChecked": 13,
          "note": "found it — youtube.com/@pantheorganizer",
          "observedAt": "2026-08-11",
          "source": "youtube_channel"
        },
        {
          "item": "Newsletter",
          "state": "verified_absent",
          "surfacesChecked": 76,
          "note": "not there · we looked in 5 places",
          "observedAt": "2026-08-11",
          "source": "newsletter"
        },
        {
          "item": "Store",
          "state": "verified_absent",
          "surfacesChecked": 52,
          "note": "not there · we looked in 3 places · 2 wouldn't answer",
          "observedAt": "2026-08-11",
          "source": "store"
        },
        {
          "item": "Membership",
          "state": "verified_absent",
          "surfacesChecked": 33,
          "note": "not there · we looked in 2 places",
          "observedAt": "2026-08-11",
          "source": "membership"
        },
        {
          "item": "Podcast",
          "state": "verified_absent",
          "surfacesChecked": 13,
          "note": "not there · we looked in 1 place",
          "observedAt": "2026-08-11",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "present",
          "surfacesChecked": 13,
          "note": "found it — pantheorganizer.com",
          "observedAt": "2026-08-11",
          "source": "website"
        },
        {
          "item": "Representation",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "their bio does not mention it, which is not the same as nobody having signed them",
          "observedAt": "2026-08-11",
          "source": "representation"
        },
        {
          "item": "Sponsored posts",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
          "observedAt": "2026-08-11",
          "source": "sponsorships"
        },
        {
          "item": "Affiliate links",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
          "observedAt": "2026-08-11",
          "source": "affiliate_links"
        },
        {
          "item": "Platform subscriptions",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
          "observedAt": "2026-08-11",
          "source": "platform_subscriptions"
        },
        {
          "item": "Shopping tags",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
          "observedAt": "2026-08-11",
          "source": "shopping_tags"
        }
      ],
      "evidence": [
        {
          "kind": "comment",
          "quote": "I have purchased many products from DIY and CLEAN, and love both.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Just started using this product and love it!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I'll try this",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I'm still hooked on Quickbeads.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I use the Diy wax , I can say it really does fill.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've used the Turtle wax graphene ceramic paste wax many times. I love it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have used the turtle wax ceramic plus graphene for a couple years now, very impressed how it compared to the others.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been trying different waxes for my summer car.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I had that exact Turtle Wax on my shelf for many years",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I bought it brand new when they made an unlimited edition for almost 50 bucks.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Lol I've BEEN using Envie glass sealant on my glass shower doors already 😂",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Been using this as topper over my windshields coating. Works great",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have purchased many products from DIY and CLEAN, and love both.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Just started using this product and love it!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Can't wait to try it out 🔥",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been using Aquapel. It used to be used by law enforcement on their vehicles. I'll try this",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have a 80series landcruiser i been looking for a great product.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I use the Diy wax , I can say it really does fill.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been looking for wax to apply over my coating as I enjoy the experience of waxing and you have given me a few options to consider.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Love me some DIYDetail products, I'm still hooked on Quickbeads. My favorite so far, you have to pry it from my dead cold beaded hands. However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-11",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-06",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-06",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-06",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-07",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-07",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-07",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-07",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-07",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-10",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-10",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-10",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-11",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-11",
          "engine": "rule",
          "label": "abandonment"
        }
      ],
      "status": "in_drop",
      "resurfaced": null,
      "passed": null,
      "promoted": null,
      "outcome": null,
      "asOf": "2026-08-11",
      "alert": null,
      "samples": [
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "Meet & Greet with my viewers on August 22 @TOC Supplies in Ontario!  🇨🇦",
          "url": "https://www.youtube.com/watch?v=gVv9JhsJscg",
          "at": "2026-08-10T13:00:15Z",
          "thumbnail": "https://i.ytimg.com/vi/gVv9JhsJscg/hqdefault.jpg",
          "excerpt": null,
          "metric": 1484,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-11T19:02:29.384Z",
          "status": null
        },
        {
          "platform": "Their site",
          "publication": "Pan The Organizer",
          "kind": "writing",
          "title": "DIY Detail Envie Glass Sealant Tested! Does It Beat Ceramic Detail Spray?",
          "url": "https://pantheorganizer.com/diy-detail-envie-glass-sealant-tested-does-it-beat-ceramic-detail-spray/",
          "at": "2026-08-05T13:00:01.000Z",
          "thumbnail": null,
          "excerpt": "Today, we’re testing the brand-new DIY Detail Envie Glass Sealant and answering one important question: Why would you use a dedicated glass sealant when the Envie Ceramic Detail Spray already works on glass?\n Joined by special guest Yvan Lacroix from @diydetailofficial , we explore the technology be",
          "metric": null,
          "metricUnit": null,
          "metricWhy": "a feed carries no read or listen count",
          "foundIn": "their site",
          "seenAt": "2026-08-11T19:02:35.527Z",
          "status": null
        },
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "Car Wash Shampoo Explained: Everything You Need to Know",
          "url": "https://www.youtube.com/watch?v=A8oiNnKCeQ8",
          "at": "2026-08-08T13:00:31Z",
          "thumbnail": "https://i.ytimg.com/vi/A8oiNnKCeQ8/hqdefault.jpg",
          "excerpt": null,
          "metric": 6618,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-11T19:02:29.385Z",
          "status": null
        },
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "Why Use a Glass Sealant If Ceramic Detail Spray Already Works?",
          "url": "https://www.youtube.com/watch?v=mtdkyRTbVaA",
          "at": "2026-08-05T13:00:01Z",
          "thumbnail": "https://i.ytimg.com/vi/mtdkyRTbVaA/hqdefault.jpg",
          "excerpt": null,
          "metric": 10139,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-11T19:02:29.385Z",
          "status": null
        }
      ],
      "samplesSearched": {
        "count": 3,
        "why": "3 pieces of their own work"
      },
      "headline": null,
      "headlineRestsOn": null,
      "accent": "#6E6E6E",
      "play": {
        "id": null,
        "label": "No play recommended",
        "why": "The play catalog (§5.5) is a product decision the engine does not make.",
        "generated": true
      },
      "outreach": {
        "subject": null,
        "opener": null,
        "bullets": [],
        "close": null,
        "generated": true,
        "why": "Generated on Promote (§6.5). Nothing generates it yet."
      },
      "generatedFields": [
        "accent",
        "play",
        "outreach"
      ],
      "source": "named",
      "sourceWhy": "a person typed this handle in"
    }
  };

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
