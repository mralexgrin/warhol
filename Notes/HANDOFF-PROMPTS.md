# Warhol — session prompts

Paste-ready. Each is self-contained; none needs the conversation that produced it.

**Decisions are locked** per [GRILL-ENGINE-2026-08-05.md](GRILL-ENGINE-2026-08-05.md),
approved 6 Aug. Q1 is already applied (see below). Tasks 1→2 are the critical path
to "a handful of candidates on screen"; 3 raises accuracy; 5 is design and runs in
parallel with everything.

**Already done, don't redo:** Q1 — confidence is computed over falsifiable checks
only. The five presence-only / needs-an-API items are flagged in
`config/probes.json`, excluded from the denominator in `lib/score.js`, and named on
the report.

**Task 1 is applied, 6 Aug 2026 — Q3, Q9(d), Q10, Q11(b), Q18, Q20, Q21 are all in
the code and in the tests. 46 assertions pass.** Two things it changed that you
will notice on the first run: `@chipotle`'s confidence fell 100% → 67% (the
Substack and the Gumroad at its handle are hits nothing confirms are its own), and
its audience fell 2.9m → 2.8m (nothing on either page links the YouTube to the
TikTok, so they are no longer one number). Both are the decisions working. Start
at Task 2.

---

## Task 1 — Apply the locked decisions ✅ done 6 Aug 2026

> The Warhol engine lives at `Warhol/engine/` (Node, no framework, run
> `node bin/warhol.js check <handle>`). Read `Warhol/PRD-WARHOL-ENGINE.md` for the
> design and `Warhol/GRILL-ENGINE-2026-08-05.md` for decisions locked on 6 Aug 2026.
> Start by running `node test.js` — 46 assertions, all passing, each one a sentence
> the product says out loud. Keep them passing and add to them.
>
> *(Tasks 2–5 say "context as Task 1" and mean the paragraph above. The decisions
> below are applied — they are left here as the record of what the code now does.)*
>
> - **Q3** — the "we looked in N places" line counts only doors that opened, and
>   appends "· N wouldn't answer" when any were inconclusive or advisory.
> - **Q9(d)** — resolve uncorroborated hits mechanically before falling back to
>   blocking. When a hit lands on a *guessed* URL, fetch it and look for a link back
>   to a surface already confirmed as theirs. If found → corroborated. If not →
>   keep the current behaviour (blocks the gap, reads "not confirmed as theirs").
>   Verified example: `mkbhd.substack.com` is a live Substack belonging to someone
>   called Bharath, and must not read as MKBHD's newsletter.
> - **Q10** — an uncorroborated hit lowers confidence.
> - **Q11(b)** — only merge two platforms into one audience total when the handle
>   matches **and** one surface links to the other. Where it fails, report the
>   platforms separately and say so in words. No percentage — §6.2 removed it
>   deliberately. Expect audience totals to get smaller and more honest.
> - **Q20** — require a brief. Fit returning `unknown` should not be possible;
>   the house brief ("anyone worth a call") always exists in the real product, so
>   the engine should refuse to score without one rather than invent a third gate
>   value that only exists because the CLI allows it.
> - **Q21** — persist model-proposed URLs and whether each resolved to a hit, a
>   miss, or nothing. A hit-rate table, not retraining. This is the honest version
>   of "the loop is instrumented from day one" (§5.6).
> - **Q18** — a retention sweep: observations for creators never surfaced age out,
>   decisions never do. ~20 lines now, a migration later (§12.1: keep the
>   decisions, drop the evidence).
>
> **Do not** relax the first-party read requirement (Q2 — locked strict), change
> the user agent or robots handling (Q15/Q16 — locked honest), or add a maturity-
> aware threshold (Q12 — locked accept).
>
> Done looks like: tests green and extended, `node bin/warhol.js check @chipotle`
> still readable, and every new rule stated in a comment that says *why*, not what.

---

## Task 2 — YouTube Data API ✅ done 6 Aug 2026

**Applied. 66 assertions pass (was 46).** New file `lib/youtube.js`; wired into
Sweep (channel, cadence) and Study (comments). What you will notice on the first
run:

- **The arithmetic checks out, and the honest version is better than the claim.**
  Day-one Pressure ceiling 22 → 34, day-one max 82 → 94, threshold 78 — all
  confirmed. But 82 was never reachable: Demand *saturates* (25 points needs
  infinite signals; the 1,940 that `weights.json` names buy 21.7). So the real
  day-one max was **79 against a threshold of 78 — one point of headroom**, and
  it is now **91, with 13**. That, not 82 → 94, is what makes the drop reachable.
  Both figures are asserted in `test.js`.
- **The ceiling is now per creator.** 34 for someone whose posting rate we read,
  22 for someone with no YouTube — with the reason on the line. Quoting 34 at a
  creator we never measured would describe a measurement we did not take.
- **Live cadence, real range:** BuzzFeedVideo 3.7/mo against 28/mo → the full 12
  points. Chipotle 0.7 against 2.5 → 10.6. Smosh −29% → 0.9. NASA −22% → 0
  (inside the floor). Veritasium is posting *more*. Chipotle's score went 14 → 25.
- **`warhol cost` grew an `api units` column.** Quota, not dollars, is the
  binding limit: ≤14 units per creator, ~714 creators a day on the free tier.
- **Comments work; classification is unproven.** 500 comments read from MKBHD in
  1.6s. There is no `ANTHROPIC_API_KEY` in the environment, so nothing has ever
  classified one. See "what remains unproven" below.

**Q11(b), asked and answered: the API does NOT give you the channel's declared
links, and it does not fix the merge.** Verified across five channels —
`brandingSettings` has no links field of any kind, and not one About description
contained a URL. Video *descriptions* do carry them (free: same `videos.list`
call as the view counts), so the YouTube surface now has links where it had
none, and they feed the merge. But across eight creators sampled, none linked
their own TikTok from a description — MrBeast's TikTok links are to *charities*,
which the host+path needle correctly refuses. **The merge rule is unchanged.**
Video-description links are held in a separate `mentionLinks` field and are
deliberately kept out of `dossier.links`, because `declaredLinkHit` would read
MKBHD's sponsor link `dbrand.com/shop/fold8` as *his* store — the
mkbhd.substack.com failure in a new hat.

**Known false negative, left for Task 3:** MKBHD's store is at `shop.MKBHD.com`,
published in his own video descriptions, and the engine still reports *"Store:
not there · we looked in 3 places"*. Not a regression — it said that before too —
but the data is now in hand and unused. The safe rule is a link whose host is
the confirmed `website` domain or a subdomain of it; that is Task 3's territory,
so it is flagged rather than half-built.

---

> Context as Task 1. This is Q6, and it is the highest-leverage build because one
> key unlocks three things.
>
> Wire the official YouTube Data API v3 (keyed, free tier, `YOUTUBE_API_KEY` env
> var) into `lib/passes.js`:
>
> 1. **Comments → Demand.** §11.3 names YouTube as the clean source. Feed comment
>    text to the existing `classifyDemand` in `lib/llm.js`. The wall applies
>    unchanged: the model classifies text we fetched and may not write a
>    verification state — `lib/store.js` throws if it tries.
> 2. **Video publish dates + view counts → cadence decay.** This is the important
>    one. I assumed cadence could be derived from a profile page fetch; **checked
>    on 5 Aug, it cannot** — TikTok and YouTube both hydrate their video grids by
>    XHR, so a static fetch returns zero timestamps. The API is the only
>    legitimate route to posting-frequency-over-time on a first look.
> 3. **Consequence to verify:** with cadence available, day-one Pressure ceiling
>    rises from 22 to 34 and day-one max score from 82 to 94 against a threshold of
>    78. Confirm that arithmetic after wiring it, because it is what makes the
>    drop reachable before a creator's second look.
>
> Keep `weights.json`'s `needsHistory` flags honest — flip `cadence_decay` to
> `false` only once it genuinely computes, and leave `unanswered_audience` true.
>
> **Do not** add a headless browser to get around the XHR hydration. §11.3 says no
> scraping and that decision is locked.
>
> Cost every call through the existing `appendCost` so `warhol cost` keeps telling
> the truth.

### What remains unproven, and what would prove it

There is no `ANTHROPIC_API_KEY` in the environment, so the comment path is built
and fetched but **never classified**. Proven: 500 comments arrive as text, the
creator's own are excluded by `authorChannelId`, the input is budgeted to 60,000
characters, and the wall holds (a demand signal is `engine: 'llm'` and
`store.js` throws if one carries a verification state — asserted).

