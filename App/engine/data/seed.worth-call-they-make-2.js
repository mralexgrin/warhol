/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief worth-call-they-make-2` on 2026-08-14.
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
        "takenAt": "2026-08-14T15:05:17.179Z",
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
        "started": "2026-08-14T13:06:36.927Z",
        "finished": "2026-08-14T13:11:59.607Z",
        "creators": 65,
        "minutes": 5.377983333333333,
        "checks": 2666,
        "calls": 251,
        "cost": 1.2107,
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
      "generatedAt": "2026-08-14T15:05:17.184Z",
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
        "source": "named",
        "sourceWhy": null
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/dd7d7c4fdced004fee525ee4a9fcc459~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8532c165&x-expires=1786885200&x-signature=ED%2FcMX85P%2B2oynxI3H5uXj8wu20%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
          },
          {
            "name": "Bluesky profile",
            "handle": "@brettkollmann",
            "followers": 55349,
            "url": "https://bsky.app/profile/brettkollmann.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:pwutcats2lz4f3g5vvbxl5dd/bafkreigr55v5ahqulytugdkmhwotr73hcemgophj5s2c5iymb4pu37jkf4",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the Bluesky to the YouTube, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@brettkollmann",
            "host": "tiktok.com",
            "followers": 41300
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@brettkollmann",
            "host": "youtube.com",
            "followers": 459000
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/brettkollmann.bsky.social",
            "host": "bsky.app",
            "followers": 55349
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
                "detail": "0.3 videos a month now, against 1.4 before that — down 76%; the recent ones are getting 130% more views — 11.2 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He runs a repeatable football series ("
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — youtube.com/@brettkollmann",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 78,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 50,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 35,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 36,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
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
        "evidence": [],
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
            "title": "Does \"establishing the run\" even work?",
            "url": "https://www.youtube.com/watch?v=-W6orkJ_-Qg",
            "at": "2026-05-30T05:12:39Z",
            "thumbnail": "https://i.ytimg.com/vi/-W6orkJ_-Qg/hqdefault.jpg",
            "excerpt": null,
            "metric": 346030,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:37.710Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "For the third year in a row while researching teams for summer previews, for every single niche metric we brin",
            "url": "https://bsky.app/profile/brettkollmann.bsky.social/post/3lsha42dgtk2r",
            "at": "2025-06-25T18:21:37.887Z",
            "thumbnail": null,
            "excerpt": "For the third year in a row while researching teams for summer previews, for every single niche metric we bring up I go to the top of the league and see Baltimore far outpacing everyone else in...basically everything. I can't believe this Ravens era might result in no hardware.",
            "metric": 110,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:09:37.712Z",
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
            "metric": 221368,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:37.711Z",
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
            "metric": 42666,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:37.711Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Brett Kollmann breaks down football strategy for 459,000 YouTube subscribers and posts less now (0.3 videos a month, down 76%) while each video pulls 130% more views, and he has no newsletter, store, membership, podcast, or website of his own to sell to that audience.",
        "headlineRestsOn": "459,000 on YouTube · YouTube channel · 0.3 videos a month now, against 1.4 before that — down 76%; the recent ones are getting 130% more views · they do not have: Newsletter, Store, Membership, Podcast, Own website · \"Does \"establishing the run\" even work?\" (341,680 views) · \"Why do so many elite pass rushers have short arms?\" (220,653 views) · \"How to build a team that's never good enough.\" (150,118 views)",
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
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/56838d8da04ad98f2e66d8d624c0c338~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b5d12b90&x-expires=1786885200&x-signature=2slyyfLVVYEVj8aFQLyZkzH9uGs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@missunderstoodpod",
            "followers": 23600,
            "url": "https://www.tiktok.com/@missunderstoodpod",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/56838d8da04ad98f2e66d8d624c0c338~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b5d12b90&x-expires=1786885200&x-signature=2slyyfLVVYEVj8aFQLyZkzH9uGs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@missunderstoodpod",
            "host": "tiktok.com",
            "followers": 23600
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/miss-understood-podcast/id1229498987?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://linktr.ee/racheluchitel",
            "host": "linktr.ee",
            "followers": null
          },
          {
            "name": "SoundCloud",
            "url": "https://soundcloud.com/miss-understood-249347191/miss25-mixdown",
            "host": "soundcloud.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 23600
        },
        "score": 34,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 22,
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
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "19 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "19 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "It's a podcast clipping short videos on TikTok with 528k likes across 500+ posts — clippable, repeatable, and true-crime/misunderstood-figures is a category with proven appetite."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 67,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 99,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 66,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 9,
            "note": "found it — https://podcasts.apple.com/us/podcast/miss-understood-podcast/id1229498987?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 48,
            "note": "they link to it themselves",
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
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-14",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/racheluchitel",
            "platform": "link they publish",
            "url": "https://linktr.ee/racheluchitel",
            "observedAt": "2026-08-14",
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
            "seenAt": "2026-08-14T13:09:15.850Z",
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
            "seenAt": "2026-08-14T13:09:15.850Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 2,
          "why": "2 pieces of their own work"
        },
        "headline": "missunderstoodpod runs a podcast and its own website for 23,600 TikTok followers, with recent episodes like \"Episode 24: Back From Hiding\" and the \"Miss25 Mixdown\", but no YouTube channel, newsletter, store, or membership to sell into yet.",
        "headlineRestsOn": "23,600 on TikTok · Podcast · Own website · YouTube channel · Newsletter · Store · Membership · \"Episode 24: Back From Hiding\" · \"Miss25 Mixdown\"",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/237dcdad9218ef057dd9b3ccf763c2c9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=a365bf45&x-expires=1786885200&x-signature=q7vMMNHwPxoA6xDpdf803U9Flwo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@watchweswork",
            "host": "tiktok.com",
            "followers": 65
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@watchweswork",
            "host": "youtube.com",
            "followers": 447000
          },
          {
            "name": "Website",
            "url": "https://watchweswork.com/",
            "host": "watchweswork.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 447000
        },
        "score": 31,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 22,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter",
                "weightPct": 99,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
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
            "score": 9,
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
                "value": "−66% vs baseline",
                "weightPct": 100,
                "detail": "0.3 videos a month now, against 1 before that — down 66%; the recent ones are getting 43% fewer views — 8.9 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "His bio and channel are built around fixing and building things on camera, which fits the DIY repair and restoration lane, and nothing visible contradicts the brief — the part-naming habit and consistent format can't be confirmed from the thin post data, but they're plausible for a hands-on repair channel of this size."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — youtube.com/@watchweswork",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 83,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 53,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 16,
            "note": "something at patreon.com/WatchWesWork — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 17,
            "note": "found it — watchweswork.com",
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
            "quote": "I bought a rock rake from Lee Valley. Great to see a genius at work!Thanks Wes.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I bought a rock rake from Lee Valley. Great to see a genius at work!Thanks Wes.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I bought a rock rake from Lee Valley. Great to see a genius at work!Thanks Wes.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I bought a rock rake from Lee Valley. Great to see a genius at work!Thanks Wes.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
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
            "title": "I Invented a New Tool - I Can't Explain Why",
            "url": "https://www.youtube.com/watch?v=dq2IHcjF9r8",
            "at": "2026-07-27T22:24:19Z",
            "thumbnail": "https://i.ytimg.com/vi/dq2IHcjF9r8/hqdefault.jpg",
            "excerpt": null,
            "metric": 272025,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:16:57.931Z",
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
            "metric": 479596,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:16:57.931Z",
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
            "metric": 845015,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:16:57.931Z",
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
            "metric": 737400,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:16:57.931Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "watchweswork makes machine shop repair videos for 447,000 YouTube subscribers, with recent uploads between 264,818 and 1,717,306 views, and already runs a membership, a podcast, and his own website, but has no newsletter and no store, and he is posting 0.3 videos a month against 1 before, down 66%, with views on the recent ones down 43%.",
        "headlineRestsOn": "447,000 on YouTube · YouTube channel · Membership · Podcast · Own website · Newsletter · Store · 0.3 videos a month now, against 1 before that \\are are getly 43% fewer views",
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
        "sourceWhy": null
      },
      {
        "id": "c_worth_call_they_make_2__itshunterfriesen",
        "name": "itshunterfriesen",
        "handle": "@itshunterfriesen",
        "initials": "IT",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1e5bc7ca&x-expires=1786885200&x-signature=QtOUug5EODHdaHTjN7S%2By%2Bz0UeA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@itshunterfriesen",
            "followers": 103600,
            "url": "https://www.tiktok.com/@itshunterfriesen",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1e5bc7ca&x-expires=1786885200&x-signature=QtOUug5EODHdaHTjN7S%2By%2Bz0UeA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@itshunterfriesen",
            "host": "tiktok.com",
            "followers": 103600
          }
        ],
        "audience": {
          "total": 103600
        },
        "score": 30,
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
                "value": "No youtube channel, no newsletter, no membership",
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
                "value": "20 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "20 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "He's clearly making short-form video that lands — 103.6k TikTok followers against 4.0m likes is a repeatable clippable format — and while the exact category isn't confirmed by anything here, the ASU tie and a sports-management business contact point to college/sports content people do watch, and nothing visible is wrong for this brief."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 67,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 99,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 63,
            "note": "something at overtimestrips.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 20,
            "note": "something at creators.spotify.com/pod/show/hunterfriesen — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 51,
            "note": "found it — tiktok.com/@itshunterfriesen",
            "observedAt": "2026-08-14",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — business inquiries",
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
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-14",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://overtimestrips.com/products/nasal-strips",
            "platform": "link they publish",
            "url": "https://overtimestrips.com/products/nasal-strips",
            "observedAt": "2026-08-14",
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
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Hunter Friesen reaches 103,600 people on TikTok and already runs a store, a podcast, and their own website with management in place, but has no YouTube channel, newsletter, or membership.",
        "headlineRestsOn": "audience: 103,600 on TikTok · they have: Store, Podcast, Own website, Representation / management · they do not have: YouTube channel, Newsletter, Membership · user handle: itshunterfriesen",
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
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7353902542427799598~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e1c0a0cb&x-expires=1786885200&x-signature=gz6S00FaaNWUJDqX7pm4zeihpVs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@marcelluswiley",
            "followers": 80200,
            "url": "https://www.tiktok.com/@marcelluswiley",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7353902542427799598~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e1c0a0cb&x-expires=1786885200&x-signature=gz6S00FaaNWUJDqX7pm4zeihpVs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@marcelluswiley",
            "host": "tiktok.com",
            "followers": 80200
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/marcellus-wiley-hydration-situation/id1809421850?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Spotify",
            "url": "https://podcasters.spotify.com/pod/show/datdude758/episodes/JAYLEN-BROWN-DESTROYS-ESPN-Stephen-A--Smith-Is-The-Face-Of-An-Unethical-Network-e3le3kr",
            "host": "podcasters.spotify.com",
            "followers": null
          },
          {
            "name": "Omny",
            "url": "https://omny.fm/shows/more-to-it-with-marcellus-wiley/manziel-never-heard-of-6-p-s-michigan-can-t-stop-m",
            "host": "omny.fm",
            "followers": null
          }
        ],
        "audience": {
          "total": 80200
        },
        "score": 29,
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
                "value": "−79% vs baseline",
                "weightPct": 100,
                "detail": "9 posts a month now, against 42 before that — down 79% — 11.7 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He runs a daily LIVE show at a fixed time and posts short clips to 80k TikTok followers in sports/commentary and life advice — a repeatable format in a category with real demand, even though the specific clip content isn't visible here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 36,
            "note": "something at substack.com/@marcelluswiley — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 44,
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
            "state": "present",
            "surfacesChecked": 10,
            "note": "found it — https://podcasts.apple.com/us/podcast/marcellus-wiley-hydration-situation/id1809421850?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 13,
            "note": "something at marcelluswiley.com — not confirmed as theirs",
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
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Marcellus Wiley: Hydration Situation",
            "kind": "episode",
            "title": "JAYLEN BROWN DESTROYS ESPN: \"Stephen A. Smith Is The Face Of An Unethical Network\" 😳🔥",
            "url": "https://podcasters.spotify.com/pod/show/datdude758/episodes/JAYLEN-BROWN-DESTROYS-ESPN-Stephen-A--Smith-Is-The-Face-Of-An-Unethical-Network-e3le3kr",
            "at": "2026-06-29T15:14:37.000Z",
            "thumbnail": null,
            "excerpt": "Marcellus Wiley LIVE! #HydrationSituationWelcome to The Marcellus Wiley Show LIVE — streaming Real-time reactions to sports, culture, and the conversations everybody’s scared to have.We talk Sports, Sports Media, Culture, Politics, Entertainment, and anything else that helps us grow, stay curious, a",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:47.073Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Marcellus Wiley: Hydration Situation",
            "kind": "episode",
            "title": "Gilbert Arenas & Underdog EXPOSED 😳 Rashad McCants Reveals What REALLY Happened 🔥",
            "url": "https://podcasters.spotify.com/pod/show/datdude758/episodes/Gilbert-Arenas--Underdog-EXPOSED--Rashad-McCants-Reveals-What-REALLY-Happened-e3lbkli",
            "at": "2026-06-27T14:23:50.000Z",
            "thumbnail": null,
            "excerpt": "Marcellus Wiley LIVE! #HydrationSituationWelcome to The Marcellus Wiley Show LIVE — streaming Real-time reactions to sports, culture, and the conversations everybody’s scared to have.We talk Sports, Sports Media, Culture, Politics, Entertainment, and anything else that helps us grow, stay curious, a",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:47.073Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Marcellus Wiley: Hydration Situation",
            "kind": "episode",
            "title": "Giannis TRADED To Miami Make The Heat Contenders? 😳🏝️PAT RILEY DID IT AGAIN!",
            "url": "https://podcasters.spotify.com/pod/show/datdude758/episodes/Giannis-TRADED-To-Miami-Make-The-Heat-Contenders--PAT-RILEY-DID-IT-AGAIN-e3lahar",
            "at": "2026-06-26T14:14:46.000Z",
            "thumbnail": null,
            "excerpt": "Marcellus Wiley LIVE! #HydrationSituationWelcome to The Marcellus Wiley Show LIVE — streaming Real-time reactions to sports, culture, and the conversations everybody’s scared to have.We talk Sports, Sports Media, Culture, Politics, Entertainment, and anything else that helps us grow, stay curious, a",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:47.073Z",
            "status": null
          },
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
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Marcellus Wiley runs a sports opinion podcast with a newsletter and his own website, and reaches 80,200 on TikTok, but has no YouTube channel, store, or membership.",
        "headlineRestsOn": "audience: 80,200 on TikTok · they have: Newsletter, Podcast, Own website · they do not have: YouTube channel, Store, Membership · \"Ep 187: Manziel never heard of 6 P\\u2019s? Michigan can\\u2019t stop! Micah is right!! CJ Gardner-Johnson ain\\u2019t scared!\" · \"Ep 186: Wilbon talking bad! Bill Simmons thinks podcast future is bright! Micah Parsons vs. Cowboys Haters!\"",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/0b7ead6dbc777cca77f6d564a1916b41~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=a92d7667&x-expires=1786885200&x-signature=jhtmvCdV%2BKd98VNYp8HMSIIq7Mw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@superfastmatt",
            "followers": 666000,
            "url": "https://www.youtube.com/@superfastmatt",
            "avatar": "https://yt3.googleusercontent.com/nqgbsRZPop6g87lugiS2bCe3a7WfW7cRTW3WjIQIykcXdU9ykFmfSHRHRxRhUs5KtMNWc8iG6CA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@superfastmatt",
            "host": "tiktok.com",
            "followers": 17700
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@superfastmatt",
            "host": "youtube.com",
            "followers": 666000
          }
        ],
        "audience": {
          "total": 683700
        },
        "score": 28,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 16,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no podcast",
                "weightPct": 71,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "68 purchase-intent comments",
                "weightPct": 29,
                "detail": "68 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "2 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "2 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
                "value": "−18% vs baseline",
                "weightPct": 0,
                "detail": "2.3 videos a month now, against 2.8 before that — down 18% — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's an automotive engineer who does hands-on engine swaps and builds on camera in a consistent explainer format, which fits the DIY repair and restoration brief, though the recent-post evidence is thin and doesn't directly confirm he names specific parts and products every video."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 15,
            "note": "found it — youtube.com/@superfastmatt",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 96,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 42,
            "note": "something at superfastmatt.myshopify.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 17,
            "note": "something at patreon.com/superfastmatt — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 25,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 44,
            "note": "found it — tiktok.com/@superfastmatt",
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
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I've got my fingers crossed that Slate makes it. I love small trucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "still bigger than i'd buy since i don't need a big car, but if the r3 is as small as promised, i might be convinced to get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I have my eye on an R2, once it level 3 self-drives.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'll probably buy a nice used R1T when they get a little more common.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really really want Aptera to succeed. I can't put my finger on why, but there's just something about them. I guess the design just makes a lot of sense for most people the majority of the time.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want Aptera to make it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Rivian is the only EV company I am fully hoping to buy into. They just seem so passionate about making a *good product* that *happens* to be an EV, rather than just trying to meet a quota and/or jump ship as soon as they are allowed (Honda >.>). I get to test the R2 tomorrow. I hope it goes well. Th",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I've got my fingers crossed that Slate makes it. I love small trucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I own a Rivian 2nd Gen R1T. I watched the videos and followed the growing pains through the 1st Gen product line before making my decision to purchase, and I am glad I did.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really really want Aptera to succeed. I can't put my finger on why, but there's just something about them. I guess the design just makes a lot of sense for most people the majority of the time.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope Slate makes it. The market needs a basic, economy EV to counter all the luxury laptops with wheels.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I think Aptera's going to make it, but initially be niche, which was the original intention anyways. Go Aptera!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I bought a used r1t launch edition over a year ago, and live where it's bitter cold about 19 months a year with a 6 minute 110° summer. I've asked myself if I'd ever get another gas cage, and I got sad thinking about the prospect.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want Aptera to make it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Rivian is the only EV company I am fully hoping to buy into. They just seem so passionate about making a *good product* that *happens* to be an EV, rather than just trying to meet a quota and/or jump ship as soon as they are allowed (Honda >.>). I get to test the R2 tomorrow. I hope it goes well.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have my eye on an R2, once it level 3 self-drives.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I too have a deposit on an R2, although it was more of a statement. I'll probably buy a nice used R1T when they get a little more common.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Rivian is the only EV company I am fully hoping to buy into. They just seem so passionate about making a *good product* that *happens* to be an EV, rather than just trying to meet a quota and/or jump ship as soon as they are allowed (Honda >.>). I get to test the R2 tomorrow. I hope it goes well. Th",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want Aptera to make it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really hope they do make it and can expand into Europe as well, I wouldn't mind a Tesla alternative tha",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "The R3 looks so sick, if it has decent self driving, the wife and I will be getting that.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "still bigger than i'd buy since i don't need a big car, but if the r3 is as small as promised, i might be convinced to get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I hope aptera makes it. Not just because i threw 3 grand at it, but because it's the only vehicle out there that's not a non-aero brick for some reason, can get 1000 miles to a charge and can sit out for 6 months without the battery dying. I want it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Rivian is the only EV company I am fully hoping to buy into. They just seem so passionate about making a *good product* that *happens* to be an EV, rather than just trying to meet a quota and/or jump ship as soon as they are allowed (Honda >.>). I get to test the R2 tomorrow. I hope it goes well. Th",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I want Aptera to make it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I unironically like the look of Rivian's cars. I just found out about the R3, and even that looks really cool in my opinion. Some sort of cross between a futuristic Jeep and an old Russian Lada. I really hope they do make it and can expand into Europe as well, I wouldn't mind a Tesla alternative tha",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "The R3 looks so sick, if it has decent self driving, the wife and I will be getting that.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I have my eye on an R2, once it level 3 self-drives.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "14:56 you said keychain and I immediately looked for a purchase link. You sold out so fast last time, like super fast! 😅",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Great investment on the key chains, I will be buying one once they have outlived their usefulness and you need them to be converted back to cold hard cash. Congrats on your run, thats amazing. You definitely are living up to your name.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Dang it! I wanted the blue key chain to pair with my red one.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "14:56 you said keychain and I immediately looked for a purchase link. You sold out so fast last time, like super fast! 😅",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Great investment on the key chains, I will be buying one once they have outlived their usefulness and you need them to be converted back to cold hard cash. Congrats on your run, thats amazing. You definitely are living up to your name.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Dang it! I wanted the blue key chain to pair with my red one.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Great investment on the key chains, I will be buying one once they have outlived their usefulness and you need them to be converted back to cold hard cash.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "14:56 you said keychain and I immediately looked for a purchase link. You sold out so fast last time, like super fast! 😅",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Dang it! I wanted the blue key chain to pair with my red one.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "signal",
            "quote": "https://www.youtube.com/@SuperfastMatt",
            "platform": "link they publish",
            "url": "https://www.youtube.com/@SuperfastMatt",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://www.youtube.com/@SuperfastMatt",
            "platform": "link they publish",
            "url": "https://www.youtube.com/@SuperfastMatt",
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
            "title": "Speed Week Was A Mixed Bag",
            "url": "https://www.youtube.com/watch?v=0gUvDfgn5I0",
            "at": "2026-08-11T15:17:43Z",
            "thumbnail": "https://i.ytimg.com/vi/0gUvDfgn5I0/hqdefault.jpg",
            "excerpt": null,
            "metric": 421558,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:21:48.393Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Rivian Is Gonna Be Alright",
            "url": "https://www.youtube.com/watch?v=JEmjg1q19GI",
            "at": "2026-07-26T14:57:04Z",
            "thumbnail": "https://i.ytimg.com/vi/JEmjg1q19GI/hqdefault.jpg",
            "excerpt": null,
            "metric": 261335,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:21:48.393Z",
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
            "metric": 454787,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:21:48.393Z",
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
            "metric": 415052,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:21:48.393Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "superfastmatt makes car build and engineering videos for 666,000 on YouTube, with recent uploads landing between 256,172 and 449,495 views, and he already sells through a store, a membership, and his own website, but he has no newsletter or podcast and his posting has slowed to 2.3 videos a month from 2.8.",
        "headlineRestsOn": "666,000 on YouTube · \"Rivian Is Gonna Be Alright\" (256,172 views) · \"The World's Best Driving Road Is Kinda Terrible\" (449,495 views) · Store · Membership · Own website · Newsletter · Podcast · 2.3 videos a month now, against 2.8 before that",
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
        "sourceWhy": null
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
            "followers": 253000,
            "url": "https://www.youtube.com/@motorcitymechanic",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kaFAoWrqsWdm_zVN9kvkf6_Rgh6XcM79nb_diHLVIPN-U=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@motorcitymechanic",
            "host": "youtube.com",
            "followers": 253000
          }
        ],
        "audience": {
          "total": 253000
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
                "detail": "Nothing visible contradicts the brief — a Detroit mechanic channel with 253k YouTube subscribers sits in a category people genuinely search for and lends itself to a repeatable, clippable repair-and-diagnosis format — though the scraped page text is boilerplate, so the actual content is unconfirmed rather than disqualifying."
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
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 74,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 2 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 16,
            "note": "something at youtube.com/user/vipertech30813 — not confirmed as theirs",
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I currently have a valve cover leak. I purchased the 13mm wrenches as suggested.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I really appreciate your Channel, it's very helpful. My stepdaughter is on a budget with her Chrysler 200 and I'm going to need some cams. Are there any aftermarket cams that can be trusted?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I really appreciate your Channel, it's very helpful. My stepdaughter is on a budget with her Chrysler 200 and I'm going to need some cams. Are there any aftermarket cams that can be trusted?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I purchased the 13mm wrenches as suggested.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I purchased the 13mm wrenches as suggested.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
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
            "title": "Chrysler Dodge Jeep Ram 3.6L Camshaft Tone Wheel Check Tool 2027900090",
            "url": "https://www.youtube.com/watch?v=X6BXr08mMK0",
            "at": "2026-08-13T16:00:09Z",
            "thumbnail": "https://i.ytimg.com/vi/X6BXr08mMK0/hqdefault.jpg",
            "excerpt": null,
            "metric": 1570,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:53.181Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "WARNING: Chrysler, Dodge, Jeep, Ram 3.6L Pentastar engine loose oil galley bolts, make sure to check",
            "url": "https://www.youtube.com/watch?v=KNZFFciXKk8",
            "at": "2025-12-18T16:08:38Z",
            "thumbnail": "https://i.ytimg.com/vi/KNZFFciXKk8/hqdefault.jpg",
            "excerpt": null,
            "metric": 80420,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:53.181Z",
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
            "metric": 76497,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:53.181Z",
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
            "metric": 19547,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:53.182Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "motorcitymechanic makes step-by-step Chrysler, Dodge, Jeep, and Ram repair videos for 253,000 YouTube subscribers and runs his own website, but has no newsletter, store, or membership to sell parts, tools, or paid help to the owners who come looking for a fix.",
        "headlineRestsOn": "audience: 253,000 on YouTube · YouTube channel, Own website · they do not have: Newsletter, Store, Membership · \"WARNING: Chrysler, Dodge, Jeep, Ram 3.6L Pentastar engine loose oil galley bolts, make sure to check\" · \"2021-2025 WL Jeep Grand Cherokee main battery replacement\" · \"2017-2021 Jeep Compass tail light bulbs and housing/assembly replacement\"",
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
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/001079e3d679b4692167fc3de2c6a9bb~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ad8a11c4&x-expires=1786885200&x-signature=F3eoqa5EEqM30jhUJyPcYW9yaQE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@hayesfawcett",
            "followers": 4372,
            "url": "https://www.tiktok.com/@hayesfawcett",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/001079e3d679b4692167fc3de2c6a9bb~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ad8a11c4&x-expires=1786885200&x-signature=F3eoqa5EEqM30jhUJyPcYW9yaQE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@hayesfawcett",
            "host": "tiktok.com",
            "followers": 4372
          }
        ],
        "audience": {
          "total": 4372
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
                "detail": "Sports edits, news and highlights are inherently clippable, the edit format is repeatable post after post, and college sports recruiting content is a category with real appetite — the brief's three asks are all visibly met."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 68,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 102,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 72,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 49,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 24,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 53,
            "note": "not there · we looked in 4 places · 1 wouldn't answer",
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
        "status": "in_drop",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_worth_call_they_make_2__girlwholove2gossip",
        "name": "girlwholove2gossip",
        "handle": "@girlwholove2gossip",
        "initials": "GI",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e43a8f27450c242536d609604288004c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f23cec8f&x-expires=1786885200&x-signature=jCswRd0WwG%2Fh068M6TIkBCE8XKg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@girlwholove2gossip",
            "followers": 45900,
            "url": "https://www.tiktok.com/@girlwholove2gossip",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e43a8f27450c242536d609604288004c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f23cec8f&x-expires=1786885200&x-signature=jCswRd0WwG%2Fh068M6TIkBCE8XKg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@girlwholove2gossip",
            "host": "tiktok.com",
            "followers": 45900
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/chins-giggles/id1615113859?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Sonoromedia",
            "url": "https://sonoromedia.com/",
            "host": "sonoromedia.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 45900
        },
        "score": 28,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 22,
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
            "score": 6,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "1 dead link they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "1 dead link they still publish — they tried, it broke — 6 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "She posts short gossip-news videos about celebrities, royals and politics — a genuinely in-demand category in a repeatable, highly clippable format, and the 2.4m likes against 45.9k followers shows the clips travel."
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
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 100,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 64,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/chins-giggles/id1615113859?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 51,
            "note": "found it — tiktok.com/@girlwholove2gossip",
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
            "kind": "signal",
            "quote": "https://youtube.com/@karinhasandoval",
            "platform": "link they publish",
            "url": "https://youtube.com/@karinhasandoval",
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
            "seenAt": "2026-08-14T13:09:02.054Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "She runs a gossip and girl-talk podcast for 45,900 TikTok followers and has her own website, but no store, membership, or newsletter to sell to them.",
        "headlineRestsOn": "handle: girlwholove2gossip · 45,900 on TikTok · Podcast · Own website · they do not have: Store · they do not have: Membership · they do not have: Newsletter · \"What Really Happened on Vacation?? *Girl Talk*\"",
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
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d61c2b1b339a7bd130c84b5c5c9dc0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c96cb84c&x-expires=1786885200&x-signature=ibnewt47pqcKbnDGNjFrlVEpH20%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@ratchetsandwrenches",
            "followers": 18,
            "url": "https://www.tiktok.com/@ratchetsandwrenches",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d61c2b1b339a7bd130c84b5c5c9dc0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c96cb84c&x-expires=1786885200&x-signature=ibnewt47pqcKbnDGNjFrlVEpH20%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@ratchetsandwrenches",
            "host": "tiktok.com",
            "followers": 18
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "Beyond a garage-themed handle there's no visible content to judge — no readable bio, no actual posts, and nothing showing a repeatable clippable format, so there's nothing here to confirm the brief."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 76,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 50,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 36,
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
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7329012677399805994~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=61559df7&x-expires=1786885200&x-signature=qO2W4oRkjAMvW0xTc6RLJt2JQEs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@backseatcoach",
            "host": "tiktok.com",
            "followers": 85800
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@backseatcoach",
            "host": "youtube.com",
            "followers": 36
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/beyond-normal-with-dr-tyler-j-saunders/id6800091265?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://linktr.ee/BackseatCoach",
            "host": "linktr.ee",
            "followers": null
          }
        ],
        "audience": {
          "total": 85800
        },
        "score": 27,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 15,
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
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "20 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "20 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "we could not read their posting rate — only 1 dated post came back — not enough to read a posting rate"
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
                "detail": "He makes short, clippable football content in a repeatable format (highlights, previews, interviews, hype vids) in sports — a category with obvious demand — and 85.8k TikTok followers with 5.5m likes shows the format lands."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 29,
            "note": "found it — youtube.com/@backseatcoach",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 104,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 70,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 51,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/beyond-normal-with-dr-tyler-j-saunders/id6800091265?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 54,
            "note": "they link to it themselves",
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
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-14",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/BackseatCoach",
            "platform": "link they publish",
            "url": "https://linktr.ee/BackseatCoach",
            "observedAt": "2026-08-14",
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
            "platform": "Podcast",
            "publication": "Beyond Normal with Dr. Tyler J. Saunders",
            "kind": "episode",
            "title": "Why \"Normal\" Isn't the Same as Healthy | Beyond Normal Ep. 1 with TJ Luby",
            "url": null,
            "at": "2026-08-10T20:52:03.000Z",
            "thumbnail": null,
            "excerpt": "Welcome to the very first episode of Beyond Normal. I'm joined by TJ Luby — a close friend, former college roommate, and cross country teammate — for a conversation about why I left a large health system after eight years to build something different, and what \"healthy\" actually means when most peop",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:08:28.231Z",
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
            "seenAt": "2026-08-14T13:08:21.035Z",
            "status": null
          },
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
          }
        ],
        "samplesSearched": {
          "count": 1,
          "why": "1 piece of their own work"
        },
        "headline": "Backseatcoach posts football clips and a mascot matchup series to 85,800 TikTok followers and runs a podcast and an own website, but sits at 36 on YouTube and has no newsletter, store, or membership.",
        "headlineRestsOn": "85,800 on TikTok · 36 on YouTube · YouTube channel · Podcast · Own website · Newsletter · Store · Membership · \"8/10 5-1 LIVE Mascots\" · \"8/10 5-2 Machete vs. Hatchet\" · \"Boston Renegades on 3rd Hour Today Show\" (263 views)",
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
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c69638fb51dd863b0cebce682e972469~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=3fef2dbd&x-expires=1786885200&x-signature=o%2B9cYBA4ICMvo3jABbdcppmMnXg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@samhartman_10",
            "followers": 118200,
            "url": "https://www.tiktok.com/@samhartman_10",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c69638fb51dd863b0cebce682e972469~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=3fef2dbd&x-expires=1786885200&x-signature=o%2B9cYBA4ICMvo3jABbdcppmMnXg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@samhartman_10",
            "host": "tiktok.com",
            "followers": 118200
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/writers-room-rejects/id1882461291?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Libsyn",
            "url": "https://a019b11b-cdbe-4481-8661-38a83f0b2dee.libsyn.com/morally-gray-narratively-lost",
            "host": "a019b11b-cdbe-4481-8661-38a83f0b2dee.libsyn.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 118200
        },
        "score": 27,
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
                "detail": "What I can see — a 118k-follower TikTok account with 467k likes built on repeated short videos — fits clippable and repeatable, and while the bio is a single emoji so the category is unconfirmed, nothing visible is actually wrong for this brief."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 65,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 74,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 71,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
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
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — https://podcasts.apple.com/us/podcast/writers-room-rejects/id1882461291?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 59,
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
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
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
            "seenAt": "2026-08-14T13:09:13.419Z",
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
            "seenAt": "2026-08-14T13:09:13.419Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 2,
          "why": "2 pieces of their own work"
        },
        "headline": "samhartman_10 talks story craft to 118,200 followers on TikTok in videos like \"Morally Gray & Narratively Lost\" and \"When They're Dead, They're Dead,\" and runs a podcast, but has no YouTube channel, newsletter, store, membership, or site of their own.",
        "headlineRestsOn": "118,200 on TikTok · Podcast · YouTube channel · Newsletter · Store · Membership · Own website · \"Morally Gray & Narratively Lost\" · \"When They Die, They're Dead\"",
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
        "id": "c_worth_call_they_make_2__catsofyore",
        "name": "catsofyore",
        "handle": "@catsofyore",
        "initials": "CA",
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:xrr5j2okn7ew2zvcwsxus3gb/bafkreig6pljjdx7aekpetnwdxmjzhcbiwsoph72wjhjzjqsey2bzrj4pz4",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@catsofyore",
            "followers": 9,
            "url": "https://www.tiktok.com/@catsofyore",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7a39d417a65cd33f793c58f570a7b9ce~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ce32de2b&x-expires=1786885200&x-signature=wYwFuY6L%2FtkttvmGz0b5FJDtYg8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the Bluesky, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@catsofyore",
            "followers": null,
            "url": "https://www.youtube.com/@catsofyore",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kTBZSGKEAheYsTKn4afVEwgqvCdN3xf1wRiQqkT8iMIBWaKzUggCo0tbCy2a1UTpRsTg=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false
          },
          {
            "name": "Bluesky profile",
            "handle": "@catsofyore",
            "followers": 340547,
            "url": "https://bsky.app/profile/catsofyore.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:xrr5j2okn7ew2zvcwsxus3gb/bafkreig6pljjdx7aekpetnwdxmjzhcbiwsoph72wjhjzjqsey2bzrj4pz4",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@catsofyore",
            "host": "tiktok.com",
            "followers": 9
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@catsofyore",
            "host": "youtube.com",
            "followers": null
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/catsofyore.bsky.social",
            "host": "bsky.app",
            "followers": 340547
          }
        ],
        "audience": {
          "total": 340547
        },
        "score": 27,
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
                "value": "+13% vs baseline",
                "weightPct": 0,
                "detail": "117 posts a month now, against 103 before that — up 13%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "A 340k-follower Bluesky account posting archival cat photographs from a personal collection is a repeatable format, inherently shareable, and sits in one of the most reliably wanted categories there is — cats plus history."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — youtube.com/@catsofyore",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 13,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 5,
            "note": "something at catsofyore.com — not confirmed as theirs",
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
            "quote": "CATS READING BOOKS for $75. Pick a cat (YOUR cat or a friend's cat or an imaginary cat). Pick a book (a book you wrote or your friend wrote or just an old favorite)— I will draw you the digital illustration like these: www.behance.net/gallery/2291... I drew 12 last week. DM for info/to order",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Hi, thank you so much for sharing! ♡ I'm Lenny, I paint pet portraits and make jewelry ☆ Pet portraits are acrylic on canvas and range $50-$200, I can take a couple more so dm me to grab a spot! Placecalledbliss.bigcartel.com",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Hello yes I have cats Original art and prints (EU based): anaisfae.art/shop Prints only (international): www.inprnt.com/gallery/anai...",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Here's another W Crane inspired cat poster, with a biscuit maker, fishercat, and catnip grower. If you like my work follow me here for more and visit my print shop at nathannunart.etsy.com Thank you, Cats of Yore, for the show!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Thank you @catsofyore.bsky.social for hosting the art show! This neighborhood cat likes to visit the catmint in our backyard. It's apparently on their wandering route and we are always very happy to see them. I'm a watercolorist but am practicing with pastels. More at brucewashburnart.com",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "website"
          },
          {
            "kind": "comment",
            "quote": "I make cat sofas and comfy lap mats .. if only my cat would decide which one she wants craftysharp.etsy.com",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Jumping here again with my ✨🐈‍⬛cat wares🐈✨ hellocloudyart.etsy.com",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Thank you! I have a few cat pillows for sale 🐈🐈‍⬛ www.etsy.com/shop/Raccoon...",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Hello Thursday Art Show!! In the market for kitty jewelry and accessories? Check out my etsy shop, Bitten Beads! Thanks always for hosting and thanks for shopping 😸 bittenbeads.etsy.com",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I am opening up kofi slots for kitty postcards I can mail. ko-fi.com/s/7ab42d8f6a",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
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
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Toilet Detective. Photo from my collection, no date/info.",
            "url": "https://bsky.app/profile/catsofyore.bsky.social/post/3msz3qj74k22x",
            "at": "2026-08-14T02:17:43.217Z",
            "thumbnail": null,
            "excerpt": "Toilet Detective. Photo from my collection, no date/info.",
            "metric": 1239,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:10:56.270Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Entertainment center. Photo from my collection, no date/info.",
            "url": "https://bsky.app/profile/catsofyore.bsky.social/post/3msyt7vyi3k2x",
            "at": "2026-08-13T23:45:16.275Z",
            "thumbnail": null,
            "excerpt": "Entertainment center. Photo from my collection, no date/info.",
            "metric": 1414,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:10:56.271Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Showing off that tum! Photo from my collection, no date/info.",
            "url": "https://bsky.app/profile/catsofyore.bsky.social/post/3msyowiv2fc2x",
            "at": "2026-08-13T22:28:25.581Z",
            "thumbnail": null,
            "excerpt": "Showing off that tum! Photo from my collection, no date/info.",
            "metric": 1623,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:10:56.271Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "THURSDAY ART SHOW! If you are a working artist (i.e. you depend on income from your art) just respond to this ",
            "url": "https://bsky.app/profile/catsofyore.bsky.social/post/3msyg5fpvhs2k",
            "at": "2026-08-13T19:51:13.460Z",
            "thumbnail": null,
            "excerpt": "THURSDAY ART SHOW! If you are a working artist (i.e. you depend on income from your art) just respond to this post with your non-pornographic, non-violent, non-Al generated CAT-RELATED art/crafts and I will repost! From now until 6:00 pm EDT. Include any relevant links like your website or etsy!",
            "metric": 220,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:10:56.271Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "catsofyore posts vintage cat photos and vet-board finds to 340,547 followers on Bluesky at 117 posts a month, up 13% from 103, with a YouTube channel and own website but no newsletter, store, membership, or podcast to sell to that audience.",
        "headlineRestsOn": "340,547 on Bluesky · 117 posts a month now, against 103 before that //channel, Own website · Newsletter, Store, Membership, Podcast · \"Showing off the little ones in 1934.\" (1,759 likes) · \"I always take a photo of the \"Patients of the Day\" board at the vet so I can look at them later. Here are some\" (1,196 likes)",
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
            "followers": 408300,
            "url": "https://www.tiktok.com/@humblemechanic",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/06704d2e5142f19148b419b7c69dc091~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=02b9418e&x-expires=1786885200&x-signature=gQzCaFR%2BKusbProsqdUigpIoaUk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@humblemechanic",
            "host": "tiktok.com",
            "followers": 408300
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@humblemechanic",
            "host": "youtube.com",
            "followers": 1050000
          },
          {
            "name": "Store",
            "url": "https://www.amazon.com/shop/humblemechanic",
            "host": "amazon.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/humble-mechanic-podcast/id1281270865?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://humblemechanic.com/",
            "host": "humblemechanic.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 1050000
        },
        "score": 26,
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
            "score": 15,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "2 dead links they still publish — they tried, it broke",
                "weightPct": 80,
                "detail": "2 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
                "weightPct": 20,
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
                "detail": "He's a Master Certified VW tech doing hands-on repairs, tear-downs and engine rebuilds on camera with named parts and tools, which is squarely the DIY repair and restoration format the brief wants, though the exact per-video repeatability isn't confirmable from the post snippets shown."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — youtube.com/humblemechanic",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 78,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 50,
            "note": "they link to it themselves",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 36,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — https://podcasts.apple.com/us/podcast/humble-mechanic-podcast/id1281270865?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 14,
            "note": "found it — humblemechanic.com",
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
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://www.amazon.com/shop/humblemechanic",
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
            "kind": "signal",
            "quote": "https://www.amazon.com/shop/humblemechanic",
            "platform": "link they publish",
            "url": "https://www.amazon.com/shop/humblemechanic",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://www.amazon.com/shop/humblemechanic",
            "platform": "link they publish",
            "url": "https://www.amazon.com/shop/humblemechanic",
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
            "title": "Why Can't Porsche, VW & Audi Get This Part Right?",
            "url": "https://www.youtube.com/watch?v=OwqSHUVNnUQ",
            "at": "2026-08-02T14:00:19Z",
            "thumbnail": "https://i.ytimg.com/vi/OwqSHUVNnUQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 107554,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:18:35.544Z",
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
            "seenAt": "2026-08-14T13:18:57.089Z",
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
            "seenAt": "2026-08-14T13:18:57.089Z",
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
            "metric": 136580,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:18:35.544Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 6,
          "why": "6 pieces of their own work"
        },
        "headline": "HumbleMechanic teaches car repair to 1,050,000 YouTube subscribers and 408,300 on TikTok through fix-it videos and a long-running listener question podcast, and he already sells through a store, his own website, and affiliate links, but he has no newsletter or membership to hold that audience, and his posting has slowed to 1.3 videos a month from 2.2.",
        "headlineRestsOn": "408,300 on TikTok · 1,050,000 on YouTube · YouTube channel · Store · Podcast · Own website · Affiliate links · Newsletter · Membership · 1.3 videos a month now, against 2.2 before that · How To Fix a Blower Motor Not Working ~ LOUD NOISES · Volkswagen Jetta TDI Fuel Filter Replacement ~ Common Rail Diesel · Viewer Automotive Questions Answered ~ Audio Podcast Episode 86 · Viewer Car Questions ANSWERED ~ Audio Podcast Episode 265",
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
        "sourceWhy": null
      },
      {
        "id": "c_worth_call_they_make_2__brandonfwalker",
        "name": "brandonfwalker",
        "handle": "@brandonfwalker",
        "initials": "BR",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/00b63407150e9355ffa920c96a0fe8f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=2c4c08e1&x-expires=1786885200&x-signature=AGB2eLZgeEACIhYEzETRqJ8cRkw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@brandonfwalker",
            "followers": 140400,
            "url": "https://www.tiktok.com/@brandonfwalker",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/00b63407150e9355ffa920c96a0fe8f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=2c4c08e1&x-expires=1786885200&x-signature=AGB2eLZgeEACIhYEzETRqJ8cRkw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@brandonfwalker",
            "host": "tiktok.com",
            "followers": 140400
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/rasslin-with-brandon-f-walker/id1540836655?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Barstoolsports",
            "url": "https://www.barstoolsports.com/shows/barstool-podcast-3",
            "host": "barstoolsports.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 140400
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
                "value": "No youtube channel, no newsletter, no store",
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
                "detail": "He's a Barstool sports personality with multiple named recurring shows and 6.3m likes on short-form video, which is clippable content in a repeatable format in a category with huge appetite."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 82,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 93,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 65,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 43,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/rasslin-with-brandon-f-walker/id1540836655?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 57,
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
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
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
        "evidence": [],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-14",
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
            "seenAt": "2026-08-14T13:08:59.944Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Brandon Walker runs a wrestling interview podcast with a paid membership and 140,400 followers on TikTok, but has no YouTube channel, newsletter, store, or website of his own, so everything he makes lives on someone else's platform.",
        "headlineRestsOn": "140,400 on TikTok · Membership · Podcast · YouTube channel · Newsletter · Store · Own website · \"Ricochet Responds To Fans Blaming Him For Samantha Irvin Leaving | AEW Spray Tan Problem, Top Movies\" · \"Matt Riddle's DMs Are Wild and His Toes Are LITERALLY Frostbitten | Provides a GOLDBERG Update\" · \"Hulk Hogan Wanted To Turn Heel At WrestleMania VI, Botching A Shirt Rip, Bobby Heenan As A Wrestler\"",
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
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/048294af7a7edb72fe6b2c8042b4d945~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ce3b208a&x-expires=1786885200&x-signature=jNnRoJZjuwFVg7OHF%2FxlHdITqCA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@gossipgilby",
            "followers": 6928,
            "url": "https://www.tiktok.com/@gossipgilby",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/048294af7a7edb72fe6b2c8042b4d945~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ce3b208a&x-expires=1786885200&x-signature=jNnRoJZjuwFVg7OHF%2FxlHdITqCA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@gossipgilby",
            "host": "tiktok.com",
            "followers": 6928
          }
        ],
        "audience": {
          "total": 6928
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
                "detail": "Pop culture hot takes is a category with real demand, the talking-head gossip format is inherently clippable and repeatable, and 4.9m likes against a small follower count says the clips actually travel."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 73,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 110,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 70,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 55,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 53,
            "note": "something at tiktok.com/@gossipgilby — not confirmed as theirs",
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
        "status": "in_drop",
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
        "headline": "gossipgilby has 6,928 followers on TikTok and a website, but no YouTube channel, newsletter, store, membership, or podcast.",
        "headlineRestsOn": "audience: 6,928 on TikTok · they have: Own website · they do not have: YouTube channel, Newsletter, Store, Membership, Podcast",
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
        "id": "c_worth_call_they_make_2__jeffvandermeer",
        "name": "jeffvandermeer",
        "handle": "@jeffvandermeer",
        "initials": "JE",
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:jvhw6v6rt4motcndq4gh5qo7/bafkreiaylkjlcdztatcx6wxyx442sqgdxv2ixmcbtiyfmgiws3zmyi267i",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@jeffvandermeer",
            "followers": 1,
            "url": "https://www.tiktok.com/@jeffvandermeer",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7333004032120324101~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9c64ee30&x-expires=1786885200&x-signature=BdFjEsld%2FNyvEtU%2B9JTjp%2B3UWJU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the Bluesky, so it is not added in"
          },
          {
            "name": "Bluesky profile",
            "handle": "@jeffvandermeer",
            "followers": 86187,
            "url": "https://bsky.app/profile/jeffvandermeer.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:jvhw6v6rt4motcndq4gh5qo7/bafkreiaylkjlcdztatcx6wxyx442sqgdxv2ixmcbtiyfmgiws3zmyi267i",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@jeffvandermeer",
            "host": "tiktok.com",
            "followers": 1
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/jeffvandermeer.bsky.social",
            "host": "bsky.app",
            "followers": 86187
          },
          {
            "name": "Website",
            "url": "https://www.jeffvandermeer.com/",
            "host": "jeffvandermeer.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 86187
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
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle, and their account is hidden from logged-out readers, so we could not read their posts"
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
                "detail": "There's no visible clippable, repeatable video or short-form format here — the TikTok is empty (1 follower, 0 posts of substance) and the only real presence is a text-based Bluesky following, so the brief's core ask goes unmet on the evidence."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 11,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 13,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — jeffvandermeer.com · that page links back to their Bluesky",
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
        "headline": "jeffvandermeer reaches 86,187 people on Bluesky and runs his own website, but has no newsletter, store, membership, or podcast to send them to.",
        "headlineRestsOn": "86,187 on Bluesky · Own website · Newsletter · Store · Membership · Podcast",
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
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@pinehollowautodiagnostics",
            "host": "youtube.com",
            "followers": 277000
          }
        ],
        "audience": {
          "total": 277000
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
                "value": "No store, no newsletter, no membership",
                "weightPct": 99,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
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
                "detail": "14 videos a month now, against 15 before that — down 2%; the recent ones are getting 18% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He makes repeatable live automotive diagnostic troubleshooting videos — a well-defined, in-demand category with clippable 'aha' moments — organized into consistent playlist formats."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — youtube.com/@pinehollowautodiagnostics",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 76,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 36,
            "note": "something at pinehollowdiagnostics.com — not confirmed as theirs",
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
            "quote": "First you got me back into soldering over crimping. You may be convincing me more after this video. Love my TS 101 still need a Battery pack just cord for now till I break down and buy a battery pack👊🏻",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Great video Ivan. Can I ask you a question? Can you please show us here on you tube on how to drag test and unpin wire connectors and is there any special tools that can help with this sort of work?? Have a great day and again great video.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "First you got me back into soldering over crimping. You may be convincing me more after this video. Love my TS 101 still need a Battery pack just cord for now till I break down and buy a battery pack👊🏻",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "i just have your videos teaching me everything 😂",
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
            "title": "Shop Replaced PCM...for THIS?! ('10 F150 5.4 V8: Runs Like CRAP!)",
            "url": "https://www.youtube.com/watch?v=ghzgmqOYSMw",
            "at": "2026-08-12T09:45:36Z",
            "thumbnail": "https://i.ytimg.com/vi/ghzgmqOYSMw/hqdefault.jpg",
            "excerpt": null,
            "metric": 41465,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:14.643Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "(Pt 3) Beached Whale for a YEAR?! CRAZY Conclusion!! ('16 Camaro Turbo)",
            "url": "https://www.youtube.com/watch?v=uJUEIADNgdA",
            "at": "2026-08-09T10:00:08Z",
            "thumbnail": "https://i.ytimg.com/vi/uJUEIADNgdA/hqdefault.jpg",
            "excerpt": null,
            "metric": 41495,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:14.643Z",
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
            "metric": 39511,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:14.644Z",
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
            "metric": 42546,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:14.644Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Pine Hollow Auto Diagnostics posts 14 car repair diagnosis videos a month to 277,000 YouTube subscribers and runs its own website, but has no newsletter, store, or membership to sell to viewers who follow multi-part jobs like the four-part Range Rover series.",
        "headlineRestsOn": "audience: 277,000 on YouTube · they have: YouTube channel, Own website · they do not have: Newsletter, Store, Membership, Podcast · posting rate: 14 videos a month now · \"(Pt 4) CRAZY Land Rover: A/C & EVAP Monitor INCOMPLETE? ('08 Range Rover V8 Supercharged)\"",
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
            "followers": 468000,
            "url": "https://www.youtube.com/@briansmobile1",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_k6tpOwGmaLxlPyZ0PyEozFqokRSDNQTLOuaI_AZ5tHFg=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@briansmobile1",
            "host": "youtube.com",
            "followers": 468000
          }
        ],
        "audience": {
          "total": 468000
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
                "detail": "He makes hands-on car repair explainers — a demo-driven format that's inherently clippable, endlessly repeatable across parts and vehicles, and DIY auto repair is a category people actively search for."
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
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 71,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 49,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 31,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 13,
            "note": "something at creators.spotify.com/pod/show/briansmobile1 — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 37,
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
            "title": "KIA Hyundai No Start. Starter Buzz Fix.",
            "url": "https://www.youtube.com/watch?v=ReXXaV8BS28",
            "at": "2026-02-15T21:30:04Z",
            "thumbnail": "https://i.ytimg.com/vi/ReXXaV8BS28/hqdefault.jpg",
            "excerpt": null,
            "metric": 2512,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:15.444Z",
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
            "metric": 8554,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:15.445Z",
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
            "metric": 5781,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:15.445Z",
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
            "metric": 5029,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:15.445Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Brian makes car repair diagnostic videos for 468,000 YouTube subscribers and runs a podcast, but he has no newsletter, store, membership, or website of his own, so there is nothing he owns to sell through.",
        "headlineRestsOn": "468,000 on YouTube · YouTube channel, Podcast · Newsletter, Store, Membership, Own website · \"KIA Hyundai No Start. Starter Buzz Fix.\" · \"Corolla P0302 Diag #automobile #mechanic #diy\" · \"What to replace & why on vehicle drum brakes.\"",
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
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/4acadc1d7690b971931cf0555a304d13~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=dbce3314&x-expires=1786885200&x-signature=SdqJ77171iRNqFlReSSiMILNdOQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
          },
          {
            "name": "Bluesky profile",
            "handle": "@thedraftnetwork",
            "followers": 358,
            "url": "https://bsky.app/profile/thedraftnetwork.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:54enmmxn5hrpwzqvm5hyi4nc/bafkreiefjrpufvcfd52mu5remgekibmxz7ip6aesudlwi2uqllj47egfue",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the Bluesky to the YouTube, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@thedraftnetwork",
            "host": "tiktok.com",
            "followers": 3
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@thedraftnetwork",
            "host": "youtube.com",
            "followers": 15800
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/thedraftnetwork.bsky.social",
            "host": "bsky.app",
            "followers": 358
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/commanding-the-huddle/id1614872756?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://www.thedraftnetwork.com/",
            "host": "thedraftnetwork.com",
            "followers": null
          },
          {
            "name": "Bleav",
            "url": "https://bleav.com/shows/commanding-the-huddle/episodes/personal-news-thank-you-guys/",
            "host": "bleav.com",
            "followers": null
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
                "detail": "nothing posted in 90 days, after 44 a month before that — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "NFL Draft film breakdowns and scouting reports are an evergreen, high-demand category, and the daily scouting-report format is inherently repeatable and easy to cut into clips — the thin post evidence here is unconfirmed rather than disqualifying."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@thedraftnetwork",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 64,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 30,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — https://podcasts.apple.com/us/podcast/commanding-the-huddle/id1614872756?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — thedraftnetwork.com",
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
            "seenAt": "2026-08-14T13:10:38.875Z",
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
            "seenAt": "2026-08-14T13:10:30.859Z",
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
            "seenAt": "2026-08-14T13:10:38.875Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "What kind of stats could the top rookie QBs put up in 2025? @JaimeEisner.bsky.social takes a look at what hist",
            "url": "https://bsky.app/profile/thedraftnetwork.bsky.social/post/3lscbdvdtxf2a",
            "at": "2025-06-23T19:00:36.086Z",
            "thumbnail": null,
            "excerpt": "What kind of stats could the top rookie QBs put up in 2025? @JaimeEisner.bsky.social takes a look at what history tells us to make 2025 stat projections for Cam Ward, Jaxson Dart, and Tyler Shough. thedraftnetwork.com/2025/06/23/n...",
            "metric": 0,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:10:30.860Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 6,
          "why": "6 pieces of their own work"
        },
        "headline": "He makes NFL draft and free agency analysis on a YouTube channel with 15,800 subscribers, a podcast, and his own site, but he has posted nothing in 90 days after 44 a month, and his last upload was titled \"Personal News... Thank you guys!!!\", so the call is worth making to learn what changed; there is no store or membership yet.",
        "headlineRestsOn": "15,800 on YouTube · YouTube channel · Podcast · Own website · nothing posted in 90 days, after 44 a month before that · \"Personal News... Thank you guys!!!\" · \"2026 NFL Mock Draft: Final Predictions\" · \"Early FA recap and the importance of player fit\" · Store · Membership",
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
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7321576095327748101~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1fb367d9&x-expires=1786885200&x-signature=wEUEP4x551NFvrkmtUg6X4ARUdI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@detailgroove",
            "host": "tiktok.com",
            "followers": 152
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@detailgroove",
            "host": "youtube.com",
            "followers": 252000
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
                "detail": "13 videos a month now, against 17 before that — down 22%; the recent ones are getting 52% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Car detailing satisfaction videos are inherently clippable, the before/after detail format repeats endlessly, and the 252k YouTube following confirms real demand in a proven category."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@detailgroove",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 72,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 50,
            "note": "not there · we looked in 6 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 17,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at detailgroove.com — not confirmed as theirs",
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
            "title": "The ONE Thing Every Pro Detailer Ignores (You're Bleeding Money)",
            "url": "https://www.youtube.com/watch?v=Qg__FLULcdI",
            "at": "2026-08-07T22:56:10Z",
            "thumbnail": "https://i.ytimg.com/vi/Qg__FLULcdI/hqdefault.jpg",
            "excerpt": null,
            "metric": 687,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:06:43.990Z",
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
            "metric": 597,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:06:43.990Z",
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
            "metric": 477,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:06:43.991Z",
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
            "metric": 1391,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:06:43.991Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "detailgroove makes YouTube videos on running a mobile detailing business for 252,000 subscribers and has a website, but no newsletter, store, or membership, and posting has slipped to 13 videos a month from 17 with recent views down 52%.",
        "headlineRestsOn": "252,000 on YouTube · YouTube channel · Own website · Newsletter · Store · Membership · 13 videos a month now, against 17 before that · the recent ones are getting 52% fewer views · \"How To Detail Cars in EXTREME Heat (Must Do For Mobile Detailers)\" (1,364 views) · \"This Will RUIN Your Mobile Detailing Business (Don't Do It)\" (1,928 views) · \"The REAL Math Behind Growing Your Detailing Business\" (514 views)",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/896cc8e0a896b78df1e7c50195d7cd99~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=bce5bedb&x-expires=1786885200&x-signature=7%2B2zO4K7Cz55gNjCv41iDB1YAdg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@fordtechmakuloco",
            "host": "tiktok.com",
            "followers": 31
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@fordtechmakuloco",
            "host": "youtube.com",
            "followers": 944000
          }
        ],
        "audience": {
          "total": 944000
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
                "value": "+45% vs baseline",
                "weightPct": 0,
                "detail": "3 videos a month now, against 2.1 before that — up 45%, they are posting more; the recent ones are getting 39% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Ford repair walkthroughs are a genuinely wanted category with an obviously repeatable format and clippable fix-it moments, and the 944k YouTube audience says the format works even though the scraped post text is uninformative."
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
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 70,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
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
            "surfacesChecked": 16,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 33,
            "note": "something at tiktok.com/@fordtechmakuloco — not confirmed as theirs",
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
            "quote": "Like to see repair video on 05 Ford Escspes",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Watch all your videos when are you going to make more repair videos showing how the problem is found and repaired on video?",
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
            "title": "Do not make the same mistake! #shorts",
            "url": "https://www.youtube.com/watch?v=e_2cwArGlvU",
            "at": "2026-08-13T17:29:55Z",
            "thumbnail": "https://i.ytimg.com/vi/e_2cwArGlvU/hqdefault.jpg",
            "excerpt": null,
            "metric": 14458,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:38.750Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "This Ford Explorer is a death trap!",
            "url": "https://www.youtube.com/watch?v=ZDCu5nIiL_c",
            "at": "2026-08-06T23:29:40Z",
            "thumbnail": "https://i.ytimg.com/vi/ZDCu5nIiL_c/hqdefault.jpg",
            "excerpt": null,
            "metric": 33341,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:38.750Z",
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
            "metric": 50527,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:38.750Z",
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
            "metric": 52507,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:38.751Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "This mechanic makes Ford repair diagnosis videos for 944,000 YouTube subscribers and has a website, but no newsletter, store, or membership to sell to them, and while he is posting more he is getting fewer views per video.",
        "headlineRestsOn": "944,000 on YouTube · YouTube channel, Own website · Newsletter, Store, Membership · 3 videos a month now, against 2.1 before that \the the the recent ones are getting 39% fewer views · \"Another Ford F-150 Differential FAILURE! #shorts\" · \"Attention Ford Owners: Do Not Ignore This Noise it Can Destroy Your Engine! #shorts\" · \"Always get a second or third opinion. It can save you thousands in unnecessary repairs! #shorts\"",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/94dab4518abb7162d1f3f92a8b977ee1~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=3374a7fc&x-expires=1786885200&x-signature=weN9exp%2BWgy%2BpEQdJ%2FFr7%2FctcpQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@lockedonnfl",
            "host": "tiktok.com",
            "followers": 3
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@lockedonnfl",
            "host": "youtube.com",
            "followers": 16800
          },
          {
            "name": "Website",
            "url": "https://lockedonpodcasts.com/podcasts/locked-on-nfl-tony-wiggins/",
            "host": "lockedonpodcasts.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 16800
        },
        "score": 21,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 21,
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
                "detail": "It's a daily NFL podcast — a repeatable 30-minute format in a category with huge built-in demand, and podcast episodes cut easily into clips, which is exactly what the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@lockedonnfl",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 56,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 30,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 25,
            "note": "not there · we looked in 3 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — lockedonpodcasts.com/podcasts/locked-on-nfl-tony-wiggins",
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
            "title": "Minnesota Vikings MUST PLAY Kyler Murray in Preseason & Deshaun Watson Gets FIRST SHOT for Browns",
            "url": "https://www.youtube.com/watch?v=MnEELzcXRck",
            "at": "2026-08-14T12:00:06Z",
            "thumbnail": "https://i.ytimg.com/vi/MnEELzcXRck/hqdefault.jpg",
            "excerpt": null,
            "metric": 23,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:06.457Z",
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
            "seenAt": "2026-08-14T13:10:15.128Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Cleveland Browns Begin Preseason as Starter Deshaun Watson  HEADLINES QB Uncertainty Around The NFL",
            "url": "https://www.youtube.com/watch?v=6J1iWBDb-5E",
            "at": "2026-08-13T18:00:06Z",
            "thumbnail": "https://i.ytimg.com/vi/6J1iWBDb-5E/hqdefault.jpg",
            "excerpt": null,
            "metric": 152,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:06.457Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Pittsburgh Steelers SCREW UP Quarterback Spot & Green Bay Packers Need to GROW UP to Win NFC",
            "url": "https://www.youtube.com/watch?v=rgG28O1hiHM",
            "at": "2026-08-13T12:00:06Z",
            "thumbnail": "https://i.ytimg.com/vi/rgG28O1hiHM/hqdefault.jpg",
            "excerpt": null,
            "metric": 378,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:06.458Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "lockedonnfl makes daily NFL and MLB video takes for 16,800 YouTube subscribers and runs their own website, but has no newsletter, store, membership, or podcast to sell to those fans.",
        "headlineRestsOn": "16,800 on YouTube · YouTube channel · Own website · Newsletter · Store · Membership · Podcast · \"Locked On NFL Top 100 Players of 2026\" · \"Locked On Top 100 MLB Players of 2026\" · \"Detroit Lions BAD INJURY LUCK CONTINUES & Cincinnati Bengals MUST START FAST this Regular Season\"",
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
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/4e71cd9267114144b435a9528b3ce549~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=66a2d589&x-expires=1786885200&x-signature=PmFfGh%2F3Wl4Zsx5%2FYaUwwMveIOE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@inalovelydream",
            "followers": 25600,
            "url": "https://www.tiktok.com/@inalovelydream",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/4e71cd9267114144b435a9528b3ce549~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=66a2d589&x-expires=1786885200&x-signature=PmFfGh%2F3Wl4Zsx5%2FYaUwwMveIOE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@inalovelydream",
            "host": "tiktok.com",
            "followers": 25600
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/scrubs-off-duty/id1646817604?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 25600
        },
        "score": 20,
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
            "score": 6,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "1 dead link they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "1 dead link they still publish — they tried, it broke — 6 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "Pop culture and blind-item gossip is a category with proven demand, and reading/decoding submitted blind items is an inherently clippable, endlessly repeatable video format — the 1.3m likes against 25.6k followers says the clips travel."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 63,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 95,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 61,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — https://podcasts.apple.com/us/podcast/scrubs-off-duty/id1646817604?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 53,
            "note": "they link to it themselves",
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
            "kind": "signal",
            "quote": "https://gmail.com",
            "platform": "link they publish",
            "url": "https://gmail.com",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
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
            "seenAt": "2026-08-14T13:09:08.763Z",
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
            "seenAt": "2026-08-14T13:09:08.763Z",
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
            "seenAt": "2026-08-14T13:09:08.763Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "inalovelydream makes encouragement content for nurses and other caregivers for 25,600 TikTok followers, and already runs a podcast and her own website, but has no YouTube channel, store, or membership.",
        "headlineRestsOn": "audience: 25,600 on TikTok · they have: Podcast, Own website · they do not have: YouTube channel, Store, Membership · \"HAPPY NURSES WEEK\" · \"You're Doing Enough.\" · \"I Cohosted a Self Care Event?\"",
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
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/2a64c8be36e48471b71b096831a65819~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e61eb8c6&x-expires=1786885200&x-signature=3m%2BzKxUqp8Gi2gagqaxe0eaMylA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@forensicdetailingchannel",
            "followers": 169,
            "url": "https://www.tiktok.com/@forensicdetailingchannel",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/2a64c8be36e48471b71b096831a65819~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e61eb8c6&x-expires=1786885200&x-signature=3m%2BzKxUqp8Gi2gagqaxe0eaMylA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@forensicdetailingchannel",
            "host": "tiktok.com",
            "followers": 169
          },
          {
            "name": "Membership",
            "url": "https://www.patreon.com/forensicdetailing",
            "host": "patreon.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 169
        },
        "score": 19,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 19,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no own website",
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
                "detail": "They're a detailing channel built on testing products hands-on, which squarely fits the brief's car-care-with-named-products angle, though the actual per-video format repetition is unconfirmed from what's shown here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 36,
            "note": "something at youtube.com/c/forensicdetailingchannel — not confirmed as theirs",
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
            "state": "verified_absent",
            "surfacesChecked": 65,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 42,
            "note": "found it — patreon.com/forensicdetailing · that page links back to their TikTok",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 25,
            "note": "something at creators.spotify.com/pod/show/forensic-detailing — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 52,
            "note": "not there · we looked in 3 places · 1 wouldn't answer",
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
        "headline": "Forensicdetailingchannel runs a YouTube channel with a paid membership and 169 TikTok followers, but has no newsletter, store, podcast, or own website.",
        "headlineRestsOn": "user handle: forensicdetailingchannel · audience: 169 on TikTok · they have: YouTube channel, Membership · they do not have: Newsletter, Store, Podcast, Own website",
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
        "sourceWhy": null
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
            "followers": 2607,
            "url": "https://www.tiktok.com/@ratarossa",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7324875266119008261~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=98c9dc70&x-expires=1786885200&x-signature=TeK3uxta6V1EwB2d3%2BHH3t5WvgE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@ratarossa",
            "host": "tiktok.com",
            "followers": 2607
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@ratarossa",
            "host": "youtube.com",
            "followers": 289000
          }
        ],
        "audience": {
          "total": 289000
        },
        "score": 19,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 19,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no podcast",
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
                "value": "+93% vs baseline",
                "weightPct": 0,
                "detail": "4 videos a month now, against 2.1 before that — up 93%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Buying and fixing cheap, broken Ferraris is a repeatable series format with obvious clippable moments in a category — supercars on a budget — that people reliably watch, and the 289k YouTube base shows the format lands."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@ratarossa",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 69,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 44,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at patreon.com/ratarossa — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 13,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 33,
            "note": "something at tiktok.com/@ratarossa — not confirmed as theirs",
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
            "title": "Was My Ferrari 308 Just Fixed With a Simple £18 Part !",
            "url": "https://www.youtube.com/watch?v=_gn0P3fl0ao",
            "at": "2026-08-09T18:00:15Z",
            "thumbnail": "https://i.ytimg.com/vi/_gn0P3fl0ao/hqdefault.jpg",
            "excerpt": null,
            "metric": 84233,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:48.968Z",
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
            "metric": 65270,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:48.968Z",
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
            "metric": 80905,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:48.968Z",
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
            "metric": 84225,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:48.968Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Ratarossa builds classic Ferrari restorations for 289,000 YouTube subscribers, with recent videos between 21,866 and 103,343 views, and has doubled output to 4 videos a month while selling only memberships through his own site, no newsletter, store, or podcast.",
        "headlineRestsOn": "289,000 on YouTube · YouTube channel, Membership, Own website · Newsletter, Store, Podcast · 4 videos a month now, against 2.1 before that — up 93%, they are posting more · \"Was My Ferrari 308 Just Fixed With a Simple £18 Part !\" (21,866 views) · \"Barn Find Ferrari 512 BBi Restoration - The Shocking Result Attempting When to Repair Rusty Parts\" (103,343 views)",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a2eb002be4c79599a080722aa8031f36~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=fc2e918d&x-expires=1786885200&x-signature=%2B006azi8hYwQZ5uIDqfvm3jm2HA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@rj_young",
            "host": "tiktok.com",
            "followers": 12000
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@rj_young",
            "host": "youtube.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/adapt-and-respond-with-rj-young-a-college-football-podcast/id1346315892?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 12000
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
                "value": "+1193% vs baseline",
                "weightPct": 0,
                "detail": "18 posts a month now, against 1.4 before that — up 1193%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He makes short-form video around college football — a category with huge built-in demand — and already runs a repeatable named show format, with 12k TikTok followers and ~294k likes showing the clips land."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 47,
            "note": "found it — youtube.com/@rj_young",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 87,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 73,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 44,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — https://podcasts.apple.com/us/podcast/adapt-and-respond-with-rj-young-a-college-football-podcast/id1346315892?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 55,
            "note": "not there · we looked in 5 places",
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
            "publication": "Adapt and Respond with RJ Young: A College Football Podcast",
            "kind": "episode",
            "title": "Ryan Day & Ohio State Buckeyes land 2028's No. 1 recruit Christopher Vargas",
            "url": "https://www.youtube.com/@RJYoungShow",
            "at": "2026-08-09T17:45:51.000Z",
            "thumbnail": null,
            "excerpt": "alshi Promo Code: RJ Kalshi Offer Link: http://kalshi.com/r/RJ \n This is the official YouTube channel for everything Adapt & Respond. RJ gives his strong opinions on the biggest topics in college football, sports and entertainment every week. Adapt & Respond: A College Football Podcast airs at 11 p.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:08:20.383Z",
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
            "seenAt": "2026-08-14T13:08:12.998Z",
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
            "seenAt": "2026-08-14T13:08:12.998Z",
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
            "seenAt": "2026-08-14T13:08:12.998Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "rj_young posts college football takes to 12,000 TikTok followers and runs a YouTube channel, podcast, and membership, but has no newsletter, store, or site of his own.",
        "headlineRestsOn": "handle: rj_young · audience: 12,000 on TikTok · they have: YouTube channel, Membership, Podcast · they do not have: Newsletter, Store, Own website · \"RJ Reacts: Top 10 QBs to Monitor + Deion Sanders feels no pressure at Colorado\" · \"Ryan Day & Ohio State Buckeyes land 2028's No. 1 recruit Christopher Vargas\" · \"Oregon's Dylan Raiola: Choice words for Nebraska | Selling on Belichick and UNC | Top 5 Heisman Dive\"",
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
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@celebriteablinds",
            "host": "youtube.com",
            "followers": 24200
          }
        ],
        "audience": {
          "total": 24200
        },
        "score": 19,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 19,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no podcast",
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
                "detail": "we could not read their posting rate — they post often enough that 200 videos only reach back 109 days — not far enough behind the last 90 to compare against"
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
                "detail": "Reading celebrity blind items is inherently clippable, it's the same repeatable format every post, and celebrity gossip is a category with obvious demand — the recent-post data is unreadable but the bio and multiple TikTok accounts make the format clear."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 40,
            "note": "found it — youtube.com/@celebriteablinds",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 98,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 68,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 20,
            "note": "something at patreon.com/CelebriteaBlinds — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 46,
            "note": "something at tiktok.com/@celebriteablinds — not confirmed as theirs",
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
            "title": "Ariana Grande CHEATING With ANOTHER MARRIED MAN #blinditems",
            "url": "https://www.youtube.com/watch?v=qwRLS9ptSLE",
            "at": "2026-08-12T17:18:30Z",
            "thumbnail": "https://i.ytimg.com/vi/qwRLS9ptSLE/hqdefault.jpg",
            "excerpt": null,
            "metric": 6444,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:17.222Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Confirmed Reveals : August 11 #blinditems",
            "url": "https://www.youtube.com/watch?v=gx_ViMnN1rs",
            "at": "2026-08-12T17:18:13Z",
            "thumbnail": "https://i.ytimg.com/vi/gx_ViMnN1rs/hqdefault.jpg",
            "excerpt": null,
            "metric": 15522,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:17.222Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Blind Item Reveals : August 11 ",
            "url": "https://www.youtube.com/watch?v=4SQEx-w2tJM",
            "at": "2026-08-12T17:17:26Z",
            "thumbnail": "https://i.ytimg.com/vi/4SQEx-w2tJM/hqdefault.jpg",
            "excerpt": null,
            "metric": 8188,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:17.222Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Daily Blind Items : Tuesday August 11 ",
            "url": "https://www.youtube.com/watch?v=U6vBSf-gx9I",
            "at": "2026-08-12T17:16:58Z",
            "thumbnail": "https://i.ytimg.com/vi/U6vBSf-gx9I/hqdefault.jpg",
            "excerpt": null,
            "metric": 492,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:17.222Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Celebriteablinds posts daily celebrity blind items to 24,200 YouTube subscribers with memberships and a website already running, but no newsletter, store, or podcast yet.",
        "headlineRestsOn": "24,200 on YouTube · YouTube channel, Membership, Own website · Newsletter, Store, Podcast · \"Daily Blind Items : August 6 \" (2,554 views) · \"Daily Blind Items : August 5 #blinditems\" (3,156 views) · \"Blind Item Reveals : August 4 #blinditems\" (10,485 views) · \"Blind Item Reveals : August 5 \" (8,685 views)",
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
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@robertgriffiniii",
            "host": "youtube.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/outta-pocket-with-rg3/id1707075924?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 0
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
                "value": "+24% vs baseline",
                "weightPct": 0,
                "detail": "4.3 posts a month now, against 3.5 before that — up 24%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's a Heisman-winning, Pro Bowl QB running a named show ('Outta Pocket RG3') — football commentary is a category people clearly want and a hosted show is an inherently repeatable, clip-friendly format, even though the scraped bio is stale and no actual posts are visible to confirm the cadence."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — youtube.com/@robertgriffiniii",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 54,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 41,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/outta-pocket-with-rg3/id1707075924?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 14,
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
            "publication": "Outta Pocket with RG3",
            "kind": "episode",
            "title": "Reggie Bush on the REAL REASON Hall of Famer Drew Brees Changed His Career Forever",
            "url": null,
            "at": "2026-08-12T15:49:00.000Z",
            "thumbnail": null,
            "excerpt": "In this Outta Pocket Best Of, Reggie Bush joins for an emotional and unfiltered conversation about his Heisman Trophy, his fight with the NCAA, and the moments that shaped his legendary football career. Reggie opens up about getting his Heisman Trophy back, why he’s still fighting for the truth 20 y",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:22.558Z",
            "status": null
          },
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
            "seenAt": "2026-08-14T13:10:22.558Z",
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
            "seenAt": "2026-08-14T13:10:22.558Z",
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
            "seenAt": "2026-08-12T15:29:48.700Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Robert Griffin III breaks down NFL quarterbacks, playoff paths and league talk on a YouTube channel and a podcast, and he sells nothing directly: no newsletter, no store, no membership.",
        "headlineRestsOn": "YouTube channel · Podcast · Newsletter · Store · Membership · \"The Cleveland Browns Need to Name Sheduer Sanders as Their Starter + Jake Paul\\u2019s NFL Dream and Why Arch Manning Earned the Hype\" · \"How the Bears, 49ers and Patriots win the Super Bowl and How the Ravens and Commanders keep the QB healthy\" · \"World Cup Final Recap + NFL-NBA Dream Soccer team + NFL Training Camps Myths\"",
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
            "followers": 3040,
            "url": "https://www.tiktok.com/@upandadams",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/33b697419bfcfe8e25dc70eeb2a9a1fe~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f64be951&x-expires=1786885200&x-signature=LlWE3nLWJIeoJlnqv%2FeD5%2FN5pA0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@upandadams",
            "host": "tiktok.com",
            "followers": 3040
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@upandadams",
            "host": "youtube.com",
            "followers": 1
          }
        ],
        "audience": {
          "total": 3040
        },
        "score": 19,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 19,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no store, no membership",
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
                "detail": "He's posting short travel videos in a category people genuinely follow, with a built-in repeatable premise — half the year at the Grand Canyon North Rim, half in Georgia — and nothing visible here is wrong for this brief, though the actual content and edit quality are unconfirmed since only follower counts and the empty YouTube channel are visible."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 18,
            "note": "found it — youtube.com/@upandadams",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 63,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 3 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 30,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 12,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 18,
            "note": "something at upandadams.com — not confirmed as theirs",
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
        "headline": "upandadams runs a podcast, a YouTube channel with 1 subscriber, and their own website, and has 3,040 followers on TikTok, but no newsletter, store, or membership yet.",
        "headlineRestsOn": "3,040 on TikTok · 1 on YouTube · YouTube channel · Podcast · Own website · they do not have: Newsletter, Store, Membership",
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
            "followers": 284700,
            "url": "https://www.tiktok.com/@clemyntine",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0c98a9ca4fb4a859eea3b1a540062533~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f3de3c9a&x-expires=1786885200&x-signature=07Dvd%2BspW32KBGA1h8TBVgNm4QI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
          },
          {
            "name": "Bluesky profile",
            "handle": "@clemyntine",
            "followers": 2,
            "url": "https://bsky.app/profile/clemyntine.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:buptrcdoxxeatnhfin44ytbr/bafkreibvvyzrmwjkpblanktn3qwoshwqegh3qrq5iz3gub2nhfrrcfuvzy",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the Bluesky to the TikTok, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@clemyntine",
            "host": "tiktok.com",
            "followers": 284700
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@clemyntine",
            "host": "youtube.com",
            "followers": 4
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/clemyntine.bsky.social",
            "host": "bsky.app",
            "followers": 2
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/a-date-with-dateline/id1244348213?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Libsyn",
            "url": "https://eaf71035-63b4-4dde-bc5a-5aec8b3ff54f.libsyn.com/secrets-on-the-emerald-coast-s34-ep49",
            "host": "eaf71035-63b4-4dde-bc5a-5aec8b3ff54f.libsyn.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 284700
        },
        "score": 18,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 18,
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
                "value": "+4% vs baseline",
                "weightPct": 0,
                "detail": "4.3 posts a month, steady against 4.1 before that — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Pop culture history deep dives and gossip blinds are a category with real demand, delivered in a repeatable short-video format that clearly clips well — 19m likes on TikTok says the format lands."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 18,
            "note": "found it — youtube.com/@clemyntine",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 96,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 61,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/a-date-with-dateline/id1244348213?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 50,
            "note": "not there · we looked in 3 places",
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
            "publication": "A Date With Dateline",
            "kind": "episode",
            "title": "Secrets on the Emerald Coast S.34 Ep.49",
            "url": "https://eaf71035-63b4-4dde-bc5a-5aec8b3ff54f.libsyn.com/secrets-on-the-emerald-coast-s34-ep49",
            "at": "2026-08-12T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "The One With Dancing Sprites, a Godly Throuple, and So Many Church Secrets We Needed A Tally! AKA SECRETS ON THE EMERALD COAST!\n Official Description from NBCU: When a young mother disappears after leaving her infant in the care of her local pastor and his wife, Florida detectives search for her for",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:09:22.285Z",
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
            "seenAt": "2026-08-14T13:09:16.608Z",
            "status": null
          },
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
            "seenAt": "2026-08-14T13:09:22.285Z",
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
            "seenAt": "2026-08-14T13:09:22.285Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "clemyntine puts out a deep-numbered episodic podcast (episodes like \"The Day Dee Disappeared S.34 Ep.63\") to 284,700 followers on TikTok, but has only 4 on YouTube and 2 on Bluesky and no newsletter, store, membership, or own website to move that audience onto.",
        "headlineRestsOn": "284,700 on TikTok · 4 on YouTube · 2 on Bluesky · YouTube channel · Podcast · Newsletter · Store · Membership · Own website · \"The Day Dee Disappeared S.34 Ep.63\"",
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
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7351751250926387246~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4cdf9498&x-expires=1786885200&x-signature=8tfGOlVPYVpS8D2dWY4ZQwpBcYo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@yvanlacroix",
            "followers": 559,
            "url": "https://www.tiktok.com/@yvanlacroix",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7351751250926387246~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4cdf9498&x-expires=1786885200&x-signature=8tfGOlVPYVpS8D2dWY4ZQwpBcYo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@yvanlacroix",
            "host": "tiktok.com",
            "followers": 559
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-auto-detailing-podcast/id903505596?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Libsyn",
            "url": "https://autodetailingpodcast.libsyn.com/5-ceramic-spray-mistakes-that-ruin-your-results",
            "host": "autodetailingpodcast.libsyn.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 559
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
                "detail": "Detailing is a proven satisfying-visuals category and a teacher/consultant naturally has a repeatable lesson format, and nothing visible here is wrong for the brief — though I should say the actual posts aren't visible, so the clippability of his current work is unconfirmed rather than proven."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 40,
            "note": "something at substack.com/@yvanlacroix — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 46,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-auto-detailing-podcast/id903505596?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
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
            "seenAt": "2026-08-14T13:07:01.435Z",
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
            "seenAt": "2026-08-14T13:07:01.435Z",
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
            "seenAt": "2026-08-14T13:07:01.435Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "yvanlacroix teaches car detailing on TikTok to 559 followers and runs a newsletter and podcast, but has no store, membership, or website to sell the products he keeps recommending.",
        "headlineRestsOn": "audience: 559 on TikTok · they have: Newsletter, Podcast · they do not have: Store, Membership, Own website · \"5 Ceramic Spray Mistakes That Ruin Your Results\" · \"If I Had to Start My Detailing Business Over, I'd Buy These 6 Things First\" · \"Why Simple Detailing Products Feel So Confusing\"",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=429df237&x-expires=1786885200&x-signature=f8itnQT%2Br%2BAizjSgJ3OV2CLkl7E%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@50skid",
            "host": "tiktok.com",
            "followers": null
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@50skid",
            "host": "youtube.com",
            "followers": 186000
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
                "weightPct": 97,
                "detail": "3 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "6 purchase-intent comments",
                "weightPct": 3,
                "detail": "6 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "detail": "He makes repeatable how-to videos on car repair, furniture building and home remodeling — a demonstrable, clippable format in a category people actively search for, with 186k YouTube subscribers to show it lands."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 30,
            "note": "found it — youtube.com/@50skid",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 40,
            "note": "something at substack.com/@50skid — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 3 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at patreon.com/50skid — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 24,
            "note": "something at youtube.com/c/50sKidAuto — not confirmed as theirs",
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
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
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
            "title": "Changing Shocks and Struts! - BMW 335i E90 Suspension DIY",
            "url": "https://www.youtube.com/watch?v=RSKmv4D4Sws",
            "at": "2024-05-19T15:00:30Z",
            "thumbnail": "https://i.ytimg.com/vi/RSKmv4D4Sws/hqdefault.jpg",
            "excerpt": null,
            "metric": 65884,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:46.477Z",
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
            "metric": 56855,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:46.477Z",
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
            "metric": 25639,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:46.478Z",
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
            "metric": 31140,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:46.478Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "50skid makes BMW repair how-to videos for 186,000 YouTube subscribers, with recent uploads on suspension and steering rack work pulling 25,587 to 65,667 views, and already runs a newsletter, a membership, and his own website, but sells no products through a store.",
        "headlineRestsOn": "186,000 on YouTube · YouTube channel · Newsletter · Membership · Own website · Store · \"Changing Shocks and Struts! - BMW 335i E90 Suspension DIY\" (65,667 views) · \"I rebuilt my leaking steering rack -- BMW E46 Steering Rack Rebuild DIY\" (56,638 views) · \"Spinning Ball Joint Tip\" (25,587 views) · \"BMW E90 Front Suspension Refresh DIY\" (30,978 views)",
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
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/667e273b519e276d83f8742ecf5a03ec~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9d85b8c9&x-expires=1786885200&x-signature=rhNRJzREaAvoUMx0ts64BgsPl2k%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@magic.maike",
            "followers": 4867,
            "url": "https://www.tiktok.com/@magic.maike",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/667e273b519e276d83f8742ecf5a03ec~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9d85b8c9&x-expires=1786885200&x-signature=rhNRJzREaAvoUMx0ts64BgsPl2k%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@magic.maike",
            "host": "tiktok.com",
            "followers": 4867
          }
        ],
        "audience": {
          "total": 4867
        },
        "score": 16,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 16,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no own website, no membership",
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
                "detail": "Pop culture commentary is a category with real demand, the TikTok short-video format is inherently repeatable and clippable, and 720k likes against fewer than 5k followers says the clips travel well beyond the follower base."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 58,
            "note": "something at tiktok.com/@magic.maike — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 43,
            "note": "4 of 6 places wouldn't answer; only 2 of the 5 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 52,
            "note": "not there · we looked in 3 places · 1 wouldn't answer",
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
        "headline": "magic.maike has 4,867 followers on TikTok and a YouTube channel, but no store, membership, podcast, or own website, so there is room to build something they own.",
        "headlineRestsOn": "audience: 4,867 on TikTok · they have: YouTube channel · they do not have: Store, Membership, Podcast, Own website",
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
            "followers": 114600,
            "url": "https://www.tiktok.com/@isleepwitsockson",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0816bf7c97c5aeff48358448ae36e349~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=eb3545f2&x-expires=1786885200&x-signature=1p%2BWn8SOgxZwaa5VVfqtN2gXHds%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@isleepwitsockson",
            "host": "tiktok.com",
            "followers": 114600
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@isleepwitsockson",
            "host": "youtube.com",
            "followers": 24600
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-old-switcharoo-gaming-retro-with-mike-and/id1702798095?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Spotify",
            "url": "https://podcasters.spotify.com/pod/show/theoldswitcharoo/episodes/S4E15-Double-Dragon-and-Double-Dragon-2--or--Brothers-in-Arms-e3n6iec",
            "host": "podcasters.spotify.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 114600
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
                "value": "−20% vs baseline",
                "weightPct": 0,
                "detail": "4 videos a month now, against 5 before that — down 20% — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Sports talk and athlete training is a category with real demand, and his short-video output on TikTok — 114k followers and 14m likes — shows a repeatable, clippable format that's already landing."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 44,
            "note": "found it — youtube.com/@isleepwitsockson",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 88,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 67,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 47,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-old-switcharoo-gaming-retro-with-mike-and/id1702798095?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 48,
            "note": "something at tiktok.com/@isleepwitsockson — not confirmed as theirs",
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
            "publication": "The Old SwitchAroo: Gaming Retro with Mike and Jaymo |A Nintendo Switch Online retro gaming podcast",
            "kind": "episode",
            "title": "S4E15: Double Dragon and Double Dragon 2 -or- Brothers in Arms",
            "url": "https://podcasters.spotify.com/pod/show/theoldswitcharoo/episodes/S4E15-Double-Dragon-and-Double-Dragon-2--or--Brothers-in-Arms-e3n6iec",
            "at": "2026-08-12T09:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Scharonne from 40 Something Gamers brings a beat down in beat’em ups Double Dragon (NES, 1988) and Double Dragon II: The Revenge (NES, 1990) with Mike and Jaymo as part of The Old SwitchAroo’s epic quest to research and review every retro game in Nintendo Switch Online’s Nintendo Classics catalog.\n ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:08:35.420Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The PERFECT fall camp basket 💯 #football #fallcamp #sports #JAYMO",
            "url": "https://www.youtube.com/watch?v=MnIbmbkIgaQ",
            "at": "2026-08-04T15:56:57Z",
            "thumbnail": "https://i.ytimg.com/vi/MnIbmbkIgaQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 429,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:08:26.106Z",
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
            "seenAt": "2026-08-14T13:08:35.420Z",
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
            "seenAt": "2026-08-14T13:08:35.421Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "isleepwitsockson runs a retro game podcast now in its fourth season, with 114,600 followers on TikTok and 24,600 on YouTube, a website, and DraftKings promo code reads, but no newsletter, store, or membership, and posting is down 20% to 4 videos a month.",
        "headlineRestsOn": "114,600 on TikTok · 24,600 on YouTube · YouTube channel · Podcast · Own website · Newsletter · Store · Membership · 4 videos a month now, against 5 before that \":414: Fire Emblem- Path of Radiance - or- Hitting the Griddy\" · \"Use code \"JAYMO\" to get up to $200 in Bonus Rewards as a new DraftKings customer @DraftKings\" · down 20%",
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
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e91679ca13e0ac33d00d7d29ae879c31~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=03e6cfca&x-expires=1786885200&x-signature=RkJLkdnV7tVx%2F3lgTS21TPBTOIE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@thoughtswgracie2.0",
            "followers": 43600,
            "url": "https://www.tiktok.com/@thoughtswgracie2.0",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e91679ca13e0ac33d00d7d29ae879c31~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=03e6cfca&x-expires=1786885200&x-signature=RkJLkdnV7tVx%2F3lgTS21TPBTOIE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@thoughtswgracie2.0",
            "host": "tiktok.com",
            "followers": 43600
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/kerusso-daily-devotional/id1395536128?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://linktr.ee/thoughtswithgracie",
            "host": "linktr.ee",
            "followers": null
          }
        ],
        "audience": {
          "total": 43600
        },
        "score": 15,
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
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "19 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "19 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "22 posts a month, steady against 22 before that — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
            "state": "present",
            "surfacesChecked": 64,
            "note": "something at tiktok.com/@thoughtswithgracie — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 43,
            "note": "3 of 6 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 43,
            "note": "2 of 4 places wouldn't answer; only 2 of the 3 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — https://podcasts.apple.com/us/podcast/kerusso-daily-devotional/id1395536128?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 45,
            "note": "they link to it themselves",
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
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-14",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://linktr.ee/thoughtswithgracie",
            "platform": "link they publish",
            "url": "https://linktr.ee/thoughtswithgracie",
            "observedAt": "2026-08-14",
            "engine": "rule",
            "label": "abandonment"
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
            "platform": "Podcast",
            "publication": "Kerusso Daily Devotional",
            "kind": "episode",
            "title": "Refined by Fire",
            "url": null,
            "at": "2026-08-14T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Shadrach, Meshach, and Abednego were three young men from Judah who found themselves in a heated situation.\n They were brought into the court of King Nebuchadnezzar II, and ordered to bow before the king’s golden image. The alternative was a one-way ticket to the fiery furnace.\n The king’s command w",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:09:01.434Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Kerusso Daily Devotional",
            "kind": "episode",
            "title": "Forever His",
            "url": null,
            "at": "2026-08-13T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Have you ever pondered what it means to be ‘born again’ as a Christian believer?\n When we give our hearts to the Lord, asking Him to forgive our sins and guide our lives, we are making God a promise: we no longer claim the right to follow our own paths or to focus on our own agendas.\n We are redeeme",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:09:01.434Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Kerusso Daily Devotional",
            "kind": "episode",
            "title": "The Way Ahead",
            "url": null,
            "at": "2026-08-12T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Are you the enviable sort of person who was born with an innate sense of direction?\n Some of us know instinctively whether we are traveling North, South, East, or West. And some of us...would be lucky to find our way out of a paper bag, even with a map in hand.\n If you’ve ever been lost on a country",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:09:01.435Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Kerusso Daily Devotional",
            "kind": "episode",
            "title": "Deadly Trails",
            "url": null,
            "at": "2026-08-11T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "It was late at night, and Kelly’s family was on the way to visit family out of state. It was raining, and they had just entered a construction zone. Narrow two-lane traffic became even narrower as they entered a bridge.\n Suddenly, a deer materialized in the headlights. Orange cones and flashing ligh",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-12T20:26:35.328Z",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/b5f874fda0b0d3e1a3236948c2eefd86~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c1e67be8&x-expires=1786885200&x-signature=nyrzyE1OtzJe5G7WatzWoS2EStE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@autofanatic",
            "host": "tiktok.com",
            "followers": null
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@autofanatic",
            "host": "youtube.com",
            "followers": 412
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
                "detail": "What's visible is a São Paulo auto shop's booking pitch — a WhatsApp number and a service promise — with an empty TikTok (0 posts, 0 likes) and no sign of any repeatable clippable format, so there's no content offering here to call about even though automotive is a category people want."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@autofanatic",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 70,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 31,
            "note": "something at autofanatic.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 2 places",
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
            "surfacesChecked": 28,
            "note": "something at autofanatic.com — not confirmed as theirs",
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
            "title": "Vitrificação Automotiva Em Guarulhos [Polimento + Proteção] | AutoFanatic.com.br",
            "url": "https://www.youtube.com/watch?v=ExA24VGXqz0",
            "at": "2021-04-18T15:33:09Z",
            "thumbnail": "https://i.ytimg.com/vi/ExA24VGXqz0/hqdefault.jpg",
            "excerpt": null,
            "metric": 10147,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:06:44.351Z",
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
            "seenAt": "2026-08-14T13:06:44.351Z",
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
            "seenAt": "2026-08-14T13:06:44.351Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "AutoFanatic makes Portuguese-language videos about car paint correction and ceramic coating in Guarulhos, and one of them pulled 10,147 views against a 412-subscriber channel, so the demand runs through a store and his own site with no newsletter, membership, or podcast to hold the people who watch.",
        "headlineRestsOn": "audience: 412 on YouTube · YouTube channel, Store, Own website · they do not have: Newsletter, Membership, Podcast · \"Vitrifica\ffff\ffo Automotiva Em Guarulhos [Polimento + Prote\ffff\ffo] | AutoFanatic.com.br\" (10,147 views)",
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
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/e54fe4c0b105ec82892d057b44ca98af~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d69a03f0&x-expires=1786885200&x-signature=BVhKUcz%2BkmR9dzUcDwXSZpjUPJQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@stiffmiesters.picks",
            "followers": 4437,
            "url": "https://www.tiktok.com/@stiffmiesters.picks",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/e54fe4c0b105ec82892d057b44ca98af~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d69a03f0&x-expires=1786885200&x-signature=BVhKUcz%2BkmR9dzUcDwXSZpjUPJQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@stiffmiesters.picks",
            "host": "tiktok.com",
            "followers": 4437
          }
        ],
        "audience": {
          "total": 4437
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
                "value": "No store, no youtube channel, no podcast",
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
                "detail": "Daily sports betting picks are inherently clippable and endlessly repeatable, and betting is a category with obvious hungry demand, so this clears the bar the brief actually sets."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 65,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 41,
            "note": "3 of 6 places wouldn't answer; only 3 of the 5 places we need actually answered",
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
            "state": "present",
            "surfacesChecked": 43,
            "note": "something at whop.com/joined/stiffmiester-s-picks — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 37,
            "note": "something at stiffmiesters.picks.com — not confirmed as theirs",
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
        "headline": "stiffmiesters.picks has 4,437 followers on TikTok and already runs a membership on their own website, with no YouTube channel, store, or podcast yet, so a call can start with what they sell next.",
        "headlineRestsOn": "audience: 4,437 on TikTok · Membership · Own website · YouTube channel · Store · Podcast",
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
        "id": "c_worth_call_they_make_2__unicouniuni3",
        "name": "unicouniuni3",
        "handle": "@unicouniuni3",
        "initials": "UN",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lxtaLJ4g4XZYT9D_iQwTQL3c2lzJza3Icy1vHyvKClkg=s900-c0x00ffffff-no-rj",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@unicouniuni3",
            "followers": 5,
            "url": "https://www.tiktok.com/@unicouniuni3",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/f3977615ccf62a06aeb8b532b28dfb2b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b6b41e1f&x-expires=1786885200&x-signature=jNc1KB64MMpPKf%2FXD4ZCf6wiFCc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@unicouniuni3",
            "followers": 714000,
            "url": "https://www.youtube.com/@unicouniuni3",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lxtaLJ4g4XZYT9D_iQwTQL3c2lzJza3Icy1vHyvKClkg=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "Bluesky profile",
            "handle": "@unicouniuni3",
            "followers": 166489,
            "url": "https://bsky.app/profile/unicouniuni3.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:5ysft3tkkncrn3xohxwqybxl/bafkreiesortaml4n4fy4unnkf3qkynynzapl6nwrsmomye5u5yneseuzka",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the Bluesky to the YouTube, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@unicouniuni3",
            "host": "tiktok.com",
            "followers": 5
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@unicouniuni3",
            "host": "youtube.com",
            "followers": 714000
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/unicouniuni3.bsky.social",
            "host": "bsky.app",
            "followers": 166489
          },
          {
            "name": "Store",
            "url": "https://youni.store/shop",
            "host": "youni.store",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://lit.link/unicouniuni3",
            "host": "lit.link",
            "followers": null
          }
        ],
        "audience": {
          "total": 714000
        },
        "score": 14,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 14,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no membership, no podcast",
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
                "value": "+15% vs baseline",
                "weightPct": 0,
                "detail": "21 videos a month now, against 18 before that — up 15%, they are posting more; the recent ones are getting 21% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "A cat channel built around named, recurring characters with 714K YouTube subscribers is clippable, endlessly repeatable, and pet content is a category people plainly want."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — youtube.com/@unicouniuni3",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — youni.store/shop · that page links back to their YouTube",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — lit.link/unicouniuni3 · that page links back to their YouTube",
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
            "quote": "btw I subbed!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "We need a loaf plush of him or with paws that does the same :3",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
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
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Very excited Uni! :3",
            "url": "https://bsky.app/profile/unicouniuni3.bsky.social/post/3msyxb5wm6s2v",
            "at": "2026-08-14T00:57:33.124Z",
            "thumbnail": null,
            "excerpt": "Very excited Uni! :3",
            "metric": 4684,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:03.848Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Everyday moments with Uni",
            "url": "https://www.youtube.com/watch?v=F5w_lLv2j4k",
            "at": "2026-08-12T14:32:16Z",
            "thumbnail": "https://i.ytimg.com/vi/F5w_lLv2j4k/hqdefault.jpg",
            "excerpt": null,
            "metric": 71267,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:11:03.847Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Uni passed his final follow-up test, and he has fully recovered from his cystitis! It’s been a long few months",
            "url": "https://bsky.app/profile/unicouniuni3.bsky.social/post/3msxpyhru422b",
            "at": "2026-08-13T13:14:45.533Z",
            "thumbnail": null,
            "excerpt": "Uni passed his final follow-up test, and he has fully recovered from his cystitis! It’s been a long few months, and now we’re just hoping it never comes back. Thank you all so much for your kind words and for caring about Uni! It really meant a lot to us!",
            "metric": 8704,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:03.848Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "We demand treats!",
            "url": "https://bsky.app/profile/unicouniuni3.bsky.social/post/3mswfpruygk2r",
            "at": "2026-08-13T00:38:16.978Z",
            "thumbnail": null,
            "excerpt": "We demand treats!",
            "metric": 5229,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:03.849Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Unicouniuni3 posts short cat videos to 714,000 YouTube subscribers and 166,489 followers on Bluesky, and sells through a store and their own site, but has no newsletter, membership, or podcast, so there is no owned channel to reach those viewers directly even as output rose to 21 videos a month and recent views fell 21%.",
        "headlineRestsOn": "714,000 on YouTube · 166,489 on Bluesky · YouTube channel · Store · Own website · Newsletter · Membership · Podcast · 21 videos a month now · the recent ones are getting 21% fewer views · \"He sleeps better with his friend\" (37,675 views) · \"Why he so :3\" (68,655 views) · \"His way of saying, \n\"I love you\"\" (131,380 views)",
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
        "id": "c_worth_call_they_make_2__jocelynanderson",
        "name": "jocelynanderson",
        "handle": "@jocelynanderson",
        "initials": "JO",
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:7z6ecty3w4vsovvvhlv7nnee/bafkreihmzxhustkaongpsl33plu2csrnnnwa5ytf5ogdf3se45iljlduiy",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@jocelynanderson",
            "followers": 69,
            "url": "https://www.tiktok.com/@jocelynanderson",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d19e2896&x-expires=1786885200&x-signature=5tPzRoKSNstBmHD7jyxTj7yLMmU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the Bluesky, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@jocelynanderson",
            "followers": 4,
            "url": "https://www.youtube.com/@jocelynanderson",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kTjC-w5MPyzDkO3rNkyEwRsEGwPQ_apKf-3nj4DOoVfHA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the Bluesky, so it is not added in"
          },
          {
            "name": "Bluesky profile",
            "handle": "@jocelynanderson",
            "followers": 107180,
            "url": "https://bsky.app/profile/jocelynanderson.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:7z6ecty3w4vsovvvhlv7nnee/bafkreihmzxhustkaongpsl33plu2csrnnnwa5ytf5ogdf3se45iljlduiy",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@jocelynanderson",
            "host": "tiktok.com",
            "followers": 69
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@jocelynanderson",
            "host": "youtube.com",
            "followers": 4
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/jocelynanderson.bsky.social",
            "host": "bsky.app",
            "followers": 107180
          },
          {
            "name": "Newsletter",
            "url": "https://jocelynanderson.substack.com/",
            "host": "jocelynanderson.substack.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 107180
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
                "value": "+22% vs baseline",
                "weightPct": 0,
                "detail": "82 posts a month now, against 67 before that — up 22%, they are posting more — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "All that's visible is boilerplate scrape text and an empty TikTok (0 likes, no posts), so there's no actual clippable content or repeatable format to point to — bird photography is a fine category, but nothing shows they're making anything in it."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — youtube.com/@jocelynanderson",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — jocelynanderson.substack.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 13,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 3 places · 1 wouldn't answer",
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
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "A female Ruby-throated Hummingbird flares her tail feathers. These birds have one of the lowest feather counts",
            "url": "https://bsky.app/profile/jocelynanderson.bsky.social/post/3msyrcsngnk2j",
            "at": "2026-08-13T23:11:05.949Z",
            "thumbnail": null,
            "excerpt": "A female Ruby-throated Hummingbird flares her tail feathers. These birds have one of the lowest feather counts of any bird species, measuring in at 940 feathers in a 1936 study by Alexander Wetmore.",
            "metric": 1004,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:32.027Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Hand feeding a Cardinal (slow mo)",
            "url": "https://www.youtube.com/watch?v=AnZtjmxrr6I",
            "at": "2017-07-24T23:44:23Z",
            "thumbnail": "https://i.ytimg.com/vi/AnZtjmxrr6I/hqdefault.jpg",
            "excerpt": null,
            "metric": 58,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:11:32.026Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "I was taking this photo for the Orange Sulphur butterfly, but editing the photos later I noticed a caterpillar",
            "url": "https://bsky.app/profile/jocelynanderson.bsky.social/post/3msynekkuns2h",
            "at": "2026-08-13T22:00:29.596Z",
            "thumbnail": null,
            "excerpt": "I was taking this photo for the Orange Sulphur butterfly, but editing the photos later I noticed a caterpillar on top of the butterfly weed. The caterpillar has a fun name - Unexpected Cycnia Moth - and is rare in Michigan.",
            "metric": 186,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:32.027Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "This juvenile Green Heron landed about 20 feet away, giving some nice looks at the feather details. Juvenile G",
            "url": "https://bsky.app/profile/jocelynanderson.bsky.social/post/3msyjiblgxs2e",
            "at": "2026-08-13T20:50:59.406Z",
            "thumbnail": null,
            "excerpt": "This juvenile Green Heron landed about 20 feet away, giving some nice looks at the feather details. Juvenile Green Herons have white/light brown stripes along the neck and small stripes of brown on their wing feathers.",
            "metric": 225,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:32.027Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Jocelyn Anderson posts short bird and animal videos to 107,180 Bluesky followers and runs a newsletter and podcast, but has no store, no membership, and no site of her own, and her YouTube views stay in the double and low triple digits while she posts 82 times a month, up 22% from 67.",
        "headlineRestsOn": "107,180 on Bluesky · Newsletter · Podcast · YouTube channel · they do not have: Store, Membership, Own website · 82 posts a month now, against 67 before that \fand feeding a Cardinal (slow mo)\" (58 views) · \"Feeding a Red-bellied Woodpecker\" (46 views) · \"Friendly Sandhill Crane\" (102 views) · \"Dante Wigglebottom tries watermelon for the first time\" (50 views) · up 22%, they are posting more",
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
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:3cbuk7cmdud75vbagnsm74sh/bafkreieovz7p6orfrfl57awx3bvi6vtszv3ex6bq2ozzfwwnb3vjbqycb4",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@patmcafeeshow",
            "followers": 24,
            "url": "https://www.tiktok.com/@patmcafeeshow",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7336709820382691333~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=49a1cb44&x-expires=1786885200&x-signature=R44YVcjhsRKiWWVmduUQWPFpWOI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the Bluesky, so it is not added in"
          },
          {
            "name": "Bluesky profile",
            "handle": "@patmcafeeshow",
            "followers": 42627,
            "url": "https://bsky.app/profile/patmcafeeshow.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:3cbuk7cmdud75vbagnsm74sh/bafkreieovz7p6orfrfl57awx3bvi6vtszv3ex6bq2ozzfwwnb3vjbqycb4",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@patmcafeeshow",
            "host": "tiktok.com",
            "followers": 24
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/patmcafeeshow.bsky.social",
            "host": "bsky.app",
            "followers": 42627
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-pat-mcafee-show/id1435183458?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 42627
        },
        "score": 13,
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
                "value": "−73% vs baseline",
                "weightPct": 100,
                "detail": "2.3 posts a month now, against 8.5 before that — down 73% — 10.4 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 28,
            "note": "something at youtube.com/user/patmcafeeshow — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 62,
            "note": "3 of 6 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 33,
            "note": "something at store.patmcafeeshow.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 33,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-pat-mcafee-show/id1435183458?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 13,
            "note": "something at patmcafeeshow.com — not confirmed as theirs",
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
            "publication": "The Pat McAfee Show",
            "kind": "episode",
            "title": "PMS 2.0 1602 - TJ Lang, Jason McCourty, Daniel Jeremiah, Dan Orlovsky, Ice Cube, Gary Payton, & AJ Hawk",
            "url": null,
            "at": "2026-08-13T18:49:00.000Z",
            "thumbnail": null,
            "excerpt": "On today's show, Pat, AJ Hawk, and the boys chat all the different preseason games that we’ve got tonight including Packers/Steelers, Colts/Patriots, and Raiders/Cardinals among others. They’re also joined by several great guests including TJ Lang, Jason McCourty, Daniel Jeremiah, Dan Orlovsky, Ice ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:02.121Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "WVU Baseball will respond.. I can’t wait to watch",
            "url": "https://bsky.app/profile/patmcafeeshow.bsky.social/post/3moc6ucfssc2a",
            "at": "2026-06-15T02:01:31.062Z",
            "thumbnail": null,
            "excerpt": "WVU Baseball will respond.. I can’t wait to watch",
            "metric": 11,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:09:51.638Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Pat McAfee Show",
            "kind": "episode",
            "title": "PMS 2.0 1601 - Let's Go Campin' with Mike Reiss, Lindsey Thiry, Brian Baldinger,  Ramona Shelburne, Cam Hazzard aka \"Hazzardous Dunks,\" Darius Butler, & AJ Hawk",
            "url": null,
            "at": "2026-08-12T18:46:00.000Z",
            "thumbnail": null,
            "excerpt": "On today's show, Pat, Darius Butler, AJ Hawk, and the boys chat about more of the joint practice footage coming out, last night’s episode of Hard Knocks and why the Seahawks are still being underestimated, the Patriot Games, Mark Walter selling his majority share of the Lakers for 12.5 billion dolla",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:02.121Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Pat McAfee Show",
            "kind": "episode",
            "title": "PMS 2.0 1600 - Ian Rapoport, Colts Head Coach Shane Steichen, Peter Schrager, Dana White, Darius Butler, & AJ Hawk",
            "url": null,
            "at": "2026-08-11T19:25:00.000Z",
            "thumbnail": null,
            "excerpt": "On today's show, Pat, Darius Butler, AJ Hawk, and the boys discuss all the different camp highlights that have been making their rounds as multiple teams have joint practices today, the Patriot Games going on in Ohio, Tarik Skubal’s continued rocky start for the Dodgers, and everything else happenin",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:02.122Z",
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
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7324163600040656901~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=696ff0c3&x-expires=1786885200&x-signature=FDy5D7dGcvqvsxdfQGli1Oglsik%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@schrodingersbox",
            "host": "tiktok.com",
            "followers": null
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@schrodingersbox",
            "host": "youtube.com",
            "followers": 302000
          }
        ],
        "audience": {
          "total": 302000
        },
        "score": 12,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 12,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no membership",
                "weightPct": 97,
                "detail": "3 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "4 purchase-intent comments",
                "weightPct": 3,
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
                "value": "−21% vs baseline",
                "weightPct": 0,
                "detail": "4.3 videos a month now, against 5.5 before that — down 21%; the recent ones are getting 48% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He runs a repeatable diagnostic-walkthrough format in a category people search constantly — DIY auto repair — and each 'here's how you actually test that part' moment is a natural clip, backed by a 302k-subscriber YouTube following."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@schrodingersbox",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 69,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 42,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
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
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
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
            "quote": "Love the tee shirt Matt. Where can I get one?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I wish you make a detailed video about it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Could you upload the mra vaccine video to the paid channel please.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "membership"
          },
          {
            "kind": "comment",
            "quote": "Your link does not work for me in New Zealand, if I buy this thing I'd like to use your affiliate link to give a little back for the time and information you share with us.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
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
            "title": "NEVER Replace A/F or O2 Sensor Til You Test This First (P015a, P015b, P014c codes)",
            "url": "https://www.youtube.com/watch?v=EZ3mOlz_x4w",
            "at": "2026-08-11T22:29:19Z",
            "thumbnail": "https://i.ytimg.com/vi/EZ3mOlz_x4w/hqdefault.jpg",
            "excerpt": null,
            "metric": 3756,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:39.238Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Which of Us Will Win World's Hottest Chocolate Bar Challenge?",
            "url": "https://www.youtube.com/watch?v=9LO9zBBj1pc",
            "at": "2026-07-26T02:48:16Z",
            "thumbnail": "https://i.ytimg.com/vi/9LO9zBBj1pc/hqdefault.jpg",
            "excerpt": null,
            "metric": 1297,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:39.239Z",
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
            "metric": 3752,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:39.239Z",
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
            "metric": 3971,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:07:39.239Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "schrodingersbox makes car diagnostic and tool review videos for 302,000 YouTube subscribers and already runs a store, a podcast, and an own website, but has no newsletter or membership to reach that audience directly, and posting is down to 4.3 videos a month from 5.5 with recent videos getting 48% fewer views.",
        "headlineRestsOn": "302,000 on YouTube · YouTube channel, Store, Podcast, Own website · Newsletter, Membership · 4.3 videos a month now, against 5.5 before that \\are getgetting 48% fewer views · 2021 Buick Intermittent Check Engine Light, Runs Rich, NO CODES  How Would You Fix?? · I'm Back! Jeep No A/C after dealer fix, Plus 5 other problems!! · Kingbolen K8 Pro Review-FREE Lifetime updates, NO FEES!!!",
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
        "id": "c_worth_call_they_make_2__ecmclaughlin",
        "name": "ecmclaughlin",
        "handle": "@ecmclaughlin",
        "initials": "EC",
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:l3k4ivyknlg4yv4as4b6anmt/bafkreicbcbdi25whi5a6grfmuxu74djkelbtehhc7oleowchkqlbraiopu",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "Bluesky profile",
        "platforms": [
          {
            "name": "Bluesky profile",
            "handle": "@ecmclaughlin",
            "followers": 93156,
            "url": "https://bsky.app/profile/ecmclaughlin.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:l3k4ivyknlg4yv4as4b6anmt/bafkreicbcbdi25whi5a6grfmuxu74djkelbtehhc7oleowchkqlbraiopu",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/ecmclaughlin.bsky.social",
            "host": "bsky.app",
            "followers": 93156
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/resistance-live/id1840737233?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 93156
        },
        "score": 12,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 12,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no youtube channel",
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
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle, and their account is hidden from logged-out readers, so we could not read their posts"
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
                "detail": "He hosts a recurring YouTube show, ResistanceLive, which is a repeatable format that cuts easily into clips, and political/leadership commentary is a category with real appetite right now."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 10,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 9,
            "note": "something at stan.store/ecmclaughlin — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 8,
            "note": "something at rippleeffectinstitute.org/membership — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/resistance-live/id1840737233?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 5,
            "note": "something at ecmclaughlin.com — not confirmed as theirs",
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
            "note": "we could not read their captions",
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
        "headline": "With 93,156 followers on Bluesky, they already run a store, a membership, a podcast, and their own website, but no newsletter or YouTube channel to reach that audience off-platform.",
        "headlineRestsOn": "93,156 on Bluesky · Store · Membership · Podcast · Own website · YouTube channel · Newsletter",
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
            "followers": 256100,
            "url": "https://www.tiktok.com/@blabbertok",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7310216441406423082~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5d3a9ddc&x-expires=1786885200&x-signature=hvEfQ%2FfkHqjWN6O%2FV%2Bk2UnWjYYw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@blabbertok",
            "host": "tiktok.com",
            "followers": 256100
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@blabbertok",
            "host": "youtube.com",
            "followers": 31
          }
        ],
        "audience": {
          "total": 256100
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
                "detail": "we could not read their posting rate — their whole channel is 135 days old, so there is no earlier stretch to compare the last 90 days against"
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
                "detail": "Short-form current-events commentary is inherently clippable and repeatable, and news/opinion is a category with real demand — 256k TikTok followers and 17.3m likes show the format lands."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 37,
            "note": "found it — youtube.com/@blabbertok",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 59,
            "note": "something at substack.com/@blabbertok — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 67,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 48,
            "note": "they link to it themselves",
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
            "title": "#stitch with society.made.the.joker #chrisrock #willsmith... #Shorts #blabbertok",
            "url": "https://www.youtube.com/watch?v=WATSoAZzodI",
            "at": "2026-07-16T01:54:59Z",
            "thumbnail": "https://i.ytimg.com/vi/WATSoAZzodI/hqdefault.jpg",
            "excerpt": null,
            "metric": 0,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:23.493Z",
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
            "seenAt": "2026-08-14T13:09:23.493Z",
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
            "seenAt": "2026-08-14T13:09:23.493Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "blabbertok posts short celebrity commentary clips to 256,100 TikTok followers and already has a newsletter and own website, while the YouTube channel sits at 31 with recent Shorts pulling 0 to 3 views, and there is no store, membership, or podcast yet.",
        "headlineRestsOn": "audience: 256,100 on TikTok, 31 on YouTube · they have: YouTube channel, Newsletter, Own website · they do not have: Store, Membership, Podcast · \"Chris Rock s first appearance since the Oscars. #Shorts #blabbertok\" (3 views) · \"New video from @blabbertok #Shorts #blabbertok\" (0 views) · \"#stitch with society.made.the.joker #chrisrock #willsmith... #Shorts #blabbertok\" (0 views)",
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
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d19e2896&x-expires=1786885200&x-signature=5tPzRoKSNstBmHD7jyxTj7yLMmU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@cover1",
            "host": "tiktok.com",
            "followers": 2
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@cover1",
            "host": "youtube.com",
            "followers": 101000
          },
          {
            "name": "Newsletter",
            "url": "https://cover1.substack.com/",
            "host": "cover1.substack.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-margaret-cho/id1470515305?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Acast",
            "url": "https://play.acast.com/s/cho/chinatowndestructionwithsherrycola",
            "host": "play.acast.com",
            "followers": null
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
                "value": "−43% vs baseline",
                "weightPct": 100,
                "detail": "24 videos a month now, against 42 before that — down 43% — 4 of the 40 Pressure points. Ceiling on this look is 34."
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
            "note": "found it — youtube.com/@cover1",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 36,
            "note": "found it — cover1.substack.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 25,
            "note": "something at cover1.myshopify.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 24,
            "note": "not there · we looked in 2 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-margaret-cho/id1470515305?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 19,
            "note": "not there · we looked in 2 places",
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
            "title": "Bills Preseason Preview | Cover 1 Buffalo Podcast | C1 BUF",
            "url": "https://www.youtube.com/watch?v=mJbkeHqAaUI",
            "at": "2026-08-14T02:14:04Z",
            "thumbnail": "https://i.ytimg.com/vi/mJbkeHqAaUI/hqdefault.jpg",
            "excerpt": null,
            "metric": 1341,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:47.583Z",
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
            "seenAt": "2026-08-14T13:09:55.310Z",
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
            "seenAt": "2026-08-14T13:09:55.311Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Buffalo Bills Defense: Ed Oliver Unleashed & Breakout Stars | ARH",
            "url": "https://www.youtube.com/watch?v=o8SL5ZacocA",
            "at": "2026-08-12T23:00:13Z",
            "thumbnail": "https://i.ytimg.com/vi/o8SL5ZacocA/hqdefault.jpg",
            "excerpt": null,
            "metric": 935,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:47.583Z",
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
            "followers": 1120000,
            "url": "https://www.youtube.com/@richeisenshow",
            "avatar": "https://yt3.googleusercontent.com/hxOYtjjvrWEso3-Y80JTcGL3VHCn28ZOdPvwg0Im0X6MYTIddoC2kj3e9NaS8zgjgb8zSKNyFQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "Bluesky profile",
            "handle": "@richeisenshow",
            "followers": 4341,
            "url": "https://bsky.app/profile/richeisenshow.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:gftntw3dqynj2digg3f7wcl3/bafkreifickjpvbihghzwyxuq5o3rcwmwufg7mxb4ho36hzwov2g4kt2fea",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the Bluesky to the YouTube, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@richeisenshow",
            "host": "youtube.com",
            "followers": 1120000
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/richeisenshow.bsky.social",
            "host": "bsky.app",
            "followers": 4341
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-rich-eisen-show/id926642601?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://richeisenshow.com/",
            "host": "richeisenshow.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 1120000
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
                "weightPct": 99,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
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
                "detail": "we could not read their posting rate — they post often enough that 200 posts only reach back 85 days — not far enough behind the last 90 to compare against"
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
                "detail": "It's a daily sports talk show built on interview segments — inherently clippable, endlessly repeatable, and sports is a category with huge demand."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 18,
            "note": "found it — youtube.com/@richeisenshow",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 60,
            "note": "something at richeisenshow.com/newsletter — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 42,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 31,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 10,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-rich-eisen-show/id926642601?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 14,
            "note": "found it — richeisenshow.com · that page links back to their YouTube",
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
            "quote": "people are still going to buy tickets",
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
            "title": "Emmy-Nominated Actress Karolina Wydra Talks ‘Pluribus’ with Rich Eisen | Full Interview",
            "url": "https://www.youtube.com/watch?v=q7_LaVDWuNE",
            "at": "2026-08-14T05:39:10Z",
            "thumbnail": "https://i.ytimg.com/vi/q7_LaVDWuNE/hqdefault.jpg",
            "excerpt": null,
            "metric": 275,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:00.724Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Rich Eisen Show",
            "kind": "episode",
            "title": "Hour 3:  Steelers ‘4-Downs’ Season Preview, plus ‘Pluribus’ Star Karlina Wydra In-Studio",
            "url": null,
            "at": "2026-08-13T19:13:00.000Z",
            "thumbnail": null,
            "excerpt": "Rich reacts to a possible move of the Bears to Indiana, debates if he’s taking the over or under on Chicago’s 9.5 wins line, and previews the Steelers ‘season with the top 4 questions facing Aaron Rodgers and new Pittsburgh head coach Mike McCarthy heading into the 2026 NFL campaign. Actress Karolin",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:12.317Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Actress Karolina Wydra Was “Overwhelmed” When First Getting a ‘Pluribus’ Script | Rich Eisen Show",
            "url": "https://www.youtube.com/watch?v=yGiDgKVB1-k",
            "at": "2026-08-14T05:39:06Z",
            "thumbnail": "https://i.ytimg.com/vi/yGiDgKVB1-k/hqdefault.jpg",
            "excerpt": null,
            "metric": 131,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:00.725Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "NFL Insider Ian Rapoport: Mahomes Looks “Really, REALLY Good’ in Chiefs Camp",
            "url": "https://www.youtube.com/watch?v=QjEKNs9IetM",
            "at": "2026-08-14T01:00:35Z",
            "thumbnail": "https://i.ytimg.com/vi/QjEKNs9IetM/hqdefault.jpg",
            "excerpt": null,
            "metric": 8710,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:00.725Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Rich Eisen runs a daily sports talk show with hour-long episodes and guest interviews, reaching 1,120,000 on YouTube plus a newsletter, podcast, and own website, but he sells nothing directly yet with no store and no membership.",
        "headlineRestsOn": "1,120,000 on YouTube · YouTube channel · Newsletter · Podcast · Own website · Store · Membership · Hour 3: Vikings \"4-Downs\" Season Preview, plus Akbar Gbajabiamila & Matt Iseman Talk \"ANW\" and Raiders · Hour 2: Miami Dolphins Head Coach Jeff Hafley, plus Hall of Fame Induction Weekend Recap · Hour 1:  Aaron Donald Latest, plus Pro Football Hall of Fame Induction Weekend Recap with Cris Carter",
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
            "followers": 725100,
            "url": "https://www.tiktok.com/@kurtbenkert",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/e5d8d770b89456ecfc81ec8d02b8e918~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=42b11ec8&x-expires=1786885200&x-signature=tX1LVlflK4r%2BJZ0IHpiGabuUdmI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@kurtbenkert",
            "followers": 413000,
            "url": "https://www.youtube.com/@kurtbenkert",
            "avatar": "https://yt3.googleusercontent.com/yUu3UVB4YdYszamWTYjjBv4GbMyWDPzV3uShn3C3O27f_7UeAsjtiE6CfWFrXBEkvHq0N44Smg=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@kurtbenkert",
            "host": "tiktok.com",
            "followers": 725100
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@kurtbenkert",
            "host": "youtube.com",
            "followers": 413000
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/something-like-that-with-kurt-benkert/id1827687305?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Rss",
            "url": "https://rss.com/podcasts/slt-kurt-benkert/2121297",
            "host": "rss.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 725100
        },
        "score": 9,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 9,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no membership",
                "weightPct": 98,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "2 purchase-intent comments",
                "weightPct": 2,
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
                "value": "+35% vs baseline",
                "weightPct": 0,
                "detail": "27 videos a month now, against 20 before that — up 35%, they are posting more; the recent ones are getting 46% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Former NFL quarterback teaching football technique is a repeatable, highly clippable format in a category with huge built-in demand, and he's already proven it works across TikTok and YouTube."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 30,
            "note": "found it — youtube.com/@kurtbenkert",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 63,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 38,
            "note": "something at thedimelab.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 31,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/something-like-that-with-kurt-benkert/id1827687305?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 14,
            "note": "something at pillar.io/KurtBenkert — not confirmed as theirs",
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
            "quote": "I think im coming back to madden this year.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Can I have a ball",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
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
            "title": "The THICKEST TD in CFB 27 🤣",
            "url": "https://www.youtube.com/watch?v=D6fxkPaEZqE",
            "at": "2026-08-13T19:57:40Z",
            "thumbnail": "https://i.ytimg.com/vi/D6fxkPaEZqE/hqdefault.jpg",
            "excerpt": null,
            "metric": 2803,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:50.128Z",
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
            "seenAt": "2026-08-14T13:10:01.387Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Do THIS when running the rock 😤",
            "url": "https://www.youtube.com/watch?v=JZVWItX6SFw",
            "at": "2026-08-12T16:47:15Z",
            "thumbnail": "https://i.ytimg.com/vi/JZVWItX6SFw/hqdefault.jpg",
            "excerpt": null,
            "metric": 14221,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:50.128Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "an NFL QB Fixed THIS Football Problem 📈",
            "url": "https://www.youtube.com/watch?v=FQZeYZUQ__E",
            "at": "2026-08-11T23:53:18Z",
            "thumbnail": "https://i.ytimg.com/vi/FQZeYZUQ__E/hqdefault.jpg",
            "excerpt": null,
            "metric": 15100,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:09:50.128Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 1,
          "why": "1 piece of their own work"
        },
        "headline": "Kurt Benkert makes Madden football tips and gameplay for 725,100 TikTok followers and 413,000 on YouTube, and already runs a store, a podcast, and his own site, but has no newsletter or membership to hold the audience he is now posting 27 videos a month for while views drop 46%.",
        "headlineRestsOn": "725,100 on TikTok · 413,000 on YouTube · YouTube channel · Store · Podcast · Own website · Newsletter · Membership · 27 videos a month now · the recent ones are getting 46% fewer views · \"The CPU is SMARTER in #Madden27 \ff9f #nfl #football #live #madden\" · \"Quick tip for reading a defense in #Madden27 \ff9f\ff40\" · \"Explaining the #Madden27 run game in under 2 minutes \ffe5\ffe1\"",
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
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@sharpfootballanalysis",
            "host": "youtube.com",
            "followers": 13400
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/sharp-football-analysis-by-warren-sharp/id1485652145?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://www.sharpfootballanalysis.com/",
            "host": "sharpfootballanalysis.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 13400
        },
        "score": 9,
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
                "value": "No store",
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
                "value": "−29% vs baseline",
                "weightPct": 100,
                "detail": "26 videos a month now, against 36 before that — down 29%; the recent ones are getting 22% more views — 0.9 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "NFL betting and fantasy analytics is a category with huge demand, the shows run on a fixed Tuesday/Thursday/Sunday schedule, and stat-backed breakdowns and player props are naturally clippable — the empty recent-posts field is just scraper noise, not absence of output."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 27,
            "note": "found it — youtube.com/@sharpfootballanalysis",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 57,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 37,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 26,
            "note": "something at discord.com/invite/sharpfootballanalysis — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/sharp-football-analysis-by-warren-sharp/id1485652145?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — sharpfootballanalysis.com",
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
            "title": "well HELLO Fernando 👀 #nfl #raiders",
            "url": "https://www.youtube.com/watch?v=TaEIzNumT78",
            "at": "2026-08-14T05:34:23Z",
            "thumbnail": "https://i.ytimg.com/vi/TaEIzNumT78/hqdefault.jpg",
            "excerpt": null,
            "metric": 1356,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:07.823Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Sharp Football Analysis",
            "kind": "writing",
            "title": "2026 NFL Running Back Prop Bets: Best Unders to Target",
            "url": "https://www.sharpfootballanalysis.com/betting/nfl-running-back-player-prop-unders/",
            "at": "2026-08-13T20:19:49.000Z",
            "thumbnail": null,
            "excerpt": "2026 NFL Unders: Best Running Back Prop Bets\n \n Jonathan Taylor — Under 1224.5 Rushing Yards (-105)\n Chuba Hubbard — Under 700 Rushing Yards (-114)\n \n Fantasy football projections, like those done by Rich Hribar , can be a guide to help identify overvalued or undervalued players in the current betti",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:10:15.597Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Sharp Football Analysis by Warren Sharp",
            "kind": "episode",
            "title": "2026 QB Tiers: Every NFL Starting Quarterback, Ranked",
            "url": "https://www.sharpfootballanalysis.com/?utm_source=link-bio",
            "at": "2026-08-06T21:12:34.000Z",
            "thumbnail": null,
            "excerpt": "Warren Sharp ranks every NFL starting quarterback into tiers for 2026, covering all 32 teams, NFL QB rankings, quarterback tiers, betting futures and fantasy football draft value.\n Get the 2026 Football Preview Book, 619 full color pages on all 32 teams. Use code SHARPQB to save $10 on the PDF: http",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:15.596Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Fans Are Outraged at the New Bills Stadium #NFL",
            "url": "https://www.youtube.com/watch?v=HfpWjDnA7Is",
            "at": "2026-08-13T19:21:08Z",
            "thumbnail": "https://i.ytimg.com/vi/HfpWjDnA7Is/hqdefault.jpg",
            "excerpt": null,
            "metric": 1509,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:07.824Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 6,
          "why": "6 pieces of their own work"
        },
        "headline": "Sharp Football Analysis puts out NFL film and betting breakdowns for 13,400 YouTube subscribers, already sells a book by download and runs a membership, podcast, and own website, but has no store to sell merchandise or other products.",
        "headlineRestsOn": "audience: 13,400 on YouTube · they have: YouTube channel, Membership, Podcast, Own website · they do not have: Store · \"Warren Sharp’s New Book “2026 Football Preview” – Now Available for Download\" · \"NFL Season Long Player Props: 2026 QB, RB & WR Picks\" · \"2026 QB Tiers: Every NFL Starting Quarterback, Ranked\"",
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
        "id": "c_worth_call_they_make_2__marmel",
        "name": "marmel",
        "handle": "@marmel",
        "initials": "MA",
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:gpnca5cprqfxcz3i3jjlmi35/bafkreihgbenire3o5xjenvvcnr4enqlo7axtcbf24rsjxtfyoozy6e5yt4",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@marmel",
            "followers": 37,
            "url": "https://www.tiktok.com/@marmel",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7322702770077696001~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=139aae2f&x-expires=1786885200&x-signature=rYa%2FCcf%2FADH6fh%2BjXYj58P9bNJA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the Bluesky, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@marmel",
            "followers": 97,
            "url": "https://www.youtube.com/@marmel",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kBQAajkm-hk6OWZNjC0_IfoCGPae2JkLnlK2CP8ss=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the Bluesky, so it is not added in"
          },
          {
            "name": "Bluesky profile",
            "handle": "@marmel",
            "followers": 131912,
            "url": "https://bsky.app/profile/marmel.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:gpnca5cprqfxcz3i3jjlmi35/bafkreihgbenire3o5xjenvvcnr4enqlo7axtcbf24rsjxtfyoozy6e5yt4",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@marmel",
            "host": "tiktok.com",
            "followers": 37
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@marmel",
            "host": "youtube.com",
            "followers": 97
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/marmel.bsky.social",
            "host": "bsky.app",
            "followers": 131912
          },
          {
            "name": "Newsletter",
            "url": "https://www.marmel.com/",
            "host": "marmel.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/marmel8/id1529557853?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Spotify",
            "url": "https://podcasters.spotify.com/pod/show/marmeleight/episodes/Episode-3-Welcome-to-the-Party-Bus--HP-1---Chapter-2-ejsjrk",
            "host": "podcasters.spotify.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 131912
        },
        "score": 9,
        "scoreDelta": null,
        "confidence": 0.667,
        "pillars": {
          "gap": {
            "score": 3,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.667,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No membership",
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
            "score": 6,
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
                "value": "−53% vs baseline",
                "weightPct": 100,
                "detail": "0.7 posts a month now, against 1.4 before that — down 53% — 6.1 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 3,
            "note": "found it — youtube.com/@marmel",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 12,
            "note": "found it — marmel.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 12,
            "note": "something at marmel.shop — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/marmel8/id1529557853?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 5,
            "note": "something at marmel.co — not confirmed as theirs",
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
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "These nice people did a follow up story on the affordable housing development in Cripple Creek. Check it out. ",
            "url": "https://bsky.app/profile/marmel.bsky.social/post/3msyqihxv6s2w",
            "at": "2026-08-13T22:56:22.352Z",
            "thumbnail": null,
            "excerpt": "These nice people did a follow up story on the affordable housing development in Cripple Creek. Check it out. Reporters love clicks and no AI was used in the creation of this article. That’s me with the mayor! www.mountainjackpot.com/2026/08/11/c...",
            "metric": 42,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:08.699Z",
            "status": null
          },
          {
            "platform": "Newsletter",
            "publication": "Literally Anything Else",
            "kind": "writing",
            "title": "Of billionaire weddings and the ethics of obscene wealth",
            "url": "https://www.marmel.com/p/of-billionaire-weddings-and-the-ethics",
            "at": "2026-07-04T21:51:05.000Z",
            "thumbnail": null,
            "excerpt": "On the topic of billionaires - who I don’t think should exist - some thoughts about Taylor Swift with Mackenzie Scott as a benchmark.\n worth 36 billion after her divorce to Bezos.\n Donated 26 billion in seven years.\n Is currently worth 31.2 billion.\n \n \n \n At about the same starting point Taylor Swi",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-14T13:11:18.430Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "MarMel8",
            "kind": "episode",
            "title": "Episode 3: Welcome to the Party Bus! (HP 1 - Chapter 2)",
            "url": "https://podcasters.spotify.com/pod/show/marmeleight/episodes/Episode-3-Welcome-to-the-Party-Bus--HP-1---Chapter-2-ejsjrk",
            "at": "2020-09-19T17:27:39.000Z",
            "thumbnail": null,
            "excerpt": "This week on MarMel8: \n \nWe are talking about Chapter 2, The Vanishing Glass, of Harry Potter and the Philosopher's Stone. \nHarry notices strange things happening around him, we find out why Markku agrees with the Dursley's and what our experiences with bullies are. \n \nYou can also join us in readin",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:11:18.431Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Dr. Mengele, although six of one half a dozen of the other.",
            "url": "https://bsky.app/profile/marmel.bsky.social/post/3msyqecpn522w",
            "at": "2026-08-13T22:54:02.620Z",
            "thumbnail": null,
            "excerpt": "Dr. Mengele, although six of one half a dozen of the other.",
            "metric": 23,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:08.700Z",
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
            "followers": 997300,
            "url": "https://www.tiktok.com/@theherd",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d50ac45d79d4078c01ec6b40225f33c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=225cdd64&x-expires=1786885200&x-signature=o83BcAfyd%2BZhNf5gyIjkC4ZWUvg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
          },
          {
            "name": "Bluesky profile",
            "handle": "@theherd",
            "followers": 27,
            "url": "https://bsky.app/profile/theherd.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:lf5nu757ljrrtwme7g5ap6r7/bafkreidr4ggenavlhz54ej74kpmm5uqvw7kxieybsedzipndxgwexjf7f4",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the Bluesky to the TikTok, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@theherd",
            "host": "tiktok.com",
            "followers": 997300
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@theherd",
            "host": "youtube.com",
            "followers": 3090
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/theherd.bsky.social",
            "host": "bsky.app",
            "followers": 27
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-herd-with-colin-cowherd/id1042368254?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Omny",
            "url": "https://omny.fm/shows/daniel-cormier-tv/ian-garry-doubles-down-on-beating-islam-makhachev-ufc-champ-is-my-destiny-daniel-cormier",
            "host": "omny.fm",
            "followers": null
          }
        ],
        "audience": {
          "total": 997300
        },
        "score": 8,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 2,
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
            "score": 6,
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
                "value": "−54% vs baseline",
                "weightPct": 100,
                "detail": "2 videos a month now, against 4.4 before that — down 54%; the recent ones are getting 32% fewer views — 6.4 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 27,
            "note": "found it — youtube.com/@theherd",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 32,
            "note": "something at theherd.beehiiv.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 38,
            "note": "something at theherdstore.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 25,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-herd-with-colin-cowherd/id1042368254?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 19,
            "note": "2 of 5 places wouldn't answer",
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
            "publication": "The Herd with Colin Cowherd",
            "kind": "episode",
            "title": "The Daniel Cormier Show - Ian Garry DOUBLES DOWN on BEATING Islam Makhachev: UFC champ is \"MY DESTINY\" | Daniel Cormier",
            "url": "https://omny.fm/shows/daniel-cormier-tv/ian-garry-doubles-down-on-beating-islam-makhachev-ufc-champ-is-my-destiny-daniel-cormier",
            "at": "2026-08-14T00:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Daniel Cormier IS BACK at UFC 330 with fresh editions of the DC Check-In, starting with Ian Machado Garry ahead of his MASSIVE TITLE FIGHT against the UFC's pound-for-pound No. 1 Islam Makhachev. Ian doubles down on his guarantee to beat the double champ, and knows a win at Philly's UFC 330 is his \"",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:14.636Z",
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
            "metric": 58,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:04.963Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": null,
            "url": "https://bsky.app/profile/theherd.bsky.social/post/3lvw635rcos2p",
            "at": "2025-08-08T21:10:51.408Z",
            "thumbnail": null,
            "excerpt": null,
            "metric": 1,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:10:04.964Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Herd with Colin Cowherd",
            "kind": "episode",
            "title": "THE HERD – HOUR 1 – Fernando Mendoza Is Bust-Proof, BOLD NFL Predictions",
            "url": "https://omny.fm/shows/the-herd-with-colin-cowherd/the-herd-hour-1-fernando-mendoza-is-bust-proof-bold-nfl-predictions",
            "at": "2026-08-13T19:48:05.000Z",
            "thumbnail": null,
            "excerpt": "Colin Cowherd discusses Heisman Trophy winner Fernando Mendoza making his NFL preseason debut and why he checks all the boxes as a can&rsquo;t miss prospect.\n Colin shares his 5 Bold Predictions for the NFL season: Find out why he has the Broncos missing the playoffs and Caleb Williams winning the M",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:14.636Z",
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
        "id": "c_worth_call_they_make_2__lisaguerrero",
        "name": "lisaguerrero",
        "handle": "@lisaguerrero",
        "initials": "LI",
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:3qtf2sem5dv3igpf5mdv6mgp/bafkreielgvexkkwlqnd2f66eqbk5omlby2llgddefkygco2mk3fnlqy7sa",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@lisaguerrero",
            "followers": 33,
            "url": "https://www.tiktok.com/@lisaguerrero",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=429df237&x-expires=1786885200&x-signature=f8itnQT%2Br%2BAizjSgJ3OV2CLkl7E%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the Bluesky, so it is not added in"
          },
          {
            "name": "Bluesky profile",
            "handle": "@lisaguerrero",
            "followers": 99882,
            "url": "https://bsky.app/profile/lisaguerrero.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:3qtf2sem5dv3igpf5mdv6mgp/bafkreielgvexkkwlqnd2f66eqbk5omlby2llgddefkygco2mk3fnlqy7sa",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@lisaguerrero",
            "host": "tiktok.com",
            "followers": 33
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/lisaguerrero.bsky.social",
            "host": "bsky.app",
            "followers": 99882
          },
          {
            "name": "Newsletter",
            "url": "https://www.lisaguerrero.com/",
            "host": "lisaguerrero.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 99882
        },
        "score": 8,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 8,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no membership, no podcast",
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
                "value": "−24% vs baseline",
                "weightPct": 0,
                "detail": "90 posts a month now, against 118 before that — down 24% — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "She runs a named podcast on YouTube — a repeatable format — and her investigative-journalism material is inherently clippable in a category audiences reliably show up for, even though we can't see actual post performance here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 10,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — lisaguerrero.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 14,
            "note": "found it — lisaguerrero.com",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — lisaguerrero.com",
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
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Lots of things are awful. But not forever. Keep dancing. 💃🏽",
            "url": "https://bsky.app/profile/lisaguerrero.bsky.social/post/3msyrjfop5c2g",
            "at": "2026-08-13T23:14:47.247Z",
            "thumbnail": null,
            "excerpt": "Lots of things are awful. But not forever. Keep dancing. 💃🏽",
            "metric": 125,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:16.675Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Lately there’s been reporting connecting Hugh Hefner to Jeffrey Epstein. For months I’ve been speaking out abo",
            "url": "https://bsky.app/profile/lisaguerrero.bsky.social/post/3msychnkzlc2e",
            "at": "2026-08-13T18:45:22.281Z",
            "thumbnail": null,
            "excerpt": "Lately there’s been reporting connecting Hugh Hefner to Jeffrey Epstein. For months I’ve been speaking out about the connections I’ve discovered as well. NO, I’m not going to stop talking about and supporting the survivors of Epstein and Playboy. youtu.be/F_lQGmjnRGA?...",
            "metric": 107,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:16.675Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "“What the f-k is wrong with you?” Tom Arnold GOES IN on Trump in the latest episode of Lisa Guerrero Unleashed",
            "url": "https://bsky.app/profile/lisaguerrero.bsky.social/post/3msy7psxwsc2x",
            "at": "2026-08-13T17:56:15.154Z",
            "thumbnail": null,
            "excerpt": "“What the f-k is wrong with you?” Tom Arnold GOES IN on Trump in the latest episode of Lisa Guerrero Unleashed. Watch this. 🔥 youtu.be/tf8g81OT4cw?...",
            "metric": 29,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:16.675Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Did Tom Arnold actually get Don Jr sober? (At least for a minute.) And yes, multiple sources back up Tom that ",
            "url": "https://bsky.app/profile/lisaguerrero.bsky.social/post/3msy2qgwx5s25",
            "at": "2026-08-13T16:27:07.388Z",
            "thumbnail": null,
            "excerpt": "Did Tom Arnold actually get Don Jr sober? (At least for a minute.) And yes, multiple sources back up Tom that Trump uses the N-word. (Of course.) Tom goes ALL IN on Trump Family Secrets in the latest episode of Lisa Guerrero Unleashed. Watch this. 🔥 youtu.be/tf8g81OT4cw?...",
            "metric": 24,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:11:16.675Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "lisaguerrero posts short sports and politics takes to 99,882 Bluesky followers, sells through a newsletter, store, and her own website, and has no YouTube channel, podcast, or membership, though her posting is down 24% to 90 posts a month.",
        "headlineRestsOn": "99,882 on Bluesky · Newsletter, Store, Own website · YouTube channel, Membership, Podcast · 90 posts a month now, against 118 before that \\Call call, but I\\u2019d rather have the Lakers in the hands of the Disney guy and creepy son-in-law\\u2018s younger brot · down 24% · Go @peggyflanagan.bsky.social \\u270a\\ud83c\\udffd youtu.be/swye0gjhWHg?...",
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
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:qtwtf7uxhcim7y26ynubnags/bafkreiblrozoancmv7ck5etxob2skcnp7hvkdwtetxxagcaqmkp2k7eg7e",
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@nightcap",
            "followers": null,
            "url": "https://www.tiktok.com/@nightcap",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7327766559149621254~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6ebd5aa4&x-expires=1786885200&x-signature=Tl%2FvHNN%2FjIxjk1w5boklGMQvwQQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
            "separate": true,
            "why": "nothing on either page links the YouTube to the Bluesky, so it is not added in"
          },
          {
            "name": "Bluesky profile",
            "handle": "@nightcap",
            "followers": 359,
            "url": "https://bsky.app/profile/nightcap.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:qtwtf7uxhcim7y26ynubnags/bafkreiblrozoancmv7ck5etxob2skcnp7hvkdwtetxxagcaqmkp2k7eg7e",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@nightcap",
            "host": "tiktok.com",
            "followers": null
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@nightcap",
            "host": "youtube.com",
            "followers": 185
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/nightcap.bsky.social",
            "host": "bsky.app",
            "followers": 359
          },
          {
            "name": "Substack",
            "url": "https://nightcap.substack.com/p/music-an-invisible-mosaic",
            "host": "nightcap.substack.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 359
        },
        "score": 6,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 6,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No own website, no podcast",
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
                "detail": "we could not read their posting rate — only 1 dated upload came back — not enough to read a posting rate, and only 1 post in the 275 days before that — too few to call it a rate"
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
            "surfacesChecked": 26,
            "note": "found it — youtube.com/@nightcap",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 25,
            "note": "something at nightcap.substack.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 24,
            "note": "something at nightcap.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 24,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
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
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 2 places",
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
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Some quick tips for doing supervillainy. Play it here! mega.nz/file/StZG3LR...",
            "url": "https://bsky.app/profile/nightcap.bsky.social/post/3mr6ifaqk3s2n",
            "at": "2026-07-21T18:56:59.341Z",
            "thumbnail": null,
            "excerpt": "Some quick tips for doing supervillainy. Play it here! mega.nz/file/StZG3LR...",
            "metric": 2,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:10:36.369Z",
            "status": null
          },
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
            "seenAt": "2026-08-12T15:30:14.075Z",
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
            "metric": 7995,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:36.369Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "On new games and stuff: lilithdevice.blogspot.com?zx=9853c888e...",
            "url": "https://bsky.app/profile/nightcap.bsky.social/post/3mr2adcqa4c2x",
            "at": "2026-07-20T02:22:05.438Z",
            "thumbnail": null,
            "excerpt": "On new games and stuff: lilithdevice.blogspot.com?zx=9853c888e...",
            "metric": 4,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:10:36.369Z",
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
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@pff",
            "host": "youtube.com",
            "followers": 11100
          },
          {
            "name": "Pff",
            "url": "https://www.pff.com/news/nfl-player-rankings/",
            "host": "pff.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 11100
        },
        "score": 5,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 5,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No membership, no podcast",
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
                "detail": "33 videos a month, steady against 33 before that — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 25,
            "note": "found it — youtube.com/@pff",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 44,
            "note": "something at productforfounders.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 29,
            "note": "something at pff.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 29,
            "note": "not there · we looked in 3 places",
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
            "state": "not_found",
            "surfacesChecked": 25,
            "note": "2 of 5 places wouldn't answer",
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
            "title": "8-9-26, 3810 Old York Rd, Philadelphia, PA, All Hands Junkyard Fire",
            "url": "https://www.youtube.com/watch?v=LrF0zqIKy68",
            "at": "2026-08-13T11:37:42Z",
            "thumbnail": "https://i.ytimg.com/vi/LrF0zqIKy68/hqdefault.jpg",
            "excerpt": null,
            "metric": 57,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:43.249Z",
            "status": null
          },
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
            "title": "8-9-26, 1236 Bayview Rd, Odessa, New Castle Co, DE, All Hands Barn Fire",
            "url": "https://www.youtube.com/watch?v=mQ7Zo9dL-u0",
            "at": "2026-08-13T11:37:19Z",
            "thumbnail": "https://i.ytimg.com/vi/mQ7Zo9dL-u0/hqdefault.jpg",
            "excerpt": null,
            "metric": 20,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:43.249Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "8-8-26, 1121 Terrill St, Chester, Delaware Co, PA, 2 Alarm Dwelling Fire",
            "url": "https://www.youtube.com/watch?v=yflwY0jW1FI",
            "at": "2026-08-13T11:36:37Z",
            "thumbnail": "https://i.ytimg.com/vi/yflwY0jW1FI/hqdefault.jpg",
            "excerpt": null,
            "metric": 56,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:43.249Z",
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
        "id": "c_worth_call_they_make_2__chrissimmsunbuttoned",
        "name": "chrissimmsunbuttoned",
        "handle": "@chrissimmsunbuttoned",
        "initials": "CH",
        "avatar": null,
        "mandateId": "m_worth_call_they_make_2",
        "primaryPlatform": null,
        "platforms": [],
        "places": [
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/chris-simms-unbuttoned/id1454809704?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Omny",
            "url": "https://omny.fm/shows/chris-simms-unbuttoned/vikings-name-their-starting-qb-hall-of-famer-warren-sapp-joins-the-pod",
            "host": "omny.fm",
            "followers": null
          }
        ],
        "audience": {
          "total": 0
        },
        "score": 4,
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
                "value": "−41% vs baseline",
                "weightPct": 100,
                "detail": "9.3 posts a month now, against 16 before that — down 41% — 3.6 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 42,
            "note": "something at youtube.com/@chrissimms — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 59,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 42,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 29,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/chris-simms-unbuttoned/id1454809704?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 35,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
        "samples": [
          {
            "platform": "Podcast",
            "publication": "Chris Simms Unbuttoned",
            "kind": "episode",
            "title": "Vikings name their starting QB; Hall of Famer Warren Sapp joins the pod",
            "url": "https://omny.fm/shows/chris-simms-unbuttoned/vikings-name-their-starting-qb-hall-of-famer-warren-sapp-joins-the-pod",
            "at": "2026-08-12T17:15:18.000Z",
            "thumbnail": null,
            "excerpt": "Whattup homies&hellip;On today&rsquo;s Chris Simms Unbuttoned with Connor Rogers -- The Vikings QB battle is over, as Kyler Murray wins the competition over J.J. McCarthy. Hall of Famer Warren Sapp drops in and gives an interesting take on Aaron Donald's potential return. Sapp also shares his though",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:05.294Z",
            "status": null
          },
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
            "seenAt": "2026-08-14T13:10:05.294Z",
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
            "seenAt": "2026-08-14T13:10:05.294Z",
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
            "seenAt": "2026-08-12T15:29:25.613Z",
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
            "followers": 3666,
            "url": "https://www.tiktok.com/@alexrollins",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/34f31962b1d06a75fdb80b95c7adbef0~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=88053e0e&x-expires=1786885200&x-signature=3PSSC%2F%2F92wA6QCsY4Ye4HTbSO1Q%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
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
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@alexrollins",
            "host": "tiktok.com",
            "followers": 3666
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@alexrollins",
            "host": "youtube.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-alex-marlow-show/id1777276736?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Omny",
            "url": "https://omny.fm/shows/the-alex-marlow-show/who-will-replace-karoline-leavitt-and-why-the-wnba-must-drop-the-w",
            "host": "omny.fm",
            "followers": null
          }
        ],
        "audience": {
          "total": 3666
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
                "detail": "we could not read their posting rate — they post often enough that 100 posts only reach back 93 days — not far enough behind the last 90 to compare against"
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
            "surfacesChecked": 26,
            "note": "found it — youtube.com/@alexrollins",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 36,
            "note": "something at substack.com/@alexrollins — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at alexrollins.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-alex-marlow-show/id1777276736?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at alexrollins.com — not confirmed as theirs",
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
            "publication": "The Alex Marlow Show",
            "kind": "episode",
            "title": "Who Will Replace Karoline Leavitt? And, Why the WNBA Must Drop the 'W'",
            "url": "https://omny.fm/shows/the-alex-marlow-show/who-will-replace-karoline-leavitt-and-why-the-wnba-must-drop-the-w",
            "at": "2026-08-13T19:45:00.000Z",
            "thumbnail": null,
            "excerpt": "In this episode of The Alex Marlow Show, Alex dives into the recent announcement of Caroline Levitt's departure as White House Press Secretary, and the potential candidates who could fill the role. They discuss the qualifications needed for the position, including being a 24/7 workhorse, being able ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:38.064Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Alex Marlow Show",
            "kind": "episode",
            "title": "Drone Dominance, Airspace Sovereignty: Dr. Gorka On White House Plan for Emerging Military Tech",
            "url": "https://omny.fm/shows/the-alex-marlow-show/drone-dominance-airspace-sovereignty-dr-gorka-lays-out-white-house-plan-for-emerging-military-tech",
            "at": "2026-08-13T12:00:00.000Z",
            "thumbnail": null,
            "excerpt": "In this episode of The Alex Marlow Show, Alex is joined by Dr. Sebastian Gorka, Deputy Assistant to the President and Senior Director for Counter Terrorism in the National Security Council. Dr. Gorka shares his insights on the rapidly evolving landscape of drone warfare and the challenges it poses t",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:38.064Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Alex Marlow Show",
            "kind": "episode",
            "title": "Shock Upset in Wisconsin: How Francesca Hong Went Down; Prescription Drug Prices Plummeting",
            "url": "https://omny.fm/shows/the-alex-marlow-show/shock-upset-in-wisconsin-how-francesca-hong-went-down-prescription-drug-prices-plummeting",
            "at": "2026-08-12T19:00:00.000Z",
            "thumbnail": null,
            "excerpt": "On the latest edition of The Alex Marlow Show, Despite high polling, Francesca Hong falls in the WI Governor primary; Why did the polling get the Wisconsin race so wrong?; Alex takes a look at some of the bigger results from last night's primary races; AOC reportedly split from her Boyfriend; The So",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:10:38.064Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Alex Marlow Show",
            "kind": "episode",
            "title": "As Sharp as Ever: Dennis Prager Gives Rare Interview",
            "url": "https://omny.fm/shows/the-alex-marlow-show/as-sharp-as-ever-dennis-prager-gives-rare-interview",
            "at": "2026-08-12T12:00:00.000Z",
            "thumbnail": null,
            "excerpt": "In this episode of The Alex Marlow Show, Alex is joined by the legendary Dennis Prager! In this rare interview, Dennis shares insights on the importance of Judeo-Christian values, the battle over good and evil, and the significance of wisdom in modern society. They discusses Dennis's recovery, his i",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-12T20:27:16.221Z",
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
            "surfacesChecked": 39,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 71,
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
            "surfacesChecked": 33,
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
            "surfacesChecked": 13,
            "note": "something at esotericcarcare.com — not confirmed as theirs",
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
            "surfacesChecked": 39,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 69,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 41,
            "note": "something at shop.garagetherapy.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 31,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 18,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 33,
            "note": "something at garagetherapy.com — not confirmed as theirs",
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
        "places": [
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/sideline-exposure-college-football-fanatic/id1594293479?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          }
        ],
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
            "surfacesChecked": 68,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 107,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 75,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 53,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 9,
            "note": "found it — https://podcasts.apple.com/us/podcast/sideline-exposure-college-football-fanatic/id1594293479?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 57,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
            "seenAt": "2026-08-14T13:08:17.794Z",
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
            "seenAt": "2026-08-14T13:08:17.794Z",
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
            "seenAt": "2026-08-14T13:08:17.794Z",
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
        "places": [
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/cfb-breakdown/id1525719783?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Spotify",
            "url": "https://podcasters.spotify.com/pod/show/cfbbreakdown/episodes/Texas-AM-Aggies-Top-10-Players-for-2021-e12ehnr",
            "host": "podcasters.spotify.com",
            "followers": null
          }
        ],
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
            "surfacesChecked": 46,
            "note": "something at youtube.com/c/joebroback — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 100,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 69,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 49,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/cfb-breakdown/id1525719783?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 57,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
            "seenAt": "2026-08-14T13:08:27.047Z",
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
            "seenAt": "2026-08-14T13:08:27.047Z",
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
            "seenAt": "2026-08-14T13:08:27.047Z",
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
            "surfacesChecked": 69,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 90,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 63,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 46,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 21,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 45,
            "note": "something at darrengreene.com — not confirmed as theirs",
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
            "surfacesChecked": 44,
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
            "surfacesChecked": 47,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 34,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 18,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 40,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
            "surfacesChecked": 41,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 63,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 43,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 28,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 16,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 36,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
            "surfacesChecked": 40,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 62,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 42,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 32,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 15,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 40,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@packadaypodcast",
            "host": "youtube.com",
            "followers": 42800
          }
        ],
        "audience": {
          "total": 42800
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
                "value": "2 purchase-intent comments",
                "weightPct": 100,
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
                "detail": "we could not read their posting rate — they post often enough that 200 videos only reach back 57 days — not far enough behind the last 90 to compare against"
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
            "surfacesChecked": 11,
            "note": "found it — youtube.com/@packadaypodcast",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 55,
            "note": "something at packadaypodcast.com/newsletter — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 39,
            "note": "something at packadaypodcast.com/store — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 26,
            "note": "something at packadaypodcast.com/membership — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 13,
            "note": "something at packadaypodcast.com — not confirmed as theirs",
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
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "membership"
          },
          {
            "kind": "comment",
            "quote": "Want to join this channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "membership"
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
            "title": "Packers/Steelers Postgame Show!!!",
            "url": "https://www.youtube.com/watch?v=pGNTCmrdsEE",
            "at": "2026-08-14T10:00:09Z",
            "thumbnail": "https://i.ytimg.com/vi/pGNTCmrdsEE/hqdefault.jpg",
            "excerpt": null,
            "metric": 1624,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:42.448Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Packers/Steelers LIVE Postgame Show!!!",
            "url": "https://www.youtube.com/watch?v=4csFQa0-n6w",
            "at": "2026-08-14T03:26:09Z",
            "thumbnail": "https://i.ytimg.com/vi/4csFQa0-n6w/hqdefault.jpg",
            "excerpt": null,
            "metric": 8020,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:42.448Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Win or lose, this game means nothing.",
            "url": "https://www.youtube.com/watch?v=0NCiAeF0LRY",
            "at": "2026-08-14T02:05:31Z",
            "thumbnail": "https://i.ytimg.com/vi/0NCiAeF0LRY/hqdefault.jpg",
            "excerpt": null,
            "metric": 4574,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:42.448Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Packers/Steelers LIVE Pregame Show!!!",
            "url": "https://www.youtube.com/watch?v=_JXbxYvhELk",
            "at": "2026-08-13T22:58:30Z",
            "thumbnail": "https://i.ytimg.com/vi/_JXbxYvhELk/hqdefault.jpg",
            "excerpt": null,
            "metric": 5159,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:10:42.448Z",
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
      }
    ],
    "drops": {
      "2026-08-14": {
        "m_worth_call_they_make_2": [
          "c_worth_call_they_make_2__pantheorganizer",
          "c_worth_call_they_make_2__brettkollmann",
          "c_worth_call_they_make_2__missunderstoodpod",
          "c_worth_call_they_make_2__watchweswork",
          "c_worth_call_they_make_2__itshunterfriesen",
          "c_worth_call_they_make_2__marcelluswiley",
          "c_worth_call_they_make_2__superfastmatt",
          "c_worth_call_they_make_2__motorcitymechanic",
          "c_worth_call_they_make_2__hayesfawcett",
          "c_worth_call_they_make_2__girlwholove2gossip",
          "c_worth_call_they_make_2__ratchetsandwrenches",
          "c_worth_call_they_make_2__backseatcoach",
          "c_worth_call_they_make_2__samhartman_10",
          "c_worth_call_they_make_2__catsofyore",
          "c_worth_call_they_make_2__humblemechanic",
          "c_worth_call_they_make_2__brandonfwalker",
          "c_worth_call_they_make_2__gossipgilby",
          "c_worth_call_they_make_2__jeffvandermeer",
          "c_worth_call_they_make_2__pinehollowautodiagnostics",
          "c_worth_call_they_make_2__briansmobile1",
          "c_worth_call_they_make_2__thedraftnetwork",
          "c_worth_call_they_make_2__detailgroove",
          "c_worth_call_they_make_2__fordtechmakuloco",
          "c_worth_call_they_make_2__lockedonnfl",
          "c_worth_call_they_make_2__inalovelydream",
          "c_worth_call_they_make_2__forensicdetailingchannel",
          "c_worth_call_they_make_2__ratarossa",
          "c_worth_call_they_make_2__rj_young",
          "c_worth_call_they_make_2__celebriteablinds",
          "c_worth_call_they_make_2__robertgriffiniii",
          "c_worth_call_they_make_2__upandadams",
          "c_worth_call_they_make_2__clemyntine",
          "c_worth_call_they_make_2__yvanlacroix",
          "c_worth_call_they_make_2__50skid",
          "c_worth_call_they_make_2__magic_maike",
          "c_worth_call_they_make_2__isleepwitsockson",
          "c_worth_call_they_make_2__thoughtswgracie2_0",
          "c_worth_call_they_make_2__autofanatic",
          "c_worth_call_they_make_2__stiffmiesters_picks",
          "c_worth_call_they_make_2__unicouniuni3",
          "c_worth_call_they_make_2__jocelynanderson",
          "c_worth_call_they_make_2__patmcafeeshow",
          "c_worth_call_they_make_2__schrodingersbox",
          "c_worth_call_they_make_2__ecmclaughlin",
          "c_worth_call_they_make_2__blabbertok",
          "c_worth_call_they_make_2__cover1",
          "c_worth_call_they_make_2__richeisenshow",
          "c_worth_call_they_make_2__kurtbenkert",
          "c_worth_call_they_make_2__sharpfootballanalysis",
          "c_worth_call_they_make_2__marmel",
          "c_worth_call_they_make_2__theherd",
          "c_worth_call_they_make_2__lisaguerrero",
          "c_worth_call_they_make_2__nightcap",
          "c_worth_call_they_make_2__pff",
          "c_worth_call_they_make_2__chrissimmsunbuttoned",
          "c_worth_call_they_make_2__alexrollins",
          "c_worth_call_they_make_2__esotericcarcare",
          "c_worth_call_they_make_2__garagetherapyone",
          "c_worth_call_they_make_2__sidelineexposure",
          "c_worth_call_they_make_2__joebroback",
          "c_worth_call_they_make_2__darrengreenetiktok",
          "c_worth_call_they_make_2__jtosullivan",
          "c_worth_call_they_make_2__joegoodberry",
          "c_worth_call_they_make_2__rosstuckerpodcast",
          "c_worth_call_they_make_2__packadaypodcast"
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
      "source": "named",
      "sourceWhy": null
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
