# Warhol — sources beyond YouTube, and the report that shows the work

**Status:** Draft v0.1 — specified, not built
**Author:** Alex Grinshpoon
**Date:** 10 August 2026
**Companion docs:** [PRD-WARHOL-ENGINE.md](PRD-WARHOL-ENGINE.md) · [PRD-WARHOL-SCOUT.md](PRD-WARHOL-SCOUT.md) · [VOICE-AND-TONE.md](VOICE-AND-TONE.md)
**Supersedes on its own subject:** [REPORT-IA.md](../Notes/REPORT-IA.md) §1–§5, which restructured the report around *receipts*. This restructures it around *the creator*.

---

## 1. What this is, and the finding that forced it

Two halves of one problem, and they are coupled in one direction: **the report cannot show a creator's work until the engine goes and gets it.**

The finding that started this:

```js
const STUBBED = ['headline', 'accent', 'samples', 'play', 'outreach'];
```

[`export-seed.js:176`](../App/engine/lib/export-seed.js). **`samples` is empty on every record the engine has ever produced.** The report has a drawer titled *What their work looks like* ([`app.js:1833`](../App/scout/app.js)) that only the hand-authored seed can fill. On real data it renders nothing.

So the report opens on a name, a ring, four scored pillars and a receipts ledger. **You can read the entire thing and not know what one of their videos is like.** That is the defect. Everything below follows from it.

The second defect is its consequence. Because there is nothing of the person on the page, the page is about the model: four numbers, two gates, a bar, an arithmetic. It is a beautifully audited document that does not do the thing an origination desk opens it to do, which is decide whether to call someone.

The third is noise. Of the eleven inventory items, five can never return *verified absent* — three because the evidence is a sample or a self-declaration, two because they need partner APIs we do not have ([`score.js:170–182`](../App/engine/lib/score.js)). Grouped as they currently are, by *built* versus *switched on*, the unsettleable rows are interleaved with the settled ones in both lists, so *could not tell* reads as the page's dominant finding.

**This document does not touch the wall.** §11.1 is unchanged and §3 of the engine PRD is unchanged. Every source added here is a first-party read that produces an HTTP status code, and no model is given a new opportunity to say whether something exists.

---

## 2. What is actually reachable — verified, not remembered

Probed live on **10 August 2026**, one request each, default client, no spoofed user-agent, no credential:

| Source | Endpoint | Result | Gives |
|---|---|---|---|
| Substack | `https://{handle}.substack.com/feed` | **200** | Post titles, dates, bodies |
| Medium | `https://medium.com/feed/@{handle}` | **200**, 55KB | Full post text, dates |
| TikTok | `https://www.tiktok.com/oembed?url={videoUrl}` | **200** | Caption, author, thumbnail URL |
| X | `https://publish.x.com/oembed?url={statusUrl}` | **200**, but see §2.2 | — |
| Twitch | `https://api.twitch.tv/helix/*` | **401** | Needs a free app token |
| Substack search | `https://substack.com/api/v1/publication/search` | **200**, empty | Nothing usable |

### 2.2 X is out, and it took building it to find out

**Corrected 10 August 2026, during the build.** The row above is why this document originally listed X as viable: the endpoint answers 200 with the full tweet text to anyone who asks. It also publishes, at `publish.x.com/robots.txt`:

```
User-agent: *
Disallow: /oembed
```

That is X stating in machine-readable form that the endpoint is not to be fetched by software. §11.3 obeys robots.txt and `http.js` enforces it before any request leaves — which is how this surfaced at all: the resolver came back `robots-disallow` rather than with a tweet.

**A 200 is permission to read. robots.txt is the host saying who may ask.** When they disagree the host's stated rule wins, and "but the endpoint works" is not a counter-argument — it is the reason the rule needed writing.

So X posts are **harvested and never resolved**. The harvest still earns its keep: a creator linking their own X posts is evidence they are on X, which is an inventory fact. It cannot become a sample. `harvest.js` declines them by name rather than letting the request fail, so the check record carries *why* we did not look instead of a failure that reads like a bug.

**D3 is amended accordingly: harvest-then-resolve is TikTok only.**

### 2.1 The split that governs everything

The six rows above are two different kinds of thing, and confusing them is how this work goes wrong:

**Enumerable** — *give me a handle, get a list of their work.*
Substack, Medium, Ghost, beehiiv, Buttondown, podcast feeds, YouTube, Twitch.

