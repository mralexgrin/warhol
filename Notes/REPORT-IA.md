# The individual creator report — what transfers from the check record

Task 5 of [HANDOFF-PROMPTS.md](HANDOFF-PROMPTS.md). Analysis first; the styling is downstream
of it. Written 6 August 2026 against **v5.1**, running, not against the source.

---

## 0. The premise moved

Task 5 says *"the prototypes at `Warhol/prototypes/v4/` are the current build and are mid-rename
to v1.3 vocabulary."* That was true when the handoff was written and is not true now.

**v5 and v5.1 both landed on 5 August.** v5 did the v1.3 rewrite — the card, the report
restructure, the renames, the new screens. v5.1 is v5 after a three-reviewer pass (craft,
accessibility, heuristics), and its own notes record that *"the card, the report and the `?` are
untouched, because all three reviewers agreed those were right."* §13.2 of the PRD is titled
*Prototype v5 — the v1.3 build*, which is the version the handoff should have pointed at.

The consequence for this task is not cosmetic. **Two of the three structural moves are partly
built already.** Designing against v4 would undo the v1.3 rename, the decision-82 restructure and
the `?`-as-receipts behaviour — a two-version regression dressed as a design pass. Everything
below is measured against v5.1.

Second staleness, smaller: `engine/data/chipotle.html` was generated 5 August, before Task 1's
Q20 landed. Its gates table reads `Fit — no — unknown, the model pass did not run`, and Q20 makes
`unknown` impossible. It is still a valid reference for *structure*; regenerate before quoting
its *contents* anywhere.

---

## 1. Claim on the line, receipts collapsed underneath — **transfer, and it is not built**

### Where v5.1 actually is

The report has receipts at exactly two granularities, and the line is neither of them.

| Granularity | Mechanism | What it returns |
|---|---|---|
| The pillar | `?` next to each claim heading → popover | A prose restatement of the claim's own lines |
| The page | *How we checked* disclosure → one table | Every row, flat, chronological |

The inventory line itself is inert text:

```
✗  Newsletter     not there · we looked in 6 places
```

No affordance, no target, nothing under it. The single most convincing sentence the product owns
is the one sentence you cannot press. Task 5 is right that *"'No newsletter. We looked in 6
places' becomes clickable in place"* — that is the move, and the engine page already does it: each
inventory item is a `<details>`, and its body is that item's checks and nothing else.

The pillar-level `?` is a near-miss that reads as a hit. Pressing `?` on **Missing** returns:

```
YouTube channel — not there, we looked in 3 places.
Newsletter — not there, we looked in 6 places.
Store — not there, we looked in 5 places.
...
```

Which is the list you are already looking at, restated. It repeats the claim instead of opening
it. §6.10's test — *"'No newsletter. We looked in six places' is an assertion until someone can
open the six"* — is not met by anything on the page.

### Why this is a data change, not a styling change

This is the finding that matters most, and it is the reason Move 1 has not happened by accident.

**v5.1's check record is one flat array with no link back to the item it justifies.** Each row
carries `place`, `found`, `url`, `at`, `state`, `engine`, `depth`. There is no `item` key. So
there is no way to render the three doors under *Newsletter* — the association does not exist in
the data.

Worse, the numbers do not reconcile. Measured on Ines Calvo-Werner, the demo's opening creator:

| | |
|---|---|
| Places claimed across the six Missing lines | 3 + 6 + 5 + 4 + 4 + 3 = **25** |
| Rows in the check record | **12** |
| What the disclosure header says | *"31 checks across **12** places"* |
| Rows plausibly behind *Newsletter — 6 places* | Substack, beehiiv, ConvertKit = **3** |

So a line claiming six places has three rows behind it, and the page states two different
place-counts a screen apart. This is the same class of defect v5.1's review already caught once
and fixed — *"One check total, not two"* — surviving in a form nothing looked for, because nothing
has ever tried to open a single line.

**Building Move 1 exposes this immediately, which is the strongest argument for building it.** A
claim that cannot be opened is a claim nobody has audited.

### What it costs

The engine's shape is already correct. `report.inventory[].checks[]` is nested per item, and each
check carries `outcome` (`hit` / `miss` / `inconclusive`), HTTP `status`, `place`, `url`, `why`
and an `advisory` flag. Task 6's export adapter would deliver that nesting for free.

Ahead of Task 6, the prototype fix is one field — `item:` on each record row — plus regrouping, and
an honest reconciliation of the per-line counts against the rows that exist. **Do not paper over
the gap by lowering the line counts to match; raise the rows to match the claim, or state the
smaller true number.** The whole point of the line is that the number is real.

### Three things to carry over from the engine, and one not to lose

