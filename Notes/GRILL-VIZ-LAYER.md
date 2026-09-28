# Grill — the data layer

**Self-run, 5 August 2026.** Every branch of `viz-spec.html` (D1–D20, C1–C2, P1), argued against and
answered. One-line options, one-line recommendation. Nothing here is built.

Companion: [viz-spec.html](../Archive/prototypes/viz-spec.html) · [PRD-WARHOL-SCOUT.md](../Product/PRD-WARHOL-SCOUT.md)

---

## What the grill changed

Nine things moved. The rest of the proposal survived roughly intact.

| # | Change | Why |
|---|---|---|
| 1 | **"Output" → "Posting"** on the fork | *Output* is not in §4's glossary. §6.2 says *posting*. Decision #100 violated. |
| 2 | **Email carries no marks** | Gmail and Outlook strip inline SVG. D5's justification was wrong. |
| 3 | **The sentence must stand alone** replaces "must survive email" | Stronger principle, and it protects §6.2's prose from erosion. |
| 4 | **The fork is the strongest item, not the weakest** | It replaces a line of prose rather than adding one. Every other mark is redundant encoding. |
| 5 | **Trajectory marks take the text colour**, not a field colour | Trajectory is not a pillar. Giving it a field promotes it to peer status with Demand/Missing/Pressure. |
| 6 | ***Doesn't apply* leaves the inventory list** | A blank in the mark column reads as a rendering bug. §5.3 wants a sentence. |
| 7 | **No marks on the drop card** | The card was tuned to 209px eleven days ago. Marks pay on comparison surfaces; the card isn't one. |
| 8 | **The threshold knob stays in admin**, off the Decisions screen | A knob beside the chart invites weekly fiddling; §5.4 says monthly. |
| 9 | **Decisions ships after the hackathon** | It needs a month of decisions to say anything. The empty state is worth designing now. |

---

## A · The premise

**A1 — Does the report want marks at all?** §6.2 is *evidence-forward, not metrics-forward*, and v1.3
just removed two summarising elements (id-match %, report-level confidence). Adding marks may be
re-adding the chrome that was cleared.

- Full marks in the report · marks only on lists · no marks anywhere, prose only
- **Rec: marks in the report, but they are the first thing to cut.** A slope between `214k` and
`296k` adds no information — it adds scan speed, and the report is read slowly. The primary case for
the slope is lists.

**A2 — Then where does a mark actually pay?**

- Report · watchlist and check-back · Decisions · all three
- **Rec: comparison surfaces.** Ten watchlist rows with a slope column is a different object from ten
rows of prose; one report with four slopes is the same report. Rank the surfaces: check-back →
watchlist → Decisions → report.

**A3 — Is any mark carrying a fact the prose doesn't?**

- Yes, several · only the fork · none
- **Rec: only the fork.** Every other mark restates its own sentence in a second channel. The fork
states a *relationship* — audience against posting — that §5.1 asserts in a table and no screen has
ever drawn. That is the whole argument for the layer, and it rests on one graphic.

**A4 — If only the fork carries new information, why keep the rest?**

- Cut to the fork alone · keep the set · keep the set on lists only
- **Rec: keep the set.** A single graphic in an otherwise unillustrated product reads as an accident.
The slope and the state marks are what make the fork legible as part of a system rather than a chart
someone dropped in. That is a real justification, and it is a weaker one than "it carries a fact" —
say so rather than pretending otherwise.

---

## B · The fork

**B1 — Does the fork earn a block, when D5 says nothing gets a block?**

- Yes, it is the exception · no, inline it · no, cut it
- **Rec: yes — because it replaces prose rather than adding it.** §6.2's Pressure block already opens
*"Audience up 38% this year — she's growing faster than she can handle."* The fork **is** that
sentence, drawn. Net change to the page: one line of prose out, one graphic in. That is the
justification; "it's the thesis" is not, on its own.

**B2 — Where does it sit?**

