# Scout P0 preview — what changed

> **Merged into `App/scout/` on 28 Sep 2026** (branch `p0-consistency`). The
> `scout-p0/` preview folder described below no longer exists.

Isolated copy of `App/scout/` at **http://localhost:8140/scout-p0/**. Nothing in the
real `scout/` app was touched. No copy changed (CLAUDE.md voice rules respected) —
these are structural/visual consistency fixes only.

## P0 #2 — Type scale → rem tokens  *(alloy.css + scout-v52.css)*
- Added a 9-step rem scale to `alloy.css :root`: `--fs-1`(11px) … `--fs-9`(44px).
- Mapped all **251 hardcoded px font-sizes** (26 distinct values, e.g. 12/12.5/13/13.5)
  to the nearest token. **0 bare px font-sizes remain.**
- rem-based, so text now honours browser zoom / OS large-text (verified: root 20px →
  body scales 14.5→18.75px; before, px froze it). `clamp()` responsive sizes untouched.

## P0 #3 — Radii through tokens  *(alloy.css + scout-v52.css)*
- The three identical 44px nav-rail buttons carried **14 / 15 / 15px** — now all `--r-sm`.
- `.p-ic`, `.whoami`, mini-rail buttons → `--r-sm`; `.replay--on`(16), `.signin-mark`(20) → `--r-md`.
- Left alone deliberately: the avatar/initials ladder (`.ini*`/`.face*` 9/12/15/22px) is an
  internally-consistent size-linked set, and micro radii ≤5px (dots, ticks, bars).

## P0 #1 — One list-row scaffold  *(app.js + scout-v52.css)*
- **Watchlist row rebuilt to match the drop exactly:** score ring far-left → avatar beside
  name → verbs on the right. It previously mirrored the drop rotated (ring on the *right*,
  no ring column), which read as a different screen.
- `.wrow` grid `44px 1fr auto` → `54px 1fr 168px`; action stack reuses the drop's `.acts`.
- **Passed** left as the deliberate lighter variant (no ring — a pass isn't scored against
  today's bar; it carries a reason + trigger). Scaffold still aligns: avatar-left, action-right.

## P0 #4 — One eyebrow  *(alloy.css + scout-v52.css)*
- The small-caps section kicker was defined ~30× at **5 sizes (9.5–11px) and 4 tracking
  values (.1–.15em)**. Size now reads from `--fs-eyebrow`, tracking from `--ls-eyebrow` (.14em).
- **Open question for Alex (not changed):** the colored banner/callout blocks (butter =
  what-they-make, teal = the two gates, lilac = the read, warn-bg = window closed) are a
  *semantic* system, not drift. Flattening them to one style would fight the design intent
  in DESIGN-NOTES. Left as-is pending your call.

## Verified (P0)
Drop, report (incl. dense gates), watchlist, passed — light + dark. No JS errors
(one benign `ERR_BLOCKED_BY_CLIENT`, unrelated). rem zoom-scaling confirmed.

---

# P1 / P2 layer

## P1 #5 — Rail icons have accessible names  *(scout-v52.css + app.js)*
- The collapsed rail hid each button's label with `visibility:hidden`, which also
  drops it from the **accessibility tree** — so all 6 nav buttons were nameless to a
  screen reader (the author intended `.tx` to be the name; visibility defeated it).
  Now hidden with `opacity:0` alone → label stays in the tree. **Zero visual change.**
- The account button (`.whoami`) wasn't covered by that rule (`.who` is `display:none`
  in the mini rail) → added `aria-label` = the user's name (matches the visible text in
  the wide rail, so label-in-name holds). Verified in the a11y tree: every rail button named.

## P1 #6 — Wayfinding echoes  *(app.js + scout-v52.css)*
- 4 of 6 pages already have H1 = nav label. The 2 thesis-title pages didn't, so the
  click and the landing shared no word. Added a small nav-word eyebrow (reusing the
  unified eyebrow): **TRENDS** over "Where the market is short", **NEW BRIEF** over
  "Add to Scout". Poetic H1s kept.

## Already handled / corrected from the original review
- **P2 #9 (text resize):** done in P0 #2 — everything is rem now.
- **P2 #11 (high-contrast):** the review was wrong — `alloy.css` **already** ships a
  `@media (prefers-contrast: more)` block that firms the greys/lines. No work needed.

## Deliberately NOT changed — flagged for Alex (documented design decisions)
- **P2 #10 (seed theme from system):** `initTheme()` explicitly rejects this with a
  defending comment — "a dark first paint for someone who never asked is the surprise."
  A conscious call; not mine to silently reverse.
- **P1 #7 (verb button colours):** "Green go, amber hold, outlined no" is a documented
  traffic-light semantic (scout-v52.css:689), not drift. Reads as primary + 2 secondaries.
- **P2 #12 (saturated cards in dark):** the bright butter/teal/lilac fields are Alloy's
  core "Pigment" aesthetic, tuned per-theme on purpose. A taste call, not a bug.

## Verified (P1/P2)
Rail a11y tree (all buttons named), Trends + New brief eyebrows, drop/watchlist/report
still clean. Dark mode confirmed well-built (every hardcoded ink sits on a pigment field
that stays light in both themes — nothing breaks).

---

# Singularity pass (deeper consistency)

Audited hover states and report typography end-to-end, then reduced everything to the
fewest possible treatments.

## Hover — one language
- The system was already ~singular: **every real button** already lifted identically
  (`translateY(-2px) + --el-2`: `.btn*`, `.vbtn*`, `.arrowbtn`, `.vgroup`) and **every
  surface** already tinted to `--panel-2h`. One outlier: `a.sm` (work-item cards) lifted
  `-1px`. Changed it to tint (`--panel-2h` + border), matching the platform pills.
- Rule now: **buttons lift, every card / link / surface tints.** Two behaviours, no exceptions.

## Labels — one eyebrow
- The report carried two uppercase-label tiers: 11px/.14em kickers vs **12.5px/.08em**
  banner headers (WHY NOW, MISSING, WHAT THEY MAKE, TYPE OF CONTENT). Collapsed the
  headers onto `--fs-eyebrow` + `--ls-eyebrow` — now **11px/.14em everywhere**. Hierarchy
  is carried by the coloured banner/pill container, not by a second text size.
- Swept the whole sheet for stray trackings: unified `.acct .guess`, `.src-tag`, `.wex th`,
  `.proposedtag`, `.fld-eye` (the "SHOW" toggle), `.engineft` (the footer) onto
  `--ls-eyebrow`. **Every uppercase label in the app is now one style.** (Left alone:
  real headings like `.gates h2`, mono check-codes, avatar initials, sparkline month axes —
  not eyebrows.)

## Dead CSS removed
- `.plat` / `.plat .n` / `.plat .f` — unused (report platform pills are `.acct`). Deleted.

## Verified
Report re-swept: `.ch h2`, `.covers-k`, and the kicker eyebrows all compute to
**11px / 1.54px** — identical. No console errors. No regressions across drop / report.