1. **Three outcomes, not two.** `hit` / `miss` / `??? inconclusive`. A door that would not open is
   not a place we looked — it lowers confidence and never counts as a gap. v5.1's `vstate` has
   present / absent / could-not-resolve, so the vocabulary exists; what is missing is that it
   never reaches a per-line view. Task 1's Q3 appends *"· N wouldn't answer"* to the line itself,
   which lands exactly here.
2. **Advisory rows, faded.** Endpoints that answer 403 to everyone: kept, because a hit still
   counts; excluded from the arithmetic, because a door that never opens is not a place we looked.
   No prototype equivalent exists at all.
3. **The status code on the row.** `miss 404 substack.com/@inesmakesbread` is a different kind of
   fact from *"No publication at this handle"*, and it is the kind that survives being challenged.
4. **Do not lose depth and engine.** §6.10 requires provenance per fact, and the current table has
   `Pass` (Probe / Study) and a rule-vs-LLM tag as columns. Per-line details must keep both or the
   ledger loses the thing that makes the wall visible.

### What happens to *How we checked*

It stays. §6.10 asks for a per-creator record view, and the flat table is the only place that
shows dates, depth and engine across every item at once — the chronological read. Per-line
disclosures are the per-claim read. **Two views of one record**, which is what §6.10 says in those
words. What should go is the duplicated summary count in its header, now that the per-line numbers
are the load-bearing ones.

---

## 2. The gates, stated plainly — **transfer, sited narrowly**

Task 5's reading is right and v5.1 already half-agrees with it.

**Where it is right:** on a creator in the drop, a five-row pass/pass/pass/pass/yes table is
noise, and §8 is explicit that *In Drop* is computed, not stored — so a gates panel that looks
like a status field misrepresents the model. It belongs on the report of someone who did **not**
get in, where *"why isn't this person in my drop"* is a live question.

**Where v5.1 already is:** `Run a name` ends on a designed callout —

> **Under the bar.** 61 is below 78, so the scan would never have surfaced this name on its own.
> It is here because you asked for it, and the report says so on its face.

That is the right voice and the right content. It has two problems.

**It is on the wrong screen.** It sits on the run-result step. Click *Open the report* and it is
gone — the report shows a *You ran this name* pill and nothing else. The reason evaporates at
exactly the moment you start reading the case, and the report is the screen you sit with, forward
to a colleague, and come back to.

**It covers one gate of five.** §5.4 has five conditions. `dropFor` counts three of them —
`below`, `wrongFit`, `thin` — and **discards trajectory failures silently**, incrementing no
counter at all. A creator who fails Fit or Trajectory gets no sentence anywhere in the product.

### The form

Not the engine's table. One sentence per **failed** gate, on the report, rendered only when a gate
failed:

```
Not in your drop.  Fit — this brief asks for home cooks; they are a restaurant.
```

Never a row of five passes on a creator already in the drop. The report already carries the raw
material — *Why they're on this list* renders `GATE · PASS`, and the score block renders
*bar is 78* — and both are silent about failure only because no creator in the drop has ever
failed one. The delta is a failure branch, not a new component.

---

## 3. "How the number was built" as its own section — **do not transfer; two residues to clean**

v5.1 is already correct at the claim level, and this should be said plainly rather than treated as
outstanding work. Measured on the running build:

```
DEMAND                    Do people want to buy?          +40
WHY THEY'RE ON THIS LIST  A gate, not a score.       GATE · PASS
PRESSURE                  Will they take the call?      32/40
MISSING                   Is there anything to buy?       +20
```

That is decision 82 executed — *"its arithmetic attaches to the claim it belongs to"* — including
the detail that the two gates show as gates rather than as scores, so a fourth number never
appears. Nothing to do.

**Residue 1 — the compact bar reassembles the killed section and makes it persistent.** The sticky
bar reads:

```
(92)  Ines Calvo-Werner    Demand 40 · Missing 20 · Pressure 32
```

That is *How the number was built*, compressed to one line, following you the entire length of the
report. Each number is at most a screen away from the claim header that owns it, and the ring
already carries the total. **Cut the three-number strip; keep the ring, the name and the verbs.**
It is also the strip most likely to be read as a live scoreboard, which is the failure mode
decision 82 was written against.

**Residue 2 — the `?` on *the score* returns the arithmetic verbatim.** Pressing it gives:

```
Demand — 40 points.
Missing — 20 points.
Pressure — 32 of 40.
Fit and Trajectory are gates. They pass or fail and add nothing.
The bar today is 78.
```

Defensible in the letter — §6.11 says the `?` returns receipts, and for the score the receipts are
arithmetic — and against decision 82 in the spirit, since the first three lines restate the claim
headers word for word one click away. **Keep the last two lines, cut the first three.** They are
the two facts the page genuinely does not otherwise state, and *"Fit and Trajectory pass or fail
and add nothing"* is the sentence that stops someone hunting for the missing points.