Unproven, and only a key will settle it: whether `classifyDemand` finds real
purchase intent in a live comment section, what fraction survives the verbatim
quote check, what `points_at` distribution looks like, and what a Study call
actually costs on 500 comments rather than 4 captions. §11.4's Study figure is
still the missing half of the cost answer. **Set the key and run
`warhol check @mkbhd`** — the escalation gate opens for him (his store reads
absent), so Study will run.

## Task 3 — First-party site crawling ✅ done 6 Aug 2026

**Applied. 104 assertions pass.** New file `lib/site.js`; one new place — `own_site`,
`kind: first_party` — on both `store` and `newsletter` in `config/probes.json`.
What you will notice on the first run:

- **The false negative Task 2 flagged is gone.** `@mkbhd` reads *"Store: found it —
  mkbhd.com"* and *"Newsletter: found it — mkbhd.com"*, both corroborated with no
  hedge, because a hit on a page they publish needs none. His confidence is 83%.
  **Consequence: the escalation gate now STOPS for him** — his tier-1 inventory is
  built, so Task 2's "set the key and run `warhol check @mkbhd`, Study will run" no
  longer holds. Pick a creator with a real tier-1 gap to prove the comment path.
- **The bar moved with the claim.** `requiredPlacesWithOwnSite`: store 3 → 4,
  newsletter 5 → 6, and the line reads *"not there · we looked in 4 places
  including their own site"*. It applies only when they have a site: a creator
  with none is judged on the old bar, and one whose site we **could not read** now
  resolves `not_found` — *"their own site is where this usually lives, and …"* —
  where it used to resolve absent off three platform guesses. That is the strict
  direction and it is deliberate.
