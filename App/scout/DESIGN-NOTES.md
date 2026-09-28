# Scout v5.8 — a scan is work, and work does not unhappen

**7 August 2026.** A fresh brief's scan used to be thrown away on every view
change and restarted on the render it came back to. Leave the tab, come back,
and the names arrived again one at a time from zero — and in live mode that was
a second model call and a second real ladder, money spent to be told the same
thing twice. Two new-brief tabs could not both exist, because there was one
`state.scan` slot for the whole app.

Now `state.scans` is keyed by brief, `go()` no longer stops anything, and a
scan you walk away from keeps running.

## The old note was right about the wrong thing

v5.6 argued that resuming was the dishonest option: `clearTimers()` killed the
tick, and a screen resuming from a stranded step number claims progress nobody
made. True — but the lie was the *counter*, not the resume. A step that only
moves because a timer moves it is wrong the moment the timer stops.

So the clock replaced the counter. The seeded scan stores `tickFrom` and
derives where it is from wall time whenever it is read, which makes it correct
at any moment, viewed or not:

    step = clamp(floor((now − tickFrom) / SCAN_TICK) + 1, 0, rows)

Away ten seconds, ten seconds have passed. Away a minute, it is finished —
because it would have been. Nothing accumulates, so nothing can be stranded,
and a browser throttling background timers changes when the screen repaints and
never what it says.

The live scan needs no such argument. The engine really is working while you
are elsewhere, so the stream stays open and simply paints nobody: `scanShown`
is set by the render that draws a scan and cleared by the one that doesn't, and
`paint(id)` is a no-op for anyone not watching. The work never drags the view
back to itself.

## Timers belong to the scan, not to the screen

`later()`/`clearTimers()` exists to kill view animations on navigation — which
is precisely what had to stop. Scan timers are plain `setTimeout` handles held
on the scan record and cleared only by `stopScan(id)`, which navigation never
calls.

## Across a reload

`scans` joined `PERSIST`, sanitised on the way out:

- **seeded** — rows dropped (they are a pure function of the brief's own words;
  `resumeScan` rebuilds them with `scanRows`), `tickFrom` kept. It resumes on
  the clock. This cut ~60KB per brief out of sessionStorage.
- **live, mid-run** — the stream belonged to the page that opened it. Names
  already off the wire were really read and are kept as a finished list; a run
  that had not produced one starts over. Written down per `checked` event, not
  at the end.
- **probing** — dropped. The health check is cheap to ask again.

## The one that bit during the build

`startScan` painted before arming its 2.5s health-check fallback. That render
ran `resumeScan`, which judges a probe by whether it still has a timer, saw an
empty list, read it as abandoned and restarted it — `/api/health` every three
milliseconds, forever. Timers are now armed before the paint in both places
that have this shape, and an orphaned probe is judged by age (>6s) instead.

## Verified in the browser

- Watchlist and back: 9 names / 351 places, unchanged. Previously 0.
- Left mid-flight at 2 names, back 11s later at 9 — not restarted, not faked.
- Reload mid-flight: 2 names → 5. Reload after finishing: all 9, and **zero**
  health calls, so a reload no longer re-runs a brief the engine already ran.
- One `/api/health` per brief, not one per visit.
- Four briefs open at once, each holding its own scan.
- sessionStorage 121KB → 1KB.

---

# Scout v5.7b — the scan is wired to the engine

**7 August 2026.** The brief you type now starts a real run. One model call
proposes names from those exact words, the real ladder checks every one over
real HTTP, and the browser watches it happen. `engine/bin/serve-live.js` serves
the prototype and the engine from one origin, so there is no CORS, no proxy and
nothing for a demo machine to get wrong.

## What is on the wire, and what is deliberately not

    status    'proposing'   one model call, ~15s, announced rather than hidden
    proposed  every candidate AT ONCE, because one call produced them at once
    checked   one per creator, as its ladder finishes — the genuinely live part
    done      the bill

**No score, no gate, no verdict crosses the wire.** The screen makes no
judgement, and an endpoint that offers one is an invitation to start printing
it. Per creator: handle, audience, places checked, an avatar URL, `proposed`.

**The candidates are revealed all at once and that is on purpose.** Staggering
them would look better and would be a small lie about how discovery works — it
is one call, not a crawl. What is serial is the *reading*, and the meter now
carries two numbers so the gap between them is visible: **9 pulled · 3 read**.

## The fallback is the feature

Served by plain `http-server`, from `file://`, or by a machine with no key,
`/api/health` fails and the seeded scan runs exactly as before — no message, no
degraded badge, nothing anyone in a room could notice. A demo that dies because
a server was started from the wrong directory is not a demo. There is a 2.5s
deadline on the health check for the same reason: a hung request must not
become a blank screen.

Three failure paths, three different answers, because they are three different
facts:

- **`failed`** (no key, model refused) → seeded scan, silently.
- **`onerror` with rows already on screen** → stop where it stopped. That run
  genuinely happened; throwing real work away and replacing it with a canned
  list would be the worse lie.
- **`onerror` with nothing on screen** → seeded scan.

## Two footers, because the two modes claim different things

Seeded keeps the old promise word for word — *first judged names tomorrow
morning* — because for a standing brief that is true. Live cannot say it: the
ladder is running now and the verdicts exist within the minute. What is true
there instead is that **nothing has checked that a handle belongs to the person
the model meant**, which is why every row is marked proposed and no score is
shown. The live footer says that, and it is a stronger sentence than the one it
replaced.

## What the live runs revealed about the demo copy

Live, a brief is only as good as what the web will let the engine read, and that
is not evenly distributed:

- **Car / repair / restoration** — excellent. chrisfix 11M, mightycarmods 4.3M,
  mymechanics 3.6M, vicegripgarage 2.6M, junkyarddigs 1.3M. Clean YouTube
  identities that match the handle.
- **Home cooking** — excellent. joshuaweissman 11M, maangchi 6.5M, junskitchen
  5.2M, chefjeanpierre 2.5M. Same reason.
- **NFL media** — poor, and it was in the demo copy until this run. patmcafeeshow
  24, danorlovsky7 1k, kylebrandt 16, three with no readable audience at all.
  Those careers live on X and television, where the engine can read almost
  nothing. The numbers are honest; the screen is not one to show.

The rule that falls out: **live briefs want people whose whole business is a
YouTube channel under their own name.** Anyone whose audience is on X, or on
television, reads as a rounding error no matter how famous they are.

---

# Scout v5.7 — how a score is built

**7 August 2026, fifth pass.** One screen added: the explanation of the model,
reachable from the account menu and from the foot of every claim on a report.

## The problem

The report already explains itself line by line. Every claim carries its own
points on its own heading, the receipts open underneath, the inventory says how
many places were checked. What none of it answers is the question a new Scout
asks in their first week and an account director asks in the first meeting:
*why is Missing worth more than Demand, and who decided 25 was the bar.*

That is one explanation for the whole product, not one per creator. It was
being given verbally, differently each time, by whoever was in the room.

## Three placement decisions, and the argument for each

**Not in the rail.** The rail is the morning's work — four screens you move
through with a decision at the end. This is a reference you open when a number
surprises you. That is the same argument v5.5 used to move Sources into Admin,
so it takes the same kind of seat.

**Not inside Admin.** Admin is gated on `who.admin`. The model is not an
administrative detail — it is the thing every member is asked to trust eight
times a morning, so it cannot live behind a permission most of them lack.

**Its own screen, plus a link where the question occurs.** Six entries: the
account menu, the foot of Demand, Missing, Pressure and the trajectory gate on
the report, the gate block on a report that did *not* make the drop, and the
bar card in Admin. Each jumps to its own section. The link sits at the **bottom**
of a claim — a reader who wants it has just finished the section and is still
unsatisfied. At the top it would offer an explanation to somebody who has not
yet met the thing being explained.

## Every number on the page is read from the seed

`warhol export` now writes `meta.weights` — the pillar maxima, the absence
table, the four Pressure signals and which of them a first look can reach — so
the help screen renders the engine's live weights rather than a copy typed into
the prototype.

This is the same defect the threshold already taught the project. §5.4b moved
the bar from 78 to 25 and the prototype's own copy did not move with it: the
drop rendered perfectly, said *"20 people were looked at, 6 scored under 78"*,
and showed nothing. **A correct empty state is the one bug you cannot spot by
looking.**

A help screen is the worst possible place to repeat that. A wrong weight on a
report is a wrong number. A wrong weight on the page that *teaches the model* is
a wrong mental model, carried out of the building by whoever read it.

**So there is no fallback table.** A seed exported before this change renders a
panel saying the weights are unavailable and why. The threshold can fall back to
78 because a wrong bar is visible immediately as a drop of the wrong size; a
fallback weights table would render perfectly and be wrong to the one reader who
came to the page *because* they did not already know the numbers.

## What the page says, in order

1. **The shape** — 100 = Opportunity 60 (Demand 25 + Missing 35) + Pressure 40,
   drawn as one bar whose segments are sized by their own weights. The
   proportions are the explanation, so the widths are driven off the numbers
   rather than typed as percentages that could drift from them.
2. **Demand** — the saturating curve, shown as a table computed live: 300 asking
   is worth half the pillar, and it takes thousands to approach the rest.
3. **Missing** — the weight table, sorted, with bars. Then the two rules that
   decide what counts: *"could not find it" earns nothing*, and *missing
   everything is a label, not a number*.
4. **Pressure** — the four signals, each marked readable or needs-a-second-look,
   and the first-look ceiling derived from that rather than stated.
5. **The two gates** — Fit quoting the live house brief, Trajectory with its
   real thresholds, and the paragraph explaining why the gate exists at all:
   every Pressure signal fires harder on someone quietly giving up.
6. **Confidence** — the floor, and what is and is not in the fraction.
7. **What makes the cut** — the four conditions, numbered, on ink.
8. **Where the bar came from** — 78 read off fiction, 25 read off real people,
   and both caveats stated: the cohort had no readable demand, and an earlier
   attempt read the bar off a run whose model calls were failing silently.
9. **What does not count** — half of explaining a model is saying what it
   ignores.

## Defects found while building, and fixed

**The jump link contradicted the section it linked to.** The label was a
template — *"How ___ is scored"* — which made the trajectory link read *"How
this gate is scored"*, and a gate is the one thing on the report that is not
scored. The label is the whole phrase now, not a noun slotted into a sentence.

**Focusing the target cancelled the scroll.** The anchor gets `tabindex="-1"`
and focus so a keyboard lands where the eye does. Chrome cancels a smooth scroll
that has not started animating when something is focused — even with
`preventScroll` — so `scrollIntoView` immediately after it silently did nothing
and the link read as broken. Dropping the focus to keep `scrollIntoView` would
have traded a working link for an inaccessible one; scrolling the container
explicitly keeps both.

**Which element scrolls is not a constant.** `#main` is the scroller at desk
widths and the document is below the layout's breakpoint, so the jump walks up
from the target to the nearest ancestor that actually overflows.

**The scroll is instant, not smooth.** *What makes the cut* is about 4,400px
down; a smooth scroll played a second and a half of the document flying past
before it settled. Smooth scrolling says *you are still where you were, moving* —
this link has just replaced the screen, so there was no continuity to preserve
and the animation was decorating a cut.

**An empty `<th>` collapsed the column the table existed for.** The Missing
weight table left its bar column unlabelled and the column shrank to the width
of its widest bar — squeezing the one comparison the table is there to make.
Naming it *Against the top weight* fixed it. Demand's equivalent table had sized
correctly all along for exactly this reason.

**The jump link went grey on a pigment field.** `--text-3` is tuned to `--panel`
and measures 3.78:1 on teal — and this link sits on the teal *bar* card in
Admin, so the general rule was not hypothetical. It takes the field's own ink
now, like every other primitive that can land inside one, and its focus ring
goes with it.

## Verified

Light and dark, desk and mobile. All six entry points reach the right section.
The pillar bar stacks below 760px and carries the proportion in height instead
of width. The Missing table scrolls inside its own container with no page-level
horizontal scroll. No console errors. The session restores onto the help screen
with its Back button still naming where you came from.

---

# Scout v5.6 — a fresh brief shows its work

