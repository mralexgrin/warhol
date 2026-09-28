# Scout v5.2 — design notes

v5.2 is Task 5 of [`HANDOFF-PROMPTS.md`](../../../Notes/HANDOFF-PROMPTS.md): the check record built by the
engine (`engine/data/chipotle.html`) has three structural moves, and the question was which of them
belong on the creator report. The analysis is at [`../../REPORT-IA.md`](../../../Notes/REPORT-IA.md) and it
matters more than anything here.

**Two moves transferred, one did not, and two things the engine states were missing entirely.**

v5.1 is preserved unedited alongside it, as are v5, v4, v3, v2, v1-A and v1-B. `alloy.css` and
`warhol-seed.js` remain byte-identical to `_shared/` and to every other version.

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
