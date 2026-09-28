# Scout — pre-demo review, 6 August 2026

Reviewed: `PRD-WARHOL-SCOUT.md` (v1.5), `engine/` (config, lib, `data/costs.jsonl`,
`data/observations.jsonl`), and `prototypes/v5.3/` driven live in a browser at
`localhost:8127/v5.3/`. Everything below is measured against the running build or the
files on disk, not inferred.

---

## Triage — what actually threatens tomorrow

Four things will read as "the AI is broken" if a room sees them. Everything else is polish.

| # | Defect | Where | Blast radius |
|---|--------|-------|--------------|
| **B1** | **Run a name returns the same person no matter what you type** | `app.js:1462`, seed `runANameResult` | The live beat. Fatal. |
| **B2** | **The house brief prints other briefs' Fit verdicts under its own name** | `v52-seed.js` `fitFor` / `gatesFor` | 29 of 58 records. Visible on the drop's own "who else" board. |
| **B3** | **Admin's bar presets are 70/74/78/82 against a live bar of 25** | `app.js:1583` | One click empties the drop to zero, on stage. |
| **B4** | **Three PRD section references render on every report** | seed `play.why`, `outreach`, `note` | 117 reports carry `(§5.5)`. Reads as unfinished. |

Detail on each below, under the numbered items.

---

## 1. The demo pitch — there isn't one, and the PRD's is dead

**Finding.** §13's demo order is still the three-beat January-2024 rewind script
("*Warhol, as of January 2024* → *as of this week* → *and here's how we develop them*").
The rewind was cut on 6 Aug and stripped from the prototype. **§13 has not been replaced.**
There is currently no written brief for what Scout runs on stage.

**The problem it leaves behind.** §13 itself says why the rewind was beat 1: *"A room has no
way to judge a list of unknowns; the backtest is the only mechanism that lends the second
list credibility."* Cutting it removed the credibility mechanism and put nothing in its
place. The demo now opens on eight names nobody in the room recognises, with no argument
for why they're the right eight.

**Recommended replacement — the proof moves from *time* to *reach*:**

> **Beat 0 — the standing fact.** One line before you click anything: *58 creators went
> through the full ladder overnight for this brief. Eight are on the screen. Here is what
> stopped the other fifty.* Open the who-else board first, not the drop. That board **is**
> the new backtest — it's the falsifiable part, and it's already built.
>
> **Beat 1 — one name, all the way down.** `@pantheorganizer`. 1.1M YouTube subscribers,
> 17 people asking where to buy, no store, no newsletter, no membership, posting 9% less
> than they used to. Open the report and show the check record: *33 places, 3–6 Aug.*
> This is the whole thesis in one creator, and he's real.
>
> **Beat 2 — Run a name, live, on a name the room shouts out.** *Requires B1 fixed.*
> This is the only beat where the machine visibly works rather than shows a stored answer.
>
> **Beat 3 — Sources.** Eleven places, twenty-eight doors, each one stating what it proves
> and what switching it off costs. This is the screen that says the system is a system.

**Why `@pantheorganizer` and not the top scorer.** `@itshunterfriesen` scores 39 — higher —
but he is *excluded from the house drop by a Fit verdict about college football* (B2). Do
not build a beat on him until B2 is fixed.

**Open decision for you:** whether the pitch claims Scout *is* running continuously today,
or *will*. Right now nothing in the product asserts either (see item 8).

---

## 2. Name search and X — confirmed, and it's worse than "not pulling results"

### 2a. X is not a source. At all.

**Confirmed.** `config/probes.json` mentions `twitter.com` / `x.com` in exactly one place —
the `notTheirOwn` deny-list, which *excludes* those domains from being treated as a
creator's own site. There is no X probe, no X extractor, no X identity check. The full
source list is: TikTok, YouTube, YouTube Data API, Instagram (never conclusive), the
creator's own site, Apple Podcasts, Reddit (built, not connected), plus guess-places for
newsletter / store / membership, plus Linktree and Beacons.

