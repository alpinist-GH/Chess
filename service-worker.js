/**
 * service-worker.js
 * PWA Service Worker — Traité des Ouvertures d'Échecs
 * Stratégie : Cache First avec mise à jour en arrière-plan
 */

/* ─── Version du cache — incrémenter à chaque déploiement ─── */
var CACHE_NAME = 'chessbook-v3';

/* ─── Fichiers à mettre en cache lors de l'installation ─── */
var PRECACHE_URLS = [
  './',
  './index.html',
  './stockfish-engine.js',
  './stockfish.js',
  './manifest.json',
  /* CSS */
  './css/variables.css',
  './css/layout.css',
  './css/board.css',
  './css/components.css',
  /* Data */
  './data/openings.js',
  /* JS */
  './js/i18n.js',
  './js/engine.js',
  './js/pieces.js',
  './js/board.js',
  './js/app.js'
];

/* ════════════════════════════════════════════
   INSTALL — précache tous les assets
════════════════════════════════════════════ */
self.addEventListener('install', function (event) {
  console.log('[SW] Install — cache :', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_URLS).then(function () {
        return self.skipWaiting();
      });
    }).catch(function (err) {
      console.error('[SW] Erreur lors du précache :', err);
    })
  );
});

/* ════════════════════════════════════════════
   ACTIVATE — supprime les vieux caches
════════════════════════════════════════════ */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (name) { return name !== CACHE_NAME; })
          .map(function (name) { return caches.delete(name); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* ════════════════════════════════════════════
   COOP/COEP HEADERS — GitHub Pages workaround
   GitHub Pages cannot set HTTP headers, so we inject them here.
   These two headers enable SharedArrayBuffer, which Stockfish needs
   for multi-threaded analysis. Without them, the engine falls back
   to slow single-threaded mode or fails to init.
════════════════════════════════════════════ */
function addCrossOriginHeaders(response) {
  var headers = new Headers(response.headers);
  headers.set('Cross-Origin-Opener-Policy',   'same-origin');
  headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  return new Response(response.body, {
    status:     response.status,
    statusText: response.statusText,
    headers:    headers
  });
}

/* ════════════════════════════════════════════
   FETCH — stratégie Cache First + injection headers
════════════════════════════════════════════ */
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) return addCrossOriginHeaders(cachedResponse);
      return fetch(event.request).then(function (networkResponse) {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        var responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        return addCrossOriginHeaders(networkResponse);
      }).catch(function () {
        if (event.request.headers.get('accept') &&
            event.request.headers.get('accept').indexOf('text/html') !== -1) {
          return caches.match('./index.html').then(function (r) {
            return r ? addCrossOriginHeaders(r) : r;
          });
        }
        return new Response('', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
});

/* ════════════════════════════════════════════
   MESSAGE
════════════════════════════════════════════ */
self.addEventListener('message', function (event) {
  if (event.data && event.data.action === 'skipWaiting') self.skipWaiting();
  if (event.data && event.data.action === 'getVersion') {
    event.source.postMessage({ version: CACHE_NAME });
  }
});
