/* ══════════════════════════════════════════════
   board.js — ChessboardRenderer, PGN parser, game/variant state, renderText()
   Depends on: engine.js, pieces.js, i18n.js, data/openings.js
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   BOARD RENDERER
   ══════════════════════════════════════════════ */
function ChessboardRenderer(boardId, engine) {
  var table = document.getElementById(boardId);
  if (!table) return null;
  var fns = makePieceSVGs(boardId);
  var flipped = false;

  function render() {
    var cols = flipped ? ['h','g','f','e','d','c','b','a'] : ['a','b','c','d','e','f','g','h'];
    var rows = flipped ? ['1','2','3','4','5','6','7','8'] : ['8','7','6','5','4','3','2','1'];
    var html = '';
    for (var i = 0; i < 8; i++) {
      html += '<tr>';
      for (var j = 0; j < 8; j++) {
        var sq = cols[j] + rows[i];
        var cls = (i + j) % 2 === 0 ? 'light' : 'dark';
        var pc = engine.getPiece(sq);
        html += '<td class="' + cls + '">';
        if (pc) {
          var color = pc[0] === 'w' ? fns.W : fns.B_;
          var type  = pc[1];
          if (fns[type]) html += '<span class="chess-piece">' + fns[type](color) + '</span>';
        }
        html += '</td>';
      }
      html += '</tr>';
    }
    table.innerHTML = html;
  }
  render();
  return {
    update: render,
    flip: function() { flipped = !flipped; render(); }
  };
}

/* ══════════════════════════════════════════════
   PGN PARSER — SAN → {from, to}
   Convertit la notation algébrique (Cf3, exd5, 0-0…)
   en couples de cases exploitables par ChessEngine
   ══════════════════════════════════════════════ */

/* Position de départ complète */
var PGN_START = {
  a1:'wR',b1:'wN',c1:'wB',d1:'wQ',e1:'wK',f1:'wB',g1:'wN',h1:'wR',
  a2:'wP',b2:'wP',c2:'wP',d2:'wP',e2:'wP',f2:'wP',g2:'wP',h2:'wP',
  a7:'bP',b7:'bP',c7:'bP',d7:'bP',e7:'bP',f7:'bP',g7:'bP',h7:'bP',
  a8:'bR',b8:'bN',c8:'bB',d8:'bQ',e8:'bK',f8:'bB',g8:'bN',h8:'bR'
};

var FILES = ['a','b','c','d','e','f','g','h'];
var RANKS = ['1','2','3','4','5','6','7','8'];

function clonePos(p){ return Object.assign({},p); }

function sqColor(sq){ var f=FILES.indexOf(sq[0]),r=parseInt(sq[1])-1; return (f+r)%2===0?'dark':'light'; }

/* Toutes les cases occupées par pièce type */
function findPieces(pos, pieceCode){
  var res=[];
  for(var sq in pos){ if(pos[sq]===pieceCode) res.push(sq); }
  return res;
}