**But the admin panel advertises X as a source.** `v52-seed.js:1604` lists
`{ name: 'X', on: false }` in *Where Scout looks*. So the product shows a switch for a
capability that does not exist. That is almost certainly what you saw. It is a two-line fix
(remove it, or label it `not built` the way Sources labels Reddit `built, not connected`).

### 2b. Run a name ignores its input entirely — **B1**

`app.js:1462` reads `var r = W.runANameResult;` — a **single hardcoded record** in the seed
(`@itshunterfriesen`, score 39). The typed query is stored in `state.run.query` and printed
on the *scanning* screen only; the result screen renders the seeded creator's name, handle,
face and score.

**Reproduced live.** Typed `https://x.com/mkbhd` → the scanning panel read
`LOOKING FOR HTTPS://X.COM/MKBHD` → the result was **`itshunterfriesen`, 39**.

If anyone in the room names a creator, this fails in the most legible way possible. It is
also the beat you most want, because it's the only live one.

**Minimum honest fix (≈30 min):** match the typed handle against the 58 real records in the
seed; on a hit, run the existing check animation against *that* record. On a miss, say so
plainly — *"Scout hasn't looked at this one yet. It goes into tonight's run."* — which is a
true sentence about a continuously-running product and a better answer than a wrong one.
Then seed 5–6 names you expect the room to shout.

**Secondary:** `x.com` isn't in `RUNHOSTS`, so the "*from a TikTok link*" provenance line
silently doesn't render for X URLs. And pressing Enter in the field does not submit — you
must click *Run it* (whose label wraps to two lines in the button).

### 2c. "SIMZAK" — I could not resolve this word

It appears nowhere in the PRD, the engine, the seed or the prototype, and it doesn't map to
any axis name (the axes are **Demand / Missing / Pressure / Fit**, plus **Trajectory** as a
second gate). My best reading of the dictation is **"confirm whether *Simms'* X data is
being captured correctly"** — so I checked that case:

> `@chrissimmsunbuttoned` — **score 0, confidence 17%, `platforms: []`**, Fit reads
> *"the model pass did not run, and Fit is a judgment — no model, no verdict."*
> Scout read **nothing at all** about Chris Simms. No follower count, no channel, no
> profile. He is one of 13 records in the house cohort in that state.

If that's the case you meant: it's not an X problem specifically, it's that Scout couldn't
read *any* surface for him, and X — where he is most active — isn't a surface Scout has.
If you meant something else by SIMZAK, tell me the word and I'll check it directly.

### 2d. Axis capture, stated plainly

- **Demand (25 pts)** — sourced from YouTube comments and Reddit only. Reddit is
  disconnected. **5 of the 8 creators in today's drop read "No purchase intent we could
  read."** The strongest pillar in the model is near-blank across the cohort. This is open
  question 22 and it is now visible on the front door.
- **Missing (35 pts)** — working well. This is what's actually selecting the drop.
- **Pressure (40 pts)** — partially working. Every card carries *"No second change we could
  date and stand behind"*, i.e. only one of two required Pressure readings exists.
- **Fit** — working, but contaminated (B2).
- **Trajectory** — `not_established` for the entire cohort (first look, needs 90 days).

**So: the drop is currently being selected on Missing and about half of Pressure.** That's
a real claim about the model, not a demo inconvenience, and it's worth owning out loud
rather than being asked about.

---

## 3. The score circle — found it

**The circle is not a score gauge.** `ui.js:239` `ring()`:

```js
'<div class="ring …" style="--pct:' + Math.round(c.confidence * 100) + '%">' +
  '<span class="in"><b>' + s + '</b><span>score</span></span>'
```

The **number** is the score. The **sweep** is confidence. Two variables in one mark, and
nothing on the drop screen says so.

**Why it looks inconsistent — measured on the live drop:**

| Rank | Creator | Score | Ring sweep | Reads as |
|---|---|---|---|---|
| 1 | @pantheorganizer | **38** | 83% | not full |
| 2 | @missunderstoodpod | **34** | **100%** | **full** |
| 5 | @backseatcoach | **27** | **100%** | **full** |
| 6 | @forensicdetailingchannel | **25** | 83% | not full |

