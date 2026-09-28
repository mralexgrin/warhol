/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief car-detailing-diy-repair-3` on 2026-08-07.
   Do not edit by hand; re-run the command.

   Classic script. Sets window.WARHOL. No modules, no fetch, no network.
   Drop-in replacement for the frozen cohort file of the same name.

   THESE CREATORS ARE REAL. That is the point of this file and it is also the
   thing to be careful about: every inventory line, every status code and every
   "we looked in N places" below traces to a URL the engine actually opened, on
   the date recorded. Run `warhol checks <handle>` in the engine to open them.

   WHAT IS REAL HERE
     inventory, checks, scores, confidence, platforms, audience, evidence

   WHAT IS INVENTED, AND MARKED
     headline, accent, samples, play, outreach

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
      "today": "2026-08-07",
      "backtestDate": null,
      "availableDates": [
        "2026-08-07"
      ],
      "scoreThreshold": 25,
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
      "generatedAt": "2026-08-07T15:10:07.511Z",
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
        "evidence"
      ],
      "generated": [
        "headline",
        "accent",
        "samples",
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
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/69c8a1fa80ba728dc3fb140a292c2148~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5a82e24b&x-expires=1786287600&x-signature=5q9OBJr5sukvyjtbfO2ZCKL9myo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
        "score": 39,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 27,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter, no membership",
                "weightPct": 90,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "36 purchase-intent comments",
                "weightPct": 10,
                "detail": "36 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "6 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "6 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
                "value": "−14% vs baseline",
                "weightPct": 0,
                "detail": "11 videos a month now, against 12 before that — down 13%; the recent ones are getting 16% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "This is a dedicated car detailing channel doing hands-on tutorials, product reviews and step-by-step guides on a fixed twice-weekly schedule, which is exactly the on-camera, product-naming, repeatable format the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — youtube.com/@pantheorganizer",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 39,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 17,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 6,
            "note": "something at pantheorganizer.com/podcast-with-the-rag-company-part-1 — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — pantheorganizer.com",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I have purchased many products from DIY and CLEAN, and love both.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Just started using this product and love it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'll try this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I'm still hooked on Quickbeads.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I use the Diy wax , I can say it really does fill.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've used the Turtle wax graphene ceramic paste wax many times. I love it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have used the turtle wax ceramic plus graphene for a couple years now, very impressed how it compared to the others.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been trying different waxes for my summer car.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I had that exact Turtle Wax on my shelf for many years",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I bought it brand new when they made an unlimited edition for almost 50 bucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Lol I've BEEN using Envie glass sealant on my glass shower doors already 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Been using this as topper over my windshields coating. Works great",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have purchased many products from DIY and CLEAN, and love both.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Just started using this product and love it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Can't wait to try it out 🔥",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been using Aquapel. It used to be used by law enforcement on their vehicles. I'll try this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have a 80series landcruiser i been looking for a great product.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I use the Diy wax , I can say it really does fill.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been looking for wax to apply over my coating as I enjoy the experience of waxing and you have given me a few options to consider.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
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
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Detailing creator known for methodical, repeatable on-camera routines where each product and applicator is identified.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/58cf0169cd2bfb17e8cf13390232221c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=464ae86e&x-expires=1786287600&x-signature=XFvDflbyJWIzgtpQAjmWEMLi2x0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@stauffergarage",
            "followers": 1300000,
            "url": "https://www.youtube.com/@stauffergarage",
            "avatar": "https://yt3.googleusercontent.com/3VT5yN8iD2padsU3s05RWbcwOiy156Uv9KNJyo1gDoRe1dU3oOJUb5lnbx4S6lBK8JXvzPf2=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 1300000
        },
        "score": 32,
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
                "value": "1 purchase-intent comment",
                "weightPct": 0,
                "detail": "1 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "−74% vs baseline",
                "weightPct": 100,
                "detail": "2.3 videos a month now, against 8.8 before that — down 74%; the recent ones are getting 42% more views — 10.6 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's a disaster-detailing and car-flip channel whose whole format is working on a car on camera, week after week in the same repeatable structure, which is exactly the detailing/restoration lane the brief asks for; the habit of naming specific products on screen is consistent with the format though not directly visible in this evidence."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@stauffergarage",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at tiktok.com/@stauffergarage — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I have more than one car detailing account i enjoy. I subscribed to yours, because you were not in the middle of a muddy yard, or driveway trying to detail something?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "youtube_channel"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7324192289143783430~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8250dd69&x-expires=1786287600&x-signature=bxIvwPh4HJmLXBFV3vg0cRDzF%2Fs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
        "audience": {
          "total": 696000
        },
        "score": 28,
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
                "value": "−59% vs baseline",
                "weightPct": 100,
                "detail": "6 videos a month now, against 15 before that — down 59%; the recent ones are getting 29% fewer views — 7.3 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Obsessed Garage is a car-guy channel built entirely around working on vehicles and garage gear on camera with obsessive product-by-product specificity, which is exactly the detailing/DIY lane the brief asks for, though the scraped post list is too thin to confirm the repeat-format-every-video point."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — youtube.com/@obsessedgarage",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at obsessedgarage.com — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Car care and detailing creator built around gear and product specificity, with repeated on-camera process videos.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/a8aae478e282005ad0f886032d8b03c0~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=84c7db32&x-expires=1786287600&x-signature=4r7RzkuzyEAtOeMg8wIfnflBuqU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
        "audience": {
          "total": 693000
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
                "detail": "His whole channel is hands-on revival of rusty engines and machines — exactly the on-camera wrenching, part-by-part, same-format repair content the brief asks for, even though the scraped post text is unusable."
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
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places · 1 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Repairs and resurrects abandoned engines and machines on camera, identifying each component and fix in a consistent format.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__thecarwizard",
        "name": "thecarwizard",
        "handle": "@thecarwizard",
        "initials": "TH",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/85365d3f5d4d2de5e203f270cd6a73f9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=268222b2&x-expires=1786287600&x-signature=CdyK3HHXl4R%2BxV9PlaCO5CM28S8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@thecarwizard",
            "followers": 33,
            "url": "https://www.tiktok.com/@thecarwizard",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/85365d3f5d4d2de5e203f270cd6a73f9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=268222b2&x-expires=1786287600&x-signature=CdyK3HHXl4R%2BxV9PlaCO5CM28S8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
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
                "detail": "Nothing visible contradicts the brief — the handle points to car content and there's no evidence against hands-on, part-naming, repeatable videos — though the format itself is entirely unconfirmed since no actual post content or readable bio is available."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-car-wizard/id1535822036?uo=4",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at thecarwizard.com — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Shop-based mechanic who tears into a specific car each video, names the failed component and the replacement part.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7327802512349200390~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=49abee1a&x-expires=1786287600&x-signature=6nbC%2B7DciXsOlPIvvhkKBgSMjuA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
        "audience": {
          "total": 3640000
        },
        "score": 21,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 21,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter, no podcast",
                "weightPct": 96,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "11 purchase-intent comments",
                "weightPct": 4,
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
                "detail": "we could not read their posting rate — only 3 uploads in the 275 days before that — too few to call it a rate"
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
                "detail": "He restores machines and metal objects hands-on camera in a rigidly repeated ASMR format, which is squarely what the brief asks; whether he names specific parts or products on screen can't be confirmed from this evidence since his videos are narration-free, but nothing visible contradicts the brief."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@mymechanics",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places · 3 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at patreon.com/mymechanics — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at mymechanics.com/personal — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "all i want for Christmas is your engine block restoration",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "5 months later and I am just dying for the next long form update.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Please never stop what you're doing.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm not ashamed to admit that I use your restoration videos as white noise to help me fall asleep, I have for years, even before I became a hydraulic mechanic.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Still waiting after 6 months, can't wait to see him restore the engine parts.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "老哥還活著嗎?我在等你的影片更新",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I just watched the entire thing through in one sitting.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I joined the army in 1975. Only to be able to get the money together to buy one of these cars.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "When is the next video coming out?😊😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I have a 2012 Lexus ES350. Watching your restoration video, I would give anything to have you work on restoring the car to as pristine a condition as you have done with this.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Historians in 200 years are going to be very confused about why there is only one Datsun 240z left in existence.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-07",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Restoration creator who fully disassembles a single rusted machine or tool per video, naming each part, in an unvarying format.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/ce4f6ff108c28357adf54e3ded711bb3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=0fe29d8c&x-expires=1786287600&x-signature=9Gf28on8b2gootn%2B0U8AgrRCTwc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@rainmanraysrepairs",
            "followers": 665000,
            "url": "https://www.youtube.com/@rainmanraysrepairs",
            "avatar": "https://yt3.googleusercontent.com/tsCt7BkwylvY-89YDh-UFiNAiQnVoQdBPeBifkNedWCf3eC_AlaJl7SpdB1SFub6JzgscS8W_w=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 665000
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
                "value": "No newsletter, no store, no podcast",
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
                "value": "−26% vs baseline",
                "weightPct": 100,
                "detail": "14 videos a month now, against 19 before that — down 26% — 0.2 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's a 20-year career auto and truck technician who films actual repairs and diagnostics on vehicles as they come through the shop, which is squarely the hands-on-a-machine repair format the brief wants, and while the scraped post text doesn't let me confirm part-by-part naming or episode-to-episode sameness, nothing visible contradicts it."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@rainmanraysrepairs",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at patreon.com/RainmanRaysRepairs — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — rainmanauto.com · that page links back to their YouTube",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 5 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Working technician who films real diagnostic and repair jobs in the bay, naming parts and tools as he goes, same format daily.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_car_detailing_diy_repair_3__ammonyc",
        "name": "ammonyc",
        "handle": "@ammonyc",
        "initials": "AM",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/2c33cf97550ff0fdbfdeeef7621206b5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=2c2d09c6&x-expires=1786287600&x-signature=yKrPDKmtslfpVEB0k80RLrPsRjQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_car_detailing_diy_repair_3",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@ammonyc",
            "followers": 47,
            "url": "https://www.tiktok.com/@ammonyc",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/2c33cf97550ff0fdbfdeeef7621206b5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=2c2d09c6&x-expires=1786287600&x-signature=yKrPDKmtslfpVEB0k80RLrPsRjQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 47
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
                "detail": "Everything visible points to a car detailing channel — AMMO NYC is a detailing brand — and nothing here conflicts with the brief, though the thin scrape can't confirm the on-camera product-naming and repeated format directly."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at ammonyc.com — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at ammonyc.com — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Larry Kosilla, professional detailer, works on one car per video and calls out the specific chemical, pad and tool at each stage.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/938da8ca29041f696d767b6e440090aa~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7934e0ad&x-expires=1786287600&x-signature=lG%2FBR%2FepBD4SDPd%2Bqdd5vmqSvHc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@thedetailgeek",
            "followers": 3960000,
            "url": "https://www.youtube.com/@thedetailgeek",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nh3BpO_PmKIExTQ9jmJWnD5b2TEqowJ8lRMqu2S9vbcQk=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 3960000
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
                "value": "No newsletter, no membership, no podcast",
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
                "value": "+0% vs baseline",
                "weightPct": 0,
                "detail": "34 videos a month, steady against 34 before that; the recent ones are getting 18% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's a dedicated car detailing channel doing hands-on transformations of filthy vehicles and carpets in a repeated satisfying-before-and-after format, and he links the products he uses, which is exactly what the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@thedetailgeek",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at detailgeekautocare.com/shop — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — tiktok.com/@thedetailgeek",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Detailer whose entire channel is a repeated format: one filthy car, full interior/exterior transformation, products named throughout.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7344196142911422507~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=15fad1f5&x-expires=1786287600&x-signature=eCHzU9f1f8mZSLleTAnhSZJnl9I%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
                "detail": "He works hands-on on classic cars, tractors and motorcycles on camera in a repeating \"Run and Drive\" rescue format, which is squarely the DIY repair and restoration lane the brief asks for; whether he names specific parts and products on screen isn't confirmable from this text but the how-to budget-build framing points that way."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — youtube.com/@vicegripgarage",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at vicegripgarage.com — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at vicegripgarage.com — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Revives long-dead vehicles on camera in a fixed formula — drag it out, name the parts needed, drive it home.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/733e7aea16fdf6566887cdd72665fd4a~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=74304daa&x-expires=1786287600&x-signature=CKT9pHSVUkzkx4NYO%2Bkli956Ap0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
                "detail": "1.7 videos a month now, against 1.2 before that — up 39%, they are posting more; the recent ones are getting 19% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@chrisfix",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at substack.com/@chrisfix — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at chrisfix.myshopify.com/password — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 3,
            "note": "3 of 6 places wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — DIY car repair creator who films every job hands-on, names the exact part and product he's installing, and uses the same step-by-step format each video.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
            "surfacesChecked": 4,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 6,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 3,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 2,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 1,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at southmainautorepair.com — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-07",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-07",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-07",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-07",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-07",
        "alert": null,
        "headline": "No headline — the engine does not write one.",
        "accent": "#6E6E6E",
        "samples": [],
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
          "headline",
          "accent",
          "samples",
          "play",
          "outreach"
        ],
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Eric O., independent shop owner, films diagnosis-to-fix on customer cars with part numbers and tools called out, identical structure each episode.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      }
    ],
    "drops": {
      "2026-08-07": {
        "m_car_detailing_diy_repair_3": [
          "c_car_detailing_diy_repair_3__pantheorganizer",
          "c_car_detailing_diy_repair_3__stauffergarage",
          "c_car_detailing_diy_repair_3__obsessedgarage",
          "c_car_detailing_diy_repair_3__mustie1",
          "c_car_detailing_diy_repair_3__thecarwizard",
          "c_car_detailing_diy_repair_3__mymechanics",
          "c_car_detailing_diy_repair_3__rainmanraysrepairs",
          "c_car_detailing_diy_repair_3__ammonyc",
          "c_car_detailing_diy_repair_3__thedetailgeek",
          "c_car_detailing_diy_repair_3__vicegripgarage",
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
          "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/69c8a1fa80ba728dc3fb140a292c2148~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5a82e24b&x-expires=1786287600&x-signature=5q9OBJr5sukvyjtbfO2ZCKL9myo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
          "avatarExpires": "2026-08-09T15:00:00.000Z",
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
      "score": 39,
      "scoreDelta": null,
      "confidence": 0.833,
      "pillars": {
        "gap": {
          "score": 27,
          "max": 60,
          "engine": "rule+llm",
          "coverage": 0.833,
          "subsignals": [
            {
              "key": "owned",
              "label": "Owned-channel absence",
              "engine": "rule",
              "value": "No store, no newsletter, no membership",
              "weightPct": 90,
              "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
            },
            {
              "key": "demand",
              "label": "Unmet demand",
              "engine": "llm+rule",
              "value": "36 purchase-intent comments",
              "weightPct": 10,
              "detail": "36 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
              "value": "6 dead links they still publish — they tried, it broke",
              "weightPct": 100,
              "detail": "6 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
              "value": "−14% vs baseline",
              "weightPct": 0,
              "detail": "11 videos a month now, against 12 before that — down 13%; the recent ones are getting 16% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
              "detail": "This is a dedicated car detailing channel doing hands-on tutorials, product reviews and step-by-step guides on a fixed twice-weekly schedule, which is exactly the on-camera, product-naming, repeatable format the brief asks for."
            }
          ]
        }
      },
      "inventory": [
        {
          "item": "YouTube channel",
          "state": "present",
          "surfacesChecked": 6,
          "note": "found it — youtube.com/@pantheorganizer",
          "observedAt": "2026-08-07",
          "source": "youtube_channel"
        },
        {
          "item": "Newsletter",
          "state": "verified_absent",
          "surfacesChecked": 39,
          "note": "not there · we looked in 7 places",
          "observedAt": "2026-08-07",
          "source": "newsletter"
        },
        {
          "item": "Store",
          "state": "verified_absent",
          "surfacesChecked": 28,
          "note": "not there · we looked in 5 places · 2 wouldn't answer",
          "observedAt": "2026-08-07",
          "source": "store"
        },
        {
          "item": "Membership",
          "state": "verified_absent",
          "surfacesChecked": 17,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-07",
          "source": "membership"
        },
        {
          "item": "Podcast",
          "state": "present",
          "surfacesChecked": 6,
          "note": "something at pantheorganizer.com/podcast-with-the-rag-company-part-1 — not confirmed as theirs",
          "observedAt": "2026-08-07",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "present",
          "surfacesChecked": 6,
          "note": "found it — pantheorganizer.com",
          "observedAt": "2026-08-07",
          "source": "website"
        },
        {
          "item": "Representation",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "their bio does not mention it, which is not the same as nobody having signed them",
          "observedAt": "2026-08-07",
          "source": "representation"
        },
        {
          "item": "Sponsored posts",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
          "observedAt": "2026-08-07",
          "source": "sponsorships"
        },
        {
          "item": "Affiliate links",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
          "observedAt": "2026-08-07",
          "source": "affiliate_links"
        },
        {
          "item": "Platform subscriptions",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
          "observedAt": "2026-08-07",
          "source": "platform_subscriptions"
        },
        {
          "item": "Shopping tags",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
          "observedAt": "2026-08-07",
          "source": "shopping_tags"
        }
      ],
      "evidence": [
        {
          "kind": "comment",
          "quote": "I have purchased many products from DIY and CLEAN, and love both.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Just started using this product and love it!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I'll try this",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I'm still hooked on Quickbeads.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I use the Diy wax , I can say it really does fill.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've used the Turtle wax graphene ceramic paste wax many times. I love it.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have used the turtle wax ceramic plus graphene for a couple years now, very impressed how it compared to the others.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been trying different waxes for my summer car.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I had that exact Turtle Wax on my shelf for many years",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I bought it brand new when they made an unlimited edition for almost 50 bucks.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Lol I've BEEN using Envie glass sealant on my glass shower doors already 😂",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Been using this as topper over my windshields coating. Works great",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have purchased many products from DIY and CLEAN, and love both.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Just started using this product and love it!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Can't wait to try it out 🔥",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been using Aquapel. It used to be used by law enforcement on their vehicles. I'll try this",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have a 80series landcruiser i been looking for a great product.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I use the Diy wax , I can say it really does fill.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "The regular envié spray is so slick I love it works great for so many things, will be buying g bottle number two very soon",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Ordered!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "However $30 for this glass/cleaner/sealant is a bit steep considering you can get Glaco for $35 which is a full on coating. But just to support Ivan I'll buy a bott",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I've been looking for wax to apply over my coating as I enjoy the experience of waxing and you have given me a few options to consider.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-07",
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
        }
      ],
      "status": "in_drop",
      "resurfaced": null,
      "passed": null,
      "promoted": null,
      "outcome": null,
      "asOf": "2026-08-07",
      "alert": null,
      "headline": "No headline — the engine does not write one.",
      "accent": "#6E6E6E",
      "samples": [],
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
        "headline",
        "accent",
        "samples",
        "play",
        "outreach"
      ],
      "source": "proposed",
      "sourceWhy": "a model proposed this handle from a brief — Detailing creator known for methodical, repeatable on-camera routines where each product and applicator is identified.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