**And leave the engine's own page alone.** `viewer/template.html` should keep its *How the number
was built* table. It is not the report. Its reader is auditing the engine, not deciding on a
person, and decision 82 governs the creator report only. Do not propagate the report's rule
backwards into the evidence viewer.

---

## 4. Two things on the engine page Task 5 did not list, and one of them is the best thing there

**The wall, stated on the page.** `template.html` closes with:

> Everything on this page was decided by an HTTP status code and a written rule. No language model
> wrote a verification state here — the store layer throws if one tries. Models are allowed to
> classify text we fetched, quote from it, judge fit, and propose more places to look. They are
> not allowed to say whether something exists.

That is the most credible paragraph in the project and **it appears nowhere in the prototype.**
v5.1 renders a rule-vs-LLM tag per record row — the wall's mechanism, without its statement — so a
reader sees the evidence of a policy nobody told them about. §11.1's wall is the answer to the one
question a room will actually press on. It belongs in the check-record disclosure, once, in those
words.

**The line that says what we cannot settle.** The terminal renderer prints:

> *N we can't settle at all: `<names>` — they can show up as present, never as absent*

That is Q1, already shipped in the engine and already excluded from the confidence denominator.
The prototype has no equivalent, so confidence reads as a scoreboard rather than as a statement
about what was answerable. §5.3 makes confidence the thing that stops a burned Scout distrusting
the drop; the disclosure that some checks are structurally unanswerable is what earns it.

---

## 5. Summary

| Move | Verdict | State in v5.1 | Work |
|---|---|---|---|
| 1 · Receipts under the line | Transfer | Not built. Receipts exist at pillar and page level only | Data change first (`item` key + reconcile counts), then the disclosure |
| 2 · Gates stated plainly | Transfer, narrowly | Half built, on the wrong screen, covering 1 gate of 5 | Move to the report; failure branch only; add Fit and Trajectory |
| 3 · *How the number was built* | Do not transfer | Correct at the claim level | Cut the compact bar's number strip; trim the score `?` to two lines |
| + The wall, stated | Add | Absent | One paragraph in the check record |
| + What we cannot settle | Add | Absent | One line under confidence |

**Blocking finding:** Move 1 cannot be built honestly on the current seed. Six of the demo's
Missing lines claim 25 places between them against 12 rows of record. Either the rows come up to
meet the claims, or the claims come down to meet the rows. That decision is upstream of any
design work, and Task 6's export adapter is the version of it that resolves itself.

---

## 6. Built — v5.2

All of the above is built at [`prototypes/v5.2/`](prototypes/v5.2/), prototype fidelity, on the
curated seed. v5.1 is preserved unedited. Full build notes:
[`v5.2/DESIGN-NOTES.md`](../Archive/prototypes/v5.2/DESIGN-NOTES.md).

**How the blocking finding was resolved.** Neither by raising the authored rows nor by lowering the
authored claims — by **deleting the authored number**. There is now a probe catalogue in the seed
mirroring the shape of the engine's `config/probes.json`; the check rows are generated from it, and
the count on the line is derived from the rows the disclosure will show. The line cannot overclaim,
because the number and the rows are the same fact. The flat table and the per-line disclosures read
the same array, so the header total and the line totals can no longer disagree. When Task 6 swaps in
the engine's real `inventory[].checks[]`, the count comes with it and stays correct.

| Move | Verdict | Built |
|---|---|---|
| 1 · Receipts under the line | Transfer | Every inventory line opens in place: outcome, HTTP status, place, address, what came back. Three outcomes; advisory places excluded from the count and marked *Not counted*; Q3's *"· N wouldn't answer"* on the line |
| 2 · Gates stated plainly | Transfer, narrowly | One sentence per **failed** gate, on the report, never on a creator in the drop. Trajectory now counted rather than discarded silently, on the report and in the drop's left-out line |
| 3 · *How the number was built* | Do not transfer | Already correct at the claim level. Cut the compact bar's number strip and trimmed the score `?` to the two facts the headings don't carry |
| + The wall, stated | Added | Under the receipts, once per report |
| + What we cannot settle | Added | Closes the Missing block |

**Four defects found in the process, three of them pre-existing in v5.1 and one of them serious:**
the copy-to-clipboard handler still shipped *"we checked 18 surfaces"* into the text you would paste
into a creator's inbox, despite v5.1's notes recording it as fixed — the on-screen package is
plained per field, so a screen-only sweep passes either way. Also: `Strain` reaching a resurfaced
card, one `sessionStorage` key shared across every version on the same origin, and an AA contrast
failure in the advisory rows introduced by this pass and fixed in it.

**Not done:** 320px was not measured (the pane floors at 375), and the three-reviewer pass and a real
assistive-technology session have not been re-run against these changes.