**The best creator on the board has an emptier circle than the fifth-best.** That is the
inconsistency, and it's structural, not a rendering bug.

Compounding it: confidence takes only **seven** values across the whole cohort —
`0, .167, .333, .5, .667, .833, 1` — because it is *n / 6 falsifiable checks*. So the ring
is a six-step dial that looks continuous.

**Also relevant to your "out of 25" read:** the score's real range is **0–39** on a
theoretical max of 100 (Demand 25 + Missing 35 + Pressure 40). **25 is the bar, not the
maximum** — and the report reinforces the confusion by formatting the three pillars three
different ways on one screen: `DEMAND +17`, `PRESSURE 12/40`, `MISSING +9`. One of the three
carries a denominator.

**Recommendation.** Pick one:
- **(a) Make the ring the score.** Sweep = `score / 40` (the observed ceiling, honest, and
  it makes rank and fill agree). Move confidence to the small text it already has:
  *"83% of checks resolved."* — **recommended, ~10 lines.**
- (b) Keep confidence in the ring but stop drawing it as a filled arc — a 6-dot pip strip
  reads as "checks resolved" and can't be mistaken for a score.

And normalise the three pillar figures to one format (`+17 / +9 / +12`, no denominators, or
all three with them).

**Minor, same area:** `@cover1` computes to **9** in the prototype and **8** in the engine
(`points()` re-derives the Demand/Missing split with `Math.round`, and the rounding differs).
Two records affected, both far below the bar. Same defect class as the threshold copies —
the prototype recomputing a number the engine already produced.

---

## 4. Copy — the hedges are now longer than the findings

The care is real and it's the product's best quality. But it has passed the point where it
reads as rigour and started reading as apology. On today's drop, **eight of eight cards**
carry all of these, identically:

| Repeated on every card | Count |
|---|---|
| "First look — no trend yet. We check back in 90 days." | 8/8 |
| "No second change we could date and stand behind · one change on its own is a holiday" | 8/8 |
| "· we looked in 6 places" (same number every time) | 8/8 |
| "No purchase intent we could read" | 5/8 |

Roughly **half the words on the drop are the same four sentences repeated**. Recommendation:
**a condition that is true of the entire drop belongs above the drop, once.** One line under
the count — *"Every name here is a first look; no trend readings yet."* — and delete it from
eight cards. Same for the holiday line.

**On the report, in priority order:**

1. **`(§5.5)`, `(§6.5)`, `PRD §11.3` render on screen** — **B4**. `"The play catalog (§5.5)
   is a product decision the engine does not make."` appears on **117 reports**;
   `"Generated on Promote (§6.5). Nothing generates it yet."` on 117;
   `"Scores neutral and lowers confidence. PRD §11.3 — this is the designed behaviour, not a
   zero."` on 103. These are notes-to-self. Delete or rewrite.
2. **`RECOMMENDED PLAY / No play recommended`** — a titled, empty block in the most valuable
   space on the report, directly under the headline. Hide the section when there's no play.
3. **`WHAT THEY'VE SWITCHED ON — WE COULDN'T TELL WHAT THEY'VE SWITCHED ON`** — the heading
   repeats itself, in caps.
4. **Three contradictions on one report** (`@pantheorganizer`):
   - Card: *"First look — no trend yet."* Report, same creator: *"GATE · PASS — **Audience
     up 0% this year**."* A missing reading rendered as the number zero — the exact defect
     `trajectoryOf()` was written to kill, still live in the gate rows.
   - *"Nothing built, nothing attempted — clean slate"* sits directly above *"Found it:
     YouTube channel / Website / Podcast."*
   - *"Their posts land reliably"* — an unsourced qualitative claim, which is the one thing
     decision 99 forbids.
