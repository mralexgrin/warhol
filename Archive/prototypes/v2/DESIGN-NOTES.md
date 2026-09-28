# Warhol Scout v2 — design notes

Built on the `design-taste` direction (PRD §13.1), re-skinned in the **Alloy** toolkit
(`Warhol/toolkits/06-alloy.html`), plus the six access-and-onboarding screens the PRD gained in
v1.1 and v1.2. v1 `design-taste/` and `impeccable/` are untouched.

## What changed from v1

**The demo starts one screen earlier.** Sign in → three prompts → land in January 2024. The rewind
stops being something a presenter switches into and becomes the first thing the product does for
you.

**Two faces, not three.** v1's thesis was three type registers — serif for human speech, mono for
machine measurement. Alloy ships Epilogue and Be Vietnam Pro only, so the register moved from
typeface to **field colour and weight**: quoted speech is Epilogue 300 italic, machine facts are
interface-weight with a Rule/LLM badge, and LLM-produced subsignal values keep the italic so a
judgment never reads as a measurement. The PRD only ever required the badge; the typeface was v1's
own idea, and it does not survive contact with a two-face system.

**No contrast solver.** v1 computed a per-creator accent dark enough for white text
(`deepenForWhite`) and mixed sample swatches toward black. Alloy inverts that model —
`--on-field: #1C1B23`, dark ink on light fields, audited for that and nothing else. So a creator's
seed accent now **selects** one of four audited fields by hue instead of becoming a colour, and
`tone` selects one of three measured gradients instead of computing one. The palette is closed by
design; reopening it would reintroduce exactly the failure Alloy exists to refuse.

**The rewind is not a global mode.** v1 retinted every token under
`html[data-mode="backtest"]`. That doubled Alloy's audit matrix to 112 unmeasured pairs, and §4.6
kills the word "backtest" *because* §7 insists the rewind is not a mode — a global visual shift is
the strongest possible assertion that it is one. v2 uses three in-palette signals instead: a butter
band, the as-of control sitting pressed in the top bar on every screen, and the mandate-lens
disclosure.

**The as-of control moved to the top bar.** In v1 it was a module in the rail, titled with the mode
name, that scrolled away on a long report. §4.5 calls it first-class and present everywhere. Two
dates side by side in a segmented control make *same screen, different date* a visible affordance
with no popover.

## Structure

`alloy.css` is **vendored and never edited** — lines 26–451 of the toolkit verbatim, plus its late
`.cvchip` block. Its contract is 56/56 measured WCAG pairs at rest and on hover in both themes;
editing a token invalidates an audit that is not cheap to redo, and re-vendoring stays a copy
rather than a merge. Everything v2 adds lives in `warhol-v2.css`.

`onboarding.js` and `hints.js` **own no state and install no listeners.** They export pure
`(state) → htmlString` renderers plus `act(verb, el, state) → bool`. Only `app.js` holds state,
calls `render()`, or binds an event. That invariant is what makes the file split safe; without it
you get double renders and the "first click does nothing" bug.

`warhol-seed.js` is byte-identical to `_shared/warhol-seed.js` and is never mutated. `v2-seed.js`
layers over it with new collections, sparse per-creator overlays, and accessors that always return
a usable value.

## Decisions worth knowing

**The overlap prompt is not a wizard step.** §6.7 says it never blocks, and modelling it as step 2.5
makes it blocking by construction. It renders beneath the category grid and Continue stays enabled
throughout. Its copy is composed from roster fields — member count, category, creators saved — so
the sentence and the data cannot drift apart.

**Joining adopts their brief.** The shared thing is the pool of names, not the queue. So the
summary shows the existing owner's mechanics, read-only, and what stays yours is the queue and the
calls. Other members' decisions appear as annotations on the card, never as removals — the
disagreement is the most valuable label in the set.

**One hint at a time, never two.** Three of the five fire on the Scout Report. Rendering all three
on first open would rebuild, by accident, the upfront tour §6.9 refuses. Views arm what they could
fire; `render()` picks one, priority-ordered.

**Effort, not currency, at creator scope.** Surfaces checked, days tracked, passes run. Currency
appears at mandate scope on the watchlist, where a recurring cost actually accrues. Pricing a human
being on screen is both grim and the wrong optimisation target.

**Pruning is a Pass reason.** The button reads "Stop watching", the reason reads "No longer worth
tracking", and the resulting state reads "Passed". It is never a fourth verb and never labelled
"Prune".

**`Food / Home` is the recommended first category.** The seed only carries a January 2024 cohort for
`m_food`, so it is the path that lands populated. Other categories fall through to the designed
empty state, which is a legitimate outcome per §5.4 — the guarantee is that the screen is real and
honest, not that it is full.

## Running it

Runs from `file://` — classic scripts, no modules, no fetch, no build. Or serve the parent folder
and open `/v2/`.

The demo path: sign in as Scout → *Someone with an audience and nothing built for them* →
*Food / Home* → join the existing brief → *A list we own and sell against* → land in January 2024.

All creators, scores and revenue figures are synthetic. The creators are **deliberately fictional**:
fabricating evidence quotes and strain claims about real accounts is a real risk once a deck gets
forwarded.
