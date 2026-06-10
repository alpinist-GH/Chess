<#
.SYNOPSIS
  Generate the clean web bundle (www/) that the native apps package.

.DESCRIPTION
  The website (repo root) is the single source of truth. Capacitor (webDir)
  and Tauri (frontendDist) cannot point at the root directly because the root
  also contains node_modules/, android/, ios/, chess-desktop/, etc. — Capacitor
  copies its webDir recursively, so it must be a clean web-only folder.

  This script copies the web asset allowlist from root into www/, then patches
  index.html for the packaged (offline) app:
    - swaps the Google Fonts CDN <link> for the bundled local fonts/fonts.css
    - tightens the CSP to drop the Google font domains (fonts ship locally)

  Run before `npx cap sync`; Tauri runs it via beforeBuildCommand.
  www/ is generated output (gitignored) — never edit it by hand.
#>
$ErrorActionPreference = 'Stop'

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$dst  = Join-Path $root 'www'

# Clean slate
if (Test-Path $dst) { Remove-Item $dst -Recurse -Force }
New-Item -ItemType Directory -Path $dst | Out-Null

# Web-only allowlist (mirrors the proven app bundle; excludes scratch files,
# native projects, node_modules, .git, etc. that live at the repo root).
$dirs  = 'css', 'data', 'js', 'fonts'
$files = 'index.html', 'manifest.json', 'service-worker.js',
         'stockfish-engine.js', 'stockfish.js',
         'apple-touch-icon.png', 'icon192.png', 'icon512.png'

foreach ($d in $dirs) {
  Copy-Item (Join-Path $root $d) (Join-Path $dst $d) -Recurse -Force
}
foreach ($f in $files) {
  Copy-Item (Join-Path $root $f) (Join-Path $dst $f) -Force
}

# --- Patch index.html for the packaged offline app ---
$idx  = Join-Path $dst 'index.html'
$html = Get-Content $idx -Raw

# 1) Local fonts instead of the Google Fonts CDN stylesheet
$html = $html -replace '<link href="https://fonts\.googleapis\.com/css2[^"]*" rel="stylesheet">',
                       '<link rel="stylesheet" href="fonts/fonts.css">'

# 2) Tighten CSP: the app ships fonts locally, so the Google font origins
#    are no longer needed in style-src / font-src.
$html = $html -replace ' https://fonts\.googleapis\.com', ''
$html = $html -replace ' https://fonts\.gstatic\.com', ''

# Write UTF-8 without BOM, no trailing newline added.
[System.IO.File]::WriteAllText($idx, $html, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "build-app-web: generated $dst (local fonts + app CSP)"
