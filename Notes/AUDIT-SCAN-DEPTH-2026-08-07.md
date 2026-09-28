# Warhol — fresh run, and what the scan can and cannot see

**7 August 2026.** Part A is the re-run and the re-export, done and verified in a browser.
Part B is measured against `engine/data/observations.jsonl` (30,362 rows) and
`engine/data/costs.jsonl` (19,525 rows), plus twelve live probe experiments run today
against real hosts. Nothing below is inferred from the PRD; every number has a file
behind it.

---

## A. The run

Five briefs, the full ladder, `11:43:07 → 11:50:00 UTC`.

| | |
|---|---|
| Creators through the ladder | 58 distinct, 116 (creator × brief) records |
| Fetches | 3,619 HTTP · 712 YouTube API · 365 model calls |
| Wall clock | 6m 53s for the whole pass · **3m 15s** for the 58-creator house brief |
| Cost | **$1.3557** — $0.6848 of it the house brief |
| All-time bill | $4.7645 across 83 creators |

Installed at `prototypes/v5.4/warhol-seed.js`. The previous seed, the observation log and
the cost log are backed up under `Warhol/_backup-2026-08-07/`.

**Why the re-run was not optional.** The TikTok avatar URLs in the old seed are signed and
carried `x-expires` of **8 Aug**. The board would have rendered as initials from Saturday.
The new ones expire **9 Aug 11:00 UTC** — so this seed also has a two-day shelf life, and
if the demo slips past Saturday it needs running again. That is a property of the source,
not a bug.

**What changed on the board.** The house drop was re-judged for Fit against the house
brief's own words, which is the engine-side fix the v5.4 notes said was still outstanding
(B2). Two names the old seed excluded on another brief's Fit verdict are now in it.

| | Was (6 Aug) | Now (7 Aug) |
|---|---|---|
| 1 | @itshunterfriesen 39 | **@pantheorganizer 39** |
| 2 | @pantheorganizer 38 | **@brettkollmann 36** |
| 3 | @missunderstoodpod 34 | @itshunterfriesen 32 |
| 4 | @brettkollmann 33 | @thedraftnetwork 31 |
| 5 | @thedraftnetwork 31 | **@ratchetsandwrenches 28** |

`@pantheorganizer` is now the top scorer outright, which is the creator the pre-demo review
recommended building beat 1 on. `@brettkollmann` moved from 33 to 36 and reads *"Posting
77% less than they used to"* — the strongest Pressure line on the board.

**Also updated, because the seed moved and these are hand-maintained copies of it:**
the run banner (`Last run 11:50, 7 Aug 26`), the admin ledger ($4.76 / 83 creators /
16,912 free fetches / 1,244 model calls) and `PER_CREATOR`. Verified in the DOM: zero
console errors, all six views render, Run-a-name returns `@brettkollmann` for
`@brettkollmann` and the honest miss for `https://x.com/mkbhd`.

**The re-merge command, in full.** The brief tabs read display names only because
`merge-seeds.js` is told them; `export-seed.js` sends the slug to the screen by design, so
a re-merge without these flags silently regresses the tab row to
`car-detailing-diy-repair-2`. The house brief takes no title — it renders *Anyone worth a
call* from `weights.json` through the app.

```bash
node bin/merge-seeds.js OUT.js \
  seed.worth-call-they-make-2.js \
  seed.car-detailing-diy-repair-2.js \
  seed.nfl-give-own-analysis-2.js \
  seed.college-football-make-own.js \
  seed.entertainment-pop-culture-commentary.js \
  --title car-detailing-diy-repair-2="Car detailing and DIY repair" \
  --title nfl-give-own-analysis-2="NFL analysis" \
  --title college-football-make-own="College football" \
  --title entertainment-pop-culture-commentary="Entertainment and pop culture"
```

**Two things I did not touch.** `prototypes/v5.3/` — the documented fallback — still holds
yesterday's seed, so its avatars die on the 8th. And `meta.scoreCeiling` is a hand-added
line in a generated file; I re-added it so the ring is identical to what you had, but
`export-seed.js` should emit it or it will go missing on every future export. `ui.js`
defaults to 40 if it does, so nothing breaks — it just stops being measured.

---

## B. Two things to know before you stand in front of the board

### B1. Rank 5 has eighteen followers

`@ratchetsandwrenches`, score 28, reads **"TikTok profile · 18"**. `@forensicdetailingchannel`
at rank 11 reads **169**. Both numbers are real — they are the true follower counts of the
TikTok accounts at those handles. They are not the creators.

