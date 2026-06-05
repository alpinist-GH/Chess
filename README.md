# Chess Opening Encyclopedia

An interactive bilingual (FR/EN) reference for 55 chess openings, playable in the browser with Stockfish analysis.

**Live site → https://alpinist-gh.github.io/Chess/**

---

## Features

- **55 openings · 101+ variants** — from Ruy Lopez to Grob Attack
- **6 taxonomic sections** with a sticky tab bar to jump between them:
  - I · Open Game (18 chapters)
  - II · Semi-Open Game (9 chapters)
  - III · Closed Game (3 chapters)
  - IV · Semi-Closed Game (12 chapters)
  - V · Opening Systems with 1.d4 (6 chapters)
  - VI · Flank Openings (7 chapters)
- **Search bar** — type 2+ characters to filter openings by name; click a result to navigate and highlight the chapter
- **Interactive board** — play through the main line and all variants move by move
- **Stockfish analysis** — built-in engine panel per chapter (evaluation bar + best move)
- **Bilingual** — toggle between French and English at any time

## Structure

```
Chess/
├── index.html          # Main page (55 chapter cards in 6 tab sections)
├── data/
│   └── openings.js     # Opening database: DB[1]–DB[55], PGN games, comments
├── js/
│   ├── app.js          # Board controller, keyboard nav, Stockfish, tab/search logic
│   └── i18n.js         # FR/EN strings, refreshAllContent()
├── css/
│   └── layout.css      # Styles including tab nav, search dropdown, responsive layout
└── stockfish/          # Stockfish WASM engine files
```

## Opening Taxonomy

Based on standard ECO classification, extended with:

| # | Section | Key openings |
|---|---------|-------------|
| I | Open Game (1.e4 e5) | Ruy Lopez, Italian, King's Gambit, Scotch, Vienna, Philidor, Petrov |
| II | Semi-Open Game (1.e4, Black ≠ e5) | Sicilian, French, Caro-Kann, Alekhine, Pirc, Scandinavian, Nimzowitsch |
| III | Closed Game (1.d4 d5) | Queen's Gambit, QGA, Chigorin |
| IV | Semi-Closed Game (1.d4, Black ≠ d5) | Nimzo-Indian, King's Indian, Grünfeld, Dutch, Benoni, Trompowsky |
| V | Systems with 1.d4 | London, Jobava-London, Colle, Torre, Stonewall |
| VI | Flank Openings | English, Bird's, Réti, KIA, Nimzo-Larsen, Sokolski, Grob |

## Tech Stack

- Vanilla JS + HTML/CSS — no framework dependencies
- [Stockfish.js](https://github.com/nmrugg/stockfish.js) (WASM) for engine analysis
- Hosted on GitHub Pages

## License

Content and code © alpinist-GH. PGN game data is in the public domain.
