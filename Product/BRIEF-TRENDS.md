# Scout · Trends — design brief

**Status:** direction chosen. The board opens on **● The tab** — the recommendation, built —
with the four directions it was assembled from kept alongside it for comparison. Visual
exploration only; no functional requirements written yet, by request.
**Board:** `Warhol/App/trends/index.html` (serve `Warhol/App`, open `/trends/`)
**Built from:** the live scan record in `engine/data` — 92 creators, 2 scan days, 14,231 checks,
8,179 comments read. Every number on every screen is counted off that record at page load.

---

## 1 · Job and audience

Two readers, one screen, and they do not want the same thing.

- **The operator**, between drops. Wants to know which gaps and categories are compounding
  so the next brief points at them. Leaves the screen and edits a brief or runs a scan.
- **The principal**, skimming. Wants to know whether the thesis is holding and whether the
  engine is finding more than it used to. Leaves the screen with one sentence they can say
  out loud.

Both are served by the same underlying counts. They differ in density, not in data — which is
why this is one tab with a strong opening statement, not two tabs.

Mode: **Operate**, with a Read lean in the opening screenful.

## 2 · The constraint that decides the design

Scout's whole identity is that it does not claim what it has not earned. `verified_absent` is
a different fact from `not_found`. The trajectory gate in `engine/lib/score.js` refuses to call
a direction until two looks are **90 days** apart, and 92 of 92 creators currently read
*"no trend yet — our two looks are 1 day apart, the trend needs 90."*

The record is **2 days old**. A tab named Trends is therefore the single easiest place in this
product to break its own rule, and the first screen anyone would ship — two points and a line
through them — would be a claim the engine itself would not sign.

**So the shared thesis across all four directions: the tab opens as a census that states its
own age, and every time-shaped claim is visibly unearned rather than filled in.** Day 2 of 90
appears at the top of all four. That constraint is not a limitation to design around; it is the
most differentiated thing this screen can say.

## 3 · What the data actually supports today

Confirmed available, counted, and already on the board:

| Dimension | Source | Today's read |
|---|---|---|
| What is missing across the market | `inventory[].state` | Membership 61 confirmed absent of 92 · Store 45 · Newsletter 38 · Podcast 37 |
| What is unreadable (≠ missing) | `state: not_found` | Store 14 · Newsletter 12 · Own website 12 |
| Gaps that co-occur | derived | Membership + Store on 36 creators — one conversation, not two |
| What audiences ask for, verbatim | `score.demand.signals[].quote` | 73 asks · 38 asking to buy |
| Where creators are | `surfaces[].platform` | TikTok 72 · YouTube 62 · beacons 6 |
| Pressure showing | `score.pressure.parts` | cadence decay 13 · abandonment markers 12 |
| Pipeline throughput | `escalated`, `entersDrop` | 92 read → 58 escalated → 14 into a drop |
| Cost of the read | `checkRecord` | 30,751 observations · 14,231 checks |

**Not available, and not faked anywhere on the board:** content type, format, hook, per-post
engagement, "what users react to most" in the reaction sense. Scout reads pages and comments,
not posts-as-content. Getting that would be a new engine pass — worth deciding separately, and
noted in §6.

## 4 · The four directions

### A · The ledger — *"What the record says today"*
Table-forward, dense, operator-grade. Three states per item counted separately, a proportion
bar across the 92, and a **Movement column that is visibly locked**: a hatched chip reading
"day 2 of 90" where the trend arrow would be. Cheapest to build, hardest to argue with, least
exciting in a room.
**Strongest for:** the operator. **Weakest at:** the principal's one sentence.

### B · The gap map — *"The shape of the gap"*
One column per creator, one row per buildable thing, sorted on the bit-pattern of what is
missing so the market resolves into blocks. 552 cells, each one a real check, each one
hoverable to a named handle. Hatched cells for "would not answer" are drawn differently from
absences because they are a different fact. The most Warhol image in the set, and the only
direction where nothing is aggregated away.
**Strongest for:** seeing structure and picking targets. **Weakest at:** anything about time.

### C · The ask — *"What people are asking for"*
Leads with the audience's own sentences, not our count of them. A four-step read
(30,751 things read → 8,179 comments → 73 asks → 38 asking to buy), each bar encoding
*share of the step above* rather than raw magnitude, then a wall of verbatim attributed quotes
round-robined across ask types. Emotionally the strongest and the most quotable in a pitch.
**Strongest for:** the principal, and for anyone selling this. **Weakest at:** density.