The cause is that the candidate id is one string used as the handle on every platform. When
someone's YouTube handle differs from their TikTok handle, Scout reads a stranger's TikTok
and reports its follower count as the audience. I confirmed
`youtube.com/@forensicdetailingchannel` returns **404** — his channel is somewhere else, so
the 169-follower TikTok is the only surface Scout could confirm, and it became the audience.
The seed stamps `matchConfidence: 1` on it.

This is the same failure the engine's wall is built to stop, one layer up: it guards the
inventory against guessed URLs and does not guard identity against a guessed handle. "Big
audience, no business" with an audience of 18 on screen is the question you get asked.

Three ways out, cheapest first:
1. **An audience floor on the drop** — one number in `weights.json`. Fastest, and defensible:
   the thesis says "big audience", so the gate should say so too.
2. **Don't let a single unconfirmed surface be the audience.** `mergeAudience` already
   distinguishes confirmed from read; requiring two linked surfaces before a total is
   published costs a few names and buys the claim.
3. Leave it and have the answer ready.

### B2. Reddit is still dark, and it is one environment variable

`REDDIT_CLIENT_ID` is set. **`REDDIT_CLIENT_SECRET` is not.** Today's run logged **83
`401`s against `reddit.com/access_token`** — the same failure as yesterday's 163. Demand
has two sources; one of them has never returned a byte.

The consequence is on the front door: **6 of the 10 cards in today's drop say "No purchase
intent we could read."** Demand is 25 of the 100 theoretical points and the pillar the pitch
rests on.

---

## C. How deep the scan actually goes

**47% of inventory checks resolved to something falsifiable today** — 595 of 1,276 landed
on `present` or `verified_absent`; 681 landed on `not_found`.

That headline is misleading in a way that matters, because the two halves behave completely
differently:

| Item | Resolved today |
|---|---|
| podcast | 108/116 — **93%** |
| youtube_channel | 101/116 — 87% |
| membership | 99/116 — 85% |
| store | 97/116 — 84% |
| website | 95/116 — 82% |
| newsletter | 91/116 — 78% |
| **the six that carry the score** | **591/696 — 85%** |
| representation | 2/116 |
| affiliate_links | 2/116 |
| platform_subscriptions | 0/116 |
| shopping_tags | 0/116 |
| sponsorships | 0/116 |
| **the five that cannot be read** | **4/580 — 0.7%** |

The engine is not shallow. It is **85% conclusive on the six items that produce the score**,
and it is carrying five items that resolve 0.7% of the time and pull the average to 47%.
`platform_subscriptions` and `shopping_tags` have **no places at all** in
`config/probes.json` — they exist to say "we cannot see this", 232 times a run.

Where the other 681 went:

| | |
|---|---|
| 232 | partner-API items with no probe behind them |
| 96 | *"their bio does not mention it"* — representation, read from a bio |
| 96 | *"none among the 0 links they publish"* — affiliate links, no links to read |
| 86 | *"we couldn't read any of their own pages"* — the first-party gate, blocking store and newsletter |
| 72 | *"nothing in the 1 recent captions we could read"* — sponsorships, sample too small |

**The one worth fixing is the 86.** That is the rule in `resolve.js` that says you do not
get to claim an absence without having read one of the creator's own pages. It is the right
rule. It is also, on 86 occasions today, the only thing standing between a `not_found` and a
`verified_absent` on the two highest-weighted absences in the model (newsletter 10 points,
store 9). Reading their own site better is worth more than any new probe on this list.

### Where the time goes

13,919 fetches all-time: **7,311s in flight, 3,799s waiting on per-host politeness — 34%**.

| Host | Fetches | Time | Note |
|---|---|---|---|
| www.youtube.com | 2,215 | **3,649s** | **50% of all in-flight time.** Pages are ~2.6 MB |
| www.patreon.com | 656 | 379s | |
| beacons.ai | 649 | 264s | |
| **www.instagram.com** | **615** | **0s** | robots-denied every single time |
| **linktr.ee** | **558** | **0s** | robots-denied every single time |
| buttondown.com | 464 | 420s | 900ms average — slowest host, and where the timeouts are |

Three findings in that table:

1. **YouTube is half the clock.** Identity and audience already come from the Data API
   (`resolved through the YouTube Data API`), yet the inventory still guesses three HTML
   URLs per creator — `/@handle`, `/c/handle`, `/user/handle` — at 2.6 MB each. One
   `channels.list?forHandle=` call answers the same question authoritatively for one quota
   unit. That is roughly 1,200 fetches and a large share of the runtime.
