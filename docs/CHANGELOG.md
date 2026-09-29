# Changelog

User-facing release notes. Newest first.

## 29 Sep 2026
### Added
- **Reports print cleanly.** Print a report (⌘P) and you get the evidence alone, in full, in the
  light theme: no sidebar, no buttons, and no blocks split across pages.
- **Back and Forward work.** The browser's Back button (the swipe on a phone) used to leave Scout
  from any screen. It now steps back through the screens you visited, a report back to the list you
  opened it from. Every screen has its own link (for example `#/watchlist` or `#/report/<name>`), so a
  report can be bookmarked or sent, and a link opened before signing in lands there after sign-in.
- **A first-visit note on the drop.** One line above the names: open any name for the evidence,
  then promote, watch or pass; the drop is done when every name has a decision. It links to *How a
  score is built*. **Got it** closes it for good in that browser.
- **Documents as a website.** Markdown opens in a reader page with the landing page's look, instead
  of as raw text, and links between documents stay in the reader. Notes, Product and Archive each
  have a page listing what is in them.
### Improved
- One colour per state across Scout. On Trends, *not there* is now the same teal as on the report
  (it was violet, the colour Help keeps for the model's opinion), and *built* is neutral grey, as
  "Found it" is on the report. The heatmaps use a teal ramp, and every number on them is readable
  (4.5:1 or better) in both themes. The report's Output and Audience charts use the same teal.
- Watchlist and Promoted rows date things the way Passed does ("kept 5 Aug 26"). The long form is
  kept for full sentences.
- Admin says once, on *Where Scout looks*, that switching a place off saves no money (it said so
  twice). The budget note states the fact: the confidence floor stays at 60% whatever the budget.
  One watchlist line now says when the second look is due, instead of arguing for the watchlist.
### Fixed
- The day's counts agree everywhere. Admin said "9 of 64 clear it" and the drop's *Who else was looked
  at* said 55 names, while the line above it counted 46. They now read 9 of 55, and 46 names.
- Text contrast now meets WCAG AA on every screen in both themes. Fixed: the count on the selected
  sidebar item (3.98:1), the “?” in a report's section header in dark mode (1.21:1), and the unpressed
  choices on Admin's bar setting (4.38:1).
- Help's Pressure table showed a row reading "_comment · undefined". Help also said "We could not
  find it." where the copy rules call that state *could not tell*.
- The pair matrix's caption said "Darker is more creators", which was backwards in dark mode.
- The landing page's Notes, Product and Archive links no longer 404 on the public site, and the
  sketches whose names start with an underscore now load.
- The document reader loads its scripts with integrity checks and strips any script from the rendered
  Markdown. A malformed #link no longer blanks the page.

## 28 Sep 2026 (Phases 1–7)
### Added
- Promoted list, undo toast after every decision, keyboard shortcuts (J/K, Enter, P/W/X, ?).
- Phone layout with bottom tabs and a pinned decision bar on reports.
### Improved
- Trends: one picture per question, validated colours, honest demand counts.
- Reports: one type scale, one section header, one chart colour.
### Fixed
- Demand counted the same comment more than once (display and engine).