/* Vérifie si une pièce sur `from` peut légalement aller sur `to` (mouvement pur, sans validation d'échec) */
function couldMove(pos, from, to, piece){
  var color = piece[0]; // 'w' ou 'b'
  var type  = piece[1]; // P N B R Q K
  var ff=FILES.indexOf(from[0]), fr=parseInt(from[1])-1;
  var tf=FILES.indexOf(to[0]),   tr=parseInt(to[1])-1;
  var df=tf-ff, dr=tr-fr;

  function pathClear(dF,dR){
    var steps=Math.max(Math.abs(df/dF||0),Math.abs(dr/dR||0))-1;
    for(var i=1;i<=steps;i++){
      var sf=FILES[ff+(dF>0?i:-i)*(dF!==0?1:0)];
      var sr=(fr+(dR>0?i:-i)*(dR!==0?1:0)+1).toString();
      if(!sf||!sr) break;
      if(pos[sf+sr]) return false;
    }
    return true;
  }

  var target=pos[to];
  if(target && target[0]===color) return false; // ne peut pas capturer sa propre pièce

  if(type==='P'){
    var dir = color==='w' ? 1 : -1;
    if(df===0){
      if(dr!==dir) {
        // double poussée depuis la rangée de départ
        if(dr!==2*dir) return false;
        var startRank = color==='w'?'2':'7';
        if(from[1]!==startRank) return false;
        var midSq = from[0]+(fr+dir+1).toString();
        if(pos[midSq]||target) return false;
      }
      if(target) return false; // la case devant est occupée
    } else if(Math.abs(df)===1 && dr===dir){
      // FIX #4: Allow diagonal pawn capture if target square is occupied (normal capture)
      // OR if the target square is empty but lands on rank 3 (Black en passant)
      // or rank 6 (White en passant) — the captured pawn stands beside the moving pawn,
      // not on the destination square. A full en-passant check (verifying the previous
      // double-pawn push) is intentionally omitted here because parsePGNString feeds
      // pre-validated PGN from real games; the key fix is to not return false when
      // target is empty on the en-passant destination rank.
      var epRank = color === 'w' ? '6' : '3';
      if(!target && to[1] !== epRank) return false; // capture diagonale seulement si pièce adverse ou en passant
    } else return false;
    return true;
  }
  if(type==='N'){
    return (Math.abs(df)===2&&Math.abs(dr)===1)||(Math.abs(df)===1&&Math.abs(dr)===2);
  }
  if(type==='B'){
    if(Math.abs(df)!==Math.abs(dr)||df===0) return false;
    var sF=df>0?1:-1, sR=dr>0?1:-1;
    for(var i=1;i<Math.abs(df);i++){
      var sq2=FILES[ff+sF*i]+(fr+sR*i+1).toString();
      if(pos[sq2]) return false;
    }
    return true;
  }
  if(type==='R'){
    if(df!==0&&dr!==0) return false;
    if(df!==0){
      var s=df>0?1:-1;
      for(var i=1;i<Math.abs(df);i++){ if(pos[FILES[ff+s*i]+from[1]]) return false; }
    } else {
      var s=dr>0?1:-1;
      for(var i=1;i<Math.abs(dr);i++){ if(pos[from[0]+(fr+s*i+1).toString()]) return false; }
    }
    return true;
  }
  if(type==='Q'){
    if(df===0||dr===0){
      // Tour
      if(df!==0){ var s=df>0?1:-1; for(var i=1;i<Math.abs(df);i++){ if(pos[FILES[ff+s*i]+from[1]]) return false; } }
      else { var s=dr>0?1:-1; for(var i=1;i<Math.abs(dr);i++){ if(pos[from[0]+(fr+s*i+1).toString()]) return false; } }
      return true;
    }
    if(Math.abs(df)===Math.abs(dr)){
      var sF=df>0?1:-1,sR=dr>0?1:-1;
      for(var i=1;i<Math.abs(df);i++){ if(pos[FILES[ff+sF*i]+(fr+sR*i+1).toString()]) return false; }
      return true;
    }
    return false;
  }
  if(type==='K'){
    return Math.abs(df)<=1&&Math.abs(dr)<=1;
  }
  return false;
}

/* Applique un mouvement sur la position (retourne nouvelle position) */
function applyMove(pos, from, to, color, isKingMove, isCastle){
  var np = clonePos(pos);
  var piece = np[from];
  // Promotion automatique en Dame
  if(piece==='wP'&&to[1]==='8') piece='wQ';
  if(piece==='bP'&&to[1]==='1') piece='bQ';
  np[to]=piece; delete np[from];
  // Roque
  if(isCastle==='K'&&color==='w'){ np['f1']='wR'; delete np['h1']; }
  if(isCastle==='Q'&&color==='w'){ np['d1']='wR'; delete np['a1']; }
  if(isCastle==='K'&&color==='b'){ np['f8']='bR'; delete np['h8']; }
  if(isCastle==='Q'&&color==='b'){ np['d8']='bR'; delete np['a8']; }
  return np;
}

/**
 * Convertit un token SAN (ex: "Cf3", "exd5", "0-0", "Dxh4+", "Cg1-f3")
 * en {from, to} en utilisant la position courante `pos` et le camp `color`
 */
