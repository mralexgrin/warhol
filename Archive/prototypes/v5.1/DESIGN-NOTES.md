# Scout v5.1 — design notes

v5.1 is v5 after a three-reviewer design pass (craft, accessibility, heuristics + cognitive
walkthrough). **No new screens and no design changes** — the card, the report and the `?` are
untouched, because all three reviewers agreed those were right. Everything here is a defect fix.

v5 is preserved unedited alongside it, as are v1-A, v1-B, v2, v3 and v4. `alloy.css` and
`warhol-seed.js` remain byte-identical to `_shared/` and to every other version.

The review that produced this list is at [`../v5/REVIEW.md`](../v5/REVIEW.md).

---

## Directed UI edits

Made after the review, on direction. These are taste calls, not defects.

- **Light is the default.** It no longer follows the system preference — a dark first paint for
  someone who never asked for one is the surprise.
- **One account control.** The rail already carried the identity at the bottom and the top bar
  carried a second avatar doing the same job. The identity is now the control, where it already
  was, and its menu opens upward. The top bar is the breadcrumb and nothing else.
- **One set of verbs on the report.** They sit in the header while the header is on screen, and
  the sticky bar picks them up the moment it scrolls away — so only one set is ever visible. v5
  had a second sticky row at the foot of the page, which meant two identical action rows on
  screen at once for the whole length of the report.

  *This departs from §6.2's sketch, which puts the verbs at the bottom.* Directed, and noted here
  so the divergence is on the record rather than discovered later.
- **The sticky bar sits flush.** It was pinning below `#main`'s padding, because sticky offsets
  resolve against the padding box — leaving an 18px strip of page scrolling visibly above it.
- **The card's own action stopped disappearing.** `.row:hover` and `.vbtn--open` were the same
  value, so hovering a card made *Open the report* dissolve into the row it sat on. The button now
  sits one step further from the surface than the hover.
- **The watchlist check-back is a callout, not a button.** Flooding the block with butter and
  putting three buttons inside it made the whole thing read as one enormous button. The colour now
  marks the state and the buttons inside are allowed to look like buttons.
- **One score language.** The ring the lists use, at four sizes — 40px in the sticky bar, 54px on
  cards and the watchlist, 104px on the report. v5 invented a second treatment for the report, a
  bare number in a panel, so the score looked like a different quantity depending on which screen
  you were on.

Two contrast failures surfaced while checking this and were fixed: the signed-in email measured
3.87:1 in the rail and 4.22:1 in the menu. Both were pre-existing — earlier sweeps never opened
the account menu, so neither had been measured before.

---

## The four Criticals

### 1. Below 960px, 85% of every screen was unreachable

`scout-v5.css` had two media queries fighting: the 960px one correctly set `height: auto`, and a
900px one re-declared `height: calc(100dvh - 22px)` and won on source order — which re-armed the
`overflow: hidden` that vendored alloy puts on `.slab`. Measured at 375px: container 790px, content
5110px, **4320px clipped with no way to scroll to it.** All seven cards were in the DOM; you could
see the first one.

Fixed by deleting the height re-declaration and, more importantly, **stating `overflow: visible`
explicitly** in the 960px query. The vendored `overflow: hidden` is dormant only while nothing
constrains the height, so without that line the next height declaration silently resurrects the
bug. Now: 0px clipped, document scrolls, verified at 320/375/640px.

**v4 carries the identical pair of queries and the identical bug.** Left alone by instruction.

### 2. Banned vocabulary reached the screen

The outreach package for today's top-ranked creator read *"…we checked 18 surfaces."* §4.6 names
*surfaces checked* as forbidden. Six creators were affected.

The rename layer **was** being applied — its patterns just only matched `"N surfaces checked"`.
The seed also says *"we checked 18 surfaces"*, *"across 10 surfaces"* and *"11 of 11 surfaces
resolved absent"*, none of which matched. Now the layer matches the word itself in every
construction, most specific first, so:

```
we checked 18 surfaces              → we looked in 18 places
11 of 11 surfaces resolved absent   → nothing found in any of the 11 places we looked
Nothing owned across 10 surfaces    → Nothing owned in 10 places
```

