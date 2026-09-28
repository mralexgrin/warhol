/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief southern-college-football-insiders` on 2026-08-14.
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
        "takenAt": "2026-08-14T15:09:01.224Z",
        "spent": 33.6782,
        "studiedCreators": 238,
        "perCreator": 0.1415,
        "fetches": 81258,
        "calls": 8839,
        "refused": 2365,
        "byPass": [
          {
            "depth": "sweep",
            "fetches": 15765,
            "calls": 0,
            "cost": 0
          },
          {
            "depth": "probe",
            "fetches": 64927,
            "calls": 0,
            "cost": 0
          },
          {
            "depth": "study",
            "fetches": 61,
            "calls": 8839,
            "cost": 33.6782
          }
        ],
        "byCall": [
          {
            "label": "judge_fit",
            "calls": 1445,
            "cost": 14.2364,
            "perCall": 0.0099,
            "refused": 47,
            "avgIn": 858,
            "avgOut": 222
          },
          {
            "label": "classify_demand",
            "calls": 1446,
            "cost": 7.1286,
            "perCall": 0.0049,
            "refused": 84,
            "avgIn": 4055,
            "avgOut": 175
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
            "calls": 1989,
            "cost": 3.979,
            "perCall": 0.002,
            "refused": 86,
            "avgIn": 482,
            "avgOut": 304
          },
          {
            "label": "write_headline",
            "calls": 260,
            "cost": 2.5777,
            "perCall": 0.0099,
            "refused": 10,
            "avgIn": 722,
            "avgOut": 252
          },
          {
            "label": "classify_strain",
            "calls": 1445,
            "cost": 0.6044,
            "perCall": 0.0004,
            "refused": 79,
            "avgIn": 380,
            "avgOut": 8
          }
        ]
      },
      "lastRun": {
        "started": "2026-08-14T15:06:23.935Z",
        "finished": "2026-08-14T15:08:23.584Z",
        "creators": 22,
        "minutes": 1.9941333333333333,
        "checks": 851,
        "calls": 82,
        "cost": 0.3612,
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
      "generatedAt": "2026-08-14T15:09:01.229Z",
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
        "id": "c_southern_college_football_insiders__tomloy247",
        "name": "tomloy247",
        "handle": "@tomloy247",
        "initials": "TO",
        "avatar": "https://yt3.googleusercontent.com/yqlkHRZL6fOdDkPZVFMhPtI58VbM1ThZ8vbXO5Wnucg45kbyQUrfHzU9t3v8znehsZzpUFIzPkc=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@tomloy247",
            "followers": 1410,
            "url": "https://www.youtube.com/@tomloy247",
            "avatar": "https://yt3.googleusercontent.com/yqlkHRZL6fOdDkPZVFMhPtI58VbM1ThZ8vbXO5Wnucg45kbyQUrfHzU9t3v8znehsZzpUFIzPkc=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@tomloy247",
            "host": "youtube.com",
            "followers": 1410
          }
        ],
        "audience": {
          "total": 1410
        },
        "score": 34,
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
                "detail": "nothing posted in 90 days, after 4.4 a month before that — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Everything visible here is scraped YouTube boilerplate — nothing shows college football reporting at all, and the only hint of identity (a handle suggesting the 247Sports recruiting analyst) points to a Notre Dame beat rather than a Southern one."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — youtube.com/@tomloy247",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 12,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at creators.spotify.com/pod/show/tomloy247 — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 8,
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
            "title": "Elite 11 New Jersey: 2028 QB Knox Annis",
            "url": "https://www.youtube.com/watch?v=D76ckbycRzo",
            "at": "2026-05-08T16:09:38Z",
            "thumbnail": "https://i.ytimg.com/vi/D76ckbycRzo/hqdefault.jpg",
            "excerpt": null,
            "metric": 422,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:24.413Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Elite 11 New Jersey: 2028 QB Lukas Prock",
            "url": "https://www.youtube.com/watch?v=RRhrq9_bCxA",
            "at": "2026-05-08T16:09:11Z",
            "thumbnail": "https://i.ytimg.com/vi/RRhrq9_bCxA/hqdefault.jpg",
            "excerpt": null,
            "metric": 180,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:24.413Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Elite 11 New Jersey: 2028 QB Owen Herrick",
            "url": "https://www.youtube.com/watch?v=qhmQJ3v6scA",
            "at": "2026-05-08T16:08:55Z",
            "thumbnail": "https://i.ytimg.com/vi/qhmQJ3v6scA/hqdefault.jpg",
            "excerpt": null,
            "metric": 72,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:24.413Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Elite 11 New Jersey: 2028 QB Christopher Vargas",
            "url": "https://www.youtube.com/watch?v=nsJnewsQ7NY",
            "at": "2026-05-08T16:08:23Z",
            "thumbnail": "https://i.ytimg.com/vi/nsJnewsQ7NY/hqdefault.jpg",
            "excerpt": null,
            "metric": 638,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:24.413Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Tomloy247 makes Elite 11 New Jersey recruiting videos on 2028 quarterbacks for 1,410 YouTube subscribers and runs a podcast, but has posted nothing in 90 days after 4.4 a month before that, and owns no website, newsletter, store, or membership.",
        "headlineRestsOn": "YouTube channel, Podcast · Newsletter, Store, Membership, Own website · 1,410 on YouTube · nothing posted in 90 days, after 4.4 a month before that · \"Elite 11 New Jersey: 2028 QB Knox Annis\" (422 views) · \"Elite 11 New Jersey: 2028 QB Christopher Vargas\" (638 views)",
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
        "id": "c_southern_college_football_insiders__itshunterfriesen",
        "name": "itshunterfriesen",
        "handle": "@itshunterfriesen",
        "initials": "IT",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c65019e2&x-expires=1786892400&x-signature=ZWs2yvWmspKBXmxozVCGNqgoMGc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@itshunterfriesen",
            "followers": 103600,
            "url": "https://www.tiktok.com/@itshunterfriesen",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/821e7592b2835ace976b26da823c66b4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c65019e2&x-expires=1786892400&x-signature=ZWs2yvWmspKBXmxozVCGNqgoMGc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
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
        "score": 32,
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
                "value": "No youtube channel, no newsletter, no membership",
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
                "value": "21 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "21 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "The bio points to ASU (Arizona State), not the South, and there's no visible evidence of beat-reporting, coach access, or recruiting insider work — just a general TikTok following with no football-specific content shown."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 71,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 104,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 67,
            "note": "something at overtimestrips.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 47,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 55,
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
        "headline": "Hunter Friesen reaches 103,600 people on TikTok and already runs a store, an own website, and has representation, but there is no YouTube channel, newsletter, membership, or podcast yet.",
        "headlineRestsOn": "audience: 103,600 on TikTok · they have: Store, Own website, Representation / management · they do not have: YouTube channel, Newsletter, Membership, Podcast",
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
        "id": "c_southern_college_football_insiders__hayesfawcett",
        "name": "hayesfawcett",
        "handle": "@hayesfawcett",
        "initials": "HA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/001079e3d679b4692167fc3de2c6a9bb~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ecfa3342&x-expires=1786892400&x-signature=K6jiYUMSxsi7zWXLTRHTYBkpLrk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@hayesfawcett",
            "followers": 4372,
            "url": "https://www.tiktok.com/@hayesfawcett",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/001079e3d679b4692167fc3de2c6a9bb~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ecfa3342&x-expires=1786892400&x-signature=K6jiYUMSxsi7zWXLTRHTYBkpLrk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "His visible role is recruiting graphics, edits and highlights for On3 rather than sourced reporting, and there's no sign of the coach-and-recruit phone access or the Southern regional beat the brief is built around."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 72,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 108,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 75,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 52,
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
            "state": "verified_absent",
            "surfacesChecked": 57,
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
        "id": "c_southern_college_football_insiders__brandonfwalker",
        "name": "brandonfwalker",
        "handle": "@brandonfwalker",
        "initials": "BR",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/00b63407150e9355ffa920c96a0fe8f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1f3c5e0f&x-expires=1786892400&x-signature=cyAcO3GWI41QhAOXIqMeoBNRedo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@brandonfwalker",
            "followers": 140500,
            "url": "https://www.tiktok.com/@brandonfwalker",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/00b63407150e9355ffa920c96a0fe8f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1f3c5e0f&x-expires=1786892400&x-signature=cyAcO3GWI41QhAOXIqMeoBNRedo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@brandonfwalker",
            "host": "tiktok.com",
            "followers": 140500
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
          "total": 140500
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
                "detail": "He hosts a dedicated college football show with a clear Southern SEC focus and posts CFB content constantly, which fits the brief's core ask; whether he's a true sourced insider working coaches and recruiting flips isn't confirmed by anything here, but nothing visible contradicts the brief either."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 90,
            "note": "not there · we looked in 8 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 98,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 69,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 45,
            "note": "not there · we looked in 2 places",
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
            "surfacesChecked": 60,
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
            "seenAt": "2026-08-14T15:07:07.491Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Brandon Walker runs a wrestling interview podcast and brings 140,500 TikTok followers to it, but there is no YouTube channel, newsletter, store, membership, or site of his own to send them to.",
        "headlineRestsOn": "audience: 140,500 on TikTok · they have: Podcast · they do not have: YouTube channel, Newsletter, Store, Membership, Own website · \"Ricochet Responds To Fans Blaming Him For Samantha Irvin Leaving | AEW Spray Tan Problem, Top Movies\" · \"Matt Riddle's DMs Are Wild and His Toes Are LITERALLY Frostbitten | Provides a GOLDBERG Update\" · \"Hulk Hogan Wanted To Turn Heel At WrestleMania VI, Botching A Shirt Rip, Bobby Heenan As A Wrestler\"",
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
        "id": "c_southern_college_football_insiders__backseatcoach",
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
            "followers": 85700,
            "url": "https://www.tiktok.com/@backseatcoach",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7329012677399805994~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=16934f32&x-expires=1786892400&x-signature=l9wOT%2FiE%2Fej36WC1UEvAS4u2Kfo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
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
            "followers": 85700
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
          "total": 85700
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
                "value": "21 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "21 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "He's an Austin-based college football fan commentator whose content is short-form takes and highlight aggregation (plus a Women's Football Alliance channel), with nothing visible showing beat reporting, coach access, or recruiting scoops the brief is built around."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 31,
            "note": "found it — youtube.com/@backseatcoach",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 110,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 73,
            "note": "not there · we looked in 3 places · 3 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 54,
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
            "surfacesChecked": 58,
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
            "seenAt": "2026-08-14T15:06:39.698Z",
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
            "seenAt": "2026-08-14T15:06:30.525Z",
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
        "headline": "backseatcoach posts numbered episodes and live segments to 85,700 followers on TikTok and also runs a podcast and own website, but the YouTube channel sits at 36 with recent videos at 263 and 1,032 views, and there is no newsletter, store, or membership yet.",
        "headlineRestsOn": "85,700 on TikTok · 36 on YouTube · YouTube channel · Podcast · Own website · Newsletter · Store · Membership · \"8/10 5-3 WHOOP WHOOP!\" · \"8/10 5-1 LIVE Mascots\" · \"Boston Renegades on 3rd Hour Today Show\" (263 views) · \"Scorestream Tutorial\" (1,032 views)",
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
        "id": "c_southern_college_football_insiders__sheadixon",
        "name": "sheadixon",
        "handle": "@sheadixon",
        "initials": "SH",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7352917579893063726~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4091960f&x-expires=1786892400&x-signature=%2FQog0Q%2BO%2FluKdaln9UBToadOSxk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@sheadixon",
            "followers": 131,
            "url": "https://www.tiktok.com/@sheadixon",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7352917579893063726~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4091960f&x-expires=1786892400&x-signature=%2FQog0Q%2BO%2FluKdaln9UBToadOSxk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@sheadixon",
            "host": "tiktok.com",
            "followers": 131
          },
          {
            "name": "Newsletter",
            "url": "https://sheadixon.substack.com/",
            "host": "sheadixon.substack.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/shea-in-irving-show/id1150812218?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Sheainirving",
            "url": "https://sheainirving.com",
            "host": "sheainirving.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 131
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
                "value": "−88% vs baseline",
                "weightPct": 100,
                "detail": "0.3 posts a month now, against 2.8 before that — down 88% — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Nothing here connects this account to Southern college football at all — the only readable evidence is a tiny personal TikTok profile with no posts and no sign of beat reporting, recruiting knowledge, or coaching sources."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 8,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 6,
            "note": "found it — sheadixon.substack.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/shea-in-irving-show/id1150812218?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at sheadixon.com — not confirmed as theirs",
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
            "publication": "Shea in Irving Show",
            "kind": "episode",
            "title": "New Danette Dylan got engaged: the hammered drunk tell all interview",
            "url": "https://sheainirving.com",
            "at": "2026-04-21T23:47:00.000Z",
            "thumbnail": null,
            "excerpt": "Dylan showed up at the house after drinking on the golf course all day. We hit record and let him go. Get it in yall.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T15:07:37.472Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Shea runs a podcast, a newsletter, and their own website around drunk variety shows and travel stories like \"Shea goes to Italy after a Mother's Day Disaster,\" with 131 followers on TikTok and no YouTube channel, store, or membership yet.",
        "headlineRestsOn": "131 on TikTok · Newsletter · Podcast · Own website · YouTube channel · Store · Membership · \"Shea and Dylan's Drunk Variety Hour\" · \"Shea goes to Italy after a Mother's Day Disaster\" · \"New Danette Dylan got engaged: the hammered drunk tell all interview\"",
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
        "id": "c_southern_college_football_insiders__rj_young",
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
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a2eb002be4c79599a080722aa8031f36~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=d41d29a9&x-expires=1786892400&x-signature=16FeHOZZtWBQPP45orkS3I1K%2B1M%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
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
                "detail": "He's a working college football analyst for FOX with his own show and book, so the football expertise is clearly there — the brief's Southern-beat-and-recruiting-scoop angle isn't confirmed from what's visible, but nothing here contradicts it and following size doesn't count against him."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 49,
            "note": "found it — youtube.com/@rj_young",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 92,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 77,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 46,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 8,
            "note": "found it — https://podcasts.apple.com/us/podcast/adapt-and-respond-with-rj-young-a-college-football-podcast/id1346315892?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 60,
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
            "seenAt": "2026-08-14T15:06:33.487Z",
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
            "seenAt": "2026-08-14T15:06:26.588Z",
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
            "seenAt": "2026-08-14T15:06:26.588Z",
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
            "seenAt": "2026-08-14T15:06:26.588Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "RJ Young talks college football on TikTok, YouTube, and a podcast for 12,000 followers, and sells nothing of his own: no newsletter, store, membership, or website.",
        "headlineRestsOn": "user handle: rj_young · audience: 12,000 on TikTok · they have: YouTube channel, Podcast · they do not have: Newsletter, Store, Membership, Own website · \"RJ Reacts: Top 10 QBs to Monitor + Deion Sanders feels no pressure at Colorado\" · \"Ryan Day & Ohio State Buckeyes land 2028's No. 1 recruit Christopher Vargas\" · \"Oregon's Dylan Raiola: Choice words for Nebraska | Selling on Belichick and UNC | Top 5 Heisman Dive\"",
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
        "id": "c_southern_college_football_insiders__manny_navarro",
        "name": "manny_navarro",
        "handle": "@manny_navarro",
        "initials": "MA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/1da536b646d9f923cae598a325058db5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9ba2e2e0&x-expires=1786892400&x-signature=nBS%2Fdh4gSVYNMMVdj2ywXydl2LU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@manny_navarro",
            "followers": 13,
            "url": "https://www.tiktok.com/@manny_navarro",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/1da536b646d9f923cae598a325058db5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=9ba2e2e0&x-expires=1786892400&x-signature=nBS%2Fdh4gSVYNMMVdj2ywXydl2LU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@manny_navarro",
            "host": "tiktok.com",
            "followers": 13
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/frontpage305/id1520711968?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Spotify",
            "url": "https://podcasters.spotify.com/pod/show/frontpage305/episodes/April-20--2021---FIU-basketball-coach-Jeremy-Ballard--Bally-Sports-Jessica-Blaylock-ev9u4e",
            "host": "podcasters.spotify.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 13
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "The only visible evidence is an near-empty TikTok account with 13 followers, no posts, and a bio reading \"Jacqueline\" — nothing here shows college football coverage, sourcing, or takes of any kind, let alone Southern beat-writer credibility."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 5,
            "note": "something at youtube.com/c/manny_navarro — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 5 places · 1 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 7,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/frontpage305/id1520711968?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 6,
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
            "publication": "FrontPage305",
            "kind": "episode",
            "title": "April 20, 2021 - FIU basketball coach Jeremy Ballard, Bally Sports' Jessica Blaylock",
            "url": "https://podcasters.spotify.com/pod/show/frontpage305/episodes/April-20--2021---FIU-basketball-coach-Jeremy-Ballard--Bally-Sports-Jessica-Blaylock-ev9u4e",
            "at": "2021-04-20T17:58:49.000Z",
            "thumbnail": null,
            "excerpt": "Host Walter Villa brings on a special guest from the high school ranks to share her story and then welcomes FIU basketball coach Jeremy Ballard to talk about race relations and Bally Sports TV's Jessica Blaylock to discuss Florida Panthers hockey and Marlins baseball. It's riveting. April 20, 2021.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T15:07:43.153Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "FrontPage305",
            "kind": "episode",
            "title": "April 6, 2021 - College baseball, football, N.Y. Jets and Miami Hurricanes",
            "url": "https://podcasters.spotify.com/pod/show/frontpage305/episodes/April-6--2021---College-baseball--football--N-Y--Jets-and-Miami-Hurricanes-ev2kr0",
            "at": "2021-04-17T00:49:24.000Z",
            "thumbnail": null,
            "excerpt": "Host Walter Villa welcomes two guests from D1 Baseball including editor Aaron Fitt, Champagnat football coach Hector Clavijo and sports writers Corey Long (Tampa Bay Lightning) and Manny Navarro (The Athletic) to talk New York Jets and Hurricanes spring football. April 6, 2021.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T15:07:43.153Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "FrontPage305",
            "kind": "episode",
            "title": "March 23, 2021 - Panthers, FSU baseball, Miami crime",
            "url": "https://podcasters.spotify.com/pod/show/frontpage305/episodes/March-23--2021---Panthers--FSU-baseball--Miami-crime-etjg5d",
            "at": "2021-03-26T21:57:02.000Z",
            "thumbnail": null,
            "excerpt": "Host Walter Villa interviews Craig Minervini on the Florida Panthers, a Miami Herald crime reporter and FSU baseball star Mat Nelson.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T15:07:43.153Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "manny_navarro runs a podcast and YouTube channel covering Miami sports, with episodes on the Panthers, the Hurricanes, FIU basketball and FSU baseball, and his newest listed episode is from April 20, 2021, so there is no newsletter, store, membership, or own website behind it and only 13 followers on TikTok.",
        "headlineRestsOn": "13 on TikTok · YouTube channel · Podcast · Newsletter · Store · Membership · Own website · \"April 20, 2021 - FIU basketball coach Jeremy Ballard, Bally Sports' Jessica Blaylock\" · \"April 6, 2021 - College baseball, football, N.Y. Jets and Miami Hurricanes\" · \"March 23, 2021 - Panthers, FSU baseball, Miami crime\"",
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
        "id": "c_southern_college_football_insiders__radinabulsi",
        "name": "radinabulsi",
        "handle": "@radinabulsi",
        "initials": "RA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_l3FlzQC789Jpd030fU8aSw3BAJQpStlTRs0g5UiiI=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@radinabulsi",
            "followers": 2,
            "url": "https://www.tiktok.com/@radinabulsi",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7104966766589280261~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=eceabb60&x-expires=1786892400&x-signature=DxNimfBvKulIDCDLVH0C2D1vgAs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@radinabulsi",
            "followers": 1,
            "url": "https://www.youtube.com/@radinabulsi",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_l3FlzQC789Jpd030fU8aSw3BAJQpStlTRs0g5UiiI=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@radinabulsi",
            "host": "tiktok.com",
            "followers": 2
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@radinabulsi",
            "host": "youtube.com",
            "followers": 1
          }
        ],
        "audience": {
          "total": 2
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "There is no visible evidence this account covers Southern college football at all — the bio is a generic YouTube boilerplate line and the posts show an empty TikTok with 2 followers and no content, so nothing here shows the coaching contacts, recruiting knowledge, or track record of holding-up takes the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — youtube.com/@radinabulsi",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 12,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at creators.spotify.com/pod/show/radinabulsi — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 8,
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
        "samples": [],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "radinabulsi runs a YouTube channel and a podcast, and owns no newsletter, store, membership, or website, so every audience they have sits on someone else's platform.",
        "headlineRestsOn": "YouTube channel · Podcast · Newsletter · Store · Membership · Own website",
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
        "id": "c_southern_college_football_insiders__jeffsentell",
        "name": "jeffsentell",
        "handle": "@jeffsentell",
        "initials": "JE",
        "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:54eb4wout5jdf547isdzcz43/bafkreibcpsidalu35dqqutkmk6itcqztpthkkojr3i2t6vzb76vu45mvz4",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@jeffsentell",
            "followers": 16,
            "url": "https://www.tiktok.com/@jeffsentell",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1ba7922c&x-expires=1786892400&x-signature=CRCPNP8VoYOvosfDbKUe2POtByk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the Bluesky, so it is not added in"
          },
          {
            "name": "Bluesky profile",
            "handle": "@jeffsentell",
            "followers": 35,
            "url": "https://bsky.app/profile/jeffsentell.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:54eb4wout5jdf547isdzcz43/bafkreibcpsidalu35dqqutkmk6itcqztpthkkojr3i2t6vzb76vu45mvz4",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@jeffsentell",
            "host": "tiktok.com",
            "followers": 16
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/jeffsentell.bsky.social",
            "host": "bsky.app",
            "followers": 35
          }
        ],
        "audience": {
          "total": 35
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
                "detail": "we could not read their posting rate — the YouTube API has no channel at that handle, and only 2 dated posts came back — not enough to read a posting rate"
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
                "detail": "His bio confirms he's a multimedia reporter covering college football and recruiting for the AJC's DawgNation, which is exactly the Southern beat-writer/recruiting-insider profile the brief wants, and the thin follower counts don't matter here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 5 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 7,
            "note": "something at substack.com/@jeffsentell — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 7,
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
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "\"Quick as a cat.\" \"Smoooooooooooth.\" It didn't take long for Georgia's highest-rated WR signee since George Pi",
            "url": "https://bsky.app/profile/jeffsentell.bsky.social/post/3lfbrxygjsk2d",
            "at": "2025-01-09T03:57:59.431Z",
            "thumbnail": null,
            "excerpt": "\"Quick as a cat.\" \"Smoooooooooooth.\" It didn't take long for Georgia's highest-rated WR signee since George Pickens to make an impression. What was the early word on 5-star Talyn Taylor from those Sugar Bowl practices? bit.ly/Earlyimpressio…q",
            "metric": 0,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T15:07:02.399Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "First post: Why not go big with a big update on the nation’s No. 1 junior QB? Jared Curtis was once committed ",
            "url": "https://bsky.app/profile/jeffsentell.bsky.social/post/3lbioxylrrk2v",
            "at": "2024-11-22T00:12:10.037Z",
            "thumbnail": null,
            "excerpt": "First post: Why not go big with a big update on the nation’s No. 1 junior QB? Jared Curtis was once committed to #UGA but that “family feeling” still remains. There’s some key quotes to pay attention to, but there’s also the story behind his mother’s earrings. bit.ly/CurtistalksU...",
            "metric": 0,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T15:07:02.399Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Jeff Sentell writes Georgia football recruiting updates for a newsletter and posts them to TikTok and Bluesky, with no YouTube channel, store, membership, podcast, or website of his own.",
        "headlineRestsOn": "handle: jeffsentell · 16 on TikTok · 35 on Bluesky · they have: Newsletter · they do not have: YouTube channel, Store, Membership, Podcast, Own website · \"Quick as a cat.\" \"Smoooooooooooth.\" It didn't take long for Georgia's highest-rated WR signee since George Pi · First post: Why not go big with a big update on the nation’s No. 1 junior QB? Jared Curtis was once committed",
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
        "id": "c_southern_college_football_insiders__careymurdock",
        "name": "careymurdock",
        "handle": "@careymurdock",
        "initials": "CA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mOoM5Qyn7djKFfbBmZQCcnkeE1v724QJZaA5HyEvS9gQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@careymurdock",
            "followers": 52,
            "url": "https://www.tiktok.com/@careymurdock",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7333710640140189702~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=270bfb75&x-expires=1786892400&x-signature=uguMv6rIenWm4qvOht2VXOi5lDU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@careymurdock",
            "followers": 195,
            "url": "https://www.youtube.com/@careymurdock",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mOoM5Qyn7djKFfbBmZQCcnkeE1v724QJZaA5HyEvS9gQ=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "Bluesky profile",
            "handle": "@careymurdock",
            "followers": 1,
            "url": "https://bsky.app/profile/careymurdock.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:ttbbxl44menlq4blxj7qcexc/bafkreibgjc7wlfwbtzwfj57mersb2yhhxahvqv3ic7rwf2hu4kbs2inkku",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the Bluesky to the YouTube, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@careymurdock",
            "host": "tiktok.com",
            "followers": 52
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@careymurdock",
            "host": "youtube.com",
            "followers": 195
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/careymurdock.bsky.social",
            "host": "bsky.app",
            "followers": 1
          },
          {
            "name": "Newsletter",
            "url": "https://careymurdock.substack.com/",
            "host": "careymurdock.substack.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 195
        },
        "score": 17,
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
                "detail": "nothing posted in 90 days, after 1.2 a month before that — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 2,
            "note": "found it — youtube.com/@careymurdock",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 7,
            "note": "found it — careymurdock.substack.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 5,
            "note": "something at stan.store/careymurdock — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 4,
            "note": "something at stan.store/careymurdock — not confirmed as theirs",
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
            "title": "Anyone here getting a head start on their 2026 goals?! Fitness, finish your first book, more intentional famil",
            "url": "https://bsky.app/profile/careymurdock.bsky.social/post/3m74y7kwmvn27",
            "at": "2025-12-04T03:01:19.759Z",
            "thumbnail": null,
            "excerpt": "Anyone here getting a head start on their 2026 goals?! Fitness, finish your first book, more intentional family time? What are some of yours?!",
            "metric": 0,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T15:07:38.125Z",
            "status": null
          },
          {
            "platform": "Newsletter",
            "publication": "Carey Murdock: The Assistant Wire",
            "kind": "writing",
            "title": "Coming soon",
            "url": "https://careymurdock.substack.com/p/coming-soon",
            "at": "2024-05-02T22:08:38.000Z",
            "thumbnail": null,
            "excerpt": "This is Carey Murdock: The Assistant Wire.\n Subscribe now",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-14T15:07:47.187Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Singing two Amy Allen songs",
            "url": "https://www.youtube.com/watch?v=QGgHnyVV-2c",
            "at": "2020-07-20T02:00:08Z",
            "thumbnail": "https://i.ytimg.com/vi/QGgHnyVV-2c/hqdefault.jpg",
            "excerpt": null,
            "metric": 60,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:38.125Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Love taking my kids to Waffle House on Sunday AMs. It’s our tradition. And I’ve gotten them into the Jukebox. ",
            "url": "https://bsky.app/profile/careymurdock.bsky.social/post/3m6u7grqfut2n",
            "at": "2025-11-30T15:16:40.325Z",
            "thumbnail": null,
            "excerpt": "Love taking my kids to Waffle House on Sunday AMs. It’s our tradition. And I’ve gotten them into the Jukebox. They love it. However, they have queued up Hotel California to play 3 times in a row. We’ll see how that plays in the room! Lol",
            "metric": 0,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T15:07:38.125Z",
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
        "id": "c_southern_college_football_insiders__birm",
        "name": "birm",
        "handle": "@birm",
        "initials": "BI",
        "avatar": "https://yt3.googleusercontent.com/sVMi7DQQd593Oi3yFmAZlzh0eDb97bOoguU3TjnTk2WcST2OT4Lgplr6LCQbyLx5byeEGA5XCA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@birm",
            "followers": 396,
            "url": "https://www.tiktok.com/@birm",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/df1e10623d235176657beb1ee642833b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=16e60ac3&x-expires=1786892400&x-signature=QU%2BDTXMOVYdh%2FXtn5E8VtA59Jb0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@birm",
            "followers": null,
            "url": "https://www.youtube.com/@birm",
            "avatar": "https://yt3.googleusercontent.com/sVMi7DQQd593Oi3yFmAZlzh0eDb97bOoguU3TjnTk2WcST2OT4Lgplr6LCQbyLx5byeEGA5XCA=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@birm",
            "host": "tiktok.com",
            "followers": 396
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@birm",
            "host": "youtube.com",
            "followers": null
          },
          {
            "name": "Newsletter",
            "url": "https://birm.substack.com/",
            "host": "birm.substack.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 396
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
                "value": "No store, no own website, no podcast",
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "Nothing in this profile shows college football reporting at all — the bio and post text are just scraped boilerplate, with no coverage, recruiting takes, or Southern beat to point to."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — youtube.com/@birm",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — birm.substack.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 8,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 5,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 7,
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
            "title": "NotLanta 2025 Mens 3.5+ Singles Part 1 (This is Gonna Be Bad)",
            "url": "https://www.youtube.com/watch?v=BoURBxt_x1g",
            "at": "2025-05-12T19:29:10Z",
            "thumbnail": "https://i.ytimg.com/vi/BoURBxt_x1g/hqdefault.jpg",
            "excerpt": null,
            "metric": 101,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:00.309Z",
            "status": null
          },
          {
            "platform": "Newsletter",
            "publication": "Birm’s Newsletter",
            "kind": "writing",
            "title": "Buckeyes recruiting #stuff",
            "url": "https://birm.substack.com/p/coming-soon",
            "at": "2021-08-13T18:29:12.000Z",
            "thumbnail": null,
            "excerpt": "Welcome to Birm’s Newsletter by me, Birm. Ohio State football recruiting and photography\n Sign up now so you don’t miss the first issue.\n Subscribe now \n In the meantime, tell your friends !",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-14T15:07:21.841Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "3 Something Singles Practice Birm vs Cayla Episode 3",
            "url": "https://www.youtube.com/watch?v=6_7UZvlZ7y4",
            "at": "2025-04-18T16:03:01Z",
            "thumbnail": "https://i.ytimg.com/vi/6_7UZvlZ7y4/hqdefault.jpg",
            "excerpt": null,
            "metric": 752,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:00.309Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "3 Something Singles Practice Birm vs Cayla Episode 2",
            "url": "https://www.youtube.com/watch?v=m5QCQ74TvgA",
            "at": "2025-04-16T00:36:10Z",
            "thumbnail": "https://i.ytimg.com/vi/m5QCQ74TvgA/hqdefault.jpg",
            "excerpt": null,
            "metric": 122,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:00.309Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 1,
          "why": "1 piece of their own work"
        },
        "headline": "Birm posts amateur pickleball match footage on YouTube and TikTok and already runs a newsletter and a membership, but has no store, no podcast, and no site of their own.",
        "headlineRestsOn": "396 on TikTok · YouTube channel · Newsletter · Membership · Store · Podcast · Own website · \"NotLanta 2025 Mens 3.5+ Singles Part 1 (This is Gonna Be Bad)\" · \"3 Something Singles Practice Birm vs Cayla Episode 3\" · \"3 Something Pickleball Singles Birm vs Cayla Episode 1\"",
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
        "id": "c_southern_college_football_insiders__bobbyburton",
        "name": "bobbyburton",
        "handle": "@bobbyburton",
        "initials": "BO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nSNiYSvPvCCpOaA3XQDR5Z1JbETTCUrC0epju2BYRcUAhWBpYB6ETxcv4epfmtCNjofw=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@bobbyburton",
            "followers": 12,
            "url": "https://www.tiktok.com/@bobbyburton",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d0da172e7576e0ff7b3f908177047141~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=8944ea63&x-expires=1786892400&x-signature=7BopIr%2BbR0xKzwVlxzUjy9Nreis%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@bobbyburton",
            "followers": 2,
            "url": "https://www.youtube.com/@bobbyburton",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nSNiYSvPvCCpOaA3XQDR5Z1JbETTCUrC0epju2BYRcUAhWBpYB6ETxcv4epfmtCNjofw=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@bobbyburton",
            "host": "tiktok.com",
            "followers": 12
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@bobbyburton",
            "host": "youtube.com",
            "followers": 2
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/on-texas-football/id1588401030?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "On3",
            "url": "https://www.on3.com/teams/texas-longhorns/",
            "host": "on3.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 12
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
                "detail": "we could not read their posting rate — they post often enough that 130 posts only reach back 39 days — not far enough behind the last 90 to compare against"
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
                "detail": "There is no visible content at all — empty channels, no bio, no posts — so nothing shows this person covers Southern college football or has takes that hold up week to week."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — youtube.com/@bobbyburton",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 6,
            "note": "something at substack.com/@bobbyburton — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 8,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/on-texas-football/id1588401030?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 8,
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
            "publication": "On Texas Football",
            "kind": "episode",
            "title": "Practice Report #7: New Name at Safety, Seymore Takes First-Team Reps at LG | Texas Football",
            "url": "https://www.on3.com/teams/texas-longhorns/",
            "at": "2026-08-13T22:38:34.000Z",
            "thumbnail": null,
            "excerpt": "Bobby Burton, CJ Vogel and Hank South deliver the biggest developments from Texas’ seventh fall-camp practice, led by a significant change along the offensive line. Laurence Seymore opened the team period with the first-team offense at left guard after Dylan Sikorski previously led the competition, ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T15:07:15.450Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "bobbyburton reports on Texas football practices and recruiting through a YouTube channel, newsletter, and podcast, with no store, membership, or website of his own.",
        "headlineRestsOn": "YouTube channel · Newsletter · Podcast · Store · Membership · Own website · \"They Didn\\State Star Rasheem Biles Has Ohio State Circled\" · \"3 Players Who MUST Make Noise in the First Fall Camp Scrimmage | Texas Football | Steve Sarkisian\" · \"Practice Report #7: New Name at Safety, Seymore Takes First-Team Reps at LG | Texas Football\"",
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
        "id": "c_southern_college_football_insiders__isleepwitsockson",
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
            "followers": 114600,
            "url": "https://www.tiktok.com/@isleepwitsockson",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/0816bf7c97c5aeff48358448ae36e349~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=46c8b26a&x-expires=1786892400&x-signature=7%2BFodcdNntTnxv3hwQGrBFLFHHw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "This is an OKC-based athlete trainer doing general sports talk with no visible college football beat reporting, coach access, or recruiting insight — nothing shows the Southern CFB insider knowledge the brief is built around."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 47,
            "note": "found it — youtube.com/@isleepwitsockson",
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
            "surfacesChecked": 71,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 49,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
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
            "surfacesChecked": 51,
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
            "seenAt": "2026-08-14T15:06:40.709Z",
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
            "seenAt": "2026-08-14T15:06:30.127Z",
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
            "seenAt": "2026-08-14T15:06:40.709Z",
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
            "seenAt": "2026-08-14T15:06:40.709Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "isleepwitsockson runs a retro game podcast now in its fourth season with a membership and their own website, and reaches 114,600 on TikTok and 24,600 on YouTube, but has no newsletter or store and posts 4 videos a month now against 5 before, down 20%.",
        "headlineRestsOn": "114,600 on TikTok · 24,600 on YouTube · YouTube channel · Membership · Podcast · Own website · Newsletter · Store · 4 videos a month now, against 5 before that \\14E14: Fire Emblem- Path of Radiance - or- Hitting the Griddy\" · \"S4E13: Killer Instinct -or- ULTRA COMBO!\" · \"S4E12: Ninja Gaiden II and Super Ninja Boy -or- Widest Kicks U' Throw\"",
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
        "id": "c_southern_college_football_insiders__andrewbone",
        "name": "andrewbone",
        "handle": "@andrewbone",
        "initials": "AN",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nXWMw5Bpd2IAvtkWzqMldp_0EZZi8XCxKkqdSvrpl-ZFNa=s900-c0x00ffffff-no-rj",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@andrewbone",
            "followers": 23,
            "url": "https://www.tiktok.com/@andrewbone",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=6c618bad&x-expires=1786892400&x-signature=kurTaV3yPjku6ekt40rR%2BNu3V9s%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@andrewbone",
            "followers": 6,
            "url": "https://www.youtube.com/@andrewbone",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nXWMw5Bpd2IAvtkWzqMldp_0EZZi8XCxKkqdSvrpl-ZFNa=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@andrewbone",
            "host": "tiktok.com",
            "followers": 23
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@andrewbone",
            "host": "youtube.com",
            "followers": 6
          }
        ],
        "audience": {
          "total": 23
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
                "detail": "we could not read their posting rate — only 4 dated uploads came back — not enough to read a posting rate"
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
                "detail": "There's no visible evidence this person covers Southern college football at all — no posts, no likes, a generic default bio, and nothing showing beat reporting, recruiting knowledge, or takes to evaluate."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — youtube.com/@andrewbone",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 6,
            "note": "something at substack.com/@andrewbone — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 9,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 6,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at creators.spotify.com/pod/show/andrewbone — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at andrewbone.com — not confirmed as theirs",
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
            "title": "Anthem Dialogue clip",
            "url": "https://www.youtube.com/watch?v=crhDL7yLbe4",
            "at": "2018-09-01T22:06:57Z",
            "thumbnail": "https://i.ytimg.com/vi/crhDL7yLbe4/hqdefault.jpg",
            "excerpt": null,
            "metric": 571,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:31.687Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Complete pull-to-action (my first custom polymer element)",
            "url": "https://www.youtube.com/watch?v=Fpe2PqvY7S8",
            "at": "2015-05-15T14:13:35Z",
            "thumbnail": "https://i.ytimg.com/vi/Fpe2PqvY7S8/hqdefault.jpg",
            "excerpt": null,
            "metric": 233,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:31.687Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Polymer pull-to-action element",
            "url": "https://www.youtube.com/watch?v=JTHCzpQVJ7Y",
            "at": "2015-05-15T10:28:40Z",
            "thumbnail": "https://i.ytimg.com/vi/JTHCzpQVJ7Y/hqdefault.jpg",
            "excerpt": null,
            "metric": 18,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:31.687Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "First recording on Nexus",
            "url": "https://www.youtube.com/watch?v=XPRsX_82-34",
            "at": "2010-02-23T00:43:44Z",
            "thumbnail": "https://i.ytimg.com/vi/XPRsX_82-34/hqdefault.jpg",
            "excerpt": null,
            "metric": 137,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T15:07:31.687Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Andrewbone builds custom web components and posts demos of them on YouTube while also running a newsletter, podcast, and own website, but has no store or membership to sell through.",
        "headlineRestsOn": "YouTube channel · Newsletter · Podcast · Own website · Store · Membership · \"Complete pull-to-action (my first custom polymer element)\" (233 views) · \"Polymer pull-to-action element\" (18 views)",
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
        "id": "c_southern_college_football_insiders__stiffmiesters_picks",
        "name": "stiffmiesters.picks",
        "handle": "@stiffmiesters.picks",
        "initials": "ST",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/e54fe4c0b105ec82892d057b44ca98af~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=2845b5d8&x-expires=1786892400&x-signature=g%2BiGpOCCzK4IqR3Z57TH6xNm5yg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@stiffmiesters.picks",
            "followers": 4437,
            "url": "https://www.tiktok.com/@stiffmiesters.picks",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/e54fe4c0b105ec82892d057b44ca98af~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=2845b5d8&x-expires=1786892400&x-signature=g%2BiGpOCCzK4IqR3Z57TH6xNm5yg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
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
                "detail": "This is a sports betting picks account tracking MLB and free-play win-loss records, not a Southern college football insider with coach access or recruiting knowledge."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 69,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 44,
            "note": "3 of 6 places wouldn't answer; only 3 of the 5 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 41,
            "note": "only 2 of the 3 places we need actually answered",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 46,
            "note": "something at whop.com/joined/stiffmiester-s-picks — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 21,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 39,
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
        "headline": "With 4,437 followers on TikTok, they already run a membership and their own website, but have no YouTube channel or podcast yet.",
        "headlineRestsOn": "4,437 on TikTok · Membership · Own website · YouTube channel · Podcast",
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
        "id": "c_southern_college_football_insiders__samhartman_10",
        "name": "samhartman_10",
        "handle": "@samhartman_10",
        "initials": "SA",
        "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c69638fb51dd863b0cebce682e972469~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=dc46c820&x-expires=1786892400&x-signature=PTQbHsK86OLqg7mYb1pghHv1Uyo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@samhartman_10",
            "followers": 118200,
            "url": "https://www.tiktok.com/@samhartman_10",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c69638fb51dd863b0cebce682e972469~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=dc46c820&x-expires=1786892400&x-signature=PTQbHsK86OLqg7mYb1pghHv1Uyo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T15:00:00.000Z",
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
            "name": "Newsletter",
            "url": "https://samhartman.substack.com/",
            "host": "samhartman.substack.com",
            "followers": null
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
                "value": "No own website, no membership",
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
            "state": "present",
            "surfacesChecked": 69,
            "note": "something at youtube.com/@samhartman10 — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 78,
            "note": "found it — samhartman.substack.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 74,
            "note": "something at samhartman.gumroad.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 48,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/writers-room-rejects/id1882461291?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 63,
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
            "seenAt": "2026-08-14T15:07:21.269Z",
            "status": null
          },
          {
            "platform": "Newsletter",
            "publication": "Sam’s Substack",
            "kind": "writing",
            "title": "Coming soon",
            "url": "https://samhartman.substack.com/p/coming-soon",
            "at": "2023-12-06T08:31:07.000Z",
            "thumbnail": null,
            "excerpt": "This is Sam’s Substack.\n Subscribe now",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-14T15:07:21.269Z",
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
            "seenAt": "2026-08-14T15:07:21.269Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
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
        "id": "c_southern_college_football_insiders__sidelineexposure",
        "name": "sidelineexposure",
        "handle": "@sidelineexposure",
        "initials": "SI",
        "avatar": null,
        "mandateId": "m_southern_college_football_insiders",
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
            "surfacesChecked": 72,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 113,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 80,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 56,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 10,
            "note": "found it — https://podcasts.apple.com/us/podcast/sideline-exposure-college-football-fanatic/id1594293479?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 61,
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
            "seenAt": "2026-08-14T15:06:34.139Z",
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
            "seenAt": "2026-08-14T15:06:34.139Z",
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
            "seenAt": "2026-08-14T15:06:34.139Z",
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
        "id": "c_southern_college_football_insiders__joebroback",
        "name": "joebroback",
        "handle": "@joebroback",
        "initials": "JO",
        "avatar": null,
        "mandateId": "m_southern_college_football_insiders",
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
            "surfacesChecked": 49,
            "note": "something at youtube.com/c/joebroback — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 106,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 73,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 52,
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
            "surfacesChecked": 62,
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
            "seenAt": "2026-08-14T15:06:36.521Z",
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
            "seenAt": "2026-08-14T15:06:36.521Z",
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
            "seenAt": "2026-08-14T15:06:36.521Z",
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
        "id": "c_southern_college_football_insiders__billyliucci",
        "name": "billyliucci",
        "handle": "@billyliucci",
        "initials": "BI",
        "avatar": null,
        "mandateId": "m_southern_college_football_insiders",
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
            "surfacesChecked": 8,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 12,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 8,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 7,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
            "state": "not_found",
            "surfacesChecked": 8,
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
        "id": "c_southern_college_football_insiders__michigan_insider",
        "name": "michigan_insider",
        "handle": "@michigan_insider",
        "initials": "MI",
        "avatar": null,
        "mandateId": "m_southern_college_football_insiders",
        "primaryPlatform": null,
        "platforms": [],
        "places": [
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/michigan-insider/id1045184175?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Omny",
            "url": "https://omny.fm/shows/michigan-insider/012-recovering-from-injuries-081426",
            "host": "omny.fm",
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
                "detail": "we could not read their posting rate — they post often enough that 100 posts only reach back 11 days — not far enough behind the last 90 to compare against"
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
            "surfacesChecked": 8,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 11,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 7,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 6,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — https://podcasts.apple.com/us/podcast/michigan-insider/id1045184175?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 5,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
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
            "publication": "Michigan Insider",
            "kind": "episode",
            "title": "012 - recovering from injuries 081426",
            "url": "https://omny.fm/shows/michigan-insider/012-recovering-from-injuries-081426",
            "at": "2026-08-14T14:03:29.000Z",
            "thumbnail": null,
            "excerpt": "recovering from injuries\n See omnystudio.com/listener for privacy information.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T15:07:59.507Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Michigan Insider",
            "kind": "episode",
            "title": "011 - Talking Michigan defense 081426",
            "url": "https://omny.fm/shows/michigan-insider/011-talking-michigan-defense-081426",
            "at": "2026-08-14T13:50:27.000Z",
            "thumbnail": null,
            "excerpt": "Talking Michigan defense\n See omnystudio.com/listener for privacy information.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T15:07:59.507Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "Michigan Insider",
            "kind": "episode",
            "title": "010 - more Tigers talk 081426",
            "url": "https://omny.fm/shows/michigan-insider/010-more-tigers-talk-081426",
            "at": "2026-08-14T13:35:46.000Z",
            "thumbnail": null,
            "excerpt": "more Tigers talk \n See omnystudio.com/listener for privacy information.",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T15:07:59.507Z",
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
        "id": "c_southern_college_football_insiders__tremendousum",
        "name": "tremendousum",
        "handle": "@tremendousum",
        "initials": "TR",
        "avatar": null,
        "mandateId": "m_southern_college_football_insiders",
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
            "surfacesChecked": 8,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 12,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 9,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 7,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 7,
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
      }
    ],
    "drops": {
      "2026-08-14": {
        "m_southern_college_football_insiders": [
          "c_southern_college_football_insiders__tomloy247",
          "c_southern_college_football_insiders__itshunterfriesen",
          "c_southern_college_football_insiders__hayesfawcett",
          "c_southern_college_football_insiders__brandonfwalker",
          "c_southern_college_football_insiders__backseatcoach",
          "c_southern_college_football_insiders__sheadixon",
          "c_southern_college_football_insiders__rj_young",
          "c_southern_college_football_insiders__manny_navarro",
          "c_southern_college_football_insiders__radinabulsi",
          "c_southern_college_football_insiders__jeffsentell",
          "c_southern_college_football_insiders__careymurdock",
          "c_southern_college_football_insiders__birm",
          "c_southern_college_football_insiders__bobbyburton",
          "c_southern_college_football_insiders__isleepwitsockson",
          "c_southern_college_football_insiders__andrewbone",
          "c_southern_college_football_insiders__stiffmiesters_picks",
          "c_southern_college_football_insiders__samhartman_10",
          "c_southern_college_football_insiders__sidelineexposure",
          "c_southern_college_football_insiders__joebroback",
          "c_southern_college_football_insiders__billyliucci",
          "c_southern_college_football_insiders__michigan_insider",
          "c_southern_college_football_insiders__tremendousum"
        ]
      }
    },
    "timeline": [],
    "runANameResult": {
      "id": "c_southern_college_football_insiders__tomloy247",
      "name": "tomloy247",
      "handle": "@tomloy247",
      "initials": "TO",
      "avatar": "https://yt3.googleusercontent.com/yqlkHRZL6fOdDkPZVFMhPtI58VbM1ThZ8vbXO5Wnucg45kbyQUrfHzU9t3v8znehsZzpUFIzPkc=s900-c0x00ffffff-no-rj",
      "mandateId": "m_southern_college_football_insiders",
      "primaryPlatform": "YouTube channel",
      "platforms": [
        {
          "name": "YouTube channel",
          "handle": "@tomloy247",
          "followers": 1410,
          "url": "https://www.youtube.com/@tomloy247",
          "avatar": "https://yt3.googleusercontent.com/yqlkHRZL6fOdDkPZVFMhPtI58VbM1ThZ8vbXO5Wnucg45kbyQUrfHzU9t3v8znehsZzpUFIzPkc=s900-c0x00ffffff-no-rj",
          "avatarExpires": null,
          "avatarStale": false,
          "matchConfidence": 1
        }
      ],
      "places": [
        {
          "name": "YouTube channel",
          "url": "https://www.youtube.com/@tomloy247",
          "host": "youtube.com",
          "followers": 1410
        }
      ],
      "audience": {
        "total": 1410
      },
      "score": 34,
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
              "detail": "nothing posted in 90 days, after 4.4 a month before that — 12 of the 40 Pressure points. Ceiling on this look is 34."
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
              "detail": "Everything visible here is scraped YouTube boilerplate — nothing shows college football reporting at all, and the only hint of identity (a handle suggesting the 247Sports recruiting analyst) points to a Notre Dame beat rather than a Southern one."
            }
          ]
        }
      },
      "inventory": [
        {
          "item": "YouTube channel",
          "state": "present",
          "surfacesChecked": 6,
          "note": "found it — youtube.com/@tomloy247",
          "observedAt": "2026-08-14",
          "source": "youtube_channel"
        },
        {
          "item": "Newsletter",
          "state": "verified_absent",
          "surfacesChecked": 12,
          "note": "not there · we looked in 6 places",
          "observedAt": "2026-08-14",
          "source": "newsletter"
        },
        {
          "item": "Store",
          "state": "verified_absent",
          "surfacesChecked": 9,
          "note": "not there · we looked in 5 places · 2 wouldn't answer",
          "observedAt": "2026-08-14",
          "source": "store"
        },
        {
          "item": "Membership",
          "state": "verified_absent",
          "surfacesChecked": 6,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-14",
          "source": "membership"
        },
        {
          "item": "Podcast",
          "state": "present",
          "surfacesChecked": 3,
          "note": "something at creators.spotify.com/pod/show/tomloy247 — not confirmed as theirs",
          "observedAt": "2026-08-14",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "verified_absent",
          "surfacesChecked": 8,
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
          "title": "Elite 11 New Jersey: 2028 QB Knox Annis",
          "url": "https://www.youtube.com/watch?v=D76ckbycRzo",
          "at": "2026-05-08T16:09:38Z",
          "thumbnail": "https://i.ytimg.com/vi/D76ckbycRzo/hqdefault.jpg",
          "excerpt": null,
          "metric": 422,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T15:07:24.413Z",
          "status": null
        },
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "Elite 11 New Jersey: 2028 QB Lukas Prock",
          "url": "https://www.youtube.com/watch?v=RRhrq9_bCxA",
          "at": "2026-05-08T16:09:11Z",
          "thumbnail": "https://i.ytimg.com/vi/RRhrq9_bCxA/hqdefault.jpg",
          "excerpt": null,
          "metric": 180,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T15:07:24.413Z",
          "status": null
        },
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "Elite 11 New Jersey: 2028 QB Owen Herrick",
          "url": "https://www.youtube.com/watch?v=qhmQJ3v6scA",
          "at": "2026-05-08T16:08:55Z",
          "thumbnail": "https://i.ytimg.com/vi/qhmQJ3v6scA/hqdefault.jpg",
          "excerpt": null,
          "metric": 72,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T15:07:24.413Z",
          "status": null
        },
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "Elite 11 New Jersey: 2028 QB Christopher Vargas",
          "url": "https://www.youtube.com/watch?v=nsJnewsQ7NY",
          "at": "2026-05-08T16:08:23Z",
          "thumbnail": "https://i.ytimg.com/vi/nsJnewsQ7NY/hqdefault.jpg",
          "excerpt": null,
          "metric": 638,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T15:07:24.413Z",
          "status": null
        }
      ],
      "samplesSearched": {
        "count": 0,
        "why": "they link none of their own posts anywhere we can read"
      },
      "headline": "Tomloy247 makes Elite 11 New Jersey recruiting videos on 2028 quarterbacks for 1,410 YouTube subscribers and runs a podcast, but has posted nothing in 90 days after 4.4 a month before that, and owns no website, newsletter, store, or membership.",
      "headlineRestsOn": "YouTube channel, Podcast · Newsletter, Store, Membership, Own website · 1,410 on YouTube · nothing posted in 90 days, after 4.4 a month before that · \"Elite 11 New Jersey: 2028 QB Knox Annis\" (422 views) · \"Elite 11 New Jersey: 2028 QB Christopher Vargas\" (638 views)",
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