- Top of Pressure · top of Trajectory · report header · card
- **Rec: top of Pressure**, replacing the lede line. Trajectory is the *fact*; Pressure is where the
fact becomes a reason to call, and the fork's job is the reading, not the measurement.

**B3 — What is the second limb called?**

- Output · posting · cadence · activity
- **Rec: posting.** §6.2 says *"Posting 40% less than she used to."* *Output* is my invention and it
is not in §4. Decision #100 is the interface speaks plain English; this is a straight violation and
the kind that gets copied everywhere before anyone notices.

**B4 — What happens when the fork has nothing to say — both limbs up, or both flat?**

- Always render · render only above a divergence threshold · render, and let it look boring
- **Rec: always render, let it look boring.** A graphic that appears only when the news is good is a
graphic that teaches people to stop reading it. The flat fork is information: *she is keeping up*.
Suppressing it would also make the block's height jump between creators.

**B5 — What if one limb is missing?** Cadence or audience history resolves to *not found*.

- Draw one limb · draw nothing, fall back to the sentence · draw the missing limb as dotted
- **Rec: fall back to the sentence.** D2 holds — a one-limbed fork is a fork making a claim about a
relationship it cannot see. Dotted would be worse: it draws an absence.

**B6 — How often will that happen?**

- Often · rarely · unknown
- **Rec: rarely, and it is the good news in §11.3.** Cadence and audience trend are both visible
without comment access, so the fork is available on Instagram-heavy creators where *Demand* is not.
The one graphic that carries new information sits on the most available inputs in the model.

**B7 — Does the fork need its numbers, or is the shape enough?**

- Shape only · shape + numbers · numbers only
- **Rec: shape + numbers.** Two series need identity (skill rule), the end-labels are the legend, and
§5.2 requires every Pressure signal to be a *dated change* — a bare shape is a level.

**B8 — Is indexing to her own baseline honest, or does it flatter?**

- Honest · flattering, because a small base makes a big percentage · needs an absolute anchor
- **Rec: honest, with the anchor already present.** §5.2 defines cadence decay against her own prior
baseline, so the unit is the model's, not the chart's. The absolute numbers live one line below in
Trajectory (`214k → 296k`), which is the anchor. Watch this on small accounts — a 5k→7k creator forks
as hard as a 214k→296k one, and the brief's audience band is what stops that mattering.

---

## C · The slope

**C1 — Does the rise encode magnitude, or only direction?**

- Magnitude, clamped · direction only · magnitude, unclamped
- **Rec: magnitude, clamped at ±60%.** Unclamped breaks the 26px band on the first +400% creator;
direction-only wastes the channel and makes every slope identical.

**C2 — Is a clamped slope a lie?**

- Yes, cap it visibly · no, the number is right there · use a log scale
- **Rec: no — but mark the clamp.** Above the clamp the mark stops encoding and the number takes over;
that is legitimate as long as clamped slopes are visibly identical rather than subtly different. Log
scale on a 20px mark is unreadable and would be worse.

**C3 — Hollow-left / filled-right: does it read as past → now, or as empty → full?**

- Past → now · risk of empty → full · use an arrowhead instead
- **Rec: keep hollow → filled.** It matches the state marks, where hollow already means *not there*.
An arrowhead would add a second directional grammar for the same job. Accepted risk: nobody has read
this in context yet, and it is the cheapest thing in the set to change.

**C4 — Does the slope go on the drop card?**

