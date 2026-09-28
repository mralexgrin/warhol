# Warhol engine

The thing that goes and looks. Design doc: [PRD-WARHOL-ENGINE.md](../../Product/PRD-WARHOL-ENGINE.md).

**One creator.**

```bash
node bin/warhol.js check @chipotle          # go and look; print the report
node bin/warhol.js check @chipotle --brief "outdoor gear, US"
node bin/warhol.js checks chipotle          # every place, every status code
node bin/warhol.js report chipotle --html   # the same thing as a page you can open
node bin/warhol.js report chipotle --as-of 2026-01-15
```

**A day's work.** One brief, a handful of candidates, an aggregate.

```bash
node bin/warhol.js brief "US food brands with a big audience and nothing to buy"
node bin/warhol.js brief "..." --handles chipotle,wendys,olipop   # no model needed
node bin/warhol.js brief                    # the briefs that exist
node bin/warhol.js run us-food-brands       # the ladder over every candidate
node bin/warhol.js drop us-food-brands      # who cleared, who didn't, and the bill
```

**The record.**

```bash
node bin/warhol.js cost                     # what the passes actually cost
node bin/warhol.js proposals                # what the model proposed, and what was there
node bin/warhol.js forget                   # retention plan; --confirm to delete
node bin/warhol.js export --brief us-food-brands   # write the prototype's seed
node test.js                                # 107 assertions the product makes out loud
```

Every check runs against a brief. Without `--brief` the house brief applies —
*"Anyone worth a call."* — because in the product there is always one, and a
gate with three values is not a gate.

## The drop is demo-scoped, deliberately

Q24 defers discovery at scale and that still holds. `warhol brief` is **one
model call producing up to 20 names**, not a crawler — the model proposes
people, which is the one job §11.1 says it is genuinely good at, and something
else goes and checks every one. Nothing verifies that a proposed handle belongs
to the person the model meant, so every machine-proposed name is tagged
`proposed` from the log through to the report and no screen implies otherwise.
Person verification is the next wall and it is a separate piece of work.

`--handles` seeds a brief by hand and needs no model at all, which is how the
whole ladder and the whole drop run for $0.00.

**Parallelism is across people, never against a host.** `warhol run` checks
several creators at once; the per-host politeness delay in `lib/http.js` is
reserved synchronously, so twenty creators all wanting substack.com still
arrive 400ms apart. That queue, not compute, is the binding constraint on how
big a drop can be, and `warhol drop` prints what share of the time went to it.

## Keys

Both optional, and the engine says which one is missing rather than failing.

| Env var | What it turns on | Without it |
|---|---|---|
| `YOUTUBE_API_KEY` | Comments as a demand source, and posting cadence as a Pressure signal (Q6) | Cadence is unreadable and the report says so; first-look Pressure caps at 22/40 instead of 34/40 |
| `ANTHROPIC_API_KEY` | The Study pass — demand, strain, fit — and `warhol brief` proposing candidates | Everything deterministic still runs; Fit reads `not_judged`, and briefs are seeded by hand with `--handles` |

`npm install` is optional too — it only enables the model pass. Everything
deterministic runs without any of it, which is the point.

The YouTube key is metered in quota units, not dollars: a check costs at most
14 of the free tier's 10,000 a day, so the door closes at ~714 creators a day.
`warhol cost` prints it.

## Where to look

| File | Why it matters |
|---|---|
| `lib/resolve.js` | **The rule.** How "verified absent" is earned, and how a guessed hit earns the right to be called theirs. Read this first. |
| `lib/store.js` | The append-only log, the wall — a model cannot write a verdict — and retention. |
| `config/probes.json` | The places we look and how to read each response. Data, not code. |
| `config/weights.json` | Weights, thresholds, gates. Data, not code. |
| `lib/passes.js` | The ladder: sweep → probe → study, and the rule that stops spending. |
| `lib/run.js` | One creator through the ladder, and many at once. `check` and `run` share it on purpose — two ladders drift in a week. |
| `lib/drop.js` | A brief's whole day: ranked, gated, and billed. A zero-result day is a result. |
| `lib/export-seed.js` | Engine → the prototype's cohort file. The vocabulary translation lives here, in one function, and is deleted the day the v5 rename lands. |
| `lib/briefs.js` | The brief log. Append-only for the same reason the observation log is: §6.7 versions briefs, and a mutable row makes that unbuildable later. |
| `lib/youtube.js` | The one API. Why cadence can be read in a single look when audience trend cannot, and why robots.txt is not consulted here. |
| `lib/site.js` | Their own domain — which one is actually theirs, and how much of it we get to read. The place most real stores and newsletters turn out to live. |
| `lib/score.js` | Two pillars, two gates, and what a first look genuinely cannot know. |
| `lib/project.js` | Observations + a date → a report. This is what makes the rewind real. |

`data/` is generated: `observations.jsonl` is the log, everything else is a view
over it. Deleting it loses history, not code.

## Live: the prototype and the engine, one origin

```bash
node bin/serve-live.js 8140     # http://localhost:8140/scout/
```

Serves `../` (the App folder) statically **and** exposes the engine underneath it, so a
brief written in Scout starts a real run. Two endpoints, both localhost-only:

| | |
|---|---|
| `GET /api/health` | is there an engine here, and does it have a model key |
| `GET /api/scan?text=…&limit=N` | SSE: `status` → `proposed` → `checked`×N → `done` |

`/api/scan` is `warhol brief` followed by `warhol run`, streamed. It writes to
the brief log and the observation log exactly as the CLI does — **it is a real
run and it spends real money.** Roughly $0.15 and 60s for nine candidates.

**It never sends a score, a gate or a verdict.** The screen it feeds makes no
judgement, and an endpoint that offers one is an invitation to start printing
it. What crosses the wire per creator is handle, audience, places checked, an
avatar URL, and `proposed: true`.

Served by anything else — plain `http-server`, `file://`, a machine with no
`ANTHROPIC_API_KEY` — `/api/health` fails or reports `model: false`, and the
prototype falls back to its seeded scan without saying so. That fallback is the
demo's safety net and is meant to be invisible.
