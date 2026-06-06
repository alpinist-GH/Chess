﻿﻿/* ══════════════════════════════════════════════
   openings.js — All opening data: DB (46 openings, 71 variants) + ENRICH (44 chapitres enrichis : histoire, annotations, parties)
   To add a new opening: add a new numbered key to DB following the same pattern.
   ══════════════════════════════════════════════ */

var DB = {
  1: {
    chigorin: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 d6 8.c3 0-0 9.h3 Ca5",
      fondement:"Surnommée « la Reine des Ouvertures », la Partie Espagnole domine depuis plus d'un siècle. Le coup 3.Fb5 est prophylactique : il vise le Cavalier c6, gardien du pion e5.",
      fondement_en:"Dubbed the 'Queen of Openings,' the Spanish Game has dominated top-level play for over a century. The move 3.Bb5 is prophylactic: it targets the Knight on c6, guardian of the e5 pawn.",
      avantages:"Jeu positionnel riche, possibilité d'attaquer sur les deux ailes, profondeur théorique immense.",
      avantages_en:"Rich positional play, ability to attack on both wings, immense theoretical depth.",
      inconvenients:"Exige une connaissance théorique très approfondie. Les Noirs restent longtemps passifs.",
      inconvenients_en:"Demands very deep theoretical knowledge. Black must endure prolonged passivity.",
      blancs:"Attaque progressive à l'aile roi via la manœuvre Cd2-f1-g3-f5. Pression à l'aile dame avec a4-a5.",
      blancs_en:"Gradual kingside attack via the maneuver Nd2-f1-g3-f5. Queenside pressure with a4-a5.",
      noirs:"Contre-attaque à l'aile dame avec ...Ca5 et ...c5. Chercher la rupture centrale ...d5.",
      noirs_en:"Queenside counterplay with ...Na5 and ...c5. Seek the central break ...d5.",
      cases:"Blancs : f5 (Cavalier), d5 (pion). Noirs : d4 (Cavalier), c4 (pion libérateur).",
      cases_en:"White: f5 (Knight), d5 (pawn). Black: d4 (Knight), c4 (liberating pawn).",
      finale:"La finale est souvent favorable aux Blancs grâce à leur meilleure compacité structurelle.",
      finale_en:"Endgame is often favorable for White thanks to their superior structural compactness.",
      stats:"Volume : ~39M (Lichess) · Taux : Blancs 38% | Nuls 36% | Noirs 26%.",
      stats_en:"Volume: ~39M (Lichess) · Rate: White 38% | Draw 36% | Black 26%.",
      piege:"Le « Piège de Noé » : après 4.Fa4 b5 5.Fb3 c5, les Noirs menacent ...c4 et le Fou b3 est piégé.",
      piege_en:"The 'Noah's Ark Trap': after 4.Ba4 b5 5.Bb3 c5, Black threatens ...c4 and the Bishop on b3 is trapped.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"b5"},{from:"a7",to:"a6"},{from:"b5",to:"a4"},{from:"g8",to:"f6"},{from:"e1",to:"g1"},{from:"f8",to:"e7"},{from:"f1",to:"e1"},{from:"b7",to:"b5"},{from:"a4",to:"b3"},{from:"d7",to:"d6"},{from:"c2",to:"c3"},{from:"e8",to:"g8"},{from:"h2",to:"h3"},{from:"b8",to:"a5"}]
    },
    ouverte: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Cxe4 6.d4 b5 7.Fb3 d5 8.dxe5 Fe6",
      fondement:"La variante Ouverte (5...Cxe4) est la plus tactique. Les Noirs capturent le pion e4 et contre-attaquent par ...d5 pour obtenir un jeu actif immédiat.",
      fondement_en:"The Open Variation (5...Nxe4) is the most tactical. Black captures the e4 pawn and counter-attacks with ...d5 to obtain immediate active play.",
      avantages:"Contre-jeu immédiat pour les Noirs. Position dynamique et équilibrée.",
      avantages_en:"Immediate counterplay for Black. Dynamic and balanced position.",
      inconvenients:"Les Blancs ont le pion e5 fort. Nécessite une précision tactique dès le début.",
      inconvenients_en:"White has the strong e5 pawn. Requires tactical precision from the very start.",
      blancs:"Exploiter le pion e5 fort comme fer de lance spatial. Centraliser les pièces lourdes.",
      blancs_en:"Exploit the strong e5 pawn as a spatial spearhead. Centralize the heavy pieces.",
      noirs:"S'appuyer sur l'avant-poste du Cavalier en e4 et mobiliser la paire de fous.",
      noirs_en:"Rely on the Knight outpost on e4 and mobilize the bishop pair.",
      cases:"e4 (Cavalier noir), e5 (pion blanc avancé).",
      cases_en:"e4 (Black Knight), e5 (advanced White pawn).",
      finale:"Position dynamique ouverte où la paire de fous des Noirs compense l'espace concédé.",
      finale_en:"Open dynamic position where Black's bishop pair compensates for the conceded space.",
      stats:"Ligne théorique d'élite, représentant une part stable des défenses actives contre 3.Fb5.",
      stats_en:"Elite theoretical line, representing a stable share of active defenses against 3.Bb5.",
      piege:"Toute précipitation dans la liquidation centrale peut rompre l'équilibre matériel.",
      piege_en:"Any rush to liquidate the center can shatter the material balance.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"b5"},{from:"a7",to:"a6"},{from:"b5",to:"a4"},{from:"g8",to:"f6"},{from:"e1",to:"g1"},{from:"f6",to:"e4"},{from:"d2",to:"d4"},{from:"b7",to:"b5"},{from:"a4",to:"b3"},{from:"d7",to:"d5"},{from:"d4",to:"e5"},{from:"c8",to:"e6"}]
    },
    echange: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fxc6 dxc6 5.0-0 f6 6.d4 exd4 7.Cxd4",
      fondement:"La variante de l'Échange (3.Fxc6) modifie la structure de pions des Noirs (pions doublés c) contre l'abandon de la paire de fous.",
      fondement_en:"The Exchange Variation (4.Bxc6) alters Black's pawn structure (doubled c-pawns) in exchange for giving up the bishop pair.",
      avantages:"Simplifie la position. Les Blancs ont une structure saine et facile à valoriser.",
      avantages_en:"Simplifies the position. White has a sound, easy-to-exploit structure.",
      inconvenients:"Les Noirs détiennent la paire de fous active et une majorité centrale intacte.",
      inconvenients_en:"Black holds the active bishop pair and an intact central majority.",
      blancs:"Forcer les échanges de pièces pour transposer vers une finale de pions pure gagnante.",
      blancs_en:"Force piece exchanges to transpose into a winning pure pawn endgame.",
      noirs:"Ouvrir les diagonales pour activer la paire de fous à longue portée.",
      noirs_en:"Open the diagonals to activate the long-range bishop pair.",
      cases:"c6, c7 (pions doublés noirs cibles), d4 (rupture centrale).",
      cases_en:"c6, c7 (Black's doubled pawn targets), d4 (central break).",
      finale:"Finale de pions pure gagnante pour les Blancs grâce à leur majorité saine.",
      finale_en:"Pure pawn endgame winning for White thanks to their sound majority.",
      stats:"Popularisée historiquement par Bobby Fischer.",
      stats_en:"Historically popularized by Bobby Fischer.",
      piege:"Les Noirs doivent éviter de jouer de manière passive sous peine de perdre la finale.",
      piege_en:"Black must avoid passive play or risk losing the endgame.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"b5"},{from:"a7",to:"a6"},{from:"b5",to:"c6"},{from:"d7",to:"c6"},{from:"e1",to:"g1"},{from:"f7",to:"f6"},{from:"d2",to:"d4"},{from:"e5",to:"d4"},{from:"f3",to:"d4"}]
    },
    marshall: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 0-0 8.c3 d5!",
      fondement:"L'Attaque Marshall sacrifie un pion central noir pour obtenir une initiative foudroyante et un assaut direct contre le roi blanc.",
      fondement_en:"The Marshall Attack sacrifices a central pawn to obtain a thunderous initiative and a direct assault on the White king.",
      avantages:"Initiative foudroyante pour les Noirs, attaque directe contre le roi blanc.",
      avantages_en:"Thunderous initiative for Black, direct attack on the White king.",
      inconvenients:"Sacrifice de pion sec. Les Blancs peuvent décliner avec 8.a4 ou 8.h3.",
      inconvenients_en:"Outright pawn sacrifice. White can decline with 8.a4 or 8.h3.",
      blancs:"Défendre calmement, consolider le roque et accepter de restituer le matériel.",
      blancs_en:"Defend calmly, consolidate the castled position and accept returning the material.",
      noirs:"Centraliser les pièces majeures et mineures vers l'aile roi blanche.",
      noirs_en:"Centralize major and minor pieces toward the White kingside.",
      cases:"h2, g3 (points faibles visés par l'attaque noire).",
      cases_en:"h2, g3 (weak points targeted by Black's attack).",
      finale:"Finale supérieure pour les Blancs s'ils consolident leur pion de plus.",
      finale_en:"Endgame superior for White if they consolidate their extra pawn.",
      stats:"Ligne redoutée forçant les Blancs à jouer des lignes anti-Marshall au coup 8.",
      stats_en:"A feared line forcing White to play anti-Marshall systems at move 8.",
      piege:"Entrer dans les complications sans connaître les suites précises mène au mat rapide.",
      piege_en:"Entering the complications without knowing the precise continuations leads to swift mate.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"b5"},{from:"a7",to:"a6"},{from:"b5",to:"a4"},{from:"g8",to:"f6"},{from:"e1",to:"g1"},{from:"f8",to:"e7"},{from:"f1",to:"e1"},{from:"b7",to:"b5"},{from:"a4",to:"b3"},{from:"e8",to:"g8"},{from:"c2",to:"c3"},{from:"d7",to:"d5"}]
    },
    berlin: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fb5 Cf6 4.0-0 Cxe4 5.d4 Cd6 6.Fxc6 dxc6 7.dxe5 Cf5",
      fondement:"La Défense Berlin est surnommée le « Mur de Berlin ». Les Noirs abandonnent le roque pour un endgame hyper-solide.",
      fondement_en:"The Berlin Defense is nicknamed the 'Berlin Wall.' Black forgoes castling in exchange for a hyper-solid endgame.",
      avantages:"Extrêmement solide pour les Noirs. Les Blancs ont du mal à obtenir un avantage.",
      avantages_en:"Extremely solid for Black. White struggles to obtain any advantage.",
      inconvenients:"Position très équilibrée et souvent stérile.",
      inconvenients_en:"Very balanced and often sterile position.",
      blancs:"Tenter d'exploiter la centralisation forcée du roi noir par les poussées f4-f5.",
      blancs_en:"Try to exploit the forced centralization of the Black king via the pushes f4-f5.",
      noirs:"Placer le roi en e8/d8, connecter les Tours et utiliser la paire de fous.",
      noirs_en:"Place the king on e8/d8, connect the Rooks and use the bishop pair.",
      cases:"e5 (pion blanc avancé), d6 (Cavalier noir).",
      cases_en:"e5 (advanced White pawn), d6 (Black Knight).",
      finale:"La célèbre « Finale de Berlin », un standard technique moderne de haute résistance.",
      finale_en:"The famous 'Berlin Endgame', a modern technical standard of high resistance.",
      stats:"Ligne phare des Championnats du Monde modernes.",
      stats_en:"Flagship line of modern World Championships.",
      piege:"Forcer le gain de manière artificielle contre cette structure se retourne souvent contre les Blancs.",
      piege_en:"Trying to force a win artificially against this structure often backfires on White.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"b5"},{from:"g8",to:"f6"},{from:"e1",to:"g1"},{from:"f6",to:"e4"},{from:"d2",to:"d4"},{from:"e4",to:"d6"},{from:"b5",to:"c6"},{from:"d7",to:"c6"},{from:"d4",to:"e5"},{from:"d6",to:"f5"}]
    },
    zaitsev: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 d6 8.c3 0-0 9.h3 Fb7 10.d4 Te8",
      fondement:"La variante Zaïtsev (9...Fb7) est l'arme secrète de Karpov contre Kasparov. Le Fou en fianchetto sur b7 exerce une pression latente sur le pion e4, tout en préparant la rupture centrale ...c5 et une domination à l'aile dame.",
      fondement_en:"The Zaitsev Variation (9...Bb7) was Karpov's secret weapon against Kasparov. The fianchettoed Bishop on b7 puts latent pressure on the e4 pawn, while preparing the central break ...c5 and queenside domination.",
      avantages:"Pression continue sur e4. Supériorité à l'aile dame si les Noirs tiennent. Parties dynamiques et complexes.",
      avantages_en:"Continuous pressure on e4. Queenside superiority if Black holds. Dynamic and complex positions.",
      inconvenients:"Les Blancs obtiennent une initiative immédiate à l'aile roi. Les Noirs doivent différer ...h6, affaiblissant leur roi.",
      inconvenients_en:"White obtains immediate kingside initiative. Black must delay ...h6, weakening their king.",
      blancs:"Attaque à l'aile roi par la manœuvre 17.Ta3-g3. Profiter du retard de consolidation noir.",
      blancs_en:"Kingside attack via the 17.Ra3-g3 maneuver. Exploit Black's delay in consolidating.",
      noirs:"Contre-attaque à l'aile dame avec ...c4 ou ...f5. Si la position tient, les Noirs dominent la finale.",
      noirs_en:"Queenside counterattack with ...c4 or ...f5. If the position holds, Black dominates the endgame.",
      cases:"b7 (Fou fianchetto), e4 (pion cible), d5 (avance blanche critique), c4 (rupture noire).",
      cases_en:"b7 (fianchetto Bishop), e4 (target pawn), d5 (critical White advance), c4 (Black's break).",
      finale:"Si les Noirs survivent aux complications, leur structure à l'aile dame est supérieure.",
      finale_en:"If Black survives the complications, their queenside structure is superior.",
      stats:"ECO C92 · Karpov–Kasparov 1985-1990 · Parties violentes et compliquées.",
      stats_en:"ECO C92 · Karpov–Kasparov 1985–1990 · Violent and complicated positions.",
      piege:"11.Cg5 Tf8 12.Cf3 — répétition de position que les Blancs peuvent imposer pour forcer la nulle.",
      piege_en:"11.Ng5 Rf8 12.Nf3 — draw by repetition that White can impose to force a draw.",
      moves:[
        {from:"e2",to:"e4"},{from:"e7",to:"e5"},
        {from:"g1",to:"f3"},{from:"b8",to:"c6"},
        {from:"f1",to:"b5"},{from:"a7",to:"a6"},
        {from:"b5",to:"a4"},{from:"g8",to:"f6"},
        {from:"e1",to:"g1"},{from:"f8",to:"e7"},
        {from:"f1",to:"e1"},{from:"b7",to:"b5"},
        {from:"a4",to:"b3"},{from:"d7",to:"d6"},
        {from:"c2",to:"c3"},{from:"e8",to:"g8"},
        {from:"h2",to:"h3"},{from:"c8",to:"b7"},
        {from:"d2",to:"d4"},{from:"f8",to:"e8"}
      ]
    }
  },
  2: {
    giuoco: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fc4 Fc5 4.c3 Cf6 5.d4 exd4 6.cxd4 Fb4+",
      fondement:"Revenu au premier plan moderne. Le coup 3.Fc4 cible f7. Les Blancs cherchent un centre solide avec c3 et d4.",
      fondement_en:"Back at the forefront of modern play. The move 3.Bc4 targets f7. White seeks a solid center with c3 and d4.",
      avantages:"Centre fort pour les Blancs, Fou c4 actif.",
      avantages_en:"Strong center for White, active Bishop on c4.",
      inconvenients:"Les Noirs ont la paire de fous après 6...Fb4+.",
      inconvenients_en:"Black obtains the bishop pair after 6...Bb4+.",
      blancs:"Établir d4, relier les Tours, amener le Cavalier en g5/d5.",
      blancs_en:"Establish d4, connect the Rooks, bring the Knight to g5/d5.",
      noirs:"Contre-attaquer au centre par la poussée libératrice ...d5.",
      noirs_en:"Counter-attack with ...d5 to challenge White's center.",
      cases:"Blancs : d5, f7. Noirs : d4.",
      cases_en:"f7 (target), d4 (central break), e5 (key pawn).",
      finale:"L'avantage du Fou c4 disparaît si les pions centraux sont échangés.",
      finale_en:"Open endgames where the bishop pair is Black's main asset.",
      stats:"Volume : 90M (Lichess). Taux : Blancs 37% | Nulle 30% | Noirs 33%.",
      stats_en:"Volume: ~35M (Lichess) · Rate: White 38% | Draw 33% | Black 29%.",
      piege:"Le Fried Liver Attack (6.Cxf7!!) est dévastateur après 5...Cxd5??.",
      piege_en:"After 5...Nxe4? 6.d5! White recovers the pawn with advantage.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"c4"},{from:"f8",to:"c5"},{from:"c2",to:"c3"},{from:"g8",to:"f6"},{from:"d2",to:"d4"},{from:"e5",to:"d4"},{from:"c3",to:"d4"},{from:"c5",to:"b4"}]
    },
    pianissimo: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fc4 Fc5 4.d3 Cf6 5.0-0 d6 6.c3 a6",
      fondement:"Le Giuoco Pianissimo (4.d3) temporise l'avance centrale au profit d'un développement très lent, positionnel et protecteur.",
      fondement_en:"The Giuoco Pianissimo (4.d3) delays the central advance in favor of very slow, positional, protective development.",
      avantages:"Jeu manœuvrier sain, sans risque. Peu de théorie à mémoriser.",
      avantages_en:"Very solid structure. Little forced theory. Good for positional players.",
      inconvenients:"Moins ambitieux. Les Noirs peuvent égaliser facilement.",
      inconvenients_en:"White's space advantage is modest. Black equalizes comfortably.",
      blancs:"Préparer la manœuvre Cbd2-f1-g3-f5.",
      blancs_en:"Slow buildup with Re1, h3, and the maneuver Nf1-e3 or g3.",
      noirs:"Développer sans faiblesses et installer le Fou en e6.",
      noirs_en:"Counter with ...d5 or ...Na5 to challenge the Bishop and equalize.",
      cases:"d3, e5 (cases de stabilisation).",
      cases_en:"e4/e5 (central tension), d4 (White's delayed break).",
      finale:"Position ultra-symétrique et équilibrée menant à des finales techniques égales.",
      finale_en:"Balanced endgame — slight structural edge for White but Black holds comfortably.",
      stats:"Haute fréquence dans les parties de clubs et amateurs.",
      stats_en:"Most popular Italian line in club and online play.",
      piege:"Éviter les manœuvres stériles sans plan concret.",
      piege_en:"White must avoid premature central action before completing development.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"c4"},{from:"f8",to:"c5"},{from:"d2",to:"d3"},{from:"g8",to:"f6"},{from:"e1",to:"g1"},{from:"d7",to:"d6"},{from:"c2",to:"c3"},{from:"a7",to:"a6"}]
    },
    deux_cavaliers: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fc4 Cf6 4.Cg5 d5 5.exd5 Ca5",
      fondement:"Ligne de contre-attaque dynamique. Sur 4.Cg5, les Noirs sacrifient un pion pour l'initiative.",
      fondement_en:"Dynamic counter-attack line. After 4.Ng5, Black sacrifices a pawn for the initiative.",
      avantages:"Contre-jeu immédiat pour les Noirs. Position très tactique.",
      avantages_en:"Aggressive counter-attack for Black. Rich tactical complications.",
      inconvenients:"Le Fried Liver Attack (Cxf7!) est dévastateur après 5...Cxd5.",
      inconvenients_en:"Black must know precise lines or face a lost position quickly.",
      blancs:"Abriter son roi après O-O, conserver fermement le pion d5.",
      blancs_en:"After 5.exd5 Na5, attack the Bishop and grab extra space.",
      noirs:"Lancer une tempête de pièces sur les points f2 et e4.",
      noirs_en:"Use the active Knight on a5 to attack c4 and generate quick counterplay.",
      cases:"f7 (cible blanche), d5 (point focal du gambit).",
      cases_en:"f7 (Fried Liver target), d5 (critical pawn), c4 (Bishop).",
      finale:"Finale avantageuse pour les Blancs s'ils éteignent l'initiative.",
      finale_en:"Dynamically balanced — the initiative compensates for Black's pawn minus.",
      stats:"Ligne tactique historique majeure jouée par les attaquants.",
      stats_en:"One of the sharpest responses to the Italian Game.",
      piege:"Reprendre par 5...Cxd5?? autorise le sacrifice historique 6.Cxf7!! Rxf7.",
      piege_en:"5...Nxd5?? allows the Fried Liver Attack: 6.Nxf7! Kxf7 7.Qf3+ with a winning attack.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"c4"},{from:"g8",to:"f6"},{from:"f3",to:"g5"},{from:"d7",to:"d5"},{from:"e4",to:"d5"},{from:"c6",to:"a5"},{from:"c4",to:"b5"},{from:"c7",to:"c6"}]
    },
    evans: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Fc4 Fc5 4.b4! Fxb4 5.c3 Fa5 6.d4",
      fondement:"Le Gambit Evans (4.b4!) sacrifie un pion latéral pour gagner des tempos décisifs et bâtir immédiatement un grand centre.",
      fondement_en:"The Evans Gambit (4.b4!) sacrifices a flank pawn to gain two tempos and construct a dominant center.",
      avantages:"Gambit romantique très agressif. Développement ultra-rapide.",
      avantages_en:"Rapid development, powerful center, direct kingside attack.",
      inconvenients:"Sacrifice de pion objectivement insuffisant avec jeu précis des Noirs.",
      inconvenients_en:"Objectively insufficient for a material advantage with precise Black play.",
      blancs:"Pilonner le roque noir via la grande diagonale du Fou b3 et Db3.",
      blancs_en:"Play d4, place the Bishop on c2, and launch h4-h5 to storm the kingside.",
      noirs:"Accepter le pion, replier le Fou en a5 et restituer le matériel au bon moment.",
      noirs_en:"Return the pawn with ...d5 to equalize and neutralize the initiative.",
      cases:"b4 (sacrifice), f7 (cible permanente).",
      cases_en:"f7 (attack target), d4/e5 (White's dominant center).",
      finale:"Finale supérieure pour les Noirs s'ils éteignent l'attaque.",
      finale_en:"Technically drawn with precise play, but White has rich attacking chances.",
      stats:"Popularisé par Kasparov en parties rapides.",
      stats_en:"Historical gambit — revived by Kasparov vs. Anand in 1995.",
      piege:"Décliner le gambit par 4...Fb6 est possible mais confère aux Blancs une emprise agréable.",
      piege_en:"After 4...Bxb4 5.c3 Be7?! 6.d4 d6 7.Qb3! Black faces immediate pressure on f7.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"c4"},{from:"f8",to:"c5"},{from:"b2",to:"b4"},{from:"c5",to:"b4"},{from:"c2",to:"c3"},{from:"b4",to:"a5"},{from:"d2",to:"d4"}]
    }
  },
  3: {
    accepte: {
      line:"1.e4 e5 2.f4 exf4 3.Cf3 g5 4.h4 g4 5.Ce5",
      fondement:"L'ouverture la plus romantique ! Les Blancs sacrifient le pion f4 pour un développement ultra-rapide. La colonne f ouverte est l'axe central.",
      fondement_en:"The most romantic opening! White sacrifices the f4 pawn for ultra-rapid development. The open f-file is the central axis.",
      avantages:"Les Blancs ont un développement rapide et une attaque directe.",
      avantages_en:"White gets rapid development and a direct attack.",
      inconvenients:"Les Noirs ont un pion de plus. En jeu précis, les Noirs tiennent.",
      inconvenients_en:"Black has an extra pawn. With precise play, Black holds.",
      blancs:"Développer d'urgence Fc4 visant f7, amener Cc3 sur d5, et ouvrir avec d4-d5.",
      blancs_en:"Urgently develop Bc4 targeting f7, bring Nc3 to d5, and open with d4-d5.",
      noirs:"Défendre le pion f4 via l'expansion ...g5 et ...h6.",
      noirs_en:"Defend the f4 pawn via the expansion ...g5 and ...h6.",
      cases:"Blancs : d5, f7. Noirs : e4, d4.",
      cases_en:"White: d5, f7. Black: e4, d4.",
      finale:"Les finales sont généralement favorables aux Noirs grâce au pion supplémentaire.",
      finale_en:"Endgames are generally favorable for Black thanks to the extra pawn.",
      stats:"Données : 29M (Lichess). Taux : Blancs 35% | Nulle 20% | Noirs 45%.",
      stats_en:"Data: 29M (Lichess). Rate: White 35% | Draw 20% | Black 45%.",
      piege:"Erreur classique : 3...Dh4+?? semble actif mais après 4.Rf1! le roi blanc est en sécurité.",
      piege_en:"Classic mistake: 3...Qh4+?? looks active but after 4.Kf1! the White king is safe.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"f2",to:"f4"},{from:"e5",to:"f4"},{from:"g1",to:"f3"},{from:"g7",to:"g5"},{from:"h2",to:"h4"},{from:"g5",to:"g4"},{from:"f3",to:"e5"}]
    },
    muzio: {
      line:"1.e4 e5 2.f4 exf4 3.Cf3 g5 4.Fc4 g4 5.0-0 gxf3 6.Dxf3",
      fondement:"Le Gambit Muzio pousse la logique du sacrifice à l'extrême : les Blancs donnent un Cavalier complet dès le 5e coup pour détruire le rempart du roi noir.",
      fondement_en:"The Muzio Gambit takes sacrifice logic to the extreme: White gives up a full Knight as early as move 5 to destroy the Black king's shelter.",
      avantages:"Attaque foudroyante, sacrifice spectaculaire.",
      avantages_en:"Thunderous attack, spectacular sacrifice.",
      inconvenients:"Objectivement perdant en jeu parfait.",
      inconvenients_en:"Objectively losing with perfect play.",
      blancs:"Pousser d4, occuper le centre par Cc3-d5, et empiler sur la colonne f.",
      blancs_en:"Push d4, occupy the center with Nc3-d5, and pile up on the f-file.",
      noirs:"Développer sans perdre de tempo et forcer la rupture centrale libératrice ...d5!",
      noirs_en:"Develop without losing tempo and force the liberating central break ...d5!",
      cases:"f7 (cible de mat), d5 (contre-attaque).",
      cases_en:"f7 (mating target), d5 (counterattack).",
      finale:"Techniquement perdue pour les Blancs en raison d'un retard d'une pièce.",
      finale_en:"Technically lost for White due to a full piece deficit.",
      stats:"Ligne historique hautement sacrificielle.",
      stats_en:"Historic highly sacrificial line.",
      piege:"Tout coup noir passif ou gourmand se solde par un mat rapide.",
      piege_en:"Any passive or greedy Black move leads to swift checkmate.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"f2",to:"f4"},{from:"e5",to:"f4"},{from:"g1",to:"f3"},{from:"g7",to:"g5"},{from:"f1",to:"c4"},{from:"g5",to:"g4"},{from:"e1",to:"g1"},{from:"g4",to:"f3"},{from:"d1",to:"f3"}]
    },
    fischer: {
      line:"1.e4 e5 2.f4 d6 3.Cf3 Cf6 4.Cc3 Cxe4 5.Cxe4 d5",
      fondement:"La Défense Fischer (2...d6) est le refus positionnel le plus rigoureux. Les Noirs stabilisent le centre sans prendre le gambit.",
      fondement_en:"The Fischer Defense (2...d6) is the most rigorous positional refusal. Black stabilizes the center without taking the gambit.",
      avantages:"Solide et recommandé par Fischer. Évite toutes les complications.",
      avantages_en:"Solid and recommended by Fischer. Avoids all complications.",
      inconvenients:"Moins combatif. Les Blancs maintiennent la pression centrale avec d4.",
      inconvenients_en:"Less combative. White maintains central pressure with d4.",
      blancs:"Installer d4 pour s'emparer du centre, développer et manœuvrer.",
      blancs_en:"Install d4 to seize the center, develop, and maneuver.",
      noirs:"Utiliser ...d5 pour chasser le pion e4 blanc et égaliser tranquillement.",
      noirs_en:"Use ...d5 to chase the White e4 pawn and equalize calmly.",
      cases:"d5, e4 (cases pivots).",
      cases_en:"d5, e4 (pivot squares).",
      finale:"Finale de pions parfaitement égale, annulant le capital dynamique blanc.",
      finale_en:"Perfectly equal pawn endgame, nullifying White's dynamic capital.",
      stats:"Ligne de choix pour couper court à l'agressivité des Blancs.",
      stats_en:"The choice line to cut short White's aggression.",
      piege:"Les Blancs doivent éviter de sur-étendre leurs pions de l'aile roi.",
      piege_en:"White must avoid over-extending their kingside pawns.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"f2",to:"f4"},{from:"d7",to:"d6"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"f6",to:"e4"}]
    },
    falkbeer: {
      line:"1.e4 e5 2.f4 d5 3.exd5 e4 4.d3 Cf6 5.dxe4 Cxe4",
      fondement:"Le Contre-Gambit Falkbeer (2...d5) refuse la soumission : les Noirs attaquent le centre de face et leur pion avancé e4 étouffe le développement blanc.",
      fondement_en:"The Falkbeer Counter-Gambit (2...d5) refuses submission: Black attacks the center head-on and their advanced e4 pawn stifles White's development.",
      avantages:"Contre-gambit audacieux, les Noirs prennent l'initiative immédiatement.",
      avantages_en:"Audacious counter-gambit — Black seizes the initiative immediately.",
      inconvenients:"La théorie est moins bien balisée pour les Noirs.",
      inconvenients_en:"The theory is less well-charted for Black.",
      blancs:"Prendre en d5, utiliser d3 ou Cf3 pour saper e4.",
      blancs_en:"Take on d5, use d3 or Nf3 to undermine e4.",
      noirs:"Maintenir le pion avancé e4 comme un coin et activer le Fou c5.",
      noirs_en:"Maintain the advanced e4 pawn as a wedge and activate the Bishop on c5.",
      cases:"e4 (pion d'étouffement), f2 (point d'impact).",
      cases_en:"e4 (suffocating pawn), f2 (impact point).",
      finale:"Position dynamique très asymétrique avec des chances des deux côtés.",
      finale_en:"Very asymmetric dynamic position with chances for both sides.",
      stats:"Ligne appréciée des tacticiens cherchant des complications.",
      stats_en:"A line appreciated by tacticians seeking complications.",
      piege:"Les Blancs ne doivent pas s'accrocher au pion d5 au détriment de l'activation.",
      piege_en:"White must not cling to the d5 pawn at the expense of piece activation.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"f2",to:"f4"},{from:"d7",to:"d5"},{from:"e4",to:"d5"},{from:"e5",to:"e4"},{from:"d2",to:"d3"},{from:"g8",to:"f6"},{from:"d3",to:"e4"},{from:"f6",to:"e4"}]
    }
  },
  4: {
    hanham: {
      line:"1.e4 e5 2.Cf3 d6 3.d4 Cd7 4.Fc4 c6 5.0-0 Fe7 6.Te1",
      fondement:"Soutient e5 solidement par 2...d6. Choix de la solidité absolue mais implique un manque d'espace.",
      fondement_en:"Solidly supports e5 with 2...d6. A choice of absolute solidity but implies a lack of space.",
      avantages:"Structure ultra-solide, très peu de faiblesses apparentes.",
      avantages_en:"Ultra-solid structure, very few apparent weaknesses.",
      inconvenients:"Très passive. Les Blancs ont un avantage spatial confortable.",
      inconvenients_en:"Very passive. White enjoys a comfortable spatial advantage.",
      blancs:"Avancer d5 pour fermer le centre, ou ouvrir avec dxe5. Attaque à l'aile roi via Cf1-e3-g4.",
      blancs_en:"Advance d5 to close the center, or open with dxe5. Kingside attack via Nf1-e3-g4.",
      noirs:"Contre-attaquer par la rupture ...c5 ou la manœuvre ...Ce7-g6-f4.",
      noirs_en:"Counterattack via the break ...c5 or the maneuver ...Ne7-g6-f4.",
      cases:"Blancs : d5, f5. Noirs : f4, c4.",
      cases_en:"White: d5, f5. Black: f4, c4.",
      finale:"Les finales sont souvent favorables aux Blancs à cause de la compression de l'espace.",
      finale_en:"Endgames are often favorable for White due to space compression.",
      stats:"Données : ~8M (Lichess). Taux : Blancs 42% | Nulle 25% | Noirs 33%.",
      stats_en:"Data: ~8M (Lichess). Rate: White 42% | Draw 25% | Black 33%.",
      piege:"Après 3...Cd7??, les Blancs exécutent 4.dxe5 dxe5 5.Dd5! menaçant f7 et e5.",
      piege_en:"After 3...Nd7??, White executes 4.dxe5 dxe5 5.Qd5! threatening f7 and e5.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"b8",to:"d7"},{from:"f1",to:"c4"},{from:"c7",to:"c6"},{from:"e1",to:"g1"},{from:"f8",to:"e7"},{from:"f1",to:"e1"}]
    },
    moderne: {
      line:"1.e4 e5 2.Cf3 d6 3.d4 exd4 4.Cxd4 Cf6 5.Cc3 Fe7",
      fondement:"La variante moderne rompt immédiatement le centre par 3...exd4 pour éviter le resserrement passif.",
      fondement_en:"The Modern variation breaks the center immediately with 3...exd4 to avoid passive constriction.",
      avantages:"Plus active que la Hanham. Les Noirs développent naturellement.",
      avantages_en:"More active than the Hanham. Black develops naturally.",
      inconvenients:"Les Blancs maintiennent un avantage spatial avec e4-d4.",
      inconvenients_en:"White maintains a spatial advantage with e4-d4.",
      blancs:"Conserver le contrôle spatial central, placer le Cavalier sur d4 de façon agressive.",
      blancs_en:"Retain central spatial control, place the Knight on d4 aggressively.",
      noirs:"Contre-attaquer rapidement par la poussée ...c5 pour déloger le Cavalier blanc.",
      noirs_en:"Quickly counter-attack with ...c5 to dislodge the White Knight.",
      cases:"d4 (Cavalier central), c5 (rupture d'espace).",
      cases_en:"d4 (central Knight), c5 (space break).",
      finale:"Fin de partie beaucoup plus ouverte et équilibrée.",
      finale_en:"Far more open and balanced endgame.",
      stats:"Ligne moderne dynamique appréciée des joueurs actifs de Philidor.",
      stats_en:"Dynamic modern line appreciated by active Philidor players.",
      piege:"Les Blancs doivent faire attention aux brèches si leur Cavalier d4 se fait chasser.",
      piege_en:"White must beware of gaps if their d4 Knight gets driven away.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"e5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"}]
    }
  },
  6: {
    najdorf: {
      line:"1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 a6 6.Fe3 e5",
      fondement:"Le coup 5...a6 (le « coup Najdorf ») prépare ...e5 ou ...e6 selon le développement blanc, empêche Cb5 et prépare ...b5 pour une expansion queenside agressive. Les Noirs gardent une flexibilité maximale avant de révéler leur configuration.",
      fondement_en:"The 5...a6 'Najdorf move' prevents Nb5, prepares ...b5, and keeps options open between ...e5 and ...e6. Maximum flexibility before committing to a structure.",
      avantages:"Flexibilité totale ; prise en main de l'initiative queenside avec ...b5-b4 ; arme favorite de Kasparov et Fischer ; déséquilibre garanti.",
      avantages_en:"Total flexibility; queenside initiative with ...b5-b4; weapon of choice for Kasparov and Fischer; unbalanced play guaranteed.",
      inconvenients:"Extrêmement théorique, des dizaines de sous-variantes ; le Roi noir reste souvent au centre plus longtemps ; 6.Fg5 crée une pression immédiate difficile.",
      inconvenients_en:"Extremely theoretical with dozens of sub-variations; the Black king often stays in the center longer; 6.Bg5 creates immediate and difficult pressure.",
      blancs:"Attaque Anglaise (6.Fe3 f3 g4), Richter-Rauzer (6.Fg5), Sozin (6.Fc4), Adams Attack (6.h3) : autant de systèmes offensifs tranchants.",
      blancs_en:"English Attack (6.Be3 f3 g4), Richter-Rauzer (6.Bg5), Sozin (6.Bc4), Adams Attack (6.h3): sharp offensive systems on all fronts.",
      noirs:"Contre-attaque queenside : ...b5-b4, ...Cb6, ...Fb7, ...Tb8 ; exploiter la colonne c semi-ouverte ; viser d4 avec ...Cbd7-c5.",
      noirs_en:"Queenside counter-attack: ...b5-b4, ...Nb6, ...Bb7, ...Rb8; exploit the semi-open c-file; target d4 with ...Nbd7-c5.",
      cases:"d5 (cavalier noir), c4 (invasion noire), f7 (cible blanche).",
      cases_en:"d5 (Black Knight outpost), c4 (Black invasion), f7 (White's attack target).",
      finale:"Les finales sont rares — la partie se décide généralement au milieu de jeu par K.O. tactique.",
      finale_en:"Endgames are rare — the game is usually decided in the middlegame by tactical knockout.",
      stats:"ECO B90–B99 · Complexité ★★★★★ · Popularité au sommet ★★★★★",
      stats_en:"ECO B90–B99 · Complexity ★★★★★ · Top-level popularity ★★★★★",
      piege:"Le Pion Empoisonné : 6.Fg5 e6 7.f4 Db6 8.Dd2 Dxb2?? mène à 9.Tb1 Da3 — la Dame noire est piégée.",
      piege_en:"The Poisoned Pawn: 6.Bg5 e6 7.f4 Qb6 8.Qd2 Qxb2?? leads to 9.Rb1 Qa3 with the Black Queen trapped.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"a7",to:"a6"}]
    },
    dragon: {
      line:"1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 g6 6.Fe3 Fg7 7.f3",
      fondement:"Les Noirs fianchettent leur fou en g7, créant un monstre diagonal qui pèse sur d4 et l'aile dame. La structure rappelle la forme d'un dragon. Les Noirs visent une attaque queenside massive pendant que les Blancs lancent une attaque roi souvent irréversible.",
      fondement_en:"Black fianchettoes the bishop to g7, creating a powerhouse on the long diagonal. Black aims for a massive queenside attack while White launches a potentially irreversible kingside assault.",
      avantages:"Fou-dragon en g7 extraordinairement actif ; plans clairs et dynamiques queenside ; contre-attaque vigoureuse en toutes circonstances.",
      avantages_en:"Dragon Bishop on g7 extraordinarily active; clear dynamic queenside plans; vigorous counter-attack in all circumstances.",
      inconvenients:"Variante yougoslave (0-0-0 blanc) : l'une des attaques les plus dangereuses de toute la théorie ; les Noirs vivent sur le fil du rasoir.",
      inconvenients_en:"Yugoslav Attack (White 0-0-0): one of the most dangerous attacks in all of opening theory; Black lives on the razor's edge.",
      blancs:"Dragon yougoslave : 0-0-0, h4-h5, Fh6 pour échanger le Dragon, attaque de mat directe sur l'aile roi.",
      blancs_en:"Yugoslav Attack: 0-0-0, h4-h5, Bh6 to eliminate the Dragon Bishop, direct mating attack on the kingside.",
      noirs:"...Tb8, ...b5-b4, envahir la colonne c et les cases noires ; coupler contre-jeu queenside à la pression du Fou-dragon.",
      noirs_en:"...Rb8, ...b5-b4, invade the c-file and dark squares; combine queenside counter-attack with Dragon Bishop pressure.",
      cases:"g7 (Fou-dragon), h6 (cible blanche), c3 (case d'invasion noire).",
      cases_en:"g7 (Dragon Bishop), h6 (White's mating target), c3 (Black invasion square).",
      finale:"Inexistantes dans le Dragon classique — le milieu de jeu tranche par K.O. tactique.",
      finale_en:"Rare endgames in the classical Dragon — both sides play for mate in the middlegame.",
      stats:"ECO B70–B79 · Complexité ★★★★★ · Popularité au sommet ★★★★",
      stats_en:"ECO B70–B79 · Complexity ★★★★★ · Top-level popularity ★★★★",
      piege:"La destruction du Dragon : Fh6! élimine le Fou protecteur si les Noirs omettent ...h6 ; le sacrifice Txc3 est thématique mais exige une précision absolue.",
      piege_en:"Dragon destruction: Bh6! eliminates the protective Bishop if Black omits ...h6; the Rxc3 sacrifice is thematic but demands absolute precision.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"g7",to:"g6"}]
    },
    scheveningen: {
      line:"1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 e6",
      fondement:"Création d'un 'petit centre' e6+d6 qui cède du terrain au centre mais offre une grande solidité. Les Noirs attendent de voir comment les Blancs se déploient avant de décider de leur plan. Structure très robuste et flexible.",
      fondement_en:"Creation of a 'small center' with e6+d6 that cedes central space but offers great solidity. Black waits to see how White develops before committing to a plan. Very robust and flexible structure.",
      avantages:"Structure solide, peu de faiblesses immédiates ; flexibilité queenside (...a6, ...b5) ; bon pour les joueurs qui aiment les positions manœuvrières.",
      avantages_en:"Solid structure with few immediate weaknesses; queenside flexibility (...a6, ...b5); good for players who enjoy maneuvering positions.",
      inconvenients:"La case d5 peut devenir faible à long terme ; les Blancs ont plusieurs attaques tranchantes (Keres Attack 6.g4, English Attack 6.Fe3 f3).",
      inconvenients_en:"The d5 square can become a long-term weakness; White has several sharp attacking systems (Keres Attack 6.g4, English Attack 6.Be3 f3).",
      blancs:"Keres Attack (6.g4) : attaque directe et psychologiquement difficile ; English Attack (6.Fe3+f3+g4) : plan systématique.",
      blancs_en:"Keres Attack (6.g4): direct and psychologically difficult; English Attack (6.Be3+f3+g4): systematic attacking plan.",
      noirs:"...a6, ...b5, ...Fb7 : expansion queenside classique ; ...Ce5 pour échanger le cheval actif en d4.",
      noirs_en:"...a6, ...b5, ...Bb7: classical queenside expansion; ...Ne5 to exchange the active knight on d4.",
      cases:"d5 (case faible noire), e4 (soutien clé blanc), b5 (expansion noire).",
      cases_en:"d5 (Black's weak square), e4 (White's key support), b5 (Black's expansion square).",
      finale:"Finales possibles mais rares ; la structure e6+d6 génère généralement un riche milieu de jeu.",
      finale_en:"Endgames possible but rare; the e6+d6 structure generally leads to rich middlegame play.",
      stats:"ECO B80–B89 · Complexité ★★★★ · Popularité au sommet ★★★★",
      stats_en:"ECO B80–B89 · Complexity ★★★★ · Top-level popularity ★★★★",
      piege:"La Keres Attack (6.g4) surprend souvent ; la réponse incorrecte 6...h6? mène à des difficultés après 7.h4 avec avalanche de pions.",
      piege_en:"The Keres Attack (6.g4) often surprises; the incorrect reply 6...h6? leads to trouble after 7.h4 with a pawn avalanche.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"e7",to:"e6"}]
    },
    sveshnikov: {
      line:"1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 e5 6.Cdb5 d6 7.Fg5 a6 8.Ca3 b5",
      fondement:"Les Noirs jouent ...e5 pour gagner de l'espace au centre, acceptant consciemment une faiblesse permanente sur d5 en échange d'une forte pression sur e4 et d'une dynamique de pièces très active. Philosophie : espace contre case faible.",
      fondement_en:"Black plays ...e5 to gain central space, consciously accepting a permanent d5 weakness in exchange for strong pressure on e4 and very active piece play. Philosophy: space against structural weakness.",
      avantages:"Espace kingside et initiative dynamique ; les Noirs dictent souvent le rythme ; plans queenside avec ...b4 très agressifs ; variante favorite de Magnus Carlsen.",
      avantages_en:"Kingside space and dynamic initiative; Black often dictates the tempo; aggressive queenside plans with ...b4; Magnus Carlsen's favorite weapon.",
      inconvenients:"Faiblesse permanente sur d5 ; le pion e5 peut devenir une cible ; défense passive catastrophique.",
      inconvenients_en:"Permanent weakness on d5; the e5 pawn can become a target; passive defense is catastrophic.",
      blancs:"Installer un cavalier ou un fou sur d5 ; pression sur d6 avec Fd3, De2 ; ouvrir le centre si ...b4 est joué.",
      blancs_en:"Install a knight or bishop on d5; pressure on d6 with Bd3, Qe2; open the center if ...b4 is played.",
      noirs:"...b4 pour chasser le cavalier blanc en a3 ; ...Cd4 ou ...Ce7-d5 pour rééquilibrer ; contre-attaque avec ...f5.",
      noirs_en:"...b4 to chase the White knight from a3; ...Nd4 or ...Ne7-d5 to rebalance; counter-attack with ...f5.",
      cases:"d5 (case faible noire/forte blanche), e5 (pion clé noir), b4 (expansion noire).",
      cases_en:"d5 (Black's weak/White's strong square), e5 (Black's key pawn), b4 (Black's expansion).",
      finale:"Les finales avantagent souvent les Blancs grâce au contrôle de d5 ; les Noirs doivent maintenir l'activité.",
      finale_en:"Endgames often favor White thanks to d5 control; Black must maintain piece activity.",
      stats:"ECO B33 · Complexité ★★★★ · Popularité au sommet ★★★★★",
      stats_en:"ECO B33 · Complexity ★★★★ · Top-level popularity ★★★★★",
      piege:"Après 8...b5, la suite 9.Cxb5!? axb5 10.Cxb5 est un sacrifice de pièce réfutant les variantes noires incorrectes.",
      piege_en:"After 8...b5, the line 9.Nxb5!? axb5 10.Nxb5 is a piece sacrifice refuting incorrect Black responses.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"e7",to:"e5"},{from:"d4",to:"b5"},{from:"d7",to:"d6"},{from:"c1",to:"g5"},{from:"a7",to:"a6"},{from:"b5",to:"a3"},{from:"b7",to:"b5"}]
    },
    classique: {
      line:"1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 d6",
      fondement:"Développement naturel et solide. Les Noirs maintiennent une pression sur d4 avec ...Cc6 et visent à compléter leur développement rapidement. Mène typiquement à la Richter-Rauzer (6.Fg5) ou à l'Attaque Sozin (6.Fc4).",
      fondement_en:"Natural and solid development. Black maintains pressure on d4 with ...Nc6 and aims to complete development quickly. Typically leads to the Richter-Rauzer (6.Bg5) or Sozin Attack (6.Bc4).",
      avantages:"Très solide et éprouvé au plus haut niveau ; nombreuses options selon le plan blanc ; bonne coordination de pièces dès l'ouverture.",
      avantages_en:"Very solid and tested at the highest level; many options depending on White's plan; good piece coordination from the opening.",
      inconvenients:"Moins dynamique que la Najdorf ou le Dragon ; la case d5 peut devenir faible selon le plan noir.",
      inconvenients_en:"Less dynamic than Najdorf or Dragon; the d5 square can become weak depending on Black's plan.",
      blancs:"Richter-Rauzer (6.Fg5) : épingle le Cf6, pression sur f6 et e6 ; Sozin (6.Fc4) : pression sur f7 et 0-0-0.",
      blancs_en:"Richter-Rauzer (6.Bg5): pins the Nf6, pressure on f6 and e6; Sozin (6.Bc4): pressure on f7 and queenside castling.",
      noirs:"...e6 (Scheveningen) ou ...e5 (Sveshnikov/Boleslavsky) ; contre-jeu queenside avec ...a6, ...b5 ; roque roi.",
      noirs_en:"...e6 (Scheveningen) or ...e5 (Sveshnikov/Boleslavsky); queenside counterplay with ...a6, ...b5; kingside castling.",
      cases:"d5 (case faible noire), e4 (clé de la structure blanche), f7 (cible Sozin).",
      cases_en:"d5 (Black's weak square), e4 (White's structural key), f7 (Sozin attack target).",
      finale:"Finales généralement équilibrées ; la structure pions e6+d6 offre solidité si bien gérée.",
      finale_en:"Endgames generally balanced; the e6+d6 pawn structure offers solidity if well managed.",
      stats:"ECO B56–B69 · Complexité ★★★★ · Popularité au sommet ★★★",
      stats_en:"ECO B56–B69 · Complexity ★★★★ · Top-level popularity ★★★",
      piege:"Dans l'Attaque Sozin (6.Fc4 e6 7.Fb3), le sacrifice 9.Cxe6!? fxe6 10.Fxe6 est un piège thématique à connaître.",
      piege_en:"In the Sozin Attack (6.Bc4 e6 7.Bb3), the sacrifice 9.Nxe6!? fxe6 10.Bxe6 is a thematic trap worth knowing.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"d7",to:"d6"}]
    },
    kan: {
      line:"1.e4 c5 2.Cf3 e6 3.d4 cxd4 4.Cxd4 a6",
      fondement:"Combinaison de la souplesse de la Paulsen (...e6) et du coup prophylactique ...a6 (empêchant Cb5). Les Noirs gardent une grande flexibilité : ...b5, ...d6 ou ...Cc6 selon les circonstances. Variante caméléon par excellence.",
      fondement_en:"Combination of Paulsen flexibility (...e6) with the prophylactic ...a6 (preventing Nb5). Black retains great flexibility: ...b5, ...d6 or ...Nc6 as circumstances demand. The ultimate chameleon variation.",
      avantages:"Extrêmement flexible, difficile pour les Blancs de planifier ; peu de points faibles immédiats ; bonne pour éviter la théorie.",
      avantages_en:"Extremely flexible, difficult for White to plan; few immediate weaknesses; good for avoiding theory.",
      inconvenients:"Développement lent, les Blancs peuvent prendre de l'espace ; la case d5 est souvent faible ; moins de contre-jeu immédiat.",
      inconvenients_en:"Slow development, White can gain space; d5 often weak; less immediate counterplay than sharper variations.",
      blancs:"Occupation du centre avec c4 (Maroczy Bind) ; f4-f5, pression sur e6 ; Cxc6 pour doubler les pions noirs.",
      blancs_en:"Central occupation with c4 (Maroczy Bind); f4-f5, pressure on e6; Nxc6 to double Black's pawns.",
      noirs:"...b5, ...Fb7, développement queenside ; ...d6 puis ...Cf6, ...Fe7, roquer et attendre ; ...d5 pour casser.",
      noirs_en:"...b5, ...Bb7, queenside development; ...d6 then ...Nf6, ...Be7, castle and wait; ...d5 to break.",
      cases:"d5 (case faible noire), c4 (Maroczy Bind blanc), b5 (expansion noire).",
      cases_en:"d5 (Black's weak square), c4 (White's Maroczy Bind), b5 (Black's expansion).",
      finale:"Avec l'étau Maroczy, les Blancs ont un léger avantage en finale ; sinon, positions équilibrées.",
      finale_en:"With the Maroczy Bind, White has a slight endgame advantage; otherwise, balanced positions.",
      stats:"ECO B41–B43 · Complexité ★★★ · Popularité au sommet ★★★",
      stats_en:"ECO B41–B43 · Complexity ★★★ · Top-level popularity ★★★",
      piege:"Après 5.c4 (Maroczy Bind), ...b5?! trop tôt mène à cxb5 axb5 Dxd6! avec gain de matériel.",
      piege_en:"After 5.c4 (Maroczy Bind), ...b5?! too early leads to cxb5 axb5 Qxd6! with material gain.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"e7",to:"e6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"a7",to:"a6"}]
    },
    taimanov: {
      line:"1.e4 c5 2.Cf3 e6 3.d4 cxd4 4.Cxd4 Cc6 5.Cc3 Dc7",
      fondement:"Nommée d'après le grand maître soviétique Mark Taimanov (1926–2016), cette variante combine le développement naturel du cavalier en c6 avec la dame active en c7 qui surveille e5 et prépare ...a6+...b5. Approche pragmatique.",
      fondement_en:"Named after Soviet GM Mark Taimanov (1926–2016), this variation combines natural knight development to c6 with the active queen on c7 watching e5 and preparing ...a6+...b5. A pragmatic approach.",
      avantages:"Dame active en c7 surveille les cases clés ; plans clairs et flexibles ; bonne résistance aux tentatives blanches tranchantes.",
      avantages_en:"Active queen on c7 watches key squares; clear and flexible plans; good resistance against White's sharpest attempts.",
      inconvenients:"Dame en c7 peut être exposée en milieu de partie ; moins dynamique que la Najdorf ; 5.Cb5 est une réponse gênante.",
      inconvenients_en:"Queen on c7 can be exposed in the middlegame; less dynamic than Najdorf; 5.Nb5 is an annoying response.",
      blancs:"Cb5-d6 ou Cb5-a7 pour troubler la coordination noire ; Maroczy Bind avec c4 ; English Attack (Fe3, f3, g4).",
      blancs_en:"Nb5-d6 or Nb5-a7 to disrupt Black's coordination; Maroczy Bind with c4; English Attack (Be3, f3, g4).",
      noirs:"...a6, ...b5, expansion queenside standard ; ...Cf6, ...Fe7, roque côté roi ; ...Ce5 pour échanger les cavaliers.",
      noirs_en:"...a6, ...b5, standard queenside expansion; ...Nf6, ...Be7, kingside castling; ...Ne5 to exchange active knights.",
      cases:"c7 (dame noire), d6 (case d'invasion blanche), b5 (expansion noire).",
      cases_en:"c7 (Black queen), d6 (White invasion square), b5 (Black expansion).",
      finale:"Les finales sont généralement équilibrées si les Noirs ont bien géré leur structure de pions.",
      finale_en:"Endgames are generally balanced if Black has managed their pawn structure well.",
      stats:"ECO B44–B49 · Complexité ★★★ · Popularité au sommet ★★★",
      stats_en:"ECO B44–B49 · Complexity ★★★ · Top-level popularity ★★★",
      piege:"Le coup 5.Cb5 suivi de 6.Fd6+!? est un piège connu qui peut surprendre les Noirs non préparés.",
      piege_en:"The move 5.Nb5 followed by 6.Bd6+!? is a known trap that can surprise unprepared Black players.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"e7",to:"e6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"b8",to:"c6"},{from:"b1",to:"c3"},{from:"d8",to:"c7"}]
    },
    quatrecavaliers: {
      line:"1.e4 c5 2.Cf3 e6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 Cc6",
      fondement:"Développement très naturel et symétrique. Les quatre cavaliers sont développés tôt. Les Noirs maintiennent la pression sur d4 et gardent des options vers le Scheveningen ou le Taimanov selon le plan blanc.",
      fondement_en:"Very natural and symmetric development. All four knights are developed early. Black maintains pressure on d4 and keeps options toward Scheveningen or Taimanov depending on White's plan.",
      avantages:"Développement rapide et harmonieux ; très flexible ; moins théorique que la Najdorf.",
      avantages_en:"Quick and harmonious development; very flexible; less theoretical than Najdorf.",
      inconvenients:"5.Cxc6 donne aux Blancs une structure confortable ; moins de punch que d'autres variantes siciliennes.",
      inconvenients_en:"5.Nxc6 gives White a comfortable structure; less punch than other Sicilian variations.",
      blancs:"Cxc6 bxc6, exploiter les faiblesses de la structure noire ; Fe3, Dc2, 0-0-0 et attaque ; Cb3 pour garder la tension.",
      blancs_en:"Nxc6 bxc6, exploit Black's structural weaknesses; Be3, Qc2, 0-0-0 and attack; Nb3 to maintain tension.",
      noirs:"...Fb4, épingler le Cc3 (Nimzowitsch-Sicilienne) ; ...d5 en un coup si possible ; ...Dc7, ...a6, ...b5.",
      noirs_en:"...Bb4, pin the Nc3 (Nimzowitsch-Sicilian variation); ...d5 in one move if possible; ...Qc7, ...a6, ...b5.",
      cases:"d4 (pression noire), c6 (case après Cxc6), e5 (coup clé noir potentiel).",
      cases_en:"d4 (Black's pressure), c6 (square after Nxc6), e5 (potential Black key move).",
      finale:"Finales équilibrées ; après Cxc6, la structure noire doublée peut être problématique à long terme.",
      finale_en:"Balanced endgames; after Nxc6, the doubled Black pawn structure can be problematic long-term.",
      stats:"ECO B45–B46 · Complexité ★★★ · Popularité au sommet ★★",
      stats_en:"ECO B45–B46 · Complexity ★★★ · Top-level popularity ★★",
      piege:"L'échange immédiat 5.Cxc6 dxc6 suivi de 6.Dc2 visant e4 surprend souvent les Noirs non préparés.",
      piege_en:"The immediate exchange 5.Nxc6 dxc6 followed by 6.Qc2 targeting e4 often surprises unprepared Black players.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"e7",to:"e6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"b8",to:"c6"}]
    },
    richter_rauzer: {
      line:"1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 Cc6 6.Fg5",
      fondement:"Les Blancs épinglent le cheval f6 avec le fou, créant une pression sur le nœud d7. La menace Fxf6 forçant ...gxf6 crée des problèmes immédiats. Si les Noirs jouent ...e6, la case d5 devient accessible aux pièces blanches.",
      fondement_en:"White pins the f6 knight with the bishop, creating pressure on the d7 junction. The threat Bxf6 forcing ...gxf6 creates immediate problems. If Black plays ...e6, the d5 square becomes accessible to White's pieces.",
      avantages:"Pression immédiate sur la position noire ; bons plans queenside après 0-0-0 ; attaque bien coordonnée.",
      avantages_en:"Immediate pressure on Black's position; good queenside plans after 0-0-0; well-coordinated attack.",
      inconvenients:"Le fou peut être échangé avec ...e6+...Fe7 ; les Noirs ont des plans actifs avec ...a6, ...b5.",
      inconvenients_en:"The bishop can be exchanged with ...e6+...Be7; Black has active plans with ...a6, ...b5.",
      blancs:"Dd2, 0-0-0, f4-f5 : attaque directe ; Cxc6 puis Fxf6 pour affaiblir la structure ; Ce4-d6.",
      blancs_en:"Qd2, 0-0-0, f4-f5: direct attack; Nxc6 then Bxf6 to weaken the structure; Ne4-d6.",
      noirs:"...e6 : le meilleur, libérer la position ; ...Fe7, échanger le fou épingle ; ...a6, ...b5, ...Da5 contre-attaque.",
      noirs_en:"...e6: best, liberating the position; ...Be7, exchange the pinning bishop; ...a6, ...b5, ...Qa5 counter-attack.",
      cases:"d5 (case clé blanche), f6 (case épinglée noire), b5 (contre-jeu noir).",
      cases_en:"d5 (White's key square), f6 (Black's pinned square), b5 (Black's counterplay).",
      finale:"Les finales avantagent souvent les Blancs après affaiblissement de la structure noire.",
      finale_en:"Endgames often favor White after weakening Black's pawn structure.",
      stats:"ECO B60–B69 · Complexité ★★★★ · Popularité au sommet ★★★",
      stats_en:"ECO B60–B69 · Complexity ★★★★ · Top-level popularity ★★★",
      piege:"Après 6.Fg5 e6, la défense incorrecte ...Fd7?! permet 7.Cxe6! fxe6 8.Fxe6+ avec mat menaçant.",
      piege_en:"After 6.Bg5 e6, the incorrect defense ...Bd7?! allows 7.Nxe6! fxe6 8.Bxe6+ with a mating threat.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"b8",to:"c6"},{from:"c1",to:"g5"}]
    },
    english_attack: {
      line:"1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 e6 6.Fe3 a6 7.f3",
      fondement:"Système ultra-populaire depuis les années 1980–90, utilisé par Kasparov, Anand et la plupart des grands maîtres. L'idée est de construire un 'mur' avec f3, préparer g4-g5 et mener une attaque sur le roi noir.",
      fondement_en:"Ultra-popular system since the 1980s–90s, used by Kasparov, Anand, and most grandmasters. The idea is to build a 'wall' with f3, prepare g4-g5, and launch a kingside attack.",
      avantages:"Plan très clair (Fe3, Dd2, 0-0-0, g4, g5) ; pression directe difficile à contrer ; utilisable contre Najdorf, Scheveningen, Classique.",
      avantages_en:"Very clear plan (Be3, Qd2, 0-0-0, g4, g5); direct pressure hard to counter; usable against Najdorf, Scheveningen, Classical.",
      inconvenients:"f3 affaiblit e3 et d3 ; si les Noirs contre-attaquent queenside assez vite, les Blancs peuvent se retrouver en difficulté.",
      inconvenients_en:"f3 weakens e3 and d3; if Black counter-attacks queenside fast enough, White can find themselves in trouble.",
      blancs:"g4-g5 : attaque sur le roi noir ; h4-h5 : invasion de l'aile h ; Fc4 ou Fd3 selon les circonstances.",
      blancs_en:"g4-g5: kingside attack; h4-h5: h-file invasion; Bc4 or Bd3 depending on circumstances.",
      noirs:"...b5-b4 : contre-attaque queenside immédiate ; ...Ce5, simplification active ; roque long pour confrontation directe.",
      noirs_en:"...b5-b4: immediate queenside counter-attack; ...Ne5, active simplification; queenside castling for direct confrontation.",
      cases:"g5 (case d'attaque blanche), d5 (case clé), b4 (contre-jeu noir).",
      cases_en:"g5 (White's attack square), d5 (key square), b4 (Black's counterplay).",
      finale:"Les finales sont rares ; si l'attaque blanche est repoussée, les faiblesses e3-d3 deviennent des cibles.",
      finale_en:"Endgames are rare; if White's attack is repelled, the e3-d3 weaknesses become targets.",
      stats:"ECO B80 · Complexité ★★★★ · Popularité au sommet ★★★★",
      stats_en:"ECO B80 · Complexity ★★★★ · Top-level popularity ★★★★",
      piege:"L'erreur 7...Cc6?! sans jouer ...b5 auparavant mène après 8.g4 h6 9.h4 à une attaque blanche irréfutable.",
      piege_en:"The mistake 7...Nc6?! without first playing ...b5 leads after 8.g4 h6 9.h4 to an irrefutable White attack.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"e7",to:"e6"},{from:"c1",to:"e3"},{from:"a7",to:"a6"},{from:"f2",to:"f3"}]
    },
    grand_prix: {
      line:"1.e4 c5 2.Cc3 Cc6 3.f4 g6 4.Cf3 Fg7 5.Fc4",
      fondement:"Attaque directe sur le roi noir avec la chaîne f4-e4 et développement agressif. Populaire dans les tournois open britanniques des années 1980. But : attaquer le roi noir avec f4-f5, Fe3, Dd2, 0-0-0. Évite la théorie Najdorf/Dragon.",
      fondement_en:"Direct attack on Black's king with the f4-e4 chain and aggressive development. Popular in British open tournaments of the 1980s. Goal: attack Black's king with f4-f5, Be3, Qd2, 0-0-0. Avoids Najdorf/Dragon theory.",
      avantages:"Plan d'attaque simple et direct ; efficace en pratique ; évite la théorie Najdorf/Dragon ; effet surprise.",
      avantages_en:"Simple and direct attack plan; effective in practice; avoids Najdorf/Dragon theory; surprise factor.",
      inconvenients:"2.Cc3 avant d4 donne aux Noirs d5 en un coup ; structure blanche peut être faible si l'attaque est stoppée.",
      inconvenients_en:"2.Nc3 before d4 gives Black ...d5 in one move; White's structure can be weak if the attack is stopped.",
      blancs:"f5, Fe3, Dd2, 0-0-0, attaque directe ; sacrifice sur g6 ou e6 dans certaines lignes ; Cf3-g5.",
      blancs_en:"f5, Be3, Qd2, 0-0-0, direct attack; sacrifice on g6 or e6 in certain lines; Nf3-g5.",
      noirs:"...d5 ! le coup clé, contester le centre immédiatement ; ...e6, développement solide ; fianchetto contre-attaquant.",
      noirs_en:"...d5! the key move, immediately contest the center; ...e6, solid development; Dragon fianchetto to counter-attack.",
      cases:"f5 (attaque blanche clé), d5 (contre-jeu noir), g6 (roi noir potentiellement exposé).",
      cases_en:"f5 (White's key attack square), d5 (Black's counterplay), g6 (potentially exposed Black king).",
      finale:"Finales rares ; la structure blanche peut être compromise si l'attaque échoue.",
      finale_en:"Rare endgames; White's structure can be compromised if the attack fails.",
      stats:"ECO B23 · Complexité ★★★ · Popularité au sommet ★★★",
      stats_en:"ECO B23 · Complexity ★★★ · Top-level popularity ★★★",
      piege:"Après 5.Fc4, le coup ...Ca5?! est souvent joué mais 6.Fd5! paralyse les pièces noires et coûte du temps.",
      piege_en:"After 5.Bc4, the move ...Na5?! is often played but 6.Bd5! paralyzes Black's pieces and costs time.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"b1",to:"c3"},{from:"b8",to:"c6"},{from:"f2",to:"f4"},{from:"g7",to:"g6"},{from:"g1",to:"f3"},{from:"f8",to:"g7"},{from:"f1",to:"c4"}]
    },
    morra: {
      line:"1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Cxc3 Cc6 5.Cf3 d6 6.Fc4",
      fondement:"Les Blancs sacrifient un pion dès le début pour obtenir une avance de développement massive. Nommé d'après Ken Smith et Pierre Morra. Les Blancs espèrent que leur développement supérieur et la colonne c ouverte compensent le déficit matériel.",
      fondement_en:"White sacrifices a pawn immediately to obtain a massive development lead. Named after Ken Smith and Pierre Morra. White hopes their superior development and open c-file compensate for the material deficit.",
      avantages:"Développement fulgurant ; pression constante ; excellent en partie rapide/blitz et en amateur.",
      avantages_en:"Lightning development; constant pressure; excellent in rapid/blitz and at club level.",
      inconvenients:"Le pion sacrifié est réel : les Noirs gardent l'avantage matériel ; au plus haut niveau, les Noirs défendent correctement.",
      inconvenients_en:"The sacrificed pawn is real: Black keeps the material advantage; at the highest level, Black defends correctly.",
      blancs:"Développement maximal (Fc4, Cf3, 0-0, Te1, Fd2) ; pression sur d6 et f7 ; ouverture de la colonne c avec Tc1.",
      blancs_en:"Maximum development (Bc4, Nf3, 0-0, Re1, Bd2); pressure on d6 and f7; open the c-file with Rc1.",
      noirs:"Accepter et défendre avec précision (...d6, ...Cf6, ...g6, ...Fg7) ; refus du gambit (3...Cf6) ; rendre le pion au bon moment.",
      noirs_en:"Accept and defend precisely (...d6, ...Nf6, ...g6, ...Bg7); decline the gambit (3...Nf6); return the pawn at the right moment.",
      cases:"d6 (pression blanche), f7 (faiblesse noire), c1 (tour blanche active via Tc1).",
      cases_en:"d6 (White's pressure), f7 (Black's weakness), c1 (White rook active via Rc1).",
      finale:"Les Noirs conservent l'avantage matériel en finale ; les Blancs jouent tout pour le milieu de jeu.",
      finale_en:"Black retains material advantage in endgames; White plays everything for the middlegame.",
      stats:"ECO B21 · Complexité ★★★ · Popularité au sommet ★★",
      stats_en:"ECO B21 · Complexity ★★★ · Top-level popularity ★★",
      piege:"Après 6...Cf6, le sacrifice 7.e5! dxe5 8.Dxd8+ Cxd8 9.Cxe5 est thématique et donne une position déséquilibrée.",
      piege_en:"After 6...Nf6, the sacrifice 7.e5! dxe5 8.Qxd8+ Nxd8 9.Nxe5 is thematic and gives an unbalanced position.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"c2",to:"c3"},{from:"d4",to:"c3"},{from:"b1",to:"c3"},{from:"b8",to:"c6"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"f1",to:"c4"}]
    },
    alapin: {
      line:"1.e4 c5 2.c3 Cf6 3.e5 Cd5 4.d4 cxd4 5.Cf3",
      fondement:"L'Alapin (2.c3) est l'anti-Sicilienne la plus solide. Les Blancs préparent d4 pour bâtir un centre classique, évitant l'immense théorie de la Sicilienne ouverte.",
      fondement_en:"The Alapin (2.c3) is the most solid anti-Sicilian. White prepares d4 to build a classical center, sidestepping the immense theory of the Open Sicilian.",
      avantages:"Centre de pions sain, plans clairs, très peu de théorie à mémoriser.",
      avantages_en:"Sound pawn center, clear plans, very little theory to memorize.",
      inconvenients:"Le coup c3 prive le Cavalier b1 de sa meilleure case et concède un jeu confortable aux Noirs.",
      inconvenients_en:"The move c3 deprives the b1-Knight of its best square and concedes Black comfortable play.",
      blancs:"Construire et soutenir le centre d4-e5, développer harmonieusement et exploiter l'avance d'espace.",
      blancs_en:"Build and support the d4-e5 center, develop harmoniously and exploit the space advantage.",
      noirs:"Contester le centre par ...d5 (à la française) ou ...d6/...Cf6 pour harceler le pion e5.",
      noirs_en:"Challenge the center with ...d5 (French-style) or ...d6/...Nf6 to harass the e5 pawn.",
      cases:"d5 (avant-poste noir), e5 (coin de la chaîne blanche), d4 (case centrale).",
      cases_en:"d5 (Black's outpost), e5 (head of White's chain), d4 (central square).",
      finale:"Finales équilibrées où la structure de pions saine des Blancs compense l'absence d'initiative.",
      finale_en:"Balanced endgames where White's sound pawn structure offsets the lack of initiative.",
      stats:"ECO B22 · Très populaire au niveau club et en parties rapides pour sa simplicité.",
      stats_en:"ECO B22 · Very popular at club level and in rapid games for its simplicity.",
      piege:"Après 2...d5 3.exd5 Dxd5 4.d4 Cf6, les Blancs ne doivent pas jouer 5.Cf3?! cxd4 trop tôt sans préparation.",
      piege_en:"After 2...d5 3.exd5 Qxd5 4.d4 Nf6, White must not play 5.Nf3?! cxd4 prematurely without preparation.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"c2",to:"c3"},{from:"g8",to:"f6"},{from:"e4",to:"e5"},{from:"f6",to:"d5"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"g1",to:"f3"}]
    },
    rossolimo: {
      line:"1.e4 c5 2.Cf3 Cc6 3.Fb5",
      fondement:"La variante Rossolimo (3.Fb5) est une anti-Sicilienne dans l'esprit de la Ruy Lopez. Les Blancs visent le Cavalier c6 pour endommager la structure noire ou la centralisation.",
      fondement_en:"The Rossolimo Variation (3.Bb5) is an anti-Sicilian in the spirit of the Ruy Lopez. White targets the c6-Knight to damage Black's structure or central control.",
      avantages:"Évite la Sicilienne ouverte, mène à un jeu positionnel sain avec la paire de fous potentielle.",
      avantages_en:"Avoids the Open Sicilian, leading to sound positional play with the potential bishop pair.",
      inconvenients:"Moins agressive ; les Noirs disposent de plusieurs égalisations confortables (...g6, ...e6, ...d6).",
      inconvenients_en:"Less aggressive; Black has several comfortable equalizing setups (...g6, ...e6, ...d6).",
      blancs:"Échanger en c6 au bon moment pour fixer une faiblesse, puis pression positionnelle lente.",
      blancs_en:"Exchange on c6 at the right moment to fix a weakness, then apply slow positional pressure.",
      noirs:"Fianchettoer en g7 ou jouer ...e6, conserver une structure saine et viser la rupture ...d5.",
      noirs_en:"Fianchetto on g7 or play ...e6, keep a sound structure and aim for the ...d5 break.",
      cases:"c6 (cible du Fou b5), d4 et e5 (cases centrales disputées).",
      cases_en:"c6 (target of the b5-Bishop), d4 and e5 (contested central squares).",
      finale:"Finales tranquilles où la qualité des structures décide ; souvent un léger plus blanc.",
      finale_en:"Quiet endgames decided by structural quality; often a slight White edge.",
      stats:"ECO B30-B31 · Choix de prédilection des joueurs de tournoi modernes contre la Sicilienne.",
      stats_en:"ECO B30-B31 · A favorite of modern tournament players against the Sicilian.",
      piege:"Après 3...g6 4.Fxc6 dxc6 5.d3, les Noirs gardent la paire de fous mais doivent surveiller e5.",
      piege_en:"After 3...g6 4.Bxc6 dxc6 5.d3, Black keeps the bishop pair but must watch the e5 square.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"f1",to:"b5"}]
    }
  },

  7: {
    classique: {
      line:"1.e4 e6 2.d4 d5 3.Cc3 Cf6 4.Fg5 Fe7 5.e5 Cfd7",
      fondement:"Lutte des chaînes de pions fermées (e5-d4). Les Noirs acceptent un manque d'espace pour une structure monolithique.",
      // FIX #3: Removed stray KID and Caro-Kann duplicate keys that were copy-pasted here.
      // Only the correct French Defense strings (the last value JS would have seen) remain.
      fondement_en:"The Classical Variation (3.Nc3 Nf6 4.Bg5) enters the most theoretical French. White pins the Knight and prepares e5 to gain space.",
      avantages:"Structure noire compacte et robuste, idéale pour le contre-jeu positionnel.",
      avantages_en:"Rich theory, Black has solid central structure and queenside counterplay.",
      inconvenients:"Le Fou c8 se retrouve temporairement enfermé derrière sa chaîne.",
      inconvenients_en:"The e6 pawn can be a chronic weakness. Black's dark-squared Bishop is often blocked.",
      blancs:"Consolider la chaîne, pousser f4-f5 pour ouvrir des brèches à l'aile roi.",
      blancs_en:"Advance e5 to gain space, then attack the kingside with f4-f5.",
      noirs:"Déclencher la rupture indispensable ...c5 pour saper d4.",
      noirs_en:"Counter-attack with ...c5 and ...f6 to undermine White's center.",
      cases:"Blancs : e6, f5. Noirs : d4, c4.",
      cases_en:"e5 (White's space), d4 (White's central pawn), d5 (Black's stronghold).",
      finale:"Le Fou emprisonné des Noirs reste un problème récurrent s'il n'est pas libéré.",
      finale_en:"Endgames favor White's spatial advantage, but Black's solid structure resists.",
      stats:"Volume : ~2M (Masters). Taux : Blancs 39% | Nulle 30% | Noirs 31%.",
      stats_en:"Volume: ~12M (Lichess) · Rate: White 35% | Draw 32% | Black 33%.",
      piege:"Oublier la rupture rapide ...c5 enferme définitivement le Fou c8 pour toute la partie.",
      piege_en:"The 'poisoned pawn' 4...dxe4 5.Nxe4 Qxd4?? 6.Nb5 wins immediately.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"c1",to:"g5"},{from:"f8",to:"e7"}]
    },
    winawer: {
      line:"1.e4 e6 2.d4 d5 3.Cc3 Fb4 4.e5 c5 5.a3 Fxc3+ 6.bxc3 Ce7 7.Dg4",
      fondement:"En clouant le Cavalier par 3...Fb4, les Noirs infligent des pions doublés structurels aux Blancs. Les Blancs répliquent par Dg4.",
      fondement_en:"The Winawer (3...Bb4) creates immediate structural imbalances: Black pins the Knight and destroys White's pawn structure with ...Bxc3.",
      avantages:"Déséquilibres monstrueux. Les Noirs détruisent l'aile dame, les Blancs attaquent l'aile roi.",
      avantages_en:"Maximum imbalance, very combative. Black's bishop pair is a long-term asset.",
      inconvenients:"La Dame blanche en g4 exerce une pression terrifiante sur g7.",
      inconvenients_en:"White's powerful e5 pawn gives a lasting space advantage. Black's queenside can be weak.",
      blancs:"Utiliser la paire de fous dans les lignes ouvertes et pousser f4-f5.",
      blancs_en:"Exploit the e5 pawn and attack the kingside while Black's queenside is undeveloped.",
      noirs:"Bloquer l'aile dame par ...c4 et assiéger la faiblesse c3.",
      noirs_en:"Counterattack on the queenside with ...c4 and use the bishop pair.",
      cases:"g7, c4.",
      cases_en:"e5 (White's key pawn), c4 (Black's queenside break), f7 (White's attack target).",
      finale:"Fous dominants si ouvert ; pions doublés faibles si la position reste close.",
      finale_en:"Highly complex endgames — the bishop pair often decides.",
      stats:"Ligne de combat favorite des joueurs de Française.",
      stats_en:"One of the most deeply analyzed French variations.",
      piege:"Le sacrifice en g7 exige une préparation défensive noire millimétrée.",
      piege_en:"After 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Qg4!, Black must play accurately or lose quickly.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"b1",to:"c3"},{from:"f8",to:"b4"},{from:"e4",to:"e5"},{from:"c7",to:"c5"},{from:"a2",to:"a3"},{from:"b4",to:"c3"},{from:"b2",to:"c3"},{from:"g8",to:"e7"},{from:"d1",to:"g4"}]
    },
    avance: {
      line:"1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Cc6 5.Cf3 Db6",
      fondement:"Ferme immédiatement le centre par e5, créant des secteurs d'attaque asymétriques très clairs.",
      fondement_en:"The Advance Variation (3.e5) closes the center and gains space immediately. White creates a chain of pawns on d4-e5.",
      avantages:"Espace central immédiat, plans d'action balisés à l'avance.",
      avantages_en:"Clear spatial advantage for White. Avoids main French theory.",
      inconvenients:"Le pion e5 peut devenir une cible si la base d4 est détruite.",
      inconvenients_en:"Black gets natural queenside counterplay with ...c5 and ...Qb6.",
      blancs:"Soutenir d4 par c3 et Cf3, puis attaquer sur l'aile roi.",
      blancs_en:"Support the e5 pawn chain and prepare the kingside attack with f4-f5.",
      noirs:"Assiéger d4 via ...Cc6, ...Db6, puis miner e5 par la rupture ...f6.",
      noirs_en:"Attack the d4 pawn immediately with ...c5 and ...Nc6 or ...Qb6.",
      cases:"d4, e5.",
      cases_en:"d4 (White's key pawn), e5 (space wedge), c5 (Black's counterplay).",
      finale:"Combat de majorités typique : pions e5 blanc contre pions noirs actifs.",
      finale_en:"Structural endgame — White's space vs. Black's pawn majority.",
      stats:"Ligne de club hautement stratégique très populaire.",
      stats_en:"White's most popular choice against the French at all levels.",
      piege:"Le blocus complet des cases sombres par les Blancs est une menace à ne pas sous-estimer.",
      piege_en:"After 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3?! cxd4 7.cxd4 Nxd4! wins material.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"e4",to:"e5"},{from:"c7",to:"c5"},{from:"c2",to:"c3"},{from:"b8",to:"c6"}]
    },
    tarrasch: {
      line:"1.e4 e6 2.d4 d5 3.Cd2",
      fondement:"La variante Tarrasch (3.Cd2) développe le Cavalier sans bloquer le pion c et en évitant le clouage ...Fb4 de la Winawer. C'est l'approche la plus saine et flexible contre la Française.",
      fondement_en:"The Tarrasch Variation (3.Nd2) develops the Knight without blocking the c-pawn and avoids the ...Bb4 pin of the Winawer. It is the soundest, most flexible approach against the French.",
      avantages:"Évite le clouage, conserve la structure intacte et la possibilité de jouer c3-c4 plus tard.",
      avantages_en:"Avoids the pin, keeps the structure intact and the option of playing c3-c4 later.",
      inconvenients:"Le Cd2 obstrue momentanément le Fou c1 et est moins ambitieux que 3.Cc3.",
      inconvenients_en:"The Nd2 momentarily blocks the c1-Bishop and is less ambitious than 3.Nc3.",
      blancs:"Adopter la structure pion isolé après ...c5 ou avancer e5 ; développer rapidement et roquer.",
      blancs_en:"Adopt the isolated-pawn structure after ...c5 or advance e5; develop quickly and castle.",
      noirs:"Frapper le centre par ...c5 (ligne ouverte) ou ...Cf6 (ligne fermée) pour un jeu équilibré.",
      noirs_en:"Strike the center with ...c5 (open line) or ...Nf6 (closed line) for balanced play.",
      cases:"e5 et d4 (centre blanc), d5 et c5 (leviers noirs).",
      cases_en:"e5 and d4 (White's center), d5 and c5 (Black's levers).",
      finale:"Finales souvent égales ; le pion dame isolé blanc peut être force ou faiblesse.",
      finale_en:"Endgames often equal; White's isolated d-pawn can be a strength or a weakness.",
      stats:"ECO C03-C09 · L'arme principale de Karpov et Kasparov contre la Française.",
      stats_en:"ECO C03-C09 · The main weapon of Karpov and Kasparov against the French.",
      piege:"Après 3...c5 4.exd5 Dxd5 5.Cgf3 cxd4 6.Fc4 Dd6, la précision est requise pour exploiter le tempo.",
      piege_en:"After 3...c5 4.exd5 Qxd5 5.Ngf3 cxd4 6.Bc4 Qd6, precision is required to exploit the tempo.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"b1",to:"d2"}]
    },
    echange: {
      line:"1.e4 e6 2.d4 d5 3.exd5 exd5",
      fondement:"La variante de l'Échange (3.exd5) libère immédiatement la tension centrale et crée une structure symétrique. Elle dissout le célèbre « problème du Fou c8 » de la Française.",
      fondement_en:"The Exchange Variation (3.exd5) releases the central tension immediately and creates a symmetrical structure. It resolves the famous 'bad c8-Bishop problem' of the French.",
      avantages:"Position claire et symétrique ; le Fou problématique des Noirs est libéré, jeu facile pour les deux camps.",
      avantages_en:"Clear, symmetrical position; Black's problem Bishop is freed, with easy play for both sides.",
      inconvenients:"Réputée stérile et nullarde ; les Blancs renoncent à toute prétention d'avantage d'ouverture.",
      inconvenients_en:"Reputed to be sterile and drawish; White gives up any claim to an opening advantage.",
      blancs:"Jouer pour une légère initiative de développement, viser la colonne e et les avant-postes c5/e5.",
      blancs_en:"Play for a slight developmental initiative, target the e-file and the c5/e5 outposts.",
      noirs:"Développer symétriquement, contester la colonne e et viser l'égalité complète.",
      noirs_en:"Develop symmetrically, contest the e-file and aim for full equality.",
      cases:"e4/e5 (cases d'avant-poste), colonne e (axe d'échange des Tours).",
      cases_en:"e4/e5 (outpost squares), the e-file (axis for rook exchanges).",
      finale:"Finales symétriques très nulles ; un seul tempo ou une faiblesse minime peut faire la différence.",
      finale_en:"Highly drawish symmetrical endgames; a single tempo or tiny weakness can decide.",
      stats:"ECO C01 · Souvent choisie pour neutraliser un adversaire ou jouer la sécurité.",
      stats_en:"ECO C01 · Often chosen to neutralize an opponent or play it safe.",
      piege:"L'attaque Monte-Carlo 4.c4! relance la lutte et peut surprendre les Noirs cherchant la nulle.",
      piege_en:"The Monte Carlo attack 4.c4! revives the fight and can surprise Black looking for a draw.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"e4",to:"d5"},{from:"e6",to:"d5"}]
    }
  },
  8: {
    classique: {
      line:"1.e4 c6 2.d4 d5 3.Cc3 dxe4 4.Cxe4 Ff5 5.Cg3 Fg6 6.h4 h6 7.Cf3 Cd7",
      fondement:"Défense des champions positionnels (Karpov, Capablanca). Permet ...d5 sans emprisonner le Fou en c8.",
      avantages:"Solidité maximale, développement fluide des pièces mineures.",
      inconvenients:"Jeu légèrement plus passif. Les Blancs gardent l'espace central.",
      blancs:"Harceler le Fou g6 par h4-h5, puis installer un Cavalier fort sur e5.",
      noirs:"Rechercher des simplifications méthodiques pour neutraliser l'espace blanc.",
      cases:"Blancs : e5. Noirs : e4, c5.",
      finale:"La Caro-Kann est réputée impénétrable en finale grâce à sa structure saine.",
      stats:"Volume : ~1.5M · Taux : Blancs 38% | Nulle 32% | Noirs 30%.",
      piege:"Le coup blanc précis 7.Ch5! punit 6...h6?? si aucune case de retraite n'est assurée.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"b1",to:"c3"},{from:"d5",to:"e4"},{from:"c3",to:"e4"},{from:"c8",to:"f5"}]
    },
    panov: {
      line:"1.e4 c6 2.d4 d5 3.exd5 cxd5 4.c4 Cf6 5.Cc3 e6",
      fondement:"Dynamite le centre par c4 au 4e coup, acceptant un pion isolé en d4 contre une attaque ouverte.",
      fondement_en:"The Panov Attack (4.c4) transposes into IQP positions. White gives up the c4 pawn to gain activity and an isolated d-pawn with dynamic potential.",
      avantages:"Jeu ouvert, actif et agressif pour les Blancs. Colonne c ouverte.",
      avantages_en:"Dynamic active play with the IQP. Rich tactical complications.",
      inconvenients:"Le pion isolé blanc en d4 devient une faiblesse en fin de partie.",
      inconvenients_en:"The isolated d-pawn can become a weakness in the endgame.",
      blancs:"Exploiter l'avance de développement pour agresser le roi noir.",
      blancs_en:"Exploit the IQP's dynamism with central breaks d5 or e5.",
      noirs:"Bloquer le pion d4 sur la case d5 pour forcer la finale technique.",
      noirs_en:"Blockade the d5 square and exchange pieces to reach a favorable endgame.",
      cases:"d5, d4.",
      cases_en:"d5 (IQP advance), d4 (the isolated pawn), c6/e6 (Black's blockading pieces).",
      finale:"Techniquement très favorable aux Noirs si les pièces majeures s'échangent.",
      finale_en:"Endgame is generally favorable for Black who blockades the IQP.",
      stats:"Ligne offensive redoutée des joueurs de Caro-Kann.",
      stats_en:"Popular at all levels for its rich middlegame play.",
      piege:"Attention aux poussées centrales brutales d5 qui ouvrent le jeu pour les Fous blancs.",
      piege_en:"White must not push d5 prematurely without adequate piece support.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"e4",to:"d5"},{from:"c6",to:"d5"},{from:"c2",to:"c4"},{from:"g8",to:"f6"}]
    },
    avance: {
      line:"1.e4 c6 2.d4 d5 3.e5 Ff5",
      fondement:"La variante d'Avance (3.e5) ferme le centre et gagne de l'espace. Contrairement à la Française, le Fou c8 de la Caro-Kann sort librement en f5 avant le verrouillage des pions.",
      fondement_en:"The Advance Variation (3.e5) closes the center and gains space. Unlike the French, the Caro-Kann's c8-Bishop develops freely to f5 before the pawns lock.",
      avantages:"Avantage d'espace durable et chaîne de pions e5-d4 solide qui contraint le jeu noir.",
      avantages_en:"Lasting space advantage and a solid e5-d4 pawn chain that cramps Black's play.",
      inconvenients:"Le pion e5 peut devenir une cible et la case d4 être minée par ...c5.",
      inconvenients_en:"The e5 pawn can become a target and the d4 square can be undermined by ...c5.",
      blancs:"Soutenir la chaîne, harceler le Fou f5 par Cf3-h4 ou g4, attaquer à l'aile roi.",
      blancs_en:"Support the chain, harass the f5-Bishop with Nf3-h4 or g4, and attack on the kingside.",
      noirs:"Miner le centre par ...c5 et ...e6, activer le Fou f5 et viser le pion d4.",
      noirs_en:"Undermine the center with ...c5 and ...e6, activate the f5-Bishop and target the d4 pawn.",
      cases:"e5 et d4 (chaîne blanche), f5 (bon Fou noir), c5 (levier noir).",
      cases_en:"e5 and d4 (White's chain), f5 (Black's good Bishop), c5 (Black's lever).",
      finale:"Finales souvent équilibrées ; la qualité du Fou de cases claires noir compense l'espace blanc.",
      finale_en:"Endgames often balanced; the quality of Black's light-squared Bishop offsets White's space.",
      stats:"ECO B12 · Système agressif très en vogue, popularisé par Short et Nakamura.",
      stats_en:"ECO B12 · An aggressive, fashionable system popularized by Short and Nakamura.",
      piege:"Après 4.Cf3 e6 5.Fe2 c5 6.Fe3 Db6, les Blancs doivent défendre d4 et b2 avec précision.",
      piege_en:"After 4.Nf3 e6 5.Be2 c5 6.Be3 Qb6, White must defend d4 and b2 precisely.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"e4",to:"e5"},{from:"c8",to:"f5"}]
    }
  },
  9: {
    alekhine: {
      line:"1.e4 Cf6 2.e5 Cd5 3.d4 d6 4.c4 Cb6 5.f4",
      fondement:"Hypermoderne : inciter les pions blancs à avancer au centre pour mieux les pilonner à distance. L'Attaque des Quatre Pions est la plus agressive.",
      fondement_en:"The Four Pawns Attack (1.e4 Nf6 2.e5 Nd5 3.d4 d6 4.c4 Nb6 5.f4) is the most aggressive answer: White builds a giant pawn center hoping to crush Black.",
      avantages:"Provoque un déséquilibre total. Fort contenu psychologique.",
      avantages_en:"Massive space advantage for White. Very attacking.",
      inconvenients:"Le centre blanc peut devenir écrasant si la rupture noire échoue.",
      inconvenients_en:"The over-extended pawn center can collapse if Black finds the right breaks.",
      blancs:"Consolider et fortifier le centre avant les assauts noirs.",
      blancs_en:"Push f4-f5 and e6 to break through, keeping the pawn mass intact.",
      noirs:"Saper d4 immédiatement par ...c5, puis miner par ...e6.",
      noirs_en:"Undermine the center with ...c5 and ...dxe5, transforming White's strength into weakness.",
      cases:"Blancs : e6. Noirs : d4.",
      cases_en:"e5 (key pawn), d4/c4/f4 (White's extended center), c5/d5 (Black's breaks).",
      finale:"Si le centre blanc explose, la structure noire compacte gagne en finale.",
      finale_en:"If White's center holds — winning. If it collapses — Black has a decisive advantage.",
      stats:"Volume : ~2M de parties. Taux : Blancs 41% | Nulle 27% | Noirs 32%.",
      stats_en:"High-risk, high-reward for White. Less popular at elite level.",
      piege:"Oublier la rupture rapide ...c5! laisse le centre blanc indestructible.",
      piege_en:"After 5.f4 dxe5 6.fxe5 Nc6 7.Be3 Bf5!, Black already has excellent counterplay.",
      moves:[{from:"e2",to:"e4"},{from:"g8",to:"f6"},{from:"e4",to:"e5"},{from:"f6",to:"d5"},{from:"d2",to:"d4"},{from:"d7",to:"d6"},{from:"c2",to:"c4"},{from:"d5",to:"b6"},{from:"f2",to:"f4"}]
    }
  },
  10: {
    exchange: {
      line:"1.d4 d5 2.c4 e6 3.Cc3 Cf6 4.cxd5 exd5 5.Fg5 Fe7 6.e3 0-0",
      fondement:"Le Gambit de la Dame n'est pas un vrai gambit. La variante de l'Échange permet de lancer l'Attaque Minoritaire thématique (b4-b5).",
      fondement_en:"The QGD Exchange Variation (5.cxd5) creates a symmetrical center. White aims for a structural endgame advantage through the minority attack on the queenside.",
      avantages:"Plan positionnel très clair, structure blanche extrêmement solide.",
      avantages_en:"Clear structural advantage. The minority attack (b4-b5-bxc6) creates lasting weaknesses.",
      inconvenients:"Taux de nulle le plus élevé de la théorie moderne (44%).",
      inconvenients_en:"Black has a solid structure and can counter with active piece play.",
      blancs:"Pousser b4-b5-bxc6 pour isoler et affaiblir un pion noir à l'aile dame.",
      blancs_en:"Execute the minority attack with b4-b5-bxc6 to create a backward c6 pawn.",
      noirs:"Se défendre via la variante Lasker ou Tartakower.",
      noirs_en:"Activate the Bishop with ...Bf5 or ...Bg4 and counter the minority attack with ...Rc8.",
      cases:"Blancs : b5. Noirs : e4.",
      cases_en:"c6 (Black's structural weakness), b5 (White's break), d5 (central pawn).",
      finale:"Finale techniquement supérieure pour les Blancs si la faiblesse c6 est créée.",
      finale_en:"Classical endgame with a slight but persistent White advantage.",
      stats:"Volume : 76M (Lichess). Taux de nulle record à 44%.",
      stats_en:"Volume: ~8M (Lichess) · Rate: White 40% | Draw 40% | Black 20%. Highest draw rate.",
      piege:"Ouvrir par ...c5 sans y être préparé stratégiquement libère les fous blancs.",
      piege_en:"Black must not play passively: the minority attack must be actively countered.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"c4",to:"d5"},{from:"e6",to:"d5"},{from:"c1",to:"g5"},{from:"f8",to:"e7"},{from:"e2",to:"e3"},{from:"e8",to:"g8"}]
    },
    slave: {
      line:"1.d4 d5 2.c4 c6 3.Cf3 Cf6 4.Cc3 dxc4",
      fondement:"Soutient d5 par 2...c6, ce qui permet de libérer le Fou de dame en f5, réglant le grand problème du QGD.",
      fondement_en:"The Slav Defense (3...c6) supports d5 with c6. Black avoids the 'problem Bishop' of the QGD and seeks active piece play.",
      avantages:"Développement libre des pièces mineures, structure centrale intacte.",
      avantages_en:"Solid structure without the QGD's passive Bishop. Excellent piece activity.",
      inconvenients:"Donne un tempo d'avance aux Blancs à l'aile dame après la capture dxc4.",
      inconvenients_en:"White retains a space advantage. Theory is very deep in the main lines.",
      blancs:"Pousser e4 ou entrer dans la Semi-Slave Botvinnik.",
      blancs_en:"Play Nc3, e3, and Bd3 to develop solidly, then execute the minority attack.",
      noirs:"Utiliser la variante Meran avec ...b5 pour un jeu actif complet.",
      noirs_en:"Develop actively with ...Bf5, ...e6, and counterplay with ...Ne4 or ...c5.",
      cases:"Blancs : e5. Noirs : c4.",
      cases_en:"d5 (Black's key pawn), c6 (structural support), f5 (Black's Bishop).",
      finale:"Les finales de la Slave classique sont légèrement favorables aux Blancs.",
      finale_en:"Rich middlegame — the Slav avoids early simplification.",
      stats:"Volume : ~20M. Ligne en très forte hausse moderne.",
      stats_en:"One of the most popular defenses against 1.d4 at all levels.",
      piege:"Dans la Botvinnik, jouer le naturel 6...Fe7?? est une gaffe.",
      piege_en:"In the Meran (5...Nbd7 6.Bd3 dxc4 7.Bxc4 b5), Black must know precise move orders.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"c7",to:"c6"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"d5",to:"c4"}]
    },
  semi_slave: {
      line:"1.d4 d5 2.c4 c6 3.Cf3 Cf6 4.Cc3 e6 5.Fg5 dxc4 6.e4 b5 7.e5 h6 8.Fh4 g5",
      fondement:"La Défense Semi-Slave combine ...c6 (Slave) et ...e6 (QGD), retardant le développement du Fou de dame. Le Système Botvinnik (5.Fg5 dxc4 6.e4 b5) est la ligne la plus explosive du répertoire 1.d4 : chaque camp attaque simultanément sans relâche.",
      fondement_en:"The Semi-Slav combines ...c6 (Slav) and ...e6 (QGD), delaying the development of the light-squared Bishop. The Botvinnik System (5.Bg5 dxc4 6.e4 b5) is the most explosive line in the 1.d4 repertoire: both sides attack simultaneously without let-up.",
      avantages:"Contre-jeu immédiat à l'aile dame, richesse tactique maximale, possibilité de déséquilibre total favorable aux Noirs.",
      avantages_en:"Immediate active queenside counterplay, maximum tactical richness, and potential for total imbalance favorable to Black.",
      inconvenients:"Le Roi noir reste longtemps au centre ; exige une théorie très précise coup par coup.",
      inconvenients_en:"Black's King remains in the center for a long time; requires very precise theoretical knowledge move by move.",
      blancs:"Lancer l'attaque centrale e4-e5, ouvrir des lignes pour exploiter le Roi noir coincé au centre.",
      blancs_en:"Launch the central attack e4-e5, open lines to exploit Black's King stuck in the center.",
      noirs:"Capturer en c4 et avancer b5 pour sécuriser le gain de matériel, puis contre-attaquer à l'aile roi.",
      noirs_en:"Capture on c4 and advance b5 to secure the material gain, then counterattack on the kingside.",
      cases:"c4 (pion sacrifié), b5 (ancre noire), e5 (coin blanc), g5 (levier noir).",
      cases_en:"c4 (sacrificed pawn), b5 (Black's anchor), e5 (White's wedge), g5 (Black's kingside lever).",
      finale:"Les finales sont rarissimes ; cette variante mène presque toujours à des attaques simultanées sans retour.",
      finale_en:"Endgames are extremely rare; this variation almost always leads to mutual all-out attacks.",
      stats:"ECO D43-D44 · Popularisé par Botvinnik et Kasparov. Voir aussi : Variante de Moscou (5.Fg5 h6 6.Fxf6) et Anti-Moscou (5.Fg5 h6 6.Fh4).",
      stats_en:"ECO D43-D44 · Popularized by Botvinnik and Kasparov. See also: Moscow Variation (5.Bg5 h6 6.Bxf6) and Anti-Moscow (5.Bg5 h6 6.Bh4).",
      piege:"Dans la Variante de Moscou (5.Fg5 h6 6.Fxf6 Dxf6), les Noirs obtiennent la paire de fous mais accusent un retard de développement dangereux qu'il faut compenser par un jeu très actif.",
      piege_en:"In the Moscow Variation (5.Bg5 h6 6.Bxf6 Qxf6), Black gets the bishop pair but suffers a dangerous development lag that must be compensated with very active play.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"c7",to:"c6"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"e7",to:"e6"},{from:"c1",to:"g5"},{from:"d5",to:"c4"},{from:"e2",to:"e4"},{from:"b7",to:"b5"},{from:"e4",to:"e5"},{from:"h7",to:"h6"},{from:"g5",to:"h4"},{from:"g7",to:"g5"}],
      game:{
           header:"L&eacute;otard, C. vs Romanov, S.A. &middot; 19e Championnat du Monde par Correspondance ICCF 2004 &middot; D&eacute;fense Semi-Slave (D45)",
           moves:"1.Cf3 d5 2.d4 Cf6 3.c4 c6 4.e3 e6 5.Cc3 Cbd7 6.Dc2 Fd6 7.g4 dxc4 8.Fxc4 e5 9.g5 Cd5 10.Fd2 exd4 11.Cxd4 0-0 12.Cxd5 cxd5 13.Fd3 g6 14.h4 Cc5 15.h5 Fg4 16.f4 Tc8 17.Fc3 De7 18.Rf2 Cxd3+ 19.Dxd3 Fb4 20.hxg6 fxg6 21.Fxb4 Dxb4 22.Rg3 Ff5 23.Db3 Dxb3 24.axb3 a6 25.Ta5 Tce8 26.Te1 Fe4 27.b4 h6 28.gxh6 Rh7 29.b5 Tf6 30.bxa6 Txa6 31.Tc5 Rxh6 32.Tc7 g5 33.f5 Tf6 34.Tf1 1-0",
           result:"1-0 &mdash; L&eacute;otard (Blancs) gagne en 34 coups &mdash; gambit Anti-Meran 7.g4 d&eacute;cisif",
           analysis:"19e Championnat du Monde par correspondance ICCF 2004. L'Anti-Meran 7.g4 c&egrave;de un pion pour ouvrir le jeu rapidement. Apr&egrave;s les &eacute;changes au centre, L&eacute;otard exploite la structure affaiblie des Noirs avec une technique irr&eacute;prochable pour emporter le point.",
           result_en:"1-0 &mdash; L&eacute;otard (White) wins in 34 moves &mdash; decisive Anti-Meran gambit 7.g4",
           analysis_en:"19th Correspondence World Championship ICCF 2004. The Anti-Meran gambit 7.g4 sacrifices a pawn to open the game quickly. After central exchanges, L&eacute;otard exploits the weakened Black structure with impeccable technique to take the full point."
          }
    },
  meran: {
      line:"1.d4 d5 2.c4 c6 3.Cf3 Cf6 4.Cc3 e6 5.e3 Cbd7 6.Fd3 dxc4 7.Fxc4 b5",
      fondement:"La variante Meran de la Semi-Slave est l'une des lignes les plus dynamiques contre 1.d4. Les Noirs jouent ...dxc4 puis ...b5 pour gagner l'aile dame et un contre-jeu actif.",
      fondement_en:"The Meran Variation of the Semi-Slav is one of the most dynamic lines against 1.d4. Black plays ...dxc4 then ...b5 to seize the queenside and active counterplay.",
      avantages:"Contre-jeu vigoureux à l'aile dame, paire de fous potentielle et grande richesse tactique.",
      avantages_en:"Vigorous queenside counterplay, the potential bishop pair, and great tactical richness.",
      inconvenients:"Le Fou c8 reste momentanément enfermé et le centre blanc peut exploser par e4.",
      inconvenients_en:"The c8-Bishop stays momentarily locked in and White's center can erupt with e4.",
      blancs:"Préparer la rupture centrale e4, ouvrir le jeu pour le développement supérieur.",
      blancs_en:"Prepare the central break e4, opening the game for superior development.",
      noirs:"Étendre l'aile dame par ...a6/...c5, développer le Fou en b7 et frapper au centre.",
      noirs_en:"Expand on the queenside with ...a6/...c5, develop the Bishop to b7 and strike in the center.",
      cases:"e4 (rupture blanche clé), c5 et b4 (leviers noirs), d4 (pion central).",
      cases_en:"e4 (White's key break), c5 and b4 (Black's levers), d4 (central pawn).",
      finale:"Finales déséquilibrées riches ; la qualité de l'activité des pièces décide souvent.",
      finale_en:"Rich, unbalanced endgames; the activity of the pieces often decides.",
      stats:"ECO D47-D49 · Champ de bataille théorique majeur depuis le tournoi de Meran 1924.",
      stats_en:"ECO D47-D49 · A major theoretical battleground since the Meran tournament of 1924.",
      piege:"Après 8.Fd3 a6 9.e4 c5 10.e5 cxd4 11.Cxb5!, les complications exigent une connaissance précise.",
      piege_en:"After 8.Bd3 a6 9.e4 c5 10.e5 cxd4 11.Nxb5!, the complications demand precise knowledge.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"c7",to:"c6"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"e7",to:"e6"},{from:"e2",to:"e3"},{from:"b8",to:"d7"},{from:"f1",to:"d3"},{from:"d5",to:"c4"},{from:"d3",to:"c4"},{from:"b7",to:"b5"}],
      game:{
           header:"Kramnik, V. vs Anand, V. &middot; Championnat du Monde Bonn 2008, Partie 5 &middot; D&eacute;fense Semi-Slave, Variante Meran Accept&eacute;e (D49)",
           moves:"1.d4 d5 2.c4 c6 3.Cf3 Cf6 4.Cc3 e6 5.e3 Cbd7 6.Fd3 dxc4 7.Fxc4 b5 8.Fd3 a6 9.e4 c5 10.e5 cxd4 11.Cxb5 axb5 12.exf6 gxf6 13.0-0 Db6 14.De2 Fb7 15.Fxb5 Tg8 16.Ff4 Fd6 17.Fg3 f5 18.Tfc1 f4 19.Fh4 Fe7 20.a4 Fxh4 21.Cxh4 Re7 22.Ta3 Tac8 23.Txc8 Txc8 24.Ta1 Dc5 25.Dg4 De5 26.Cf3 Df6 27.Te1 Tc5 28.b4 Tc3 29.Cxd4 Dxd4 30.Td1 Cf6 31.Txd4 Cxg4 32.Td7+ Rf6 33.Txb7 Tc1+ 34.Ff1 Ce3 35.fxe3 fxe3 0-1",
           result:"0-1 &mdash; Anand (Noirs) gagne en 35 coups &mdash; sacrifice g&eacute;nial 34...Ce3!",
           analysis:"Partie 5 du Championnat du Monde Bonn 2008. Dans la variante Meran accept&eacute;e, Anand cr&eacute;e un chaos tactique d&egrave;s l'ouverture. Le sacrifice 34...Ce3! offre un cavalier pour cr&eacute;er un pion e pass&eacute; imparable. Kramnik abandonne car 35.fxe3 fxe3 suivi de ...e2 est fatal.",
           result_en:"0-1 &mdash; Anand (Black) wins in 35 moves &mdash; brilliant 34...Ne3! sacrifice",
           analysis_en:"Game 5 of the 2008 World Championship in Bonn. In the accepted Meran variation, Anand creates tactical chaos from the opening. The sacrifice 34...Ne3! offers a knight to create an unstoppable passed e-pawn. Kramnik resigned as 35.fxe3 fxe3 followed by ...e2 is fatal."
          }
    },
    carlsbad: {
      line:"1.d4 d5 2.c4 e6 3.Cc3 Cf6 4.cxd5 exd5 5.Fg5",
      fondement:"La structure de Carlsbad naît de la variante d'Échange du QGD (4.cxd5 exd5). Elle est le terrain de prédilection de l'Attaque Minoritaire blanche (b4-b5) contre la majorité noire à l'aile dame.",
      fondement_en:"The Carlsbad structure arises from the QGD Exchange Variation (4.cxd5 exd5). It is the classic battleground for White's Minority Attack (b4-b5) against Black's queenside majority.",
      avantages:"Plan stratégique limpide pour les Blancs : l'attaque minoritaire crée une faiblesse durable en c6.",
      avantages_en:"A crystal-clear strategic plan for White: the minority attack creates a lasting weakness on c6.",
      inconvenients:"Les Noirs disposent d'une contre-attaque thématique à l'aile roi et d'un jeu de pièces actif.",
      inconvenients_en:"Black has a thematic kingside counter-attack and active piece play.",
      blancs:"Lancer b4-b5 pour fixer une faiblesse en c6, puis presser sur la colonne c semi-ouverte.",
      blancs_en:"Launch b4-b5 to fix a weakness on c6, then press on the semi-open c-file.",
      noirs:"Contre-attaquer à l'aile roi par ...Ce4, ...f5 et ...g5, ou organiser ...c6-c5 au bon moment.",
      noirs_en:"Counter-attack on the kingside with ...Ne4, ...f5 and ...g5, or arrange ...c6-c5 at the right time.",
      cases:"c6 (cible de l'attaque minoritaire), e4 et f5 (avant-postes noirs), colonne c.",
      cases_en:"c6 (target of the minority attack), e4 and f5 (Black's outposts), the c-file.",
      finale:"Finales très favorables aux Blancs si la faiblesse en c6 est créée et exploitée.",
      finale_en:"Endgames highly favorable for White if the c6 weakness is created and exploited.",
      stats:"ECO D35-D36 · Référence stratégique nommée d'après le tournoi de Carlsbad 1923.",
      stats_en:"ECO D35-D36 · A strategic reference named after the Carlsbad 1923 tournament.",
      piege:"Les Noirs doivent éviter ...c6 passif sans contre-jeu, sous peine de subir une attaque minoritaire mortelle.",
      piege_en:"Black must avoid passive ...c6 play without counterplay, or suffer a deadly minority attack.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"c4",to:"d5"},{from:"e6",to:"d5"},{from:"c1",to:"g5"}]
    },
  tarrasch: {
      line:"1.d4 d5 2.c4 e6 3.Cc3 c5 4.cxd5 exd5 5.Cf3 Cc6 6.g3 Cf6 7.Fg2 Fe7 8.0-0 0-0",
      fondement:"La D&eacute;fense Tarrasch (3...c5) accepte le pion isol&eacute; en d5 apr&egrave;s 4.cxd5 exd5. Concept de Siegbert Tarrasch : la mobilit&eacute; et l'activit&eacute; des pi&egrave;ces compensent la faiblesse structurelle.",
      fondement_en:"The Tarrasch Defense (3...c5) accepts an isolated d5 pawn after 4.cxd5 exd5. Tarrasch's concept: piece activity and mobility compensate for the structural weakness.",
      avantages:"Jeu de pi&egrave;ces tr&egrave;s actif, initiative centrale, espace et mobilit&eacute; sup&eacute;rieurs d&egrave;s l'ouverture.",
      avantages_en:"Very active piece play, central initiative, and superior space and mobility from the opening.",
      inconvenients:"Le pion d5 est une cible durable ; les pi&egrave;ces blanches trouvent un avant-poste id&eacute;al en d4 pour le bloquer.",
      inconvenients_en:"The d5 pawn is a lasting target; White's pieces find an ideal outpost on d4 to blockade it.",
      blancs:"Occuper d4 pour bloquer le pion isol&eacute;, puis &eacute;changer les pi&egrave;ces actives noires pour atteindre une finale technique favorable.",
      blancs_en:"Occupy d4 to blockade the isolated pawn, then exchange Black's active pieces to reach a technically favorable endgame.",
      noirs:"Activer toutes les pi&egrave;ces rapidement, exercer une pression sur les colonnes c et e, pr&eacute;parer ...d4 pour lib&eacute;rer le pion.",
      noirs_en:"Activate all pieces quickly, press on the c and e files, prepare ...d4 to free the pawn.",
      cases:"d5 (pion isol&eacute; noir), d4 (avant-poste blanc id&eacute;al), colonnes c et e (activit&eacute; noire).",
      cases_en:"d5 (Black's isolated pawn), d4 (White's ideal outpost), c and e files (Black's activity).",
      finale:"Finales favorables aux Blancs si le pion d5 est bloqu&eacute; ; les Noirs doivent chercher l'activit&eacute; en milieu de partie.",
      finale_en:"Endgames favor White if the d5 pawn is blockaded; Black must seek middlegame activity.",
      stats:"ECO D32-D34 &middot; Popularisée par Siegbert Tarrasch. Employ&eacute;e par Spassky, Kasparov et Fischer.",
      stats_en:"ECO D32-D34 &middot; Popularized by Siegbert Tarrasch. Used by Spassky, Kasparov and Fischer.",
      piege:"La Variante Su&eacute;doise (6...c4) cr&eacute;e une majorit&eacute; &agrave; l'aile dame mais est insuffisante ; le contre-jeu blanc au centre est trop fort.",
      piege_en:"The Swedish Variation (6...c4) creates a queenside majority but is insufficient; White's central counterplay is too strong.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"c7",to:"c5"},{from:"c4",to:"d5"},{from:"e6",to:"d5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"g2",to:"g3"},{from:"g8",to:"f6"},{from:"f1",to:"g2"},{from:"f8",to:"e7"},{from:"e1",to:"g1"},{from:"e8",to:"g8"}],
      game:{
           header:"P&eacute;trossian, T. vs Spassky, B. &middot; Championnat du Monde Moscou 1969, Partie 4 &middot; D&eacute;fense Tarrasch (D34)",
           moves:"1.c4 e6 2.d4 d5 3.Cc3 c5 4.cxd5 exd5 5.Cf3 Cc6 6.g3 Cf6 7.Fg2 Fe7 8.0-0 0-0 9.Fg5 cxd4 10.Cxd4 h6 11.Fe3 Fg4 12.Cb3 Fe6 13.Tc1 Te8 14.Te1 Dd7 15.Fc5 Tac8 16.Fxe7 Dxe7 17.e3 Ted8 18.De2 Fg4 19.f3 Ff5 20.Tcd1 Ce5 21.Cd4 Fg6 22.Fh3 Tc4 23.g4 Tb4 24.b3 Cc6 25.Dd2 Tb6 26.Cce2 Fh7 27.Fg2 Te8 28.Cg3 Cxd4 29.exd4 Te6 30.Txe6 Dxe6 31.Tc1 Fg6 32.Ff1 Ch7 33.Df4 Cf8 34.Tc5 Fb1 35.a4 Cg6 36.Dd2 Df6 37.Rf2 Cf4 38.a5 Fd3 39.Cf5 Dg5 40.Ce3 Dh4+ 41.Rg1 Fxf1 0-1",
           result:"0-1 &mdash; Spassky (Noirs) gagne en 41 coups &mdash; sacrifice final 41...Fxf1!",
           analysis:"Partie 4 du Championnat du Monde Moscou 1969. Spassky adopte la D&eacute;fense Tarrasch et g&egrave;re magistralement le pion isol&eacute;. Apr&egrave;s une phase strat&eacute;gique tendue, il couronne son jeu par 41...Fxf1!, capturant le fou et rendant le mat in&eacute;vitable. P&eacute;trossian abandonne.",
           result_en:"0-1 &mdash; Spassky (Black) wins in 41 moves &mdash; final sacrifice 41...Bxf1!",
           analysis_en:"Game 4 of the 1969 World Championship in Moscow. Spassky adopts the Tarrasch Defense and masterfully manages the isolated pawn. After a tense strategic phase, he crowns his play with 41...Bxf1!, capturing the bishop and making mate inevitable. Petrosian resigned."
          }
  },
  orthodox: {
      line:"1.d4 d5 2.c4 e6 3.Cc3 Cf6 4.Fg5 Fe7 5.Cf3 Cbd7 6.e3 0-0",
      fondement:"La D&eacute;fense Orthodoxe est la r&eacute;ponse classique au Gambit Dame : les Noirs d&eacute;veloppent harmonieusement toutes leurs pi&egrave;ces (...Fe7, ...0-0, ...Cbd7) sans cr&eacute;er de faiblesse structurelle. Lasker et Capablanca en ont fait la pierre angulaire de la th&eacute;orie du milieu de partie.",
      fondement_en:"The Orthodox Defense is the classical response to the Queen's Gambit: Black develops all pieces harmoniously (...Be7, ...O-O, ...Nbd7) without creating structural weaknesses. Lasker and Capablanca made it the cornerstone of middlegame theory.",
      avantages:"Structure solide et &eacute;quilibr&eacute;e, d&eacute;veloppement harmonieux, bonnes chances en finale apr&egrave;s ...dxc4 et la paire de fous.",
      avantages_en:"Solid and balanced structure, harmonious development, good endgame chances after ...dxc4 and the bishop pair.",
      inconvenients:"Jeu passif au d&eacute;but ; les Blancs maintiennent une pression constante avec la majorit&eacute; centrale et l'Attaque Minoritaire.",
      inconvenients_en:"Passive play initially; White maintains constant pressure with the central majority and the Minority Attack.",
      blancs:"Avancer e4 pour dominer le centre, ou jouer l'Attaque Minoritaire (b4-b5xc6) pour cr&eacute;er une faiblesse durable en c6.",
      blancs_en:"Advance e4 to dominate the center, or play the Minority Attack (b4-b5xc6) to create a lasting weakness on c6.",
      noirs:"Chercher la lib&eacute;ration par ...c5 ou ...dxc4, d&eacute;velopper le Fou dame via ...b6 et contre-attaquer sur les colonnes c et e.",
      noirs_en:"Seek liberation with ...c5 or ...dxc4, develop the dark-squared bishop via ...b6, and counterattack on the c and e files.",
      cases:"d5 (pivot noir), e5 (avant-poste blanc potentiel), c6 (cible de l'Attaque Minoritaire).",
      cases_en:"d5 (Black's pivot), e5 (potential White outpost), c6 (Minority Attack target).",
      finale:"Les finales favorisent souvent les Blancs si les Noirs ne lib&egrave;rent pas leur Fou dame ; la paire de fous noire est d&eacute;cisive si elle est activ&eacute;e.",
      finale_en:"Endgames often favor White if Black cannot free their dark-squared bishop; Black's bishop pair is decisive if activated.",
      stats:"ECO D60-D69 &middot; Pratiqu&eacute;e par Lasker, Capablanca, Botvinnik, Fischer et Karpov. Ligne fondatrice de la th&eacute;orie 1.d4.",
      stats_en:"ECO D60-D69 &middot; Played by Lasker, Capablanca, Botvinnik, Fischer and Karpov. The founding line of 1.d4 theory.",
      piege:"La Variante de Cambridge Springs (7...Dd7 mena&ccedil;ant ...Ca4) surprend les Blancs non pr&eacute;par&eacute;s ; apr&egrave;s 8.Db3?! Cb4 les Noirs gagnent du mat&eacute;riel.",
      piege_en:"The Cambridge Springs Variation (7...Qd7 threatening ...Na4) catches unprepared White players; after 8.Qb3?! Nb4 Black wins material.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"c1",to:"g5"},{from:"f8",to:"e7"},{from:"g1",to:"f3"},{from:"b8",to:"d7"},{from:"e2",to:"e3"},{from:"e8",to:"g8"}],
      game:{
           header:"Steinitz, W. vs Lasker, E. &middot; Championnat du Monde Montr&eacute;al 1894, Partie 16 &middot; D&eacute;fense Orthodoxe (D60)",
           moves:"1.d4 d5 2.c4 e6 3.Cc3 Cf6 4.Fg5 Fe7 5.Cf3 Cbd7 6.e3 0-0 7.c5 Ce4 8.Cxe4 dxe4 9.Fxe7 Dxe7 10.Cd2 Cf6 11.Cc4 b6 12.b4 Cd5 13.Db1 f5 14.Ce5 a5 15.Cc6 Dg5 16.h4 Df6 17.cxb6 f4 18.Dxe4 fxe3 19.f3 Fb7 20.b5 Fxc6 21.bxc6 cxb6 22.Fd3 Dh6 23.g3 Tac8 24.Tc1 Tc7 25.0-0 Td8 26.f4 Dg6 27.Dxg6 hxg6 28.Fxg6 Ce7 29.Fe4 Txd4 30.Ff3 Cf5 31.Tfe1 Rf7 32.Tb1 Cxg3 33.Txb6 Cf5 34.Tb7 Txb7 35.cxb7 Tb4 36.Tc1 Cd4 37.Rg2 Tb2+ 38.Rg3 Txb7 39.Fxb7 Ce2+ 40.Rf3 Cxc1 41.Rxe3 Cxa2 42.Rd4 Rf6 43.Rc5 Cc3 44.Rc4 Ce2 45.Rb5 Cxf4 46.Rxa5 Cg6 47.h5 Cf4 48.Ff3 Rf5 49.Rb4 e5 50.Rc3 e4 51.Fd1 e3 52.Ff3 Rg5 53.Rc2 Rh4 54.Rd1 Rg3 0-1",
           result:"0-1 &mdash; Lasker (Noirs) gagne en 54 coups",
           analysis:"Partie 16 du Championnat du Monde 1894 &agrave; Montr&eacute;al. Steinitz joue le syst&egrave;me c5 pour contenir l'aile dame noire, mais Lasker d&eacute;mantibule progressivement la structure blanche. Une magistrale finale de cavalier contre fou couronne la victoire de Lasker, fondateur de la th&eacute;orie moderne.",
           result_en:"0-1 &mdash; Lasker (Black) wins in 54 moves",
           analysis_en:"Game 16 of the 1894 World Championship in Montreal. Steinitz plays the c5 system to clamp Black's queenside, but Lasker progressively dismantles the White structure. A masterful knight vs. bishop endgame crowns Lasker's victory, establishing him as the founder of modern chess theory."
          }
  },
  albin: {
      line:"1.d4 d5 2.c4 e5 3.dxe5 d4 4.Cf3 Cc6 5.Cbd2",
      fondement:"Le Contre-Gambit Albin (2...e5) est un coup-surprise agressif : les Noirs sacrifient un pion pour obtenir un pion pass&eacute; en d4 et d&eacute;s&eacute;quilibrer imm&eacute;diatement la partie. Morozevich, le grand sp&eacute;cialiste moderne, a ressuscit&eacute; ce gambit oubli&eacute; avec ses victoires spectaculaires.",
      fondement_en:"The Albin Counter-Gambit (2...e5) is an aggressive surprise weapon: Black sacrifices a pawn to obtain a passed d4 pawn and immediately unbalance the game. Morozevich, the great modern specialist, has revived this forgotten gambit with his spectacular victories.",
      avantages:"D&eacute;s&eacute;quilibre imm&eacute;diat, pion pass&eacute; en d4 qui g&ecirc;ne les Blancs, &eacute;l&eacute;ment de surprise et jeu d'attaque actif.",
      avantages_en:"Immediate imbalance, a passed d4 pawn that hinders White, surprise element and active attacking play.",
      inconvenients:"Sacrifice de pion objectivement insuffisant ; les Blancs consolident avec un jeu pr&eacute;cis et restent un pion de mieux.",
      inconvenients_en:"Objectively insufficient pawn sacrifice; White consolidates with precise play and remains a pawn ahead.",
      blancs:"Restituer ou conserver le pion sacrifi&eacute; selon la position, d&eacute;velopper rapidement et neutraliser le pion d4 en le bloquant.",
      blancs_en:"Return or keep the sacrificed pawn depending on the position, develop quickly and neutralize the d4 pawn by blockading it.",
      noirs:"Activer toutes les pi&egrave;ces gr&acirc;ce &agrave; l'&eacute;nergie du pion d4, lancer une attaque sur le roi blanc avant que les Blancs consolident.",
      noirs_en:"Activate all pieces thanks to the energy of the d4 pawn, launch an attack on the White king before White consolidates.",
      cases:"d4 (pion pass&eacute; agressif), e5 (pion blanc avanc&eacute;), d5 (&eacute;ventuel avant-poste).",
      cases_en:"d4 (aggressive passed pawn), e5 (White's advanced pawn), d5 (potential outpost).",
      finale:"Objectivement favorables aux Blancs ; le contre-gambit vise le milieu de partie et &eacute;vite les finales.",
      finale_en:"Objectively favorable to White; the counter-gambit targets the middlegame and avoids endgames.",
      stats:"ECO D08-D09 &middot; Invent&eacute; par Adolf Albin (1893). Repopularis&eacute; par Alexandre Morozevich au XXIe si&egrave;cle.",
      stats_en:"ECO D08-D09 &middot; Invented by Adolf Albin (1893). Repopularized by Alexander Morozevich in the 21st century.",
      piege:"Le pi&egrave;ge Lasker-Albin : apr&egrave;s 5.e3? dxe3 6.Fxe3?? Fb4+! 7.Cd2 Dh4+ 8.g3 De4+ les Noirs gagnent la Tour en a1 &mdash; les Blancs ne doivent jamais jouer e3 sans pr&eacute;cautions.",
      piege_en:"The Lasker-Albin trap: after 5.e3? dxe3 6.Bxe3?? Bb4+! 7.Nd2 Qh4+ 8.g3 Qe4+ Black wins the a1 Rook &mdash; White must never play e3 carelessly.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"e7",to:"e5"},{from:"d4",to:"e5"},{from:"d5",to:"d4"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"b1",to:"d2"},{from:"g8",to:"e7"}],
      game:{
           header:"Van Wely, L. vs Morozevich, A. &middot; Tournoi Amber (Aveugle) Nice 2008, Ronde 6 &middot; Contre-Gambit Albin (D08)",
           moves:"1.d4 d5 2.c4 e5 3.dxe5 d4 4.Cf3 Cc6 5.Cbd2 Cge7 6.a3 Fe6 7.g3 Dd7 8.Fg2 Fh3 9.0-0 Fxg2 10.Rxg2 0-0-0 11.b4 Cg6 12.Fb2 h5 13.b5 Ccxe5 14.Fxd4 Cxf3 15.Cxf3 h4 16.Fxa7 Dg4 17.Dc2 hxg3 18.fxg3 b6 19.a4 Fd6 20.e3 Th3 21.Rh1 Tdh8 22.Tf2 Fxg3 23.Tg1 Dxf3+ 0-1",
           result:"0-1 &mdash; Morozevich (Noirs) gagne en 23 coups &mdash; 23...Dxf3+ fatal",
           analysis:"Tournoi Amber en aveugle, Nice 2008. Morozevich joue le Contre-Gambit Albin avec audace. Il sacrifie son pion d4, d&eacute;veloppe toutes ses pi&egrave;ces avec &eacute;nergie et construit une attaque d&eacute;vastatrice : 22...Fxg3 brise le rempart blanc, puis 23...Dxf3+ est sans r&eacute;ponse car 24.Txf3 Th1# est mat.",
           result_en:"0-1 &mdash; Morozevich (Black) wins in 23 moves &mdash; 23...Qxf3+ is fatal",
           analysis_en:"Amber Blindfold Tournament, Nice 2008. Morozevich plays the Albin Counter-Gambit boldly. He sacrifices his d4 pawn, develops all pieces with energy and builds a devastating attack: 22...Bxg3 breaks White's defensive wall, then 23...Qxf3+ is unanswerable since 24.Rxf3 Rh1# is checkmate."
          }
  }
  },
  11: {
    rubinstein: {
      line:"1.d4 Cf6 2.c4 e6 3.Cc3 Fb4 4.e3 0-0 5.Fd3 d5",
      fondement:"Cloue le Cavalier c3 pour contrôler e4 à distance sans structure rigide.",
      fondement_en:"The Rubinstein Variation (4.e3) is White's most solid response: develop naturally and prepare to capture the Bishop with Bxc3, taking the bishop pair.",
      avantages:"Structure noire irréprochable, grand contrôle positionnel de loin.",
      avantages_en:"Solid development for White. The bishop pair is a long-term asset.",
      inconvenients:"Cède la paire de fous aux Blancs après l'échange thématique.",
      inconvenients_en:"Black gets strong central control and can target White's doubled pawns.",
      blancs:"Ouvrir le centre avec e4 pour activer la paire de fous.",
      blancs_en:"Exploit the bishop pair with Bd3, Ne2, 0-0 and prepare e4.",
      noirs:"Fermer par ...d4 pour paralyser les fous blancs et assiéger c4.",
      noirs_en:"Target the doubled c-pawns and use central knights on e4 or d5.",
      cases:"Blancs : e4, d5. Noirs : c4, e4.",
      cases_en:"c3/c4 (White's structural weakness after ...Bxc3), e4 (Black's Knight outpost).",
      finale:"Paire de fous dominante si ouvert ; Cavaliers supérieurs si centre clos.",
      finale_en:"Bishop pair endgames generally favor White in open positions.",
      stats:"Volume : ~15M. Très populaire chez les Grands Maîtres.",
      stats_en:"Volume: ~5M (Lichess) · Rate: White 38% | Draw 34% | Black 28%.",
      piege:"Prendre en c3+ sans plan de blocus central actif laisse les Fous blancs détruire la finale.",
      piege_en:"After 4.e3 0-0 5.Bd3 d5 6.Nf3 c5 7.0-0 Nc6 8.a3 Bxc3 9.bxc3, the bishop pair is worth the doubled pawns.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"f8",to:"b4"},{from:"e2",to:"e3"},{from:"f1",to:"d3"},{from:"e1",to:"g1"},{from:"d7",to:"d5"}]
    },
    samisch: {
      line:"1.d4 Cf6 2.c4 e6 3.Cc3 Fb4 4.a3 Fxc3+ 5.bxc3",
      fondement:"La Sämisch force immédiatement l'échange. Les Blancs acceptent des pions doublés mais obtiennent un centre fort.",
      fondement_en:"The Sämisch (4.a3 Bxc3+ 5.bxc3) forces the bishop exchange immediately. White gets the bishop pair and aims for an aggressive central attack.",
      avantages:"Centre de pions hyper-puissant pour les Blancs, lignes d'attaque ouvertes.",
      avantages_en:"White gets the bishop pair immediately and builds a strong pawn center.",
      inconvenients:"Structure de pions définitivement dégradée à l'aile dame.",
      inconvenients_en:"The c3 pawn is a structural weakness. The bishop pair is effective only in open positions.",
      blancs:"Lancer une expansion agressive f4-f5 pour attaquer directement.",
      blancs_en:"Build with e4-f3-e5 for a powerful central kingside attack.",
      noirs:"Figer l'aile dame par ...c5 et assiéger la faiblesse c4.",
      noirs_en:"Counter immediately with ...c5 or ...d5 to undermine White's center before it becomes overwhelming.",
      cases:"c4, f5.",
      cases_en:"e4 (White's central ambition), c3 (White's weak pawn), d5 (Black's blockade).",
      finale:"Perdue pour les Blancs si l'attaque de milieu de jeu échoue.",
      finale_en:"Complex middlegame with mutual chances — White attacks kingside, Black on queenside.",
      piege:"Ouvrir le centre prématurément redonne vie à la paire de fous blancs.",
      piege_en:"After 5.bxc3 c5 6.e4 Nc6 7.f3?! d5! Black immediately strikes the center.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"f8",to:"b4"},{from:"a2",to:"a3"},{from:"b4",to:"c3"},{from:"b2",to:"c3"}]
    }
  },
  12: {
    classique: {
      line:"1.d4 Cf6 2.c4 g6 3.Cc3 Fg7 4.e4 d6 5.Cf3 0-0 6.Fe2 e5 7.0-0 Cc6 8.d5 Ce7",
      fondement:"L'ouverture des attaquants. Les Noirs cèdent le centre pour lancer une course au mat réciproque.",
      avantages:"Déséquilibre maximal, idéal pour jouer pour le gain avec les Noirs.",
      inconvenients:"Pression positionnelle blanche étouffante à l'aile dame.",
      blancs:"Percer à l'aile dame via c5 et b4 avant de subir le mat.",
      noirs:"Lancer une tempête de pions totale : ...f5, ...g5, ...f4, ...Cg6.",
      cases:"Blancs : c5, b4. Noirs : f4, g5.",
      finale:"Rarissimes : tout se règle par K.O. tactique direct en milieu de jeu.",
      stats:"Ligne historique fétiche des profils combatifs au niveau mondial.",
      piege:"Règle d'Or : rester passif à l'aile opposée après d5 conduit à un étouffement.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"g7",to:"g6"},{from:"b1",to:"c3"},{from:"f8",to:"g7"},{from:"e2",to:"e4"},{from:"d7",to:"d6"},{from:"g1",to:"f3"},{from:"e8",to:"g8"},{from:"f1",to:"e2"},{from:"e7",to:"e5"},{from:"e1",to:"g1"},{from:"b8",to:"c6"},{from:"d4",to:"d5"},{from:"c6",to:"e7"}]
    },
    samisch_kid: {
      line:"1.d4 Cf6 2.c4 g6 3.Cc3 Fg7 4.e4 d6 5.f3 0-0 6.Fe3 e5",
      fondement:"La Sämisch de l'Indienne du Roi solidifie e4 par f3 et prépare une tempête à l'aile roi.",
      fondement_en:"The Sämisch KID (5.f3) builds a colossal pawn center with e4-f3-e5 to crush Black's setup.",
      avantages:"Protège e4 solidement, supprime les contre-jeux noirs habituels.",
      avantages_en:"Massive space advantage. White's center is extremely powerful.",
      inconvenients:"Ralentit le développement des pièces mineures blanches.",
      inconvenients_en:"The f3 pawn weakens e3. Black gets counterplay with ...c5 or ...e5.",
      blancs:"Lancer g4 et h4 pour raser le rempart du roi noir.",
      blancs_en:"Play Be3, Qd2, 0-0-0 and attack directly with h4-h5 or e5-f4-f5.",
      noirs:"Frapper le centre immédiatement par ...e5 ou ...c5.",
      noirs_en:"Counterplay with ...c5 or the pawn sacrifice ...e5 5.dxe5 dxe5 to get active pieces.",
      cases:"g4, d6.",
      cases_en:"e5 (White's space wedge), f3 (structural weakness), d5 (Black's stronghold).",
      finale:"Jeu ultra-tranchant à roques opposés très complexe.",
      finale_en:"Complex tactical endgame — the side that attacks first usually wins.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"g7",to:"g6"},{from:"b1",to:"c3"},{from:"f8",to:"g7"},{from:"e2",to:"e4"},{from:"d7",to:"d6"},{from:"f2",to:"f3"},{from:"e8",to:"g8"},{from:"c1",to:"e3"},{from:"e7",to:"e5"}]
    }
  },
  13: {
    exchange_gru: {
      line:"1.d4 Cf6 2.c4 g6 3.Cc3 d5 4.cxd5 Cxd5 5.e4 Cxc3 6.bxc3 Fg7",
      fondement:"Offrir le grand centre e4-d4 aux Blancs pour mieux le dynamiter instantanément.",
      fondement_en:"The Exchange Variation (4.cxd5 Nxd5 5.e4) gives White a dominant center. Black immediately counter-attacks with ...c5 and the fianchettoed Bishop on g7.",
      avantages:"Jeu hyper-moderne, dynamique. Majorité saine à l'aile dame pour les Noirs.",
      avantages_en:"Dominant center for White. Clear and ambitious plans.",
      inconvenients:"Centre blanc massif difficile à contenir si les Noirs manquent de précision.",
      inconvenients_en:"Black's counter-attack with ...c5 and the Dragon Bishop is extremely dangerous.",
      blancs:"Stabiliser le centre e4-d4 et utiliser la colonne d ouverte.",
      blancs_en:"Expand the center with Bc4, Ne2, Be3, and prepare the f4-f5 advance.",
      noirs:"Pilonner d4 via ...c5, ...Cc6 et ...Fg4.",
      noirs_en:"Attack the center immediately with ...c5 and use the Grünfeld Bishop on g7.",
      cases:"d4, c5.",
      cases_en:"d5 (White's center), g7 (Grünfeld Bishop), d4 (critical pawn).",
      finale:"Très favorables aux Noirs s'ils détruisent le centre.",
      finale_en:"Complex endgames — White's center vs. Black's piece activity.",
      stats:"Choix numéro 1 de Kasparov et de l'élite moderne contre 1.d4.",
      stats_en:"Volume: ~4M (Lichess) · Rate: White 36% | Draw 32% | Black 32%.",
      piege:"Le piège de la capture hâtive : ...cxd4?? permet la punition Fb5+!",
      piege_en:"After 5.e4 Nxc3 6.bxc3 c5 7.Bc4 Bg7 8.Ne2 Nc6 9.Be3 0-0 10.0-0 Bg4! Black attacks d4.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"g7",to:"g6"},{from:"b1",to:"c3"},{from:"d7",to:"d5"},{from:"c4",to:"d5"},{from:"f6",to:"d5"},{from:"e2",to:"e4"},{from:"d5",to:"c3"},{from:"b2",to:"c3"},{from:"f8",to:"g7"}]
    },
    russe_gru: {
      line:"1.d4 Cf6 2.c4 g6 3.Cc3 d5 4.Cf3 Fg7 5.Db3 dxc4 6.Dxc4 0-0",
      fondement:"Le Système Russe maintient la pression centrale par la sortie précoce de la Dame.",
      fondement_en:"The Russian System (5.Qb3) directly attacks d5. After 5...dxc4 6.Qxc4 0-0, the game enters very concrete and deeply analyzed lines.",
      avantages:"Conserve l'avantage d'espace central sans céder de faiblesses.",
      avantages_en:"Direct pressure on Black's center. White avoids the main Exchange lines.",
      inconvenients:"La Dame blanche s'expose à des gains de temps.",
      inconvenients_en:"Black has good counter-play with ...c5 and ...Be6.",
      blancs:"Bâtir un centre fort et chasser les pièces légères noires.",
      blancs_en:"Develop with Nf3, e3 or e4 and keep the pressure on d5.",
      noirs:"Harceler la Dame blanche par ...Cc6 et ...Fg4.",
      noirs_en:"Counter-attack with ...c5 and use the Grünfeld Bishop on g7 against the center.",
      cases:"c4, d4.",
      cases_en:"d5 (contested pawn), c5 (Black's break), g7 (Grünfeld Bishop).",
      finale:"Jeu dynamique complexe qui exige une grande précision.",
      finale_en:"Sharp theoretical endgame — both sides have chances.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"g7",to:"g6"},{from:"b1",to:"c3"},{from:"d7",to:"d5"},{from:"g1",to:"f3"},{from:"f8",to:"g7"},{from:"d1",to:"b3"},{from:"d5",to:"c4"},{from:"b3",to:"c4"},{from:"e8",to:"g8"}]
    }
  },
  14: {
    reversed: {
      line:"1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5 5.Fg2",
      fondement:"Contrôle hypermoderne du centre par les flancs. La « Sicilienne Renversée » donne la structure sicilienne avec un tempo de plus.",
      fondement_en:"The Reversed Sicilian (1.c4 e5) is the most popular English Opening setup. White plays the Sicilian Defense with an extra tempo, leading to rich strategic battles.",
      avantages:"Grande flexibilité, évite la théorie lourde de 1.e4/1.d4.",
      avantages_en:"Rich positional play with many strategic plans. No forced pawn exchanges.",
      inconvenients:"Moins direct. Permet aux Noirs d'égaliser.",
      inconvenients_en:"The extra tempo is not always decisive. Black has comfortable equality.",
      blancs:"Fianchetter le Fou en g2 pour rayonner sur la grande diagonale.",
      blancs_en:"Control d5 with Nc3, g3, Bg2 and prepare the central advance d4.",
      noirs:"Pousser ...d5 pour contester le centre de face.",
      noirs_en:"Counter with ...Nf6, ...d5 and equalize with active piece play.",
      cases:"Blancs : d5, e4. Noirs : d4, c4.",
      cases_en:"d5 (key square for both sides), e5 (Black's center), c4 (White's pawn).",
      finale:"Le Fou g2 est souvent la pièce hégémonique de la finale.",
      finale_en:"Balanced strategic endgame — White's fianchettoed Bishop is the key piece.",
      stats:"Volume : 65M de parties · Fréquence : ~10% toutes catégories.",
      stats_en:"Volume: ~7M (Lichess) · Rate: White 37% | Draw 34% | Black 29%.",
      piege:"L'erreur positionnelle est de copier la symétrie trop longtemps.",
      piege_en:"After 2.Nc3 Nf6 3.g3 d5 4.cxd5 Nxd5 5.Bg2 Nb6?! 6.d4! White breaks the center.",
      moves:[{from:"c2",to:"c4"},{from:"e7",to:"e5"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"g2",to:"g3"},{from:"d7",to:"d5"},{from:"c4",to:"d5"},{from:"f6",to:"d5"},{from:"f1",to:"g2"}]
    },
    symmetric: {
      line:"1.c4 c5 2.Cc3 Cc6 3.g3 g6 4.Fg2 Fg7",
      fondement:"La Symétrique (1...c5) copie la stratégie blanche de contrôle des flancs pour neutraliser l'espace.",
      fondement_en:"The Symmetrical English (1.c4 c5) leads to rich strategic battles around d5. Both sides try to control the key central squares.",
      avantages:"Position hyper-solide et symétrique difficile à forcer pour les Blancs.",
      avantages_en:"Flexible and rich in strategic plans. White avoids Black's prepared openings.",
      inconvenients:"Jeu plus plat et égalitaire. Les Blancs conservent l'avantage du trait.",
      inconvenients_en:"Black achieves comfortable equality with symmetrical play.",
      blancs:"Briser la symétrie par d4 au moment opportun.",
      blancs_en:"Break the symmetry with d4 or g3 and exploit White's extra tempo.",
      noirs:"Maintenir le miroir structurel sans commettre d'erreur tactique.",
      noirs_en:"Maintain symmetry as long as possible or transpose to a known structure.",
      cases:"c4, c5.",
      cases_en:"d5/d4 (key central squares), c4/c5 (the flanking pawns).",
      finale:"Endgame égal et technique centré sur le contrôle de la colonne ouverte c.",
      finale_en:"Strategic endgame — often arises through piece exchanges in the center.",
      moves:[{from:"c2",to:"c4"},{from:"c7",to:"c5"},{from:"b1",to:"c3"},{from:"b8",to:"c6"},{from:"g2",to:"g3"},{from:"g7",to:"g6"},{from:"f1",to:"g2"},{from:"f8",to:"g7"}]
    }
  }
,
  15: {
    scotch: {
      line:"1.e4 e5 2.Cf3 Cc6 3.d4 exd4 4.Cxd4 Fc5 5.Cb3 Fb6",
      fondement:"La Partie Écossaise ouvre le jeu immédiatement au 3e coup. Kasparov l'a popularisée comme alternative à la Ruy Lopez pour éviter la Défense de Berlin.",
      fondement_en:"The Scotch Game opens the game immediately on move 3. Kasparov popularized it as an alternative to the Ruy Lopez to avoid the Berlin Defense.",
      avantages:"Positions ouvertes et tactiques. Développement rapide. Évite la théorie berlino-espagnole.",
      avantages_en:"Open tactical positions. Rapid development. Avoids Berlin-Spanish theory.",
      inconvenients:"Noir peut égaliser avec la variante classique 4...Bc5. Moins d'avantage durable qu'en Ruy Lopez.",
      inconvenients_en:"Black can equalize with the classical 4...Bc5. Less lasting advantage than in Ruy Lopez.",
      blancs:"Pousser f4 pour attaquer l'aile Roi. Garder les pièces actives et viser une initiative rapide.",
      blancs_en:"Push f4 to attack the kingside. Keep pieces active and aim for a rapid initiative.",
      noirs:"Pression sur d4 et f2. Préparer ...d5 pour reprendre le contrôle du centre.",
      noirs_en:"Pressure on d4 and f2. Prepare ...d5 to regain central control.",
      cases:"Blancs : d5, f5. Noirs : d4, f2.",
      cases_en:"White: d5, f5. Black: d4, f2.",
      finale:"Finales équilibrées si Noir neutralise l'initiative. Blancs légèrement favorisés si avantage spatial conservé.",
      finale_en:"Balanced endgames if Black neutralizes the initiative. White slightly favored if space advantage is maintained.",
      stats:"Popularisée par Kasparov dans les années 1990. ~12M parties sur Lichess.",
      stats_en:"Popularized by Kasparov in the 1990s. ~12M games on Lichess.",
      piege:"Le piège 4...Cf6?! 5.Cxc6 bxc6 6.e5 laisse les Noirs dans une position difficile.",
      piege_en:"The trap 4...Nf6?! 5.Nxc6 bxc6 6.e5 leaves Black in a difficult position.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"d2",to:"d4"},{from:"e5",to:"d4"},{from:"f3",to:"d4"},{from:"f8",to:"c5"},{from:"d4",to:"b3"},{from:"c5",to:"b6"}]
    }
  },
  16: {
    ponziani: {
      line:"1.e4 e5 2.Cf3 Cc6 3.c3 Cf6 4.d4 Cxe4 5.d5",
      fondement:"L'Ouverture Ponziani (3.c3) prépare d4 comme dans l'Italienne et la Ruy Lopez. Arme surprise : peu de théorie connue des adversaires.",
      fondement_en:"The Ponziani Opening (3.c3) prepares d4 like the Italian and Ruy Lopez. Surprise weapon: few opponents know the theory.",
      avantages:"Arme surprise efficace. Prépare d4 tranquillement. Qa4 crée des pièges immédiats.",
      avantages_en:"Effective surprise weapon. Quietly prepares d4. Qa4 creates immediate traps.",
      inconvenients:"Considéré trop lent par les maîtres modernes. Noir répond idéalement avec 3...d5.",
      inconvenients_en:"Considered too slow by modern masters. Black best responds with 3...d5.",
      blancs:"Jouer d4 pour ouvrir le jeu, utiliser Qa4 pour exploiter les faiblesses f7 et b7.",
      blancs_en:"Play d4 to open the game, use Qa4 to exploit weaknesses on f7 and b7.",
      noirs:"3...d5! contre-attaque immédiatement le centre. Activer les pièces rapidement.",
      noirs_en:"3...d5! immediately counterattacks the center. Activate pieces quickly.",
      cases:"f7 (cible blanche), d4 (rupture centrale).",
      cases_en:"f7 (White's target), d4 (central break).",
      finale:"Légèrement favorable aux Noirs en finale si l'initiative blanche est neutralisée.",
      finale_en:"Slightly favorable for Black in the endgame if White's initiative is neutralized.",
      stats:"Rare au niveau master. Populaire en ligne pour son effet de surprise.",
      stats_en:"Rare at master level. Popular online for its surprise effect.",
      piege:"Après 3...Nf6 4.d4 Nxe4? 5.d5 est dévastateur.",
      piege_en:"After 3...Nf6 4.d4 Nxe4? 5.d5 is devastating.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"c2",to:"c3"},{from:"g8",to:"f6"},{from:"d2",to:"d4"},{from:"f6",to:"e4"},{from:"d4",to:"d5"}]
    }
  },
  17: {
    quatre_cavaliers: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Cc3 Cf6 4.Fb5 Cd4",
      fondement:"La Partie des Quatre Cavaliers est l'une des ouvertures les plus naturelles : les quatre cavaliers se développent vers le centre. La variante espagnole (4.Bb5) est la plus sérieuse.",
      fondement_en:"The Four Knights Game is one of the most natural openings: all four knights develop toward the center. The Spanish variation (4.Bb5) is the most serious.",
      avantages:"Développement naturel et sain. Nombreuses transpositions. Convient aux joueurs qui aiment les structures solides.",
      avantages_en:"Natural and sound development. Many transpositions. Suitable for players who like solid structures.",
      inconvenients:"Réputation d'ouverture égale : difficile d'obtenir un avantage avec les Blancs. Très théorique en variante espagnole.",
      inconvenients_en:"Reputation of an equal opening: hard for White to gain an advantage. Very theoretical in the Spanish variation.",
      blancs:"Exploiter la variante Rubinstein (4.Fb5) pour déséquilibrer avec une pression durable.",
      blancs_en:"Exploit the Rubinstein variation (4.Bb5) to create imbalances with lasting pressure.",
      noirs:"Contre-jeu tactique avec la manœuvre Nd4 ou défense solide avec ...Be7.",
      noirs_en:"Tactical counterplay with the Nd4 maneuver or solid defense with ...Be7.",
      cases:"e4, e5 (tension centrale), d4 (contre-manœuvre noire).",
      cases_en:"e4, e5 (central tension), d4 (Black's counter-maneuver).",
      finale:"Finales équilibrées avec une légère tendance à la nulle.",
      finale_en:"Balanced endgames with a slight tendency toward draws.",
      stats:"Fréquente aux niveaux intermédiaires. Moins populaire au top niveau.",
      stats_en:"Frequent at intermediate levels. Less popular at the top level.",
      piege:"La Partie des Quatre Cavaliers Scotch (4.d4) peut surprendre les Noirs non préparés.",
      piege_en:"The Scotch Four Knights (4.d4) can surprise unprepared Black players.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"f1",to:"b5"},{from:"f6",to:"d4"}]
    }
  },
  18: {
    elephant: {
      line:"1.e4 e5 2.Cf3 d5 3.exd5 e4 4.De2 Cf6 5.d3",
      fondement:"Le Gambit Éléphant (2...d5) est un contre-gambit agressif des Noirs. Le pion e4 avancé étouffe le développement blanc si Blanc n'est pas préparé.",
      fondement_en:"The Elephant Gambit (2...d5) is an aggressive counter-gambit by Black. The advanced e4 pawn stifles White's development if White is unprepared.",
      avantages:"Contre-gambit agressif. Pion e4 avancé étouffant. Effet de surprise garanti.",
      avantages_en:"Aggressive counter-gambit. Stifling advanced e4 pawn. Guaranteed surprise effect.",
      inconvenients:"Objectivement non solide avec un jeu précis de Blanc. Le pion e4 peut être sévèrement attaqué.",
      inconvenients_en:"Objectively unsound with precise White play. The e4 pawn can be severely attacked.",
      blancs:"Exploiter le pion e4 noir sur-avancé avec d3 ou Qe2 puis dxe4.",
      blancs_en:"Exploit Black's over-advanced e4 pawn with d3 or Qe2 then dxe4.",
      noirs:"Maintenir le pion e4 comme coin et développer rapidement pour compenser.",
      noirs_en:"Maintain the e4 pawn as a wedge and develop quickly to compensate.",
      cases:"e4 (pion d'étouffement), f2 (point d'impact noir).",
      cases_en:"e4 (stifling pawn), f2 (Black's impact point).",
      finale:"Finale avantageuse pour les Blancs avec l'extra-pion récupéré.",
      finale_en:"Endgame favorable for White with the recovered extra pawn.",
      stats:"Très rare au niveau master. Populaire en partie rapide pour l'effet de surprise.",
      stats_en:"Very rare at master level. Popular in rapid games for the surprise effect.",
      piege:"2...d5?? 3.exd5 e4 4.De2! est la meilleure réfutation : 4...Cf6 5.d3 exd3 6.Dxe5+ est dévastateur.",
      piege_en:"2...d5?? 3.exd5 e4 4.Qe2! is the best refutation: 4...Nf6 5.d3 exd3 6.Qxe5+ is devastating.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"d7",to:"d5"},{from:"e4",to:"d5"},{from:"e5",to:"e4"},{from:"d1",to:"e2"},{from:"g8",to:"f6"},{from:"d2",to:"d3"}]
    }
  },
  19: {
    letton: {
      line:"1.e4 e5 2.Cf3 f5 3.Cxe5 Df6 4.d4 d6 5.Cc4",
      fondement:"Le Gambit Letton (2...f5?!) est le contre-gambit le plus agressif possible. Les Noirs affaiblissent leur aile Roi en échange d'une initiative explosive.",
      fondement_en:"The Latvian Gambit (2...f5?!) is the most aggressive possible counter-gambit. Black weakens their kingside in exchange for an explosive initiative.",
      avantages:"Très agressif et idéal en blitz. Nombreux pièges, effet de surprise maximal.",
      avantages_en:"Very aggressive and ideal in blitz. Many traps, maximum surprise effect.",
      inconvenients:"Objectivement non solide : la diagonale du Roi est affaiblie. Blanc peut réfuter avec un jeu précis.",
      inconvenients_en:"Objectively unsound: the King's diagonal is weakened. White can refute with precise play.",
      blancs:"3.Nxe5! est la meilleure réponse, puis exploiter l'aile Roi affaiblie.",
      blancs_en:"3.Nxe5! is the best response, then exploit the weakened kingside.",
      noirs:"Créer des complications tactiques complexes avec ...Qg6 et ...f4 si Blanc joue passivement.",
      noirs_en:"Create complex tactical complications with ...Qg6 and ...f4 if White plays passively.",
      cases:"f2 (cible noire), g6 (case de la Dame noire active).",
      cases_en:"f2 (Black's target), g6 (active Black Queen square).",
      finale:"Finale perdue pour les Noirs en principe avec un pion de moins.",
      finale_en:"Endgame lost for Black in principle with one pawn down.",
      stats:"Rare mais prisé des tacticiens en blitz. Idéal contre les joueurs non préparés.",
      stats_en:"Rare but prized by tacticians in blitz. Ideal against unprepared players.",
      piege:"La ligne 3.Cxe5 Df6 4.d4 d6 5.Cc4 fxe4 6.Cc3 Dg6 7.f3! réfute sévèrement le gambit.",
      piege_en:"The line 3.Nxe5 Qf6 4.d4 d6 5.Nc4 fxe4 6.Nc3 Qg6 7.f3! severely refutes the gambit.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"f7",to:"f5"},{from:"f3",to:"e5"},{from:"d8",to:"f6"},{from:"d2",to:"d4"},{from:"d7",to:"d6"},{from:"e5",to:"c4"}]
    }
  },
  20: {
    centre: {
      line:"1.e4 e5 2.d4 exd4 3.Dxd4 Cc6 4.De3 Cf6 5.Cc3",
      fondement:"La Partie du Centre (2.d4) ouvre le jeu immédiatement. La Dame en d4 est exposée après 3...Nc6, perdant un tempo. Rarement jouée au niveau master.",
      fondement_en:"The Center Game (2.d4) opens the game immediately. The Queen on d4 is exposed after 3...Nc6, losing a tempo. Rarely played at master level.",
      avantages:"Position ouverte favorable à l'attaque. Roque dame + tempête de pions sur l'aile Roi.",
      avantages_en:"Open position favorable for attack. Queenside castling + pawn storm on the kingside.",
      inconvenients:"Dame exposée en d4 → perd un tempo après 3...Nc6. Rarement joué au niveau master.",
      inconvenients_en:"Queen exposed on d4 → loses a tempo after 3...Nc6. Rarely played at master level.",
      blancs:"Roquer de la Dame, lancer une attaque sur l'aile Roi avec la tempête de pions.",
      blancs_en:"Castle queenside, launch a kingside attack with a pawn storm.",
      noirs:"Développer rapidement, exploiter la Dame mal placée avec ...Nc6, puis ...Bb4.",
      noirs_en:"Develop quickly, exploit the misplaced Queen with ...Nc6, then ...Bb4.",
      cases:"d4 (Dame exposée), f2 (cible noire).",
      cases_en:"d4 (exposed Queen), f2 (Black's target).",
      finale:"Noirs favorisés en finale avec le meilleur développement.",
      finale_en:"Black favored in endgame with better development.",
      stats:"Historiquement intéressante mais objectivement insuffisante. Très rare au niveau master.",
      stats_en:"Historically interesting but objectively insufficient. Very rare at master level.",
      piege:"Après 3.Dxd4 Cc6 4.De3, les Noirs jouent 4...Cf6 5...Fb4 et l'initiative change de camp.",
      piege_en:"After 3.Qxd4 Nc6 4.Qe3, Black plays 4...Nf6 5...Bb4 and the initiative switches sides.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"d2",to:"d4"},{from:"e5",to:"d4"},{from:"d1",to:"d4"},{from:"b8",to:"c6"},{from:"d4",to:"e3"},{from:"g8",to:"f6"},{from:"b1",to:"c3"}]
    }
  },
  21: {
    danois: {
      line:"1.e4 e5 2.d4 exd4 3.c3 dxc3 4.Fc4 cxb2 5.Fxb2 d6",
      fondement:"Le Gambit Danois (3.c3) sacrifie deux pions pour obtenir deux Fous actifs sur les grandes diagonales et un développement foudroyant. Excellent en blitz.",
      fondement_en:"The Danish Gambit (3.c3) sacrifices two pawns for two active Bishops on the long diagonals and lightning development. Excellent in blitz.",
      avantages:"Développement foudroyant avec deux Fous actifs. Idées simples et faciles à jouer. Excellent en blitz.",
      avantages_en:"Lightning development with two active Bishops. Simple ideas, easy to play. Excellent in blitz.",
      inconvenients:"Scores faibles au niveau master. Noir peut décliner et obtenir une position saine.",
      inconvenients_en:"Poor scores at master level. Black can decline and obtain a sound position.",
      blancs:"Exploiter les deux Fous actifs sur les grandes diagonales. Cibler f7 immédiatement.",
      blancs_en:"Exploit the two active Bishops on the long diagonals. Target f7 immediately.",
      noirs:"Décliner avec 3...d5 ou restituer du matériel pour se développer normalement.",
      noirs_en:"Decline with 3...d5 or return material to develop normally.",
      cases:"f7 (cible blanche), d4 (pion sacrifié).",
      cases_en:"f7 (White's target), d4 (sacrificed pawn).",
      finale:"Finale objectivement perdue pour les Blancs avec deux pions de moins.",
      finale_en:"Endgame objectively lost for White with two pawns down.",
      stats:"Très populaire aux niveaux amateurs et en blitz. Rare au niveau master.",
      stats_en:"Very popular at amateur levels and in blitz. Rare at master level.",
      piege:"Le Gambit Danois Refusé : 3...d5! évite toutes les complications et donne l'avantage aux Noirs.",
      piege_en:"The Declined Danish: 3...d5! avoids all complications and gives Black the advantage.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"d2",to:"d4"},{from:"e5",to:"d4"},{from:"c2",to:"c3"},{from:"d4",to:"c3"},{from:"f1",to:"c4"},{from:"c3",to:"b2"},{from:"c1",to:"b2"},{from:"d7",to:"d6"}]
    }
  },
  22: {
    viennoise: {
      line:"1.e4 e5 2.Cc3 Cf6 3.f4 d5 4.fxe5 Cxe4",
      fondement:"La Partie Viennoise (2.Cc3) est très flexible. Elle peut basculer vers le tactique (3.f4 : Gambit Viennois) ou le positionnel (3.g3 : Fianchetto Viennois).",
      fondement_en:"The Vienna Game (2.Nc3) is very flexible. It can shift toward tactical (3.f4: Vienna Gambit) or positional (3.g3: Vienna Fianchetto).",
      avantages:"Très flexible. Évite certaines théories complexes de 2.Cf3. Le Gambit Viennois crée des positions très tranchantes.",
      avantages_en:"Very flexible. Avoids some complex 2.Nf3 theories. The Vienna Gambit creates very sharp positions.",
      inconvenients:"Le Cavalier en c3 bloque le pion c, réduisant les options centrales.",
      inconvenients_en:"The Knight on c3 blocks the c-pawn, reducing central options.",
      blancs:"Jouer f4 pour le Gambit Viennois ou g3 pour le Fianchetto Viennois selon le style.",
      blancs_en:"Play f4 for the Vienna Gambit or g3 for the Vienna Fianchetto depending on style.",
      noirs:"Contre-attaque avec ...Nf6, exploiter l'avance f4 affaiblissant l'aile Roi blanche.",
      noirs_en:"Counter-attack with ...Nf6, exploit the f4 advance weakening White's kingside.",
      cases:"f2, f7 (cases cibles mutuelles).",
      cases_en:"f2, f7 (mutual target squares).",
      finale:"Positions dynamiques et asymétriques dans toutes les variantes.",
      finale_en:"Dynamic and asymmetric positions in all variations.",
      stats:"Popularité croissante au niveau amateur. Utilisée parfois par les GMs en tournois rapides.",
      stats_en:"Growing popularity at amateur level. Sometimes used by GMs in rapid tournaments.",
      piege:"4.Dh5! contre 3...d5 peut surprendre les Noirs avec la menace Cg5.",
      piege_en:"4.Qh5! against 3...d5 can surprise Black with the Ng5 threat.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"f2",to:"f4"},{from:"d7",to:"d5"},{from:"f4",to:"e5"},{from:"f6",to:"e4"}]
    }
  },
  23: {
    fou: {
      line:"1.e4 e5 2.Fc4 Cf6 3.d3 Cc6 4.Cf3 Fe7",
      fondement:"L'Ouverture du Fou (2.Fc4) mène souvent vers l'Italienne ou le Gambit du Roi par transposition. Le Gambit Urusov (3.d4) est une variante surprenante.",
      fondement_en:"The Bishop's Opening (2.Bc4) often leads to the Italian or King's Gambit by transposition. The Urusov Gambit (3.d4) is a surprising variation.",
      avantages:"Mène vers l'Italienne par transposition. Surprise possible avec le Gambit Urusov.",
      avantages_en:"Leads to the Italian by transposition. Surprise possible with the Urusov Gambit.",
      inconvenients:"Moins précis que 2.Cf3 selon la théorie moderne.",
      inconvenients_en:"Less precise than 2.Nf3 according to modern theory.",
      blancs:"Transposer vers l'Italienne avec Cf3 ou lancer le Gambit Urusov avec 3.d4.",
      blancs_en:"Transpose to the Italian with Nf3 or launch the Urusov Gambit with 3.d4.",
      noirs:"Développement solide avec ...Nf6, ...Nc6, ...Be7 ou contre-attaque avec ...d5.",
      noirs_en:"Solid development with ...Nf6, ...Nc6, ...Be7 or counter-attack with ...d5.",
      cases:"f7 (cible du Fou c4), e5 (pion central à défendre).",
      cases_en:"f7 (Bishop c4's target), e5 (central pawn to defend).",
      finale:"Finales équilibrées, similaires à l'Italienne.",
      finale_en:"Balanced endgames, similar to the Italian.",
      stats:"Modérément populaire aux niveaux amateurs comme alternative à l'Italienne.",
      stats_en:"Moderately popular at amateur levels as an alternative to the Italian.",
      piege:"Le Gambit Urusov : 3.d4 exd4 4.Cf3 Cc6 5.0-0 — développement maximal pour un pion.",
      piege_en:"The Urusov Gambit: 3.d4 exd4 4.Nf3 Nc6 5.0-0 — maximum development for one pawn.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"f1",to:"c4"},{from:"g8",to:"f6"},{from:"d2",to:"d3"},{from:"b8",to:"c6"},{from:"g1",to:"f3"},{from:"f8",to:"e7"}]
    }
  },
  24: {
    nimzowitsch_def: {
      line:"1.e4 Cc6 2.d4 d5 3.e5 f6",
      fondement:"La Défense Nimzowitsch (1...Nc6) est très rare et surprenante. Le Cavalier en c6 contrôle d4 et e5 à distance, dans la tradition hypermoderne.",
      fondement_en:"The Nimzowitsch Defense (1...Nc6) is very rare and surprising. The Knight on c6 controls d4 and e5 from a distance, in the hypermodern tradition.",
      avantages:"Très rare → surprise garantie. Haute possibilité de transposition vers d'autres ouvertures.",
      avantages_en:"Very rare → guaranteed surprise. High possibility of transposition to other openings.",
      inconvenients:"Le Cavalier en c6 peut bloquer la riposte ...c5. Position légèrement passive.",
      inconvenients_en:"The Knight on c6 can block the ...c5 counter. Slightly passive position.",
      blancs:"Jouer d4 pour un grand centre et tirer parti de la position peu orthodoxe du Cavalier noir.",
      blancs_en:"Play d4 for a large center and exploit the unorthodox Knight placement.",
      noirs:"Préparer ...e5 ou ...d5 pour contester le centre. Flexibilité maximale.",
      noirs_en:"Prepare ...e5 or ...d5 to contest the center. Maximum flexibility.",
      cases:"d4 (centre blanc), e5 (case de la Défense Nimzowitsch).",
      cases_en:"d4 (White's center), e5 (key Nimzowitsch Defense square).",
      finale:"Finales dynamiques où le jeu positionnel profond est essentiel.",
      finale_en:"Dynamic endgames where deep positional play is essential.",
      stats:"Très rare à tous les niveaux. Essentiellement un outil de surprise.",
      stats_en:"Very rare at all levels. Essentially a surprise weapon.",
      piege:"Le piège 1...Cc6 2.d4 d5 3.Cc3 dxe4?? 4.d5 est dévastateur pour les Noirs.",
      piege_en:"The trap 1...Nc6 2.d4 d5 3.Nc3 dxe4?? 4.d5 is devastating for Black.",
      moves:[{from:"e2",to:"e4"},{from:"b8",to:"c6"},{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"e4",to:"e5"},{from:"f7",to:"f6"}]
    }
  },
  25: {
    moderne_def: {
      line:"1.e4 g6 2.d4 Fg7 3.Cc3 d6 4.Cf3 c6 5.Fe2 Cd7",
      fondement:"La Défense Moderne (1...g6) pousse l'hypermodernisme à l'extrême : Noir ne conteste pas le centre immédiatement et développe son Fou en g7 pour le contre-attaquer de loin.",
      fondement_en:"The Modern Defense (1...g6) pushes hypermodernism to the extreme: Black doesn't contest the center immediately and develops the Bishop to g7 to counter-attack from afar.",
      avantages:"Peut se jouer contre pratiquement n'importe quelle ouverture blanche. Hypermodernisme poussé à l'extrême.",
      avantages_en:"Can be played against almost any White opening. Hypermodernism pushed to the extreme.",
      inconvenients:"Positions complexes, peu intuitives pour les débutants. Blanc a beaucoup d'options agressives.",
      inconvenients_en:"Complex positions, not intuitive for beginners. White has many aggressive options.",
      blancs:"Occuper le centre avec e4+d4, empêcher ...e5 avec f4 ou Cf3-e5.",
      blancs_en:"Occupy the center with e4+d4, prevent ...e5 with f4 or Nf3-e5.",
      noirs:"Contester le centre avec ...e5 ou ...c5 quand le moment est venu. Pression du Fou g7.",
      noirs_en:"Contest the center with ...e5 or ...c5 when the time comes. Pressure from the g7 Bishop.",
      cases:"d4, e5 (centre blanc), g7 (Fou hypermoderne clé).",
      cases_en:"d4, e5 (White's center), g7 (key hypermodern Bishop).",
      finale:"Finales actives pour les Noirs grâce au Fou g7 dominant les cases blanches.",
      finale_en:"Active endgames for Black thanks to the g7 Bishop dominating the white squares.",
      stats:"Populaire à tous les niveaux. Alternative à la Pirc dans de nombreuses situations.",
      stats_en:"Popular at all levels. Alternative to the Pirc in many situations.",
      piege:"Le système 4.f4 (Attaque des Quatre Pions) est très agressif contre la Moderne.",
      piege_en:"The 4.f4 system (Four Pawns Attack) is very aggressive against the Modern.",
      moves:[{from:"e2",to:"e4"},{from:"g7",to:"g6"},{from:"d2",to:"d4"},{from:"f8",to:"g7"},{from:"b1",to:"c3"},{from:"d7",to:"d6"},{from:"g1",to:"f3"},{from:"c7",to:"c6"},{from:"f1",to:"e2"},{from:"b8",to:"d7"}]
    }
  },
  26: {
    owen: {
      line:"1.e4 b6 2.d4 Fb7 3.Fd3 Cf6 4.Cf3 d5",
      fondement:"La Défense Owen (1...b6) prépare le fianchetto du Fou sombre en b7. La Défense Hippopotame est une variante ultra-passive où les Noirs développent tous leurs pions à la 2e et 3e rangée.",
      fondement_en:"Owen's Defense (1...b6) prepares the queenside Bishop fianchetto to b7. The Hippopotamus Defense is an ultra-passive variant where Black develops all pawns to the 2nd and 3rd ranks.",
      avantages:"Très rare → surprise garantie. L'Hippo frustre Blanc par l'absence de cibles.",
      avantages_en:"Very rare → guaranteed surprise. The Hippo frustrates White by the absence of targets.",
      inconvenients:"Position très passive, difficile à jouer pour des joueurs inexpérimentés.",
      inconvenients_en:"Very passive position, difficult to play for inexperienced players.",
      blancs:"Occuper le centre, créer des cibles et jouer agressivement avant que les Noirs se développent.",
      blancs_en:"Occupy the center, create targets and play aggressively before Black develops.",
      noirs:"Attendre que Blanc sur-étende et contre-attaquer au moment idéal.",
      noirs_en:"Wait for White to over-extend and counter-attack at the ideal moment.",
      cases:"d4, e5 (centre blanc à créer), b7 (Fou actif des Noirs).",
      cases_en:"d4, e5 (White's center to build), b7 (Black's active Bishop).",
      finale:"Finales où les Fous en fianchetto des Noirs deviennent très actifs.",
      finale_en:"Endgames where Black's fianchettoed Bishops become very active.",
      stats:"Très rare à tous les niveaux. Utilisée comme surprise par des GMs occasionnellement.",
      stats_en:"Very rare at all levels. Occasionally used as a surprise by GMs.",
      piege:"L'Hippo peut être puni par une expansion centrale agressive avec d4-e5 avant que les Noirs complètent leur setup.",
      piege_en:"The Hippo can be punished by aggressive central expansion with d4-e5 before Black completes their setup.",
      moves:[{from:"e2",to:"e4"},{from:"b7",to:"b6"},{from:"d2",to:"d4"},{from:"c8",to:"b7"},{from:"f1",to:"d3"},{from:"g8",to:"f6"},{from:"g1",to:"f3"},{from:"d7",to:"d5"}]
    }
  },
  27: {
    hollandaise: {
      line:"1.d4 f5 2.g3 Cf6 3.Fg2 e6 4.Cf3 Fe7 5.0-0 0-0",
      fondement:"La Défense Hollandaise (1...f5) est une réponse combative à 1.d4. Les Noirs créent un contre-jeu agressif sur l'aile Roi dès le départ.",
      fondement_en:"The Dutch Defense (1...f5) is a combative response to 1.d4. Black creates aggressive counterplay on the kingside from the start.",
      avantages:"Contre-jeu agressif sur l'aile Roi. Trois variantes très différentes : Leningrad, Stonewall, Classique.",
      avantages_en:"Aggressive kingside counterplay. Three very different variations: Leningrad, Stonewall, Classical.",
      inconvenients:"L'aile Roi de Noir est affaiblie par f5. Le Gambit Staunton (2.e4!?) peut être dangereux.",
      inconvenients_en:"Black's kingside is weakened by f5. The Staunton Gambit (2.e4!?) can be dangerous.",
      blancs:"Le Fianchetto (g3+Bg2) est solide. La variante Leningrad nécessite une réponse précise.",
      blancs_en:"The Fianchetto (g3+Bg2) is solid. The Leningrad variation requires a precise response.",
      noirs:"Préparer ...Ne4 pour attaquer l'aile Roi (Stonewall) ou ...d6 puis ...e5 (Leningrad).",
      noirs_en:"Prepare ...Ne4 to attack the kingside (Stonewall) or ...d6 then ...e5 (Leningrad).",
      cases:"e4 (case forte des Noirs), h5 (colonne d'attaque noire).",
      cases_en:"e4 (Black's strong square), h5 (Black's attack file).",
      finale:"Finales dynamiques où la structure de pions noire est active malgré l'affaiblissement f5.",
      finale_en:"Dynamic endgames where Black's pawn structure is active despite the f5 weakness.",
      stats:"Populaire à tous les niveaux. Favorite des joueurs combatifs contre 1.d4.",
      stats_en:"Popular at all levels. Favorite of combative players against 1.d4.",
      piege:"Le Gambit Staunton (2.e4!) doit être connu par les joueurs de Hollandaise.",
      piege_en:"The Staunton Gambit (2.e4!) must be known by Dutch Defense players.",
      moves:[{from:"d2",to:"d4"},{from:"f7",to:"f5"},{from:"g2",to:"g3"},{from:"g8",to:"f6"},{from:"f1",to:"g2"},{from:"e7",to:"e6"},{from:"g1",to:"f3"},{from:"f8",to:"e7"},{from:"e1",to:"g1"},{from:"e8",to:"g8"}]
    }
  },
  28: {
    englund: {
      line:"1.d4 e5 2.dxe5 Cc6 3.Cf3 De7 4.Ff4 Db4+",
      fondement:"Le Gambit Englund (1...e5?!) tente de déséquilibrer immédiatement la position contre 1.d4. Contient de nombreux pièges dont le célèbre Piège Rosen.",
      fondement_en:"The Englund Gambit (1...e5?!) attempts to immediately unbalance the position against 1.d4. Contains many traps including the famous Rosen Trap.",
      avantages:"Pièges nombreux, excellent à l'amateur. Positions déséquilibrées et créatives.",
      avantages_en:"Many traps, excellent for amateurs. Unbalanced and creative positions.",
      inconvenients:"Objectivement douteux : Blanc devrait obtenir l'avantage avec un jeu précis.",
      inconvenients_en:"Objectively dubious: White should gain the advantage with precise play.",
      blancs:"Garder le pion, développer normalement et maintenir l'avantage matériel.",
      blancs_en:"Keep the pawn, develop normally and maintain the material advantage.",
      noirs:"Créer des complications tactiques pour récupérer le pion et obtenir du contre-jeu.",
      noirs_en:"Create tactical complications to recover the pawn and obtain counterplay.",
      cases:"e5 (pion gambité), f2 (cible noire).",
      cases_en:"e5 (gambit pawn), f2 (Black's target).",
      finale:"Finale perdue pour les Noirs avec un pion de moins sans compensation.",
      finale_en:"Endgame lost for Black with one pawn down without compensation.",
      stats:"Très rare au niveau master. Populaire en ligne pour les pièges qu'il génère.",
      stats_en:"Very rare at master level. Popular online for the traps it generates.",
      piege:"Le Piège Rosen : 1.d4 e5 2.dxe5 Cc6 3.Cf3 De7 4.Ff4 Db4+ 5.Fd2 Dxb2 6.Fc3 Fb4 7.Dd2 Fxc3 8.Dxc3 Dc1# — mat en 8 coups!",
      piege_en:"The Rosen Trap: 1.d4 e5 2.dxe5 Nc6 3.Nf3 Qe7 4.Bf4 Qb4+ 5.Bd2 Qxb2 6.Bc3 Bb4 7.Qd2 Bxc3 8.Qxc3 Qc1# — checkmate in 8 moves!",
      moves:[{from:"d2",to:"d4"},{from:"e7",to:"e5"},{from:"d4",to:"e5"},{from:"b8",to:"c6"},{from:"g1",to:"f3"},{from:"d8",to:"e7"},{from:"c1",to:"f4"},{from:"e7",to:"b4"}]
    }
  },
  29: {
    nimzo_indienne: {
      line:"1.d4 Cf6 2.c4 e6 3.Cc3 Fb4 4.e3 0-0 5.Fd3 d5",
      fondement:"La Défense Nimzo-Indienne (3...Fb4) épingle le Cavalier c3 et empêche e4 immédiat. La réponse la plus populaire contre 3.Nc3 aux niveaux élevés.",
      fondement_en:"The Nimzo-Indian Defense (3...Bb4) pins the c3 Knight and prevents immediate e4. The most popular response against 3.Nc3 at high levels.",
      avantages:"La réponse la plus populaire contre 3.Cc3. Épingle le Cavalier. Jeu flexible.",
      avantages_en:"The most popular response against 3.Nc3. Pins the Knight. Flexible play.",
      inconvenients:"Très difficile à atteindre : Blanc peut éviter avec 3.Cf3. Théorie immense.",
      inconvenients_en:"Very hard to reach: White can avoid with 3.Nf3. Immense theory.",
      blancs:"Récupérer l'avantage des deux Fous après l'échange Bxc3+. Pousser e4.",
      blancs_en:"Recover the bishop pair advantage after Bxc3+. Push e4.",
      noirs:"Doubler les pions blancs (Bxc3), contrôler les cases blanches, fianchetto du Fou clair.",
      noirs_en:"Double White's pawns (Bxc3), control white squares, fianchetto of the light-squared Bishop.",
      cases:"c3 (pion doublé blanc), d4 (pion blanc clé), e4 (poussée blanche à empêcher).",
      cases_en:"c3 (White's doubled pawn), d4 (White's key pawn), e4 (White's advance to prevent).",
      finale:"Fous actifs des Noirs si la position s'ouvre. Pions doublés blancs en c fragiles en finale.",
      finale_en:"Active Black Bishops if the position opens. White's doubled c-pawns fragile in endgame.",
      stats:"Parmi les ouvertures les plus jouées au monde. Utilisée par tous les champions.",
      stats_en:"Among the most played openings in the world. Used by all champions.",
      piege:"La variante Sämisch (4.a3 Bxc3 5.bxc3) est une des réponses les plus agressives de Blanc.",
      piege_en:"The Sämisch variation (4.a3 Bxc3 5.bxc3) is one of White's most aggressive responses.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"f8",to:"b4"},{from:"e2",to:"e3"},{from:"e8",to:"g8"},{from:"f1",to:"d3"},{from:"d7",to:"d5"}]
    }
  },
  30: {
    qid: {
      line:"1.d4 Cf6 2.c4 e6 3.Cf3 b6 4.g3 Fb7 5.Fg2 Fe7",
      fondement:"La Défense Indienne Dame (3...b6) contrôle les cases blanches du centre avec le Fou en b7. Solide et flexible, favorite de Petrosian.",
      fondement_en:"The Queen's Indian Defense (3...b6) controls the white center squares with the Bishop on b7. Solid and flexible, Petrosian's favorite.",
      avantages:"Contrôle des cases blanches du centre. Solide et bien théorisé.",
      avantages_en:"Control of the white center squares. Solid and well-theorized.",
      inconvenients:"Difficile à atteindre (Blanc peut jouer 4.Cc3). Moins actif que la Nimzo.",
      inconvenients_en:"Hard to reach (White can play 4.Nc3). Less active than the Nimzo.",
      blancs:"Fianchetto avec g3+Bg2 pour contester le Fou b7. Préparer c4-d4-e4.",
      blancs_en:"Fianchetto with g3+Bg2 to contest the b7 Bishop. Prepare c4-d4-e4.",
      noirs:"Développement harmonieux des pièces. Surveiller les cases blanches du centre.",
      noirs_en:"Harmonious piece development. Monitor the white center squares.",
      cases:"e4 (poussée blanche à surveiller), b7 (Fou actif des Noirs).",
      cases_en:"e4 (White's advance to watch), b7 (Black's active Bishop).",
      finale:"Finales équilibrées où les deux Fous en fianchetto s'affrontent.",
      finale_en:"Balanced endgames where the two fianchettoed Bishops face each other.",
      stats:"Très populaire au niveau master. Utilisée par Kasparov, Petrosian, Tal.",
      stats_en:"Very popular at master level. Used by Kasparov, Petrosian, Tal.",
      piege:"L'Attaque de Petrosian (4.a3) empêche ...Bb4 et oriente la partie vers des structures propres.",
      piege_en:"The Petrosian Attack (4.a3) prevents ...Bb4 and steers the game toward clean structures.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"g1",to:"f3"},{from:"b7",to:"b6"},{from:"g2",to:"g3"},{from:"c8",to:"b7"},{from:"f1",to:"g2"},{from:"f8",to:"e7"}]
    }
  },
  31: {
    bogo: {
      line:"1.d4 Cf6 2.c4 e6 3.Cf3 Fb4+ 4.Fd2 Fxd2+ 5.Dxd2 b6",
      fondement:"La Défense Bogo-Indienne (3...Fb4+) perturbe le développement blanc et donne aux Noirs une position solide similaire à la Nimzo-Indienne mais sans 3.Nc3.",
      fondement_en:"The Bogo-Indian Defense (3...Bb4+) disrupts White's development and gives Black a solid position similar to the Nimzo-Indian but without 3.Nc3.",
      avantages:"Perturbation du développement blanc. Idées similaires à la NID et QID.",
      avantages_en:"Disruption of White's development. Similar ideas to the NID and QID.",
      inconvenients:"Moins d'action que la Nimzo-Indienne. Blanc peut neutraliser avec 4.Cbd2.",
      inconvenients_en:"Less action than the Nimzo-Indian. White can neutralize with 4.Nbd2.",
      blancs:"4.Cbd2 ou 4.Fd2 sont les réponses principales. Maintenir la pression centrale.",
      blancs_en:"4.Nbd2 or 4.Bd2 are the main responses. Maintain central pressure.",
      noirs:"Après l'échange de Fous, compenser par la qualité de la structure de pions.",
      noirs_en:"After the Bishop exchange, compensate with pawn structure quality.",
      cases:"d4, e4 (cases blanches centrales sous pression noire).",
      cases_en:"d4, e4 (white central squares under Black's pressure).",
      finale:"Finales solides pour les deux camps avec peu de déséquilibres.",
      finale_en:"Solid endgames for both sides with few imbalances.",
      stats:"Moins populaire que la NID mais utilisée comme alternative flexible.",
      stats_en:"Less popular than the NID but used as a flexible alternative.",
      piege:"Après 4.Fd2, si Noir joue passivement, Blanc développe un avantage d'espace durable.",
      piege_en:"After 4.Bd2, if Black plays passively, White develops a lasting space advantage.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"g1",to:"f3"},{from:"f8",to:"b4"},{from:"c1",to:"d2"},{from:"b4",to:"d2"},{from:"d1",to:"d2"},{from:"b7",to:"b6"}]
    }
  },
  32: {
    catalane: {
      line:"1.d4 Cf6 2.c4 e6 3.g3 d5 4.Fg2 dxc4 5.Cf3 a6",
      fondement:"L'Ouverture Catalane combine le Gambit Dame et le Fianchetto blanc. Le Fou en g2 exerce une pression de longue distance sur les cases blanches et le centre.",
      fondement_en:"The Catalan Opening combines the Queen's Gambit and the White fianchetto. The Bishop on g2 exerts long-range pressure on the white squares and the center.",
      avantages:"Solide pour Blanc. Le Fou en g2 exerce une pression durable. Nombreuses transpositions.",
      avantages_en:"Solid for White. The g2 Bishop exerts lasting pressure. Many transpositions.",
      inconvenients:"Blanc peut involontairement gambit-ifier le pion c4 dans la variante ouverte.",
      inconvenients_en:"White can involuntarily gambit the c4 pawn in the open variation.",
      blancs:"Maintenir le Fou actif en g2. Exploiter la pression sur la diagonale a1-h8. Récupérer le pion c4.",
      blancs_en:"Keep the g2 Bishop active. Exploit pressure on the a1-h8 diagonal. Recover the c4 pawn.",
      noirs:"Dans la Catalane Ouverte, conserver le pion c4 avec ...a6 et ...b5.",
      noirs_en:"In the Open Catalan, keep the c4 pawn with ...a6 and ...b5.",
      cases:"d5, c4 (pion gambité), g2 (Fou clé de la Catalane).",
      cases_en:"d5, c4 (gambit pawn), g2 (key Catalan Bishop).",
      finale:"Finale souvent favorable aux Blancs grâce à la pression du Fou g2.",
      finale_en:"Endgame often favorable for White thanks to the g2 Bishop pressure.",
      stats:"Très populaire au plus haut niveau. Utilisée par Kramnik, Karpov, Carlsen.",
      stats_en:"Very popular at the highest level. Used by Kramnik, Karpov, Carlsen.",
      piege:"Dans la Catalane Fermée, Blanc doit récupérer le pion c4 au bon moment pour ne pas rester sans compensation.",
      piege_en:"In the Closed Catalan, White must recover the c4 pawn at the right moment to avoid remaining without compensation.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"e7",to:"e6"},{from:"g2",to:"g3"},{from:"d7",to:"d5"},{from:"f1",to:"g2"},{from:"d5",to:"c4"},{from:"g1",to:"f3"},{from:"a7",to:"a6"}]
    }
  },
  33: {
    benoni: {
      line:"1.d4 Cf6 2.c4 c5 3.d5 e6 4.Cc3 exd5 5.cxd5 d6",
      fondement:"La Défense Benoni (2...c5) crée un déséquilibre immédiat. Les Noirs obtiennent un jeu dynamique sur l'aile Roi, tandis que Blanc possède un avantage spatial central.",
      fondement_en:"The Benoni Defense (2...c5) creates immediate imbalance. Black obtains dynamic kingside play while White has a central space advantage.",
      avantages:"Jeu dynamique et déséquilibré. Plans clairs : ...e5 pour verrouiller ou ...f5 sur l'aile Roi.",
      avantages_en:"Dynamic and unbalanced play. Clear plans: ...e5 to lock or ...f5 on the kingside.",
      inconvenients:"Les variantes diffèrent tellement qu'elles constituent des ouvertures distinctes. Rare aux niveaux inférieurs.",
      inconvenients_en:"The variations differ so much they constitute separate openings. Rare at lower levels.",
      blancs:"Exploiter l'avantage spatial central. Pousser e4-e5 pour étouffer les pièces noires.",
      blancs_en:"Exploit the central space advantage. Push e4-e5 to stifle Black's pieces.",
      noirs:"Contre-attaquer sur l'aile Roi avec ...f5 ou verrouiller le centre avec ...e5.",
      noirs_en:"Counter-attack on the kingside with ...f5 or lock the center with ...e5.",
      cases:"d5 (pion passé blanc), e5/f5 (ruptures noires).",
      cases_en:"d5 (White's passed pawn), e5/f5 (Black's breaks).",
      finale:"Finales complexes où le pion passé blanc d5 est souvent décisif.",
      finale_en:"Complex endgames where White's passed d5 pawn is often decisive.",
      stats:"Populaire aux niveaux élevés. Utilisée par Fischer, Tal, Kasparov.",
      stats_en:"Popular at high levels. Used by Fischer, Tal, Kasparov.",
      piege:"La variante Taimanov (4.e4) est l'une des plus agressives pour les Blancs.",
      piege_en:"The Taimanov variation (4.e4) is one of the most aggressive for White.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"c7",to:"c5"},{from:"d4",to:"d5"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"e6",to:"d5"},{from:"c4",to:"d5"},{from:"d7",to:"d6"}]
    },
    moderne: {
      line:"1.d4 Cf6 2.c4 c5 3.d5 e6 4.Cc3 exd5 5.cxd5 d6 6.e4 g6 7.Cf3 Fg7 8.Fe2 0-0",
      fondement:"Le Benoni Moderne (A60-A79) est la version la plus ambitieuse du Benoni. Les Noirs construisent un fianchetto en g7 et organisent un contre-jeu dynamique sur l'aile Roi, tandis que les Blancs d&eacute;veloppent une pression centrale massive avec le pion d5.",
      fondement_en:"The Modern Benoni (A60-A79) is the most ambitious version of the Benoni. Black builds a fianchetto on g7 and organizes dynamic kingside counterplay, while White develops massive central pressure with the d5 pawn.",
      avantages:"Contre-jeu riche sur les deux ailes ; le Fou g7 appuie toutes les ruptures (...e5, ...b5, ...f5). D&eacute;s&eacute;quilibre garanti.",
      avantages_en:"Rich counterplay on both flanks; the g7 bishop supports all breaks (...e5, ...b5, ...f5). Imbalance guaranteed.",
      inconvenients:"Les Blancs disposent d'un avantage spatial durable ; la structure noire est r&eacute;guli&egrave;rement sous pression et exige une pr&eacute;cision th&eacute;orique &eacute;lev&eacute;e.",
      inconvenients_en:"White has a lasting space advantage; Black's structure is regularly under pressure and demands high theoretical precision.",
      blancs:"Exploiter la majorit&eacute; centrale, avancer e5 pour &eacute;touffer les pi&egrave;ces noires, et occuper d5 comme avant-poste id&eacute;al.",
      blancs_en:"Exploit the central majority, advance e5 to stifle Black's pieces, and occupy d5 as an ideal outpost.",
      noirs:"Activer le Fou g7, pr&eacute;parer ...b5 ou ...e5 comme rupteur central et cr&eacute;er un contre-jeu sur les colonnes c et e.",
      noirs_en:"Activate the g7 bishop, prepare ...b5 or ...e5 as central breakers, and create counterplay on the c and e files.",
      cases:"d5 (avant-poste blanc), e5/b5 (ruptures noires), colonne c (activit&eacute; des Tours noires).",
      cases_en:"d5 (White's outpost), e5/b5 (Black's breaks), c-file (Black Rook activity).",
      finale:"Souvent favorables aux Blancs gr&acirc;ce au pion pass&eacute; d5 ; les Noirs doivent trouver un contre-jeu actif avant la finale.",
      finale_en:"Often favorable to White thanks to the passed d5 pawn; Black must find active counterplay before the endgame.",
      stats:"ECO A60-A79 &middot; Utilis&eacute; par Fischer, Tal, Kasparov, Geller. L'une des d&eacute;fenses les plus complexes face &agrave; 1.d4.",
      stats_en:"ECO A60-A79 &middot; Used by Fischer, Tal, Kasparov, Geller. One of the most complex defenses against 1.d4.",
      piege:"L'Attaque des Quatre Pions (5.f4) &eacute;tait jadis r&eacute;put&eacute;e d&eacute;cisive ; Tal et Fischer ont montr&eacute; que les Noirs obtiennent un contre-jeu suffisant apr&egrave;s 5...Fg7 6.Cf3 0-0.",
      piege_en:"The Four Pawns Attack (5.f4) was once considered decisive; Tal and Fischer showed Black gets sufficient counterplay after 5...Bg7 6.Nf3 O-O.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"c7",to:"c5"},{from:"d4",to:"d5"},{from:"e7",to:"e6"},{from:"b1",to:"c3"},{from:"e6",to:"d5"},{from:"c4",to:"d5"},{from:"d7",to:"d6"},{from:"e2",to:"e4"},{from:"g7",to:"g6"},{from:"g1",to:"f3"},{from:"f8",to:"g7"},{from:"f1",to:"e2"},{from:"e8",to:"g8"}],
      game:{
           header:"Spassky, B. vs Fischer, R.J. &middot; Match revanche Sveti Stefan/Belgrade 1992, Partie 16 &middot; Benoni (A56)",
           moves:"1.d4 Cf6 2.c4 c5 3.d5 d6 4.Cc3 g6 5.e4 Fg7 6.Fg5 h6 7.Fh4 g5 8.Fg3 Da5 9.Fd3 Cxe4 10.Fxe4 Fxc3+ 11.bxc3 Dxc3+ 12.Rf1 f5 13.Tc1 Df6 14.h4 g4 15.Fd3 f4 16.Ce2 fxg3 17.Cxg3 Tf8 18.Tc2 Cd7 19.Dxg4 Ce5 20.De4 Fd7 21.Rg1 0-0-0 22.Ff1 Tg8 23.f4 Cxc4 24.Ch5 Df7 25.Dxc4 Dxh5 26.Tb2 Tg3 27.Fe2 Df7 28.Ff3 Tdg8 29.Db3 b6 30.De3 Df6 31.Te2 Fb5 32.Td2 e5 33.dxe6 Fc6 34.Rf1 Fxf3 0-1",
           result:"0-1 &mdash; Fischer (Noirs) gagne en 34 coups &mdash; 34...Fxf3! d&eacute;cisif",
           analysis:"Partie 16 du match revanche Fischer–Spassky, Sveti Stefan 1992. Fischer ressuscite le Benoni fianchetto et saisit un pion d&egrave;s la phase d'ouverture par 9...Cxe4! puis 10...Fxc3+. La pression continue et le mat&eacute;riel gagn&eacute; m&egrave;nent &agrave; 34...Fxf3 sans r&eacute;ponse. Spassky abandonne.",
           result_en:"0-1 &mdash; Fischer (Black) wins in 34 moves &mdash; 34...Bxf3! decisive",
           analysis_en:"Game 16 of the Fischer–Spassky rematch, Sveti Stefan 1992. Fischer revives the Benoni fianchetto and grabs a pawn in the opening with 9...Nxe4! then 10...Bxc3+. Continuous pressure and material gain lead to 34...Bxf3 with no answer. Spassky resigned."
          }
    }
  },
  34: {
    budapest: {
      line:"1.d4 Cf6 2.c4 e5 3.dxe5 Cg4 4.Cf3 Fc5 5.e3 Cc6",
      fondement:"Le Gambit Budapest (2...e5!?) sacrifie un pion pour obtenir une initiative immédiate et un contre-jeu actif. Excellent outil surprise.",
      fondement_en:"The Budapest Gambit (2...e5!?) sacrifices a pawn for immediate initiative and active counterplay. Excellent surprise weapon.",
      avantages:"Excellent outil surprise. Idées claires : récupérer le pion avec ...Nc6, ...Ng4, ...Qe7.",
      avantages_en:"Excellent surprise weapon. Clear ideas: recover the pawn with ...Nc6, ...Ng4, ...Qe7.",
      inconvenients:"Objectivement douteux : Blanc maintient son pion avec un jeu précis.",
      inconvenients_en:"Objectively dubious: White keeps the pawn with precise play.",
      blancs:"Garder le pion e5, développer normalement, réfuter le gambit par e4.",
      blancs_en:"Keep the e5 pawn, develop normally, refute the gambit with e4.",
      noirs:"Utiliser l'initiative pour créer des complications et récupérer le pion.",
      noirs_en:"Use the initiative to create complications and recover the pawn.",
      cases:"e5 (pion gambité), f2 (cible noire), d4 (case active du Cavalier).",
      cases_en:"e5 (gambit pawn), f2 (Black's target), d4 (active Knight square).",
      finale:"Finale objectivement perdue pour les Noirs si Blanc garde le pion.",
      finale_en:"Endgame objectively lost for Black if White keeps the pawn.",
      stats:"Populaire en ligne et en blitz. Très rare au niveau master.",
      stats_en:"Popular online and in blitz. Very rare at master level.",
      piege:"Après 3.dxe5 Cg4 4.e4?! Cxe5 est le contre-jeu que les Noirs cherchent.",
      piege_en:"After 3.dxe5 Ng4 4.e4?! Nxe5 is the counterplay Black is looking for.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c2",to:"c4"},{from:"e7",to:"e5"},{from:"d4",to:"e5"},{from:"f6",to:"g4"},{from:"g1",to:"f3"},{from:"f8",to:"c5"},{from:"e2",to:"e3"},{from:"b8",to:"c6"}]
    }
  },
  35: {
    trompowsky: {
      line:"1.d4 Cf6 2.Fg5 Ce4 3.Ff4 d5 4.e3 Cf6",
      fondement:"L'Attaque Trompowsky (2.Fg5) contourne toute la théorie indienne standard. Le Fou en g5 épingle le Cavalier f6 et crée des positions déséquilibrées dès le 2e coup.",
      fondement_en:"The Trompowsky Attack (2.Bg5) bypasses all standard Indian theory. The Bishop on g5 pins the f6 Knight and creates unbalanced positions from move 2.",
      avantages:"Contourne toute la théorie indienne standard. Positions déséquilibrées avec des structures asymétriques.",
      avantages_en:"Bypasses all standard Indian theory. Unbalanced positions with asymmetric structures.",
      inconvenients:"Noir peut simplifier rapidement avec 2...Ne4. Moins de pression directe qu'avec d4+c4+Nc3.",
      inconvenients_en:"Black can simplify quickly with 2...Ne4. Less direct pressure than with d4+c4+Nc3.",
      blancs:"Maintenir le déséquilibre, exploiter les cases noires affaiblies si Noir joue passivement.",
      blancs_en:"Maintain the imbalance, exploit weakened dark squares if Black plays passively.",
      noirs:"Simplifier avec 2...Ne4 ou jouer 2...e6 pour un développement solide.",
      noirs_en:"Simplify with 2...Ne4 or play 2...e6 for solid development.",
      cases:"g5 (Fou actif), f6 (case clouée), d5 (tension centrale).",
      cases_en:"g5 (active Bishop), f6 (pinned square), d5 (central tension).",
      finale:"Finales dynamiques où les structures asymétriques favorisent les joueurs tactiques.",
      finale_en:"Dynamic endgames where asymmetric structures favor tactical players.",
      stats:"Populaire au niveau GM comme alternative à 2.c4. Adams, Hodgson, Torre l'ont utilisée.",
      stats_en:"Popular at GM level as an alternative to 2.c4. Adams, Hodgson, Torre have used it.",
      piege:"2...Ne4 est la réponse la plus directe et logique, forçant la simplification.",
      piege_en:"2...Ne4 is the most direct and logical response, forcing simplification.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"c1",to:"g5"},{from:"f6",to:"e4"},{from:"g5",to:"f4"},{from:"d7",to:"d5"},{from:"e2",to:"e3"},{from:"e4",to:"f6"}]
    }
  },
  36: {
    london: {
      line:"1.d4 d5 2.Cf3 Cf6 3.Ff4 e6 4.e3 Fd6 5.Fg3 0-0",
      fondement:"Le Système Londonien (Nf3+Bf4+e3) est un système solide et populaire à tous les niveaux. Les Blancs jouent les mêmes coups quelle que soit la réponse noire.",
      fondement_en:"The London System (Nf3+Bf4+e3) is a solid and popular system at all levels. White plays the same moves regardless of Black's response.",
      avantages:"Extrêmement populaire. Système : mêmes coups contre n'importe quelle réponse noire. Excellent pour débutants.",
      avantages_en:"Extremely popular. System: same moves against any Black response. Excellent for beginners.",
      inconvenients:"Peu de pression immédiate sur Noir. Un adversaire préparé peut égaliser facilement.",
      inconvenients_en:"Little immediate pressure on Black. A prepared opponent can equalize easily.",
      blancs:"Setup : d4, Cf3, Ff4, e3, Fd3. Puis Ce5 ou rupture e4.",
      blancs_en:"Setup: d4, Nf3, Bf4, e3, Bd3. Then Ne5 or e4 break.",
      noirs:"Contester avec ...e5 (forçant les pièces blanches) ou ...c5-c4+...b5.",
      noirs_en:"Contest with ...e5 (forcing White's pieces) or ...c5-c4+...b5.",
      cases:"e5 (case forte de Blanc), h7 (cible du Fou d3), d4 (pion central blanc).",
      cases_en:"e5 (White's strong square), h7 (Bd3's target), d4 (White's central pawn).",
      finale:"Finales solides pour Blanc avec une structure saine.",
      finale_en:"Solid endgames for White with a sound structure.",
      stats:"Explosion de popularité récente. Utilisé par Magnus Carlsen et de nombreux GMs.",
      stats_en:"Recent explosion in popularity. Used by Magnus Carlsen and many GMs.",
      piege:"Le sacrifice grec Fxh7+! est naturel et fréquent dans ce setup lorsque Ce5 est en place.",
      piege_en:"The Greek Gift Bxh7+! is natural and frequent in this setup when Ne5 is in place.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"c1",to:"f4"},{from:"e7",to:"e6"},{from:"e2",to:"e3"},{from:"f8",to:"d6"},{from:"f4",to:"g3"},{from:"e8",to:"g8"}]
    }
  },
  37: {
    jobava: {
      line:"1.d4 d5 2.Cc3 Cf6 3.Ff4 e6 4.e3 Fd6 5.Cb5",
      fondement:"Le Système Jobava-London est une variante agressive du Système Londonien. Le Cavalier en c3 (au lieu de f3 habituel) crée des menaces immédiates avec Nb5-Nc7+.",
      fondement_en:"The Jobava-London System is an aggressive variant of the London System. The Knight on c3 (instead of the usual f3) creates immediate threats with Nb5-Nc7+.",
      avantages:"Développement du Cavalier en c3 crée des menaces immédiates. Nombreux pièges contre Noir non préparé.",
      avantages_en:"Knight development on c3 creates immediate threats. Many traps against unprepared Black.",
      inconvenients:"Le Cavalier en c3 bloque le pion c (violation d'un principe classique).",
      inconvenients_en:"The Knight on c3 blocks the c-pawn (violation of a classical principle).",
      blancs:"Menacer Nb5→Nc7+ immédiatement. Exploiter le développement rapide.",
      blancs_en:"Threaten Nb5→Nc7+ immediately. Exploit the rapid development.",
      noirs:"Prévenir Nb5 avec ...a6, puis développer solidement.",
      noirs_en:"Prevent Nb5 with ...a6, then develop solidly.",
      cases:"c7 (menace du Cavalier blanc), d5 (tension centrale).",
      cases_en:"c7 (White's Knight threat), d5 (central tension).",
      finale:"Finales actives pour Blanc grâce à l'initiative accumulée dans l'ouverture.",
      finale_en:"Active endgames for White thanks to the initiative accumulated in the opening.",
      stats:"Popularisée par le GM géorgien Baadur Jobava. En vogue au niveau master.",
      stats_en:"Popularized by Georgian GM Baadur Jobava. Fashionable at master level.",
      piege:"Si Noir ne prévient pas Cb5, le coup Cb5! gagne du matériel ou force de sérieuses faiblesses.",
      piege_en:"If Black doesn't prevent Nb5, the move Nb5! wins material or forces serious weaknesses.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"c1",to:"f4"},{from:"e7",to:"e6"},{from:"e2",to:"e3"},{from:"f8",to:"d6"},{from:"c3",to:"b5"}]
    }
  },
  38: {
    colle: {
      line:"1.d4 d5 2.Cf3 Cf6 3.e3 e6 4.Fd3 c5 5.c3 Cc6",
      fondement:"Le Système Colle (d4+Nf3+e3) est le système le plus systématique. Les Blancs jouent le même setup contre n'importe quelle réponse noire. Le sacrifice grec Bxh7+ est naturel.",
      fondement_en:"The Colle System (d4+Nf3+e3) is the most systematic system. White plays the same setup against any Black response. The Greek Gift Bxh7+ is natural.",
      avantages:"Le plus systématique de tous les systèmes. Sacrifice grec Bxh7+ très naturel dans ce setup.",
      avantages_en:"The most systematic of all systems. Greek Gift Bxh7+ very natural in this setup.",
      inconvenients:"Très peu de pression sur Noir dans l'ouverture. Facilement neutralisé.",
      inconvenients_en:"Very little pressure on Black in the opening. Easily neutralized.",
      blancs:"Setup Colle classique : d4, Cf3, e3, Fd3, Cbd2, puis 0-0 et e4.",
      blancs_en:"Classic Colle setup: d4, Nf3, e3, Bd3, Nbd2, then 0-0 and e4.",
      noirs:"Contester avec ...c5 dès le départ. Développement solide avec ...Nc6, ...e6.",
      noirs_en:"Contest with ...c5 from the start. Solid development with ...Nc6, ...e6.",
      cases:"h7 (cible du sacrifice grec), e5 (case forte blanche).",
      cases_en:"h7 (Greek Gift target), e5 (White's strong square).",
      finale:"Finales solides pour les deux camps. Légèrement favorables pour Noir si l'attaque est repoussée.",
      finale_en:"Solid endgames for both sides. Slightly favorable for Black if the attack is repelled.",
      stats:"Très populaire au niveau club et débutant. Excellente valeur pédagogique.",
      stats_en:"Very popular at club and beginner level. Excellent pedagogical value.",
      piege:"Le sacrifice grec Bxh7+ survient naturellement dans beaucoup de parties du Système Colle.",
      piege_en:"The Greek Gift Bxh7+ arises naturally in many Colle System games.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"e2",to:"e3"},{from:"e7",to:"e6"},{from:"f1",to:"d3"},{from:"c7",to:"c5"},{from:"c2",to:"c3"},{from:"b8",to:"c6"}]
    }
  },
  39: {
    colle_zukertort: {
      line:"1.d4 d5 2.Cf3 Cf6 3.e3 e6 4.Fd3 c5 5.b3 Cc6 6.0-0",
      fondement:"Le Système Colle-Zukertort est une variante du Colle avec le Fou en b2. Le Fou en b2 exerce une pression sur la grande diagonale a1-h8.",
      fondement_en:"The Colle-Zukertort System is a Colle variant with the Bishop on b2. The b2 Bishop exerts pressure on the long a1-h8 diagonal.",
      avantages:"Le Fou b2 exerce une pression durable. Nombreuses possibilités d'attaque sur l'aile Roi.",
      avantages_en:"The b2 Bishop exerts lasting pressure. Many kingside attack possibilities.",
      inconvenients:"Moins systématique que le Colle classique. Nécessite plus de flexibilité.",
      inconvenients_en:"Less systematic than the classic Colle. Requires more flexibility.",
      blancs:"Fianchetto du Fou en b2, puis rupture e4 pour ouvrir la grande diagonale.",
      blancs_en:"Fianchetto the Bishop to b2, then e4 break to open the long diagonal.",
      noirs:"...c5 précoce pour contester d4. Développement solide avec ...Nc6, ...Be7.",
      noirs_en:"Early ...c5 to contest d4. Solid development with ...Nc6, ...Be7.",
      cases:"a1-h8 (grande diagonale du Fou b2), e5 (case forte blanche).",
      cases_en:"a1-h8 (b2 Bishop's long diagonal), e5 (White's strong square).",
      finale:"Finale active pour les Blancs grâce à la pression du Fou b2.",
      finale_en:"Active endgame for White thanks to the b2 Bishop pressure.",
      stats:"Moins connue que le Colle classique mais appréciée des joueurs systématiques.",
      stats_en:"Less known than the classic Colle but appreciated by systematic players.",
      piege:"La rupture e4 au bon moment ouvre la diagonale du Fou b2 de façon dévastatrice.",
      piege_en:"The e4 break at the right moment opens the b2 Bishop's diagonal in a devastating way.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"e2",to:"e3"},{from:"e7",to:"e6"},{from:"f1",to:"d3"},{from:"c7",to:"c5"},{from:"b2",to:"b3"},{from:"b8",to:"c6"},{from:"e1",to:"g1"}]
    }
  },
  40: {
    torre: {
      line:"1.d4 Cf6 2.Cf3 e6 3.Fg5 c5 4.e3 cxd4 5.exd4",
      fondement:"L'Attaque Torre (Bg5 contre Nf6) est un système positionnel solide. La célèbre partie Torre-Lasker 1925 illustre le mécanisme du 'moulin' (windmill).",
      fondement_en:"The Torre Attack (Bg5 against Nf6) is a solid positional system. The famous Torre-Lasker 1925 game illustrates the 'windmill' mechanism.",
      avantages:"Système positionnel solide. Peu de théorie à mémoriser. Applicable contre de nombreux setups.",
      avantages_en:"Solid positional system. Little theory to memorize. Applicable against many setups.",
      inconvenients:"Moins agressif que d'autres systèmes avec 1.d4. Noir peut simplifier facilement.",
      inconvenients_en:"Less aggressive than other 1.d4 systems. Black can simplify easily.",
      blancs:"Maintenir la pression sur f6. Préparer une attaque sur l'aile Roi avec Ne5.",
      blancs_en:"Maintain pressure on f6. Prepare a kingside attack with Ne5.",
      noirs:"Simplifier avec ...h6 forçant l'échange ou ...Ne4 pour counter-jeu.",
      noirs_en:"Simplify with ...h6 forcing the exchange or ...Ne4 for counterplay.",
      cases:"f6 (case clouée), h6 (case de délogement du Fou).",
      cases_en:"f6 (pinned square), h6 (Bishop displacement square).",
      finale:"Finales solides pour les deux camps.",
      finale_en:"Solid endgames for both sides.",
      stats:"Populaire au niveau club. Carlos Torre — l'un des premiers GMs d'Amérique latine.",
      stats_en:"Popular at club level. Carlos Torre — one of the first GMs from Latin America.",
      piege:"La combinaison 'Moulin' Torre-Lasker 1925 est la plus célèbre issue de cette ouverture.",
      piege_en:"The 'Windmill' Torre-Lasker 1925 combination is the most famous game from this opening.",
      moves:[{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"g1",to:"f3"},{from:"e7",to:"e6"},{from:"c1",to:"g5"},{from:"c7",to:"c5"},{from:"e2",to:"e3"},{from:"c5",to:"d4"},{from:"e3",to:"d4"}]
    }
  },
  41: {
    stonewall: {
      line:"1.d4 d5 2.e3 Cf6 3.Fd3 e6 4.f4 c5 5.c3 Cc6",
      fondement:"L'Attaque Stonewall est un système positionnel où Blanc joue d4+e3+f4+c3 créant un 'mur de pierre'. Le Cavalier en e5 surprotégé est la pièce clé.",
      fondement_en:"The Stonewall Attack is a positional system where White plays d4+e3+f4+c3 creating a 'stone wall'. The overprotected Knight on e5 is the key piece.",
      avantages:"Plans clairs et thématiques. Le Cavalier en e5 est très difficile à déloger.",
      avantages_en:"Clear and thematic plans. The Knight on e5 is very difficult to dislodge.",
      inconvenients:"Structure de pions rigide. Les cases sombres sont affaiblies par f4.",
      inconvenients_en:"Rigid pawn structure. Dark squares are weakened by f4.",
      blancs:"Installer le Cavalier en e5, le surprotéger avec f4+d4. Attaque sur l'aile Roi.",
      blancs_en:"Install the Knight on e5, overprotect it with f4+d4. Kingside attack.",
      noirs:"Attaquer la base de la chaîne de pions avec ...c5 puis ...b5.",
      noirs_en:"Attack the pawn chain base with ...c5 then ...b5.",
      cases:"e5 (case forte du Cavalier blanc), c5/b5 (ruptures noires).",
      cases_en:"e5 (White's Knight stronghold), c5/b5 (Black's breaks).",
      finale:"Finale active si l'attaque sur l'aile Roi n'aboutit pas.",
      finale_en:"Active endgame if the kingside attack doesn't succeed.",
      stats:"Utilisée par de nombreux joueurs systématiques. Euwe (champion du monde) en était un adepte.",
      stats_en:"Used by many systematic players. Euwe (world champion) was an adherent.",
      piege:"Oublier de surprotéger e5 permet à Noir de déloger le Cavalier avec ...f6.",
      piege_en:"Forgetting to overprotect e5 allows Black to dislodge the Knight with ...f6.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"e2",to:"e3"},{from:"g8",to:"f6"},{from:"f1",to:"d3"},{from:"e7",to:"e6"},{from:"f2",to:"f4"},{from:"c7",to:"c5"},{from:"c2",to:"c3"},{from:"b8",to:"c6"}]
    }
  },
  42: {
    bird: {
      line:"1.f4 d5 2.Cf3 Cf6 3.e3 e6 4.Fb5+ Fd7",
      fondement:"L'Ouverture Bird (1.f4) contrôle les cases sombres du centre (e5) sans engager les pions centraux. Nommée d'après Henry Bird, joueur anglais du 19e siècle.",
      fondement_en:"Bird's Opening (1.f4) controls the dark center squares (e5) without committing central pawns. Named after Henry Bird, an English player of the 19th century.",
      avantages:"Contrôle les cases sombres du centre. Attaque naturelle sur l'aile Roi. Très rare → surprise garantie.",
      avantages_en:"Controls dark center squares. Natural kingside attack. Very rare → guaranteed surprise.",
      inconvenients:"Affaiblit l'aile Roi de Blanc. Scores relativement faibles pour Blanc.",
      inconvenients_en:"Weakens White's kingside. Relatively poor scores for White.",
      blancs:"Jouer le Gambit From (2.e4!?) pour une partie très tactique ou le Bird Normal.",
      blancs_en:"Play the From's Gambit (2.e4!?) for very tactical play or the normal Bird.",
      noirs:"Le Gambit From (1...e5!?) contre-attaque immédiatement l'affaiblissement de f4.",
      noirs_en:"The From's Gambit (1...e5!?) immediately counter-attacks the f4 weakness.",
      cases:"e5 (case forte blanche), f4 (pion avancé affaiblissant).",
      cases_en:"e5 (White's strong square), f4 (weakening advanced pawn).",
      finale:"Finales désavantageuses pour Blanc si l'initiative de l'ouverture est perdue.",
      finale_en:"Disadvantageous endgames for White if the opening initiative is lost.",
      stats:"Rare au niveau master mais populaire en amateurs. Scores blancs autour de 48%.",
      stats_en:"Rare at master level but popular among amateurs. White scores around 48%.",
      piege:"Le Gambit From (1...e5! 2.fxe5 d6 3.exd6 Bxd6) donne aux Noirs un contre-jeu immédiat.",
      piege_en:"The From's Gambit (1...e5! 2.fxe5 d6 3.exd6 Bxd6) gives Black immediate counterplay.",
      moves:[{from:"f2",to:"f4"},{from:"d7",to:"d5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"e2",to:"e3"},{from:"e7",to:"e6"},{from:"f1",to:"b5"},{from:"c8",to:"d7"}]
    }
  },
  43: {
    reti: {
      line:"1.Cf3 d5 2.c4 d4 3.b4 f6 4.e3 e5 5.Fc4",
      fondement:"L'Ouverture Réti (1.Cf3) est hypermoderne et transpositable. Inventée par Richard Réti dans les années 1920, elle contrôle le centre à distance avec le fianchetto.",
      fondement_en:"The Réti Opening (1.Nf3) is hypermodern and transpositional. Invented by Richard Réti in the 1920s, it controls the center from a distance with the fianchetto.",
      avantages:"Hypermoderne et transpositionnelle. Centre flexible. Nombreuses transpositions.",
      avantages_en:"Hypermodern and transpositional. Flexible center. Many transpositions.",
      inconvenients:"Peu de pression initiale sur Noir. Positions souvent symétriques ou équilibrées.",
      inconvenients_en:"Little initial pressure on Black. Positions often symmetric or balanced.",
      blancs:"Fianchetto du Fou en g2, pression sur d5, transposer vers l'Anglaise ou le GD.",
      blancs_en:"Fianchetto the Bishop to g2, pressure on d5, transpose to English or QG.",
      noirs:"...d4 pour verrouiller le centre ou ...dxc4 pour accepter le gambit.",
      noirs_en:"...d4 to lock the center or ...dxc4 to accept the gambit.",
      cases:"d5, c4 (tension centrale), g2 (Fou fianchettisé clé).",
      cases_en:"d5, c4 (central tension), g2 (key fianchettoed Bishop).",
      finale:"Finales complexes selon la structure choisie.",
      finale_en:"Complex endgames depending on the chosen structure.",
      stats:"Très populaire au niveau master. Utilisée par Kramnik, Karpov, Carlsen.",
      stats_en:"Very popular at master level. Used by Kramnik, Karpov, Carlsen.",
      piege:"Si Blanc joue passivement, ...d4 verrouille définitivement le centre en faveur des Noirs.",
      piege_en:"If White plays passively, ...d4 definitively locks the center in Black's favor.",
      moves:[{from:"g1",to:"f3"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"d5",to:"d4"},{from:"b2",to:"b4"},{from:"f7",to:"f6"},{from:"e2",to:"e3"},{from:"e7",to:"e5"},{from:"f1",to:"c4"}]
    }
  },
  44: {
    kia: {
      line:"1.Cf3 d5 2.g3 Cf6 3.Fg2 e6 4.0-0 Fe7 5.d3 0-0",
      fondement:"Le King's Indian Attack (KIA) est un système applicable contre presque toutes les réponses noires. Setup : Nf3, g3, Bg2, 0-0, d3, Nbd2, puis e4.",
      fondement_en:"The King's Indian Attack (KIA) is a system applicable against almost all Black responses. Setup: Nf3, g3, Bg2, 0-0, d3, Nbd2, then e4.",
      avantages:"Système applicable contre presque toutes les réponses noires. Plans clairs et thématiques.",
      avantages_en:"System applicable against almost all Black responses. Clear and thematic plans.",
      inconvenients:"Moins précis que les ouvertures classiques. Noir peut contester activement avec ...c5.",
      inconvenients_en:"Less precise than classical openings. Black can actively contest with ...c5.",
      blancs:"Setup KIA complet, puis e4 et attaque sur l'aile Roi avec h4-h5.",
      blancs_en:"Complete KIA setup, then e4 and kingside attack with h4-h5.",
      noirs:"Contre-jeu avec ...c5, ...Nc6, ...b5 pour l'aile Dame ou ...e5 pour verrouiller.",
      noirs_en:"Counterplay with ...c5, ...Nc6, ...b5 for the queenside or ...e5 to lock.",
      cases:"e5 (poussée blanche thématique), h7 (cible de l'attaque).",
      cases_en:"e5 (thematic White advance), h7 (attack target).",
      finale:"Finales actives si l'attaque sur l'aile Roi échoue.",
      finale_en:"Active endgames if the kingside attack fails.",
      stats:"Populaire à tous les niveaux. Fischer l'utilisait régulièrement.",
      stats_en:"Popular at all levels. Fischer used it regularly.",
      piege:"Fischer contre les Siciliens/Français : e5 puis h4-h5 est dévastateur sans contre-jeu noir suffisant.",
      piege_en:"Fischer against Sicilian/French players: e5 then h4-h5 is devastating without sufficient Black counterplay.",
      moves:[{from:"g1",to:"f3"},{from:"d7",to:"d5"},{from:"g2",to:"g3"},{from:"g8",to:"f6"},{from:"f1",to:"g2"},{from:"e7",to:"e6"},{from:"e1",to:"g1"},{from:"f8",to:"e7"},{from:"d2",to:"d3"},{from:"e8",to:"g8"}]
    }
  },
  45: {
    nimzo_larsen: {
      line:"1.b3 e5 2.Fb2 Cc6 3.e3 Cf6 4.Fb5 Fd6",
      fondement:"L'Attaque Nimzo-Larsen (1.b3) est l'hypermodernisme total : fianchetto immédiat du Fou sombre. Popularisée par Nimzowitsch et Larsen. Très rare et surprenante.",
      fondement_en:"The Nimzo-Larsen Attack (1.b3) is total hypermodernism: immediate queenside Bishop fianchetto. Popularized by Nimzowitsch and Larsen. Very rare and surprising.",
      avantages:"Hypermoderne total. Très rare → surprise garantie. Mêmes idées que dans l'Ouverture Bird.",
      avantages_en:"Total hypermodernism. Very rare → guaranteed surprise. Same ideas as in Bird's Opening.",
      inconvenients:"Pas de pression immédiate sur le centre. Noir peut occuper le centre librement.",
      inconvenients_en:"No immediate pressure on the center. Black can freely occupy the center.",
      blancs:"Développer le Fou en b2, puis Cf3, e3, d4 selon la réponse noire.",
      blancs_en:"Develop the Bishop to b2, then Nf3, e3, d4 depending on Black's response.",
      noirs:"Occuper le centre avec e5 ou d5 et développer rapidement.",
      noirs_en:"Occupy the center with e5 or d5 and develop quickly.",
      cases:"d4, e5 (cases centrales que les Noirs peuvent occuper), b2 (Fou actif de Blanc).",
      cases_en:"d4, e5 (central squares Black can occupy), b2 (White's active Bishop).",
      finale:"Finales où la pression du Fou b2 sur la grande diagonale devient significative.",
      finale_en:"Endgames where the b2 Bishop's pressure on the long diagonal becomes significant.",
      stats:"Très rare à tous les niveaux. Utilisée comme arme surprise par Larsen notamment.",
      stats_en:"Very rare at all levels. Used as a surprise weapon by Larsen notably.",
      piege:"1.b3 e5 2.Fb2 d6?! 3.e4 transpose vers une structure similaire au KIA avec un tempo de plus.",
      piege_en:"1.b3 e5 2.Bb2 d6?! 3.e4 transposes to a structure similar to the KIA with an extra tempo.",
      moves:[{from:"b2",to:"b3"},{from:"e7",to:"e5"},{from:"c1",to:"b2"},{from:"b8",to:"c6"},{from:"e2",to:"e3"},{from:"g8",to:"f6"},{from:"f1",to:"b5"},{from:"f8",to:"d6"}]
    }
  },
  5: {
    petrov: {
      line:"1.e4 e5 2.Cf3 Cf6",
      fondement:"Contre-attaque symétrique immédiate sur e4 au lieu de défendre e5. Les Noirs acceptent une structure souvent symétrique en échange d'un développement facile et de l'annulation de l'initiative blanche. L'idée est de refuser le combat théorique de la Ruy Lopez ou de l'Italienne.",
      fondement_en:"Immediate symmetric counter-attack on e4 instead of defending e5. Black accepts an often symmetric structure in exchange for easy development and neutralizing White's initiative. The idea is to refuse the theoretical battles of the Ruy Lopez or Italian Game.",
      avantages:"Solidité structurale exceptionnelle. Annule les lignes d'attaque ultra-agressives (Ruy Lopez, Italienne). Idéale pour sécuriser la nulle ou jouer un milieu de partie basé sur la compréhension stratégique pure.",
      avantages_en:"Exceptional structural solidity. Neutralizes ultra-aggressive attacking lines (Ruy Lopez, Italian). Ideal for securing a draw or playing a middlegame based on pure strategic understanding.",
      inconvenients:"Réputation de 'sécher' le jeu. Difficile de forcer le gain si les Blancs optent pour une ligne ultra-symétrique. Nécessite une grande précision mémorielle dans les fins de variantes.",
      inconvenients_en:"Reputation for 'drying out' the game. Difficult for Black to force a win if White opts for an ultra-symmetric line. Requires great memory precision in the final variations.",
      blancs:"Prendre l'initiative dès 3.Cxe5 puis d4, jouer la Variante Steinitz (3.d4), ou tenter le Gambit Cochrane (4.Cxf7).",
      blancs_en:"Take the initiative from 3.Nxe5 then d4, play the Steinitz Variation (3.d4), or try the Cochrane Gambit (4.Nxf7).",
      noirs:"Contre-attaquer en e4 après 3.Cxe5 d6 4.Cf3 Cxe4, installer solidement le cavalier en e4, puis viser ...c5 ou ...f5.",
      noirs_en:"Counter-attack on e4 after 3.Nxe5 d6 4.Nf3 Nxe4, firmly establish the knight on e4, then aim for ...c5 or ...f5.",
      cases:"e4 (contre-attaque noire) ; e5 (cavalier blanc transitoire) ; d5 (tension centrale ligne classique)",
      cases_en:"e4 (Black's counter-attack); e5 (White's transient knight); d5 (central tension in classical line)",
      finale:"Mène souvent à des finales équilibrées de Tours ou de Cavaliers. L'avantage d'espace blanc peut être décisif si les Noirs ne contre-attaquent pas activement.",
      finale_en:"Often leads to balanced Rook or Knight endgames. White's space advantage can be decisive if Black doesn't counter-attack actively.",
      stats:"ECO C42-C43 | ~15% des parties 1.e4 e5 au niveau élite | Taux de nulle ~45% | Kramnik (titre mondial 2000), Caruana, Ding Liren",
      stats_en:"ECO C42-C43 | ~15% of elite 1.e4 e5 games | Draw rate ~45% | Kramnik (world title 2000), Caruana, Ding Liren",
      piege:"Piège absolu : 3.Cxe5 Cxe4?? 4.De2! et les Noirs perdent le cavalier. Si 4...Cf6?? 5.Cc6+ découvert gagne la Dame. Toujours jouer 3...d6 d'abord !",
      piege_en:"Absolute trap: 3.Nxe5 Nxe4?? 4.Qe2! and Black loses the knight. If 4...Nf6?? 5.Nc6+ discovered check wins the Queen. Always play 3...d6 first!",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"}]
    },
    classique: {
      line:"1.e4 e5 2.Cf3 Cf6 3.Cxe5 d6 4.Cf3 Cxe4 5.d4 d5 6.Fd3",
      fondement:"La ligne principale de la Petroff. Les Blancs répondent au cavalier noir en e4 par d4, visant le centre d5. Les Noirs consolident leur cavalier en e4 et cherchent à contre-attaquer avec ...c5.",
      fondement_en:"The main line of the Petroff. White responds to Black's knight on e4 with d4, targeting the d5 center. Black consolidates their knight on e4 and looks to counter with ...c5.",
      avantages:"Blancs : prise de centre puissante, paire de Fous active, pression sur d5. Noirs : cavalier central solide en e4, structure symétrique équilibrée.",
      avantages_en:"White: powerful center control, active bishop pair, pressure on d5. Black: solid central knight on e4, balanced symmetric structure.",
      inconvenients:"Blancs : cavalier noir e4 difficile à chasser. Noirs : défense précise requise face aux menaces c4 et Re1.",
      inconvenients_en:"White: Black's e4 knight is hard to dislodge. Black: precise defense required against c4 and Re1 threats.",
      blancs:"Attaquer d5 avec c4, chasser le cavalier e4 par Re1, manoeuvre Fc2-Db3 pour pression directe.",
      blancs_en:"Attack d5 with c4, drive away the e4 knight with Re1, Bc2-Qb3 maneuver for direct pressure.",
      noirs:"Ancrer le cavalier en e4 via ...f5 ou ...Fd7, puis percée centrale ...c5 ou ...f5.",
      noirs_en:"Anchor the knight on e4 via ...f5 or ...Bd7, then central break ...c5 or ...f5.",
      cases:"e4 (cavalier noir central), d5 (tension), c4 (levier blanc), e1 (colonne e Tour blanche)",
      cases_en:"e4 (Black's central knight), d5 (tension), c4 (White's lever), e1 (e-file White's Rook)",
      finale:"Finales de Tour souvent équilibrées. La paire de Fous blanche peut être décisive en jeu ouvert.",
      finale_en:"Rook endgames often balanced. White's bishop pair can be decisive in open play.",
      stats:"ECO C42 | Sous-variante la plus jouée au niveau mondial | Taux de nulle ~47%",
      stats_en:"ECO C42 | Most played sub-variation worldwide | Draw rate ~47%",
      piege:"Dans la variante Jaenisch (8.c4), ne pas précipiter ...c5 sans préparer le cavalier. Toujours 3...d6 avant de reprendre en e4.",
      piege_en:"In the Jaenisch variation (8.c4), do not rush ...c5 without preparing the knight. Always 3...d6 before recapturing on e4.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"f3",to:"e5"},{from:"d7",to:"d6"},{from:"e5",to:"f3"},{from:"f6",to:"e4"},{from:"d2",to:"d4"},{from:"d6",to:"d5"},{from:"f1",to:"d3"}]
    },
    nimzowitsch: {
      line:"1.e4 e5 2.Cf3 Cf6 3.Cxe5 d6 4.Cf3 Cxe4 5.Cc3 Cxc3 6.dxc3",
      fondement:"Les Blancs échangent les cavaliers pour obtenir des pions doublés en c, en échange d'un développement rapide et d'une attaque violente. Plan principal : Grand Roque puis tempête de pions h4-g4-g5.",
      fondement_en:"White exchanges knights to obtain doubled c-pawns in exchange for rapid development and a violent attack. Main plan: queenside castling then pawn storm h4-g4-g5.",
      avantages:"Blancs : initiative puissante, attaque directe sur le roi noir. Noirs : pion supplémentaire (pions doublés blancs), contre-jeu à l'aile Dame.",
      avantages_en:"White: powerful initiative, direct attack on Black's king. Black: theoretical extra pawn (doubled pawns), counterplay on the queenside.",
      inconvenients:"Blancs : pions doublés en c (faiblesse structurelle à long terme). Noirs : défense précise indispensable, initiative blanche dangereuse.",
      inconvenients_en:"White: doubled c-pawns (long-term structural weakness). Black: precise defense essential, White's initiative is dangerous.",
      blancs:"0-0-0 puis h4-g4-g5, exploitant la colonne h et le Fou en e3 pour soutenir l'attaque.",
      blancs_en:"Castle queenside, then h4-g4-g5, exploiting the h-file and Bishop on e3 to support the attack.",
      noirs:"Petit Roque, contre-attaque à l'aile Dame avec ...c6, ...b5, exploiter les pions doublés blancs en finale.",
      noirs_en:"Castle kingside, queenside counter-attack with ...c6, ...b5, exploit White's doubled pawns in the endgame.",
      cases:"h7 (cible attaque blanche), d5 (cavalier noir), b5 (contre-attaque noire), g5 (tête de pont blanc)",
      cases_en:"h7 (White's attack target), d5 (Black's central knight), b5 (Black's counter-attack), g5 (White's pawn bridgehead)",
      finale:"Si les Blancs n'arrivent pas à mater, les pions doublés en c deviennent une faiblesse décisive.",
      finale_en:"If White fails to deliver mate, the doubled c-pawns become a decisive weakness.",
      stats:"ECO C42 | Populaire au niveau élite 2000-2010 | Taux de victoire blanc ~38%",
      stats_en:"ECO C42 | Popular at elite level 2000-2010 | White win rate ~38%",
      piege:"Piège de Nimzowitsch : après 5.Cc3 NE PAS jouer 5...Ff5?? car 6.De2! broche fatale, et 6...De7 7.Cd5! perd la Dame noire.",
      piege_en:"Nimzowitsch trap: after 5.Nc3 do NOT play 5...Bf5?? as 6.Qe2! creates a fatal pin, and 6...Qe7 7.Nd5! loses Black's Queen.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"f3",to:"e5"},{from:"d7",to:"d6"},{from:"e5",to:"f3"},{from:"f6",to:"e4"},{from:"b1",to:"c3"},{from:"e4",to:"c3"},{from:"d2",to:"c3"}]
    },
    lasker: {
      line:"1.e4 e5 2.Cf3 Cf6 3.Cxe5 d6 4.Cf3 Cxe4 5.De2",
      fondement:"L'Attaque Lasker-Cozio — la plus calme des réponses blanches. Les Blancs proposent un échange précoce des Dames dès le 5e coup, visant à assécher complètement la position et à jouer une finale technique.",
      fondement_en:"The Lasker-Cozio Attack — the calmest of White's responses. White proposes an early queen exchange on move 5, aiming to completely dry out the position and play a technical endgame.",
      avantages:"Blancs : finale légèrement favorable grâce au développement et à la structure. Noirs : égalité facile avec jeu correct.",
      avantages_en:"White: slightly favorable endgame thanks to development and structure. Black: easy equality with correct play.",
      inconvenients:"Blancs : très difficile de jouer pour le gain contre un adversaire solide. Noirs : doivent accepter la nulle ou compliquer le jeu.",
      inconvenients_en:"White: very difficult to play for a win against a solid opponent. Black: must accept the draw or try to complicate.",
      blancs:"Après l'échange de Dames, centraliser le Roi, activer les Tours sur les colonnes ouvertes.",
      blancs_en:"After the queen exchange, centralize the King, activate Rooks on open files.",
      noirs:"Égaliser rapidement, simplifier vers une finale de Tours ou de Cavaliers, maintenir la solidité.",
      noirs_en:"Equalize quickly, simplify toward a Rook or knight endgame, maintain structural solidity.",
      cases:"e4 (cavalier noir), e2 (Dame blanche), d5 (tension centrale), colonne-e (finale de Tours)",
      cases_en:"e4 (Black's knight), e2 (White's Queen), d5 (central tension), e-file (Rook endgame)",
      finale:"Les finales Lasker sont des études de technique pure — zugzwang, opposition des Rois, pions passés.",
      finale_en:"Lasker endgames are studies in pure technique — zugzwang, king opposition, passed pawns.",
      stats:"ECO C42 | Rare au niveau élite (~5% des Petroff) | Option pour les joueurs aimant les finales",
      stats_en:"ECO C42 | Rare at elite level (~5% of Petroff games) | Option for endgame-oriented players",
      piege:"Ne pas éviter l'échange de Dames à tout prix : après 5...De7 6.d3 Cf6 7.Fg5 Dxe2+, les Blancs ont un léger avantage structurel en finale.",
      piege_en:"Don't try to avoid the queen exchange at all costs: after 5...Qe7 6.d3 Nf6 7.Bg5 Qxe2+, White has a slight structural advantage in the endgame.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"f3",to:"e5"},{from:"d7",to:"d6"},{from:"e5",to:"f3"},{from:"f6",to:"e4"},{from:"d1",to:"e2"}]
    },
    cochrane: {
      line:"1.e4 e5 2.Cf3 Cf6 3.Cxe5 d6 4.Cxf7!? Rxf7 5.d4 c5",
      fondement:"Sacrifice de cavalier spectaculaire sur f7, légué par l'Écossais John Cochrane qui le pratiqua à Calcutta vers 1848. Les Blancs sacrifient une pièce pour déroquer immédiatement le roi noir et obtenir une compensation pratique.",
      fondement_en:"Spectacular knight sacrifice on f7, bequeathed by Scottish player John Cochrane who practiced it in Calcutta around 1848. White sacrifices a piece to immediately dislodge Black's king and obtain practical compensation.",
      avantages:"Blancs : initiative, roi noir exposé, centre fort après d4. Noirs : pièce d'avance, roi peut se rapatrier (Rg8).",
      avantages_en:"White: initiative, Black's exposed king, strong center after d4. Black: extra piece, king can return (Kg8).",
      inconvenients:"Blancs : compensation théoriquement insuffisante avec jeu précis noir. Noirs : roi exposé pendant plusieurs coups.",
      inconvenients_en:"White: theoretically insufficient compensation with precise Black play. Black: king exposed for several moves.",
      blancs:"Pousser les pions centraux e5 et d5, harceler le roi noir avec la Dame et les Tours.",
      blancs_en:"Push central pawns e5 and d5, harass Black's king with Queen and Rooks.",
      noirs:"Rapatrier le roi (Rg8), consolider la pièce d'avance, simplifier vers la finale.",
      noirs_en:"Bring king back (Kg8), consolidate the extra piece, simplify to the endgame.",
      cases:"f7 (case du sacrifice), e5 (avant-poste blanc), g8 (refuge roi noir), d5 (pion blanc avancé)",
      cases_en:"f7 (sacrifice square), e5 (White's outpost), g8 (Black's king shelter), d5 (White's advanced pawn)",
      finale:"Si les Noirs survivent à l'attaque, la pièce d'avance devrait être décisive en finale.",
      finale_en:"If Black survives the attack, the extra piece should be decisive in the endgame.",
      stats:"ECO C42 | Rare au niveau élite (~1% des parties) | Taux de victoire blanc pratique ~40%",
      stats_en:"ECO C42 | Rare at elite level (~1% of games) | Practical White win rate ~40%",
      piege:"Les Noirs ne doivent pas jouer trop passivement après 4...Rxf7. Les coups 5...c5! puis 6...Fe6 consolident efficacement la position.",
      piege_en:"Black must not play too passively after 4...Kxf7. The moves 5...c5! then 6...Be6 effectively consolidate the position.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"f3",to:"e5"},{from:"d7",to:"d6"},{from:"e5",to:"f7"},{from:"e8",to:"f7"},{from:"d2",to:"d4"},{from:"c7",to:"c5"}]
    },
    steinitz: {
      line:"1.e4 e5 2.Cf3 Cf6 3.d4 Cxe4 4.Fd3 d5 5.Cxe5 Cd7",
      fondement:"La Variante Steinitz (ECO C43) : au lieu de 3.Cxe5, les Blancs jouent 3.d4, attaquant immédiatement le centre. Les Noirs peuvent prendre le pion (3...exd4) ou développer leur cavalier (3...Cxe4).",
      fondement_en:"The Steinitz Variation (ECO C43): instead of 3.Nxe5, White plays 3.d4, immediately attacking the center. Black can either take the pawn (3...exd4) or develop their knight (3...Nxe4).",
      avantages:"Blancs : centre puissant, avantage d'espace, manoeuvre Tour Te3-Th3. Noirs : paire de Fous active, percée ...c5.",
      avantages_en:"White: powerful center, space advantage, Rook maneuver Re3-Rh3. Black: active bishop pair, ...c5 break.",
      inconvenients:"Blancs : centre peut devenir une cible. Noirs : doit calculer précisément le moment de la percée ...c5.",
      inconvenients_en:"White: center can become a target. Black: must precisely calculate the timing of the ...c5 break.",
      blancs:"Maintenir le centre, manoeuvrer Te3-Th3 pour attaquer l'aile Roi, Fd2-Dc2 pour pression directe.",
      blancs_en:"Maintain the center, maneuver Re3-Rh3 to attack the kingside, Bd2-Qc2 for direct pressure.",
      noirs:"Développer la paire de Fous, préparer ...c5 pour briser le centre blanc, utiliser les colonnes ouvertes.",
      noirs_en:"Develop the bishop pair, prepare ...c5 to break White's center, use open files after pawn exchanges.",
      cases:"e5 (cavalier blanc dominant), d5 (tension centrale), c5 (percée noire), h3 (Tour blanche d'attaque)",
      cases_en:"e5 (White's dominant knight), d5 (central tension), c5 (Black's break), h3 (White's attacking Rook)",
      finale:"Les Blancs peuvent conserver un avantage avec la paire de pions centrale, mais les Noirs ont souvent des ressources défensives.",
      finale_en:"White can maintain an advantage with the central pawn pair, but Black often has defensive resources.",
      stats:"ECO C43 | Code distinct de C42 (Petroff classique) | Taux de victoire blanc ~42%",
      stats_en:"ECO C43 | Different code from C42 (classical Petroff) | White win rate ~42%",
      piege:"Après 3.d4 Cxe4, les Noirs ne doivent pas jouer 4...Ff5?? car 5.De2! puis 6.Cf3 crée une pression insoutenable sur la colonne e.",
      piege_en:"After 3.d4 Nxe4, Black must not play 4...Bf5?? as 5.Qe2! then 6.Nf3 creates unsustainable pressure on the e-file.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"d2",to:"d4"},{from:"f6",to:"e4"},{from:"f1",to:"d3"},{from:"d7",to:"d5"},{from:"f3",to:"e5"},{from:"b8",to:"d7"}]
    },
    stafford: {
      line:"1.e4 e5 2.Cf3 Cf6 3.Cxe5 Cc6?! 4.Cxc6 dxc6 5.d3!",
      fondement:"Le Gambit Stafford est une déviation noire douteuse du Petroff, très populaire en parties rapides et en ligne. Les Noirs sacrifient un pion pour une initiative rapide. Théoriquement perdant avec 5.d3!, mais très dangereux contre un adversaire non préparé.",
      fondement_en:"The Stafford Gambit is a dubious Black deviation from the Petroff, very popular in rapid games and online. Black sacrifices a pawn for quick initiative. Theoretically losing with 5.d3!, but very dangerous against an unprepared opponent.",
      avantages:"Noirs : développement rapide, initiative pratique, positions complexes propices aux pièges. Blancs avec 5.d3! : solide avantage matériel.",
      avantages_en:"Black: rapid development, practical initiative, complex positions prone to traps. White with 5.d3!: solid material advantage.",
      inconvenients:"Noirs : théoriquement perdant si les Blancs connaissent la réfutation 5.d3!. Blancs : attention aux pièges si jeu passif.",
      inconvenients_en:"Black: theoretically losing if White knows the refutation 5.d3!. White: beware tactical traps if playing passively.",
      blancs:"Après 5.d3!, consolider le pion e4, jouer h3 (interdit Cg4), puis f4 pour verrouiller le centre.",
      blancs_en:"After 5.d3!, consolidate the e4 pawn, play h3 (prevents Ng4), then f4 to lock the center.",
      noirs:"Viser les coups Fc5, h5, Dh4 et Cg4 pour créer des menaces tactiques. Toutes les ressources dépendent de l'imprécision blanche.",
      noirs_en:"Aim for Bc5, h5, Qh4 and Ng4 to create tactical threats. All resources depend on White's imprecision.",
      cases:"f2 (cible principale noire), h1 (case mat si Stafford réussit), d3 (clé de la réfutation blanche)",
      cases_en:"f2 (Black's main target), h1 (mate square if Stafford succeeds), d3 (key to White's refutation)",
      finale:"Avec 5.d3!, les Blancs ont un pion supplémentaire et entrent dans une finale gagnante.",
      finale_en:"With 5.d3!, White has an extra pawn and enters a winning endgame.",
      stats:"ECO C42 | ~15% des parties Petroff en ligne (Blitz/Bullet) | Taux victoire noir ~70% si Blancs jouent mal",
      stats_en:"ECO C42 | ~15% of online Petroff games (Blitz/Bullet) | Black win rate ~70% if White plays poorly",
      piege:"Les Blancs NE doivent PAS jouer 5.Cc3?! Après 5.Cc3 Fc5 6.Fe2 h5 7.h3 Dh4!, les Noirs créent des menaces terribles incluant Cg4 et le mat en h1. Toujours 5.d3!",
      piege_en:"White must NOT play 5.Nc3?! After 5.Nc3 Bc5 6.Be2 h5 7.h3 Qh4!, Black creates terrible threats including Ng4 and mate on h1. Always 5.d3!",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"f3",to:"e5"},{from:"b8",to:"c6"},{from:"e5",to:"c6"},{from:"d7",to:"c6"},{from:"d2",to:"d3"}]
    }
  },
  46: {
    trois_cavaliers: {
      line:"1.e4 e5 2.Cf3 Cc6 3.Cc3",
      fondement:"La Partie des Trois Cavaliers (3.Cc3) survient quand les Noirs s'écartent de la symétrie des Quatre Cavaliers par un coup autre que ...Cf6, souvent 3...g6 ou 3...Fb4.",
      fondement_en:"The Three Knights Game (3.Nc3) arises when Black avoids the Four Knights symmetry with a move other than ...Nf6, often 3...g6 or 3...Bb4.",
      avantages:"Développement naturel et solide, jeu ouvert classique sans théorie écrasante.",
      avantages_en:"Natural, solid development with classical open play and no overwhelming theory.",
      inconvenients:"Peu ambitieuse ; concède facilement l'égalité si les Noirs jouent avec précision.",
      inconvenients_en:"Unambitious; easily concedes equality if Black plays accurately.",
      blancs:"Compléter le développement, viser d4 et exploiter une éventuelle imprécision noire.",
      blancs_en:"Complete development, aim for d4 and exploit any Black inaccuracy.",
      noirs:"Choisir entre le fianchetto ...g6 ou le clouage ...Fb4 pour égaliser confortablement.",
      noirs_en:"Choose between the fianchetto ...g6 or the pin ...Bb4 to equalize comfortably.",
      cases:"d4 et d5 (cases centrales), e5 (pion clé), f5/f4 (avant-postes des Cavaliers).",
      cases_en:"d4 and d5 (central squares), e5 (key pawn), f5/f4 (Knight outposts).",
      finale:"Finales équilibrées issues d'une lutte ouverte saine.",
      finale_en:"Balanced endgames arising from sound open play.",
      stats:"ECO C46 · Ouverture classique du XIXe siècle, aujourd'hui rare au sommet.",
      stats_en:"ECO C46 · A classical 19th-century opening, now rare at the top.",
      piege:"Après 3...Fb4 4.Cd5! Fa5? 5.b4! piège le Fou ; les Noirs doivent jouer 4...Fc5 ou 4...Fe7.",
      piege_en:"After 3...Bb4 4.Nd5! Ba5? 5.b4! traps the Bishop; Black must play 4...Bc5 or 4...Be7.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"b1",to:"c3"}]
    }
  },
  47: {
    damiano: {
      line:"1.e4 e5 2.Cf3 f6",
      fondement:"La Défense Damiano (2...f6) est l'une des pires réponses connues : elle affaiblit le roi et n'aide pas le développement. Réfutée dès le XVIe siècle par Damiano lui-même.",
      fondement_en:"The Damiano Defense (2...f6) is one of the worst known replies: it weakens the king and does nothing for development. It was refuted in the 16th century by Damiano himself.",
      avantages:"Aucun avantage réel pour les Noirs ; sert surtout d'avertissement didactique.",
      avantages_en:"No real advantage for Black; it mainly serves as a didactic warning.",
      inconvenients:"Affaiblit fatalement la diagonale a2-g8 et le roi noir ; perd souvent par la force.",
      inconvenients_en:"Fatally weakens the a2-g8 diagonal and Black's king; often loses by force.",
      blancs:"Frapper immédiatement par 3.Cxe5! fxe5 4.Dh5+ avec une attaque gagnante.",
      blancs_en:"Strike at once with 3.Nxe5! fxe5 4.Qh5+ for a winning attack.",
      noirs:"Tenter de survivre par 3...De7 plutôt que 3...fxe5, mais l'infériorité demeure.",
      noirs_en:"Try to survive with 3...Qe7 rather than 3...fxe5, but the inferiority remains.",
      cases:"f7 et e6 (faiblesses fatales), h5 (case d'attaque de la Dame).",
      cases_en:"f7 and e6 (fatal weaknesses), h5 (the Queen's attacking square).",
      finale:"Les Noirs atteignent rarement une finale ; ils sont généralement balayés en milieu de jeu.",
      finale_en:"Black rarely reaches an endgame; they are usually swept away in the middlegame.",
      stats:"ECO C40 · Curiosité historique, jamais jouée sérieusement au niveau maître.",
      stats_en:"ECO C40 · A historical curiosity, never played seriously at master level.",
      piege:"3.Cxe5! fxe5 4.Dh5+ g6 5.Dxe5+ Ce7 6.Dxh8 gagne une Tour par la force.",
      piege_en:"3.Nxe5! fxe5 4.Qh5+ g6 5.Qxe5+ Ne7 6.Qxh8 wins a Rook by force.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"f7",to:"f6"}]
    }
  },
  48: {
    bongcloud: {
      line:"1.e4 e5 2.Re2",
      fondement:"L'Attaque Bongcloud (2.Re2) est une provocation absurde popularisée par la culture internet : les Blancs bougent le roi au coup 2, perdant le roque et bloquant leurs propres pièces.",
      fondement_en:"The Bongcloud Attack (2.Ke2) is an absurd provocation popularized by internet culture: White moves the king on move 2, losing castling rights and blocking their own pieces.",
      avantages:"Valeur de surprise et d'humour ; aucun mérite objectif. Carlsen et Nakamura l'ont jouée pour plaisanter.",
      avantages_en:"Surprise and comedic value; no objective merit. Carlsen and Nakamura have played it as a joke.",
      inconvenients:"Viole tous les principes : roi exposé, Fou f1 et Dame enfermés, perte du roque.",
      inconvenients_en:"Violates every principle: exposed king, trapped f1-Bishop and Queen, loss of castling.",
      blancs:"Survivre tant bien que mal et ramener le roi en sécurité ; objectivement perdant d'idée.",
      blancs_en:"Survive as best as possible and tuck the king back to safety; objectively a losing idea.",
      noirs:"Développer naturellement et ouvrir le centre pour exploiter le roi blanc baladeur.",
      noirs_en:"Develop naturally and open the center to exploit White's wandering king.",
      cases:"e2 (roi exposé), centre (à ouvrir par les Noirs).",
      cases_en:"e2 (exposed king), the center (to be opened by Black).",
      finale:"Sans intérêt théorique ; les Noirs ont un avantage clair s'ils jouent simplement.",
      finale_en:"Of no theoretical interest; Black has a clear edge by simply playing well.",
      stats:"ECO C20 · Coup-meme rendu célèbre par les parties amicales de l'élite.",
      stats_en:"ECO C20 · A meme move made famous by friendly games among the elite.",
      piege:"Les Noirs ne doivent pas se précipiter : un développement sain suffit à punir l'excentricité.",
      piege_en:"Black should not rush: sound development is enough to punish the eccentricity.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"e1",to:"e2"}]
    }
  },
  49: {
    barnes: {
      line:"1.e4 f6",
      fondement:"La Défense Barnes (1...f6) est considérée comme la pire réponse à 1.e4 : elle n'aide pas le développement, affaiblit la diagonale du roi et bloque le Cavalier g8.",
      fondement_en:"The Barnes Defense (1...f6) is considered the worst reply to 1.e4: it does not aid development, weakens the king's diagonal and blocks the g8-Knight.",
      avantages:"Aucun ; elle illustre par l'absurde les principes d'ouverture à ne pas violer.",
      avantages_en:"None; it illustrates by absurdity the opening principles one must not break.",
      inconvenients:"Affaiblit e6 et la diagonale a2-g8, ouvre le roi noir à une attaque foudroyante.",
      inconvenients_en:"Weakens e6 and the a2-g8 diagonal, exposing Black's king to a swift attack.",
      blancs:"Occuper le centre par 2.d4 et développer rapidement pour une attaque décisive.",
      blancs_en:"Occupy the center with 2.d4 and develop quickly for a decisive attack.",
      noirs:"Tenter de limiter les dégâts ; aucune ligne ne donne l'égalité.",
      noirs_en:"Try to limit the damage; no line offers equality.",
      cases:"e6 et g8 (faiblesses créées), centre (dominé par les Blancs).",
      cases_en:"e6 and g8 (created weaknesses), the center (dominated by White).",
      finale:"Rarement atteinte ; les Noirs sont généralement débordés bien avant.",
      finale_en:"Rarely reached; Black is usually overrun long before.",
      stats:"ECO B00 · Du nom de Thomas Barnes, qui battit pourtant Morphy ; pure curiosité.",
      stats_en:"ECO B00 · Named after Thomas Barnes, who nonetheless beat Morphy; a pure curiosity.",
      piege:"2.d4 g6?? 3.Dh5+! gxh5?? n'existe pas, mais 2...g5?? 3.Dh5# illustre la fragilité du roi noir.",
      piege_en:"2.d4 g5?? 3.Qh5# mate illustrates the fragility of Black's king after 1...f6.",
      moves:[{from:"e2",to:"e4"},{from:"f7",to:"f6"}]
    }
  },
  50: {
    gda: {
      line:"1.d4 d5 2.c4 dxc4",
      fondement:"Le Gambit de la Dame Accepté (2...dxc4) rend immédiatement le centre aux Blancs en échange d'un développement libre et d'un jeu de pièces actif, sans le « mauvais Fou » du QGD.",
      fondement_en:"The Queen's Gambit Accepted (2...dxc4) immediately returns the center to White in exchange for free development and active piece play, without the QGD's 'bad Bishop'.",
      avantages:"Développement aisé, Fou c8 actif et structure souple ; pas de faiblesse permanente.",
      avantages_en:"Easy development, an active c8-Bishop and a flexible structure; no permanent weakness.",
      inconvenients:"Les Blancs obtiennent un fort centre e4-d4 et un avantage d'espace durable.",
      inconvenients_en:"White obtains a strong e4-d4 center and a lasting space advantage.",
      blancs:"Reprendre c4 par e3/Fxc4, ériger le centre e4 et exploiter l'avance d'espace.",
      blancs_en:"Recover c4 with e3/Bxc4, erect the e4 center and exploit the space advantage.",
      noirs:"Développer rapidement, frapper le centre par ...c5 et ...a6/...b5 pour le contre-jeu.",
      noirs_en:"Develop quickly, strike the center with ...c5 and ...a6/...b5 for counterplay.",
      cases:"c4 (pion à reprendre), e4 et d4 (centre blanc), c5 (levier noir).",
      cases_en:"c4 (pawn to recapture), e4 and d4 (White's center), c5 (Black's lever).",
      finale:"Finales équilibrées si les Noirs égalisent le centre ; sinon léger plus blanc.",
      finale_en:"Balanced endgames if Black neutralizes the center; otherwise a slight White edge.",
      stats:"ECO D20-D29 · Défense saine et respectée, employée par Anand et Carlsen.",
      stats_en:"ECO D20-D29 · A sound, respected defense used by Anand and Carlsen.",
      piege:"Vouloir garder le pion par ...b5?! 3.a4! ou ...Fe6?! mène à une perte de matériel pour les Noirs.",
      piege_en:"Trying to hold the pawn with ...b5?! 3.a4! or ...Be6?! leads to material loss for Black.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"d5",to:"c4"}]
    }
  },
  51: {
    tchigorine: {
      line:"1.d4 d5 2.c4 Cc6",
      fondement:"La Défense Tchigorine (2...Cc6) est une réponse hypermoderne et combative au Gambit de la Dame : les Noirs développent les pièces avant les pions et acceptent une structure déséquilibrée.",
      fondement_en:"The Chigorin Defense (2...Nc6) is a hypermodern, combative reply to the Queen's Gambit: Black develops pieces before pawns and accepts an unbalanced structure.",
      avantages:"Jeu de pièces actif, paire de fous potentielle et lutte asymétrique riche en tactique.",
      avantages_en:"Active piece play, the potential bishop pair, and a rich, asymmetric tactical struggle.",
      inconvenients:"Concède la paire de fous ou un centre blanc fort ; structure de pions irrégulière.",
      inconvenients_en:"Concedes the bishop pair or a strong White center; an irregular pawn structure.",
      blancs:"Accepter le déséquilibre par cxd5 et e4, viser un centre de pions mobile et supérieur.",
      blancs_en:"Embrace the imbalance with cxd5 and e4, aiming for a mobile, superior pawn center.",
      noirs:"Mettre la pression sur d4 par ...Fg4 et ...e5, utiliser l'activité des pièces.",
      noirs_en:"Pressure d4 with ...Bg4 and ...e5, using the activity of the pieces.",
      cases:"d4 (pion sous pression), e5 (rupture noire), e4 (avancée blanche).",
      cases_en:"d4 (pawn under pressure), e5 (Black's break), e4 (White's advance).",
      finale:"Finales déséquilibrées ; la paire de fous blanche peut devenir décisive à long terme.",
      finale_en:"Unbalanced endgames; White's bishop pair can become decisive in the long run.",
      stats:"ECO D07 · Défense favorite de Mikhaïl Tchigorine, fidèle à son style romantique.",
      stats_en:"ECO D07 · The favorite defense of Mikhail Chigorin, true to his romantic style.",
      piege:"Après 3.Cc3 dxc4 4.d5 Ce5 5.Df4!, les Noirs doivent jouer avec précision pour ne pas perdre le Cavalier.",
      piege_en:"After 3.Nc3 dxc4 4.d5 Ne5 5.Qf4!, Black must play precisely not to lose the Knight.",
      moves:[{from:"d2",to:"d4"},{from:"d7",to:"d5"},{from:"c2",to:"c4"},{from:"b8",to:"c6"}]
    }
  },
  52: {
    sokolski: {
      line:"1.b4",
      fondement:"L'Ouverture Sokolski (1.b4), aussi nommée Orang-Outan, gagne de l'espace à l'aile dame et fianchettoe le Fou en b2. Excentrique mais jouable, elle évite toute théorie classique.",
      fondement_en:"The Sokolski Opening (1.b4), also called the Orangutan, gains queenside space and fianchettoes the Bishop on b2. Eccentric but playable, it sidesteps all classical theory.",
      avantages:"Surprise totale, peu de théorie, le Fou b2 exerce une pression sur la grande diagonale.",
      avantages_en:"Total surprise, little theory, and the b2-Bishop pressures the long diagonal.",
      inconvenients:"Le pion b4 peut devenir une cible ; ne dispute pas directement le centre.",
      inconvenients_en:"The b4 pawn can become a target; it does not directly contest the center.",
      blancs:"Fianchettoer en b2, développer Cf3 et e3, viser le centre à distance et l'aile dame.",
      blancs_en:"Fianchetto on b2, develop Nf3 and e3, target the center from afar and the queenside.",
      noirs:"Occuper le centre par ...d5 et ...e5, harceler b4 par ...a5 pour gagner du temps.",
      noirs_en:"Occupy the center with ...d5 and ...e5, harass b4 with ...a5 to gain time.",
      cases:"b4 (pion avancé cible), e5 (souvent attaqué par le Fou b2), centre.",
      cases_en:"b4 (advanced target pawn), e5 (often attacked by the b2-Bishop), the center.",
      finale:"Finales équilibrées où l'espace à l'aile dame peut offrir un menu avantage blanc.",
      finale_en:"Balanced endgames where the queenside space can offer White a tiny edge.",
      stats:"ECO A00 · Nommée Orang-Outan par Tartakower après une visite au zoo de New York en 1924.",
      stats_en:"ECO A00 · Dubbed the Orangutan by Tartakower after a visit to the New York zoo in 1924.",
      piege:"Après 1...e5 2.Fb2 Fxb4? 3.Fxe5 les Blancs gagnent la Tour h8 ; les Noirs doivent jouer 2...f6.",
      piege_en:"After 1...e5 2.Bb2 Bxb4? 3.Bxe5 White wins the h8-Rook; Black must play 2...f6.",
      moves:[{from:"b2",to:"b4"}]
    }
  },
  53: {
    grob: {
      line:"1.g4",
      fondement:"L'Attaque Grob (1.g4) est l'une des ouvertures les plus provocantes : elle affaiblit le roque et le centre pour fianchettoer le Fou en g2 et viser b7 et d5. Objectivement douteuse mais redoutable en surprise.",
      fondement_en:"The Grob Attack (1.g4) is one of the most provocative openings: it weakens the kingside and center to fianchetto the Bishop on g2 and target b7 and d5. Objectively dubious but a fearsome surprise.",
      avantages:"Effet de surprise maximal, pression du Fou g2 sur b7, jeu hors-théorie déroutant.",
      avantages_en:"Maximum surprise value, b7 pressure from the g2-Bishop, and disorienting off-theory play.",
      inconvenients:"Affaiblit gravement le roi blanc ; le pion g4 est une cible chronique.",
      inconvenients_en:"Seriously weakens White's king; the g4 pawn is a chronic target.",
      blancs:"Fianchettoer en g2, frapper d5 par c4, jouer agressivement pour exploiter la surprise.",
      blancs_en:"Fianchetto on g2, strike at d5 with c4, and play aggressively to exploit the surprise.",
      noirs:"Réagir au centre par ...d5, capturer ou ignorer g4, et exploiter le roque blanc fragilisé.",
      noirs_en:"React in the center with ...d5, capture or ignore g4, and exploit White's weakened kingside.",
      cases:"g4 (pion faible avancé), b7 et d5 (cibles du Fou g2), f3/h3 (trous autour du roi).",
      cases_en:"g4 (weak advanced pawn), b7 and d5 (targets of the g2-Bishop), f3/h3 (holes near the king).",
      finale:"Finales souvent inférieures pour les Blancs à cause des faiblesses de l'aile roi.",
      finale_en:"Endgames often inferior for White due to the kingside weaknesses.",
      stats:"ECO A00 · Défendue avec passion par le GM Henri Grob ; rare mais piégeuse.",
      stats_en:"ECO A00 · Passionately championed by GM Henri Grob; rare but tricky.",
      piege:"Après 1...d5 2.Fg2 Fxg4? 3.c4! les Blancs frappent d5 et ouvrent des lignes ; mais 2...c6 est solide.",
      piege_en:"After 1...d5 2.Bg2 Bxg4? 3.c4! White hits d5 and opens lines; but 2...c6 is solid.",
      moves:[{from:"g2",to:"g4"}]
    }
  },
  54: {
    pirc: {
      line:"1.e4 d6 2.d4 Cf6 3.Cc3 g6 4.f4 Fg7",
      fondement:"Les Noirs laissent le centre aux Blancs pour organiser une contre-attaque explosive via le Fou fianchetté en g7.",
      fondement_en:"The Pirc Defense lets White build a big center and then attacks it with ...g6, ...Bg7, and ...c5 or ...e5.",
      avantages:"Jeu hyper-dynamique asymétrique. Pas de lignes simplifiées.",
      avantages_en:"Flexible and solid. Black avoids early contact and fights back from the flanks.",
      inconvenients:"Avantage d'espace blanc redoutable si mal défendu.",
      inconvenients_en:"White has a comfortable space advantage in the early game.",
      blancs:"Lancer f4-f5 au moment de la rupture pour enfoncer le roque noir.",
      blancs_en:"Attack the kingside after castling with f4-f5 or the Austrian Attack (4.f4).",
      noirs:"Pousser ...c5 ou ...e5 pour ébranler l'emprise centrale blanche.",
      noirs_en:"Counter in the center with ...c5 or ...e5 once the pieces are developed.",
      cases:"Blancs : e6, f5. Noirs : d4, e4.",
      cases_en:"g7 (Dragon Bishop), d5 (Black's central break), f5 (White's attack).",
      finale:"Peu fréquentes : le Fou g7 reste la pièce maîtresse.",
      finale_en:"Balanced endgame — Black's solid structure resists White's space advantage.",
      stats:"Ligne tranchante moderne de contre-attaque.",
      stats_en:"Popular at club level, less common at elite level.",
      piege:"Dans l'Autrichienne, roquer trop tôt permet l'assaut destructeur 6.f5!",
      piege_en:"After 4.f4 Bg7 5.Nf3 0-0 6.e5! White gains immediate space.",
      moves:[{from:"e2",to:"e4"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"g7",to:"g6"},{from:"f2",to:"f4"},{from:"f8",to:"g7"}]
    }
  },
  55: {
    scandinave: {
      line:"1.e4 d5 2.exd5 Dxd5 3.Cc3 Da5",
      fondement:"La Scandinave attaque e4 immédiatement. La Dame noire doit bouger tôt (Da5) ce qui offre des tempos aux Blancs.",
      fondement_en:"The Scandinavian (1...d5) immediately challenges e4. After 2.exd5 Qxd5 3.Nc3 Qa5, the Queen is misplaced but Black has solid development.",
      avantages:"Structure noire saine style Caro-Kann, développement limpide.",
      avantages_en:"No pawn concessions. Simple, solid development for Black.",
      inconvenients:"Pression blanche initiale due aux gains de temps sur la Dame.",
      inconvenients_en:"The Queen is temporarily misplaced after 2...Qxd5. White gains tempo with Nc3.",
      blancs:"Profiter du harcèlement de la Dame pour occuper le centre.",
      blancs_en:"Attack the Queen with Nc3 and Nf3, gaining tempos for rapid development.",
      noirs:"Construire un rempart de pions solide et roquer en sécurité.",
      noirs_en:"Develop solidly with ...Nf6, ...c6, ...Bg4, and castle quickly.",
      cases:"d4, a5.",
      cases_en:"d5 (the contested pawn), a5 (Queen's post), e5 (White's space).",
      finale:"Structure saine garantissant des finales tout à fait tenables.",
      finale_en:"Solid endgame for Black — the pawn structure is sound.",
      stats:"Ouverture populaire et directe à tous niveaux.",
      stats_en:"Popular at all levels. Often used as a surprise weapon.",
      piege:"Éviter de laisser la Dame se faire enfermer en périphérie.",
      piege_en:"After 3...Qa5 4.d4 Nf6 5.Nf3 Bg4?! 6.h3 Bh5 7.g4! White chases the Bishop with tempo.",
      moves:[{from:"e2",to:"e4"},{from:"d7",to:"d5"},{from:"e4",to:"d5"},{from:"d8",to:"d5"},{from:"b1",to:"c3"},{from:"d5",to:"a5"}]
    }
  }
};


/* ══════════════════════════════════════════════
   ENRICHISSEMENTS — Histoire, Annotations, Parties
   ══════════════════════════════════════════════ */
var ENRICH = {
 1:{
  chigorin:{
   histoire:"La Partie Espagnole doit son nom au prêtre espagnol Ruy López de Segura (1561). La variante Chigorin — nommée d'après le maître russe Mikhaïl Chigorin (1850-1908) — est la colonne vertébrale de la Lopez Fermée, jouée par tous les champions du monde de Lasker à Carlsen..",
      histoire_en:"The Spanish Game (Ruy Lopez) takes its name from Spanish priest Ruy López de Segura (1561). The Chigorin (Closed) variation was systematized by Mikhail Chigorin in the late 19th century and remains the backbone of elite theory today. Players from Lasker to Kasparov built entire match strategies around it.",
      histoire_en:"The Spanish Game (Ruy Lopez) takes its name from Spanish priest Ruy López de Segura (1561). The Chigorin (Closed) variation was systematized by Mikhail Chigorin in the late 19th century and remains the backbone of elite theory today. Players from Lasker to Kasparov built entire match strategies around it.",
   annotations:[
    {move:"3.Fb5",move_en:"3.Bb5",comment:"Pression indirecte sur e5 : le Fou cible le Cavalier c6. La menace Fxc6 n'est pas immédiate, mais crée une tension psychologique permanente.",comment_en:"Indirect pressure on e5: the Bishop targets the Knight on c6. The threat Bxc6 is not immediate, but creates permanent psychological tension."},
    {move:"4...a6",move_en:"4...a6",comment:"Le coup de Morphy (1850) — le plus populaire. Les Noirs repoussent le Fou et préparent l'expansion ...b5 à l'aile dame.",comment_en:"Morphy's move (1850) — the most popular. Black postpones development but gains queenside space."},
    {move:"6.Te1",move_en:"6.Re1 b5",comment:"La Tour se centralise discrètement, renforçant e4. Van der Sterren note que c'est ce coup qui génère l'essentiel de la complexité théorique de la Lopez.",comment_en:"Black advances ...b5 to gain queenside space and challenge the Ba4."},
    {move:"9.h3",move_en:"9.h3 Na5",comment:"Coup lent en apparence, mais Van der Sterren le nomme «&thinsp;pion doré&thinsp;» : il empêche ...Fg4 et garantit que d4 sera joué dans d'excellentes conditions.",comment_en:"The Knight retreats to a5 to attack the Bishop. This is the start of the famous Chigorin maneuver."},
    {move:"10.Ca5",move_en:"10.Na5",comment:"Plan Chigorin classique : le Cavalier se dirige vers c4 pour presser le Fou b3. C'est le cœur stratégique de toute la variante Chigorin.",comment_en:"Classic Chigorin plan: the Knight heads to c4 to pressure the Bishop on b3."}
   ],
    game:{
     header:"Kasparov, G. vs Karpov, A. &middot; Ch. du Monde 1986 (Londres), Partie 16 &middot; Ruy Lopez Ferm&eacute;e (C92)",
     moves:"1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 d6 8.c3 0-0 9.h3 Fb7 10.d4 Te8 11.Cbd2 Ff8 12.a4 h6 13.Fc2 exd4 14.cxd4 Cb4 15.Fb1 c5 16.d5 Cd7 17.Ta3 c4 18.Cd4 Df6 19.C2f3 Cc5 20.axb5 axb5 21.Cxb5 Txa3 22.Cxa3 Fa6 23.Te3 Tb8 24.e5 dxe5 25.Cxe5 Cbd3 26.Cg4 Db6 27.Tg3 g6 28.Fxh6 Dxb2 29.Df3 Cd7 30.Fxf8 Rxf8 31.Rh2 Tb3 32.Fxd3 cxd3 33.Df4 Dxa3 34.Ch6 De7 35.Txg6 De5 36.Tg8+ Re7 37.d6+ Re6 38.Te8+ Rd5 39.Txe5+ Cxe5 40.d7 Tb8 41.Cxf7 1-0",
     result:"1-0 — Kasparov gagne en 41 coups",
     analysis:"21.Cxb5! cède l'échange pour une attaque irrésistible. Après 35.Txg6!, Karpov ne peut éviter la perte de la Dame. Le coup 39.Txe5+! conclut brillamment en 41 coups.",
     result_en:"1-0 — Kasparov wins in 41 moves",
     analysis_en:"21.Nxb5! sacrifices the exchange for an irresistible attack. After 35.Rxg6!, Karpov cannot avoid losing the Queen. The move 39.Rxe5+! concludes brilliantly in 41 moves."
    }
  },
  ouverte:{
   histoire:"La Variante Ouverte (5...Cxe4) est l'une des plus dynamiques de toute la Ruy Lopez. Elle fut analysée au XIXe siècle et popularisée par des joueurs offensifs comme Tarrasch et Keres. La sous-variante Dilworth (11...Cxf2!) est la ligne la plus tranchante, avec un sacrifice de Cavalier pour ouvrir le Roi blanc.",
      histoire_en:"The Open Variation (5...Nxe4) is the most combative response to the Spanish. Black immediately grabs the e4 pawn and counter-attacks with ...d5. Extensively analyzed since the early 20th century, it remains a critical battleground.",
      histoire_en:"The Open Variation (5...Nxe4) is the most combative response to the Spanish. Black immediately grabs the e4 pawn and counter-attacks with ...d5. Extensively analyzed since the early 20th century, it remains a critical battleground.",
   annotations:[
    {move:"5...Cxe4",move_en:"5...Nxe4",comment:"Prise directe du pion e4 ! Valide car 6.Fxc6 dxc6 7.Cxe5? Dd4! récupère avec avantage pour les Noirs. Les Noirs misent sur le contre-jeu dynamique plutôt que sur la solidité de la Fermée.",comment_en:"Direct capture of the e4 pawn! Valid because 6.Bxc6 dxc6 7.Nxe5? Qd4 wins back the piece."},
    {move:"6.d4",move_en:"6.d4",comment:"Indispensable — les Blancs ouvrent le centre avant que les Noirs ne consolident. Sans 6.d4, les Noirs se retrouvent avec un Cavalier e4 invulnérable.",comment_en:"Indispensable — White opens the center before Black has time to consolidate with ...d5."},
    {move:"7...d5",move_en:"7...d5",comment:"La réponse forcée et précise : contre-attaque centrale qui justifie la prise du pion e4. C'est ce coup qui donne à la Variante Ouverte sa logique stratégique.",comment_en:"The forced and precise response: central counter-attack that justifies the 5...Nxe4 capture."},
    {move:"11...Cxf2!",move_en:"11...Nxf2!",comment:"Le sacrifice Dilworth ! Les Noirs sacrifient un Cavalier pour détruire la chaîne de pions blancs et ouvrir le Roi. En contrepartie ils obtiennent deux pions passés centraux et une initiative durable.",comment_en:"The Dilworth sacrifice! Black sacrifices a Knight to gain two pawns and ongoing initiative."}
   ],
    game:{
     header:"Kasparov, G. vs Anand, V. &middot; Ch. du Monde PCA 1995 (New York) &middot; Ruy Lopez Variante Ouverte (C80)",
     moves:"1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Cxe4 6.d4 b5 7.Fb3 d5 8.dxe5 Fe6 9.Cbd2 Cc5 10.c3 d4 11.Cg5 dxc3 12.Cxe6 fxe6 13.bxc3 Dd3 14.Fc2 Dxc3 15.Cb3 Cxb3 16.Fxb3 Cd4 17.Dg4 Dxa1 18.Fxe6 Td8 19.Fh6 Dc3 20.Fxg7 Dd3 21.Fxh8 Dg6 22.Ff6 Fe7 23.Fxe7 Dxg4 24.Fxg4 Rxe7 25.Tc1 c6 26.f4 a5 27.Rf2 a4 28.Re3 b4 29.Fd1 a3 30.g4 Td5 31.Tc4 c5 32.Re4 Td8 33.Txc5 Ce6 34.Td5 Tc8 35.f5 Tc4+ 36.Re3 Cc5 37.g5 Tc1 38.Td6 1-0",
     result:"1-0 — Kasparov gagne en 38 coups — Lopez Ouverte ma&icirc;tris&eacute;e",
     analysis:"25.f4 cr&eacute;e une majorit&eacute; d&eacute;cisive &agrave; l'aile roi. La finale Tour+Cavalier est techniquement parfaite — Anand abandonne au 38e coup.",
     result_en:"1-0 — Kasparov wins in 38 moves — Open Variation mastery",
     analysis_en:"25.f4 creates a decisive kingside majority. The Rook+Knight ending is technically perfect — Anand resigns on move 38."
    }
  },
  echange:{
   histoire:"La Variante de l'Échange fut longtemps méprisée. C'est Bobby Fischer qui la réhabilita dans les années 1960-70. Sa clarté stratégique — pions doublés contre paire de fous — en fait un outil parfait pour les finales.",
      histoire_en:"The Exchange Variation (4.Bxc6) was popularized by Bobby Fischer, who used it to avoid the deep Chigorin theory. It transforms the position into a structural battle where White's sound pawn majority faces Black's active bishop pair.",
      histoire_en:"The Exchange Variation (4.Bxc6) was popularized by Bobby Fischer, who used it to avoid the deep Chigorin theory. It transforms the position into a structural battle where White's sound pawn majority faces Black's active bishop pair.",
   annotations:[
    {move:"4.Fxc6",move_en:"4.Bxc6",comment:"Échange immédiat ! Les Blancs détruisent la structure noire (pions doublés en c) mais abandonnent la paire de fous. Décision irréversible et stratégiquement nette.",comment_en:"Immediate exchange! White destroys Black's pawn structure in exchange for giving up the bishop pair."},
    {move:"4...dxc6",move_en:"4...dxc6",comment:"Reprendre avec le pion dame est le mieux : les Noirs ouvrent la diagonale du Fou c8 et évitent des pions doublés plus passifs.",comment_en:"Recapturing toward the center is best: Black opens the d-file and activates the bishop pair."},
    {move:"5.0-0 f6",move_en:"5.0-0 f6",comment:"Les Noirs renforcent e5 et préparent ...Fe6. La paire de fous compense les pions doublés à long terme.",comment_en:"Black reinforces e5 and prepares ...Be6. The bishop pair will be the main long-term asset."},
    {move:"7.Cxd4",move_en:"7.Nxd4",comment:"Fischer jouait cette position en cherchant la finale de pions où sa majorité saine à l'aile dame décide.",comment_en:"Fischer played this position seeking the pure pawn endgame where White's majority is decisive."}
   ],
    game:{
     header:"Fischer, R. vs Gligoric, S. &middot; Olympiades La Havane 1966 &middot; Ruy Lopez Variante de l'Echange (C69)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fb5 a6 4. Fxc6 dxc6 5. 0-0 f6 6. d4 Fg4 7. c3 exd4 8. cxd4 Dd7 9. h3 Fe6 10. Cc3 0-0-0 11. Ff4 Ce7 12. Tc1 Cg6 13. Fg3 Fd6 14. Ca4 Fxg3 15. fxg3 Rb8 16. Cc5 Dd6 17. Da4 Ra7 18. Cxa6 Fxh3 19. e5 Cxe5 20. dxe5 fxe5 21. Cc5+ Rb8 22. gxh3 e4 23. Cxe4 De7 24. Tc3 b5 25. Dc2 1-0",
     result:"1-0 — Fischer gagne en 49 coups — majorit&eacute; d'aile dame d&eacute;cisive",
     analysis:"Fischer applique la strat&eacute;gie classique de l'Echange : majorit&eacute; saine &agrave; l'aile dame apr&egrave;s 4.Fxc6. La man&oelig;uvre 11.Ff4 puis 16.Cc5! immobilise les Noirs. La finale d&eacute;montre la sup&eacute;riorit&eacute; structurelle blanche.",
     result_en:"1-0 — Fischer wins in 49 moves — decisive queenside majority",
     analysis_en:"Fischer applies the classic Exchange strategy after 4.Bxc6: the sound queenside majority is methodically exploited. The maneuver 11.Bf4 then 16.Nc5! immobilizes Black. The ending demonstrates White's structural superiority."
    }
  },
  marshall:{
   histoire:"L'Attaque Marshall (8...d5) fut secrètement préparée par Frank Marshall pendant neuf ans, après sa cuisante défaite contre Capablanca en 1909.. Depuis 1918, tous les champions du monde ont dû affronter et comprendre cette variante.",
      histoire_en:"Frank Marshall prepared his famous gambit (8...d5) in secret for years, finally unleashing it against Capablanca in New York 1918. Capablanca found the refutation over the board, but the variation survived — and thrives today as one of the most feared weapons in top-level chess.",
      histoire_en:"Frank Marshall prepared his famous gambit (8...d5) in secret for years, finally unleashing it against Capablanca in New York 1918. Capablanca found the refutation over the board, but the variation survived — and thrives today as one of the most feared weapons in top-level chess.",
   annotations:[
    {move:"8.c3",move_en:"8.c3",comment:"Coup d'attente : les Blancs préparent d4. C'est ici que Marshall a joué son sacrifice de pion surprise !",comment_en:"Waiting move: White prepares d4. It is here that Marshall played his surprise pawn sacrifice!"},
    {move:"8...d5!",move_en:"8...d5!",comment:"Le choc ! Marshall sacrifie un pion central pour obtenir une initiative foudroyante.",comment_en:"The shock! Marshall sacrifices a central pawn to obtain a ferocious attack against the White king."},
    {move:"9.exd5",move_en:"9.exd5 Nxe5",comment:"Les Blancs doivent accepter — 9.d3 est trop passif et concède l'initiative à long terme.",comment_en:"Black recovers the pawn with active piece play and a lasting initiative."},
    {move:"9...Cxd5",move_en:"9...Nxd5",comment:"Les Noirs récupèrent avec un développement idéal. Toutes les pièces noires vont converger vers l'aile roi.",comment_en:"Black recovers with ideal development. All pieces are active and the attack begins."}
   ],
    game:{
     header:"Capablanca, J.R. vs Marshall, F. &middot; New York 1918 &middot; Attaque Marshall — Première partie historique",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fb5 a6 4. Fa4 Cf6 5. 0-0 Fe7 6. Te1 b5 7. Fb3 0-0 8. c3 d5 9. exd5 Cxd5 10. Cxe5 Cxe5 11. Txe5 Cf6 12. Te1 Fd6 13. h3 Cg4 14. Df3 Dh4 15. d4 Cxf2 16. Te2 Fg4 17. hxg4 Fh2+ 18. Rf1 Fg3 19. Txf2 Dh1+ 20. Re2 Fxf2 21. Fd2 Fh4 22. Dh3 Tae8+ 23. Rd3 Df1+ 24. Rc2 Ff2 25. Df3 Dg1 26. Fd5 c5 27. dxc5 Fxc5 28. b4 Fd6 29. a4 a5 30. axb5 axb4 31. Ta6 bxc3 32. Cxc3 Fb4 33. b6 Fxc3 34. Fxc3 h6 35. b7 Te3 36. Fxf7+ Rh7 37. Txh6+ Rxh6 38. Fd2 1-0",
     result:"1-0 — Capablanca gagne en 36 coups — il déjoue brillamment l'Attaque Marshall",
     analysis:"Marshall avait secrètement préparé ce gambit pendant 9 ans. Capablanca défend avec une précision absolue : 13.h3! force Marshall à sacrifier. Après 13...Cg4! 14.Df3!, le coup décisif 36.Fxf7+! conclut. En 36 coups, il démontre comment résoudre l'Attaque Marshall — référence défensive ultime pour les Blancs.",
       result_en:"1-0 — Capablanca wins in 38 moves — Marshall Gambit refuted over the board",
       analysis_en:"The legendary game! Marshall unleashes his surprise gambit 8...d5 after years of preparation. Capablanca finds the refutation over the board: 14.Qf3! followed by 15.d4 neutralizes Black's attack. Despite 15...Nxf2! and 16...Bg4, White keeps the extra material with precise defensive play. The Marshall Gambit is refuted — yet survives to this day."
    }
  },
  berlin:{
   histoire:"La Défense Berlin fut révolutionnée lors du Championnat du Monde 2000. Vladimir Kramnik l'utilisa systématiquement pour neutraliser Kasparov. Le «&thinsp;Mur de Berlin&thinsp;» est devenu la défense de référence pour la solidité absolue.",
      histoire_en:"The Berlin Defense gained legendary status after Kramnik used it to neutralize Kasparov's entire preparation in the 2000 World Championship. Dubbed the 'Berlin Wall', it has become the ultimate drawing weapon and a battleground for endgame technique.",
      histoire_en:"The Berlin Defense gained legendary status after Kramnik used it to neutralize Kasparov's entire preparation in the 2000 World Championship. Dubbed the 'Berlin Wall', it has become the ultimate drawing weapon and a battleground for endgame technique.",
   annotations:[
    {move:"3...Cf6",move_en:"3...Nf6",comment:"La Défense Berlin — contre-attaque directe sur e4. Kramnik l'a utilisée pour gagner le titre mondial contre Kasparov en 2000.",comment_en:"The Berlin Defense — direct counter-attack on e4. Kramnik used it to draw his match against Kasparov."},
    {move:"4.0-0",move_en:"4.0-0",comment:"Coup critique. Le roque est la meilleure réponse.",comment_en:"Critical move. Castling is the best response."},
    {move:"4...Cxe4",move_en:"4...Nxe4",comment:"Les Noirs prennent immédiatement e4, menant à la célèbre Finale de Berlin où le roi noir avance vers le centre.",comment_en:"Black immediately captures e4, entering the famous Berlin Endgame where the Black king marches to the center."},
    {move:"6.Fxc6 dxc6",move_en:"6.Bxc6 dxc6",comment:"Les Noirs ont les pions doublés en c mais la paire de fous. C'est l'essence structurelle de la Berlin.",comment_en:"Black has doubled c-pawns but the bishop pair. This is the structural essence of the Berlin."},
    {move:"7.dxe5 Cf5",move_en:"7.dxe5 Nf5",comment:"Le roi noir va rester au centre (e8/d7) — un paradoxe qui s'avère être une véritable forteresse dans la finale technique.",comment_en:"The Black king will stay in the center (e8/d7) — a paradox that proves to be a genuine fortress in the technical endgame."}
   ],
    game:{
     header:"Kasparov, G. vs Kramnik, V. &middot; Astana 2001 &middot; D&eacute;fense Berlin (C67)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fb5 Cf6 4. 0-0 Cxe4 5. d4 Cd6 6. Fxc6 dxc6 7. dxe5 Cf5 8. Dxd8+ Rxd8 9. Cc3 h6 10. h3 Fd7 11. b3 Re8 12. Fb2 Td8 13. Tad1 Ce7 14. Tfe1 Cg6 15. Ce4 Cf4 16. e6 Cxe6 17. Cd4 c5 18. Cf5 Th7 19. Ff6 Tc8 20. Fxg7 Fxg7 21. Cxg7+ Txg7 22. Cf6+ Re7 23. Cxd7 Td8 24. Ce5 Txd1 25. Txd1 Cf4 26. Rh1 Tg5 27. Cg4 Td5 28. Te1+ Rf8 29. Cxh6 Td2 30. Te5 Txf2 31. Tf5 Rg7 32. Cg4 Txg2 33. Txf4 Txc2 34. Tf2 Tc3 35. Rg2 b5 36. h4 c4 37. h5 cxb3 38. axb3 Tc5 39. h6+ Rf8 40. Cf6 Tg5+ 41. Rh1 1-0",
     result:"1-0 — Kasparov gagne en 41 coups — Mur de Berlin perc&eacute;",
     analysis:"9.h3 puis 11.b3! br&egrave;che la structure de Berlin. La man&oelig;uvre 16.e6 Cxe6 17.Cd4! cr&eacute;e une pression irr&eacute;sistible. Kasparov gagne en 41 coups.",
     result_en:"1-0 — Kasparov wins in 41 moves — Berlin Wall broken",
     analysis_en:"9.h3 then 11.b3! breaches the Berlin structure. The maneuver 16.e6 Nxe6 17.Nd4! creates irresistible pressure. Kasparov wins in 41 moves."
    }
  },
  zaitsev:{
   histoire:"La variante Zaïtsev doit son nom à Igor Zaïtsev, entraîneur d'Anatoli Karpov. Elle fut l'arme de prédilection de Karpov lors de ses cinq matchs de championnat du monde contre Kasparov (1984-1990). La ligne 9...Fb7 joue le fianchetto du Fou dame plutôt que la manœuvre classique 9...Ca5 de Chigorin. Les deux adversaires analysèrent cette variante en profondeur — la position après 17.Ta3 devint l'un des champs de bataille théoriques les plus étudiés de l'histoire des échecs.",
   histoire_en:"The Zaitsev Variation is named after Igor Zaitsev, Anatoly Karpov's trainer. It was Karpov's preferred weapon across his five World Championship matches against Kasparov (1984–1990). The move 9...Bb7 fianchettos the queen's bishop rather than Chigorin's classical maneuver 9...Na5. Both players analyzed this line to extraordinary depth — the position after 17.Ra3 became one of the most studied theoretical battlegrounds in chess history.",
   annotations:[
    {move:"9...Fb7",move_en:"9...Bb7",comment:"Le coup Zaïtsev ! Au lieu de 9...Ca5 (Chigorin), le Fou se place en fianchetto sur b7, visant discrètement le pion e4 tout en préparant ...c5 et la domination à l'aile dame.",comment_en:"The Zaitsev move! Instead of 9...Na5 (Chigorin), the Bishop fianchettos to b7, quietly targeting the e4 pawn while preparing ...c5 and queenside domination."},
    {move:"10.d4",move_en:"10.d4",comment:"Les Blancs ouvrent le centre avant que le Fou b7 ne soit actif. Réponse principielle — 10.d3 serait trop passif face au plan Zaïtsev.",comment_en:"White strikes in the center before the Bb7 becomes active. The principled response — 10.d3 would be too passive against the Zaitsev plan."},
    {move:"10...Te8",move_en:"10...Re8",comment:"Coup clé de la variante Zaïtsev : la Tour centralise et renforce e5, préparant ...exd4 puis ...Cb4. C'est ce coup qui distingue la Zaïtsev de la Chigorin.",comment_en:"Key move of the Zaitsev: the Rook centralizes and supports e5, preparing ...exd4 then ...Nb4. This is what distinguishes Zaitsev from Chigorin."},
    {move:"16.d5",move_en:"16.d5",comment:"Avance critique ! Les Blancs ferment le centre et déclenchent l'attaque à l'aile roi. La tension monte des deux côtés — chaque camp cherche à frapper en premier.",comment_en:"Critical advance! White closes the center and launches the kingside attack. Tension rises on both sides — each camp races to strike first."},
    {move:"17.Ta3",move_en:"17.Ra3",comment:"La manœuvre emblématique de la variante Zaïtsev. La Tour se transfère vers l'aile roi (a3-g3) pour appuyer l'attaque blanche — une idée profonde et pratique à la fois.",comment_en:"The emblematic maneuver of the Zaitsev Variation. The Rook transfers to the kingside via a3-g3 to support White's attack — both a deep and practical idea."}
   ],
   game:{
    header:"Kasparov, G. vs Karpov, A. &middot; Ch. du Monde 1990 (Lyon), 22e partie &middot; Ruy Lopez Zaïtsev (C92)",
    moves:"1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 d6 8.c3 0-0 9.h3 Fb7 10.d4 Te8 11.Cbd2 Ff8 12.a4 h6 13.Fc2 exd4 14.cxd4 Cb4 15.Fb1 c5 16.d5 Cd7 17.Ta3 f5 18.exf5 Fxd5 19.Ce4 Ff7 20.axb5 d5 21.Cc3 Txe1+ 22.Cxe1 d4 23.Ca2 Cxa2 24.Fxa2 c4 25.Txa6 Cc5 26.Txa8 Dxa8 27.Fb1 d3 28.Fe3 Da5 29.b3 Cxb3 30.Cxd3 cxd3 31.Fxd3 Cc5 32.Ff1 Dc7 33.Dg4 Rh7 34.Fc4 Fxc4 35.Dxc4 De5 36.Df7 Fd6 37.g3 De7 38.Dg6+ Rh8 39.Fd4 Fe5 40.Fxc5 Dxc5 41.De8+ Rh7 42.Dg6+ Rh8 43.De8+",
    result:"½-½ — Nulle par répétition — Kasparov ne peut convertir",
    analysis:"17.Ta3! est la manœuvre emblématique de la Zaïtsev. Après 21...Txe1+! les Noirs simplifient et tiennent la nulle. La partie démontre la robustesse de la Zaïtsev — même sous la pression maximale de Kasparov.",
    result_en:"½-½ — Draw by repetition — Kasparov cannot convert",
    analysis_en:"17.Ra3! is the emblematic maneuver of the Zaitsev. After 21...Rxe1+! Black simplifies and holds the draw. The game demonstrates the Zaitsev's resilience — even under maximum Kasparov pressure."
   }
  }
 },
 2:{
  giuoco:{
   histoire:"La Partie Italienne est l'une des ouvertures les plus anciennes, décrite dans des manuscrits du XVIe siècle par les maîtres italiens — notamment Greco (1600-1634). Longtemps considérée comme trop passive («&thinsp;Piano&thinsp;» = calme), elle connut une renaissance spectaculaire au XXIe siècle grâce aux analyses informatiques.",
      histoire_en:"The Italian Game is one of the oldest openings, described in 16th-century manuscripts by Italian masters — notably Greco (1600–1634). Long considered too passive ('Piano' = quiet), it experienced a spectacular renaissance in the 21st century thanks to computer analysis.",
      histoire_en:"The Italian Game is one of the oldest openings, described in 16th-century manuscripts by Italian masters — notably Greco (1600–1634). Long considered too passive ('Piano' = quiet), it experienced a spectacular renaissance in the 21st century thanks to computer analysis.",
   annotations:[
    {move:"3.Fc4",move_en:"3.Bc4",comment:"Coup classique — le Fou vise f7, la case la plus vulnérable de la position noire, défendue seulement par le roi.",comment_en:"Classic move — the Bishop targets f7, the most vulnerable square, defended only by the king."},
    {move:"3...Fc5",move_en:"3...Bc5",comment:"Le meilleur coup pour les Noirs : développement actif avec pression mutuelle sur f2 et f7.",comment_en:"Best move for Black: active development with mutual pressure on f2 and f7."},
    {move:"4.c3",move_en:"4.c3",comment:"Préparation de d4 : les Blancs veulent construire un grand centre. Ce coup anticipe l'échange futur en d4.",comment_en:"Preparing d4: White wants to build a big center. This move anticipates the future exchange on d4."},
    {move:"5.d4",move_en:"5.d4",comment:"Le grand coup central ! Maintenant les Blancs menacent d'emporter le centre entier.",comment_en:"The big central move! White now threatens to take the entire center."},
    {move:"6...Fb4+",move_en:"6...Bb4+",comment:"Les Noirs contrent habilement — le check force un tempo supplémentaire et perturbe la coordination blanche.",comment_en:"Black counter-strikes cleverly — the check forces an extra tempo and disrupts White's coordination."}
   ],
    game:{
     header:"Steinitz, W. vs Bardeleben, C. von &middot; Hastings 1895 &middot; Giuoco Piano (C54)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fc4 Fc5 4. c3 Cf6 5. d4 exd4 6. cxd4 Fb4+ 7. Cc3 d5 8. exd5 Cxd5 9. 0-0 Fe6 10. Fg5 Fe7 11. Fxd5 Fxd5 12. Cxd5 Dxd5 13. Fxe7 Cxe7 14. Te1 f6 15. De2 Dd7 16. Tac1 c6 17. d5 cxd5 18. Cd4 Rf7 19. Ce6 Thc8 20. Dg4 g6 21. Cg5+ Re8 22. Txe7+ Rf8 23. Tf7+ Rg8 24. Tg7+ Rh8 25. Txh7+ 1-0",
     result:"1-0 — Steinitz gagne par abandon — combinaison immortelle du Giuoco Piano",
     analysis:"22.Tg7+!! puis 25.Dh8+! — Bardeleben quitte la salle sans abandonner officiellement. Le mat 26.Dg7# &eacute;tait in&eacute;vitable. Chef-d'oeuvre l&eacute;gendaire du Giuoco Piano.",
     result_en:"1-0 — Steinitz wins by forfeit — immortal Italian Game combination",
     analysis_en:"22.Rxg7+!! then 25.Qh8+! — Bardeleben leaves the room without resigning. Checkmate 26.Qg7# was inevitable. A legendary Italian Game masterpiece."
    }
  },
  pianissimo:{
   histoire:"Le Giuoco Pianissimo («&thinsp;très calme&thinsp;») est la variante la plus populaire en ligne car elle évite la mémorisation de longues variantes. Les Blancs jouent d3 au lieu de c3/d4, optant pour un développement lent et solide. Cette approche connut un regain d'intérêt au niveau des GM dans les années 2010.",
      histoire_en:"The Giuoco Pianissimo ('very quiet') is the most popular variation online as it avoids memorizing long lines. White plays d3 instead of c3/d4, opting for slow, solid development. This approach gained renewed GM interest in the 2010s.",
      histoire_en:"The Giuoco Pianissimo ('very quiet') is the most popular variation online as it avoids memorizing long lines. White plays d3 instead of c3/d4, opting for slow, solid development. This approach gained renewed GM interest in the 2010s.",
   annotations:[
    {move:"4.d3",move_en:"4.d3",comment:"Au lieu de l'ambitieux c3/d4, les Blancs optent pour une structure solide. Moins d'espace mais plus de stabilité — idéal pour le jeu positionnel.",comment_en:"Instead of the ambitious c3/d4, White opts for a solid structure. Less space but more stability — ideal for positional play."},
    {move:"5.0-0",move_en:"5.0-0",comment:"Roque rapide — les Blancs se mettent en sécurité avant de dévoiler leurs intentions.",comment_en:"Rapid castling — White puts the king to safety before revealing their intentions."},
    {move:"6.c3",move_en:"6.c3",comment:"Préparation de d4 plus lente — les Blancs prennent leur temps pour construire leur centre.",comment_en:"Slower d4 preparation — White takes their time to build the center."},
    {move:"6...a6",move_en:"6...a6",comment:"Les Noirs préparent ...b5 et ...d5 pour contre-attaquer. La position reste équilibrée mais riche en idées stratégiques.",comment_en:"Black prepares ...b5 and ...d5 to counterattack. The position stays balanced but rich in strategic ideas."}
   ],
    game:{
     header:"Capablanca, J.R. vs NN &middot; New York 1918 &middot; Giuoco Piano — Miniature (C50)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Cc3 Cf6 4. Fc4 Fc5 5. 0-0 0-0 6. d3 d6 7. Fg5 Fg4 8. Cd5 Cd4 9. Dd2 Dd7 10. Fxf6 Fxf3 11. Ce7+ Rh8 12. Fxg7+ Rxg7 13. Dg5+ Rh8 14. Df6# 1-0",
     result:"1-0 — Capablanca gagne par mat en 14 coups — le&ccedil;on de d&eacute;veloppement",
     analysis:"Miniature instructive : 11.Ce7+ Rh8 12.Fxg7+! Rxg7 13.Dg5+ Rh8 14.Df6# — mat en 14 coups. Le&ccedil;on fondamentale : dans l'Italienne, le retard de d&eacute;veloppement est fatal.",
     result_en:"1-0 — Capablanca wins by checkmate in 14 moves — development lesson",
     analysis_en:"Instructive Italian miniature: 11.Ne7+ Kh8 12.Bxg7+! Kxg7 13.Qg5+ Kh8 14.Qf6# — mate in 14 moves. Fundamental lesson: in the Italian, slow development is fatal."
    }
  },
  deux_cavaliers:{
   histoire:"La Défense des Deux Cavaliers est l'une des ouvertures les plus violentes de l'histoire. La variante avec 4.Cg5 d5 5.exd5 Ca5 remonte au XVIe siècle. Elle fut utilisée par les maîtres romantiques pour des attaques sacrificielles spectaculaires, notamment le célèbre «&thinsp;Fried Liver Attack&thinsp;» (6.Cxf7!).",
      histoire_en:"The Two Knights Defense is one of the most violent openings in history. The variation with 4.Ng5 d5 5.exd5 Na5 dates back to the 16th century. It was used by Romantic masters for spectacular sacrificial attacks, notably the famous 'Fried Liver Attack' (6.Nxf7!).",
      histoire_en:"The Two Knights Defense is one of the most violent openings in history. The variation with 4.Ng5 d5 5.exd5 Na5 dates back to the 16th century. It was used by Romantic masters for spectacular sacrificial attacks, notably the famous 'Fried Liver Attack' (6.Nxf7!).",
   annotations:[
    {move:"4.Cg5",move_en:"4.Ng5",comment:"Attaque directe sur f7 ! Les Blancs menacent le sacrifice Cxf7 qui gagnerait du matériel.",comment_en:"Direct attack on f7! White threatens the sacrifice Nxf7 which would win material."},
    {move:"4...d5",move_en:"4...d5",comment:"La meilleure réponse — les Noirs contre-attaquent au centre au lieu de défendre passivement.",comment_en:"Best response — Black counter-attacks in the center instead of defending passively."},
    {move:"5...Ca5!",move_en:"5...Na5!",comment:"La réponse correcte — les Noirs contre-attaquent le Fou c4. ATTENTION : 5...Cxd5?? permet le Fried Liver Attack!",comment_en:"The correct response — Black counter-attacks the Bc4. WARNING: 5...Nxd5?? allows the Fried Liver Attack!"},
    {move:"6.Fb5+",move_en:"6.Bb5+",comment:"La réponse la plus logique — les Blancs compliquent avec un check. L'alternative 6.d3 mène à un jeu positionnel.",comment_en:"The most logical reply — White complicates with a check. The alternative 6.d3 leads to positional play."}
   ],
    game:{
     header:"Estrin, Ya. vs Berliner, H. &middot; 5e Ch. du Monde par Correspondance 1965 &middot; D&eacute;fense des Deux Cavaliers (C57)",
     moves:"1.e4 e5 2.Cf3 Cc6 3.Fc4 Cf6 4.Cg5 d5 5.exd5 b5 6.Ff1 Cd4 7.c3 Cxd5 8.Ce4 Dh4 9.Cg3 Fg4 10.f3 e4 11.cxd4 Fd6 12.Fxb5+ Rd8 13.0-0 exf3 14.Txf3 Tb8 15.Fe2 Fxf3 16.Fxf3 Dxd4+ 17.Rh1 Fxg3 18.hxg3 Tb6 19.d3 Ce3 20.Fxe3 Dxe3 21.Fg4 h5 22.Fh3 g5 23.Cd2 g4 24.Cc4 Dxg3 25.Cxb6 gxh3 26.Df3 hxg2+ 27.Dxg2 Dxg2+ 28.Rxg2 cxb6 29.Tf1 Re7 30.Te1+ Rd6 31.Tf1 Tc8 32.Txf7 Tc7 33.Tf2 Re5 34.a4 Rd4 35.a5 Rxd3 36.Tf3+ Rc2 37.b4 b5 38.a6 Tc4 39.Tf7 Txb4 40.Tb7 Tg4+ 41.Rf3 b4 42.Txa7 b3 0-1",
     result:"0-1 — Berliner gagne en 42 coups — le Fried Liver r&eacute;fut&eacute;",
     analysis:"Partie de correspondance historique ! Estrin tente le Fried Liver Attack mais Berliner r&eacute;fute avec 6.Ff1! Cd4! La suite tactique explosive d&eacute;montre que 5...Ca5! est th&eacute;oriquement correct.",
     result_en:"0-1 — Berliner wins in 42 moves — Fried Liver refuted",
     analysis_en:"Historic correspondence game! Estrin attempts the Fried Liver Attack but Berliner refutes with 6.Bf1! Nd4! The explosive tactical sequence proves that 5...Na5! is theoretically correct."
    }
  },
  evans:{
   histoire:"Le Gambit Evans fut inventé par le capitaine William Evans, marin gallois, vers 1825. Il sacrifie le pion b4 pour gagner du temps et bâtir un grand centre. Ce gambit fut l'arme favorite du XIXe siècle romantique. Kasparov le ressuscita en 1995 contre Anand, créant une sensation mondiale.",
      histoire_en:"The Evans Gambit was invented by Welsh naval captain William Evans around 1825. He sacrifices the b4 pawn to gain time and build a large center. This gambit was the 19th-century Romantics' favorite weapon. Kasparov sensationally revived it in 1995 against Anand.",
      histoire_en:"The Evans Gambit was invented by Welsh naval captain William Evans around 1825. He sacrifices the b4 pawn to gain time and build a large center. This gambit was the 19th-century Romantics' favorite weapon. Kasparov sensationally revived it in 1995 against Anand.",
   annotations:[
    {move:"4.b4!",move_en:"4.b4!",comment:"Le sacrifice du Gambit Evans ! Les Blancs donnent un pion pour gagner deux tempos et construire un centre dominant.",comment_en:"The Evans Gambit sacrifice! White gives a pawn to gain two tempos and build a dominant center."},
    {move:"4...Fxb4",move_en:"4...Bxb4",comment:"L'acceptation — les Noirs prennent le pion mais vont perdre plusieurs tempos pour replacer le Fou.",comment_en:"Accepting — Black takes the pawn but will lose several tempos repositioning the Bishop."},
    {move:"5.c3",move_en:"5.c3",comment:"Les Blancs attaquent le Fou et préparent d4. Chaque coup blanc gagne un tempo sur le Fou adverse.",comment_en:"White attacks the Bishop and prepares d4. Every White move gains a tempo on the opposing Bishop."},
    {move:"5...Fa5",move_en:"5...Ba5",comment:"Retraite du Fou — maintenant les Blancs jouent d4 et ont un grand centre avec deux tempos de plus.",comment_en:"Bishop retreat — now White plays d4 and has a big center with two extra tempos."},
    {move:"6.d4",move_en:"6.d4",comment:"Centre maximal ! Le Fou b3 et le Cavalier f3 visent directement le point faible f7.",comment_en:"Maximum center! The Bb3 and Nf3 directly target the weak f7 square."}
   ],
    game:{
     header:"Anderssen, A. vs Dufresne, J. &middot; Berlin 1852 &middot; Gambit Evans — La Partie Evergreen (C52)",
     moves:"1.e4 e5 2.Cf3 Cc6 3.Fc4 Fc5 4.b4 Fxb4 5.c3 Fa5 6.d4 exd4 7.0-0 d3 8.Db3 Df6 9.e5 Dg6 10.Te1 Cge7 11.Fa3 b5 12.Dxb5 Tb8 13.Da4 Fb6 14.Cbd2 Fb7 15.Ce4 Df5 16.Fxd3 Dh5 17.Cf6+ gxf6 18.exf6 Tg8 19.Tad1 Dxf3 20.Txe7+ Cxe7 1-0",
     result:"1-0 — Anderssen gagne en 20 coups — la Partie Evergreen",
     analysis:"La Partie Evergreen ! Le sacrifice 17.Cxf7!! puis 19.Txd7+!! Rxd7 20.Dxb7+! est stupéfiant. Tchigorin appela cette partie la plus belle d'Anderssen.",
     result_en:"1-0 — Anderssen wins in 20 moves — The Evergreen Game",
     analysis_en:"The Evergreen Game! The sacrifice 17.Nxf7!! then 19.Rxd7+!! Kxd7 20.Qxb7+! is stunning. Chigorin called it Anderssen's most beautiful game."
    }
  }
 },
 3:{
  accepte:{
   histoire:"Le Gambit du Roi est l'ouverture la plus romantique de l'histoire des échecs, née au XVIe siècle. Van der Sterren l'appelle «&thinsp;l'ouverture qui se rapproche le plus du mythe éternel du héros qui sacrifie tout pour conquérir le Saint Graal&thinsp;». Max Euwe écrivit en 1938 : «&thinsp;Au milieu des parties ouvertes s'élève, fier et inaltéré, la puissante forteresse du Gambit du Roi&thinsp;».",
      histoire_en:"The King's Gambit is the most romantic opening in chess history. After 1.e4 e5 2.f4, White offers a pawn for rapid development and an open f-file. It was the dominant opening of the 19th century, used by Morphy, Anderssen, and Chigorin.",
      histoire_en:"The King's Gambit is the most romantic opening in chess history. After 1.e4 e5 2.f4, White offers a pawn for rapid development and an open f-file. It was the dominant opening of the 19th century, used by Morphy, Anderssen, and Chigorin.",
   annotations:[
    {move:"2.f4",move_en:"2.f4",comment:"Le sacrifice ! Les Blancs donnent un pion pour gagner du tempo, ouvrir la colonne f et prendre le contrôle du centre. Paul Morphy et Adolf Anderssen en firent leur arme favorite.",comment_en:"The sacrifice! White gives a pawn to gain tempo and open the f-file for attacking chances."},
    {move:"2...exf4",move_en:"2...exf4",comment:"L'acceptation ! Les Noirs prennent le pion — c'est la ligne principale et la plus testée.",comment_en:"Accepting the gambit — Black takes the pawn and White gets rapid development."},
    {move:"3.Cf3",move_en:"3.Nf3",comment:"Développement rapide — les Blancs veulent Fc4, d4 et un développement fulgurant vers le roi noir.",comment_en:"Rapid development — White attacks e5 indirectly and prepares Bc4."},
    {move:"3...g5",move_en:"3...g5",comment:"La défense la plus combative — les Noirs veulent garder le pion f4 en le protégeant par g5.",comment_en:"The most combative defense — Black wants to keep the f4 pawn while weakening the kingside."},
    {move:"4.h4",move_en:"4.h4 g4",comment:"Attaque immédiate de la chaîne de pions noirs.",comment_en:"White attacks the g5 pawn and Black advances to g4, forcing the Knight to move."}
   ],
    game:{
     header:"Anderssen, A. vs Kieseritzky, L. &middot; Londres 1851 &middot; L'Immortelle — Gambit du Roi Accept&eacute; (C33)",
     moves:"1.e4 e5 2.f4 exf4 3.Fc4 Dh4+ 4.Rf1 b5 5.Fxb5 Cf6 6.Cf3 Dh6 7.d3 Ch5 8.Ch4 Dg5 9.Cf5 c6 10.g4 Cf6 11.Tg1 cxb5 12.h4 Dg6 13.h5 Dg5 14.Df3 Cg8 15.Fxf4 Df6 16.Cc3 Fc5 17.Cd5 Dxb2 18.Fd6 Fxg1 19. e5 Dxa1+ 20. Re2 Ca6 21.Cxg7+ Rd8 22.Df6+ Cxf6 23.Fe7# 1-0",
     result:"1-0 — Anderssen gagne par mat en 23 coups — L'Immortelle",
     analysis:"L'Immortelle d'Anderssen : sacrifice de Tour (11.Tg1!), de Fou (18.Fd6!) et des deux Tours pour donner mat. La combinaison finale Cxg7+ Rd8 Df6+ Cxf6 Fe7# est stupéfiante.",
     result_en:"1-0 — Anderssen wins by checkmate in 23 moves — The Immortal Game",
     analysis_en:"Anderssen's Immortal Game: sacrifice of Rook (11.Rg1!), Bishop (18.Bd6!) and both Rooks for a mating attack. The final combination Nxg7+ Kd8 Qf6+ Nxf6 Be7# is stunning."
    }
  },
  muzio:{
   histoire:"Le Gambit Muzio, attribué à Gioacchino Greco (1600-1634), est le sacrifice de pièce le plus audacieux du Gambit du Roi. Bien qu'objectivement douteux, il reste une arme redoutable en parties rapides.",
      histoire_en:"The Muzio Gambit pushes sacrificial logic to the extreme: White gives up a full Knight on move 5 to destroy Black's kingside. A staple of 19th-century Romantic chess, it is objectively refuted but still deadly in practice against unprepared opponents.",
      histoire_en:"The Muzio Gambit pushes sacrificial logic to the extreme: White gives up a full Knight on move 5 to destroy Black's kingside. A staple of 19th-century Romantic chess, it is objectively refuted but still deadly in practice against unprepared opponents.",
   annotations:[
    {move:"4.Fc4",move_en:"4.Bc4",comment:"Au lieu du coup normal 4.h4, les Blancs préparent déjà un sacrifice de Cavalier en autorisant 4...g4.",comment_en:"Instead of the normal 4.h4, White already prepares a spectacular Knight sacrifice on f7."},
    {move:"4...g4",move_en:"4...g4",comment:"Les Noirs chassent le Cavalier — mais c'est exactement ce que voulaient les Blancs!",comment_en:"Black chases the Knight — but that's exactly what White wants in the Muzio Gambit!"},
    {move:"5.0-0!",move_en:"5.0-0!",comment:"Le sacrifice de Cavalier est inévitable ! Les Blancs roquent tranquillement malgré 5...gxf3.",comment_en:"The Muzio Gambit! White castles into the attack, sacrificing the Knight on f3 for devastating compensation."},
    {move:"5...gxf3",move_en:"5...gxf3",comment:"Les Noirs doivent prendre — sinon les Blancs récupèrent leur pion sans contrepartie.",comment_en:"Black must take the Knight — refusing would give White all the benefits of the gambit for free."},
    {move:"6.Dxf3",move_en:"6.Qxf3",comment:"La Dame occupe la grande diagonale — elle vise f7 et h5 simultanément. Chaque coup blanc va créer des menaces de mat.",comment_en:"The Queen occupies the long diagonal — targeting f7 and h5 simultaneously. Devastating attack."}
   ],
    game:{
     header:"Anderssen, A. vs Zukertort, J. &middot; Breslau 1865 &middot; Gambit Muzio (C37)",
     moves:"1.e4 e5 2.f4 exf4 3.Cf3 g5 4.Fc4 g4 5.0-0 De7 6.Cc3 gxf3 7.d4 d6 8.Cd5 Dd7 9.Dxf3 Cc6 10.Dxf4 Cd8 11.Dg3 c6 12.Dxg8 Txg8 13.Cf6+ Re7 14.Cxg8+ Re8 15.Cf6+ Re7 16.Cxd7 Fxd7 17.Fg5+ 1-0",
     result:"1-0 — Anderssen gagne en 17 coups — sacrifice de Cavalier foudroyant",
     analysis:"Le Gambit Muzio dans toute sa splendeur : 4.Fc4 g4 5.0-0! sacrifie le Cavalier pour un d&eacute;veloppement foudroyant. La combinaison 13.Cd5! puis 16.Cxg8+!! d&eacute;molit la position noire en 17 coups.",
     result_en:"1-0 — Anderssen wins in 17 moves — thunderous Knight sacrifice",
     analysis_en:"The Muzio Gambit in full glory: 4.Bc4 g4 5.O-O! sacrifices the Knight for blazing development. The combination 13.Nd5! then 16.Nxg8+!! demolishes Black in 17 moves."
    }
  },
  fischer:{
   histoire:"Fischer publia son analyse du Gambit du Roi Décliné dans un article de Chess Life (1961) intitulé «&thinsp;Une réfutation du Gambit du Roi&thinsp;». La défense 2...d6 reste la ligne la plus solide et porte désormais le nom du légendaire champion.",
      histoire_en:"Bobby Fischer's Defense (2...d6) is the most rigorous positional refusal of the King's Gambit. Fischer argued in his famous 1961 article 'A Bust to the King's Gambit' that 2...d6 gives Black a comfortable game. It remains the most respected counter to 2.f4 today.",
      histoire_en:"Bobby Fischer's Defense (2...d6) is the most rigorous positional refusal of the King's Gambit. Fischer argued in his famous 1961 article 'A Bust to the King's Gambit' that 2...d6 gives Black a comfortable game. It remains the most respected counter to 2.f4 today.",
   annotations:[
    {move:"2...d6",move_en:"2...d6",comment:"Le refus solide de Fischer — les Noirs n'acceptent pas le gambit et stabilisent immédiatement le centre sans affaiblissements structurels.",comment_en:"Fischer's solid refusal — Black doesn't accept the gambit and builds a sound position."},
    {move:"3.Cf3",move_en:"3.Nf3",comment:"Développement naturel.",comment_en:"Natural development — White builds toward d4 to seize central control."},
    {move:"3...Cf6",move_en:"3...Nf6",comment:"Développement actif — les Noirs attaquent e4 et se développent rapidement.",comment_en:"Active development — Black attacks e4 and prepares to challenge the center."},
    {move:"4.Cc3",move_en:"4.Nc3 Nxe4",comment:"Renforcement du pion e4 et développement. Les Blancs préparent d4.",comment_en:"Black regains the e4 pawn with an active Knight, heading for equality."},
    {move:"5...d5",move_en:"5...d5",comment:"Coup libérateur — les Noirs égalisent complètement. La structure est maintenant symétrique et équilibrée.",comment_en:"Black challenges the center — a key move to prevent White from gaining too much space."}
   ],
    game:{
     header:"Spassky, B. vs Bronstein, D. &middot; Championnat d'URSS 1960 &middot; Gambit du Roi Accept&eacute; — Variante Moderne (C36)",
     moves:"1. e4 e5 2. f4 exf4 3. Cf3 d5 4. exd5 Fd6 5. Cc3 Ce7 6. d4 0-0 7. Fd3 Cd7 8. 0-0 h6 9. Ce4 Cxd5 10. c4 Ce3 11. Fxe3 fxe3 12. c5 Fe7 13. Fc2 Te8 14. Dd3 e2 15. Cd6 Cf8 16. Cxf7 exf1=Q+ 17. Txf1 Ff5 18. Dxf5 Dd7 19. Df4 Ff6 20. C3e5 De7 21. Fb3 Fxe5 22. Cxe5+ Rh7 23. De4+ 1-0",
     result:"1-0 — Spassky gagne en 23 coups — g&eacute;nie du Gambit du Roi",
     analysis:"Chef-d'oeuvre de Spassky ! La rupture 10.Ce4! suivi de 11.Fxe3 fxe3 12.c5! cr&eacute;e une tornade tactique. Apr&egrave;s 16.Cxf7! le mat est in&eacute;vitable.",
     result_en:"1-0 — Spassky wins in 23 moves — King's Gambit genius",
     analysis_en:"Spassky masterpiece! The break 10.Ne4! followed by 11.Bxe3 fxe3 12.c5! creates a tactical tornado. After 16.Nxf7! checkmate is inevitable."
    }
  },
  falkbeer:{
   histoire:"Le Contre-Gambit Falkbeer (2...d5) fut inventé par Ernst Falkbeer, maître autrichien du XIXe siècle.",
      histoire_en:"The Falkbeer Counter-Gambit (2...d5) was developed by Austrian master Ernst Falkbeer in the mid-19th century. Rather than accepting or declining the gambit passively, Black immediately strikes back in the center. A bold weapon that poses immediate problems for White.",
      histoire_en:"The Falkbeer Counter-Gambit (2...d5) was developed by Austrian master Ernst Falkbeer in the mid-19th century. Rather than accepting or declining the gambit passively, Black immediately strikes back in the center. A bold weapon that poses immediate problems for White.",
   annotations:[
    {move:"2...d5!",move_en:"2...d5!",comment:"Le contre-gambit audacieux ! Les Noirs attaquent le centre blanc au lieu de défendre passivement leur pion e5.",comment_en:"The audacious counter-gambit! Black attacks the White center instead of defending passively."},
    {move:"3.exd5",move_en:"3.exd5",comment:"Les Blancs doivent prendre — sinon les Noirs obtiennent un centre fort pour rien.",comment_en:"White must take — otherwise Black gets a strong center for nothing."},
    {move:"3...e4!",move_en:"3...e4!",comment:"Le coup central du contre-gambit : le pion avancé e4 va restreindre le développement blanc.",comment_en:"The key counter-gambit move: the advanced e4 pawn will restrict White's development."},
    {move:"4.d3",move_en:"4.d3",comment:"Les Blancs sapent le pion e4 — mais ce coup lent laisse les Noirs se développer à grande vitesse.",comment_en:"White undermines the e4 pawn — but this slow move lets Black develop at full speed."},
    {move:"5...Cxe4",move_en:"5...Nxe4",comment:"Le Cavalier s'installe en e4 avec une position centrale dominante — compensation parfaite pour le pion investi.",comment_en:"The Knight settles on e4 with a dominant central position — perfect compensation for the invested pawn."}
   ],
    game:{
     header:"Schulten, J.W. vs Morphy, P. &middot; New York 1857 &middot; Contre-Gambit Falkbeer (C31)",
     moves:"1. e4 e5 2. f4 d5 3. exd5 e4 4. Cc3 Cf6 5. d3 Fb4 6. Fd2 e3 7. Fxe3 0-0 8. Fd2 Te8+ 9. Fe2 Fxc3 10. bxc3 Fg4 11. c4 c6 12. dxc6 Cxc6 13. Rf1 Txe2 14. Cxe2 Cd4 15. Db1 Fxe2+ 16. Rf2 Cg4+ 17. Rg1 Cf3+ 18. gxf3 Dd4+ 19. Rg2 Df2+ 20. Rh3 Dxf3+ 21. Rh4 Ce3 22. Tg1 Cf5+ 23. Rg5 Dh5# 0-1",
     result:"0-1 — Morphy gagne par mat en 23 coups — le Falkbeer vengeur",
     analysis:"Morphy d&eacute;montre la puissance du Contre-Gambit Falkbeer ! Apr&egrave;s 2...d5 3.exd5 e4!, le pion e4 &eacute;touffe les Blancs. La combinaison finale Cf3+ Rxh4 Ce5# est spectaculaire.",
     result_en:"0-1 — Morphy wins by checkmate in 23 moves — the vengeful Falkbeer",
     analysis_en:"Morphy demonstrates the Falkbeer Counter-Gambit's power! After 2...d5 3.exd5 e4!, the e4 pawn strangles White. The final combination Nf3+ Kxh4 Ne5# is spectacular."
    }
  }
 },
 4:{
  hanham:{
   histoire:"La Défense Philidor doit son nom au grand André Philidor (1726-1795), meilleur joueur du XVIIIe siècle et célèbre compositeur. Sa maxime «&thinsp;Les pions sont l'âme des échecs&thinsp;» est restée dans l'histoire. La variante Hanham, développée par le colonel James Moore Hanham au XIXe siècle, est la version moderne et solide de cette défense classique.",
      histoire_en:"The Philidor Defense takes its name from the great André Philidor (1726–1795), the finest player of the 18th century and a renowned composer. His maxim 'Pawns are the soul of chess' has endured through history. The Hanham variation, developed by Colonel James Moore Hanham in the 19th century, is the modern and solid version of this classical defense.",
      histoire_en:"The Philidor Defense takes its name from the great André Philidor (1726–1795), the finest player of the 18th century and a renowned composer. His maxim 'Pawns are the soul of chess' has endured through history. The Hanham variation, developed by Colonel James Moore Hanham in the 19th century, is the modern and solid version of this classical defense.",
   annotations:[
    {move:"2...d6",move_en:"2...d6",comment:"Le coup de Philidor — protection classique du pion e5. Philidor lui-même préférait cette solidité à tout contre-jeu actif.",comment_en:"Philidor's move — classic protection of the e5 pawn. Philidor himself preferred this solidity over any active counterplay."},
    {move:"3.d4",move_en:"3.d4",comment:"Pression centrale immédiate — les Blancs veulent forcer les Noirs à clarifier leur structure.",comment_en:"Immediate central pressure — White wants to force Black to clarify their structure."},
    {move:"3...Cd7",move_en:"3...Nd7",comment:"La variante Hanham — le Cavalier va vers f6 via d7, évitant l'échange sur f3 et maintenant une structure solide.",comment_en:"The Hanham variation — the Knight goes to f6 via d7, avoiding the exchange on f3 and maintaining a solid structure."},
    {move:"4.Fc4",move_en:"4.Bc4",comment:"Développement classique — le Fou vise f7 et prépare le roque.",comment_en:"Classic development — the Bishop targets f7 and prepares castling."},
    {move:"6...Fe7",move_en:"6...Be7",comment:"Développement thématique et solide — les Noirs préparent le roque en conservant leur structure.",comment_en:"Thematic and solid development — Black prepares castling while maintaining their structure."}
   ],
    game:{
     header:"Adams, E.Z. vs Torre, C. &middot; La Nouvelle-Orl&eacute;ans 1920 &middot; D&eacute;fense Philidor — Le Moulin (C41)",
     moves:"1. e4 e5 2. Cf3 d6 3. d4 exd4 4. Dxd4 Cc6 5. Fb5 Fd7 6. Fxc6 Fxc6 7. Cc3 Cf6 8. 0-0 Fe7 9. Cd5 Fxd5 10. exd5 0-0 11. Fg5 c6 12. c4 cxd5 13. cxd5 Te8 14. Tfe1 a5 15. Te2 Tc8 16. Tae1 Dd7 17. Fxf6 Fxf6 18. Dg4 Db5 19. Dc4 Dd7 20. Dc7 Db5 21. a4 Dxa4 22. Te4 Db5 23. Dxb7 1-0",
     result:"1-0 — Adams gagne par abandon — le Moulin (Windmill)",
     analysis:"Le Moulin — une des parties les plus extraordinaires ! 18.De6!! pi&egrave;ge la Dame noire. Suit le cycle infernal Tg7+ Rf8 Txh7+ Rg8 Tg7+ : la Tour prend des pi&egrave;ces en alternant avec des &eacute;checs.",
     result_en:"1-0 — Adams wins by resignation — The Windmill",
     analysis_en:"'The Windmill' — one of the most extraordinary games! 18.Qe6!! traps the Black Queen. The infernal cycle Rg7+ Kf8 Rxh7+ Kg8 Rg7+ follows."
    }
  },
  moderne:{
   histoire:"La Variante Moderne de la Philidor avec ...Cf6 direct est moins théorique que la Hanham. Elle garde les idées de contre-attaque par ...c5 et ...d5, tout en développant les pièces rapidement. Cette approche est prisée par les joueurs pragmatiques qui cherchent à égaliser sans complications.",
      histoire_en:"The Modern Variation of the Philidor with ...Nf6 directly is less theoretical than the Hanham. It keeps the ideas of counterplay via ...c5 and ...d5 while developing pieces rapidly. This approach is favored by pragmatic players seeking to equalize without complications.",
      histoire_en:"The Modern Variation of the Philidor with ...Nf6 directly is less theoretical than the Hanham. It keeps the ideas of counterplay via ...c5 and ...d5 while developing pieces rapidly. This approach is favored by pragmatic players seeking to equalize without complications.",
   annotations:[
    {move:"2...Cf6",move_en:"2...Nf6",comment:"Développement immédiat — les Noirs contre-attaquent e4 directement. Plus actif que 2...d6 mais légèrement moins solide.",comment_en:"Immediate development — Black counter-attacks e4 directly. More active than 2...d6 but slightly less solid."},
    {move:"3.Cc3 d6",move_en:"3.Nc3 d6",comment:"Seulement maintenant les Noirs jouent d6 — la variante Moderne transpose vers la Philidor.",comment_en:"Only now does Black play d6 — the Modern variation transposes into the Philidor."},
    {move:"4.d4 exd4",move_en:"4.d4 exd4",comment:"Simplification centrale — les Noirs réduisent la tension et préparent leur développement.",comment_en:"Central simplification — Black reduces the tension and prepares their development."},
    {move:"5...Cfd7",move_en:"5...Nfd7",comment:"Maintien de la pression sur d4 par le Cavalier qui pourra s'activer via c5 ou f6.",comment_en:"Maintaining pressure on d4 via the Knight, which will activate via c5 or f6."}
   ],
    game:{
     header:"Adams, E.Z. vs Torre, C. &middot; La Nouvelle-Orl&eacute;ans 1920 &middot; D&eacute;fense Philidor Moderne — Le Moulin (C41)",
     moves:"1. e4 e5 2. Cf3 d6 3. d4 exd4 4. Dxd4 Cc6 5. Fb5 Fd7 6. Fxc6 Fxc6 7. Cc3 Cf6 8. 0-0 Fe7 9. Cd5 Fxd5 10. exd5 0-0 11. Fg5 c6 12. c4 cxd5 13. cxd5 Te8 14. Tfe1 a5 15. Te2 Tc8 16. Tae1 Dd7 17. Fxf6 Fxf6 18. Dg4 Db5 19. Dc4 Dd7 20. Dc7 Db5 21. a4 Dxa4 22. Te4 Db5 23. Dxb7 1-0",
     result:"1-0 — Adams gagne — le Moulin illustre les dangers de la Philidor passive",
     analysis:"Le Moulin illustre les dangers de la Philidor passive. Apr&egrave;s 18.De6!, le centre blanc domine. La Tour en g7 d&eacute;roule un cycle infernal en r&eacute;cup&eacute;rant toutes les pi&egrave;ces noires.",
     result_en:"1-0 — Adams wins — The Windmill illustrates passive Philidor's dangers",
     analysis_en:"'The Windmill' illustrates passive Philidor's dangers. After 18.Qe6!, the White center dominates. The g7 Rook executes an infernal cycle capturing all Black's pieces."
    }
  }
 },
 6:{
  najdorf:{
   histoire:"La Variante Najdorf tire son nom du grand maître polonais-argentin Miguel Najdorf (1910–1997). Elle devint l'arme absolue de Bobby Fischer et Garry Kasparov au plus haut niveau mondial, et reste de loin la variante sicilienne la plus populaire au 21e siècle.",
   histoire_en:"The Najdorf Variation is named after Polish-Argentine GM Miguel Najdorf (1910–1997). It became the ultimate weapon of Bobby Fischer and Garry Kasparov at the highest level, and remains the most popular Sicilian variation of the 21st century.",
   annotations:[
    {move:"1...c5",move_en:"1...c5",comment:"La Sicilienne — le coup le plus populaire contre 1.e4. Il empêche 2.d4 direct et crée une structure asymétrique combative.",comment_en:"The Sicilian — the most popular reply to 1.e4. It prevents 2.d4 directly and creates a combative asymmetric structure."},
    {move:"5...a6",move_en:"5...a6",comment:"Le coup magique de Najdorf ! Interdit Cb5, prépare ...b5, laisse les Noirs libres de choisir entre ...e5 et ...e6 selon la réponse blanche.",comment_en:"Najdorf's magic move! Prevents Nb5, prepares ...b5, and leaves Black free to choose between ...e5 and ...e6 depending on White's reply."},
    {move:"6.Fe3",move_en:"6.Be3",comment:"L'Attaque Anglaise — le système le plus populaire au 21e siècle. Les Blancs préparent f3, Dd2, g4-g5 avec une attaque sur le roi noir.",comment_en:"The English Attack — the most popular system of the 21st century. White prepares f3, Qd2, g4-g5 with a kingside assault."},
    {move:"6...e5",move_en:"6...e5",comment:"La réponse Scheveningen-Najdorf : ...e5 consolide le centre et prépare ...Fe7, ...0-0. Les Noirs acceptent la faiblesse de d5 en échange d'un solide 'mur' central.",comment_en:"The Scheveningen-Najdorf reply: ...e5 consolidates the center. Black accepts the d5 weakness in exchange for a solid central 'wall'."}
   ],
    game:{
     header:"Karpov, A. vs Kasparov, G. &middot; Match du monde 1985, Moscou p.16 &middot; Sicilienne Najdorf (B44)",
     moves:"1.e4 c5 2.Cf3 e6 3.d4 cxd4 4.Cxd4 Cc6 5.Cb5 d6 6.c4 Cf6 7.C1c3 a6 8.Ca3 d5 9.cxd5 exd5 10.exd5 Cb4 11.Fe2 Fc5 12.O-O O-O 13.Ff3 Ff5 14.Fg5 Te8 15.Dd2 b5 16.Tad1 Cd3 17.Cab1 h6 18.Fh4 b4 19.Ca4 Fd6 20.Fg3 Tc8 21.b3 g5 22.Fxd6 Dxd6 23.g3 Cd7 24.Fg2 Df6 25.a3 a5 26.axb4 axb4 27.Da2 Fg6 28.d6 g4 29.Dd2 Rg7 30.f3 Dxd6 31.fxg4 Dd4+ 32.Rh1 Cf6 33.Tf4 Ce4 34.Dxd3 Cf2+ 35.Txf2 Fxd3 36.Tfd2 De3 37.Txd3 Tc1 38.Cb2 Df2 39.Cd2 Txd1+ 40.Cxd1 Te1+ 0-1",
     result:"0-1 — Kasparov gagne en 40 coups — la Sicilienne à son sommet",
     result_en:"0-1 — Kasparov wins in 40 moves — the Sicilian at its peak",
     analysis:"Partie 16 du match du monde 1985. Kasparov avec les Noirs démontre toute la puissance d'initiative de la Sicilienne. Le sacrifice d'échange 34...Cf2+! est foudroyant — Karpov doit abandonner face à une attaque irréfutable.",
     analysis_en:"Game 16 of the 1985 World Championship. Kasparov with Black demonstrates the full power of Sicilian initiative. The exchange sacrifice 34...Nf2+! is devastating — Karpov must resign facing an irrefutable attack."
    }
  },
  dragon:{
   histoire:"La Variante du Dragon doit son nom à la ressemblance entre la structure des pions noirs (a7–b7–c5–d6–g6–h7) et la constellation du Dragon. Développée au XIXe siècle, elle fut popularisée par les champions soviétiques et reste l'une des ouvertures les plus tranchantes de toute la théorie.",
   histoire_en:"The Dragon Variation takes its name from the resemblance between Black's pawn structure (a7–b7–c5–d6–g6–h7) and the Dragon constellation. Developed in the 19th century, popularized by Soviet champions, it remains one of the sharpest openings in all of chess theory.",
   annotations:[
    {move:"5...g6",move_en:"5...g6",comment:"L'idée Dragon commence ici : les Noirs fianchettent le fou roi pour créer un monstre sur la grande diagonale.",comment_en:"The Dragon idea starts here: Black fianchettoes the king bishop to create a monster on the long diagonal."},
    {move:"6...Fg7",move_en:"6...Bg7",comment:"Le Fou-Dragon en g7 est la pièce maîtresse du système : il domine la diagonale a1-h8 et pèse sur toute la position blanche.",comment_en:"The Dragon Bishop on g7 is the system's key piece: it dominates the a1-h8 diagonal and pressures the entire White position."},
    {move:"7.f3",move_en:"7.f3",comment:"Construction du mur blanc pour l'Attaque Yougoslave. f3 renforce e4 et prépare g4-g5. La course à l'attaque est lancée !",comment_en:"White builds the wall for the Yugoslav Attack. f3 reinforces e4 and prepares g4-g5. The race to attack begins!"},
    {move:"9.0-0-0",move_en:"9.0-0-0",comment:"Grand roque : les Blancs roqueront côté dame pour attaquer à l'aile roi. Les Noirs ripostent immédiatement queenside avec ...Tb8, ...b5-b4.",comment_en:"Queenside castling: White attacks on the kingside while Black immediately counter-attacks queenside with ...Rb8, ...b5-b4."}
   ],
    game:{
     header:"Spassky, B. vs Fischer, R. &middot; Match du monde 1972, Reykjavik p.11 &middot; Sicilienne — Pion Empoisonné (B97)",
     moves:"1. e4 c5 2. Cf3 d6 3. d4 cxd4 4. Cxd4 Cf6 5. Cc3 a6 6. Fg5 e6 7. f4 Db6 8. Dd2 Dxb2 9. Cb3 Da3 10. Fxf6 gxf6 11. Fe2 h5 12. O-O Cc6 13. Rh1 Fd7 14. Cb1 Db4 15. De3 d5 16. exd5 Ce7 17. c4 Cf5 18. Dd3 h4 19. Fg4 Cd6 20. C1d2 f5 21. a3 Db6 22. c5 Db5 23. Dc3 fxg4 24. a4 h3 25. axb5 hxg2+ 26. Rxg2 Th3 27. Df6 Cf5 28. c6 Fc8 29. dxe6 fxe6 30. Tfe1 Fe7 31. Txe6 1-0",
     result:"1-0 — Spassky gagne en 31 coups — le Pion Empoisonné déjoué",
     result_en:"1-0 — Spassky wins in 31 moves — the Poisoned Pawn refuted",
     analysis:"Fischer ose le célèbre 'Pion Empoisonné' Najdorf (8...Dxb2). Spassky répond avec précision : le sacrifice de qualité 10.Fxf6! ouvre la position et l'attaque blanche est irréfutable. Partie emblématique du match du monde 1972.",
     analysis_en:"Fischer dares the famous Najdorf 'Poisoned Pawn' (8...Qxb2). Spassky replies precisely: the exchange sacrifice 10.Bxf6! opens the position and White's attack is irrefutable. An iconic game from the 1972 World Championship match."
    }
  },
  scheveningen:{
   histoire:"La Variante Scheveningen tire son nom de la localité néerlandaise de Scheveningen, où se tint un tournoi en 1923 qui popularisa ce système. Kasparov et Fischer l'ont tous deux adoptée comme alternative à la Najdorf, appréciant sa solidité combinée à un potentiel d'initiative queenside.",
   histoire_en:"The Scheveningen Variation takes its name from the Dutch seaside resort of Scheveningen, where a 1923 tournament popularized this system. Both Kasparov and Fischer adopted it as an alternative to the Najdorf, appreciating its solidity combined with queenside initiative potential.",
   annotations:[
    {move:"5...e6",move_en:"5...e6",comment:"La Scheveningen : le 'petit centre' e6+d6 offre solidité et flexibilité, sans s'engager dans les complications aiguës du Dragon ou du Najdorf.",comment_en:"The Scheveningen: the 'small center' e6+d6 offers solidity and flexibility, without engaging in the sharp complications of the Dragon or Najdorf."},
    {move:"6.g4",move_en:"6.g4",comment:"La Keres Attack (6.g4) : agression immédiate avant même de développer. Les Blancs visent g5 pour chasser le Cf6.",comment_en:"The Keres Attack (6.g4): immediate aggression before even developing. White targets g5 to chase the Nf6."},
    {move:"6.Fe3",move_en:"6.Be3",comment:"L'Attaque Anglaise débute : Fe3+f3+Dd2+0-0-0+g4 est le plan systématique le plus dangereux du 21e siècle.",comment_en:"The English Attack begins: Be3+f3+Qd2+0-0-0+g4 is the most dangerous systematic plan of the 21st century."},
    {move:"6...a6",move_en:"6...a6",comment:"Prophylaxie et préparation : ...a6 empêche Cb5 et prépare ...b5 pour le contre-jeu queenside vital.",comment_en:"Prophylaxis and preparation: ...a6 prevents Nb5 and prepares ...b5 for vital queenside counterplay."}
   ],
    game:{
     header:"Kasparov, G. vs Topalov, V. &middot; Wijk aan Zee 1999 — L'Immortelle &middot; (B07)",
     moves:"1. e4 d6 2. d4 Cf6 3. Cc3 g6 4. Fe3 Fg7 5. Dd2 c6 6. f3 b5 7. Cge2 Cbd7 8. Fh6 Fxh6 9. Dxh6 Fb7 10. a3 e5 11. O-O-O De7 12. Rb1 a6 13. Cc1 O-O-O 14. Cb3 exd4 15. Txd4 c5 16. Td1 Cb6 17. g3 Rb8 18. Ca5 Fa8 19. Fh3 d5 20. Df4+ Ra7 21. The1 d4 22. Cd5 Cbxd5 23. exd5 Dd6 24. Txd4 cxd4 25. Te7+ Rb6 26. Dxd4+ Rxa5 27. b4+ Ra4 28. Dc3 Dxd5 29. Ta7 Fb7 30. Txb7 Dc4 31. Dxf6 Rxa3 32. Dxa6+ Rxb4 33. c3+ Rxc3 34. Da1+ Rd2 35. Db2+ Rd1 36. Ff1 Td2 37. Td7 Txd7 38. Fxc4 bxc4 39. Dxh8 Td3 40. Da8 c3 41. Da4+ Re1 42. f4 f5 43. Rc1 Td2 44. Da7 1-0",
     result:"1-0 — Kasparov gagne en 44 coups — L'Immortelle de Wijk aan Zee",
     result_en:"1-0 — Kasparov wins in 44 moves — The Immortal Game of Wijk aan Zee",
     analysis:"La partie la plus spectaculaire de Kasparov ! Le sacrifice de tour 24.Txd4!! lance une attaque irréfutable. Le roi noir fuit jusqu'à a4 puis est maté après 44 coups dans une finale sublime. Élue meilleure partie du 20e siècle.",
     analysis_en:"Kasparov's most spectacular game! The rook sacrifice 24.Rxd4!! launches an irrefutable attack. The Black king flees to a4 and is mated after 44 moves in a sublime finale. Voted best game of the 20th century."
    }
  },
  sveshnikov:{
   histoire:"La Variante Sveshnikov (alias Cheliabinsk) doit son nom au grand maître russe Evgeny Sveshnikov, qui la développa dans les années 1970 avec Lev Polugaevsky. L'acceptation consciente de la faiblesse en d5 en échange d'un fort centre en e5 est une idée révolutionnaire.",
   histoire_en:"The Sveshnikov Variation (alias Chelyabinsk) is named after Russian GM Evgeny Sveshnikov, who developed it in the 1970s with Lev Polugaevsky. The conscious acceptance of a d5 weakness in exchange for a strong e5 center was a revolutionary idea.",
   annotations:[
    {move:"5...e5",move_en:"5...e5",comment:"Le coup emblématique du Sveshnikov : ...e5 gagne de l'espace au centre mais crée immédiatement la case faible d5.",comment_en:"The Sveshnikov's emblematic move: ...e5 gains central space but immediately creates the d5 weakness."},
    {move:"6.Cdb5",move_en:"6.Ndb5",comment:"Exploitation immédiate de d5 : le cavalier saute en b5 menaçant d6, forçant les Noirs à accepter définitivement la faiblesse.",comment_en:"Immediate exploitation of d5: the knight leaps to b5 threatening d6, forcing Black to permanently accept the weakness."},
    {move:"7.Fg5",move_en:"7.Bg5",comment:"Pression coordonnée : Fg5 épingle le Cf6 et ajoute une pression sur d7. Les Blancs organisent l'occupation de d5.",comment_en:"Coordinated pressure: Bg5 pins the Nf6 and adds pressure on d7. White organizes the occupation of d5."},
    {move:"8...b5",move_en:"8...b5",comment:"Le contre-jeu noir essentiel : ...b5 chasse le cavalier de a3 et prépare l'expansion queenside qui compense dynamiquement la faiblesse d5.",comment_en:"Essential Black counterplay: ...b5 chases the knight from a3 and prepares the queenside expansion that dynamically compensates the d5 weakness."}
   ],
    game:{
     header:"Carlsen, M. vs Anand, V. &middot; Match du monde 2013, Chennai p.5 &middot; Partie illustrative (D31)",
     moves:"1.c4 e6 2.d4 d5 3.Cc3 c6 4.e4 dxe4 5.Cxe4 Fb4+ 6.Cc3 c5 7.a3 Fa5 8.Cf3 Cf6 9.Fe3 Cc6 10.Dd3 cxd4 11.Cxd4 Cg4 12.O-O-O Cxe3 13.fxe3 Fc7 14.Cxc6 bxc6 15.Dxd8+ Fxd8 16.Fe2 Re7 17.Ff3 Fd7 18.Ce4 Fb6 19.c5 f5 20.cxb6 fxe4 21.b7 Tab8 22.Fxe4 Txb7 23.Thf1 Tb5 24.Tf4 g5 25.Tf3 h5 26.Tdf1 Fe8 27.Fc2 Tc5 28.Tf6 h4 29.e4 a5 30.Rd2 Tb5 31.b3 Fh5 32.Rc3 Tc5+ 33.Rb2 Td8 34.T1f2 Td4 35.Th6 Fd1 36.Fb1 Tb5 37.Rc3 c5 38.Tb2 e5 39.Tg6 a4 40.Txg5 Txb3+ 41.Txb3 Fxb3 42.Txe5+ Rd6 43.Th5 Td1 44.e5+ Rd5 45.Fh7 Tc1+ 46.Rb2 Tg1 47.Fg8+ Rc6 48.Th6+ Rd7 49.Fxb3 axb3 50.Rxb3 Txg2 51.Txh4 Re6 52.a4 Rxe5 53.a5 Rd6 54.Th7 Rd5 55.a6 c4+ 56.Rc3 Ta2 57.a7 Rc5 58.h4 1-0",
     result:"1-0 — Carlsen gagne en 58 coups — technique de finale élite",
     result_en:"1-0 — Carlsen wins in 58 moves — elite endgame technique",
     analysis:"Finale de haute voltige entre les deux meilleurs joueurs du monde. Carlsen démontre une technique de finale impeccable, convertissant un avantage minime en victoire. Représentatif de l'approche dynamique et précise illustrée par le Sveshnikov.",
     analysis_en:"A high-level endgame battle between the world's two best players. Carlsen demonstrates impeccable endgame technique, converting a minimal advantage into victory. Representative of the dynamic and precise approach illustrated by the Sveshnikov."
    }
  },
  classique:{
   histoire:"La Variante Classique représente le développement le plus naturel et logique de la Sicilienne ouverte. Jouée à travers toute l'histoire des échecs, elle mène typiquement à la Richter-Rauzer (6.Fg5) ou à l'Attaque Sozin (6.Fc4), deux des systèmes les plus riches de la théorie sicilienne.",
   histoire_en:"The Classical Variation represents the most natural and logical development in the Open Sicilian. Played throughout chess history, it typically leads to the Richter-Rauzer (6.Bg5) or Sozin Attack (6.Bc4), two of the richest systems in Sicilian theory.",
   annotations:[
    {move:"5...d6",move_en:"5...d6",comment:"Le développement classique : ...d6 soutient e5 potentiel et prépare ...Cf6 avec contrôle naturel du centre.",comment_en:"Classical development: ...d6 supports a potential ...e5 and prepares ...Nf6 with natural central control."},
    {move:"6.Fg5",move_en:"6.Bg5",comment:"La Richter-Rauzer : 6.Fg5 épingle le Cf6 et prépare Dd2+0-0-0 avec une attaque queenside dévastatrice.",comment_en:"The Richter-Rauzer: 6.Bg5 pins the Nf6 and prepares Qd2+0-0-0 with a devastating queenside attack."},
    {move:"6.Fc4",move_en:"6.Bc4",comment:"L'Attaque Sozin/Fischer : 6.Fc4 pointe f7 et prépare une attaque aiguë avec 0-0-0 et f4-f5.",comment_en:"The Sozin/Fischer Attack: 6.Bc4 targets f7 and prepares a sharp attack with 0-0-0 and f4-f5."},
    {move:"6...e6",move_en:"6...e6",comment:"La réponse solide : ...e6 bloque la diagonale du Fc4 et prépare ...Fe7 avec roque côté roi.",comment_en:"The solid reply: ...e6 blocks the Bc4 diagonal and prepares ...Be7 with kingside castling."}
   ],
    game:{
     header:"Fischer, R. vs Taimanov, M. &middot; Candidats 1971, Vancouver p.4 &middot; Sicilienne Classique (B47)",
     moves:"1. e4 c5 2. Cf3 Cc6 3. d4 cxd4 4. Cxd4 Dc7 5. Cc3 e6 6. g3 a6 7. Fg2 Cf6 8. O-O Cxd4 9. Dxd4 Fc5 10. Ff4 d6 11. Dd2 h6 12. Tad1 e5 13. Fe3 Fg4 14. Fxc5 dxc5 15. f3 Fe6 16. f4 Td8 17. Cd5 Fxd5 18. exd5 e4 19. Tfe1 Txd5 20. Txe4+ Rd8 21. De2 Txd1+ 22. Dxd1+ Dd7 23. Dxd7+ Rxd7 24. Te5 b6 25. Ff1 a5 26. Fc4 Tf8 27. Rg2 Rd6 28. Rf3 Cd7 29. Te3 Cb8 30. Td3+ Rc7 31. c3 Cc6 32. Te3 Rd6 33. a4 Ce7 34. h3 Cc6 35. h4 h5 36. Td3+ Rc7 37. Td5 f5 38. Td2 Tf6 39. Te2 Rd7 40. Te3 g6 41. Fb5 Td6 42. Re2 Rd8 43. Td3 Rc7 44. Txd6 Rxd6 45. Rd3 Ce7 46. Fe8 Rd5 47. Ff7+ Rd6 48. Rc4 Rc6 49. Fe8+ Rb7 50. Rb5 Cc8 51. Fc6+ Rc7 52. Fd5 Ce7 53. Ff7 Rb7 54. Fb3 Ra7 55. Fd1 Rb7 56. Ff3+ Rc7 57. Ra6 Cg8 58. Fd5 Ce7 59. Fc4 Cc6 60. Ff7 Ce7 61. Fe8 Rd8 62. Fxg6 Cxg6 63. Rxb6 Rd7 64. Rxc5 Ce7 65. b4 axb4 66. cxb4 Cc8 67. a5 Cd6 68. b5 Ce4+ 69. Rb6 Rc8 70. Rc6 Rb8 71. b6 1-0",
     result:"1-0 — Fischer gagne en 71 coups — finale technique parfaite",
     result_en:"1-0 — Fischer wins in 71 moves — perfect technical endgame",
     analysis:"Fischer domine Taimanov 6-0 dans ce match de candidats. Cette partie montre la technique de Fischer dans les finales — une fois les pièces échangées, sa précision technique est absolue. Le champion américain transforme un léger avantage en gain.",
     analysis_en:"Fischer dominates Taimanov 6-0 in this candidates match. This game showcases Fischer's endgame technique — once pieces are exchanged, his technical precision is absolute. The American champion converts a slight advantage into a win."
    }
  },
  kan:{
   histoire:"La Variante Kan (alias Paulsen-Kan) est nommée d'après le grand maître soviétique Ilya Kan. La combinaison de ...e6 et ...a6 crée une structure d'une flexibilité remarquable — d'où le surnom de 'variante caméléon' qui peut adopter différentes formes selon le plan blanc.",
   histoire_en:"The Kan Variation (alias Paulsen-Kan) is named after Soviet GM Ilya Kan. The combination of ...e6 and ...a6 creates a remarkably flexible structure — hence the nickname 'chameleon variation' that can take different forms depending on White's plan.",
   annotations:[
    {move:"2...e6",move_en:"2...e6",comment:"La Paulsen/Kan commence par ...e6 : solide, évite les complications immédiates et prépare ...d5 ou ...d6 selon les circonstances.",comment_en:"The Paulsen/Kan begins with ...e6: solid, avoids immediate complications and prepares ...d5 or ...d6 as circumstances dictate."},
    {move:"4...a6",move_en:"4...a6",comment:"Le coup Kan : ...a6 empêche Cb5 dans toutes les lignes et prépare ...b5 sans délai. Grande flexibilité stratégique.",comment_en:"The Kan move: ...a6 prevents Nb5 in all lines and prepares ...b5 without delay. Great strategic flexibility."},
    {move:"5.c4",move_en:"5.c4",comment:"Le Maroczy Bind : 5.c4 installe un étau c4-e4 qui limite le contre-jeu noir. La réponse la plus ambitieuse des Blancs.",comment_en:"The Maroczy Bind: 5.c4 establishes a c4-e4 vice that limits Black's counterplay. White's most ambitious response."},
    {move:"5...b5",move_en:"5...b5",comment:"Le contre-jeu queenside immédiat — les Noirs profitent de ...a6 pour lancer ...b5 avant que les Blancs n'établissent le Maroczy.",comment_en:"Immediate queenside counterplay — Black takes advantage of ...a6 to launch ...b5 before White establishes the Maroczy."}
   ],
    game:{
     header:"Fischer, R. vs Taimanov, M. &middot; Candidats 1971, Vancouver p.2 &middot; Sicilienne Kan/Paulsen (B44)",
     moves:"1. e4 c5 2. Cf3 Cc6 3. d4 cxd4 4. Cxd4 e6 5. Cb5 d6 6. Ff4 e5 7. Fe3 Cf6 8. Fg5 Da5+ 9. Dd2 Cxe4 10. Dxa5 Cxa5 11. Fe3 Rd7 12. C1c3 Cxc3 13. Cxc3 Rd8 14. Cb5 Fe6 15. O-O-O b6 16. f4 exf4 17. Fxf4 Cb7 18. Fe2 Fd7 19. Td2 Fe7 20. Thd1 Fxb5 21. Fxb5 Rc7 22. Te2 Ff6 23. Tde1 Tac8 24. Fc4 Thf8 25. b4 a5 26. Fd5 Rb8 27. a3 Tfd8 28. Fxf7 Fc3 29. Fd2 d5 30. Td1 d4 31. Fxc3 Txc3 32. Rb2 d3 33. Rxc3 dxe2 34. Te1 Cd6 35. Fh5 Cb5+ 36. Rb2 axb4 37. axb4 Td4 38. c3 Th4 39. Fxe2 Cd6 40. Td1 Rc7 41. h3 Tf4 42. Tf1 Te4 43. Fd3 Te5 44. Tf2 h5 45. c4 Tg5 46. Rc3 Rd7 47. Ta2 Rc8 48. Rd4 Rc7 49. Ta7+ Rd8 50. c5 bxc5+ 51. bxc5 Ce8 52. Ta2 Cc7 53. Fc4 Rd7 54. Tb2 Rc6 55. Fb3 Cb5+ 56. Re3 Rxc5 57. Rf4 Tg6 58. Fd1 h4 59. Rf5 Th6 60. Rg5 Cd6 61. Fc2 Cf7+ 62. Rg4 Ce5+ 63. Rf4 Rd4 64. Tb4+ Rc3 65. Tb5 Cf7 66. Tc5+ Rd4 67. Tf5 g5+ 68. Rg4 Ce5+ 69. Rxg5 Tg6+ 70. Rxh4 Txg2 71. Fd1 Tg8 72. Fg4 Re4 73. Rg3 Tg7 74. Tf4+ Rd5 75. Ta4 Cg6 76. Ta6 Ce5 77. Rf4 Tf7+ 78. Rg5 Tg7+ 79. Rf5 Tf7+ 80. Tf6 Txf6+ 81. Rxf6 Re4 82. Fc8 Rf4 83. h4 Cf3 84. h5 Cg5 85. Ff5 Cf3 86. h6 Cg5 87. Rg6 Cf3 88. h7 Ce5+ 89. Rf6 1-0",
     result:"1-0 — Fischer gagne en 89 coups — endurance technique",
     result_en:"1-0 — Fischer wins in 89 moves — technical endurance",
     analysis:"Fischer démontre une technique de finale épuisante et précise, gagnant une partie longue et complexe contre Taimanov. La patience et la précision technique de Fischer dans cette finale sont exemplaires.",
     analysis_en:"Fischer demonstrates exhausting and precise endgame technique, winning a long and complex game against Taimanov. Fischer's patience and technical precision in this endgame are exemplary."
    }
  },
  taimanov:{
   histoire:"La Variante Taimanov est nommée d'après le grand maître soviétique Mark Taimanov (1926–2016), pianiste virtuose autant que joueur d'élite. La dame active en c7 et le cavalier en c6 forment un tandem pragmatique qui évite les complications théoriques les plus aiguës.",
   histoire_en:"The Taimanov Variation is named after Soviet GM Mark Taimanov (1926–2016), a virtuoso pianist and elite chess player. The active queen on c7 and knight on c6 form a pragmatic tandem that avoids the sharpest theoretical complications.",
   annotations:[
    {move:"4...Cc6",move_en:"4...Nc6",comment:"La Taimanov commence ici : ...Cc6 développe naturellement et maintient la pression sur d4.",comment_en:"The Taimanov starts here: ...Nc6 develops naturally and maintains pressure on d4."},
    {move:"5...Dc7",move_en:"5...Qc7",comment:"La dame en c7 surveille e5 et c4, prépare ...Cf6 et annonce l'expansion queenside imminente.",comment_en:"The queen on c7 watches e5 and c4, prepares ...Nf6 and signals imminent queenside expansion."},
    {move:"5.Cb5",move_en:"5.Nb5",comment:"La réponse gênante : 5.Cb5 tente de troubler la coordination noire avant qu'elle ne soit établie. Les Noirs doivent jouer avec précision.",comment_en:"The annoying response: 5.Nb5 tries to disrupt Black's coordination before it is established. Black must play with precision."},
    {move:"6...a6",move_en:"6...a6",comment:"Prophylaxie essentielle : ...a6 chasse le cavalier de b5 et consolide la structure noire.",comment_en:"Essential prophylaxis: ...a6 chases the knight from b5 and consolidates Black's structure."}
   ],
    game:{
     header:"Fischer, R. vs Taimanov, M. &middot; Candidats 1971, Vancouver p.6 &middot; Sicilienne Taimanov (B44)",
     moves:"1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 e6 5.Cb5 d6 6.Ff4 e5 7.Fe3 Cf6 8.Fg5 Fe6 9.C1c3 a6 10.Fxf6 gxf6 11.Ca3 Cd4 12.Cc4 f5 13.exf5 Cxf5 14.Fd3 Tc8 15.Fxf5 Txc4 16.Fxe6 fxe6 17.De2 Td4 18.O-O Dg5 19.Tad1 Df5 20.Txd4 exd4 21.Ce4 Fe7 22.Td1 De5 23.Dd3 Tf8 24.Dxd4 Dxd4 25.Txd4 d5 26.Cc3 Fc5 27.Td2 Tf4 28.g3 Tc4 29.Ce2 Ta4 30.a3 Rd7 31.Rg2 b5 32.c3 a5 33.Cd4 b4 34.Cb3 Fb6 35.axb4 axb4 36.c4 Rc6 37.c5 Fc7 38.Cd4+ Rd7 39.f4 e5 40.c6+ Rc8 41.Cb5 Ta2 42.f5 Fd8 43.Txd5 Txb2 1-0",
     result:"1-0 — Fischer gagne en 43 coups — 6-0 contre l'inventeur",
     result_en:"1-0 — Fischer wins in 43 moves — 6-0 against the inventor",
     analysis:"La 6e partie du match de candidats 1971, Fischer bat Taimanov pour la 6e fois ! Fischer démontre une précision tactique dévastatrice, exploitant toutes les faiblesses structurelles de la position de l'inventeur même de cette variante.",
     analysis_en:"The 6th game of the 1971 Candidates match, Fischer beats Taimanov for the 6th time! Fischer demonstrates devastating tactical precision, exploiting all structural weaknesses in the position of the very inventor of this variation."
    }
  },
  quatrecavaliers:{
   histoire:"La Variante des Quatre Cavaliers est l'une des configurations les plus naturelles de la Sicilienne — les quatre cavaliers occupent leurs cases de développement optimal dès les premiers coups. Elle offre d'excellentes perspectives de transposition vers le Scheveningen, le Taimanov ou d'autres systèmes siciliens.",
   histoire_en:"The Four Knights Variation is one of the most natural configurations in the Sicilian — all four knights occupy their optimal development squares in the first moves. It offers excellent transposition prospects toward the Scheveningen, Taimanov, or other Sicilian systems.",
   annotations:[
    {move:"5...Cc6",move_en:"5...Nc6",comment:"Les Quatre Cavaliers : tous développés, la position reste tendue et pleine d'options stratégiques pour les deux camps.",comment_en:"The Four Knights: all developed, the position remains tense and full of strategic options for both sides."},
    {move:"5.Cxc6",move_en:"5.Nxc6",comment:"L'échange immédiat simplifie mais crée un pion doublé en c6 chez les Noirs — avantage structurel blanc à long terme.",comment_en:"The immediate exchange simplifies but creates a doubled pawn on c6 for Black — a long-term structural advantage for White."},
    {move:"5...Fb4",move_en:"5...Bb4",comment:"La variante Nimzowitsch : épingler le Cc3 crée des complications immédiates et des déséquilibres. Les Noirs visent ...Cxe4.",comment_en:"The Nimzowitsch variation: pinning the Nc3 creates immediate complications and imbalances. Black targets ...Nxe4."},
    {move:"6.Fe3",move_en:"6.Be3",comment:"Développement naturel : Fe3 prépare 0-0-0 ou 0-0 et maintient la tension centrale.",comment_en:"Natural development: Be3 prepares 0-0-0 or 0-0 and maintains central tension."}
   ],
    game:{
     header:"Kasparov, G. vs Kramnik, V. &middot; Dos Hermanas 1996 &middot; Partie illustrative (D47)",
     moves:"1.d4 d5 2.c4 c6 3.Cc3 Cf6 4.Cf3 e6 5.e3 Cbd7 6.Fd3 dxc4 7.Fxc4 b5 8.Fd3 Fb7 9.O-O a6 10.e4 c5 11.d5 c4 12.Fc2 Dc7 13.Cd4 Cc5 14.b4 cxb3 15.axb3 b4 16.Ca4 Ccxe4 17.Fxe4 Cxe4 18.dxe6 Fd6 19.exf7+ Dxf7 20.f3 Dh5 21.g3 O-O 22.fxe4 Dh3 23.Cf3 Fxg3 24.Cc5 Txf3 25.Txf3 Dxh2+ 26.Rf1 Fc6 27.Fg5 Fb5+ 28.Cd3 Te8 29.Ta2 Dh1+ 30.Re2 Txe4+ 31.Rd2 Dg2+ 32.Rc1 Dxa2 33.Txg3 Da1+ 34.Rc2 Dc3+ 35.Rb1 Td4 0-1",
     result:"0-1 — Kramnik gagne en 35 coups — contre-attaque fulgurante",
     result_en:"0-1 — Kramnik wins in 35 moves — devastating counter-attack",
     analysis:"Kramnik renverse Kasparov avec une contre-attaque spectaculaire. Après le sacrifice de tour 24...Txf3!, la dame noire s'infiltre et la position blanche s'effondre. Illustration de la puissance du contre-jeu dans les structures à quatre cavaliers.",
     analysis_en:"Kramnik reverses Kasparov with a spectacular counter-attack. After the rook sacrifice 24...Rxf3!, the Black queen infiltrates and the White position collapses. An illustration of the power of counterplay in four-knight structures."
    }
  },
  richter_rauzer:{
   histoire:"L'Attaque Richter-Rauzer est nommée d'après les grands maîtres allemand Kurt Richter et soviétique Vsevolod Rauzer, qui la développèrent indépendamment dans les années 1930–40. Le coup 6.Fg5 crée une pression immédiate sur le cavalier f6 et prépare un jeu agressif avec 0-0-0 et f4-f5.",
   histoire_en:"The Richter-Rauzer Attack is named after German GM Kurt Richter and Soviet GM Vsevolod Rauzer, who independently developed it in the 1930s–40s. The move 6.Bg5 creates immediate pressure on the f6 knight and prepares aggressive play with 0-0-0 and f4-f5.",
   annotations:[
    {move:"5...Cc6",move_en:"5...Nc6",comment:"Le développement classique qui crée la structure pour la Richter-Rauzer. ...Cc6 presse d4 et prépare ...e6.",comment_en:"The classical development that sets up the Richter-Rauzer structure. ...Nc6 presses d4 and prepares ...e6."},
    {move:"6.Fg5",move_en:"6.Bg5",comment:"L'épingle de Richter-Rauzer : Fg5 met une pression sur f6 et d7. Si ...e6, la case d5 s'ouvre pour les Blancs.",comment_en:"The Richter-Rauzer pin: Bg5 puts pressure on f6 and d7. If ...e6, the d5 square opens up for White."},
    {move:"6...e6",move_en:"6...e6",comment:"La réponse la plus solide : ...e6 libère le fou roi et prépare ...Fe7 pour neutraliser l'épingle Fg5.",comment_en:"The most solid reply: ...e6 liberates the king bishop and prepares ...Be7 to neutralize the Bg5 pin."},
    {move:"7.Dd2",move_en:"7.Qd2",comment:"Coordination de l'attaque : Dd2 prépare 0-0-0 et relie les tours, menaçant f4-f5 pour ouvrir le jeu.",comment_en:"Attack coordination: Qd2 prepares 0-0-0 and connects the rooks, threatening f4-f5 to open the game."}
   ],
    game:{
     header:"Fischer, R. vs Spassky, B. &middot; Match du monde 1972, Reykjavik p.4 &middot; Sicilienne Sozin (B88)",
     moves:"1. e4 c5 2. Cf3 d6 3. d4 cxd4 4. Cxd4 Cf6 5. Cc3 Cc6 6. Fc4 e6 7. Fb3 Fe7 8. Fe3 O-O 9. O-O a6 10. f4 Cxd4 11. Fxd4 b5 12. a3 Fb7 13. Dd3 a5 14. e5 dxe5 15. fxe5 Cd7 16. Cxb5 Cc5 17. Fxc5 Fxc5+ 18. Rh1 Dg5 19. De2 Tad8 20. Tad1 Txd1 21. Txd1 h5 22. Cd6 Fa8 23. Fc4 h4 24. h3 Fe3 25. Dg4 Dxe5 26. Dxh4 g5 27. Dg4 Fc5 28. Cb5 Rg7 29. Cd4 Th8 30. Cf3 Fxf3 31. Dxf3 Fd6 32. Dc3 Dxc3 33. bxc3 Fe5 34. Td7 Rf6 35. Rg1 Fxc3 36. Fe2 Fe5 37. Rf1 Tc8 38. Fh5 Tc7 39. Txc7 Fxc7 40. a4 Re7 41. Re2 f5 42. Rd3 Fe5 43. c4 Rd6 44. Ff7 Fg3 45. c5+ 1/2-1/2",
     result:"1/2-1/2 — Nulle en 45 coups — lutte stratégique équilibrée",
     result_en:"1/2-1/2 — Draw in 45 moves — balanced strategic battle",
     analysis:"Fischer et Spassky livrent une longue lutte stratégique dans le match du monde 1972. Le sacrifice de pion 14.e5! de Fischer crée des complications qui mènent finalement à une nulle théorique. Illustration de la richesse stratégique de l'Attaque Sozin.",
     analysis_en:"Fischer and Spassky wage a long strategic battle in the 1972 World Championship. Fischer's pawn sacrifice 14.e5! creates complications that ultimately lead to a theoretical draw. An illustration of the strategic richness of the Sozin Attack."
    }
  },
  english_attack:{
   histoire:"L'Attaque Anglaise est un système populaire développé par les grands maîtres anglais dans les années 1980–90, notamment Murray Chandler et Nigel Short. Son idée centrale — Fe3, f3, Dd2, g4 — est applicable contre la Najdorf, le Scheveningen et la Variante Classique, en faisant un outil polyvalent redoutable.",
   histoire_en:"The English Attack is a popular system developed by English grandmasters in the 1980s–90s, notably Murray Chandler and Nigel Short. Its central idea — Be3, f3, Qd2, g4 — is applicable against the Najdorf, Scheveningen, and Classical Variation, making it a formidable multi-purpose weapon.",
   annotations:[
    {move:"6.Fe3",move_en:"6.Be3",comment:"L'Attaque Anglaise commence : Fe3 prépare f3, Dd2, g4-g5. Le plan d'attaque le plus systématique du 21e siècle.",comment_en:"The English Attack begins: Be3 prepares f3, Qd2, g4-g5. The most systematic attacking plan of the 21st century."},
    {move:"6...a6",move_en:"6...a6",comment:"Prophylaxie noire : ...a6 empêche Cb5 et prépare ...b5 pour le contre-jeu queenside vital.",comment_en:"Black's prophylaxis: ...a6 prevents Nb5 and prepares ...b5 for vital queenside counterplay."},
    {move:"7.f3",move_en:"7.f3",comment:"La construction du mur blanc : f3 renforce e4 et prépare g4-g5. Priorité : atteindre g5 avant que les Noirs ne roqueront.",comment_en:"White builds the wall: f3 reinforces e4 and prepares g4-g5. Priority: reach g5 before Black can castle."},
    {move:"7...b5",move_en:"7...b5",comment:"Le contre-jeu incontournable : ...b5 doit être joué rapidement avant que l'attaque blanche ne soit trop avancée.",comment_en:"Unavoidable counterplay: ...b5 must be played quickly before White's attack becomes too advanced."}
   ],
    game:{
     header:"Kasparov, G. vs Kamsky, G. &middot; Linares 1993 r.13 &middot; Sicilienne Attaque Anglaise (B80)",
     moves:"1. e4 c5 2. Cf3 e6 3. d4 cxd4 4. Cxd4 Cf6 5. Cc3 d6 6. Fe3 a6 7. f3 Cbd7 8. g4 h6 9. Tg1 Db6 10. a3 Ce5 11. Ff2 Dc7 12. f4 Cc4 13. Fxc4 Dxc4 14. Df3 e5 15. Cf5 Fxf5 16. gxf5 d5 17. fxe5 Cxe4 18. Tg4 h5 19. Th4 Fc5 20. O-O-O Fxf2 21. Cxe4 dxe4 22. Dxf2 Tc8 23. Rb1 Td8 24. Txd8+ Rxd8 25. Th3 Dd5 26. Tc3 Rd7 27. Db6 Td8 28. Tc5 Dd1+ 29. Ra2 Re8 30. Dxb7 Dg4 31. e6 fxe6 32. Te5 Dg5 33. h4 Dxh4 34. Txe6+ Rf8 35. f6 1-0",
     result:"1-0 — Kasparov gagne en 35 coups — Attaque Anglaise modèle",
     result_en:"1-0 — Kasparov wins in 35 moves — model English Attack",
     analysis:"Kasparov démontre l'Attaque Anglaise à sa perfection ! La progression g4-g5-Tg4 est dévastatrice, Kamsky ne peut résister. Après 35.f6!, les Noirs abandonnent face à l'inévitable mat. Partie de référence absolue de cette ligne.",
     analysis_en:"Kasparov demonstrates the English Attack to perfection! The advance g4-g5-Rg4 is devastating, Kamsky cannot resist. After 35.f6!, Black resigns facing the inevitable mate. An absolute reference game for this line."
    }
  },
  grand_prix:{
   histoire:"Le Grand Prix Attack tire son nom des tournois 'Grand Prix' du circuit amateurs britannique des années 1980, où il était fréquemment employé. L'idée 2.Cc3 suivi de f4 est directe : attaquer le roi noir avant même d'ouvrir le centre. Populaire en pratique pour sa facilité d'emploi et son effet surprise.",
   histoire_en:"The Grand Prix Attack takes its name from the British amateur 'Grand Prix' tournament circuit of the 1980s, where it was frequently employed. The idea 2.Nc3 followed by f4 is direct: attack Black's king before even opening the center. Popular in practice for its ease of use and surprise effect.",
   annotations:[
    {move:"2.Cc3",move_en:"2.Nc3",comment:"Le Grand Prix commence sans 2.d4 : les Blancs gardent la flexibilité pour f4 sans s'engager dans la Sicilienne ouverte.",comment_en:"The Grand Prix begins without 2.d4: White keeps flexibility for f4 without committing to the Open Sicilian."},
    {move:"3.f4",move_en:"3.f4",comment:"L'attaque prend forme : f4+e4 est la chaîne de pions caractéristique du Grand Prix Attack.",comment_en:"The attack takes shape: f4+e4 is the characteristic pawn chain of the Grand Prix Attack."},
    {move:"5.Fc4",move_en:"5.Bc4",comment:"Le fou agressif : Fc4 vise f7 et prépare une attaque rapide avec f5, Fe3, Dd2, 0-0-0.",comment_en:"The aggressive bishop: Bc4 targets f7 and prepares a rapid attack with f5, Be3, Qd2, 0-0-0."},
    {move:"3...d5",move_en:"3...d5",comment:"Le contre-jeu idéal contre le Grand Prix : ...d5! conteste le centre immédiatement et est la meilleure réponse.",comment_en:"The ideal counterplay against the Grand Prix: ...d5! immediately contests the center and is the best response."}
   ],
    game:{
     header:"Ivanchuk, V. vs Kramnik, V. &middot; Dos Hermanas 1996 r.8 &middot; Sicilienne — Richter-Rauzer (B62)",
     moves:"1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 d6 6.Fg5 e6 7.Dd2 a6 8.O-O-O h6 9.Fe3 Fe7 10.f4 Cxd4 11.Fxd4 b5 12.De3 Dc7 13.e5 dxe5 14.Fxe5 Cg4 15.Df3 Cxe5 16.Dxa8 Cd7 17.g3 Cb6 18.Df3 Fb7 19.Ce4 f5 20.Dh5+ Rf8 21.Cf2 Ff6 22.Fd3 Ca4 23.The1 Fxb2+ 24.Rb1 Fd5 25.Fxb5 Fxa2+ 26.Rxa2 axb5 27.Rb1 Da5 28.Cd3 Fa3 29.Ra2 Cc3+ 30.Rb3 Cd5 31.Ra2 Fb4 32.Rb1 Fc3 0-1",
     result:"0-1 — Kramnik gagne en 32 coups — contre-attaque magistrale",
     result_en:"0-1 — Kramnik wins in 32 moves — masterful counter-attack",
     analysis:"Kramnik neutralise l'attaque blanche et retourne la situation avec une contre-attaque basée sur les sacrifices 23...Fxb2+! et 25...Fxa2+!. La combinaison finale est une leçon sur l'exploitation des faiblesses du roi blanc exposé.",
     analysis_en:"Kramnik neutralizes White's attack and reverses the situation with a counter-attack based on the sacrifices 23...Bxb2+! and 25...Bxa2+!. The final combination is a lesson in exploiting a White king's weaknesses."
    }
  },
  morra:{
   histoire:"Le Gambit Morra (Smith-Morra) est nommé d'après l'Américain Ken Smith et le Français Pierre Morra, qui le popularisèrent indépendamment dans les années 1950–70. Le sacrifice du pion 2.d4 cxd4 3.c3 est audacieux et efficace en pratique, surtout contre des adversaires non préparés ou en parties rapides.",
   histoire_en:"The Morra Gambit (Smith-Morra) is named after American Ken Smith and Frenchman Pierre Morra, who popularized it independently in the 1950s–70s. The pawn sacrifice 2.d4 cxd4 3.c3 is bold and effective in practice, especially against unprepared opponents or in rapid games.",
   annotations:[
    {move:"2.d4",move_en:"2.d4",comment:"Le Gambit Morra commence ici : les Blancs offrent le pion pour un développement foudroyant.",comment_en:"The Morra Gambit starts here: White offers the pawn for lightning development."},
    {move:"3.c3",move_en:"3.c3",comment:"La clé du gambit : 3.c3 propose le deuxième pion pour récupérer avec Cxc3 et un développement massif.",comment_en:"The key of the gambit: 3.c3 offers the second pawn to recapture with Nxc3 and massive development."},
    {move:"6.Fc4",move_en:"6.Bc4",comment:"Le fou agressif : Fc4 vise f7 et prépare une pression constante sur la position noire.",comment_en:"The aggressive bishop: Bc4 targets f7 and prepares constant pressure on Black's position."},
    {move:"7.0-0",move_en:"7.0-0",comment:"Le roque rapide complète le développement blanc et prépare Te1 avec des menaces directes sur e6 et f7.",comment_en:"Rapid castling completes White's development and prepares Re1 with direct threats on e6 and f7."}
   ],
    game:{
     header:"Esserman, M. vs van Wely, L. &middot; US Open 2011 r.6 &middot; Sicilienne Gambit Morra (B21)",
     moves:"1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Cxc3 Cc6 5.Cf3 e6 6.Fc4 a6 7.O-O Cge7 8.Fg5 f6 9.Fe3 Cg6 10.Fb3 b5 11.Cd5 exd5 12.exd5 Cce5 13.d6 Fb7 14.Cxe5 fxe5 15.f4 Df6 16.fxe5 Dxe5 17.Fg5 Fe7 18.Ff7 Rd8 19.dxe7 Cxe7 20.Dd2 Rc8 21.Tac1 Cc6 22.Tfd1 Df5 23.Ff4 Dxf7 24.Dd6 Rd8 25.Txc6 Fxc6 26.Dxc6 1-0",
     result:"1-0 — Esserman gagne en 26 coups — Morra Gambit dévastateur",
     result_en:"1-0 — Esserman wins in 26 moves — devastating Morra Gambit",
     analysis:"Le spécialiste du Morra Gambit Marc Esserman bat le grand maître van Wely (2735 Elo) avec une préparation dévastatrice ! Le sacrifice de pièce 11.Cd5! est irréfutable. Preuve que le Morra reste dangereux même au plus haut niveau.",
     analysis_en:"Morra Gambit specialist Marc Esserman defeats GM van Wely (2735 Elo) with devastating preparation! The piece sacrifice 11.Nd5! is irrefutable. Proof that the Morra remains dangerous even at the highest level."
    }
  }
 },

 7:{
  classique:{
   histoire:"La Défense Française fut jouée pour la première fois lors d'une correspondance par équipe entre Paris et Londres en 1834 — d'où son nom. La chaîne de pions e6-d5 est une forteresse, mais le Fou c8 reste le problème structurel des Noirs. Van der Sterren note qu'elle est «&thinsp;considérée solide depuis deux cents ans&thinsp;».",
      histoire_en:"The King's Indian Defense became popular in the 1940s–1950s, championed by Bronstein, Geller, and later Fischer and Kasparov. The Classical Variation is the most theoretical and leads to the sharpest battles in chess, with White attacking queenside and Black storming the kingside.",
      histoire_en:"The Caro-Kann Defense (1...c6) was named after Horatio Caro and Marcus Kann, who analyzed it in the 1880s. Unlike the French, Black prepares ...d5 without blocking the dark-squared Bishop. Capablanca, Petrosian, and Karpov were notable practitioners.",
      histoire_en:"The French Defense has been played since the 1834 correspondence match between London and Paris. The Classical Variation with 3.Nc3 Nf6 was popularized by Nimzowitsch and Rubinstein. Today it is one of the most theoretically rich defenses in chess.",
      histoire_en:"The King's Indian Defense became popular in the 1940s–1950s, championed by Bronstein, Geller, and later Fischer and Kasparov. The Classical Variation is the most theoretical and leads to the sharpest battles in chess, with White attacking queenside and Black storming the kingside.",
      histoire_en:"The Caro-Kann Defense (1...c6) was named after Horatio Caro and Marcus Kann, who analyzed it in the 1880s. Unlike the French, Black prepares ...d5 without blocking the dark-squared Bishop. Capablanca, Petrosian, and Karpov were notable practitioners.",
      histoire_en:"The French Defense has been played since the 1834 correspondence match between London and Paris. The Classical Variation with 3.Nc3 Nf6 was popularized by Nimzowitsch and Rubinstein. Today it is one of the most theoretically rich defenses in chess.",
   annotations:[
    {move:"1...e6",move_en:"1...e6",comment:"La Défense Française — les Noirs préparent ...d5 tout en évitant l'ouverture des diagonales. Structure solide mais le Fou c8 peut être problématique.",comment_en:"The French Defense — Black prepares ...d5 while avoiding the open game."},
    {move:"3...Cf6",move_en:"3...Nf6",comment:"La Classique — développement naturel qui presse le pion e4.",comment_en:"The Berlin Defense — direct counter-attack on e4. Kramnik used it to draw his match against Kasparov."},
    {move:"4.Fg5",move_en:"4.Bg5",comment:"Le coup le plus ambitieux — les Blancs créent une tension sur f6 et visent l'avant-poste e5.",comment_en:"The most ambitious move — White creates tension on f6 and targets e6."},
    {move:"5...Cfd7 6.Fxe7",move_en:"5...Nfd7",comment:"Échange du Fou — les Blancs obtiennent la paire de fous mais perdent l'initiative tactique.",comment_en:"Maintaining pressure on d4 via the Knight, which will activate via c5 or f6."},
    {move:"7.f4",move_en:"7.f4",comment:"Plan d'attaque à l'aile roi — les Blancs préparent l'avance f5 pour ouvrir la colonne f.",comment_en:"Kingside attack plan — White prepares the f5 advance to open lines."}
   ],
    game:{
     header:"Pillsbury, H.N. vs Lasker, E. &middot; Nuremberg 1896 &middot; D&eacute;fense Fran&ccedil;aise Variante Classique (C11)",
     moves:"1. e4 e6 2. d4 d5 3. Cc3 Cf6 4. e5 Cfd7 5. f4 c5 6. dxc5 Cc6 7. a3 Cxc5 8. b4 Cd7 9. Fd3 a5 10. b5 Ccb8 11. Cf3 Cc5 12. Fe3 Cbd7 13. 0-0 g6 14. Ce2 Fe7 15. De1 Cb6 16. Cfd4 Fd7 17. Df2 Cba4 18. Tab1 h5 19. b6 Cxd3 20. cxd3 Fxa3 21. f5 gxf5 22. Cf4 h4 23. Ta1 Fe7 24. Txa4 Fxa4 25. Cdxe6 fxe6 26. Cxe6 Fd7 27. Cxd8 Txd8 28. Fc5 Tc8 29. Fxe7 Rxe7 30. De3 Tc6 31. Dg5+ Rf7 32. Tc1 Txc1+ 33. Dxc1 Tc8 34. De1 h3 35. gxh3 Tg8+ 36. Rf2 a4 37. Db4 Tg6 38. Rf3 a3 39. Dxa3 Txb6 40. Dc5 Te6 41. Dc7 Re7 42. Rf4 b6 43. h4 Tc6 44. Db8 Fe8 45. Rxf5 Th6 46. Dc7+ Rf8 47. Dd8 b5 48. e6 Th7 49. Re5 b4 50. Dd6+ 1-0",
     result:"1-0 — Pillsbury gagne en 50 coups — ma&icirc;trise classique de la Fran&ccedil;aise",
     analysis:"Pillsbury illustre les plans blancs dans la Variante Classique : apr&egrave;s e5 et f4, la progression syst&eacute;matique cr&eacute;e une majorit&eacute; d&eacute;cisive. La man&oelig;uvre du Cavalier en e6 est th&eacute;matique.",
     result_en:"1-0 — Pillsbury wins in 50 moves — classical mastery of the French",
     analysis_en:"Pillsbury illustrates White's plans in the Classical Variation: after e5 and f4, systematic progression creates a decisive majority. The Knight maneuver to e6 is thematic."
    }
  },
  winawer:{
   histoire:"La Variante Winawer fut jouée par Simon Winawer en 1867 contre Steinitz. Mais c'est Aron Nimzowitsch (1886-1935) qui en fit un système cohérent. Van der Sterren souligne que le Winawer «&thinsp;a toujours été une variante pour les vrais combattants, pour ceux qui ne s'intéressent pas à la stabilité mais à la dynamique&thinsp;».",
      histoire_en:"The Winawer Variation (3...Bb4) is the most aggressive French. Black immediately pins White's Knight to create structural imbalances. Named after Polish master Szymon Winawer, it was Korchnoi's main weapon and remains deeply popular today.",
      histoire_en:"The Winawer Variation (3...Bb4) is the most aggressive French. Black immediately pins White's Knight to create structural imbalances. Named after Polish master Szymon Winawer, it was Korchnoi's main weapon and remains deeply popular today.",
   annotations:[
    {move:"3...Fb4!",move_en:"3...Bb4!",comment:"La flèche du Winawer — les Noirs clouent le Cavalier c3 qui défend e4, empêchant l'avancée e5 sans complications.",comment_en:"The Winawer's arrow — Black pins the c3 Knight which defends e4."},
    {move:"4.e5",move_en:"4.e5",comment:"La réponse la plus agressive — les Blancs ferment le centre et tentent une attaque à l'aile roi.",comment_en:"The most aggressive response — White closes the center and prepares a kingside attack."},
    {move:"4...c5!",move_en:"4...c5!",comment:"Contre-attaque centrale classique du Winawer — les Noirs visent d4 immédiatement.",comment_en:"Classic Winawer central counter-attack — Black immediately targets d4."},
    {move:"5.a3",move_en:"5.a3 Bxc3+",comment:"Les Blancs forcent l'échange du Fou contre le Cavalier — c'est l'idée principale.",comment_en:"Black captures the Knight — this is the defining trade of the Winawer, giving White doubled c-pawns."},
    {move:"6.bxc3",move_en:"6.bxc3 Ne7",comment:"Les pions blancs sont doublés en c mais le centre d4-e5 est hyper-solide — telle est l'essence du Winawer.",comment_en:"Black develops the Knight to e7, planning ...Ng6 and ...c5 to attack White's pawn chain."}
   ],
    game:{
     header:"Fischer, R. vs Tal, M. &middot; Olympiades Leipzig 1960 &middot; D&eacute;fense Fran&ccedil;aise Winawer (C18)",
     moves:"1. e4 e6 2. d4 d5 3. Cc3 Fb4 4. e5 c5 5. a3 Fa5 6. b4 cxd4 7. Dg4 Ce7 8. bxa5 dxc3 9. Dxg7 Tg8 10. Dxh7 Cbc6 11. Cf3 Dc7 12. Fb5 Fd7 13. 0-0 0-0-0 14. Fg5 Cxe5 15. Cxe5 Fxb5 16. Cxf7 Fxf1 17. Cxd8 Txg5 18. Cxe6 Txg2+ 19. Rh1 De5 20. Txf1 Dxe6 21. Rxg2 Dg4+ 1/2-1/2",
     result:"1/2-1/2 — Nulle en 21 coups — duel de titans dans la Winawer",
     analysis:"Duel spectaculaire entre Fischer et Tal dans la Winawer ! La complication extr&ecirc;me m&egrave;ne &agrave; une position parfaitement &eacute;quilibr&eacute;e apr&egrave;s 21 coups.",
     result_en:"1/2-1/2 — Draw in 21 moves — titans duel in the Winawer",
     analysis_en:"Spectacular duel between Fischer and Tal in the Winawer! Extreme complication leads to a perfectly balanced position after 21 moves."
    }
  },
  avance:{
   histoire:"La Variante d'Avance (3.e5) est la plus directe de la Française : les Blancs ferment le centre immédiatement. Cette approche fut popularisée par Nimzowitsch, puis réhabilitée dans les années 1990 par Nigel Short. Elle est maintenant très jouée à tous les niveaux.",
      histoire_en:"The Advance Variation (3.e5) was long considered anti-positional, but Nimzowitsch rehabilitated it in the 1920s. Today it is White's most popular choice against the French, offering clear plans and avoiding the main theoretical battles.",
      histoire_en:"The Advance Variation (3.e5) was long considered anti-positional, but Nimzowitsch rehabilitated it in the 1920s. Today it is White's most popular choice against the French, offering clear plans and avoiding the main theoretical battles.",
   annotations:[
    {move:"3.e5",move_en:"3.e5",comment:"La Variante d'Avance — les Blancs ferment le centre immédiatement. La chaîne de pions e5-d4 restreint les pièces noires.",comment_en:"The Advance Variation — White immediately closes the center. The pawn chain e5-d4 is established."},
    {move:"3...c5",move_en:"3...c5",comment:"Contre-attaque centrale thématique — les Noirs visent d4 pour détruire le centre blanc.",comment_en:"Thematic central counter-attack — Black targets d4 to destroy White's chain."},
    {move:"4.c3",move_en:"4.c3 Nc6",comment:"Soutien du pion d4 — les Blancs maintiennent leur centre coûte que coûte.",comment_en:"Black develops the Knight and pressures d4, the key pawn of White's chain."},
    {move:"4...Cc6",move_en:"4...Nc6",comment:"Pression supplémentaire sur d4 — les Noirs mobilisent toutes leurs forces contre le centre blanc.",comment_en:"Additional pressure on d4 — Black mobilizes all forces against the base of White's chain."}
   ],
    game:{
     header:"Nimzowitsch, A. vs Hakansson, A. &middot; Kristianstad 1922 &middot; D&eacute;fense Fran&ccedil;aise Variante d'Avance (C02)",
     moves:"1. e4 e6 2. d4 d5 3. e5 c5 4. Dg4 cxd4 5. Cf3 Cc6 6. Fd3 f5 7. Dg3 Cge7 8. 0-0 Cg6 9. h4 Dc7 10. Te1 Fd7 11. a3 0-0-0 12. b4 a6 13. h5 Cge7 14. Fd2 h6 15. a4 g5 16. b5 f4 17. Dg4 Cb8 18. c3 Te8 19. cxd4 Rd8 20. Tc1 Db6 21. a5 Da7 22. b6 Da8 23. Tc7 Cf5 24. Cc3 Fe7 25. Cxd5 Cxd4 26. Cxd4 exd5 27. Dxd7+ 1-0",
     result:"1-0 — Nimzowitsch gagne en 27 coups — l'Avance triomphante",
     analysis:"Nimzowitsch illustre les plans de l'Avance : apr&egrave;s e5, Db3! puis Cg5! attaquent b7 et f7 simultan&eacute;ment. La combinaison finale est d&eacute;cisive.",
     result_en:"1-0 — Nimzowitsch wins in 27 moves — Advance Variation triumphant",
     analysis_en:"Nimzowitsch illustrates Advance plans: after e5, Qb3! then Ng5! attack b7 and f7 simultaneously. The final combination is decisive."
    }
  }
 },
 8:{
  classique:{
   histoire:"La Défense Caro-Kann fut développée par Horatio Caro et Markus Kann en 1886. Souvent comparée à la Française, elle évite le «&thinsp;mauvais Fou&thinsp;» de cette dernière.",
   annotations:[
    {move:"1...c6",move_en:"1...c6",comment:"La Caro-Kann — les Noirs préparent ...d5 tout en gardant le Fou c8 libre. Contrairement à la Française, il n'y a pas de 'mauvais Fou'.",comment_en:"The Caro-Kann — Black prepares ...d5 while avoiding the 'problem Bishop' of the French."},
    {move:"3...Cxe4",move_en:"3...Nxe4",comment:"Simplification centrale — les Noirs capturent e4 et s'apprêtent à développer leur Fou.",comment_en:"Central simplification — Black captures e4 and prepares active piece development."},
    {move:"4...Ff5",move_en:"4...Bf5",comment:"Développement idéal ! Le Fou sort avant d'être enfermé. C'est la différence essentielle avec la Française.",comment_en:"Ideal development! The Bishop comes out before being locked in. This is the key advantage over the French."},
    {move:"5.Cd3",move_en:"5.Nd3",comment:"Les Blancs évitent l'échange des Fous et cherchent à maintenir la tension.",comment_en:"White avoids the Bishop exchange and tries to maintain tension."},
    {move:"5...Fg6",move_en:"5...Bg6",comment:"Le Fou s'installe sur une bonne diagonale tout en attendant le bon moment pour s'activer.",comment_en:"The Bishop settles on a good diagonal while waiting for the right moment to go to h5 or attack e4."}
   ],
    game:{
     header:"Topalov, V. vs Anand, V. &middot; Linares 1999 &middot; Caro-Kann Variante d'Avance (B12)",
     moves:"1. e4 c6 2. d4 d5 3. e5 Ff5 4. Cc3 e6 5. g4 Fg6 6. Cge2 Ce7 7. Cf4 c5 8. h4 cxd4 9. Cb5 Cec6 10. h5 Fe4 11. f3 a6 12. Cd6+ Fxd6 13. exd6 g5 14. Ch3 h6 15. fxe4 dxe4 16. Fg2 f5 17. 0-0 0-0 18. c3 Dxd6 19. gxf5 exf5 20. Db3+ Rh8 21. Fxe4 fxe4 22. Txf8+ Dxf8 23. De6 Cd7 24. Dxd7 Td8 25. Dg4 e3 26. b3 Ce5 27. De4 Df6 28. Rg2 e2 29. Fxg5 hxg5 30. cxd4 Dc6 31. d5 Dxd5 32. Dxd5 Txd5 33. Te1 Td2 34. Rf2 Txa2 35. Txe2 Cd3+ 36. Re3 Txe2+ 37. Rxe2 g4 38. Cg5 Cc1+ 39. Re3 Cxb3 40. h6 a5 41. Rf4 Cd4 42. Rxg4 a4 43. Rh5 Cc6 0-1",
     result:"0-1 — Anand gagne en 43 coups — contre-jeu d&eacute;cisif dans la Caro-Kann",
     analysis:"Anand d&eacute;montre le contre-jeu dans la Caro-Kann Avance ! La pression sur la cha&icirc;ne e5-d4 s'av&egrave;re d&eacute;cisive. La man&oelig;uvre finale ...d5! lib&egrave;re les pi&egrave;ces noires.",
     result_en:"0-1 — Anand wins in 43 moves — decisive counterplay in the Caro-Kann",
     analysis_en:"Anand demonstrates counterplay in the Caro-Kann Advance! Pressure on the e5-d4 chain proves decisive. The final maneuver ...d5! liberates Black's pieces."
    }
  },
  panov:{
   histoire:"L'Attaque Panov fut développée par le maître russe Vasily Panov au début du XXe siècle. Elle transforme la Caro-Kann en une partie plus ouverte et dynamique, similaire à l'Attaque Panov-Botvinnik. L'idée est de créer un jeu avec pion isolé (Isolani) sur d5.",
      histoire_en:"The Panov Attack (4.c4) was developed by Soviet master Vasily Panov in the 1930s. By playing c4, White converts the Caro-Kann into IQP (Isolated Queen's Pawn) positions similar to the Nimzo-Indian or QGD, giving the game a completely different character.",
      histoire_en:"The Panov Attack (4.c4) was developed by Soviet master Vasily Panov in the 1930s. By playing c4, White converts the Caro-Kann into IQP (Isolated Queen's Pawn) positions similar to the Nimzo-Indian or QGD, giving the game a completely different character.",
   annotations:[
    {move:"3.exd5 cxd5 4.c4",move_en:"3.exd5 cxd5 4.c4",comment:"L'Attaque Panov ! Les Blancs créent une position similaire au QGD mais plus dynamique.",comment_en:"The Panov Attack! White creates a position similar to the QGD but with Black's c-pawn on c5."},
    {move:"4...Cf6",move_en:"4...Nf6",comment:"Développement naturel — les Noirs défendent d5 et se développent simultanément.",comment_en:"Natural development — Black defends d5 and develops simultaneously."},
    {move:"5...e6",move_en:"5...e6",comment:"Les Noirs consolident d5 et préparent le développement de leur Fou f8.",comment_en:"Black consolidates d5 and prepares the development of the f8 Bishop."},
    {move:"6.Cf3 Fb4",move_en:"6.Nf3 Bb4",comment:"Les Noirs clouent le Cavalier c3 — similaire à la Nimzo-Indienne, créant une pression sur e4 futur.",comment_en:"Black pins the c3 Knight — similar to the Nimzo-Indian, creating structural pressure."}
   ],
    game:{
     header:"Botvinnik, M. vs Konstantinopolsky, A. &middot; Sverdlovsk 1943 &middot; Caro-Kann (B14)",
     moves:"1.e4 c6 2.d4 d5 3.exd5 cxd5 4.c4 Cf6 5.Cc3 e6 6.Cf3 Fe7 7.Fg5 0-0 8.Tc1 Cc6 9.c5 Ce4 10.Fxe7 Dxe7 11.Fe2 Fd7 12.a3 f5 13.Fb5 Cg5 14.Fxc6 Cxf3+ 15.Dxf3 bxc6 16.Df4 Tae8 17.0-0 e5 18.Dxe5 Dxe5 19.dxe5 Txe5 20.f4 Te7 21.Tfe1 Tfe8 22.Txe7 Txe7 23.Rf2 Rf7 24.Td1 Te8 25.Td2 h6 26.Te2 Tb8 27.Re3 Tb3 28.Rd4 Rf6 29.Ca2 Tb8 30.b4 g5 31.g3 gxf4 32.gxf4 a6 33.Cc3 Tg8 34.a4 Tg4 35.Tf2 Fe6 36.b5 axb5 37.axb5 cxb5 38.Cxb5 Tg1 39.Cc3 Rf7 40.Tb2 Tf1 41.Ce2 Te1 42.Re5 d4 43.Rxd4 Rg6 44.Cc3 Rh5 45.Te2 Txe2 46.Cxe2 Rg4 47.Re5 Fc8 48.Cd4 h5 49.Cxf5 Fd7 50.Cg7+ Fa4 51.f5 Rg5 52.Ce6+ 1-0",
     result:"1-0 — Botvinnik gagne en 52 coups — ma&icirc;trise technique exemplaire",
     analysis:"Botvinnik illustre la ma&icirc;trise technique dans la Caro-Kann : la progression syst&eacute;matique en finale d&eacute;montre la sup&eacute;riorit&eacute; des Blancs. La man&oelig;uvre du Cavalier en b5-c7 est d&eacute;cisive.",
     result_en:"1-0 — Botvinnik wins in 52 moves — exemplary technical mastery",
     analysis_en:"Botvinnik illustrates Caro-Kann technical mastery: systematic endgame progression demonstrates White's superiority. The Knight maneuver to b5-c7 is decisive."
    }
  }
 },
 9:{
  alekhine:{
   histoire:"La Défense Alekhine fut inventée par le champion du monde Alexandre Alekhine en 1921. La philosophie est hypermoderne : les Noirs laissent leur Cavalier être chassé pour mieux attaquer les pions blancs ensuite. Van der Sterren décrit l'Attaque des Quatre Pions comme «&thinsp;la punition la plus radicale&thinsp;» contre cette défense.",
      histoire_en:"The Alekhine Defense (1...Nf6) was invented by World Champion Alexander Alekhine in the 1920s. Black invites White to chase the Knight and over-extend their center. The Four Pawns Attack is White's most aggressive response.",
      histoire_en:"The Alekhine Defense (1...Nf6) was invented by World Champion Alexander Alekhine in the 1920s. Black invites White to chase the Knight and over-extend their center. The Four Pawns Attack is White's most aggressive response.",
   annotations:[
    {move:"1...Cf6",move_en:"1...Nf6",comment:"La Défense Alekhine — les Noirs défient e4 immédiatement avec leur Cavalier, invitant les Blancs à chasser la pièce et à sur-étendre leurs pions.",comment_en:"The Alekhine Defense — Black challenges e4 immediately with the Knight, provoking an over-extension."},
    {move:"2.e5 Cd5 3.d4",move_en:"2.e5 Nd5",comment:"Les Blancs construisent leur centre. Les Noirs permettent ce centre pour mieux le détruire ensuite.",comment_en:"The Knight retreats but will be chased further — this is the whole idea of the Alekhine."},
    {move:"4.c4",move_en:"4.c4!",comment:"L'Attaque des Quatre Pions — les Blancs créent un centre maximal e5-d4-c4. Impressionnant mais très difficile à maintenir.",comment_en:"The Maroczy Bind! This pawn on c4, combined with e4, creates an impregnable wall against ...d5."},
    {move:"5.f4!",move_en:"5.f4!",comment:"Le quatrième pion ! La formation e5-f4-d4-c4 est un centre monumental, mais aussi une cible monumentale pour les contre-attaques noires.",comment_en:"The fourth pawn! The e5-f4-d4-c4 formation is a monumental center — but it can collapse."}
   ],
    game:{
     header:"Fischer, R. vs Berliner, H. &middot; Championnat des Etats-Unis 1960-61 (New York) &middot; D&eacute;fense Alekhine (B03)",
     moves:"1. e4 Cf6 2. e5 Cd5 3. d4 d6 4. c4 Cb6 5. exd6 cxd6 6. Cc3 g6 7. Fd3 Fg7 8. Cge2 Cc6 9. Fe3 0-0 10. 0-0 e5 11. d5 Ce7 12. b3 Cd7 13. Ce4 Cf5 14. Fg5 f6 15. Fd2 Cc5 16. Cxc5 dxc5 17. Fxf5 Fxf5 18. f4 exf4 19. Cxf4 Dd6 20. Ch5 Tae8 21. Cxg7 Rxg7 22. Ff4 Dd7 23. Dd2 Tf7 24. Fh6+ Rg8 25. Tae1 Tfe7 26. Txe7 Dxe7 27. h3 De4 28. Df2 De7 29. g4 Fd3 30. Td1 Fe4 31. d6 De5 32. Ff4 Dc3 33. d7 Td8 34. De2 Df3 35. Dxf3 Fxf3 36. Fc7 1-0",
     result:"1-0 — Fischer gagne en 36 coups — l'Alekhine punie",
     analysis:"Fischer exploite le manque de coordination des Noirs dans l'Alekhine avec les Quatre Pions : apr&egrave;s 5.f4 dxe5 6.fxe5, le centre blanc domine. La combinaison finale d'invasion est d&eacute;cisive.",
     result_en:"1-0 — Fischer wins in 36 moves — Alekhine punished",
     analysis_en:"Fischer exploits Black's lack of coordination in the Alekhine with the Four Pawns Attack: after 5.f4 dxe5 6.fxe5, the White center dominates. The final invasion combination is decisive."
    }
  },
  pirc:{
   histoire:"La Défense Pirc est une approche hypermoderne : les Noirs fianchettent leur Fou roi et permettent aux Blancs d'occuper le centre. Elle doit son nom au grand maître yougoslave Vasja Pirc. Elle a été popularisée dans les années 1970 par les analyses soviétiques.",
      histoire_en:"The Pirc Defense (1.e4 d6 2.d4 Nf6 3.Nc3 g6) is a hypermodern defense named after Yugoslav Grandmaster Vasja Pirc. Like the King's Indian, Black allows White to build a big center and then attacks it from the flanks.",
      histoire_en:"The Pirc Defense (1.e4 d6 2.d4 Nf6 3.Nc3 g6) is a hypermodern defense named after Yugoslav Grandmaster Vasja Pirc. Like the King's Indian, Black allows White to build a big center and then attacks it from the flanks.",
   annotations:[
    {move:"1...d6 2.d4 Cf6 3.Cc3 g6",move_en:"1...d6 2.d4 Nf6 3.Nc3 g6",comment:"La structure Pirc — les Noirs préparent le fianchetto du Fou roi. Les pions restent en retrait pour mieux contre-attaquer.",comment_en:"The Pirc structure — Black prepares the king's Bishop fianchetto. White can choose between many attacking setups."},
    {move:"4.f4",move_en:"4.f4",comment:"L'Attaque Autrichienne — la réponse la plus agressive. Les Blancs créent un centre e4-d4 et vont lancer f5 pour attaquer.",comment_en:"The Austrian Attack — the most aggressive response. White builds the biggest possible center."},
    {move:"4...Fg7",move_en:"4...Bg7",comment:"Le Fou se place sur sa case idéale — il va dominer la grande diagonale et exercer une pression sur d4.",comment_en:"Fianchetto development — the Bg7 will compensate for the lack of space with dynamic piece activity."},
    {move:"5.Cf3 0-0",move_en:"5.Nf3 0-0",comment:"Roque rapide — les Noirs se mettent en sécurité et préparent ...c5 ou ...e5 pour contre-attaquer.",comment_en:"Quick castling — Black puts the king to safety and prepares ...c5 or ...e5."}
   ],
    game:{
     header:"Kasparov, G. vs Topalov, V. &middot; Wijk aan Zee 1999 &middot; D&eacute;fense Pirc-Moderne (B07)",
     moves:"1. e4 d6 2. d4 Cf6 3. Cc3 g6 4. Fe3 Fg7 5. Dd2 c6 6. f3 b5 7. Cge2 Cbd7 8. Fh6 Fxh6 9. Dxh6 Fb7 10. a3 e5 11. 0-0-0 De7 12. Rb1 a6 13. Cc1 0-0-0 14. Cb3 exd4 15. Txd4 c5 16. Td1 Cb6 17. g3 Rb8 18. Ca5 Fa8 19. Fh3 d5 20. Df4+ Ra7 21. The1 d4 22. Cd5 Cbxd5 23. exd5 Dd6 24. Txd4 cxd4 25. Te7+ Rb6 26. Dxd4+ Rxa5 27. b4+ Ra4 28. Dc3 Dxd5 29. Ta7 Fb7 30. Txb7 Dc4 31. Dxf6 Rxa3 32. Dxa6+ Rxb4 33. c3+ Rxc3 34. Da1+ Rd2 35. Db2+ Rd1 36. Ff1 Td2 37. Td7 Txd7 38. Fxc4 bxc4 39. Dxh8 Td3 40. Da8 c3 41. Da4+ Re1 42. f4 f5 43. Rc1 Td2 44. Da7 1-0",
     result:"1-0 — Kasparov gagne en 44 coups — Le plus beau sacrifice de Kasparov",
     analysis:"Partie l&eacute;gendaire ! Le sacrifice d'&eacute;change 24.Txd4!! est le coup cl&eacute; — Topalov n'a aucune d&eacute;fense. La man&oelig;uvre finale 31.Dxa6!! conduit &agrave; un mat in&eacute;vitable.",
     result_en:"1-0 — Kasparov wins in 44 moves — Kasparov's greatest game",
     analysis_en:"Legendary game! The exchange sacrifice 24.Rxd4!! is the key move. The final maneuver 31.Qxa6!! leads to inevitable checkmate."
    }
  },
  scandinave:{
   histoire:"La Défense Scandinave (1...d5) est l'une des réponses les plus audacieuses à 1.e4, populaire au XIXe siècle puis éclipsée. Elle revint en faveur dans les années 1990 grâce à Sergei Tiviakov et d'autres qui montrèrent sa solidité.",
      histoire_en:"The Scandinavian Defense (1...d5) is one of the oldest openings, played since the 15th century. Black immediately challenges the e4 pawn. After 2.exd5 Qxd5, the Queen must retreat but Black achieves quick development. Popularized at the elite level by Sergei Tiviakov.",
      histoire_en:"The Scandinavian Defense (1...d5) is one of the oldest openings, played since the 15th century. Black immediately challenges the e4 pawn. After 2.exd5 Qxd5, the Queen must retreat but Black achieves quick development. Popularized at the elite level by Sergei Tiviakov.",
   annotations:[
    {move:"1...d5",move_en:"1...d5",comment:"La Scandinave ! Les Noirs contestent le centre dès le premier coup, mais leur Dame va devoir faire plusieurs déplacements.",comment_en:"The Scandinavian! Black contests the center on move one, but the Queen will be temporarily misplaced."},
    {move:"2.exd5 Dxd5",move_en:"2.exd5 Qxd5",comment:"Les Noirs reprennent avec la Dame — elle sera vulnérable aux gains de tempo avec Cc3.",comment_en:"Black recaptures with the Queen — temporarily misplaced but Black gets solid development."},
    {move:"3.Cc3 Da5",move_en:"3.Nc3 Qa5",comment:"La Dame se place en a5 — case moins exposée que d5 ou d6.",comment_en:"The most popular Queen retreat — safe from White's pieces and keeping pressure on e5."},
    {move:"4.d4 Cf6",move_en:"4.d4 Nf6",comment:"Les Noirs développent et préparent le roque. La théorie noire est de maintenir une structure solide.",comment_en:"Black develops and prepares castling. Black's theory is to develop solidly and avoid early contact."}
   ],
    game:{
     header:"Anand, V. vs Lautier, J. &middot; Biel 1997 &middot; D&eacute;fense Scandinave (B01)",
     moves:"1.e4 d5 2.exd5 Dxd5 3.Cc3 Da5 4.d4 Cf6 5.Cf3 c6 6.Fc4 Ff5 7.Ce5 e6 8.g4 Fg6 9.h4 Cbd7 10.Cxd7 Cxd7 11.h5 Fe4 12.Th3 Fg2 13.Te3 Cb6 14.Fd3 Cd5 15.f3 Fb4 16.Rf2 Fxc3 17.bxc3 Dxc3 18.Tb1 Dxd4 19.Txb7 Td8 20.h6 gxh6 21.Fg6 Ce7 22.Dxd4 Txd4 23.Td3 Td8 24.Txd8+ Rxd8 25.Fd3 1-0",
     result:"1-0 — Anand gagne en 25 coups — pi&egrave;ge dans la Scandinave",
     analysis:"Anand illustre les dangers de la Scandinave ! La pouss&eacute;e 6.Fc4! vise f7. La combinaison 21.Fxf7+ Rf8 22.Fxe6 conduit &agrave; un gain mat&eacute;riel d&eacute;cisif en 25 coups.",
     result_en:"1-0 — Anand wins in 25 moves — Scandinavian trap",
     analysis_en:"Anand illustrates the Scandinavian's dangers! The push 6.Bc4! targets f7. The combination 21.Bxf7+ Kf8 22.Bxe6 leads to decisive material gain in 25 moves."
    }
  }
 },
 10:{
  exchange:{
   histoire:"Le Gambit de la Dame Décliné (QGD) est la défense la plus solide et la plus testée contre 1.d4. Joué depuis le XVIIe siècle, il connut son âge d'or lors des grands tournois du début du XXe siècle. La Variante de l'Échange (4.cxd5) fut popularisée par Capablanca — il s'empare de l'espace mais doit gérer les 'deux fous' noirs.",
      histoire_en:"The Queen's Gambit Declined is one of the most ancient and respected openings, played since the 15th century. The Exchange Variation (5.cxd5) was a favorite of Capablanca, who used it to create symmetrical pawn structures with a long-term endgame advantage.",
      histoire_en:"The Queen's Gambit Declined is one of the most ancient and respected openings, played since the 15th century. The Exchange Variation (5.cxd5) was a favorite of Capablanca, who used it to create symmetrical pawn structures with a long-term endgame advantage.",
   annotations:[
    {move:"2.c4",move_en:"2.c4",comment:"Le Gambit de la Dame ! Les Blancs offrent un pion mais après 2...dxc4, ils récupèrent facilement avec e3 et Fxc4.",comment_en:"The Queen's Gambit! White offers a pawn but after 2...dxc4, White gets the center back with tempo."},
    {move:"2...e6",move_en:"2...e6",comment:"La déclinaison solide — les Noirs maintiennent leur pion d5 et préparent le développement de leur Fou f8.",comment_en:"The solid decline — Black maintains the d5 pawn and prepares the f8 Bishop's development."},
    {move:"3.Cc3 Cf6",move_en:"3.Nc3 Nf6",comment:"Développement naturel — les deux camps développent leurs Cavaliers vers le centre.",comment_en:"Natural development — both sides develop their Knights toward the center."},
    {move:"4.cxd5",move_en:"4.cxd5 Nxd5",comment:"La Variante de l'Échange — les Blancs créent la Structure Carlsbad avec pions centraux symétriques.",comment_en:"The central exchange — the Knight takes back and the position opens up."},
    {move:"6.Ff4",move_en:"6.Bf4",comment:"Le Fou occupe la diagonale idéale c1-h6, préparant l'attaque minoritaire à l'aile dame.",comment_en:"The Bishop takes the ideal diagonal c1-h6, preparing the minority attack with b4-b5."}
   ],
    game:{
     header:"Alekhine, A. vs Maroczy, G. &middot; Bled 1931 &middot; Gambit Dame Refus&eacute; — Variante de l'Echange (D63)",
     moves:"1.d4 d5 2.c4 e6 3.Cc3 Cf6 4.Fg5 Fe7 5.e3 Cbd7 6.Cf3 0-0 7.Tc1 h6 8.Fh4 c6 9. Fd3 a6 10. 0-0 dxc4 11. Fxc4 c5 12. a4 Da5 13. De2 cxd4 14. exd4 Cb6 15. Fd3 Fd7 16. Ce5 Tfd8 17. f4 Fe8 18. Cg4 Txd4 19. Fxf6 Fxf6 20. Cxf6+ gxf6 21. Ce4 Tad8 22. Cxf6+ Rf8 23. Ch7+ Re7 24. f5 T8d6 25. b4 Dxb4 26. De5 Cd7 27. Dh8 Txd3 28. f6+ 1-0",
     result:"1-0 — Alekhine gagne en 28 coups — combinaison finale brillante",
     analysis:"Alekhine illustre la strat&eacute;gie blanche dans le GDR Echange : apr&egrave;s l'Attaque Minoritaire b4-b5!, la faiblesse c6 devient d&eacute;cisive. La combinaison finale Cxd6! puis Cxe6! d&eacute;molit la position noire.",
     result_en:"1-0 — Alekhine wins in 28 moves — brilliant final combination",
     analysis_en:"Alekhine illustrates White's strategy in the QGD Exchange: after the Minority Attack b4-b5!, the c6 weakness becomes decisive. The final combination Nxd6! then Nxe6! demolishes Black."
    }
  },
  slave:{
   histoire:"La Défense Slave fut popularisée dans les années 1920-30. Contrairement au QGD classique, les Noirs développent leur Fou c8 librement en jouant ...c6 avant ...e6.",
      histoire_en:"The Slav Defense (3...c6) is Black's most popular response to the Queen's Gambit. By supporting d5 with c6, Black avoids the 'problem Bishop' of the QGD. Used by every World Champion from Alekhine to Anand, the Slav is the cornerstone of solid 1.d4 play.",
      histoire_en:"The Slav Defense (3...c6) is Black's most popular response to the Queen's Gambit. By supporting d5 with c6, Black avoids the 'problem Bishop' of the QGD. Used by every World Champion from Alekhine to Anand, the Slav is the cornerstone of solid 1.d4 play.",
   annotations:[
    {move:"2...c6",move_en:"2...c6",comment:"La Slave — les Noirs défendent d5 sans bloquer le Fou c8. C'est la différence fondamentale avec le QGD.",comment_en:"The Slav — Black defends d5 without blocking the c8 Bishop. This is the key difference from the QGD."},
    {move:"3.Cf3 Cf6",move_en:"3.Nf3",comment:"Développement naturel — les deux camps développent leurs Cavaliers vers le centre.",comment_en:"Natural development — White builds toward d4 to seize central control."},
    {move:"4.Cc3 e6",move_en:"4.Nc3 e6",comment:"La Slave Orthodoxe — maintenant les Noirs préparent le développement de leur Fou f8.",comment_en:"The Orthodox Slav — Black prepares the f8 Bishop's development via ...Bf5 or ...Bd6."},
    {move:"5.e3 Cbd7",move_en:"5.e3 Nbd7",comment:"Structure typique — le Cavalier va vers f6 ou b6 pour exercer une pression sur le centre.",comment_en:"Typical structure — the Knight heads to b6 or f6 to pressure d4 and prepare ...c5."},
    {move:"6.Fd3 dxc4",move_en:"6.Bd3 dxc4",comment:"Les Noirs prennent le pion — dans la Mérane, ils vont maintenant chercher à conserver le pion c4 par ...b5.",comment_en:"Black takes the pawn — in the Meran, they will now try to hold it with ...b5."}
   ],
    game:{
     header:"Polugaevsky, L. vs Torre, E. &middot; Moscou 1981 &middot; Semi-Slave — Syst&egrave;me Botvinnik (D44)",
     moves:"1.d4 d5 2.c4 c6 3.Cf3 Cf6 4.Cc3 e6 5.Fg5 dxc4 6.e4 b5 7.e5 h6 8.Fh4 g5 9.Cxg5 hxg5 10.Fxg5 Cbd7 11.exf6 Fb7 12.g3 c5 13.d5 Cb6 14.dxe6 Dxd1+ 15.Txd1 Fxh1 16.e7 a6 17.h4 Fh6 18.f4 b4 19.Td6 Tb8 20.Cd1 Fxg5 21.fxg5 Cd5 22.Fxc4 Cxe7 23.fxe7 Rxe7 24.Tf6 Thf8 25.Ce3 Fe4 26.Txa6 Tbd8 27.Tf6 Td6 28.Tf4 Td4 29.h5 Fd3 30.Cd5+ Rd6 31.Txd4 cxd4 32.Fb3 Fc2 33.Fxc2 Rxd5 34.Fb3+ Re5 35.g4 Rf4 36.g6 Re3 37.g7 Tc8 38.Rf1 d3 39.Rg2 Rf4 40.h6 1-0",
     result:"1-0 — Polugaevsky gagne en 40 coups — Botvinnik sacrificiel",
     analysis:"Partie explosive dans la Semi-Slave Botvinnik ! Le sacrifice 16.Cg5! puis h4-h5 lance une attaque irr&eacute;sistible. La man&oelig;uvre Cd1! lib&egrave;re la case d3 pour la Tour — typique du Syst&egrave;me Botvinnik.",
     result_en:"1-0 — Polugaevsky wins in 40 moves — Botvinnik sacrificial system",
     analysis_en:"Explosive game in the Botvinnik Semi-Slav! The sacrifice 16.Ng5! then h4-h5 launches an irresistible attack. The maneuver Nd1! frees the d3 square — typical Botvinnik System."
    }
  }
 },
 11:{
  rubinstein:{
   histoire:"La Défense Nimzo-Indienne fut créée par Aron Nimzowitsch au début du XXe siècle — une révolution. Nimzowitsch démontra que le carré e4 pouvait être contrôlé indirectement par un Fou développé.",
      histoire_en:"The Nimzo-Indian Defense (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4) was created by Aron Nimzowitsch in the 1920s. By pinning the Knight on c3, Black prevents e4 and creates structural imbalances. The Rubinstein Variation (4.e3) was systematized by Rubinstein himself and is the most solid White approach.",
      histoire_en:"The Nimzo-Indian Defense (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4) was created by Aron Nimzowitsch in the 1920s. By pinning the Knight on c3, Black prevents e4 and creates structural imbalances. The Rubinstein Variation (4.e3) was systematized by Rubinstein himself and is the most solid White approach.",
   annotations:[
    {move:"3...Fb4!",move_en:"3...Bb4!",comment:"Le coup clé de la Nimzo-Indienne — le Fou attaque le Cavalier c3, empêchant e4.",comment_en:"The Winawer's arrow — Black pins the c3 Knight which defends e4."},
    {move:"4.e3",move_en:"4.e3 Nf6",comment:"Variante Rubinstein — les Blancs soutiennent d4 solidement avant de développer le Fou f1.",comment_en:"Solid development — White prepares to recapture the c4 pawn."},
    {move:"4...0-0",move_en:"4...0-0 5.Bd3",comment:"Développement thématique — les Noirs roquent rapidement et préparent ...d5 ou ...c5.",comment_en:"Solid development — White prepares to castle and recapture the Bishop."},
    {move:"5.Fd3",move_en:"5.Bd3 Bf5",comment:"Le Fou se place idéalement pour soutenir le centre et viser éventuellement h7.",comment_en:"Black's key move — the Bishop develops outside the pawn chain, a major advantage over the QGD."},
    {move:"5...d5",move_en:"5...d5",comment:"Rupture centrale — les Noirs contestent le centre blanc directement. Après Fxc3+, les Noirs obtiennent la paire de fous en échange des pions doublés blancs.",comment_en:"Black challenges the center — a key move to prevent White from gaining too much space."}
   ],
    game:{
     header:"Botvinnik, M. vs Capablanca, J. &middot; AVRO 1938 &middot; Nimzo-Indienne — Syst&egrave;me de Capablanca (E40)",
     moves:"1.d4 Cf6 2.c4 e6 3.Cc3 Fb4 4.e3 d5 5.a3 Fxc3+ 6.bxc3 c5 7.cxd5 exd5 8.Fd3 0-0 9.Ce2 b6 10.0-0 Fa6 11.Fxa6 Cxa6 12.Fb2 Dd7 13.a4 Tfe8 14.Dd3 c4 15.Dc2 Cb8 16.Tae1 Cc6 17.Cg3 Ca5 18.f3 Cb3 19.e4 Dxa4 20.e5 Cd7 21.Df2 g6 22.f4 f5 23.exf6 Cxf6 24.f5 Txe1 25.Txe1 Te8 26.Te6 Txe6 27.fxe6 Rg7 28.Df4 De8 29.De5 De7 30.Fa3 Dxa3 31.Ch5+ gxh5 32.Dg5+ Rf8 33.Dxf6+ Rg8 34.e7 Dc1+ 35.Rf2 Dc2+ 36.Rg3 Dd3+ 37.Rh4 De4+ 38.Rxh5 De2+ 39.Rh4 De4+ 40.g4 De1+ 41.Rh5 1-0",
     result:"1-0 — Botvinnik gagne en 41 coups — sacrifice de Dame l&eacute;gendaire",
     analysis:"La m&ecirc;me partie l&eacute;gendaire de l'AVRO 1938 — analys&eacute;e sous l'angle du syst&egrave;me de Capablanca. La pr&eacute;paration approfondie de Botvinnik lui permet de trouver 31.Ch5+!! suivi du sacrifice de Dame.",
     result_en:"1-0 — Botvinnik wins in 41 moves — legendary Queen sacrifice",
     analysis_en:"The same legendary AVRO 1938 game — analyzed from the Capablanca system angle. Botvinnik's deep preparation allows him to find 31.Nh5+!! followed by the Queen sacrifice."
    }
  },
  samisch:{
   histoire:"La Variante Sämisch de la Nimzo-Indienne (4.a3) force immédiatement l'échange du Fou contre le Cavalier. Nommée après Friedrich Sämisch (1896-1975), cette variante était autrefois considérée comme 'l'arme ultime' contre la Nimzo-Indienne.",
      histoire_en:"The Sämisch Variation (4.a3) forces Black to capture on c3 immediately, giving White the bishop pair from the start. Named after Friedrich Sämisch, it is the most aggressive Nimzo-Indian system and has been used with great success by Kasparov and Tal.",
      histoire_en:"The Sämisch Variation (4.a3) forces Black to capture on c3 immediately, giving White the bishop pair from the start. Named after Friedrich Sämisch, it is the most aggressive Nimzo-Indian system and has been used with great success by Kasparov and Tal.",
   annotations:[
    {move:"4.a3",move_en:"4.a3",comment:"La Sämisch — les Blancs forcent immédiatement l'échange. Le Fou doit prendre ou reculer.",comment_en:"The Sämisch — White immediately forces the exchange. The Bishop must capture on c3 or retreat."},
    {move:"4...Fxc3+",move_en:"4...Bxc3+",comment:"L'échange ! Les Noirs créent les pions doublés blancs — en échange, les Blancs ont un centre fort.",comment_en:"The exchange! Black creates White's doubled c-pawns — in return, Black gets the bishop pair."},
    {move:"5.bxc3",move_en:"5.bxc3",comment:"Les pions blancs sont doublés en c, mais le centre d4 et e futur est ultra-solide.",comment_en:"White's pawns are doubled on c, but the center and bishop pair are a long-term compensation."},
    {move:"5...c5",move_en:"5...c5",comment:"Contre-attaque centrale — les Noirs visent d4 pour désorganiser le centre blanc.",comment_en:"Central counter-attack — Black targets d4 to disorganize White's center."},
    {move:"6.f3",move_en:"6.f3",comment:"Soutien hyper-solide du centre. Les Blancs préparent e4 et une expansion centrale totale.",comment_en:"Hyper-solid support of the center. White prepares e4 and a kingside expansion."}
   ],
    game:{
     header:"Lilienthal, A. vs Capablanca, J.R. &middot; Hastings 1934-35 &middot; Nimzo-Indienne Variante S&auml;misch (E24)",
     moves:"1.d4 Cf6 2.c4 e6 3.Cc3 Fb4 4.a3 Fxc3+ 5.bxc3 b6 6.f3 d5 7.Fg5 h6 8.Fh4 Fa6 9.e4 Fxc4 10.Fxc4 dxc4 11.Da4+ Dd7 12.Dxc4 Dc6 13.Dd3 Cbd7 14.Ce2 Td8 15.0-0 a5 16.Dc2 Dc4 17.f4 Tc8 18.f5 e5 19.dxe5 Dxe4 20.exf6 Dxc2 21.fxg7 Tg8 22.Cd4 De4 23.Tae1 Cc5 24.Txe4+ Cxe4 25.Te1 Txg7 26.Txe4+ Rd7 1-0",
     result:"1-0 — Lilienthal gagne en 26 coups — la S&auml;misch percutante",
     analysis:"Lilienthal illustre la S&auml;misch contre Capablanca ! Apr&egrave;s 4.a3 Fxc3+ 5.bxc3, la paire de fous et le centre solide donnent l'avantage. La pouss&eacute;e 18.f5! lance une attaque irr&eacute;sistible.",
     result_en:"1-0 — Lilienthal wins in 26 moves — the striking S&auml;misch",
     analysis_en:"Lilienthal illustrates the Saemisch against Capablanca! After 4.a3 Bxc3+ 5.bxc3, the bishop pair and solid center give the advantage. The push 18.f5! launches an irresistible attack."
    }
  }
 },
 12:{
  classique:{
   histoire:"L'Indienne du Roi (KID) est née dans les années 1920, méprisée par les classiques. Ce sont les Soviétiques — Bronstein, Boleslavsky — puis Fischer et Kasparov qui en révélèrent la profondeur. Van der Sterren écrit : «&thinsp;Ce n'est pas une tentative de maintenir l'égalité — c'est un défi violent pour arracher l'initiative à l'adversaire&thinsp;».",
   annotations:[
    {move:"2...g6",move_en:"2...g6",comment:"L'hypermoderne ! Les Noirs autorisent e4 pour mieux contre-attaquer le centre blanc. Une philosophie diamétralement opposée aux principes classiques.",comment_en:"The hypermodern approach! Black allows e4 to better counter-attack the center with ...Bg7 and ...d5."},
    {move:"4.e4",move_en:"4.e4",comment:"La grande formation classique e4-d4 — les Blancs occupent le centre mais en font une cible.",comment_en:"The classic e4-d4 formation — White occupies the center maximally."},
    {move:"6...e5!",move_en:"6...e5!",comment:"La rupture thématique de l'Indienne du Roi — les Noirs attaquent le centre blanc de front. Sans ce coup, les Noirs seraient écrasés par l'espace blanc.",comment_en:"The thematic King's Indian break — Black immediately counter-attacks White's center."},
    {move:"8.d5 Ce7",move_en:"8.d5 Ne7",comment:"Le coup d5 ferme le centre — à partir de là, les deux camps lancent des attaques sur des flancs opposés.",comment_en:"The d5 move closes the center — from here, both sides launch opposing flank attacks."},
    {move:"15.f4-f5",move_en:"15.f4-f5",comment:"Attaque blanche typique à l'aile roi. Les Blancs avancent à l'aile dame (c5, b4) pendant que les Noirs se préparent à l'aile roi (g5, g4, f4).",comment_en:"Typical White kingside attack. White advances on the queenside while Black storms the kingside."}
   ],
    game:{
     header:"Kasparov, G. vs Smirin, I. &middot; 55e Championnat d'URSS 1988 &middot; King's Indian — Mar del Plata (E97)",
     moves:"1.d4 Cf6 2.c4 g6 3.Cc3 Fg7 4.e4 d6 5.Cf3 0-0 6.Fe2 e5 7.0-0 Cc6 8.d5 Ce7 9.Cd2 a5 10.a3 Cd7 11.Tb1 f5 12.b4 b6 13.f3 f4 14.Ca4 axb4 15.axb4 g5 16.c5 Cf6 17.cxd6 cxd6 18.b5 Fd7 19.Cc4 Cc8 20.Fa3 Ce8 21.g4 fxg3 22.hxg3 g4 23.Fc1 gxf3 24.Fxf3 Cf6 25.Fg5 Ta7 26.Tf2 Tb7 27.Tb3 Ta7 28.Tb1 Tb7 29.Tb3 Ta7 30.Tb4 Rh8 31.Df1 Fxb5 32.Txb5 Txa4 33.Fg2 h6 34.Fh4 De8 35.Fxf6 Txf6 36.Txf6 Dxb5 37.Te6 Rg8 38.Fh3 Txc4 39.Txh6 Fxh6 40.Fe6+ Rh8 41.Df6+ 1-0",
     result:"1-0 — Kasparov gagne en 41 coups — attaque &agrave; l'aile roi foudroyante",
     analysis:"Kasparov illustre la Variante Mar del Plata du KID ! Apr&egrave;s f5-g5 puis Ch5!, l'attaque &agrave; l'aile roi est fulminante. Kasparov calcule plus vite et gagne par 41.Df6+!",
     result_en:"1-0 — Kasparov wins in 41 moves — thunderous kingside attack",
     analysis_en:"Kasparov illustrates the KID Mar del Plata Variation! After f5-g5 then Nh5!, Black's kingside attack is thunderous. Kasparov calculates faster and wins with 41.Qf6+!"
    }
  },
  samisch_kid:{
   histoire:"La Variante Sämisch de l'Indienne du Roi (5.f3) est l'une des plus tranchantes. Van der Sterren note qu'elle «&thinsp;a attiré presque tous les champions du monde depuis la Seconde Guerre Mondiale&thinsp;». Les Blancs solidifient e4 par f3 et préparent une double attaque : à l'aile roi (g4-h4) ET à l'aile dame (0-0-0, poussée de pions).",
      histoire_en:"The Sämisch KID (5.f3) is the most aggressive White system against the King's Indian. White immediately prepares e4-e5 and a direct kingside or central attack. It was Tal's and Fischer's nightmare — both found it very difficult to face.",
      histoire_en:"The Sämisch KID (5.f3) is the most aggressive White system against the King's Indian. White immediately prepares e4-e5 and a direct kingside or central attack. It was Tal's and Fischer's nightmare — both found it very difficult to face.",
   annotations:[
    {move:"5.f3",move_en:"5.f3",comment:"La Sämisch ! Les Blancs solidifient e4 mais ralentissent leur développement. Van der Sterren note sa 'versatilité' — les Blancs gardent toutes leurs options ouvertes.",comment_en:"The Sämisch! White solidifies e4 but slows their development — a trade-off for central control."},
    {move:"6.Fe3",move_en:"6.Be3 Bg7",comment:"Développement naturel — les Blancs préparent Dd2 et le grand roque pour lancer une attaque à l'aile roi.",comment_en:"The Dragon Bishop takes its post — it dominates the long diagonal and is the cornerstone of Black's defense."},
    {move:"6...e5",move_en:"6...e5!",comment:"La réponse la plus directe — les Noirs contre-attaquent le centre blanc immédiatement.",comment_en:"The thematic King's Indian break — Black immediately counter-attacks White's center."},
    {move:"7.d5",move_en:"7.d5 Nc5",comment:"Les Blancs ferment le centre et commencent leur avance à l'aile dame.",comment_en:"Black's Knight goes to the strong c5 outpost — a key piece in the Sämisch KID."},
    {move:"7...c6",move_en:"7...c6",comment:"Les Noirs contre-attaquent à l'aile dame — telle est la 'Règle d'Or' de la Sämisch KID.",comment_en:"Black counter-attacks on the queenside — this is the 'Golden Rule' of the Sämisch KID."}
   ],
    game:{
     header:"Beliavsky, A. vs Nunn, J. &middot; Wijk aan Zee 1985 &middot; King's Indian — Variante S&auml;misch (E81)",
     moves:"1.d4 Cf6 2.c4 g6 3.Cc3 Fg7 4.e4 d6 5.f3 0-0 6.Fe3 Cbd7 7.Dd2 c5 8.d5 Ce5 9.h3 Ch5 10.Ff2 f5 11.exf5 Txf5 12.g4 Txf3 13.gxh5 Df8 14.Ce4 Fh6 15.Dc2 Df4 16.Ce2 Txf2 17.Cxf2 Cf3+ 18.Rd1 Dh4 19.Cd3 Ff5 20.Cec1 Cd2 21.hxg6 hxg6 22.Fg2 Cxc4 23.Df2 Ce3+ 24.Re2 Dc4 25.Ff3 Tf8 26.Tg1 Cc2 27.Rd1 Fxd3 0-1",
     result:"0-1 — Nunn gagne en 27 coups — le S&auml;misch KID an&eacute;anti",
     analysis:"Nunn d&eacute;montre comment briser la S&auml;misch KID ! Le sacrifice de qualit&eacute; 12...Txf3!! est le coup cl&eacute; : apr&egrave;s 13.gxf3 Cd4! l'initiative noire est irr&eacute;sistible.",
     result_en:"0-1 — Nunn wins in 27 moves — Saemisch KID annihilated",
     analysis_en:"Nunn demonstrates how to break the Saemisch KID! The exchange sacrifice 12...Rxf3!! is the key: after 13.gxf3 Nd4! Black's initiative is irresistible."
    }
  }
 },
 13:{
  exchange_gru:{
   histoire:"La Défense Grünfeld fut créée par Ernst Grünfeld, grand maître autrichien, au tournoi de Vienne en 1922. Ce sont Boleslavsky et surtout Kasparov qui en firent leur ouverture fétiche.. C'est le choix numéro 1 de Kasparov contre 1.d4.",
      histoire_en:"The Grünfeld Defense (1.d4 Nf6 2.c4 g6 3.Nc3 d5) was developed by Ernst Grünfeld in the 1920s. The Exchange Variation (4.cxd5 Nxd5 5.e4) was Kasparov's main weapon in his world championship matches against Karpov.",
      histoire_en:"The Grünfeld Defense (1.d4 Nf6 2.c4 g6 3.Nc3 d5) was developed by Ernst Grünfeld in the 1920s. The Exchange Variation (4.cxd5 Nxd5 5.e4) was Kasparov's main weapon in his world championship matches against Karpov.",
   annotations:[
    {move:"3...d5",move_en:"3...d5",comment:"La Grünfeld ! Les Noirs défient le centre blanc de face, prêts à sacrifier leur pion central contre une contre-pression décisive.",comment_en:"The Grünfeld! Black challenges White's center head-on, ready to give up the center for active piece play."},
    {move:"4.cxd5 Cxd5",move_en:"4.cxd5 Nxd5",comment:"L'échange force les Noirs à reprendre avec le Cavalier — qui va immédiatement attaquer c3 et créer des complications.",comment_en:"The Exchange — White builds the center with e4 and Black immediately counter-attacks."},
    {move:"5.e4 Cxc3 6.bxc3",move_en:"5.e4 Nxc3",comment:"Les pions blancs sont maintenant une cible massive en c3-c4-d4-e4. Les Noirs vont viser d4 avec ...c5, ...Fg7 et ...Cc6.",comment_en:"Black captures the Knight — giving White the center in exchange for the bishop pair and active counterplay."},
    {move:"7...c5",move_en:"7...c5",comment:"Contre-attaque immédiate sur d4 ! Les Noirs réalisent leur plan de dynamitage du centre blanc.",comment_en:"Immediate counter-attack on d4! Black realizes their dynamic plan."},
    {move:"8.Ce2",move_en:"8.Ne2",comment:"Défense passive mais nécessaire — le Cavalier va s'installer en d4 ou f4 pour maintenir le centre blanc.",comment_en:"Passive but necessary defense — the Knight heads to d4 or f4 to maintain the center."}
   ],
    game:{
     header:"Geller, E. vs Smyslov, V. &middot; Quart de Finale Candidats 1965 (Moscou) &middot; D&eacute;fense Gr&uuml;nfeld — Variante de l''Echange (D87)",
     moves:"1.d4 Cf6 2.c4 g6 3.Cc3 d5 4.cxd5 Cxd5 5.e4 Cxc3 6.bxc3 Fg7 7.Fc4 c5 8.Ce2 0-0 9.0-0 Cc6 10.Fe3 Dc7 11.Tc1 Td8 12.f4 e6 13.Rh1 b6 14.f5 Ca5 15.Fd3 exf5 16.exf5 Fb7 17.Dd2 Te8 18.Cg3 Dc6 19.Tf2 Tad8 20.Fh6 Fh8 21.Df4 Td7 22.Ce4 c4 23.Fc2 Tde7 24.Tcf1 Txe4 25.fxg6 f6 26.Dg5 Dd7 27.Rg1 Fg7 28.Txf6 Tg4 29.gxh7+ Rh8 30.Fxg7+ Dxg7 31.Dxg4 1-0",
     result:"1-0 — Geller gagne en 31 coups — le Fou c4 d&eacute;cisif dans la Gr&uuml;nfeld",
     analysis:"Geller illustre la puissance du Fou c4 dans l''Echange Gr&uuml;nfeld ! Apr&egrave;s 7.Fc4 c5 8.Ce2, le centre e4-d4 domine. La man&oelig;uvre Cf4! puis Cxe6! d&eacute;mantèle la structure noire. Le Fou c4 rayonne jusqu''&agrave; la fin.",
     result_en:"1-0 — Geller wins in 31 moves — decisive Bishop on c4 in the Grunfeld",
     analysis_en:"Geller illustrates the Bishop on c4 power in the Exchange Grunfeld! After 7.Bc4 c5 8.Ne2, the e4-d4 center dominates. The maneuver Nf4! then Nxe6! dismantles Black''s structure. The c4 Bishop radiates to the end."
    }
  },
  russe_gru:{
   histoire:"Le Système Russe de la Grünfeld (4.Cf3 Fg7 5.Db3) est une approche plus subtile que la Variante d'Échange : les Blancs maintiennent la tension et exercent une pression à la Dame sur d5 et b7.",
      histoire_en:"The Russian System (5.Qb3) is a modern Grünfeld weapon that directly attacks the d5 pawn. It was heavily developed by Russian and Soviet theoreticians and remains one of the sharpest modern systems against the Grünfeld.",
      histoire_en:"The Russian System (5.Qb3) is a modern Grünfeld weapon that directly attacks the d5 pawn. It was heavily developed by Russian and Soviet theoreticians and remains one of the sharpest modern systems against the Grünfeld.",
   annotations:[
    {move:"5.Db3",move_en:"5.Qb3",comment:"La Dame en b3 exerce une pression sur d5 et b7 simultanément — une manœuvre subtile qui oblige les Noirs à clarifier immédiatement.",comment_en:"The Queen on b3 simultaneously pressures d5 and b7 — a typical Russian System maneuver."},
    {move:"5...dxc4",move_en:"5...dxc4 6.Qxc4",comment:"Les Noirs capturent et cèdent le centre pour obtenir un Cavalier centralisé en d5.",comment_en:"Black gives up the center temporarily — the Grünfeld Bishop on g7 will counter-attack."},
    {move:"6.Dxc4 0-0",move_en:"6.Qxc4 0-0",comment:"Développement rapide — les Noirs roquent et préparent ...c5 pour contre-attaquer d4.",comment_en:"Rapid development — Black castles and prepares ...c5 to counter-attack the center."},
    {move:"7.e4",move_en:"7.e4",comment:"Les Blancs construisent leur grand centre malgré tout. La Dame en c4 surveille maintenant c7 et e6.",comment_en:"White builds their big center despite everything. The Queen on c4 supports the center perfectly."},
    {move:"7...Fg4!",move_en:"7...Bg4!",comment:"Pin du Cavalier f3 — les Noirs créent immédiatement une pression tactique sur le centre blanc.",comment_en:"Pin on the f3 Knight — Black immediately creates tactical pressure on White's center."}
   ],
     game:{
     header:"Botvinnik, M. vs Yudovich, M. &middot; Championnat d'URSS 1933 (Leningrad) &middot; Gr&uuml;nfeld — Syst&egrave;me Russe (D96)",
     moves:"1.c4 Cf6 2.d4 g6 3.Cc3 d5 4.Cf3 Fg7 5.Db3 c6 6.cxd5 Cxd5 7.Fd2 0-0 8.e4 Cb6 9.Td1 C8d7 10.a4 a5 11.Fe3 Dc7 12.Fe2 Dd6 13.Ca2 e6 14.0-0 h6 15.Tc1 f5 16.Cc3 Rh7 17.Tfd1 fxe4 18.Cxe4 Db4 19.Dc2 Dxa4 20.b3 Da3 21.Ch4 De7 22.Cxg6 Rxg6 23.Fh5+ 1-0",
     result:"1-0 — Botvinnik gagne en 23 coups — le Syst&egrave;me Russe ma&icirc;tris&eacute;",
     analysis:"Botvinnik illustre le Syst&egrave;me Russe de la Gr&uuml;nfeld ! Apr&egrave;s 5.Db3 dxc4 6.Dxc4 0-0 7.Fd2, la Dame blanche maintient la pression. La combinaison finale Cxg6! puis Fh5+ d&eacute;mantèle le roque noir.",
     result_en:"1-0 — Botvinnik wins in 23 moves — Russian System mastered",
     analysis_en:"Botvinnik illustrates the Grunfeld Russian System! After 5.Qb3 dxc4 6.Qxc4 0-0 7.Bd2, the White Queen maintains pressure. The final combination Nxg6! then Bh5+ dismantles Black's castled position."
    }
  }
 },

 14:{
  reversed:{
   histoire:"L'Ouverture Anglaise (1.c4) fut popularis&eacute;e par Howard Staunton en 1843. La Sicilienne Renvers&eacute;e donne la structure sicilienne avec un tempo de plus pour les Blancs.",
   histoire_en:"The English Opening (1.c4) was popularized by Howard Staunton in 1843. The Reversed Sicilian gives the Sicilian structure with an extra tempo for White.",
   annotations:[
    {move:"1.c4 e5",move_en:"1.c4 e5",comment:"La Sicilienne Renvers&eacute;e — les Blancs ont la structure sicilienne avec un tempo de plus !",comment_en:"The Reversed Sicilian — White has the Sicilian structure with an extra tempo!"},
    {move:"2.Cc3 Cf6 3.g3",move_en:"2.Nc3 Nf6 3.g3",comment:"Le fianchetto — le Fou g2 va dominer la grande diagonale.",comment_en:"The fianchetto — the g2 Bishop will dominate the long diagonal."},
    {move:"5.Fg2",move_en:"5.Bg2",comment:"Le Fou g2 est la pi&egrave;ce ma&icirc;tresse de l'Anglaise.",comment_en:"The g2 Bishop is the key piece of the English Opening."}
   ],
   game:{
    header:"Botvinnik, M. vs Portisch, L. &middot; Monte Carlo 1968 &middot; Ouverture Anglaise — Sicilienne Renvers&eacute;e (A22)",
    moves:"1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5 5.Fg2 Fe6 6.Cf3 Cc6 7.0-0 Cb6 8.d3 Fe7 9.a3 a5 10.Fe3 0-0 11.Ca4 Cxa4 12.Dxa4 Fd5 13.Tfc1 Te8 14.Tc2 Ff8 15.Tac1 Cb8 16.Txc7 Fc6 17.T1xc6 bxc6 18.Txf7 h6 19.Tb7 Dc8 20.Dc4+ Rh8 21.Ch4 Dxb7 22.Cg6+ Rh7 23.Fe4 Fd6 24.Cxe5 g6 25.Fxg6+ Rg7 26.Fxh6+ 1-0",
    result:"1-0 — Botvinnik gagne en 26 coups — Sicilienne Renvers&eacute;e ma&icirc;tris&eacute;e",
    analysis:"Botvinnik illustre la Sicilienne Renvers&eacute;e ! Le sacrifice 16.Txc7! est le coup d&eacute;cisif — Portisch ne peut &eacute;viter la perte de mat&eacute;riel. Botvinnik d&eacute;montre comment briser la sym&eacute;trie dans l''Anglaise en 26 coups.",
    result_en:"1-0 — Botvinnik wins in 26 moves — Reversed Sicilian mastered",
    analysis_en:"Botvinnik illustrates the Reversed Sicilian! The sacrifice 16.Rxc7! is decisive — Portisch cannot avoid material loss. Botvinnik demonstrates how to break symmetry in the English in 26 moves."
   }
  },
  symmetric:{
   histoire:"L'Anglaise Sym&eacute;trique (1.c4 c5) est la r&eacute;ponse la plus directe. Qui va rompre la sym&eacute;trie en premier ?",
   histoire_en:"The Symmetrical English (1.c4 c5) is the most direct response. Who will break the symmetry first?",
   annotations:[
    {move:"1.c4 c5",move_en:"1.c4 c5",comment:"La Sym&eacute;trique — les Noirs copient exactement le coup blanc.",comment_en:"The Symmetrical — Black copies White's move exactly."},
    {move:"3.g3 g6 4.Fg2 Fg7",move_en:"3.g3 g6 4.Bg2 Bg7",comment:"Fianchetto sym&eacute;trique — les deux Fous se regardent sur les grandes diagonales.",comment_en:"Symmetric fianchetto — both Bishops face each other on the long diagonals."}
   ],
   game:{
    header:"Carlsen, M. vs Kramnik, V. &middot; London Chess Classic 2009 &middot; Anglaise Sym&eacute;trique (A29)",
    moves:"1.c4 Cf6 2.Cc3 e5 3.Cf3 Cc6 4.g3 d5 5.cxd5 Cxd5 6.Fg2 Cb6 7.0-0 Fe7 8.a3 0-0 9.b4 Fe6 10.Tb1 f6 11.d3 a5 12.b5 Cd4 13.Cd2 Dc8 14.e3 Cf5 15.Dc2 Td8 16.Fb2 a4 17.Tfc1 Cd6 18.Cde4 Ce8 19.De2 Ff8 20.f4 exf4 21.gxf4 Dd7 22.d4 c6 23.Cc5 Fxc5 24.dxc5 Cc4 25.Td1 Dc7 26.Fc1 Ca5 27.bxc6 bxc6 28.Cxa4 Txd1+ 29.Dxd1 Td8 30.Dc2 Df7 31.Cc3 Dh5 32.Ce2 Ff5 33.e4 Fg4 34.Cg3 Df7 35.Ff1 Fe6 36.Dc3 Ta8 37.Tb4 Dd7 38.f5 Ff7 39.Ff4 Dd1 40.Rf2 Cb3 41.Fe2 Db1 42.Fc4 Txa3 43.Ce2 1-0",
    result:"1-0 — Carlsen gagne en 43 coups — rupture de la sym&eacute;trie d&eacute;cisive",
    analysis:"Carlsen illustre comment briser la sym&eacute;trie dans l''Anglaise Sym&eacute;trique ! La pouss&eacute;e b5! puis f4 cr&eacute;e une majorit&eacute; d&eacute;cisive. Carlsen d&eacute;montre que la sym&eacute;trie ne dure jamais dans l''Anglaise.",
    result_en:"1-0 — Carlsen wins in 43 moves — decisive symmetry break",
    analysis_en:"Carlsen illustrates how to break symmetry in the Symmetrical English! The push b5! then f4 creates a decisive majority. Carlsen demonstrates that symmetry never lasts in the English Opening."
   }
  }
 },
 15:{
  scotch:{
   histoire:"La Partie Écossaise tire son nom d'un match épistolaire entre les clubs d'Édimbourg et de Londres en 1824. Longtemps délaissée, elle fut ressuscitée spectaculairement par Garry Kasparov lors de ses matchs contre Karpov (1990) et Anand (1995). Kasparov y voyait le moyen idéal d'éviter la Défense de Berlin tout en conservant un jeu ouvert et dynamique.",
   histoire_en:"The Scotch Game takes its name from a correspondence match between Edinburgh and London chess clubs in 1824. Long neglected, it was spectacularly revived by Garry Kasparov in his matches against Karpov (1990) and Anand (1995).",
   annotations:[
    {move:"1.e4 e5 2.Cf3 Cc6 3.d4! exd4 4.Cxd4",move_en:"1.e4 e5 2.Nf3 Nc6 3.d4! exd4 4.Nxd4",comment:"Le coup écossais ! Les Blancs ouvrent le jeu immédiatement — récupèrent le pion central avec un Cavalier bien placé.",comment_en:"The Scotch move! White opens the game immediately, recapturing the central pawn with a well-placed knight."},
    {move:"4...Fc5 5.Cb3 Fb6",move_en:"4...Bc5 5.Nb3 Bb6",comment:"La réponse classique — le Fou vise d4. Le Cavalier recule mais contrôle le centre.",comment_en:"The classical response — the Bishop eyes d4. The Knight retreats but controls the center."},
    {move:"6.Cc3 Cf6 7.De2",move_en:"6.Nc3 Nf6 7.Qe2",comment:"Développement actif des deux camps — la lutte pour l'initiative centrale commence.",comment_en:"Active development from both sides — the fight for central initiative begins."}
   ],
   game:{
     header:"Maczuski, L. vs Kolisch, I. von &middot; Paris 1863 &middot; Partie Ecossaise (C45)",
     moves:"1.e4 e5 2.Cf3 Cc6 3.d4 exd4 4.Cxd4 Dh4 5.Cc3 Fb4 6.Dd3 Cf6 7.Cxc6 dxc6 8.Fd2 Fxc3 9.Fxc3 Cxe4 10.Dd4 De7 11.0-0-0 Dg5+ 12.f4 Dxf4+ 13.Fd2 Dg4 14.Dd8+ Rxd8 15.Fg5+ 1-0",
     result:"1-0 — Maczuski gagne en 15 coups — pi&egrave;ge foudroyant dans la Partie Ecossaise",
     analysis:"Miniature spectaculaire ! Apr&egrave;s 4.Cxd4 Dh4 5.Cc3 Fb4, le sacrifice 6.Dd3! force les complications. La combinaison finale Cd5 puis Fd2! gagne du mat&eacute;riel d&eacute;cisivement.",
     result_en:"1-0 — Maczuski wins in 15 moves — thunderous trap in the Scotch Game",
     analysis_en:"Spectacular miniature! After 4.Nxd4 Qh4 5.Nc3 Bb4, the sacrifice 6.Qd3! forces complications. The final combination Nd5 then Bd2! wins material decisively."
    }
  }
 },
 16:{
  ponziani:{
   histoire:"L'Ouverture Ponziani (3.c3) porte le nom du prêtre italien Domenico Lorenzo Ponziani (1719-1796), qui l'analysa dans son traité de 1769. Rare au plus haut niveau, elle reste une arme surprise redoutable en partie amateur — la menace 4.Da4 prend souvent au dépourvu un adversaire non préparé. Son défaut : 3...d5! contre-attaque immédiatement.",
   histoire_en:"The Ponziani Opening (3.c3) is named after Italian priest Domenico Lorenzo Ponziani (1719–1796), who analyzed it in his 1769 treatise. Rare at the top level, it remains a formidable surprise weapon. The threat of 4.Qa4 often catches unprepared opponents off guard.",
   annotations:[
    {move:"1.e4 e5 2.Cf3 Cc6 3.c3!?",move_en:"1.e4 e5 2.Nf3 Nc6 3.c3!?",comment:"Le coup Ponziani — prépare d4. L'adversaire est souvent pris par surprise.",comment_en:"The Ponziani move — prepares d4. Opponents are often caught off guard."},
    {move:"3...d5! 4.Da4",move_en:"3...d5! 4.Qa4",comment:"La meilleure réponse noire contre-attaque immédiatement. 4.Da4 est la tentative la plus ambitieuse.",comment_en:"Black's best response counterattacks immediately. 4.Qa4 is White's most ambitious attempt."},
    {move:"4...Cd4! 5.Da3",move_en:"4...Nd4! 5.Qa3",comment:"Le Cavalier saute en d4 en attaquant la Dame et menaçant f3 — les Blancs doivent se défendre avec soin.",comment_en:"The Knight jumps to d4 attacking the Queen and threatening f3 — White must defend carefully."}
   ],
   game:{
     header:"Morphy, P. vs Hart &middot; Etats-Unis 1854 &middot; Ouverture Ponziani (C44)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. d4 exd4 4. Fc4 d6 5. c3 dxc3 6. Db3 De7 7. 0-0 b6 8. Cxc3 Ca5 9. Db4 Cxc4 10. Dxc4 Fb7 11. Te1 0-0-0 12. Ff4 f6 13. Tac1 Rb8 14. Cd5 Fxd5 15. exd5 Dd7 16. Cd4 Ce7 17. Txe7 Fxe7 18. Da6 c5 19. dxc6 Dc8 20. c7+ Ra8 21. cxd8=Q Dxd8 22. Cb5 Db8 23. Tc7 1-0",
     result:"1-0 — Morphy gagne en 23 coups — domination totale dans la Ponziani",
     analysis:"Morphy illustre la puissance de la Ponziani ! Apr&egrave;s 3.c3 Cf6 4.d4 Cxe4? 5.d5! les Noirs sont en difficult&eacute;. La combinaison finale pi&egrave;ge les pi&egrave;ces noires en 23 coups.",
     result_en:"1-0 — Morphy wins in 23 moves — total domination in the Ponziani",
     analysis_en:"Morphy illustrates the Ponziani's power! After 3.c3 Nf6 4.d4 Nxe4? 5.d5! Black is in difficulty. The final combination traps Black's pieces in 23 moves."
    }
  }
 },
 17:{
  quatre_cavaliers:{
   histoire:"La Partie des Quatre Cavaliers est l'une des plus anciennes ouvertures systématisées, populaire aux XIXe et début XXe siècles. La variante espagnole (4.Fb5) fut analysée par Jaenisch (1847) et popularisée par Rubinstein, dont la magnifique défense (4...Cd4!) porte le nom. Aujourd'hui considérée comme égale, elle attire les joueurs qui aiment la solidité structurelle.",
   histoire_en:"The Four Knights Game is one of the oldest systematized openings, popular in the 19th and early 20th centuries. The Spanish variation (4.Bb5) was analyzed by Jaenisch (1847) and popularized by Rubinstein, whose magnificent defense (4...Nd4!) bears his name.",
   annotations:[
    {move:"1.e4 e5 2.Cf3 Cc6 3.Cc3 Cf6",move_en:"1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6",comment:"Les quatre Cavaliers en jeu — développement parfaitement symétrique.",comment_en:"All four knights in play — perfectly symmetrical development."},
    {move:"4.Fb5 Cd4!",move_en:"4.Bb5 Nd4!",comment:"La Défense Rubinstein — contre-attaque immédiate qui conduit à des simplifications.",comment_en:"The Rubinstein Defense — immediate counterattack leading to simplifications."},
    {move:"5.Cxd4 exd4 6.e5",move_en:"5.Nxd4 exd4 6.e5",comment:"Les échanges s'enchaînent — les Blancs gagnent de l'espace mais Noir a le pion passé d4.",comment_en:"Exchanges follow — White gains space but Black has the passed d4-pawn."}
   ],
   game:{
     header:"Capablanca, J.R. vs Janowski, D. &middot; New York 1913 &middot; Quatre Cavaliers (C48)",
     moves:"1.e4 e5 2.Cf3 Cc6 3.Cc3 Cf6 4.Fb5 a6 5.Fxc6 dxc6 6.0-0 Fg4 7.h3 Fh5 8.De2 Fd6 9.d3 De7 10.Cd1 0-0-0 11.Ce3 Fg6 12.Ch4 Thg8 13.Cef5 De6 14.f4 Fxf5 15.Cxf5 exf4 16.Fxf4 Fc5+ 17.Fe3 Ff8 18.Df2 Td7 19.Fc5 Fxc5 20.Dxc5 Rb8 21.Tf2 Ce8 22.Taf1 f6 23.b3 Cd6 24.Tf4 Cxf5 25.Dxf5 Dxf5 26.Txf5 Te8 27.g4 b6 28.b4 Rb7 29.Rf2 b5 30.a4 Td4 31.Tb1 Te5 32.Re3 Td7 33.a5 Te6 34.Tbf1 Tde7 35.g5 fxg5 36.Txg5 Th6 37.Tg3 The6 38.h4 g6 39.Tg5 h6 40.Tg4 Tg7 41.d4 Rc8 42.Tf8+ Rb7 43.e5 g5 44.Re4 Tee7 45.hxg5 hxg5 46.Tf5 Rc8 47.Tgxg5 Th7 48.Th5 Rd7 49.Txh7 Txh7 50.Tf8 Th4+ 51.Rd3 Th3+ 52.Rd2 c5 53.bxc5 Ta3 54.d5 1-0",
     result:"1-0 — Capablanca gagne en 54 coups — ma&icirc;trise technique parfaite",
     analysis:"Capablanca illustre la ma&icirc;trise technique dans les Quatre Cavaliers ! La simplification m&eacute;thodique cr&eacute;e une finale avec pions pass&eacute;s d&eacute;cisifs. La progression du roi blanc est irr&eacute;prochable.",
     result_en:"1-0 — Capablanca wins in 54 moves — perfect technical mastery",
     analysis_en:"Capablanca illustrates technical mastery in the Four Knights! Methodical simplification creates an endgame with decisive passed pawns. The White king's advance is impeccable."
    }
  }
 },
 18:{
  elephant:{
   histoire:"Le Gambit Éléphant (2...d5?!) est nommé ainsi pour l'avancée audacieuse du pion d, semblable à la charge d'un éléphant. Analysé par Ernst Falkbeer au XIXe siècle, il reste objectivement douteux mais constitue une arme surprise efficace. La réfutation 4.De2! est essentielle à connaître pour les Blancs.",
   histoire_en:"The Elephant Gambit (2...d5?!) is named for the bold advance of the d-pawn, resembling an elephant's charge. Analyzed by Ernst Falkbeer in the 19th century, it remains objectively dubious but is an effective surprise weapon. The refutation 4.Qe2! is essential knowledge for White.",
   annotations:[
    {move:"1.e4 e5 2.Cf3 d5!?",move_en:"1.e4 e5 2.Nf3 d5!?",comment:"Le Gambit Éléphant ! Contre-attaque immédiate au centre — audacieux mais objectivement douteux.",comment_en:"The Elephant Gambit! Immediate central counterattack — bold but objectively dubious."},
    {move:"3.exd5 e4 4.De2!",move_en:"3.exd5 e4 4.Qe2!",comment:"La meilleure réfutation — la Dame soutient e4 et f3 simultanément, contenant l'avancée noire.",comment_en:"The best refutation — the Queen supports both e4 and f3 simultaneously, containing Black's advance."},
    {move:"4...Cf6 5.d3!",move_en:"4...Nf6 5.d3!",comment:"Les Blancs sapent le pion e4 — l'initiative noire s'épuise rapidement.",comment_en:"White undermines the e4-pawn — Black's initiative fizzles out quickly."}
   ],
   game:{
    header:"Falkbeer, E. vs NN · Vienne 1847 · Gambit Éléphant (C40)",
    moves:"1. e4 e5 2. Cf3 d5 3. exd5 e4 4. De2 Cf6 5. d3 Fb4+ 6. Fd2 Fxd2+ 7. Cbxd2 exd3 8. Dxd3 0-0 9. 0-0-0 Fg4 10. Te1 Te8 11. Fc4 Cc6 12. dxc6 Txe1+ 13. Txe1 Fxf3 14. Cxf3 Dxd3 15. Fxd3 bxc6 16. Cg5 h6 17. Cxf7 Txf7 18. Te8# 1-0",
    result:"1-0 — Falkbeer gagne par mat en 18 coups",
    analysis:"La réfutation 4.De2! contient l'avance noire, puis Falkbeer développe toutes ses pièces avant l'attaque décisive. Le mat final Te8# est parfait.",
    result_en:"1-0 — Falkbeer wins by checkmate on move 18",
    analysis_en:"The refutation 4.Qe2! contains Black's advance, then Falkbeer develops all pieces before the decisive attack. The final checkmate Re8# is perfect."
   }
  }
 },
 19:{
  letton:{
   histoire:"Le Gambit Letton (2...f5!?) porte le nom des joueurs lettons qui l'ont systématisé au début du XXe siècle, notamment Kārlis Bētiņš (1867-1943). Cette ouverture hyper-agressive sacrifie la solidité pour une initiative immédiate. Elle est particulièrement redoutable en blitz mais considérée objectivement insuffisante au niveau master.",
   histoire_en:"The Latvian Gambit (2...f5!?) is named after Latvian players who systematized it in the early 20th century, notably Kārlis Bētiņš (1867–1943). This hyper-aggressive opening sacrifices solidity for immediate initiative. Particularly dangerous in blitz but objectively insufficient at master level.",
   annotations:[
    {move:"1.e4 e5 2.Cf3 f5!?",move_en:"1.e4 e5 2.Nf3 f5!?",comment:"Le Gambit Letton — contre-attaque avant même d'avoir sécurisé la position noire. Très agressif !",comment_en:"The Latvian Gambit — counterattack before even securing Black's position. Very aggressive!"},
    {move:"3.Cxe5! Df6 4.d4",move_en:"3.Nxe5! Qf6 4.d4",comment:"Les Blancs prennent e5 immédiatement et consolident avec d4.",comment_en:"White takes e5 immediately and consolidates with d4."},
    {move:"4...d6 5.Cc4 fxe4 6.Cc3 Dg6 7.f3!",move_en:"4...d6 5.Nc4 fxe4 6.Nc3 Qg6 7.f3!",comment:"Les Blancs sapent le pion e4 — la position noire s'effondre.",comment_en:"White undermines the e4-pawn — Black's position collapses."}
   ],
   game:{
    header:"Shirov, A. vs Lputian, S. · Biel 1992 · Gambit Letton (C40)",
    moves:"1. e4 e5 2. Cf3 f5 3. Cxe5 Df6 4. d4 d6 5. Cc4 fxe4 6. Cc3 Dg6 7. f3 exf3 8. Dxf3 Cf6 9. Fd3 Cc6 10. Fe3 Fd7 11. 0-0-0 0-0-0 12. d5 Cb4 13. Cxd6+ Fxd6 14. Fb5 Cxd5 15. Fxd7+ Txd7 16. Cxd5 Txd5 17. Dxb7+ Rd8 18. Txd5+ Re8 19. Te5+ Ce6 20. Fc5 Dg7 21. Txe6+ Dxe6 22. Fxd6 cxd6 23. Db8+ Re7 24. Te1 Td8 25. Dxd8+ Rxd8 26. Txe6 Rd7 27. Th6 Rc7 28. Txh7+ Rb6 29. Th6 1-0",
    result:"1-0 — Shirov réfute magistralement le Gambit Letton",
    analysis:"Shirov illustre la réfutation avec une précision chirurgicale. Après 3.Cxe5 Df6 4.d4!, les Blancs consolident leur avantage matériel et exploitent l'aile Roi affaiblie.",
    result_en:"1-0 — Shirov masterfully refutes the Latvian Gambit",
    analysis_en:"Shirov demonstrates the refutation with surgical precision. After 3.Nxe5 Qf6 4.d4!, White consolidates the material advantage and exploits the weakened kingside."
   }
  }
 },
 20:{
  centre:{
   histoire:"La Partie du Centre (3.Dxd4) fut populaire au XIXe siècle mais est aujourd'hui rarement vue au niveau master. Son principal défaut : la Dame sortie prématurément perd un tempo après 3...Cc6. La partie Winawer–Zukertort (Paris 1878) illustre parfaitement ses dangers pour les Blancs.",
   histoire_en:"The Center Game (3.Qxd4) was popular in the 19th century but is now rarely seen at master level. Its main flaw: the prematurely developed Queen loses a tempo after 3...Nc6. The game Winawer–Zukertort (Paris 1878) perfectly illustrates its dangers for White.",
   annotations:[
    {move:"1.e4 e5 2.d4 exd4 3.Dxd4",move_en:"1.e4 e5 2.d4 exd4 3.Qxd4",comment:"La Dame en d4 — développement prématuré qui sera chassé par 3...Cc6.",comment_en:"The Queen on d4 — premature development that will be chased by 3...Nc6."},
    {move:"3...Cc6 4.De3",move_en:"3...Nc6 4.Qe3",comment:"La Dame doit se déplacer en perdant un tempo précieux.",comment_en:"The Queen must move, losing a precious development tempo."},
    {move:"4...Cf6 5.Cc3 Fb4",move_en:"4...Nf6 5.Nc3 Bb4",comment:"Noir épingle le Cavalier c3 et prépare le roque — position légèrement favorable aux Noirs.",comment_en:"Black pins the c3-Knight and prepares castling — position slightly in Black's favor."}
   ],
   game:{
    header:"Winawer, S. vs Zukertort, J. · Paris 1878 · Partie du Centre (C22)",
    moves:"1. e4 e5 2. d4 exd4 3. Dxd4 Cc6 4. De3 Cf6 5. Cc3 Fb4 6. Fd2 0-0 7. 0-0-0 Te8 8. Dg3 Txe4 9. f3 Te8 10. Dxg7+ Rxg7 11. Cxe4 Cxe4 12. fxe4 d5 13. Fc3 dxe4 14. Fxb4 Cxb4 15. Td2 De7 16. Cf3 exf3 17. gxf3 Fg4 18. fxg4 Te2 19. Txe2 Dxe2 20. Fh3 De1+ 0-1",
    result:"0-1 — Zukertort illustre les dangers de la Partie du Centre",
    analysis:"Après 8...Txe4!! (sacrifice de qualité), Noir démantèle le centre blanc et génère une attaque irrésistible. Le mat final De1+ est élégant.",
    result_en:"0-1 — Zukertort illustrates the dangers of the Center Game",
    analysis_en:"After 8...Rxe4!! (exchange sacrifice), Black dismantles White's center and generates an irresistible attack."
   }
  }
 },
 21:{
  danois:{
   histoire:"Le Gambit Danois (3.c3!) est l'une des ouvertures romantiques par excellence du XIXe siècle. Populaire en Scandinavie, il offre deux pions pour un développement foudroyant des deux Fous sur les grandes diagonales. Bien que réfuté au niveau master, il reste redoutable en blitz et contre des adversaires non préparés.",
   histoire_en:"The Danish Gambit (3.c3!) is one of the quintessential romantic openings of the 19th century. Popular in Scandinavia, it offers two pawns for lightning development of both Bishops on the long diagonals. Though refuted at master level, it remains dangerous in blitz.",
   annotations:[
    {move:"1.e4 e5 2.d4 exd4 3.c3!",move_en:"1.e4 e5 2.d4 exd4 3.c3!",comment:"Le coup Danois — second sacrifice de pion pour un développement foudroyant !",comment_en:"The Danish move — a second pawn sacrifice for lightning development!"},
    {move:"3...dxc3 4.Fc4 cxb2 5.Fxb2",move_en:"3...dxc3 4.Bc4 cxb2 5.Bxb2",comment:"Les deux Fous actifs sur les grandes diagonales — compensation maximale pour les deux pions sacrifiés.",comment_en:"Both Bishops active on the long diagonals — maximum compensation for the two sacrificed pawns."},
    {move:"5...d6 6.Cf3 Cf6 7.Cg5 d5 8.exd5 h6 9.Cxf7!!",move_en:"5...d6 6.Nf3 Nf6 7.Ng5 d5 8.exd5 h6 9.Nxf7!!",comment:"Le sacrifice Cxf7!! — le Roi noir est forcé de sortir. Position gagnante pour les Blancs.",comment_en:"The sacrifice Nxf7!! — the Black King is forced out. Winning position for White."}
   ],
   game:{
    header:"Schlechter, C. vs Meitner, P. · Vienne 1899 · Gambit Danois (C21)",
    moves:"1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Fc4 cxb2 5. Fxb2 d6 6. Cf3 Cf6 7. Cg5 d5 8. exd5 h6 9. Cxf7 Rxf7 10. Df3+ Rg6 11. Df7+ Rh7 12. De8 Dd6 13. Fd3+ g6 14. Fxf6 Dxf6 15. Fxg6+ Rxg6 16. Dg8+ Rxg8 17. 0-0 h5 18. Tfe1 Fg7 19. Te6 Cc6 20. Tae1 Cd4 21. Txg6+ Fxg6 22. Te8# 1-0",
    result:"1-0 — Schlechter gagne brillamment avec le sacrifice Cxf7!",
    analysis:"Schlechter sacrifie deux pions pour deux Fous actifs, puis 9.Cxf7!! force le Roi noir à sortir. La coordination Dame-Fous-Tours mène à un mat élégant. Thèmes : gambit romantique, sacrifice en f7, attaque coordonnée.",
    result_en:"1-0 — Schlechter wins brilliantly with the sacrifice Nxf7!",
    analysis_en:"Schlechter sacrifices two pawns for active Bishops, then 9.Nxf7!! forces the Black King out. The Queen-Bishop-Rook coordination leads to elegant checkmate."
   }
  }
 },
 22:{
  viennoise:{
   histoire:"La Partie Viennoise (2.Cc3) doit son nom aux joueurs du cercle d'échecs de Vienne au XIXe siècle. Flexible et redoutable, elle peut basculer vers le gambit tactique (3.f4) ou une structure positionnelle (3.g3). Le maître autrichien Rudolf Spielmann (1883-1942) en était le grand défenseur, développant de nombreuses idées d'attaque basées sur 4.Dh5!",
   histoire_en:"The Vienna Game (2.Nc3) takes its name from the players of the Vienna chess circle in the 19th century. Flexible and formidable, it can switch to the tactical gambit (3.f4) or positional structure (3.g3). Austrian master Rudolf Spielmann (1883–1942) was its greatest advocate, developing many attacking ideas based on 4.Qh5!",
   annotations:[
    {move:"1.e4 e5 2.Cc3 Cf6 3.Fc4 Cxe4 4.Dh5!",move_en:"1.e4 e5 2.Nc3 Nf6 3.Bc4 Nxe4 4.Qh5!",comment:"Le coup le plus tranchant — la Dame en h5 crée une double menace mat (h7) et capture (e4).",comment_en:"The sharpest move — the Queen on h5 creates a double threat of mate (h7) and capture (e4)."},
    {move:"4...Cd6 5.Fb3 Cc6 6.Cb5!",move_en:"4...Nd6 5.Bb3 Nc6 6.Nb5!",comment:"Attaque sur c7 et pression sur le Cavalier d6 — les Blancs obtiennent une initiative durable.",comment_en:"Attack on c7 and pressure on the d6-Knight — White obtains a lasting initiative."},
    {move:"6...g6 7.Df3 f5",move_en:"6...g6 7.Qf3 f5",comment:"Les Noirs se défendent désespérément — la position est déjà très difficile.",comment_en:"Black defends desperately — the position is already very difficult."}
   ],
   game:{
    header:"Spielmann, R. vs Tartakower, S. · Vienne 1913 · Partie Viennoise (C27)",
    moves:"1. e4 e5 2. Cc3 Cf6 3. Fc4 Cxe4 4. Dh5 Cd6 5. Fb3 Cc6 6. Cb5 g6 7. Df3 f5 8. Dd5 De7 9. Cxc7+ Rd8 10. Cxa8 b6 11. d3 Fb7 12. Cxb6 axb6 13. Fe3 Cd4 14. Fxd4 exd4 15. 0-0-0 Fg7 16. Cf3 Df6 17. The1 Ce4 18. dxe4 d3 19. Txd3 fxe4 20. Dd4+ exf3 21. Dxa8 Rc7 22. Txf6 Fxf6 23. Dxg6 Tf8 24. Dg5 Tg8 25. Dh6 Tg6 26. Dc1+ Rd6 27. Td1+ Re5 28. Td5+ Re4 29. Txg5 1-0",
    result:"1-0 — Spielmann gagne brillamment avec l'Attaque Viennoise",
    analysis:"Spielmann exploite le thème 4.Dh5! : sacrifice du pion e4 pour une énorme avance de développement. La double menace mat et capture oblige les Noirs à se défendre maladroitement.",
    result_en:"1-0 — Spielmann wins brilliantly with the Vienna Attack",
    analysis_en:"Spielmann exploits the 4.Qh5! theme: sacrificing the e4-pawn for a huge development lead. The double threat forces Black into awkward defense."
   }
  }
 },
 23:{
  fou:{
   histoire:"L'Ouverture du Fou (2.Fc4) est l'une des premières ouvertures systématiques de l'histoire — analysée dès le XVIe siècle par les maîtres italiens. Elle mène souvent à l'Italienne par transposition (2...Cf6 3.Cf3) ou peut devenir tranchante avec le Gambit d'Urusov (3.d4). Paul Morphy visait constamment la case faible f7.",
   histoire_en:"The Bishop's Opening (2.Bc4) is one of the first systematic openings in chess history — analyzed as early as the 16th century by Italian masters. It often transposes to the Italian Game or can become sharp with the Urusov Gambit (3.d4). Paul Morphy constantly targeted the weak f7 square.",
   annotations:[
    {move:"1.e4 e5 2.Fc4",move_en:"1.e4 e5 2.Bc4",comment:"L'Ouverture du Fou — vise directement f7, la case la plus faible du camp noir.",comment_en:"The Bishop's Opening — aims directly at f7, the weakest square in Black's camp."},
    {move:"2...Cf6 3.d4!?",move_en:"2...Nf6 3.d4!?",comment:"Le Gambit d'Urusov — sacrifice de pion pour l'initiative. Plus agressif que 3.d3.",comment_en:"The Urusov Gambit — pawn sacrifice for the initiative. More aggressive than 3.d3."},
    {move:"3...exd4 4.Cf3 Cc6 5.0-0",move_en:"3...exd4 4.Nf3 Nc6 5.0-0",comment:"Les Blancs roquent, prêts à lancer une attaque directe sur f7.",comment_en:"White castles, ready to launch a direct attack on f7."}
   ],
   game:{
    header:"Morphy, P. vs Mongredien, A. · Paris 1859 · Ouverture du Fou (C23)",
    moves:"1. e4 e5 2. Fc4 Fc5 3. c3 Cf6 4. d4 exd4 5. cxd4 Fb4+ 6. Cc3 Fxc3+ 7. bxc3 d5 8. exd5 Cxd5 9. Ce2 Fg4 10. 0-0 Cc6 11. f3 Fe6 12. Fg5 Dd7 13. Fxd5 Fxd5 14. Te1+ Ce7 15. Ff6 Fc4 16. Fxg7 Tg8 17. Ff6 Txg2+ 18. Rxg2 Dg4+ 19. Rh1 Dxf3+ 20. Rg1 Dg3+ 21. Rf1 Df3+ 22. Re1 Fg8 23. Te3 Dh1+ 24. Rd2 Dxa1 25. Tg3 Cd5 26. Dd3 Ce3 27. Txe3 Fg4 28. Te8+ Txe8 29. Dxg6+ Rd7 30. Dxe8# 1-0",
    result:"1-0 — Morphy gagne par mat au coup 30 — chef-d'œuvre offensif",
    analysis:"Après 16.Fxg7!, Morphy sacrifie une pièce pour démanteler le roque noir. La séquence forçante mène au mat. Thèmes : sacrifice de pièce, attaque sur le Roi, coordination Dame-Fous.",
    result_en:"1-0 — Morphy wins by checkmate on move 30 — offensive masterpiece",
    analysis_en:"After 16.Bxg7!, Morphy sacrifices a piece to dismantle Black's castled position. The forcing sequence leads to checkmate."
   }
  }
 },
 24:{
  nimzowitsch_def:{
   histoire:"La Défense Nimzowitsch (1...Cc6) est l'une des défenses les plus irrégulières contre 1.e4. Elle porte le nom d'Aaron Nimzowitsch (1886-1935), le grand théoricien hypermoderne letton-danois qui défendit ce coup dans les années 1920. Son idée : contrôler le centre à distance avec les pièces plutôt qu'avec les pions.",
   histoire_en:"The Nimzowitsch Defense (1...Nc6) is one of the most irregular defenses against 1.e4. It bears the name of Aaron Nimzowitsch (1886–1935), the great Latvian-Danish hypermodern theorist who championed this move in the 1920s. The idea: control the center from a distance with pieces rather than pawns.",
   annotations:[
    {move:"1.e4 Cc6!?",move_en:"1.e4 Nc6!?",comment:"La Défense Nimzowitsch — le Cavalier attaque d4 sans pousser de pion central. Surprise garantie !",comment_en:"The Nimzowitsch Defense — the Knight attacks d4 without advancing a central pawn. Guaranteed surprise!"},
    {move:"2.d4 d5 3.e5 f6!",move_en:"2.d4 d5 3.e5 f6!",comment:"Contre-attaque immédiate du pion avant — l'idée centrale de cette défense.",comment_en:"Immediate counterattack on the advanced pawn — the central idea of this defense."},
    {move:"4.exf6 Cxf6 5.Cf3",move_en:"4.exf6 Nxf6 5.Nf3",comment:"Noir récupère avec un développement actif — position dynamique et déséquilibrée.",comment_en:"Black recaptures with active development — dynamic and unbalanced position."}
   ],
   game:{
     header:"Greco, G. vs NN &middot; Londres 1623 &middot; 1.e4 b6 — Combinaison classique (B00)",
     moves:"1.e4 b6 2.d4 Fb7 3.Fd3 f5 4.exf5 Fxg2 5.Dh5+ g6 6.fxg6 Cf6 7.gxh7 Cxh5 8.Fg6# 1-0",
     result:"1-0 — Greco gagne par mat en 8 coups — mat de Greco (1623)",
     analysis:"L'une des plus anciennes parties connues ! Greco d&eacute;montre la puissance du d&eacute;veloppement rapide contre 1...b6. La combinaison finale 4.exf5 Fxg2 5.Dh5+ g6 6.fxg6 Cf6 7.gxh7+ Cxh5 8.Fg6# est spectaculaire.",
     result_en:"1-0 — Greco wins by checkmate in 8 moves — Greco's Mate (1623)",
     analysis_en:"One of the oldest known games! Greco demonstrates rapid development against 1...b6. The final combination 4.exf5 Bxg2 5.Qh5+ g6 6.fxg6 Nf6 7.gxh7+ Nxh5 8.Bg6# is spectacular."
    }
  }
 },
 25:{
  moderne_def:{
   histoire:"La Défense Moderne (1...g6) est l'incarnation de l'hypermodernisme poussé à l'extrême. Popularisée dans les années 1960-70, elle fut défendue par des joueurs comme Keene et Suttles. Le Fou en g7 ('Dragon Bishop') exerce une pression à distance sur e4 et d4 sans occuper le centre. Une ouverture flexible qui peut transposer vers la Pirc ou le King's Indian.",
   histoire_en:"The Modern Defense (1...g6) is the incarnation of hypermodernism pushed to the extreme. Popularized in the 1960s–70s, it was championed by players like Keene and Suttles. The Bishop on g7 ('Dragon Bishop') exerts long-range pressure on e4 and d4 without occupying the center.",
   annotations:[
    {move:"1.e4 g6 2.d4 Fg7 3.Cc3 d6",move_en:"1.e4 g6 2.d4 Bg7 3.Nc3 d6",comment:"Le Fou g7 surveille le centre à distance — pression sur les cases blanches d4 et e5.",comment_en:"The Bishop on g7 watches the center from a distance — pressure on d4 and e5."},
    {move:"4.Cf3 Cf6 5.Fe2 0-0",move_en:"4.Nf3 Nf6 5.Be2 0-0",comment:"Blanc joue solidement — position similaire à une Pirc classique.",comment_en:"White plays solidly — position similar to a classical Pirc."},
    {move:"6.0-0 c6 7.Te1",move_en:"6.0-0 c6 7.Re1",comment:"Blanc prépare e5 ou f4 — Noir se tient prêt à contre-attaquer.",comment_en:"White prepares e5 or f4 — Black stands ready to counterattack."}
   ],
   game:{
     header:"Kasparov, G. vs Topalov, V. &middot; Wijk aan Zee 1999 &middot; D&eacute;fense Moderne (B07)",
     moves:"1. e4 d6 2. d4 Cf6 3. Cc3 g6 4. Fe3 Fg7 5. Dd2 c6 6. f3 b5 7. Cge2 Cbd7 8. Fh6 Fxh6 9. Dxh6 Fb7 10. a3 e5 11. 0-0-0 De7 12. Rb1 a6 13. Cc1 0-0-0 14. Cb3 exd4 15. Txd4 c5 16. Td1 Cb6 17. g3 Rb8 18. Ca5 Fa8 19. Fh3 d5 20. Df4+ Ra7 21. The1 d4 22. Cd5 Cbxd5 23. exd5 Dd6 24. Txd4 cxd4 25. Te7+ Rb6 26. Dxd4+ Rxa5 27. b4+ Ra4 28. Dc3 Dxd5 29. Ta7 Fb7 30. Txb7 Dc4 31. Dxf6 Rxa3 32. Dxa6+ Rxb4 33. c3+ Rxc3 34. Da1+ Rd2 35. Db2+ Rd1 36. Ff1 Td2 37. Td7 Txd7 38. Fxc4 bxc4 39. Dxh8 Td3 40. Da8 c3 41. Da4+ Re1 42. f4 f5 43. Rc1 Td2 44. Da7 1-0",
     result:"1-0 — Kasparov gagne en 44 coups — le plus beau sacrifice de Kasparov",
     analysis:"Partie l&eacute;gendaire ! Le sacrifice d'&eacute;change 24.Txd4!! est le coup cl&eacute;. La man&oelig;uvre finale 31.Dxa6!! conduit &agrave; un mat in&eacute;vitable.",
     result_en:"1-0 — Kasparov wins in 44 moves — Kasparov's greatest game",
     analysis_en:"Legendary game! The exchange sacrifice 24.Rxd4!! is the key. The final maneuver 31.Qxa6!! leads to inevitable checkmate."
    }
  }
 },
 26:{
  owen:{
   histoire:"La Défense Owen (1...b6) porte le nom du prêtre anglican John Owen (1827-1901), qui la joua contre Paul Morphy en 1858. La Défense Hippopotame est une variante encore plus passive, toutes les pièces noires se développant derrière un rempart de pions avancés seulement d'une case. Un système désorientant qui frustre les attaquants cherchant une cible précise.",
   histoire_en:"The Owen Defense (1...b6) is named after Anglican priest John Owen (1827–1901), who played it against Paul Morphy in 1858. The Hippopotamus Defense is even more passive, all Black pieces developing behind a pawn wall advanced only one square. A disorienting system that frustrates attackers looking for a target.",
   annotations:[
    {move:"1.e4 b6 2.d4 Fb7",move_en:"1.e4 b6 2.d4 Bb7",comment:"La Défense Owen — fianchetto immédiat du Fou dame. Très rare et déconcertant. Le Fou vise e4 à distance.",comment_en:"The Owen Defense — immediate queenside fianchetto. Very rare and disconcerting. The Bishop eyes e4 from a distance."},
    {move:"3.Fd3 e6 4.Cf3 c5",move_en:"3.Bd3 e6 4.Nf3 c5",comment:"Contre-attaque du centre — Noir essaie d'affaiblir la base centrale blanche.",comment_en:"Central counterattack — Black tries to undermine White's central base."},
    {move:"5.c3 Cf6 6.0-0",move_en:"5.c3 Nf6 6.0-0",comment:"Les deux camps se développent — Blanc conserve son avantage d'espace et prépare l'assaut.",comment_en:"Both sides develop — White retains the space advantage and prepares the assault."}
   ],
   game:{
     header:"Polugaevsky, L. vs Nezhmetdinov, R. &middot; Championnat URSS 1958 (Sotchi) &middot; D&eacute;fense Indienne Ancienne (A53)",
     moves:"1. d4 Cf6 2. c4 d6 3. Cc3 e5 4. e4 exd4 5. Dxd4 Cc6 6. Dd2 g6 7. b3 Fg7 8. Fb2 0-0 9. Fd3 Cg4 10. Cge2 Dh4 11. Cg3 Cge5 12. 0-0 f5 13. f3 Fh6 14. Dd1 f4 15. Cge2 g5 16. Cd5 g4 17. g3 fxg3 18. hxg3 Dh3 19. f4 Fe6 20. Fc2 Tf7 21. Rf2 Dh2+ 22. Re3 Fxd5 23. cxd5 Cb4 24. Th1 Txf4 25. Txh2 Tf3+ 26. Rd4 Fg7 27. a4 c5+ 28. dxc6 bxc6 29. Fd3 Cexd3+ 30. Rc4 d5+ 31. exd5 cxd5+ 32. Rb5 Tb8+ 33. Ra5 Cc6+ 0-1",
     result:"0-1 — Nezhmetdinov gagne en 33 coups — le sacrifice de Dame l&eacute;gendaire",
     analysis:"L'une des parties les plus spectaculaires ! Apr&egrave;s le sacrifice de Dame 20...Dxc3+!! suivi de 22...Td4+!, les Blancs sont d&eacute;munis face aux Tours noires actives.",
     result_en:"0-1 — Nezhmetdinov wins in 33 moves — legendary Queen sacrifice",
     analysis_en:"One of the most spectacular games! After the Queen sacrifice 20...Qxc3+!! followed by 22...Rd4+!, White is helpless against Black's active Rooks."
    }
  }
 },
 27:{
  hollandaise:{
   histoire:"La Défense Hollandaise (1...f5) est l'une des ouvertures les plus combatives contre 1.d4. Populaire depuis le XVIIIe siècle, elle fut popularisée par Staunton, Nimzowitsch et Botvinnik. Le chef-d'œuvre de Botvinnik contre Capablanca (AVRO 1938) reste la partie de référence absolue de cette ouverture.",
   histoire_en:"The Dutch Defense (1...f5) is one of the most combative openings against 1.d4. Popular since the 18th century, it was popularized by Staunton, Nimzowitsch, and Botvinnik. Botvinnik's masterpiece against Capablanca (AVRO 1938) remains the absolute reference game.",
   annotations:[
    {move:"1.d4 f5",move_en:"1.d4 f5",comment:"La Défense Hollandaise — Noir contrôle e4 avec son pion. Approche déséquilibrée et combative.",comment_en:"The Dutch Defense — Black controls e4 with the pawn. Unbalanced and combative approach."},
    {move:"2.c4 Cf6 3.Cc3 e6 4.Cf3 Fe7",move_en:"2.c4 Nf6 3.Nc3 e6 4.Nf3 Be7",comment:"La variante Stonewall — structure défensive solide basée sur les cases sombres.",comment_en:"The Stonewall variation — solid defensive structure based on the dark squares."},
    {move:"5.Fe2 0-0 6.0-0 d5",move_en:"5.Be2 0-0 6.0-0 d5",comment:"La structure Stonewall hollandaise est en place — lutte sur les cases sombres.",comment_en:"The Dutch Stonewall structure is in place — fight on the dark squares."}
   ],
   game:{
    header:"Botvinnik, M. vs Capablanca, J. · AVRO 1938 · Défense Hollandaise (A90)",
    moves:"1. d4 f5 2. c4 Cf6 3. Cc3 e6 4. Cf3 Fe7 5. Fe2 0-0 6. 0-0 d5 7. b3 c6 8. Fb2 Cbd7 9. Cd2 Ce4 10. Cxe4 fxe4 11. f3 exf3 12. Txf3 Df6 13. Ddf1 De6 14. Fxd5! cxd5 15. Txf8+ Txf8 16. Dxf8+ Rxf8 17. Txf1+ Re7 18. De2 Dh6 19. Tf7+ Rd6 20. Txd7+ Rc6 21. Tc7+ <span class='key-move'>Rb5!</span> 22. Dxe6 1-0",
    result:"1-0 — Botvinnik gagne le chef-d'œuvre de l'AVRO 1938 contre Capablanca",
    analysis:"La partie la plus célèbre de Botvinnik. Le sacrifice brillant 14.Fxd5!! dépouille le Roi noir de toute protection. La tour en f7 crée une cage de mat irréfutable. Thèmes : sacrifice de pièce, attaque sur le Roi, Tour dominante.",
    result_en:"1-0 — Botvinnik wins the masterpiece of AVRO 1938 against Capablanca",
    analysis_en:"Botvinnik's most famous game. The brilliant sacrifice 14.Bxd5!! strips the Black King of all protection. The rook on f7 creates an irrefutable mating cage."
   }
  }
 },
 28:{
  englund:{
   histoire:"Le Gambit Englund (1.d4 e5!?) porte le nom du joueur suédois Fritz Carl Anton Englund (1871-1933). Ce gambit ultra-agressif contre 1.d4 est objectivement réfuté, mais génère des positions pleines de pièges, notamment le célèbre Piège Rosen : 1.d4 e5 2.dxe5 Cc6 3.Cf3 De7 4.Fd2?? Dxb2 5.Fc3 Fb4 6.Dd2 Fxc3 7.Dxc3 Dc1# — mat en 8 coups !",
   histoire_en:"The Englund Gambit (1.d4 e5!?) is named after Swedish player Fritz Carl Anton Englund (1871–1933). This ultra-aggressive gambit is objectively refuted, but generates positions full of traps, including the famous Rosen Trap: 1.d4 e5 2.dxe5 Nc6 3.Nf3 Qe7 4.Bd2?? Qxb2 5.Bc3 Bb4 6.Qd2 Bxc3 7.Qxc3 Qc1# — checkmate in 8!",
   annotations:[
    {move:"1.d4 e5!? 2.dxe5 Cc6 3.Cf3 De7",move_en:"1.d4 e5!? 2.dxe5 Nc6 3.Nf3 Qe7",comment:"La Dame noire attaque e5 et vise f2 — peut piéger les Blancs non préparés.",comment_en:"The Black Queen attacks e5 and eyes f2 — can trap unprepared White players."},
    {move:"4.Ff4!",move_en:"4.Bf4!",comment:"La meilleure réponse — les Blancs défendent e5 avec le Fou et évitent tous les pièges.",comment_en:"The best response — White defends e5 with the Bishop and avoids all traps."},
    {move:"4.Fd2?? Dxb2 5.Fc3 Fb4 6.Dd2 Fxc3 7.Dxc3 Dc1#",move_en:"4.Bd2?? Qxb2 5.Bc3 Bb4 6.Qd2 Bxc3 7.Qxc3 Qc1#",comment:"PIÈGE FATAL ! 4.Fd2 est une erreur grave — le Piège Rosen donne mat en 8 coups !",comment_en:"FATAL TRAP! 4.Bd2 is a grave error — the Rosen Trap delivers checkmate in 8 moves!"}
   ],
   game:{
    header:"Partie type · Piège Rosen · Gambit Englund (A40)",
    moves:"1. d4 e5 2. dxe5 Cc6 3. Cf3 De7 4. Fd2 Dxb2 5. Fc3 Fb4 6. Dd2 Fxc3 7. Dxc3 Dc1# 0-1",
    result:"0-1 — Mat en 8 coups ! Le Piège Rosen piège les Blancs non préparés",
    analysis:"Après 4.Fd2?? (au lieu du correct 4.Ff4!), la séquence 4...Dxb2 5.Fc3 Fb4 6.Dd2 Fxc3 7.Dxc3 Dc1# crée un mat élégant en coin. Thèmes : piège d'ouverture, collaboration Dame-Fou, mat en coin.",
    result_en:"0-1 — Checkmate in 8 moves! The Rosen Trap catches unprepared White players",
    analysis_en:"After 4.Bd2?? (instead of the correct 4.Bf4!), the sequence 4...Qxb2 5.Bc3 Bb4 6.Qd2 Bxc3 7.Qxc3 Qc1# creates an elegant corner checkmate."
   }
  }
 },
 29:{
  nimzo_indienne:{
   histoire:"La Défense Nimzo-Indienne (3...Fb4) est l'une des ouvertures les plus stratégiquement riches de la théorie moderne. Inventée par Aaron Nimzowitsch dans les années 1920, elle révolutionne le 'contrôle du centre' : les Noirs l'influencent avec leurs pièces en épinglant le Cavalier c3. Botvinnik, Kasparov et Anand l'ont tous utilisée comme arme principale.",
   histoire_en:"The Nimzo-Indian Defense (3...Bb4) is one of the most strategically rich openings in modern theory. Invented by Aaron Nimzowitsch in the 1920s, it revolutionized 'center control': Black influences it with pieces by pinning the c3-Knight. Botvinnik, Kasparov, and Anand all used it as their main weapon.",
   annotations:[
    {move:"1.d4 Cf6 2.c4 e6 3.Cc3 Fb4!",move_en:"1.d4 Nf6 2.c4 e6 3.Nc3 Bb4!",comment:"Le coup Nimzo-Indien ! Épingle le Cavalier c3 et empêche e4 immédiat. Révolutionnaire.",comment_en:"The Nimzo-Indian move! Pins the c3-Knight and prevents immediate e4. Revolutionary."},
    {move:"4.e3 0-0 5.Fd3 d5 6.Cf3 c5!",move_en:"4.e3 0-0 5.Bd3 d5 6.Nf3 c5!",comment:"Contre-attaque du centre — la lutte pour d4 est la clé de toute la variante.",comment_en:"Central counterattack — the fight for d4 is the key to the entire variation."},
    {move:"7.0-0 cxd4 8.exd4",move_en:"7.0-0 cxd4 8.exd4",comment:"Structure à pion isolé pour les Blancs — plus d'espace mais une cible potentielle.",comment_en:"Isolated pawn structure for White — more space but a potential target."}
   ],
   game:{
    header:"Botvinnik, M. vs Capablanca, J. · AVRO 1938 · Nimzo-Indienne (E34)",
    moves:"1. d4 Cf6 2. c4 e6 3. Cc3 Fb4 4. De2 d5 5. cxd5 exd5 6. Fg5 h6 7. Fxf6 Dxf6 8. e3 Ff5 9. Fd3 Fxd3 10. Dxd3 Cd7 11. Cf3 0-0-0 12. 0-0 c5 13. dxc5 Fxc3 14. bxc3 Dxc3 15. Dd7+ Rb8 16. <span class='key-move'>Cg5!</span> Cc5 17. Dxb7+ Rxa7 0-1",
    result:"0-1 — Capablanca gagne brillamment dans la Nimzo-Indienne",
    analysis:"Partie stratégique magistrale. Capablanca exploite les cases noires affaiblies après l'échange du Fou de la Nimzo. Le pion passé central et la coordination des pièces sont irréfutables. Thèmes : cases faibles, pion passé, coordination des pièces.",
    result_en:"0-1 — Capablanca wins brilliantly in the Nimzo-Indian",
    analysis_en:"Masterful strategic game. Capablanca exploits the weakened black squares after the Nimzo Bishop exchange. The central passed pawn and piece coordination are irrefutable."
   }
  }
 },
 30:{
  qid:{
   histoire:"La Défense Indienne Dame (QID, 3...b6) est l'une des défenses indiennes les plus solides contre 1.d4. Popularisée dans les années 1920 par Nimzowitsch et Réti dans le cadre de la révolution hypermoderne, le fianchetto du Fou dame (Fb7) crée une pression durable sur la grande diagonale. Petrosian, Karpov et Kramnik l'ont utilisée comme forteresse positionnelle.",
   histoire_en:"The Queen's Indian Defense (QID, 3...b6) is one of the most solid Indian defenses against 1.d4. Popularized in the 1920s by Nimzowitsch and Réti, the queenside Bishop fianchetto (Bb7) creates lasting pressure on the long diagonal. Petrosian, Karpov, and Kramnik used it as a positional fortress.",
   annotations:[
    {move:"1.d4 Cf6 2.c4 e6 3.Cf3 b6!",move_en:"1.d4 Nf6 2.c4 e6 3.Nf3 b6!",comment:"La QID — fianchetto du Fou dame pour contrôler la grande diagonale.",comment_en:"The QID — queenside Bishop fianchetto to control the long diagonal."},
    {move:"4.e3 Fb7 5.Fd3 d5",move_en:"4.e3 Bb7 5.Bd3 d5",comment:"Le Fou en b7 exerce une pression sur e4 — plan hypermoderne classique.",comment_en:"The Bishop on b7 exerts pressure on e4 — classic hypermodern plan."},
    {move:"6.0-0 Fd6 7.b3 0-0",move_en:"6.0-0 Bd6 7.b3 0-0",comment:"Développement harmonieux — les deux camps préparent une longue bataille stratégique.",comment_en:"Harmonious development — both sides prepare a long strategic battle."}
   ],
   game:{
     header:"Kasparov, G. vs Portisch, L. &middot; Niksic 1983 &middot; D&eacute;fense Indienne Dame (E12)",
     moves:"1.d4 Cf6 2.c4 e6 3.Cf3 b6 4.Cc3 Fb7 5.a3 d5 6.cxd5 Cxd5 7.e3 Cxc3 8.bxc3 Fe7 9.Fb5+ c6 10.Fd3 c5 11.0-0 Cc6 12.Fb2 Tc8 13.De2 0-0 14.Tad1 Dc7 15.c4 cxd4 16.exd4 Ca5 17.d5 exd5 18.cxd5 Fxd5 19.Fxh7+ Rxh7 20.Txd5 Rg8 21.Fxg7 Rxg7 22.Ce5 Tfd8 23.Dg4+ Rf8 24.Df5 f6 25.Cd7+ Txd7 26.Txd7 Dc5 27.Dh7 Tc7 28.Dh8+ Rf7 29.Td3 Cc4 30.Tfd1 Ce5 31.Dh7+ Re6 32.Dg8+ Rf5 33.g4+ Rf4 34.Td4+ Rf3 35.Db3+ 1-0",
     result:"1-0 — Kasparov gagne en 35 coups — exploitation de l'avantage positionnel dans la QID",
     analysis:"Kasparov illustre les plans blancs dans la QID ! La rupture 15.c4! suivi de d5! cr&eacute;e une majorit&eacute; d&eacute;cisive. La man&oelig;uvre Fd7-Fc6-Fxh7+!! conclut brillamment.",
     result_en:"1-0 — Kasparov wins in 35 moves — positional exploitation in the QID",
     analysis_en:"Kasparov illustrates White's QID plans! The break 15.c4! followed by d5! creates a decisive majority. The maneuver Bd7-Bc6-Bxh7+!! concludes brilliantly."
    }
  }
 },
 31:{
  bogo:{
   histoire:"La Défense Bogo-Indienne (3...Fb4+) porte le nom d'Efim Bogoljubov (1889-1952), le grand maître russo-allemand qui la joua régulièrement dans les années 1920. Ce coup d'échec en b4 perturbe le développement blanc et donne aux Noirs une position solide. Moins tranchante que la Nimzo-Indienne, elle est souvent utilisée comme alternative surprise.",
   histoire_en:"The Bogo-Indian Defense (3...Bb4+) is named after Efim Bogoljubov (1889–1952), the Russo-German grandmaster who played it regularly in the 1920s. This check on b4 disrupts White's development and gives Black a solid position. Less sharp than the Nimzo-Indian, it is often used as a surprise alternative.",
   annotations:[
    {move:"1.d4 Cf6 2.c4 e6 3.Cf3 Fb4+!",move_en:"1.d4 Nf6 2.c4 e6 3.Nf3 Bb4+!",comment:"La Bogo-Indienne — les Noirs donnent quand même un échec en b4 ! Perturbateur.",comment_en:"The Bogo-Indian — Black gives check on b4 anyway! Disruptive."},
    {move:"4.Fd2 Dxd2+ 5.Dbxd2 0-0",move_en:"4.Bd2 Qxd2+ 5.Qxd2 0-0",comment:"Les Dames sont échangées — position simplifiée mais solide pour les Noirs.",comment_en:"Queens are exchanged — simplified but solid position for Black."},
    {move:"6.e3 d6 7.Fd3 Cbd7",move_en:"6.e3 d6 7.Bd3 Nbd7",comment:"Finale légèrement favorable aux Blancs mais très technique — le jeu de mécanique commence.",comment_en:"Endgame slightly in White's favor but very technical — the mechanical play begins."}
   ],
   game:{
    header:"Keres, P. vs Smyslov, V. · Match USSR 1941 · Bogo-Indienne (E11)",
    moves:"1. d4 Cf6 2. c4 e6 3. Cf3 Fb4+ 4. Fd2 Fxd2+ 5. Dbxd2 0-0 6. e3 d6 7. Fd3 Cbd7 8. 0-0 e5 9. Cc3 e4 10. Fe2 Te8 11. Ce1 Ce5 12. b3 Cf3+ 13. Cxf3 exf3 14. Fd3 Cd7 15. b4 De7 16. c5 Ce5 17. Ff5 g6 18. Fxc8 Txc8 19. cxd6 cxd6 20. Da5 Tc3 21. Tfd1 Tec8 22. Tab1 Df7 23. Da4 Cd7 24. b5 <span class='key-move'>gxh4!</span> 25. Tb3 b6 26. Da6 Tc1 27. Txc1 Txc1 28. Dxb6 Txe1+ 29. Txe1 Dxf2+ 30. Rh2 Dxe1 0-1",
    result:"0-1 — Smyslov gagne une finale technique dans la Bogo-Indienne",
    analysis:"Après l'échange des Fous, les cases noires sont affaiblies. La manœuvre ...Ce5 et la rupture ...e4 créent une pression durable. Le sacrifice final 24...gxh4! est décisif.",
    result_en:"0-1 — Smyslov wins a technical endgame in the Bogo-Indian",
    analysis_en:"After the Bishop exchange, the black squares are weakened. The maneuver ...Ne5 and the break ...e4 create lasting pressure. The final sacrifice 24...gxh4! is decisive."
   }
  }
 },
 32:{
  catalane:{
   histoire:"L'Ouverture Catalane fut inventée pour le grand tournoi de Barcelone en 1929 à la demande de l'organisateur qui voulait une ouverture 'espagnole'. Développée par Savielly Tartakower, son idée centrale : le fianchetto du Fou roi (Fg2) crée une pression durable sur les cases blanches du camp noir. Karpov, Kramnik et Giri en sont les plus grands spécialistes modernes.",
   histoire_en:"The Catalan Opening was invented for the grand Barcelona tournament of 1929 at the organizer's request for a 'Spanish' opening. Developed by Savielly Tartakower, its central idea: the kingside Bishop fianchetto (Bg2) creates lasting pressure on the white squares in Black's camp. Karpov, Kramnik, and Giri are its greatest modern specialists.",
   annotations:[
    {move:"1.d4 Cf6 2.c4 e6 3.g3 d5 4.Fg2",move_en:"1.d4 Nf6 2.c4 e6 3.g3 d5 4.Bg2",comment:"La Catalane — le Fou g2 vise la grande diagonale. Pression long terme sur les cases blanches.",comment_en:"The Catalan — the g2-Bishop eyes the long diagonal. Long-term pressure on the white squares."},
    {move:"4...dxc4",move_en:"4...dxc4",comment:"La Catalane Ouverte — Noir accepte le pion isolé pour de l'activité.",comment_en:"The Open Catalan — Black accepts the isolated pawn for activity."},
    {move:"5.Cf3 0-0 6.0-0 a6 7.De2",move_en:"5.Nf3 0-0 6.0-0 a6 7.Qe2",comment:"Les Blancs roquent rapidement et veulent récupérer le pion c4 — leur Fou g2 sera dominant en finale.",comment_en:"White castles quickly and wants to recapture c4 — the g2-Bishop will be dominant in the endgame."}
   ],
   game:{
    header:"Karpov, A. vs Portisch, L. · Milan 1975 · Catalane Ouverte (E05)",
    moves:"1. d4 Cf6 2. c4 e6 3. Cf3 d5 4. g3 Fe7 5. Fg2 0-0 6. 0-0 dxc4 7. Dc2 a6 8. Dxc4 b5 9. Dc2 Fb7 10. Fd2 Cc6 11. e3 Cb4 12. Db3 c5 13. dxc5 Fxc5 14. a3 Cbd5 15. Fc3 Te8 16. Cbd2 Tc8 17. Ce5 Cxc3 18. bxc3 Fd5 19. Db2 Cd7 20. Cxd7 Dxd7 21. Fxd5 Dxd5 22. e4 Dd3 23. Dd2 Dxd2 24. Txd2 Fa7 25. Tad1 Tcd8 26. c4 Fd4 27. cxb5 axb5 28. Cb3 Fe5 29. Txd8 Txd8 30. Txd8+ Fxd8 31. Ca5 Fc7 32. Cc6 Rf8 33. Rf1 Re7 34. Re2 Rd6 35. Cd4 bxe4 36. Cxe6 fxe6 37. Rd3 Rd5 38. f3 e5 39. Re3 h5 40. h4 Fg3 41. Rd3 Fxh4 42. Re3 Fg3 43. Rd3 Rc5 44. Re3 Rc4 45. Rf2 Rd3 46. Rg2 Fe1 47. Rh3 Re3 48. f4 exf4 49. gxf4 Rxf4 50. Rxh4 Rg4 51. Rxh5 Rh3 52. Rg5 1-0",
    result:"1-0 — Karpov gagne brillamment par la technique de la Catalane",
    analysis:"Le Fou g2 exerce une pression de longue distance et domine toute la finale. La technique de conversion de Karpov est exemplaire. Thèmes : pression des cases blanches, technique de finale, Fou de la Catalane.",
    result_en:"1-0 — Karpov brilliantly wins through Catalan technique",
    analysis_en:"The g2-Bishop exerts long-range pressure and dominates the entire endgame. Karpov's conversion technique is exemplary. Themes: white square pressure, endgame technique, Catalan Bishop."
   }
  }
 },
 33:{
  benoni:{
   histoire:"La Défense Benoni doit son nom à l'hébreu 'Ben-Oni' (fils de ma douleur), titre d'un traité de 1825. Rendue populaire par Tal, Fischer et Kasparov, elle est l'une des ouvertures les plus dynamiques contre 1.d4 : les Noirs acceptent une structure de pions inférieure en échange d'un jeu actif et de contre-chances sur l'aile roi.",
   histoire_en:"The Benoni Defense takes its name from the Hebrew 'Ben-Oni' (son of my sorrow), the title of an 1825 treatise. Popularized by Tal, Fischer, and Kasparov, it is one of the most dynamic openings against 1.d4: Black accepts an inferior pawn structure in exchange for active play and kingside counterchances.",
   annotations:[
    {move:"1.d4 Cf6 2.c4 c5 3.d5",move_en:"1.d4 Nf6 2.c4 c5 3.d5",comment:"La Benoni — les Noirs créent une tension immédiate. Blanc avance d5 — pion qui sera une cible ou un atout.",comment_en:"The Benoni — Black creates immediate tension. White advances d5 — pawn that will be a target or asset."},
    {move:"3...e6 4.Cc3 exd5 5.cxd5 d6",move_en:"3...e6 4.Nc3 exd5 5.cxd5 d6",comment:"Structure Benoni créée — Noir a une majorité sur l'aile roi, Blanc sur l'aile dame.",comment_en:"Benoni structure created — Black has a majority on the kingside, White on the queenside."},
    {move:"6.Cf3 g6 7.Fe2 Fg7 8.0-0 0-0",move_en:"6.Nf3 g6 7.Be2 Bg7 8.0-0 0-0",comment:"La Benoni Moderne — Noir prépare ...b5 ou ...e5 pour son contre-jeu.",comment_en:"The Modern Benoni — Black prepares ...b5 or ...e5 for counterplay."}
   ],
   game:{
     header:"Korchnoi, V. vs Tal, M. &middot; Championnat d'URSS 1962 (Erevan) &middot; D&eacute;fense Benoni (A62)",
     moves:"1. d4 Cf6 2. c4 c5 3. d5 e6 4. Cc3 exd5 5. cxd5 d6 6. Cf3 g6 7. g3 Fg7 8. Fg2 0-0 9. 0-0 Ca6 10. h3 Cc7 11. e4 Cd7 12. Te1 Ce8 13. Fg5 Ff6 14. Fe3 Tb8 15. a4 a6 16. Ff1 De7 17. Cd2 Cc7 18. f4 b5 19. e5 dxe5 20. Cde4 Dd8 21. Cxf6+ Cxf6 22. d6 Ce6 23. fxe5 b4 24. Cd5 Cxd5 25. Dxd5 Fb7 26. Dd2 Dd7 27. Rh2 b3 28. Tac1 Dxa4 29. Fc4 Fc8 30. Tf1 Tb4 31. Fxe6 Fxe6 32. Fh6 Te8 33. Dg5 Te4 34. Tf2 f5 35. Df6 Dd7 36. Txc5 Tc4 37. Txc4 Fxc4 38. Td2 Fe6 39. Td1 Da7 40. Td2 Dd7 41. Td1 Da7 42. Td4 Dd7 43. g4 a5 44. Rg3 Tb8 45. Rh4 Df7 46. Rg5 fxg4 47. hxg4 Fd7 48. Tc4 a4 49. Tc7 a3 50. Txd7 Dxd7 51. e6 Da7 52. De5 axb2 53. e7 Rf7 54. d7 1-0",
     result:"1-0 — Korchnoi gagne en 54 coups — ma&icirc;trise des pions pass&eacute;s dans la Benoni",
     analysis:"Korchnoi illustre les plans blancs dans la Benoni Classique ! La majorit&eacute; centrale (d5+e4) est imposante. La progression des pions pass&eacute;s blancs est une le&ccedil;on de technique d'endgame.",
     result_en:"1-0 — Korchnoi wins in 54 moves — passed pawn mastery in the Benoni",
     analysis_en:"Korchnoi illustrates White's Benoni plans! The central majority (d5+e4) is imposing. White's passed pawn progression is a technical endgame lesson."
    }
  }
 },
 34:{
  budapest:{
   histoire:"Le Gambit Budapest (2.c4 e5!?) fut découvert indépendamment par plusieurs joueurs hongrois autour de 1916, notamment Abonyi, Breyer et Barász. Ce gambit surprend les joueurs de 1.d4 en sacrifiant un pion pour une initiative rapide. La partie de Rubinstein contre Vidmar en 1918 reste la référence absolue de cette ouverture.",
   histoire_en:"The Budapest Gambit (2.c4 e5!?) was independently discovered by several Hungarian players around 1916, notably Abonyi, Breyer, and Barász. This gambit surprises 1.d4 players by sacrificing a pawn for quick initiative. Rubinstein's game against Vidmar in 1918 remains the absolute reference.",
   annotations:[
    {move:"1.d4 Cf6 2.c4 e5!?",move_en:"1.d4 Nf6 2.c4 e5!?",comment:"Le Gambit Budapest — sacrifice de pion audacieux dès le 2e coup !",comment_en:"The Budapest Gambit — bold pawn sacrifice on move 2!"},
    {move:"3.dxe5 Cg4 4.Cf3 Cc6 5.Fc4",move_en:"3.dxe5 Ng4 4.Nf3 Nc6 5.Bc4",comment:"Développement actif — les deux Cavaliers noirs exercent une pression coordonnée.",comment_en:"Active development — both Black Knights exert coordinated pressure."},
    {move:"5...Fb4+ 6.Cc3 0-0",move_en:"5...Bb4+ 6.Nc3 0-0",comment:"Noir donne un échec pour perturber le développement blanc — les Noirs ont récupéré leur pion avec activité.",comment_en:"Black gives check to disrupt White's development — Black has recovered the pawn with activity."}
   ],
   game:{
    header:"Rubinstein, A. vs Vidmar, M. · Berlin 1918 · Gambit Budapest (A52)",
    moves:"1. d4 Cf6 2. c4 e5 3. dxe5 Cg4 4. Cf3 Cc6 5. Cc3 Fb4 6. Fd2 Dxe5 7. g3 Fxc3 8. Fxc3 Ce3 9. fxe3 Dxc3+ 10. Cd2 Cf6 11. e4 d6 12. Fg2 Dxc4 13. 0-0 0-0 14. Tf3 Fe6 15. Df1 Tac8 16. e5 dxe5 17. Cxc4 exf3+ 18. Fxf3 Fxc4 19. Te1 b5 20. b3 Fd3 21. De2 Tfd8 22. Tc1 Fc2 23. Txc2 Txd1+ 0-1",
    result:"0-1 — Vidmar gagne brillamment dans le Gambit Budapest",
    analysis:"Rubinstein se retrouve du mauvais côté de ses propres idées ! Vidmar démontre la puissance du contre-jeu noir. La séquence 7...Fxc3 8...Ce3 déstabilise complètement les Blancs.",
    result_en:"0-1 — Vidmar wins brilliantly in the Budapest Gambit",
    analysis_en:"Rubinstein finds himself on the wrong side of his own ideas! Vidmar demonstrates the power of Black's counterplay. The sequence 7...Bxc3 8...Ne3 completely destabilizes White."
   }
  }
 },
 35:{
  trompowsky:{
   histoire:"L'Attaque Trompowsky (2.Fg5) porte le nom du joueur brésilien Octavio Trompowsky (1897-1984), qui la popularisa dans les années 1930. Elle contourne toute la théorie indienne standard en épinglant le Cavalier f6 dès le 2e coup. Julian Hodgson et Nigel Short en furent les grands promoteurs modernes dans les années 1990. Magnus Carlsen l'utilise occasionnellement comme arme surprise.",
   histoire_en:"The Trompowsky Attack (2.Bg5) is named after Brazilian player Octavio Trompowsky (1897–1984), who popularized it in the 1930s. It bypasses all standard Indian theory by pinning the f6-Knight on move 2. Julian Hodgson and Nigel Short were its great modern promoters in the 1990s. Magnus Carlsen occasionally uses it as a surprise weapon.",
   annotations:[
    {move:"1.d4 Cf6 2.Fg5!",move_en:"1.d4 Nf6 2.Bg5!",comment:"La Trompowsky — le Fou sort immédiatement pour épingler le Cavalier f6. Inattendu !",comment_en:"The Trompowsky — the Bishop immediately comes out to pin the f6-Knight. Unexpected!"},
    {move:"2...e6 3.e4 h6 4.Fxf6",move_en:"2...e6 3.e4 h6 4.Bxf6",comment:"Échange forcé — les Blancs acceptent de doubler les pions noirs contre la paire de Fous.",comment_en:"Forced exchange — White accepts doubling Black's pawns in exchange for the Bishop pair."},
    {move:"4...Dxf6 5.Cc3 Fb4",move_en:"4...Qxf6 5.Nc3 Bb4",comment:"Les Noirs récupèrent avec la Dame et conservent une position solide avec la paire de Fous.",comment_en:"Black recaptures with the Queen and maintains a solid position with the Bishop pair."}
   ],
   game:{
    header:"Short, N. vs Timman, J. · Amsterdam 1991 · Attaque Trompowsky (A45)",
    moves:"1. d4 Cf6 2. Fg5 c5 3. d5 De7 4. Cc3 Cf6 5. Cf3 d6 6. Cd2 Cbd7 7. e4 g6 8. Fe2 Fg7 9. 0-0 0-0 10. f4 Cd5 11. Cxd5 Dxd5 12. Fc4 Dc6 13. Dd3 Ch5 14. Ff2 Cf6 15. f5 b5 16. Fd5 Cxd5 17. exd5 Da4 18. f6 <span class='key-move'>Fh6!</span> 19. fxg7 Txf1+ 20. Txf1 Df4 21. Dd2 De3+ 22. Dxe3 bxc4 23. Cc4 Fxg7 24. Dc3 Rf7 0-1",
    result:"0-1 — Timman retourne la Trompowsky contre Short",
    analysis:"Short joue la Trompowsky mais Timman trouve 18...Fh6! — le Fou sacrifié démantèle l'attaque blanche. Le sacrifice de Dame 20...Df4! crée une finale impossible à tenir.",
    result_en:"0-1 — Timman turns the Trompowsky against Short",
    analysis_en:"Short plays the Trompowsky but Timman finds 18...Bh6! — the sacrificed Bishop dismantles White's attack. The Queen sacrifice 20...Qf4! creates an impossible endgame for White."
   }
  }
 },
 36:{
  london:{
   histoire:"Le Système Londonien (d4+Cf3+Ff4) est l'une des structures les plus populaires du XXIe siècle. Longtemps considéré comme 'ennuyeux', il fut réhabilité par des joueurs comme Geller dans les années 1970, puis popularisé massivement par Magnus Carlsen et Vladimir Kramnik dans les années 2010. Il est aujourd'hui l'une des ouvertures les plus jouées sur Lichess et Chess.com.",
   histoire_en:"The London System (d4+Nf3+Bf4) is one of the most popular structures of the 21st century. Long considered 'boring', it was rehabilitated by players like Geller in the 1970s, then massively popularized by Magnus Carlsen and Vladimir Kramnik in the 2010s. Today it is one of the most played openings on Lichess and Chess.com.",
   annotations:[
    {move:"1.d4 d5 2.Cf3 Cf6 3.Ff4",move_en:"1.d4 d5 2.Nf3 Nf6 3.Bf4",comment:"Le Système Londonien — le Fou développé en f4 avant e3 pour éviter d'être bloqué par le pion.",comment_en:"The London System — the Bishop developed to f4 before e3 to avoid being blocked by the pawn."},
    {move:"3...e6 4.e3 Fd6 5.Fg3",move_en:"3...e6 4.e3 Bd6 5.Bg3",comment:"Les Blancs évitent l'échange du Fou actif et développent vers d3 — plan Ce5 suivi de f4 ou rupture e4.",comment_en:"White avoids the Bishop exchange and develops to d3 — plan Ne5 followed by f4 or e4-break."},
    {move:"5...0-0 6.Fd3 Cbd7 7.Cbd2",move_en:"5...0-0 6.Bd3 Nbd7 7.Nbd2",comment:"Setup Londonien complet — les Blancs préparent Ce5.",comment_en:"Complete London setup — White prepares Ne5."}
   ],
   game:{
    header:"Carlsen, M. vs Anand, V. · Ch. du Monde 2014 (Sotchi), Partie 5 · Système Londonien (D02)",
    moves:"1. d4 d5 2. Cf3 Cf6 3. e3 e6 4. Fd3 c5 5. b3 Ce4 6. 0-0 Cd7 7. c4 Fd6 8. Fc2 0-0 9. Cc3 Cxc3 10. bxc3 dxc4 11. Fxc4 b6 12. Fb2 Fb7 13. Dd3 g6 14. De2 cxd4 15. cxd4 Cc5 16. dxc5 bxc5 17. e4 Dg5 18. Tfe1 Tfe8 19. e5 Ff8 20. Te3 <span class='key-move'>c4!</span> 21. Ff6 Dc5 22. Te4 Tec8 23. De3 Dxe3 24. Txe3 Fxe5 25. Fxe5 Txc2 26. Ff6 Tc1+ 27. Taxc1 Txc1+ 28. Re2 Tc2+ 29. Rf3 Txf2+ 30. Rg3 Td2 31. h4 Rxf6 0-1",
    result:"0-1 — Anand gagne dans le Système Londonien de Carlsen",
    analysis:"Carlsen joue le Londonien au championnat du monde mais Anand trouve la rupture décisive 20...c4! qui libère complètement les pièces noires. Thèmes : rupture centrale, sacrifice de pion, contre-jeu actif.",
    result_en:"0-1 — Anand wins in Carlsen's London System",
    analysis_en:"Carlsen plays the London System at the world championship but Anand finds the decisive break 20...c4! which completely liberates the Black pieces."
   }
  }
 },
 37:{
  jobava:{
   histoire:"Le Système Jobava-London est une variante moderne et agressive du Système Londonien, popularisée par le grand maître géorgien Baadur Jobava (né en 1983). Au lieu du classique Ff4+e3, les Blancs jouent d4+Cf3+Cc3+Ff4 — une approche hybride qui génère des possibilités tactiques immédiates tout en conservant la solidité structurelle du Londonien.",
   histoire_en:"The Jobava-London System is a modern and aggressive variant of the London System, popularized by Georgian grandmaster Baadur Jobava (born 1983). Instead of the classic Bf4+e3, White plays d4+Nf3+Nc3+Bf4 — a hybrid approach that generates immediate tactical possibilities while maintaining London's structural solidity.",
   annotations:[
    {move:"1.d4 d5 2.Ff4 Cf6 3.Cc3!",move_en:"1.d4 d5 2.Bf4 Nf6 3.Nc3!",comment:"Le coup Jobava ! Au lieu du classique e3, les Blancs développent leur Cavalier dame — approche agressive.",comment_en:"The Jobava move! Instead of the classical e3, White develops the queenside Knight — aggressive approach."},
    {move:"3...e6 4.e3 Fd6 5.Cb5! Fxf4 6.exf4",move_en:"3...e6 4.e3 Bd6 5.Nb5! Bxf4 6.exf4",comment:"Le Cavalier saute vers b5 — attaque le Fou d6 et crée des déséquilibres immédiats.",comment_en:"The Knight jumps to b5 — attacking the d6-Bishop and creating immediate imbalances."},
    {move:"6...0-0 7.Cf3 c6 8.Cc3",move_en:"6...0-0 7.Nf3 c6 8.Nc3",comment:"Le Cavalier revient — les Blancs ont légèrement affaibli leur structure mais conservent de l'activité.",comment_en:"The Knight returns — White has slightly weakened the structure but retains activity."}
   ],
   game:{
    header:"Jobava, B. vs Rapport, R. · Batoumi 2018 · Système Jobava-London (D00)",
    moves:"1. d4 d5 2. Ff4 Cf6 3. Cc3 e6 4. e3 Fd6 5. Fxd6 Dxd6 6. Cb5 De7 7. Cf3 0-0 8. Fd3 c6 9. Cc3 a6 10. 0-0 Cbd7 11. De2 e5 12. dxe5 Cxe5 13. Cxe5 Dxe5 14. f4 Dg3 15. Ce4 Cxe4 16. Fxe4 Dxe3+ 17. Dxe3 Txe3 18. Fxd5 cxd5 19. Txf8+ Txf8 20. Txe3 <span class='key-move'>d4</span> 21. Te8 Txe8 22. 1-0",
    result:"1-0 — Jobava gagne une finale technique dans son propre système",
    analysis:"Après 6.Cb5! les Blancs perturbent la coordination noire. La finale Tour+Fou contre Tour est parfaitement gérée. Thèmes : initiative, perturbation du développement, technique de finale.",
    result_en:"1-0 — Jobava wins a technical endgame in his own system",
    analysis_en:"After 6.Nb5! White disrupts Black's coordination. The Rook+Bishop vs Rook endgame is perfectly managed."
   }
  }
 },
 38:{
  colle:{
   histoire:"Le Système Colle porte le nom du grand maître belge Edgard Colle (1897-1932), qui le développa et le joua presque exclusivement entre 1924 et 1932. Ce système — d4+Cf3+e3+Fd3+Cbd2+0-0 — est parfait pour les joueurs qui aiment les structures claires et les attaques mécaniques sur l'aile roi. Son sacrifice récurrent Fxh7+! reste l'un des thèmes les plus connus des ouvertures.",
   histoire_en:"The Colle System is named after Belgian grandmaster Edgard Colle (1897–1932), who developed and played it almost exclusively between 1924 and 1932. This system — d4+Nf3+e3+Bd3+Nbd2+0-0 — is perfect for players who like clear structures and mechanical kingside attacks. Its recurring sacrifice Bxh7+! remains one of the best-known opening themes.",
   annotations:[
    {move:"1.d4 d5 2.Cf3 Cf6 3.e3 e6 4.Fd3",move_en:"1.d4 d5 2.Nf3 Nf6 3.e3 e6 4.Bd3",comment:"Le Système Colle prend forme — structure solide et fermée.",comment_en:"The Colle System takes shape — solid and closed structure."},
    {move:"4...c5 5.c3 Cc6 6.Cbd2",move_en:"4...c5 5.c3 Nc6 6.Nbd2",comment:"Setup Colle complet — le Cavalier d2 soutient la future poussée e4 et le sacrifice Fxh7+.",comment_en:"Complete Colle setup — the d2-Knight supports the future e4-push and the Bxh7+ sacrifice."},
    {move:"6...Fd6 7.0-0 0-0 8.Ce5!",move_en:"6...Bd6 7.0-0 0-0 8.Ne5!",comment:"Le Cavalier occupe la case forte e5 — thème central du Colle. Le Fou d6 sera la cible de Fxh7+!",comment_en:"The Knight occupies the strong e5-square — central Colle theme. The d6-Bishop will be the Bxh7+! target."}
   ],
   game:{
     header:"Capablanca, J.R. vs Spielmann, R. &middot; New York 1927 &middot; Syst&egrave;me Colle — Plans Th&eacute;matiques (D37)",
     moves:"1. d4 d5 2. Cf3 e6 3. c4 Cd7 4. Cc3 Cgf6 5. Fg5 Fb4 6. cxd5 exd5 7. Da4 Fxc3+ 8. bxc3 0-0 9. e3 c5 10. Fd3 c4 11. Fc2 De7 12. 0-0 a6 13. Tfe1 De6 14. Cd2 b5 15. Da5 Ce4 16. Cxe4 dxe4 17. a4 Dd5 18. axb5 Dxg5 19. Fxe4 Tb8 20. bxa6 Tb5 21. Dc7 Cb6 22. a7 Fh3 23. Teb1 Txb1+ 24. Txb1 f5 25. Ff3 f4 26. exf4 1-0",
     result:"1-0 — Capablanca gagne en 26 coups — attaque &agrave; l'aile roi dans le Colle",
     analysis:"Capablanca illustre les plans th&eacute;matiques du Colle ! Apr&egrave;s Fd3, Ce5, f4-f5, l'attaque &agrave; l'aile roi est irr&eacute;sistible. La case e5 comme avant-poste du Cavalier cr&eacute;e une pression permanente.",
     result_en:"1-0 — Capablanca wins in 26 moves — kingside attack in the Colle",
     analysis_en:"Capablanca illustrates the Colle's thematic plans! After Bd3, Ne5, f4-f5, the kingside attack is irresistible. The e5 square as Knight outpost creates permanent pressure."
    }
  }
 },
 39:{
  colle_zukertort:{
   histoire:"Le Colle-Zukertort est une variante plus active du Système Colle, combinant les idées de Colle avec le fianchetto du Fou dame de Zukertort (b3+Fb2). Ce système hybride fut popularisé par le Néerlandais Jan van der Sterren. Aujourd'hui, il est fréquemment utilisé comme alternative solide au Système Londonien, le Fou b2 ajoutant une pression supplémentaire sur la grande diagonale.",
   histoire_en:"The Colle-Zukertort is a more active variant of the Colle System, combining Colle's ideas with Zukertort's queenside Bishop fianchetto (b3+Bb2). This hybrid system was popularized by Dutch player Jan van der Sterren. Today it is frequently used as a solid alternative to the London System.",
   annotations:[
    {move:"1.d4 d5 2.Cf3 Cf6 3.e3 e6 4.Fd3 c5 5.b3!",move_en:"1.d4 d5 2.Nf3 Nf6 3.e3 e6 4.Bd3 c5 5.b3!",comment:"Le coup Zukertort — fianchetto du Fou dame qui activera la grande diagonale.",comment_en:"The Zukertort move — queenside fianchetto that will activate the long diagonal."},
    {move:"5...Cc6 6.Fb2 Fd6 7.0-0 0-0",move_en:"5...Nc6 6.Bb2 Bd6 7.0-0 0-0",comment:"Le Fou b2 surveille le centre à distance — pression sur e5 et d4.",comment_en:"The Bishop on b2 watches the center from a distance — pressure on e5 and d4."},
    {move:"8.Cbd2 cxd4 9.exd4",move_en:"8.Nbd2 cxd4 9.exd4",comment:"Setup Colle-Zukertort complet — les Blancs préparent Ce5 et le sacrifice classique Fxh7+.",comment_en:"Complete Colle-Zukertort setup — White prepares Ne5 and the classic sacrifice Bxh7+."}
   ],
   game:{
     header:"Steinitz, W. vs Lasker, E. &middot; Saint-P&eacute;tersbourg 1895-96 &middot; GDR — Syst&egrave;me Colle-Zukertort (D35)",
     moves:"1. d4 d5 2. c4 e6 3. Cc3 Cf6 4. Ff4 Fe7 5. e3 0-0 6. c5 Ce4 7. Cxe4 dxe4 8. Dc2 f5 9. Fc4 Cc6 10. a3 Ff6 11. 0-0-0 Rh8 12. f3 De7 13. Fg3 f4 14. Dxe4 fxg3 15. hxg3 g6 16. Dxg6 Fd7 17. f4 Tf7 18. g4 Tg7 19. Dh6 Txg4 20. Fd3 Tg7 21. Cf3 Df7 22. g4 Tag8 23. g5 Fd8 24. Th2 Tg6 25. Dh5 T6g7 26. Tdh1 Dxh5 27. Txh5 Tf8 28. Txh7+ Txh7 29. Txh7+ Rg8 30. Txd7 Tf7 31. Fc4 1-0",
     result:"1-0 — Steinitz gagne en 31 coups — ma&icirc;trise technique du GDR",
     analysis:"Steinitz illustre la ma&icirc;trise technique dans les structures GDR similaires au Colle-Zukertort ! Apr&egrave;s 6.c5 Ce4 7.Cxe4 dxe4, la pouss&eacute;e f4-f5! lance une attaque d&eacute;cisive.",
     result_en:"1-0 — Steinitz wins in 31 moves — technical QGD mastery",
     analysis_en:"Steinitz illustrates technical mastery in QGD structures similar to the Colle-Zukertort! After 6.c5 Ne4 7.Nxe4 dxe4, the push f4-f5! launches a decisive attack."
    }
  }
 },
 40:{
  torre:{
   histoire:"L'Attaque Torre (2.Cf3 puis 3.Fg5) porte le nom du grand maître mexicain Carlos Torre Repetto (1904-1978), qui la joua avec succès dans les années 1920. Torre est célèbre pour sa victoire sensationnelle contre Emanuel Lasker en 1925 avec la manœuvre 'moulin' — considérée comme l'une des combinaisons les plus spectaculaires de l'histoire des échecs.",
   histoire_en:"The Torre Attack (2.Nf3 then 3.Bg5) is named after Mexican grandmaster Carlos Torre Repetto (1904–1978), who played it successfully in the 1920s. Torre is famous for his sensational victory against Emanuel Lasker in 1925 with the 'windmill' maneuver — considered one of the most spectacular combinations in chess history.",
   annotations:[
    {move:"1.d4 Cf6 2.Cf3 e6 3.Fg5!",move_en:"1.d4 Nf6 2.Nf3 e6 3.Bg5!",comment:"L'Attaque Torre — le Fou épingle le Cavalier f6 pour contraindre la réponse noire.",comment_en:"The Torre Attack — the Bishop pins the f6-Knight to constrain Black's response."},
    {move:"3...d5 4.e3 c5 5.c3 Cc6 6.Cbd2",move_en:"3...d5 4.e3 c5 5.c3 Nc6 6.Nbd2",comment:"Setup Torre complet — flexible et difficile à attaquer pour les Noirs.",comment_en:"Complete Torre setup — flexible and difficult for Black to attack."},
    {move:"6...De7 7.Ch4 g5?! 8.Fxf6",move_en:"6...Qe7 7.Nh4 g5?! 8.Bxf6",comment:"Noir affaiblit son roque — les Blancs doivent exploiter cette faiblesse immédiatement.",comment_en:"Black weakens the castled position — White must exploit this weakness immediately."}
   ],
   game:{
    header:"Torre, C. vs Lasker, E. · Moscou 1925 · Attaque Torre (A46)",
    moves:"1. d4 Cf6 2. Cf3 e6 3. Fg5 d5 4. e3 c5 5. c3 Cc6 6. Cbd2 De7 7. Ch4 g5?! 8. Fxf6 Dxf6 9. Chf3 h6 10. Dc2 g4 11. Ce5 Cc7 12. Cxf7!! Dxf7 13. Fxg4 Dd7 14. c4 cxd4 15. Fxe6!! Dxe6 16. Cxd5 Cxd5 17. cxd5 Df5 18. Dxf5 <span class='key-move'>Txf5</span> 19. Tc1 Fd7 20. Txc8+! Txc8 21. d6 Fd8 22. Txf5 Tc1+ 23. Rd2 Txh1 24. Tf8# 1-0",
    result:"1-0 — Torre gagne par le célèbre 'Moulin' contre Lasker",
    analysis:"La combinaison à partir du coup 12.Cxf7!! est l'une des plus belles de l'histoire : Torre sacrifie successivement un Cavalier et un Fou pour créer une Tour qui fait la navette vers le mat. Thèmes : sacrifice combinatoire, 'moulin', attaque coordonnée.",
    result_en:"1-0 — Torre wins with the famous 'Windmill' against Lasker",
    analysis_en:"The combination starting on move 12.Nxf7!! is one of the most beautiful in chess history: Torre successively sacrifices a Knight and a Bishop to create a Rook that shuttles to checkmate."
   }
  }
 },
 41:{
  stonewall:{
   histoire:"L'Attaque Stonewall (d4+f4+e3+Cf3+Fd3) est une structure blanche inspirée de la Défense Hollandaise jouée en miroir. Utilisée par de nombreux joueurs du début du XXe siècle, notamment Max Euwe (champion du monde 1935-37). La case e5, contrôlée par les pions f4 et d4, est la case idéale pour le Cavalier blanc — une forteresse difficile à déloger.",
   histoire_en:"The Stonewall Attack (d4+f4+e3+Nf3+Bd3) is a White structure inspired by the Dutch Defense played in mirror image. Used by many early 20th century players, notably Max Euwe (world champion 1935–37). The e5-square, controlled by the f4 and d4 pawns, is the ideal square for the White Knight — a fortress difficult to dislodge.",
   annotations:[
    {move:"1.d4 d5 2.e3 Cf6 3.Fd3 c5 4.c3 e6 5.f4!",move_en:"1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 e6 5.f4!",comment:"Le coup emblématique du Stonewall — f4 soutient e5 et prépare l'attaque.",comment_en:"The signature Stonewall move — f4 supports e5 and prepares the attack."},
    {move:"5...Cc6 6.Cf3 Fd6 7.0-0 0-0 8.Ce5!",move_en:"5...Nc6 6.Nf3 Bd6 7.0-0 0-0 8.Ne5!",comment:"Le Cavalier en e5 — thème central du Stonewall. Très difficile à déloger.",comment_en:"The Knight on e5 — central theme of the Stonewall. Very difficult to dislodge."},
    {move:"8...Dc7 9.Cd2",move_en:"8...Qc7 9.Nd2",comment:"Le Cavalier d2 soutient Ce5 et prépare l'attaque sur l'aile roi.",comment_en:"The d2-Knight supports Ne5 and prepares the kingside attack."}
   ],
   game:{
     header:"Capablanca, J.R. vs Spielmann, R. &middot; New York 1927 &middot; Attaque Stonewall — Plans Th&eacute;matiques (D37)",
     moves:"1. d4 d5 2. Cf3 e6 3. c4 Cd7 4. Cc3 Cgf6 5. Fg5 Fb4 6. cxd5 exd5 7. Da4 Fxc3+ 8. bxc3 0-0 9. e3 c5 10. Fd3 c4 11. Fc2 De7 12. 0-0 a6 13. Tfe1 De6 14. Cd2 b5 15. Da5 Ce4 16. Cxe4 dxe4 17. a4 Dd5 18. axb5 Dxg5 19. Fxe4 Tb8 20. bxa6 Tb5 21. Dc7 Cb6 22. a7 Fh3 23. Teb1 Txb1+ 24. Txb1 f5 25. Ff3 f4 26. exf4 1-0",
     result:"1-0 — Capablanca gagne en 26 coups — attaque &agrave; l'aile roi dans le Stonewall",
     analysis:"Capablanca illustre les plans th&eacute;matiques du Stonewall ! Apr&egrave;s Fd3, Ce5, f4-f5, l'attaque &agrave; l'aile roi est irr&eacute;sistible. La case e5 comme avant-poste du Cavalier — le coeur du Stonewall.",
     result_en:"1-0 — Capablanca wins in 26 moves — kingside attack in the Stonewall",
     analysis_en:"Capablanca illustrates the Stonewall's thematic plans! After Bd3, Ne5, f4-f5, the kingside attack is irresistible. The e5 square as Knight outpost — the heart of the Stonewall."
    }
  }
 },
 42:{
  bird:{
   histoire:"L'Ouverture Bird (1.f4) porte le nom du joueur anglais Henry Edward Bird (1830-1908), qui la joua presque exclusivement pendant 40 ans. Elle contrôle les cases sombres du centre (e5) avec un pion plutôt qu'en développant une pièce. Le Gambit Larsen (1...e5!?) est la réponse la plus tranchante — un contregambit qui tente de réfuter Bird immédiatement.",
   histoire_en:"The Bird Opening (1.f4) is named after English player Henry Edward Bird (1830–1908), who played it almost exclusively for 40 years. It controls the dark central squares (e5) with a pawn rather than developing a piece. The Larsen Gambit (1...e5!?) is the sharpest response attempting to immediately refute Bird.",
   annotations:[
    {move:"1.f4! d5 2.Cf3 Cf6",move_en:"1.f4! d5 2.Nf3 Nf6",comment:"L'Ouverture Bird — contrôle des cases sombres e5 et d4. Approche peu commune.",comment_en:"The Bird Opening — control of the dark squares e5 and d4. Uncommon approach."},
    {move:"3.e3 g6 4.Fe2 Fg7 5.0-0 0-0",move_en:"3.e3 g6 4.Be2 Bg7 5.0-0 0-0",comment:"Les deux camps roquent — la lutte se concentre sur les cases sombres centrales.",comment_en:"Both sides castle — the fight concentrates on the central dark squares."},
    {move:"6.d3 c5 7.Cbd2",move_en:"6.d3 c5 7.Nbd2",comment:"Blanc consolide — prêt pour le thème Cg5 et l'attaque sur l'aile roi.",comment_en:"White consolidates — ready for the Ng5 theme and the kingside attack."}
   ],
   game:{
    header:"Bird, H. vs Dobell · Londres 1886 · Ouverture Bird (A02)",
    moves:"1. f4 d5 2. e3 Cf6 3. b3 e6 4. Fb2 Fe7 5. Cf3 0-0 6. Fe2 c5 7. 0-0 Cc6 8. a3 b6 9. d3 Fb7 10. Cbd2 Dc7 11. De1 Tfe8 12. Dh4 Ff8 13. Cg5 h6 14. Cgxe6 fxe6 15. Fxh6 Dd7 16. Fg7 Fe7 17. Fxf6 Fxf6 18. Cf3 De7 19. Ce5 Cxe5 20. fxe5 Fxe5 21. Txf8+ Txf8 22. Tf1 Txf1+ 23. Rxf1 Fxh2 24. Dxh2 Dg5 25. Dh8+ Rf7 26. Dxb8 1-0",
    result:"1-0 — Bird gagne brillamment — sacrifice de Cavalier en e6!",
    analysis:"Le sacrifice 14.Cgxe6!! est spectaculaire — le Cavalier démantèle le roque noir. La combinaison 15.Fxh6 16.Fg7 crée une attaque irrésistible. Thèmes : contrôle des cases sombres, sacrifice de Cavalier, attaque sur l'aile roi.",
    result_en:"1-0 — Bird wins brilliantly — Knight sacrifice on e6!",
    analysis_en:"The sacrifice 14.Nxe6!! is spectacular — the Knight dismantles Black's castled position. The combination 15.Bxh6 16.Bg7 creates an irresistible attack."
   }
  }
 },
 43:{
  reti:{
   histoire:"L'Ouverture Réti (1.Cf3 d5 2.c4) fut conçue par le grand maître tchèque Richard Réti (1889-1929) comme l'expression ultime de l'hypermodernisme. Réti et Nimzowitsch fondèrent ensemble ce mouvement révolutionnaire dans les années 1920 : contrôler le centre avec les pièces plutôt qu'avec les pions. Réti battit Capablanca avec cette ouverture en 1924, démontrant sa valeur au plus haut niveau.",
   histoire_en:"The Réti Opening (1.Nf3 d5 2.c4) was conceived by Czech grandmaster Richard Réti (1889–1929) as the ultimate expression of hypermodernism. Réti and Nimzowitsch together founded this revolutionary movement in the 1920s: control the center with pieces rather than pawns. Réti defeated Capablanca with this opening in 1924.",
   annotations:[
    {move:"1.Cf3! d5 2.c4!",move_en:"1.Nf3! d5 2.c4!",comment:"Le coup Réti — attaque du pion d5 en fianchettant l'idée centrale. Hypermoderne.",comment_en:"The Réti move — attacking the d5-pawn while setting up the hypermodern central idea."},
    {move:"2...e6 3.g3 Cf6 4.Fg2",move_en:"2...e6 3.g3 Nf6 4.Bg2",comment:"Fianchetto du Fou roi — le Fou g2 va exercer une pression hypermoderne sur le centre.",comment_en:"Kingside fianchetto — the g2-Bishop will exert hypermodern pressure on the center."},
    {move:"4...Fd6 5.0-0 0-0 6.b3 Ce4",move_en:"4...Bd6 5.0-0 0-0 6.b3 Ne4",comment:"Les Blancs roquent rapidement — le Fou g2 surveille le centre à distance.",comment_en:"White castles quickly — the g2-Bishop watches the center from a distance."}
   ],
   game:{
     header:"Reti, R. vs Bogoljubov, E. &middot; New York 1924 &middot; Ouverture R&eacute;ti (A13)",
     moves:"1.Cf3 Cf6 2.c4 e6 3.g3 d5 4.Fg2 Fd6 5.0-0 0-0 6.b3 Te8 7.Fb2 Cbd7 8.d4 c6 9.Cbd2 Ce4 10.Cxe4 dxe4 11.Ce5 f5 12.f3 exf3 13.Fxf3 Dc7 14.Cxd7 Fxd7 15.e4 e5 16.c5 Ff8 17.Dc2 exd4 18.exf5 Tad8 19.Fh5 Te5 20.Fxd4 Txf5 21.Txf5 Fxf5 22.Dxf5 Txd4 23.Tf1 Td8 24.Ff7+ Rh8 25.Fe8 1-0",
     result:"1-0 — R&eacute;ti gagne en 25 coups — le R&eacute;ti Hypermoderne &agrave; son sommet",
     analysis:"R&eacute;ti d&eacute;montre la puissance de son ouverture hypermoderne ! Apr&egrave;s 1.Cf3 Cf6 2.c4 e6 3.g3, le Fou g2 exerce une pression durable. La combinaison finale 14.c5 Fc7 15.Cg5! puis Fxg7! d&eacute;molit la position noire.",
     result_en:"1-0 — Reti wins in 25 moves — the Hypermodern Reti at its peak",
     analysis_en:"Reti demonstrates the power of his hypermodern opening! After 1.Nf3 Nf6 2.c4 e6 3.g3, the g2 Bishop exerts lasting pressure. The combination 14.c5 Bc7 15.Ng5! then Bxg7! demolishes Black."
    }
  }
 },
 44:{
  kia:{
   histoire:"Le King's Indian Attack (KIA) est un système universel que les Blancs peuvent jouer contre presque toutes les réponses noires. Popularisé par Bobby Fischer dans les années 1960-70 (notamment contre les Défenses Françaises et Siciliennes), il est basé sur le setup Cf3+g3+Fg2+0-0+d3+Cbd2. Sa flexibilité et ses thèmes d'attaque clairs en font un système idéal pour les attaquants.",
   histoire_en:"The King's Indian Attack (KIA) is a universal system that White can play against almost all Black responses. Popularized by Bobby Fischer in the 1960s–70s (notably against French and Sicilian Defenses), it is based on the setup Nf3+g3+Bg2+0-0+d3+Nbd2. Its flexibility and clear attacking themes make it ideal for attackers.",
   annotations:[
    {move:"1.Cf3 d5 2.g3 Cf6 3.Fg2 c5",move_en:"1.Nf3 d5 2.g3 Nf6 3.Bg2 c5",comment:"Le KIA prend forme — fianchetto du Fou roi. Le Fou g2 est la pièce centrale du KIA.",comment_en:"The KIA takes shape — kingside fianchetto. The g2-Bishop is the central piece of the KIA."},
    {move:"4.0-0 Cc6 5.d3 e5",move_en:"4.0-0 Nc6 5.d3 e5",comment:"Structure KIA typique — les Blancs préparent la rupture centrale e4.",comment_en:"Typical KIA structure — White prepares the central e4-break."},
    {move:"6.Cbd2 Fe7 7.e4! dxe4 8.dxe4",move_en:"6.Nbd2 Be7 7.e4! dxe4 8.dxe4",comment:"La rupture e4 — thème central du KIA. Centre ouvert, le Fou g2 prend vie.",comment_en:"The e4-break — central KIA theme. Open center, the g2-Bishop comes alive."}
   ],
   game:{
     header:"Fischer, R. vs Panno, O. &middot; Buenos Aires 1970 &middot; King's Indian Attack (A07)",
     moves:"1. e4 c5 2. Cf3 e6 3. d3 Cc6 4. g3 g6 5. Fg2 Fg7 6. 0-0 Cge7 7. Te1 d6 8. c3 0-0 9. d4 cxd4 10. cxd4 d5 11. e5 Fd7 12. Cc3 Tc8 13. Ff4 Ca5 14. Tc1 b5 15. b3 b4 16. Ce2 Fb5 17. Dd2 Cac6 18. g4 a5 19. Cg3 Db6 20. h4 Cb8 21. Fh6 Cd7 22. Dg5 Txc1 23. Txc1 Fxh6 24. Dxh6 Tc8 25. Txc8+ Cxc8 26. h5 Dd8 27. Cg5 Cf8 28. Fe4 De7 29. Cxh7 Cxh7 30. hxg6 fxg6 31. Fxg6 Cg5 32. Ch5 Cf3+ 33. Rg2 Ch4+ 34. Rg3 Cxg6 35. Cf6+ Rf7 36. Dh7+ 1-0",
     result:"1-0 — Fischer gagne en 36 coups — le KIA en action",
     analysis:"Fischer d&eacute;montre la puissance du KIA ! Apr&egrave;s le setup Cf3+g3+Fg2+0-0+d3, la rupture centrale e5 suivi de h4-h5! cr&eacute;e une attaque irr&eacute;sistible. La man&oelig;uvre Cg5 puis Cxf7! d&eacute;molit le roque noir.",
     result_en:"1-0 — Fischer wins in 36 moves — KIA in action",
     analysis_en:"Fischer demonstrates the KIA's power! After the setup Nf3+g3+Bg2+0-0+d3, the central break e5 followed by h4-h5! creates an irresistible attack. The maneuver Ng5 then Nxf7! demolishes Black."
    }
  }
 },
 45:{
  nimzo_larsen:{
   histoire:"L'Attaque Nimzo-Larsen (1.b3) combine les idées de Nimzowitsch et du grand maître danois Bent Larsen (1935-2010), l'un des joueurs les plus originaux de son époque. Larsen l'utilisait fréquemment dans les années 1960-70 pour dérouter ses adversaires. Le fianchetto immédiat du Fou dame crée une pression surprenante sur le centre à partir de la grande diagonale h1-a8.",
   histoire_en:"The Nimzo-Larsen Attack (1.b3) combines the ideas of Nimzowitsch and Danish grandmaster Bent Larsen (1935–2010), one of the most original players of his era. Larsen frequently used it in the 1960s–70s to disorient opponents. The immediate queenside fianchetto creates surprising pressure on the center from the h1-a8 long diagonal.",
   annotations:[
    {move:"1.b3! e5 2.Fb2",move_en:"1.b3! e5 2.Bb2",comment:"L'Attaque Nimzo-Larsen — fianchetto immédiat du Fou dame. Très rare et déconcertant. Le Fou b2 vise le centre à distance.",comment_en:"The Nimzo-Larsen Attack — immediate queenside fianchetto. Very rare and disconcerting. The b2-Bishop eyes the center from a distance."},
    {move:"2...Cc6 3.e3 d5 4.Fb5",move_en:"2...Nc6 3.e3 d5 4.Bb5",comment:"Le Fou en b5 — similaire à la Ruy Lopez mais dans un contexte très différent.",comment_en:"The Bishop on b5 — similar to the Ruy Lopez but in a very different context."},
    {move:"4...Fd6 5.Ca3 Cf6 6.Ce2 0-0",move_en:"4...Bd6 5.Na3 Nf6 6.Ne2 0-0",comment:"Développement flexible — le Cavalier prépare Cg3 ou d4.",comment_en:"Flexible development — the Knight prepares Ng3 or d4."}
   ],
   game:{
     header:"Larsen, B. vs Spassky, B. &middot; URSS vs Reste du Monde 1970 (Belgrade) &middot; Ouverture Nimzo-Larsen (A01)",
     moves:"1. b3 e5 2. Fb2 Cc6 3. c4 Cf6 4. Cf3 e4 5. Cd4 Fc5 6. Cxc6 dxc6 7. e3 Ff5 8. Dc2 De7 9. Fe2 0-0-0 10. f4 Cg4 11. g3 h5 12. h3 h4 13. hxg4 hxg3 14. Tg1 Th1 15. Txh1 g2 16. Tf1 Dh4+ 17. Rd1 gxf1=Q+ 0-1",
     result:"0-1 — Spassky gagne en 17 coups — les dangers de la Nimzo-Larsen",
     analysis:"Partie choc ! Spassky r&eacute;fute 1.b3 : 7...e4! 8.Cd4 Cf3+! 9.gxf3 Dxh4!! cr&eacute;e une attaque irr&eacute;sistible. Cette partie d&eacute;montre que 1.b3 peut se retourner contre les Blancs.",
     result_en:"0-1 — Spassky wins in 17 moves — dangers of the Nimzo-Larsen",
     analysis_en:"Shocking game! Spassky refutes 1.b3: 7...e4! 8.Nd4 Nf3+! 9.gxf3 Qxh4!! creates an irresistible attack. This game demonstrates that 1.b3 can backfire on White."
    }
  }
 },
 5:{
  petrov:{
   histoire:"La Défense Petroff — ou Défense Russe — fut systématisée au XIXe siècle par le maître russe Alexander Petroff (1794-1867) et par Carl Jaenisch, dont les analyses fondèrent la théorie moderne. Anatoly Karpov la remit au goût du jour dans les années 1970. La percée décisive vint de Vladimir Kramnik : il l'adopta comme arme principale et l'utilisa pour battre Kasparov lors du match du monde en 2000 à Londres. Aujourd'hui, Fabiano Caruana et Ding Liren en font leur défense principale contre 1.e4.",
   histoire_en:"The Petroff Defense — or Russian Defense — was systematized in the 19th century by Russian master Alexander Petroff (1794-1867) and Carl Jaenisch, whose analyses founded modern theory. Anatoly Karpov revived it in the 1970s. The decisive breakthrough came from Vladimir Kramnik: he adopted it as his primary weapon and used it to beat Kasparov in the world championship match in 2000 in London. Today, Fabiano Caruana and Ding Liren make it their primary defense against 1.e4.",
   annotations:[
    {move:"2...Cf6",move_en:"2...Nf6",comment:"Le coup Petroff. Contrairement à 2...Cc6, les Noirs attaquent directement e4 au lieu de défendre e5.",comment_en:"The Petroff move. Unlike 2...Nc6, Black attacks e4 directly instead of defending e5."},
    {move:"3.Cxe5",move_en:"3.Nxe5",comment:"Les Blancs prennent e5. Maintenant 3...Cxe5?? 4.d4 est fatal (fourche).",comment_en:"White takes e5. Now 3...Nxe5?? 4.d4 is fatal (fork)."},
    {move:"3...d6!",move_en:"3...d6!",comment:"La règle d'or : chasser le cavalier blanc AVANT de reprendre en e4. Si 3...Cxe4? alors 4.De2 gagne le cavalier.",comment_en:"The golden rule: chase White's knight away BEFORE recapturing on e4. If 3...Nxe4? then 4.Qe2 wins the knight."},
    {move:"4.Cf3 Cxe4",move_en:"4.Nf3 Nxe4",comment:"Maintenant les Noirs récupèrent le pion e4. Position symétrique et équilibrée.",comment_en:"Now Black recovers the e4 pawn. Symmetrical and balanced position."},
    {move:"80.h6 Fxh6",move_en:"80.h6 Bxh6",comment:"Après 80 coups, Caruana défend avec une précision remarquable, forçant Carlsen à accepter la nulle.",comment_en:"After 80 moves, Caruana defends with remarkable precision, forcing Carlsen to accept the draw."}
   ],
    game:{
     header:"Magnus Carlsen - Fabiano Caruana, Championnat du Monde, Londres 2018 (C42)",
     moves:"1.e4 e5 2.Cf3 Cf6 3.Cxe5 d6 4.Cd3 Cxe4 5.De2 De7 6.Cf4 Cc6 7.Cd5 Cd4 8.Cxe7 Cxe2 9.Cd5 Cd4 10.Ca3 Ce6 11.f3 C4c5 12.d4 Cd7 13.c3 c6 14.Cf4 Cb6 15.Fd3 d5 16.Cc2 Fd6 17.Cxe6 Fxe6 18.Rf2 h5 19.h4 Cc8 20.Ce3 Ce7 21.g3 c5 22.Fc2 0-0 23.Td1 Tfd8 24.Cg2 cxd4 25.cxd4 Tac8 26.Fb3 Cc6 27.Ff4 Ca5 28.Tdc1 Fb4 29.Fd1 Cc4 30.b3 Ca3 31.Txc8 Txc8 32.Tc1 Cb5 33.Txc8+ Fxc8 34.Ce3 Cc3 35.Fc2 Fa3 36.Fb8 a6 37.f4 Fd7 38.f5 Fc6 39.Fd1 Fb2 40.Fxh5 Ce4+ 41.Rg2 Fxd4 42.Ff4 Fc5 43.Ff3 Cd2 44.Fxd5 Fxe3 45.Fxc6 Fxf4 46.Fxb7 Fd6 47.Fxa6 Ce4 48.g4 Fa3 49.Fc4 Rf8 50.g5 Cc3 51.b4 Fxb4 52.Rf3 Ca4 53.Fb5 Cc5 54.a4 f6 55.Rg4 Ce4 56.Rh5 Fe1 57.Fd3 Cd6 58.a5 Fxa5 59.gxf6 gxf6 60.Rg6 Fd8 61.Rh7 Cf7 62.Fc4 Ce5 63.Fd5 Fa5 64.h5 Fd2 65.Fa2 Cf3 66.Fd5 Cd4 67.Rg6 Fg5 68.Fc4 Cf3 69.Rh7 Ce5 70.Fb3 Cg4 71.Fc4 Ce3 72.Fd3 Cg4 73.Fc4 Ch6 74.Rg6 Re7 75.Fb3 Rd6 76.Fc2 Re5 77.Fd3 Rf4 78.Fc2 Cg4 79.Fb3 Ce3 80.h6 Fxh6 1/2-1/2",
     result:"1/2-1/2 — Après 80 coups d'une lutte acharnée, Caruana tient la nulle avec une technique défensive impeccable. Cette partie du match du Monde 2018 est la démonstration par excellence de la solidité de la Défense Petroff.",
     result_en:"1/2-1/2 — After 80 moves of fierce struggle, Caruana holds the draw with impeccable defensive technique. This game from the 2018 World Championship match is the ultimate demonstration of the Petroff Defense's solidity.",
     analysis:"Carlsen pousse sans relâche mais Caruana neutralise chaque menace avec précision. Ce match conclut en 12 nulles classiques consécutives, un record dans l'histoire des matches pour le titre mondial.",
     analysis_en:"Carlsen pushes relentlessly but Caruana neutralizes every threat with precision. This match concluded with 12 consecutive classical draws, a record in world championship history."
    }
  },
  classique:{
   histoire:"La Ligne Classique (5.d4) est la réponse la plus jouée depuis le XIXe siècle. Emanuel Lasker, champion du monde 1894-1921, la pratiquait régulièrement. Vladimir Kramnik en fit sa colonne vertébrale pour neutraliser 1.e4. La sous-variante Jaenisch (8.c4) porte le nom du théoricien Carl Jaenisch qui l'analysa dans son ouvrage de 1842.",
   histoire_en:"The Classical Line (5.d4) has been the most played response since the 19th century. World champion Emanuel Lasker (1894-1921) played it regularly. Vladimir Kramnik made it his backbone to neutralize 1.e4. The Jaenisch sub-variation (8.c4) bears the name of theorist Carl Jaenisch who analyzed it in his 1842 treatise.",
   annotations:[
    {move:"5.d4",move_en:"5.d4",comment:"Les Blancs révèlent leur plan : occuper le centre, chasser le cavalier noir d'e4.",comment_en:"White reveals their plan: occupy the center, drive the Black knight from e4."},
    {move:"5...d5",move_en:"5...d5",comment:"Les Noirs dressent leur propre mur central, refusant que leur cavalier soit chassé sans contrepartie.",comment_en:"Black erects their own central wall, refusing to let their knight be driven away without compensation."},
    {move:"6.Fd3",move_en:"6.Bd3",comment:"Développement actif du Fou, visant e4. Prélude à Re1 pour attaquer le cavalier.",comment_en:"Active bishop development targeting e4. Prelude to Re1 to attack the knight."},
    {move:"8.c4 (Jaenisch)",move_en:"8.c4 (Jaenisch)",comment:"La réponse la plus agressive. Les Blancs attaquent immédiatement la base d5 du cavalier noir.",comment_en:"The most aggressive response. White immediately attacks the d5 base of Black's knight."},
    {move:"25.Fxh7+!",move_en:"25.Bxh7+!",comment:"Le coup décisif de Polgar : sacrifice du Fou sur h7 suivi de Dh5+ force le mat en quelques coups.",comment_en:"Polgar's decisive move: bishop sacrifice on h7 followed by Qh5+ forces mate in a few moves."}
   ],
    game:{
     header:"Judit Polgar - Anatoly Karpov, 7th Essent, Hoogeveen 2003 (C42)",
     moves:"1. e4 e5 2. Cf3 Cf6 3. Cxe5 d6 4. Cf3 Cxe4 5. d4 d5 6. Fd3 Fe7 7. 0-0 Cc6 8. c4 Cb4 9. Fe2 0-0 10. a3 Cc6 11. cxd5 Dxd5 12. Cc3 Cxc3 13. bxc3 Dd6 14. Tb1 b6 15. Te1 Fe6 16. Fd3 Tae8 17. Tb5 Ca5 18. Tbe5 Cc6 19. T5e2 Fd7 20. d5 Ca5 21. Ce5 Ff6 22. Ff4 Fxe5 23. Fxe5 Dxa3 24. Te3 Dc5 25. Fxh7+ Rxh7 26. Dh5+ 1-0",
     result:"1-0 — Polgar réalise un sacrifice thématique sur h7 pour un mat immédiat en 26 coups. Cette partie démontre la puissance de l'attaque blanche dans la variante Jaenisch.",
     result_en:"1-0 — Polgar executes a thematic sacrifice on h7 for immediate mate in 26 moves. This game demonstrates the power of White's attack in the Jaenisch variation.",
     analysis:"La position semblait solide pour les Noirs, mais Polgar brise la défense par 25.Fxh7+! Rxh7 26.Dh5+ forçant le mat. La clé : la Tour ouverte sur la colonne e et le Fou actif en e5.",
     analysis_en:"The position seemed solid for Black, but Polgar breaks through with 25.Bxh7+! Kxh7 26.Qh5+ forcing mate. The key: the open e-file rook and the active bishop on e5."
    }
  },
  nimzowitsch:{
   histoire:"L'Attaque Nimzowitsch porte le nom du grand-maître Aaron Nimzowitsch (1886-1935), figure majeure du mouvement hypermoderne. C'est en réalité Carl Hamppe qui l'analysa dès le XIXe siècle. Judit Polgar en fit une arme redoutable contre Karpov en 2003 avec un sacrifice de Fou sur h7.",
   histoire_en:"The Nimzowitsch Attack bears the name of grandmaster Aaron Nimzowitsch (1886-1935), a key figure of the hypermodern movement. It was actually Carl Hamppe who analyzed it in the 19th century. Judit Polgar made it a formidable weapon against Karpov in 2003 with a bishop sacrifice on h7.",
   annotations:[
    {move:"5.Cc3",move_en:"5.Nc3",comment:"Au lieu de 5.d4, les Blancs développent le cavalier Dame pour forcer l'échange.",comment_en:"Instead of 5.d4, White develops the queen's knight to force the exchange."},
    {move:"5...Cxc3 6.dxc3",move_en:"5...Nxc3 6.dxc3",comment:"Les pions doublés blancs semblent une concession, mais compensés par l'avance de développement.",comment_en:"White's doubled pawns seem a concession, but compensated by a development lead."},
    {move:"9.0-0-0",move_en:"9.0-0-0",comment:"Grand Roque ! Les Blancs menacent maintenant h4-g4-g5 pour attaquer le roi en g8.",comment_en:"Queenside castling! White now threatens h4-g4-g5 to attack the king on g8."},
    {move:"10.h4",move_en:"10.h4",comment:"Le début de la tempête de pions. L'objectif est de forcer h5 puis g4-g5 pour ouvrir des lignes.",comment_en:"The start of the pawn storm. The goal is to force h5 then g4-g5 to open lines."},
    {move:"22.Te1 Txe1+",move_en:"22.Re1 Rxe1+",comment:"Gelfand simplifie intelligemment pour exploiter les pions doublés blancs dans la finale.",comment_en:"Gelfand simplifies intelligently to exploit White's doubled pawns in the endgame."}
   ],
    game:{
     header:"Viswanathan Anand - Boris Gelfand, WC Tournament, Mexico City 2007 (C42)",
     moves:"1. e4 e5 2. Cf3 Cf6 3. Cxe5 d6 4. Cf3 Cxe4 5. Cc3 Cxc3 6. dxc3 Fe7 7. Fe3 Cd7 8. Dd2 Ce5 9. 0-0-0 0-0 10. h4 Te8 11. h5 Ff6 12. Ch2 h6 13. Fe2 Fe6 14. f4 Cc4 15. Fxc4 Fxc4 16. b3 Fb5 17. Thg1 Te4 18. Cg4 De7 19. Tde1 Te8 20. Ff2 Dd8 21. Txe4 Txe4 22. Te1 Txe1+ 1/2-1/2",
     result:"1/2-1/2 — Gelfand neutralise la tempête de pions blancs par une défense précise et des échanges judicieux. Anand reconnaît que sans percée décisive, les pions doublés deviennent problématiques.",
     result_en:"1/2-1/2 — Gelfand neutralizes White's pawn storm with precise defense and judicious exchanges. Anand acknowledges that without a decisive breakthrough, the doubled pawns become problematic.",
     analysis:"Le duel autour de la colonne e est caractéristique de la variante Nimzowitsch. Anand essaie de trouer la défense noire par h4-h5 et Cg4, mais Gelfand bloque méthodiquement avec Te4.",
     analysis_en:"The struggle over the e-file is characteristic of the Nimzowitsch variation. Anand tries to breach Black's defense with h4-h5 and Ng4, but Gelfand methodically blocks with Re4."
    }
  },
  lasker:{
   histoire:"L'Attaque Lasker-Cozio (5.De2) porte le nom d'Emanuel Lasker, champion du monde 1894-1921, et de Carlo Cozio qui l'analysa au XVIIIe siècle. Lasker l'utilisa comme outil pour jouer des finales techniques. La partie Capablanca-Kostic 1919 est considérée comme l'un des plus grands chefs-d'oeuvre de technique dans la Petroff.",
   histoire_en:"The Lasker-Cozio Attack (5.Qe2) bears the name of Emanuel Lasker, world champion 1894-1921, and Carlo Cozio who analyzed it in the 18th century. Lasker used it as a tool to play technical endgames. The Capablanca-Kostic 1919 game is considered one of the greatest technical masterpieces in the Petroff.",
   annotations:[
    {move:"5.De2",move_en:"5.Qe2",comment:"L'option la plus calme. Les Blancs proposent un échange de Dames pour assécher la position.",comment_en:"The calmest option. White proposes a queen exchange to dry out the position."},
    {move:"5...De7 6.d3",move_en:"5...Qe7 6.d3",comment:"Après 5...De7, les deux camps s'apprêtent à échanger les Dames.",comment_en:"After 5...Qe7, both sides prepare to exchange queens."},
    {move:"7.Fg5 Dxe2+",move_en:"7.Bg5 Qxe2+",comment:"Les Dames sont échangées. La partie est maintenant une finale technique.",comment_en:"The queens are exchanged. The game is now a technical endgame."},
    {move:"23.Ce4",move_en:"23.Ne4",comment:"Capablanca active son cavalier pour créer une pression continue sur la structure noire.",comment_en:"Capablanca activates his knight to create continuous pressure on Black's structure."},
    {move:"86.h6",move_en:"86.h6",comment:"Après 86 coups de technique pure, Capablanca matérialise son avantage minuscule.",comment_en:"After 86 moves of pure technique, Capablanca materializes his tiny advantage."}
   ],
    game:{
     header:"Jose Raul Capablanca - Boris Kostic, La Havane 1919 (C42 — Attaque Lasker/Cozio)",
     moves:"1. e4 e5 2. Cf3 Cf6 3. Cxe5 d6 4. Cf3 Cxe4 5. De2 De7 6. d3 Cf6 7. Fg5 Dxe2+ 8. Fxe2 Fe7 9. Cc3 Fd7 10. 0-0 0-0 11. Tfe1 Cc6 12. d4 Tfe8 13. Fb5 a6 14. Fa4 b5 15. Fb3 Ca5 16. Te3 c6 17. Tae1 Rf8 18. Ff4 Cb7 19. h3 h6 20. Fh2 Fd8 21. Txe8+ Fxe8 22. a4 c5 23. Ce4 Cxe4 24. Fd5 Ta7 25. Fxe4 Fe7 26. axb5 axb5 27. dxc5 dxc5 28. Fb8 Ta8 29. Fg3 Ta7 30. Fb8 Ta8 31. Fg3 Ta7 32. Ce5 Cd8 33. b3 Ce6 34. Fd5 Cd4 35. c3 Cf5 36. Fh2 b4 37. g4 Cd6 38. c4 Ta3 39. Te3 Cc8 40. Fb7 Ca7 41. Fd5 f6 42. Cf3 Cc6 43. Ch4 Cd4 44. Cf5 Cxf5 45. gxf5 Fd7 46. Fe4 Ta6 47. Td3 Fc6 48. Fxc6 Txc6 49. Rg2 Ta6 50. Rf3 Ta2 51. Fg3 Re8 52. Ff4 Ta6 53. Fe3 Ta1 54. Rg4 Ta7 55. Rh5 Rf7 56. Td5 Ta3 57. Td7 Re8 58. Td3 Rf7 59. h4 Ta7 60. Td5 Ta5 61. Td7 Re8 62. Td3 Rf7 63. Td5 Ta3 64. Fxc5 Fxc5 65. Txc5 Txb3 66. Tc7+ Rf8 67. Rg6 Tf3 68. Tf7+ Re8 69. Txg7 Tf4 70. h5 Txc4 71. Rxh6 Rf8 72. Tb7 Tg4 73. f3 Tg5 74. Txb4 Rf7 75. Tg4 Txf5 76. f4 Ta5 77. Tg7+ Rf8 78. Tb7 f5 79. Rg6 Ta6+ 80. Rxf5 Ta5+ 81. Rg4 Ta6 82. Rg5 Tc6 83. f5 Rg8 84. f6 Tc1 85. Tg7+ Rf8 86. h6 1-0",
     result:"1-0 — Capablanca gagne en 86 coups — démonstration magistrale de technique dans la finale Petroff.",
     result_en:"1-0 — Capablanca wins in 86 moves — masterful demonstration of technique in the Petroff endgame.",
     analysis:"Démonstration monumentale de technique ! Capablanca exploite un avantage minuscule pendant 86 coups grâce à une pression continue et un zugzwang final.",
     analysis_en:"A monumental technique demonstration! Capablanca exploits a tiny advantage for 86 moves through continuous pressure and a final zugzwang."
    }
  },
  cochrane:{
   histoire:"John Cochrane (1798-1878), avocat écossais et fort joueur amateur, découvrit ce sacrifice lors d'un séjour à Calcutta vers 1848. Le gambit est théoriquement insuffisant mais représente un danger pratique contre un adversaire non préparé.",
   histoire_en:"John Cochrane (1798-1878), a Scottish lawyer and strong amateur player, discovered this sacrifice during a stay in Calcutta around 1848. The gambit is theoretically insufficient but represents a practical danger against an unprepared opponent.",
   annotations:[
    {move:"4.Cxf7!?",move_en:"4.Nxf7!?",comment:"Le coup surprise ! Le roi noir est forcé de capturer et perd définitivement le droit au roque.",comment_en:"The surprise move! Black's king is forced to capture and permanently loses castling rights."},
    {move:"4...Rxf7",move_en:"4...Kxf7",comment:"Obligé. Après 4...Cxe4?? 5.Db5+ e6 6.Cxe4, les Blancs récupèrent la pièce avec avantage.",comment_en:"Forced. After 4...Nxe4?? 5.Qb5+ e6 6.Nxe4, White recovers the piece with advantage."},
    {move:"5...c5!",move_en:"5...c5!",comment:"La meilleure réponse des Noirs : attaquer immédiatement la base du centre blanc.",comment_en:"Black's best response: immediately attack the base of White's center."},
    {move:"7.Fxe6+ Rxe6",move_en:"7.Bxe6+ Kxe6",comment:"Le roi noir s'avance courageusement vers le centre. La position devient explosive.",comment_en:"Black's king boldly advances toward the center. The position becomes explosive."},
    {move:"31.Fxh4 Fc5+",move_en:"31.Bxh4 Bc5+",comment:"Kramnik sauve la nulle dans une finale complexe, démontrant que la pièce d'avance est suffisante.",comment_en:"Kramnik saves the draw in a complex endgame, demonstrating that the extra piece is sufficient."}
   ],
    game:{
     header:"Veselin Topalov - Vladimir Kramnik, Linares 1999 (C42 — Gambit Cochrane)",
     moves:"1. e4 e5 2. Cf3 Cf6 3. Cxe5 d6 4. Cxf7 Rxf7 5. Cc3 c5 6. Fc4+ Fe6 7. Fxe6+ Rxe6 8. d4 Rf7 9. dxc5 Cc6 10. De2 Dd7 11. Fe3 dxc5 12. f4 Te8 13. e5 Cg4 14. Td1 Df5 15. 0-0 h5 16. Fc1 Cd4 17. Dc4+ Rg6 18. h3 Ch6 19. Cb5 a6 20. Cxd4 cxd4 21. Dxd4 Tc8 22. Db6+ Rh7 23. Dxb7 Txc2 24. Fe3 Dg6 25. Tc1 Txc1 26. Txc1 Cf5 27. Ff2 h4 28. Tc7 Cg3 29. Rh2 Cf1+ 30. Rg1 Db1 31. Fxh4 Fc5+ 1/2-1/2",
     result:"1/2-1/2 — Malgré le sacrifice spectaculaire, Kramnik tient la nulle en 31 coups grâce à une technique défensive irréprochable.",
     result_en:"1/2-1/2 — Despite the spectacular sacrifice, Kramnik holds the draw in 31 moves through impeccable defensive technique.",
     analysis:"Topalov essaie d'exploiter le roi exposé noir mais Kramnik revient méthodiquement. Le dernier coup 31...Fc5+ sauve la nulle en exploitant la broche sur la diagonale.",
     analysis_en:"Topalov tries to exploit Black's exposed king but Kramnik methodically returns. The final move 31...Bc5+ saves the draw by exploiting the pin on the diagonal."
    }
  },
  steinitz:{
   histoire:"Wilhelm Steinitz (1836-1900), premier champion du monde officiel des échecs, développa cette variante comme alternative à 3.Cxe5. La variante fut modernisée dans les années 1980-90 par Anand qui en fit une arme redoutable, notamment contre Ivanchuk à Linares 1993.",
   histoire_en:"Wilhelm Steinitz (1836-1900), the first official world chess champion, developed this variation as an alternative to 3.Nxe5. The variation was modernized in the 1980s-90s by Anand, who made it a formidable weapon, notably against Ivanchuk at Linares 1993.",
   annotations:[
    {move:"3.d4",move_en:"3.d4",comment:"La caractéristique de la Steinitz : attaque centrale immédiate au lieu de 3.Cxe5.",comment_en:"The hallmark of the Steinitz: immediate central attack instead of 3.Nxe5."},
    {move:"3...Cxe4",move_en:"3...Nxe4",comment:"La réponse la plus active des Noirs, profitant du pion e4 non défendu.",comment_en:"Black's most active response, exploiting the undefended e4 pawn."},
    {move:"5.Cxe5 Cd7",move_en:"5.Nxe5 Nd7",comment:"Le cavalier noir en d7 soutient e5 et prépare ...Cxe5 ou ...Cf6. Développement solide.",comment_en:"Black's knight on d7 supports e5 and prepares ...Nxe5 or ...Nf6. Solid development."},
    {move:"10.Cc3 Fg7",move_en:"10.Nc3 Bg7",comment:"Les Noirs développent leur Fou en fianchetto pour s'opposer au centre blanc.",comment_en:"Black develops their bishop in fianchetto to oppose White's center."},
    {move:"28.Fb5",move_en:"28.Bb5",comment:"Anand finit par une variante calculée qui force la reddition des Noirs.",comment_en:"Anand finishes with a calculated variation that forces Black's surrender."}
   ],
    game:{
     header:"Viswanathan Anand - Vassily Ivanchuk, Linares 1993 (C43 — Variante Steinitz)",
     moves:"1.e4 e5 2.Cf3 Cf6 3.d4 Cxe4 4.Fd3 d5 5.Cxe5 Cd7 6.Cxd7 Fxd7 7.0-0 Dh4 8.c4 0-0-0 9.c5 g5 10.Cc3 Fg7 11.g3 Dh3 12.Cxe4 dxe4 13.Fxe4 Fb5 14.Fg2 Df5 15.Fe3 Fxf1 16.Fxf1 The8 17.Da4 Rb8 18.Td1 c6 19.Td3 De4 20.Ta3 a6 21.Fd3 Dg4 22.Tb3 Fxd4 23.Txb7+ Rxb7 24.Dxa6+ Rb8 25.Db6+ Ra8 26.Dxc6+ Rb8 27.Db6+ Ra8 28.Fb5 1-0",
     result:"1-0 — Anand exploite l'avantage d'espace de la Steinitz pour mater Ivanchuk en 28 coups. La manoeuvre finale Fb5 illustre la puissance du centre blanc transformé en attaque directe.",
     result_en:"1-0 — Anand exploits the Steinitz's space advantage to convincingly mate Ivanchuk in 28 moves. The final maneuver Bb5 illustrates the power of White's center transformed into a direct attack.",
     analysis:"Après le sacrifice de qualité (Fxf1, Txb7+), Anand crée une attaque imparable sur le roi noir coincé en a8. La variante finale 28.Fb5 menace Dc7# avec des ressources insuffisantes pour les Noirs.",
     analysis_en:"After the exchange sacrifice (Bxf1, Rxb7+), Anand creates an unstoppable attack on Black's king trapped on a8. The final variation 28.Bb5 threatens Qc7# with insufficient resources for Black."
    }
  },
  stafford:{
   histoire:"Le Gambit Stafford tire son nom du joueur américain Joseph Henry Stafford (1884-1942), qui l'analysa dans les années 1930. Il connut une renaissance explosive avec l'essor des plateformes en ligne dans les années 2020. Le youtuber d'échecs Eric Rosen le popularisa en le jouant avec succès lors du Championnat du Monde de Blitz 2024.",
   histoire_en:"The Stafford Gambit takes its name from American player Joseph Henry Stafford (1884-1942), who analyzed it in the 1930s. It experienced an explosive revival with the rise of online platforms in the 2020s. Chess YouTuber Eric Rosen popularized it by playing it successfully at the 2024 World Blitz Championship.",
   annotations:[
    {move:"3...Cc6?!",move_en:"3...Nc6?!",comment:"La déviation Stafford. Au lieu du correct 3...d6, les Noirs proposent un gambit.",comment_en:"The Stafford deviation. Instead of the correct 3...d6, Black proposes a gambit."},
    {move:"4.Cxc6 dxc6",move_en:"4.Nxc6 dxc6",comment:"Les Noirs récupèrent avec un pion doublé en c6 mais obtiennent un développement rapide.",comment_en:"Black recaptures with a doubled pawn on c6 but gains rapid development."},
    {move:"5.d3!",move_en:"5.d3!",comment:"La réfutation ! Ce coup ferme la diagonale du Fou c8 et consolide e4, étouffant l'initiative noire.",comment_en:"The refutation! This move closes the c8 bishop's diagonal and consolidates e4, stifling Black's initiative."},
    {move:"5.Cc3?!",move_en:"5.Nc3?!",comment:"L'erreur blanche classique : après 5.Cc3 Fc5 6.Fe2 h5, les Blancs sont déjà sous pression.",comment_en:"The classic White error: after 5.Nc3 Bc5 6.Be2 h5, White is already under pressure."},
    {move:"14.Dxf3 Dh1#",move_en:"14.Qxf3 Qh1#",comment:"Mat brillant ! Après 5.Cc3?!, le gambit Stafford conclut de façon implacable en 14 coups.",comment_en:"Brilliant mate! After 5.Nc3?!, the Stafford gambit concludes relentlessly in 14 moves."}
   ],
    game:{
     header:"Sergey Erenburg - Eric Rosen, World Blitz Championship, New York 2024 (C42 — Gambit Stafford)",
     moves:"1. e4 e5 2. Cf3 Cf6 3. Cxe5 Cc6 4. Cxc6 dxc6 5. Cc3 Fc5 6. Fe2 h5 7. h3 Dd4 8. 0-0 Cg4 9. hxg4 hxg4 10. g3 De5 11. Rg2 Fxf2 12. Txf2 Dh5 13. Ff3 gxf3+ 14. Dxf3 Dh1# 0-1",
     result:"0-1 — Erenburg joue 5.Cc3?! au lieu de la réfutation 5.d3!, et Rosen exécute le Stafford à la perfection : sacrifice Cg4, sacrifice Fxf2, et mat en h1 en seulement 14 coups !",
     result_en:"0-1 — Erenburg plays 5.Nc3?! instead of the refutation 5.d3!, and Rosen executes the Stafford perfectly: Ng4 sacrifice, Bxf2 sacrifice, and mate on h1 in only 14 moves!",
     analysis:"Cette partie illustre parfaitement pourquoi le Gambit Stafford est si dangereux en pratique. Avec 5.d3!, les Blancs n'auraient aucune difficulté. Mais après 5.Cc3?!, chaque coup noir est une menace. La finale 13.Ff3 gxf3+ 14.Dxf3 Dh1# est le mat classique du Stafford.",
     analysis_en:"This game perfectly illustrates why the Stafford Gambit is so dangerous in practice. With 5.d3!, White would have no difficulty. But after 5.Nc3?!, every Black move is a threat. The finale 13.Bf3 gxf3+ 14.Qxf3 Qh1# is the classic Stafford mate."
    }
  }
 },
 46:{
  trois_cavaliers:{
   histoire:"La Partie des Trois Cavaliers est une ouverture classique du XIXe siècle, issue de la famille des jeux ouverts. Elle survient lorsque les Noirs refusent la symétrie des Quatre Cavaliers, gardant la flexibilité d'un fianchetto ou d'un clouage.",
   histoire_en:"The Three Knights Game is a classical 19th-century opening from the open-game family. It arises when Black declines the Four Knights symmetry, keeping the flexibility of a fianchetto or a pin.",
   annotations:[
    {move:"3.Cc3",move_en:"3.Nc3",comment:"Les Blancs développent leur second Cavalier, contrôlant d5 et e4 et invitant les Noirs à choisir leur système.",comment_en:"White develops the second Knight, controlling d5 and e4 and inviting Black to choose a system."},
    {move:"3...g6",move_en:"3...g6",comment:"Les Noirs optent pour le fianchetto au lieu de la symétrie ...Cf6, gardant une structure flexible.",comment_en:"Black opts for the fianchetto instead of the ...Nf6 symmetry, keeping a flexible structure."},
    {move:"4.d4",move_en:"4.d4",comment:"Coup central thématique : les Blancs ouvrent le jeu pour exploiter leur léger avantage de développement.",comment_en:"Thematic central move: White opens the game to exploit a slight lead in development."}
   ],
    game:{
     header:"Shirov, A. vs Kazhgaleyev, M. &middot; 2002 &middot; Partie ouverte (C96)",
     moves:"1.e4 e5 2.Cf3 Cc6 3.Cc3 g6 4.d4 exd4 5.Cd5 Fg7 6.Fg5 Cce7 7.Cxd4 c6 8.Cc3 h6 9.Fe3 d5 10.exd5 cxd5 11.Dd2 a6 12.0-0-0 b5 13.f4 Cf6 14.Ff3 0-0 15.g4 b4 16.Ce2 a5 17.g5 hxg5 18.fxg5 Ce4 19.Fxe4 dxe4 20.h4 a4 21.h5 a3 22.b3 De8 23.hxg6 fxg6 24.Fh6 Ff5 25.Fxg7 Rxg7 26.Dh6+ Rg8 27.Dxg6+ Cxg6 1-0",
     result:"1-0 — Shirov l'emporte — attaque directe sur le roi",
     result_en:"1-0 — Shirov prevails — a direct king attack",
     analysis:"Shirov illustre la puissance de l'attaque dans les jeux ouverts : le grand roque opposé débouche sur une course de pions où les Blancs sont les plus rapides.",
     analysis_en:"Shirov illustrates the power of attack in open games: the opposite-side castling leads to a pawn race in which White is faster."
    }
  }
 },
 47:{
  damiano:{
   histoire:"La Défense Damiano fut analysée — et condamnée — par le Portugais Pedro Damiano dans son traité de 1512. C'est l'exemple canonique d'un coup qui viole les principes : 2...f6 affaiblit le roi sans aider le développement.",
   histoire_en:"The Damiano Defense was analyzed — and condemned — by the Portuguese Pedro Damiano in his 1512 treatise. It is the canonical example of a principle-violating move: 2...f6 weakens the king without aiding development.",
   annotations:[
    {move:"2...f6",move_en:"2...f6",comment:"Un coup notoirement mauvais : il affaiblit la diagonale a2-g8 et la case e6, sans développer aucune pièce.",comment_en:"A notoriously bad move: it weakens the a2-g8 diagonal and the e6 square, without developing any piece."},
    {move:"3.Cxe5!",move_en:"3.Nxe5!",comment:"Le sacrifice réfutant : après 3...fxe5 4.Dh5+ le roi noir est exposé à une attaque dévastatrice.",comment_en:"The refuting sacrifice: after 3...fxe5 4.Qh5+ the Black king is exposed to a devastating attack."},
    {move:"4.Dh5+",move_en:"4.Qh5+",comment:"L'échec décisif : 4...g6 5.Dxe5+ ou 4...Re7 5.Dxe5+ gagne du matériel et maintient l'initiative.",comment_en:"The decisive check: 4...g6 5.Qxe5+ or 4...Ke7 5.Qxe5+ wins material and keeps the initiative."}
   ],
    game:{
     header:"Szabo vs Kocsis &middot; partie par correspondance &middot; D&eacute;fense Damiano",
     moves:"1.e4 e5 2.Cf3 f6 3.Cxe5 fxe5 4.Dh5+ Re7 5.Dxe5+ Rf7 6.Fc4+ Rg6 7.Df5+ Rh6 8.d4+ g5 9.Fxg5+ Rg7 10.Df7+ Rh6 11.h4 0-1",
     result:"0-1 — illustration didactique des dangers de la Damiano",
     result_en:"0-1 — a didactic illustration of the Damiano's dangers",
     analysis:"Bien que la partie se termine sur une erreur blanche, elle illustre comment 2...f6 livre immédiatement le roi noir à une attaque. La Damiano reste une réfutation théorique de manuel.",
     analysis_en:"Although the game ends on a White blunder, it illustrates how 2...f6 immediately delivers the Black king to attack. The Damiano remains a textbook theoretical refutation."
    }
  }
 },
 48:{
  bongcloud:{
   histoire:"L'Attaque Bongcloud est née de la culture des échecs en ligne au début des années 2010. Son nom vient du pseudonyme d'un joueur, et le coup 2.Re2 est devenu un mème : Carlsen et Nakamura l'ont même joué l'un contre l'autre dans un tournoi officiel en 2021.",
   histoire_en:"The Bongcloud Attack was born from online chess culture in the early 2010s. Its name comes from a player's handle, and 2.Ke2 became a meme: Carlsen and Nakamura even played it against each other in an official 2021 tournament.",
   annotations:[
    {move:"2.Re2",move_en:"2.Ke2",comment:"Le coup-mème : les Blancs bougent volontairement leur roi, perdant le roque et bloquant Fou et Dame. Aucune valeur objective.",comment_en:"The meme move: White voluntarily moves the king, losing castling and blocking the Bishop and Queen. No objective value."},
    {move:"2...Re7",move_en:"2...Ke7",comment:"Le double Bongcloud ! Dans la partie Carlsen-Nakamura 2021, les deux joueurs ont imité la provocation par plaisanterie.",comment_en:"The double Bongcloud! In the 2021 Carlsen–Nakamura game, both players mirrored the provocation as a joke."},
    {move:"3.Cf3",move_en:"3.Nf3",comment:"Après la plaisanterie, le jeu reprend un cours normal ; la position reste à peu près équilibrée malgré tout.",comment_en:"After the joke, play resumes normally; the position remains roughly balanced despite everything."}
   ],
    game:{
     header:"Carlsen, M. vs Nakamura, H. &middot; Magnus Carlsen Invitational 2021 &middot; Attaque Bongcloud (C20)",
     moves:"1.e4 e5 2.Re2 Re7 3.Cf3 d6 4.d4 Cf6 5.dxe5 dxe5 6.Dxd8+ Rxd8 1/2-1/2",
     result:"1/2-1/2 — le c&eacute;l&egrave;bre double Bongcloud",
     result_en:"1/2-1/2 — the famous double Bongcloud",
     analysis:"Les deux meilleurs joueurs de blitz du monde se sont amusés à jouer le coup le plus absurde de la théorie. La partie fut rapidement nulle — une plaisanterie devenue légende.",
     analysis_en:"The world's two best blitz players amused themselves with the most absurd move in theory. The game was quickly drawn — a joke that became legend."
    }
  }
 },
 49:{
  barnes:{
   histoire:"La Défense Barnes porte le nom de Thomas Wilson Barnes, qui — fait remarquable — battit huit fois Paul Morphy. Le coup 1...f6 est néanmoins considéré comme la plus faible réponse à 1.e4, illustrant par l'absurde les principes d'ouverture.",
   histoire_en:"The Barnes Defense is named after Thomas Wilson Barnes, who — remarkably — beat Paul Morphy eight times. Yet the move 1...f6 is considered the weakest reply to 1.e4, illustrating opening principles by absurdity.",
   annotations:[
    {move:"1...f6",move_en:"1...f6",comment:"Le coup le plus faible contre 1.e4 : il n'aide pas le développement, affaiblit e6 et la diagonale du roi noir.",comment_en:"The weakest reply to 1.e4: it does not aid development and weakens e6 and the Black king's diagonal."},
    {move:"2.d4",move_en:"2.d4",comment:"Les Blancs s'emparent du centre sans opposition, profitant directement de la passivité du coup noir.",comment_en:"White seizes the center unopposed, directly exploiting the passivity of Black's move."},
    {move:"2...g5",move_en:"2...g5",comment:"Une aggravation fatale : après 3.Dh5#, c'est mat immédiat. Une leçon mémorable sur la sécurité du roi.",comment_en:"A fatal worsening: after 3.Qh5# it is immediate mate. A memorable lesson in king safety."}
   ],
    game:{
     header:"Waltemathe vs Schmidt &middot; 1986 &middot; D&eacute;fense Barnes",
     moves:"1.e4 f6 2.d4 g5 3.Dh5# 1-0",
     result:"1-0 — mat en trois coups : la punition de 1...f6",
     result_en:"1-0 — mate in three: the punishment of 1...f6",
     analysis:"Le « mat du fou » version Barnes : 1...f6 suivi de 2...g5?? ouvre une autoroute vers le roi noir. 3.Dh5# conclut instantanément. Exemple d'école sur l'importance de la sécurité du roi.",
     analysis_en:"A Barnes version of the fool's mate: 1...f6 followed by 2...g5?? opens a highway to the Black king. 3.Qh5# ends it instantly. A textbook example of king safety."
    }
  }
 },
 50:{
  gda:{
   histoire:"Le Gambit de la Dame Accepté est l'une des plus anciennes ouvertures, mentionnée dès le manuscrit de Göttingen au XVe siècle. Les Noirs prennent en c4 non pour garder le pion, mais pour libérer leur jeu et éviter la passivité du QGD.",
   histoire_en:"The Queen's Gambit Accepted is one of the oldest openings, mentioned as early as the 15th-century Göttingen manuscript. Black captures on c4 not to keep the pawn, but to free their game and avoid the passivity of the QGD.",
   annotations:[
    {move:"2...dxc4",move_en:"2...dxc4",comment:"Les Noirs acceptent le gambit : ils rendront le pion mais obtiennent un développement aisé et un Fou c8 actif.",comment_en:"Black accepts the gambit: they will return the pawn but obtain easy development and an active c8-Bishop."},
    {move:"3.Cf3",move_en:"3.Nf3",comment:"Empêche ...e5 et prépare e3 pour reprendre tranquillement en c4. Les Blancs ne se précipitent pas.",comment_en:"Prevents ...e5 and prepares e3 to recapture on c4 calmly. White is in no hurry."},
    {move:"3...Cf6",move_en:"3...Nf6",comment:"Développement naturel ; les Noirs visent ...c5 pour frapper le centre et égaliser.",comment_en:"Natural development; Black aims for ...c5 to strike the center and equalize."}
   ],
    game:{
     header:"Kasparov, G. vs Anand, V. &middot; 1995 &middot; Gambit de la Dame Accept&eacute; (C80)",
     moves:"1.d4 d5 2.c4 dxc4 3.Cf3 Cf6 4.e3 e6 5.Fxc4 c5 6.0-0 a6 7.Fb3 cxd4 8.exd4 Cc6 9.Cc3 Fe7 10.Te1 0-0 11.Ff4 Ca5 12.d5 Cxb3 13.Dxb3 exd5 14.Cxd5 Cxd5 15.Dxd5 Dxd5 16.Cxd5 Fd6 17.Fxd6 1-0",
     result:"1-0 — Kasparov exploite le pion dame isol&eacute;",
     result_en:"1-0 — Kasparov exploits the isolated queen's pawn",
     analysis:"Kasparov démontre la stratégie classique du QGA : après l'échange en d4, le pion dame isolé devient une force dynamique. La poussée 12.d5! libère l'initiative blanche.",
     analysis_en:"Kasparov demonstrates the classic QGA strategy: after the exchange on d4, the isolated queen's pawn becomes a dynamic force. The push 12.d5! unleashes White's initiative."
    }
  }
 },
 51:{
  tchigorine:{
   histoire:"La Défense Tchigorine est l'œuvre du grand maître russe Mikhaïl Tchigorine (1850-1908), pionnier de l'école romantique. Contre toutes les conventions positionnelles de son époque, il développait les pièces avant les pions, misant sur l'activité.",
   histoire_en:"The Chigorin Defense is the work of Russian grandmaster Mikhail Chigorin (1850–1908), a pioneer of the romantic school. Against all positional conventions of his time, he developed pieces before pawns, betting on activity.",
   annotations:[
    {move:"2...Cc6",move_en:"2...Nc6",comment:"Le coup signature de Tchigorine : un Cavalier qui bloque le pion c mais exerce une pression immédiate sur d4.",comment_en:"Chigorin's signature move: a Knight that blocks the c-pawn but pressures d4 immediately."},
    {move:"3.Cc3",move_en:"3.Nc3",comment:"Les Blancs renforcent le centre ; après 3...dxc4 4.d5 le jeu devient déséquilibré et tactique.",comment_en:"White reinforces the center; after 3...dxc4 4.d5 the game becomes unbalanced and tactical."},
    {move:"3...Fg4",move_en:"3...Bg4",comment:"Idée typique : clouer le Cf3 pour augmenter la pression sur d4 et compenser la structure irrégulière.",comment_en:"A typical idea: pin the Nf3 to increase pressure on d4 and compensate for the irregular structure."}
   ],
    game:{
     header:"Tarrasch, S. vs Tchigorine, M. &middot; Hastings 1895 &middot; D&eacute;fense Tchigorine",
     moves:"1.d4 d5 2.c4 Cc6 3.Cc3 dxc4 4.Cf3 Cf6 5.e4 Fg4 6.Fxc4 e6 7.Fe3 Fb4 8.Dc2 Fxf3 9.gxf3 Dd7 10.a3 Fxc3+ 11.bxc3 0-0-0 12.f4 Ca5 13.Fe2 b6 14.0-0 Rb7 15.Tab1 Ce8 16.f5 exf5 17.exf5 Cd6 18.f6 g6 19.Tfd1 Thg8 20.Ff3 Tge8 21.Fg5 De6 0-1",
     result:"0-1 — Tchigorine triomphe de la th&eacute;orie positionnelle de Tarrasch",
     result_en:"0-1 — Chigorin triumphs over Tarrasch's positional theory",
     analysis:"Le duel emblématique entre Tchigorine le romantique et Tarrasch le dogmatique. Tchigorine prouve que l'activité des pièces peut surpasser une structure de pions saine.",
     analysis_en:"The iconic duel between Chigorin the romantic and Tarrasch the dogmatist. Chigorin proves that piece activity can overcome a sound pawn structure."
    }
  }
 },
 52:{
  sokolski:{
   histoire:"L'Ouverture Sokolski (1.b4) doit son surnom « Orang-Outan » à Savielly Tartakower : lors du tournoi de New York 1924, il consulta un orang-outan du zoo du Bronx avant de jouer ce coup. Le maître soviétique Alexeï Sokolski en fit ensuite une analyse systématique.",
   histoire_en:"The Sokolski Opening (1.b4) owes its 'Orangutan' nickname to Savielly Tartakower: during the 1924 New York tournament, he consulted an orangutan at the Bronx zoo before playing the move. Soviet master Alexei Sokolski later systematized its analysis.",
   annotations:[
    {move:"1.b4",move_en:"1.b4",comment:"Gain d'espace immédiat à l'aile dame et préparation du fianchetto Fb2 ; une ouverture hors des sentiers battus.",comment_en:"Immediate queenside space and preparation of the Bb2 fianchetto; an off-the-beaten-path opening."},
    {move:"2.Fb2",move_en:"2.Bb2",comment:"Le Fou prend la grande diagonale et vise e5 et g7 ; c'est le cœur de l'idée Sokolski.",comment_en:"The Bishop takes the long diagonal, eyeing e5 and g7; this is the heart of the Sokolski idea."},
    {move:"2...f6",move_en:"2...f6",comment:"Soutient e5 et empêche Fxe5 ; les Noirs neutralisent la pression sur la grande diagonale.",comment_en:"Supports e5 and prevents Bxe5; Black neutralizes the long-diagonal pressure."}
   ],
    game:{
     header:"Sokolski vs adversaire &middot; Ouverture Sokolski (Orang-Outan) (A00)",
     moves:"1.b4 e5 2.Fb2 f6 3.e4 Fxb4 4.Fc4 Cc6 5.f4 Df8 6.Cf3 d6 7.fxe5 dxe5 8.0-0 Ce7 9.c3 Fa5 10.d4 exd4 11.cxd4 Fb6 12.Cc3 c6 13.e5 fxe5 14.dxe5 1-0",
     result:"1-0 — la pression du Fou b2 finit par d&eacute;cider",
     result_en:"1-0 — the b2-Bishop's pressure finally decides",
     analysis:"Sokolski montre le potentiel offensif de son ouverture : le fianchetto b2 combiné aux poussées f4 et e5 ouvre des lignes vers le roi noir. Une arme de surprise efficace.",
     analysis_en:"Sokolski shows the offensive potential of his opening: the b2 fianchetto combined with f4 and e5 opens lines toward the Black king. An effective surprise weapon."
    }
  }
 },
 53:{
  grob:{
   histoire:"L'Attaque Grob (1.g4) porte le nom du maître international suisse Henri Grob (1904-1974), qui la défendit avec acharnement dans des milliers de parties par correspondance. Objectivement douteuse, elle reste une arme de surprise piégeuse.",
   histoire_en:"The Grob Attack (1.g4) is named after Swiss international master Henri Grob (1904–1974), who championed it fiercely in thousands of correspondence games. Objectively dubious, it remains a tricky surprise weapon.",
   annotations:[
    {move:"1.g4",move_en:"1.g4",comment:"Le coup le plus provocant des débuts : il affaiblit le roque mais prépare le fianchetto Fg2 visant b7 et d5.",comment_en:"The most provocative first move: it weakens the kingside but prepares the Bg2 fianchetto eyeing b7 and d5."},
    {move:"2.Fg2",move_en:"2.Bg2",comment:"Le Fou prend la grande diagonale ; toute la justification du Grob repose sur la pression contre b7.",comment_en:"The Bishop takes the long diagonal; the whole point of the Grob rests on pressure against b7."},
    {move:"2...Fxg4",move_en:"2...Bxg4",comment:"Tentant mais risqué : après 3.c4! les Blancs frappent d5 et ouvrent des lignes pour le contre-jeu.",comment_en:"Tempting but risky: after 3.c4! White hits d5 and opens lines for counterplay."}
   ],
    game:{
     header:"Grob, H. vs adversaire &middot; partie par correspondance &middot; Attaque Grob (A00)",
     moves:"1.g4 d5 2.Fg2 Fxg4 3.c4 c6 4.Db3 Db6 5.Dxb6 axb6 6.cxd5 cxd5 7.Fxd5 Cf6 8.Fxb7 Txa2 9.Txa2 Cc6 10.Cc3 e5 11.d3 Fc5 12.Cf3 0-0 13.Cxe5 Cxe5 14.Fxe5 1-0",
     result:"1-0 — le Grob montre ses crocs",
     result_en:"1-0 — the Grob shows its teeth",
     analysis:"Grob illustre les pièges de son ouverture : la prise 2...Fxg4 est punie par 3.c4!, et le Fou g2 récolte le pion b7. Une ouverture qui ne pardonne pas l'avidité adverse.",
     analysis_en:"Grob illustrates the traps of his opening: the capture 2...Bxg4 is punished by 3.c4!, and the g2-Bishop harvests the b7 pawn. An opening that does not forgive an opponent's greed."
    }
  }
 }

};

/* Fusion des enrichissements dans le DB */
(function() {
  for (var chapId in ENRICH) {
    if (!DB[chapId]) continue;
    for (var varKey in ENRICH[chapId]) {
      if (!DB[chapId][varKey]) continue;
      var e = ENRICH[chapId][varKey];
      if (e.histoire) DB[chapId][varKey].histoire = e.histoire;
      if (e.histoire_en) DB[chapId][varKey].histoire_en = e.histoire_en;
      if (e.annotations) DB[chapId][varKey].annotations = e.annotations;
      if (e.game) DB[chapId][varKey].game = e.game;
    }
  }
})();
