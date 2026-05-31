/* ══════════════════════════════════════════════
   app.js — Controllers, keyboard nav, Stockfish UI, PWA init
   Depends on: engine.js, pieces.js, i18n.js, data/openings.js, board.js, stockfish-engine.js
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   CONTROLLERS
   ══════════════════════════════════════════════ */
var activeVariants = {};
var engines        = {};
var boardRenderers = {};
var lastActiveChap = 1;
var maxChap        = 0; // set on DOMContentLoaded

function updateCounter(id) {
  var el = document.getElementById('mc' + id);
  if (!el) return;
  var varKey = activeVariants[id];
  if(!DB[id] || !DB[id][varKey]) return;
  var total = DB[id][varKey].moves.length;
  var cur   = engines[id].getHistoryLength();
  el.textContent = t('render_move_counter_basic') + cur + t('render_move_sep') + total;
}

function nextMove(id) {
  lastActiveChap = id;
  var mode = boardMode[id] || 'var';

  if(mode === 'game'){
    var gi = gameStepIndex[id];
    var gm = gameMoves[id];
    if(gm && gi < gm.length-1) playGameTo(id, gi+1);
    return;
  }
  // mode var : avancer dans la ligne de variante cliquable OU dans les moves DB
  var vm = varMoves[id];
  if(vm && vm.length){
    var vi = (varStepIndex[id] === undefined ? -1 : varStepIndex[id]);
    if(vi < vm.length-1) playVarTo(id, vi+1);
    return;
  }
  // fallback : moves DB classiques
  var list = DB[id][activeVariants[id]].moves;
  var idx  = engines[id].getHistoryLength();
  if(idx < list.length){
    engines[id].move(list[idx]);
    if(boardRenderers[id]) boardRenderers[id].update();
    updateCounter(id);
  }
}

function prevMove(id) {
  lastActiveChap = id;
  var mode = boardMode[id] || 'var';

  if(mode === 'game'){
    var gi = gameStepIndex[id];
    if(gi > 0) playGameTo(id, gi-1);
    else exitGameMode(id);
    return;
  }
  var vm = varMoves[id];
  if(vm && vm.length){
    var vi = (varStepIndex[id] === undefined ? -1 : varStepIndex[id]);
    if(vi > 0) playVarTo(id, vi-1);
    else {
      // retour position initiale
      varStepIndex[id] = -1;
      engines[id].reset();
      if(boardRenderers[id]) boardRenderers[id].update();
      updateCounter(id);
      _highlightVarToken(id, -1);
    }
    return;
  }
  engines[id].undo();
  if(boardRenderers[id]) boardRenderers[id].update();
  updateCounter(id);
}

function switchVariant(chapId, varKey, evt) {
  activeVariants[chapId] = varKey;
  boardMode[chapId]      = 'var';
  gameStepIndex[chapId]  = -1;
  varStepIndex[chapId]   = -1;
  engines[chapId].reset();
  if(boardRenderers[chapId]) boardRenderers[chapId].update();
  renderText(chapId, varKey);
  updateCounter(chapId);
  lastActiveChap = chapId;

  var vs = document.getElementById('vs' + chapId);
  if(vs){
    vs.querySelectorAll('.btn-var').forEach(function(b){ b.classList.remove('active'); });
    if(evt && evt.target) evt.target.classList.add('active');
  }
}

// Navigation clavier ← →
document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowRight') nextMove(lastActiveChap);
  if(e.key === 'ArrowLeft')  prevMove(lastActiveChap);
});

