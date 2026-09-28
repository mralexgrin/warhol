/* ============================================================================
   WARHOL SCOUT — SEED, GENERATED FROM REAL OBSERVATIONS
   ----------------------------------------------------------------------------
   Written by `warhol export --brief home-cooking-recipe-creators` on 2026-08-14.
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
        "takenAt": "2026-08-14T15:05:19.934Z",
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
        "started": "2026-08-14T13:04:22.761Z",
        "finished": "2026-08-14T13:05:26.663Z",
        "creators": 10,
        "minutes": 1.0649166666666667,
        "checks": 393,
        "calls": 38,
        "cost": 0.1935,
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
      "generatedAt": "2026-08-14T15:05:19.934Z",
      "brief": {
        "slug": "home-cooking-recipe-creators",
        "text": "Home cooking and recipe creators — people who cook one dish on camera start to finish in a repeatable format, for a US audience."
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
        "id": "m_home_cooking_recipe_creators",
        "name": "home-cooking-recipe-creators",
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
        "description": "Home cooking and recipe creators — people who cook one dish on camera start to finish in a repeatable format, for a US audience."
      }
    ],
    "candidates": [
      {
        "id": "c_home_cooking_recipe_creators__chefjeanpierre",
        "name": "chefjeanpierre",
        "handle": "@chefjeanpierre",
        "initials": "CH",
        "avatar": "https://yt3.googleusercontent.com/r8w7YwJiYUG9wUIN8yIbrft8suo-tIfgL7C2_orRkpv7rINERB7-elYgqA1KZyAJ8GeHv1tGwss=s900-c0x00ffffff-no-rj",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@chefjeanpierre",
            "followers": null,
            "url": "https://www.tiktok.com/@chefjeanpierre",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/ba924484206f261530653d5ad01226e6~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e9df8512&x-expires=1786885200&x-signature=IotlwzroCcmgeyDE5DEzh%2F237Jk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@chefjeanpierre",
            "followers": 2470000,
            "url": "https://www.youtube.com/@chefjeanpierre",
            "avatar": "https://yt3.googleusercontent.com/r8w7YwJiYUG9wUIN8yIbrft8suo-tIfgL7C2_orRkpv7rINERB7-elYgqA1KZyAJ8GeHv1tGwss=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@chefjeanpierre",
            "host": "tiktok.com",
            "followers": null
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@chefjeanpierre",
            "host": "youtube.com",
            "followers": 2470000
          },
          {
            "name": "Website",
            "url": "https://chefjeanpierre.com/",
            "host": "chefjeanpierre.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 2470000
        },
        "score": 29,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 29,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no newsletter, no membership",
                "weightPct": 92,
                "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "32 purchase-intent comments",
                "weightPct": 8,
                "detail": "32 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "detail": "Chef Jean-Pierre is a career chef whose YouTube channel is built on single-dish, start-to-finish cooking demos in a consistent format for a US audience, which is exactly what the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 118,
            "note": "found it — youtube.com/@chefjeanpierre",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 619,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 418,
            "note": "not there · we looked in 4 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 314,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 178,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 165,
            "note": "found it — chefjeanpierre.com",
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
            "quote": "I will definitely be making this recipe for my family. Thank you Chef. ♥️🙏",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Oh I am making this tonight!!!! So happy Chef and Jack are back!!!! Thank you 🙏",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "This will be for dinner, this Saturday!! (So happy you returned!🙂)",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Yum, I might make this tonight!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Seeing you enjoying the chop sent me to the store I need that smile on my face as well",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I know what I'm having tonight!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I was going to buy pork chops last night when I was at the grocery store. I will tonight.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Was about to go to the grocery store for, you guessed it pork chops, this stopped me in my tracks😊",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I had pork loin in my fridge to cook tomorrow. Perfect timing on the recipe. Thanks Chef!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Made stuffed zucchini yesterday & took your advice - made extra sauce. It will work well as a base for this shepherds pie. Just need mashed potatoes. Alright!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "The timing!!! I was planning on making some version of a Sheppard's Pie tonight for dinner as I need to use up the potatoes and ground beef I have before they go bad. This is so much better than the recipe I found online. My pregnant wife is going to be so happy. Thanks Chef.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "can't wait to make! Thanks for coming back to cook for us. We missed you! Now my mouth is watering!😋",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I just got back from the store where I bought a package of pork loin chops for $5. I was planning to make pork in a coconut curry sauce, but now it is going to Pork Scallopini Milanese.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I just got back from the store where I bought a package of pork loin chops for $5.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I love scallopini and make it often and I just got two new tips to make it even better! thanks Chef!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Dinner tonight",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "J'essaierai ce week-end. Ravi de vous revoir.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Will definitely try this! you AI the cover image? YOU DON'T NEED TO!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I will tonight.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm gonna do it because I can! And because it tastes amazing!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Wow, Chef, that's one I have to make. Your Mom was a genius to figure out that ratatouille in a shepherd's {cottage) pie. Like you, my recipe is from my Mother -- but the filling is quite different. I love my family's version but I'm going to do this one because it just sounds so delicious!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Will definitely be trying this recipe though!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I love chicken Milanese, but now I'm going to make the pork Milenese because it looks so good, Chef. 🙂👍🏻",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I made Chef's cottage pie and it was insane. Will try this as well. Looks fantastic. Thank you Chef!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Another awesome dish! I cant wait to make it!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "im s0o happy ur back. im sure chef knows but make sure you tell him he makes so many lives brighter. havent had a pork chop in a long time. i usually do pork chops with cream of mushroom for a sauce.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Will definitely try this!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Oh I am making this tonight!!!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "This will be for dinner, this Saturday!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Can't wait to make this dish. Thank you.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I'm going to make this.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "I might make this tonight!",
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
            "platform": "Their site",
            "publication": "Chef Jean-Pierre",
            "kind": "writing",
            "title": "6 Easy Homemade Salad Dressings You’ll Want to Drink",
            "url": "https://chefjeanpierre.com/salad-recipes/6-easy-homemade-salad-dressings/",
            "at": "2026-08-13T14:00:41.000Z",
            "thumbnail": null,
            "excerpt": "Master the Art of Homade Salad Dressings: The Complete Guide to Homemade Ranch, Vinaigrette, Honey Mustard, Blue Cheese & More Today, my friends, we are making six delicious homemade salad dressings: Ranch, Classic Vinaigrette, Honey Mustard, Peanut-Ginger, Blue Cheese, and Cilantro-Lime. And rememb",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:04:52.624Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "6 Salad Dressings So Good, You Could Drink Them!",
            "url": "https://www.youtube.com/watch?v=MY3iIGBu5NY",
            "at": "2026-08-13T14:00:06Z",
            "thumbnail": "https://i.ytimg.com/vi/MY3iIGBu5NY/hqdefault.jpg",
            "excerpt": null,
            "metric": 63748,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:42.238Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Chef Jean-Pierre",
            "kind": "writing",
            "title": "Pork Milanese: Juicy, Crispy Pork Scallopini",
            "url": "https://chefjeanpierre.com/recipes/pork-milanese-scallopini/",
            "at": "2026-08-06T14:00:06.000Z",
            "thumbnail": null,
            "excerpt": "The Secret to Tender, Juicy Pork Chops with a Golden Parmesan-Panko Crust Hello friends, today we are making a delicious Pork scallopini Milanese looks expensive, tastes expensive, and—this is the beautiful part—is not expensive. In the video, I used six boneless pork loin chops that cost a little o",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:04:52.624Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The Secret to Juicy Pork Milanese Every Time",
            "url": "https://www.youtube.com/watch?v=lGiF15-KWbo",
            "at": "2026-08-06T14:00:02Z",
            "thumbnail": "https://i.ytimg.com/vi/lGiF15-KWbo/hqdefault.jpg",
            "excerpt": null,
            "metric": 88445,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:42.238Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Chef Jean-Pierre teaches home cooks classic recipes for 2,470,000 YouTube subscribers, with videos in the 84,451 to 329,532 view range and a website, but no newsletter, store, or membership to sell them anything.",
        "headlineRestsOn": "audience: 2,470,000 on YouTube · YouTube channel · Own website · they do not have: Newsletter, Store, Membership · \"The Secret to Juicy Pork Milanese Every Time\" (84,451 views) · \"Retirement Was Great... But I Missed You \\u2764\\ufe0f\" (329,532 views) · \"French Cooking Without the Fancy Price!\" (174,542 views)",
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
        "sourceWhy": "a model proposed this handle from a brief — Veteran French chef teaching one classic dish per video in a fixed, repeatable studio-kitchen setup.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__cookingwithlynja",
        "name": "cookingwithlynja",
        "handle": "@cookingwithlynja",
        "initials": "CO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kxxEAZC6PRm4fIqifOfwttzWvJsUPQ2X3tjTkC4E6kdbs=s900-c0x00ffffff-no-rj",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@cookingwithlynja",
            "followers": 22200000,
            "url": "https://www.tiktok.com/@cookingwithlynja",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7310587793867014186~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=64995778&x-expires=1786885200&x-signature=U6fLvF9%2B%2BmPxslInW52uoLgQSfc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@cookingwithlynja",
            "followers": 15200000,
            "url": "https://www.youtube.com/@cookingwithlynja",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_kxxEAZC6PRm4fIqifOfwttzWvJsUPQ2X3tjTkC4E6kdbs=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@cookingwithlynja",
            "host": "tiktok.com",
            "followers": 22200000
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@cookingwithlynja",
            "host": "youtube.com",
            "followers": 15200000
          }
        ],
        "audience": {
          "total": 22200000
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
                "value": "31 dead links they still publish — they tried, it broke",
                "weightPct": 100,
                "detail": "31 dead links they still publish — they tried, it broke — 12 of the 40 Pressure points. Ceiling on this look is 22."
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
                "detail": "This is a hugely popular cooking channel built on exactly the format the brief asks for — one dish cooked start to finish per short video, in a consistent style, for a US audience."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 80,
            "note": "found it — youtube.com/@cookingwithlynja",
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
            "surfacesChecked": 134,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 78,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 34,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 35,
            "note": "something at tiktok.com/@cookingwithlynja — not confirmed as theirs",
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
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-07",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-12",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
            "observedAt": "2026-08-14",
            "engine": "rule",
            "label": "abandonment"
          },
          {
            "kind": "signal",
            "quote": "https://glnk.io/4x159/cookingwithlynja",
            "platform": "link they publish",
            "url": "https://glnk.io/4x159/cookingwithlynja",
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
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "You’re the best mom I could have ever asked for but an even better friend. I love you mom ❤️",
            "url": "https://www.youtube.com/watch?v=NZYZaCWBWWQ",
            "at": "2024-01-12T16:47:59Z",
            "thumbnail": "https://i.ytimg.com/vi/NZYZaCWBWWQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 16282326,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:44.345Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Truffle Hunting w/ @NickDiGiovanni !?!",
            "url": "https://www.youtube.com/watch?v=t9KNTBRqYtU",
            "at": "2024-01-11T16:23:33Z",
            "thumbnail": "https://i.ytimg.com/vi/t9KNTBRqYtU/hqdefault.jpg",
            "excerpt": null,
            "metric": 50504516,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:44.345Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "McDonald’s in Rome!?!",
            "url": "https://www.youtube.com/watch?v=fikm7ZvEYj0",
            "at": "2024-01-10T18:05:52Z",
            "thumbnail": "https://i.ytimg.com/vi/fikm7ZvEYj0/hqdefault.jpg",
            "excerpt": null,
            "metric": 19945321,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:44.345Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Italy vlog: Day 3!?!",
            "url": "https://www.youtube.com/watch?v=QDtp1L5GTnI",
            "at": "2024-01-09T16:34:29Z",
            "thumbnail": "https://i.ytimg.com/vi/QDtp1L5GTnI/hqdefault.jpg",
            "excerpt": null,
            "metric": 11428961,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:44.345Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Lynja makes short cooking and travel videos for 22,200,000 followers on TikTok and 15,200,000 on YouTube, with recent posts drawing tens of millions of views each, but sells nothing of her own: no store, no membership, no newsletter, just a website and the channels.",
        "headlineRestsOn": "22,200,000 on TikTok · 15,200,000 on YouTube · YouTube channel · Own website · Newsletter · Store · Membership · \"Truffle Hunting w/ @NickDiGiovanni !?!\" (50,480,574 views) · \"McDonald\\s in Rome!?!\" (19,933,480 views) · \"Italy vlog: Day 3!?!\" (11,421,378 views)",
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
        "sourceWhy": "a model proposed this handle from a brief — Well-known short-form cooking creator making a single recipe per video with a signature comedic format.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__halfbakedharvest",
        "name": "halfbakedharvest",
        "handle": "@halfbakedharvest",
        "initials": "HA",
        "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/27ba739db92bb168e939759cdc5440c5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c1db2494&x-expires=1786885200&x-signature=uLv1VaxYV%2FLiCDHhNseAOVOi7Dw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@halfbakedharvest",
            "followers": 892200,
            "url": "https://www.tiktok.com/@halfbakedharvest",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/27ba739db92bb168e939759cdc5440c5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=c1db2494&x-expires=1786885200&x-signature=uLv1VaxYV%2FLiCDHhNseAOVOi7Dw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@halfbakedharvest",
            "host": "tiktok.com",
            "followers": 892200
          },
          {
            "name": "Store",
            "url": "https://shop.halfbakedharvest.com/",
            "host": "shop.halfbakedharvest.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://www.halfbakedharvest.com/",
            "host": "halfbakedharvest.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 892200
        },
        "score": 26,
        "scoreDelta": null,
        "confidence": 1,
        "pillars": {
          "gap": {
            "score": 20,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 1,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No youtube channel, no newsletter, no membership",
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
                "detail": "we could not read their posting rate — only 4 dated posts came back — not enough to read a posting rate"
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
                "detail": "Half Baked Harvest is a well-known home cooking and recipe creator with a cookbook and a large US following, and her short-form videos are recipe-format cooking content, so she fits the brief even though the exact start-to-finish shot structure isn't visible in the evidence here."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "verified_absent",
            "surfacesChecked": 14,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 19,
            "note": "not there · we looked in 7 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — shop.halfbakedharvest.com · that page links back to their TikTok",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 10,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 5,
            "note": "not there · we looked in 1 place",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 4,
            "note": "found it — halfbakedharvest.com",
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
        "evidence": [
          {
            "kind": "signal",
            "quote": "https://halfbakedharvest.jupiter.shop/landing",
            "platform": "link they publish",
            "url": "https://halfbakedharvest.jupiter.shop/landing",
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
        "asOf": "2026-08-14",
        "alert": null,
        "samples": [
          {
            "platform": "Their site",
            "publication": "Half Baked Harvest",
            "kind": "writing",
            "title": "Cinnamon Crunch Zucchini Muffin Quick Bread.",
            "url": "https://www.halfbakedharvest.com/cinnamon-crunch-zucchini-muffin-quick-bread/?adt_ei=*|EMAIL|*",
            "at": "2026-08-14T07:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Cinnamon Crunch Zucchini Muffin Quick Bread | halfbakedharvest.com",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:05:03.227Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Half Baked Harvest",
            "kind": "writing",
            "title": "Coconut Chicken and Zucchini Curry.",
            "url": "https://www.halfbakedharvest.com/coconut-chicken-and-zucchini-curry/?adt_ei=*|EMAIL|*",
            "at": "2026-08-12T07:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Coconut Chicken and Zucchini Curry | halfbakedharvest.com",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:05:03.227Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Half Baked Harvest",
            "kind": "writing",
            "title": "The Best Late Summer Recipes.",
            "url": "https://www.halfbakedharvest.com/best-late-summer-recipes/?adt_ei=*|EMAIL|*",
            "at": "2026-08-10T07:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Peaches and Cream Pretzel Pie | halfbakedharvest.com #pie #peach #summer #dessert #easy",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:05:03.227Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Half Baked Harvest",
            "kind": "writing",
            "title": "449: Nine Favorite Things.",
            "url": "https://www.halfbakedharvest.com/nine-favorite-things-449/?adt_ei=*|EMAIL|*",
            "at": "2026-08-09T07:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Nine Favorite Things | halfbakedharvest.com",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-12T20:00:16.714Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Halfbakedharvest posts recipes like coconut chicken and zucchini curry to 892,200 TikTok followers and sells through a store and an owned website, with no YouTube channel, newsletter, membership, or podcast yet.",
        "headlineRestsOn": "user handle: halfbakedharvest · 892,200 on TikTok · Store · Own website · YouTube channel · Newsletter · Membership · Podcast · \"Coconut Chicken and Zucchini Curry.\"",
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
        "sourceWhy": "a model proposed this handle from a brief — Home recipe developer whose cooking videos follow a consistent one-recipe-per-post structure for US home cooks.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__doobydobap",
        "name": "doobydobap",
        "handle": "@doobydobap",
        "initials": "DO",
        "avatar": "https://yt3.googleusercontent.com/fjXGOTy4Vv5bH96Nn8LKhpKrQ5jGU465XzIClNi6_tfcAsN4uePvphpIRJZDr5yzVdXt9kr2Hw=s900-c0x00ffffff-no-rj",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@doobydobap",
            "followers": 3200000,
            "url": "https://www.tiktok.com/@doobydobap",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/f817f2c7c73f630c4bc0788597c5d1ae~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=4015e1d3&x-expires=1786885200&x-signature=dkpbmirmgS5eEwXWOHqh%2BKCDXSs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@doobydobap",
            "followers": 4480000,
            "url": "https://www.youtube.com/@doobydobap",
            "avatar": "https://yt3.googleusercontent.com/fjXGOTy4Vv5bH96Nn8LKhpKrQ5jGU465XzIClNi6_tfcAsN4uePvphpIRJZDr5yzVdXt9kr2Hw=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@doobydobap",
            "host": "tiktok.com",
            "followers": 3200000
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@doobydobap",
            "host": "youtube.com",
            "followers": 4480000
          },
          {
            "name": "Website",
            "url": "https://doobydobap.com/",
            "host": "doobydobap.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 4480000
        },
        "score": 21,
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
                "value": "No store, no membership, no podcast",
                "weightPct": 87,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "24 purchase-intent comments",
                "weightPct": 13,
                "detail": "24 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "−55% vs baseline",
                "weightPct": 100,
                "detail": "2.3 videos a month now, against 5.1 before that — down 54%; the recent ones are getting 49% fewer views — 6.4 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Dooby Dobap is a large food creator whose whole channel is cooking dishes on camera with recipes, aimed at a mostly US audience, so she fits the brief even though the scraped post text doesn't show the specific one-dish format."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 32,
            "note": "found it — youtube.com/@doobydobap",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 122,
            "note": "something at substack.com/@doobydobap — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 143,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 100,
            "note": "not there · we looked in 4 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 56,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 38,
            "note": "found it — doobydobap.com",
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
            "quote": "Petition to have more regular Kevin episodes",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Please, I am begging you make this a series. I could watch this forever!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Pls make more video's like this dooby. ( pretty pls )",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Love this format ! More of this pleaaase",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I need the japanese version of this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "More cooking videos with Kevin, please! And written down recipes cuz I would really love to cook and try all your dishes. Very touching video btw🥹",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Pls make more video's like this dooby. ( pretty pls ) It felt like a warm hug , and Kevin's cooking was so therapeutic to watch ❤",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "they need to make more vlog style stuff like this together so heart-warming hits like the best romance shows and movies",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "congratulations on your nuptials! your lives are filled with love and daily magic... i cried some happy tears for you. this was one of my favorite videos you've made! would love to see more of this series 🤩 also... please drop the rye bread recipe abeg!! danish rye bread with a thick layer of butte",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Do you have a recipe going up for this? :D curious what is sprinkled on the kimchi too!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "website"
          },
          {
            "kind": "comment",
            "quote": "these vlogs with a mix of your personal life, commentary and dynamic with Kevin are the absolute best! they remind me of your early vlogs where you found beauty in the simplicity if every day life :)",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I loveeee your way of announcing changes in your life. Congratulations, Im happy you found each other. And pleaseeeee more videos like this. Just the two of you cooking amazing dishes! ♥️🙌🏼 blessings guys ✨",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Can you both do a cookoff video against each other. That would be fun to watch. Oh, and you both are the judges also",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I love how calming this video is, very well done. Would love to see more of this.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "congratulations on your nuptials! your lives are filled with love and daily magic... i cried some happy tears for you. this was one of my favorite videos you've made! would love to see more of this series 🤩 also... please drop the rye bread recipe abeg!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "More Kevin please!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "please drop the rye bread recipe abeg!!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "website"
          },
          {
            "kind": "comment",
            "quote": "I never went to Relae itself but made a point of going to its sibling Manfreds and Vins over the road on every visit to Copenhagen. What they could do with simple vegetables and textures (and wine!) was incredible. More Kevin please!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Does Kevin have his own channel?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "would love to see more of this series 🤩",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "More cooking videos with Kevin, please!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "they need to make more vlog style stuff like this together",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "pleaseeeee more videos like this. Just the two of you cooking amazing dishes! ♥️🙌🏼 blessings guys ✨",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "More of this. So glad to see you both happy.",
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
            "title": "What my Ex-Michelin Trained Chef Husband Cooks in a Week",
            "url": "https://www.youtube.com/watch?v=2t9u1nMZ0-8",
            "at": "2026-08-03T02:42:42Z",
            "thumbnail": "https://i.ytimg.com/vi/2t9u1nMZ0-8/hqdefault.jpg",
            "excerpt": null,
            "metric": 574166,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:44.804Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Danes🇩🇰 vs Koreans🇰🇷",
            "url": "https://www.youtube.com/watch?v=VbFm7kykuOI",
            "at": "2026-07-27T23:11:53Z",
            "thumbnail": "https://i.ytimg.com/vi/VbFm7kykuOI/hqdefault.jpg",
            "excerpt": null,
            "metric": 2681044,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:44.804Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "A Beginner's Guide to Chinese Cooking",
            "url": "https://www.youtube.com/watch?v=-w5E1DvIhy0",
            "at": "2026-07-20T22:27:07Z",
            "thumbnail": "https://i.ytimg.com/vi/-w5E1DvIhy0/hqdefault.jpg",
            "excerpt": null,
            "metric": 245937,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:44.804Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Alone in New York City!",
            "url": "https://www.youtube.com/watch?v=rMTG9ZULTJw",
            "at": "2026-07-02T01:02:17Z",
            "thumbnail": "https://i.ytimg.com/vi/rMTG9ZULTJw/hqdefault.jpg",
            "excerpt": null,
            "metric": 362976,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:44.804Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 0,
          "why": "they link none of their own posts anywhere we can read"
        },
        "headline": "Doobydobap makes food and travel videos for 3,200,000 followers on TikTok and 4,480,000 on YouTube, sends a newsletter, and runs her own website, but has no store or membership, and she is posting 2.3 videos a month against 5.1 before, with recent videos getting 49% fewer views.",
        "headlineRestsOn": "3,200,000 on TikTok · 4,480,000 on YouTube · Newsletter · Own website · YouTube channel · Store · Membership · 2.3 videos a month now, against 5.1 before that · the recent ones are getting 49% fewer views · \"What my Ex-Michelin Trained Chef Husband Cooks in a Week\" (558,673 views) · \"A Beginner's Guide to Chinese Cooking\" (241,595 views) · \"I Cycled Across Korea (to Eat)\" (376,264 views) · \"Alone in New York City!\" (360,738 views)",
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
        "sourceWhy": "a model proposed this handle from a brief — Korean-American cook who films one dish start to finish with a narrative style, widely profiled.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__joshuaweissman",
        "name": "joshuaweissman",
        "handle": "@joshuaweissman",
        "initials": "JO",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nfXRvoxu5cFt2H4WhJfFLbL5SVdzmvEnFymnPzH3_1qPM=s900-c0x00ffffff-no-rj",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "YouTube channel",
        "platforms": [
          {
            "name": "YouTube channel",
            "handle": "@joshuaweissman",
            "followers": 10700000,
            "url": "https://www.youtube.com/@joshuaweissman",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nfXRvoxu5cFt2H4WhJfFLbL5SVdzmvEnFymnPzH3_1qPM=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@joshuaweissman",
            "host": "youtube.com",
            "followers": 10700000
          },
          {
            "name": "Newsletter",
            "url": "https://joshuaweissman.substack.com/",
            "host": "joshuaweissman.substack.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 10700000
        },
        "score": 16,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 16,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No store, no own website, no podcast",
                "weightPct": 89,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "23 purchase-intent comments",
                "weightPct": 11,
                "detail": "23 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "value": "+2% vs baseline",
                "weightPct": 0,
                "detail": "5.7 videos a month, steady against 5.6 before that; the recent ones are getting 15% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Joshua Weissman is a well-known food and cooking creator whose channel is built on cooking dishes start to finish in recognizable repeatable formats, aimed at a mainly US audience, so he fits the brief even though the scraped post titles here are uninformative."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 128,
            "note": "found it — youtube.com/@joshuaweissman",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 520,
            "note": "found it — joshuaweissman.substack.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "verified_absent",
            "surfacesChecked": 594,
            "note": "not there · we looked in 5 places · 2 wouldn't answer",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 366,
            "note": "something at patreon.com/profile/creators — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 273,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "verified_absent",
            "surfacesChecked": 136,
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
            "quote": "More rice cooker recipes!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Collab with Andy, please",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "We need a series \"Joshua cooks for baby\"",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Josh can we please get more of this series!!!❤",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "This is a required new series 😭😭😭❤️",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Pls more of this content 🥺😁😁 I fkn enjoyed it 😁😁",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Need a long form with your baby recipes, especially that sweet potato pancake 😮",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "More episodes of this please 😁",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "That was hilarious. WE WANT MORE OF THESE",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Please keep these coming...I love your baby😵‍💫...lots of blessings 🥹😇😇",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Your best so far. Baby recipe stuff! We want em!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I see an ongoing series about to happen. Loved your video! Beautiful presentation, your baby eats masterpieces!❤",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I kinda want a full lenght video with Josh's take on baby food",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "We want more of these",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I'm looking forward to the next set of meals you make. I also have a ban at home who would probably love this",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Banana bread looks Dope Andy is real goat man I have basic rice cooker with just on switch cook and heat Can any one guide me how to try banana bread with basic rice cooker ??",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Do you need a fancy rice cooker to accomplish all this? Ours just has an on or warm switch and I'm wondering what else I can realistically make in it",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Need a long form with your baby recipes, especially that sweet potato pancake",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I need the recipe on how you made the baby",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "unspecified"
          },
          {
            "kind": "comment",
            "quote": "Your next visit is on me.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Thank you Josh - you taught me how to cook, and South Park taught me Casa Bonita exists. Take me there!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "can we get the 'but better' series back pls",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "But better and but cheaper please",
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
            "title": "Top 3 Brownie Hacks",
            "url": "https://www.youtube.com/watch?v=iLe2PLFdIgY",
            "at": "2026-08-11T15:30:29Z",
            "thumbnail": "https://i.ytimg.com/vi/iLe2PLFdIgY/hqdefault.jpg",
            "excerpt": null,
            "metric": 850794,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:27.739Z",
            "status": null
          },
          {
            "platform": "Newsletter",
            "publication": "JoshuaWeissman",
            "kind": "writing",
            "title": "looking great for great people",
            "url": "https://joshuaweissman.substack.com/p/looking-great-for-great-people",
            "at": "2025-11-14T08:31:25.000Z",
            "thumbnail": null,
            "excerpt": null,
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their newsletter",
            "seenAt": "2026-08-14T13:04:36.011Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "I Investigated The “Illegal” Food of Facebook Marketplace",
            "url": "https://www.youtube.com/watch?v=HkDSTzzogLk",
            "at": "2026-08-09T14:30:28Z",
            "thumbnail": "https://i.ytimg.com/vi/HkDSTzzogLk/hqdefault.jpg",
            "excerpt": null,
            "metric": 1848799,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:27.739Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Testing Rice Cooker Hacks",
            "url": "https://www.youtube.com/watch?v=z_GQgp1EGpc",
            "at": "2026-08-05T15:00:33Z",
            "thumbnail": "https://i.ytimg.com/vi/z_GQgp1EGpc/hqdefault.jpg",
            "excerpt": null,
            "metric": 1068282,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:27.739Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 1,
          "why": "1 piece of their own work"
        },
        "headline": "Joshua Weissman cooks for 10,700,000 YouTube subscribers at 5.7 videos a month, with recent uploads landing between 692,903 and 2,157,280 views, and he already runs a newsletter and a membership but has no store, no podcast, and no site of his own.",
        "headlineRestsOn": "10,700,000 on YouTube · YouTube channel · Newsletter · Membership · Store · Podcast · Own website · 5.7 videos a month · \"Top 3 Brownie Hacks\" (692,903 views) · \"I Cook For a Baby\" (2,157,280 views)",
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
        "sourceWhy": "a model proposed this handle from a brief — Trained cook turned video creator known for making one dish per episode from scratch, widely covered in food media.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__ethanchlebowski",
        "name": "ethanchlebowski",
        "handle": "@ethanchlebowski",
        "initials": "ET",
        "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nASBGz3OXASRVham6ZgSHJrheFcXNKHtI86bw0QeA9ENc=s900-c0x00ffffff-no-rj",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@ethanchlebowski",
            "followers": 337900,
            "url": "https://www.tiktok.com/@ethanchlebowski",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d01462aaa6924e44e13181d30582a6d8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=87590675&x-expires=1786885200&x-signature=852wqHGHXHapNDpBSBj729zkQ5g%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@ethanchlebowski",
            "followers": 2430000,
            "url": "https://www.youtube.com/@ethanchlebowski",
            "avatar": "https://yt3.googleusercontent.com/ytc/AIdro_nASBGz3OXASRVham6ZgSHJrheFcXNKHtI86bw0QeA9ENc=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@ethanchlebowski",
            "host": "tiktok.com",
            "followers": 337900
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@ethanchlebowski",
            "host": "youtube.com",
            "followers": 2430000
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-ethan-c-lewin-podcast/id1813884512?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Website",
            "url": "https://www.ethanchlebowski.com/",
            "host": "ethanchlebowski.com",
            "followers": null
          },
          {
            "name": "Spotify",
            "url": "https://podcasters.spotify.com/pod/show/ethan--lewin/episodes/60---Penny-Rhodes---A-Sojourn-in-Hell--On-the-Way-to-Heaven-e3n1h1a",
            "host": "podcasters.spotify.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 2430000
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
                "value": "No newsletter, no membership",
                "weightPct": 92,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "11 purchase-intent comments",
                "weightPct": 8,
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
                "value": "+53% vs baseline",
                "weightPct": 0,
                "detail": "3.7 videos a month now, against 2.4 before that — up 53%, they are posting more; the recent ones are getting 35% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Ethan is a well-known cooking creator whose channel is built on cooking dishes on camera in a consistent recipe-plus-explanation format for a mainly US audience, which is exactly what the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 355,
            "note": "found it — youtube.com/@ethanchlebowski",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 685,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 399,
            "note": "something at shop.cookwell.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 352,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 37,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-ethan-c-lewin-podcast/id1813884512?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 144,
            "note": "found it — ethanchlebowski.com",
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
            "quote": "where can i get a stainless peel pan?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "PLEASE DO MORE VIDs like this. I always struggle with how to make a good bulk protein and having short videos like this or even a guide helps a ton!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "yes! I'd like to see slop bowls around the world, where you try to make a healthy quick one representing different international cuisines",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "absolutely do not stop this kind of stuff!!!! i never comment but need more of this, from my favorite creator too. possibly a series?? at least do more",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "A slop bowl series would be a total game changer for meal prep",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "MORE slop bowls!! :)",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Keep cranking out slop recs 😂",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I would order this.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Pls do some meal prep veg/salad recipes!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Need a slop bowl series, this is perfect",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "I recently subscribed to the Cook Well app.",
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
            "title": "I turned a Banh Mi into a high protein rice bowl.",
            "url": "https://www.youtube.com/watch?v=wfYEk0lXtwE",
            "at": "2026-08-12T15:00:09Z",
            "thumbnail": "https://i.ytimg.com/vi/wfYEk0lXtwE/hqdefault.jpg",
            "excerpt": null,
            "metric": 69998,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:30.216Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Ethan C. Lewin Podcast",
            "kind": "episode",
            "title": "#60 - Penny Rhodes - A Sojourn in Hell, On the Way to Heaven",
            "url": "https://podcasters.spotify.com/pod/show/ethan--lewin/episodes/60---Penny-Rhodes---A-Sojourn-in-Hell--On-the-Way-to-Heaven-e3n1h1a",
            "at": "2026-08-07T14:30:00.000Z",
            "thumbnail": null,
            "excerpt": "The first time I encountered Penny Rhodes was from afar through her 2024 General Church Assembly Talk. That eight-minute talk can be listened to here: Penny’s Talk . \n The first time we officially met in person was when I arrived at her front door to record this episode. Before we had even sat down,",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:04:40.118Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "I Tried To Eat Healthy for $10 a Day",
            "url": "https://www.youtube.com/watch?v=EDUKbtIP6QQ",
            "at": "2026-08-09T15:00:39Z",
            "thumbnail": "https://i.ytimg.com/vi/EDUKbtIP6QQ/hqdefault.jpg",
            "excerpt": null,
            "metric": 249200,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:30.217Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Do you struggle with this?",
            "url": "https://www.youtube.com/watch?v=HGPWn5_yVtM",
            "at": "2026-08-02T15:00:00Z",
            "thumbnail": "https://i.ytimg.com/vi/HGPWn5_yVtM/hqdefault.jpg",
            "excerpt": null,
            "metric": 280456,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:30.217Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 3,
          "why": "3 pieces of their own work"
        },
        "headline": "Ethan Chlebowski cooks practical food videos for 2,430,000 YouTube subscribers and sells through a store, a podcast, and his own site, but he has no newsletter or membership to hold that audience while his posting rate climbs 53% and recent views drop 35%.",
        "headlineRestsOn": "2,430,000 on YouTube · YouTube channel · Store · Podcast · Own website · Newsletter · Membership · 3.7 videos a month now, against 2.4 before that \\the the recent ones are getting 35% fewer views · up 53%, they are posting more · the recent ones are getting 35% fewer views · \"High Protein Rice Bowl\" (15,230 views) · \"I Tried To Eat Healthy for $10 a Day\" (205,477 views) · \"What does Saffron ACTUALLY taste like?\" (1,082,670 views)",
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
        "sourceWhy": "a model proposed this handle from a brief — Home cook who films a single recipe start to finish with an explanatory, technique-first approach for a US audience.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__thegoldenbalance",
        "name": "thegoldenbalance",
        "handle": "@thegoldenbalance",
        "initials": "TH",
        "avatar": "https://yt3.googleusercontent.com/JA4SHJG0wkJ9nlksLsGrduuwpxezBn3fyGgCznDCqaEdJoFL2qM2bWtsrWQonmnaM25OQ3uSow=s900-c0x00ffffff-no-rj",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@thegoldenbalance",
            "followers": 8500000,
            "url": "https://www.tiktok.com/@thegoldenbalance",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7319866735920676906~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=30a6d949&x-expires=1786885200&x-signature=YB2HuF4ejLIwGDvava5l8Kxn9o4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "matchConfidence": 1
          },
          {
            "name": "YouTube channel",
            "handle": "@thegoldenbalance",
            "followers": 3530000,
            "url": "https://www.youtube.com/@thegoldenbalance",
            "avatar": "https://yt3.googleusercontent.com/JA4SHJG0wkJ9nlksLsGrduuwpxezBn3fyGgCznDCqaEdJoFL2qM2bWtsrWQonmnaM25OQ3uSow=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the YouTube to the TikTok, so it is not added in"
          },
          {
            "name": "Bluesky profile",
            "handle": "@thegoldenbalance",
            "followers": 39,
            "url": "https://bsky.app/profile/thegoldenbalance.bsky.social",
            "avatar": "https://cdn.bsky.app/img/avatar/plain/did:plc:odt2oegxmtzoq5pkne7srg7z/bafkreidwmjfszx4zwoiwwdijzwlwrcc2526ihzuhcoqc24duci2xj3qgxe",
            "avatarExpires": null,
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the Bluesky to the TikTok, so it is not added in"
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@thegoldenbalance",
            "host": "tiktok.com",
            "followers": 8500000
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@thegoldenbalance",
            "host": "youtube.com",
            "followers": 3530000
          },
          {
            "name": "Bluesky profile",
            "url": "https://bsky.app/profile/thegoldenbalance.bsky.social",
            "host": "bsky.app",
            "followers": 39
          },
          {
            "name": "Store",
            "url": "https://www.thegoldenbalance.com/store",
            "host": "thegoldenbalance.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-golden-balance/id1809558008?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Spotify",
            "url": "https://podcasters.spotify.com/pod/show/fidan-asgarova/episodes/Trailer-episode-e31o5tf",
            "host": "podcasters.spotify.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 8500000
        },
        "score": 7,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 7,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "No newsletter",
                "weightPct": 96,
                "detail": "5 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "4 purchase-intent comments",
                "weightPct": 4,
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
                "value": "−3% vs baseline",
                "weightPct": 0,
                "detail": "9 videos a month now, against 9.3 before that — down 3%; the recent ones are getting 45% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "Ahmad Alzahabi's Golden Balance is exactly a single-dish, start-to-finish cooking format with recipes on his own site and a huge US-facing following, so he fits the brief squarely."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 48,
            "note": "found it — youtube.com/@thegoldenbalance",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "verified_absent",
            "surfacesChecked": 263,
            "note": "not there · we looked in 6 places",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 135,
            "note": "found it — thegoldenbalance.com/store · that page links back to their TikTok",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 50,
            "note": "something at patreon.com/thegoldenbalance — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 5,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-golden-balance/id1809558008?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 45,
            "note": "found it — thegoldenbalance.com · that page links back to their TikTok",
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
            "quote": "Yo where did you buy your shirt from. Love the neck writing",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Mohamed Salah next!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Freaking Paul Pogba, let's GOOOOOOO. More football players please.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "youtube_channel"
          },
          {
            "kind": "comment",
            "quote": "Yesterday i made sujuk shawarma from your video and i have leftover beef perfect for this. You are becoming very useful!",
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
            "title": "Bacon Jam Patty Melt",
            "url": "https://www.youtube.com/watch?v=_r7CFLw37ME",
            "at": "2026-08-14T13:00:21Z",
            "thumbnail": "https://i.ytimg.com/vi/_r7CFLw37ME/hqdefault.jpg",
            "excerpt": null,
            "metric": 37,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:54.755Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Golden Balance",
            "kind": "episode",
            "title": "Trailer episode",
            "url": "https://podcasters.spotify.com/pod/show/fidan-asgarova/episodes/Trailer-episode-e31o5tf",
            "at": "2025-04-19T17:57:51.000Z",
            "thumbnail": null,
            "excerpt": "Salam Aleykum and welcome to The Golden Balance.\n My name is Fidan and I'm just a sister from Azerbaijan and this is a space l've been dreaming about for a long time.\n This podcast will be a gentle, honest, and faith-centered space - where we talk about life, deen, growth, and all the little moments",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:05:04.881Z",
            "status": null
          },
          {
            "platform": "Bluesky",
            "publication": null,
            "kind": "post",
            "title": "Let’s Make Red Curry Ramen 😮‍💨",
            "url": "https://bsky.app/profile/thegoldenbalance.bsky.social/post/3lgdcggjpw42i",
            "at": "2025-01-22T11:50:15.217Z",
            "thumbnail": null,
            "excerpt": "Let’s Make Red Curry Ramen 😮‍💨",
            "metric": 7,
            "metricUnit": "likes",
            "metricWhy": null,
            "foundIn": "the Bluesky AppView",
            "seenAt": "2026-08-14T13:04:54.755Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Brazilian Cherry Lemonade",
            "url": "https://www.youtube.com/watch?v=BvApDtRbuHk",
            "at": "2026-08-12T13:00:37Z",
            "thumbnail": "https://i.ytimg.com/vi/BvApDtRbuHk/hqdefault.jpg",
            "excerpt": null,
            "metric": 251017,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:54.755Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 1,
          "why": "1 piece of their own work"
        },
        "headline": "He cooks food and travels for 8,500,000 followers on TikTok and 3,530,000 on YouTube, already sells through a store, membership, podcast and his own site, and has no newsletter, so there is no way to reach those viewers directly while recent videos pull 45% fewer views.",
        "headlineRestsOn": "8,500,000 on TikTok · 3,530,000 on YouTube · YouTube channel · Store · Membership · Podcast · Own website · Newsletter · the recent ones are getting 45% fewer views · \"Brazilian Cherry Lemonade\" (50,964 views) · \"I Tried Jamaica's Craziest Foods (Chicken Feet, Ackee, Oxtail)\" (37,793 views) · \"I Returned to Syria After 15 Years\" (385,096 views) · \"20 Minute Breakfast Idea\" (369,125 views)",
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
        "sourceWhy": "a model proposed this handle from a brief — Palestinian-American home cook whose videos each center on one dish cooked through in a recognizable format.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__brianlagerstrom",
        "name": "brianlagerstrom",
        "handle": "@brianlagerstrom",
        "initials": "BR",
        "avatar": "https://yt3.googleusercontent.com/Yc9iM-g4OdaoXNsUxVXKM1B3EEm4V7NJ1MFFPLCbyyyKLua6l2z9yCQsimgJPcMxiogye1PMng=s900-c0x00ffffff-no-rj",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@brianlagerstrom",
            "followers": null,
            "url": "https://www.tiktok.com/@brianlagerstrom",
            "avatar": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/7336700812221448198~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=74d63387&x-expires=1786885200&x-signature=81W7pxqq8OW4nGlJj0f3hqQiq4A%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false
          },
          {
            "name": "YouTube channel",
            "handle": "@brianlagerstrom",
            "followers": 1800000,
            "url": "https://www.youtube.com/@brianlagerstrom",
            "avatar": "https://yt3.googleusercontent.com/Yc9iM-g4OdaoXNsUxVXKM1B3EEm4V7NJ1MFFPLCbyyyKLua6l2z9yCQsimgJPcMxiogye1PMng=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@brianlagerstrom",
            "host": "tiktok.com",
            "followers": null
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@brianlagerstrom",
            "host": "youtube.com",
            "followers": 1800000
          },
          {
            "name": "Website",
            "url": "https://brianlagerstrom.com/",
            "host": "brianlagerstrom.com",
            "followers": null
          }
        ],
        "audience": {
          "total": 1800000
        },
        "score": 6,
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
                "value": "No membership, no podcast",
                "weightPct": 84,
                "detail": "4 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
              },
              {
                "key": "demand",
                "label": "Unmet demand",
                "engine": "llm+rule",
                "value": "13 purchase-intent comments",
                "weightPct": 16,
                "detail": "13 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
                "detail": "3 videos a month now, against 2.6 before that — up 15%, they are posting more; the recent ones are getting 53% fewer views — 0 of the 40 Pressure points. Ceiling on this look is 34."
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
                "detail": "He's a professional chef who publishes a weekly video cooking a dish start to finish in his kitchen in a consistent recipe-walkthrough format, which is exactly what the brief asks for."
              }
            ]
          }
        },
        "inventory": [
          {
            "item": "YouTube channel",
            "state": "present",
            "surfacesChecked": 180,
            "note": "found it — youtube.com/@brianlagerstrom",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 305,
            "note": "something at substack.com/@brianlagerstrom — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 288,
            "note": "something at shop.brianlagerstrom.com — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "verified_absent",
            "surfacesChecked": 270,
            "note": "not there · we looked in 3 places",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "verified_absent",
            "surfacesChecked": 141,
            "note": "not there · we looked in 2 places",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 88,
            "note": "found it — brianlagerstrom.com",
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
            "quote": "BRIAN! Will you be producing more of your garlic presses?? Stock is no longer available",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "When will there be more garlic press' available?",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Your sponsor speech was hilarious and I will immediately buy the garlic press now.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I ordered your garlic press. I don't particularly need a garlic press as I don't mind a little knife work but I really think people should support you.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I've been WAITING for this garlic press! I'm currently unemployed, but as soon as I get a job I'm going to use some of my first paycheck to buy this puppy and get to cookin'!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I ordered the garlic press and it arrived a couple days ago. Very high quality and works beautifully! I've spent way more than $49 on multiple garlic presses that I will now be getting rid of, worth every penny! Thank you Brian!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Hey Brian! Is there a link to your new garlic press? I really want to try one out!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "My garlic press broke sooo long ago, but I sat quietly in faith that the Lagerstrom Garlic Press would come. ❤",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "That does look like a very nice garlic press. If l needed one I'd definitely consider it.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I ordered the garlic press and it arrived a couple days ago. Very high quality and works beautifully!",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Thank you Brian for the recipe, looks like I will be firing up my Ooni Karu 16 this weekend and smashing out some pizzas. Oh and your garlic press is awesome, like crushing garlic with a hammer, just plows right through.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "Your recipes are consistently my family's favorites and have improved my life. I wish you had more confidence in your fan club, as it seems you are out of garlic presses to buy.",
            "platform": "YouTube",
            "url": null,
            "observedAt": "2026-08-14",
            "engine": "llm",
            "label": "store"
          },
          {
            "kind": "comment",
            "quote": "I ordered your garlic press. I don't particularly need a garlic press as I don't mind a little knife work but I really think people should support you. I've been cooking a lot of your dishes and the time and knowledge you give us in these videos deserves support. I look forward to trying out your pr",
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
            "platform": "Their site",
            "publication": "Brian Lagerstrom",
            "kind": "writing",
            "title": "Neapolitan Pizza For a Home Pizza Oven",
            "url": "https://brianlagerstrom.com/recipes/neapolitan-pizza-for-a-home-pizza-oven/",
            "at": "2026-08-13T20:26:24.000Z",
            "thumbnail": null,
            "excerpt": "This Neapolitan-style pizza has a tall, blistered cornicione with a soft, bready chew, bright tomato sauce, and creamy pockets of juicy buffalo mozzarella. It pays homage to the pizzas of Naples while still being practical to make at home.\n Table of Contents\n Why This Neapolitan-Style Pizza Delivers",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:04:39.889Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "How To Make Your Best Homemade Pizza Yet",
            "url": "https://www.youtube.com/watch?v=7CM2VU0e1ks",
            "at": "2026-08-02T15:00:31Z",
            "thumbnail": "https://i.ytimg.com/vi/7CM2VU0e1ks/hqdefault.jpg",
            "excerpt": null,
            "metric": 133892,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:30.459Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "Luxury Dinner. Weeknight Effort.",
            "url": "https://www.youtube.com/watch?v=bXMshtOVeok",
            "at": "2026-07-26T15:00:39Z",
            "thumbnail": "https://i.ytimg.com/vi/bXMshtOVeok/hqdefault.jpg",
            "excerpt": null,
            "metric": 81890,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:30.459Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Brian Lagerstrom",
            "kind": "writing",
            "title": "Mussels in White Wine Sauce",
            "url": "https://brianlagerstrom.com/recipes/white-wine-mussels/",
            "at": "2026-07-26T10:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Plump, briny mussels steamed open in a buttery white wine broth, then served with crusty bread for dipping. This is by far the easiest and cheapest way to have a &ldquo;luxury&rdquo; seafood experience at home.\n Table of Contents\n Why This White Wine Mussels Recipe Delivers \n Brian&rsquo;s Pro Tips ",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:04:39.889Z",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Former professional baker/chef who films one restaurant-style dish per video in a consistent home-kitchen format.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__sipandfeast",
        "name": "sipandfeast",
        "handle": "@sipandfeast",
        "initials": "SI",
        "avatar": "https://yt3.googleusercontent.com/dGzB5WKzXi5GQuLtrL6YNLtuB7zZ_GrJo_4Ns8N-T8G4BgKWHftCPFfXOOOjp55IFD3_Ejsa=s900-c0x00ffffff-no-rj",
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": "TikTok profile",
        "platforms": [
          {
            "name": "TikTok profile",
            "handle": "@sipandfeast",
            "followers": 22200,
            "url": "https://www.tiktok.com/@sipandfeast",
            "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/9819786409189161018eeb7328484e45~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=769d2171&x-expires=1786885200&x-signature=cTDEvipwYpR7MzuIm1Z6%2BhEpXtA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
            "avatarExpires": "2026-08-16T13:00:00.000Z",
            "avatarStale": false,
            "separate": true,
            "why": "nothing on either page links the TikTok to the YouTube, so it is not added in"
          },
          {
            "name": "YouTube channel",
            "handle": "@sipandfeast",
            "followers": 1180000,
            "url": "https://www.youtube.com/@sipandfeast",
            "avatar": "https://yt3.googleusercontent.com/dGzB5WKzXi5GQuLtrL6YNLtuB7zZ_GrJo_4Ns8N-T8G4BgKWHftCPFfXOOOjp55IFD3_Ejsa=s900-c0x00ffffff-no-rj",
            "avatarExpires": null,
            "avatarStale": false,
            "matchConfidence": 1
          }
        ],
        "places": [
          {
            "name": "TikTok profile",
            "url": "https://www.tiktok.com/@sipandfeast",
            "host": "tiktok.com",
            "followers": 22200
          },
          {
            "name": "YouTube channel",
            "url": "https://www.youtube.com/@sipandfeast",
            "host": "youtube.com",
            "followers": 1180000
          },
          {
            "name": "Newsletter",
            "url": "https://www.sipandfeast.com/",
            "host": "sipandfeast.com",
            "followers": null
          },
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/jim-cornette-experience/id1133194268?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "Omny",
            "url": "https://omny.fm/shows/jim-cornette-experience/episode-646-remembering-dory-funk-jr",
            "host": "omny.fm",
            "followers": null
          }
        ],
        "audience": {
          "total": 1180000
        },
        "score": 6,
        "scoreDelta": null,
        "confidence": 0.833,
        "pillars": {
          "gap": {
            "score": 0,
            "max": 60,
            "engine": "rule+llm",
            "coverage": 0.833,
            "subsignals": [
              {
                "key": "owned",
                "label": "Owned-channel absence",
                "engine": "rule",
                "value": "Nothing verified absent",
                "weightPct": 0,
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
                "value": "−50% vs baseline",
                "weightPct": 100,
                "detail": "2.3 videos a month now, against 4.7 before that — down 50%; the recent ones are getting 16% fewer views — 5.5 of the 40 Pressure points. Ceiling on this look is 34."
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
            "surfacesChecked": 13,
            "note": "found it — youtube.com/@sipandfeast",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "present",
            "surfacesChecked": 76,
            "note": "found it — sipandfeast.com",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "present",
            "surfacesChecked": 48,
            "note": "found it — sipandfeast.com/cookbook",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "present",
            "surfacesChecked": 24,
            "note": "something at patreon.com/sipandfeast — not confirmed as theirs",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 3,
            "note": "found it — https://podcasts.apple.com/us/podcast/jim-cornette-experience/id1133194268?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — sipandfeast.com",
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
            "publication": "Jim Cornette Experience",
            "kind": "episode",
            "title": "Episode 646: Remembering Dory Funk Jr.",
            "url": "https://omny.fm/shows/jim-cornette-experience/episode-646-remembering-dory-funk-jr",
            "at": "2026-08-12T14:51:31.000Z",
            "thumbnail": null,
            "excerpt": "This week on the Experience, Jim looks back on the life & career of Dory Funk Junior! Plus Jim reviews AEW Dynamite: Grand Slam Mexico, and Dark Side Of The Ring's Renegade episode! Also, Jim talks about recent wrestler injuries, Dave Meltzer's SummerSlam star ratings, The Undertaker's hatred of pod",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:04:41.973Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Sip and Feast",
            "kind": "writing",
            "title": "Easy Chorizo Pasta",
            "url": "https://www.sipandfeast.com/chorizo-pasta/",
            "at": "2026-08-10T18:28:04.000Z",
            "thumbnail": null,
            "excerpt": "A little heat and tons of flavor come together effortlessly in my easy Chorizo Pasta. The perfect dish when you’re…\n The post Easy Chorizo Pasta appeared first on Sip and Feast .",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:04:41.974Z",
            "status": null
          },
          {
            "platform": "YouTube",
            "publication": null,
            "kind": "video",
            "title": "The Pasta Salads I Make Every Summer",
            "url": "https://www.youtube.com/watch?v=cw9y0eVeXZk",
            "at": "2026-07-02T14:31:29Z",
            "thumbnail": "https://i.ytimg.com/vi/cw9y0eVeXZk/hqdefault.jpg",
            "excerpt": null,
            "metric": 70998,
            "metricUnit": "views",
            "metricWhy": null,
            "foundIn": "the YouTube Data API",
            "seenAt": "2026-08-14T13:04:30.859Z",
            "status": null
          },
          {
            "platform": "Their site",
            "publication": "Sip and Feast",
            "kind": "writing",
            "title": "Creamy Pork Tenderloin with Tangy Mushroom Sauce",
            "url": "https://www.sipandfeast.com/creamy-pork-tenderloin-mushrooms/",
            "at": "2026-08-07T19:20:49.000Z",
            "thumbnail": null,
            "excerpt": "My Creamy Pork Tenderloin combines sliced medallions of pork that are seared and finished in a creamy brandy mushroom sauce…\n The post Creamy Pork Tenderloin with Tangy Mushroom Sauce appeared first on Sip and Feast .",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their site",
            "seenAt": "2026-08-14T13:04:41.974Z",
            "status": null
          }
        ],
        "samplesSearched": {
          "count": 9,
          "why": "9 pieces of their own work"
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
        "sourceWhy": "a model proposed this handle from a brief — Italian-American home cook filming one family recipe per episode; frequently cited in food press.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      },
      {
        "id": "c_home_cooking_recipe_creators__adamragusea",
        "name": "adamragusea",
        "handle": "@adamragusea",
        "initials": "AD",
        "avatar": null,
        "mandateId": "m_home_cooking_recipe_creators",
        "primaryPlatform": null,
        "platforms": [],
        "places": [
          {
            "name": "Podcast",
            "url": "https://podcasts.apple.com/us/podcast/the-adam-ragusea-podcast/id1611666380?uo=4",
            "host": "podcasts.apple.com",
            "followers": null
          },
          {
            "name": "YouTube",
            "url": "https://youtu.be/zam0Hc7QLpw",
            "host": "youtu.be",
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
            "surfacesChecked": 144,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "youtube_channel"
          },
          {
            "item": "Newsletter",
            "state": "not_found",
            "surfacesChecked": 205,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "newsletter"
          },
          {
            "item": "Store",
            "state": "not_found",
            "surfacesChecked": 138,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "store"
          },
          {
            "item": "Membership",
            "state": "not_found",
            "surfacesChecked": 101,
            "note": "we couldn't read any of their own pages, so we don't get to say it isn't there",
            "observedAt": "2026-08-14",
            "source": "membership"
          },
          {
            "item": "Podcast",
            "state": "present",
            "surfacesChecked": 13,
            "note": "found it — https://podcasts.apple.com/us/podcast/the-adam-ragusea-podcast/id1611666380?uo=4",
            "observedAt": "2026-08-14",
            "source": "podcast"
          },
          {
            "item": "Website",
            "state": "not_found",
            "surfacesChecked": 38,
            "note": "3 of 4 places wouldn't answer; only 1 of the 2 places we need actually answered; we couldn't read any of their own pages, so we don't get to say it isn't there",
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
            "publication": "The Adam Ragusea Podcast",
            "kind": "episode",
            "title": "What antidepressants do to appetite and digestion, with Dr. Tony Ragusea (E84)",
            "url": "https://youtu.be/zam0Hc7QLpw",
            "at": "2023-11-27T05:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Thanks to Indeed for sponsoring! Right now get a $75 sponsored job credit: https://indeed.com/ragusea \n Thanks to Dr. Tony Ragusea! https://ragusea.com/",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:04:41.733Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Adam Ragusea Podcast",
            "kind": "episode",
            "title": "On 'Dad bod' (E83)",
            "url": "https://youtu.be/Ptn74eY0_y4",
            "at": "2023-11-13T05:00:00.000Z",
            "thumbnail": null,
            "excerpt": "Thanks to Indeed for sponsoring! Right now get a $75 sponsored job credit: https://indeed.com/ragusea",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:04:41.733Z",
            "status": null
          },
          {
            "platform": "Podcast",
            "publication": "The Adam Ragusea Podcast",
            "kind": "episode",
            "title": "On knives and Gaza (LIVE PODCAST E82)",
            "url": null,
            "at": "2023-11-09T00:42:00.000Z",
            "thumbnail": null,
            "excerpt": "Thanks to Trade Coffee for sponsoring! Get a free bag with any subscription purchase: http://drinktrade.com/adamshow",
            "metric": null,
            "metricUnit": null,
            "metricWhy": "a feed carries no read or listen count",
            "foundIn": "their podcast",
            "seenAt": "2026-08-14T13:04:41.733Z",
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
        "source": "proposed",
        "sourceWhy": "a model proposed this handle from a brief — Journalist-turned-cooking creator whose videos walk through a single dish plus the reasoning behind it.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
      }
    ],
    "drops": {
      "2026-08-14": {
        "m_home_cooking_recipe_creators": [
          "c_home_cooking_recipe_creators__chefjeanpierre",
          "c_home_cooking_recipe_creators__cookingwithlynja",
          "c_home_cooking_recipe_creators__halfbakedharvest",
          "c_home_cooking_recipe_creators__doobydobap",
          "c_home_cooking_recipe_creators__joshuaweissman",
          "c_home_cooking_recipe_creators__ethanchlebowski",
          "c_home_cooking_recipe_creators__thegoldenbalance",
          "c_home_cooking_recipe_creators__brianlagerstrom",
          "c_home_cooking_recipe_creators__sipandfeast",
          "c_home_cooking_recipe_creators__adamragusea"
        ]
      }
    },
    "timeline": [],
    "runANameResult": {
      "id": "c_home_cooking_recipe_creators__chefjeanpierre",
      "name": "chefjeanpierre",
      "handle": "@chefjeanpierre",
      "initials": "CH",
      "avatar": "https://yt3.googleusercontent.com/r8w7YwJiYUG9wUIN8yIbrft8suo-tIfgL7C2_orRkpv7rINERB7-elYgqA1KZyAJ8GeHv1tGwss=s900-c0x00ffffff-no-rj",
      "mandateId": "m_home_cooking_recipe_creators",
      "primaryPlatform": "TikTok profile",
      "platforms": [
        {
          "name": "TikTok profile",
          "handle": "@chefjeanpierre",
          "followers": null,
          "url": "https://www.tiktok.com/@chefjeanpierre",
          "avatar": "https://p16-common-sign.tiktokcdn-us.com/tos-useast2a-avt-0068-euttp/ba924484206f261530653d5ad01226e6~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=e9df8512&x-expires=1786885200&x-signature=IotlwzroCcmgeyDE5DEzh%2F237Jk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast5",
          "avatarExpires": "2026-08-16T13:00:00.000Z",
          "avatarStale": false
        },
        {
          "name": "YouTube channel",
          "handle": "@chefjeanpierre",
          "followers": 2470000,
          "url": "https://www.youtube.com/@chefjeanpierre",
          "avatar": "https://yt3.googleusercontent.com/r8w7YwJiYUG9wUIN8yIbrft8suo-tIfgL7C2_orRkpv7rINERB7-elYgqA1KZyAJ8GeHv1tGwss=s900-c0x00ffffff-no-rj",
          "avatarExpires": null,
          "avatarStale": false,
          "matchConfidence": 1
        }
      ],
      "places": [
        {
          "name": "TikTok profile",
          "url": "https://www.tiktok.com/@chefjeanpierre",
          "host": "tiktok.com",
          "followers": null
        },
        {
          "name": "YouTube channel",
          "url": "https://www.youtube.com/@chefjeanpierre",
          "host": "youtube.com",
          "followers": 2470000
        },
        {
          "name": "Website",
          "url": "https://chefjeanpierre.com/",
          "host": "chefjeanpierre.com",
          "followers": null
        }
      ],
      "audience": {
        "total": 2470000
      },
      "score": 29,
      "scoreDelta": null,
      "confidence": 1,
      "pillars": {
        "gap": {
          "score": 29,
          "max": 60,
          "engine": "rule+llm",
          "coverage": 1,
          "subsignals": [
            {
              "key": "owned",
              "label": "Owned-channel absence",
              "engine": "rule",
              "value": "No store, no newsletter, no membership",
              "weightPct": 92,
              "detail": "6 of 6 checks we can settle either way came back settled. we couldn't tell what they've switched on."
            },
            {
              "key": "demand",
              "label": "Unmet demand",
              "engine": "llm+rule",
              "value": "32 purchase-intent comments",
              "weightPct": 8,
              "detail": "32 lines classified as intent to buy or subscribe, in text the engine fetched first."
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
              "detail": "Chef Jean-Pierre is a career chef whose YouTube channel is built on single-dish, start-to-finish cooking demos in a consistent format for a US audience, which is exactly what the brief asks for."
            }
          ]
        }
      },
      "inventory": [
        {
          "item": "YouTube channel",
          "state": "present",
          "surfacesChecked": 118,
          "note": "found it — youtube.com/@chefjeanpierre",
          "observedAt": "2026-08-14",
          "source": "youtube_channel"
        },
        {
          "item": "Newsletter",
          "state": "verified_absent",
          "surfacesChecked": 619,
          "note": "not there · we looked in 6 places",
          "observedAt": "2026-08-14",
          "source": "newsletter"
        },
        {
          "item": "Store",
          "state": "verified_absent",
          "surfacesChecked": 418,
          "note": "not there · we looked in 4 places · 2 wouldn't answer",
          "observedAt": "2026-08-14",
          "source": "store"
        },
        {
          "item": "Membership",
          "state": "verified_absent",
          "surfacesChecked": 314,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-14",
          "source": "membership"
        },
        {
          "item": "Podcast",
          "state": "verified_absent",
          "surfacesChecked": 178,
          "note": "not there · we looked in 3 places",
          "observedAt": "2026-08-14",
          "source": "podcast"
        },
        {
          "item": "Website",
          "state": "present",
          "surfacesChecked": 165,
          "note": "found it — chefjeanpierre.com",
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
          "quote": "I will definitely be making this recipe for my family. Thank you Chef. ♥️🙏",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Oh I am making this tonight!!!! So happy Chef and Jack are back!!!! Thank you 🙏",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "This will be for dinner, this Saturday!! (So happy you returned!🙂)",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Yum, I might make this tonight!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Seeing you enjoying the chop sent me to the store I need that smile on my face as well",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I know what I'm having tonight!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I was going to buy pork chops last night when I was at the grocery store. I will tonight.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "Was about to go to the grocery store for, you guessed it pork chops, this stopped me in my tracks😊",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I had pork loin in my fridge to cook tomorrow. Perfect timing on the recipe. Thanks Chef!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Made stuffed zucchini yesterday & took your advice - made extra sauce. It will work well as a base for this shepherds pie. Just need mashed potatoes. Alright!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "The timing!!! I was planning on making some version of a Sheppard's Pie tonight for dinner as I need to use up the potatoes and ground beef I have before they go bad. This is so much better than the recipe I found online. My pregnant wife is going to be so happy. Thanks Chef.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "can't wait to make! Thanks for coming back to cook for us. We missed you! Now my mouth is watering!😋",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I just got back from the store where I bought a package of pork loin chops for $5. I was planning to make pork in a coconut curry sauce, but now it is going to Pork Scallopini Milanese.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I just got back from the store where I bought a package of pork loin chops for $5.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "store"
        },
        {
          "kind": "comment",
          "quote": "I love scallopini and make it often and I just got two new tips to make it even better! thanks Chef!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Dinner tonight",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "J'essaierai ce week-end. Ravi de vous revoir.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Will definitely try this! you AI the cover image? YOU DON'T NEED TO!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I will tonight.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I'm gonna do it because I can! And because it tastes amazing!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Wow, Chef, that's one I have to make. Your Mom was a genius to figure out that ratatouille in a shepherd's {cottage) pie. Like you, my recipe is from my Mother -- but the filling is quite different. I love my family's version but I'm going to do this one because it just sounds so delicious!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Will definitely be trying this recipe though!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I love chicken Milanese, but now I'm going to make the pork Milenese because it looks so good, Chef. 🙂👍🏻",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I made Chef's cottage pie and it was insane. Will try this as well. Looks fantastic. Thank you Chef!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Another awesome dish! I cant wait to make it!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "im s0o happy ur back. im sure chef knows but make sure you tell him he makes so many lives brighter. havent had a pork chop in a long time. i usually do pork chops with cream of mushroom for a sauce.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Will definitely try this!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Oh I am making this tonight!!!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "This will be for dinner, this Saturday!!",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "Can't wait to make this dish. Thank you.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I'm going to make this.",
          "platform": "YouTube",
          "url": null,
          "observedAt": "2026-08-14",
          "engine": "llm",
          "label": "unspecified"
        },
        {
          "kind": "comment",
          "quote": "I might make this tonight!",
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
          "platform": "Their site",
          "publication": "Chef Jean-Pierre",
          "kind": "writing",
          "title": "6 Easy Homemade Salad Dressings You’ll Want to Drink",
          "url": "https://chefjeanpierre.com/salad-recipes/6-easy-homemade-salad-dressings/",
          "at": "2026-08-13T14:00:41.000Z",
          "thumbnail": null,
          "excerpt": "Master the Art of Homade Salad Dressings: The Complete Guide to Homemade Ranch, Vinaigrette, Honey Mustard, Blue Cheese & More Today, my friends, we are making six delicious homemade salad dressings: Ranch, Classic Vinaigrette, Honey Mustard, Peanut-Ginger, Blue Cheese, and Cilantro-Lime. And rememb",
          "metric": null,
          "metricUnit": null,
          "metricWhy": "a feed carries no read or listen count",
          "foundIn": "their site",
          "seenAt": "2026-08-14T13:04:52.624Z",
          "status": null
        },
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "6 Salad Dressings So Good, You Could Drink Them!",
          "url": "https://www.youtube.com/watch?v=MY3iIGBu5NY",
          "at": "2026-08-13T14:00:06Z",
          "thumbnail": "https://i.ytimg.com/vi/MY3iIGBu5NY/hqdefault.jpg",
          "excerpt": null,
          "metric": 63748,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T13:04:42.238Z",
          "status": null
        },
        {
          "platform": "Their site",
          "publication": "Chef Jean-Pierre",
          "kind": "writing",
          "title": "Pork Milanese: Juicy, Crispy Pork Scallopini",
          "url": "https://chefjeanpierre.com/recipes/pork-milanese-scallopini/",
          "at": "2026-08-06T14:00:06.000Z",
          "thumbnail": null,
          "excerpt": "The Secret to Tender, Juicy Pork Chops with a Golden Parmesan-Panko Crust Hello friends, today we are making a delicious Pork scallopini Milanese looks expensive, tastes expensive, and—this is the beautiful part—is not expensive. In the video, I used six boneless pork loin chops that cost a little o",
          "metric": null,
          "metricUnit": null,
          "metricWhy": "a feed carries no read or listen count",
          "foundIn": "their site",
          "seenAt": "2026-08-14T13:04:52.624Z",
          "status": null
        },
        {
          "platform": "YouTube",
          "publication": null,
          "kind": "video",
          "title": "The Secret to Juicy Pork Milanese Every Time",
          "url": "https://www.youtube.com/watch?v=lGiF15-KWbo",
          "at": "2026-08-06T14:00:02Z",
          "thumbnail": "https://i.ytimg.com/vi/lGiF15-KWbo/hqdefault.jpg",
          "excerpt": null,
          "metric": 88445,
          "metricUnit": "views",
          "metricWhy": null,
          "foundIn": "the YouTube Data API",
          "seenAt": "2026-08-14T13:04:42.238Z",
          "status": null
        }
      ],
      "samplesSearched": {
        "count": 3,
        "why": "3 pieces of their own work"
      },
      "headline": "Chef Jean-Pierre teaches home cooks classic recipes for 2,470,000 YouTube subscribers, with videos in the 84,451 to 329,532 view range and a website, but no newsletter, store, or membership to sell them anything.",
      "headlineRestsOn": "audience: 2,470,000 on YouTube · YouTube channel · Own website · they do not have: Newsletter, Store, Membership · \"The Secret to Juicy Pork Milanese Every Time\" (84,451 views) · \"Retirement Was Great... But I Missed You \\u2764\\ufe0f\" (329,532 views) · \"French Cooking Without the Fancy Price!\" (174,542 views)",
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
      "sourceWhy": "a model proposed this handle from a brief — Veteran French chef teaching one classic dish per video in a fixed, repeatable studio-kitchen setup.. Nothing has checked that it is the person it meant; what follows checks their inventory, not their identity."
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
