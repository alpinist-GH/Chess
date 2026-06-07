# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive bilingual (French/English) chess opening encyclopedia with 55 chapters, Stockfish WASM analysis, and PWA support. Hosted on GitHub Pages at `https://alpinist-gh.github.io/Chess/`. No build step, no framework — pure vanilla JS.

## Running the Site

Stockfish WASM requires HTTP (not `file://`):

```bash
cd Chess
python -m http.server 8000
# or: npx serve .
```

## Verification / Tests

```bash
cd verify_chess
npm install
node verify.js           # full site verification (board count, chapters, FR/EN switching, variants)
node verify_petroff.js   # Petroff-specific checks
```

Tests use Playwright (`^1.60.0`). The verify scripts take screenshots and check DOM state.

## Updating an Opening

The PowerShell build scripts (e.g., `build_petroff.ps1`) show the canonical pattern for replacing a chapter's data block in `Chess/data/openings.js`:

1. Edit the script with new `DB[N]` and `ENRICH[N]` content.
2. Run: `powershell -ExecutionPolicy Bypass -File build_petroff.ps1`
3. Output: `openings_new.js` (validated for brace balance).
4. Copy result into `Chess/data/openings.js` and test.

## Architecture

### Data Layer (`Chess/data/openings.js`)

Two parallel global arrays indexed by chapter ID (1–55):

- `DB[chapId][variantKey]` — core opening data: `line`, `fondement`, `moves[]`, `avantages`, `inconvenients`, `piege`, strategic metadata.
- `ENRICH[chapId][variantKey]` — rich annotations: history, annotated master games (PGN + commentary), Lichess stats.

Each chapter can have 1–7+ variants (e.g., Sicilian has Najdorf, Dragon, Scheveningen…). Variant keys are short strings matching the selector buttons in HTML.

### HTML (`Chess/index.html`)

Single ~2800-line file. Chapters are 55 `<section>` elements organized under 6 tab sections. Each section contains:
- A chessboard `<canvas>` or board `<div>`
- Variant selector buttons
- Content panel with i18n-attributed elements
- Stockfish toggle panel

**Do not auto-format or restructure `index.html`** — its chapter blocks are generated/patched by scripts.

### JS Modules (`Chess/js/`)

| File | Responsibility |
|------|---------------|
| `app.js` | Controllers, keyboard navigation, Stockfish UI, active-variant state |
| `engine.js` | Move validation, FEN generation, board state machine |
| `board.js` | Board rendering, piece visualization |
| `pieces.js` | Piece logic and SVG/image positioning |
| `i18n.js` | FR/EN string tables; `refreshAllContent()` swaps all `data-i18n` elements |

### i18n

All user-visible strings use `data-i18n="key"` attributes. Language toggle calls `refreshAllContent()`. French is the primary language; English is a full translation. When adding copy, add both FR and EN keys to `i18n.js`.

### Stockfish

Runs entirely in-browser via WASM (`Chess/stockfish/`). No backend. Each chapter's Stockfish instance is toggled independently. The engine evaluates positions from the current board state via `postMessage` / `onmessage`.

### CSS Architecture (`Chess/css/`)

- `variables.css` — color tokens and typography (edit here for theming)
- `layout.css` — tab nav, search bar, responsive breakpoints
- `board.css` — chessboard grid styling
- `components.css` — buttons, panels, cards

Mobile layout stacks board above content panel; desktop shows them side-by-side. Board sizing constraints are controlled in `board.css` and `variables.css`.

## Deployment

GitHub Pages serves from the `main` branch, `Chess/` directory. Push to `main` → live. GitHub Actions workflow: `.github/workflows/claude-review.yml`.
