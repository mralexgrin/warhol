# Scout v5 — design notes

v5 builds PRD v1.3 (`PRD-WARHOL-SCOUT.md` §13.2). v4 is the base and is untouched, as are
v1-A, v1-B, v2 and v3. Same frozen 24-creator cohort, same Alloy toolkit.

**Warhol is the engine; Scout is the product.** The interface says Scout everywhere. Warhol
survives in the rail footer and nowhere else (§4.6).

---

## The three things v5 rewrote

### 1. The card

| | v4 | v5 |
|---|---|---|
| Claims | Demand / Missing / **Timing** | Demand / Missing / **Pressure, on two lines** |
| Pressure value | `3 explicit markers of capacity strain` — a level | `"sorry for the gap…" — their words, 17 days ago` + `Posting 41% less than they used to` — changes |
| The quote | behind *Show the evidence* | **on the card** |
| The audience | `1.2M across 3` | **a count only** — `TikTok · 842k` |
| Expand | *Show the evidence and the full inventory* | **gone** |

Two rules do the work. **Every Pressure value is a change, never a level** — nobody knows
whether 12% is a good reply rate, and *replies fell 22% → 3%* is a fact. And **Pressure shows
two lines, always**: one behaviour change is a holiday, two at once is a person going under.
Their own words lead, because only one of four sub-signals produces a quote.

The expand collapsed away because nothing behind it was worth hiding once the three claims
carried real values. The card is four lines and a name.

### 2. The report

The report is the card, expanded — same claims, same order, same words:

```
Demand · Do people want to buy?                       +38
Why they're on this list                       gate · pass
Pressure · Will they take the call?                 32/40
Missing · Is there anything to buy?                   +20
  What they've built
  What they've switched on — nothing, anywhere
```

- **Pressure sits above Missing.** Demand and Pressure make you lean in; the inventory is the
  proof you check second. A ten-row list in the middle buried the strongest line on the page.
- **Trajectory reads as *why they're on this list*** — the answer to *why did the machine pick
  this person*, which nothing previously stated. It carries trends, never a score.
- **"How it scored" is gone as a drawer.** Its arithmetic attaches to each claim.
- **Recommended play and Fit came out of drawers** onto the open page; the check record and the
  samples stay collapsed, because nobody opens receipts until they are challenged.
- **Weight is order, not a badge** — highest-value absence first, with a clause on that line
  only. *Missing everything, including the trivial things,* is a heading and not a number.
- **Off the report:** per-platform `id match %` (nobody acts on 87% — a weak match is now a
  sentence) and report-level confidence (every Missing line already says how many places we
  looked in). Confidence stays on lists, where the detail is not visible.

### 3. The `?`

`?` returns **receipts, not a definition**. Pressing it on Demand does not say *"measures
whether the audience is worth more than they earn"* — it lists the 1,940 people, the absent
newsletter, the absent store, the six places. A definition is identical on every screen, so
after the first read every future `?` is a dead click. Receipts differ every time.

---

## New screens

- **The brief** — a description in, editable derived structure back, plus which kind of brief it
  is (*results in an hour* vs *we go looking tonight*), the guardrails in human units with money
  as the consequence, and the overlap offer to resume a paused one.
- **The house-brief tab row** — *Anyone worth a call* first, then yours, then *+ New brief*.
  **There is no All view:** the population is the sum of every brief ever written, and Fit is
  per brief, so a creator outside a brief has no gate and no honest score to put on a card.
- **The passed list** — one row states both halves, the reason and the trigger:
  `Pim Halvorsen · passed 30 Jun 26 · too small · returns at 100k followers`. Three *not what I
  asked for* passes and Scout offers to re-read the brief.
- **Admin** — four controls and no fifth: budget ceiling, the bar, where Scout looks, who is in.
- **The outcome** on a promoted creator — contacted / replied / signed / declined, with a reason
  on decline, each one invalidating a different part of the model.

**Cut:** Track record as a screen, everything role-dependent (Scout/Spotter, referrals,
*Refer to desk*), and `?`-as-definition.

## The rewind is a first-run moment

Sign in and you land in **January 2024** — same screen, same model, same bar, wound back. One
button comes back to today and the banner never returns. Proof, then promise; it does not become
a permanent destination. Reports opened while rewound carry *what happened next* and the call the
desk made.

---

## The data layer