**7 August 2026, fourth pass.** One screen changed: the state a brief lands on
the moment you write it.

## The problem

It said **"Scout is looking"** and showed nothing looking — a heading, two
paragraphs, and a promise about tomorrow morning. It was the one moment in the
product where the machine is genuinely working on something the person just
asked for, and it was the emptiest screen in the app.

On stage it is worse than empty. It is the beat immediately after you type a
brief in front of a room, and it hands them a page that says come back tomorrow.

## What it does now

Names arrive one at a time, roughly one a second, up to nine. Each row is the
who-else board's presentation one column shorter: face, name, handle, audience,
and how many places have been checked. Above them a meter climbs — names pulled,
places checked, **still reading**. Below them the promise the old screen made,
kept word for word.

**The hard rule: nothing here is judged.** No score, no ring, no gate, no
verdict, no cleared-or-held-back. These are names being pulled and read, which
is the honest description of what the ladder is doing in its first minute.

This does not contradict §5.4 or the brief-is-not-a-search argument, and the
reason matters. The product never claimed it takes until tomorrow to *find* a
name. It claimed it takes until tomorrow to be willing to *say something* about
one. That claim is intact — and it is now stated on the screen ("none of them is
judged yet", "these are pulled, not picked") rather than implied by an absence.

A search would rank these. This one cannot even sort them: they arrive in the
order the queue reached them, and the footer says so.

## Four decisions inside it

**Teal, and only teal.** In the Alloy field system teal is *counted* — names
pulled, places checked — and never judged. Butter would flag the screen for
attention when there is nothing on it to act on; lilac is the judged field and
would be a straight lie about what these rows are.

**The numbers are summed off the real check record**, not invented on a timer.
A counter that ticks up with no observation behind it is the exact thing this
product refuses to do everywhere else. `scanPlaces()` adds up each candidate's
own `surfacesChecked`.

**The scan is not persisted, and restarts on every open.** A reload that
restores a half-finished scan is claiming progress nobody made — the same
argument `go()` already makes for the replay and for Run a name. It also
happens to be the behaviour the demo wants: you open Scout and it is looking.

**Nine rows at 950ms.** Nine fills a projector without scrolling. 950ms is
slower than the replay's 240ms on purpose — the replay is addresses going past
as texture, these are names a person is expected to read.

## Two small repairs it forced

- **`.prow` collapses to one column under 760px**, which stretched the 34px
  face to full row width — the avatar became a letterboxed crop of somebody's
  forehead. The scan row keeps its face column and drops only the status to its
  own line.
- **The separators needed real spaces around them.** `name·@handle·446k` is one
  unbreakable token — U+00B7 is not a break opportunity — so on a narrow screen
  the line could not wrap and the audience was clipped off the row entirely.

---

## v5.6b — the names are now the engine's answer to the words

**Same day, after Alex asked the obvious question: are these real users matching
what I typed, or made up?** Neither, was the honest answer. Real people, really
checked — but selected from a fixed cohort by keyword, so the *match* was
theatre even though the *data* was not.

Half of that is now closed. `car-detailing-diy-repair-3` was run through the
engine at 15:06 on 7 Aug against the exact sentence the demo types, and exported
into the seed. Typing that brief now streams the engine's genuine answer to it:
chrisfix 11M, thedetailgeek 4M, mymechanics 3.6M, vicegripgarage 2.6M. The
mandate is archived out of the tab strip (`STAGED` in `v52-seed.js`) — its
candidates belong in the pool, its tab would only ask a question nobody can
answer.

The other half is still open and should be said out loud: **the prototype has no
connection to the engine.** A brief typed on stage does not start a run. Closing
that means an endpoint the scan screen can fetch, and that is not a demo-day
change.

### Three repairs the real data forced

- **Dedupe by handle.** A merged seed holds one record per (creator, brief), so
  `@pantheorganizer` — checked under two car briefs — arrived twice in the same
  list. Two honest records, one person; on this screen a name arriving twice
  reads as the machine double-counting.
- **Rank on the mandate, never the handle.** The brief says "work on a machine",
  `@watchweswork` contains "work", and one coincidence of spelling put a 446k
  account above an 11M one at the top of the screen. The brief picks the cohort;
  audience orders it.
- **`Sports › NFL` added to `readBack`.** The seed holds a 20-creator NFL cohort
  and no category rule reached it, so an NFL brief read back as "Any category"
  and the tab said so. Placed *after* college football: a brief about coaching
  staff is a CFB brief in this vocabulary and must not be caught by "football".

### And one run deliberately thrown away

`college-football-insiders-break` was run for real and left out. The engine's
true answer is recruiting beat reporters with readable audiences of 1k, 396,
195, 131, 23, 16, 13, 12 and 2 — honest numbers from a beat that lives on X
where almost nothing is readable, and not a list to put on a projector. Kept in
the engine's log, kept out of the seed. A brief the product answers badly is
worth knowing about; it is not worth demonstrating.

---

# Scout — "Where the money went" now computes its own total

The table rows were already seed-driven. The paragraph under them was not: it
read *"16,912 fetches across Sweep and Probe … 1,244 model calls at Study
depth"*, typed by hand — **two copies of the same four numbers, one of them a
SUM of the others.**

It had already drifted. The paragraph said 13,837 fetches and 881 model calls
while the rows said 16,912 and 1,244, and nothing on screen could tell you which
was right. The paragraph is also the sentence people quote.

**The counts are fields now.** `fetches` / `calls` / `briefs` on each ledger row;
`note` keeps only the clause with no number in it. The row's work column and the
paragraph's total are both rendered from those fields, so the total is
*arithmetic* rather than a claim and cannot disagree with its own addends.

Verified live rather than by eye: setting Sweep to 9,000 and Study to 2,000 in
memory moved the row to "9,000 fetches", the total to 21,776 (9,000 + 12,776) and
the calls to 2,000, from one edit to the data. Back to 16,912 / 1,244 on reload.

`ledgerWork()` falls back to `note` verbatim when a row carries no count, so a
re-exported seed that has not adopted the new shape still renders its own
sentence rather than a blank cell.

**Sixth instance of the calibrated-constant-with-copies defect** in this
product — after the threshold's five copies, the house brief's three, the
watchlist's invented $4.20, and Admin's own "83 creators / six cents". The engine
should write these into `meta` on export the way it now writes `meta.weights`.

---

# Scout — the brief note, the figure, and a token that never existed

## `--text-1` is not a token, and five rules were using it

The brief note's emphasised phrases — *"first look"*, *"second dated change"*,
the two terms the sentence is about — were declared `color: var(--text-1)`. That
variable exists nowhere in `alloy.css` or here; the full-strength text token is
`--text`. So the declaration was invalid, the phrases inherited the set-back body
colour, and they were distinguished by weight alone.

**A misspelt custom property fails silently and looks like a design choice.**
Four more rules had the same typo — `.draftnone b`, `.runmiss`, `.rp-r`,
`.runbar b` — all now `--text`. Worth a grep whenever emphasis looks weaker than
it should: `var(--text-1)` renders as *nothing at all*, not as an error.

## The brief note is a panel, and readable

It was 12.5px on `--text-3` — the lightest text token at nearly its smallest
size, two set-backs stacked on the one block whose job is to explain what the
list in front of you *is*. `--text-3` is tuned for captions beside the thing they
caption; this is three sentences somebody opened on purpose. Now 13.5px on
`--text-2`, in a `--panel-2` container: loose between the tab row and the first
card it read as a caption come adrift, with nothing saying where it started while
everything below it was a panel.

**A close button on the note itself.** The chevron on the tab opens and closes
it, which is correct — and is 500px away by the time you have read to the end, so
the one place you are looking when you are done had no way to be done. Same
`briefinfo` action, so there is one piece of state and the chevron stays in sync
by construction.

## The figure stands rather than floats

`scount.png` on New brief, in a wrapper rather than as a bare `<img>` — the
shadow is a pseudo-element and replaced elements do not have any. `onerror`
removes the wrapper, not just the image, or a missing file leaves an empty
ellipse on the floor.

**A contact shadow, not a drop shadow.** `drop-shadow` traces the outline, which
on a person reads as a light source behind them; an ellipse under the feet reads
as floor. It still breathes — the figure lifts 9px while the ellipse narrows to
84% and fades. **A ground shadow that stays the same size while the thing above
it moves is the tell that makes float animations look pasted on.** No rotation
either: a sticker can tilt, a standing person cannot. Transform and opacity only.

**The hide-below breakpoint is derived, not guessed.** It was 1180, set when the
mark was a 148px sticker beside a 252px rail — which meant the figure never
rendered at 1060. The numbers now: 76px mini rail + 68px of `.main` padding +
720px form + 128px figure + 40px inset ≈ 1032, so it hides below 1040. Under
that it would sit on the textarea, which is obstruction rather than decoration.

---

# Scout — the sticky bar, tightened

Four passes over the Admin jump bar, each one removing something that was only
there to serve the last version of it.

- **Flush to the top.** The gap was `.main`'s own `--s5` padding: that strip is
  scrollport, not bar, so `top: 0` cannot cover it. A pseudo-element paints it in
  the slab colour instead.
- **That strip only paints while stuck.** Harmless until the bar was pulled up
  under the deck — then a 34px slab-coloured block sat over the deck's last line
  and clipped it, on a screen where nothing was scrolling and there was nothing
  to hide.
- **The rule only exists while stuck**, for the same reason: it separates the bar
  from content sliding under it, and at rest nothing is sliding. It is declared
  `transparent` rather than added on `.stuck`, so the bar's height never changes
  when it sticks — a border appearing is a 1px jump in a fixed element.
- **Pulled up under the deck.** `.pagehead` carries `--s4` of padding *and*
  `--s4` of margin, and the bar added `--s3` on top: 44px of nothing between the
  sentence describing the screen and the row for moving around it. Same fix and
  the same reasoning as `.pagehead + .viewswrap` on the drop.
- **The title's width change is instant; only opacity transitions.** Animating
  `max-width` lays the row out every frame, and the row is `flex-wrap: wrap` — at
  narrow widths a growing title can push a pill onto a second line and back
  mid-transition, which is worse than the defect the easing was buying. (Design
  hook flagged the layout animation; it was right.)

## Elsewhere

- **The wide rail wears the full lockup**, the mini rail keeps the mark. Both are
  in the DOM and CSS picks — branching the markup on width puts a layout decision
  in JS and needs a resize listener to stay true. Three layers, each the fallback
  for the one before: lockup → mark → drawn tile.
- **The account glyph lost its field.** `.ini` is the *avatar* component — a
  lilac tile standing in for a picture. With a glyph in it there is no picture
  being stood in for, so it was a coloured chip directly under the unchipped
  Admin gear: two entries in one group drawn as two kinds of object.
- **The drop's deck is one line.** `.deck` caps at 64ch, a measure tuned for the
  paragraph decks on Admin and the watchlist; here it broke a nine-word claim
  away from the timestamp that qualifies it, so the screen opened with two short
  lines reading as two separate statements. The cap is right for prose and wrong
  for a status line.

---

# Scout — the marks, the rail foot, and a broken theme switch

## The account menu's theme switch was collapsed by a colour chip

`.tsw` is Alloy's theme switch. A 12px legend swatch on the trends screen was
also named `.tsw`, declared after the vendored file, and won on source order — so
`display: block` and `width/height: 12px` landed on the Light/Dark control: the
pill shrank to a 12px box and its two buttons overflowed on top of the "Digest"
label below. **The one control that changes how the whole app looks was broken
by a colour chip on a different screen.** Renamed to `.tswatch`.

Third time this class has appeared here — v2's notes list `.pill`, `.sub`,
`.top`, `.lbl`, `.chip`, `.panel` and `.gate` all renamed for the same reason.
**Grep `alloy.css` before naming anything new.**

## Admin has a sticky jump bar

Four sections, about four screens tall, with an eleven-row source catalogue at
the bottom — "switch Reddit on" was a scroll with no landmarks.

**A jump list, not tabs.** Nothing is hidden and nothing is a mode: all four
sections stay on the page, scrolling still works, pressing one moves you. Real
tabs would have hidden three quarters of the screen to save a scroll, on the one
screen where seeing the spend beside the bar is the point. Plain anchors, so the
browser's own scrolling does the work and a keyboard user gets it free.

Three things that were not free:

- **The bar bleeds to the panel edges** and carries a full-width ground. A sticky
  element with transparent gutters lets the content it covers show through at the
  sides — a sliver of table sliding under a floating pill, which reads as a
  rendering fault.
- **Every target reserves the bar's height back** via `scroll-margin-top`, or a
  jump puts the heading underneath the thing you just pressed.
- **Active tracking is a scroll listener, not an IntersectionObserver.**
  `render()` replaces the whole DOM on every click, so an observer would hold
  references to dead nodes unless disconnected and rebuilt each pass. The
  listener rebinds with the DOM it belongs to — the pattern `bindTabs` and
  `bindCompact` already use. The last section stays lit at the bottom of the
  scroll, where no heading is level with the bar and an unlit bar would say you
  are nowhere.

## Rail foot, and the marks

- **The divider moved above Admin.** It sat between Admin and the account, which
  drew the line through the middle of the group instead of around it — Admin read
  as the last of the four jobs with a rule under it, the exact thing moving it
  down was meant to stop saying. One rule; everything under it is settings and
  self. Admin also loses the outline: framing it gave it the four jobs' weight
  again. It still takes the teal fill when current, because that *is* a state.
- **Inactive frames at half strength.** `--line-hi` is the app's divider weight,
  tuned to separate panels on the work surface; at 44px in a quiet column it drew
  six boxes competing with the icons inside them. Half over the rail, full on
  hover — where you have already aimed and the frame is confirming, not guiding.
- **The account initials became a generic user glyph.** "AG" is an avatar
  stand-in, and Scout has one member — a two-letter monogram identifying the only
  person who can be looking at it.
- **Empty drop → the notebook** (`scount_notes.png`) in place of the `gr-duo`
  block. A rounded rectangle of colour above a sentence reads as a component that
  failed to load, and §6.11 spends a paragraph arguing a thin day is the machine
  working — this is the screen that can least afford to look broken.
- **New brief → the compass** (`scount_compass.png`). The pairing is the point:
  the notebook means nothing was written today, and writing a brief is the
  opposite act — choosing a direction to look in, which is what the deck already
  says in words. The same mark on both would be wallpaper.
- **Float marks are sized by height, not width.** The compass is 128×257 and the
  notebook 205×246; a shared width renders one half again as tall as the other.

---

# Scout — brand assets in place

**The rail mark is `scount icon.png` / `scount icon darkmode.png`**, picked in JS
rather than swapped in CSS. The mark is navy on transparency and vanishes on the
dark rail, and a `background-image` swap cannot tell us when a file is missing —
reading the theme in `railHTML()` gives one `<img>`, one error path, and a dark
variant that is a *file* rather than a filter, so the peach shadow survives (it
does not on the sign-in lockup, which is filtered). The gradient tile with the
typographic S is now the fallback: `onerror` puts it back, so a missing asset
degrades to what the surface looked like before the asset existed.

**The Field Notes mark floats bottom-right of New brief**, drifting 11px and 3°
over seven seconds. Decorative, `aria-hidden`, `pointer-events: none`, and gone
below 1180px where the form is already using that space. It is on this screen
and no other: a decorative object that appears everywhere is furniture, and here
the metaphor is exact — writing a brief is writing a field note — filling
emptiness that is real rather than manufactured.

### The bug it exposed: `.viewfade` was breaking positioning app-wide

The mark laid out **400px too high**, then snapped into place. Cause: the
entrance animation on `.wrap` animated `transform`, and **a transformed element
is the containing block for its `position: fixed` AND `position: absolute`
descendants**. `.wrap` is what every screen renders into, so for the 0.18s of
every view change, anything positioned against the viewport or against `.main`
silently anchored to the content column instead.

Fixed at the root: `.viewfade` animates **opacity only** now. Nothing is lost —
the 4px rise was carrying the whole wrapper, and the rows inside already travel
6px each under `rowin`. The wrapper fade is the crossfade between screens; the
movement belongs to the things arriving.

### Two rail icons were the same glyph

`drop` was three horizontal rules; `passed` was three horizontal rules with an ×
on them. At 18px in a 44px tile, four pixels apart, they were indistinguishable —
and they are the two most-visited screens in the product.

- **Drop → an inbox tray.** It is what arrived for you this morning.
- **Passed → an archive box.** The word is exact: a Pass is not a delete, every
  row keeps its reason and the thing that would bring it back (§8). The glyph
  that means *filed*, not the one that means *discarded*.

Tray, box, eye, magnifier, gear: five silhouettes, no two alike.

**Inactive tiles took an outline, no fill.** Stripped to icons they were unbounded
glyphs floating on the rail — nothing said where one target ended and the next
began, and a 44px hit area you cannot see is one you aim at by guessing. The
frame draws the target without claiming a state; the fill stays reserved for the
current item, which is the only thing there that *is* a state.

---

# Scout — the sign-in logo

**Live.** The gate renders `v5.4/assets/Scout_Logo.png` (332×158, RGBA), the navy
script lockup with "Paradium.AI" set under it, replacing the S disc, the "Scout"
wordmark and "Origination desk" — three drawn elements standing in for one real
brand asset.

**The swap runs off the image's own `onload`, not an `onerror` fallback.** The
drawn lockup is what the markup renders, and a logo that arrives replaces it. The
obvious build — show the image, swap in a fallback if it 404s — flashes an empty
header for as long as the request takes to fail, which on a slow connection is
the first thing anyone sees of the product. Both paths were verified with a
stand-in file before the real one landed, and the fallback still works: rename
the PNG and the gate is exactly what it was, with no gap and no flash.

**Dark mode knocks it out to white** with `brightness(0) invert(1)`. That works
because the export is on transparency — every non-transparent pixel goes white,
so a version exported on a white background would become a solid white slab
instead of white lettering. It flattens the peach drop shadow, which is the
honest trade for one file; for the shadow back, add a light variant beside it and
swap the `src` per theme rather than filtering. Inverting instead (`invert(1)
hue-rotate(180deg)`) is worse, not better — it maps the navy to cream and the
peach shadow to dark blue, which puts the shadow *behind* the panel's own value.

**`assets/` also holds `scount icon.png`** — the standalone S at 93×111 — plus
four unused exploration marks (compass, notes, backpack, the full sheet). The
icon is the obvious candidate for the rail's brand disc, which is currently a
lilac→teal gradient tile with a typographic S in it. Not swapped: that disc is a
documented design decision (§4.6, the one element whose job *is* to be an
identity), and replacing it is a separate call from replacing the gate.



# Scout v5.5c — the rail, the tabs, and some delight

**7 August 2026, third pass.** The rail collapsed, and a handful of things
around it.

## The rail is icons by default

**76px instead of 252px**, which hands 176px back to the work column on every
screen. Alloy's own `.railcol` is 78px wide — the labelled version was the
departure from the toolkit, so this is a return rather than an invention.

**The labels do not disappear, they move.** Each item keeps its text in the DOM
— that is its accessible name — and shows it as an ink flyout beside the icon on
hover *and on keyboard focus*. A `title` attribute would have been one line of
markup and mouse-only, which is the defect the confidence sweep had before v5.4
made it real text.

**The rail does not widen on hover.** A sidebar that grows when the pointer
crosses it reflows the page under the cursor every time you travel diagonally to
reach something else, and it makes the wide state impossible to keep. Expanding
is a button, and the choice is persisted — a preference, not a fidget.

Four things followed from the collapse:

- **The counts became corner badges**, solid ink with a 2px cut-out ring. They
  are the reason the rail is worth looking at, and a translucent fill tuned for
  the teal current item vanishes on the five transparent ones.
- **"New brief" lifts off the rail.** Stripped to a 44px tile it was a 1px
  outline and a thin plus on the rail's own `--panel-2` — the faintest mark in
  the column, for the only control in it that makes something. It sits on
  `--panel` now. Still not `btn--primary`: v5.4 demoted it for good reason.
- **It also takes a current state**, like every other destination. It opens a
  screen and was the only thing in the column that never went dark when you
  were on it, so writing a brief looked like nothing was selected.
- **Admin moved to the foot**, grouped with the account and the width control.
  It sat fifth under the four screens that are the morning's work, which put a
  settings page in the list of jobs. Same argument that moved Sources into
  Admin, one level up.

**Two bugs caught while building it.** Opening `overflow` on the *slab* to let
the flyouts escape squared off its 30px corners — only the rail's own overflow
needed to open, since a flyout beside a 44px tile is still well inside the slab.
And the whole mini block is now scoped `min-width: 961px`: below that the rail is
a horizontal bar, where "narrow" has no meaning and a flyout opening to the right
of an item opens over the next item along.

## The selected brief tab is `gr-duo`

Lilac into teal, at full pastel strength, with ink on it — Alloy's actual
gradient rather than the first attempt, which shaded `--ink` toward violet and
teal and produced a gradient you have to be told about.

The gradient sits on `.vgroup`, not on the chip, so it runs **continuously**
across the tab and the chevron joined to it: two elements, one field. Contrast is
the toolkit's audit unchanged (ink on lilac 11.61:1, ink on teal 7.60:1, and the
gradient only ever sits between the two), and hover **lightens** to the `-h`
pair — darkening a pastel under dark text costs ratio every time.

