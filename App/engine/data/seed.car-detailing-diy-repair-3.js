/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief car-detailing-diy-repair-3` on 2026-08-14.
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
      "today": "2026-08-14",
      "backtestDate": null,
      "availableDates": [
        "2026-08-14"
      ],
      "scoreThreshold": 25,
      "costs": {
        "takenAt": "2026-08-14T15:05:25.363Z",
        "spent": 33.317,
        "studiedCreators": 238,
        "perCreator": 0.14,
        "fetches": 80402,
        "calls": 8757,
        "refused": 2365,
        "byPass": [
          {
            "depth": "sweep",
            "fetches": 15580,
            "calls": 0,
            "cost": 0
          },
          {
            "depth": "probe",
            "fetches": 64259,
            "calls": 0,
            "cost": 0
          },
          {
            "depth": "study",
            "fetches": 61,
            "calls": 8757,
            "cost": 33.317
          }
        ],
        "byCall": [
          {
            "label": "judge_fit",
            "calls": 1430,
            "cost": 14.0914,
            "perCall": 0.0099,
            "refused": 47,
            "avgIn": 858,
            "avgOut": 223
          },
          {
            "label": "classify_demand",
            "calls": 1431,
            "cost": 7.1205,
            "perCall": 0.005,
            "refused": 84,
            "avgIn": 4092,
            "avgOut": 177
          },
          {
            "label": "propose_candidates",
            "calls": 2254,
            "cost": 5.1521,
            "perCall": 0.0023,
            "refused": 2059,
            "avgIn": 53,
            "avgOut": 81
          },
          {
            "label": "propose_places",
            "calls": 1967,
            "cost": 3.9372,
            "perCall": 0.002,
            "refused": 86,
            "avgIn": 483,
            "avgOut": 304
          },
          {
            "label": "write_headline",
            "calls": 245,
            "cost": 2.4179,
            "perCall": 0.0099,
            "refused": 10,
            "avgIn": 723,
            "avgOut": 250
          },
          {
            "label": "classify_strain",
            "calls": 1430,
            "cost": 0.5978,
            "perCall": 0.0004,
            "refused": 79,
            "avgIn": 380,
            "avgOut": 8
          }
        ]
      },
      "lastRun": {
        "started": "2026-08-14T13:02:37.325Z",
        "finished": "2026-08-14T13:03:57.912Z",
        "creators": 12,
        "minutes": 1.3431,
        "checks": 478,
        "calls": 52,
        "cost": 0.2897,
        "next": "06:00"
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
      "generatedAt": "2026-08-14T15:05:25.373Z",
      "brief": {
        "slug": "car-detailing-diy-repair-3",
        "text": "Car detailing, DIY repair and restoration — creators who work on a machine on camera, name the specific part or product they are using, and repeat the format every video."
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
        "id": "m_car_detailing_diy_repair_3",
        "name": "car-detailing-diy-repair-3",
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
        "description": "Car detailing, DIY repair and restoration — creators who work on a machine on camera, name the specific part or product they are using, and repeat the format every video."
      }
    ],
    "candidates": [
      {
        "id": "c_car_detailing_diy_repair_3__pantheorganizer",
        "name": "pantheorganizer",
        "handle": "@pantheorganizer",
        "initials": "PA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@pantheorganizer",
            "followers": 43300,
            "url": "https://www.tiktok.com/@pantheorganizer",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/69c8a1fa80ba728dc3fb140a292c2148~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e278149d&x-expires=1786885200&x-signature=IHBbYOku5ZGYQiA4aTe5Q5ci4MA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@pantheorganizer",
            "followers": 1120000,
            "url": "https://www.youtube.com/@pantheorganizer",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@pantheorganizer",
            "host": "tiktok.com",
            "followers": 43300
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@pantheorganizer",
            "host": "youtube.com",
            "followers": 1120000
          },
          {
            "name": "Website",
            "url": "https://pantheorganizer.com/",
            "host": "pantheorganizer.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 1120000
        },
        "score": 44,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 32,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter, no membership",
                "weightPct": 75,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "144 purchase-intent comments",
                "weightPct": 25,
                "detail": "144 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "detail": "15 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
                "value": "−6% vs baseline",
                "weightPct": 0,
                "detail": "11 videos a month now, against 12 before that — down 6%; the recent ones are getting 18% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "This is a dedicated car detailing channel doing hands-on tutorials, product reviews and step-by-step guides on a consistent twice-weekly schedule, which is exactly the on-camera, product-named, repeatable format the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 29,
            "note": "found it — youtube.com/@pantheorganizer",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 178,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 137,
            "note": "not there · we looked in 6 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 81,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 32,
            "note": "something at creators.spotify.com/pod/show/pantheorganizer — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 32,
            "note": "found it — pantheorganizer.com",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I have purchased many products from DIY and CLEAN, and love both.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Just started using this product and love it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'll try this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I'm still hooked on Quickbeads.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I use the Diy wax , I can say it really does fill.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've used the Turtle wax graphene ceramic paste wax many times. I love it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have used the turtle wax ceramic plus graphene for a couple years now, very impressed how it compared to the others.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been trying different waxes for my summer car.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I had that exact Turtle Wax on my shelf for many years",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I bought it brand new when they made an unlimited edition for almost 50 bucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Lol I've BEEN using Envie glass sealant on my glass shower doors already 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Been using this as topper over my windshields coating. Works great",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have purchased many products from DIY and CLEAN, and love both.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Just started using this product and love it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Can't wait to try it out 🔥",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been using Aquapel. It used to be used by law enforcement on their vehicles. I'll try this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have a 80series landcruiser i been looking for a great product.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I use the Diy wax , I can say it really does fill.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been looking for wax to apply over my coating as I enjoy the experience of waxing and you have given me a few options to consider.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Love me some DIYDetail products, I'm still hooked on Quickbeads. My favorite so far, you have to pry it from my dead cold beaded hands. However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I did purchase the window cleaner (Glaco), but haven't used it ye",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I did a paint correction and put the 8 year coating on it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I would like to know whether my Clean by Pan 8‑year coating, applied to my vehicle about a year ago and stored immediately afterward in my freezer, can still be used on my new summer car.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Have a whole gallon love it !!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Can't wait to try it out 🔥",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I did purchase the window cleaner (Glaco), but haven't used it ye",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I did a paint correction and put the 8 year coating on it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Hello Pan, Thank you for your videos — they truly help us better understand the entire world of detailing. I would like to know whether my Clean by Pan 8‑year coating, applied to my vehicle about a year ago and stored immediately afterward in my freezer, can still be used on my new summer car.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Have a whole gallon love it !!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Have a whole gallon love it !!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Finally, a C8 Corvette! Thanks, Pan, for making this happen. Nice to see your approach on this vehicle so I can learn some tricks taking care of mine... Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I just bought a new to me 2014 e350 coupe. I did a paint correction and put the 8 year coating on it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Have a whole gallon love it !!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I did a paint correction and put the 8 year coating on it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I would like to know whether my Clean by Pan 8‑year coating, applied to my vehicle about a year ago and stored immediately afterward in my freezer, can still be used on my new summer car.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Have a whole gallon love it !!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Can't wait to try it out 🔥",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Finally, a C8 Corvette! Thanks, Pan, for making this happen. Nice to see your approach on this vehicle so I can learn some tricks taking care of mine... Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I just bought a new to me 2014 e350 coupe. I did a paint correction and put the 8 year coating on it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I like your videos and find them very helpful. I use your products almost exclusively.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Hi pan, I'm currently half way through my V1 bottle and love the slickness, foam and scent. Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Have a whole gallon love it !!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But Glaco is VERY difficult to beat when it comes to glass. I get its a maintenance product for when you wash. But as many times as i wash, i rarely need anything for glass for 9-12 months with a Glaco application.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Have a whole gallon love it !!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "membership"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I just bought a new to me 2014 e350 coupe. I did a paint correction and put the 8 year coating on it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Have a whole gallon love it !!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I'll try this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Thanks for the discount as always.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Finally, a C8 Corvette! Thanks, Pan, for making this happen. Nice to see your approach on this vehicle so I can learn some tricks taking care of mine... Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I just bought a new to me 2014 e350 coupe. I did a paint correction and put the 8 year coating on it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My 128 oz one is arriving today😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "membership"
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
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/pantheorganizer",
            "platform": "link they publish",
            "url": "https://linktr.ee/pantheorganizer",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "20% OFF CLEAN By Pan! 🔥 USA Only",
            "url": "https://www.youtube.com/watch?v=08Lp-xgJ_YQ",
            "at": "2026-08-13T14:32:11Z",
            "thumbnail": "https://i.ytimg.com/vi/08Lp-xgJ_YQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 2401,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:16.154Z",
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
            "title": "The Secret to Making White Paint Pop | New Corvette Detail",
            "url": "https://www.youtube.com/watch?v=ox6t41RPNHo",
            "at": "2026-08-12T13:00:39Z",
            "thumbnail": "https://i.ytimg.com/vi/ox6t41RPNHo/hqdefault.jpg",
            "excerpt": null,
            "metric": 9892,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:16.155Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Meet & Greet with my viewers on August 22 @TOC Supplies in Ontario!  🇨🇦",
            "url": "https://www.youtube.com/watch?v=gVv9JhsJscg",
            "at": "2026-08-10T13:00:15Z",
            "thumbnail": "https://i.ytimg.com/vi/gVv9JhsJscg/hqdefault.jpg",
            "excerpt": null,
            "metric": 2140,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:16.155Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "pantheorganizer makes car detailing product tests and explainers for 1,120,000 YouTube subscribers and hosts in-person meet and greets, but sells nothing directly: no store, no membership, no newsletter.",
        "headlineRestsOn": "audience: 43,300 on TikTok, 1,120,000 on YouTube · they have: YouTube channel, Podcast, Own website · they do not have: Newsletter, Store, Membership · \"Car Wash Shampoo Explained: Everything You Need to Know\" · \"DIY Detail Envie Glass Sealant Tested! Does It Beat Ceramic Detail Spray?\" · \"Meet & Greet with my viewers on August 22 @TOC Supplies in Ontario!  \ny}",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Detailing creator whose videos are methodical tutorials on one car care task at a time with the exact products named as he applies them.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__stauffergarage",
        "name": "stauffergarage",
        "handle": "@stauffergarage",
        "initials": "ST",
        "avatar": "https://yt3.googleusercontent.com/3VT5yN8iD2padsU3s05RWbcwOiy156Uv9KNJyo1gDoRe1dU3oOJUb5lnbx4S6lBK8JXvzPf2=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@stauffergarage",
            "followers": 165200,
            "url": "https://www.tiktok.com/@stauffergarage",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/58cf0169cd2bfb17e8cf13390232221c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=18dc9ad0&x-expires=1786885200&x-signature=wdlUsg5KH8POWb%2BY77taJR2fbX8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@stauffergarage",
            "followers": 1290000,
            "url": "https://www.youtube.com/@stauffergarage",
            "avatar": "https://yt3.googleusercontent.com/3VT5yN8iD2padsU3s05RWbcwOiy156Uv9KNJyo1gDoRe1dU3oOJUb5lnbx4S6lBK8JXvzPf2=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@stauffergarage",
            "host": "tiktok.com",
            "followers": 165200
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@stauffergarage",
            "host": "youtube.com",
            "followers": 1290000
          }
        ],
        "audience": {
          "total": 1290000
        },
        "score": 34,
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
            "score": 10,
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
                "value": "−69% vs baseline",
                "weightPct": 100,
                "detail": "2.7 videos a month now, against 8.7 before that — down 69%; the recent ones are getting 43% more views — 9.7 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's a dedicated disaster-detailing and car-flipping channel whose whole format is working on a car on camera, week after week — exactly the repeatable machine-work format the brief asks for, though the specific product call-outs aren't visible in the evidence here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — youtube.com/@stauffergarage",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 13,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 10,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I have more than one car detailing account i enjoy. I subscribed to yours, because you were not in the middle of a muddy yard, or driveway trying to detail something?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I subscribed to yours, because you were not in the middle of a muddy yard, or driveway trying to detail something?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "What I Discovered Will Blow Your Mind! I Bought The Nastiest And Cheapest Car On Facebook...",
            "url": "https://www.youtube.com/watch?v=Pm77E0XMO7k",
            "at": "2026-08-09T14:19:55Z",
            "thumbnail": "https://i.ytimg.com/vi/Pm77E0XMO7k/hqdefault.jpg",
            "excerpt": null,
            "metric": 10755,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:02:44.358Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Am I right or wrong? #audi #carshorts",
            "url": "https://www.youtube.com/watch?v=2S24XpdecQc",
            "at": "2026-07-26T19:37:44Z",
            "thumbnail": "https://i.ytimg.com/vi/2S24XpdecQc/hqdefault.jpg",
            "excerpt": null,
            "metric": 3130,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:02:44.358Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "How To Polish A Car For Beginners At Home || Remove Swirls and Scratches || Ceramic Coat",
            "url": "https://www.youtube.com/watch?v=WmXVBxWphbA",
            "at": "2026-06-30T12:00:18Z",
            "thumbnail": "https://i.ytimg.com/vi/WmXVBxWphbA/hqdefault.jpg",
            "excerpt": null,
            "metric": 12298,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:02:44.358Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Complete Disaster Full Interior Car Detailing Transformation! Dirtiest Car Detailing",
            "url": "https://www.youtube.com/watch?v=2isAAIxhcB4",
            "at": "2026-06-15T13:00:25Z",
            "thumbnail": "https://i.ytimg.com/vi/2isAAIxhcB4/hqdefault.jpg",
            "excerpt": null,
            "metric": 10914,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:02:44.358Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Stauffergarage makes car detailing and barn find restoration videos for 1,290,000 YouTube subscribers, and posts less often now at 2.7 videos a month against 8.7 before, though those recent videos pull 43% more views; there is no store, membership, newsletter, podcast, or own website behind the channel.",
        "headlineRestsOn": "1,290,000 on YouTube · YouTube channel · 2.7 videos a month now, against 8.7 before that · the recent ones are getting 43% more views · they do not have: Newsletter, Store, Membership, Podcast, Own website · \"26 Year Old Barn Find Car Detailing Restoration | Chevrolet Pickup Transformation\" · \"Complete Disaster Full Interior Car Detailing Transformation! Dirtiest Car Detailing\" · \"How To Polish A Car For Beginners At Home || Remove Swirls and Scratches || Ceramic Coat\"",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Does both DIY car repair and deep-clean detailing on camera with a consistent per-vehicle format and named products/parts.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__obsessedgarage",
        "name": "obsessedgarage",
        "handle": "@obsessedgarage",
        "initials": "OB",
        "avatar": "https://yt3.googleusercontent.com/og5YPynE3yrjr9sVkrHGM-wJPTPIVPWe9bLYxH51nxAcnqLjOCQo6mcE_cPSgorZJR9Dbk8K=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@obsessedgarage",
            "followers": 336,
            "url": "https://www.tiktok.com/@obsessedgarage",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7324192289143783430~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=0552a51c&x-expires=1786885200&x-signature=%2BWzUb7nTADRrq%2FR1KoNUcSjPcvY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@obsessedgarage",
            "followers": 696000,
            "url": "https://www.youtube.com/@obsessedgarage",
            "avatar": "https://yt3.googleusercontent.com/og5YPynE3yrjr9sVkrHGM-wJPTPIVPWe9bLYxH51nxAcnqLjOCQo6mcE_cPSgorZJR9Dbk8K=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@obsessedgarage",
            "host": "tiktok.com",
            "followers": 336
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@obsessedgarage",
            "host": "youtube.com",
            "followers": 696000
          }
        ],
        "audience": {
          "total": 696000
        },
        "score": 31,
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
                "value": "No store, no newsletter, no membership",
                "weightPct": 97,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "7 purchase-intent comments",
                "weightPct": 3,
                "detail": "7 lines classified as intent to buy or subscribe, in text the engine fetched first."
              }
            ]
          },
          "strain": {
            "score": 8,
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
                "value": "−63% vs baseline",
                "weightPct": 100,
                "detail": "5.3 videos a month now, against 15 before that — down 63% — 8.3 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Obsessed Garage is a car-and-garage channel built around detailing and ownership walkthroughs where specific products and parts are named on camera, which is exactly the brief, even though the scraped post titles are too thin to confirm the repeatable per-video format."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 23,
            "note": "found it — youtube.com/@obsessedgarage",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 51,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 35,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 27,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 12,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 11,
            "note": "something at obsessedgarage.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I wish I could have them build my custom garage.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I would PAY to follow Mike around all day helping him and reinforce my trade skills",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Mike, you need to start your own channel",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I would PAY to follow Mike around all day helping him and reinforce my trade skills - flat out GOAT!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Mike, you need to start your own channel",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I would PAY to follow Mike around all day helping him and reinforce my trade skills - flat out GOAT!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Mike, you need to start your own channel",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "From Bank Vault to Dream Headquarters | The New OGHQ",
            "url": "https://www.youtube.com/watch?v=qeUNFu5vUOQ",
            "at": "2026-08-09T16:00:03Z",
            "thumbnail": "https://i.ytimg.com/vi/qeUNFu5vUOQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 36359,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:13.130Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Mike upgrades Chris to an assistant but can he keep up? #garage #funny #assistant #build #tools",
            "url": "https://www.youtube.com/watch?v=vjkoi_KFd9w",
            "at": "2026-08-04T13:29:18Z",
            "thumbnail": "https://i.ytimg.com/vi/vjkoi_KFd9w/hqdefault.jpg",
            "excerpt": null,
            "metric": 3279,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:13.130Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "We Designed the Ultimate Garage for One of America’s Fastest-Growing Companies",
            "url": "https://www.youtube.com/watch?v=rMbwZ-EtgfU",
            "at": "2026-08-02T15:45:01Z",
            "thumbnail": "https://i.ytimg.com/vi/rMbwZ-EtgfU/hqdefault.jpg",
            "excerpt": null,
            "metric": 14130,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:13.130Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The $1,000,000 Supercar Garage Is Finally Complete... Final Reveal",
            "url": "https://www.youtube.com/watch?v=dalPv8oX0U8",
            "at": "2026-07-26T16:00:11Z",
            "thumbnail": "https://i.ytimg.com/vi/dalPv8oX0U8/hqdefault.jpg",
            "excerpt": null,
            "metric": 25477,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:13.130Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Obsessed Garage builds high-end garages and shop spaces for clients on video, with 696,000 YouTube subscribers and a website, but no newsletter, store, or membership to sell through, and posting has slowed to 5.3 videos a month from 15.",
        "headlineRestsOn": "696,000 on YouTube · YouTube channel, Own website · Newsletter, Store, Membership · 5.3 videos a month now, against 15 before that · \"The $1,000,000 Supercar Garage Is Finally Complete... Final Reveal\" · \"We Designed the Ultimate Garage for One of America\\\" Fastest-Growing Companies\" · \"From Bank Vault to Dream Headquarters | The New OGHQ\"",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Matt Moreman, a heavily cross-referenced figure in the car care world, whose videos center on detailing gear and specific product and equipment walkthroughs.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__mymechanics",
        "name": "mymechanics",
        "handle": "@mymechanics",
        "initials": "MY",
        "avatar": "https://yt3.googleusercontent.com/Aw7J1OVKIiaUJ_pO6u4MMmB5y3FMfSevbVMrw_lUEASfzgVqaP2glEDTeJ4hlOOPz941iaA9yw=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@mymechanics",
            "followers": 2,
            "url": "https://www.tiktok.com/@mymechanics",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7327802512349200390~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=84f07d6b&x-expires=1786885200&x-signature=lvRKZSGWcXLBNHmuLY0tDUtw8x8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@mymechanics",
            "followers": 3640000,
            "url": "https://www.youtube.com/@mymechanics",
            "avatar": "https://yt3.googleusercontent.com/Aw7J1OVKIiaUJ_pO6u4MMmB5y3FMfSevbVMrw_lUEASfzgVqaP2glEDTeJ4hlOOPz941iaA9yw=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@mymechanics",
            "host": "tiktok.com",
            "followers": 2
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@mymechanics",
            "host": "youtube.com",
            "followers": 3640000
          },
          {
            "name": "Website",
            "url": "https://www.mymechanics.com/personal/",
            "host": "mymechanics.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 3640000
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
                "value": "No newsletter, no store, no podcast",
                "weightPct": 74,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "106 purchase-intent comments",
                "weightPct": 26,
                "detail": "106 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "+1% vs baseline",
                "weightPct": 0,
                "detail": "1 posts a month, steady against 1 before that — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He restores metal machinery and tools on camera in a rigidly repeated, edited format, which is squarely what the brief asks for — the only gap is that his ASMR style is wordless, so he doesn't verbally name parts or products, though the work itself is shot part-by-part in close detail."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 18,
            "note": "found it — youtube.com/@mymechanics",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 97,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 60,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 17,
            "note": "something at patreon.com/mymechanics — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — mymechanics.com/personal",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Please never stop what you're doing.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm not ashamed to admit that I use your restoration videos as white noise to help me fall asleep, I have for years, even before I became a hydraulic mechanic.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "老哥還活著嗎?我在等你的影片更新",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I just watched the entire thing through in one sitting.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I joined the army in 1975. Only to be able to get the money together to buy one of these cars.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I have a 2012 Lexus ES350. Watching your restoration video, I would give anything to have you work on restoring the car to as pristine a condition as you have done with this.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Historians in 200 years are going to be very confused about why there is only one Datsun 240z left in existence.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Please never stop what you're doing.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I just wanted to say I don't care if it takes you 10 years to finish this car, I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "have been trying to get my husband into watching restoration videos with me, and your series on this car has been perfect. you were already my favorite restoration channel, and he loves cars, so now we both get excited when a new video comes out and we can enjoy it together (or separately for maximu",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Please never stop what you're doing.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm not ashamed to admit that I use your restoration videos as white noise to help me fall asleep, I have for years, even before I became a hydraulic mechanic.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I joined the army in 1975. Only to be able to get the money together to buy one of these cars.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I have a 2012 Lexus ES350. Watching your restoration video, I would give anything to have you work on restoring the car to as pristine a condition as you have done with this.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I cant wait for the engine build, trimming sharp edges of a piston, filing forging marks on conn rods, powder coated crankshaft",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I don't care if it takes you 10 years to finish this car, I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Please never stop what you're doing.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cant wait for it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I don't care if it takes you 10 years to finish this car, I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cant wait for it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I just watched the entire thing through in one sitting.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm looking forward to the rest.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When a new video comes out and we can enjoy it together",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Waiting to see that beauty on the road!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "老哥還活著嗎?我在等你的影片更新",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I think maybe just like everyone else we are wondering are you ok? Has this project just stopped",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cant wait for it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cannot wait for the upcoming videos",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Keep up the good work MM!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm looking forward to the rest.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cant wait for it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I don't care if it takes you 10 years to finish this car, I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When a new video comes out and we can enjoy it together",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm looking forward to the rest.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Tôi đã đợi quá lâu mong chờ đến phần động cơ , nội thất và chiếc xe lăn bánh",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cant wait for it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Just in case you're worried about how long this project is taking, on a Youtube project timeline. I just wanted to say I don't care if it takes you 10 years to finish this car, I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm looking forward to the rest.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Tôi đã đợi quá lâu mong chờ đến phần động cơ , nội thất và chiếc xe lăn bánh",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cant wait for it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I don't care if it takes you 10 years to finish this car, I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm looking forward to the rest.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cant wait for it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Just in case you're worried about how long this project is taking, on a Youtube project timeline. I just wanted to say I don't care if it takes you 10 years to finish this car, I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cannot wait for the upcoming videos",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Keep up the good work MM!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I think maybe just like everyone else we are wondering are you ok? Has this project just stopped 😢",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Tôi đã đợi quá lâu mong chờ đến phần động cơ , nội thất và chiếc xe lăn bánh",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Looking forward to the rest.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Cant wait for it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I don't care if it takes you 10 years to finish this car, I'll be here watching the videos and supporting the channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "老哥還活著嗎?我在等你的影片更新",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "Their site",
            "publication": "Mechanics Bank",
            "kind": "writing",
            "title": "Intern Insider",
            "url": "https://www.mymechanics.com/intern-insider-3/",
            "at": "2026-07-30T12:09:56.000Z",
            "thumbnail": null,
            "excerpt": "This summer, Carter Weaver joined Mechanics Bank as an intern, eager to gain hands-on experience with an organization he was already familiar with. Having previously banked with Mechanics, the opportunity to intern close to home while learning more about the financial industry made it an easy decisi",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:23:12.977Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The Datsun 240Z Restoration So Far - 2.5 Years in One Video (Part 1-8)",
            "url": "https://www.youtube.com/watch?v=24KolOaqA6Q",
            "at": "2025-12-21T09:12:34Z",
            "thumbnail": "https://i.ytimg.com/vi/24KolOaqA6Q/hqdefault.jpg",
            "excerpt": null,
            "metric": 2136401,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:03.465Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Mechanics Bank",
            "kind": "writing",
            "title": "Mechanics Bank Announces Promotion",
            "url": "https://www.mymechanics.com/mechanics-bank-announces-promotion-2/",
            "at": "2026-07-14T12:17:52.000Z",
            "thumbnail": null,
            "excerpt": "Mechanics Bank is pleased to announce the following promotion:\n \n Lindsay Alton has been promoted to Senior Vice President, Controller. Lindsay joined Mechanics in 2018 and served as a Senior Financial Analyst and Strategic Finance Manager prior to her current role. Lindsay has over 20 years of expe",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:23:12.977Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Mechanics Bank",
            "kind": "writing",
            "title": "Mechanics Bank Welcomes New Personnel",
            "url": "https://www.mymechanics.com/mechanics-bank-welcomes-new-personnel/",
            "at": "2026-06-26T19:03:07.000Z",
            "thumbnail": null,
            "excerpt": "Mechanics Bank is pleased to announce the addition of Brian Hinkle to the Mechanics team.\n \n Brian joined the Bank as a Business Development Officer and serves the Ashland market, where he has been a lifelong resident. Brian holds a Bachelor’s degree from Ashland University and has over 25 years of ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:23:12.977Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "mymechanics films long car and tool restorations for 3,640,000 YouTube subscribers, with recent videos between 1,866,872 and 3,745,255 views, and sells nothing beyond memberships and his own website, so there is no newsletter, store, or podcast yet.",
        "headlineRestsOn": "3,640,000 on YouTube · YouTube channel · Membership · Own website · Newsletter · Store · Podcast · \"Datsun 240 Restoration Part 7 - Rear End Perfection\" (1,866,872 views) · \"Datsun 240Z Restoration - Front Axle (Part 6)\" (3,745,255 views) · \"1917 Swiss Bead Roller Restoration - Making New Ones for a Masterpiece\" (1,886,329 views)",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Arthur Tussik, known for silent rust restoration of tools and machine parts, showing every component disassembled, cleaned and reassembled in the same repeating structure.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__mustie1",
        "name": "mustie1",
        "handle": "@mustie1",
        "initials": "MU",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lvexMnv3YQ3w6GC5tAJgH3rougPNODCB7BLMwTc99UWA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@mustie1",
            "followers": 52,
            "url": "https://www.tiktok.com/@mustie1",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/a8aae478e282005ad0f886032d8b03c0~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1ca78089&x-expires=1786885200&x-signature=Mh99Xr%2Baw8e5eP4QbOl3Hr0dpkA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@mustie1",
            "followers": 693000,
            "url": "https://www.youtube.com/@mustie1",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lvexMnv3YQ3w6GC5tAJgH3rougPNODCB7BLMwTc99UWA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@mustie1",
            "host": "tiktok.com",
            "followers": 52
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@mustie1",
            "host": "youtube.com",
            "followers": 693000
          }
        ],
        "audience": {
          "total": 693000
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
                "weightPct": 92,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "24 purchase-intent comments",
                "weightPct": 8,
                "detail": "24 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "−3% vs baseline",
                "weightPct": 0,
                "detail": "4.7 videos a month now, against 4.8 before that — down 3% — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Mustie1 is a long-running YouTube channel built entirely on filming hands-on revival of rusty engines and machines, which is exactly the on-camera repair-and-restoration format the brief asks for, and the repeatable 'will it run' style is his whole identity — the scraped post text is junk metadata and doesn't count against him."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — youtube.com/@mustie1",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 64,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 39,
            "note": "not there · we looked in 3 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 32,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 14,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 35,
            "note": "something at tiktok.com/@mustie1 — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "Yay for a follow-up, please!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Would love a follow on video!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "And, yes most def for the follow up 'maintenance' video please Mustie :)",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Looking forward to the servicing and rodent clean up. Cheers",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Love to see follow up videos on this one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Looking forward to seeing you doing a complete maintenace and cleanup on it. Cheers",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Looking forward to the maintenance video. Thank you",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Would like to see the follow up video with maintenance and eventually the snowblower.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Would love to see a follow up on this machine",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I would love to see the maintenance work on it!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Damn I want Part 3 now!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "We get a third part? Cool!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Visiting England and I still love watching your Sunday videos. Yes to a full service video with welding the hooks and strengthening the bucket.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "And, yes most def for the follow up 'maintenance' video please Mustie :)",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Would love a follow on video!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Looking forward to the servicing and rodent clean up. Cheers",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Love it! Those Kubotas are fantastic machines. Very reliable and capable. I have two. Love to see follow up videos on this one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Nice addition to your stable of machines! Looking forward to seeing you doing a complete maintenace and cleanup on it. Cheers",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Very interesting introduction to machine, would be very handy for home improvement and landscape work . Looking forward to the maintenance video. Thank you",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Enjoyed this video more than I expected. Would like to see the follow up video with maintenance and eventually the snowblower.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Yay for a follow-up, please!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Damn I want Part 3 now!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Hope to see more of next week",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "We get a third part? Cool!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Estate Sale Vintage Kubota Tractor & Goodies",
            "url": "https://www.youtube.com/watch?v=MMjAcRnbMkA",
            "at": "2026-08-09T11:00:03Z",
            "thumbnail": "https://i.ytimg.com/vi/MMjAcRnbMkA/hqdefault.jpg",
            "excerpt": null,
            "metric": 126884,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:21:47.762Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "RARE, John DeLorean built a high-speed go-kart Restoration pt2",
            "url": "https://www.youtube.com/watch?v=gGpPth5gB04",
            "at": "2026-08-02T11:00:34Z",
            "thumbnail": "https://i.ytimg.com/vi/gGpPth5gB04/hqdefault.jpg",
            "excerpt": null,
            "metric": 110247,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:21:47.762Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Carburetor Surgery on a Vintage DR Field and Brush Mower",
            "url": "https://www.youtube.com/watch?v=3mwLEQ_KRDg",
            "at": "2026-07-26T11:00:38Z",
            "thumbnail": "https://i.ytimg.com/vi/3mwLEQ_KRDg/hqdefault.jpg",
            "excerpt": null,
            "metric": 69397,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:21:47.762Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Ran When Parked They Said?? 1977 Kelmark GT Barn Find,",
            "url": "https://www.youtube.com/watch?v=Ie1z4DqPAc8",
            "at": "2026-07-19T11:00:08Z",
            "thumbnail": "https://i.ytimg.com/vi/Ie1z4DqPAc8/hqdefault.jpg",
            "excerpt": null,
            "metric": 134269,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:21:47.762Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Mustie1 restores old tractors, go-karts, and barn-find cars for 693,000 YouTube subscribers, with recent videos between 69,389 and 184,605 views and a steady 4.7 uploads a month, and he sells nothing of his own: no store, no membership, no newsletter, no website.",
        "headlineRestsOn": "693,000 on YouTube · YouTube channel · they do not have: Newsletter, Store, Membership, Own website · 4.7 videos a month now · \"Estate Sale Vintage Kubota Tractor & Goodies\" (126,812 views) · \"RARE, John DeLorean built a high-speed go-kart Rescue\" (184,605 views) · \"Carburetor Surgery on a Vintage DR Field and Brush Mower\" (69,389 views) · \"Ran When Parked They Said?? 1977 Kelmark GT Barn Find,\" (134,269 views)",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Restores neglected engines, small machines and vehicles on camera, methodically identifying each part as he diagnoses and repairs.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__thecarwizard",
        "name": "thecarwizard",
        "handle": "@thecarwizard",
        "initials": "TH",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/85365d3f5d4d2de5e203f270cd6a73f9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9c73d4dc&x-expires=1786885200&x-signature=DfIVaR3wzMi5Nw%2B0UsclOYLJVlY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@thecarwizard",
            "followers": 33,
            "url": "https://www.tiktok.com/@thecarwizard",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/85365d3f5d4d2de5e203f270cd6a73f9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9c73d4dc&x-expires=1786885200&x-signature=DfIVaR3wzMi5Nw%2B0UsclOYLJVlY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@thecarwizard",
            "host": "tiktok.com",
            "followers": 33
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-car-wizard/id1535822036?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Spotify",
            "url": "https://podcasters.spotify.com/pod/show/larry-perkins-sr/episodes/Obd2-el17b2",
            "host": "podcasters.spotify.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 33
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
                "value": "No newsletter, no store, no youtube channel",
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
                "detail": "we could not read their posting rate — only 3 dated posts came back — not enough to read a posting rate"
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
                "detail": "Nothing visible contradicts the brief — the handle points to car content — and the specific requirements (working on a machine on camera, naming parts and products, a repeated format) are simply unconfirmed because no actual post content or readable bio is available here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 12,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 16,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 11,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-car-wizard/id1535822036?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at thecarwizard.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "The Car Wizard",
            "kind": "episode",
            "title": "Obd2",
            "url": "https://podcasters.spotify.com/pod/show/larry-perkins-sr/episodes/Obd2-el17b2",
            "at": "2020-10-14T04:17:22.000Z",
            "thumbnail": null,
            "excerpt": "This episode was more or less for beginners that don't know much about computers how they run the engine and transmission and try to make emissions down as low as possible so it's just for beginners they'll be more high tech stuff in my future episodes and more in depth",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:03:24.499Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Car Wizard",
            "kind": "episode",
            "title": "The Car Wizard (Trailer)",
            "url": "https://podcasters.spotify.com/pod/show/larry-perkins-sr/episodes/ep-el18cg",
            "at": "2020-10-14T01:22:58.000Z",
            "thumbnail": null,
            "excerpt": null,
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:03:24.499Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Car Wizard",
            "kind": "episode",
            "title": "Automotive repair",
            "url": "https://podcasters.spotify.com/pod/show/larry-perkins-sr/episodes/Automotive-repair-el15oa",
            "at": "2020-10-14T00:21:03.000Z",
            "thumbnail": null,
            "excerpt": "I like to discuss my experience which is over 30 years in the professional Automotive repair business companies like Midas Car-X dealerships I could name a few but Ford and Chevy I'm just going to go into all cars makes models trucks because I have worked at a few different places besides dealership",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:03:24.499Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "thecarwizard posts car repair and OBD2 diagnostic clips to 33 followers on TikTok and already runs a podcast and his own website, with no YouTube channel, newsletter, store, or membership yet.",
        "headlineRestsOn": "audience: 33 on TikTok · Podcast · Own website · YouTube channel · Newsletter · Store · Membership · \"Obd2\" · \"Automotive repair\"",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Shop-based mechanic who tears into a specific car each video, names the failed component and the replacement part.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__thedetailgeek",
        "name": "thedetailgeek",
        "handle": "@thedetailgeek",
        "initials": "TH",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nh3BpO_PmKIExTQ9jmJWnD5b2TEqowJ8lRMqu2S9vbcQk=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@thedetailgeek",
            "followers": 177800,
            "url": "https://www.tiktok.com/@thedetailgeek",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/938da8ca29041f696d767b6e440090aa~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6be62894&x-expires=1786885200&x-signature=eXOeIBfAXHwblr39EU56wvyWbrA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@thedetailgeek",
            "followers": 3970000,
            "url": "https://www.youtube.com/@thedetailgeek",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nh3BpO_PmKIExTQ9jmJWnD5b2TEqowJ8lRMqu2S9vbcQk=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@thedetailgeek",
            "host": "tiktok.com",
            "followers": 177800
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@thedetailgeek",
            "host": "youtube.com",
            "followers": 3970000
          }
        ],
        "audience": {
          "total": 3970000
        },
        "score": 15,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 15,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no membership, no podcast",
                "weightPct": 90,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "19 purchase-intent comments",
                "weightPct": 10,
                "detail": "19 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "+0% vs baseline",
                "weightPct": 0,
                "detail": "34 videos a month now, against 34 before that — down 0% — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's a dedicated car detailing channel doing hands-on transformations of filthy vehicles on camera in a repeatable format, and he points viewers to the products he uses, which is exactly what the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 16,
            "note": "found it — youtube.com/@thedetailgeek",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 101,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 64,
            "note": "something at detailgeekautocare.com/shop — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 46,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 27,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 39,
            "note": "found it — tiktok.com/@thedetailgeek",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats! 😮",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats! 😮",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats! 😮",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats! 😮",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "At this point I would buy new mats!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "You Won't BELIEVE What Was Inside This Car!!",
            "url": "https://www.youtube.com/watch?v=xcB6b1EttVM",
            "at": "2026-08-14T13:00:33Z",
            "thumbnail": "https://i.ytimg.com/vi/xcB6b1EttVM/hqdefault.jpg",
            "excerpt": null,
            "metric": 1003,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:20:49.110Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The Dirt Didn't Stand a Chance...",
            "url": "https://www.youtube.com/watch?v=D5Ohu6wqL5M",
            "at": "2026-08-13T19:00:07Z",
            "thumbnail": "https://i.ytimg.com/vi/D5Ohu6wqL5M/hqdefault.jpg",
            "excerpt": null,
            "metric": 4743,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:20:49.110Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The Right Way to Clean a Dirty Headliner!",
            "url": "https://www.youtube.com/watch?v=-tO-C-PQH3g",
            "at": "2026-08-12T19:00:37Z",
            "thumbnail": "https://i.ytimg.com/vi/-tO-C-PQH3g/hqdefault.jpg",
            "excerpt": null,
            "metric": 5179,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:20:49.110Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "You Won’t Believe What Came Out of This Floor Mat!",
            "url": "https://www.youtube.com/watch?v=tsP9dBKfvOE",
            "at": "2026-08-11T19:00:33Z",
            "thumbnail": "https://i.ytimg.com/vi/tsP9dBKfvOE/hqdefault.jpg",
            "excerpt": null,
            "metric": 30130,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:20:49.111Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "thedetailgeek posts 34 car detailing videos a month to 3,970,000 YouTube subscribers and sells through a store and his own site, but has no newsletter, membership, or podcast to reach that audience directly.",
        "headlineRestsOn": "3,970,000 on YouTube · 34 videos a month now · YouTube channel · Store · Own website · Newsletter · Membership · Podcast · \"The Right Way to Clean a Dirty Headliner!\" (5,151 views) · \"You Won\\u2019t Believe What Came Out of This Floor Mat!\" (30,029 views)",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Canadian detailer whose entire channel is one repeated format: a filthy car, an on-camera clean, with the chemicals and tools named as he goes.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__ammonyc",
        "name": "ammonyc",
        "handle": "@ammonyc",
        "initials": "AM",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/2c33cf97550ff0fdbfdeeef7621206b5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c480f490&x-expires=1786885200&x-signature=dYP%2F%2BqztgN9SqW3eIFcFCjhzp%2B8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@ammonyc",
            "followers": 48,
            "url": "https://www.tiktok.com/@ammonyc",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/2c33cf97550ff0fdbfdeeef7621206b5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c480f490&x-expires=1786885200&x-signature=dYP%2F%2BqztgN9SqW3eIFcFCjhzp%2B8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@ammonyc",
            "host": "tiktok.com",
            "followers": 48
          }
        ],
        "audience": {
          "total": 48
        },
        "score": 14,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 14,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no youtube channel, no membership",
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
                "detail": "AMMO NYC is a car detailing creator whose whole format is hands-on-the-car work with the specific products and parts named on camera, which is exactly what the brief asks for, even though the profile text here is thin."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 132,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 197,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 116,
            "note": "something at ammonyc.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 94,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 49,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at ammonyc.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "ammonyc runs a podcast, a store, and their own website, but with 48 followers on TikTok and no newsletter or membership, they sell without an owned list to sell to.",
        "headlineRestsOn": "audience: 48 on TikTok · they have: Store, Podcast, Own website · they do not have: Newsletter, Membership",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Larry Kosilla, one of the most widely written-about detailers; his videos are step-by-step paint correction and wash work with each chemical and pad named on camera.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__vicegripgarage",
        "name": "vicegripgarage",
        "handle": "@vicegripgarage",
        "initials": "VI",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kNdUfX7a2qE6rx4eek6J3vDjvIk-gc1QJ1unjI0c3H90o=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@vicegripgarage",
            "followers": 121,
            "url": "https://www.tiktok.com/@vicegripgarage",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7344196142911422507~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ec316e24&x-expires=1786885200&x-signature=58SpKYBLdCn8uUGPi5DQgqZQsL0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@vicegripgarage",
            "followers": 2560000,
            "url": "https://www.youtube.com/@vicegripgarage",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kNdUfX7a2qE6rx4eek6J3vDjvIk-gc1QJ1unjI0c3H90o=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@vicegripgarage",
            "host": "tiktok.com",
            "followers": 121
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@vicegripgarage",
            "host": "youtube.com",
            "followers": 2560000
          }
        ],
        "audience": {
          "total": 2560000
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
                "weightPct": 94,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "11 purchase-intent comments",
                "weightPct": 6,
                "detail": "11 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "−17% vs baseline",
                "weightPct": 0,
                "detail": "4.3 videos a month now, against 5.2 before that — down 17%; the recent ones are getting 25% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Vice Grip Garage is a rescue-and-revive show where he works hands-on on classic cars, tractors and bikes on camera with a repeated \"Run and Drive\" format, which is exactly the DIY repair and restoration lane the brief asks for; whether he names specific parts and products in every video isn't confirmable from this evidence but is standard to the format."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 30,
            "note": "found it — youtube.com/@vicegripgarage",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 171,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 86,
            "note": "something at vicegripgarage.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 98,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 53,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 41,
            "note": "something at vicegripgarage.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "1st week on the air at a new radio station and today in the 5 o'clock hour when the most people are listening while they are driving home I said \"I can't wait to go home and watch part 2 of last weeks Vice Grip Garage video on their You Tube channel. If you are in to cars and car revivals VGG is you",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I said \"I can't wait to go home and watch part 2 of last weeks Vice Grip Garage video on their You Tube channel.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "1st week on the air at a new radio station and today in the 5 o'clock hour when the most people are listening while they are driving home I said \"I can't wait to go home and watch part 2 of last weeks Vice Grip Garage video on their You Tube channel. If you are in to cars and car revivals VGG is you",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "1st week on the air at a new radio station and today in the 5 o'clock hour when the most people are listening while they are driving home I said \"I can't wait to go home and watch part 2 of last weeks Vice Grip Garage video on their You Tube channel. If you are in to cars and car revivals VGG is you",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Fix up the LUV! Would be a great video series! Love VGG. Thank you Derek and family!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "You guys offroading an old rig to see cool stuff getting in family time is everything thing to me. Seriously if you and the boys start going to see cool outdoor stuff and trail riding in old beaters I'd watch the hell out of that.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "1st week on the air at a new radio station and today in the 5 o'clock hour when the most people are listening while they are driving home I said \"I can't wait to go home and watch part 2 of last weeks Vice Grip Garage video on their You Tube channel. If you are in to cars and car revivals VGG is you",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Fix up the LUV! Would be a great video series! Love VGG. Thank you Derek and family!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "You guys offroading an old rig to see cool stuff getting in family time is everything thing to me. Seriously if you and the boys start going to see cool outdoor stuff and trail riding in old beaters I'd watch the hell out of that.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "1st week on the air at a new radio station and today in the 5 o'clock hour when the most people are listening while they are driving home I said \"I can't wait to go home and watch part 2 of last weeks Vice Grip Garage video on their You Tube channel. If you are in to cars and car revivals VGG is you",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "1st week on the air at a new radio station and today in the 5 o'clock hour when the most people are listening while they are driving home I said \"I can't wait to go home and watch part 2 of last weeks Vice Grip Garage video on their You Tube channel. If you are in to cars and car revivals VGG is you",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "1,800 Miles Home - Will This Cobbled Together Truck SURVIVE after being PARKED 15 YEARS?",
            "url": "https://www.youtube.com/watch?v=F9S4G5Vguic",
            "at": "2026-08-07T22:29:13Z",
            "thumbnail": "https://i.ytimg.com/vi/F9S4G5Vguic/hqdefault.jpg",
            "excerpt": null,
            "metric": 958275,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:38.181Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "BUICK Powered Chevy Luv ABANDONED FOR 15 YEARS! Will It RUN AND DRIVE 1,800 Miles Home?",
            "url": "https://www.youtube.com/watch?v=WLOC91qe3gc",
            "at": "2026-07-31T22:30:20Z",
            "thumbnail": "https://i.ytimg.com/vi/WLOC91qe3gc/hqdefault.jpg",
            "excerpt": null,
            "metric": 1725447,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:38.181Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "From DEAD to DRIVING: The Forgotten Ford Galaxies Final Day",
            "url": "https://www.youtube.com/watch?v=GzMY3VIqZhU",
            "at": "2026-07-28T14:21:18Z",
            "thumbnail": "https://i.ytimg.com/vi/GzMY3VIqZhU/hqdefault.jpg",
            "excerpt": null,
            "metric": 371303,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:38.181Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Bearings, Brakes, and Hammer Beatings - LIVE Ford Galaxy REVIVAL Continues!",
            "url": "https://www.youtube.com/watch?v=oLtaBovR4lE",
            "at": "2026-07-24T22:30:15Z",
            "thumbnail": "https://i.ytimg.com/vi/oLtaBovR4lE/hqdefault.jpg",
            "excerpt": null,
            "metric": 414463,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:38.181Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Vice Grip Garage revives long-parked trucks and cars for 2,560,000 YouTube subscribers, with recent videos pulling from 371,288 to 1,724,729 views, and sells through a store and own website, but has no newsletter, membership, or podcast to reach viewers directly, and posting has slipped to 4.3 videos a month from 5.2 with views down 25%.",
        "headlineRestsOn": "2,560,000 on YouTube · YouTube channel · Store · Own website · Newsletter · Membership · Podcast · 4.3 videos a month now, against 5.2 before that · the recent ones are getting 25% fewer views · \"BUICK Powered Chevy Luv ABANDONED FOR 15 YEARS! Will It RUN AND DRIVE 1,800 Miles Home?\" (1,724,729 views) · \"From DEAD to DRIVING: The Forgotten Ford Galaxies Final Day\" (371,288 views) · \"1,800 Miles Home - Will This Cobbled Together Truck SURVIVE after being PARKED 15 YEARS?\" (957,984 views)",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Derek Bieri, well covered in car media, revives dead vehicles on camera and narrates the exact parts and fixes needed to get each one running.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__rainmanraysrepairs",
        "name": "rainmanraysrepairs",
        "handle": "@rainmanraysrepairs",
        "initials": "RA",
        "avatar": "https://yt3.googleusercontent.com/tsCt7BkwylvY-89YDh-UFiNAiQnVoQdBPeBifkNedWCf3eC_AlaJl7SpdB1SFub6JzgscS8W_w=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@rainmanraysrepairs",
            "followers": null,
            "url": "https://www.tiktok.com/@rainmanraysrepairs",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/ce4f6ff108c28357adf54e3ded711bb3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=bf492c10&x-expires=1786885200&x-signature=gCMju1OJ6racopgVoFUs8mvXFq8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@rainmanraysrepairs",
            "followers": 666000,
            "url": "https://www.youtube.com/@rainmanraysrepairs",
            "avatar": "https://yt3.googleusercontent.com/tsCt7BkwylvY-89YDh-UFiNAiQnVoQdBPeBifkNedWCf3eC_AlaJl7SpdB1SFub6JzgscS8W_w=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@rainmanraysrepairs",
            "host": "tiktok.com",
            "followers": null
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@rainmanraysrepairs",
            "host": "youtube.com",
            "followers": 666000
          },
          {
            "name": "Store",
            "url": "https://rainmanauto.com/shop",
            "host": "rainmanauto.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 666000
        },
        "score": 12,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 12,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no podcast",
                "weightPct": 92,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "12 purchase-intent comments",
                "weightPct": 8,
                "detail": "12 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "detail": "14 videos a month now, against 19 before that — down 24% — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's a 20-year career auto and truck technician who films actual repairs and diagnostics on vehicles daily, which is exactly the hands-on, machine-on-camera repair format the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@rainmanraysrepairs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 62,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 40,
            "note": "found it — rainmanauto.com/shop · that page links back to their YouTube",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 12,
            "note": "something at patreon.com/RainmanRaysRepairs — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 16,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — rainmanauto.com · that page links back to their YouTube",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "Ray when will we see you fixing Laurens Tahoe. cant wait to see it. im addicted tp your channel 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Hey Ray, you need at least one more subscriber! Your at 666,000😳",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Hey Ray, you need at least one more subscriber! Your at 666,000😳",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Ray when will we see you fixing Laurens Tahoe. cant wait to see it. im addicted tp your channel 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Hey Ray, you need at least one more subscriber! Your at 666,000😳",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "can't wait for part 3 LOL",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Hey Ray, you need at least one more subscriber! Your at 666,000😳",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Ray when will we see you fixing Laurens Tahoe. cant wait to see it. im addicted tp your channel 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "You should up sell this guy a banks rear cover",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "needs a Banks rear diff cover for heat control they do work!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ray when will we see you fixing Laurens Tahoe. cant wait to see it. im addicted tp your channel 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Hey Ray, you need at least one more subscriber! Your at 666,000😳",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Frustrating Diagnosis! HUGE Repair NEEDED! 2022 Silverado/Sierra 3500 6.6 Duramax",
            "url": "https://www.youtube.com/watch?v=uwQ1CuzLnEk",
            "at": "2026-08-13T13:01:18Z",
            "thumbnail": "https://i.ytimg.com/vi/uwQ1CuzLnEk/hqdefault.jpg",
            "excerpt": null,
            "metric": 103109,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:02.563Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "UPSELL Time! Cadillac Dealer Shenanigans! 2021 Escalade 6.2",
            "url": "https://www.youtube.com/watch?v=C-8FzchVuYg",
            "at": "2026-08-11T14:05:03Z",
            "thumbnail": "https://i.ytimg.com/vi/C-8FzchVuYg/hqdefault.jpg",
            "excerpt": null,
            "metric": 139293,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:02.564Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Chevy Orange 6.2 LS Engine Crankshaft & Bearings #mechanic",
            "url": "https://www.youtube.com/watch?v=AUxhrLXTfns",
            "at": "2026-08-10T21:49:24Z",
            "thumbnail": "https://i.ytimg.com/vi/AUxhrLXTfns/hqdefault.jpg",
            "excerpt": null,
            "metric": 32689,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:02.564Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Can’t we just Swap Fuel Injectors! NO! #autorepair #mechanic",
            "url": "https://www.youtube.com/watch?v=2p0S4ENXoe8",
            "at": "2026-08-09T18:02:11Z",
            "thumbnail": "https://i.ytimg.com/vi/2p0S4ENXoe8/hqdefault.jpg",
            "excerpt": null,
            "metric": 121958,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:23:02.564Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Rainmanraysrepairs films real auto repair jobs for 666,000 YouTube subscribers and already sells through a store, a membership, and his own site, but he has no newsletter or podcast, so there is no channel he owns to reach those viewers directly even as posting slipped to 14 videos a month from 19.",
        "headlineRestsOn": "666,000 on YouTube · YouTube channel, Store, Membership, Own website · Newsletter, Podcast · 14 videos a month now, against 19 before that · \"Frustrating Diagnosis! HUGE Repair NEEDED! 2022 Silverado/Sierra 3500 6.6 Duramax\" · \"Leak Down Test, Pressure Test, Chemical Test! - Bubbles In Cooling System!  Buick Enclave 3.6\"",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Working dealership/independent tech who posts daily repair jobs in the same POV format, narrating the specific part numbers and tools used.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__chrisfix",
        "name": "chrisfix",
        "handle": "@chrisfix",
        "initials": "CH",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lsMlPXxQcSMI_EveG6eb7sd1T9vFkEQrXKruSjabO_ANY=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@chrisfix",
            "followers": 207,
            "url": "https://www.tiktok.com/@chrisfix",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/733e7aea16fdf6566887cdd72665fd4a~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8fb98118&x-expires=1786885200&x-signature=7XurM3duFb73pipHerJUHOhkGmA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@chrisfix",
            "followers": 11200000,
            "url": "https://www.youtube.com/@chrisfix",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lsMlPXxQcSMI_EveG6eb7sd1T9vFkEQrXKruSjabO_ANY=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@chrisfix",
            "host": "tiktok.com",
            "followers": 207
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@chrisfix",
            "host": "youtube.com",
            "followers": 11200000
          }
        ],
        "audience": {
          "total": 11200000
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
                "value": "No podcast",
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
                "value": "+39% vs baseline",
                "weightPct": 0,
                "detail": "1.7 videos a month now, against 1.2 before that — up 39%, they are posting more; the recent ones are getting 16% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 33,
            "note": "found it — youtube.com/@chrisfix",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 107,
            "note": "something at substack.com/@chrisfix — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 61,
            "note": "something at chrisfix.myshopify.com/password — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 68,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 35,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 105,
            "note": "3 of 6 places wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "How to Re Epoxy a Garage Floor",
            "url": "https://www.youtube.com/watch?v=m0EiNYvCSpE",
            "at": "2026-07-24T16:24:51Z",
            "thumbnail": "https://i.ytimg.com/vi/m0EiNYvCSpE/hqdefault.jpg",
            "excerpt": null,
            "metric": 7761474,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:22:59.845Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "How to SAVE $400 and Change the Oil in your Car",
            "url": "https://www.youtube.com/watch?v=JBNUYoGRapA",
            "at": "2026-07-09T19:23:53Z",
            "thumbnail": "https://i.ytimg.com/vi/JBNUYoGRapA/hqdefault.jpg",
            "excerpt": null,
            "metric": 2003880,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:22:59.845Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "How Dash Cameras are Made (Turbo Del Sol UPDATE)",
            "url": "https://www.youtube.com/watch?v=bJAhfvbU5IQ",
            "at": "2026-06-23T14:01:34Z",
            "thumbnail": "https://i.ytimg.com/vi/bJAhfvbU5IQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 322884,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:22:59.845Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "How to Install a Car Lift in your Garage",
            "url": "https://www.youtube.com/watch?v=Qk0It5hmnho",
            "at": "2026-06-14T15:00:19Z",
            "thumbnail": "https://i.ytimg.com/vi/Qk0It5hmnho/hqdefault.jpg",
            "excerpt": null,
            "metric": 6660706,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:22:59.845Z",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — DIY car repair creator who does every job himself on camera and calls out the exact part, tool and fluid he's using, with a near-identical episode structure each time.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__southmainautorepairllc",
        "name": "southmainautorepairllc",
        "handle": "@southmainautorepairllc",
        "initials": "SO",
        "avatar": null,
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": null,
        "platforms": [],
        "places": [],
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
            "surfacesChecked": 45,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 67,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 46,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 26,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 14,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 54,
            "note": "something at southmainautorepair.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-14",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-14",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-14",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-14",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Eric O films real shop jobs start to finish, naming the exact part, part number and tool used in a consistent per-vehicle format.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      }
    ],
    "drops": {
      "2026-08-14": {
        "m_car_detailing_diy_repair_3": [
          "c_car_detailing_diy_repair_3__pantheorganizer",
          "c_car_detailing_diy_repair_3__stauffergarage",
          "c_car_detailing_diy_repair_3__obsessedgarage",
          "c_car_detailing_diy_repair_3__mymechanics",
          "c_car_detailing_diy_repair_3__mustie1",
          "c_car_detailing_diy_repair_3__thecarwizard",
          "c_car_detailing_diy_repair_3__thedetailgeek",
          "c_car_detailing_diy_repair_3__ammonyc",
          "c_car_detailing_diy_repair_3__vicegripgarage",
          "c_car_detailing_diy_repair_3__rainmanraysrepairs",
          "c_car_detailing_diy_repair_3__chrisfix",
          "c_car_detailing_diy_repair_3__southmainautorepairllc"
        ]
      }
    },
    "timeline": [],
    "runANameResult": {
      "id": "c_car_detailing_diy_repair_3__pantheorganizer",
      "name": "pantheorganizer",
      "handle": "@pantheorganizer",
      "initials": "PA",
      "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
      "mandateId": "m_car_detailing_diy_repair_3",
      "primaryPlatform": "TikTok profile",
      "platforms": [
        {
          "name": "TikTok profile",
          "handle": "@pantheorganizer",
          "followers": 43300,
          "url": "https://www.tiktok.com/@pantheorganizer",
          "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/69c8a1fa80ba728dc3fb140a292c2148~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e278149d&x-expires=1786885200&x-signature=IHBbYOku5ZGYQiA4aTe5Q5ci4MA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
          "avatarExpires": "2026-08-16T13:00:00.000Z",
          "avatarStale": false,
          "separate": true,
          "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
        },
        {
          "name": "YouTube channel",
          "handle": "@pantheorganizer",
          "followers": 1120000,
          "url": "https://www.youtube.com/@pantheorganizer",
          "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
          "avatarExpires": null,
          "avatarStale": false,
          "matchConfidence": 1
        }
      ],
      "places": [
        {
          "name": "TikTok profile",
          "url": "https://www.tiktok.com/@pantheorganizer",
          "host": "tiktok.com",
          "followers": 43300
        },
        {
          "name": "YouTube channel",
          "url": "https://www.youtube.com/@pantheorganizer",
          "host": "youtube.com",
          "followers": 1120000
        },
        {
          "name": "Website",
          "url": "https://pantheorganizer.com/",
          "host": "pantheorganizer.com",
          "followers": null
        }
      ],
      "audience": {
        "total": 1120000
      },
      "score": 44,
      "scoreDelta": null,
      "confidence": 0.833,
      "pillars": {
        "gap": {
          "score": 32,
          "max": 60,
          "engine": "rule+llm",
          "coverage": 0.833,
          "subsignals": [
            {
              "key": "owned",
              "label": "Owned-channel absence",
              "engine": "rule",
              "value": "No store, no newsletter, no membership",
              "weightPct": 75,
              "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
            },
            {
              "key": "demand",
              "label": "Unmet demand",
              "engine": "llm+rule",
              "value": "144 purchase-intent comments",
              "weightPct": 25,
              "detail": "144 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
              "detail": "15 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
              "value": "−6% vs baseline",
              "weightPct": 0,
              "detail": "11 videos a month now, against 12 before that — down 6%; the recent ones are getting 18% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
              "detail": "This is a dedicated car detailing channel doing hands-on tutorials, product reviews and step-by-step guides on a consistent twice-weekly schedule, which is exactly the on-camera, product-named, repeatable format the brief asks for."
            }
          ]
        }
      },
      "inventory": [
        {
          "item": "YouTube channel",
          "state": "present",
          "surfacesChecked": 29,
          "note": "found it — youtube.com/@pantheorganizer",
          "observedAt": "2026-08-14",
          "source": "youtube_channel"
        },
        {
          "item": "Newsletter",
          "state": "verified_absent",
          "surfacesChecked": 178,
          "note": "not there · we looked in 6 places",
          "observedAt": "2026-08-14",
          "source": "newsletter"
        },
        {
          "item": "Store",
          "state": "verified_absent",
          "surfacesChecked": 137,
          "note": "not there · we looked in 6 places · 2 wouldn't answer",
          "observedAt": "2026-08-14",
          "source": "store"
        },
        {
          "item": "Membership",
          "state": "verified_absent",
          "surfacesChecked": 81,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-14",
          "source": "membership"
        },
        {
          "item": "Podcast",
          "state": "present",
          "surfacesChecked": 32,
          "note": "something at creators.spotify.com/pod/show/pantheorganizer — not confirmed as theirs",
          "observedAt": "2026-08-14",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "present",
          "surfacesChecked": 32,
          "note": "found it — pantheorganizer.com",
          "observedAt": "2026-08-14",
          "source": "website"
        },
        {
          "item": "Representation",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "their bio does not mention it, which is not the same as nobody having signed them",
          "observedAt": "2026-08-14",
          "source": "representation"
        },
        {
          "item": "Sponsored posts",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
          "observedAt": "2026-08-14",
          "source": "sponsorships"
        },
        {
          "item": "Affiliate links",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
          "observedAt": "2026-08-14",
          "source": "affiliate_links"
        },
        {
          "item": "Platform subscriptions",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
          "observedAt": "2026-08-14",
          "source": "platform_subscriptions"
        },
        {
          "item": "Shopping tags",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
          "observedAt": "2026-08-14",
          "source": "shopping_tags"
        }
      ],
      "evidence": [
        {
          "kind": "comment",
          "quote": "I have purchased many products from DIY and CLEAN, and love both.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Just started using this product and love it!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I'll try this",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I'm still hooked on Quickbeads.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I use the Diy wax , I can say it really does fill.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've used the Turtle wax graphene ceramic paste wax many times. I love it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have used the turtle wax ceramic plus graphene for a couple years now, very impressed how it compared to the others.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been trying different waxes for my summer car.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I had that exact Turtle Wax on my shelf for many years",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I bought it brand new when they made an unlimited edition for almost 50 bucks.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Lol I've BEEN using Envie glass sealant on my glass shower doors already 😂",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Been using this as topper over my windshields coating. Works great",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have purchased many products from DIY and CLEAN, and love both.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Just started using this product and love it!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Can't wait to try it out 🔥",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been using Aquapel. It used to be used by law enforcement on their vehicles. I'll try this",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have a 80series landcruiser i been looking for a great product.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I use the Diy wax , I can say it really does fill.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been looking for wax to apply over my coating as I enjoy the experience of waxing and you have given me a few options to consider.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Love me some DIYDetail products, I'm still hooked on Quickbeads. My favorite so far, you have to pry it from my dead cold beaded hands. However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I did purchase the window cleaner (Glaco), but haven't used it ye",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I did a paint correction and put the 8 year coating on it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I would like to know whether my Clean by Pan 8‑year coating, applied to my vehicle about a year ago and stored immediately afterward in my freezer, can still be used on my new summer car.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Have a whole gallon love it !!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Can't wait to try it out 🔥",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I did purchase the window cleaner (Glaco), but haven't used it ye",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I did a paint correction and put the 8 year coating on it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Hello Pan, Thank you for your videos — they truly help us better understand the entire world of detailing. I would like to know whether my Clean by Pan 8‑year coating, applied to my vehicle about a year ago and stored immediately afterward in my freezer, can still be used on my new summer car.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Have a whole gallon love it !!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Have a whole gallon love it !!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Finally, a C8 Corvette! Thanks, Pan, for making this happen. Nice to see your approach on this vehicle so I can learn some tricks taking care of mine... Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I just bought a new to me 2014 e350 coupe. I did a paint correction and put the 8 year coating on it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Have a whole gallon love it !!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I did a paint correction and put the 8 year coating on it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I would like to know whether my Clean by Pan 8‑year coating, applied to my vehicle about a year ago and stored immediately afterward in my freezer, can still be used on my new summer car.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Have a whole gallon love it !!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Can't wait to try it out 🔥",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Finally, a C8 Corvette! Thanks, Pan, for making this happen. Nice to see your approach on this vehicle so I can learn some tricks taking care of mine... Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I just bought a new to me 2014 e350 coupe. I did a paint correction and put the 8 year coating on it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I like your videos and find them very helpful. I use your products almost exclusively.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Hi pan, I'm currently half way through my V1 bottle and love the slickness, foam and scent. Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Have a whole gallon love it !!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But Glaco is VERY difficult to beat when it comes to glass. I get its a maintenance product for when you wash. But as many times as i wash, i rarely need anything for glass for 9-12 months with a Glaco application.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Look forward to trying the V2 next. In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Have a whole gallon love it !!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "membership"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I just bought a new to me 2014 e350 coupe. I did a paint correction and put the 8 year coating on it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Have a whole gallon love it !!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I'll try this",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Thanks for the discount as always.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I appreciate the 20% off but that shipping cost still drives the price right back up. I ordered the shampoo, discounted price looked great but then I go to check out and the price I still high when they add that shipping fee.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Finally, a C8 Corvette! Thanks, Pan, for making this happen. Nice to see your approach on this vehicle so I can learn some tricks taking care of mine... Btw its been a few months, and the 8-year clean ceramic coating is looking great! I did purchase the window cleaner (Glaco), but haven't used it ye",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I just bought a new to me 2014 e350 coupe. I did a paint correction and put the 8 year coating on it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Incredibly informative. Will be picking up some of the shampoo very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "My 128 oz one is arriving today😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "In the autumn when the weather cools down, I'm going to order your spray polish and pads ready for 2 coats of gyeon can coat for winter protection.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Pan, another good one. I signed up and hope to ask you a few questions at TOC.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "membership"
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
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-12",
          "engine": "rule",
          "label": "abandonment"
        },
        {
          "kind": "signal",
          "quote": "https://linktr.ee/pantheorganizer",
          "platform": "link they publish",
          "url": "https://linktr.ee/pantheorganizer",
          "observedAt": "2026-08-12",
          "engine": "rule",
          "label": "abandonment"
        }
      ],
      "status": "in_drop",
      "resurfaced": null,
      "passed": null,
      "promoted": null,
      "outcome": null,
      "asOf": "2026-08-14",
      "alert": null,
      "samples": [
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "20% OFF CLEAN By Pan! 🔥 USA Only",
          "url": "https://www.youtube.com/watch?v=08Lp-xgJ_YQ",
          "at": "2026-08-13T14:32:11Z",
          "thumbnail": "https://i.ytimg.com/vi/08Lp-xgJ_YQ/hqdefault.jpg",
          "excerpt": null,
          "metric": 2401,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T13:23:16.154Z",
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
          "title": "The Secret to Making White Paint Pop | New Corvette Detail",
          "url": "https://www.youtube.com/watch?v=ox6t41RPNHo",
          "at": "2026-08-12T13:00:39Z",
          "thumbnail": "https://i.ytimg.com/vi/ox6t41RPNHo/hqdefault.jpg",
          "excerpt": null,
          "metric": 9892,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T13:23:16.155Z",
          "status": null
        },
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "Meet & Greet with my viewers on August 22 @TOC Supplies in Ontario!  🇨🇦",
          "url": "https://www.youtube.com/watch?v=gVv9JhsJscg",
          "at": "2026-08-10T13:00:15Z",
          "thumbnail": "https://i.ytimg.com/vi/gVv9JhsJscg/hqdefault.jpg",
          "excerpt": null,
          "metric": 2140,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T13:23:16.155Z",
          "status": null
        }
      ],
      "samplesSearched": {
        "count": 3,
        "why": "3 pieces of their own work"
      },
      "headline": "pantheorganizer makes car detailing product tests and explainers for 1,120,000 YouTube subscribers and hosts in-person meet and greets, but sells nothing directly: no store, no membership, no newsletter.",
      "headlineRestsOn": "audience: 43,300 on TikTok, 1,120,000 on YouTube · they have: YouTube channel, Podcast, Own website · they do not have: Newsletter, Store, Membership · \"Car Wash Shampoo Explained: Everything You Need to Know\" · \"DIY Detail Envie Glass Sealant Tested! Does It Beat Ceramic Detail Spray?\" · \"Meet & Greet with my viewers on August 22 @TOC Supplies in Ontario!  \ny}",
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
      "source": "proposed",
      "sourceWhy": "a model proposed this handle from a brief — Detailing creator whose videos are methodical tutorials on one car care task at a time with the exact products named as he applies them.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