// Mémoriser le dernier échiquier actif au clic
document.addEventListener('click', function(e){
  var t = e.target;
  while(t && t !== document.body){
    if(t.dataset){
      if(t.dataset.chap){ lastActiveChap = parseInt(t.dataset.chap); return; }
      if(t.dataset.vidx !== undefined){
        var c = t.getAttribute('onclick');
        if(c){ var m = c.match(/playVarTo\((\d+)/); if(m){ lastActiveChap=parseInt(m[1]); return; } }
      }
    }
    t = t.parentElement;
  }
});



/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', function() {
  /* Patch DB[46]: the entry was built without line:/moves: — add them now */
  if (DB && DB[46]) {
    if (DB[46].reversed && !DB[46].reversed.line) {
      DB[46].reversed.line = '1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5 5.Fg2';
      DB[46].reversed.moves = [
        {from:'c2',to:'c4'},{from:'e7',to:'e5'},{from:'b1',to:'c3'},
        {from:'g8',to:'f6'},{from:'g2',to:'g3'},{from:'d7',to:'d5'},
        {from:'c4',to:'d5'},{from:'f6',to:'d5'},{from:'f1',to:'g2'}
      ];
    }
    if (DB[46].symmetric && !DB[46].symmetric.line) {
      DB[46].symmetric.line = '1.c4 c5 2.Cc3 Cc6 3.g3 g6 4.Fg2 Fg7';
      DB[46].symmetric.moves = [
        {from:'c2',to:'c4'},{from:'c7',to:'c5'},{from:'b1',to:'c3'},
        {from:'b8',to:'c6'},{from:'g2',to:'g3'},{from:'g7',to:'g6'},
        {from:'f1',to:'g2'},{from:'f8',to:'g7'}
      ];
    }
  }

  maxChap = Object.keys(DB).length;
  for (var id = 1; id <= maxChap; id++) {
    if (!DB[id]) continue;
    engines[id]        = ChessEngine();
    boardRenderers[id] = ChessboardRenderer('board' + id, engines[id]);
    activeVariants[id] = Object.keys(DB[id])[0];
    renderText(id, activeVariants[id]);
    updateCounter(id);
  }
});

/* ══════════════════════════════════════════════
   STOCKFISH ENGINE UI
   ══════════════════════════════════════════════ */

/* État de l'engine par chapitre */
var engineOn      = {};   /* true si activé pour ce chapitre */
var engineLoaded  = false;
var engineLoading = false;

/* Récupère le FEN courant de l'échiquier d'un chapitre */
function getCurrentFen(chapId) {
  var eng = engines[chapId];
  if (!eng || typeof eng.getFen !== 'function') {
    /* Fallback : position initiale */
    return 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  }
  return eng.getFen();
}

/* Formate le score en centipions → chaîne affichable */
function formatScore(res) {
  if (res.mate !== null) {
    var sign = res.mate > 0 ? '+' : '';
    return { text: 'Mat en ' + Math.abs(res.mate), cls: 'mate' };
  }
  if (res.score === null) return { text: '—', cls: '' };
  var cp  = res.score;
  var abs = Math.abs(cp);
  var pawns = (abs / 100).toFixed(2);
  var sign  = cp >= 0 ? '+' : '-';
  return {
    text: sign + pawns,
    cls:  cp >= 0 ? 'positive' : 'negative'
  };
}

/* Met à jour l'affichage du panneau engine pour chapId */
function updateEngineDisplay(chapId, res) {
  var loading = document.getElementById('el' + chapId);
  var result  = document.getElementById('er' + chapId);
  var barFill = document.getElementById('ebf' + chapId);
  var scoreEl = document.getElementById('esc' + chapId);
  var bmEl    = document.getElementById('ebm' + chapId);
  var dpEl    = document.getElementById('edp' + chapId);
  var dot     = document.getElementById('esd' + chapId);

  if (!result) return;

  if (loading) loading.style.display = 'none';
  result.style.display = 'block';

  /* Score */
  var fmt = formatScore(res);
  if (scoreEl) {
    scoreEl.textContent = fmt.text;
    scoreEl.className   = 'eval-score ' + fmt.cls;
  }

  /* Barre d'évaluation (0% = noirs gagnent tout, 100% = blancs gagnent tout) */
  if (barFill && res.score !== null) {
    var pct = 50 + Math.max(-50, Math.min(50, res.score / 20));
    barFill.style.width = pct + '%';
  } else if (barFill && res.mate !== null) {
    barFill.style.width = res.mate > 0 ? '95%' : '5%';
  }

  /* Meilleur coup */
  if (bmEl) {
    var bm = res.bestMove || '—';
    bmEl.innerHTML = '<span>' + (window.LANG === 'en' ? 'Best move:' : 'Meilleur coup :') + '</span> ' + bm;
  }

  /* Profondeur */
  if (dpEl) dpEl.textContent = 'prof. ' + (res.depth || '—');

  /* Dot → vert (actif) */
  if (dot) { dot.className = 'engine-status-dot active'; }
}