**The house brief is no longer dashed.** The dash meant "nobody wrote this and
nobody can edit it", but a dashed outline already means PROVISIONAL in this
product — it is what a guessed account wears, what a switched-off source wears,
what "+ New brief" wears. On the tab holding the default drop it read as
unfinished. The distinction survives in words, in the note behind the chevron,
which can also say *why*.

## Arrival, and lift

**Lists arrive one row at a time.** 45ms apart for the first eight, then
everything after shares the eighth delay — a ten-name drop settles in about
0.6s and a fifty-row Passed list does not spend two and a half seconds
assembling itself in front of someone who came to read the bottom of it. Head
first, then tabs, then rows, so the screen resolves top to bottom.

It **only fires on a view change**. `.viewfade` comes from `state.animate`, which
only `go()` sets, so deciding on a creator or opening a disclosure re-renders
silently. This app replaces the whole DOM on every click; an entrance that
replays on every state change is not an entrance, it is a flicker.

**The verbs and the tabs now lift with a shadow.** Alloy's `.btn` has raised on
hover since the toolkit shipped — `translateY(-2px)` plus `--el-2` — and the
verbs, the most-pressed controls in the product, moved 1px with nothing cast
under them, which reads as jitter rather than lift. Same token now, so a verb and
a button rise off the same surface by the same amount; `:active` returns to the
plane at `--el-1`. Reduced-motion keeps the shadow and drops the travel.

## The sign-in fine print is one line

Two paragraphs — the credential, why it is printed, what it is for, and where
invitations come from — under a form whose fields are already filled in. The
password stays, because the only thing that print has to survive is somebody
clearing a field. The seat model is stated in Admin, next to the invite button,
which is where it is acted on.

---

# Scout v5.5b — a pass over the screens, element by element

**7 August 2026, same day, after Alex went through the app pointing at things.**
Eleven changes. Two of them turned up real defects underneath.

**Two numbers were invented, and one of them was wrong by 70×.** The watchlist's
cost strip computed `list.length * 4.2` — a per-creator monthly figure nobody
measured — and printed **$12.60 a month** to re-check three names, two clicks
from an Admin panel stating that the entire system has ever spent **$4.76**. The
real figure comes off the ledger's Study row (§11.4: looking is free, the model
calls are the bill): $4.76 ÷ 83 creators = **$0.06 each**, so three names cost
**$0.17 a month**. Admin's own copy had drifted the same way — "across 83
creators — about six cents each" was typed beside the ledger that holds both
numbers, and had read "86 creators — about four cents" until the seed re-ran.
Both are derived now, through one `perCreatorCost()`. **This is the fifth
instance of the calibrated-constant-with-copies defect in this product.**

**Every list in the app was indented 40px by the browser.** `.whylist`,
`.preslist`, `.invlist`, `.trendlist` and two others set `display: flex` — which
removes the bullets — and never zeroed `padding-inline-start`. So the rows sat
40px right of the label introducing them, reading as a sub-list of something,
and the indent had nothing left in it to explain itself. The lists that were
correct (`.accts`, `.srclist`, `.ck`) had each been fixed individually as they
were built. Now stated once.

