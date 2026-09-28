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

### Phase 3 — done on branch `phase3-flow`

- **#6.** On the drop, `J`/`K` (or the arrow keys) move a highlighted row, `Enter` opens its report, and
  `P`, `W` and `X` press that row's Promote, Watch and Pass. On a report, `J`/`K` step through the series,
  `P`/`W`/`X` press the header's buttons, and `Esc` goes back to the list. A tray opens with focus on its
  first option, so `Enter` confirms. After a decision the highlight moves to the next open name. `?` or the
  *Shortcuts* link opens the list. Keys only press buttons the screen already shows, so a verb the screen
  hides has no key.
- **#7.** "Worked to zero" moved from under the list to the top. It now gives the day's tally (1 promoted,
  2 watched, 6 passed), the next drop time, and links to Promoted and to any watchlist names due within
  7 days.

## Phase 4 — Wayfinding and copy

| # | Problem found | Fix |
|---|---|---|
| 8 | The rail is icons only. Mail, eye and box don't say drop, watchlist and passed. | Show labels at wide widths. |
| 9 | Tier-3 copy has leaked into the product: the New brief intro, the Outreach package ("costs nothing to assemble"), Admin's bar card. The drop shows the engine phrase "No purchase intent we could read", which the rules ban. | Cut each one to the fact. Map the engine phrase to the house term at display. |
| 10 | The model's read is one 60-word sentence with raw numbers (264,818 and 1,717,306 views). | Round the numbers and break it into short sentences where the source allows. |

Each phase ships as its own branch and PR.

### Phase 4 — done on branch `phase4-copy`

- **#8.** The rail is wide, with labels, by default from 1360px, and switches when the window crosses that
  width. Once someone uses the toggle, their choice wins at every width.
- **#9.** Tier-3 copy cut to the fact in these places:
  - The New brief intro, which had a paragraph arguing that a brief is not a search.
  - The Outreach package's "costs nothing to assemble", its not-written note, and its "Scout never sends"
    line. That line now links to the Promoted list.
  - Admin's two paragraphs defending the bar.
  - The "Any word?" note.
  - The outcome notes ("validates the model").
  - "Nobody vanishes" on the Passed page.

  The Outreach back button now names where the package was opened from.
- **#10.** The model's read shortens counts of 10,000 or more (264,818 → 265k, 1,717,306 → 1.7M). Its
  words are the engine's and are not rewritten here.

## Phase 5 — Responsive, and a simpler mobile

Asked for 28 Sep: the layout is sloppy at several breakpoints and nearly unusable on a phone.
Audit each screen at 375, 768, 1024, 1280 and 1440. On a phone, Scout becomes the drop, the report and the
three verbs, and everything else steps back.

### Phase 5 — done on branch `phase5-responsive`

Found: 18 distinct width breakpoints, each added for one screen. At 375px the page was 473px wide, so
everything was cut off on the right. The header took about 150px over four rows. The score ring sat on
its own line above each name, and the verbs ran off-screen. At 768px the header wrapped into four rows.

- **Phone (≤720px), one consolidated block:**
  - A 56px sticky top bar holds the mark, Admin and you.
  - The lists sit in a bottom tab bar with labels and counts.
  - The page runs edge to edge with a single 16px gutter (the main pane's 24px no longer stacks on top).
  - Brief tabs and Admin's section tabs scroll sideways.
  - Rows put the ring beside the name, with the verbs as a full-width row of 44px targets.
  - Wide tables scroll inside their own box.
  - On a report the tab bar is replaced by a pinned bottom bar (back + the report's verbs, always
    visible), so a decision never needs a scroll back to the top.
- **Tablet (721–960px):** a single-row header (mark, labelled tabs, Admin and account icons), and rows
  keep the ring beside the name.
- **Checked:** no horizontal overflow on drop, report, watchlist, promoted, passed, admin or new brief at
  375, 768, 900, 1024 and 1280. Sign-in fits at 375. Trends still overflows on a phone and is Phase 6.

## Phase 6 — Trends that read at a glance

Asked for 28 Sep: *Where the market is short* is hard to read and could be much richer visually.

### Phase 6 — done on branch `phase6-trends`

Found: one dataset drawn three times (a 636-cell barcode, a table of the same counts, a bar list of
pairs), so the screen took four scrolls to say one thing. The demand callout's headline ("214 people asked
for something that does not exist yet") counted every labelled ask, including asks for things the creator
already had.

Now there is one picture per question:
- **Four stat tiles:** creators read, how many have a gap, the biggest gap, and the most common pair.
- **What the market has not built:** 100% bars, with not there leading and counts inside the bars. A
  table view sits one click down.
- **Gaps that travel together:** a lower-triangle pair matrix.
- **Where each gap is widest (new):** briefs × items, as the share of each brief confirmed without it.
- **N people asked for something that is not there:** asks split into unmet, has it, and could not tell.
  An ask counts as unmet only when the item it names was verified absent on that creator.
- **The every-creator barcode** is kept behind a disclosure.
- **The 90-day countdown** is folded into the age line.

The colors went through the dataviz validator. The not there/built pair passes CVD (ΔE 15.2 light, 17.9
dark), normal vision and contrast in both themes. The heatmaps use one violet ramp per theme (5 steps,
monotone, light end ≥ 2:1). Could not tell stays a hatch, not a third hue. Every mark has a hover/focus
tooltip. Checked at 1440 and 375 in light and dark, with no overflow.

Also fixed: the rail's resize listener missed the first width crossing after a load.

## Phase 7 — One system for the report

Asked for 28 Sep: in the report, the graphs, the summary and the type are all over the place. Streamline
them into one scale, one chart style and one reading order.

### Phase 7 — done on branch `phase7-report`

Measured before: 25 distinct text styles on one report, across three families. Arial came from buttons
that never inherited the app font. Two rules pointed at font variables that do not exist (`--body`,
`--display`; the real ones are `--ui` and `--disp`), so they silently fell back to whatever font
surrounded them.

- **Eight type roles:** title 38, heading 17, figure 24 (display font); lead 17, item 15/600, body 13.5,
  meta 12.5, label 11 caps (body font). Quotes and work titles moved to the body font. The fit's reason
  went from 12.5px display to 13.5px body, so the read and the fit balance. Every button inherits the app
  font. The page now uses 12 family/size pairs, all on the scale; the display sizes beyond the roles are the
  score rings and avatar initials.
- **One section header:** the butter, lilac and teal bands, a colour per section with no meaning a reader
  could name, are now one neutral band, and the eyebrow says what the section is.
- **One data colour for charts:** Output's months are pale built-green and the selected month is full
  green (it was butter with a violet selection, and violet means "not there" elsewhere). Audience uses the
  same green. The growth figure is rounded (+89,641 → +90k).
- **Checked:** light and dark at 1440, and 375 with no overflow or console errors.