2. **Instagram and Linktree are 1,173 requests that have never returned data.** Both are
   robots-denied on every creator, so both resolve `inconclusive` every time — and
   inconclusive counts toward the one-third ceiling that blocks `verified_absent`. They are
   not just wasted, they actively suppress conclusions. Either drop them or exclude a
   permanently-denied host from the denominator rather than counting it as a door that
   refused to open.
3. **1,255 fetches all-time died as `TypeError`** — DNS failures on guessed domains. 348
   distinct hosts, and the same dead host is re-attempted up to 19 times in a run. There is
   no negative cache.

### Five handles break the guessing entirely

`rj_young`, `stiffmiesters.picks`, `samhartman_10`, `thoughtswgracie2.0`, `magic.maike` —
6% of the cohort — contain characters that cannot be a DNS label. So
`{handle}.substack.com`, `{handle}.beehiiv.com`, `{handle}.ghost.io`,
`{handle}.myshopify.com`, `{handle}.com` and `{handle}.co` are **guaranteed** to fail for
them, six doors each, all recorded as *"wouldn't answer"*. That pushes them over the
one-third ceiling and blocks `verified_absent` outright — which is exactly why
`stiffmiesters.picks` scores 6 with confidence held back. A URL that cannot be constructed
is not a place that refused to answer; it should be removed from the denominator, not
counted as a failure.

### A silent model failure is still possible

