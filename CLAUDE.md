# Warhol / Scout — copy rules

These are binding on every change to user-facing text in `App/`. Full audit and
rationale: [VOICE-AND-TONE.md](Product/VOICE-AND-TONE.md).

## The one rule

**The UI states. The help explains. The notes argue.**

| Tier | Job | Lives in |
|------|-----|----------|
| State | The fact, with where it came from | The screen |
| Explain | How the model works | `helpView` |
| Argue | Why the screen is built this way | `DESIGN-NOTES.md` |

Never write tier 3 into the product. If a sentence defends a design decision, pre-empts an
objection the reader has not raised, or uses internal vocabulary (`the three-verb rule`,
`§6.4`, `decision 119`), it goes in the notes.

## Voice attributes

- **Evidential** — name what was checked and where. Never hedge, never perform confidence.
- **Plain** — short Anglo words, present tense, one clause. Not telegraphic.
- **Unhurried** — say a thing once, at full size, on the one screen that owns it.
- **Unapologetic** — state the empty day and stop. Do not explain that the screen is right.

Reading level: grade 8–10. Audience is an origination desk, not an ML team.

## One name per state

| State | Use | Never |
|-------|-----|-------|
| Proved absent | `not there` (UI) · `verified absent` (help only) | confirmed missing, no data |
| Could not determine | `could not tell` | could not resolve / read / find, unreadable, unknown, N/A |
| The score gate | `the bar` (UI) · `threshold` (code only) | cutoff |
| The list | `the drop` | feed, queue, results |
| Open a report | `Open the report` | Read it again, View details, Learn more |
| Verbs | `promote` · `watch` / `kept` · `pass` / `passed` | save, archive, reject, dismiss |
| Depths | `Sweep` · `Probe` · `Study` | depth 1/2/3 |
| Demand | `people asked where to buy` | purchase intent signals, demand indicators |
| Cadence | `posting less` | cadence decay (engine term — keep it in the engine) |

Adding a synonym for any state already in this table is a defect, not a style choice.

## Budgets

Checked against the running app at 1440×900. The report — 445 words over 3.3 screens — is
the reference density: dense with facts, thin on commentary.

- No screen over ~4 screens tall except `helpView` (ceiling: 3).
- Em-dash asides: rare enough to land. App-wide ceiling ~30.
- `"X, not Y"` negation: a real voice move, but ceiling ~8 app-wide.
- `which is` / `rather than` opening a clause: almost always tier 3. Delete on sight.
- Each claim appears on exactly one screen. If two screens say it, one is wrong.

## Before shipping copy

- [ ] One name per state — no screen invented a synonym
- [ ] No sentence explains why a screen is designed the way it is
- [ ] Each claim appears exactly once
- [ ] Empty and zero states state the fact and stop
- [ ] Every button label matches the verb used elsewhere
- [ ] Reads correctly aloud, no clause-stacking
