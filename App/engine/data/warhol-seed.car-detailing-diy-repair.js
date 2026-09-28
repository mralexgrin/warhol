/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief car-detailing-diy-repair` on 2026-08-06.
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
      "today": "2026-08-06",
      "backtestDate": null,
      "availableDates": [
        "2026-08-06"
      ],
      "scoreThreshold": 25,
      "dropCap": 10,
      "coverageGate": 0.6,
      "states": {
        "PRESENT": "present",
        "ABSENT": "verified_absent",
        "UNKNOWN": "not_found"
      },
      "generatedBy": "warhol export",
      "generatedAt": "2026-08-06T20:42:13.529Z",
      "brief": {
        "slug": "car-detailing-diy-repair",
        "text": "Car detailing and DIY repair on YouTube — creators who work on a car on camera and name the specific products, tools, and parts they use. Main channel must be YouTube with comments open. Between 25,000 and 400,000 subscribers qualifies; do not weigh size beyond that range."
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
        "id": "m_car_detailing_diy_repair",
        "name": "car-detailing-diy-repair",
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
        "description": "Car detailing and DIY repair on YouTube — creators who work on a car on camera and name the specific products, tools, and parts they use. Main channel must be YouTube with comments open. Between 25,000 and 400,000 subscribers qualifies; do not weigh size beyond that range."
      }
    ],
    "candidates": [
      {
        "id": "c_ratchetsandwrenches",
        "name": "ratchetsandwrenches",
        "handle": "@ratchetsandwrenches",
        "initials": "RA",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d61c2b1b339a7bd130c84b5c5c9dc0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=59f39a80&x-expires=1786219200&x-signature=TnJFG%2B7hKCD6ss%2FSt%2BEPjbODIms%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@ratchetsandwrenches",
            "followers": 18,
            "url": "https://www.tiktok.com/@ratchetsandwrenches",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d61c2b1b339a7bd130c84b5c5c9dc0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=59f39a80&x-expires=1786219200&x-signature=TnJFG%2B7hKCD6ss%2FSt%2BEPjbODIms%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "There's no readable YouTube presence or subscriber count to confirm, and nothing here shows a car being worked on with named products, tools, or parts — just a near-empty TikTok profile."
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
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Technician filming hands-on repairs and part replacements with specifics.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_pinehollowautodiagnostics",
        "name": "pinehollowautodiagnostics",
        "handle": "@pinehollowautodiagnostics",
        "initials": "PI",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_m6q_coUUXSjEwX1lDneeYhGejOp8A04xyoHz-JmQGV6Uc=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
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
                "value": "−1% vs baseline",
                "weightPct": 0,
                "detail": "14 videos a month now, against 15 before that — down 1%; the recent ones are getting 22% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Ivan's main channel is YouTube at 277k subscribers, squarely in range, and it's live hands-on automotive troubleshooting and repair where he names the scan tools, meters, and parts he uses, with comments clearly open since he asks viewers to contribute there."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@pinehollowautodiagnostics",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at pinehollowdiagnostics.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "First you got me back into soldering over crimping. You may be convincing me more after this video. Love my TS 101 still need a Battery pack just cord for now till I break down and buy a battery pack👊🏻",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "in_drop",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Shop owner Ivan films real diagnostic and repair work, calling out scan tools and part numbers.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_motorcitymechanic",
        "name": "motorcitymechanic",
        "handle": "@motorcitymechanic",
        "initials": "MO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kaFAoWrqsWdm_zVN9kvkf6_Rgh6XcM79nb_diHLVIPN-U=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "Apart from a handle and a 252k YouTube subscriber count that sits in range, there's no actual evidence here — the bio and \"recent posts\" are scraped YouTube boilerplate, so nothing shows this person works on cars on camera, names the products and parts they use, or keeps comments open."
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
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at youtube.com/user/vipertech30813 — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "If the Pacifica was equipped with a 5.7 EZC instead of 3.6, I'd buy one!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I currently have a valve cover leak. I purchased the 13mm wrenches as suggested.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Working technician filming repair jobs and naming the parts and tools.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_forensicdetailingchannel",
        "name": "forensicdetailingchannel",
        "handle": "@forensicdetailingchannel",
        "initials": "FO",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/2a64c8be36e48471b71b096831a65819~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1ff22fef&x-expires=1786219200&x-signature=lSwveNAONEPd4fl8%2FSjk5ReZ328%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@forensicdetailingchannel",
            "followers": 169,
            "url": "https://www.tiktok.com/@forensicdetailingchannel",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/2a64c8be36e48471b71b096831a65819~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1ff22fef&x-expires=1786219200&x-signature=lSwveNAONEPd4fl8%2FSjk5ReZ328%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "The detailing-product testing content fits the brief, but there's no visible YouTube subscriber count or channel data here to confirm the required YouTube main channel in the 25k–400k band with comments open — all we can see is a 169-follower TikTok."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at youtube.com/c/forensicdetailingchannel — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 1 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — UK detailer who films paint correction and washing on real cars and names each chemical, pad and machine he reaches for.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_fordtechmakuloco",
        "name": "fordtechmakuloco",
        "handle": "@fordtechmakuloco",
        "initials": "FO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_lbuR3B_9sJqPJffysQqEWqtN_KGvt0jg9H7jnNpxnPGWA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@fordtechmakuloco",
            "followers": 31,
            "url": "https://www.tiktok.com/@fordtechmakuloco",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/896cc8e0a896b78df1e7c50195d7cd99~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=14a32ee8&x-expires=1786219200&x-signature=WprD8ACfpFZGvE8wnPsxKKV%2BQz0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
                "value": "+7% vs baseline",
                "weightPct": 0,
                "detail": "2.3 videos a month now, against 2.2 before that — up 7%, they are posting more; the recent ones are getting 36% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "The content is a perfect fit — hands-on Ford repair walkthroughs naming parts and tools — but the YouTube channel sits at about 944,000 subscribers, well outside the brief's 25,000–400,000 band."
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
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places · 1 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places · 1 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 6 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Ford tech doing on-camera diagnostics and repair with part numbers and tooling called out.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_watchweswork",
        "name": "watchweswork",
        "handle": "@watchweswork",
        "initials": "WA",
        "avatar": "https://yt3.googleusercontent.com/aTizCBe5rDNn8Dm_gZir5mNP6fFQptCgUW370B9rBbHCsa7CQPfIllAUcZNkdIra2JSidqS8nQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@watchweswork",
            "followers": 65,
            "url": "https://www.tiktok.com/@watchweswork",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/237dcdad9218ef057dd9b3ccf763c2c9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5f1453e4&x-expires=1786219200&x-signature=xEjEatYqGwZ7Tw3NxHaWTcrffIM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@watchweswork",
            "followers": 446000,
            "url": "https://www.youtube.com/@watchweswork",
            "avatar": "https://yt3.googleusercontent.com/aTizCBe5rDNn8Dm_gZir5mNP6fFQptCgUW370B9rBbHCsa7CQPfIllAUcZNkdIra2JSidqS8nQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 446000
        },
        "score": 22,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 22,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter",
                "weightPct": 100,
                "detail": "3 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
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
                "detail": "0.7 videos a month now, against 0.9 before that — down 24%; the recent ones are getting 32% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "His YouTube channel is 446,000 subscribers, which is above the brief's stated 400,000 ceiling, even though his hands-on car repair videos otherwise fit the ask."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@watchweswork",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at patreon.com/WatchWesWork — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at watchweswork.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I bought a rock rake from Lee Valley. Great to see a genius at work!Thanks Wes.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Independent mechanic filming diagnosis and repair jobs, naming parts and specialty tools.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_briansmobile1",
        "name": "briansmobile1",
        "handle": "@briansmobile1",
        "initials": "BR",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_k6tpOwGmaLxlPyZ0PyEozFqokRSDNQTLOuaI_AZ5tHFg=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "The brief sets a hard subscriber window of 25,000–400,000 and this channel sits at roughly 467,000, above the stated ceiling, even though the DIY car repair content and named tools/products otherwise fit perfectly."
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
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 4 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at creators.spotify.com/pod/show/briansmobile1 — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Mobile mechanic filming repairs and explaining the specific parts and tools used.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_ratarossa",
        "name": "ratarossa",
        "handle": "@ratarossa",
        "initials": "RA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mvGJnO5rIlKwVo6rxjYaFII3Yu-G47uZ6-LuzEWN0Nduk=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@ratarossa",
            "followers": 2606,
            "url": "https://www.tiktok.com/@ratarossa",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7324875266119008261~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=2f6c6e59&x-expires=1786219200&x-signature=0ebX4T0O8HUecwQjr7KDXXGLOs8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
                "value": "+77% vs baseline",
                "weightPct": 0,
                "detail": "3.7 videos a month now, against 2.1 before that — up 77%, they are posting more; the recent ones are getting 15% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "His channel is built on buying cheap, broken Ferraris and fixing them himself on camera, which is exactly the hands-on DIY repair work the brief wants, and his 289k YouTube subscribers sit inside the stated range with no sign comments are closed."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@ratarossa",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at patreon.com/ratarossa — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places · 1 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — UK owner-mechanic doing DIY exotic car repair on camera with specific tools and parts.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_pantheorganizer",
        "name": "pantheorganizer",
        "handle": "@pantheorganizer",
        "initials": "PA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_liLL4meflRjQhiawBwmxvl-VlONutQU6T1w-yvsuW-09Q=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@pantheorganizer",
            "followers": 43300,
            "url": "https://www.tiktok.com/@pantheorganizer",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/69c8a1fa80ba728dc3fb140a292c2148~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=5aa5a387&x-expires=1786219200&x-signature=XIi%2FAB1xVmmVz0UwD3lNNYdB3uQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
        "score": 18,
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
                "value": "No newsletter, no membership",
                "weightPct": 92,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "13 purchase-intent comments",
                "weightPct": 8,
                "detail": "13 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "The content is a perfect fit — hands-on car detailing tutorials naming specific products and tools — but the YouTube channel has about 1.11 million subscribers, well outside the brief's 25,000–400,000 range."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@pantheorganizer",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at pantheorganizer.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at pantheorganizer.com/podcast-with-the-rag-company-part-1 — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — pantheorganizer.com",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I have purchased many products from DIY and CLEAN, and love both.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Just started using this product and love it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Ordered!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'll try this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "But just to support Ivan I'll buy a bott",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I'm still hooked on Quickbeads.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I use the Diy wax , I can say it really does fill.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've used the Turtle wax graphene ceramic paste wax many times. I love it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have used the turtle wax ceramic plus graphene for a couple years now, very impressed how it compared to the others.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I have two unopened tins still on my shelf from when I thought it was being discontinued so I stocked up.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been trying different waxes for my summer car.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I had that exact Turtle Wax on my shelf for many years",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I bought it brand new when they made an unlimited edition for almost 50 bucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
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
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Detailing tutorial creator who walks through full washes and interior work, calling out the exact products.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_yvanlacroix",
        "name": "yvanlacroix",
        "handle": "@yvanlacroix",
        "initials": "YV",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7351751250926387246~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6101b9d9&x-expires=1786219200&x-signature=vt99fu2Kkj9rOZo5a5LUdEcnViE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@yvanlacroix",
            "followers": 559,
            "url": "https://www.tiktok.com/@yvanlacroix",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7351751250926387246~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6101b9d9&x-expires=1786219200&x-signature=vt99fu2Kkj9rOZo5a5LUdEcnViE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "There's no evidence of a YouTube channel at all — the only visible presence is a TikTok with 559 followers, so we can't confirm the required YouTube main channel or any on-camera detailing work naming products and tools."
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
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at substack.com/@yvanlacroix — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-auto-detailing-podcast/id903505596?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Detailer filming hands-on washes and corrections with product-by-product commentary.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_50skid",
        "name": "50skid",
        "handle": "@50skid",
        "initials": "50",
        "avatar": "https://yt3.googleusercontent.com/AM6-7GHggO_tDUH0YH_faM8-pPFxJudfSfsDJuZ-oZ225F0p5VCYEfkv4Bv_UpjSYgdE-MKCnw=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@50skid",
            "followers": null,
            "url": "https://www.tiktok.com/@50skid",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=a8bbd4bc&x-expires=1786219200&x-signature=x5VHfS8RvmFpEoqxFKBtmKu%2Fhb4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
                "weightPct": 99,
                "detail": "3 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
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
                "detail": "He's a DIY car repair YouTuber at 186,000 subscribers whose main channel is YouTube with comments clearly open — he explicitly redirects repair questions there so everyone can learn from the answer."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — youtube.com/@50skid",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at substack.com/@50skid — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 3 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at patreon.com/50skid — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at youtube.com/c/50sKidAuto — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "Do you still sell the M56 valve cover? If so, what is your ebay username? I'd like to buy from you if still possible. Thanks!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "store"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — DIY restoration and repair creator filming his own work and naming products and parts.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_superfastmatt",
        "name": "superfastmatt",
        "handle": "@superfastmatt",
        "initials": "SU",
        "avatar": "https://yt3.googleusercontent.com/nqgbsRZPop6g87lugiS2bCe3a7WfW7cRTW3WjIQIykcXdU9ykFmfSHRHRxRhUs5KtMNWc8iG6CA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@superfastmatt",
            "followers": 17700,
            "url": "https://www.tiktok.com/@superfastmatt",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/0b7ead6dbc777cca77f6d564a1916b41~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d6479597&x-expires=1786219200&x-signature=w%2BGkLj%2FD7w6fgJ%2B2MXmsEN%2B3%2FIc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
        "score": 13,
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
                "value": "No newsletter, no podcast",
                "weightPct": 94,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "9 purchase-intent comments",
                "weightPct": 6,
                "detail": "9 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "His YouTube channel is at 664,000 subscribers, which is above the brief's stated 400,000 ceiling, even though the hands-on engine-swap and repair content otherwise fits."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@superfastmatt",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at superfastmatt.myshopify.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at patreon.com/superfastmatt — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 1,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — tiktok.com/@superfastmatt",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 1 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [
          {
            "kind": "comment",
            "quote": "I want one. License plate: \"D2\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I've got my fingers crossed that Slate makes it. I love small trucks.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm yearning for an R3X.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "If I can afford the R3 I'll defo get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im for slate bigtime, ill get one once they become a readily available, if they do so.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "still bigger than i'd buy since i don't need a big car, but if the r3 is as small as promised, i might be convinced to get one",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I have my eye on an R2, once it level 3 self-drives.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'll probably buy a nice used R1T when they get a little more common.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I really like rivians. I would like to buy one in the future so I hope they can stick around.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-06",
            "engine": "llm",
            "label": "unspecified"
          }
        ],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — DIY builder and repairer who films his own wrenching and names the parts and tools involved.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_autofanatic",
        "name": "autofanatic",
        "handle": "@autofanatic",
        "initials": "AU",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_m1ijkD9rK50Wz60Y9dDYasyaS8TeHTMEHn3AGd-A7R1ck=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@autofanatic",
            "followers": null,
            "url": "https://www.tiktok.com/@autofanatic",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/b5f874fda0b0d3e1a3236948c2eefd86~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ffd4bbe5&x-expires=1786219200&x-signature=hRfQFPAXqVm0eBBPgbWGIr4tkow%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
        "score": 11,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 11,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no membership",
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
                "detail": "This is a São Paulo detailing shop's promo account driving WhatsApp bookings, with no evidence of on-camera repair videos naming products, and its YouTube count of 412 sits far below the brief's 25,000 subscriber floor."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@autofanatic",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at autofanatic.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at creators.spotify.com/pod/show/autofanatic — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at autofanatic.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Detailer who does on-camera product tests and demos naming brands and tools.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_humblemechanic",
        "name": "humblemechanic",
        "handle": "@humblemechanic",
        "initials": "HU",
        "avatar": "https://yt3.googleusercontent.com/CXZve3fL5X9V86aMVuIYCFQn2rIgADTJZJMc0cfNB5mMrNOOJv0urFZlctbffLIpD3byGVih=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@humblemechanic",
            "followers": 408000,
            "url": "https://www.tiktok.com/@humblemechanic",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/06704d2e5142f19148b419b7c69dc091~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=67a2cac4&x-expires=1786219200&x-signature=xPUHWK0ACNNjbtNpjoaZAFYpnd8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
        "score": 11,
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
                "detail": "1.7 videos a month now, against 2.2 before that — down 24%; the recent ones are getting 17% more views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "His YouTube channel is at about 1.05 million subscribers, well above the brief's 400,000 ceiling, even though the DIY repair content and named tools fit perfectly."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/humblemechanic",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 4,
            "note": "they link to it themselves",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/humble-mechanic-podcast/id1281270865?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — humblemechanic.com",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://www.amazon.com/shop/humblemechanic",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — VW/Audi technician doing DIY repair walkthroughs with named parts and tools.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_schrodingersbox",
        "name": "schrodingersbox",
        "handle": "@schrodingersbox",
        "initials": "SC",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kP4aSo1P6OyrtDTooWQvhPoslPg9rwdAS5S8XQN_78DpM=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@schrodingersbox",
            "followers": null,
            "url": "https://www.tiktok.com/@schrodingersbox",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7324163600040656901~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b8a52c15&x-expires=1786219200&x-signature=tM0MC2YfeBpYrJscbMC8bwH7xAU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@schrodingersbox",
            "followers": 301000,
            "url": "https://www.youtube.com/@schrodingersbox",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kP4aSo1P6OyrtDTooWQvhPoslPg9rwdAS5S8XQN_78DpM=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 301000
        },
        "score": 11,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 11,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter, no membership",
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
                "detail": "It's a YouTube-first advanced DIY auto repair and diagnostics channel at 301,000 subscribers — inside the range — where the work is done on camera with the specific tools, tests and parts called out."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@schrodingersbox",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — DIY car repair and project channel filming detailed teardown and fix work.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_detailgroove",
        "name": "detailgroove",
        "handle": "@detailgroove",
        "initials": "DE",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nE6A6ydVDHJ9FONG2zKnvDEsUcLXL-DPPcBeb6kx3CeAY=s900-c0x00ffffff-no-rj",
        "mandateId": "m_car_detailing_diy_repair",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@detailgroove",
            "followers": 152,
            "url": "https://www.tiktok.com/@detailgroove",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7321576095327748101~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ad426616&x-expires=1786219200&x-signature=6dYYDJma%2B1cmJFkVNwVaNEgyfDk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
        "score": 10,
        "scoreDelta": null,
        "confidence": 0.5,
        "pillars": {
          "gap": {
            "score": 10,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.5,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no membership",
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
                "value": "−8% vs baseline",
                "weightPct": 0,
                "detail": "15 videos a month now, against 16 before that — down 8%; the recent ones are getting 54% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "It's a car detailing channel with 252,000 YouTube subscribers, squarely in the requested range, and the hands-on cleaning format is the kind where products and tools get named on camera."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@detailgroove",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 6,
            "note": "something at detailgroove.com/newsletter — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at creators.spotify.com/pod/show/detailgroove — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 0,
            "note": "something at detailgroove.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "their bio does not mention it, which is not the same as nobody having signed them",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "nothing in the 4 recent captions we could read — a sample, which cannot show that none exist",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Detailer who films start-to-finish jobs and discusses specific compounds, coatings and tools.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_esotericcarcare",
        "name": "esotericcarcare",
        "handle": "@esotericcarcare",
        "initials": "ES",
        "avatar": null,
        "mandateId": "m_car_detailing_diy_repair",
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
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 6,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 5,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 3,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at creators.spotify.com/pod/show/esotericcarcare — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at esotericcarcare.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — Ohio detail shop channel filming correction and coating work with named products and equipment.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_garagetherapyone",
        "name": "garagetherapyone",
        "handle": "@garagetherapyone",
        "initials": "GA",
        "avatar": null,
        "mandateId": "m_car_detailing_diy_repair",
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
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 6,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 4,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 3,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 2,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at garagetherapy.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read any of their own pages",
            "observedAt": "2026-08-06",
            "source": "representation"
          },
          {
            "item": "Sponsored posts",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their captions",
            "observedAt": "2026-08-06",
            "source": "sponsorships"
          },
          {
            "item": "Affiliate links",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "we could not read their links",
            "observedAt": "2026-08-06",
            "source": "affiliate_links"
          },
          {
            "item": "Platform subscriptions",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "platform_subscriptions"
          },
          {
            "item": "Shopping tags",
            "state": "not_found",
            "surfacesChecked": 0,
            "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
            "observedAt": "2026-08-06",
            "source": "shopping_tags"
          }
        ],
        "evidence": [],
        "status": "candidate",
        "resurfaced": null,
        "passed": null,
        "promoted": null,
        "outcome": null,
        "asOf": "2026-08-06",
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
        "sourceWhy": "a model proposed this handle from a brief — UK detailer filming full details with product-by-product narration.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      }
    ],
    "drops": {
      "2026-08-06": {
        "m_car_detailing_diy_repair": [
          "c_ratchetsandwrenches",
          "c_pinehollowautodiagnostics",
          "c_motorcitymechanic",
          "c_forensicdetailingchannel",
          "c_fordtechmakuloco",
          "c_watchweswork",
          "c_briansmobile1",
          "c_ratarossa",
          "c_pantheorganizer",
          "c_yvanlacroix",
          "c_50skid",
          "c_superfastmatt",
          "c_autofanatic",
          "c_humblemechanic",
          "c_schrodingersbox",
          "c_detailgroove",
          "c_esotericcarcare",
          "c_garagetherapyone"
        ]
      }
    },
    "timeline": [],
    "runANameResult": {
      "id": "c_ratchetsandwrenches",
      "name": "ratchetsandwrenches",
      "handle": "@ratchetsandwrenches",
      "initials": "RA",
      "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d61c2b1b339a7bd130c84b5c5c9dc0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=59f39a80&x-expires=1786219200&x-signature=TnJFG%2B7hKCD6ss%2FSt%2BEPjbODIms%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
      "mandateId": "m_car_detailing_diy_repair",
      "primaryPlatform": "TikTok profile",
      "platforms": [
        {
          "name": "TikTok profile",
          "handle": "@ratchetsandwrenches",
          "followers": 18,
          "url": "https://www.tiktok.com/@ratchetsandwrenches",
          "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/7d61c2b1b339a7bd130c84b5c5c9dc0c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=59f39a80&x-expires=1786219200&x-signature=TnJFG%2B7hKCD6ss%2FSt%2BEPjbODIms%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
          "avatarExpires": "2026-08-08T20:00:00.000Z",
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
          "verdict": "fail",
          "engine": "llm",
          "subsignals": [
            {
              "key": "brief",
              "label": "Against the brief",
              "engine": "llm",
              "value": "fail",
              "detail": "There's no readable YouTube presence or subscriber count to confirm, and nothing here shows a car being worked on with named products, tools, or parts — just a near-empty TikTok profile."
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
          "observedAt": "2026-08-06",
          "source": "youtube_channel"
        },
        {
          "item": "Newsletter",
          "state": "verified_absent",
          "surfacesChecked": 6,
          "note": "not there · we looked in 6 places",
          "observedAt": "2026-08-06",
          "source": "newsletter"
        },
        {
          "item": "Store",
          "state": "verified_absent",
          "surfacesChecked": 5,
          "note": "not there · we looked in 5 places · 2 wouldn't answer",
          "observedAt": "2026-08-06",
          "source": "store"
        },
        {
          "item": "Membership",
          "state": "verified_absent",
          "surfacesChecked": 3,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-06",
          "source": "membership"
        },
        {
          "item": "Podcast",
          "state": "verified_absent",
          "surfacesChecked": 2,
          "note": "not there · we looked in 2 places",
          "observedAt": "2026-08-06",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "verified_absent",
          "surfacesChecked": 3,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-06",
          "source": "website"
        },
        {
          "item": "Representation",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "their bio does not mention it, which is not the same as nobody having signed them",
          "observedAt": "2026-08-06",
          "source": "representation"
        },
        {
          "item": "Sponsored posts",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "nothing in the 1 recent captions we could read — a sample, which cannot show that none exist",
          "observedAt": "2026-08-06",
          "source": "sponsorships"
        },
        {
          "item": "Affiliate links",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "none among the 0 links they publish, though these usually sit in video descriptions we cannot read",
          "observedAt": "2026-08-06",
          "source": "affiliate_links"
        },
        {
          "item": "Platform subscriptions",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "Platform subscription status is only visible through partner APIs we do not have. Resolves not_found and says so.",
          "observedAt": "2026-08-06",
          "source": "platform_subscriptions"
        },
        {
          "item": "Shopping tags",
          "state": "not_found",
          "surfacesChecked": 0,
          "note": "Shopping-tag status is only visible through partner APIs we do not have. Resolves not_found and says so.",
          "observedAt": "2026-08-06",
          "source": "shopping_tags"
        }
      ],
      "evidence": [],
      "status": "candidate",
      "resurfaced": null,
      "passed": null,
      "promoted": null,
      "outcome": null,
      "asOf": "2026-08-06",
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
      "sourceWhy": "a model proposed this handle from a brief — Technician filming hands-on repairs and part replacements with specifics.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
