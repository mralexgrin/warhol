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
- Last completed: #2/#3 smoke tests and copy lint
- Next: #4 one colour per state
- Branch: autonomous/product-improvements (from phase7-report @ b48dda9)
- Open PR: none (cannot push)

## Log
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
