# Design Review: Scout v5

**Reviewed:** `Warhol/prototypes/v5/` — the running build at `http://localhost:8126/v5/`, plus `app.js`, `ui.js`, `v5-seed.js`, `scout-v5.css`, `index.html` read end to end. Three reviewers in parallel: craft/intent, accessibility, heuristics + cognitive walkthrough.

**Brief:** derived, not inferred — PRD v1.3 exists. Key task (§2): *produce the names worth a conversation this week, and enough evidence to defend each one in a room.* Quality bar (§13.2): high-fidelity clickable prototype on curated data, not production code; the demo is the deliverable and the January 2024 beat "must be flawless."

**Coverage:** live and interactive, both themes, 320–1440px. Keyboard, focus, DOM semantics and reflow **verified**. Screen-reader *announcement* behaviour is **inferred** from mechanism — no NVDA/VoiceOver session was possible in this environment. Colour contrast was not re-tested; the prior audit (zero AA failures, both themes, 11 screen states) stands.

**Verification note:** every finding below was independently reproduced before being written down. Two reviewer diagnoses were wrong on cause and are corrected in place; two reviewer findings were rejected as spec-faithful and are recorded at the bottom with reasoning.

---

## Summary

The architecture is sound and the three things v5 set out to rewrite were genuinely rewritten. Card-to-report continuity — the thing v4 broke — was independently verified word-for-word on three creators. The plain-English discipline holds across roughly 60 live interactions. The report really does let someone defend a name out loud.

What fails is almost entirely **beneath** the design: the render loop, the viewport math, the rename layer's pattern coverage, and four places where the interface states two different numbers or contradicts its own promise within a few lines. For a product whose entire pitch is *the arithmetic is trustworthy and the vocabulary is clean*, those last two categories matter more than their severity labels suggest.

**Two claims in `DESIGN-NOTES.md` were overstated and are corrected below.** Both were real measurements with narrower scope than the sentence claimed for them.

---

## Critical — blocks access or breaks the key task

### 1. Below ~900px, 85% of every screen is clipped and unreachable
`scout-v5.css:45-52`. The `max-width: 960px` query correctly sets `height: auto`; the `max-width: 900px` query then re-declares `height: calc(100dvh - 22px)` and, being later and also matching, wins — which re-arms the `overflow: hidden` that `.slab` carries in vendored alloy.

Measured at 375px on the drop: container 790px, content 5110px, **4320px unreachable**, document not scrollable, all seven cards present in the DOM with the last ending 4985px below the fold. Patching the height live drops clipping to zero and restores scrolling.

**Affects everyone** — any phone, or any desktop user zooming past ~135%, which is an ordinary low-vision accommodation well below the 200% test point. WCAG 1.4.10 Reflow (AA): content is lost, not reflowed.

**Inherited:** v4 carries the identical pair of queries and the identical bug. Out of scope to fix there.

**Fix:** delete the height re-declaration from the 900px query, keeping it only for `.slab--gate`; add an explicit `overflow: visible` to the 960px query so this cannot regress silently against the vendored rule.

### 2. Banned vocabulary reaches the screen, and the clipboard is worse
The outreach package for today's top-ranked creator reads, on screen: **"No newsletter, no site, no store — we checked 18 surfaces."** §4.6 names *surfaces checked* as forbidden by name. Six creators are affected:

```
c_marguerite  … we checked 18 surfaces
p_dorota      Nothing owned — 11 of 11 surfaces resolved absent
c_ilse        Nothing owned across 10 surfaces
c_otto, c_hollis, c_mirela  (same shapes)
```

**Cause corrected.** The critic diagnosed this as `S.plain()` not being applied to the bullets. It *is* applied (`app.js:964`). The real cause is that the rename layer's patterns only match `"N surfaces checked"` and `"surfaces checked"` — none of the three phrasings above. The fix is pattern coverage, not a missing call.

The critic **is** right that the copy-to-clipboard handler (`app.js:1278`) bypasses `plain()` entirely, so the text a user would paste into a real email is wholly unrewritten. That is the higher-stakes half.