The **copy-to-clipboard handler bypassed the rename layer entirely**, so the text you would paste
into a real email was fully unrewritten. That was the higher-stakes half and it now routes through
`plain()` like everything else.

### 3. Focus was destroyed on every interaction

`render()` replaces the whole of `#app`, and there was not one `.focus()` call in the file.
`document.activeElement` was `<body>` after every action — opening a report, toggling a disclosure,
opening a tray, even pressing Escape. Since nearly every branch of the click handler ends in
`render()`, a keyboard user re-tabbed from the top of the document after *every* click.

Now a locator for the focused control is captured before the DOM is replaced and focus is restored
to its replacement afterwards. A view change instead moves focus to the new `<h1>` — which is also
what tells a screen reader the page changed at all.

### 4. `aria-live="polite"` wrapped the entire application

…which is entirely replaced on every render, so nudging the brief-cap stepper by one looked
identical to changing view. Removed from the shell; replaced with one small visually-hidden region
that receives short strings for the things that genuinely are status messages — pass, watch, copy.
Navigation announces itself through the focus move above.

---

## What else changed

**Recovery and control**
- **Escape now closes the pass and watch trays**, not just the popover and the account menu. v5
  taught you the key worked and then silently dropped it two clicks later.
- **The session survives a reload or a back-swipe.** v5 held every decision in memory only, so an
  ordinary trackpad gesture mid-demo reset everything to the sign-in gate with no warning. Decided
  state now persists to `sessionStorage`; the seed rebuilds the rest.
- **A promoted creator can be reopened** from the decided row — without which the outcome control
  was unreachable.

**Things that contradicted themselves**
- **The rewind no longer leaks.** It attaches to the drop and the report (§7) and resets when you
  navigate anywhere else. v5 left it silently active, so the watchlist said *"Checking back in 838
  days"* and the passed list showed 2026 dates inside a 2024 view, with no banner to explain it.
- **One check total, not two.** "How we checked" stated `31 checks across 12 places` in its header
  and `25 checks in total` in its own footer a few lines below — two different sums for *how
  thorough was this*, on the page whose entire job is being defensible. The footer no longer
  restates the count.
- **"None of them earning" is now three readings, not two.** It fired on any Present item, which
  put it directly above *"YouTube monetization — on."* A Present *earning* switch now reads *"some
  of it already earning."*
- **A new brief gets the state it was promised.** v5 said *"nobody in Scout matches it yet, we'll
  go looking tonight"* and then handed you the house brief's seven names one click later. A fresh
  brief now shows its own designed waiting state.
- **The overlap offer actually compares categories.** It was hardcoded, and offered a restoration
  brief to someone writing about home fitness. It now matches on category and stays hidden when
  there is nothing to match.
- **The repair callout states one figure**, computed, instead of three different ones.
- **The watch tray asks for the reason it promises.** "2 months" and "3 months" were both subtitled
  *needs a reason* and neither ever asked. §5.8 wants the reason, so it now asks for it.

**Things that were invisible without a mouse**
- **Confidence has text.** The score ring encoded it as a sweep and a colour band, reachable only
  through a `title` on a non-focusable div. §5.3 makes confidence the thing that stops a burned
  Scout distrusting the drop.
- **The five `?` buttons have distinct names** instead of five identical "Show the receipts".
- **The receipts popover has a role, a label, and receives focus.**
- **`vmark()` carries its own text alternative.** It worked in v5 only because every call site
  happened to sit beside descriptive text; nothing enforced it.
- **The second Pressure line says it is Pressure.** Its label was an empty string — the category
  was carried by sitting under the first line in the same colour, which does not survive being
  read aloud.
- **Creator names are headings**, so cards can be jumped between the way a sighted reader scans
  them.
- **The `?` hit area is 28×28** behind a 16px glyph. 16px is under WCAG 2.2's 24px floor, and a
  small circular target is the hardest kind to hit with a tremor or one thumb.
- **The nav pill no longer reads "Watchlist3".**

**Smaller**
- The drop counter reads 0 at zero remaining, instead of reverting to the full total at the exact
  moment the page says "Worked to zero".
- The passed list is sorted newest first, and the seed now carries entries from **March and
  February** — without one, the screen could not demonstrate the thing §6.3.1 says it exists for.