`llm.js` guards the `effort` parameter correctly now (108 calls 400'd on 6 Aug before it was
fixed; none since). But today's run still logged **2 × `400 — The request body is not valid
JSON: no low surrogate in string`** on `classify_demand`. An emoji split across a chunk
boundary in scraped text produces an unpaired surrogate, `JSON.stringify` emits it, the API
rejects the body, and per the config's own note the run completes and scores neutral. One
`.replace(/[\uD800-\uDFFF]/g, '')` before the call closes it.

---

## D. Sources and content types worth adding

Everything here was tested live today against a real handle and a control handle that cannot
exist. A 200 is only a presence signal if the absent case looks different.

### Add these — clean 404 semantics, one JSON entry each, fetching is free

| Place | Item | Evidence |
|---|---|---|
| `{h}.fourthwall.com` | store | 404 for all three tested handles; the dominant creator-merch platform now |
| `{h}.bigcartel.com` | store | 404 |
| `{h}.creator-spring.com` | store | 404 |
| `payhip.com/{h}` | store | 404 |
| `{h}.podia.com` | membership | 404 |
| `{h}.mykajabi.com` | membership | 404 |
| `skool.com/{h}` | membership | 404 — large and growing, currently invisible to Scout |
| `{h}.kit.com` | newsletter | 404 — ConvertKit, the biggest newsletter platform not probed |
| `{h}.carrd.co` | website | 404 |
| `allmylinks.com/{h}` | link hub | 404 for the control, 200 with the creator's name for `mkbhd` |

Also cheap: the `website` item guesses only `.com` and `.co`. `.tv`, `.net`, `.shop`,
`.store`, `.io` cost one line each and every miss raises the confidence denominator.

### Add this one, and it is the most valuable on the page

**`amazon.com/shop/{handle}`.** Clean semantics — 200 with `"X's Amazon Page"` in the title
for a real storefront, 404 for the control. I ran it across all 78 handles in the briefs
log: **9 hits.**

```
detailgroove                Oscar from Detail Groove's Amazon Page
pinehollowautodiagnostics   Pine Hollow Auto Diagnostics's Amazon Page
humblemechanic              The Humble Mechanic's Amazon Page
schrodingersbox             Schrodinger's Toolbox ☑️'s Amazon Page
celebriteablinds            Celebritea Blinds's Amazon Page
dunkin                      Dunkin's Amazon Page
wendys                      Sarah's Amazon Page              ← not Wendy's
tacobell                    Jabe tacobell's Amazon Page      ← not Taco Bell
kurtbenkert                 Sam Benkert's Amazon Page        ← ambiguous
```

**`@pinehollowautodiagnostics` was in today's car-detailing drop.** Scout says he has nothing
to sell. He has an Amazon storefront. That is not a coverage gap, it is a wrong answer on a
name on the board, and `store` is 9 points of Missing.

The three bad rows are the point, not an objection: the handle namespace is shared, so a hit
has to be corroborated against the display name before it counts. The engine already has
that machinery — `minNameOverlap` and the present-but-uncorroborated state. With the
name-overlap gate this is six real stores found and three correctly rejected.

### Add this for Demand — free, no credential, works today

**Apple Podcasts customer reviews.** `itunes.apple.com/us/rss/customerreviews/id={id}/json`,
no auth, up to 50 reviews per show. Scout already stores the podcast id it found, so this is
one extra fetch on creators who already have a podcast.

Measured across the cohort: **25 of 40 podcasts return reviews, 840 reviews of readable
first-party audience text.** Be honest about the yield — my crude intent regex found only 3
creators with explicit purchase intent, one of them exactly on-thesis
(`@brandonfwalker`: *"Love the show! ... Need some merch!!!"*). The engine's classify pass
would do better than a regex, but this is a supplement, not a substitute.

**Reddit is still the fix for Demand.** One environment variable, and it is the difference
between six of ten cards saying "no purchase intent we could read" and six of ten cards
carrying a number.

### Do not add these — measured and rejected

| | Why |
|---|---|
| **Medium** (`medium.com/@{h}`) | 200 with an identical `<title>` and near-identical byte count for a handle that cannot exist. JS-rendered. Unusable as a probe without a body marker. The earlier review recommended it; the measurement says no. |
| **Whop** (`whop.com/{h}`) | 200 for everything. The title differs (`MKBHD \| Whop` vs the generic one), so it is usable *only* with a title marker, never as a status signature. |
| **bio.link** | 403 for everything, real and control. |
| **locals.com** | Every subdomain redirects to the root. Can only ever produce a miss. |
| **X / Twitter** | Still no keyless read path, and `twitter.com` is robots-denied 50 times in the log already. Unchanged from the earlier review: not worth building. |
| **Instagram** | Already probed, already denied 615 times. It is not a missing source, it is a source that says no. |

### The link supply is the quiet one

Two items — `affiliate_links` and Pressure's `abandonment_markers` — both read from "links
they publish", and **96 checks today found 0 or 1 links.** YouTube channel pages carry no
outbound links in static HTML, Instagram is denied, and Linktree is denied, so for a
YouTube-primary creator the link array is usually empty.

I confirmed today that the channel page **does** carry them, as `/redirect?q=` targets:

```
mkbhd            → shop.MKBHD.com, twitter.com/MKBHD, instagram.com/MKBHD, ridge.com/MKBHD
humblemechanic   → amzn.to/… ×6, homedepot.sjv.io/…, kokenusa.com/…, b2b.snapon.com/…
```

`passes.js` already reads video-description links into `mentionLinks` and deliberately keeps
them out of `dossier.links`, for a good reason spelled out in the file: MKBHD's description
links a sponsor's `/shop`, and treating that as *his* store is the `mkbhd.substack.com`
failure wearing a different hat. That reasoning holds for **store** and **abandonment**.

It does not hold for **affiliate links**. `amzn.to` and `sjv.io` in a description are the
affiliate-links item's entire subject matter, and they do not need to be "his own" in the
ownership sense — they need to be links he published, which they are. Letting
`links_affiliate` read `mentionLinks` — and only that item — turns an inventory row that
resolved 2 times in 116 into one that works, without touching the rule that protects the
other two.

---

## E. What I would do, in order

| | | Effort | Why |
|---|---|---|---|
| 1 | Set `REDDIT_CLIENT_SECRET` | minutes | Demand is 25 points and 6 of 10 cards read "none we could read" |
| 2 | Decide the audience floor question (§B1) | 1 line + a call | Rank 5 has 18 followers |
| 3 | `amazon.com/shop/{h}`, gated on name overlap | ~1h | A name in the drop has a store Scout says isn't there |
| 4 | Strip unpaired surrogates before the model call | 10 min | A silent failure scores neutral and looks designed |
| 5 | The ten clean 404 probes above | ~1h | Raises the confidence denominator; fetching is free |
| 6 | Skip guesses for handles that cannot be a DNS label | ~30 min | 6% of the cohort loses six doors each to arithmetic |
| 7 | Apple Podcasts reviews as a Demand source | ~2h | 840 free reviews, no credential, 25 creators |
| 8 | Let `links_affiliate` read `mentionLinks` | ~30 min | Turns a 2-in-116 item into a working one |
| 9 | Replace the three YouTube HTML guesses with one API call | ~2h | Half the runtime |
| 10 | Drop Instagram and Linktree from the denominator | ~1h | 1,173 requests that suppress conclusions |

1–4 are before the demo if there is an evening. 5–10 are after it.

**Not on this list, deliberately:** the five tier-3 inventory items. They are honest about
what they cannot see, and the report already collapses them behind a disclosure. They cost
almost nothing to run. But they are why the scan's conclusive rate reads 47% instead of 85%,
and if anyone quotes a coverage number on stage, 85% across the six items that carry the
score is the true one.