**Resolvable only** — *give me a URL, get that one item. There is no sanctioned way to list a creator's posts.*
TikTok, X.

TikTok's Research API is academic-gated; its Display API needs the creator to log in — which is a partner relationship, not a scan. X's listing endpoints are behind a paid tier. **Neither has a free path from a handle to a list of posts, and §11.3 rules out taking one anyway.**

So *"can we pull more TikTok or X content sample"* has an honest answer and it is not yes or no. It is: **yes, for posts they have linked somewhere we can already read.** Which is §4.2.

---

## 3. Decisions

| # | Decision |
|---|---|
| D1 | The report's spine is **the work and one verdict line**, not the arithmetic |
| D2 | Add **feed readers** (Substack, Medium, Ghost, beehiiv, Buttondown, podcasts) — enumerable, keyless, first-party |
| D3 | Add **harvest-then-resolve** — mine post URLs from text we already fetch, then oEmbed each. **TikTok only**; X is harvested but never fetched (§2.2) |
| D4 | New sources feed **verification, samples and cadence. Not demand.** |
| D5 | Inventory regroups by **what we know** — has / doesn't have / can't tell — replacing built / switched-on |
| D6 | Scored arithmetic moves **behind one disclosure** |
| D7 | Samples render as **thumbnail + caption + one fact + link out**. No third-party embeds |
| D8 | No readable work → **block hidden, confidence lowered, reason named**. Never an empty labelled slot |
| D9 | Twitch is **out of scope** until a mandate names streamers |

---

## 4. The sourcing layer

### 4.1 Feed reader — the unlock

`probes.json` already knows these hosts. It pings them for a **signature match** and stops. This reads what is behind the door.

| Platform | Feed | Discovery |
|---|---|---|
| Substack | `{handle}.substack.com/feed` | Already a probe (`substack_sub`) |
| Medium | `medium.com/feed/@{handle}` | Handle |
| Ghost | `{domain}/rss/` | From the resolved site |
| beehiiv | `{pub}.beehiiv.com/feed` | Already a probe host |
| Buttondown | `buttondown.com/{handle}/rss` | Handle |
| Podcast | `feedUrl` from the iTunes lookup | **Already fetched** — `resolve.js:194` calls the iTunes search and keeps the match. The feed URL is in that response and is currently discarded |

The podcast row is the cheapest thing in this document. We already make the call. We already parse the response. We throw away the field that contains the episodes.

**Parsing.** RSS/Atom, standard library or one small dependency, title + `pubDate` + `content:encoded`/`description` + link. Strip HTML to text. Cap at the most recent 10 items and 2,000 characters each — enough for samples and cadence, not an archive.

**Politeness.** One request per feed per pass, conditional GET (`If-Modified-Since`) on re-checks, same failure discipline as `http.js`: a call that failed is a row in the check record, not an exception.

**Cost.** Zero. No keys, no quota, no credential to provision. This is the whole argument for doing it first.

### 4.2 Harvest-then-resolve — TikTok and X

Two steps, and the first one uses text the engine already has in hand.

**Step 1 — harvest.** Scan for post URLs in:

- **YouTube video descriptions.** Already fetched. [`youtube.js:203–205`](../App/engine/lib/youtube.js) says it in its own comment: descriptions are *"where creators actually publish their other handles."* Same call, same quota unit.
- **Feed bodies** from §4.1. Writers link their own clips constantly.
- **Resolved site and link-in-bio pages.** `resolve.js` already fetches these.
- **Reddit post and comment bodies.** Already fetched by `reddit.js`.

Patterns:

```
tiktok\.com/@([\w.-]+)/video/(\d+)
(?:twitter|x)\.com/([\w]+)/status/(\d+)
```

**The identity rule, and it is not optional.** Harvest a URL **only when the handle inside it matches the creator being checked**, by the same signature discipline `resolve.js` already applies. A TikTok link in a YouTube description is very often someone else's — a collaborator, a duet, a credit. Resolving it would attach another person's work to this report, which is worse than showing no work at all.

**Step 2 — resolve.** oEmbed each surviving URL. Returns caption, author name, author URL, thumbnail URL.

**What oEmbed does not return: view counts, likes, any engagement figure.** So a TikTok or X sample carries a caption and a date and nothing else. §6.2 has to be honest about that rather than inventing a metric line.

