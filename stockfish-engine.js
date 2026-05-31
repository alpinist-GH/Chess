/**
 * stockfish-engine.js v5
 * Compatible Chrome + Safari + Firefox
 * Stratégie : essai Worker direct local → Blob CDN → script tag fallback
 */

console.log('[stockfish-engine.js] v5 chargement...');

var StockfishEngine = (function () {

  var worker     = null;
  var ready      = false;
  var depth      = 14;
  var _onResult  = null;
  var _onReadyCb = null;
  var _result    = { score: null, mate: null, bestMove: null, depth: 0 };

  function init(onReady) {
    if (ready) { if (onReady) onReady(); return; }
    _onReadyCb = onReady || null;
    console.log('[SF] init() — tentative Worker local /stockfish.js');
    _tryLocalWorker();
  }

  /* ── Stratégie 1 : Worker local (marche si stockfish.js est sur le serveur) ── */
  function _tryLocalWorker() {
    try {
      var w = new Worker('./stockfish.js');
      w.onmessage = function(e) {
        /* Si on reçoit quelque chose, le worker fonctionne */
        _attachWorker(w);
        w.postMessage('isready');
      };
      w.onerror = function() {
        console.warn('[SF] Worker local échoué, essai script tag...');
        w.terminate();
        _tryScriptTag();
      };
      w.postMessage('uci');
    } catch(e) {
      console.warn('[SF] Worker local exception:', e);
      _tryScriptTag();
    }
  }

  /* ── Stratégie 2 : Charger stockfish.js comme <script> dans la page ──
     Safari supporte bien ça. Stockfish v10 expose window.Stockfish()      */
  function _tryScriptTag() {
    console.log('[SF] Chargement via <script> tag...');

    if (typeof Stockfish === 'function') {
      _startInline();
      return;
    }

    var script = document.createElement('script');
    script.src = './stockfish.js';
    script.onload = function() {
      console.log('[SF] Script tag chargé OK');
      _startInline();
    };
    script.onerror = function() {
      console.warn('[SF] /stockfish.js introuvable, essai CDN...');
      _tryCDNScript();
    };
    document.head.appendChild(script);
  }

  /* ── Stratégie 3 : CDN jsdelivr via script tag (dernier recours) ── */
  function _tryCDNScript() {
    console.log('[SF] Chargement depuis CDN...');
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
      console.log('[SF] CDN chargé OK');
      _startInline();
    };
    script.onerror = function() {
      _setError('Impossible de charger Stockfish (CDN inaccessible)');
    };
    document.head.appendChild(script);
  }

  /* ── Démarrage en mode inline (thread principal) ── */
  function _startInline() {
    try {
      var fn = (typeof Stockfish === 'function') ? Stockfish : null;
      if (!fn) { _setError('Stockfish() non trouvé après chargement'); return; }

      var sf = fn();
      /* Encapsule dans la même interface que Worker */
      worker = {
        postMessage: function(msg) { sf.postMessage(msg); },
        terminate:   function() {}
      };
      sf.onmessage = function(line) { _handle(line); };
      console.log('[SF] Mode inline (thread principal) OK');
      sf.postMessage('uci');
      sf.postMessage('isready');
    } catch(e) {
      _setError('Erreur instanciation: ' + e.message);
    }
  }

  /* ── Attache un Worker déjà fonctionnel ── */
  function _attachWorker(w) {
    worker = w;
    worker.onmessage = function(e) { _handle(e.data); };
    worker.onerror   = function(e) { console.error('[SF]', e); };
    console.log('[SF] Worker local attaché OK');
  }

  /* ── Traitement messages UCI ── */
  function _handle(line) {
    if (typeof line !== 'string') return;
    if (line === 'uciok')   { console.log('[SF] uciok'); return; }
    if (line === 'readyok') {
      ready = true;
      console.log('[SF] ✓ Prêt !');
      if (_onReadyCb) { _onReadyCb(); _onReadyCb = null; }
      return;
    }
    if (line.indexOf('bestmove') === 0) {
      var p = line.split(' ');
      _result.bestMove = (p[1] && p[1] !== '(none)') ? p[1] : null;
      if (_onResult) { _onResult(_clone()); _onResult = null; }
      return;
    }
    if (line.indexOf('info') === 0 && line.indexOf(' score ') !== -1) {
      var tokens = line.split(' ');
      for (var i = 0; i < tokens.length; i++) {
        if (tokens[i] === 'depth') _result.depth = parseInt(tokens[i+1]) || 0;
        if (tokens[i] === 'score') {
          if (tokens[i+1] === 'cp')   { _result.score = parseInt(tokens[i+2]); _result.mate = null; }
          if (tokens[i+1] === 'mate') { _result.mate  = parseInt(tokens[i+2]); _result.score = null; }
        }
      }
    }
  }

  function _clone() {
    return { score:_result.score, mate:_result.mate,
             bestMove:_result.bestMove, depth:_result.depth };
  }

  function _setError(msg) {
    console.error('[SF]', msg);
    document.querySelectorAll('.engine-loading').forEach(function(el) {
      el.textContent = '❌ ' + msg;
      el.style.color = '#ff6b6b';
    });
  }

  /* ── API publique ── */
  function evaluate(fen, onResult) {
    if (!worker || !ready) { console.warn('[SF] Pas encore prêt'); return; }
    _result = { score:null, mate:null, bestMove:null, depth:0 };
    var side = fen.split(' ')[1];
    _onResult = function(res) {
      if (side === 'b') {
        if (res.score !== null) res.score = -res.score;
        if (res.mate  !== null) res.mate  = -res.mate;
      }
      onResult(res);
    };
    worker.postMessage('position fen ' + fen);
    worker.postMessage('go depth ' + depth);
  }

  function setDepth(d) { depth = Math.max(1, Math.min(20, parseInt(d)||14)); }
  function stop()      { if (worker) worker.postMessage('stop'); }
  function isReady()   { return ready; }
  function getDepth()  { return depth; }
  function destroy()   {
    if (worker) { worker.terminate(); worker = null; ready = false; }
  }

  console.log('[stockfish-engine.js] StockfishEngine v5 OK');
  return { init, evaluate, setDepth, stop, isReady, getDepth, destroy };

})();
