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
- Last completed: Phase 0
- Next: roadmap #1
- Branch: autonomous/product-improvements (from phase7-report @ b48dda9)
- Open PR: none (cannot push)

## Log
### 2026-09-29: Phase 0
- What: baseline, product context, roadmap, this log.
- Baseline: engine 168/168. Scout has no tests. Live Pages: Notes/, Product/, Archive/ and `_*.html`
  return 404.
- Decision: commit locally, do not push (see flag). Scout tests will drive headless Chrome, which is
  already installed, instead of adding jsdom/puppeteer.
