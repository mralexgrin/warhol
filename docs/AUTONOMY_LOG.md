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
- Last completed: #1 landing links
- Next: #2 Scout smoke tests
- Branch: autonomous/product-improvements (from phase7-report @ b48dda9)
- Open PR: none (cannot push)

## Log
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
