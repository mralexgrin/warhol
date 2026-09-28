# Warhol — Source Inventory

**Date:** 12 Aug 2026 · **Method:** read from the code, not the PRD — `App/engine/config/probes.json`, `lib/feeds.js`, `lib/harvest.js`, `lib/youtube.js`, `lib/reddit.js`, `lib/site.js`, `lib/passes.js`.

This is a factual audit of what the engine actually fetches today, and a coverage map against the platforms a creator-origination product would want. Nothing here is aspirational; where the PRD specs something that is not built, it is marked as such.

---

## 1. What we actually pull from today

Sixteen distinct network sources, in four roles.

### A. Identity — "is this person here at all"
| Source | Endpoint | Auth | Can it decide absence? |
|---|---|---|---|
| YouTube channel page | `youtube.com/@{handle}` (+ `/c/`, `/user/`) | none | **Yes** — clean 404 |
| TikTok profile | `tiktok.com/@{handle}` | none | **Yes** — `followerCount` in the rehydration blob is the only reliable marker (the "Couldn't find this account" string ships on every page, real or not) |
| Instagram profile | `instagram.com/{handle}/` | none | **No** — `neverConclusive: true`. Returns 200 for handles that don't exist. Read for outbound links only |

### B. The work itself — samples, dates, cadence
| Source | Endpoint | Auth | Kind |
|---|---|---|---|
| **YouTube Data API v3** | `googleapis.com/youtube/v3` — channels, playlistItems, videos, commentThreads | `YOUTUBE_API_KEY` | Enumerable. The single richest source: video list, publish dates, view counts, comment text |
| **Substack** | `{handle}.substack.com/feed` | none | Enumerable RSS |
| **Medium** | `medium.com/feed/@{handle}` | none | Enumerable RSS — full post text |
| **beehiiv** | `{handle}.beehiiv.com/feed` | none | Enumerable RSS |
| **Buttondown** | `buttondown.com/{handle}/rss` | none | Enumerable RSS |
| **Ghost** | `{host}/rss/`, `/feed/` | none | Enumerable RSS |
| **Their own site** | generic `/feed`, `/rss`, `/rss.xml`, `/feed.xml`, `/index.xml`, `/atom.xml` | none | Enumerable if the site exposes RSS at a conventional path |
| **Podcast RSS** | the `feedUrl` Apple hands back | none | Enumerable — episodes + publishing rate |
| **TikTok oEmbed** | `tiktok.com/oembed?url=` | none | **Resolvable only** — one URL in, one item out. No handle→list path exists free |
| **X / Twitter** | `publish.x.com/oembed` | none | **Blocked by us on purpose** — endpoint returns 200 but `robots.txt` says `Disallow: /oembed`. `http.js` refuses pre-request. URLs are harvested as evidence of an X presence; never fetched |

TikTok and X samples come from *harvest-then-resolve*: mine post URLs out of documents already fetched (YouTube descriptions, feed bodies, their site, Reddit), keep only URLs whose in-path handle matches the creator, then oEmbed each. Coverage is opportunistic by construction — a creator who never cross-links yields nothing.

### C. Monetization surfaces — the T1–T4 gap thesis
| Item | Places probed |
|---|---|
| Newsletter | `{handle}.substack.com` · `substack.com/@{handle}` · `{handle}.beehiiv.com` · `buttondown.com/{handle}` · `{handle}.ghost.io` · **their own site** (Mailchimp / ConvertKit / Klaviyo / MailerLite / beehiiv embed markers) |
| Store | `{handle}.myshopify.com` · `gumroad.com/{handle}` · `ko-fi.com/{handle}` (403 bot wall — advisory only) · `stan.store/{handle}` · `etsy.com/shop/{handle}` (403 wall — advisory only) · **their own site** (Shopify CDN, WooCommerce, BigCartel, Snipcart, `add to cart`, `/checkout`) |
| Membership | `patreon.com/{handle}` · `buymeacoffee.com/{handle}` |
| Podcast | **Apple Podcasts / iTunes Search API** (keyless, documented JSON) — name match required, not `resultCount > 0` |
| Own website | `{handle}.com` · `{handle}.co` · plus the domain discovered by `site.js` |
| Link hubs | `linktr.ee/{handle}` · `beacons.ai/{handle}` — read for outbound links |
| Representation, sponsorships, affiliate links | Read out of their own bio/captions/links. Presence-only — can never prove absence |
| Platform subscriptions, shopping tags | **Not fetchable.** Partner APIs only. Resolve `not_found` and say so |

**Their own site** is discovered, not guessed: `site.js` takes domains they have published (links + bio address), drops the ~50 platform domains in `notTheirOwn`, and keeps one whose registrable domain carries their name (≥4 chars overlap). Then it reads the homepage plus up to 4 same-domain pages it links to. The name test is load-bearing — without it Veritasium's TikTok bio link (an Anker campaign URL) put Anker's Shopify cart on his report.

### D. Demand — strangers, not pages
| Source | Endpoint | Auth |
|---|---|---|
| **YouTube comments** | `commentThreads.list` | `YOUTUBE_API_KEY` |
| **Reddit** | `oauth.reddit.com` search, `client_credentials` grant | `REDDIT_CLIENT_ID` + `REDDIT_CLIENT_SECRET` |

Reddit's keyless JSON doors (`www.reddit.com/*.json`, `old.reddit.com`, `api.reddit.com`) are all 403 as of 6 Aug 2026. The OAuth app-only grant is the open door, and it is free.

---

## 2. The big creator repos — have / don't have

