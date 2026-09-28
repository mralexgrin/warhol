# PRD — Bluesky, and the verdict on four other sources

**Date:** 12 August 2026 · **Status:** Bluesky specified, not built · **Supersedes** §10 of [PRD-WARHOL-SOURCES-AND-REPORT.md](PRD-WARHOL-SOURCES-AND-REPORT.md) on Bluesky only.

Everything below was verified against live endpoints on 12 Aug 2026, keyless, with no spoofed user agent. Where a thing could not be verified from this machine, it says so and does not pretend otherwise.

---

## 1. Bluesky — build it

### 1.1 What was checked

| Call | Result |
|---|---|
| `public.api.bsky.app/robots.txt` | `User-agent: * / Allow: /` — and a comment stating that crawling the public parts of the API is allowed, with 429 as the backoff signal |
| `com.atproto.identity.resolveHandle?handle=` | 200 |
| `app.bsky.actor.getProfile?actor=` | 200 — `followersCount`, `followsCount`, `postsCount`, `description`, `createdAt`, `did` |
| `app.bsky.actor.getProfile` with a handle that does not exist | **400** `{"error":"InvalidRequest","message":"Profile not found"}` |
| `app.bsky.feed.getAuthorFeed?actor=&limit=&filter=posts_no_replies` | 200 — `record.text`, `record.createdAt`, `likeCount`, `repostCount`, `replyCount`, `langs`, plus a `cursor` |
| `app.bsky.feed.getPostThread?uri=&depth=1` | 200 — reply text |
| `app.bsky.feed.searchPosts?q=` | **403** — needs auth |

### 1.2 Why it is the right one

**The absence signature works in both directions.** A real handle returns 200 with a DID; a handle that does not exist returns 400 `Profile not found`. That is the test the TikTok signature never got, and it is why this is a probe rather than another `neverConclusive` entry alongside Instagram.

**It is the only new *enumerable* source available.** Handle in, list of their work out, with a cursor. TikTok and X are resolvable-only and always will be without a partner relationship. This is the split §1 of the sources PRD is built on, and Bluesky lands on the good side of it.

**It reaches four pillars, not one.**

| Pillar | What Bluesky gives | Note |
|---|---|---|
| Identity | Clean present / absent | See 1.1 |
| Audience | `followersCount` | Trajectory is audience-count based (`score.js:248`), so this is the input it actually wants |
| Cadence | Dated posts, paginated | RSS ships 10–15 items and the window needs ~150 days, which is why feed cadence only computes for ~monthly publishers. A cursor removes that ceiling |
| Samples | Text, date, **and engagement** | Richer than TikTok oEmbed, which returns no engagement figures at all |
| Demand | Replies to their own posts | Real, but weaker than Reddit — see 1.4 |

**The custom-domain finding, which is the part worth reading twice.** Bluesky handles can be domains, and this cohort uses that. Verified 12 Aug: `mkbhd.com`, `404media.co` and `pfrazee.com` all resolve as handles, 200. `site.js` already discovers the creator's own domain and already applies the name test that keeps a sponsor's URL out of the report. So the moment the domain is known, it is a free guess — and it is the guess most likely to hit for exactly the creators worth originating.

> **Corrected during the build, 12 Aug 2026.** This section originally said the domain was the *second* guess, tried only after `{handle}.bsky.social`. Building it disproved that, and the correction is §1.5.

### 1.3 The build

Five tickets. It is mostly data.

| # | Ticket | Where |
|---|---|---|
| 1 | `lib/bluesky.js` — `resolveHandle`, `getProfile`, `getAuthorFeed` paged back to the cadence window, `getPostThread` on the top N posts | new file |
| 2 | Identity probe entry with the 200/400 signature; handle guesses in order `{handle}.bsky.social`, then the domain from `site.js` | `config/probes.json` |
| 3 | Adapter emitting the item shape `feeds.cadenceFrom` already consumes | `lib/bluesky.js` |
| 4 | Replies into the same demand path as YouTube comments — the wall in `store.js` and `keepOnlyRealQuotes` unchanged | `lib/passes.js` |
| 5 | Both-direction tests: real handle, dead handle, domain handle, opted-out account | `test.js` |

**Route it through `lib/http.js`, not around it.** `youtube.js` and `reddit.js` bypass the robots layer because they are keyed APIs whose politeness rule is a quota. Bluesky is neither keyed nor quota-metered, and its robots.txt grants access in writing — so it goes through `get()` and inherits the host delay, the body cap and the robots check for free. This is a deliberate difference from the other two API clients.

### 1.4 Four traps, named before they cost a day

1. **400 is the *good* answer and the http layer must not eat it.** Everywhere else in the engine a 400 is an error that resolves inconclusive. Here it is the absence signature. If it folds into the generic error path, Bluesky can never say *not there*.
2. **A bare handle is not a Bluesky handle.** `resolveHandle` wants `alice.bsky.social` or a domain. Guessing bare `{handle}` returns 400 for everyone and would read as universal absence.
3. **`searchPosts` is 403, so there is no stranger conversation.** Bluesky demand is replies to their own posts — closer to a YouTube comment section than to Reddit, and moderated by the person being discussed. Reddit remains the only unmoderated demand source. The report must not imply otherwise.
4. **Accounts can opt out of logged-out viewing** (the `!no-unauthenticated` label). **Not verified** — this is the one claim here that was not tested against a live opted-out account. It must be, and the result must resolve *could not tell*, never *not there*.

