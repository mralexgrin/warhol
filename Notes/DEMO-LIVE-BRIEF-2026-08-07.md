# The live-brief beat — what to type, and what not to

> **Update, same day.** The prototype now shows the scan instead of describing
> it. Writing a brief in Scout lands on a live screen: names arrive one a
> second, with what is being read for each and a climbing count of places
> checked, and nothing on it is judged. Built in `prototypes/v5.4/` (v5.6),
> written up in that folder's `DESIGN-NOTES.md`. That is the *prototype* beat.
> Everything below is the *engine* beat — the CLI actually going and looking.
> They are two different demonstrations and the brief text below serves both.


Test runs executed 2026-08-07 against `engine/`. Two fresh briefs, end to end, real spend.

## What to type

> **Car detailing, DIY repair and restoration — creators who work on a machine on camera,
> name the specific part or product they are using, and repeat the format every video.**

Then, on stage:

```bash
node bin/warhol.js brief "<the text above>" --limit 10
node bin/warhol.js run <slug>
node bin/warhol.js drop <slug>
```

**Measured cost of that shape:** ~15s for the brief, ~40–55s for 10 candidates,
drop is instant. **$0.13 of model** for the whole thing. Safe to do live — it is under
a minute of dead air, and `run` prints a line per creator as it goes, so the screen is
never still.

## Why this category and not another

Two things can go wrong on stage, and they pull in opposite directions.

**1. Handles that don't resolve.** Tested with
*"College basketball insiders — people who break or explain recruiting and coaching-staff
news for one program's fans, on camera, in a repeatable format."*

Result: **5 of 10 came back score 0, confidence 17%, audience 0.** The model proposed beat
writers whose handles don't exist or don't resolve, and empty reports read as a broken
machine, not as an honest negative. Niche/regional expert briefs do this. Avoid.

**2. False positives on Missing.** Tested with
*"Home cooking and recipe creators — people who cook one dish on camera start to finish
in a repeatable format, for a US audience."*

Result: 10/10 resolved cleanly, big audiences, 2 in the drop —
**and both drop names are wrong in a way the room can falsify in five seconds.**

- `chefjeanpierre` — 2.5m, scored 28, printed **"no store, no newsletter."** He has a full
  store. It is linked from the homepage the engine successfully fetched and read
  (`chefjp-com.3dcartstores.com`, knives, oils, gift certificates), plus a cookbook on
  Amazon. The engine probed the five store platforms, guessed `shop.chefjeanpierre.com`
  (dead), and stopped.
- `halfbakedharvest` — 892k, scored 26, printed **"no youtube channel, no newsletter."**
  Both exist; the YouTube handle isn't `@halfbakedharvest` and the newsletter signup is
  on her own site, not Substack.

**This is by design, not a bug.** `lib/site.js` deliberately restricts to links on the
creator's own registrable domain so a sponsor's storefront can't be reported as theirs —
the documented MKBHD/dbrand case. The cost of that rule is that a real store on a
third-party host under a different domain is invisible, and the report says
"no store" with full confidence rather than "we couldn't tell."

**Consumer / food / CPG-adjacent creators are the worst case for this**, because that is
exactly the population whose stores live on Shopify, 3dcart, Amazon and similar. Hands-on
repair and restoration creators are the best case: big resolvable audiences, and when they
do monetise it is usually Patreon or their own domain, both of which the engine probes.

Proven by the existing `car-detailing-diy-repair-2` drop — 18 candidates, 5 cleared,
led by `@pantheorganizer` at 1.1m, 32 demand lines, no store, no newsletter, 5 dead links.
That is the thesis in one card and it holds up to scrutiny.

## Two housekeeping notes

1. **The two test briefs are now in the log.** `briefs.jsonl` is append-only, so
   `home-cooking-recipe-creators` and `college-basketball-insiders-break` will appear on the
   `warhol brief` list screen if you show it. Don't open that screen, or accept them.
2. **`run` fuzzy-matches slugs.** I typed `run college-basketball-insiders` and it ran
   `college-basketball-insiders-break`. Convenient, but don't rely on it live — copy the
   slug the `brief` command prints on its last line.

## If you want the safest possible version of this beat

Don't take a brief from the room. Type the one above yourself. The failure mode isn't the
run — the run is fast and cheap and works. It's that an unvetted category can hand you a
confident "no store" about someone in the room who knows better.