- The decline reason survives being recorded. Declining rewrites the verb to `pass` for suppression
  (§8), which in v5 made the outcome control unreachable and took the reason with it — the one fact
  the whole field exists to capture. It now shows on the decided row and in the passed list.
- Raw ISO date in the Pressure receipts now renders as a sentence.
- `"No youtube channel"` → `"No YouTube"` in the Demand receipts. The card path had a word map; the
  receipts path never got it.
- Three ungated transforms now respect `prefers-reduced-motion`, most importantly the compact bar's
  — it is scroll-linked, which vestibular guidance singles out.
- Disclosure buttons carry `aria-controls`.

**The one visual change**
- **The claim cards lost their coloured left border.** The field colour is already carried by the
  claim heading and by the card's dot marks, so a 3px side accent was the same fact a third time —
  and a recognisable generated-UI tell. The *Why they're on this list* block is now drawn as a note
  rather than a card, which is what it is; it already says `GATE · PASS` in words, which is where §4
  puts that meaning.

---

## Rejected — verified spec-faithful, not defects

**"The report's claim order doesn't match the card's."** §6.2's prose says *same order*; §6.2's own
layout sketch puts the report in the order Demand → Why they're on this list → Pressure → Missing,
and argues for it explicitly — *"Pressure sits above Missing. Demand and Pressure make you lean in;
the inventory is the proof you check second."* The build follows both sketches. **The PRD
contradicts itself** — that is a documentation fix, not a build fix.

**"The `?` on Demand returns mostly Missing evidence."** §6.11's own worked example of Demand's
receipts is *"No newsletter. No store. No sponsored posts. 1,940 people asked where to buy. We
looked in 6 places"* — mostly absence lines, by design. The reviewer independently rediscovered the
exact cost §6.11 concedes in writing. A known, accepted trade.

---

## Verified

Re-run from scratch on v5.1, including the two checks v5 got wrong:

- **Reachability at 320/375/640px** — 0px clipped, document scrolls. *This is the check v5 never
  ran: it measured horizontal overflow, which was fine, and never asked whether the content could
  be reached.*
- **Vocabulary sweep including the outreach package** — no *Warhol*, *surface*, *purchase-intent*,
  *capacity strain*, *Operator Strain*, *Monetization Gap*, *Format Fit*, *Spotter*, *Track record*
  or *mandate* in the rendered text of any view. *v5's sweep never opened the outreach view, which
  is exactly where the leak was.*
- **Contrast** — zero pairs below AA in both themes across 12 screen states, now including the
  outreach package and the pass tray.
- **Focus survives a render**; Escape closes trays; `#app` carries no `aria-live`; seven card
  headings on the drop.
- **Session survives a reload** — decisions, saved briefs and view intact.
- Full click sweep, no console errors.
- `alloy.css` and `warhol-seed.js` byte-identical to `_shared/`.

**One thing stated precisely, having been sloppy about it once:** on the report at 375px with both
disclosures open, `document.scrollWidth` reports 403 against a 375 viewport. The document **does
not** scroll horizontally — `scrollLeft` stays 0 on both `documentElement` and `body` — and no
element sits outside the viewport once elements inside scroll containers are excluded. It is the
check-record table scrolling inside its own `overflow-x: auto` wrapper, as intended. Nothing is
lost or unreachable.

## What a real assistive-technology pass would still need

The screen-reader findings above are fixed against the mechanism, not against a transcript. An
actual NVDA+Chrome and VoiceOver+Safari session through sign-in → drop → report → promote is still
required to hear what the new live region and focus moves actually produce. Likewise switch-access
and voice-control on the trays and popover, and a colour-vision simulator on the `not_found` hatch
and the ring's warn/stop bands.

## Running it

Open `v5.1/index.html` directly, or serve the parent folder and open `/v5.1/`.

Demo path unchanged: sign in → **January 2024**, five unknowns → open Ines Calvo-Werner → read the
case → *what happened next* → **Come back to today** → today's seven → Promote → outreach package →
tell Scout how it went.

All creators, scores and figures are synthetic, and the creators are **deliberately fictional** —
fabricating evidence quotes about real accounts is a real risk once a deck gets forwarded.