### 1.5 What the build changed — three findings, all from live data

**Status: built and passing. 162 engine tests, 0 failing** (was 145 before this work). Verified end to end against `mkbhd.com`, `pfrazee.com`, `404media.co` and a handle belonging to nobody.

**(a) The guess order was backwards, and first-hit-wins would have been a disaster.** Measured on both handles for two creators:

| | `{handle}.bsky.social` | their domain |
|---|---|---|
| mkbhd | 62 followers, 0 posts, no display name | **189,307 followers, 169 posts, "Marques Brownlee"** |
| pfrazee | 247 followers, **"Bot Testing - NOT pfrazee.com"** | **309,551 followers, "Paul Frazee"** |

A notable creator predictably moves to their own domain, which leaves the platform default to whoever asked next. Taking the first handle that resolved would have put a squatter's empty profile on Marques Brownlee's report and left his real account unread — the `mkbhd.substack.com` failure, on a new platform, in the same shape.

So the domain is tried **first** and wins outright, because `site.js` has already applied the test that earns it. `{handle}.bsky.social` is now a guess that must corroborate — it has to link back to a surface already confirmed as theirs, exactly as a guessed Substack must. An uncorroborated hit is written as `not_found` with the reason, which is the honest third state: somebody is there, and it is not them.

**Note for anyone tempted to simplify this later: a display-name match will not do.** "Bot Testing - NOT pfrazee.com" contains "pfrazee", and a containment test calls it his. That case is in `test.js`.

**(b) The page cap had to go up 6× or the feature does not deliver.** At 6 pages × 50, 404 Media's 300 posts reached back **30 days** — cadence came back unreadable for exactly the prolific creators this exists to read. It is now 20 × 100, with a smarter stop: the walk halts as soon as it holds a post older than the baseline window, since the arithmetic clamps its baseline to the oldest post in hand and every page after that cannot change the answer. Live result — 1 page for MKBHD, 17 for pfrazee, 20 for 404 Media, instead of 20 for all three.

**(c) Reposts had to be excluded in three separate places.** A repost carries the *original* post's date and author. It is already kept out of the samples and out of the posting rate; the third was the walk's own reach test, which believed it held a year of history off one repost of a three-year-old thread while the creator's own posts reached back 149 days — one day short of what the arithmetic needs. All three are tested.

**Still open:** the `!no-unauthenticated` case (§1.4, trap 4) remains unverified against a live opted-out account. The code treats it as *could not tell* and loses a sample rather than claiming absence, which is the safe direction, but it has not been proven.

---

## 2. The other four

### 2.0 Twitch — specified, deliberately not coded yet (12 Aug 2026)

**Design is settled. The code is not written, and that is a decision rather than an omission.**

Diagnosed 12 Aug 2026: `api.twitch.tv` and `id.twitch.tv` resolve in DNS and then time out on connect. It is an egress firewall on this machine, not a fact about Twitch — a control request to `public.api.bsky.app` succeeds in the same second. The consequence is that **every response shape, status code and body marker would be a guess.**

This project has already paid for that once. The TikTok signature shipped tested in one direction and marked live accounts absent, and `probes.json` now carries a paragraph about it. Writing a Twitch probe whose absence signature nobody has seen fire would be the same mistake with a fresh coat of paint — and Twitch is a platform where a wrong absence reads as "this streamer does not exist."

**What the build looks like the moment it can be verified:**

| Piece | Shape |
|---|---|
| Auth | `client_credentials` app-only grant at `id.twitch.tv/oauth2/token` — the same grant already working in `reddit.js`, same `available()`/`reason()` fallback |
| Presence | `helix/users?login=` — an empty `data` array is the absence signature. **Must be tested in both directions before it may write `verified_absent`** |
| Supply + cadence | `helix/videos?user_id=` and `helix/clips?broadcaster_id=` — both carry dates and view counts, so they feed the same `yt.cadence` arithmetic and can print a real engagement figure |
| Live state | `helix/streams?user_id=` |

**One likely limitation to confirm first, because it changes the value:** an app access token probably cannot read follower counts — `helix/channels/followers` was moved behind a user token with `moderator:read:followers` in Twitch's 2023 change. If that holds, Twitch contributes presence, supply, cadence and samples but **no audience number**, which means it cannot feed Trajectory the way Bluesky does. Confirm this before estimating the work; it is the difference between a full source and a supply-only one.

**Two things unblock it, neither of which is code:** a Twitch developer app for the client id and secret, and a run from a network that can reach `api.twitch.tv`.

### 2.1 Twitch — integrable, blocked only by a credential and a decision

