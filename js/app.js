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

function flipBoard(id) {
  if (boardRenderers[id]) boardRenderers[id].flip();
  var card = document.getElementById('chap-' + id);
  if (!card) return;
  ['row-labels', 'col-labels'].forEach(function(cls) {
    var el = card.querySelector('.' + cls);
    if (!el) return;
    var spans = [].slice.call(el.querySelectorAll('span'));
    var texts = spans.map(function(s) { return s.textContent; });
    texts.reverse();
    spans.forEach(function(s, i) { s.textContent = texts[i]; });
  });
}

function openOnLichess(id) {
  var fen = getCurrentFen(id);
  /* 'noopener' : empêche l'onglet ouvert d'accéder à window.opener (reverse tabnabbing) */
  window.open('https://lichess.org/analysis/' + fen.replace(/ /g, '_'), '_blank', 'noopener');
}

/* ══════════════════════════════════════════════
   LICHESS STATS — win/draw/loss + popularité
   ══════════════════════════════════════════════ */
var lichessStatsCache = {};

function fetchLichessStats(chapId, varKey) {
  var cacheKey = chapId + ':' + varKey;
  if (lichessStatsCache[cacheKey] !== undefined) {
    renderLichessStats(chapId, lichessStatsCache[cacheKey]);
    return;
  }
  var moves = (varMoves && varMoves[chapId])
           || (DB[chapId] && DB[chapId][varKey] && DB[chapId][varKey].moves);
  if (!moves || !moves.length) return;
  var uci = moves.map(function(m) { return m.from + m.to; }).join(',');
  fetch('https://explorer.lichess.ovh/lichess?play=' + uci + '&topGames=0&recentGames=0')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      lichessStatsCache[cacheKey] = data;
      renderLichessStats(chapId, data);
    })
    .catch(function() {
      lichessStatsCache[cacheKey] = null;
    });
}