**Coverage is opportunistic, and the report must say so.** A creator who never cross-links yields zero samples from this path. That is a fact about what they published, not a fact about them, and it is stated as *we found no posts they had linked anywhere we can read* — never as *they don't post*.

### 4.3 What each source may feed

| | Verification | Samples | Cadence | Demand |
|---|---|---|---|---|
| YouTube API | yes | yes | yes | **yes** |
| Reddit | — | — | — | **yes** |
| Feeds (§4.1) | **yes** | **yes** | **yes** | no |
| TikTok / X oEmbed | present-only | **yes** | no | no |

**Why feeds do not feed Demand.** Demand is 25 of the 60 Opportunity points and it means *strangers asking to buy*. `reddit.js` draws the distinction precisely: captions are the creator quoting their own demand, comments are strangers asking. **A feed is the creator's own words.** It is a captions-class signal, not a demand signal — and the comment threads that would be the demand signal are not in the RSS feed at all. Nothing to argue about; the data does not exist at that door.

**Why oEmbed is present-only.** A resolved TikTok URL proves a TikTok post exists. It cannot prove one does not. It sets `present`, never `verified_absent`, and its inventory item stays `presenceOnly` — out of the confidence denominator, exactly as `score.js:191` already handles.

### 4.4 The wall is unchanged, and this strengthens it

A feed read is a **first-party read of the thing itself**, which is what `store.js` requires before `verified_absent` may be written. Today the newsletter check pings `{handle}.substack.com`, gets a signature match, and writes a hit that `score.js:194` refuses to count as resolved:

> *"There is a Substack at a name that looks like hers"* is precisely the state confidence exists to express, and counting it as settled overstated certainty.

**Reading the feed corroborates it.** The author name and post content tie the publication to the person. `corroborated` flips from `false` to true, and the row moves from the denominator-only column into `resolved`. **Confidence goes up on exactly the line most likely to be wrong.**

No model is asked anything new. Models still classify text we fetched, quote it, judge fit and propose places to look. They still may not say whether something exists.

---

## 5. What this does to the score, stated before anyone is surprised by it

Better data does not mean higher scores, and on one pillar it means the opposite.

**Down.** A newsletter that reads *could not tell* today becomes *present* when the feed answers. Present inventory is not a gap. **Missing points fall for every creator who turns out to have a live publication we were previously unsure about.** This is correct: the thesis is the monetization gap, and a creator who already runs a paid Substack has less of one than we thought.

**Up, but for fewer creators than this document first claimed.** `pressure` is capped at 22 of 40 for a creator with no YouTube channel, because posting rate is unreadable without dated uploads ([engine PRD §8](PRD-WARHOL-ENGINE.md)). A feed stamps every post with a date, so the ceiling lifts — **for publications whose feed reaches back about 150 days.**

Measured during the build, 10 Aug 2026: Platformer ships 15 items in its feed and Stratechery 10. With a 90-day recent window and a 60-day baseline behind it, that is not enough for a weekly publisher, and RSS offers no way to page further back. **Monthly publishers get a reading; weekly ones do not, and the report says why rather than printing a zero.**

A second consequence, and it is the one that took a test to catch: a feed must never claim to know how old a publication is. `cadence()` has two sentences for a short sample, and one of them — *"their whole channel is N days old"* — is a claim about the creator's entire history. The uploads walk may say it because it holds a complete prefix. A feed is a recent window and never can, so `feeds.js` marks itself truncated and takes the other branch.

**Up.** Confidence, per §4.4.

**Unchanged — and I checked this rather than assuming it.** Trajectory is **audience-count** based:

```js
const yearChange = (last.audience - first.audience) / (first.audience || 1);
```

[`score.js:248`](../App/engine/lib/score.js). It needs two observations 90 days apart because **nobody stamps a follower count**. A dated back-catalogue is post history, not audience history. **Feeds do not unlock trajectory on a first visit.** The 90-day gate stands exactly as it is.

**Therefore the cohort must be re-scored and the delta measured, not asserted.** The house cohort is 58 records. Re-export, diff the boards, and report which creators moved and why before anyone reads a new drop as if it were the old one.

---

## 6. The report

Three questions, in this order. Anything that is not an answer to one of them is below the fold or behind a disclosure.

> **Who are they and what do they make** → **what's the gap** → **why now**

### 6.1 Above the fold

