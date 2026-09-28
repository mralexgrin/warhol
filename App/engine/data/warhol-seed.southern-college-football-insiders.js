/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief southern-college-football-insiders` on 2026-08-06.
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
      "generatedAt": "2026-08-06T20:53:50.397Z",
      "brief": {
        "slug": "southern-college-football-insiders",
        "text": "Southern college football insiders. Think beat writers, the people who actually get local coaches on the phone, and the folks who know which recruit is about to flip before anyone else does. They don't need a big following. What matters is that they consistently know their stuff and their takes hold up week after week."
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
        "id": "m_southern_college_football_insiders",
        "name": "southern-college-football-insiders",
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
        "description": "Southern college football insiders. Think beat writers, the people who actually get local coaches on the phone, and the folks who know which recruit is about to flip before anyone else does. They don't need a big following. What matters is that they consistently know their stuff and their takes hold up week after week."
      }
    ],
    "candidates": [
      {
        "id": "c_itshunterfriesen",
        "name": "itshunterfriesen",
        "handle": "@itshunterfriesen",
        "initials": "IT",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6b20e173&x-expires=1786219200&x-signature=bFCMUmX57RFgync4NwjVfCyzMrg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@itshunterfriesen",
            "followers": 103600,
            "url": "https://www.tiktok.com/@itshunterfriesen",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6b20e173&x-expires=1786219200&x-signature=bFCMUmX57RFgync4NwjVfCyzMrg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 103600
        },
        "score": 29,
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
            "score": 12,
            "max": 40,
            "engine": "rule+llm",
            "subsignals": [
              {
                "key": "abandon",
                "label": "Abandonment markers",
                "engine": "rule",
                "value": "7 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "7 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "Beyond an \"ASU\" tag and a 103.6k TikTok following, there's no evidence this creator actually delivers his own commentary on college football games, players, or program news rather than generic short videos."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 25,
            "note": "something at youtube.com/@hunterfriesen — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 37,
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
            "surfacesChecked": 15,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 17,
            "note": "found it — tiktok.com/@itshunterfriesen",
            "observedAt": "2026-08-06",
            "source": "website"
          },
          {
            "item": "Representation",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — business inquiries",
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
        "id": "c_hayesfawcett",
        "name": "hayesfawcett",
        "handle": "@hayesfawcett",
        "initials": "HA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/001079e3d679b4692167fc3de2c6a9bb~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8fe9c11a&x-expires=1786219200&x-signature=ihR8DasoPWb74Pk3DY%2FX0S99s4Y%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@hayesfawcett",
            "followers": 4374,
            "url": "https://www.tiktok.com/@hayesfawcett",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/001079e3d679b4692167fc3de2c6a9bb~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8fe9c11a&x-expires=1786219200&x-signature=ihR8DasoPWb74Pk3DY%2FX0S99s4Y%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 4374
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
                "detail": "His account is built on edits, graphics and news reposts rather than his own takes on games and players, and the only visible following is about 4,400 on TikTok, short of the 25,000 the brief requires."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 29,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 43,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 29,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 20,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 10,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 21,
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_brandonfwalker",
        "name": "brandonfwalker",
        "handle": "@brandonfwalker",
        "initials": "BR",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/00b63407150e9355ffa920c96a0fe8f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c9eda432&x-expires=1786219200&x-signature=sOetwtpIy2NOmuFRi%2BBJgPM5WWU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@brandonfwalker",
            "followers": 138600,
            "url": "https://www.tiktok.com/@brandonfwalker",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/00b63407150e9355ffa920c96a0fe8f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c9eda432&x-expires=1786219200&x-signature=sOetwtpIy2NOmuFRi%2BBJgPM5WWU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 138600
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
                "detail": "He hosts his own college football show (The Brandon Walker CFB Show) and delivers his own on-camera takes rather than reposting highlights, with 138.6k TikTok followers well past the 25k bar."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 40,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/rasslin-with-brandon-f-walker/id1540836655?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 22,
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_backseatcoach",
        "name": "backseatcoach",
        "handle": "@backseatcoach",
        "initials": "BA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kHxOdcTl9pN1bXVsBim_rLEs0zQjE8Q2TKD0F6zCefhg=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@backseatcoach",
            "followers": 85800,
            "url": "https://www.tiktok.com/@backseatcoach",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7329012677399805994~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9bb70d6a&x-expires=1786219200&x-signature=2aVpXF8ahwukaAC2ME7kFMJHHug%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
                "value": "8 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "8 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "The only description of what they actually make says they find and compile other people's videos, highlights and hype clips, which is the reposting the brief rules out, and there's no evidence of their own on-camera or written takes on college football."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — youtube.com/@backseatcoach",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 44,
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
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/todd-n-tyler-radio-empire/id1110804593?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 21,
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
        "id": "c_samhartman_10",
        "name": "samhartman_10",
        "handle": "@samhartman_10",
        "initials": "SA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c69638fb51dd863b0cebce682e972469~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=12473b22&x-expires=1786219200&x-signature=KeCLaFOL0lispDrejArx9nOsbJc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@samhartman_10",
            "followers": 118200,
            "url": "https://www.tiktok.com/@samhartman_10",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c69638fb51dd863b0cebce682e972469~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=12473b22&x-expires=1786219200&x-signature=KeCLaFOL0lispDrejArx9nOsbJc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 118200
        },
        "score": 18,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 18,
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
                "detail": "He appears to be a college football player rather than a commentator, and there's no evidence in his bio or posts that he gives his own takes on games, players, or program news."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 26,
            "note": "something at youtube.com/@samhartman10 — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 30,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 27,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 17,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/writers-room-rejects/id1882461291?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 23,
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
        "source": "named",
        "sourceWhy": "a person typed this handle in"
      },
      {
        "id": "c_rj_young",
        "name": "rj_young",
        "handle": "@rj_young",
        "initials": "RJ",
        "avatar": "https://yt3.googleusercontent.com/doSyH-4GdDB2cJjKh35VTzxmaiL9X2zIbxPAx8m749h1BSufQK6QqR6FBLVeGoaywRjXUzIRnvk=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@rj_young",
            "followers": 12000,
            "url": "https://www.tiktok.com/@rj_young",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a2eb002be4c79599a080722aa8031f36~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=697adcdd&x-expires=1786219200&x-signature=RRKL89EBtR%2BlAYtqA%2BG54VZUyRQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
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
                "value": "No newsletter, no store",
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
                "detail": "He's exactly the on-camera college football take-giver the brief wants, but the only follower count we can see is 12,000 on TikTok, short of the 25,000 the brief sets as the bar, with his YouTube and Instagram numbers unknown."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 19,
            "note": "found it — youtube.com/@rj_young",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
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
            "state": "present",
            "surfacesChecked": 17,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — https://podcasts.apple.com/us/podcast/adapt-and-respond-with-rj-young-a-college-football-podcast/id1346315892?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 20,
            "note": "something at rjyoung.com — not confirmed as theirs",
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
        "id": "c_isleepwitsockson",
        "name": "isleepwitsockson",
        "handle": "@isleepwitsockson",
        "initials": "IS",
        "avatar": "https://yt3.googleusercontent.com/0WNKPD6khi20EI5zD79dGDKky4nBDJy3a7p5u3ysJaFimxl8pHMHchmvpVUVe8nZE9Z-uMSsBQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@isleepwitsockson",
            "followers": 114700,
            "url": "https://www.tiktok.com/@isleepwitsockson",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0816bf7c97c5aeff48358448ae36e349~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=74449904&x-expires=1786219200&x-signature=OxIsTsvCR%2BF26J87JWz38BQr3SM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@isleepwitsockson",
            "followers": 24500,
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
                "value": "−7% vs baseline",
                "weightPct": 0,
                "detail": "4.7 videos a month now, against 5 before that — down 7%; the recent ones are getting 87% more views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Nothing here shows college football commentary — the bio reads as a general athlete trainer and sports talk account based in OKC, with no evidence of on-camera takes on college games, players, or program news."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 17,
            "note": "found it — youtube.com/@isleepwitsockson",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 24,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 18,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-old-switcharoo-gaming-retro-with-mike-and/id1702798095?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 18,
            "note": "2 of 5 places wouldn't answer",
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
        "id": "c_stiffmiesters_picks",
        "name": "stiffmiesters.picks",
        "handle": "@stiffmiesters.picks",
        "initials": "ST",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/e54fe4c0b105ec82892d057b44ca98af~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b9ec81e7&x-expires=1786219200&x-signature=lOa5yE1c3sXalInSPu5HahH58gM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@stiffmiesters.picks",
            "followers": 4445,
            "url": "https://www.tiktok.com/@stiffmiesters.picks",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/e54fe4c0b105ec82892d057b44ca98af~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b9ec81e7&x-expires=1786219200&x-signature=lOa5yE1c3sXalInSPu5HahH58gM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-08T20:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 4445
        },
        "score": 6,
        "scoreDelta": null,
        "confidence": 0.333,
        "pillars": {
          "gap": {
            "score": 6,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.333,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no podcast",
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
                "detail": "This is a sports-betting picks account focused on MLB records and a paid Discord, not college football commentary, and its 4,445 TikTok followers fall well under the brief's 25,000 threshold."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 26,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 15,
            "note": "3 of 5 places wouldn't answer; only 2 of the 5 places we need actually answered",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 14,
            "note": "only 2 of the 3 places we need actually answered",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 16,
            "note": "something at discord.com/invite/stiffmiesters — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 8,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 15,
            "note": "something at stiffmiesters.picks.com — not confirmed as theirs",
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
        "id": "c_sidelineexposure",
        "name": "sidelineexposure",
        "handle": "@sidelineexposure",
        "initials": "SI",
        "avatar": null,
        "mandateId": "m_southern_college_football_insiders",
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
            "surfacesChecked": 28,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 44,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 29,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 20,
            "note": "something at locals.com — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/sideline-exposure-college-football-fanatic/id1594293479?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 22,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
      },
      {
        "id": "c_joebroback",
        "name": "joebroback",
        "handle": "@joebroback",
        "initials": "JO",
        "avatar": null,
        "mandateId": "m_southern_college_football_insiders",
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
            "state": "present",
            "surfacesChecked": 18,
            "note": "something at youtube.com/c/joebroback — not confirmed as theirs",
            "observedAt": "2026-08-06",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 39,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 26,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 18,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-06",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/cfb-breakdown/id1525719783?uo=4",
            "observedAt": "2026-08-06",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 22,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
        "m_southern_college_football_insiders": [
          "c_itshunterfriesen",
          "c_hayesfawcett",
          "c_brandonfwalker",
          "c_backseatcoach",
          "c_samhartman_10",
          "c_rj_young",
          "c_isleepwitsockson",
          "c_stiffmiesters_picks",
          "c_sidelineexposure",
          "c_joebroback"
        ]
      }
    },
    "timeline": [],
    "runANameResult": {
      "id": "c_itshunterfriesen",
      "name": "itshunterfriesen",
      "handle": "@itshunterfriesen",
      "initials": "IT",
      "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6b20e173&x-expires=1786219200&x-signature=bFCMUmX57RFgync4NwjVfCyzMrg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
      "mandateId": "m_southern_college_football_insiders",
      "primaryPlatform": "TikTok profile",
      "platforms": [
        {
          "name": "TikTok profile",
          "handle": "@itshunterfriesen",
          "followers": 103600,
          "url": "https://www.tiktok.com/@itshunterfriesen",
          "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6b20e173&x-expires=1786219200&x-signature=bFCMUmX57RFgync4NwjVfCyzMrg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
          "avatarExpires": "2026-08-08T20:00:00.000Z",
          "avatarStale": false,
          "matchConfidence": 1
        }
      ],
      "audience": {
        "total": 103600
      },
      "score": 29,
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
          "score": 12,
          "max": 40,
          "engine": "rule+llm",
          "subsignals": [
            {
              "key": "abandon",
              "label": "Abandonment markers",
              "engine": "rule",
              "value": "7 dead links they still publish — they tried, it broke",
              "weightPct": 100,
              "detail": "7 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
              "detail": "Beyond an \"ASU\" tag and a 103.6k TikTok following, there's no evidence this creator actually delivers his own commentary on college football games, players, or program news rather than generic short videos."
            }
          ]
        }
      },
      "inventory": [
        {
          "item": "YouTube channel",
          "state": "present",
          "surfacesChecked": 25,
          "note": "something at youtube.com/@hunterfriesen — not confirmed as theirs",
          "observedAt": "2026-08-06",
          "source": "youtube_channel"
        },
        {
          "item": "Newsletter",
          "state": "verified_absent",
          "surfacesChecked": 37,
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
          "surfacesChecked": 15,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-06",
          "source": "membership"
        },
        {
          "item": "Podcast",
          "state": "verified_absent",
          "surfacesChecked": 7,
          "note": "not there · we looked in 1 place",
          "observedAt": "2026-08-06",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "present",
          "surfacesChecked": 17,
          "note": "found it — tiktok.com/@itshunterfriesen",
          "observedAt": "2026-08-06",
          "source": "website"
        },
        {
          "item": "Representation",
          "state": "present",
          "surfacesChecked": 0,
          "note": "found it — business inquiries",
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