The rest:

- **The breadcrumb is gone from every screen.** `Scout / The report` cost ~44px
  of the first viewport everywhere, permanently, to say the page title a third
  time — the rail already marks the current view and names it, and the h1 sits
  directly below. Its one real job was going back, and it always went to the
  drop, even from the watchlist; the report and the outreach package both carry
  a labelled button naming where they actually came from.
- **The drop's head is white again.** The butter field was defensible and still
  wrong: a full-width pigment slab is the loudest object on the front door,
  shouting a fact the h1 and the count already state. The palette stays where it
  separates *kinds* of claim — the report's four bands, Admin's two knobs,
  counted-versus-judged on the outreach package. A page title has nothing to be
  distinguished from.
- **The report's back button and creator pager share one row**, pager hard
  right. They had stacked because `.rpt-topbar` is the header's whole left
  column and every child of it is a row; the fix is a wrapper around the pair,
  not a direction change on the column, which would have put the creator's name
  beside their accounts.
- **The `.sepwhy` line is cut.** "Nothing on either page links the TikTok to the
  YouTube, so it is not added in" appeared on 34 of 146 platform rows in **two**
  variants — the same sentence with the names swapped. Boilerplate; a note about
  our merge logic on a list whose job is to let someone go and check the
  creator; and defending arithmetic no screen ever does. `separate` still keeps
  the rows apart, which was the part doing work.
- **The card's platform line moved inside the identity block**, so it sits under
  the handle rather than under the avatar. Same information; the indent is what
  says which thing it belongs to.
- **The brief-info ⓘ became a chevron.** Two problems, only one of them
  contrast: an ⓘ says "there is an explanation" and never says what pressing it
  does, and the open state darkened an already-dark tile by 6% under an icon at
  80% opacity. The rotation carries the state now.
- **The selected brief tab takes a gradient** — the one place in the row where
  one is safe, since it is a single dark value moving slightly and the text
  never crosses a contrast boundary. Dark gets its own endpoints: `--ink` is
  darker than `--panel` there, so the light theme's lift-toward-violet made the
  selected tab the *lightest* chip in the row.
- **The two tab-scroll arrows are gone.** They parked on top of the first and
  last chip — overlapping the selected tab — for a row every trackpad, wheel and
  touch surface already scrolls. They were `tabindex="-1"` precisely because a
  keyboard user does not need them, which is the tell.
- **"Who else was looked at" sits in a panel**, like everything around it. It
  predates the panel treatment; nothing was intended by it being bare.
- **The watchlist head absorbed the cost strip** and lost a paragraph. The strip
  read as an afterthought bolted under the list, and its argument moved behind
  the head's `?` where every other receipt in this product lives.

---

# Scout v5.5 — the door, the settings, and the palette

**7 August 2026, in place over v5.4.** Three asks, and the third turned out to be the
one with a system behind it.

## 1 — The gate is email and password, and there is one seat

v4 signed you in with **Continue with Google**, a button that looked like an identity
check and was a page transition. v5.4 replaced it with **pick your name** from a list of
four members. That fixed attribution — §8 needs to know which human performed the verb —
and broke something else: it described a four-person workspace that does not exist, and it
taught that identity in Scout is a preference rather than a credential. Nobody signs into
a real product by clicking their own face.

v5.5 is `alex.grinshpoon@paradium.ai` and a generated password, both **pre-filled**, with
the credential also printed in the fine print under the form. That is deliberate and it is
the honest version of a prototype gate: hiding a password nobody can recover is a demo you
cannot get into, and pretending the prototype protects something would be the same lie
"Continue with Google" told. What the credential buys is that signing in is an *identified
act*, so every Pass, Watch and Promote has a name on it.

Details that were not free:

- **A refusal is one message for both halves.** "No account with that email" versus "wrong
  password" tells a stranger which half of a guess landed.
- **A refused attempt keeps what was typed.** `render()` replaces the whole DOM, so the
  first build re-read the field values from the seed and came back with the *correct*
  password sitting in the box — silently undoing what had just been rejected. What was
  typed now lives in `state.gateEmail` / `state.gatePass`; `readGate()` captures it before
  any render the gate survives, which is also why **Show** no longer reverts an edit.
- **The seed collapsed to one member**, and the five `by:` fields across `passedSeed` /
  `promotedSeed` / `rewindCalls` that named Marisol or Theo were retargeted to Alex — all
  fourteen now read the same name. Otherwise the Passed list attributes decisions to people
  the Admin table says do not exist.
- **Invite is on the Admin screen, disabled, and says NOT YET BUILT.** The seat model is
  the product decision; drawing a live button that does nothing would be the
  Continue-with-Google defect one screen along.

## 2 — Sources folded into Admin

Sources had a permanent seat in the rail beside the four surfaces that are the morning's
work, and it is a screen you set once and revisit when a credential lands.

There is a second reason, and it is the interesting one. v5.4's notes record deleting an
Admin card called "Where Scout looks" because it was a hand-kept second copy of the source
catalogue that had **already drifted from the Sources screen in four ways at once** —
wrong count, a platform no probe reads, a guess-place listed as first-class, and a cost
note that directly contradicted Sources. Deleting the copy was right; keeping the original
one click away in the rail left the same shape of mistake available. It is one section of
one screen now, so there is nothing left to drift.

Admin is four things: the spend, the bar, the seats, and where Scout looks — grouped into
sections, because four undifferentiated cards is a pile. A session persisted with
`view: 'sources'` is coerced to `'admin'` on restore; otherwise it matched no branch and
fell through to the drop with the crumb saying Drop.

## 3 — The Alloy field system, reapplied

**The finding.** ALLOY's first section is called *Fields*: four grounds, each with a job.
By v5.4 Scout used **two of them, twice** — `p--teal` on "Worked to zero" and the rail's
current item — out of a toolkit built around them. Everything else had become a white
panel with an 11px coloured label on it. The palette was quoted rather than used.

The jobs are the toolkit's, and Scout already sorts its content the same way:

| ground | job | where it lands in Scout |
| --- | --- | --- |
| **butter** | attention | the unworked drop's head, the budget going out now, Pressure |
| **teal** | counted | Demand, Missing, the bar, the empty day, the signals half of outreach |
| **lilac** | judged | Fit, the recommended play, the gate claim, the draft first contact |
| **ink** | action | the primary button, and nothing else |

Ink stays a button and never a card, which is the toolkit's own rule: a pigment that
becomes a button stops meaning anything.

**The claim bands are the load-bearing move.** v5.1 stripped the coloured borders off the
report's four claims, arguing that the heading and the card's dot marks already carried
the field colour, so a border said it a third time. That argument is right and this is not
a reversal of it — the colour is still stated exactly once per claim. What changed is
*where*: it was 11px of `teal-d` and `butter-d` letterspaced type, a hue you have to go
looking for, on four consecutive white cards that scanned as one grey wall. As a
full-strength band across the top of each claim it is legible at arm's length, and the
four claims read as four different kinds of thing before a word of them is read —
teal, lilac, butter, teal down the page. The band is full-bleed by negative margin;
`.ch` is already the first child of every claim, so no markup was restructured.

**The drop's head takes butter, and teal on an empty day.** Not a decoration swap: §6.11
spends a paragraph arguing that a thin day is the machine working, and butter on "nothing
cleared the bar" would be the interface flagging for attention the exact state the product
is proudest of. Teal is counted — the bar ran, the answer is nobody, the answer is
trustworthy.

**Gradients.** Three exist and each has one job. `gr-mesh` is the page behind the slab —
ambience, never under text — and was already in place. `gr-duo` (lilac into teal) returns
as the toolkit's **empty-state mark**: a shape with no content in it, which is the only
place a gradient can be purely a mood. It goes on the three states where the drop has
nothing to show, and *not* on "Worked to zero", which is already a teal field — a gradient
on a field is two colour decisions arguing on one object. `gr-veil` is deliberately **not
reproduced**: it fades from transparent at 18%, so on anything short the text lands in the
unveiled band at 1.54:1, and nothing in Scout is tall enough to use it honestly.

**Text on a field is the field's own ink, at two strengths and no more** — full, or 80%.
Never `--text-2` / `--text-3`, which are tuned to `--panel`: ink-at-66% measures 3.78:1 on
teal, so the failure is real rather than theoretical. Alloy handles its own `.sub-t` and
`.note` and knows nothing about `.lab`, `.adfine`, `.seg`, `.track`, `.ct` or `.invbox`,
so those are mapped explicitly in the new FIELDS block. Focus halos take the field's
opposite; on butter the white halo was nearly the ground.

**Fields do not invert between themes**, so the bands and cards look identical in dark and
the ink on them stays ink. That is the toolkit's design — the slab inverts, the pigments
do not.

### Two defects found while doing it

- **A broken CSS comment was eating the next rule.** The member-picker block opened
  `/* … rather than a */` and the rest of the sentence sat at the top level as a selector,
  so the parser swallowed the whole `.signin-who` rule as part of the invalid block. It
  went with the picker. Worth remembering as a class: a broken comment does not break the
  comment, it eats the rule after it, and nothing on screen says so.
- **The outreach signals wrapped inside 172px** with a third of the panel blank beside
  them. `bulletRow` borrowed the report's three-column inventory row — mark, 172px item,
  status — and emitted an **empty** status cell. `invlist--bullets` drops the column that
  has nothing in it.

### Known, not caused here — ~~open~~ FIXED 7 Aug 2026

`v5.4/warhol-seed.js` carried **slugs in `mandate.title`**, so the brief tab row read
`car-detailing-diy-repair-2` where it used to read *Car detailing and DIY repair*.
`briefs` falls back to `m.name` — the engine's slug — when `m.title` is absent or
un-merged, exactly as its own comment predicts.

Fixed on the 7 Aug re-export by passing the four `--title` flags to `merge-seeds.js`, with
the wording taken from v5.3's seed rather than re-authored, so the tabs read the same words
they read before.

**This regresses on every re-merge that forgets the flags, and it is silent** — the seed is
valid, the tabs render, they just render the wrong string. The full command is in
`../../AUDIT-SCAN-DEPTH-2026-08-07.md` §A. `export-seed.js` sends the slug to the screen by
design (the PRD is explicit that a slug is not a display name), so the titles live only in
the merge step and there is nowhere else to look them up. The house brief is deliberately
NOT given a title: it renders *Anyone worth a call* from `weights.json` through the app, and
titling it would override the one name §6.1 says nobody gets to edit.

---

# Scout v5.4 — design notes

**Built 6 August 2026, the evening before the demo.** v5.3 with four defects removed,
each of which would have broken the demo on its own. v5.3 is untouched in
`prototypes/v5.3/` and is the fallback. Seed md5 identical to v5.3 apart from the three
copy strings in B4.

### B1 — Run a name ignored what you typed
`app.js` read `W.runANameResult`, a single hardcoded record, and rendered it for every
input. Typing `https://x.com/mkbhd` returned `@itshunterfriesen`, score 39, with his face
on it. **Fixed** with `runIndex()` / `runSubject()` — an exact match on the handle against
the 58 records already in the seed, `@` and punctuation stripped. Deliberately **not
fuzzy**: "did you mean" on a name search is a guess, and a guess is what the wall exists to
keep out. A miss gets a new `miss` stage that says Scout has not looked at this one yet and
it goes into tonight's run — a true sentence about a continuously-running product, and the
first place in the interface that says the product runs continuously at all.
`startScoring()` resolves **before** it animates: running the check sequence and then
producing a stranger is worse than not running it, because the animation is the part that
claims work was done.

### B2 — the house brief printed other briefs' Fit reasoning under its own name
Rejected rows read *"This brief asks for **Anyone worth a call**. Nothing visible here shows
**college football** content."* Measured cause, and it is not a copy bug: **all 58 house
records carry a Fit verdict copied from another brief, and none was judged against the house
brief's own words.** merge-seeds.js duplicates the engine's fit block onto every
(creator, brief) record. So the house drop is gated by four other briefs' Fit tests — which
is why the highest scorer in the seed, `@itshunterfriesen` at 39, is absent from *Anyone
worth a call* for not doing college football.

