# Autonomy Log

Newest entries at the top. This file is the memory of the run: read it at the start of every session.

## Flagged for human review
- **Pushing is yours.** The branch `autonomous/product-improvements` holds every commit locally.
  Pushing Warhol to the personal account was blocked for Claude on 28 Sep, so nothing here is pushed.
  Run: `gh auth switch -u mralexgrin && git push -u personal autonomous/product-improvements`, then
  open a PR into `main`. The branch contains phase7-report and everything before it.
- Sign-in screen prints a work email and the demo password on the public Pages site. Left alone:
  it is the auth gate.
- Demand classifier false positives (engine prompt). Left alone: AI prompt plus paid re-run.

## Current status
- Last completed: #9 accessibility checks
- Next: reflect (review pending), then #10 standalone Trends board
- Branch: autonomous/product-improvements (from phase7-report @ b48dda9)
- Open PR: none (cannot push)

## Log
### 2026-09-29: #9 Automated accessibility checks
- What: the smoke suite now checks WCAG AA text contrast on every screen (the nearest opaque background
  per text node, 3:1 for large text; skips sr-only, deliberately dimmed rows, and text over images or
  gradients) and one visible h1 per screen. A dark-theme pass repeats the screen checks. 389 checks.
- Found: the selected nav item's count chip (white on a 24% white tint over violet) was 3.98:1. It is now a dark tint.
  Nothing else in either theme falls below AA.
- Not automated: focus visibility. Alloy has a global `:focus-visible` ring; the only two outline
  removals are programmatic focus targets (h1[tabindex=-1], .adsec).
### 2026-09-29: #8 Tier-3 copy on the watchlist and Admin
- What: "does not save money" was on Admin twice (the cost card and Sources). It is now said once, on
  Sources, as a fact. "The confidence floor cannot be lowered to save money" became "stays at 60%
  whatever the budget" (the number is read from CONF_FLOOR). The watchweswork line "the window is what
  gets us a second reading" became "one look so far; the second when the window closes".
- Left alone: "too thin to argue from" is the product's consistent phrase for the confidence floor.
  "Measured, not projected" is within the "X, not Y" budget.
- Verification: smoke 272/272; Admin text read back in the browser.
### 2026-09-29: #7 One pool for every count
- What: `S.rejectedFor` takes the same `exclude` map as `dropFor`. The drop's disclosure, Admin's
  bar card and the Worth-a-call receipts all count from `dropFor(...).left.pool`. A name that cleared
  every gate but missed the daily cap says so, instead of showing an empty reason cell.
- Why: Admin "9 of 64" vs the drop's 9 + 46 = 55. The disclosure said 55 names under a line that
  added up to 46. The cause: seeded watches and passes were counted as looked-at in two places but not
  in the third.
- Verification: new smoke checks ("Also looked at" sums to the disclosure; Admin's "of N" = rows +
  disclosure). Without the fix: 46 vs 55, a fail. With it: 272/272. Browser: "9 of 55", "46 names".
### 2026-09-29: #6 One date format per context
- What: the watchlist ("kept …") and Promoted ("promoted …") rows now use `shortDate`, as Passed does.
  The rule is written above `longDate` in ui.js. The smoke test fails if any `.plat1` row line has a long
  month name.
- Verification: 269/269. Against the old app.js the new check fails on "kept 5 August 2026".
### 2026-09-29: #5 First-visit note on the drop
- What: `introNote()` puts one dismissible line above the rows (the house brief and user briefs;
  not the tracked tab, an empty drop or a finished one). Its *How a score is built* opens Help. *Got
  it* sets `localStorage['scout-intro-seen']` and moves focus to the h1.
- Why: portfolio visitors sign in to scored names with nothing saying what to do.
- Decision: one line rather than a tour or a modal. DESIGN-NOTES records how hard the team fought
  chrome above the first card (477px measured in v5.4). It costs about 60px at 1440. The note states
  the task and leaves the model's explanation to Help (copy rule tier 2). Kept out of PERSIST:
  sessionStorage would bring it back in every new tab.