function renderLichessStats(chapId, data) {
  var el = document.getElementById('lstats-' + chapId);
  if (!el) return;
  if (!data) { el.innerHTML = ''; return; }
  var w = data.white || 0, d = data.draws || 0, b = data.black || 0;
  var total = w + d + b;
  if (!total) { el.innerHTML = ''; return; }
  var wp = Math.round(w * 100 / total);
  var dp = Math.round(d * 100 / total);
  var bp = 100 - wp - dp;
  var stars = total > 50e6 ? 5 : total > 10e6 ? 4 : total > 2e6 ? 3 : total > 500e3 ? 2 : total > 100e3 ? 1 : 0;
  var starsHtml = '';
  for (var i = 1; i <= 5; i++) {
    starsHtml += '<span class="lstar' + (i <= stars ? ' lstar-on' : '') + '">&#9733;</span>';
  }
  var totalStr = total > 1e6 ? (total / 1e6).toFixed(1) + 'M'
               : total > 1000 ? Math.round(total / 1000) + 'K'
               : String(total);
  var gamesLbl = LANG === 'en' ? 'games' : 'parties';
  var wLbl = LANG === 'en' ? 'White' : 'Blancs';
  var dLbl = LANG === 'en' ? 'Draw'  : 'Nulle';
  var bLbl = LANG === 'en' ? 'Black' : 'Noirs';
  el.innerHTML =
    '<div class="lstat-header">'
    + '<span class="lstat-stars">' + starsHtml + '</span>'
    + '<span class="lstat-count">' + totalStr + ' ' + gamesLbl + '</span>'
    + '</div>'
    + '<div class="lstat-bar">'
    + '<span class="lstat-seg lstat-w" style="width:' + wp + '%"></span>'
    + '<span class="lstat-seg lstat-d" style="width:' + dp + '%"></span>'
    + '<span class="lstat-seg lstat-b" style="width:' + bp + '%"></span>'
    + '</div>'
    + '<div class="lstat-legend">'
    + '<span class="lstat-w-txt">&#9633; ' + wLbl + ' ' + wp + '%</span>'
    + '<span class="lstat-d-txt">&#9632; ' + dLbl + ' ' + dp + '%</span>'
    + '<span class="lstat-b-txt">&#9632; ' + bLbl + ' ' + bp + '%</span>'
    + '</div>';
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
function initMobileToggles() {
  document.querySelectorAll('.flex-layout').forEach(function(layout) {
    var content = layout.querySelector('.content-container');
    var board   = layout.querySelector('.board-container');
    if (!content || !board) return;
    var btn = document.createElement('button');
    btn.className = 'content-toggle';
    btn.innerHTML = '<span class="toggle-label" data-i18n="mobile_toggle">' + t('mobile_toggle') + '</span>' +
                    '<span class="toggle-arrow">&#9660;</span>';
    btn.addEventListener('click', function() {
      var isOpen = content.classList.toggle('mobile-open');
      btn.classList.toggle('open', isOpen);
    });
    board.appendChild(btn);
  });
}

/* Initialise un chapitre à la demande (engine, échiquier, texte). Idempotent. */
var chapInitialized = {};
function initChapter(id) {
  if (chapInitialized[id] || !DB[id]) return;
  chapInitialized[id] = true;
  engines[id]        = ChessEngine();
  boardRenderers[id] = ChessboardRenderer('board' + id, engines[id]);
  activeVariants[id] = Object.keys(DB[id])[0];
  renderText(id, activeVariants[id]);
  updateCounter(id);
}

/* Initialise tous les chapitres d'une section (CHAP_INDEX mappe chapitre → section) */
function initSection(n) {
  for (var i = 0; i < CHAP_INDEX.length; i++) {
    if (CHAP_INDEX[i].section === n) initChapter(CHAP_INDEX[i].id);
  }
}

window.addEventListener('DOMContentLoaded', function() {
  maxChap = Math.max.apply(null, Object.keys(DB).map(Number));
  initSection(1); // seule la section 1 est visible au chargement ; le reste à l'activation de l'onglet
  initMobileToggles();
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

/* Cache des éléments du panneau engine par chapitre (évite les getElementById répétés) */
var engineEls = {};
function getEngineEls(chapId) {
  var c = engineEls[chapId];
  if (c) return c;
  c = {
    sw:      document.getElementById('esw' + chapId),
    body:    document.getElementById('eb' + chapId),
    loading: document.getElementById('el' + chapId),
    result:  document.getElementById('er' + chapId),
    barFill: document.getElementById('ebf' + chapId),
    scoreEl: document.getElementById('esc' + chapId),
    bmEl:    document.getElementById('ebm' + chapId),
    dpEl:    document.getElementById('edp' + chapId),
    dot:     document.getElementById('esd' + chapId)
  };
  if (c.result) engineEls[chapId] = c; // ne met en cache qu'une fois le DOM présent
  return c;
}

/* Met à jour l'affichage du panneau engine pour chapId */
function updateEngineDisplay(chapId, res) {
  var els = getEngineEls(chapId);
  if (!els.result) return;

  if (els.loading) els.loading.style.display = 'none';
  els.result.style.display = 'block';

  /* Score */
  var fmt = formatScore(res);
  if (els.scoreEl) {
    els.scoreEl.textContent = fmt.text;
    els.scoreEl.className   = 'eval-score ' + fmt.cls;
  }

  /* Barre d'évaluation (0% = noirs gagnent tout, 100% = blancs gagnent tout) */
  if (els.barFill && res.score !== null) {
    var pct = 50 + Math.max(-50, Math.min(50, res.score / 20));
    els.barFill.style.width = pct + '%';
  } else if (els.barFill && res.mate !== null) {
    els.barFill.style.width = res.mate > 0 ? '95%' : '5%';
  }

  /* Meilleur coup — le coup vient du moteur ; on l'insère en tant que texte (pas d'HTML) */
  if (els.bmEl) {
    var bm = res.bestMove || '—';
    els.bmEl.innerHTML = '<span>' + (window.LANG === 'en' ? 'Best move:' : 'Meilleur coup :') + '</span> ';
    els.bmEl.appendChild(document.createTextNode(bm));
  }

  /* Profondeur */
  if (els.dpEl) els.dpEl.textContent = 'prof. ' + (res.depth || '—');

  /* Dot → vert (actif) */
  if (els.dot) els.dot.className = 'engine-status-dot active';
}

/* Lance l'analyse pour un chapitre */
function analyzeChapter(chapId) {
  if (!engineOn[chapId]) return;
  if (!StockfishEngine.isReady()) return;

  var dot = getEngineEls(chapId).dot;
  if (dot) dot.className = 'engine-status-dot thinking';

  var fen = getCurrentFen(chapId);
  StockfishEngine.evaluate(fen, function(res) {
    updateEngineDisplay(chapId, res);
  });
}

/* Active/désactive l'engine pour un chapitre */
function toggleEngine(chapId) {
  var els = getEngineEls(chapId);

  engineOn[chapId] = !engineOn[chapId];

  if (els.sw)   els.sw.classList.toggle('on', engineOn[chapId]);
  if (els.body) els.body.classList.toggle('visible', engineOn[chapId]);

  if (engineOn[chapId]) {
    /* Charger Stockfish si pas encore fait */
    if (!engineLoaded && !engineLoading) {
      engineLoading = true;
      if (els.loading) els.loading.textContent = 'Chargement de stockfish.js...';
      StockfishEngine.init(function() {
        engineLoaded  = true;
        engineLoading = false;
        /* Analyser tous les chapitres qui attendent (y compris ceux activés pendant le chargement) */
        for (var id = 1; id <= maxChap; id++) {
          if (engineOn[id]) {
            var l = getEngineEls(id).loading;
            if (l) l.textContent = 'Analyse en cours...';
            analyzeChapter(id);
          }
        }
      });
    } else if (engineLoaded) {
      if (els.loading) els.loading.textContent = 'Analyse en cours...';
      analyzeChapter(chapId);
    } else {
      /* Chargement déjà en cours — le callback de init() analysera ce chapitre */
      if (els.loading) els.loading.textContent = 'Chargement de stockfish.js...';
    }
  } else {
    /* Désactivé */
    StockfishEngine.stop();
    if (els.dot) els.dot.className = 'engine-status-dot';
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

/* ══════════════════════════════════════════════
   TAB NAVIGATION
   ══════════════════════════════════════════════ */
var _activeSection = 1;

function showSection(n) {
  document.querySelectorAll('.tab-section').forEach(function(s) {
    s.classList.add('hidden');
  });
  var sec = document.getElementById('section-' + n);
  if (sec) sec.classList.remove('hidden');
  initSection(n); // initialise les chapitres de cette section au premier affichage
  document.querySelectorAll('.tab-btn').forEach(function(b) {
    b.classList.toggle('active', parseInt(b.dataset.section) === n);
  });
  _activeSection = n;
  var nav = document.getElementById('tab-nav');
  if (nav) window.scrollTo({ top: nav.getBoundingClientRect().top + window.pageYOffset - 10, behavior: 'smooth' });
}

/* ══════════════════════════════════════════════
   SEARCH
   ══════════════════════════════════════════════ */
var CHAP_INDEX = [
  {id:1,  section:1}, {id:2,  section:1}, {id:3,  section:1}, {id:4,  section:1}, {id:5,  section:1},
  {id:15, section:1}, {id:16, section:1}, {id:17, section:1}, {id:18, section:1}, {id:19, section:1},
  {id:20, section:1}, {id:21, section:1}, {id:22, section:1}, {id:23, section:1},
  {id:46, section:1}, {id:47, section:1}, {id:48, section:1},
  {id:6,  section:2}, {id:7,  section:2}, {id:8,  section:2}, {id:9,  section:2},
  {id:54, section:2}, {id:55, section:2}, {id:24, section:2}, {id:25, section:2}, {id:26, section:2}, {id:49, section:2},
  {id:10, section:3}, {id:50, section:3}, {id:51, section:3},
  {id:11, section:4}, {id:29, section:4}, {id:12, section:4}, {id:13, section:4},
  {id:27, section:4}, {id:28, section:4}, {id:30, section:4}, {id:31, section:4},
  {id:32, section:4}, {id:33, section:4}, {id:34, section:4}, {id:35, section:4},
  {id:36, section:5}, {id:37, section:5}, {id:38, section:5}, {id:39, section:5}, {id:40, section:5}, {id:41, section:5},
  {id:14, section:6}, {id:42, section:6}, {id:43, section:6}, {id:44, section:6},
  {id:45, section:6}, {id:52, section:6}, {id:53, section:6}
];

document.addEventListener('DOMContentLoaded', function() {
  var inp  = document.getElementById('search-input');
  var drop = document.getElementById('search-dropdown');
  if (!inp || !drop) return;

  inp.addEventListener('input', function() {
    var q = inp.value.trim().toLowerCase();
    drop.innerHTML = '';
    if (q.length < 2) { drop.classList.add('hidden'); return; }

    var results = CHAP_INDEX.filter(function(c) {
      var title = (t('ch' + c.id) || '').toLowerCase();
      return title.indexOf(q) >= 0;
    });

    if (!results.length) { drop.classList.add('hidden'); return; }

    results.forEach(function(c) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="sd-title">' + t('ch' + c.id) + '</span>' +
                     '<span class="sd-section">' + t('tab' + c.section + '_label') + '</span>';
      li.addEventListener('click', function() {
        showSection(c.section);
        var card = document.getElementById('chap-' + c.id);
        if (card) {
          setTimeout(function() {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            card.classList.add('chap-highlight');
            setTimeout(function() { card.classList.remove('chap-highlight'); }, 1800);
          }, 150);
        }
        drop.classList.add('hidden');
        inp.value = '';
      });
      drop.appendChild(li);
    });
    drop.classList.remove('hidden');
  });

  document.addEventListener('click', function(e) {
    if (!inp.contains(e.target) && !drop.contains(e.target)) {
      drop.classList.add('hidden');
    }
  });
});