- Yes · no · only on the two Pressure lines
- **Rec: no.** The card was tuned to 209px and three claims in v5 (#82, #83). The Pressure lines there
are already changes in words. Reopening the card for a redundant encoding is the worst trade in the
proposal.

**C5 — Does it go on watchlist rows?**

- Yes · no · only on rows with an alert
- **Rec: yes, on every row.** §6.3 says the watchlist watches the Trajectory block and alerts quote
the trend. A slope column is the only thing here that lets you see *who is moving* without reading
ten rows. This is the slope's strongest home and it is not in the report.

---

## D · The tally, and confidence

**D1 — Does the tally survive week two, or become wallpaper?**

- Survives · becomes wallpaper · survives only because it is clickable
- **Rec: survives, weakly.** Its real job is differentiating 4 places from 11 at a glance, which is a
judgment a Scout makes about how hard to trust an absence. That is a genuine read. It is still the
most cuttable item after report slopes.

**D2 — Doesn't this repeat v4's own criticism — "the same number displayed two unrelated ways"?**
The ring sweep already carries confidence on every list.

- Yes, it is the same mistake · no, different grain · yes, so drop the ring sweep
- **Rec: no, and say why in the notes.** The ring is *aggregate* confidence for the creator; the tally
is the check count for *one* inventory line. Different grain, and §4.3 already splits them by surface
— the number on lists, the detail on the report. But this is close enough to the v3 failure that it
should be stated explicitly rather than left for someone to rediscover.

**D3 — What is the maximum N before ticks stop being countable?**

- 8 · 12 · 20
- **Rec: 12, then the number.** Past a dozen nobody counts, and the seed's deepest check is 11. Above
12, render `we looked in 18 places` in words.

**D4 — Does the tally need teaching every time, or once?**

- Every row · once per block · never
- **Rec: once per block, on the first row that would use one.** Already built: *"not there · we looked
in 6 places"* on the top row, ticks below. §5.2's own move for weight — a clause on the top line only.

---

## E · State marks

**E1 — Do three ring shapes survive 11px?**

- Yes · dotted and hollow will blur · need a fourth channel
- **Rec: yes at 11px, verify at 375px and in `forced-colors`.** Filled vs hollow is safe. Hollow vs
dotted is the risky pair and it is the least important distinction on the page (*verified absent* vs
*not found* is already carried by the note text beside it).

**E2 — Does *doesn't apply* with no mark read as a rendering bug?**

- Yes · no · yes, so give it a dash
- **Rec: yes — so take the row out of the list.** §5.3 says it should read *"as an ordinary sentence
rather than as a state anyone has to learn."* A mark-less row in a marked list is exactly a state you
have to learn. Move it below the inventory: *"We didn't look for a podcast — she doesn't talk to
camera."* Cleaner, and closer to what §5.3 actually asked for.

**E3 — Does that lose anything?**

- Yes, the reader can't see what wasn't checked · no · yes, but it belongs in the check record
- **Rec: nothing that matters.** The check record (§6.10) is where *what we did and didn't check* is
answerable in full.

---

## F · Colour

**F1 — Ink for Trajectory, when ink means "weight and summary" in v4 and Trajectory is neither?**

- Ink · lilac · the text colour, because Trajectory is not a field
- **Rec: the text colour, and the reasoning is the point.** Trajectory carries no score, no points, no
pillar (§5.2 refuses a fourth number). Giving it a *field* colour promotes it to peer status with
Demand / Missing / Pressure. Same hex as ink in light mode; different justification, and the
justification is what stops someone later "fixing" it to lilac.

**F2 — Then what about C2's dark-mode failure?** The fix was `--text-2`, which is odd for something
called "the text colour."

- Global override · fork-local exception · pick a different hue
- **Rec: fork-local exception.** The fork is the only place ink and butter share a frame. Everywhere
else there is no butter adjacency and `--text` is correct. Step the audience limb to `--text-2` **in
the fork, in dark, only** — and note that the reason is a measured ΔE, not taste.

**F3 — Does the decisions ramp inverting between themes confuse?**

- Yes, pin one direction · no, the rule is stable · use the same hexes in both
- **Rec: no.** The learnable rule is *most conviction = most contrast against the surface*, which
holds in both themes. Same hexes in both would fail the light-end contrast floor, which is where this
started.

**F4 — C1: `--ok` and `--teal` are the same hex in dark. Fix the token, or route around it?**

- Fix `alloy.css` · route around it · fix it and note the audit
- **Rec: route around it.** §13.2 says Alloy stays *vendored verbatim and unedited* and its 56/56
contrast audit is the reason. The decisions ramp already avoids both. Log C1 as a known collision so
nobody uses `--ok` for a series later.

---

## G · The check-back

**G1 — Two lanes, or one list with "still" prefixes?**

- Two lanes · one list · one list, sorted moved-first
- **Rec: two lanes.** The lane header is what makes *what held* a positive statement rather than
leftovers. A single sorted list makes the bottom of it look like the tail.

**G2 — Can "what held" bury "what moved"?**

- Yes, cap it · no · yes, so collapse it
- **Rec: cap the held lane at four rows, rest behind "and 3 more."** Never collapse it by default —
collapsing is how it becomes the weaker lane again, which D12 exists to prevent.

**G3 — What if nothing moved and nothing held is interesting — a completely flat month?**

- Say so plainly · suppress the check-back · auto-extend the window
- **Rec: say so plainly, and it is the single most useful check-back there is.** *"A month, nothing
moved. Still no newsletter, still no store."* That is the prune recommendation writing itself (§5.8),
and it is the exact case the watch window was invented to force. Never auto-extend — §5.8 requires a
human.

**G4 — The check-back also rides in email (§9). Do the marks survive?**

- Yes, inline SVG · no, Gmail and Outlook strip SVG · yes, as PNG
- **Rec: no. Email gets sentences and a link.** This kills D5's stated justification. PNG generation
means hosting images, which is infrastructure §6.5 and §9 deliberately avoid.

**G5 — So what is the principle, if not "must survive email"?**

- Marks are optional decoration · **the sentence must stand alone** · build a PNG pipeline
- **Rec: the sentence must stand alone.** Stronger than the one it replaces: no mark may ever be the
only carrier of a fact, which keeps §6.2's prose complete and makes the email version free. It also
means a mark can never be load-bearing, which is a real constraint on the fork — and the fork passes,
because the sentence it replaces still exists in the email.

**G6 — Is the check-strip (dots at the dates Scout actually checked) worth it?**

- Yes · no, it is chrome · yes, but only in the app
- **Rec: yes, in the app.** It is the check record's argument applied to time — *"we watched"* is a
claim until you can see the checks. Cheap, and it is what makes the one legal sparkline legible as a
series of observations rather than a drawn curve.

---

## H · Decisions

**H1 — Is *Decisions* the right name?**

- Decisions · Trends · How it's going · Calibration
- **Rec: Decisions.** *Trends* collides with creator trajectory, which is the thing the rest of this
layer draws. *Calibration* is jargon (#100). Decisions is plain, accurate, and still covers outcomes
when they land.

**H2 — Does the screen belong in the hackathon prototype?**

- Yes, all four modules · yes, static · no, defer
- **Rec: defer the screen, design the empty state now.** With a curated cohort and no decision history
it would be a chart of invented numbers presented as evidence the machine works — the one thing §7's
disclosure discipline exists to prevent. The empty state is worth drawing because it is what a real
week-two user sees.

**H3 — Which module is first when it does ship?**

- What happened · Is the bar right · Why they said no · The outcome band
- **Rec: "Is the bar right."** It is the only one serving a commitment the PRD already made (§5.4,
#101 — re-check monthly). Volume and pass-reason mix are interesting; the calibration read is owed.

**H4 — Does putting the calibration read on screen invite weekly threshold fiddling?**

- Yes · no · yes, so cadence the screen
- **Rec: yes, so keep the knob in admin.** The chart shows a rolling month and says what it implies;
changing the threshold happens on the admin panel. A slider beside the chart turns a monthly
discipline into a daily habit, and §6.7's brief versioning exists because judgments mean what they
meant when they were made.

**H5 — D18, "not enough yet": honest, or two empty cards in a funding room?**

- Show the empty modules · hide them until n · show one, hide the rest
- **Rec: show them, with the count.** *"6 manual adds — not enough yet"* is the same move as *"Scout
found nothing worth your time today,"* which the PRD treats as a differentiator. It also creates the
pull to use Run a Name. If the room is the worry, the room gets the briefing export (§6.6), not this
screen.

**H6 — Does Decisions overlap the briefing export (§6.6)?**

- Yes, pick one · no, different audiences · yes, fold Decisions into the export
- **Rec: no — and write it down.** §6.6 is external proof for a funding conversation; Decisions is
internal calibration for the desk. Two audiences, two artifacts. Worth stating in §12 or somebody
builds both as the same thing.

**H7 — Zero-result days as a counted series: does it actually work?**

- Yes · no, it still reads as a gap · yes, but label it
- **Rec: yes, labelled.** Currently rendered as `24 · 4 quiet days` beside the bar. *Quiet* is doing
real work — it is the only word in the module that is not neutral, and it should stay that way.

---

## I · Data model and scope

**I1 — P1: `In Drop` is computed, not stored (§4.6). Store it, or derive it?**

- Store drop membership · derive from `as_of` · store only the count
- **Rec: derive, and verify before charting.** §7 already mandates append-only observations and
`as_of` queries, so the recomputation exists. But decided rows carry a score snapshot (§10.3) and
never-decided ones may not, so *"how many surfaced in March"* is a claim nobody has tested. One
sentence in §10 saying volume is a derivation that must be verified is enough; storing it duplicates
state that §4.6 deliberately refused to name.

**I2 — Do the marks need any new data?**

- Yes · no · only the check-back sparkline
- **Rec: no.** Slopes need two dated observations, which §10.1 already stores. The tally needs the
check count, which §6.10 requires. The fork needs cadence baseline and audience trend, both Probe
outputs (§5.7). The layer is a read view, same argument §6.10 makes for the check record.

**I3 — What ships in prototype v5?**

- Everything · the marks, not Decisions · the fork only
- **Rec: state marks (restyle) + tally + fork + slopes on the check-back and watchlist.** Skip
Decisions, skip drop-card marks. That is one new component (the fork), one restyle, and two small
ones — proportionate to a prototype whose job is the January 2024 rewind.

**I4 — What is the smallest version still worth building?**

- The fork alone · fork + state marks · the full set
- **Rec: fork + state marks.** The fork is the only new information; the state marks are already
half-built in v4 and fixing *doesn't apply* is a correctness fix, not a graphic. Everything else is
scan speed.

**I5 — What goes in the PRD, and where?**

- New §6.12 · fold into §6.2 and §6.3 · both
- **Rec: both.** A short §6.12 for the reading rule and the mark vocabulary (D1, D2, D3, and the
sentence-stands-alone rule), because they govern every surface. The individual marks belong in the
sections they serve — §6.2, §6.3, §5.8. §12's trends bullet gets rewritten to point at Decisions with
H2's deferral stated.

---

## The ship list

| | Build in v5 | Defer | Cut |
|---|---|---|---|
| **The fork** | ✓ Pressure block, replacing the lede line | | |
| **State marks** | ✓ restyle, plus *doesn't apply* out of the list | | |
| **The tally** | ✓ inventory rows, taught once per block | | |
| **The slope** | ✓ check-back and watchlist rows | report rows — secondary, cut first if tight | drop card |
| **The check-strip** | ✓ check-back, in-app only | | email |
| **Decisions** | empty state only | the four modules, after a month of real decisions | |
| **The sparkline** | ✓ check-back only | | everywhere else |

**Open, and genuinely unresolved:**

1. **C3** — hollow → filled has not been read in context by anyone. Cheapest thing in the set to be
   wrong about, and the easiest to change.
2. **B8 on small accounts** — a 5k→7k creator forks as hard as a 214k→296k one. The brief's audience
   band is what stops this mattering; if a brief has no band, it doesn't.
3. **E1 at `forced-colors`** — hollow vs dotted at 11px is untested under forced colours.
4. **D2** — the ring-and-tally split is defensible and it is one grain away from the failure v4 named
   in its own notes. Worth a second opinion that isn't mine.