- Verification: smoke checks that it shows on the first visit, *Got it* closes it and it stays closed; no
  overflow at 375; screenshots at 1440 and 375.
### 2026-09-29: #4 One colour per state
- What: Trends' *not there* goes from violet (#5A4CA3, which is --lilac-d) to the counted teal
  (#00806A / #1DAC8E dark). *Built* goes from green to neutral (#A9A5B8 / #6E6A7D). The heatmap ramps
  are now teal. The report charts use the same token (--tc-count). The matrix caption no longer
  says "darker", which was backwards in dark mode.
- Why: Help defines the colours: "Teal is counted… Lilac is judged". The report follows it (teal
  vmark, lilac on model-judged quotes). Trends used lilac for a counted fact.
- Decision: I resolved the open question from 28 Sep ("report green vs Trends violet") in favour of
  the language Help already states, rather than repainting the report. Alternative: violet
  everywhere, but that would break Help's rule and the lilac *judged* tags.
- Validation: dataviz validator. The pair passes CVD (16.9 light, 13.5 dark) and normal vision.
  Built's chroma "fails" by design, as the neutral half of an accent-plus-grey pair; its 2.4:1 on white is
  relieved by the bar counts and the table view. Ramps pass monotone, step gap, light-end and
  single-hue checks in both themes. Every cell's ink is at least 4.5:1 (dark theme: only q0 takes white).
- Verification: computed styles in both themes, Trends screenshots, check.sh all green.
### 2026-09-29: #2/#3 Scout smoke tests with a copy lint
- What: `App/scout/test/smoke.html` drives the real app in an iframe (sign-in, 3 briefs, all 12
  reports, every list, Trends, Admin, Help, New brief, the promote/undo and pass/put-back loop,
  J and ?, at 1440/820/375). `run.mjs` serves the repo and runs it in headless Chrome (no deps).
  `tools/check.sh` runs everything. 262 checks.
- Found and fixed: Help's Pressure table iterated the seed config's `_comment` key ("undefined");
  Help used "could not find" (the rules require *could not tell*).
- Decision: the lint does not ban "save". "Save and start" (a brief) and "save money" are not
  decision verbs. It still bans archive/reject/dismiss.
- Verification: against the pre-fix app.js the suite fails 4 checks and exits 1, and check.sh exits 1.
  Against the fix, 262/262 pass and check.sh exits 0. A Chrome that hangs after printing is killed as
  soon as `</html>` arrives (runtime went from 240 s to 3 s).
### 2026-09-29: #1 Landing page with no dead links
- What: `.nojekyll`; `read.html` renders repo Markdown (marked 12.0.2 from cdnjs); generated
  `Notes/`, `Product/`, `Archive/` index pages (`tools/build-indexes.mjs`, lists git-tracked
  files only); `tools/check-links.mjs`; three stale doc links repaired.
- Why: curl against mralexgrin.github.io/warhol returned 404 for Notes/, Product/, Archive/ and
  `_sketch-*.html`.
- Decision: a reader page over linking to GitHub's renderer, so docs work on Pages and on the local
  server alike. `f=` accepts only a relative `.md` path with no `..`, and it only fetches same-origin files.
- Verification: check-links 82/82, including a planted break it caught. Browser at 1440 and 375:
  reader, crumbs, tables in scroll boxes, heading anchors, bad-path and missing-file states.
  Not verifiable until pushed: behaviour on Pages itself.
### 2026-09-29: Phase 0
- What: baseline, product context, roadmap, this log.
- Baseline: engine 168/168. Scout has no tests. Live Pages: Notes/, Product/, Archive/ and `_*.html`
  return 404.
- Decision: commit locally, do not push (see flag). Scout tests will drive headless Chrome, which is
  already installed, instead of adding jsdom/puppeteer.
