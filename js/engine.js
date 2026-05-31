/* ══════════════════════════════════════════════
   engine.js — Chess logic (no DOM dependencies)
   ══════════════════════════════════════════════ */

function ChessEngine() {
  var START = {
    a8:"bR",b8:"bN",c8:"bB",d8:"bQ",e8:"bK",f8:"bB",g8:"bN",h8:"bR",
    a7:"bP",b7:"bP",c7:"bP",d7:"bP",e7:"bP",f7:"bP",g7:"bP",h7:"bP",
    a2:"wP",b2:"wP",c2:"wP",d2:"wP",e2:"wP",f2:"wP",g2:"wP",h2:"wP",
    a1:"wR",b1:"wN",c1:"wB",d1:"wQ",e1:"wK",f1:"wB",g1:"wN",h1:"wR"
  };
  var pos = Object.assign({}, START);
  var hist = [];

  return {
    move: function(m) {
      var piece = pos[m.from];
      if (!piece) return false;
      var u = { from:m.from, to:m.to, moved:piece, captured:pos[m.to] || null };
      if (piece==="wK" && m.from==="e1" && m.to==="g1") { pos["f1"]="wR"; delete pos["h1"]; u.castle="wK"; }
      if (piece==="wK" && m.from==="e1" && m.to==="c1") { pos["d1"]="wR"; delete pos["a1"]; u.castle="wQ"; }
      if (piece==="bK" && m.from==="e8" && m.to==="g8") { pos["f8"]="bR"; delete pos["h8"]; u.castle="bK"; }
      if (piece==="bK" && m.from==="e8" && m.to==="c8") { pos["d8"]="bR"; delete pos["a8"]; u.castle="bQ"; }
      pos[m.to] = piece;
      delete pos[m.from];
      hist.push(u);
      return true;
    },
    undo: function() {
      if (!hist.length) return;
      var u = hist.pop();
      pos[u.from] = u.moved;
      if (u.captured) { pos[u.to] = u.captured; } else { delete pos[u.to]; }
      if (u.castle === "wK") { pos["h1"]="wR"; delete pos["f1"]; }
      if (u.castle === "wQ") { pos["a1"]="wR"; delete pos["d1"]; }
      if (u.castle === "bK") { pos["h8"]="bR"; delete pos["f8"]; }
      if (u.castle === "bQ") { pos["a8"]="bR"; delete pos["d8"]; }
    },
    getPiece:          function(sq)  { return pos[sq] || null; },
    getHistoryLength:  function()    { return hist.length; },
    reset:             function()    { pos = Object.assign({}, START); hist = []; },
    getFen: function() {
      var cols = ['a','b','c','d','e','f','g','h'];
      var rows = ['8','7','6','5','4','3','2','1'];
      var pm = { wP:'P',wN:'N',wB:'B',wR:'R',wQ:'Q',wK:'K',
                 bP:'p',bN:'n',bB:'b',bR:'r',bQ:'q',bK:'k' };
      var fenRows = [];
      for (var r = 0; r < 8; r++) {
        var empty = 0, rowStr = '';
        for (var c = 0; c < 8; c++) {
          var sq = cols[c] + rows[r];
          var pc = pos[sq];
          if (pc) { if (empty) { rowStr += empty; empty = 0; } rowStr += (pm[pc] || '?'); }
          else { empty++; }
        }
        if (empty) rowStr += empty;
        fenRows.push(rowStr);
      }
      var side = (hist.length % 2 === 0) ? 'w' : 'b';
      return fenRows.join('/') + ' ' + side + ' KQkq - 0 1';
    }
  };
}
