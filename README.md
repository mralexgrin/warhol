# Warhol

**Scout 0.1 — alpha.**

A talent origination engine for Paradium. **Scout** is the app you look at; the **engine** is
what does the reading.

**Start by opening `index.html`** at this folder's root. It's the door to everything below.

**Current build:** `App/scout/` — v5.8, audited 7 Aug 2026. The folder has no version number in
it on purpose; the version lives in `App/scout/DESIGN-NOTES.md`, which is the only place it can
be wrong in one place instead of two.

**Three numbers, three different things.** `Scout 0.1` is the product version and lives only in
this file. `v5.8` counts design passes on the build. `PRD v1.6` counts decision revisions. They
are not the same quantity and are not meant to converge.

---

## Where things are

| Folder | What's in it |
|---|---|
| **Product/** | What we're building. The proposal, both PRDs, the copy rules, the score explainer, the trends brief, and `design-system/` — the six toolkit directions, of which **06-Alloy won and is vendored into every build as `alloy.css`**. |
| **Notes/** | The written record — grills, audits, the pre-demo review, the IA report, handoff prompts, demo briefs. Dated. Not maintained after the fact, so read them as history. |
| **App/** | The only things that run: `scout/` (the build), `engine/` (the reader), `trends/` (mocked, not built yet). |
| **Decks/** | The three things you present: `presentation.html`, `ONE-PAGER.html`, `SYSTEM-MAP.html`. |
| **Archive/** | `prototypes/` — the ten superseded builds plus `seed-fictional/` (the original 24 invented creators) · `sketches/` — scratch files that decided a build · `backup-2026-08-07/`. Nothing live depends on anything in here. |

`CLAUDE.md` at the root holds the copy rules. They are binding on every change to text in `App/`.

---

## Running it

**The app on its own** — open `App/scout/index.html`. It runs off a frozen seed, no server needed.

**The app wired to the live engine** — real runs, real money:

```bash
cd App/engine && node bin/serve-live.js 8140
```

Then open `http://localhost:8140/scout/`. Needs the model API key in the environment; without it
the server falls back to a seeded scan and says so.

**The whole folder, every build reachable:**

```bash
node Archive/prototypes/serve.js
```

Then open `http://localhost:4321`. Pass a port number if 4321 is taken.

**Every check, in one command:**

```bash
sh tools/check.sh
```

It runs the engine's tests, then the doc-link and folder-index checks, then Scout's smoke tests
(`App/scout/test/`). The smoke tests open Scout in headless Chrome and click through it: sign in,
every brief's drop, every report, each list, Trends, Admin, Help and New brief, at desk, tablet and
phone widths. They fail on a script error, on "undefined" or "NaN" in the text, on a word the copy
rules ban, on an unnamed button, on a repeated quote, on sideways scroll, and when the drop and
Admin disagree about the count. To watch them run, open `http://localhost:4321/App/scout/test/smoke.html`
from the folder server.

**The documents, as a website.** `read.html?f=<path>.md` renders any Markdown file in the repo,
and `Notes/`, `Product/` and `Archive/` each have an `index.html` listing what is in them. Those
three pages are generated. After adding or renaming a document, run:

```bash
node tools/build-indexes.mjs && node tools/check-links.mjs
```

The second command fails if any relative link in the docs or on the landing page points at nothing.
The repo root has a `.nojekyll` file so GitHub Pages serves every file as it is, including the
`_sketch-*.html` files.

---

## Three things worth knowing

`App/engine/data/` is 75 MB and it is **generated, not source**. `observations.jsonl` is the log;
everything else in there is a view built from it. Don't hand-edit it, don't delete it while a demo
is pending.

Every build in `Archive/prototypes/` is self-contained — its own copy of the seed, its own CSS.
Nothing there depends on anything outside its own folder.

**`App/trends/` is the exception** — it borrows `alloy.css` and `scout-v52.css` from `App/scout/`,
so it breaks silently into unstyled HTML if the build folder ever moves or is renamed. It also
builds its data from the engine: `node App/trends/build-data.mjs` regenerates `trends-data.js`
from whatever is currently in `App/engine/data/`, so running it changes what the board shows.

**The archived builds are named for what the version browser calls them**, including the two v1
directions (`v1-a-trade-tip-sheet`, `v1-b-case-file`). The older notes still call those two
`impeccable` and `design-taste`, which is what the folders used to be called.