`warhol-seed.js` is **byte-identical** to `_shared/warhol-seed.js` and to v2/v3/v4's copy.
Everything v1.3 added lives in `v5-seed.js`, in three kinds:

- **Authored** — what no projection can invent: citations, the 12-month audience trend,
  reliability, the split inventory, and every Pressure line stated as a change. The seed only
  ever stored the level.
- **Derived** — anything the record already says well: the audience's quotes, the creator's own
  words, cadence decay, the play, the samples, the platforms.
- **The v1.3 rescore** — §5.2 doubled the inventory, so §5.4 moves the bar to 78. Each creator
  carries an `uplift` for what their new absence lines are worth.

**The score is computed from its parts, never carried beside them.** The frozen seed's composite
drifts from its own pillars by a point or four on six creators — invisible in v4, because *How it
scored* was a drawer. v1.3 attaches the arithmetic to each claim, so `Demand + Missing + Pressure`
must equal the number at the top of the page. It does, for all 25 records.

**A display-time rename layer** rewrites the deleted vocabulary in seed prose — *Warhol* →
*Scout*, *purchase-intent comments* → *people asked where to buy*, *capacity strain* →
*pressure*, *N surfaces checked* → *we looked in N places*. It is applied to prose only and
**never to a quote**: a creator's own words are evidence, and editing evidence is the one thing
this product must not do.

## The bar

78, admin-tunable. Today's house brief clears 7 of 12; January 2024 clears 5 of 6, and Tobi
Aarnio sits below the line where he belongs. The cohort is not the population — every creator in
the seed already cleared an earlier gate, so more than a quarter of *this* list clears 78, which
is what §5.4 predicts for a pre-gated set.

---

## Colour

The four field jobs from v4 stand, with one rename: **teal** the opportunity is real ·
**butter** the timing · **lilac** Scout speaking about itself · **ink** weight and summary. The
verbs sit deliberately outside that system — an action is not a piece of evidence, and reusing
teal for Promote would say *the gap is real* about a button.

`alloy.css` is vendored **verbatim and unedited**. Its 56/56 contrast audit is the reason;
editing it would invalidate the audit silently.

## Fixed on the way through

- **The compact bar reserved 82px of dead space at the top of every report.** A sticky element
  sits in flow whether or not you can see it. It is now a zero-height anchor with the bar
  positioned out of flow — no reserved space, and no shove down the page when it appears.
- **A promoted creator had no way back to their report**, which made the outcome field
  unreachable — the one label that validates the whole model.
- The Google mark on the gate was dark-on-dark; the admin grid overflowed at 375px; the receipts
  popover ran off the bottom on a seven-line Missing block.

## Verified

- **Zero contrast pairs below AA** in either theme, measured over the rendered DOM across 11
  screen states each: gate, both drops, all five sections, the report with both disclosures
  open, the receipts popover, and both brief steps.
- **No horizontal overflow at 375px** on any surface.
- Every `data-act` exercised in one pass — 23 interactions, three verbs, both outcome paths,
  all four admin knobs, brief create/pause/resume — with no console errors.
- No deleted vocabulary reaches the screen: *Warhol*, *Scout Report*, *purchase-intent*,
  *capacity strain*, *surfaces checked*, *Operator Strain*, *Monetization Gap*, *Format Fit*,
  *Spotter*, *Track record*, *mandate* — all absent from the rendered text of every view.
- `alloy.css` and `warhol-seed.js` byte-identical to v4's and to `_shared/`.

## Running it

Open `v5/index.html` directly, or serve the parent folder and open `/v5/`.

Demo path: sign in → **January 2024**, five unknowns → open Ines Calvo-Werner → read the case →
*what happened next* → **Come back to today** → today's seven → open one → Promote → outreach
package → tell Scout how it went.

All creators, scores and figures are synthetic, and the creators are **deliberately fictional** —
fabricating evidence quotes about real accounts is a real risk once a deck gets forwarded.

## Known, and left

The frozen seed's own per-creator prose — headlines and outcome narratives written for v1 — uses
gendered pronouns for some creators. The rename layer deliberately does not touch pronouns: the
seed is shared byte-for-byte across five prototypes, and rewriting narrative prose is a change to
the cohort rather than to v5. Everything v5 itself writes uses *they*, which is also the PRD's own
vocabulary (§4.3, §5.2).