5. **The 4-item "cannot settle" paragraph** (73 words) and the *"platform subscriptions are
   only visible through partner APIs we do not have"* rows — correct, but they are the
   longest text on the report and they describe what Scout *didn't* do.
6. Screen-reader nit: every Sources row announces its name twice (the `sr-only` label on the
   toggle duplicates the visible `<b>`).

**The rule I'd apply:** *state a limit once, at the scope where it's true.* Cohort-wide
limits go above the list. Creator-specific limits go on the creator. Nothing states a limit
twice on one screen.

---

## 5. Source coverage — Substack is checked, never read. Medium doesn't exist.

**Confirmed from `config/probes.json`:**

- **Substack** appears only as a **guess place under the Newsletter inventory item**
  (`{handle}.substack.com`, `substack.com/@{handle}`), alongside beehiiv, Buttondown and
  Ghost. Its only job is to answer *does a newsletter exist?* so Missing can earn
  `verified_absent`. **Scout never reads a Substack's content, subscriber count, or
  comments.**
- **Medium is not in the engine anywhere.** Not a probe, not a hub, not a deny-list entry.
- The admin panel listing "Substack" as a *platform* alongside TikTok and YouTube overstates
  this considerably (see item 7).

**The decision you actually need to make.** There are two different asks hiding under
"broader source coverage", and they have very different costs:

| | What it buys | Cost | Verdict |
|---|---|---|---|
| **More places to check for absence** (Medium, Patreon variants, Shopify domains, Kajabi, Whop) | Missing gets more falsifiable, confidence denominator grows | **Cheap** — a JSON entry each, no new code, fetching is free | **Do it.** Highest ratio of credibility to effort in the product. |
| **More places to read demand from** (Substack comments, Reddit, X replies, podcast reviews) | Demand stops being structurally inert | **Expensive** — each is a different auth story, and Demand is where the wall lives | **Don't broaden. Fix the one you have.** |

**Recommendation: bake in only what proves absence; pull demand from one source, properly.**
Demand's problem is not breadth, it's that its two sources reach almost nobody —
YouTube covers 6 of 20 in the original cohort, and Reddit is one credential away from
working. **Setting up `REDDIT_CLIENT_ID` / `REDDIT_CLIENT_SECRET` before tomorrow is the
single highest-value hour available**, because it turns 5-of-8 "no purchase intent we could
read" into real numbers, and Demand is the pillar the entire pitch rests on.

X specifically: not worth building. No keyless read path exists any more, the paid API is
priced per-seat, and §11.3 forbids scraping. **Remove it from the admin panel rather than
implying it.**

---

## 6. Budget ceiling — off by roughly 475×

**What the admin panel says:** `$2,400/month` ceiling, `$1,615 spent in July 2026`,
`+8% on June`, and a ledger of Discovery $214 / Sweep $96 / Probe $702 / Study $603.

**What `data/costs.jsonl` actually records** — 14,829 rows, every run ever, all on
2026-08-06:

```
TOTAL SPEND, ALL RUNS, ALL TIME:      $3.4089
  judge   (claude-opus-5)             $2.4951   233 calls
  classify(claude-haiku-4-5)          $0.9137   648 calls
  HTTP fetches  11,913                $0.0000
  API calls      1,924                $0.0000
distinct creators                     86
```

**Every figure in the panel is invented, and the shape is inverted.** The ledger's most
expensive line is Probe ($702) — which is HTTP fetching, and costs **exactly zero**. The
Sources screen states the truth two clicks away: *"fetching is free and the bill is
judgment."* The admin panel teaches the opposite.

**Real unit economics, which are a much better story than the fiction:**

- **$0.0396 per creator, fully studied** ($3.41 / 86)
- **~$0.011 per creator** on the tuned run of 20 (memory, 6 Aug)
- A 58-creator brief, end to end: **~$2.30**
- 100 creators/day, every day: **~$120/month**

**Recommendation.** Replace the whole card with measured numbers and drop the ceiling by two
orders of magnitude — presets of `$50 / $250 / $1,000`, spent `$3.41`. Then the sentence
you get to say on stage is: *"the entire cohort you're looking at cost three dollars and
forty-one cents."* That is a far stronger claim than a plausible-looking $1,615, and it is
the one claim in the product you can prove from a file.