function sanToFromTo(san, pos, color){
  // Nettoyer la notation
  san = san.replace(/[+#!?]/g,'').replace(/x/g,'').trim();
  // Annotation de format "0-0-0" ou "0-0"
  if(san==='0-0-0'||san==='O-O-O'){
    var from = color==='w'?'e1':'e8';
    var to   = color==='w'?'c1':'c8';
    return {from:from, to:to, castle:color==='w'?'Q':'Q'};
  }
  if(san==='0-0'||san==='O-O'){
    var from = color==='w'?'e1':'e8';
    var to   = color==='w'?'g1':'g8';
    return {from:from, to:to, castle:color==='w'?'K':'K'};
  }

  // Notation longue explicite : e2-e4, Ng1-f3 etc.
  var longMatch = san.match(/^([KQRBN]?)([a-h][1-8])-([a-h][1-8])$/);
  if(longMatch){
    return {from:longMatch[2], to:longMatch[3]};
  }

  // Pion ou pièce ?
  // NOTATION FRANÇAISE : R=Roi(K), D=Dame(Q), T=Tour(R), F=Fou(B), C=Cavalier(N)
  // BUG CRITIQUE CORRIGE : en français R=Roi (King), PAS Rook (Tour) !
  var pieceChar='P', rest=san;
  var firstChar = san[0];
  if(/[RDTFCBKNQ]/.test(firstChar)){
    // Dictionnaire complet : français + anglais
    // FIX #1: Always include French piece letters because the DB stores PGNs in French
    // notation regardless of UI language. Removing the conditional ensures Cf3, Fb5, etc.
    // are always understood by the parser even when LANG === 'en'.
    var pieceMap = {'R':'K','D':'Q','T':'R','F':'B','C':'N','K':'K','Q':'Q','B':'B','N':'N'};
    var mapped = pieceMap[firstChar];
    if(mapped){ pieceChar=mapped; rest=san.slice(1); }
  }
  // Promotion : e8=Q → on ignore =Q
  rest = rest.replace(/=[QRBN]/,'');

  // La destination est toujours les 2 derniers caractères (case)
  var to = rest.slice(-2);
  if(!/^[a-h][1-8]$/.test(to)) return null;

  // Désambiguïsation éventuelle : reste entre pièce et destination
  var disambig = rest.slice(0, rest.length-2);

  var colorCode = color==='w'?'w':'b';
  var pieceCode = colorCode+pieceChar;
  var candidates = findPieces(pos, pieceCode);

  // Filtrer par déplacement légal
  candidates = candidates.filter(function(sq){
    return couldMove(pos, sq, to, pieceCode);
  });

  // Appliquer la désambiguïsation
  if(disambig){
    if(/^[a-h]$/.test(disambig)){
      candidates = candidates.filter(function(sq){ return sq[0]===disambig; });
    } else if(/^[1-8]$/.test(disambig)){
      candidates = candidates.filter(function(sq){ return sq[1]===disambig; });
    } else if(/^[a-h][1-8]$/.test(disambig)){
      candidates = candidates.filter(function(sq){ return sq===disambig; });
    }
  }

  if(candidates.length===1) return {from:candidates[0], to:to};
  if(candidates.length>1) return {from:candidates[0], to:to}; // prendre le premier en cas d'ambiguïté
  return null;
}

/**
 * Parse une chaîne PGN (texte de la partie) en liste de {from, to}
 * Gère les tokens HTML <span class="key-move">...</span>
 */
function parsePGNString(pgn){
  // Enlever les balises HTML mais garder le texte
  var clean = pgn.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');
  clean = clean.replace(/<[^>]+>/g,'');

  // Tokeniser : extraire les coups SAN
  var rawTokens = clean.split(/\s+/);

  // Éclater les tokens fusionnés "2.Cf3" → ["2.", "Cf3"]
  var tokens = [];
  rawTokens.forEach(function(t){
    t = t.trim();
    if(!t) return;
    // Si le token est de la forme digit(s).move (ex "2.Cf3", "10.exd5")
    var fused = t.match(/^(\d+\.+)(.+)$/);
    if(fused){
      tokens.push(fused[1]); // "2."
      tokens.push(fused[2]); // "Cf3"
    } else {
      tokens.push(t);
    }
  });

  var moves = [];
  var pos = clonePos(PGN_START);
  var color = 'w';

  for(var i=0;i<tokens.length;i++){
    var t = tokens[i].trim();
    if(!t) continue;
    // Ignorer les numéros de coups (1. 1... 12.)
    if(/^\d+\.+$/.test(t)) continue;
    // Ignorer les résultats
    if(/^(1-0|0-1|1\/2-1\/2|\*)$/.test(t)) continue;
    // Ignorer les annotations pures
    if(/^[!?]+$/.test(t)) continue;

    var san = t.replace(/[+#!?]/g,'');
    var result = sanToFromTo(san, pos, color);
    if(result){
      moves.push({san:t, from:result.from, to:result.to, castle:result.castle||null});
      // Avancer la position
      pos = applyMove(pos, result.from, result.to, color, san[0]==='K', result.castle);
      color = color==='w'?'b':'w';
    }
  }
  return moves;
}

/* ══════════════════════════════════════════════
   ÉTAT DES PARTIES INTERACTIVES
   ══════════════════════════════════════════════ */
var gameMoves      = {}; // chapId → [{san,from,to}] pour les parties exemples
var gameModeActive = {}; // chapId → bool
var gameStepIndex  = {}; // chapId → index actif (-1 = aucun)

var varMoves       = {}; // chapId → [{san,from,to}] pour la ligne de variante (d.line)
var varStepIndex   = {}; // chapId → index actif dans la ligne (-1 = aucun)

// Mode : 'var' (variante principale) ou 'game' (partie exemple)
var boardMode      = {}; // chapId → 'var' | 'game'

/* ──────────────────────────────────────────────
   Joue la partie exemple jusqu'au coup N (0-based)
   ────────────────────────────────────────────── */
function playGameTo(chapId, stepIdx){
  var moves = gameMoves[chapId];
  if(!moves) return;
  boardMode[chapId] = 'game';
  gameStepIndex[chapId] = stepIdx;
  varStepIndex[chapId]  = -1;

  engines[chapId].reset();
  for(var i=0; i<=stepIdx && i<moves.length; i++)
    engines[chapId].move({from:moves[i].from, to:moves[i].to});
  if(boardRenderers[chapId]) boardRenderers[chapId].update();

  var mcEl = document.getElementById('mc'+chapId);
  if(mcEl) mcEl.textContent = t('render_move_counter_game')+(stepIdx+1)+t('render_move_sep')+moves.length;

  _highlightGameToken(chapId, stepIdx);
  _highlightVarToken(chapId, -1);
}

/* ──────────────────────────────────────────────
   Joue la variante (d.line) jusqu'au coup N (0-based)
   ────────────────────────────────────────────── */
function playVarTo(chapId, stepIdx){
  var moves = varMoves[chapId];
  if(!moves) return;
  boardMode[chapId] = 'var';
  varStepIndex[chapId]  = stepIdx;
  gameStepIndex[chapId] = -1;

  engines[chapId].reset();
  for(var i=0; i<=stepIdx && i<moves.length; i++)
    engines[chapId].move({from:moves[i].from, to:moves[i].to});
  if(boardRenderers[chapId]) boardRenderers[chapId].update();

  var mcEl = document.getElementById('mc'+chapId);
  if(mcEl) mcEl.textContent = t('render_move_counter_var')+(stepIdx+1)+t('render_move_sep')+moves.length;

  _highlightVarToken(chapId, stepIdx);
  _highlightGameToken(chapId, -1);
}

/* ──────────────────────────────────────────────
   Quitter le mode partie → retour variante
   ────────────────────────────────────────────── */
function exitGameMode(chapId){
  boardMode[chapId]      = 'var';
  gameStepIndex[chapId]  = -1;
  varStepIndex[chapId]   = -1;
  engines[chapId].reset();
  if(boardRenderers[chapId]) boardRenderers[chapId].update();
  updateCounter(chapId);
  _highlightGameToken(chapId, -1);
  _highlightVarToken(chapId, -1);
}

/* helpers de surbrillance */
function _highlightGameToken(chapId, idx){
  var el = document.getElementById('content'+chapId);
  if(!el) return;
  el.querySelectorAll('.pgn-token').forEach(function(t,i){
    t.classList.toggle('active-move', i===idx);
  });
}
function _highlightVarToken(chapId, idx){
  var el = document.getElementById('content'+chapId);
  if(!el) return;
  el.querySelectorAll('.var-token').forEach(function(t,i){
    t.classList.toggle('active-move', i===idx);
  });
}

/* ──────────────────────────────────────────────
   Construire la ligne de variante cliquable
   d.line : "1.e4 e5 2.Cf3 Cc6 ..."
   ────────────────────────────────────────────── */
function buildVarLineHtml(chapId, line, parseLine){
  parseLine = parseLine || line;
  var parsed = parsePGNString(parseLine);
  varMoves[chapId]     = parsed;
  varStepIndex[chapId] = -1;

  // Éclater les tokens fusionnés "2.Cf3" → ["2.", "Cf3"]
  var rawTokens = line.split(/\s+/).filter(function(tok){ return tok.trim(); });
  var tokens = [];
  rawTokens.forEach(function(tok){
    var fused = tok.match(/^(\d+\.+)(.+)$/);
    if(fused){ tokens.push(fused[1]); tokens.push(fused[2]); }
    else tokens.push(tok);
  });

  var moveIdx = 0;
  var html = '';
  for(var i=0;i<tokens.length;i++){
    var tok = tokens[i].trim();
    if(!tok) continue;
    if(/^\d+\.+$/.test(tok)){
      html += '<span class="var-num">'+tok+'</span> ';
      continue;
    }
    var idx = moveIdx;
    html += '<span class="var-token" data-chap="'+chapId+'" data-vidx="'+idx
          +'" onclick="playVarTo('+chapId+','+idx+')" title="'+t('tooltip_play_here')+'">'+tok+'</span> ';
    moveIdx++;
  }
  return '<div class="var-line-interactive" id="varline'+chapId+'">'+html+'</div>';
}

/* ──────────────────────────────────────────────
   Construire les annotations avec lien vers la variante
   ────────────────────────────────────────────── */
function buildAnnotationsHtml(chapId, annotations, varMovesArr){
  if(!annotations || !annotations.length) return '';

  // Construire un index: san → moveIdx dans varMovesArr
  var sanToIdx = {};
  if(varMovesArr){
    varMovesArr.forEach(function(m,i){ sanToIdx[m.san.replace(/[+#!?]/g,'')] = i; });
  }

  var html = '<div class="subtitle-h4">'+t('render_comments')+'</div>'
           + '<ul class="annotation-list">';
  annotations.forEach(function(a){
    // Chercher l'index du coup dans la variante
    var sanClean = a.move.replace(/^\d+\.+\s*/,'').replace(/[+#!?]/g,'').trim();
    var idx = sanToIdx[sanClean];
    var moveSpan;
    if(idx !== undefined){
      moveSpan = '<span class="move-num var-ann-link" '
               + 'onclick="playVarTo('+chapId+','+idx+')" '
               + 'title="'+t('tooltip_see_board')+'" style="cursor:pointer">'
               + (LANG==='en' && a.move_en ? a.move_en : a.move) + ' <span style="font-size:0.7em;opacity:0.6">▶</span></span>';
    } else {
      moveSpan = '<span class="move-num">'+a.move+'</span>';
    }
    var commentText = (LANG==='en' && a.comment_en) ? a.comment_en : a.comment;
    html += '<li>'+moveSpan+'<span class="move-comment">'+commentText+'</span></li>';
  });
  html += '</ul>';
  return html;
}

/* ══════════════════════════════════════════════
   RENDERING — TEXT PANEL
   ══════════════════════════════════════════════ */
function renderText(chapId, varKey) {
  var d = DB[chapId][varKey];
  var el = document.getElementById('content' + chapId);
  if (!el || !d) return;

  // ── Ligne de variante interactive ──
  var lineHtml = buildVarLineHtml(chapId, getLine(d.line), d.line);

  // ── Annotations cliquables ──
  var annHtml = buildAnnotationsHtml(chapId, d.annotations, varMoves[chapId]);

  // ── Partie exemple interactive ──
  var gameHtml = '';
  if (d.game) {
    var g = d.game;
    var parsed = parsePGNString(g.moves);
    gameMoves[chapId]      = parsed;
    gameModeActive[chapId] = false;
    gameStepIndex[chapId]  = -1;

    // FIX #2: Translate the PGN string to the current UI language before tokenising
    // for display. parsePGNString still receives the raw French PGN (fixed by Bug #1),
    // but the visual tokens shown to the user are now rendered in the correct language.
    var translatedMoves = getLine(g.moves);
    var rawPgn = translatedMoves.replace(/<span[^>]*>(.*?)<\/span>/g,'$1').replace(/<[^>]+>/g,'');
    // Éclater les tokens fusionnés "2.Cf3" → ["2.", "Cf3"]
    var rawTokens2 = rawPgn.split(/\s+/).filter(function(tok){ return tok.trim(); });
    var tokens = [];
    rawTokens2.forEach(function(tok){
      var fused = tok.match(/^(\d+\.+)(.+)$/);
      if(fused){ tokens.push(fused[1]); tokens.push(fused[2]); }
      else tokens.push(tok);
    });

    var moveIdx = 0, tokenHtml = '';
    for(var i=0;i<tokens.length;i++){
      var tok = tokens[i].trim();
      if(!tok) continue;
      if(/^\d+\.+$/.test(tok)){ tokenHtml += '<span class="pgn-num">'+tok+'</span> '; continue; }
      if(/^(1-0|0-1|1\/2-1\/2|\*)$/.test(tok)){ tokenHtml += '<span class="pgn-result">'+tok+'</span>'; continue; }
      var isKey = g.moves.indexOf('<span class=\'key-move\'>'+tok+'</span>') !== -1 ||
                  g.moves.indexOf('<span class="key-move">'+tok+'</span>') !== -1;
      var idx = moveIdx;
      var cls = 'pgn-token'+(isKey?' pgn-key':'');
      tokenHtml += '<span class="'+cls+'" data-chap="'+chapId+'" data-idx="'+idx
                 +'" onclick="playGameTo('+chapId+','+idx+')" title="'+t('tooltip_play_here')+'">'+tok+'</span> ';
      moveIdx++;
    }

    gameHtml = '<div class="game-box">'
      +'<div class="game-title">'+t('render_game')
      +' <button class="btn-exit-game" onclick="exitGameMode('+chapId+')" title="'+t('tooltip_back_var')+'">&#x21A9; '+t('render_back')+'</button>'
      +'</div>'
      +'<div class="game-header">'+g.header+'</div>'
      +'<div class="game-moves pgn-interactive">'+tokenHtml+'</div>'
      +(function(){
        var gr=(LANG==='en'&&g.result_en)?g.result_en:g.result;
        var ga=(LANG==='en'&&g.analysis_en)?g.analysis_en:g.analysis;
        return (gr?'<div class="game-result">'+gr+'</div>':'')
              +(ga?'<div class="game-analysis">&#128216; '+ga+'</div>':'');
      })()
      +'</div>';
  }

  // ── Histoire ──
  var histHtml = '';
  var histText = (LANG==='en' && d.histoire_en) ? d.histoire_en : d.histoire;
  if (histText) {
    histHtml = '<div class="history-box"><div class="history-title">'+t('render_history')+'</div>'
      +'<p class="text-p" style="margin:0">'+histText+'</p></div>';
  }

  el.innerHTML =
    lineHtml
    +'<div class="stat-badge">'+(dField(d,'stats')||t('render_stats_default'))+'</div>'
    +histHtml
    +'<div class="subtitle-h4">'+t('render_idea')+'</div>'
    +'<p class="text-p">'+dField(d,'fondement')+'</p>'
    +annHtml
    +'<table class="plans-table">'
    +'<tr><th>'+t('render_adv')+'</th><th>'+t('render_disadv')+'</th></tr>'
    +'<tr><td>'+(dField(d,'avantages')||t('render_adv_default'))+'</td>'
    +'<td>'+(dField(d,'inconvenients')||t('render_disadv_default'))+'</td></tr>'
    +'</table>'
    +'<table class="plans-table">'
    +'<tr><th>'+t('render_wplans')+'</th><th>'+t('render_bplans')+'</th></tr>'
    +'<tr><td>'+(dField(d,'blancs')||t('render_wplans_default'))+'</td>'
    +'<td>'+(dField(d,'noirs')||t('render_bplans_default'))+'</td></tr>'
    +'</table>'
    +'<p class="text-p"><strong>'+t('render_keysq')+'</strong> '+(dField(d,'cases')||t('render_cases_default'))+'</p>'
    +'<p class="text-p"><strong>'+t('render_ending')+'</strong> '+(dField(d,'finale')||t('render_finale_default'))+'</p>'
    +'<div class="trap-box"><div class="trap-title">'+t('render_trap')+'</div>'
    +'<p class="text-p">'+(dField(d,'piege')||t('render_trap_default'))+'</p>'
    +'</div>'
    +gameHtml;
}

