/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief cover-biggest-primetime-streaming` on 2026-08-06.
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
      "generatedAt": "2026-08-06T20:42:13.161Z",
      "brief": {
        "slug": "cover-biggest-primetime-streaming",
        "text": "People who cover the biggest primetime streaming shows — Netflix and Prime Video recaps, theories, casting news, and the discourse around a season while it airs."
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
        "id": "m_cover_biggest_primetime_streaming",
        "name": "cover-biggest-primetime-streaming",
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
        "description": "People who cover the biggest primetime streaming shows — Netflix and Prime Video recaps, theories, casting news, and the discourse around a season while it airs."
      }
    ],
    "candidates": [
      {
        "id": "c_missunderstoodpod",
        "name": "missunderstoodpod",
        "handle": "@missunderstoodpod",
        "initials": "MI",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/56838d8da04ad98f2e66d8d624c0c338~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7f1fb936&x-expires=1786219200&x-signature=U%2F6FopG%2FwjyT1mjyKjvclf88nfU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@missunderstoodpod",
            "followers": 23600,
            "url": "https://www.tiktok.com/@missunderstoodpod",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/56838d8da04ad98f2e66d8d624c0c338~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7f1fb936&x-expires=1786219200&x-signature=U%2F6FopG%2FwjyT1mjyKjvclf88nfU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
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
                "value": "6 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "6 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "This is a podcast about real people flattened into a single headline — true-crime/tabloid-style biography — not primetime streaming show recaps, theories, or casting discourse for Netflix and Prime Video."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 23,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 33,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/miss-understood-podcast/id1229498987?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 15,
            "note": "they link to it themselves",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_gossipgilby",
        "name": "gossipgilby",
        "handle": "@gossipgilby",
        "initials": "GO",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/048294af7a7edb72fe6b2c8042b4d945~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=33d7ddfe&x-expires=1786219200&x-signature=IcyuHX6Ci2plLS5vfbM%2FQHDy7R4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@gossipgilby",
            "followers": 6919,
            "url": "https://www.tiktok.com/@gossipgilby",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/048294af7a7edb72fe6b2c8042b4d945~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=33d7ddfe&x-expires=1786219200&x-signature=IcyuHX6Ci2plLS5vfbM%2FQHDy7R4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 6919
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
                "detail": "Their main platform sits at about 6,900 TikTok followers, well below the brief's 20,000 threshold, and nothing here shows they actually cover Netflix or Prime Video shows rather than general pop-culture gossip."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 30,
            "note": "something at tiktok.com/@gossipgilby — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 28,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 10,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 2 places · 1 wouldn't answer",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_girlwholove2gossip",
        "name": "girlwholove2gossip",
        "handle": "@girlwholove2gossip",
        "initials": "GI",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/b686c5925b522b84b9cc42e13ab4abd9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7de149ca&x-expires=1786219200&x-signature=%2Fs2tgcNFRD2HBx8AofbgDMbdRJk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@girlwholove2gossip",
            "followers": 45800,
            "url": "https://www.tiktok.com/@girlwholove2gossip",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/b686c5925b522b84b9cc42e13ab4abd9~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7de149ca&x-expires=1786219200&x-signature=%2Fs2tgcNFRD2HBx8AofbgDMbdRJk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 45800
        },
        "score": 22,
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
                "detail": "Her beat is celebrity, royal, and political gossip, not primetime streaming shows — nothing indicates Netflix or Prime Video recaps, theories, or season discourse."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 24,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 36,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 22,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 16,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/chins-giggles/id1615113859?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 18,
            "note": "found it — tiktok.com/@girlwholove2gossip",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_inalovelydream",
        "name": "inalovelydream",
        "handle": "@inalovelydream",
        "initials": "IN",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/4e71cd9267114144b435a9528b3ce549~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7986ff38&x-expires=1786219200&x-signature=2WmirZj8e2LlXw0a7ylBaP5wZQI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@inalovelydream",
            "followers": 25600,
            "url": "https://www.tiktok.com/@inalovelydream",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/4e71cd9267114144b435a9528b3ce549~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7986ff38&x-expires=1786219200&x-signature=2WmirZj8e2LlXw0a7ylBaP5wZQI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 25600
        },
        "score": 22,
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
                "detail": "Her lane is celebrity gossip and blind items, not recaps, theories, or season-by-season discourse around Netflix and Prime Video shows, so the core topic the brief asks for isn't there."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 32,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 14,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/scrubs-off-duty/id1646817604?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 17,
            "note": "they link to it themselves",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_celebriteablinds",
        "name": "celebriteablinds",
        "handle": "@celebriteablinds",
        "initials": "CE",
        "avatar": "https://yt3.googleusercontent.com/C3nyKmnL41fymejS7Qbb0W75Cua5s_XN9EITDs-rl6GBTRFZJUr_xk1DBPqb5lsvpdVLPaaNTQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@celebriteablinds",
            "followers": 24100,
            "url": "https://www.youtube.com/@celebriteablinds",
            "avatar": "https://yt3.googleusercontent.com/C3nyKmnL41fymejS7Qbb0W75Cua5s_XN9EITDs-rl6GBTRFZJUr_xk1DBPqb5lsvpdVLPaaNTQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 24100
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
                "detail": "we could not read their posting rate — they post often enough that 200 uploads only reach back 107 days — not far enough behind the last 90 to compare against"
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
                "detail": "This creator does celebrity blind-item gossip rather than recaps, theories, or casting discourse around Netflix and Prime Video primetime shows, so the subject matter doesn't match the brief."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — youtube.com/@celebriteablinds",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 32,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 6,
            "note": "something at patreon.com/CelebriteaBlinds — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 8,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 14,
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_thoughtswgracie2_0",
        "name": "thoughtswgracie2.0",
        "handle": "@thoughtswgracie2.0",
        "initials": "TH",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e91679ca13e0ac33d00d7d29ae879c31~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=fcc3476b&x-expires=1786219200&x-signature=iSHc%2BcLrXn0wRvJ4RNgBrbYVsDU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@thoughtswgracie2.0",
            "followers": 43500,
            "url": "https://www.tiktok.com/@thoughtswgracie2.0",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/e91679ca13e0ac33d00d7d29ae879c31~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=fcc3476b&x-expires=1786219200&x-signature=iSHc%2BcLrXn0wRvJ4RNgBrbYVsDU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
                "value": "6 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "6 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "She bills herself as a pop-culture/TV and cinema critic with 43.5k TikTok followers, and that first-person critic format on TikTok is essentially her talking to camera about shows and the discourse around them rather than reposting clips."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 14,
            "note": "3 of 6 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 13,
            "note": "2 of 4 places wouldn't answer; only 2 of the 3 places we need actually answered",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/kerusso-daily-devotional/id1395536128?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 15,
            "note": "found it — tiktok.com/@thoughtswgracie2.0",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_magic_maike",
        "name": "magic.maike",
        "handle": "@magic.maike",
        "initials": "MA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/667e273b519e276d83f8742ecf5a03ec~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=97c03588&x-expires=1786219200&x-signature=iXqNPlt5Do8xMLIH6OSyZS%2B%2FDtg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@magic.maike",
            "followers": 4868,
            "url": "https://www.tiktok.com/@magic.maike",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/667e273b519e276d83f8742ecf5a03ec~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=97c03588&x-expires=1786219200&x-signature=iXqNPlt5Do8xMLIH6OSyZS%2B%2FDtg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 4868
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "Their only confirmed audience is about 4,900 TikTok followers, well under the brief's stated 20,000 minimum, and the bio shows only general pop-culture chatter with no evidence they cover Netflix or Prime Video seasons specifically."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 20,
            "note": "something at youtube.com/@magicmaike — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 14,
            "note": "3 of 6 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 3 places · 3 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 8,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 16,
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_clemyntine",
        "name": "clemyntine",
        "handle": "@clemyntine",
        "initials": "CL",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_l7AZ5OkPRyfZvWFYpSUofRrY2_DL5cm_g_BLep8InonA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@clemyntine",
            "followers": 284300,
            "url": "https://www.tiktok.com/@clemyntine",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0c98a9ca4fb4a859eea3b1a540062533~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9f6efe52&x-expires=1786219200&x-signature=eRkbOPrn0jRdDBtES5WHoZRO%2BG8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
          "total": 284300
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "Her lane is pop culture history, celebrity blinds and gossip deep dives, not primetime streaming show recaps, theories, or the week-to-week discourse around a Netflix or Prime Video season as it airs."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — youtube.com/@clemyntine",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 32,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/a-date-with-dateline/id1244348213?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 16,
            "note": "something at tiktok.com/@clemyntine — not confirmed as theirs",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_blabbertok",
        "name": "blabbertok",
        "handle": "@blabbertok",
        "initials": "BL",
        "avatar": "https://yt3.googleusercontent.com/DFc_GDj1cg1DopxiPuUPN4kf9YhvhNQAkar5ru5a26tnt9MqYzRpuGSQnxRu_sVR6JBhNNfK=s900-c0x00ffffff-no-rj",
        "mandateId": "m_cover_biggest_primetime_streaming",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@blabbertok",
            "followers": 255900,
            "url": "https://www.tiktok.com/@blabbertok",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7310216441406423082~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=18936507&x-expires=1786219200&x-signature=mA7gMOiUVIJKN8q0yVQBXAPz6CI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
          "total": 255900
        },
        "score": 8,
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
                "detail": "we could not read their posting rate — their whole channel is 128 days old, so there is no earlier stretch to compare the last 90 days against"
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
                "detail": "Blabbertok is a general current-events commentary account with no sign of covering Netflix or Prime Video shows, recaps, theories, or season discourse."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — youtube.com/@blabbertok",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 18,
            "note": "something at substack.com/@blabbertok — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 15,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 8,
            "note": "something at creators.spotify.com/pod/show/blabbertok — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 15,
            "note": "they link to it themselves",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_darrengreenetiktok",
        "name": "darrengreenetiktok",
        "handle": "@darrengreenetiktok",
        "initials": "DA",
        "avatar": null,
        "mandateId": "m_cover_biggest_primetime_streaming",
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
            "surfacesChecked": 23,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 30,
            "note": "something at newsletter.darrengreene.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 20,
            "note": "something at store.darrengreene.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 14,
            "note": "something at members.darrengreene.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 6,
            "note": "something at podcast.darrengreene.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 14,
            "note": "something at darrengreene.com — not confirmed as theirs",
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      }
    ],
    "drops": {
      "2026-08-06": {
        "m_cover_biggest_primetime_streaming": [
          "c_missunderstoodpod",
          "c_gossipgilby",
          "c_girlwholove2gossip",
          "c_inalovelydream",
          "c_celebriteablinds",
          "c_thoughtswgracie2_0",
          "c_magic_maike",
          "c_clemyntine",
          "c_blabbertok",
          "c_darrengreenetiktok"
        ]
      }
    },
    "timeline": [],
    "runANameResult": {
      "id": "c_missunderstoodpod",
      "name": "missunderstoodpod",
      "handle": "@missunderstoodpod",
      "initials": "MI",
      "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/56838d8da04ad98f2e66d8d624c0c338~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7f1fb936&x-expires=1786219200&x-signature=U%2F6FopG%2FwjyT1mjyKjvclf88nfU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
      "mandateId": "m_cover_biggest_primetime_streaming",
      "primaryPlatform": "TikTok profile",
      "platforms": [
        {
          "name": "TikTok profile",
          "handle": "@missunderstoodpod",
          "followers": 23600,
          "url": "https://www.tiktok.com/@missunderstoodpod",
          "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/56838d8da04ad98f2e66d8d624c0c338~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=7f1fb936&x-expires=1786219200&x-signature=U%2F6FopG%2FwjyT1mjyKjvclf88nfU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
          "avatarExpires": "2026-08-08T20:00:00.000Z",
          "avatarStale": false,
          "matchConfidence": 1
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
              "value": "6 dead links they still publish — they tried, it broke",
              "weightPct": 100,
              "detail": "6 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
              "detail": "This is a podcast about real people flattened into a single headline — true-crime/tabloid-style biography — not primetime streaming show recaps, theories, or casting discourse for Netflix and Prime Video."
            }
          ]
        }
      },
      "inventory": [
        {
          "item": "YouTube channel",
          "state": "verified_absent",
          "surfacesChecked": 23,
          "note": "not there · we looked in 5 places",
          "observedAt": "2026-08-06",
          "source": "youtube_channel"
        },
        {
          "item": "Newsletter",
          "state": "verified_absent",
          "surfacesChecked": 33,
          "note": "not there · we looked in 6 places",
          "observedAt": "2026-08-06",
          "source": "newsletter"
        },
        {
          "item": "Store",
          "state": "verified_absent",
          "surfacesChecked": 21,
          "note": "not there · we looked in 4 places · 2 wouldn't answer",
          "observedAt": "2026-08-06",
          "source": "store"
        },
        {
          "item": "Membership",
          "state": "verified_absent",
          "surfacesChecked": 15,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-06",
          "source": "membership"
        },
        {
          "item": "Podcast",
          "state": "present",
          "surfacesChecked": 2,
          "note": "found it — https://podcasts.apple.com/us/podcast/miss-understood-podcast/id1229498987?uo=4",
          "observedAt": "2026-08-06",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "present",
          "surfacesChecked": 15,
          "note": "they link to it themselves",
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