Rewrite the ledger to the real split: **Discovery + Sweep + Probe = $0.00 (fetching is
free) · Study = $3.41 (73% judgment, 27% extraction).**

**Also in this panel — B3, the demo-killer.** The bar reads **25** (correct, read from
`meta.scoreThreshold`), but the preset buttons are **70 / 74 / 78 / 82** and the caption
says *"78 is where it starts."* None of the buttons is pressed. **Clicking any one of them
sets the threshold above the highest score in the cohort and empties the drop to zero** —
and §6.1 deliberately makes an empty drop look considered, so it will look like a feature
while the demo dies. This is the fifth surviving copy of the old 78. Presets should be
`20 / 25 / 30 / 35`.

**And the denominator is wrong:** *"8 of 116 clear it in the house brief today."*
`adminView` calls `S.poolFor()` (all 116 records across all five briefs) instead of
`poolForBrief()`. The house cohort is **58**. The drop screen says 8 + 27 + 23 = 58 on the
same data. Two screens, two answers.

---

## 7. Merging Sources and "Where Scout looks" — agreed, and it's urgent, not cosmetic

They are not two views of one thing. **They are two different lists that contradict each
other**, two clicks apart:

| | Admin › Where Scout looks | Sources |
|---|---|---|
| Contents | 6 chips: TikTok, Instagram, YouTube, Substack, Reddit, X | 11 sources, 28 places |
| Missing from it | own site, YouTube Data API, store platforms, membership, Apple Podcasts, link hubs | — |
| Contains fiction | **X** (no probe exists) | — |
| Misrepresents | **Substack** as a first-class platform | correctly: 1 of 6 newsletter guess-places |
| Cost claim | *"Turning a platform off **stops the spend on it**"* | *"Switching one off **does not save money** — fetching is free"* |

The cost claims are **flat contradictions**, and Sources is the one that's right.

**Recommendation: delete the Admin card entirely and link to Sources.** Not merge — delete.
Sources is the better screen by a wide margin: it's derived from the same catalogue shape as
`config/probes.json`, every row states what it proves and what switching it off costs, and
it already handles the two hard cases (Reddit *built, not connected*; Instagram *never
conclusive*). The admin chips are a hand-maintained second copy that has already drifted —
the same defect class as the four threshold copies and the two house-brief texts.

Admin then has **three** controls, and the deck line becomes *"Three controls: what the
organisation may spend, who is in, and where the bar sits — plus Sources, which is its own
screen because it's the most interesting one."*

---

## 8. "Worth the call" — the phrase has two definitions and neither is on screen

**This is the biggest gap in the review, because it's the thesis.**

### 8a. It is never defined in the product

*"Anyone worth a call"* appears in the UI exactly twice: as a **tab label** and inside the
house brief's description. There is no `?`, no receipts, no definition anywhere. A room sees
the phrase, forms its own idea of what it means, and judges the eight names against that.

### 8b. The two definitions in play don't match

| Source | Definition |
|---|---|
| PRD §110 / §624 | *"Big audience, no business, under pressure."* |
| The engine's `houseBrief` (after the Fit fix) | *"They make something clippable, in a format they can repeat, in a category people actually want."* |

The **first** is the score (Demand + Missing + Pressure). The **second** is the Fit gate.
They are answering different questions, and both are correct *for their own job* — but the
tab note on screen shows only the second, while the eight names below it were ranked by the
first. So the screen explains its list with the wrong half of its own definition.

### 8c. Nothing says Scout is continuously running

Grepped the whole build. The only continuous-run language is one sentence buried in the
new-brief confirmation (`app.js:304`): *"First names tomorrow morning — and every morning
after that, until you pause it."* Nobody in a demo will see it. Today's drop presents as a
page that exists, not as output that arrived.

### 8d. Recommendation — one definition, three placements

