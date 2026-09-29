# Product Context

## What this product is
Warhol is a talent-origination engine for Paradium. It reads creators across YouTube, TikTok,
Bluesky and the open web, and checks two things from outside: whether their audience asks to buy,
and whether the creator has anything to sell them. **Scout** (`App/scout/`) is the app on top of it:
each morning it shows a short list of creators who cleared the bar (the drop). The user works the
drop to zero with three verbs: promote, watch, pass. The repo is also Alex Grinshpoon's public portfolio piece,
published at https://mralexgrin.github.io/warhol/.

## Who uses it
- Primary user: an origination desk at Paradium. The job is to open Scout, work the drop to zero
  and close Scout (PRD §3). They need evidence they can trust at a glance, and a fast decision.
- Secondary users: portfolio visitors (hiring managers, designers) who arrive at the Pages landing
  page, sign in with the demo password printed on screen, and click around with no guide.

## Core flows (do not break)
1. Sign in → Today's drop → work each row with Promote / Watch / Pass (mouse or J/K/P/W/X) → the
   done panel.
2. Open the report → read the evidence (demand, missing, output, audience) → decide from the header,
   or from the pinned bar on a phone.
3. Watchlist / Promoted / Passed: every decision can be found again and undone (toast, Put back).
4. Trends: where the market is short. Admin: the budget, the bar, costs, sources. New brief.
5. Landing page `index.html` → the app, decks, docs.

## Constraints
- Do not change: copy rules in `CLAUDE.md` (binding), the Alloy design tokens (`alloy.css`), the
  seed data except through the replay rebuild (see Notes/PLAN-SCOUT-INTUITIVE-2026-09-28.md), and
  engine prompts (they cost money to re-run and change what the model says).
- Tech stack: vanilla JS single-page app (no build step, runs from file://), Node engine
  (`App/engine`, CommonJS, one dependency), static hosting on GitHub Pages (Jekyll mode).
- Run: `node Archive/prototypes/serve.js 4321` → http://localhost:4321/App/scout/
- Test: `sh tools/check.sh` runs everything: engine tests, the folder-index and doc-link checks, and
  Scout's smoke tests (`node App/scout/test/run.mjs`, headless Chrome, no dependencies, about 3 s).

## Baseline (Phase 0, 29 Sep 2026)
- Engine tests: 168 passed, 0 failed.
- Scout: no automated tests. Checked by hand at 375–1440 px in Phases 1–7.
- Known broken: on Pages, the landing page's Notes/, Product/ and Archive/ links return 404, and so
  do `_`-prefixed files. (Both fixed on 29 Sep.)
