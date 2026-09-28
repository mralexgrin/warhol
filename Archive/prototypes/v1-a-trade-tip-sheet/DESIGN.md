# DESIGN.md — Warhol Scout

The visual world for the Warhol Scout prototype. New world; no incumbent identity.

## World

**The A&R trade tip sheet.** The weekly two-ink trade paper a small number of professionals read to
learn who is about to break, before the public knows — *Cash Box*, *CMJ New Music Report*, *The Gavin
Report*. Warhol Scout is an A&R desk for creators, so it is published as one: a masthead with an issue
number, a ranked chart with bullets and re-entries, quoted reaction set in boxes, and a one-sheet per
act. Cheap, loud, functional print — heavy rules, condensed gothic caps, tabular figures. Explicitly
**not** the elegant broadsheet (hairlines, whitespace, italic display serif) and **not** the analytics
dashboard (sidebar, KPI tiles, donuts, sparklines, progress rings).

## Color — two inks on newsprint

Restrained: paper, black, one signal ink.

| Token | Value | Role |
|---|---|---|
| `--paper` | `#E5E8E2` | cool grey-green newsprint, outer ground |
| `--sheet` | `#F4F6F2` | the printed sheet |
| `--sheet-back` | `#EDE8DD` | back-issue stock — **only** when as-of is a past issue |
| `--ink` | `#15181A` | press black, blue-green cast. All rules are ink. |
| `--ink-2` | `#3C4340` | secondary text |
| `--ink-3` | `#646B66` | apparatus labels (≥5:1 on sheet) |
| `--rule-soft` | `#C0C5BC` | hairline |
| `--red` | `#C8102E` | **second ink**: momentum, the machine's assertion, primary action |

Red means *momentum*, never danger. Negative states are carried by weight and rule, as in print.
Candidate `accent` values from the data are used only inside halftone sample blocks.

## Type

- **Archivo Black** — masthead wordmark, section flags.
- **Archivo Narrow** 600/700 — chart apparatus, labels, table heads. Uppercase, `letter-spacing .1em`.
- **Archivo** 400–700 — figures (`tabular-nums`), buttons, UI.
- **Source Serif 4** — every word meant to be *read*: quoted evidence, the case prose, drafts.
- Mono (`ui-monospace`) only for machine strings: source ids, URLs. Never as costume.

Fallbacks: `Helvetica Neue, Arial` / `Georgia, Times New Roman`. Google Fonts link degrades cleanly.

## Notation (load-bearing, never color-only)

Three verification marks, each always paired with its word:

- `■` solid — **verified absent** (resolved; the only state that scores as a gap)
- `⊡` hollow + dot — **present** (found; no gap here)
- `▨` diagonal hatch — **not found** (inconclusive; reduces confidence)

Chart notation: `●` bullet = score rising, with delta. `RE` = re-entry, always with its reason.
Engine is declared per line: `RULE` set roman, `LLM` set italic, plus an explicit tag.
Format Fit renders as a stamp **below** the arithmetic rule, labelled as contributing no points.
Confidence prints beside the score as `CONF .92` with a ten-tick scale. Never a ring, never folded in.

## Components

Rules, boxes, stamps, tables. Bars are solid ink in a 1px ink track — square, no radius, no gradient.
No rounded cards, no shadow-as-decoration (one 1px offset ink shadow on raised sheets only).
Buttons are rule-bounded rectangles; the primary action is red ink.

## Motion

Two authored moments, both print-native. Rows **run off the press** on issue change (staggered
translate + opacity, 18ms apart, exponential ease-out, 320ms). The backtest outcome band **tears
away** on click (clip-path wipe). Everything else is instant. `prefers-reduced-motion` disables both.