**Fix:** broaden the patterns to catch `surfaces` in any construction, and route the clipboard payload through `plain()`.

### 3. Focus is destroyed on every interaction, app-wide
`render()` replaces the whole of `#app` on every state change and there is not one `.focus()` call in `app.js`. Verified: `document.activeElement` is `<body>` after sign-in, after opening a report, after opening a disclosure, after opening a tray, and after pressing Escape.

Because nearly every branch of the click handler ends in `render()` or `go()`, this fires on *every* interaction, not just navigation. A keyboard user re-tabs from the top of the document after each one.

**Affects** keyboard-only users, screen-reader users (who lose reading position, not just the focus ring), and switch-access users, for whom every extra stop is physically costly. WCAG 2.4.3 Focus Order (A).

**Fix:** capture a stable locator for the focused control before replacing `innerHTML`, restore to the equivalent new node afterwards, and fall back to focusing the view's `<h1>` on a view change — which doubles as the screen-reader announcement for navigation.

### 4. `aria-live="polite"` wraps the entire application
`index.html:16`. The live region contains the whole authenticated app, and the whole authenticated app is replaced on every render. Nudging the brief-cap stepper by one is, to the live region, the same event as navigating to a different view.

Mechanism verified; the resulting announcement is **inferred** — full-subtree replacement of a page-sized live region is documented as unreliable across AT/browser pairings, tending to either flood or fall silent. Combined with finding 3, a screen-reader user gets no dependable signal that anything happened.

**Fix:** remove the attribute from the shell; add one small visually-hidden live region and write short status strings into it only for genuine status changes (pass, watch, promote, copy). Navigation announces itself via the focus move in finding 3.

---

## Major — significantly degrades the experience

### 5. Escape closes the popover and the account menu but not the trays
`app.js:1309-1311` checks only `state.rcp` and `state.menu`. Verified: open a pass tray, press Escape, tray persists. The interface teaches you the key works, then drops it two clicks later — and with focus already lost (finding 3), reaching the tray's own Cancel means re-tabbing from the top.

### 6. Browser Back destroys the session with no warning
No `pushState`, no routing, no persistence. Back exits the app; Forward reloads it cold at the sign-in gate with every decision, brief and outcome gone. An ordinary trackpad swipe does this.

For a demo-grade prototype this is not a production gap — it is a **live-demo hazard**, and the demo is the deliverable. Fix is cheap: persist `state` to `sessionStorage` on render and restore on boot, so an accidental back or reload is harmless.

### 7. The rewind persists silently off the drop and the report *(aligned — 2 reviewers)*
The lens banner exists at exactly two call sites. Navigate to the watchlist while rewound — an ordinary rail click — and you get **"Checking back in 838 days"** (a negative day count, `watchedSince` in 2026 measured against a 2024 `asOf`), with nothing saying you are still in January 2024. The passed list is worse: rows dated **"passed 30 Jul 26"** displayed while the app reads as of two and a half years earlier. Admin shows January 2024 drop counts beside July 2026 spend, unmarked.

`totoday` is the only reset and it is reachable only from the drop's banner.

**Fix:** either show the lens on every view while rewound, or scope the rewind to the drop and the report and reset it on navigation elsewhere. The second is closer to §7's intent — the rewind attaches to a creator's report, not to the whole desk.

### 8. The same disclosure states two different totals
"How we checked" header: `31 checks across 12 places`. Its own footer, a few lines below: `25 checks in total`. Two functions summing different subsets — `checkSummary` counts built + switched-on + study rows, `effortFor` counts built only.

**This one is mine.** I changed `checkSummary` to make the header honest and left the footer disagreeing with it. On a page whose pitch is defensibility, two numbers for "how thorough was this" a few lines apart is the worst possible bug.

