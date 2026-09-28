/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief college-football-insiders-break` on 2026-08-07.
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
      "generatedAt": "2026-08-07T15:10:08.093Z",
      "brief": {
        "slug": "college-football-insiders-break",
        "text": "College football insiders — people who break or explain recruiting and coaching-staff news for one program's fans on camera, in a format they repeat every week."
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
        "id": "m_college_football_insiders_break",
        "name": "college-football-insiders-break",
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
        "description": "College football insiders — people who break or explain recruiting and coaching-staff news for one program's fans on camera, in a format they repeat every week."
      }
    ],
    "candidates": [
      {
        "id": "c_college_football_insiders_break__tomloy247",
        "name": "tomloy247",
        "handle": "@tomloy247",
        "initials": "TO",
        "avatar": "https://yt3.googleusercontent.com/yqlkHRZL6fOdDkPZVFMhPtI58VbM1ThZ8vbXO5Wnucg45kbyQUrfHzU9t3v8znehsZzpUFIzPkc=s900-c0x00ffffff-no-rj",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@tomloy247",
            "followers": 1400,
            "url": "https://www.youtube.com/@tomloy247",
            "avatar": "https://yt3.googleusercontent.com/yqlkHRZL6fOdDkPZVFMhPtI58VbM1ThZ8vbXO5Wnucg45kbyQUrfHzU9t3v8znehsZzpUFIzPkc=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 1400
        },
        "score": 37,
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
            "verdict": "pass",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "pass",
                "detail": "The only real signal here is the handle itself — \"tomloy247\" points to a 247Sports-style recruiting insider, and nothing visible contradicts the brief, though the scraped bio and \"recent posts\" are just YouTube boilerplate so the weekly on-camera format and single-program focus are unconfirmed rather than disproven."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — youtube.com/@tomloy247",
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
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places",
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
            "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
        "sourceWhy": "a model proposed this handle from a brief — Tom Loy covers Notre Dame recruiting and does frequent on-camera commitment and staff reaction shows.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__radinabulsi",
        "name": "radinabulsi",
        "handle": "@radinabulsi",
        "initials": "RA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_l3FlzQC789Jpd030fU8aSw3BAJQpStlTRs0g5UiiI=s900-c0x00ffffff-no-rj",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@radinabulsi",
            "followers": 2,
            "url": "https://www.tiktok.com/@radinabulsi",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7104966766589280261~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=3c097c81&x-expires=1786287600&x-signature=z8KRZeL31U7oWbp4gci6CHx0IPs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
                "detail": "There is no visible evidence this account produces any college football content at all — the bio is boilerplate, the posts are platform scaffolding text, and the following is essentially zero, so nothing here shows a repeating on-camera recruiting or coaching-news format for a program's fans."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@radinabulsi",
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
            "note": "something at creators.spotify.com/pod/show/radinabulsi — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 5 places",
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
        "sourceWhy": "a model proposed this handle from a brief — Radi Nabulsi is a veteran Georgia insider who hosts recurring on-camera Bulldogs recruiting shows.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__jeffsentell",
        "name": "jeffsentell",
        "handle": "@jeffsentell",
        "initials": "JE",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=06ffc2cd&x-expires=1786287600&x-signature=cVZS%2BVg8kaeZsOvjsLQNdUobYmk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@jeffsentell",
            "followers": 16,
            "url": "https://www.tiktok.com/@jeffsentell",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=06ffc2cd&x-expires=1786287600&x-signature=cVZS%2BVg8kaeZsOvjsLQNdUobYmk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 16
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
            "verdict": "fail",
            "engine": "llm",
            "subsignals": [
              {
                "key": "brief",
                "label": "Against the brief",
                "engine": "llm",
                "value": "fail",
                "detail": "The only thing visible is an empty TikTok account with no videos and no readable bio, so there is nothing here showing recruiting or coaching-staff coverage for a program, let alone a repeatable on-camera weekly format."
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
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at substack.com/@jeffsentell — not confirmed as theirs",
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
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places",
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
        "sourceWhy": "a model proposed this handle from a brief — Jeff Sentell is the best-known Georgia recruiting reporter, regularly on video breaking down commitments and staff moves.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__bobbyburton",
        "name": "bobbyburton",
        "handle": "@bobbyburton",
        "initials": "BO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nSNiYSvPvCCpOaA3XQDR5Z1JbETTCUrC0epju2BYRcUAhWBpYB6ETxcv4epfmtCNjofw=s900-c0x00ffffff-no-rj",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@bobbyburton",
            "followers": 12,
            "url": "https://www.tiktok.com/@bobbyburton",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d0da172e7576e0ff7b3f908177047141~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=a6ef971c&x-expires=1786287600&x-signature=hBKm0QFDx55mwIwNCnFi%2BqOyezA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
                "detail": "There's no visible content at all — an empty YouTube channel, 12 followers and zero posts on TikTok — so nothing shows this person covers recruiting or coaching news on camera in a repeatable weekly format."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — youtube.com/@bobbyburton",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at substack.com/@bobbyburton — not confirmed as theirs",
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
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/on-texas-football/id1588401030?uo=4",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 4,
            "note": "not there · we looked in 4 places · 1 wouldn't answer",
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
        "sourceWhy": "a model proposed this handle from a brief — Longtime Texas insider and recruiting-industry figure who appears in repeat-format video segments for Longhorns fans.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__sheadixon",
        "name": "sheadixon",
        "handle": "@sheadixon",
        "initials": "SH",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7352917579893063726~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e3fa034a&x-expires=1786287600&x-signature=K5zkXZgvgOVS0f%2FGGSYXbA9ezCY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@sheadixon",
            "followers": 131,
            "url": "https://www.tiktok.com/@sheadixon",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7352917579893063726~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e3fa034a&x-expires=1786287600&x-signature=K5zkXZgvgOVS0f%2FGGSYXbA9ezCY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 131
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
                "value": "No store, no youtube channel, no membership",
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
                "detail": "There is nothing here indicating college football coverage at all — no readable bio, no posts about recruiting or coaching news, just a generic personal TikTok profile."
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
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at sheadixon.substack.com — not confirmed as theirs",
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
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/shea-in-irving-show/id1150812218?uo=4",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at sheadixon.com — not confirmed as theirs",
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
        "sourceWhy": "a model proposed this handle from a brief — Shea Dixon is the go-to LSU recruiting insider, regularly on video breaking down Tigers commitments and staff news.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__manny_navarro",
        "name": "manny_navarro",
        "handle": "@manny_navarro",
        "initials": "MA",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/1da536b646d9f923cae598a325058db5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=3214f399&x-expires=1786287600&x-signature=CmjfmSuHl%2F%2BNxnznyimgbHpmCfs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@manny_navarro",
            "followers": 13,
            "url": "https://www.tiktok.com/@manny_navarro",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast8-avt-0068-tx2/1da536b646d9f923cae598a325058db5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=3214f399&x-expires=1786287600&x-signature=CmjfmSuHl%2F%2BNxnznyimgbHpmCfs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "audience": {
          "total": 13
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
                "detail": "There's nothing here that shows college football coverage at all — the account has zero posts, an unrelated bio, and no visible recruiting or coaching-staff content, let alone a repeatable weekly on-camera format."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at youtube.com/c/manny_navarro — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 4,
            "note": "only 4 of the 5 places we need actually answered",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 3,
            "note": "not there · we looked in 3 places · 2 wouldn't answer",
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
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/frontpage305/id1520711968?uo=4",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places",
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
        "sourceWhy": "a model proposed this handle from a brief — Miami beat reporter widely cited on Hurricanes recruiting and coaching-staff news with recurring video appearances.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__birm",
        "name": "birm",
        "handle": "@birm",
        "initials": "BI",
        "avatar": "https://yt3.googleusercontent.com/sVMi7DQQd593Oi3yFmAZlzh0eDb97bOoguU3TjnTk2WcST2OT4Lgplr6LCQbyLx5byeEGA5XCA=s900-c0x00ffffff-no-rj",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@birm",
            "followers": 396,
            "url": "https://www.tiktok.com/@birm",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/df1e10623d235176657beb1ee642833b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=b2358aa1&x-expires=1786287600&x-signature=J4C4t578lJGxNkcv2IpwTLe4k24%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
        "audience": {
          "total": 396
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
                "detail": "Nothing in this profile shows college football content at all — the bio and post text are generic scraped filler with no sign of recruiting or coaching-staff coverage, let alone a repeatable weekly on-camera format for one program's fans."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 2,
            "note": "found it — youtube.com/@birm",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at birm.substack.com — not confirmed as theirs",
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
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 3,
            "note": "2 of 5 places wouldn't answer",
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
        "sourceWhy": "a model proposed this handle from a brief — Jeremy Birmingham covers Ohio State recruiting and staff news and regularly appears on camera for Buckeye fans; widely cited by other outlets.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__andrewbone",
        "name": "andrewbone",
        "handle": "@andrewbone",
        "initials": "AN",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nXWMw5Bpd2IAvtkWzqMldp_0EZZi8XCxKkqdSvrpl-ZFNa=s900-c0x00ffffff-no-rj",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@andrewbone",
            "followers": 23,
            "url": "https://www.tiktok.com/@andrewbone",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4112bcaf&x-expires=1786287600&x-signature=uWMdwwNEhfAkXuMVVc%2FRqVl7Mk4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
                "detail": "There's no visible evidence this account posts college football content at all — the bio is TikTok boilerplate, the \"recent posts\" are scraped page navigation text, and the profile shows zero likes and no videos, so nothing confirms an on-camera weekly recruiting or coaching-news format for a program's fanbase."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 1,
            "note": "found it — youtube.com/@andrewbone",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at substack.com/@andrewbone — not confirmed as theirs",
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
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at podbean.com/login — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 1,
            "note": "something at andrewbone.com — not confirmed as theirs",
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
        "sourceWhy": "a model proposed this handle from a brief — Longtime Alabama recruiting reporter, often cross-referenced on Crimson Tide commitments and staff changes.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__careymurdock",
        "name": "careymurdock",
        "handle": "@careymurdock",
        "initials": "CA",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_mOoM5Qyn7djKFfbBmZQCcnkeE1v724QJZaA5HyEvS9gQ=s900-c0x00ffffff-no-rj",
        "mandateId": "m_college_football_insiders_break",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@careymurdock",
            "followers": 52,
            "url": "https://www.tiktok.com/@careymurdock",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7333710640140189702~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ca7652f3&x-expires=1786287600&x-signature=LE4AIyw21dXlqWCIJeRTZjGRd40%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-09T15:00:00.000Z",
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
          }
        ],
        "audience": {
          "total": 195
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
                "detail": "we could not read their posting rate — only 2 dated uploads came back — not enough to read a posting rate"
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
            "note": "found it — youtube.com/@careymurdock",
            "observedAt": "2026-08-07",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at careymurdock.substack.com — not confirmed as theirs",
            "observedAt": "2026-08-07",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at stan.store/careymurdock — not confirmed as theirs",
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
            "surfacesChecked": 2,
            "note": "not there · we looked in 2 places · 1 wouldn't answer",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 2,
            "note": "something at stan.store/careymurdock — not confirmed as theirs",
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
        "sourceWhy": "a model proposed this handle from a brief — Carey Murdock is the recognizable Oklahoma recruiting insider who fronts recurring Sooners video segments.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__michigan_insider",
        "name": "michigan_insider",
        "handle": "@michigan_insider",
        "initials": "MI",
        "avatar": null,
        "mandateId": "m_college_football_insiders_break",
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
            "surfacesChecked": 4,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 3,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 0,
            "note": "found it — https://podcasts.apple.com/us/podcast/michigan-insider/id1045184175?uo=4",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 3,
            "note": "something at hugedomains.com/domain_profile.cfm — not confirmed as theirs",
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
        "sourceWhy": "a model proposed this handle from a brief — Sam Webb is the long-running Michigan recruiting insider with a daily/weekly on-air routine; frequently quoted elsewhere.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__tremendousum",
        "name": "tremendousum",
        "handle": "@tremendousum",
        "initials": "TR",
        "avatar": null,
        "mandateId": "m_college_football_insiders_break",
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
            "surfacesChecked": 5,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 3,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
            "state": "not_found",
            "surfacesChecked": 4,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
        "sourceWhy": "a model proposed this handle from a brief — Steve Lorenz breaks Michigan recruiting and coaching-staff news and does recurring video/podcast segments.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_college_football_insiders_break__billyliucci",
        "name": "billyliucci",
        "handle": "@billyliucci",
        "initials": "BI",
        "avatar": null,
        "mandateId": "m_college_football_insiders_break",
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
            "surfacesChecked": 4,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 4,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "not_found",
            "surfacesChecked": 2,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-07",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 4,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
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
        "sourceWhy": "a model proposed this handle from a brief — Billy Liucci is the most cited Texas A&M insider on recruiting and coaching hires, with a regular on-camera show format.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      }
    ],
    "drops": {
      "2026-08-07": {
        "m_college_football_insiders_break": [
          "c_college_football_insiders_break__tomloy247",
          "c_college_football_insiders_break__radinabulsi",
          "c_college_football_insiders_break__jeffsentell",
          "c_college_football_insiders_break__bobbyburton",
          "c_college_football_insiders_break__sheadixon",
          "c_college_football_insiders_break__manny_navarro",
          "c_college_football_insiders_break__birm",
          "c_college_football_insiders_break__andrewbone",
          "c_college_football_insiders_break__careymurdock",
          "c_college_football_insiders_break__michigan_insider",
          "c_college_football_insiders_break__tremendousum",
          "c_college_football_insiders_break__billyliucci"
        ]
      }
    },
    "timeline": [],
    "runANameResult": {
      "id": "c_college_football_insiders_break__tomloy247",
      "name": "tomloy247",
      "handle": "@tomloy247",
      "initials": "TO",
      "avatar": "https://yt3.googleusercontent.com/yqlkHRZL6fOdDkPZVFMhPtI58VbM1ThZ8vbXO5Wnucg45kbyQUrfHzU9t3v8znehsZzpUFIzPkc=s900-c0x00ffffff-no-rj",
      "mandateId": "m_college_football_insiders_break",
      "primaryPlatform": "YouTube channel",
      "platforms": [
        {
          "name": "YouTube channel",
          "handle": "@tomloy247",
          "followers": 1400,
          "url": "https://www.youtube.com/@tomloy247",
          "avatar": "https://yt3.googleusercontent.com/yqlkHRZL6fOdDkPZVFMhPtI58VbM1ThZ8vbXO5Wnucg45kbyQUrfHzU9t3v8znehsZzpUFIzPkc=s900-c0x00ffffff-no-rj",
          "avatarExpires": null,
          "avatarStale": false,
          "matchConfidence": 1
        }
      ],
      "audience": {
        "total": 1400
      },
      "score": 37,
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
          "verdict": "pass",
          "engine": "llm",
          "subsignals": [
            {
              "key": "brief",
              "label": "Against the brief",
              "engine": "llm",
              "value": "pass",
              "detail": "The only real signal here is the handle itself — \"tomloy247\" points to a 247Sports-style recruiting insider, and nothing visible contradicts the brief, though the scraped bio and \"recent posts\" are just YouTube boilerplate so the weekly on-camera format and single-program focus are unconfirmed rather than disproven."
            }
          ]
        }
      },
      "inventory": [
        {
          "item": "YouTube channel",
          "state": "present",
          "surfacesChecked": 4,
          "note": "found it — youtube.com/@tomloy247",
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
          "surfacesChecked": 2,
          "note": "not there · we looked in 2 places",
          "observedAt": "2026-08-07",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "verified_absent",
          "surfacesChecked": 4,
          "note": "not there · we looked in 4 places",
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
          "note": "nothing in the 3 recent captions we could read — a sample, which cannot show that none exist",
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
      "sourceWhy": "a model proposed this handle from a brief — Tom Loy covers Notre Dame recruiting and does frequent on-camera commitment and staff reaction shows.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