Write it once and put the same words everywhere:

> **Worth the call** = someone with an audience that is already asking to buy, nothing built
> to sell them, and a visible change in how they're working — checked against 28 places, and
> only counted when we could prove it.

Then:
1. **Above the drop, every day, permanent:** *"Scout looked at 58 people overnight. Eight
   are worth the call."* — this is where the cron claim lives, and it costs one line.
2. **On the `?` beside the tab:** the definition above, in receipts form (§6.11 already
   mandates receipts-not-definitions — so show *this creator's* four numbers).
3. **Reconcile PRD §110 with the engine's `houseBrief`.** Pick one sentence. The score
   version is the honest one because it's what actually ranks the list; the format version
   belongs on the Fit gate, labelled as the gate.

**Open decision for you, and it's a real one:** *worth the call* currently means *worth
Paradium's call* — a monetization-gap judgment. It does not mean *good creator*. If the room
hears it as the second, every name on the board looks arguable. Saying which one you mean,
out loud, in the first thirty seconds, is worth more than any UI change in this list.

---

## 9. Showing the system work — you already built it, in the wrong place

**The Run-a-name scanning panel is the single best thing in the build for this.** Watching
`YouTube channel → not there · we looked in 3 places`, `Newsletter → not there · we looked
in 6 places`, `Store → looking…` resolve one row at a time is exactly the "behind the
scenes" demonstration you're after. It exists, it works, and it appears on **one screen that
currently returns the wrong person**.

**Three places to put it, cheapest first:**

1. **Replay it on the report** (~1 hour). The report already has the full check record —
   *33 places, looked at once each, 3 Aug 26–6 Aug 26*. Add a **"Watch the check"** button
   next to it that re-runs the same row-by-row animation over the stored rows. Nothing is
   faked: it's a replay of a real record, and you can say so. This is the highest
   value-per-hour item in the whole review.
2. **A run banner above today's drop** (~1 hour). *"Last run 04:12 today · 58 creators ·
   1,847 places checked · $0.94."* Every number is derivable from `observations.jsonl` and
   `costs.jsonl` — nothing invented. This makes the drop read as **output** rather than as
   a page, and it carries the cron claim from item 8 for free.
3. **The live scan** (open question 21). Don't attempt this before tomorrow. §11.4 measured
   it at ~85 seconds for twenty creators, **half of it politeness delay between requests to
   one host** — so it can't be sped up honestly, and a log scrolling faster than anyone can
   read is the theatre §6.10 exists to prevent. Option 1 gets you 90% of the effect with
   none of the risk.

**One honesty note on all three.** The thing that makes this compelling rather than
decorative is that it shows *misses*, not just hits. `not there · we looked in 6 places` is
the sentence that proves the system. Don't hide the rows that came back empty — they're the
product.

---

## 10. Report simplification

The report is currently **~1,100 words for one creator**, and it repeats its central fact
three times: the card says *"No newsletter, store or membership"*, FIRST LOOK says *"No
newsletter, store or membership"*, and MISSING lists all three again with places counts.

**Cut, in order of return:**

1. **Delete `RECOMMENDED PLAY` when empty** — a titled empty block in the best position on
   the page. (−1 section, −25 words, removes `(§5.5)`.)
2. **Delete `FIRST LOOK`** — it is the card's headline restated on the page you reached *by
   clicking the card*. (−1 section.)
3. **Collapse `WHAT THEY'VE SWITCHED ON`** behind a summary line. All four rows are
   permanently `could not resolve` for structural reasons (partner APIs). Four rows saying
   "we can't see this" is the longest block on the page and carries no finding. One line:
   *"4 items can't be settled either way — they're left out of confidence rather than
   counted as gaps."* (−4 rows, −73 words.)
4. **Fix the three contradictions** in item 4.4 — *"Audience up 0% this year"*, *"nothing
   built, nothing attempted"*, *"their posts land reliably"*. These cost credibility, not
   just words.
5. **Normalise the pillar figures** to one format (item 3).
6. **Move the check-record summary up**, directly under the score. *"33 places, 3–6 Aug"* is
   the most persuasive sentence on the page and it is currently the last line.

Target: **~600 words, one claim stated once, evidence attached to each.** The order the PRD
already specifies — Demand → why they're on this list → Pressure → Missing — is right and
shouldn't change.

---

## 11. Open floor — five things that would show power, ranked

1. **The "who else was looked at" board is your strongest asset and it's buried below the
   fold.** Fifty names, each with a score and the gate's own words for why it was rejected.
   No competitor screen does this. **Lead with it** (see item 1, Beat 0) — but it *cannot*
   be shown until B2 is fixed, because half its rows currently contradict themselves.

2. **B2 in full, because it's subtle and it's on your best screen.** Under the house brief,
   rejected rows read:

   > *"This brief asks for **Anyone worth a call**. Nothing visible here shows **college
   > football** content…"*
   > *"This brief asks for **Anyone worth a call**. The brief sets a **25,000 YouTube
   > subscriber floor**…"*

   The house brief has no subscriber floor and is not about college football. **29 of 58**
   house-cohort records carry a Fit verdict written against another brief's prose, and
   `gatesFor` prints the house brief's *name* in front of the other brief's *reasoning*.
   A room reads that as the model hallucinating. **Fix: either re-run Fit for the house
   cohort against the house brief text, or suppress `fit.why` on the house tab and print
   only the gate name.** The second is ten minutes and safe.

   A further **13** records read *"the model pass did not run, and Fit is a judgment — no
   model, no verdict"* — an internal error string, lowercase, mid-sentence, on screen.

3. **Two creators on the board undercut the thesis on sight.** `@forensicdetailingchannel`
   is in today's drop at score 25 with **169 followers**; `@ratchetsandwrenches` is rejected
   with **18**. "Big audience, no business" is the claim, and the board shows two-digit
   audiences. Either raise the audience floor for the demo cohort or be ready for the
   question.

4. **TikTok avatars expire in ~48 hours.** The seed was exported 2026-08-06 22:17; the
   signed URLs carry `x-expires` around 2026-08-08. **Fine for tomorrow, dead by Saturday.**
   If the demo slips a day, **re-export the seed the morning of** or the board renders as
   initials. (It degrades gracefully by design — but it looks like a broken app.)

5. **`data/costs.jsonl` records 1,255 `TypeError` rows and 163 `401`s.** Worth a look after
   the demo, not before — but per decision 122, *a silently failing model call is
   indistinguishable from a successful one that found nothing*. Some of the 13 "model pass
   did not run" records are probably these.

---

## Suggested order of work, if there's one evening

| | Item | Time | Why now |
|---|---|---|---|
| 1 | **B3** — threshold presets 70/74/78/82 → 20/25/30/35 | 5 min | One click kills the demo |
| 2 | **B2** — suppress cross-brief `fit.why` on the house tab | 15 min | Unlocks your best screen |
| 3 | **B4** — strip `(§5.5)` / `(§6.5)` / `PRD §11.3` from the seed | 15 min | 117 reports |
| 4 | **B1** — Run a name matches the typed handle against the 58 | 45 min | The live beat |
| 5 | Budget card → real numbers ($3.41, presets $50/$250/$1,000) | 30 min | Turns a weakness into the best claim you have |
| 6 | Ring → score, not confidence | 20 min | Item 3 |
| 7 | Run banner above the drop (item 9.2) | 45 min | Carries the cron claim |
| 8 | Delete Admin › *Where Scout looks*, link to Sources | 15 min | Removes the X fiction and the cost contradiction |
| 9 | De-duplicate card hedges to one line above the drop | 30 min | Item 4 |
| 10 | Report cuts 1–3 (empty play, FIRST LOOK, switched-on block) | 30 min | Item 10 |

**Not before the demo:** Reddit credentials (do it if the hour exists — the payoff is
large), the live scan (open question 21), the §13 / rewind PRD reconciliation, the
`@cover1` rounding mismatch.