**Fixed by attribution, not suppression** — `fitOwner()` finds the sibling record under
another mandate carrying a byte-identical fit block (candidate ids are brief-scoped, so this
is a lookup, not a heuristic), and the gate reads *"Judged against Car detailing and DIY
repair, the brief this name was found under. Not re-judged for the house brief."*
Suppressing the sentence would have hidden the selection problem. **The real fix is an
engine job:** re-run Fit for the 58 against the house brief text. Needs a key.

### B3 — the bar control was set to numbers that empty the screen
Presets read 70/74/78/82 against a live bar of 25, so no button was ever pressed and every
one of them set the bar above the highest score in the cohort. Worst case of this class,
because §6.1 designs an empty drop to look *considered* — it fails without looking like a
failure. **Fixed** by deriving the presets from `S.THRESHOLD` rather than typing a fifth
copy of a constant that had already been found in four other places. The denominator was
wrong too: *"8 of 116"* counted every record in the seed; the house pool is 58, which the
drop screen already said. Now computed as `dropFor + rejectedFor`, which partition the
brief's pool by construction and therefore cannot drift from it.

### B4 — PRD section numbers were rendering on the reports
`(§5.5)` on 117 reports, `(§6.5)` on 117, `PRD §11.3` on 103, plus one in `app.js`.
Notes-to-self reaching the product. **Zero `§` now render on any of the six views or the
report** — verified in the DOM, not by grepping source.

### Also
- `.formacts .btn { white-space: nowrap; flex: none }` + `.inp { min-width: 0 }` — a flex
  item's min-width is auto, so the input claimed the row and broke "Run it" across two lines
  inside a round button. Both halves are needed; either alone still fails.
- Enter **does** submit the run form. A synthetic keydown cannot trigger implicit form
  submission, which is why automated testing said otherwise — `requestSubmit()` fires the
  real handler. Not a bug.

---

## Second pass — the seven that followed

### The budget is measured now
Every figure read off `engine/data/costs.jsonl` (14,829 rows, every run ever):
**13,837 fetches → $0.0000 · 648 Haiku classify calls → $0.9137 · 233 Opus judge calls →
$2.4951 · total $3.4089 across 86 creators**, about four cents each. Ceiling presets moved
from 1,200/2,400/4,800 to **50/250/1,000**. `U.money` keeps cents now — `Math.round` was
turning the most persuasive number in the product into "$3".

The old ledger's largest line was **Probe at $702**, which is HTTP fetching, which costs
nothing — teaching the exact opposite of the Sources screen's *"fetching is free and the
bill is judgment"* two clicks away. It now reads $0 / $0 / $0 / $3.41.

### Admin lost a card; Sources kept its job
*Where Scout looks* was **deleted, not merged**. It had drifted from Sources four ways at
once: 6 platforms against 11 sources and 28 places; it listed **X**, which no probe in the
engine reads; it called **Substack** a platform when it is one of six guess-places under
Newsletter; and it said *"turning a platform off stops the spend on it"* while Sources said
*"switching one off does not save money"*. Admin's deck now says **three controls**.

### The ring draws the score
Measured before: @pantheorganizer 38 → 83% sweep, @missunderstoodpod 34 → **100%**. The best
creator on the board had an emptier dial than the fourth-best, because the sweep was
confidence — `n/6` falsifiable checks, seven possible values, drawn as if continuous. Now
`score / meta.scoreCeiling`, monotonic with rank: **38→95%, 34→85%, 33→83%, 27→68%**.
`scoreCeiling: 40` is the *observed* ceiling in the seed, not the theoretical 100 — Demand's
25 points are structurally unreachable for this cohort, so drawing 38/100 renders the top
creator as a third-full ring. Confidence keeps the colour band and the screen-reader line.

### Four contradictions on the report, not three
Fixing the first three exposed a fourth.
1. `(c.audience.growth90d || 0)` printed **"Audience up 0% this year"** under a gate
   captioned *Rising or steady, never fading* and stamped PASS — the `|| 0` defect
   `trajectoryOf()` was written to kill, alive one function away. Now defers to
   `trajectoryOf()`.
2. **"Their posts land reliably"** was asserted about everybody. Cadence is not derivable
   from a profile fetch. Now *"Posting rhythm not read."*
3. **"Nothing built, nothing attempted — clean slate"** sat four inches above *"Found it:
   YouTube channel / Website / Podcast."* Now reads the inventory it describes.
4. …and with those honest, Pressure's lede still said **"Audience rising while the
   behaviour changes"** directly under *"Audience trend not established"* — claiming the
   reading Trajectory had just said nobody has taken, and diagnosing, which decision 99
   forbids.

Also: `RECOMMENDED PLAY` hides when there is no play; the four permanently-unsettleable
*switched on* rows collapse behind a disclosure with a one-line summary; the subhead stopped
restating itself. **Report 3,032 → 2,440 characters, −20%, nothing removed that was a
finding.**

### One sentence, once, above the list
Eight of eight cards carried *"First look — no trend yet"* and eight of eight carried *"No
second change we could date and stand behind."* Both now state once, above the drop, via
`dropCaveat()` — and both tests require **every** card to match, so the day one card differs
the line goes back on the cards, where the difference is the signal. **Drop 11,279 → 10,317
characters.**

### Watchlist and Passed point at real people
All seven `passedSeed` ids and the one `promotedSeed` id were fictional-cohort ids
(`x_teddy`, `c_otto`, `p_dorota`) absent from the merged seed, so both screens rendered
their empty states and two of six nav destinations led nowhere. Re-pointed at real creators
with reasons read off their own inventory — @richeisenshow really does have a newsletter, a
site and a show; @hayesfawcett really is on 4.4k. A new `watchedSeed` stamps
`status: 'watched'` onto three records.

**Dates stay inside the 3–6 August observation window.** §6.3.1 wants an aged row — *"I
passed someone in March and now I cannot find them"* — and cannot have one honestly: this
cohort was first observed three days ago, so a March pass would assert Scout surfaced them
in March. That is decision 113's backdating in different clothes. The screen demonstrates
recall and the trigger; it cannot yet demonstrate age.

### The drop is output, not a page
A run banner above the list, every figure measured from session 16 of the cost log — the run
that produced this seed, isolated by splitting on gaps over four minutes:
**21:50:41 → 22:02:35, 11m 54s, 5,056 fetches, $1.6071.** Reads *"Last run finished 6 Aug 26
at 22:02 … It runs again at 06:00 whether anyone opens this or not."* This is the first place
in the interface that says the product runs continuously at all — the only sentence that did
was buried in the new-brief confirmation. `checks` is fetches, not places: calling 5,056
"places" would inflate the catalogue by two orders of magnitude.

### Watch the check
Open question 21 parked the watchable scan on two objections, both about a **live** scan:
it would scroll faster than anyone can read, and a 403 flashing past reads as the product
failing. §11.4 measured the real thing at ~85 seconds for twenty creators with half of that
politeness delay between requests to one host, so it cannot honestly be sped up.

This is a **replay of the stored check record** at 240ms a row — the same rows `recordBody`
prints, in the order they were written, with real URLs. It answers the second objection
head-on: the unreadable rows are shown, in their own mark, at the same speed as the rest.
*"Instagram — could not settle"* going past is the product working. The failure mode was
never showing a 403; it was showing one with no way to tell it from an absence. Three marks,
reusing the inventory's own logic — solid = found, hollow = not there, **dashed** = could not
settle, because an absence is a shape and never a colour. Ends on *"Nothing here was re-run
just now."* Reduced motion gets the finished list immediately.

### Verified
All six views plus the report render, **zero console errors**, and a sweep for
`§` · `PRD` · `undefined/NaN` · `up 0% this year` · `land reliably` · `Nothing built,
nothing attempted` · `No play recommended` · the subhead echo · `$1,615` · `$2,400` ·
`70 74 78 82` returns **nothing** on any view.

---

## Third pass — "worth the call"

### The Demand pillar was contradicting itself
`points()` computes `demand = round(opportunity × 0.66)` — an invented 66/34 split of the
engine's single Gap number, not a reading. So five of the eight cards rendered

```
DEMAND  +15        No purchase intent we could read
```

a number claiming fifteen points of demand beside the sentence saying we could not read any,
on the pillar the whole thesis rests on. **Fixed at the display layer only** — the score is
untouched. When demand is unread the header reads `NOT READ` and Missing carries the whole of
Opportunity, which is where it came from: §5.2 counts an absence higher only when demand
points *at* it, so with no comments the weighting falls back to base and Missing is the
honest owner. A split we cannot evidence is not finer-grained truth, it is two numbers where
the engine had one.

**Verified on all eight reports: the three figures sum exactly to the ring.** 38, 34, 33, 27,
27, 25, 25, 25. §6.2 calls a total that disagrees with what is above it the one bug this
product cannot survive, so this is the check that matters.

### The brief description became two fields
`meta.brief.text` was both the sentence on screen and the text handed to `judgeFit`. That is
why the tab explained a list of eight with the **gate** half of its own definition and said
nothing about why any of them were there.

`description` stays the judge's field, unchanged and uncalibrated-with — rewording it
re-rolls all 58 Fit verdicts, and this exact wording is what moved Fit failures from 6 to 3
with all three remaining ones genuine. `screenText` is new and is what a person reads. **The
split is also the only durable fix for §5.4c:** with one field, the moment anyone improves
the on-screen sentence by mentioning audience or pressure, the judge starts failing people
for facts Missing and Pressure already counted — which is exactly how the two highest scorers
fell off the board. That sentence can no longer reach the judge at all.

### The definition, and why it is in that order
> An audience already there, nothing built to sell it, and work we could build on. The ones
> who move up the list are where we can hear the audience asking, or see something change in
> how they work.

Ordered by what the data supports, not by what the pitch would prefer. Across today's eight:
**Missing 8, Fit 8, Pressure 4, Demand 3.** So the first sentence is the qualifier — every
name on the board clears it — and Demand and Pressure are named as what *ranks* them, which
is the job they actually do. Leading on *"their audience is asking to buy"* would have been
contradicted by five of the eight cards underneath it.

Name unchanged: **"Anyone worth a call."** §6.1 says nobody wrote it and nobody can edit it,
it is already in `weights.json`, the seed, the PRD and the pitch, and the problem was never
the name — it was that nothing defined it.

### The `?` answers with arithmetic, not a definition
Decision 77 forbids a definition behind the `?` — identical on every screen, so every click
after the first is dead. This one is attached to the *brief* rather than to a creator, so the
receipts are the brief's own counted arithmetic, computed at render time from the same
functions the drop uses so it cannot drift from the screen it explains:

```
Looked at 58 creators for this brief. 8 are on the list.
All 8 have an audience and nothing built to sell it.
All 8 clear the format gate — something we could build on.
3 of 8 have demand we could read in the comments.
4 of 8 show a dated change in how they work.
The last two are what ranks the list. The first two are what gets you on it.
```

---

## Fourth pass — UI and information architecture

Measured before and after, same viewport (720px tall, 676px content area).

| | Before | After |
|---|---|---|
| Chrome above the first card | **477px** | **365px** |
| Cards fully visible on load | **0** | **1** |
| Brief tab row | 2 rows, ~110px | **1 row, 39px**, scrolls |
| Drop page height | **6,329px** | **1,982px** |

### The header was seven tenths of the first screen
Three things went. **The deck's second sentence** — *"enough on each card to kill it without
opening"* — a claim about the cards, made above the cards, to someone who can see the cards.
**The tab row wrapped to two rows**, and its wrap point moved with whatever anyone had named
their brief, so the header was a different height depending on the brief list; it is one
scrolling row now, with `flex: none` on the chips because inside an overflow container a flex
item's default `min-width: auto` compresses it instead of overflowing, and a negative margin
bleeding to the panel edge so a half-visible chip reads as *there is more* rather than as a
clipping bug. **And the Worked strip.**