1. Name, handle, faces, **accounts as links** — unchanged, it already works
2. **One verdict line.** What they are, what is missing, in a sentence. Where `headline` sits today, with the `First look` fallback behaviour kept as built ([`app.js:1636`](../App/scout/app.js), decision 119)
3. **The work.** Three samples, §6.2
4. Score as a **chip**, not a block. Ring, number, `bar is 78`. The `scoreblock` treatment moves down beside the arithmetic disclosure

The four `<section class="claim">` blocks with their `+40` / `32/40` figures no longer occupy the top of the page.

### 6.2 The samples block

Up to three, most recent first, one per platform where possible — spread beats depth, since the point is *what do they make* and a creator who makes three different things is a different proposition from one who makes one thing three times.

Each sample is: **thumbnail · caption or title · one fact · link out.**

The *one fact* is **whatever that source actually returned**, and it differs by source. This is a constraint, not a design choice:

| Source | The fact |
|---|---|
| YouTube | View count and date — the API returns both |
| Feed | Publish date |
| TikTok / X | **Date only.** oEmbed returns no engagement figure |

Do not manufacture a common metric. A row that says *"— "* where the views would be is honest; a row that says *0 views* is a lie the API never told us.

**No third-party embeds.** No TikTok or X embed scripts, no iframes. They load trackers into an origination desk, they are slow, and they break the file-open prototype. A thumbnail and a link do the job — and the link is the point: §6.12's rule is that a list you cannot follow is an assertion.

**Thumbnails are hotlinked and may 403 under a referrer policy.** Verify per source during the build; where the image will not load, the sample degrades to its text row rather than showing a broken frame.

**Written work shows its first paragraph instead of an image.** A 200-character pull from `content:encoded`, which is a better sample of a writer than any thumbnail.

### 6.3 The gap

The inventory regroups by **what we know**, not by built-versus-switched-on:

```
They have          YouTube · Instagram · TikTok · a podcast
They don't have    Newsletter — not there, we looked in 6 places
                   Store — not there, we looked in 5 places
Can't tell         4 things can't be settled from outside
```

**`They don't have` is the thesis block.** It is the product, stated as a list, and it should read as the strongest thing on the page — which it cannot do while it is interleaved with rows saying we could not check.

**`Can't tell` is one sentence and a disclosure**, regardless of which half a row came from. The existing `allUnresolved` collapse ([`app.js:1797`](../App/scout/app.js)) already does exactly this for the switched-on list; D5 promotes it from a special case to the structure.

Per-line receipts survive untouched. Every line still opens in place to its own checks — outcome, HTTP status, place, address, what came back. That is [REPORT-IA.md](../Notes/REPORT-IA.md) §1 and it was right.

**`switchedOnLabel` in `score.js:206` reads the `half` field** to write *"a few things, none of them earning."* The regrouping is a **display** regrouping. `half` stays on the record and the engine keeps computing that label; the report just stops using `half` as its section boundary.

### 6.4 Why now

Demand, Pressure and Trajectory compress into evidenced lines under one heading. Keep:

- The demand **quotes**. Strangers in their own words are the best evidence in the product
- The **said** lines in Pressure — a creator's own sentence, dated
- Trajectory's `stated` line — *first look, no trend yet, we check back in 90 days*

Drop from this view: the `+N` figures, the `/40` denominators, the `gate · pass` chips.

### 6.5 The arithmetic disclosure

One disclosure, titled **How the score was built**. Contains the four pillars with their points, the bar, and the sentence that stops someone hunting for missing points:

> Fit and Trajectory are gates. They pass or fail and add nothing.

This is [REPORT-IA.md](../Notes/REPORT-IA.md) §3 carried one step further. That pass cut the compact bar's number strip because a persistent three-number strip read as a live scoreboard. Four scored sections at the top of the page read as the same thing, more slowly.

**Nothing is deleted.** Every figure that renders today still renders, one click away. The gate blocks (`gateBlock`) stay where they are — a failed gate is an answer to *why isn't this person in my drop*, which is a decision-time question.

### 6.6 The empty case

No readable work at all — no YouTube, no feed, no harvested URL that passes the identity rule:

- **The samples block does not render.** No empty labelled slot. This is the v5.4 rule that removed *No play recommended* from 117 reports
- **The verdict line leads instead**
- **Confidence carries a named reason:** *we could not read any of their work*

Same shape as unread comments today, which `passes.js:704` and `render.js:77` already handle in these words — the distinction between *we read 500 and none asked to buy* and *we could not read any*. Extend the pattern; do not invent a second vocabulary for it.