### ✅ Connected, enumerable (handle → list of their work)
| Platform | How | Depth |
|---|---|---|
| YouTube | Official Data API + page probe | **Deep** — videos, dates, views, comments |
| Substack | `/feed` | Posts, titles, dates, body |
| Medium | `/feed/@handle` | Posts + full text |
| beehiiv · Buttondown · Ghost | `/feed`, `/rss` | Posts + dates |
| Apple Podcasts | iTunes Search API → show RSS | Episodes + publishing rate |
| Their own site | 5-page crawl + generic RSS paths | Pages, links, commerce/newsletter markers |
| Reddit | OAuth search | Third-party discussion (demand, not supply) |

### ⚠️ Connected, but crippled
| Platform | What we get | What we don't |
|---|---|---|
| **TikTok** | Presence (reliable) + follower count + one item per harvested URL | **No post list.** Research API is academic-gated; Display API needs the creator to log in. Samples only exist if they cross-linked |
| **Instagram** | Outbound links off the profile page | **Everything else.** Cannot even decide presence — 200 for handles that don't exist, no marker. Effectively closed |
| **X / Twitter** | Evidence they're on X (harvested URLs) | **Any content.** oEmbed works but robots.txt forbids it, and we obey. This is a policy decision, not a technical block |

### ❌ Not connected at all
| Platform | Feasibility | Notes |
|---|---|---|
| **Twitch** | **Easy — same shape as Reddit.** `api.twitch.tv/helix/*` returns 401; a free app token via `client_credentials` opens it. Real clip, VOD and follower data | Verified 401 on 10 Aug 2026. Deliberately out of scope (D9) until a mandate names streamers. **This is the cheapest unlock on the board.** |
| **Vimeo** | Moderate. Public oEmbed + a documented API with a free tier | Never touched anywhere in the codebase |
| **Spotify** | Moderate. Web API is keyed but free; podcast shows enumerable | Currently only a *link signal* (`open.spotify.com/show`) — we notice the string, we never fetch it |
| **Facebook / Threads** | Hard. Graph API needs app review + page ownership | Only in the `notTheirOwn` exclusion list |
| **LinkedIn** | Hard. Effectively no public read API | Exclusion list only |
| **Bluesky** | **Easy and overlooked.** Public AT Protocol XRPC endpoints, no key, fully enumerable | Not mentioned anywhere in the code |
| **Mastodon** | Easy. Public instance API + RSS at `/@handle.rss` | Not mentioned anywhere |
| **Pinterest · Snapchat · Discord** | Hard / low value | Exclusion list only |
| **Kick · Rumble** | Unknown | Not mentioned anywhere |

### The website-platform question specifically
You asked whether we can tell if their site is Shopify, Squarespace, or elsewhere. Partial answer:

- **We fingerprint commerce, not hosting.** The store check matches `cdn.shopify.com`, `myshopify.com`, `woocommerce`, `bigcartel.com`, `snipcart`, `add to cart`, `/checkout`. So *"they sell on Shopify"* is answerable. *"Their site is built on Squarespace / Wix / Webflow / Framer / WordPress"* is **not** — there is no CMS or host fingerprint anywhere in the engine. `squarespace` appears once as a link signal and once in an exclusion list; `wix` only in the exclusion list; Webflow and Framer appear nowhere.
- **Feed discovery on their own site is path-guessing only.** We try `/feed`, `/rss`, `/rss.xml`, `/feed.xml`, `/index.xml`, `/atom.xml`. That covers WordPress, self-hosted Ghost and most static generators. There is no `<link rel="alternate" type="application/rss+xml">` autodiscovery on HTML pages — the one `rel=alternate` match in `feeds.js` is inside the XML parser, not the page reader.

> **Correction, 12 Aug 2026 (same day).** This section first said we miss Squarespace by not trying `?format=rss` and Wix by not trying `/blog-feed.xml`. Adding those paths would not have worked — Squarespace serves RSS off a *collection* slug that varies per site and is not advertised from the homepage, and `veritasium.com/?format=rss` returns **400**. See §2.3 of [PRD-WARHOL-BLUESKY.md](../Product/PRD-WARHOL-BLUESKY.md) for the measurements. The Squarespace/Wix item is cut.

---

## 3. Where the holes actually hurt

> **Superseded 12 Aug 2026.** The ranking below was written before any of these were tested against live endpoints. It survives only as a record of what was assumed. The measured ranking — Bluesky first, Squarespace/Wix cut, autodiscovery downgraded — is §3 of [PRD-WARHOL-BLUESKY.md](../Product/PRD-WARHOL-BLUESKY.md).

Ranked by (value of the signal) ÷ (cost to connect):

1. **Twitch** — free app token, documented API, real data. The only reason it's off is that no mandate has asked for streamers. Hours, not days.
2. **HTML feed autodiscovery + Squarespace/Wix feed paths** — a few lines. Turns a large class of "creator has a blog we can see but can't read" into readable supply, which lifts the Pressure ceiling for anyone without YouTube.
3. **Bluesky** — keyless, enumerable, and it is where a chunk of the writer/commentator cohort actually went. Nobody has considered it.
4. **A CMS/host fingerprint** — cheap (a dozen regexes over the homepage we already fetch) and it is a genuine origination signal: a Squarespace site with no store reads very differently from a bespoke Next.js site with a Shopify cart.
5. **Spotify podcasts** — we already resolve podcasts through Apple; Spotify would mostly corroborate. Low marginal value.
6. **Instagram, X, Facebook, LinkedIn** — do not chase these. Instagram is closed, X is a deliberate robots.txt decision, and the other two require a partner relationship. The honest engineering answer is the one already in the report: name them as *can't tell*, never as *absent*.

---

## 4. One structural point worth keeping

Every source above is classified as **enumerable** (handle → list) or **resolvable** (URL → that one item), and the entire sampling design falls out of that split. Any new platform should be triaged the same way before anyone estimates it — the question is never "does it have an API", it is "can I get from a handle to a list without a partner agreement".