### 9. A label contradicts the line directly beneath it
On the Run-a-Name creator: **"WHAT THEY'VE SWITCHED ON — A FEW THINGS, NONE OF THEM EARNING"** sits directly above **"YouTube monetization — on."** `onLabel()` treats any Present item as "none of them earning," which is false when the Present item *is* the monetization switch. Reproduces every time on a showcased feature.

### 10. A new brief contradicts its own promise one click later
Verified end to end. The guardrails step says: *"This is a narrow one — nobody in Scout matches it yet. We will go looking tonight and have first names for you tomorrow."* Saving it lands on **"7 creators cleared the bar for Any category, 5k–75k"** — the house brief's population, decisions and all, because `fitFor()` returns pass for any unrecognised brief id.

The overlap box is also hardcoded: a home-fitness brief was offered **"Restoration and workshop"** as a likely match.

### 11. The decline reason is unrecoverable the moment it is recorded
Record Declined → "Bad timing, ask next year," and the creator's state flips to Passed, the outcome section vanishes, and the specific reason is never shown again anywhere. `reportView()` only reaches `outcomeControl()` when `d.verb === 'promote'`; the decline handler rewrites `d.verb` to `'pass'`, making that branch unreachable.

§8 is explicit that each decline reason invalidates a different part of the model. This is the one fact the feature exists to preserve.

### 12. The watch tray promises a reason it never asks for
"2 months" and "3 months" are both subtitled **"needs a reason."** Choosing either completes immediately. Either add the step or stop promising it.

### 13. The passed list is unsorted, and has nothing old in it
Verified order: `30 Jul · 30 Jun · 22 Jul · 19 Jul · 11 Jul`. The screen exists to answer *"I passed someone in March and now I can't find them"* (§6.3.1), on a surface with no search box by decision — so scannability is the only mechanism, and it needs a reliable sort to lean on. Nothing older than three weeks exists in the seed either, so the core use case cannot be demonstrated.

### 14. The repair callout states three different figures at once
Heading (computed): `1 of 3`. Body (hardcoded): `One more of these`. Seed row: `2 of 3 before Scout offers to re-read it`.

### 15. Confidence has no text alternative anywhere
The score ring encodes score as text and confidence as a sweep plus a colour band, exposed only through a `title` on a non-focusable `<div>`. No keyboard or screen-reader path to it. §5.3 makes confidence the thing that stops a burned Scout distrusting the drop; it is invisible to two user groups.

### 16. All five `?` buttons on a report share one accessible name
Every one is `aria-label="Show the receipts"`. A screen-reader user pulling the buttons list hears it five times.

### 17. Three transforms are not gated by `prefers-reduced-motion`
The progress-bar fill, the disclosure chevron, and — most significantly — the compact bar's `translateY`, which is **scroll-linked** and can re-trigger repeatedly near the threshold. Vestibular guidance singles that pattern out.

---

## Minor

- The second Pressure line's label is an empty string, so a screen reader hears the behavioural line with nothing marking it as still Pressure — meaning carried by visual position alone (`ui.js`, `claimRows`).
- `vmark()` emits an empty span; it works today only because every current call site happens to add adjacent text. The component guarantees nothing.
- `.deft` (`?`) is a 16×16px target, below WCAG 2.2's 24px minimum. Fixable with a transparent padding halo without growing the glyph.
- The receipts popover and account menu have no role, no label, and never receive focus.
- Creator names are `<span>`, not headings — no heading-jump navigation on the one screen designed for fast scanning.
- Nav pill counts concatenate into the accessible name: "Watchlist3".
- The drop counter counts down 7→6→5, then reverts to 7 at zero, at the exact moment the page says "Worked to zero" (`remaining() || dropList().length` — 0 is falsy).
- Raw ISO date `2024-01-04` in the Pressure receipts, where everything else in the product renders through `shortDate()`/`ago()`.
- `"No youtube channel."` — lower-cased proper noun in the Demand receipts. The card path was fixed with a word map; the receipts path never got it.
- Disclosure buttons lack `aria-controls`.
- **Side-tab accent** (lint hook, `scout-v5.css:397`): 3px coloured left border on the claim cards. The field colour is already carried by the claim heading and by the card's dot marks, so this is a third encoding of the same fact; the dashed *Why* variant is likewise already stated in words as `GATE · PASS`. Worth removing on redundancy grounds. Noting that design-critic examined hierarchy and restraint specifically and found nothing to flag — so this is a lint opinion the human reviewer did not share.

