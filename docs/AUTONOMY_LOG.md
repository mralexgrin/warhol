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
- Last: #13 print sheet
- Next: fresh re-audit; the roadmap is empty apart from ideas and human flags
- Branch: autonomous/product-improvements (from phase7-report @ b48dda9)
- Open PR: none (cannot push)

## Log
### 2026-09-29: #13 Print sheet for the report
- What: an `@media print` block in scout-v52.css unclips .slab/.main, hides the rail, verbs, report nav,
  toast, shortcuts and first-visit note, and avoids page breaks inside blocks. beforeprint/afterprint in
  app.js pin the light theme and restore it afterwards.
- Verification: the pane applied the print rules on screen. #main showed its full 2,744 px and the rail
  was hidden. Smoke adds 4 print checks (403/403). The "light theme" check runs while already in light,
  so it is weak. An actual PDF was not produced (headless Chrome cannot sign in).
### 2026-09-29: #12 Back/Forward and a link for every screen (new item)
- Found on re-audit: no history handling at all. The browser's Back (the swipe on a phone) left the app
  from anywhere, and nothing could be linked.
- What: `routeOf/applyRoute/syncRoute` plus a popstate handler in app.js. `#/<view>` for the lists,
  Trends, Admin, Help and New brief; `#/report/<id>` and `#/outreach/<id>`. The first screen replaces
  the entry, and later screen changes push. Back restores the report's `from`. A link wins over the
  restored session; before sign-in it waits in `pendingRoute`. An unknown id or view is ignored.
- Decision: hash routes, not paths, so it works on Pages and from file:// without a server rewrite.
  In-app back buttons still push, which is ordinary SPA behaviour.
- Harness: the frame shares the tab's history, so Back is only pressed once the app has pushed. Against
  the old app, the unguarded Back navigated the test page itself away. Loads now use `?load=n`, because a
  hash-only src change does not reload the frame. A 90 s watchdog reports where a hung run stopped.
- Verification: 399/399. Against the old app.js: 3 history failures in 4 s. In the browser pane, the real
  Back button goes from a report to the watchlist it was opened from. (The pane first served a cached
  app.js. Worth knowing: Pages caches for 10 min after a deploy.)
- Process slip: the commit line sat after a heredoc, outside the `&&` chain, so 895d8f6 went in
  before a docs edit threw. The code was already verified; the docs followed in the next commit.
- #11 Help review: closed with no change. Help explains the model, not screens. The hidden Pressure
  claim (SHOW_PRESSURE=false) is a documented demo choice, still scored and still explained.
### 2026-09-29: #10 closed as not a defect
- Checked: `App/trends/build-data.mjs` already keeps one ask per creator+quote (2,935 raw → 474 on
  today's snapshots). The engine's normalised key would drop 3 more (0.6%). My 28 Sep note ("still counts
  duplicates") was wrong. It is corrected in the plan doc.
- A plain rebuild would also have changed 215 → 276 creators, because 96 of the 7 Aug snapshots were
  overwritten by 14 Aug runs, so the board's input is gone. Rebuild reverted; the data is untouched.
### 2026-09-29: Reflect after items 1–9
- Shipped: landing links, smoke suite with copy lint, one colour per state, first-visit note, date
  forms, one pool for counts, tier-3 copy, accessibility checks, plus the review fixes. 12 commits.
- Re-audit with fresh eyes: the smoke suite (393 checks, 3 s) is the lever. Each time it grew, it found
  a real defect that eyes had missed (`_comment`, the count pools, the Passed dates, the dark `?`).
  Next time, widen it before the UI work, not after.
- Process lesson: my ad-hoc `String.replace` edits failed silently twice (a `$` in the replacement,
  and a heading that didn't match), and the second one dropped three CHANGELOG entries. Every scripted
  edit now goes through a helper that throws when its anchor is missing.
- Re-prioritised: #10 (standalone Trends board) stays, but is it still worth a separate board? The
  in-app Trends supersedes it, so the smallest honest fix is preferred. #11 Help review next.
  Added to ideas: a print sheet for the report; show the seed's frozen date to visitors.

## Model usage
### Items 1–9
- Calls per tier: CMD ~60 (tests, greps, validators, headless runs), FAST 0, STRONG main session plus 1
  code-reviewer subagent (inherit), TOP 0.
- Escalations: none.
- Spot-check failures: 0 of 10 review receipts were wrong (all 10 grepped or reproduced).
- Routing changes: none. No [FAST] use yet: the work was UI judgment and verification, and the
  bounded scans a Haiku agent could do were cheaper as a single grep.
- Unexpectedly expensive: the first headless runs took 240 s each, because Chrome lingers after
  --dump-dom. Now killed on `</html>`, 3 s a run.

### 2026-09-29: Code review of items 1–9, and the fixes
- Review: code-reviewer subagent (inherit model) over `.autonomy/diff.patch`. 10 findings with receipts.
  I checked all the receipts (grep plus a `set -e` repro), and none was false. Fixed all 10:
  1. check.sh ignored a stale index (`a && b` under set -e). Now `if … else exit 1`.
  2. read.html: SRI on marked 12.0.2, DOMPurify 3.1.6 (with SRI) around the parsed HTML. A test
     file with `<img onerror>` and `<script>` rendered both inert.
  3. The overflow check now measures `#main` too (above 960px it scrolls on its own).
  4. Boot errors: index.html collects `window.__scoutErrors` from its first line; the harness reads it.
  5. check-links matches exact case against git's published list (a wrong-case link is proven to fail).
  6. The intro test checks localStorage, reloads the frame, and asserts the note stays gone.
  7. read.html: `aria-busy` plus a `role=status` line instead of a live `<main>`.
  8. build-indexes lists `--cached --others --exclude-standard` and skips files missing on disk.
  9. A malformed hash is decoded in a try/catch.
  10. Checks that could skip silently now record a failure (no header, no rows to check).
- New defects this surfaced: the date check had never looked at Passed rows (`.pline`, not
  `.plat1`). It does now (7 rows).
- Flake found and fixed: a colour read mid-transition after the theme switch (1.25:1, 1 run in 10). The
  frame now disables transitions and animations. Without the fades, three real contrast failures showed
  (fading rows had been skipped as dimmed): the Admin bar choices at 4.38:1 (their ink was tuned for the
  field, not the darker well), the header `?` at 1.21:1 in dark (**my Phase 7 regression**: dark
  on-field ink on the now-neutral band), and the disabled Invite button (exempt; the harness skips
  disabled controls).
- Verification: 393/393 on 3 consecutive runs; check.sh green.
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