- **How his domain was found, when he links to nothing.** MKBHD's TikTok bio links
  only to his YouTube and his YouTube channel page carries no links in static HTML
  (Task 2's finding). His bio says `business@MKBHD.com`. So: **a domain is theirs
  when it carries their name AND they published it** — as a link, or as the
  address in their bio. Two sources, one test.
- **The test earned its keep on the first live creator.** A first draft also
  accepted *"the only off-platform link on a page of theirs"*. Veritasium's TikTok
  bio link is `ankerfast.club` — an Anker campaign URL, `utm_content=veritasium` —
  and the engine reported Anker's Shopify cart and Klaviyo signup as **his** store
  and **his** newsletter, *"confirmed as theirs by their own page"*. The
  link-in-bio slot is where sponsors live. That rule is gone and the failure is a
  test. A link is a pointer, not a possession.
- **The walk stays on their own domain.** Extra pages come from anchors on their
  own homepage at their own registrable domain, capped at 5 pages, through the
  existing `lib/http` (per-host delay, robots honoured — MKBHD's `/admin/…` link
  was refused and recorded as such). That is also what finally puts
  `shop.MKBHD.com` in front of a signature: Q6 harvested it from video
  descriptions and left it unused, because only a link at a domain confirmed as
  theirs is safe to read out of that pile.
- **A page that arrives empty and fills itself in the browser is UNREAD, not
  empty.** §11.3 rules out a headless browser, so it resolves inconclusive with
  that sentence. Same for a site with more pages than the cap opened — a search
  that stopped early must not read as one that finished.

**Fixed in passing, because Q5 harvests the same links:** a bio link the creator
typed without a scheme — TikTok hands back `chipotle.com` verbatim — was
unparseable, reached the abandonment check, came back status 0 and was recorded as
*"a link they still publish that no longer resolves — they tried, it broke"*. It
resolves fine. It was worth 6 points of Pressure and a false sentence on the
report. `normalizeLink` now adds the scheme. **The four rows already written
(chipotle ×3, collegehumor ×1) stay in the log** and keep showing on those reports
until retention drops them; the log is append-only and correcting the past is not
something this engine does.

**Left undone, deliberately.** `veritasium.com` is his, carries his name, and the
engine reaches it — as a *guess* at `handle.com`, which is the one thing Q5's brief
excludes ("harvested from their bio links, not guessed"). The safe way in is Q9d's
mechanism, not a looser harvest: a guessed `handle.com` hit that links back to a
surface already confirmed as theirs has earned the same status as a declared link.
That is a small, in-doctrine increment and it is the obvious next one.

Also seen and not fixed, since it predates this and belongs to the `website` item:
`@nasa` reads *"Own website: something at forsale.godaddy.com/forsale/nasa.co"* —
a parked domain. It is hedged as unconfirmed, so it costs confidence rather than
telling a lie, but the `dotco` signature has no marker for a parking page.

---

> Context as Task 1. This is Q5, and it is the single biggest accuracy win left.
>
> The engine checks five store platforms and five newsletter platforms but never
> looks at the creator's own domain, where most real stores and newsletters
> actually live. Chipotle's store is on chipotle.com; the engine correctly says
> "not there, we looked in 3 places" and is right about the 3 while being useless
> about the store.
>
> Add the creator's own site — harvested from their bio links, not guessed — as a
> probe place for `store` and `newsletter`. Look for cart / checkout / subscribe
> markers in the page they publish themselves. It is the most first-party surface
> there is, so it should count as `kind: "first_party"` and corroborate.
>
> Then raise `requiredPlaces` for those two items: "we looked in 4 places including
> her own site" is a much stronger claim than four platform guesses, and the bar
> should reflect that.
>
> **Every new signature needs a positive AND a negative control in `test.js`.** The
> most expensive bug in this engine so far was a TikTok marker tested only against
> a fake handle — the string "Couldn't find this account" ships in TikTok's
> localisation bundle on every real profile page, so it silently marked every real
> creator as nonexistent. A signature tested in one direction is not tested.

---

## Task 4 — A handful of candidates, aggregated ✅ done 6 Aug 2026

**Applied. 104 assertions pass.** New files `lib/briefs.js`, `lib/run.js`,
`lib/drop.js`; three commands — `warhol brief`, `warhol run`, `warhol drop`.
`check` and `run` now share one ladder (`lib/run.js`) rather than two copies,
because §5 claims manually-added and machine-found names are comparable and two
implementations stop being comparable within a week.

**Twenty creators went end to end and the bill is in.** One brief, twenty US
food and drink brands (organisations, per §12.1 — no strain profile was
generated for a private individual):

```
  pass     creators  requests  fetching  waiting   api units  model $
  sweep    20        187       24.5s     45.4s     87         $0.0000
  probe    20        405       158.2s    180.8s    0          $0.0000
  study    5         25         2.1s      0.0s     25         $0.0000
  per creator: 31 calls · 5.6 quota units
  44.6s on the clock for all 20, against 411.1s of request time added up —
  9.2× is what running them side by side bought.
```

Four things that answer §11.4, and one that does not:

- **The ladder is measured, not asserted.** The spend rule opened on 8 of 20;
  twelve stopped after Probe. Three of the eight then cost nothing anyway —
  they escalated and no comment section would give up its text (§11.3).
  Escalation is now written to the log (`ladder.escalated`) rather than printed
  and forgotten, because counting it from cost rows undercounts exactly those
  three.
- **Politeness is the binding constraint, and now there is a number: 55%** of
  request time was the per-host delay rather than fetching. Past that line more
  parallelism buys nothing — the queue is per host, so raising
  `creatorConcurrency` only puts more creators in the same one.
- **A found race, fixed.** The delay used to be *checked* — read the last hit
  time, sleep, then stamp the clock — which five concurrent creators all pass
  simultaneously, each believing it waited. It is now *reserved* synchronously,
  so the third caller waits 800ms and not the same 400 as the second. Task 4 is
  unshippable without it: "parallelise across creators" would have meant
  hitting one host five times at once.
- **A zero-result day is what twenty real creators produced.** Nobody cleared.
  On a first look nothing can — Trajectory needs two observations 90 days apart
  (§8) — so the empty state is doing real work on day one and not just on thin
  days.
- **The model half of §11.4 is still unmeasured**, and the drop says so on its
  own bill rather than printing $0.0000 as if it were a finding. There is no
  `ANTHROPIC_API_KEY` in the environment, so no model has proposed a candidate,
  classified a comment, or judged a fit. Set the key and re-run
  `warhol run us-food-drink-brands`.

**Two report lines were wrong and are fixed.** A creator who escalated but had
no readable comment section wrote no count at all, so the report said *"we did
not get as far as their comments"* about someone we got all the way to — §11.3
spends a paragraph on those being different sentences and the missing row
collapsed them into the wrong one. And the bill said *"every dollar is in
Study"* beside a total of $0.0000, which reads as a measurement and is an
absence.

**Where the name came from now travels.** Every candidate carries
`source: proposed | named` from the brief log into the observation log and onto
the report, and it is a retention decision rather than evidence — filed as
evidence it would age out and a swept creator's report would quietly stop
saying "proposed". A proposed name is written with `engine: 'llm'`, so the wall
makes it structurally incapable of ever carrying a verification state.

---

> Context as Task 1. **This is the one to build if you only build one.**
>
> Goal: go from one handle at a time to a small drop — take a brief, produce a
> handful of candidates, run the ladder over all of them, and aggregate the result
> into something that looks like a day's work.
>
> **Scope note:** Q24 defers discovery at scale and that still holds. This is a
> demo-scoped version — 10–20 candidates from one brief, not a crawler. Say so in
> the code and in any output, so nobody reads the demo as infrastructure.
>
> Build:
>
> 1. `warhol brief "<description>"` — the model reads a brief and proposes
>    candidate handles with a one-line reason each. **This is the left side of the
>    wall and the model's proper job** (§11.1): finding people is reasoning over
>    public text. It proposes names; it never says anything about their inventory.
> 2. `warhol run <brief>` — run sweep → probe → study over every candidate, honour
>    the existing escalation gate (do not pay for Study on a creator whose top-tier
>    inventory is already built), and write everything to the same append-only log.
> 3. `warhol drop <brief>` — the aggregate: candidates ranked, gates applied, the
>    ones that cleared and the ones that did not with the reason. **A zero-result
>    day is a legitimate output** (§5.4) and should render as a designed state, not
>    an error.
> 4. Concurrency: the per-host politeness delay in `lib/http.js` is the binding
>    constraint, not compute. Parallelise across creators, never against one host.
>
> Then answer the question §11.4 asks and nobody has answered: **run twenty
> creators end to end and read the bill.** The instrumentation already exists —
> `warhol cost` prints per-pass requests, wall time, blocks, errors and model
> spend. What is missing is the Study figure, because Study has never run live. The
> ratio is what matters, not the absolute.
>
> **On verifying the person — decided 6 Aug: good enough for the demo, don't build
> for it.** A model proposes a name and nothing verifies the *person* the way the
> engine verifies the inventory. Most of the risk is already absorbed: a proposed
> handle still has to survive Sweep, so a hallucinated one produces an empty report
> rather than a false one. The residual is finding *a* real person who isn't the
> one the model meant.
>
> So: tag every machine-proposed creator with its source (`source: "proposed"`) and
> never let the interface imply the name itself was checked. That is the whole
> guard. Do not build person-verification — it is the next wall, and it is a
> separate piece of work.

---

## Task 5 — The individual creator report (design)

> Read `Warhol/PRD-WARHOL-SCOUT.md` §6.2 (the report), §6.10 (the check record),
> and decision 82. Then open `Warhol/engine/data/chipotle.html` — a real check
> record from a real run — and `Warhol/engine/viewer/template.html` which generates
> it.
>
> That page has three structural moves. **Two should transfer to the creator report
> and one should not**, and the analysis matters more than the styling:
>
> 1. **Claim on the line, receipts collapsed underneath it.** Transfer this. It is
>    exactly what §6.10 asks for, and it is better than a single "How we checked"
>    drawer at the bottom because each proof sits under the claim it justifies.
>    *"No newsletter. We looked in 6 places"* becomes clickable in place.
> 2. **The gates, stated plainly.** Transfer with care — this belongs on the report
>    of a creator who did **not** enter the drop (Run a Name, §6.4), where "why
>    isn't this person in my drop" is a real question. On a creator already in the
>    drop it is noise, and §8 is explicit that *In Drop* is computed, not stored.
> 3. **"How the number was built" as its own section.** **Do not transfer.**
>    Decision 82 killed exactly this: *"How it scored disappears as a drawer; its
>    arithmetic attaches to the claim it belongs to."* The points belong on the
>    claim headers — `DEMAND · Do people want to buy? +32` — which the terminal
>    renderer already does and the HTML page does not.
>
> The prototypes at `Warhol/prototypes/v4/` are the current build and are mid-
> rename to v1.3 vocabulary (§13.2). Design against v1.3 — demand / missing /
> pressure / fit / trajectory — not against v4's `gap` / `strain`.
>
> Ask about prototype-vs-production fidelity before building anything.

---

## Task 6 — Point Scout at real data ✅ done 6 Aug 2026

**Applied, and retargeted.** New file `engine/lib/export-seed.js` + `warhol
export --brief <slug>`. 107 assertions pass.

**The prompt below names v4; it was two versions stale.** v5, v5.1 and v5.2 have
landed, and v5.2 is a two-file prototype: the frozen cohort (`warhol-seed.js`,
byte-identical across all five prototype directories and `_shared/`) plus
`v52-seed.js`, a v1.3 layer that derives itself over whatever cohort is loaded.
The export writes a replacement for the first one; the second derives real
creators the same way it derives fictional ones. The gap/strain translation the
prompt asks for **is** needed — the frozen schema still uses those names — and
it lives in one marked function, `pillarsFromEngine`.

Output is at `prototypes/v52-real/` — v5.2 with a generated cohort dropped in.
`prototypes/v5.2/` still runs the fictional one and is unchanged on screen.

**What the demo now says out loud, and did not before:**

```
WHAT THEY'VE SWITCHED ON — we couldn't tell what they've switched on
  Could not resolve   Platform subscriptions   only visible through partner APIs we do not have
  Could not resolve   Shopping tags            only visible through partner APIs we do not have
  Could not resolve   Affiliate links          none among the 21 links they publish, though these
                                               usually sit in video descriptions we cannot read
  Could not resolve   Sponsored posts          nothing in the 1 recent captions we could read — a
                                               sample, which cannot show that none exist
```

**Five defects found and fixed. Three were in the prototype's seed layer, and
one of those was serious.**

1. **`derivedOn()` fabricated the switched-on half.** It returned four
   hardcoded `verified_absent` lines — "off", "off", "none in 90 days". Against
   invented people that was seed data in the wrong file. Against real ones it
   is the screen asserting an absence the engine specifically refuses to
   assert, about a real company, with our name on it — the §5.3 failure
   committed one layer above the engine. It now reads the record when the
   record has one, and falls back to the constants when it does not.
2. **`onLabel()` printed "nothing, anywhere"** — a claim that every switch is
   off — directly above four lines each saying we could not tell. Not knowing
   is now its own fourth reading.
3. **`TODAY`/`REWIND` were hardcoded to the fictional cohort's dates**, so a
   real cohort reported "0 people were looked at" about twenty people it was
   holding. Read from `meta` now, falling back to the old constants.
4. **The cadence value inverted a claim.** `postingLine()` parses this field
   with `firstNum()`; the engine's sentence starts "0.7 videos a month", so the
   line silently vanished — and had the words been ordered differently it would
   have rendered *"Posting 2% more than they used to"* about someone posting
   73% less. The adapter now formats it as `−73%`. Asserted in `test.js` in
   both directions.
5. **Stub markers broke what they annotated.** Wrapping `headline` as
   `{ text, generated }` put `[object Object]` on the report; a link hub with
   no follower count became a platform chip reading "beacons null". Stubs keep
   their native types and the marking moved to `generatedFields`.

**Every change to `v52-seed.js` degrades to current behaviour** — verified by
running both cohorts through every exported SCOUT function: 219 calls on the
fictional cohort and 184 on the real one, zero failures, and the fictional demo
still shows three brief tabs, a pool of 12 and 7 in the drop.

**The drop is empty, and that is the honest answer.** All 20 real creators fail
Fit, because Fit is a model judgment and there is no `ANTHROPIC_API_KEY`.
Trajectory would fail them too — it needs two observations 90 days apart (§8).
The prototype renders §5.4's designed empty state and now names the count:
*"20 people were looked at for this brief. 20 did not match it."*

**Still generated, and marked:** `headline`, `accent`, `samples`, `play`,
`outreach`. Each carries `generatedFields` on the record, the file header names
them, and `warhol export` prints the split.

---

## Task 6 — the original prompt (v4-targeted, superseded above)

> **Run this after Task 4.** Scout needs a drop — many creators — and Task 4 is
> what produces one. Doing it earlier means wiring a screen to a single report.
>
> The engine is at `Warhol/engine/`; the prototype is at `Warhol/prototypes/v4/`
> and runs entirely on `warhol-seed.js`, whose own header says the creators are
> fictional and that *"swapping in verified real data is a change to THIS FILE
> only."* Take it at its word: build
> `engine/lib/export-seed.js` + `warhol export --brief <id>` that writes a
> drop-in replacement for that file. **Do not modify the prototype's app code.**
>
> **The mapping is mostly clean.** Engine → seed:
>
> | Engine | Seed | Note |
> |---|---|---|
> | `creatorId` | `handle`, `id` | `id` as `c_<slug>` |
> | `surfaces[]` | `platforms[]` | `matchConfidence` = 1.0 only where Q11's link-back check passed; otherwise report the platform separately rather than inventing a number |
> | `audience`, `audienceHistory` | `audience.total`, `.growth90d` | growth needs two observations — omit rather than fabricate |
> | `score.total`, `.confidence.value` | `score`, `confidence` | |
> | `score.demand` + `score.missing` | `pillars.gap` | see vocabulary note below |
> | `score.pressure` | `pillars.strain` | |
> | `score.fit` | `pillars.fit` | |
> | `inventory[]` | `inventory[]` | `state` maps present/verified_absent/not_found → PRESENT/ABSENT/UNKNOWN; `surfacesChecked` = `placesLooked`; `note` = `why`; `source` = the probe id |
> | `score.demand.signals` | `evidence[]` `kind:'comment'` | |
> | Pressure quotes | `evidence[]` `kind:'caption'` | |
> | `deadLinks` | `evidence[]` `kind:'signal'`, `label:'abandonment'` | |
> | `score.entersDrop` | `status: 'in_drop'` | and the `drops[date][brief]` index |
>
> `scoreDelta` and `growth90d` are computable from the append-only log **once a
> creator has been seen twice** — compute them when the history exists, omit them
> when it doesn't. Never zero-fill.
>
> **Vocabulary.** The v4 seed says `gap` / `strain`; the engine says `demand` /
> `missing` / `pressure` per decision 72. Do the translation **in the adapter, in
> one clearly-marked function**, so it can be deleted the day the v5 rename lands
> (§13.2). Do not push v4's vocabulary back into the engine.
>
> **The part that matters most.** Some seed fields have no engine equivalent:
> `samples`, `play`, `outreach`, `headline`, `accent`. Those are real product
> features that aren't built, not oversights. Stub them — **and mark every stubbed
> field so the demo cannot quietly claim they're real.** Suggested: a
> `generated: true` flag per stubbed field plus a console summary on export
> ("14 creators · real: inventory, checks, scores, evidence · generated:
> headline, play, outreach"). A demo that can't tell you which half is real is
> worse than one running entirely on fiction.
>
> Done looks like: `node bin/warhol.js export --brief food` writes a seed file, the
> v4 prototype loads it with no code changes, and the check record behind
> *"we looked in N places"* traces to real URLs with real status codes.

---

## Order

| | Task | Why now |
|---|---|---|
| 1 ✅ | Apply locked decisions | Everything downstream inherits the correctness |
| 2 ✅ | YouTube Data API | One key unlocks Demand, cadence, and day-one drop entry |
| 4 ✅ | A handful of candidates | The thing you want to see |
| 3 ✅ | First-party site crawl | Biggest accuracy win, not blocking |
| 6 ✅ | Point Scout at real data | The moment the prototype stops running on fiction |
| 5 | Report IA | Design, parallel, no dependency on the above |

**Only Task 5 is left, and it is design.**

**Set `ANTHROPIC_API_KEY` first.** It is now the single thing standing between
this and a demo with names on the screen, and it unblocks four separate answers
at once: whether `classifyDemand` finds real purchase intent in a live comment
section, what a Study call actually costs (the missing half of §11.4), whether
the model is any good at proposing candidates from a brief (`warhol proposals`
is already instrumented to tell you), and — the visible one — whether anybody
clears Fit. Right now all twenty real creators fail that gate because nothing
judged it, so the drop is empty for a reason that is about our environment
rather than about them.

```bash
export ANTHROPIC_API_KEY=...
cd Warhol/engine
node bin/warhol.js run us-food-drink-brands
node bin/warhol.js drop us-food-drink-brands
node bin/warhol.js export --brief us-food-drink-brands
cp data/warhol-seed.us-food-drink-brands.js ../prototypes/v52-real/warhol-seed.js
```

Trajectory will still hold everyone back until a second look 90 days out (§8),
which is §11's open question 2 arriving as a fact rather than an argument.