---

## Rejected — verified as spec-faithful, not defects

**The report's claim order does not match the card's.** Raised as a Major H4 violation against §6.2's *"same three claims, same order, same words."* Rejected: §6.2's own layout sketch puts the report in the order Demand → Why they're on this list → Pressure → Missing, and the same section argues for it explicitly — *"Pressure sits above Missing. Demand and Pressure make you lean in; the inventory is the proof you check second."* The build follows both sketches faithfully. **The PRD contradicts itself** — its prose says "same order" and its sketch does not. That is a documentation fix, not a build fix.

**The `?` on Demand returns mostly Missing evidence.** Raised as a Major H10/H2 failure. Rejected: §6.11's own worked example of Demand's receipts is *"No newsletter. No store. No sponsored posts. 1,940 people asked where to buy. We looked in 6 places"* — mostly absence lines, by design. The evaluator independently rediscovered the exact cost §6.11 already concedes in writing: *"someone who genuinely doesn't know what Demand means gets four facts and has to infer the concept, which is exactly why rule 1 is first."* The observation is sound; it is a known, accepted trade, not a defect. (The lower-cased "youtube" inside those receipts **is** a real bug — see Minor.)

---

## Corrections to `DESIGN-NOTES.md`

Both were real measurements whose scope was narrower than the sentence claimed:

1. **"No horizontal overflow at 375px"** — true, and it tested the wrong axis. Reachability was never checked, and 85% of the page is unreachable at that width. Mobile was not verified.
2. **"No deleted vocabulary reaches the screen"** — the sweep covered the drop, both reports, watchlist, passed, run-a-name, admin and both brief steps. It never opened the **outreach package**, which is where the leak is.

---

## What works well

- **Card-to-report continuity**, independently verified word-for-word on three creators — the exact thing v4 broke and v5 set out to fix.
- **The January 2024 payoff beat** lands: *"Scout ranked her #1 at 61K followers. She now has 2.4M… Everything Scout said was missing is now the business. Someone else built it."* §13 says this is the only part that must be flawless.
- **Plain English holds** across ~60 live interactions. "not there · we looked in 6 places", "Nobody vanishes", "Scout found nothing worth your time today" all read in seconds, untaught.
- **The brief readback is real**, not canned — genuine keyword matching, correctly omitting platforms the user didn't mention.
- **Verification marks are genuinely shape-differentiated** (solid / hollow / hatched / dashed), confirmed in both themes. Real colour-blind-safe design, not asserted.
- **Every control is a real `<button>`**; the focus ring is intact and nothing in `scout-v5.css` overrides it.
- **Nothing is destructive** — Undo on every recorded decision, and passing never deletes.
- **The three-verb loop is fast**: ~14–16 clicks to work a drop to zero, with no fatigue at 7 cards.
- **Pause → Resume** works exactly as promised, decisions intact.
- **The misread-brief offer** — three "not what I asked for" passes and Scout offers to re-read it — is a rare case of a system initiating help rather than waiting to be asked.
- **Zero console errors** across the full walkthrough.

---

## Recommendation

**Revise — fix criticals first.** Not a rethink. Nothing here touches the card, the report or the `?` design, all three of which do what §13.2 asked.

The single most important next move: **fix the reflow bug**, because it is two lines and it currently makes the product unusable on a phone, and **fix the vocabulary leak**, because it is the PRD's named-and-banned word on the highest-stakes surface in the product and it travels into a real email via the clipboard.

The findings cluster tellingly: three of them (the passed list's missing history, the outcome record's vanishing reason, the `?` receipts' casing) sit exactly where the PRD placed its most deliberate bets. Those aren't random misses — they're the places where the design's ambition ran ahead of the build.