**Not a gate.** A creator with no readable work still produces a report and can still enter the drop. Run-a-name is explicitly a human's hunch (§6.4) and must always produce a report.

---

## 7. What does not change

- **The wall.** §11.1, §3 of the engine PRD, the `store.js` throw
- **Per-line receipts.** Every claim opens to its own checks
- **The check record.** *How we checked*, the flat chronological table, the wall paragraph
- **The copy rules.** [CLAUDE.md](../CLAUDE.md) binds every string here. One name per state — samples get no new synonym for *not there* or *could not tell*
- **The verbs.** Promote / watch / pass, one set visible at a time
- **§11.3.** No scraping. Every source in §2 is a documented public endpoint or a sanctioned API
- **Trajectory.** 90 days, two looks, audience counts

---

## 8. Sequencing

Engine first, because the report cannot show work that does not exist.

| # | Ticket | Depends on |
|---|---|---|
| 1 | ✅ Feed reader — `lib/feeds.js`, all six feed types | — |
| 2 | ✅ Wire feeds to inventory: corroborate hits, disown false ones, cadence from post dates | 1 |
| 3 | ✅ Podcast feed — keep `feedUrl` from the iTunes response instead of discarding it | 1 |
| 4 | ✅ Harvest — `lib/harvest.js`, **with the identity rule** | 1 |
| 5 | ✅ Resolve: TikTok oEmbed; X declined by robots (§2.2) | 4 |
| 6 | ✅ **Un-stubbed `samples`** in `export-seed.js` | 2, 5 |
| 7 | ⛔ Re-export the house cohort; **diff and publish the score delta** (§5) — **needs the YouTube key** | 6 |
| 8 | ✅ Report: samples block, score chip. Verdict line **deferred** to §9.2 | 6 |
| 9 | ✅ Report: inventory regrouped has / doesn't have / can't tell | 8 |
| 10 | ◻️ Report: arithmetic disclosure | 8 |
| 11 | ◻️ Confidence: *could not read any of their work* as a named reason | 2, 8 |

**Ticket 2 was specified wrong and built right.** It said *"`verified_absent` on a clean 404"*. A feed that 404s means there is no RSS at that address, not that there is no newsletter — plenty of live publications expose none, and absence is the probe layer's decision across five or six places under rules written for it. **The feed never writes absence.** What it does instead is stronger and was not in the spec: a feed whose masthead names somebody else **disowns a guessed hit**, turning it into a miss. `mkbhd.substack.com` is a live Substack titled *"Bharath"* — verified 10 Aug 2026, the exact false hit `resolve.js:282` was written about, and it is now caught by reading the thing.

Tickets 1–3 are the whole unlock and share no credential, no key and no quota. If this stalls anywhere, it should stall after 3, not before it.

**Re-exporting the seed needs the four `--title` flags and `scoreCeiling`**, or the drop tabs render slugs. Ticket 7 is where that bites.

---

## 9. What I want to argue about

1. **Three samples, or one?** Three fills the top of the page and shows range. One is a decision aid and nothing more. I have specified three; I am not certain it beats one.
2. **The verdict line has no author.** `headline` is stubbed and the engine explicitly refuses to write one. D1 puts a sentence in the most valuable space on the page that nothing currently generates. Either a model writes it under the wall's rules — a judgment about text we fetched, which is permitted — or the space holds the strongest countable fact instead. **This is unresolved and it is the biggest hole in this document.**
3. **Do feeds change Fit?** A creator's actual writing is far better evidence for the Fit judgment than a channel description. Fit is a model judgment about fetched text, so this is permitted. It is also a second re-scoring, and I have deliberately left it out of §5.
4. **Harvest breadth.** Reddit bodies are the widest net and the weakest identity signal — a stranger linking a clip is not the creator publishing it. Restricting harvest to first-party surfaces only (their descriptions, their feeds, their site) is narrower and cleaner. I have specified all four sources; I would take the argument for three.

---

## 10. Deliberately not built

- **Twitch.** Free app token, same grant as Reddit, real clip data. Nothing in the current mandates asks for streamers (D9)
- **Instagram.** Closed. Unchanged
- **TikTok Research / Display API.** Academic gate on one, creator login on the other. Both are partner relationships, not scans
- **X paid tiers.** oEmbed is what is free, and it is enough for samples
- **Full-text archives.** Ten items per feed. This is an origination desk, not a corpus