### D · The drift — *"The record, over time"*
Ninety day-columns. Two are drawn. Eighty-eight are outlined and empty, at the same scale as
the ones that are filled. The empty field *is* the design: it is the size of what Scout does
not know yet, with an "88 days" countdown and a named list of what day 90 unlocks. Ships with a
clearly-labelled sample toggle so the shape of a filled record is judgeable now.
**Strongest for:** honesty, and as a standing proof the engine is running.
**Weakest at:** being useful this month.

## 5 · The decision — ● The tab

**Operator-first, map-led.** Built and on the board as the default view.

| Order | Section | From |
|---|---|---|
| Header | The age meter — Day 2 of 90, on every view | D |
| 1 | **The map** — 92 columns × 6 rows, 552 cells, each hoverable to a handle | B |
| 2 | **The ledger, as the map's key** — three states, proportion, locked Movement column | A |
| 3 | **Gaps that travel together** — Membership + Store on 36 of 92 | B |
| 4 | **The countdown** — 88 days, and why Movement is shut | D |
| 5 | A handoff card that names what this tab deliberately does not do | — |

**Why B leads and not A.** A is a table of six numbers you could read aloud in ten seconds; it
does not need a tab. B carries the same six numbers *and* the names under them, which is what
the operator leaves the screen to act on. A is B with the identities thrown away — so it stays,
directly beneath the map, as its key rather than as the screen.

**Why C is out.** It is the strongest artefact on the board and the only one a principal would
quote, but it answers *what does the audience want*, not *what is the market missing*. Putting
a wall of pull-quotes under a punchcard makes the tab about neither. It becomes its own
**Demand** tab, and the recommended tab links to it rather than pretending it does not exist.

**Why D is a section, not a screen.** The 90-column field is a month-six view. Today it earns
the header meter and the countdown; the chart itself moves into this tab once the record has a
shape worth drawing.

**The consequence to accept:** this tab is built for the operator. The principal gets the
header, the countdown, and one quotable line — not a screen composed for them. Inverting that
(C's funnel and a hero quote on top, map below) is a different product, and it was not chosen.

## 6 · Open decisions — none of these should be invented by a builder

0. **The trend unit — the one that blocks functional requirements.** Same-creator drift (needs
   a stable panel re-read on a cadence; strongest claim, most engine work) or market-level mix
   over time (works with a changing creator set, weaker claim, nearly free). The screen is
   identical either way; the sentence it can say on day 90 is not. **This is the next
   decision.**
1. **Does the engine start reading content?** Everything on this board is monetisation-gap
   data. "Top content trends / content types / what people react to" needs a post-level pass
   the engine does not have. Separate decision, separate cost.
2. **Is Trends brief-scoped or global?** The record currently spans four briefs; the board
   reads all of them at once. Per-brief slicing changes the header, the counts, and the
   emptiness of day 2 considerably.
3. **What is the trend unit?** Same-creator drift (needs a stable panel re-read on a cadence)
   or market-level mix over time (works with a changing set, means something weaker). The
   engine can do either; they are not the same claim.
4. **90 days, or a lower bar for market-level claims?** The 90-day gate exists for
   per-creator trajectory. A market-mix claim across 92 creators may be sayable sooner — but
   deciding that is an engine call, not a design one, and the screen must not quietly pick a
   softer number than the reports use.
5. **Does Trends export?** The principal reading wants a line they can paste; the operator
   reading wants a filter that becomes a brief.

## 7 · Found while building, worth a look

The verbatim wall in direction C surfaces a classifier problem that the aggregate numbers hide:
several comments tagged `points_at: store` are not purchase intent at all — *"Yum, I might make
this tonight!"* and *"This will be for dinner, this Saturday!!"* are enthusiasm, not demand for
a storefront. Nothing on a count-only screen would have shown that. A Trends tab that quotes
the record back is, incidentally, the best QA surface the engine could have.

## 8 · Scope of this pass

Concept board only. Real Scout chrome (`alloy.css` + `scout-v52.css`), real rail, both themes,
tooltips on every mark, a table escape for the map, one authored motion moment on direction
switch, no horizontal document overflow at 375px. **Not** wired into `App/scout` — nothing
in the shipping app was touched. Chart palette is three marks re-stepped off Alloy's
`--teal-d` / `--lilac-d` / `--butter-d`, validated for both themes (lightness band, chroma
floor, CVD separation ≥ 15.2 ΔE, contrast) rather than eyeballed.