/* Lance l'analyse pour un chapitre */
function analyzeChapter(chapId) {
  if (!engineOn[chapId]) return;
  if (!StockfishEngine.isReady()) return;

  var dot = document.getElementById('esd' + chapId);
  if (dot) dot.className = 'engine-status-dot thinking';

  var fen = getCurrentFen(chapId);
  StockfishEngine.evaluate(fen, function(res) {
    updateEngineDisplay(chapId, res);
  });
}

/* Active/désactive l'engine pour un chapitre */
function toggleEngine(chapId) {
  console.log('[Chessbook] toggleEngine appelé pour chapitre', chapId);
  console.log('[Chessbook] StockfishEngine disponible ?', typeof StockfishEngine !== 'undefined');

  var sw   = document.getElementById('esw' + chapId);
  var body = document.getElementById('eb' + chapId);
  var dot  = document.getElementById('esd' + chapId);

  engineOn[chapId] = !engineOn[chapId];

  if (sw)   sw.classList.toggle('on', engineOn[chapId]);
  if (body) body.classList.toggle('visible', engineOn[chapId]);

  if (engineOn[chapId]) {
    /* Charger Stockfish si pas encore fait */
    if (!engineLoaded && !engineLoading) {
      engineLoading = true;
      StockfishEngine.init(function() {
        engineLoaded  = true;
        engineLoading = false;
        console.log('[Chessbook] Stockfish prêt !');
        /* Analyser tous les chapitres qui attendent */
        for (var id = 1; id <= maxChap; id++) {
          if (engineOn[id]) {
            var el = document.getElementById('el' + id);
            if (el) el.textContent = 'Analyse en cours...';
            analyzeChapter(id);
          }
        }
      });
    } else if (engineLoaded) {
      var el = document.getElementById('el' + chapId);
      if (el) el.textContent = 'Analyse en cours...';
      analyzeChapter(chapId);
    } else {
      /* En cours de chargement — on poll jusqu'à ce que ce soit prêt */
      var el = document.getElementById('el' + chapId);
      if (el) el.textContent = 'Chargement de stockfish.js...';
      var pollId = setInterval(function() {
        if (StockfishEngine.isReady()) {
          clearInterval(pollId);
          if (engineOn[chapId]) {
            var el2 = document.getElementById('el' + chapId);
            if (el2) el2.textContent = 'Analyse en cours...';
            analyzeChapter(chapId);
          }
        }
      }, 200);
    }
  } else {
    /* Désactivé */
    StockfishEngine.stop();
    if (dot) dot.className = 'engine-status-dot';
  }
}

/* Hook : on analyse après chaque changement de position
   On surcharge nextMove, prevMove, playVarTo, playGameTo, switchVariant */
(function() {
  var _nextMove     = window.nextMove;
  var _prevMove     = window.prevMove;
  var _playVarTo    = window.playVarTo;
  var _playGameTo   = window.playGameTo;
  var _switchVariant = window.switchVariant;

  window.nextMove = function(id) {
    _nextMove(id);
    if (engineOn[id] && engineLoaded) analyzeChapter(id);
  };
  window.prevMove = function(id) {
    _prevMove(id);
    if (engineOn[id] && engineLoaded) analyzeChapter(id);
  };
  window.playVarTo = function(chapId, idx) {
    _playVarTo(chapId, idx);
    if (engineOn[chapId] && engineLoaded) setTimeout(function(){ analyzeChapter(chapId); }, 50);
  };
  window.playGameTo = function(chapId, idx) {
    _playGameTo(chapId, idx);
    if (engineOn[chapId] && engineLoaded) setTimeout(function(){ analyzeChapter(chapId); }, 50);
  };
  window.switchVariant = function(chapId, varKey, evt) {
    _switchVariant(chapId, varKey, evt);
    if (engineOn[chapId] && engineLoaded) setTimeout(function(){ analyzeChapter(chapId); }, 50);
  };
})();

/* ══════════════════════════════════════════════
   PWA — Service Worker
   ══════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./service-worker.js', { scope: './' })
      .then(function(reg) {
        console.log('[PWA] Service Worker enregistré :', reg.scope);
      })
      .catch(function(err) {
        console.warn('[PWA] Échec enregistrement SW :', err);
      });
  });
}
