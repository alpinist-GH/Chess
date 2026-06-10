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
- **Installable PWA** — offline-capable via a service worker (which also injects the COOP/COEP headers Stockfish needs)
- **Native apps** — packaged for Android, iOS, and desktop from the same web code

## Structure

```
.                       # repo root = website source (served by GitHub Pages)
├── index.html          # Main page (55 chapter cards in 6 tab sections)
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline cache + COOP/COEP header injection
├── stockfish.js        # Stockfish engine (asm.js/WASM)
├── stockfish-engine.js # Engine wrapper / worker bootstrap
├── data/
│   └── openings.js     # Opening database: DB[1]–DB[55], PGN games, comments
├── js/                 # app.js, board.js, engine.js, pieces.js, i18n.js
├── css/                # variables, layout, board, components
├── fonts/              # Local TTFs (bundled into the native apps)
├── scripts/
│   └── build-app-web.ps1   # Generates the www/ bundle for the native apps
├── android/  ios/      # Capacitor projects (webDir → generated www/)
└── chess-desktop/      # Tauri desktop project (frontendDist → generated www/)
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

- Vanilla JS + HTML/CSS — no framework, no build step for the website
- [Stockfish.js](https://github.com/nmrugg/stockfish.js) (WASM) for engine analysis
- PWA (service worker) hosted on GitHub Pages
- [Capacitor](https://capacitorjs.com/) (Android/iOS) and [Tauri](https://tauri.app/) (desktop) for native packaging

## Development

The website is the **single source of truth** at the repo root — no build step:

```bash
python -m http.server 8000   # from repo root (Stockfish needs HTTP, not file://)
# then open http://localhost:8000
```

Verification (Playwright):

```bash
cd verify_chess && npm install && node verify.js
```

### Building the native apps

The native apps bundle a generated, web-only `www/` (gitignored), built from
the root by `scripts/build-app-web.ps1` — it copies the web assets and patches
`index.html` for offline use (bundled local fonts + a tightened CSP).

```bash
npm install
npm run sync                              # regenerate www/ + capacitor sync
cd android && ./gradlew assembleDebug     # Android APK (JAVA_HOME → Android Studio JBR)
cd chess-desktop && npm run tauri build   # desktop .exe/.msi (requires Rust)
# iOS binary build requires macOS + Xcode
```

## Security

- **Content-Security-Policy** — meta tag + a stricter service-worker-injected header (`frame-ancestors 'none'`)
- **Automated scanning** — GitHub Actions run `npm audit` + CodeQL on every push/PR and weekly; Dependabot keeps dependencies and Actions current

## License

Content and code © alpinist-GH. PGN game data is in the public domain.
