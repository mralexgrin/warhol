# Scout — UI/UX Review & Streamlining Recommendations
**Date:** 14 Aug 2026 · **Build:** v5.8 (`App/scout/`) · **Reviewer:** design pass over the running app + token system

Scout is in good shape — the content model is strong, the copy is disciplined, dark mode exists, motion is reduced-motion aware (11 guards in CSS). The problems are **consistency and system discipline**, not concept. Below is a straightforward, prioritized list.

---

## The one-line diagnosis
The app was built screen-by-screen, so each screen re-invents shared patterns instead of drawing from a system. The score ring, the list row, the type scale, and the section header all exist in 3–4 slightly different versions. Fixing that is 80% of the "make it consistent" ask.

---

## P0 — Consistency (highest impact, do first)

**1. Unify the list row into ONE component.**
The three list screens each use a different row:
| Screen | Score ring | Actions | Density |
|---|---|---|---|
| Today's drop | left | Promote / Watch / Pass (3) | spacious card |
| Watchlist | **right** | Promote / Stop watching (2) | spacious card + bullets |
| Passed | **none** | Put back in the drop (1) | compact single-line |

Ring should live in the **same position** (left) everywhere. Action count can differ, but the row scaffold (avatar → name/handle → signals → actions, ring fixed-left) must be one shared component. Right now they read as three different products.

**2. Fix the type scale.** The CSS has **26 distinct hardcoded font sizes** — 12 / 12.5 / 13 / 13.5 / 14 / 14.5 / 15 / 15.5px all coexist. That is not a scale; it is noise. Collapse to ~7 steps (e.g. 11 / 12.5 / 14 / 16 / 20 / 28 / 44) as tokens (`--fs-1…7`) and map every rule to one. This alone removes most of the "slightly off" feeling.

**3. Radii: stop bypassing the tokens.** You have `--r-sm/md/lg/pill` — good — but ~30 rules hardcode `border-radius: 12px/14px/15px/16px/20px/22px`. Route them all through the tokens. Pick ONE card radius, ONE pill radius, one input radius.

**4. Section-header treatment is inconsistent.** Small-caps eyebrow labels (`THE MODEL'S READ`, `WHAT THEY MAKE`, `WHY NOW`) vs. the colored banner cards (`WHAT THEY MAKE` yellow, admin's yellow/green blocks) vs. plain bold headings. Pick one eyebrow style and one "callout block" style; use them everywhere.

---

## P1 — Streamlining & clarity

**5. Left rail: label the icons.** Seven icon-only buttons with no visible text and (in the DOM) **no accessible names** — tooltips only appear on hover. Add short labels under each icon (or persist the expanded rail), and add `aria-label` to every rail button. The badge counts (9 / 3 / 7) are great; the icons alone aren't self-evident (mail = drop? eye = watch? trash = pass?).

**6. Naming drift.** The button says **"New brief"** → the screen it opens is titled **"Add to Scout."** The rail tooltip says **"Trends"** → the page title is **"Where the market is short."** Poetic page titles are fine, but the nav label and the destination should share a word so users know they arrived. Add the plain noun as a subtitle or keep the nav label echoed in the H1's eyebrow.

**7. Button hierarchy is doing too much.** On the drop, Promote (green fill) / Watch (gold outline) / Pass (grey outline) — three different visual weights for three actions is loud, and the gold "Watch" outline is especially heavy in dark mode. Recommend: Promote = primary, Watch = secondary (neutral), Pass = tertiary/ghost. One accent, not three.

**8. Move the theme toggle out of the account popover** — or at minimum keep it, but also respect the OS. See P2 #10.

---

## P2 — Adaptive-interface gaps (the skill's actual checklist)

**9. Text does not resize. `0` uses of `rem`; 251 px font-sizes.** At 200% browser zoom / large-text OS settings, the layout won't scale as intended. Convert font sizes (and ideally the type-scale tokens from #2) to `rem`. This is the single biggest accessibility miss.

**10. Theme ignores the system.** `prefers-color-scheme` is used **0 times** — dark mode is manual-only, so a dark-OS user lands in light on first load. Seed the initial theme from `prefers-color-scheme`, then let the manual toggle override and persist. (Persistence already works — good.)

**11. No high-contrast path.** `prefers-contrast` = 0 occurrences. Several greys are already near the floor (`--fg-2` noted in-code as "5.19:1… the tightest of the three"). Add a `prefers-contrast: more` block that firms up the `--fg-2/3` greys and rule lines.

**12. Dark mode: the colored cards don't adapt.** Admin's yellow and green blocks (and the "WHAT THEY MAKE" banner) keep full-saturation light-mode fills on a near-black ground — they glare. Give them dark-mode variants (desaturate + darken the fill, lighten the text) rather than reusing the light swatch.

---

## What's already good (keep)
- Copy discipline — "we looked in 6 places," "None of these 5 can be settled either way," receipts everywhere. Don't touch.
- Reduced-motion is handled (11 guards).
- Spacing tokens (`--s2…s5`) exist and are mostly used — extend that same discipline to type and radii.
- The report page's information architecture (read → brief fit → what they make → why now → gates → receipts) is excellent.

---

## Suggested order of work
1. Type-scale tokens → convert to `rem` (#2, #9) — one pass, huge payoff.
2. One list-row component (#1).
3. Radii + section-header cleanup (#3, #4).
4. Rail labels + aria (#5), button hierarchy (#7).
5. System theme + contrast + dark-mode card variants (#10, #11, #12).
6. Naming echoes (#6).

Items 1–3 are pure consistency and will make the app feel like one product. 9–12 close the adaptive-interface gaps.
