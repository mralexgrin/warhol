# Changelog

User-facing release notes. Newest first.

## 29 Sep 2026
### Added
- **A first-visit note on the drop.** One line above the names: open any name for the evidence,
  then promote, watch or pass; the drop is done when every name has a decision. It links to *How a
  score is built*. **Got it** closes it for good in that browser.
### Improved
- Admin says once, on *Where Scout looks*, that switching a place off saves no money (it said so
  twice). The budget note now states the fact: the confidence floor stays at 60% whatever the budget.
  One watchlist line now says when the second look is due, instead of arguing for the watchlist.
- Watchlist and Promoted rows date things the way Passed does ("kept 5 Aug 26", not "kept 5 August
  2026"). The long form is kept for full sentences.
- One colour per state across Scout. On Trends, *not there* is now the same teal as on the report
  (it was violet, the colour Help keeps for the model's opinion), and *built* is neutral grey, as
  "Found it" is on the report. The heatmaps use a teal ramp, and every number on them is readable
  (4.5:1 or better) in both themes.
- The report's Output and Audience charts use the same teal. It was a second, separate green.
- The pair matrix's caption read "Darker is more creators", which was backwards in dark mode. It
  now reads "The stronger the teal…".
### Fixed
- Help's Pressure table showed a row reading "_comment · undefined". That was an engine note
  leaking in as a signal.
- Help said “We could not find it.” where the copy rules call that state *could not tell*.
- The landing page's Notes, Product and Archive links no longer 404 on the public site. Each folder
  has a page listing its documents, and the sketches that start with an underscore now load.
### Added
- Markdown documents open in a reader page with the landing page's look, instead of as raw text.
  Links between documents stay in the reader.

## 28 Sep 2026 (Phases 1–7)
### Added
- Promoted list, undo toast after every decision, keyboard shortcuts (J/K, Enter, P/W/X, ?).
- Phone layout with bottom tabs and a pinned decision bar on reports.
### Improved
- Trends: one picture per question, validated colours, honest demand counts.
- Reports: one type scale, one section header, one chart colour.
### Fixed
- Demand counted the same comment more than once (display and engine).