### Worked is gone, and its one useful fact moved
Alex could not say what it was for, which is the finding. The sidebar badge already counts
what is left to decide, *"Worked to zero"* already fires when the list is finished, and a
progress bar over eight rows measures something visible by looking at the eight rows. Worse:
a bar that fills as you work is a **completion metaphor**, and this product's argument is
that a thin day is a good day — so it was rewarding you for emptying the list two lines above
a drop cap that exists to keep the list short. `bar at 25 · capped at 10` was the one thing
worth keeping and it moved into the run banner, where it belongs: a fact about how the list
was *selected*, next to the other facts about how the list was made.

### The rejections were 71% of the drop page
The board ran 1,817→6,329px. The list of people Scout did **not** pick was 4.5× the list it
did, and it was reached by scrolling rather than by choosing — so the page's centre of gravity
was its own rejections. It is behind a disclosure now (*"50 names, with the gate's own
words"*), **not moved and not deleted**: it is the most checkable thing in the product. The
summary sentence above it still states the counts unprompted, so you are told what was
rejected and offered the evidence — the same shape as every claim on the report.

### The ring is one variable now
Making the sweep the score still left colour encoding confidence. Invisible on the drop, where
everyone clears the floor and every ring is teal — and plainly wrong one screen over, where
**@watchweswork rendered on the watchlist as a red ring at 55% fill**, meaning *score 22, half
the checks resolved* and reading as *bad score*. Colour bands on the same number the fill
draws: at or above the bar, or below it. Measured after — drop: 8 teal; watchlist: three
butter at score 22 regardless of 50%, 83% and 100% confidence.

Confidence moved to where it can carry a sentence instead of a hue: the screen-reader line on
every ring, its own column on the who-else board, and words on the watchlist row. **A
qualifier may tint a mark; once it tints the same mark a different variable is sizing, it is
guessing.**

### Two anonymous eights
The sidebar badge is what is **left to decide**; the house tab badge is **how many are in the
list**. Both read "8" on arrival, 200px apart, in the same visual form. They diverge the moment
you decide anything — which teaches the difference, but only to someone still watching. Both
badges now carry the noun in `title` and in the screen-reader text.

### New brief was the loudest control in the application
A solid surface-inverting button at the top of the rail, permanently, for the action taken
least often — while *"Open the report"*, the thing you do eight times a morning, is a button
inside a card. Same defect v5.3 fixed when Watch was solid butter and a deferral outranked the
door to the evidence. Demoted to ghost, with the outline kept: `btn--ghost` alone is
transparent and borderless, which on the rail's own panel reads as a label rather than a
control.

### The report was a dead end
You opened one, decided, and went Back to the drop — which re-rendered the list at the top
and left you re-finding your place, eight times a morning. `state.from` already recorded
which list you arrived from, so the siblings are that list rather than a new concept.
Prev / position / next, in the tall header and again in the sticky bar, following the verbs'
rule that only one set is on screen at a time.

Three details that are the whole difference between usable and irritating. **Position is
stated** ("3 of 8") — two arrows cannot say how much is left, and how much is left is what
decides whether you keep going. **The label is tabular with a fixed minimum width**, so
stepping 8 → 9 of 50 does not shift the buttons under a cursor about to click again.
**Ends disable rather than wrap, and keep their box** — a list that loops has no end, and a
button that vanishes at the end moves the other one.

Run a name is deliberately excluded: its result is one creator, and inventing neighbours
for it would imply a list nobody asked for. Verified: drop 1→8 of 8, watchlist 1 of 3,
passed 1 of 7, run-a-name none.

**Verified:** six views plus all eight reports, zero console errors, the full defect sweep
clean, the arithmetic still sums to the ring on all eight, and the series reads 1 of 8
through 8 of 8.

---

## Fifth pass — the header, against a marked-up screenshot

Alex circled four regions and wrote a note against each. They map to four elements, not four
options.

| | Circled | Note | Done |
|---|---|---|---|
| **A** | the gap between the deck and the tabs | too much space | `.pagehead + .views` pulled up one token |
| **B** | the brief description | hide or collapse, expandable from an icon next to the tab | collapsed behind an ⓘ on the active chip |
| **C** | the run banner | same line as the "8 found", rest behind a click | folded into the deck; details behind the `?` |
| **D** | the first-look caveat | why even show it? | moved inside B |

| | Session start | After pass four | Now |
|---|---|---|---|
| Chrome above the first card | **477px** | 365px | **160px** |
| Cards fully visible on load | **0** | 1 | **2** |

### A — three spacing tokens between two related things
`.pagehead` carries `--s4` of padding *and* `--s4` of margin, and `.views` added `--s5` on
top: roughly 60px of nothing between the sentence saying what the list is and the tabs that
choose it. `.pagehead + .views` now pulls back one token. Scoped by adjacency rather than by a
page selector, and safe because `.views` only ever renders on the drop.

### C — the count and the run are one sentence
They answer the same question — *where did these eight come from* — so they share a line, and
only the clock time earns space on it. Everything else (creators, checks, minutes, spend, bar,
cap, next run) went behind the `?`, reusing the **receipts popover** rather than inventing a
tooltip: those numbers *are* receipts, so they get the mechanism this product already uses
everywhere else for exactly that.

### B + D — one collapsed block, on the tab it describes
The brief description (3 lines) and the first-look caveat (2) were both permanent, both
reference, both identical every day — and between them they pushed the first creator off the
first screen. They are one block now, default closed, because they answer one question: *what
am I looking at.*

The toggle sits immediately after the **active** chip, not at the end of the row. In a row
that scrolls, an icon parked at the end scrolls away from the tab it belongs to; attached to
the active chip it is always adjacent to what it explains and it moves when you change tabs.
Verified across briefs — the row renders `chip · chip(active) · ⓘ · chip · chip · chip`.

**On D specifically — the caveat stays, but not on the front door.** Decision 113's
requirement is that a first look *says so*, and it still does: on the report's trajectory row,
on the card whenever the condition is not true of every card, and here one click away. What
113 forbids is a screen implying a trend it has not measured. Nothing here implies one — the
product simply no longer volunteers the disclaimer to the same person every morning.

### The cut edge, and the icon that read as a neighbour
Two follow-ups from looking at it on screen.

**The row now says it continues, twice, because there are two questions.** The **fade** says
*there is more*; the **arrow** says *you can do something about it*. Both are driven by
measured scroll position, so a row that fits shows neither — an arrow pointing at nothing is
worse than no arrow.

Three things that were wrong on the first attempt and are worth keeping written down:

- **The arrows printed themselves over the first chip.** Inset at `--s6 - 12px` they ran to
  50px while chips begin at `--s6` = 34px, so the left one covered the name of the list you
  were looking at. They live in the **bleed gutter** now — 26px wide at 4px inset, ending at
  30px, measured clearance of 4px to the first chip, never over content.
- **The fade reached too far and made the active chip look disabled.** It is solid across the
  gutter and only softens over the first few pixels of chip. A gradient tuned on pale chips
  washes out the one chip that is dark by definition.
- **`.vchip--joined` lost to `.vchip` on source order.** Both are single classes, so
  specificity ties and position decides — declared above `.vchip`, the pill radius won and the
  "joined" edge stayed round, which is precisely the disconnected look the rule exists to fix.
  Moved below. Measured after: gap 0px, both halves 38.5px, right radius 0, left radius 0,
  identical background.

**The ⓘ is part of its tab, not a peer of the tabs.** One group, one outline, flat corners
where they meet, the active chip's ink. `height: auto` inside the group — its standalone form
sets 30px, which left it 8.5px shorter than the chip it was supposedly part of. Two separate
`<button>`s still, because a button inside a button is invalid and unreachable by keyboard;
only the shape is shared.

The arrows are `tabindex="-1"` on purpose: the chips are already focusable in order and
tabbing to the last one scrolls the row natively, so these would be two extra stops that do
nothing a keyboard cannot already do. They are a pointer convenience and they say so.

**Verified:** six views plus all eight reports, zero console errors, defect sweep clean,
arithmetic sums to the ring 8/8, series 1 of 8 → 8 of 8, the ⓘ toggles both ways and follows
the active tab, both arrows present and clear of the chips, and the last-run receipts carry
every number that came off the banner.

---

## Sixth pass — New brief and Run a name

The New brief flow had never been opened in this review. It held the worst defect found all
session.

### Submitting an empty brief quoted the placeholder back as the member's own words
`var text = (ta && ta.value.trim()) || '<the placeholder>'`. Submit with nothing typed and the
next screen renders, under a heading that reads **YOU WROTE**:

> *"Someone to fill our gap in Southern college football. Insider access — beat writers,
> people close to local coaches and recruits…"*

Three sentences the member never wrote, attributed to them, above six derived chips that all
looked right — a complete, plausible, entirely fabricated brief.

Same defect family as `(growth90d || 0)`: **a falsy fallback substituting an invented value
for a missing one.** But this one lands in the single place the interface promises verbatim
attribution. A product that will not let a model say a creator has no newsletter without
checking six URLs cannot put words in its own user's mouth. Empty no longer submits; the
message is inline and focus returns to the field. The placeholder also went from three
sentences to one — at three it filled the box, read as prose, and looked like a filled field,
which is how the empty submit went unnoticed.

### The brief cost estimate was ~5× out, in the expensive direction
`cap * 0.18 + 4` and `cap * 0.12` put a 100-person brief at **$22 to start, $12/month**.
Measured: $0.0396 per fully studied creator, so **$3.96 and $2.38**. Both now derive from one
`PER_CREATOR` constant, so re-measuring the engine moves the brief estimate and the admin
ledger together instead of leaving a third copy to drift.

### Run a name could be frozen with no way out
`go()` calls `clearTimers()`, which kills the scan animation — but `state.run.stage` was left
saying `'scoring'`. So: start a search, click any nav item during the ~3s scan, come back, and
the screen is stuck on *looking…* for every row, with no input, no *Run another* and no
*Cancel* rendered at that stage. **The only escape was reloading the page** — on the one beat
of the demo that runs live.

Fixed twice over, because either alone leaves a hole. `go()` now resets a mid-flight scan
(reset, not resume: the scan did not happen, and resuming from a cleared timer claims work
nobody did), `runreset` clears timers so a queued tick cannot walk the step forward on a
screen that has gone back to the field, and **the scanning stage now renders a Cancel** —
every other stage offered a way out and the one most likely to be interrupted did not.

### A pasted URL with `www.` did not parse
The domain test allowed one label before the suffix, so `instagram.com/handle` parsed and
`www.instagram.com/handle` fell through to the handle branch and missed. Copying out of a
browser's address bar is the likeliest way this field gets used, and `www.` is what a browser
puts there. The **required trailing slash stays** and is doing real work: it is the only thing
separating a bare domain from a handle containing a dot, and `magic.maike` is a real creator
in this cohort.

Verified after — resolved: `@pantheorganizer`, `PANTHEORGANIZER`, `  pantheorganizer  `,
`pant-he-organizer`, `www.instagram.com/motorcitymechanic/`, `instagram.com/…`,
`www.tiktok.com/@backseatcoach`, `tiktok.com/…`, `youtube.com/@brettkollmann`,
`x.com/@pantheorganizer`, a URL with a query string, `@magic.maike`, `magic.maike`. Missed
correctly: `a`, `@nobodyknowsthisperson`. Empty: ignored.

### Flagged, not fixed — briefs are a deferred session
A brief written as *"Chefs in Texas who cook barbecue on camera and have people asking where
to buy the rub"* is saved and tabbed as **"Home cooking, 50k–2M"** — a name derived from
category plus audience band that mentions neither Texas nor barbecue, and becomes the label
forever. And three of the six *"Scout read that as"* chips (TikTok, Instagram, YouTube) are a
**default** applied when no platform was named, presented in the same chips as the ones
genuinely read from the text. Both are brief display/logic, which is deferred by instruction.

**Verified:** six views plus all eight reports, zero console errors, defect sweep clean,
arithmetic sums to the ring 8/8, the scan offers Cancel and Cancel returns to the field, and
an empty brief is blocked with a message.

---

## Seventh pass — adversarial test of the whole app

Enumerated every `data-act` in the build and exercised each one, then swept for render errors,
duplicate and malformed ids, clipboard contents, dark theme and a narrow viewport.

### The outreach package was empty for every real creator
`outreach` is listed in `meta.generated` and every merged-seed record ships
`{subject:null, opener:null, bullets:[], close:null}`. So the demo's closing beat — Promote,
then the package — rendered an empty bullet list, the word **Subject:** with nothing after it,
two blank paragraphs and a signature.

**Composing prose was the obvious fix and the wrong one.** This is an email to a real, named
creator, and §12.1 gates exactly that behind a named owner and legal review; the nulls are
that decision, not an oversight. The screen states the decision instead. The **signals** half
is real and now builds from the record — the same sentences the card and report already
print, so it adds no claim — which is also §6.5's actual argument: everything a first contact
needs was already in the report.

### …and the clipboard shipped the word "null" three times
`'Subject: ' + o.subject + …` with null fields produced `Subject: null / null / null` in the
paste buffer while the screen above merely looked blank. **The rename layer was the fix last
time and the nulls walked straight through it** — `S.plain()` renames words and has no opinion
about whether there are any. The clipboard now builds from the same two states the screen
renders. The old note said *sweep the clipboard, not just the DOM*; this is the second time
that has paid.

### The verification mark was decorative in the package
Every bullet rendered `vmark('verified_absent')` — hardcoded — so *"17 people asked where to
buy"* and *"1.1M on YouTube"* carried **Not there**. The mark is the one thing on a Scout row
that must never be decorative; inverting it on the strongest line in the list is worse than
omitting it. Bullets carry their own state now: absences read *Not there*, present facts read
*Found it*.

### `aria-controls` was broken on every inventory disclosure — in two components
Keys are `inv:<candidateId>:<item label>` and item labels contain spaces
(*"YouTube channel"*, *"Platform subscriptions"*), so the DOM carried
`aria-controls="d-inv:c_…:YouTube channel"`. **aria-controls is an ID-reference *list*** — a
space splits it into two references, neither of which exists. Visually perfect, silently
broken for anyone using a screen reader, and unaddressable by any selector, which is how the
*test* failed rather than the product.

Two components had it independently: the generic `disclosure()` and `invRow`'s own inline
version. Both now route through `discId()`. **The state key stays raw** — `state.open` is a
plain object where colons and spaces are fine — so nothing about which drawers are open
changed. Verified after: 9 disclosures, zero ids with spaces, zero duplicates, zero dangling
references, `aria-expanded` correct on all.

### Smaller things fixed
- **Watch tray copy**: *"they feel this **this quarter**"* rendered as *"they feel this this
  quarter"*. Correct as written, and parsed as a typo by every reader before it parsed as
  emphasis. Emphasis that needs explaining has already failed.
- **The outreach summary** repeated itself — *"…we couldn't tell what they've switched on
  switched on"* — because `onLabel` already ends in those words. Same echo the report subhead
  had.

### Verified working, no change needed
Pass (8 reasons, decided row, Undo restores counts), Watch (1/2/3-month windows, the longer
two ask why), Promote → package, brief create → read-back → save → new tab → *Scout is
looking*, brief pause/resume, source toggles, admin threshold and ceiling, all 5 report `?`
receipts non-empty, prev/next across all 8, dark theme and a 454px viewport with **no
horizontal overflow and no element wider than the viewport**.

Contrast measured in dark on the new elements: run line 5.72, scroll arrow 7.00, joined ⓘ
17.00 — all pass.

### Flagged, not fixed
- **Mobile rail collides at ~450px** — the drop badge overlaps its icon. §12 descopes mobile
  to "a simplified read layout, not parity", so this is out of scope by decision, but it is
  the first thing anyone sees if they open the demo on a phone.
- **A live Pass reason has no number behind it.** Seeded rows read *"Returns at 50k followers
  — currently 4.4k"*; one you create reads *"Returns at an audience threshold"*. The
  suppression rule is generic where the seed is specific.
- **The Watch "why" is asked for and never shown.** Choosing 2 or 3 months prompts *"Why 3
  months?"*, accepts an empty answer, stores *"No reason given"*, and displays it nowhere. The
  code comment says v5 "printed 'needs a reason' … and then never asked for one — friction
  promised and not delivered reads as a bug either way, so ask." It asks now, and still does
  not require or surface. Same defect, one step later.

**Verified:** six views, all eight reports, all eight outreach packages, zero console errors,
arithmetic 8/8, and a sweep for `§` · `PRD` · `null/undefined/NaN` · every stale figure · both
doubled phrases returns nothing.

### Still open — needs Alex, not the prototype
- **Re-run Fit for the 58 against the house brief text.** Needs `ANTHROPIC_API_KEY`. ~$0.60.
  Until then the house drop is gated by four other briefs' Fit tests and the screen says so.
- **Reddit credentials** (`REDDIT_CLIENT_ID` / `REDDIT_CLIENT_SECRET`). Demand reads *"no
  purchase intent we could read"* on 5 of 8 cards without it.
- **The pitch, and the definition of "worth the call."** PRD §110 says *big audience, no
  business, under pressure*; the engine's `houseBrief` says *clippable, repeatable, in
  demand*. Two definitions, neither on screen.
- `@forensicdetailingchannel` is in the drop at **169 followers** under a big-audience
  thesis.
- **State persists in `sessionStorage['scout-v52']`** — clear it before demoing, or last
  night's Promote is still there.

---

# Scout v5.3 — design notes

**Built 6 August 2026 against PRD v1.5.** The first build with nobody invented in it: twenty real
creators read by the engine, four clearing the bar. Everything below the horizontal rule is v5.2's
notes, kept because v5.3 is v5.2 plus this list rather than a rebuild.

**The bug worth reading first.** The engine re-read its threshold against real people and moved it
78 → 25 (PRD §5.4b). The prototype held its own copy of 78 — in `v52-seed.js`, in `ui.js` as
`CONF_FLOOR`, and again in `state.admin.threshold`. The drop rendered perfectly, said *"20 people
were looked at, 6 scored under 78"*, and showed nobody. **A correct empty state is the one defect you
cannot spot by looking**, because §6.1 deliberately designs an empty drop to look considered. The
export already carried `meta.scoreThreshold`; all three now read it, with the local value as a
fallback only. The general rule: when an engine constant moves, grep the prototype for a second copy.

**What changed, and why:**

- **`U.face()` — the picture, with a fallback that cannot fail.** Initials are always rendered as the
  resting state and the photo is layered over them, removing itself via `onerror` if the link is
  dead. TikTok avatar URLs are signed and expire in ~48 hours, so a seed exported on Monday serves
  dead links by Wednesday — the ordinary case, not the edge one. Deliberately **not** `loading="lazy"`:
  blank tiles filling in a beat later read as a broken app on a projector.
- **`U.accounts()` — every platform is a link out.** The fastest way to disbelieve a report is to open
  the profile. A guessed account is dashed and labelled and never dressed as confirmed (§6.12).
- **Decision 113 stated, not assumed.** `trajectoryPass` was `(growth90d || 0) > -0.10`, which turned
  a *missing* reading into the number zero and let zero pass. Every card was claiming "rising or
  steady" off a reading nobody had taken. Three states now, and the card says *"First look — no trend
  yet."*
- **Button hierarchy inverted.** Watch was solid butter, making a deferral the loudest thing on every
  row — louder than the door to the evidence. Butter demoted to an outline (it still identifies
  Watch, it no longer competes for rank); *Open the report* inverts the surface.
- **Decision 116** — *"Read it again"* deleted from the watchlist. One name for one action.
- **Run a name** — 78 words of copy down to one line, a field that takes a **handle or a URL**, and
  what you searched stays on screen as the heading. The gates became a footnote: a result that failed
  them is still a report worth opening, and dressing them as an error said the opposite.
- **Decision 119 — the preliminary headline.** Countable facts only, joined with full stops, labelled
  *First look*, and **nothing at all** when nothing was readable. The report used to print the
  engine's own internal note (*"No headline — the engine does not write one"*) to the member.
- **Decision 120 — pick your name.** The mocked Google button was a page transition wearing an
  identity check, and it made every decision anonymous. No password: nothing here is secret, and a
  credential field would teach people Scout holds something it does not.
- **§6.13 — Sources.** Eleven sources, 28 places, each stating what it proves and what switching it
  off costs *in proof*. Not a price list: §11.4 measured 5,167 fetches at $0.0000 with the whole bill
  in model judgment, so a cost column would read `$0.00` down its length. Reddit is listed as
  **built, not connected**.

**Contrast measured in both themes, all pass AA** — Open 17.07 / 13.85, Watch 5.93 / 10.77, Pass
7.61 / 7.00, first-look line 7.61 / 7.00. Re-confirmed the stale-computed-colour trap: after setting
`data-theme`, `getComputedStyle().color` returned light values in a *later* call while `--text-2`
already read dark. Only a cache-busted full navigate measures the second theme honestly.

**Still open:** the January 2024 rewind is cut and not yet applied, so signing in still lands there.
The sign-in member list is fictional desk staff on a real domain. Mobile and the feedback loop are
deferred.

---

# Scout v5.2 — design notes

v5.2 is Task 5 of [`HANDOFF-PROMPTS.md`](../../Notes/HANDOFF-PROMPTS.md): the check record built by the
engine (`engine/data/chipotle.html`) has three structural moves, and the question was which of them
belong on the creator report. The analysis is at [`../../REPORT-IA.md`](../../Notes/REPORT-IA.md) and it
matters more than anything here.

**Two moves transferred, one did not, and two things the engine states were missing entirely.**

v5.1 is preserved unedited alongside it, as are v5, v4, v3, v2, v1-A and v1-B. `alloy.css` and
`warhol-seed.js` remain byte-identical to `Archive/prototypes/seed-fictional/` and to every other version.

**Fidelity: unchanged from §13.** High-fidelity clickable prototype on curated data, not production
code. All creators, scores and figures are synthetic and the creators are deliberately fictional.

---

## The correction that came first

The handoff says v4 is the current build and is mid-rename to v1.3 vocabulary. It isn't — **v5 and
v5.1 both landed after that was written**, and v5.1 already ships the full v1.3 vocabulary, the
decision-82 restructure and `?`-as-receipts. Two of the three moves were therefore partly done, and
building against v4 would have been a two-version regression. Everything below is measured against
v5.1, running.

---

## Move 1 — the claim opens where it is made

**"No newsletter. We looked in 6 places" is now clickable in place.**

v5.1 had receipts at two granularities and neither was the line: the `?` beside each claim heading
returned a prose restatement of the list you were already reading, and *How we checked* at the foot
of the report held one flat table of everyone's proof at once. §6.10's own test — *"an assertion
until someone can open the six"* — was not met by either.

Each inventory line is now its own disclosure, and its body is that line's checks and nothing else:
outcome, HTTP status, the place, the address, and what came back.

### This was a data change, not a styling change

**The claim could not be opened because the data to open it did not exist**, and that turned out to
be the finding of the whole task.

v5.1 authored the place *count* on the inventory line and the place *rows* in a separate flat table,
so the two drifted with nothing to catch it. Measured on Ines Calvo-Werner, the demo's opening
creator:

| | |
|---|---|
| Places claimed across the six Missing lines | 3 + 6 + 5 + 4 + 4 + 3 = **25** |
| Rows in the check record | **12** |
| What the disclosure header said | *"31 checks across **12** places"* |
| Rows behind *Newsletter — 6 places* | Substack, beehiiv, ConvertKit = **3** |

A line claiming six places had three rows behind it, and the page stated two different place-counts
a screen apart. This is the same defect class v5.1 caught once and fixed — *"One check total, not
two"* — surviving in a form nothing looked for, because nothing had ever tried to open a line.

**So the count is no longer authored.** There is now a probe catalogue (`PROBES` in `v52-seed.js`)
that mirrors the shape of the engine's own `config/probes.json`, the check rows are generated from
it, and the number on the line is `lookedIn().places` — derived from the rows the disclosure will
show. The line cannot claim a door its receipts cannot open, by construction rather than by
discipline. The flat table and the per-line disclosures are now literally the same array, so the
header total and the line totals are the same arithmetic.

Task 6's export adapter drops into this: the engine already nests `inventory[].checks[]`.

### Carried over from the engine's page

- **Three outcomes, not two** — `hit` / `miss` / `??? inconclusive`. A door that would not answer is
  not a place we looked: it lowers confidence and never counts as a gap.
- **Advisory places** — endpoints that answer 403 to everyone. Kept, because a hit there still
  counts; excluded from the count, because a door that never opens is not a place we looked. Q3's
  *"· N wouldn't answer"* now appears on the line itself, which is where the engine puts it.
- **The status code on the row.** `404 at inesmakesbread.substack.com` is a different kind of fact
  from *"no publication"*, and it is the kind that survives being challenged.
- **Depth and engine per row**, kept — §6.10 requires provenance, and losing it would have traded
  one kind of receipt for another.

*How we checked* stays. It is the chronological read across every item at once, including the
study-depth reads that belong to Demand, Pressure and Fit rather than to any inventory line — so its
total is larger than the claim lines add up to. That difference is now stated in the table's own
header rather than left for a reader to try to reconcile and fail.

---

## Move 2 — the gates, only where they are a question

**Rendered only when a gate failed, and on the report rather than one screen earlier.**

v5.1 already agreed in principle: *Run a name* ends on a designed *Under the bar* callout in exactly
the right voice. It had two problems.

**It was on the wrong screen.** Click *Open the report* and it was gone — a *You ran this name* pill
and nothing else. The reason evaporated at the moment you started reading the case, on the screen
you sit with and forward to a colleague.

**It covered one gate of five.** §5.4 has five conditions. `dropFor` counted three — `below`,
`wrongFit`, `thin` — and **discarded trajectory failures silently**, incrementing no counter at all.
A creator rejected for fading got no sentence anywhere in the product.

Now: `gatesFor()` evaluates all four per-creator conditions, the report renders one sentence for
each that failed, and the drop's *what the gates left out* line names fading and thin-coverage
alongside the two it already named. On a creator who is in the drop the block does not render at all
— a row of five passes would read as a status field, and §8 is explicit that *In Drop* is computed,
not stored. The run-result screen keeps the headline and defers the detail to the report, so the
same fact is stated once in each place rather than twice in one.

---

## Move 3 — did not transfer, and two residues removed

v5.1 was already right at the claim level: `DEMAND … +40`, `PRESSURE … 32/40`, `MISSING … +20`, with
the two gates showing as gates so a fourth number never appears. That is decision 82 executed, and
nothing needed doing to it.

Two pieces of the killed section had survived elsewhere.

- **The compact bar carried `Demand 40 · Missing 20 · Pressure 32`** the entire length of the
  report — *How the number was built*, reassembled and made persistent. Removed. The ring carries
  the total and each number is at most a screen from the heading that owns it. The bar now carries
  the ring, the name and the handle.
- **The `?` on *the score* restated the three claim headers verbatim.** Trimmed to the two facts the
  headings genuinely do not carry: that Fit and Trajectory add nothing, and where the bar is.

**The engine's own page keeps its *How the number was built* table.** It is not the report, its
reader is auditing the engine, and decision 82 governs the creator report. The rule does not
propagate backwards into the evidence viewer.

---

## Two things the engine states and the interface did not

- **The wall.** *"No language model wrote a verification state here — the store layer throws if one
  tries."* The most credible paragraph the project owns, and it appeared nowhere in the prototype:
  v5.1 rendered the rule-vs-LLM tag per row, which is the mechanism without the policy. It now sits
  under the receipts, **once per report** — under every open line it would be the same paragraph
  three times on one screen, which is the tell v5.1 removed the coloured claim borders for.
- **What we cannot settle.** The engine's terminal renderer prints *"N we can't settle at all — they
  can show up as present, never as absent."* That is Q1, already shipped in the engine and already
  excluded from the confidence denominator. It now closes the Missing block. §5.3 makes confidence
  the thing that stops a burned Scout distrusting the drop, and it only does that if its limits are
  stated.

---

## Defects found while building, and fixed

**The clipboard still shipped banned vocabulary.** v5.1's notes record the copy-to-clipboard handler
as fixed — *"it now routes through `plain()` like everything else"* — and it does not: the handler
concatenates the raw seed fields. The on-screen package calls `S.plain()` per field and reads clean,
so a screen sweep passes either way, which is exactly how it survived a second time. **The text you
would actually paste into a creator's inbox read *"we checked 18 surfaces."*** Now routed through
`plain()`, and the sweep reads the clipboard rather than only the screen.

**`Strain` reached the screen.** A resurfaced card read *"Back in the drop · Strain trigger fired."*
The rename layer matched `capacity strain` and `Operator Strain` and missed the bare pillar name.
`warhol-seed.js` is shared and byte-identical across five prototypes, so the fix is in the rename
layer, one rename along from the `surfaces` leak v5.1 fixed the same way.

**One session key per version.** Every prototype is served from one origin so the index can toggle
between them, which meant one `sessionStorage` key was one shared session — opening v5.1 and v5.2 in
turn had each restore the other's half-worked drop.

**`.invlist li` reached the nested rows.** A descendant selector, and the list now nests a second
list inside a row, so the receipts inherited the inventory row's three-column grid and won on
specificity. Scoped to direct children.

**The advisory rows failed AA.** Fading them to `.62` — which is what the engine's own evidence page
does, correctly, for a dev artifact — measured **2.48:1 in light and 2.89:1 in dark** against a 4.5
floor. They are set back by weight and by saying *Not counted* on the row instead. Fading was also
the weakest available way to say "excluded from the arithmetic", and the row was simultaneously
tagged `COUNTED` by the engine tag, which meant it said the opposite in two places at once.

**Narrow widths.** A place label is an address with nothing to break at, so it ran off the right
edge; `minmax(0,1fr)` sizes a column correctly but does not wrap an unbreakable word. And the claim
text spanning to the last column pushed the chevron onto a row of its own, so the control that says
*this opens* sat below the thing it opens. Both placed explicitly now.

---

## Verified

- **Contrast** — zero pairs below AA in both themes on the report with two lines open and the check
  record expanded, blending computed opacity rather than ignoring it. One pre-existing failure
  remains and is **not** from this pass: the `/` breadcrumb separator, 2.17:1 light and 2.66:1 dark.
- **Vocabulary sweep across seven views plus the outreach package plus the clipboard** — no
  *Warhol*, *surface*, *strain*, *purchase-intent*, *Operator Strain*, *Monetization Gap*,
  *Format Fit*, *Spotter*, *Track record* or *mandate*.
- **Focus survives a render** on the new disclosures — the existing locator captures `data-d`, so
  opening a line returns focus to that line's button and not to the top of the document.
- **The rewind holds.** Every check row on a rewound report is dated at or before the as-of date;
  the per-line filter is the same one the table uses.
- **No horizontal overflow at 375px**, nothing clipped, document scrolls.
- **No console errors** across sign-in → drop → report → open lines → check record → promote →
  outreach → copy.

**Not verified, stated rather than implied:** the browser pane would not go below 375px, so **320px
was not measured**. The three-reviewer pass v5.1 had (craft, accessibility, heuristics + cognitive
walkthrough) has **not** been re-run against these changes, and a real assistive-technology session —
NVDA+Chrome, VoiceOver+Safari — remains outstanding for v5.1's changes and now for these.

---

## Left alone deliberately

**Representation is scored `verified_absent`** in the seed, and the engine's catalogue says that item
is `presenceOnly` — it can show representation IS declared and can never show that none exists.
Opening the lines is what surfaced the disagreement. Changing the state would change scores and the
drop, so it is a data question for Task 6, named here rather than quietly resolved.

---

## Running it

Open `v5.2/index.html` directly, or serve the parent folder and open `/v5.2/`.

Demo path unchanged: sign in → **January 2024**, five unknowns → open Ines Calvo-Werner → read the
case → **open a Missing line and show the six doors** → *what happened next* → **Come back to
today** → today's seven → Promote → outreach package → tell Scout how it went.

---

# v5.9 — THE COPY PASS. RATIONALE MOVED OUT OF THE PRODUCT.

Governing rule, now in `Warhol/CLAUDE.md`: **the UI states, the help explains, the notes
argue.** The audit is `Warhol/VOICE-AND-TONE.md`.

The copy was never generated slop — it had a real voice, and it was over-written by
someone who cared. What had happened is that this file leaked into the application. Almost
every screen carried a third layer underneath the fact and the explanation: a sentence
defending the design decision behind the screen, answering an objection the reader had not
raised. `.lifecycle` was a CSS class whose entire job was to hold that layer.

Measured before the pass: help 2,003 words over 6.9 screens, Admin 912/4.0, Trends 650/3.0,
Drop 556/2.3. The report — 445 words over 3.3 screens — was already right, and became the
reference density for everything else.

Also fixed: **five words for one state.** `could not tell` / `could not resolve` / `could
not read` / `could not find` / `unreadable` all meant *we could not determine*, and
`verified absent` / `confirmed missing` / `not there` all meant *we proved it is absent* —
on a product whose whole argument is that it tells you exactly what it knows. The UI now
says `not there` and `could not tell` everywhere; `verified absent` survives in help only,
where it is being defined.

## The sentences that were removed from the UI, and why they were right

These were all true and none was cut for being wrong. They are here because they are
written for whoever maintains the model, not for someone trying to read a score.

**Passed — the third-holding-state defence.** *"This is not a third place to put someone
you are unsure about. Watch already means that, and a fourth verb is exactly what the
three-verb rule exists to prevent."* Correct, and it uses a phrase from the PRD that no
member has read. The three-verb rule is enforced by there being three buttons.

**Watchlist — the compounding-spend defence.** *"This is the only place spend compounds —
and nothing leaves it without a person choosing, because a state change nobody authored
throws away the label."* The **$/month** figure in the header states the first half harder
than the sentence does. The second half is a note about why expiry is a decision, which is
`closing()`'s job to demonstrate.

**Empty drop — the closing reassurance.** *"…so some days this is empty, and that is the
machine working rather than the scan failing."* The h1 (*"Scout found nothing worth your
time today"*) refuses to apologise; this clause took it back. *"The bar protects trust, the
cap protects attention"* is a strong line and survives — in help, once.

**Drop leftovers.** *"They are not gone — they are just not worth your morning."* Third
reassurance on one screen. The counts being visible is itself the proof.

**Demand weighting.** *"Weighting it linearly would have let one viral comment section
outrank everything else in the model."* This is the reason the half-point curve exists. It
belongs next to the curve in the engine, not next to the table that shows its output.

**Confidence denominator.** *"Leaving them in the denominator once capped every creator
below the floor, so nobody could ever clear it; dropping them silently would have been
hiding them."* A record of two rejected alternatives. Real, and not something a reader of a
confidence figure needs.

**Trajectory gate.** *"Inventing a trend from one data point is the exact failure the gate
is here to prevent."* The preceding sentence already says a first look returns *not
established* and does not block.

**Fit gate.** *"…a gate that re-counts them fails the highest scorers on the board for the
exact facts that got them there."* The list of what Fit deliberately ignores is the finding;
this is the argument for the list.

**Where the bar came from** (help, ~180 words). A changelog: 78, read off invented
creators, re-read against real ones, moved to 25. Moved to Admin, into the bar card next to
the control it explains, with the one operationally live caution kept — *re-read the bar the
first time a cohort has real demand.*

**Outreach.** *"Owning outreach would inherit deliverability and relationship problems that
belong to a person, and turn a listening tool into a CRM."* The scope argument for Scout not
sending. **Scout never sends** is the fact; this is why.

**Sweep depth.** *"A browsable list of thousands of creators evaluated and silently
discarded is a liability the moment it leaves the building, and noise to everyone inside
it."* The reason names start at Probe. Still the reason; not a thing an admin reading a cost
table needs mid-table.

**Trends — the census framing.** *"…so a pattern here is a call list, not a statistic"* and
*"A screen called Trends that drew a line through 1 look would be the first thing in this
application to claim something the engine would not sign."* The 90-day gate was stated three
times on one screen: in the `.lifecycle` line, in the ledger's Movement note, and in **Why
Movement is shut**, which exists to state it. The block that owns the claim keeps it.

**Scan footer.** *"A brief returns nobody today, starts a standing job, reports tomorrow,
stays gated and capped, and is allowed to find nothing."* Ran verbatim in three places — both
scan-footer branches and New brief. Kept on New brief, where the expectation is being set
rather than recalled.
