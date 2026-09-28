# Warhol Scout v4 — design notes

v4 is v3 after a second review pass, focused on the drop card and the report.
v1, v2 and v3 are untouched. Same PRD, same frozen 24-creator cohort, same Alloy toolkit.

## What v3 got wrong

**The card said nothing useful.** It carried two chips — *"5 of 6 lines absent · 21 surfaces checked"*
and a truncated quote. Neither tells you what is missing, how much demand there is, or why now. The
first was a summary computed at render time; the record underneath already said
**"No newsletter, no site, no store"** in plain words. v4 stops summarising and starts surfacing.

**The same number was displayed two unrelated ways.** An ink block with a split bar on the drop,
watchlist and Track record; a ring on the report. Worse than inconsistent — **confidence only existed
on the report**, so the one number §4.3 insists must sit beside the score was invisible until you had
already committed to opening something.

**The report had no way out**, and every click threw you to the top.

## The card

| | v3 | v4 |
|---|---|---|
| Score | ink block, `87/100` + split bar | **ring** — number is the score, sweep is confidence |
| Signals | 2 chips, one a truncated quote | **3 named rows** — Demand / Missing / Timing |
| Verbs | cream / outline / ghost, "Pass…" | **green Promote · amber Watch · outlined Pass**, icons, no ellipsis |
| Height | 320px, 2.9 per screen | **209px, 4.1 per screen** at 1440 |

The three signals come verbatim from the subsignals:

- **DEMAND** — *1,940 purchase-intent comments* · filled teal mark
- **MISSING** — *No newsletter, no site, no store* · **hollow** teal mark
- **TIMING** — *3 explicit markers of capacity strain* · filled butter mark

Demand and Missing are both inside the Monetization Gap pillar, which is why both are teal — correct
by the scoring model but confusing on screen. **Missing is an absence, so its mark is hollow.** That
is the same logic the verification marks already use, where absence is a *shape* and never a colour.

The thesis and the quotes moved behind *Show the evidence*. A quote reads well on its own but does
not answer what a row has to answer.

## One score language

The ring appears at three sizes — 44px in the compact bar, 54px in list rows, 104px on the report —
on every surface. Two independent quantities in one shape with no legend.

**The sweep is banded on the minimum-confidence floor the product already enforces:** teal at or
above 75%, butter 50–74%, red below. The colour therefore marks a real threshold rather than an
invented one. Today's drop reads uniformly teal *because clearing that floor is why those names are
in it*; the colour earns its keep where thin evidence actually lives — Tobi Aarnio at 74% on Track
record, Lark Osei at 58% on the watchlist, and the Run-a-name override.

Consequence: **confidence is now legible on every list**, so "thinly checked" is something you can
act on before spending a click.

## The report

- **A way out** — a back button in the header, and another in the compact bar.
- **The tall header is the arrival and scrolls away.** At ~250px it could not be sticky without
  holding a third of the viewport permanently. A compact bar takes over carrying back, ring, name and
  the three verbs, so a decision can be made from anywhere in the report.
- **Scroll position survives a re-render.** In v3 opening a disclosure reset scroll from 700 to 0,
  because `render()` replaces the whole DOM. Now captured and restored; only `go()` resets, because
  only a view change should.
- **"surf." is spelled out as "surfaces"**, with the `?` kept on the section heading — it is the
  credibility number in the product and it was abbreviated to four characters nobody could parse.

## Colour

The four field jobs from v3 stand: **teal** the gap is real · **butter** the timing · **lilac**
Warhol speaking about itself · **ink** weight and summary.

The verbs sit deliberately *outside* that system — an action is not a piece of evidence, and reusing
teal for Promote would say "the gap is real" about a button. Two tiers of action, and they should not
look alike:

- `.btn--primary` — neutral, surface-inverting: New brief, Save, Sign in, Back
- `.vbtn--go` — green Promote, the one decision about a person

**Gradients**, after measuring every candidate. Alloy's own header refuses "the usual blend failure,
where the gradients arrive and the legibility quietly leaves", so nothing was added on feel:

- **Mesh on the page background** — the slab covers the content area, so nothing sits on it.
- **Duo on the brand mark** — 8.1:1 at both endpoints. The one element whose job is to be an identity
  rather than carry information, so decoration is honest there.
- **Not on the Promote button.** Duo is lilac→teal, which would assert *Warhol speaking* and *the gap
  is real* about an action that is neither — and the veiled version is dark again, the exact problem
  the inverted button existed to solve.
- **Not on the score field or the payoff card yet.** `gr-veil` fades in from `transparent 18%`, so on
  a short block the text sits in the unveiled band: measured **1.54:1**. The token is built for a tall
  element with its text low, and using it anywhere else reproduces the failure it was written against.

## Verified

Zero pairs below AA in either theme. No horizontal overflow at 375px on any surface, including the
six-column check record. One inline style in `app.js` — the definition popover's computed position.
`alloy.css` and `warhol-seed.js` are byte-identical to v3's, and the seed matches `_shared/` across
all five prototypes.

## Running it

Open `v4/index.html` directly, or serve the parent folder and open `/v4/`.

Demo path: sign in → today's drop → read three signals per creator → open a report → scroll until the
compact bar takes over → open *How it scored* → **Track record** → read a call → what happened next.
Switch to Spotter in the account menu to see *Refer to desk* in the position Promote occupies.

All creators, scores and figures are synthetic, and the creators are **deliberately fictional** —
fabricating evidence quotes about real accounts is a real risk once a deck gets forwarded.