**Could not be verified from this machine.** `api.twitch.tv`, `id.twitch.tv` and even `api.twitch.tv/robots.txt` all returned `000` — connection failed — as did every `vimeo.com` request. That is this sandbox's egress, not a fact about either platform, and it must not be recorded as one. The PRD's 10 Aug finding (401, needs a free app token) stands unrefuted.

The integration shape is known and cheap: the same `client_credentials` app-only grant already implemented in `reddit.js`, against a documented API with real clip, VOD and follower data. What it needs is a Twitch developer app and a mandate that names streamers (D9). Nothing technical is in the way.

### 2.2 HTML feed autodiscovery — correct, but smaller than I ranked it

Measured against six real creator sites, 12 Aug:

| Site | Platform | Autodiscovery tag | Generic path already works? |
|---|---|---|---|
| 404media.co | Ghost, self-hosted | yes → `/rss/` | **yes** — `/feed` and `/rss` both 200 |
| chefjeanpierre.com | WordPress | yes → `/feed/` | **yes** — `/feed` 200 |
| veritasium.com | Squarespace | no | no feed exists |
| adamragusea.com | Squarespace | no | 401 bot wall |
| mkbhd.com | custom | no | no feed |
| smosh.com | custom + Shopify | no | no feed |

On this sample, autodiscovery found **zero feeds the generic path list did not already find**. It is still the right thing to add — ten lines, and it is the honest way to reach a feed at an unconventional path — but it is a correctness fix, not an unlock. I ranked it second on 12 Aug and that was too high.

### 2.3 Squarespace and Wix feed paths — cut this, I was wrong

The earlier note said we miss Squarespace because we do not try `?format=rss`. Adding it would not have worked.

Verified on veritasium.com (confirmed Squarespace): `/?format=rss` → **400**, `/feed` → 404, `/rss` → 404, `/blog?format=rss` → 404. `?format=rss` is appended to a **collection** URL, and the slug varies by site — `/blog`, `/news`, `/journal`, whatever the owner typed. Squarespace does not advertise it from the homepage. So there is no path to guess; finding it means reading the sitemap, and adamragusea.com — also Squarespace — answered **401 to an identified agent on every path including `/sitemap.xml`**. Under the engine's own rules that is a door that never opened: inconclusive, not absent.

Wix's `/blog-feed.xml` convention could not be tested — there is no Wix site in the cohort to try it against.

**Drop it.** It is not a path-list fix, and the version of it that would work is a sitemap crawl behind a bot wall.

This makes the **CMS fingerprint** more valuable, not less: knowing a site is Squarespace tells you not to spend five requests looking for a feed that is not there.

### 2.4 Spotify — permitted, and still does not belong on the report

Two robots files, two different answers, and neither is the X situation:

- `open.spotify.com/robots.txt` — `User-agent: *` gets `Allow: /` with `Disallow: /local/`, `/download/`, `/embed/`. **`/oembed` is not in that list** (`/embed/` is a different path), and the Googlebot, Bingbot and Claude-SearchBot groups `Allow: /oembed` explicitly. Warhol's token is `WarholScout/0.1`, which matches no named group, so the `*` group applies and the endpoint is permitted. It returns 200. **Do not confuse this with X** — there the disallow named the exact path we wanted.
- For the record, the same file blocks `anthropic-ai`, `ClaudeBot` and `Claude-Web` outright. Warhol is none of those and identifies truthfully. The posture is still worth a human reading before we lean on it.
- `api.spotify.com/robots.txt` — `User-agent: * → Disallow: /`. Under the `youtube.js` precedent a keyed, documented, quota-metered API is governed by its quota rather than robots, but that precedent has to be applied on purpose: `http.js` enforces robots before the request, so a Spotify Web API client would have to sit outside `get()` the way `youtube.js` does.

### 2.5 Vimeo and Spotify — the integration answer

You asked whether these can be *properly integrated into the reports*. Endpoints are not what stops them.

The report is assembled from inventory items. There is no item for "a video platform that is not YouTube" and none for music.

- **Spotify** podcast data lands on the `podcast` item, which the Apple Podcasts API already resolves. It would be corroboration on a line that is already answered — that moves confidence, not the score.
- **Vimeo** has no item at all. Creating one adds a row that will read *not there* for almost the whole cohort, which makes the report longer and less true. The Missing-points arithmetic would count an absence nobody was looking for.
- Neither carries demand text.

**Verdict: both are technically integrable and neither earns a place on the report as it stands.** What changes that is a mandate naming filmmakers or musicians — the same test D9 applies to streamers.

---

## 3. Where this leaves the ranking

| | Source | Call |
|---|---|---|
| 1 | **Bluesky** | Build. §1 |
| 2 | **Twitch** | One credential and one decision away. Verify the 401 from an unrestricted network first |
| 3 | **CMS fingerprint** | Cheap, and §2.3 made it more useful |
| 4 | **HTML autodiscovery** | Ten lines, correct, low yield |
| — | Squarespace / Wix paths | **Cut.** §2.3 |
| — | Spotify, Vimeo | Hold until a mandate names the cohort. §2.5 |
| — | Instagram, X, Facebook, LinkedIn | Unchanged. Name them *could not tell*, never *not there* |
