# Scout — making it more intuitive

**28 Sep 2026.** Based on a walkthrough of the running app (`App/scout/`, after the P0 merge) at 1280×800,
checked against PRD v1.6 and the copy rules in `CLAUDE.md`.

The job, from PRD §3: *open Scout, work the drop to zero, close Scout.* Each item below either removes
something that makes the evidence look wrong, or removes a step between the user and that loop.

## Phase 1 — Trust: the evidence has to look right

| # | Problem found | Fix |
|---|---|---|
| 1 | The report's Demand section showed the same comment 4 times ("I bought a rock rake…" on watchweswork), counted as 4 people. | Remove repeated quotes before showing them. |
| 2 | The report's verbs ignore state. Someone already on the watchlist still shows **Watch**. | The report's buttons match the list the person is on: watched → *Stop watching*, passed → *Put back in the drop*, promoted → *Outreach package*. |
| 3 | The counts disagree: the drop says 9 cleared the bar, Admin says 10 of 65. | Use one definition for both. |

### Phase 1 — done on branch `phase1-trust`

- **#1, fixed in the display.** Quotes are shown once each. "N people asked where to buy" counts distinct
  comments when the seed holds them all. For example, pantheorganizer went from 144 to 41, joshuaweissman
  from 569 to 23, and watchweswork from 4 to 1. The engine phrase "No purchase intent we could read" now
  reads "Nothing we could read asked to buy".
- **#1a, found on the way.** The like counts beside quotes were invented by `likesFor()` from audience size
  and quote rank. The seed stores no likes, so they are removed.
- **#1b, fixed in the engine (`cb8198f`).** `project()` keeps one reading per comment. The seeds were
  rebuilt from the observation log as it stood at each original export time (log rows after that moment
  hidden, clock pinned), so only the creators with repeated comments changed. Before the fix, that rebuild
  matched the shipped files byte for byte, apart from one timestamp 5 ms off. Scores fell where duplicates
  had inflated them: pantheorganizer 44 → 39, joshuaweissman 30 → 16. Home Cooking's drop went from 6 to
  3. `App/trends/trends-data.js` was **not** rebuilt. It comes from per-creator snapshots dated 7 Aug and
  still counts duplicates.
- **#2, fixed.** The report's verbs follow the list the person is on. Passing or watching from a report
  returns you to the list you came from, not always the drop.
- **#2a, found on the way.** *Stop watching* on a seeded watch added the name to Passed and also left it
  on the watchlist. The watchlist now drops anyone passed or promoted today.
- **#3, fixed.** Admin leaves out names already on a list, as the drop does, so both say 9.

## Phase 2 — Close the loop

| # | Problem found | Fix |
|---|---|---|
| 4 | Promoted people vanish. `promotedList()` exists but no screen shows it, so "what they said" (PRD §8) has nowhere to be recorded once the day rolls over. | Add a **Promoted** list to the rail, with the date, who promoted them, and the outcome. |
| 5 | Undo only exists on the drop's decided row. Promoting from the report goes straight to the outreach package with no way back. | Show one short undo toast after every Promote, Watch or Pass. |

### Phase 2 — done on branch `phase2-loop`

- **#4.** Added a **Promoted** list in the rail, between Watchlist and Passed. Each row shows the date, who
  promoted them, and the recorded outcome ("No word yet", "Replied 14 Aug 26", "Declined … · reason"),
  with *Open the report* and *Outreach package*. The report's back button and 1-of-N stepping work from it.
- **#5.** Every Promote, Watch and Pass, from the drop or the report, shows a toast with **Undo** for eight
  seconds. Undo clears the decision and returns you to the screen you decided on. From the outreach package
  that is the report or the drop.

## Phase 3 — Work the drop faster

| # | Problem found | Fix |
|---|---|---|
| 6 | Every decision takes a mouse trip across the screen. | Keyboard: `J`/`K` to move, `Enter` to open the report, `P`/`W`/`X` to promote, watch or pass. A `?` overlay lists the keys. |
| 7 | Clearing the drop has no ending. | A done state: the drop is clear, and here is what's due on the watchlist. |

## Phase 4 — Wayfinding and copy

| # | Problem found | Fix |
|---|---|---|
| 8 | The rail is icons only. Mail, eye and box don't say drop, watchlist and passed. | Show labels at wide widths. |
| 9 | Tier-3 copy has leaked into the product: the New brief intro, the Outreach package ("costs nothing to assemble"), Admin's bar card. The drop shows the engine phrase "No purchase intent we could read", which the rules ban. | Cut each one to the fact. Map the engine phrase to the house term at display. |
| 10 | The model's read is one 60-word sentence with raw numbers (264,818 and 1,717,306 views). | Round the numbers and break it into short sentences where the source allows. |

Each phase ships as its own branch and PR.
