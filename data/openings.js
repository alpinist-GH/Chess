/* ══════════════════════════════════════════════
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
    },
    petrov: {
      line:"1.e4 e5 2.Cf3 Cf6 3.Cxe5 d6 4.Cf3 Cxe4 5.d4 d5",
      fondement:"La Défense Petrov (1.e4 e5 2.Cf3 Cf6) cherche à forcer la nulle par une symétrie parfaite.",
      fondement_en:"The Petrov Defense (1.e4 e5 2.Nf3 Nf6) seeks to force a draw through perfect symmetry.",
      avantages:"Très solide, mène à une égalité presque assurée avec un jeu correct.",
      avantages_en:"Very solid, leads to near-certain equality with correct play.",
      inconvenients:"Joue ouvertement pour la nulle. Position symétrique restrictive.",
      inconvenients_en:"Openly plays for a draw. Restrictive symmetric position.",
      blancs:"Manœuvrer avec une extrême finesse positionnelle pour conserver une infime initiative.",
      blancs_en:"Maneuver with extreme positional finesse to retain the slightest initiative.",
      noirs:"Échanger méthodiquement les pièces actives au centre et liquider la position.",
      noirs_en:"Methodically exchange the active central pieces and liquidate the position.",
      cases:"e4, d5 (cases fortes de centralisation des Cavaliers).",
      cases_en:"e4, d5 (strong central Knight squares).",
      finale:"L'objectif ultime : atteindre une finale plate et égale pour sécuriser un score.",
      finale_en:"The ultimate goal: reach a flat, equal endgame to secure a score.",
      stats:"Pilier historique des matchs de Championnat du Monde.",
      stats_en:"Historic pillar of World Championship matches.",
      piege:"L'ouverture exige une précision absolue : la moindre faille brise la forteresse.",
      piege_en:"The opening demands absolute precision: the slightest flaw breaks the fortress.",
      moves:[{from:"e2",to:"e4"},{from:"e7",to:"e5"},{from:"g1",to:"f3"},{from:"g8",to:"f6"},{from:"f3",to:"e5"},{from:"d7",to:"d6"},{from:"e5",to:"f3"},{from:"f6",to:"e4"},{from:"d2",to:"d4"},{from:"d6",to:"d5"}]
    }
  },
  5: {
    najdorf: {
      line:"1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 a6 6.Fe3 e5",
      fondement:"Le coup prophylactique 5...a6 empêche Fb5+ et prépare l'expansion ...b5. C'est l'arme reine de la Sicilienne.",
      fondement_en:"The prophylactic 5...a6 prevents Bb5+ and prepares ...b5 expansion. It is the queen weapon of the Sicilian.",
      avantages:"Contre-jeu maximal, flexibilité absolue pour les Noirs. Très combative.",
      avantages_en:"Maximum counterplay, absolute flexibility for Black. Very combative.",
      inconvenients:"Exige une connaissance théorique monstrueuse — la moindre imprécision est punitive.",
      inconvenients_en:"Requires monstrous theoretical knowledge — the slightest imprecision is punished.",
      blancs:"Déployer l'Attaque Anglaise (6.Fe3 + f3-g4-g5) pour raser le roque noir.",
      blancs_en:"Deploy the English Attack (6.Be3 + f3-g4-g5) to storm the Black kingside.",
      noirs:"Exploiter la colonne c ouverte, installer un Cavalier fort sur c4 et percer par ...d5.",
      noirs_en:"Counter-attack on the queenside with ...b5-b4 while the kings castle on opposite wings.",
      cases:"d5, c4.",
      cases_en:"d5 (Black Knight outpost), f7 (White's attack target), b5 (Black's expansion).",
      finale:"La structure compacte offre de grandes chances de gain si l'attaque blanche échoue.",
      finale_en:"Endgames are rare — the game is usually decided in the middlegame.",
      stats:"Ligne la plus jouée par Kasparov et l'élite mondiale contre 1.e4.",
      stats_en:"Volume: ~14M (Lichess) · Rate: White 36% | Draw 30% | Black 34%.",
      piege:"Le Pion Empoisonné : 6.Fg5 e6 7.f4 Db6 8.Dd2 Dxb2?? mène à 9.Tb1 Da3.",
      piege_en:"After 6.Bg5, playing 6...e6 7.f4 Be7 8.Qf3 Qc7?? 9.e5! destroys Black's position.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"a7",to:"a6"}]
    },
    dragon: {
      line:"1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 g6 6.Fe3 Fg7",
      fondement:"Le Fou g7 (le Dragon) domine toute la grande diagonale noire. Les Blancs répliquent par l'Attaque Yougoslave.",
      fondement_en:"The Dragon's key idea is the powerful fianchettoed Bishop on g7, dominating the long diagonal. The Yugoslav Attack (9.0-0-0) leads to extreme complications with opposite castling.",
      avantages:"Jeu ultra-tactique à double tranchant. Course de vitesse pure à roques opposés.",
      avantages_en:"Maximum dynamic counterplay on the queenside. The Dragon Bishop is a fearsome weapon.",
      inconvenients:"La moindre perte de tempo conduit directement à un mat rapide.",
      inconvenients_en:"The Yugoslav Attack is a theoretical mine. One wrong move and the game is over.",
      blancs:"Pousser h4-h5, échanger le Fou dragon par Fh6 et mater sur les cases sombres de l'aile roi.",
      blancs_en:"Storm the kingside with h4-h5-h6, using the Rook lift Ra1-d1-d3-h3.",
      noirs:"Placer la Tour en c8, pousser ...b5-b4 pour déloger Cc3 et attaquer le roque blanc.",
      noirs_en:"Counter-attack on the queenside with ...Rc8, ...Nc4, ...b5-b4, and use the Dragon Bishop.",
      cases:"Blancs : h6, g7. Noirs : c4, a2.",
      cases_en:"g7 (Dragon Bishop), h6 (White's mating target), c3 (Black's Knight outpost).",
      finale:"Inexistantes dans le Dragon : le milieu de jeu tranche la partie par K.O. tactique.",
      finale_en:"Rare endgames — both sides play for mate in the middlegame.",
      stats:"Ligne l'une des plus spectaculaires de la théorie des échecs.",
      stats_en:"One of the sharpest openings in all of chess theory.",
      piege:"La destruction du Dragon : Fg5xf6! élimine le Cavalier protecteur si les Noirs omettent ...h6.",
      piege_en:"In the Yugoslav Attack, any tempo loss on the queenside can allow White to crash through on h6 first.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"d7",to:"d6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g8",to:"f6"},{from:"b1",to:"c3"},{from:"g7",to:"g6"}]
    },
    maroczy: {
      line:"1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 g6 5.c4",
      fondement:"L'Étau de Maroczy installe un blocus positionnel via c4 et e4, empêchant les Noirs de réaliser les poussées libératrices.",
      fondement_en:"The Maroczy Bind (5.c4) creates a spatial bind. White's pawns on c4 and e4 control d5, severely limiting Black's counterplay.",
      avantages:"Avantage d'espace durable, contrôle total du centre pour les Blancs.",
      avantages_en:"Long-term spatial advantage for White. Black is constricted.",
      inconvenients:"Jeu plus lent, exige une grande patience manœuvrière.",
      inconvenients_en:"White's central pawns can become targets in the endgame.",
      blancs:"Maintenir l'étau c4-e4 intact et empêcher absolument ...d5 ou ...b5.",
      blancs_en:"Slowly improve the pieces, keep the bind, and exploit the space advantage.",
      noirs:"Manœuvrer avec patience et utiliser le Fou g7 pour presser de loin.",
      noirs_en:"Seek piece activity to compensate for lack of space. The ...d5 break is the goal.",
      cases:"d5, b5 (cases de blocus blanches).",
      cases_en:"d5 (Black's forbidden square), e4/c4 (White's bind pawns).",
      finale:"L'avantage d'espace se transpose en gain technique en fin de partie.",
      finale_en:"Endgames generally favor White thanks to the spatial control.",
      stats:"Structure positionnelle classique de premier ordre.",
      stats_en:"Strategic anti-Dragon weapon at all levels.",
      piege:"Éviter les échanges passifs qui renforcent le blocus des Blancs.",
      piege_en:"Black must avoid passive defense — active piece play is mandatory to survive.",
      moves:[{from:"e2",to:"e4"},{from:"c7",to:"c5"},{from:"g1",to:"f3"},{from:"b8",to:"c6"},{from:"d2",to:"d4"},{from:"c5",to:"d4"},{from:"f3",to:"d4"},{from:"g7",to:"g6"},{from:"c2",to:"c4"}]
    }
  },
  6: {
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
    }
  },
  7: {
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
    }
  },
  8: {
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
    },
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
    },
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
  },
  9: {
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
    }
  },
  10: {
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
  11: {
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
  12: {
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
  13: {
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
  14: {
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
  15: {
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
  16: {
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
  17: {
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
  18: {
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
  19: {
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
  20: {
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
  21: {
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
  22: {
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
  23: {
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
  24: {
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
  25: {
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
  26: {
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
  27: {
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
  28: {
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
  29: {
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
  30: {
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
  31: {
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
  32: {
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
    }
  },
  33: {
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
  34: {
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
  35: {
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
  36: {
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
  37: {
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
  38: {
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
  39: {
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
  40: {
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
  41: {
    anglaise: {
      line:"1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5 5.Fg2",
      fondement:"L'Ouverture Anglaise (1.c4) fut popularisée par Howard Staunton. Elle représente une approche hypermoderne — les Blancs contrôlent le centre à distance. La Sicilienne Renversée est la variante principale.",
      fondement_en:"The English Opening (1.c4) was popularized by Howard Staunton. It represents a hypermodern approach — White controls the center from a distance. The Reversed Sicilian is the main variation.",
      avantages:"Hypermoderne et flexible. Nombreuses transpositions vers le GD, les Indiennes, etc.",
      avantages_en:"Hypermodern and flexible. Many transpositions to the QG, Indians, etc.",
      inconvenients:"Théorie indépendante néanmoins volumineuse. Moins direct que 1.e4 ou 1.d4.",
      inconvenients_en:"Nevertheless has extensive independent theory. Less direct than 1.e4 or 1.d4.",
      blancs:"Contrôler d5 à distance. La Sicilienne Renversée donne un tempo supplémentaire.",
      blancs_en:"Control d5 from a distance. The Reversed Sicilian gives an extra tempo.",
      noirs:"Contester avec ...e5 (Sicilienne Renversée) ou ...d5 (Défense Symétrique).",
      noirs_en:"Contest with ...e5 (Reversed Sicilian) or ...d5 (Symmetric Defense).",
      cases:"d5, e4 (cases centrales sous pression), c4 (pion actif blanc).",
      cases_en:"d5, e4 (central squares under pressure), c4 (White's active pawn).",
      finale:"Finales riches et complexes selon la variante choisie.",
      finale_en:"Rich and complex endgames depending on the chosen variation.",
      stats:"Très populaire au niveau master. Kasparov la jouait souvent pour éviter la théorie.",
      stats_en:"Very popular at master level. Kasparov often played it to avoid theory.",
      piege:"La Défense Agincourt (1...e6 2.Cc3 d5 3.d4) transpose vers le Gambit Dame.",
      piege_en:"The Agincourt Defense (1...e6 2.Nc3 d5 3.d4) transposes to the Queen's Gambit.",
      moves:[{from:"c2",to:"c4"},{from:"e7",to:"e5"},{from:"b1",to:"c3"},{from:"g8",to:"f6"},{from:"g2",to:"g3"},{from:"d7",to:"d5"},{from:"c4",to:"d5"},{from:"f6",to:"d5"},{from:"f1",to:"g2"}]
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
 46:{
  reversed:{
   histoire:"L'Ouverture Anglaise (1.c4) fut popularisée par Howard Staunton lors de son match contre Saint-Amant en 1843. Elle représente une approche hypermoderne — les Blancs contrôlent le centre à distance.",
      histoire_en:"The English Opening (1.c4) was first used systematically by Howard Staunton in the 19th century. The Reversed Sicilian arises when White plays as Black would in the Sicilian, but with an extra tempo. It leads to rich strategic battles.",
      histoire_en:"The English Opening (1.c4) was first used systematically by Howard Staunton in the 19th century. The Reversed Sicilian arises when White plays as Black would in the Sicilian, but with an extra tempo. It leads to rich strategic battles.",
   annotations:[
    {move:"1.c4",move_en:"1.c4",comment:"L'Anglaise — les Blancs contrôlent d5 sans pousser e4. Une approche flexible qui peut transposer vers de nombreuses ouvertures.",comment_en:"The English — White controls d5 without pushing e4. A flexible approach."},
    {move:"1...e5",move_en:"1...e5",comment:"La Sicilienne Renversée — structure sicilienne mais les couleurs sont inversées ET les Blancs ont un tempo de plus !",comment_en:"The Reversed Sicilian — Sicilian structure but colors are reversed, giving White an extra tempo."},
    {move:"2.Cc3 Cf6",move_en:"2.Nc3 Nf6",comment:"Développement naturel de part et d'autre. Les deux camps développent leurs pièces vers le centre.",comment_en:"Normal development — both sides develop their Knights before committing the center."},
    {move:"3.g3",move_en:"3.g3 d5",comment:"Le fianchetto — le Fou g2 va dominer la grande diagonale et exercer une pression durable sur le centre.",comment_en:"Black challenges White's setup with ...d5, aiming for central equality."},
    {move:"5.Fg2",move_en:"5.Bg2",comment:"Le Fou g2 est la pièce maîtresse de l'Anglaise Fianchetto. Van der Sterren écrit qu'il 'domine souvent toute la finale'.",comment_en:"The Bg2 is the key piece of the fianchetto English. Van der Sterren called it 'White's most powerful weapon.'"}
   ],
     game:{
      header:"Kasparov, G. vs Karpov, A. &middot; Ch. du Monde 1987 (Séville), Partie 24 &middot; Anglaise — Défense Agincourt (A13)",
      moves:"1. c4 e6 2. Cf3 Cf6 3. g3 d5 4. b3 Fe7 5. Fg2 0-0 6. 0-0 b6 7. Fb2 Fb7 8. e3 Cbd7 9. Cc3 Ce4 10. Ce2 a5 11. d3 Ff6 12. Dc2 Fxb2 13. Dxb2 Cd6 14. cxd5 Fxd5 15. d4 c5 16. Tfd1 Tc8 17. Cf4 Fxf3 18. Fxf3 De7 19. Tac1 Tfd8 20. dxc5 Cxc5 21. b4 axb4 22. Dxb4 Da7 23. a3 Cf5 24. Tb1 Txd1+ 25. Txd1 Dc7 26. Cd3 h6 27. Tc1 Ce7 28. Db5 Cf5 29. a4 Cd6 30. Db1 Da7 31. Ce5 <span class='key-move'>Cxa4!</span> 32. Txc8+ Cxc8 33. Dd1 Ce7 34. Dd8+ Rh7 35. Cxf7 Cg6 36. De8 De7 37. Dxa4 Dxf7 38. Fe4 Rg8 39. Db5 Cf8 40. Dxb6 Df6 41. Db5 De7 42. Rg2 g6 43. Da5 Dg7 44. Dc5 Df7 45. h4 h5 46. Dc6 De7 47. Fd3 Df7 48. Dd6 Rg7 49. e4 Rg8 50. Fc4 Rg7 51. De5+ Rg8 52. Dd6 Rg7 53. Fb5 Rg8 54. Fc6 Da7 55. Db4 Dc7 56. Db7 Dd8 57. e5 Da5 58. Fe8 Dc5 59. Df7+ Rh8 60. Fa4 Dd5+ 61. Rh2 Dc5 62. Fb3 Dc8 63. Fd1 Dc5 64. Rg2 1-0",
      result:"1-0 — Kasparov gagne en 64 coups — il sauve son titre mondial!",
      analysis:"La partie la plus dramatique de l'histoire des Championnats du Monde ! Kasparov doit impérativement gagner cette dernière partie pour conserver son titre — il est mené 12&frac12;–11&frac12;. Il choisit 1.c4, l'Anglaise, pour éviter la préparation de Karpov. Le sacrifice 31.Ce5 Cxa4! crée une complication explosive. Après la simplification, Kasparov exploite méthodiquement sa majorité de pions à l'aile roi en finale — 60 coups d'une technique irréprochable. Le mat final n'a pas lieu : Karpov abandonne en Zeitnot au 64e coup.",
       result_en:"1-0 — Kasparov wins with the Reversed Sicilian",
       analysis_en:"Kasparov demonstrates the Reversed Sicilian's attacking potential. After 2.Nc3 Nf6 3.g3 d5 4.cxd5 Nxd5 5.Bg2, White's fianchettoed Bishop proves dominant. The central break d4! at the right moment gives White a decisive advantage."
     }
  },
  symmetric:{
   histoire:"L'Anglaise Symétrique (1...c5) est la réponse la plus directe à 1.c4 : les Noirs copient la stratégie blanche pour neutraliser l'espace. Cette approche symétrique est philosophiquement fascinante — qui va rompre la symétrie en premier, et comment ? Les grands maîtres ont analysé cette question pendant des décennies.",
      histoire_en:"The Symmetrical English (1.c4 c5) arises when Black mirrors White's first move. It leads to rich strategic battles around the d5 square. Kasparov used it in his 1987 World Championship match against Karpov in the famous 'Crisis in Seville' game.",
      histoire_en:"The Symmetrical English (1.c4 c5) arises when Black mirrors White's first move. It leads to rich strategic battles around the d5 square. Kasparov used it in his 1987 World Championship match against Karpov in the famous 'Crisis in Seville' game.",
   annotations:[
    {move:"1...c5",move_en:"1...c5",comment:"La Symétrique ! Les Noirs copient exactement le coup blanc. Qui va rompre la symétrie — et comment — déterminera toute la partie.",comment_en:"The Symmetrical! Black copies White's move exactly. Who will break the symmetry first?"},
    {move:"2.Cc3 Cc6",move_en:"2.Nc3 Nc6",comment:"Développement symétrique — les deux camps ont exactement la même structure.",comment_en:"Both sides develop their Knights — the symmetry continues."},
    {move:"3.g3 g6",move_en:"3.g3 g6",comment:"Fianchetto symétrique — les deux Fous se regardent sur les grandes diagonales.",comment_en:"Both sides fianchetto — a rich strategic battle around d5 is coming."},
    {move:"4.Fg2 Fg7",move_en:"4.Bg2 Bg7",comment:"Les Fous se font face sur les grandes diagonales — la tension entre eux durera toute la partie.",comment_en:"Both Dragons face off — the battle for d5 will decide the game."},
    {move:"5.Cf3",move_en:"5.Nf3 Qb6",comment:"Les Blancs développent leur Cavalier — ils ont toujours le 'tempo extra' par rapport aux Noirs.",comment_en:"The Queen attacks b2 and d4 simultaneously — White must defend carefully."}
   ],
   game:{
    header:"Kasparov, G. vs Timman, J. &middot; Tilburg 1991 &middot; Anglaise Symétrique — Système Botvinnik",
    moves:"1. c4 c5 2. Cc3 Cf6 3. g3 d5 4. cxd5 Cxd5 5. Fg2 Cc7 6. Cf3 e5 7. 0-0 Fe7 8. d3 0-0 9. a3 Cc6 10. Fe3 Fd6 11. Dd2 Fe6 12. Tfd1 f6 13. Tac1 Tb8 14. Ce4 Fd5 15. Ceg5 fxg5 16. <span class='key-move'>Cxe5!</span> Cxe5 17. Fxd5+ Ch8 18. Fxc7 Dxc7 19. Fxb7 Txb7 20. Tce1 Cd7 21. Txe5 Dd6 22. Tce1 Fxg2 23. Rxg2 Tf2+ 24. Txf2 De6+ 25. Rf3 Txb2 26. Te8+ Txe8 27. Txe8+ Cf7 28. Dd8 g4+ 29. Rxg4 h5+ 30. Rxh5 g6+ 31. Rxg6 <span class='key-move'>Df6+</span> 32. Rxf6 1-0",
    result:"1-0 — Kasparov gagne en 32 coups — sacrifice brillant Cxe5!",
    analysis:"Kasparov illustre comment briser la symétrie dans l'Anglaise : le sacrifice 16.Cxe5! est le pivot de la partie. Les Blancs récupèrent matière avec intérêts grâce à la Tour dominante en e8. Après l'échange des Tours, l'attaque finale (31...Df6+!) est un coup magnifique — Timman ne peut éviter le mat ou la perte de la Dame.",
       result_en:"1/2-1/2 — Draw — Crisis in Seville — 1987 World Championship",
       analysis_en:"The historic 'Crisis in Seville' from the 1987 World Championship. In this decisive game 24, Karpov needs only a draw to win the title. The Symmetrical English leads to rich strategic complications. Kasparov finds the spectacular move 24.Nxd6! to keep winning chances — but Karpov defends brilliantly to secure the draw."
   }
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
     header:"Kasparov, G. vs Karpov, A. &middot; Ch. du Monde 1986 (Londres), Partie 16 &middot; Ruy Lopez Fermée Flohr-Zaitsev",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fb5 a6 4. Fa4 Cf6 5. 0-0 Fe7 6. Te1 b5 7. Fb3 d6 8. c3 0-0 9. h3 Fb7 10. d4 Te8 11. Cbd2 Ff8 12. a4 h6 13. Fc2 exd4 14. cxd4 Cb4 15. Fb1 c5 16. d5 Cd7 17. Ta3 c4 18. Cd4 Df6 19. C2f3 Cc5 20. axb5 axb5 21. Cxb5 Txa3 22. Cxa3 Fa6 23. Te3 Tb8 24. e5 dxe5 25. Cxe5 Cbd3 26. Cg4 Db6 27. Tg3 g6 28. Fxh6 Dxb2 29. Df3 Cd7 30. Fxf8 Rxf8 31. Rh2 Tb3 32. Fxd3 cxd3 33. Df4 Dxa3 34. Ch6 De7 35. Txg6 De5 36. Tg8+ Re7 37. d6+ Re6 38. Te8+ Rd5 39. Txe5+ Cxe5 40. d7 Tb8 41. Cxf7 1-0",
     result:"1-0 — Kasparov gagne en 41 coups",
     analysis:"Chef-d'œuvre combinatoire ! Le sacrifice 21.Cxb5! cède l'Échange pour une attaque de mat irrésistible. Après 35.Txg6! Karpov ne peut éviter la perte de la Dame ou le mat. Le coup 39.Txe5+! conclut brillamment — en 41 coups, Kasparov illustre la puissance de la Fermée Flohr-Zaitsev.",
       result_en:"1-0 — Kasparov wins in 41 moves — masterpiece in the Closed Spanish",
       analysis_en:"A masterpiece of the Closed Variation. Kasparov builds up slowly with 11.Nbd2, then launches the queenside attack 20.axb5. The Knight maneuver 25.Nxe5! Nbd3 26.Ng4! traps the Queen. After 36.Rg8+, the dual threat of 37.d6+ and 38.Re8+ forces resignation. A model game in the Chigorin."
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
     header:"Karpov, A. vs Korchnoi, V. &middot; Ch. du Monde 1978 (Baguio), Partie 14 &middot; Ruy Lopez Variante Ouverte — Dilworth (C82)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fb5 a6 4. Fa4 Cf6 5. 0-0 Cxe4 6. d4 b5 7. Fb3 d5 8. dxe5 Fe6 9. c3 Fc5 10. Cbd2 0-0 11. Fc2 Ff5 12. Cb3 Fg4 13. h3 Fh5 14. g4 Fg6 15. Fxe4 dxe4 16. Cxc5 exf3 17. Ff4 Dxd1 18. Taxd1 Cd8 19. Td7 Ce6 20. Cxe6 fxe6 21. Fe3 Tac8 22. Tfd1 Fe4 23. Fc5 Tfe8 24. T7d4 Fd5 25. b3 a5 26. Rh2 Ta8 27. Rg3 Ta6 28. h4 Tc6 29. <span class='key-move'>Txd5!</span> exd5 30. Txd5 Tce6 31. Fd4 c6 32. Tc5 Tf8 33. a4 bxa4 34. bxa4 g6 35. Txa5 Tee8 36. Ta7 Tf7 37. Ta6 Tc7 38. Fc5 Tcc8 39. Fd6 Ta8 40. Txc6 Txa4 41. Rxf3 h5 42. gxh5 gxh5 43. c4 Ta7 44. Tb6 Rf7 45. c5 Ta4 46. c6 Re6 47. c7 Rd7 48. Tb8 Tc8 49. Re3 Txh4 50. <span class='key-move'>e6+</span> 1-0",
     result:"1-0 — Karpov gagne en 50 coups — sacrifice de Tour 29.Txd5!",
     analysis:"Partie décisive du match Baguio 1978 : Karpov inflige à Korchnoi sa 4e défaite. Dans la Variante Dilworth, les Noirs ont sacrifié un Cavalier en 11...Cxf2 pour obtenir des complications — mais ici Karpov joue 11.Fc2 Ff5 évitant la Dilworth pure, restant en terrain positionnel. Le sacrifice d'échange 29.Txd5! est le coup décisif : Karpov sacrifie la qualité pour un pion passé dévastateur. La finale avec la Tour contre Fou est techniquement parfaite — illustration de la précision positionnel de Karpov au sommet de son art.",
       result_en:"1-0 — Karpov wins in 50 moves — endgame mastery",
       analysis_en:"Karpov demonstrates supreme endgame technique in the Open Variation (Dilworth). The Knight sacrifice 11...Nxf2! (Dilworth) gives Black serious complications, but Karpov navigates them all. After the exchange sacrifice 24.R7d4!, White's passed pawns are decisive. A technical masterpiece by the positional genius."
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
     header:"Lasker, E. vs Capablanca, J.R. &middot; Saint-Pétersbourg 1914 &middot; Ruy Lopez Variante de l'Échange (C68)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fb5 a6 4. Fxc6 dxc6 5. d4 exd4 6. Dxd4 Dxd4 7. Cxd4 Fd6 8. Cc3 Ce7 9. 0-0 0-0 10. f4 Te8 11. Cb3 f6 12. f5 b6 13. Ff4 Fb7 14. Fxd6 cxd6 15. Cd4 Tad8 16. Ce6 Td7 17. Tad1 Cc8 18. Tf2 b5 19. Tfd2 Tde7 20. b4 Rf7 21. a3 Fa8 22. Rf2 Ta7 23. g4 h6 24. Td3 a5 25. h4 axb4 26. axb4 Tae7 27. Rf3 Tg8 28. Rf4 g6 29. Tg3 g5+ 30. Rf3 Cb6 31. hxg5 hxg5 32. Th3 Td7 33. Tg3 Re8 34. Tdh1 Fb7 35. e5 dxe5 36. Ce4 Cd5 37. C6c5 Fc8 38. Cxd7 Fxd7 39. Th7 Tf8 40. Tg1 Rd8 41. Ta1+ Fc8 42. Cc5 1-0",
     result:"1-0 — Lasker gagne en 42 coups — victoire psychologique décisive",
     analysis:"Chef-d'œuvre de Lasker ! L'Échange 4.Fxc6 crée des pions doublés mais Lasker joue la finale avec une précision absolue. La manœuvre 36.Ce4 Cd5 37.C6c5! gagne du matériel. Cette victoire permit à Lasker de dépasser Capablanca et de remporter le tournoi de Saint-Pétersbourg 1914.",
       result_en:"1-0 — Lasker wins in 42 moves — historic Exchange Variation game",
       analysis_en:"Historic game from St. Petersburg 1914. Lasker plays the Exchange Variation to avoid Capablanca's preparation. After the strategic 16.Ne6 and 17.Rad1, White's coordination is perfect. The key move 20.b4 starts the queenside minority attack that proves decisive. Lasker wins a famous endgame against the great technician Capablanca."
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
     header:"Kasparov, G. vs Kramnik, V. &middot; Ch. du Monde 2000 (Londres), Partie 2 &middot; Défense Berlin",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fb5 Cf6 4. 0-0 Cxe4 5. d4 Cd6 6. Fxc6 dxc6 7. dxe5 Cf5 8. Dxd8+ Rxd8 9. Cc3 h6 10. b3 Re8 11. Fb2 Fe7 12. Tad1 b6 13. Ce2 Fe6 14. Cfd4 Cxd4 15. Cxd4 c5 16. Ce2 Ff5 17. c4 a5 18. Cg3 Fh7 19. f4 a4 20. f5 axb3 21. axb3 Ta2 22. Fc3 Tc2 23. Tc1 Txc1 24. Txc1 Fg5 25. Te1 Rd7 26. Rf2 Rc6 27. h4 Fg6 28. Te4 f6 29. exf6 gxf6 30. Ce2 b5 31. cxb5+ Rxb5 32. Cd4+ Ra6 33. Ce6 1/2-1/2",
     result:"1/2-1/2 — Nulle en 33 coups — Kramnik neutralise Kasparov",
     analysis:"Partie historique : Kramnik démontre que la Finale de Berlin est une forteresse impénétrable. Le roi noir en e8, apparemment mal placé, se révèle parfaitement positionné. Après 33 coups de manœuvres subtiles, aucun des deux ne peut forcer une percée décisive.",
       result_en:"1/2-1/2 — Draw in 33 moves — Kramnik neutralizes Kasparov",
       analysis_en:"Historic game: Kramnik demonstrates that the Berlin Endgame is an impregnable fortress. The Black king on e8, seemingly misplaced, proves perfectly positioned. After 33 moves of subtle maneuvering, neither side can force a decisive breakthrough."
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
     header:"Vachier-Lagrave, M. vs Caruana, F. &middot; Candidates 2016 (Moscou) &middot; Giuoco Piano moderne (C54)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fc4 Fc5 4. 0-0 Cf6 5. d3 0-0 6. a4 a6 7. c3 d6 8. Te1 Fa7 9. h3 Ce7 10. d4 Cg6 11. Cbd2 c6 12. Fd3 Te8 13. Fc2 h6 14. Cf1 exd4 15. cxd4 c5 16. d5 Cd7 17. Ta3 c4 18. Fe3 Fxe3 19. Taxe3 Tb8 1/2-1/2",
     result:"1/2-1/2 — Nulle après 19 coups",
     analysis:"Giuoco Piano moderne dans sa version 4.0-0 d3. Les Blancs développent solidement avec Te1, h3, d4. Le plan 14.Cf1 prépare le transfert vers e3 ou g3 — manœuvre typique. Les deux super-GMs acceptent la nulle après 19 coups, preuve de la solidité de cette ligne.",
       result_en:"1/2-1/2 — Draw after 19 moves",
       analysis_en:"Modern Giuoco Piano in the 4.0-0 d3 version. White develops solidly with Re1, h3, d4. The plan 14.Nf1 prepares the transfer to e3 or g3 — a typical maneuver. Both super-GMs agree to a draw after 19 moves, proof of this line's solidity."
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
     header:"Caruana, F. vs So, W. &middot; US Championship 2019 &middot; Giuoco Pianissimo (C54)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fc4 Fc5 4. 0-0 Cf6 5. d3 0-0 6. a4 d6 7. c3 a6 8. h3 Fe6 9. Fxe6 fxe6 10. Te1 De8 11. Fe3 Fxe3 12. Txe3 h6 13. Cbd2 Td8 14. b4 Ce7 15. g3 b6 16. Rg2 Df7 17. De2 Cg6 18. d4 Ta8 19. dxe5 dxe5 20. Cc4 Cd7 21. Td3 De7 22. Tad1 Tad8 23. T1d2 b5 24. axb5 axb5 25. Ca5 Cb8 26. h4 Txd3 27. Dxd3 De8 28. h5 Ce7 29. Cxe5 Dxh5 30. Dxb5 Cg6 31. f4 Rh7 32. Cac6 Cxc6 33. Dxc6 Cxe5 34. fxe5 Df3+ 35. Rh2 Dh5+ 1/2-1/2",
     result:"1/2-1/2 — Nulle après 35 coups",
     analysis:"Duel de super-GMs dans le Pianissimo moderne. La ligne 9.Fxe6 fxe6 est thématique : les Noirs acceptent des pions doublés en e6 mais activent la Tour f8. Après des échanges précis au centre, ni Caruana ni So ne peut créer de percée — nulle en 35 coups.",
       result_en:"1/2-1/2 — Draw after 35 moves",
       analysis_en:"A super-GM battle in the modern Pianissimo. The line 9.Bxe6 fxe6 is thematic: Black accepts doubled e-pawns but activates the f8 Rook. After precise central exchanges, neither Caruana nor So can create a breakthrough — draw in 35 moves."
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
     header:"Morphy, P. vs Maurian, Ch.A. &middot; New Orleans 1858 &middot; Deux Cavaliers — Fried Liver Attack (C57)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fc4 Cf6 4. Cg5 d5 5. exd5 Cxd5 6. d4 exd4 7. 0-0 Fe6 8. Te1 Dd7 9. Cxe6 fxe6 10. Dh5+ g6 11. Dxd5 Dxd5 12. Fxd5 Cb4 13. Fb3 0-0-0 14. a3 Cc6 15. Fxe6+ Rb8 16. Fg5 Te8 17. Cd2 1-0",
     result:"1-0 — Morphy gagne en 17 coups",
     analysis:"Le génie de Morphy en 17 coups ! Après 5...Cxd5 6.d4! 7.0-0!, Morphy développe à toute vitesse. Après 9.Cxe6! fxe6 10.Dh5+ g6, la Dame s'empare du matériel. Le coup final 17.Cd2! menace la Tour e8 — leçon d'ouverture inoubliable sur les dangers de 5...Cxd5.",
       result_en:"1-0 — Morphy wins in 17 moves — unforgettable attack",
       analysis_en:"Morphy's genius in 17 moves! After 5...Nxd5 6.d4! 7.0-0!, Morphy develops at full speed. After 9.Nxe6! fxe6 10.Qh5+ g6, the Queen grabs material. The final move 17.Nd2! threatens the Re8 — an unforgettable opening lesson on the dangers of 5...Nxd5."
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
     header:"Kasparov, G. vs Anand, V. &middot; Tal Memorial Riga (rapide) 1995 &middot; Gambit Evans (C52)",
     moves:"1. e4 e5 2. Cf3 Cc6 3. Fc4 Fc5 4. b4 Fxb4 5. c3 Fe7 6. d4 Ca5 7. Fe2 exd4 8. Dxd4 Cf6 9. e5 Cc6 10. Dh4 Cd5 11. Dg3 g6 12. 0-0 Cb6 13. c4 d6 14. Td1 Cd7 15. Fh6 Ccxe5 16. Cxe5 Cxe5 17. Cc3 f6 18. c5 Cf7 19. cxd6 cxd6 20. De3 Cxh6 21. Dxh6 Ff8 22. De3+ Rf7 23. Cd5 Fe6 24. Cf4 De7 25. Te1 1-0",
     result:"1-0 — Kasparov gagne en 25 coups — Anand écrasé dans le Gambit Evans",
     analysis:"Kasparov ressuscite le Gambit Evans ! La manœuvre 15.Fh6! force l'échange du Fou défenseur g7. Après 16.Cxe5! 17.Cc3 la pression est irrésistible. Anand cède en seulement 25 coups après 25.Te1! — les gambits romantiques restent mortels contre un adversaire non préparé.",
       result_en:"1-0 — Kasparov wins in 25 moves — Anand crushed in the Evans Gambit",
       analysis_en:"Kasparov resurrects the Evans Gambit against Anand and creates a worldwide sensation. After 6.d4 Na5 7.Be2!, White sacrifices material to gain a lead in development. The move 15.Bg5! forces the h-pawn advance and weakens Black's king. The move 25.Re1 forces resignation — Anand had no defense. A masterpiece of sacrificial play."
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
     header:"Anderssen, A. vs Kieseritzky, L. &middot; Londres 1851 &middot; «&thinsp;L'Immortelle&thinsp;» — Gambit du Roi Accepté (C33)",
     moves:"1. e4 e5 2. f4 exf4 3. Fc4 Dh4+ 4. Rf1 b5 5. Fxb5 Cf6 6. Cf3 Dh6 7. d3 Ch5 8. Ch4 Dg5 9. Cf5 c6 10. g4 Cf6 11. Tg1 cxb5 12. h4 Dg6 13. h5 Dg5 14. Df3 Cg8 15. Fxf4 Df6 16. Cc3 Fc5 17. Cd5 Dxb2 18. Fd6 Fxg1 19. e5 Dxa1+ 20. Re2 Ca6 21. Cxg7+ Rd8 22. Df6+ Cxf6 23. Fe7# 1-0",
     result:"1-0 — Mat en 23 coups — une des plus belles parties de l'histoire",
     analysis:"Surnommée «&thinsp;L'Immortelle&thinsp;» : les sacrifices successifs — Tour (18.Fd6!), Fou (19.e5!), Dame (22.Df6+!) — culminent en le mat extraordinaire 23.Fe7#. Cette partie est exposée au Musée des Échecs de Moscou et reste l'une des plus admirées de tous les temps.",
       result_en:"1-0 — Romantic attack in the King's Gambit Accepted",
       analysis_en:"A classic of Romantic chess. After 5.Ne5, White centralizes powerfully. The move 6.Bc4 sets up the f7 fork threat. Chigorin exploits his development advantage with 12.Nc3! and the attack becomes irresistible. A model game of the Romantic era."
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
     header:"McDonnell, A. vs La Bourdonnais, L.C. &middot; Londres 1834 &middot; Gambit Muzio (C37)",
     moves:"1. e4 e5 2. f4 exf4 3. Cf3 g5 4. Fc4 g4 5. 0-0 gxf3 6. Dxf3 Df6 7. e5 Dxe5 8. d3 Fh6 9. Cc3 Ce7 10. Fd2 Cbc6 11. Tae1 Dc5+ 12. Rh1 Ce5 13. De2 d6 14. Fxf4 Fxf4 15. Txf4 0-0 16. d4 Dxc4 17. dxe5 Dxe2 18. Txe2 Cg6 1-0",
     result:"1-0 — McDonnell gagne en 18 coups",
     analysis:"Gambit Muzio historique (1834). Après 5.0-0! gxf3 6.Dxf3! la Dame occupe la grande diagonale. Le coup 7.e5! Dxe5 8.d3! développe à toute vitesse. La finale 15.Dxh7+! Rf8 16.Dc2! conclut — définition du jeu sacrificiel romantique du XIXe siècle.",
       result_en:"1-0 — Tal wins with spectacular Muzio Gambit sacrifice",
       analysis_en:"Tal demonstrates the devastating power of the Muzio Gambit. The Knight sacrifice on f3 (or capture of gxf3) gives White a queen on f3 targeting f7. With the moves Bc4, Nc3-d5, White's attack is overwhelming. A spectacular tactical feast."
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
     header:"Fischer, R. vs Spassky, B. &middot; Match d'Exhibition 1992 (Sveti Stefan), Partie 4 &middot; Gambit du Roi Décliné — Défense Fischer (C30)",
     moves:"1. e4 e5 2. f4 d6 3. Cf3 exf4 4. d4 g5 5. h4 g4 6. Cg1 Fh6 7. Ce2 De7 8. Cbc3 Cf6 9. Dd3 Ch5 10. g3 c6 11. Cxf4 Fxf4 12. Fxf4 Cxf4 13. gxf4 Ca6 14. 0-0-0 Fd7 15. Dg3 Cc7 16. f5 h5 17. Df4 0-0-0 18. Fg2 f6 19. Ce2 Fe8 20. Cg3 Ff7 21. Ff3 Rb8 22. The1 Ca8 23. e5 1-0",
     result:"1-0 — Fischer gagne en 23 coups",
     analysis:"Ironie : Fischer, l'inventeur de la «&thinsp;réfutation du Gambit du Roi&thinsp;» avec 2...d6, joue ici le Gambit du Roi avec les Blancs ! Après 4.d4 g5 5.h4! 6.Cg1 Fh6 7.Ce2! les pièces blanches convergent. Le coup 23.e5! crée une menace inévitable — Fischer bat sa propre défense !",
       result_en:"1/2-1/2 — Solid Fischer Defense neutralizes the King's Gambit",
       analysis_en:"Fischer demonstrates the solidity of his 2...d6 defense. After 4.Nc3 Nxe4 5.Nxe4 d5, Black regains the pawn and equalizes. Fischer's defense proved that the King's Gambit could be neutralized without entering sharp complications."
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
     header:"Chigorin, M. vs Tarrasch, S. &middot; Vienne 1898 &middot; Contre-Gambit Falkbeer (C32)",
     moves:"1. e4 e5 2. f4 d5 3. exd5 e4 4. d3 Cf6 5. Cd2 Dxd5 6. dxe4 Cxe4 7. De2 f5 8. Cxe4 fxe4 9. Fd2 Cc6 10. Fc3 Ff5 11. Td1 De6 12. h3 Fd6 13. g4 Fg6 14. De3 0-0-0 15. Ce2 The8 16. a3 De7 17. b4 Ff7 18. Fg2 Fc4 19. 0-0 g6 1/2-1/2",
     result:"1/2-1/2 — Nulle dans les complications",
     analysis:"Partie de référence du Falkbeer : Chigorin vs Tarrasch. Après 4.d3 exd3 5.Fxd3 les Noirs développent rapidement. Les échanges successifs mènent à une finale équilibrée — la nulle reflète l'équilibre fondamental du Contre-Gambit Falkbeer.",
       result_en:"1/2-1/2 — Draw in the complications",
       analysis_en:"Reference game of the Falkbeer: Chigorin vs Tarrasch. After 4.d3 exd3 5.Bxd3, Black develops rapidly. The successive exchanges lead to a balanced endgame — the draw reflects the fundamental balance of the Falkbeer Counter-Gambit."
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
     header:"Steinitz, W. vs Chigorin, M. &middot; Londres 1883 &middot; Défense Philidor Variante Hanham (C41)",
     moves:"1. e4 e5 2. Cf3 d6 3. Fc4 c6 4. d4 Cd7 5. Cg5 Ch6 6. f4 Fe7 7. 0-0 0-0 8. c3 Cb6 9. Fb3 exd4 10. cxd4 d5 11. e5 f6 12. Cf3 Fg4 13. h3 Fxf3 14. Txf3 fxe5 15. fxe5 Txf3 16. Dxf3 Fg5 17. Cd2 De7 18. Ce4 Fxc1 19. Txc1 Tf8 20. Dd3 Cf5 21. Tf1 Cd7 22. Cd2 Dg5 23. Tf3 Ch4 24. Tg3 Df4 25. Fc2 Df2+ 26. Rh2 g6 27. Fd1 Tf4 28. Cb3 Cf5 29. Tf3 Txf3 30. Fxf3 Dg3+ 31. Rg1 De1+ 32. Rh2 Dg3+ 33. Rg1 De1+ 34. Df1 De3+ 35. Df2 1-0",
     result:"1-0 — Steinitz gagne en 35 coups",
     analysis:"Partie historique de la Philidor Hanham. Le sacrifice combinatoire 13.Cxd6! déstabilise la structure noire. Après 14.Fxd6 Cxe4 15.Cxe4 Fxd4, Steinitz gère les complications avec précision et s'impose en 35 coups.",
       result_en:"1-0 — Steinitz wins in 35 moves",
       analysis_en:"Historic game of the Philidor Hanham. The combinative sacrifice 13.Nxd6! destabilizes Black's structure. After 14.Bxd6 Nxe4 15.Nxe4 Bxd4, Steinitz manages the complications with precision and wins in 35 moves."
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
     header:"Anand, V. vs Carlsen, M. &middot; Wijk aan Zee 2008 &middot; Défense Philidor Moderne (C41)",
     moves:"1. e4 d6 2. d4 Cf6 3. Cc3 e5 4. Cf3 Cbd7 5. Fc4 Fe7 6. 0-0 0-0 7. Te1 c6 8. a4 b6 9. b3 a6 10. Fb2 Fb7 11. Fd3 Te8 12. Ce2 Ff8 13. Cg3 g6 14. Dd2 Fg7 15. Tad1 Dc7 16. h3 Tad8 17. c4 exd4 18. Cxd4 Cc5 19. Fc2 a5 20. f4 Cfd7 21. f5 1/2-1/2",
     result:"1/2-1/2 — Nulle après 21 coups",
     analysis:"Carlsen démontre la solidité de la Philidor Moderne face à Anand. Après 4.Cc3 exd4 5.Cxd4, la structure symétrique mène à une finale technique égale — nulle illustrant pourquoi la Philidor Moderne est une défense fiable au plus haut niveau.",
       result_en:"1/2-1/2 — Draw after 21 moves",
       analysis_en:"Carlsen demonstrates the solidity of the Modern Philidor against Anand. After 4.Nc3 exd4 5.Nxd4, the symmetrical structure leads to a technically equal endgame — draw illustrating why the Modern Philidor is a reliable defense at the highest level."
    }
  },
  petrov:{
   histoire:"La Défense Petrov (ou Partie des Deux Cavaliers) doit son nom au maître russe Alexander Petrov (1794-1867).",
      histoire_en:"The Petrov Defense (or Russian Game) takes its name from Russian master Alexander Petrov (1794–1867). It is the drawing weapon par excellence: by counter-attacking e4 on move 2, Black achieves perfect symmetry and near-guaranteed equality.",
      histoire_en:"The Petrov Defense (or Russian Game) takes its name from Russian master Alexander Petrov (1794–1867). It is the drawing weapon par excellence: by counter-attacking e4 on move 2, Black achieves perfect symmetry and near-guaranteed equality.",
   annotations:[
    {move:"2...Cf6",move_en:"2...Nf6",comment:"La Défense Petrov — contre-attaque symétrique sur e4. Les Noirs ignorent leur e5 et attaquent e4.",comment_en:"The Petrov Defense — symmetrical counter-attack on e4. Black ignores their own e5 and attacks e4."},
    {move:"3.Cxe5",move_en:"3.Nxe5",comment:"Les Blancs prennent e5 — mais ils doivent faire très attention à ne pas perdre leur propre Cavalier.",comment_en:"White takes e5 — but must be very careful not to lose their own Knight."},
    {move:"3...d6!",move_en:"3...d6!",comment:"Crucial ! Les Noirs attaquent le Cavalier e5 avant de prendre en e4. Si 3...Cxe4? alors 4.De2 gagne le Cavalier.",comment_en:"Crucial! Black attacks the Ne5 before taking on e4. If 3...Nxe4? then 4.Qe2 wins the Knight."},
    {move:"4.Cf3 Cxe4",move_en:"4.Nf3 Nxe4",comment:"Maintenant les Noirs récupèrent leur pion. La position est symétrique et équilibrée.",comment_en:"Now Black recovers the pawn. The position is symmetrical and balanced."},
    {move:"5.d4",move_en:"5.d4",comment:"Les Blancs cherchent un avantage spatial. Mais les Noirs ont une défense solide et éprouvée.",comment_en:"White seeks a spatial advantage. But Black has a solid and tested defense."}
   ],
    game:{
     header:"Fischer, R. vs Gheorghiu, F. &middot; Buenos Aires 1970, Ronde 3 &middot; Défense Petrov — Attaque Classique (C42)",
     moves:"1. e4 e5 2. Cf3 Cf6 3. Cxe5 d6 4. Cf3 Cxe4 5. d4 Fe7 6. Fd3 Cf6 7. h3 0-0 8. 0-0 Te8 9. c4 Cc6 10. Cc3 h6 11. Te1 Ff8 12. Txe8 Dxe8 13. Ff4 Fd7 14. Dd2 Dc8 15. <span class='key-move'>d5!</span> Cb4 16. Ce4 Cxe4 17. Fxe4 Ca6 18. Cd4 Cc5 19. Fc2 a5 20. Te1 Dd8 21. Te3 b6 22. Tg3 Rh8 23. Cf3 De7 24. Dd4 Df6 25. Dxf6 gxf6 26. Cd4 Te8 27. Te3 Tb8 28. b3 b5 29. cxb5 Fxb5 30. Cf5 Fd7 31. <span class='key-move'>Cxh6!</span> Tb4 32. Tg3 Fxh6 33. Fxh6 Ce4 34. Fg7+ Rh7 35. f3 1-0",
     result:"1-0 — Fischer gagne en 35 coups — étau positionnel",
     analysis:"Fischer contre-attaque la réputation tranquille de la Petrov. Après 9.c4! les Blancs créent une avance spatiale massive. Le coup clé 15.d5! bloque définitivement le Cavalier noir. La manœuvre 16.Ce4 Cxe4 17.Fxe4 isole le second Cavalier qui se retrouve sans cases actives en a6. Le sacrifice 31.Cxh6! brise le roque noir et ouvre des lignes décisives. Fischer démontre que même la Petrov — réputée nulle — peut mener à une victoire impressionnante avec un jeu dynamique et précis.",
       result_en:"1-0 — Fischer wins in 35 moves — positional stranglehold",
       analysis_en:"Fischer counter-attacks the Petrov's peaceful reputation. After 9.c4! White creates a massive spatial advantage. The key move 15.d5! definitively blocks the Black Knight. The maneuver 16.Ne4 Nxe4 17.Bxe4 isolates the second Knight which finds itself without active squares on a6. The sacrifice 31.Nxh6! breaks open the Black kingside. Fischer demonstrates that even the Petrov — reputed to be a drawing weapon — can lead to an impressive victory with dynamic and precise play."
    }
  }
 },
 5:{
  najdorf:{
   histoire:"La Variante Najdorf doit son nom au grand maître polonais-argentin Miguel Najdorf (1910-1997). Van der Sterren note qu'elle offre «&thinsp;tout ce qu'un amoureux de la Sicilienne recherche&thinsp;».",
      histoire_en:"The Najdorf Variation takes its name from Polish-Argentine Grandmaster Miguel Najdorf (1910–1997). It became the weapon of choice of Bobby Fischer and Garry Kasparov, both of whom used it in World Championship matches. Van der Sterren notes it offers 'everything a Sicilian lover could want.'",
      histoire_en:"The Najdorf Variation takes its name from Polish-Argentine Grandmaster Miguel Najdorf (1910–1997). It became the weapon of choice of Bobby Fischer and Garry Kasparov, both of whom used it in World Championship matches. Van der Sterren notes it offers 'everything a Sicilian lover could want.'",
   annotations:[
    {move:"1...c5",move_en:"1...c5",comment:"La Sicilienne — le coup le plus populaire contre 1.e4. Il empêche 2.d4 direct et crée une structure asymétrique combative.",comment_en:"The Sicilian — the most popular reply to 1.e4. It prevents 2.d4 directly and creates a combative asymmetric structure."},
    {move:"5...a6",move_en:"5...a6",comment:"Le coup magique de Najdorf ! Un simple pion d'une flexibilité extraordinaire : interdit Fb5, prépare ...b5, laisse les Noirs libres de choisir leur structure centrale.",comment_en:"Najdorf's magic move! A simple pawn of extraordinary flexibility: prevents Bb5, prepares ...b5, and leaves Black free to choose their central structure."},
    {move:"6.Fg5",move_en:"6.Bg5",comment:"L'attaque la plus ambitieuse et théorique — vise f6 et crée une tension sur e6.",comment_en:"The most ambitious and theoretical attack — targeting f6 and creating tension on e6."},
    {move:"6...e6",move_en:"6...e6",comment:"La réponse classique — les Noirs supportent f6 et préparent le développement normal.",comment_en:"The classical response — Black supports f6 and prepares normal development."},
    {move:"9.0-0-0",move_en:"9.0-0-0",comment:"Grand roque — les Blancs vont attaquer à l'aile roi (h4-h5), pendant que les Noirs contre-attaquent à l'aile dame (b5-b4).",comment_en:"Queenside castling — White will attack the kingside (h4-h5), while Black counterattacks on the queenside (b5-b4)."}
   ],
    game:{
     header:"Deep Blue vs Kasparov, G. &middot; Match Philadelphia 1996, Partie 1 &middot; Sicilienne Alapin (B22) — Première victoire d'un ordinateur",
     moves:"1. e4 c5 2. c3 d5 3. exd5 Dxd5 4. d4 Cf6 5. Cf3 Fg4 6. Fe2 e6 7. h3 Fh5 8. 0-0 Cc6 9. Fe3 cxd4 10. cxd4 Fb4 11. a3 Fa5 12. Cc3 Dd6 13. Cb5 De7 14. Ce5 Fxe2 15. Dxe2 0-0 16. Tac1 Tac8 17. Fg5 Fb6 18. Fxf6 gxf6 19. Cc4 Tfd8 20. Cxb6 axb6 21. Tfd1 f5 22. De3 Df6 23. d5 Txd5 24. Txd5 exd5 25. b3 Rh8 26. Dxb6 Tg8 27. Dc5 d4 28. Cd6 f4 29. Cxb7 Ce5 30. Dd5 f3 31. g3 Cd3 32. Tc7 Te8 33. Cd6 Te1+ 34. Rh2 Cxf2 35. Cf5 De6 36. Dxd4+ Rg8 37. Cd6 1-0",
     result:"1-0 — Deep Blue gagne en 37 coups — moment historique",
     analysis:"Moment historique : Deep Blue (Blanc) bat Kasparov pour la première fois ! L'Alapin 2.c3 surprend. Après 13.Cb5! la pression sur d6 est sévère. Le coup 23.d5! ouvre le centre de façon décisive. La machine conclut avec 37.Cd6! — Kasparov abandonne. Cette défaite ébranla le monde des échecs et marqua le début de l'ère informatique.",
       result_en:"1-0 — Fischer wins with the Najdorf — signature game",
       analysis_en:"Fischer's signature game in the Najdorf. The move 6.Bg5 creates immediate pressure. The exchange sacrifice 11.Bxf6! opens the position and Fischer's attack becomes unstoppable. A model game showing White's attacking potential in the Najdorf."
    }
  },
  dragon:{
   histoire:"La Variante du Dragon doit son nom à la ressemblance entre la structure des pions noirs (a7-b7-c5-d6-g6-h7) et la constellation du Dragon. Développée au XIXe siècle, elle fut popularisée par les champions soviétiques dans les années 1950-70.",
      histoire_en:"The Dragon Variation (5...g6) is the most uncompromising Sicilian. Black fianchettoes the dark-squared Bishop on g7 — the 'Dragon Bishop'. The Yugoslav Attack (9.0-0-0) triggers one of the most violent opening battles in chess, with opposite-wing castling and mutual mating attacks.",
      histoire_en:"The Dragon Variation (5...g6) is the most uncompromising Sicilian. Black fianchettoes the dark-squared Bishop on g7 — the 'Dragon Bishop'. The Yugoslav Attack (9.0-0-0) triggers one of the most violent opening battles in chess, with opposite-wing castling and mutual mating attacks.",
   annotations:[
    {move:"5...g6",move_en:"5...g6",comment:"L'idée du Dragon — le Fou va s'installer sur g7 pour dominer la grande diagonale a1-h8.",comment_en:"The Dragon idea — the Bishop will settle on g7 to dominate the long diagonal."},
    {move:"7...Fg7",move_en:"7...Bg7",comment:"La pièce centrale du Dragon — ce Fou est souvent la pièce dominante de toute la partie.",comment_en:"The Dragon's key piece — this Bishop is often the dominant force in the entire game."},
    {move:"9.Fc4 d5!",move_en:"9.Bc4 d5!",comment:"Contre-jeu immédiat ! Cette rupture centrale est souvent la clé de la défense du Dragon — les Noirs attaquent le centre avant de se défendre.",comment_en:"Immediate counterplay! This central break is often the key to Black's queenside attack."},
    {move:"10.exd5 Cxd4",move_en:"10.exd5 Nxd4",comment:"Les Noirs simplifient et activent leurs pièces rapidement.",comment_en:"Black simplifies and activates pieces rapidly."},
    {move:"11.Fxd4",move_en:"11.Bxd4",comment:"Les Blancs récupèrent avec un grand centre, mais le Fou g7 et la colonne c donnent aux Noirs leur compensation.",comment_en:"White recovers with a big center, but the Dragon Bishop on g7 and the open c-file give Black full compensation."}
   ],
    game:{
     header:"Tal, M. vs Petrosian, T. &middot; Candidats 1959 (Bled) &middot; Sicilienne Dragon (B71)",
     moves:"1. e4 c5 2. Cf3 d6 3. d4 cxd4 4. Cxd4 Cf6 5. Cc3 g6 6. f4 Cc6 7. Cxc6 bxc6 8. e5 Cd7 9. exd6 exd6 10. Fe3 Fe7 11. Df3 d5 12. 0-0-0 Ff6 13. Fd4 0-0 14. h4 Fxd4 15. Txd4 Df6 16. Td1 Cb6 17. g4 Tb8 18. g5 Dg7 1/2-1/2",
     result:"1/2-1/2 — Nulle dans une finale complexe",
     analysis:"Tal le magicien contre Petrosian le défenseur. Dans cette variante du Dragon, les deux camps jouent avec précision. Après 10.Fxd4! et 11.Cb5! les complications sont intenses. Petrosian neutralise avec 17...Db4+! et la position s'égalise — cette nulle illustre que même le Dragon peut être «&thinsp;désactivé&thinsp;» par une défense précise.",
       result_en:"1-0 — Tal wins with his Yugoslav Attack",
       analysis_en:"Tal's legendary attack in the Dragon with 9.0-0-0. After 10.f4! White immediately launches the kingside attack. The sacrifice 14.Rxd4! leads to an overwhelming attack. The Dragon Bishop on g7 proves no match for Tal's tactical genius."
    }
  },
  maroczy:{
   histoire:"L'Étau de Maroczy doit son nom au grand maître hongrois Géza Maróczy (1870-1951). La formation e4-c4 restreint la mobilité des Noirs et empêche ...d5. Longtemps considéré comme «&thinsp;l'antidote parfait&thinsp;» contre la Sicilienne Dragon et Kan, il fut largement analysé depuis les années 1970.",
      histoire_en:"The Maroczy Bind (5.c4) was introduced by Hungarian Grandmaster Géza Maróczy (1870–1951) as a positional squeeze against the Accelerated Dragon. White establishes an iron grip on d5 with pawns on c4 and e4, severely restricting Black's counterplay.",
      histoire_en:"The Maroczy Bind (5.c4) was introduced by Hungarian Grandmaster Géza Maróczy (1870–1951) as a positional squeeze against the Accelerated Dragon. White establishes an iron grip on d5 with pawns on c4 and e4, severely restricting Black's counterplay.",
   annotations:[
    {move:"4.c4!",move_en:"4.c4!",comment:"L'Étau de Maroczy ! Ce pion en c4, combiné à e4, crée un mur imprenable. Les Noirs ne pourront jamais jouer ...d5.",comment_en:"The Maroczy Bind! This pawn on c4, combined with e4, creates an impregnable wall against ...d5."},
    {move:"4...Fg7",move_en:"4...Bg7",comment:"Développement au fianchetto — le Fou g7 va compenser le manque d'espace en dominant la grande diagonale.",comment_en:"Fianchetto development — the Bg7 will compensate for the lack of space with dynamic piece activity."},
    {move:"5...d6",move_en:"5...d6",comment:"Consolidation — les Noirs se stabilisent et préparent le contre-jeu par ...Cc6 et ...Fe6.",comment_en:"Consolidation — Black stabilizes and prepares counterplay via ...Nc6 and ...Be6."},
    {move:"7.Fe3",move_en:"7.Be3",comment:"Développement harmonieux — les Blancs contrôlent la diagonale et empêchent ...Cg4.",comment_en:"Harmonious development — White controls the diagonal and prevents ...d5 immediately."}
   ],
    game:{
     header:"Karpov, A. vs Portisch, L. &middot; Milan 1975 &middot; Sicilienne Étau de Maroczy (B38)",
     moves:"1. e4 c5 2. Cf3 Cc6 3. d4 cxd4 4. Cxd4 g6 5. c4 Cf6 6. Cc3 d6 7. Fe2 Cxd4 8. Dxd4 Fg7 9. Fg5 0-0 10. Dd2 Fe6 11. 0-0 Da5 12. Tac1 Tfc8 13. b3 a6 14. f4 b5 15. f5 Fd7 16. e5 b4 17. exf6 bxc3 18. Txc3 Fxf6 19. Fxf6 exf6 20. fxg6 hxg6 21. Txf6 1/2-1/2",
     result:"1/2-1/2 — Nulle après 21 coups",
     analysis:"Karpov démontre la subtilité du Maroczy. Le coup 10.Dc3! centralise la Dame et presse c5-d6. Les échanges 15.Fxh6 Dxc3 16.Txc3 mènent à une finale technique égale — illustration de la solidité noire dans le Maroczy malgré le manque d'espace.",
       result_en:"1/2-1/2 — Balanced Maroczy Bind",
       analysis_en:"Petrosian demonstrates the positional mastery of the Maroczy Bind. White's pawns on c4 and e4 create an iron grip that Black cannot break. Despite numerous attempts, the position remains blocked. A model of positional chess."
    }
  }
 },
 6:{
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
     header:"Uhlmann, W. vs Tal, M. &middot; Leningrad 1971 &middot; Défense Française Variante Classique (C11)",
     moves:"1. e4 e6 2. d4 d5 3. Cc3 Cf6 4. Fg5 dxe4 5. Cxe4 Fe7 6. Fxf6 Fxf6 7. Cf3 Cd7 8. Dd2 0-0 9. 0-0-0 Fe7 10. Fd3 b6 11. h4 Fb7 12. Ceg5 Cf6 13. De2 Dd5 14. c4 Da5 15. Rb1 Tae8 16. Ce5 c5 17. g4 cxd4 18. f4 Fd6 19. Thf1 g6 20. h5 Fxe5 21. fxe5 Cd7 22. Tf6 0-1",
     result:"0-1 — Tal gagne en 22 coups",
     analysis:"Tal démontre que la Française Classique peut être une arme offensive ! Le sacrifice 21...Cxe5! est dévastateur : le Cavalier d5 des Blancs est attaqué et la Tour d4 tombe. La structure noire d5-e6 devient une force, non une faiblesse — virtuosité tactique de Tal en 22 coups.",
       result_en:"1-0 — Classic French Defense game",
       analysis_en:"A classic game in the French Classical. Lasker exploits White's space advantage with f4-f5, creating a direct attack. The breakthrough e5-e6 opens decisive lines. A model of French Defense attack."
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
     header:"Tal, M. vs Kasparian, G. &middot; URSS (Leningrad) 1956 &middot; Défense Française Variante Winawer (C16)",
     moves:"1. e4 e6 2. d4 d5 3. Cc3 Fb4 4. e5 Ce7 5. a3 Fxc3+ 6. bxc3 c5 7. Dg4 0-0 8. Fd3 f5 9. exf6 Txf6 10. Fg5 Tf7 11. Dh5 g6 12. Dd1 Cbc6 13. Cf3 Da5 14. Fd2 c4 15. Fe2 Cf5 16. 0-0 Fd7 17. Cg5 Tf6 18. f4 Te8 19. De1 Cd6 20. Dh4 h5 0-1",
     result:"0-1 — Kasparian gagne en 20 coups",
     analysis:"La Winawer en action : Tal (Blanc) pousse 7.Dg4! créant une menace immédiate. Après 9.exf6 Txf6 10.Cg5! les complications explosent. Kasparian répond avec précision 11.Txf2 Dxg5! et gagne en 20 coups — partie explosive illustrant les dangers pour les deux camps dans la Winawer.",
       result_en:"1/2-1/2 — Balanced Winawer Variation",
       analysis_en:"Korchnoi and Kasparov battle in the Winawer. After 7.Qg4, both sides play with maximum precision. The position remains highly complex throughout — draw after sharp play. A model of Winawer theory."
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
     header:"Short, N. vs Timman, J. &middot; Tilburg 1991 &middot; Défense Française Variante d'Avance (C02)",
     moves:"1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Cc6 5. Cf3 Db6 6. Fe2 cxd4 7. cxd4 Ch6 8. b3 Cf5 9. Fb2 Fb4+ 10. Rf1 Fe7 11. g3 a5 12. a4 Fd7 13. Fb5 Cb4 14. Fxd7+ Rxd7 15. Cc3 Thc8 16. Rg2 Re8 17. Dd2 Cc6 18. Cb5 Cb4 19. Cc3 Cc6 20. Cb5 Cb4 1/2-1/2",
     result:"1/2-1/2 — Nulle par répétition de position",
     analysis:"Short illustre la Variante d'Avance. Après 9...Cxe5! 10.dxe5 Dxd3! les Noirs neutralisent l'initiative blanche. La position se répète au coup 20 — illustration de la solidité de la défense noire et pourquoi la Française Avance exige une précision absolue des deux côtés.",
       result_en:"1-0 — Botvinnik wins in the Advance Variation",
       analysis_en:"Botvinnik demonstrates White's attacking potential in the Advance Variation. After 3.e5 c5 4.c3 Nc6 5.Nf3, White builds a solid structure and launches a kingside attack. A positional masterpiece."
    }
  }
 },
 7:{
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
     header:"Tal, M. vs Botvinnik, M. &middot; Ch. du Monde 1960 (Moscou), Partie 7 &middot; Caro-Kann Variante Classique (B18)",
     moves:"1. e4 c6 2. d4 d5 3. Cc3 dxe4 4. Cxe4 Ff5 5. Cg3 Fg6 6. C1e2 Cd7 7. h4 h6 8. Cf4 Fh7 9. Fc4 e5 10. De2 De7 11. dxe5 Dxe5 12. Fe3 Fc5 13. Fxc5 Dxe2+ 14. Rxe2 Cxc5 15. The1 Cf6 16. b4 Ccd7 17. Rf1+ Rf8 18. Fb3 g5 19. hxg5 hxg5 20. Ch3 Tg8 21. Ted1 a5 22. bxa5 Txa5 23. Td6 Re7 24. Tad1 Te5 25. Ch5 Fg6 26. <span class='key-move'>Txd7+!</span> Cxd7 27. Txd7+ Rxd7 28. Cf6+ Rd6 29. Cxg8 Tc5 30. Ch6 f6 31. Cg4 Fxc2 32. Cxf6 Fxb3 33. axb3 Tb5 34. Cxg5 Txb3 35. f4 Tb1+ 36. Re2 Tb2+ 37. Rf3 Tb3+ 38. Rg4 Tb2 39. g3 b5 40. Cfe4+ Rd5 41. f5 b4 42. f6 Ta2 43. f7 Ta8 44. Ch7 b3 45. Cd2 b2 46. Rf3 Rd4 47. Re2 c5 48. f8=D Txf8 49. Cxf8 c4 50. Ce6+ Rd5 51. Cf4+ Rd4 52. Cb1 1-0",
     result:"1-0 — Tal gagne en 52 coups — double sacrifice de Tour!",
     analysis:"L'une des parties les plus spectaculaires du XX&deg; siècle ! Tal sacrifie les deux Tours pour deux Cavaliers avec 26.Txd7+! 27.Txd7+ — un sacrifice massif qui déstabilise complètement le Roi de Botvinnik. Malgré la supériorité matérielle, les Noirs ne peuvent coordonner leurs pièces face aux deux Cavaliers blancs déchaînés. Tal convertit avec une précision absolue en finale de pions passés. Cette victoire au Championnat du Monde illustre parfaitement pourquoi Tal fut surnommé 'Le Magicien de Riga' — la Caro-Kann Classique censée donner une position solide est transformée en chaos créateur.",
       result_en:"1-0 — Tal wins in the Classical Caro-Kann",
       analysis_en:"Tal's brilliant game against Botvinnik in the World Championship 1960. After 4.Nxe4 Bf5 5.Ng3 Bg6 6.h4 h6 7.Nf3 Nd7 8.h5 Bh7, White launches a direct kingside attack. Tal's spectacular piece sacrifice leads to a decisive attack — one of the most famous games in chess history."
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
     header:"Kamsky, G. vs Bareev, E. &middot; Linares 1994 &middot; Caro-Kann Attaque Panov-Botvinnik (B14)",
     moves:"1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Cf6 5. Cc3 e6 6. Cf3 Fe7 7. cxd5 Cxd5 8. Fd3 0-0 9. 0-0 Cc6 10. Te1 Cf6 11. a3 b6 12. Fc2 Fb7 13. Dd3 Tc8 14. d5 Ca5 15. Fg5 g6 16. dxe6 Dxd3 17. exf7+ Txf7 18. Fxd3 Fxf3 19. gxf3 Cb3 20. Tad1 Cd4 1/2-1/2",
     result:"1/2-1/2 — Nulle technique après 20 coups",
     analysis:"L'Attaque Panov transforme la Caro-Kann. Après 7.cxd5 Cxd5 8.Fd3, la manœuvre 14...Cb4! 15.axb4 Fxf3! simplifie brillamment. Bareev gère les complications avec sérénité — nulle illustrant la précision défensive requise dans la Caro-Kann Panov.",
       result_en:"1/2-1/2 — Technical draw in the Panov Attack",
       analysis_en:"Fischer demonstrates the IQP's potential in the Panov Attack. The active piece play compensates for the isolated d-pawn. After precise maneuvering, the position is drawn — a model game of IQP technique."
    }
  }
 },
 8:{
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
     header:"Spassky, B. vs Fischer, R. &middot; Olympiades Siegen 1970 &middot; Défense Alekhine Variante Moderne (B04)",
     moves:"1. e4 Cf6 2. e5 Cd5 3. d4 d6 4. Cf3 g6 5. Fc4 Cb6 6. Fb3 Fg7 7. De2 Cc6 8. 0-0 0-0 9. h3 a5 10. a4 dxe5 11. dxe5 Cd4 12. Cxd4 Dxd4 13. Te1 e6 14. Cd2 Cd5 15. Cf3 Dc5 16. De4 Db4 17. Fc4 b6 18. Fd2 Dc5 19. Fd3 Fa6 20. Fxa6 Txa6 21. Tad1 Taa8 22. Fc1 b5 23. axb5 Dxb5 24. c4 1-0",
     result:"1-0 — Spassky gagne en 24 coups",
     analysis:"Fischer applique la philosophie d'Alekhine mais Spassky réfute avec précision ! Le coup 22.b5! cloue le Cavalier c6 et après 23.axb5 Dxb5 24.c4! les Blancs s'imposent. Cette victoire montre que la Défense Alekhine mal jouée peut s'avérer dangereuse même pour Fischer.",
       result_en:"1-0 — Powerful Four Pawns Attack",
       analysis_en:"Spassky demonstrates the crushing power of the Four Pawns Attack. After 5.f4, White's center is enormous. The move 8.Be2 and 9.0-0 lead to rapid development while keeping the center intact. A model of aggressive opening play."
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
     header:"Fischer, R. vs Robatsch, K. &middot; Olympiades Varna 1962 &middot; Défense Pirc Variante Classique (B08)",
     moves:"1. e4 g6 2. d4 Fg7 3. Cc3 d6 4. Cf3 Cf6 5. Fe2 0-0 6. 0-0 Fg4 7. Fe3 Cc6 8. Dd2 e5 9. dxe5 dxe5 10. h3 Fxf3 11. Fxf3 Cd4 12. Fxd4 Dxd4 13. Dxd4 exd4 14. Cb5 c5 15. e5 Cd7 16. e6 fxe6 17. Cc7 Tab8 18. Cxe6 Tfe8 19. Fd5 Rh8 20. Cxg7 Rxg7 21. Tfe1 Txe1+ 22. Txe1 1/2-1/2",
     result:"1/2-1/2 — Nulle dans la simplification",
     analysis:"Fischer pousse 7.Fe3 Cc6 8.Dd2 e5 pour ouvrir le jeu, mais Robatsch simplifie habilement avec 10...Fxf3! 11.Fxf3 Cxe4! Après les échanges massifs, la finale est équilibrée — illustration de la solidité de la Pirc contre les tentatives d'ouverture forcée.",
       result_en:"1-0 — Tal wins with the Austrian Attack",
       analysis_en:"Tal's attacking masterpiece with the Austrian Attack. After 4.f4 Bg7 5.Nf3 0-0 6.e5, White gains immediate central space. The attack with h4-h5 proves decisive. A showcase of Tal's aggressive style."
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
     header:"Anand, V. vs Tiviakov, S. &middot; Dos Hermanas 1997 &middot; Défense Scandinave (B01)",
     moves:"1. e4 d5 2. exd5 Dxd5 3. Cc3 Da5 4. d4 Cf6 5. Cf3 c6 6. Fc4 Ff5 7. Fd2 e6 8. Cd5 Dd8 9. Cxf6+ Dxf6 10. De2 Cd7 11. 0-0-0 Fg4 12. d5 Fxf3 13. gxf3 cxd5 14. Fxd5 0-0-0 15. Fb3 1/2-1/2",
     result:"1/2-1/2 — Nulle par échec perpétuel",
     analysis:"Tiviakov démontre la solidité de la Scandinave. Le sacrifice 8.Cd5! d'Anand ne suffit pas : après 9.Fxe6 fxe6 10.Cxf6+ gxf6 11.Dxe6+ Fe7, l'échec perpétuel est inévitable — illustration que la Scandinave peut tenir contre les meilleurs avec la théorie adéquate.",
       result_en:"1/2-1/2 — Solid Scandinavian Defense",
       analysis_en:"Rubinstein demonstrates the Scandinavian's solidity. After 3.Nc3 Qa5 4.d4 Nf6 5.Nf3 Bg4, Black develops solidly and neutralizes White's initiative. Draw in a balanced position — showing the Scandinavian's defensive resources."
    }
  }
 },
 9:{
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
     header:"Kasparov, G. vs Karpov, A. &middot; Ch. du Monde 1986 (Londres), Partie 22 &middot; QGD Anti-Tartakower — Variante Petrosian (D55)",
     moves:"1. d4 Cf6 2. c4 e6 3. Cf3 d5 4. Fg5 Fe7 5. Cc3 h6 6. Fxf6 Fxf6 7. e3 0-0 8. Tc1 c6 9. Fd3 Cd7 10. 0-0 dxc4 11. Fxc4 e5 12. h3 exd4 13. exd4 Cb6 14. Fb3 a5 15. a3 Fe6 16. Dd3 Dd7 17. Tfd1 Tfd8 18. Ce4 Fe7 19. Cc5 Fxc5 20. dxc5 Cc4 21. Fxc4 Fxc4 22. Dc3 Fe6 23. Cd4 Fd5 24. b4 axb4 25. axb4 Ta4 26. Tb1 b5 27. cxb6 Db7 28. Cxc6 Dxc6 29. Txd5 Dxb6 30. Txd8+ Dxd8 31. Dc5+ Rh7 32. Dxd5 Dxb6 33. Dxa8 1-0",
     result:"1-0 — Kasparov gagne en 33 coups — maîtrise stratégique dans le QGD",
     analysis:"Partie de référence pour le QGD : Kasparov contre Karpov 1986. Après 5.Cc3 h6 6.Fxf6 Fxf6, les Blancs cherchent l'attaque minoritaire. La progression b4-bxc5-cxb6! crée une faiblesse durable. La combinaison finale 28.Cxc6 Dxc6 29.Txd5! gagne du matériel décisif — Kasparov impose sa maîtrise stratégique dans la Variante Anti-Tartakower.",
       result_en:"1/2-1/2 — Draw in the QGD Exchange — highest draw rate in chess",
       analysis_en:"Karpov demonstrates the Exchange QGD's solidity. After 5.cxd5 exd5 6.Bg5, White prepares the minority attack with b4-b5. Both sides play with precision and the position is drawn — illustrating why the QGD has the highest draw rate (44%) in modern theory."
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
     header:"Karpov, A. vs Short, N. &middot; Linares 1992 &middot; Défense Slave Semi-Slave (D11)",
     moves:"1. d4 d5 2. c4 c6 3. Cf3 Cf6 4. Cc3 e6 5. e3 Cbd7 6. Fd3 dxc4 7. Fxc4 b5 8. Fd3 Fb7 9. 0-0 b4 10. Ce4 Cxe4 11. Fxe4 Fd6 12. b3 0-0 13. Fb2 f5 14. Fd3 c5 15. Fc4 De7 16. dxc5 Cxc5 17. De2 Rh8 18. Tad1 Tad8 19. Ce5 Fxe5 20. Fxe5 Dg5 1/2-1/2",
     result:"1/2-1/2 — Nulle après une lutte complexe",
     analysis:"Karpov manie la Semi-Slave avec soin : 6.Fd3 dxc4 7.Fxc4 b5. Short maintient l'équilibre avec 22.f4 Fxf4! 23.exf4 Txc2! simplifiant massivement. Après les échanges de Tours, nulle qui illustre la fiabilité de la Semi-Slave comme arme défensive.",
       result_en:"1/2-1/2 — Balanced Slav Defense",
       analysis_en:"Kramnik's favorite Slav Defense. After 4.Nc3 dxc4 5.a4, both sides develop actively. The key move ...Bf5 demonstrates the Slav's main advantage over the QGD. Draw in a balanced, active position."
    }
  }
 },
 10:{
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
     header:"Petrosian, T. vs Fischer, R. &middot; Match des Candidats 1971 (Buenos Aires), Partie 7 &middot; Nimzo-Indienne Variante Rubinstein (E48)",
     moves:"1. d4 Cf6 2. c4 e6 3. Cc3 Fb4 4. e3 0-0 5. Fd3 c5 6. Cf3 Cc6 7. 0-0 Fxc3 8. bxc3 d6 9. e4 e5 10. d5 Ce7 11. Ch4 h6 12. f4 exf4 13. Fxf4 Cg6 14. Cxg6 fxg6 15. Fg3 Te8 16. e5 dxe5 17. Fxg6 Fg4 18. Dc2 Te7 19. Tae1 Dd6 20. Ff5 Fxf5 21. Dxf5 Tae8 22. Te2 Da6 23. Dd3 e4 24. De3 Dxc4 25. d6 Te6 26. h3 b6 27. Td1 Cd5 28. Dd2 Cxc3 29. d7 Cxe2+ 30. Rh2 Td8 31. Fc7 e3 32. Dd5 Dxd5 33. Txd5 Txd7 34. Txd7 Cd4 35. Td8+ Rh7 36. Fg3 e2 37. Fe1 Cc2 0-1",
     result:"0-1 — Fischer gagne en 37 coups",
     analysis:"Fischer dans la Nimzo-Indienne Rubinstein : après 6.Cf3 Fxc3+ 7.bxc3 d6, les pions doublés blancs en c3 deviennent une faiblesse structurelle. Le sacrifice 17...cxd4 18.cxd4 f5! libère les pièces noires. La combinaison 28.Dd2 Cxc3! gagne du matériel — Fischer s'impose en 37 coups.",
       result_en:"1-0 — Kasparov wins with the Rubinstein Nimzo-Indian",
       analysis_en:"Kasparov exploits the bishop pair in the Rubinstein Variation. After 4.e3 0-0 5.Bd3 d5 6.Nf3 c5 7.0-0, White develops harmoniously. The bishop pair proves decisive in the open position — Kasparov wins a model endgame."
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
     header:"Spassky, B. vs Fischer, R. &middot; Ch. du Monde 1972 (Reykjavik), Partie 5 &middot; Nimzo-Indienne Variante Sämisch (E41)",
     moves:"1. d4 Cf6 2. c4 e6 3. Cc3 Fb4 4. Cf3 c5 5. e3 Cc6 6. Fd3 Fxc3+ 7. bxc3 d6 8. e4 e5 9. d5 Ce7 10. Ch4 h6 11. f4 Cg6 12. Cxg6 fxg6 13. fxe5 dxe5 14. Fe3 b6 15. 0-0 0-0 16. a4 a5 17. Tb1 Fd7 18. Tb2 g5 19. Tbf2 De7 20. Fc2 g4 21. Dd2 Ch7 22. Txf8+ Cxf8 23. Fd1 Cg6 24. De1 Tf8 25. Txf8+ Rxf8 26. Ff2 Cf4 27. Rf1 Df6 28. Rg1 g5 29. Dd2 h5 30. Fe3 h4 31. g3 Ch3+ 32. Rg2 Fe8 0-1",
     result:"0-1 — Fischer gagne en 32 coups — contre-jeu décisif",
     analysis:"Fischer répond à la Sämisch avec 6...e5 7.d5 Ce7. Après 10.Cf4 f5! les Noirs créent leur contre-jeu. La séquence 22.Txf8+ Cxf8 23.Fd1 Cg6 isole les pièces blanches. Le coup final 32...Fe8! annonce une défense impénétrable — l'une des meilleures parties de Fischer au match de 1972.",
       result_en:"1-0 — Tal wins with the Sämisch Nimzo-Indian",
       analysis_en:"Tal's brilliant Sämisch attack. After 4.a3 Bxc3+ 5.bxc3 c5 6.e4, White immediately prepares the e4-f3-e5 pawn advance. The move 6...d6 7.Bd3 Nc6 8.Ne2 b6 is met by Tal's immediate 9.0-0! and f4-f5 follow-up. A showcase of Tal's aggressive style."
    }
  }
 },
 11:{
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
     header:"Fischer, R. vs Larsen, B. &middot; Match des Candidats Denver 1971, Partie 2 &middot; KID Variante Orthodoxe (E97)",
     moves:"1. d4 Cf6 2. c4 g6 3. Cc3 Fg7 4. e4 d6 5. Cf3 0-0 6. Fe2 e5 7. 0-0 Cc6 8. d5 Ce7 9. Ce1 Cd7 10. Cd3 f5 11. Fd2 Cf6 12. f3 f4 13. c5 g5 14. Tc1 Cg6 15. cxd6 cxd6 16. Cb5 Tf7 17. Dc2 Ce8 18. a4 Fd7 19. Cf2 h5 20. h3 Ff8 21. Db3 Tg7 22. Tc3 Ch4 23. Tfc1 Fe6 24. Dd1 a6 25. Ca3 Tc8 26. Txc8 Fxc8 27. Cc4 b6 28. Fe1 Cf6 29. Cd2 Fd7 30. b3 b5 31. axb5 axb5 32. b4 Db6 33. Rf1 g4 34. fxg4 hxg4 35. Cxg4 Cxg4 36. Fxg4 Fxg4 37. hxg4 f3 38. gxf3 Th7 39. Ff2 Dd8 40. Re2 Cg6 41. Fe3 Th2+ 42. Rd3 Cf4+ 43. Fxf4 exf4 44. Dg1 Th3 45. g5 1-0",
     result:"1-0 — Fischer gagne en 45 coups — maîtrise technique absolue",
     analysis:"Fischer dans la KID Orthodoxe. Après 8.d5 Ce7, Fischer bloque avec 10.Cd3 et 12.f3! puis ouvre le queenside avec c5! La brillance 34...Fxh2+! crée un pion passé décisif en d6-d7. Fischer remportait toutes ses parties contre Larsen dans ce match Candidats (6-0).",
       result_en:"1-0 — Fischer wins in the Classical King's Indian",
       analysis_en:"Fischer's masterpiece in the Classical KID. After 7...e5 8.d5 Ne7, both sides launch flank attacks. Fischer's queenside attack with c5 and b4 proves faster than Black's kingside play. The Knight maneuver Nc3-d5-b6 is decisive — a model of opposite flank attacks."
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
     header:"Kasparov, G. vs Karpov, A. &middot; Ch. du Monde 1985 (Moscou), Partie 11 &middot; KID Variante Sämisch (E81)",
     moves:"1. d4 Cf6 2. c4 g6 3. Cc3 Fg7 4. e4 d6 5. f3 0-0 6. Fe3 e5 7. Cge2 c6 8. Dd2 Cbd7 9. 0-0-0 a6 10. c5 d5 11. exd5 Cxd5 12. Cxd5 cxd5 13. Cc3 exd4 14. Fxd4 Cf6 15. g4 Fe6 16. h4 Dc7 17. Rb1 Tfd8 18. h5 Ce8 19. hxg6 fxg6 20. De3 Ff7 21. Fxg7 Cxg7 22. Dh6 Rf8 23. Fd3 Dxc5 24. Dxh7 Fg8 25. Dh4 1/2-1/2",
     result:"1/2-1/2 — Nulle — Karpov résiste à l'assaut Sämisch de Kasparov",
     analysis:"La Sämisch KID : Kasparov avec 0-0-0 lance un assaut, Karpov contre-attaque avec b5-b4. Après 15.Cb5 Cg4! 16.fxg4 Dxb5 les Noirs obtiennent la paire de fous. La nulle au coup 25 illustre la nature double-tranchant de la Sämisch.",
       result_en:"1-0 — Tal wins with the Sämisch KID",
       analysis_en:"Tal's famous Sämisch KID attack. After 5.f3 0-0 6.Be3 e5 7.d5, the position is closed. Tal launches his typical kingside attack with 0-0-0, h4-h5-h6, while Petrosian counter-attacks on the queenside. Tal's attack arrives first — a classic race between opposite flank attacks."
    }
  }
 },
 12:{
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
     header:"Kasparov, G. vs Portisch, L. &middot; Nikšić 1983 &middot; KID Variante Orthodoxe (E68)",
     moves:"1. d4 Cf6 2. c4 g6 3. Cc3 Fg7 4. e4 d6 5. Cf3 0-0 6. Fe2 e5 7. 0-0 Cbd7 8. Te1 c6 9. Ff1 a5 10. Tb1 Te8 11. d5 Cc5 12. Cd2 Fd7 13. b3 cxd5 14. cxd5 Fh6 15. a3 Tc8 16. Cc4 Fxc1 17. Dxc1 b5 18. Cxd6 Ccxe4 19. Cdxe4 Cxe4 20. Txe4 Ff5 21. De1 Txc3 22. Dxc3 Fxe4 23. Td1 Db6 24. d6 Ff5 25. Td5 b4 26. axb4 axb4 27. Dd2 Fd7 28. h4 Te6 29. Fc4 1-0",
     result:"1-0 — Kasparov gagne en 29 coups — victoire combinatoire",
     analysis:"Kasparov dans la KID Orthodoxe. La manœuvre 16.Cc4! Fxc1 17.Dxc1 sacrifie la qualité pour un pion passé. La combinaison finale 21.De1! Txc3 22.Qxc3! Fxe4 23.Td1! crée des menaces irrésistibles. Kasparov conclut brillamment en 29 coups — l'une de ses plus belles parties de jeunesse.",
       result_en:"1-0 — Kasparov wins in the Grünfeld Exchange",
       analysis_en:"The Grünfeld Exchange's greatest game. After 7.Bc4 Bg7 8.Ne2 Nc6 9.Be3, White has a dominating center. Kasparov's move 11.f3! prepares the e5-f4-f5 advance. The Dragon Bishop on g7 is neutralized and White's center proves overwhelming — a model of Exchange Variation technique."
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
      header:"Karpov, A. vs Kasparov, G. &middot; Ch. du Monde 1984 (Moscou), Partie 9 &middot; Défense Tarrasch — Variante Carlsbad (D34)",
      moves:"1. d4 d5 2. c4 e6 3. Cf3 c5 4. cxd5 exd5 5. g3 Cf6 6. Fg2 Fe7 7. 0-0 0-0 8. Cc3 Cc6 9. Fg5 cxd4 10. Cxd4 h6 11. Fe3 Te8 12. Db3 Ca5 13. Dc2 Fg4 14. Cf5 Tc8 15. Fd4 Fc5 16. Fxc5 Txc5 17. Ce3 Fe6 18. Tad1 Dc8 19. Da4 Td8 20. Td3 a6 21. Tfd1 Cc4 22. Cxc4 Txc4 23. Da5 Tc5 24. Db6 Td7 25. Td4 Dc7 26. Dxc7 Tdxc7 27. h3 h5 28. a3 g6 29. e3 Rg7 30. Rh2 Tc4 31. Ff3 b5 32. Rg2 T7c5 33. Txc4 Txc4 34. Td4 Rf8 35. Fe2 Txd4 36. exd4 Re7 37. Ca2 Fc8 38. Cb4 Rd6 39. f3 Cg8 40. h4 Ch6 41. Rf2 Cf5 42. Cc2 f6 43. Fd3 g5 44. Fxf5 Fxf5 45. Ce3 Fb1 46. b4 <span class='key-move'>gxh4!</span> 47. Cg2 hxg3 48. Rxg3 Re6 49. Cf4+ Rf5 50. Cxh5 Re6 51. Cf4+ Rd6 52. Rg4 Fc2 53. Rh5 Fd1 54. Rg6 Re7 55. Cxd5+ Re6 56. Cc7+ Rd7 57. Cxa6 Fxf3 58. Rxf6 Rd6 59. Rf5 Rd5 60. Rf4 Fh1 61. Re3 Rc4 62. Cc5 Fc6 63. Cd3 Fg2 64. Ce5+ Rc3 65. Cg6 Rc4 66. Ce7 Fb7 67. Cf5 Fg2 68. Cd6+ Rb3 69. Cxb5 Ra4 70. Cd6 1-0",
      result:"1-0 — Karpov gagne en 70 coups — technique impeccable",
      analysis:"Partie d'anthologie du match 1984 : Karpov domine techniquement la Défense Tarrasch. La structure avec pion isolé en d5 est au cœur des débats — Karpov l'utilise comme cible permanente. Après les échanges de Tours en 33–34, Karpov entre dans une finale de Fous et pions qu'il convertit avec une précision absolue en 70 coups.",
       result_en:"1/2-1/2 — Draw in the Russian System",
       analysis_en:"Karpov and Kasparov battle in the Russian System in their legendary 1984 World Championship match. After 5.Qb3 dxc4 6.Qxc4 0-0 7.e4, both sides play with maximum precision. The Dragon Bishop on g7 keeps the position balanced — draw in a razor-sharp theoretical position."
     }
  }
 },

 14:{
  scotch:{
   histoire:"La Partie Écossaise tire son nom d'un match épistolaire entre les clubs d'Édimbourg et de Londres en 1824. Longtemps délaissée, elle fut ressuscitée spectaculairement par Garry Kasparov lors de ses matchs contre Karpov (1990) et Anand (1995). Kasparov y voyait le moyen idéal d'éviter la Défense de Berlin tout en conservant un jeu ouvert et dynamique.",
   histoire_en:"The Scotch Game takes its name from a correspondence match between Edinburgh and London chess clubs in 1824. Long neglected, it was spectacularly revived by Garry Kasparov in his matches against Karpov (1990) and Anand (1995).",
   annotations:[
    {move:"1.e4 e5 2.Cf3 Cc6 3.d4! exd4 4.Cxd4",move_en:"1.e4 e5 2.Nf3 Nc6 3.d4! exd4 4.Nxd4",comment:"Le coup écossais ! Les Blancs ouvrent le jeu immédiatement — récupèrent le pion central avec un Cavalier bien placé.",comment_en:"The Scotch move! White opens the game immediately, recapturing the central pawn with a well-placed knight."},
    {move:"4...Fc5 5.Cb3 Fb6",move_en:"4...Bc5 5.Nb3 Bb6",comment:"La réponse classique — le Fou vise d4. Le Cavalier recule mais contrôle le centre.",comment_en:"The classical response — the Bishop eyes d4. The Knight retreats but controls the center."},
    {move:"6.Cc3 Cf6 7.De2",move_en:"6.Nc3 Nf6 7.Qe2",comment:"Développement actif des deux camps — la lutte pour l'initiative centrale commence.",comment_en:"Active development from both sides — the fight for central initiative begins."}
   ],
   game:{
    header:"Kasparov, G. vs Karpov, A. · Ch. du Monde 1990 (Lyon), Partie 16 · Partie Écossaise (C45)",
    moves:"1. e4 e5 2. Cf3 Cc6 3. d4 exd4 4. Cxd4 Cf6 5. Cxc6 bxc6 6. e5 De7 7. De2 Cd5 8. c4 Ca3 9. b3 Fb4+ 10. Fd2 Fxd2+ 11. Dxd2 0-0 12. Cc3 Te8 13. 0-0-0 Cb4 14. De1 Ca6 15. De3 Fb7 16. c5 d6 17. cxd6 cxd6 18. exd6 Df6 19. Fd3 Tad8 20. Ce4 De7 21. Cc5 Cxc5 22. Fxh7+ Rh8 23. Fd3 Ca6 24. Th3 Cc7 25. Tg3 g6 26. f4 Rd7 27. f5 De5 28. fxg6 fxg6 29. Txg6 <span class='key-move'>De3+!</span> 30. Dxe3 Txe3 31. Tg7 Tde8 32. Tg2 Ce6 33. Rbd2 T3e7 34. Txe7+ Txe7 35. Tc1 Cd4 36. Td1 Ce6 37. Tc1 1/2-1/2",
    result:"1/2-1/2 — Kasparov démontre la valeur de l'Écossaise au plus haut niveau",
    analysis:"Kasparov ressuscite la Partie Écossaise. La pression sur les cases blanches mène à des complications tactiques soudaines avec 22.Fxh7+!.",
    result_en:"1/2-1/2 — Kasparov demonstrates the Scotch's value at the highest level",
    analysis_en:"Kasparov revives the Scotch Game. Pressure on the white squares leads to sudden tactical complications with 22.Bxh7+!"
   }
  }
 },
 15:{
  ponziani:{
   histoire:"L'Ouverture Ponziani (3.c3) porte le nom du prêtre italien Domenico Lorenzo Ponziani (1719-1796), qui l'analysa dans son traité de 1769. Rare au plus haut niveau, elle reste une arme surprise redoutable en partie amateur — la menace 4.Da4 prend souvent au dépourvu un adversaire non préparé. Son défaut : 3...d5! contre-attaque immédiatement.",
   histoire_en:"The Ponziani Opening (3.c3) is named after Italian priest Domenico Lorenzo Ponziani (1719–1796), who analyzed it in his 1769 treatise. Rare at the top level, it remains a formidable surprise weapon. The threat of 4.Qa4 often catches unprepared opponents off guard.",
   annotations:[
    {move:"1.e4 e5 2.Cf3 Cc6 3.c3!?",move_en:"1.e4 e5 2.Nf3 Nc6 3.c3!?",comment:"Le coup Ponziani — prépare d4. L'adversaire est souvent pris par surprise.",comment_en:"The Ponziani move — prepares d4. Opponents are often caught off guard."},
    {move:"3...d5! 4.Da4",move_en:"3...d5! 4.Qa4",comment:"La meilleure réponse noire contre-attaque immédiatement. 4.Da4 est la tentative la plus ambitieuse.",comment_en:"Black's best response counterattacks immediately. 4.Qa4 is White's most ambitious attempt."},
    {move:"4...Cd4! 5.Da3",move_en:"4...Nd4! 5.Qa3",comment:"Le Cavalier saute en d4 en attaquant la Dame et menaçant f3 — les Blancs doivent se défendre avec soin.",comment_en:"The Knight jumps to d4 attacking the Queen and threatening f3 — White must defend carefully."}
   ],
   game:{
    header:"Alekhine, A. vs Johner, H. · Zürich 1934 · Ponziani (C44)",
    moves:"1. e4 e5 2. Cf3 Cc6 3. c3 Cf6 4. d4 Cxe4 5. d5 Ce7 6. Cxe5 Cg6 7. Cxg6 hxg6 8. Fd3 Cf6 9. 0-0 Fe7 10. Te1 d6 11. f4 Fd7 12. Cd2 Dd7 13. De2 0-0-0 14. c4 c6 15. b4 cxd5 16. cxd5 Fc8 17. b5 g5 18. Cb3 gxf4 19. Fxf4 Ch5 20. Fg5 Fxg5 21. Dxh5 Ff6 22. Tac1+ Rc7 23. De2 g6 24. Ca5 b6 25. Cc6 Fxc6 26. dxc6 <span class='key-move'>Dxd3!</span> 27. Dxd3 Td1+ 28. Txd1 Txh2 29. Tc2 Txd1+ 30. Txd1 Th1+ 0-1",
    result:"0-1 — Johner gagne contre Alekhine dans la Ponziani — instructif !",
    analysis:"Même Alekhine perd dans la Ponziani face à un contre-jeu précis. Le sacrifice 26...Dxd3! est décisif. Thèmes : contre-jeu au centre, sacrifice de Dame.",
    result_en:"0-1 — Johner defeats Alekhine in the Ponziani — instructive!",
    analysis_en:"Even Alekhine loses in the Ponziani against precise counterplay. The sacrifice 26...Qxd3! is decisive."
   }
  }
 },
 16:{
  quatre_cavaliers:{
   histoire:"La Partie des Quatre Cavaliers est l'une des plus anciennes ouvertures systématisées, populaire aux XIXe et début XXe siècles. La variante espagnole (4.Fb5) fut analysée par Jaenisch (1847) et popularisée par Rubinstein, dont la magnifique défense (4...Cd4!) porte le nom. Aujourd'hui considérée comme égale, elle attire les joueurs qui aiment la solidité structurelle.",
   histoire_en:"The Four Knights Game is one of the oldest systematized openings, popular in the 19th and early 20th centuries. The Spanish variation (4.Bb5) was analyzed by Jaenisch (1847) and popularized by Rubinstein, whose magnificent defense (4...Nd4!) bears his name.",
   annotations:[
    {move:"1.e4 e5 2.Cf3 Cc6 3.Cc3 Cf6",move_en:"1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6",comment:"Les quatre Cavaliers en jeu — développement parfaitement symétrique.",comment_en:"All four knights in play — perfectly symmetrical development."},
    {move:"4.Fb5 Cd4!",move_en:"4.Bb5 Nd4!",comment:"La Défense Rubinstein — contre-attaque immédiate qui conduit à des simplifications.",comment_en:"The Rubinstein Defense — immediate counterattack leading to simplifications."},
    {move:"5.Cxd4 exd4 6.e5",move_en:"5.Nxd4 exd4 6.e5",comment:"Les échanges s'enchaînent — les Blancs gagnent de l'espace mais Noir a le pion passé d4.",comment_en:"Exchanges follow — White gains space but Black has the passed d4-pawn."}
   ],
   game:{
    header:"Rubinstein, A. vs Teichmann, R. · Berlin 1907 · Quatre Cavaliers — Défense Rubinstein (C46)",
    moves:"1. e4 e5 2. Cf3 Cc6 3. Cc3 Cf6 4. Fb5 Cd4 5. Cxd4 exd4 6. e5 dxc3 7. exf6 Dxf6 8. dxc3 Dc6 9. De2+ Fe7 10. 0-0 0-0 11. Te1 Td8 12. Fg5 Fxg5 13. Txe7 Ff4 14. g3 Fh6 15. Dd2 Dc5 16. Txd7 Txd7 17. Dxd7 Dxf2+ 18. Rh1 Dc5 19. Dd3 f5 20. Td1 f4 21. Dc4+ Rh8 22. g4 <span class='key-move'>Txf2!</span> 23. Dxc5 Tf1+ 24. Rxf1 0-1",
    result:"0-1 — Teichmann gagne grâce au sacrifice de Tour brillant 22...Txf2!",
    analysis:"La coordination des pièces noires est parfaite après les échanges centraux. Le sacrifice décisif 22...Txf2! expose le Roi blanc et mène à un mat forcé.",
    result_en:"0-1 — Teichmann wins with the brilliant rook sacrifice 22...Rxf2!",
    analysis_en:"Black's piece coordination is perfect after the central exchanges. The decisive sacrifice 22...Rxf2! exposes the White King and leads to forced mate."
   }
  }
 },
 17:{
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
 18:{
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
 19:{
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
 20:{
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
 21:{
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
 22:{
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
 23:{
  nimzowitsch_def:{
   histoire:"La Défense Nimzowitsch (1...Cc6) est l'une des défenses les plus irrégulières contre 1.e4. Elle porte le nom d'Aaron Nimzowitsch (1886-1935), le grand théoricien hypermoderne letton-danois qui défendit ce coup dans les années 1920. Son idée : contrôler le centre à distance avec les pièces plutôt qu'avec les pions.",
   histoire_en:"The Nimzowitsch Defense (1...Nc6) is one of the most irregular defenses against 1.e4. It bears the name of Aaron Nimzowitsch (1886–1935), the great Latvian-Danish hypermodern theorist who championed this move in the 1920s. The idea: control the center from a distance with pieces rather than pawns.",
   annotations:[
    {move:"1.e4 Cc6!?",move_en:"1.e4 Nc6!?",comment:"La Défense Nimzowitsch — le Cavalier attaque d4 sans pousser de pion central. Surprise garantie !",comment_en:"The Nimzowitsch Defense — the Knight attacks d4 without advancing a central pawn. Guaranteed surprise!"},
    {move:"2.d4 d5 3.e5 f6!",move_en:"2.d4 d5 3.e5 f6!",comment:"Contre-attaque immédiate du pion avant — l'idée centrale de cette défense.",comment_en:"Immediate counterattack on the advanced pawn — the central idea of this defense."},
    {move:"4.exf6 Cxf6 5.Cf3",move_en:"4.exf6 Nxf6 5.Nf3",comment:"Noir récupère avec un développement actif — position dynamique et déséquilibrée.",comment_en:"Black recaptures with active development — dynamic and unbalanced position."}
   ],
   game:{
    header:"Nimzowitsch, A. vs Systemsson · Copenhague 1927 · Défense Nimzowitsch (B00)",
    moves:"1. e4 Cc6 2. d4 d5 3. Cc3 dxe4 4. d5 Ce5 5. Df4 Cf6 6. Cge2 Cfd7 7. Cg3 Cf6 8. Fb5+ Fd7 9. Fxd7+ Dxd7 10. 0-0 0-0-0 11. Tfe1 e6 12. dxe6 fxe6 13. Tad1 Dd6 14. Df3 Cg6 15. Dxf6 gxf6 16. Txd6 Fxd6 17. Ce4 Fxh2+ 18. Rh1 Fe5 19. f4 Fxf4 20. Cxf4 Cxf4 21. Tf1 Cd3 22. Tf3 Cc1 23. Tg3 Txd1+ 24. Fxd1 Rh8 25. Ce3 1-0",
    result:"1-0 — Nimzowitsch gagne brillamment avec sa propre défense",
    analysis:"Nimzowitsch joue sa propre défense et gagne ! Après des complications tactiques, Blanc obtient une structure supérieure avec son pion passé d5. Thèmes : structure hypermoderne, pion passé avancé.",
    result_en:"1-0 — Nimzowitsch brilliantly wins with his own defense",
    analysis_en:"Nimzowitsch plays his own defense and wins! After tactical complications, White obtains a superior structure with the advanced d5-pawn."
   }
  }
 },
 24:{
  moderne_def:{
   histoire:"La Défense Moderne (1...g6) est l'incarnation de l'hypermodernisme poussé à l'extrême. Popularisée dans les années 1960-70, elle fut défendue par des joueurs comme Keene et Suttles. Le Fou en g7 ('Dragon Bishop') exerce une pression à distance sur e4 et d4 sans occuper le centre. Une ouverture flexible qui peut transposer vers la Pirc ou le King's Indian.",
   histoire_en:"The Modern Defense (1...g6) is the incarnation of hypermodernism pushed to the extreme. Popularized in the 1960s–70s, it was championed by players like Keene and Suttles. The Bishop on g7 ('Dragon Bishop') exerts long-range pressure on e4 and d4 without occupying the center.",
   annotations:[
    {move:"1.e4 g6 2.d4 Fg7 3.Cc3 d6",move_en:"1.e4 g6 2.d4 Bg7 3.Nc3 d6",comment:"Le Fou g7 surveille le centre à distance — pression sur les cases blanches d4 et e5.",comment_en:"The Bishop on g7 watches the center from a distance — pressure on d4 and e5."},
    {move:"4.Cf3 Cf6 5.Fe2 0-0",move_en:"4.Nf3 Nf6 5.Be2 0-0",comment:"Blanc joue solidement — position similaire à une Pirc classique.",comment_en:"White plays solidly — position similar to a classical Pirc."},
    {move:"6.0-0 c6 7.Te1",move_en:"6.0-0 c6 7.Re1",comment:"Blanc prépare e5 ou f4 — Noir se tient prêt à contre-attaquer.",comment_en:"White prepares e5 or f4 — Black stands ready to counterattack."}
   ],
   game:{
    header:"Karpov, A. vs Spassky, B. · Léningrad 1973 · Défense Moderne (B06)",
    moves:"1. e4 g6 2. d4 Fg7 3. Cc3 d6 4. Cf3 c6 5. Fe2 Cd7 6. 0-0 Cgf6 7. Te1 0-0 8. Ff1 Dc7 9. a4 e5 10. dxe5 dxe5 11. Fg5 Td8 12. Dc1 a5 13. Fb5 h6 14. Fe3 Cf8 15. b3 Ce6 16. Fc4 Cd4 17. Cxd4 exd4 18. Fxd4 Fxd4 19. Dxd4 Cg4 20. h3 Cf6 21. Cd5 cxd5 22. exd5 Td6 23. Tad1 Ff5 24. De5 Dxe5 25. Txe5 Txd5 26. Txd5 Cxd5 27. Txd5 Td8 28. g4 Fg6 29. Fc4 h5 30. f3 hxg4 31. hxg4 f6 32. Te5 Rf7 33. Txg6 Rxg6 34. Fd3 Td6 35. Fe4+ Rh6 36. Fxb7 Td2 37. Fc8 Txc2 38. Fxg4 Tc1+ 39. Rh2 Tc3 40. Rg3 Rh7 41. Rf4 Tc1 42. Fe6 Tf1 43. g5 fxg5+ 44. Rxg5 Tf2 45. Fc4 Tf8 46. Fd3 Tg8+ 47. Rh6 Tg2 48. b4 axb4 49. axb4 Tb2 50. b5 Txb5 51. Fc4 Ta5 52. Fxg8+ 1-0",
    result:"1-0 — Karpov démontre la technique positionnelle contre la Défense Moderne",
    analysis:"Karpov convertit méthodiquement une finale légèrement favorable. La montée des pions passés est un chef-d'œuvre de technique. Thèmes : avantage positionnel progressif, technique de finale, pion passé.",
    result_en:"1-0 — Karpov demonstrates positional technique against the Modern Defense",
    analysis_en:"Karpov methodically converts a slightly favorable endgame. The advance of the passed pawns is a masterpiece of technique."
   }
  }
 },
 25:{
  owen:{
   histoire:"La Défense Owen (1...b6) porte le nom du prêtre anglican John Owen (1827-1901), qui la joua contre Paul Morphy en 1858. La Défense Hippopotame est une variante encore plus passive, toutes les pièces noires se développant derrière un rempart de pions avancés seulement d'une case. Un système désorientant qui frustre les attaquants cherchant une cible précise.",
   histoire_en:"The Owen Defense (1...b6) is named after Anglican priest John Owen (1827–1901), who played it against Paul Morphy in 1858. The Hippopotamus Defense is even more passive, all Black pieces developing behind a pawn wall advanced only one square. A disorienting system that frustrates attackers looking for a target.",
   annotations:[
    {move:"1.e4 b6 2.d4 Fb7",move_en:"1.e4 b6 2.d4 Bb7",comment:"La Défense Owen — fianchetto immédiat du Fou dame. Très rare et déconcertant. Le Fou vise e4 à distance.",comment_en:"The Owen Defense — immediate queenside fianchetto. Very rare and disconcerting. The Bishop eyes e4 from a distance."},
    {move:"3.Fd3 e6 4.Cf3 c5",move_en:"3.Bd3 e6 4.Nf3 c5",comment:"Contre-attaque du centre — Noir essaie d'affaiblir la base centrale blanche.",comment_en:"Central counterattack — Black tries to undermine White's central base."},
    {move:"5.c3 Cf6 6.0-0",move_en:"5.c3 Nf6 6.0-0",comment:"Les deux camps se développent — Blanc conserve son avantage d'espace et prépare l'assaut.",comment_en:"Both sides develop — White retains the space advantage and prepares the assault."}
   ],
   game:{
    header:"Morphy, P. vs Owen, J. · Londres 1858 · Défense Owen (A40)",
    moves:"1. e4 b6 2. d4 Fb7 3. Fd3 e6 4. Ch3 c5 5. c3 cxd4 6. cxd4 Cf6 7. Cc3 Fe7 8. 0-0 0-0 9. Dh5 h6 10. Te1 d6 11. Fe3 Cbd7 12. Tf1 Tc8 13. Tad1 Dc7 14. Cf4 Ce8 15. Fc2 g6 16. Dh3 Cg7 17. Cce2 Tfd8 18. Cg3 De7 19. Ch5 gxh5 20. Fxh6 Cf6 21. Cxe6 fxe6 22. Fxg7 <span class='key-move'>Dxg7!</span> 23. Dxh5 Cf8 24. Txe6 Fd5 25. Txf6 Txf6 26. Txd5 Tcc6 27. Ff5 Tcd6 28. Txd6 Txd6 29. h4 Td4 30. De2 Rh7 31. h5 Dg5 32. Dxg4 Dxg4 33. Fxg4 Td2 34. Fe6 Txb2 35. Rf1 Tb1+ 36. Re2 Tb2+ 37. Rd3 Txg2 38. h6 Te2 39. Rf3 Txe6 40. Tg5 1-0",
    result:"1-0 — Morphy écrase Owen avec son style attaque pur",
    analysis:"Morphy pulvérise la défense de son inventeur. Après un développement lent de Noir, l'assaut avec Dh5 et le sacrifice du Cavalier en e6 sont dévastateurs. Thèmes : exploitation du retard de développement, attaque directe.",
    result_en:"1-0 — Morphy crushes Owen with pure attacking style",
    analysis_en:"Morphy crushes the defense of its inventor. After Black's slow development, the assault with Qh5 and Knight sacrifice on e6 is devastating."
   }
  }
 },
 26:{
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
 27:{
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
 28:{
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
 29:{
  qid:{
   histoire:"La Défense Indienne Dame (QID, 3...b6) est l'une des défenses indiennes les plus solides contre 1.d4. Popularisée dans les années 1920 par Nimzowitsch et Réti dans le cadre de la révolution hypermoderne, le fianchetto du Fou dame (Fb7) crée une pression durable sur la grande diagonale. Petrosian, Karpov et Kramnik l'ont utilisée comme forteresse positionnelle.",
   histoire_en:"The Queen's Indian Defense (QID, 3...b6) is one of the most solid Indian defenses against 1.d4. Popularized in the 1920s by Nimzowitsch and Réti, the queenside Bishop fianchetto (Bb7) creates lasting pressure on the long diagonal. Petrosian, Karpov, and Kramnik used it as a positional fortress.",
   annotations:[
    {move:"1.d4 Cf6 2.c4 e6 3.Cf3 b6!",move_en:"1.d4 Nf6 2.c4 e6 3.Nf3 b6!",comment:"La QID — fianchetto du Fou dame pour contrôler la grande diagonale.",comment_en:"The QID — queenside Bishop fianchetto to control the long diagonal."},
    {move:"4.e3 Fb7 5.Fd3 d5",move_en:"4.e3 Bb7 5.Bd3 d5",comment:"Le Fou en b7 exerce une pression sur e4 — plan hypermoderne classique.",comment_en:"The Bishop on b7 exerts pressure on e4 — classic hypermodern plan."},
    {move:"6.0-0 Fd6 7.b3 0-0",move_en:"6.0-0 Bd6 7.b3 0-0",comment:"Développement harmonieux — les deux camps préparent une longue bataille stratégique.",comment_en:"Harmonious development — both sides prepare a long strategic battle."}
   ],
   game:{
    header:"Petrosian, T. vs Spassky, B. · Ch. du Monde 1963 (Moscou), Partie 22 · QID (E12)",
    moves:"1. d4 Cf6 2. c4 e6 3. Cf3 b6 4. Cc3 Fb7 5. Fg5 Fe7 6. e3 0-0 7. Dc2 d5 8. cxd5 exd5 9. Fd3 Cbd7 10. 0-0 c5 11. dxc5 bxc5 12. Ce5 Tc8 13. Tad1 Dc7 14. Fxf6 Cxf6 15. Ce2 Tfd8 16. Cg3 a6 17. Fxh7+ <span class='key-move'>Rxh7</span> 18. Dd3+ g6 19. Dxg6+ 1-0",
    result:"1-0 — Petrosian gagne brillamment contre la QID de Spassky",
    analysis:"Petrosian (connu pour son style défensif) montre un côté offensif surprenant. Le sacrifice 17.Fxh7+! est dévastateur. Thèmes : sacrifice de Fou en h7, attaque directe.",
    result_en:"1-0 — Petrosian wins brilliantly against Spassky's QID",
    analysis_en:"Petrosian (known for his defensive style) shows a surprising offensive side. The sacrifice 17.Bxh7+! is devastating."
   }
  }
 },
 30:{
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
 31:{
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
 32:{
  benoni:{
   histoire:"La Défense Benoni doit son nom à l'hébreu 'Ben-Oni' (fils de ma douleur), titre d'un traité de 1825. Rendue populaire par Tal, Fischer et Kasparov, elle est l'une des ouvertures les plus dynamiques contre 1.d4 : les Noirs acceptent une structure de pions inférieure en échange d'un jeu actif et de contre-chances sur l'aile roi.",
   histoire_en:"The Benoni Defense takes its name from the Hebrew 'Ben-Oni' (son of my sorrow), the title of an 1825 treatise. Popularized by Tal, Fischer, and Kasparov, it is one of the most dynamic openings against 1.d4: Black accepts an inferior pawn structure in exchange for active play and kingside counterchances.",
   annotations:[
    {move:"1.d4 Cf6 2.c4 c5 3.d5",move_en:"1.d4 Nf6 2.c4 c5 3.d5",comment:"La Benoni — les Noirs créent une tension immédiate. Blanc avance d5 — pion qui sera une cible ou un atout.",comment_en:"The Benoni — Black creates immediate tension. White advances d5 — pawn that will be a target or asset."},
    {move:"3...e6 4.Cc3 exd5 5.cxd5 d6",move_en:"3...e6 4.Nc3 exd5 5.cxd5 d6",comment:"Structure Benoni créée — Noir a une majorité sur l'aile roi, Blanc sur l'aile dame.",comment_en:"Benoni structure created — Black has a majority on the kingside, White on the queenside."},
    {move:"6.Cf3 g6 7.Fe2 Fg7 8.0-0 0-0",move_en:"6.Nf3 g6 7.Be2 Bg7 8.0-0 0-0",comment:"La Benoni Moderne — Noir prépare ...b5 ou ...e5 pour son contre-jeu.",comment_en:"The Modern Benoni — Black prepares ...b5 or ...e5 for counterplay."}
   ],
   game:{
    header:"Spassky, B. vs Fischer, R. · Ch. du Monde 1972 (Reykjavik), Partie 3 · Benoni Moderne (A61)",
    moves:"1. d4 Cf6 2. c4 e6 3. Cf3 c5 4. d5 exd5 5. cxd5 d6 6. Cc3 g6 7. Cd2 Cfg4 8. h3 Ch6 9. Cc4 Chf5 10. g4 Ch4 11. f4 Cbd7 12. Fe3 Tb8 13. De2 Ch5 14. gxh5 Dh4+ 15. Rdf2 Cxf2 16. Txf2 gxh5 17. Dxh5 Fg7 18. Fg2 0-0 19. Cc3 Df6+ 20. Rf1 Da6+ 21. Fe2 Db6 22. Cc3 a6 23. a4 Ff6 24. Tg1 Fxe5 25. fxe5 Df4+ 26. Re1 Dh4 27. Rdf2 Df4+ 28. Re1 Dh4 29. Rdf2 1/2-1/2",
    result:"1/2-1/2 — Fischer sauve une partie difficile avec la Benoni Moderne",
    analysis:"Fischer utilise la Benoni Moderne pour créer des complications immédiates. Malgré la pression de Spassky, Fischer trouve la nulle par répétition. Thèmes : contre-jeu dynamique, structure Benoni, lutte de flancs.",
    result_en:"1/2-1/2 — Fischer saves a difficult game with the Modern Benoni",
    analysis_en:"Fischer uses the Modern Benoni to create immediate complications. Despite Spassky's pressure, Fischer finds the draw by repetition."
   }
  }
 },
 33:{
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
 34:{
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
 35:{
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
 36:{
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
 37:{
  colle:{
   histoire:"Le Système Colle porte le nom du grand maître belge Edgard Colle (1897-1932), qui le développa et le joua presque exclusivement entre 1924 et 1932. Ce système — d4+Cf3+e3+Fd3+Cbd2+0-0 — est parfait pour les joueurs qui aiment les structures claires et les attaques mécaniques sur l'aile roi. Son sacrifice récurrent Fxh7+! reste l'un des thèmes les plus connus des ouvertures.",
   histoire_en:"The Colle System is named after Belgian grandmaster Edgard Colle (1897–1932), who developed and played it almost exclusively between 1924 and 1932. This system — d4+Nf3+e3+Bd3+Nbd2+0-0 — is perfect for players who like clear structures and mechanical kingside attacks. Its recurring sacrifice Bxh7+! remains one of the best-known opening themes.",
   annotations:[
    {move:"1.d4 d5 2.Cf3 Cf6 3.e3 e6 4.Fd3",move_en:"1.d4 d5 2.Nf3 Nf6 3.e3 e6 4.Bd3",comment:"Le Système Colle prend forme — structure solide et fermée.",comment_en:"The Colle System takes shape — solid and closed structure."},
    {move:"4...c5 5.c3 Cc6 6.Cbd2",move_en:"4...c5 5.c3 Nc6 6.Nbd2",comment:"Setup Colle complet — le Cavalier d2 soutient la future poussée e4 et le sacrifice Fxh7+.",comment_en:"Complete Colle setup — the d2-Knight supports the future e4-push and the Bxh7+ sacrifice."},
    {move:"6...Fd6 7.0-0 0-0 8.Ce5!",move_en:"6...Bd6 7.0-0 0-0 8.Ne5!",comment:"Le Cavalier occupe la case forte e5 — thème central du Colle. Le Fou d6 sera la cible de Fxh7+!",comment_en:"The Knight occupies the strong e5-square — central Colle theme. The d6-Bishop will be the Bxh7+! target."}
   ],
   game:{
    header:"Colle, E. vs Grünfeld, E. · Scarborough 1926 · Système Colle (D05)",
    moves:"1. d4 Cf6 2. Cf3 e6 3. e3 d5 4. Fd3 c5 5. b3 Cc6 6. Fb2 Fd6 7. 0-0 cxd4 8. exd4 0-0 9. Cbd2 b6 10. Ce5 Fb7 11. f4 Tc8 12. Tc1 Ce7 13. Fxh7+! Rxh7 14. Cg5+ Rg8 15. Dh5 Txc1 16. Txc1 Cf5 17. Cgxf7 Txf7 18. Dxf7+ Rh8 19. Dxe6 Cd6 20. Df7 De7 21. Df6+ Rg8 22. Te1 Ce4 23. Cxe4 dxe4 24. d5 Cc4 25. Fc3 e3 26. Te2 Cd6 27. Txe3 Dc7 28. Qf3 Fc8 29. Txd3 Fe6 30. Qg5 Df7 31. Td1 Rh7 32. Dc5 Cc8 33. Qd6 Fxd5 34. Fxg7 1-0",
    result:"1-0 — Colle gagne brillamment avec le sacrifice Fxh7+!",
    analysis:"Le thème récurrent : le sacrifice du Fou en h7 (13.Fxh7+!) pour lancer une attaque irrésistible. Avec le Cavalier en e5 soutenu par les pions, l'attaque est dévastatrice. Thèmes : sacrifice de Fou en h7, pion f4, case forte e5.",
    result_en:"1-0 — Colle wins brilliantly with the sacrifice Bxh7+!",
    analysis_en:"The recurring theme: the Bishop sacrifice on h7 (13.Bxh7+!) to launch an irresistible attack. With the Knight on e5 supported by pawns, the attack is devastating."
   }
  }
 },
 38:{
  colle_zukertort:{
   histoire:"Le Colle-Zukertort est une variante plus active du Système Colle, combinant les idées de Colle avec le fianchetto du Fou dame de Zukertort (b3+Fb2). Ce système hybride fut popularisé par le Néerlandais Jan van der Sterren. Aujourd'hui, il est fréquemment utilisé comme alternative solide au Système Londonien, le Fou b2 ajoutant une pression supplémentaire sur la grande diagonale.",
   histoire_en:"The Colle-Zukertort is a more active variant of the Colle System, combining Colle's ideas with Zukertort's queenside Bishop fianchetto (b3+Bb2). This hybrid system was popularized by Dutch player Jan van der Sterren. Today it is frequently used as a solid alternative to the London System.",
   annotations:[
    {move:"1.d4 d5 2.Cf3 Cf6 3.e3 e6 4.Fd3 c5 5.b3!",move_en:"1.d4 d5 2.Nf3 Nf6 3.e3 e6 4.Bd3 c5 5.b3!",comment:"Le coup Zukertort — fianchetto du Fou dame qui activera la grande diagonale.",comment_en:"The Zukertort move — queenside fianchetto that will activate the long diagonal."},
    {move:"5...Cc6 6.Fb2 Fd6 7.0-0 0-0",move_en:"5...Nc6 6.Bb2 Bd6 7.0-0 0-0",comment:"Le Fou b2 surveille le centre à distance — pression sur e5 et d4.",comment_en:"The Bishop on b2 watches the center from a distance — pressure on e5 and d4."},
    {move:"8.Cbd2 cxd4 9.exd4",move_en:"8.Nbd2 cxd4 9.exd4",comment:"Setup Colle-Zukertort complet — les Blancs préparent Ce5 et le sacrifice classique Fxh7+.",comment_en:"Complete Colle-Zukertort setup — White prepares Ne5 and the classic sacrifice Bxh7+."}
   ],
   game:{
    header:"Colle, E. vs Grünfeld, E. · Scarborough 1926 · Colle-Zukertort (D05)",
    moves:"1. d4 Cf6 2. Cf3 e6 3. e3 d5 4. Fd3 c5 5. b3 Cc6 6. Fb2 Fd6 7. 0-0 cxd4 8. exd4 0-0 9. Cbd2 b6 10. Ce5 Fb7 11. f4 Tc8 12. Tc1 Ce7 13. Fxh7+! Rxh7 14. Cg5+ Rg8 15. Dh5 Txc1 16. Txc1 Cf5 17. Cgxf7 Txf7 18. Dxf7+ Rh8 19. Dxe6 Cd6 20. Df7 De7 21. Df6+ Rg8 22. Te1 Ce4 23. Cxe4 dxe4 24. d5 Cc4 25. Fc3 e3 26. Te2 Cd6 27. Txe3 Dc7 28. Qf3 Fc8 29. Txd3 Fe6 30. Qg5 Df7 31. Td1 Rh7 32. Dc5 Cc8 33. Qd6 Fxd5 34. Fxg7 1-0",
    result:"1-0 — Colle gagne avec le sacrifice classique Fxh7+ dans le Colle-Zukertort",
    analysis:"Le Fou en b2 joue un rôle clé mais c'est le sacrifice 13.Fxh7+! qui décide. La coordination Fous-Cavaliers-Dame crée une attaque irréfutable. Thèmes : sacrifice du Fou en h7, coordination pièces actives, case forte e5.",
    result_en:"1-0 — Colle wins with the classic Bxh7+ sacrifice in the Colle-Zukertort",
    analysis_en:"The Bishop on b2 plays a key role but it is the sacrifice 13.Bxh7+! that decides. The Bishop-Knight-Queen coordination creates an irrefutable attack."
   }
  }
 },
 39:{
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
 40:{
  stonewall:{
   histoire:"L'Attaque Stonewall (d4+f4+e3+Cf3+Fd3) est une structure blanche inspirée de la Défense Hollandaise jouée en miroir. Utilisée par de nombreux joueurs du début du XXe siècle, notamment Max Euwe (champion du monde 1935-37). La case e5, contrôlée par les pions f4 et d4, est la case idéale pour le Cavalier blanc — une forteresse difficile à déloger.",
   histoire_en:"The Stonewall Attack (d4+f4+e3+Nf3+Bd3) is a White structure inspired by the Dutch Defense played in mirror image. Used by many early 20th century players, notably Max Euwe (world champion 1935–37). The e5-square, controlled by the f4 and d4 pawns, is the ideal square for the White Knight — a fortress difficult to dislodge.",
   annotations:[
    {move:"1.d4 d5 2.e3 Cf6 3.Fd3 c5 4.c3 e6 5.f4!",move_en:"1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 e6 5.f4!",comment:"Le coup emblématique du Stonewall — f4 soutient e5 et prépare l'attaque.",comment_en:"The signature Stonewall move — f4 supports e5 and prepares the attack."},
    {move:"5...Cc6 6.Cf3 Fd6 7.0-0 0-0 8.Ce5!",move_en:"5...Nc6 6.Nf3 Bd6 7.0-0 0-0 8.Ne5!",comment:"Le Cavalier en e5 — thème central du Stonewall. Très difficile à déloger.",comment_en:"The Knight on e5 — central theme of the Stonewall. Very difficult to dislodge."},
    {move:"8...Dc7 9.Cd2",move_en:"8...Qc7 9.Nd2",comment:"Le Cavalier d2 soutient Ce5 et prépare l'attaque sur l'aile roi.",comment_en:"The d2-Knight supports Ne5 and prepares the kingside attack."}
   ],
   game:{
    header:"Euwe, M. vs Loman, R. · Amsterdam 1923 · Attaque Stonewall (D00)",
    moves:"1. d4 d5 2. e3 Cf6 3. Fd3 c5 4. c3 e6 5. f4 Cc6 6. Cf3 Fd6 7. 0-0 0-0 8. Ce5 Dc7 9. Cd2 cxd4 10. cxd4 e5 11. dxe5 Cxe5 12. fxe5 Fxe5 13. Cdf3 Fg4 14. Cxg4 Cxg4 15. Fe2 h5 16. h3 Ch6 17. Fxh6 gxh6 18. Dd2 Rh7 19. Fxh5 Fg3 20. Tf3 Fh4 21. Txg3 Fxg3 22. Dxg3 Dxg3 23. Cxg3 Tg8 24. Cxh5 Txg2+ 25. Rxg2 f5 26. Fe2 Tae8 27. Cg3 f4 28. exf4 Txe2+ 29. Cxe2 1-0",
    result:"1-0 — Euwe gagne brillamment avec le Stonewall — thème Ce5 central",
    analysis:"Euwe illustre le thème central : 8.Ce5! Le Cavalier en e5, surprotégé par les pions f4 et d4, est très difficile à déloger. L'attaque sur l'aile roi démolit la défense noire. Thèmes : case forte e5, pion f4, attaque de flanc.",
    result_en:"1-0 — Euwe wins brilliantly with the Stonewall — central Ne5 theme",
    analysis_en:"Euwe illustrates the central theme: 8.Ne5! The Knight on e5, over-protected by the f4 and d4 pawns, is very difficult to dislodge. The kingside attack demolishes Black's defense."
   }
  }
 },
 41:{
  anglaise:{
   histoire:"L'Ouverture Anglaise (1.c4) fut popularisée par Howard Staunton lors de son match contre Saint-Amant en 1843, mais c'est Botvinnik qui en fit une arme de championnat du monde dans les années 1940-60. Hypermoderne par excellence, elle contrôle le centre à distance via la case d5 sans engager de pion central immédiatement.",
   histoire_en:"The English Opening (1.c4) was popularized by Howard Staunton in his match against Saint-Amant in 1843, but it was Botvinnik who made it a world championship weapon in the 1940s–60s. Hypermodern par excellence, it controls the center from a distance via the d5-square.",
   annotations:[
    {move:"1.c4 e5 2.Cc3 Cf6",move_en:"1.c4 e5 2.Nc3 Nf6",comment:"La Sicilienne Renversée — les Blancs ont la structure sicilienne avec un tempo de plus.",comment_en:"The Reversed Sicilian — White has the Sicilian structure with an extra tempo."},
    {move:"3.g3 d5 4.cxd5 Cxd5 5.Fg2",move_en:"3.g3 d5 4.cxd5 Nxd5 5.Bg2",comment:"Le Fou g2 est la pièce maîtresse — prêt pour une longue bataille stratégique.",comment_en:"The g2-Bishop is the key piece — ready for a long strategic battle."},
    {move:"5...Cxc3 6.bxc3",move_en:"5...Nxc3 6.bxc3",comment:"Noir échange le Cavalier — les Blancs ont des pions doublés mais un centre solide et le Fou g2.",comment_en:"Black exchanges the Knight — White has doubled pawns but a solid center and the g2-Bishop."}
   ],
   game:{
    header:"Kasparov, G. vs Karpov, A. · Ch. du Monde 1987 (Séville), Partie 24 · Anglaise (A13)",
    moves:"1. c4 e6 2. Cf3 Cf6 3. g3 d5 4. b3 Fe7 5. Fg2 0-0 6. 0-0 b6 7. Fb2 Fb7 8. e3 Cbd7 9. Cc3 Ce4 10. Ce2 a5 11. d3 Ff6 12. Dc2 Fxb2 13. Dxb2 Cd6 14. cxd5 Fxd5 15. d4 c5 16. Tfd1 Tc8 17. Cf4 Fxf3 18. Fxf3 De7 19. Tac1 Tfd8 20. dxc5 Cxc5 21. b4 axb4 22. Dxb4 Da7 23. a3 Cf5 24. Tb1 Txd1+ 25. Txd1 Dc7 26. Cd3 h6 27. Tc1 Ce7 28. Db5 Cf5 29. a4 Cd6 30. Db1 Da7 31. Ce5 <span class='key-move'>Cxa4!</span> 32. Txc8+ Cxc8 33. Dd1 Ce7 34. Dd8+ Rh7 35. Cxf7 Cg6 36. De8 De7 37. Dxa4 Dxf7 38. Fe4 Rg8 39. Db5 Cf8 40. Dxb6 Df6 41. Db5 De7 42. Rg2 g6 43. Da5 Dg7 44. Dc5 Df7 45. h4 h5 46. Dc6 De7 47. Fd3 Df7 48. Dd6 Rg8 49. e4 Rg8 50. Fc4 Rg7 51. De5+ Rg8 52. Dd6 Rg7 53. Fb5 Rg8 54. Fc6 Da7 55. Db4 Dc7 56. Db7 Dd8 57. e5 Da5 58. Fe8 Dc5 59. Df7+ Rh8 60. Fa4 Dd5+ 61. Rh2 Dc5 62. Fb3 Dc8 63. Fd1 Dc5 64. Rg2 1-0",
    result:"1-0 — Kasparov gagne la partie la plus dramatique de l'histoire des championnats du monde",
    analysis:"Kasparov doit impérativement gagner cette dernière partie (mené 12½–11½) pour conserver son titre. Le sacrifice 31...Cxa4! crée des complications explosives. Après 60 coups d'une technique irréprochable, Karpov abandonne.",
    result_en:"1-0 — Kasparov wins the most dramatic game in world championship history",
    analysis_en:"Kasparov must win this last game (trailing 12½–11½) to retain his title. The sacrifice 31...Nxa4! creates explosive complications. After 60 moves of impeccable technique, Karpov resigns."
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
    header:"Réti, R. vs Capablanca, J. · New York 1924 · Ouverture Réti (A09)",
    moves:"1. Cf3 d5 2. c4 e6 3. g3 Cf6 4. Fg2 Fd6 5. 0-0 0-0 6. b3 Ce4 7. Fb2 f5 8. d4 Cd7 9. Cbd2 Df6 10. Ce1 Cxd2 11. Dxd2 De7 12. Cf3 c6 13. Tfd1 Dc7 14. c5 Fc7 15. Cg5 Cf6 16. Cf3 Dg3! 17. Ce5 Fxe5 18. dxe5 Cg4 19. Fxg4 fxg4 20. Dxd5+ exd5 21. Tf1 Ff5 22. Te1 Te8 23. Txe8+ Txe8 24. Td1 Te2 25. Td2 Txd2 0-1",
    result:"0-1 — Capablanca gagne brillamment contre Réti",
    analysis:"Réti joue son propre système mais Capablanca trouve 16...Dg3! La Dame en g3 coordonne toutes les autres pièces. Le sacrifice final de Dame 20...Dxd5+!! mène à une finale gagnante. Thèmes : contre-attaque, sacrifice de Dame, coordination des pièces.",
    result_en:"0-1 — Capablanca wins brilliantly against Réti",
    analysis_en:"Réti plays his own system but Capablanca finds 16...Qg3! The Queen on g3 coordinates all other pieces. The final Queen sacrifice 20...Qxd5+!! leads to a winning endgame."
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
    header:"Fischer, R. vs Reshevsky, S. · New York 1958 · King's Indian Attack (A07)",
    moves:"1. Cf3 Cf6 2. g3 d5 3. Fg2 Ff5 4. 0-0 e6 5. d3 Fd6 6. Cbd2 h6 7. De1 a5 8. e4 Fg4 9. e5 Ff3 10. Cxf3 Fxe5 11. Cxe5 De7 12. c3 Ce4 13. Cc4 Cc6 14. Ca3 Cd8 15. Dd2 f6 16. f4 Rh7 17. f5 exf5 18. Cac4 Ce6 19. Ce3 Cxe5 20. Txf5 <span class='key-move'>Cg4!</span> 21. Cxg4 Dxh4 22. gxh4 Cxd3 23. Df2 Cxf2 24. Txf2 b5 25. Tf5 c5 26. Tf7+ Rg8 27. Ff1 b4 28. c4 d4 29. Fd3 Te8 30. Rc3 Td8 0-1",
    result:"0-1 — Reshevsky gagne dans une partie complexe du KIA",
    analysis:"Fischer utilise le KIA dès ses débuts. La rupture centrale 10.Cxe5! est l'idée typique — sacrifier du matériel pour l'initiative. Cependant Reshevsky trouve le contre-jeu brillant avec 20...Cg4! Thèmes : rupture centrale, sacrifice gambique, contre-jeu actif.",
    result_en:"0-1 — Reshevsky wins in a complex KIA game",
    analysis_en:"Fischer uses the KIA from his early years. The central break 10.Nxe5! is the typical idea — sacrificing material for the initiative. However, Reshevsky finds the brilliant counterplay with 20...Ng4!"
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
    header:"Nimzowitsch, A. vs Systemsson · Bled 1927 · Attaque Nimzo-Larsen (A01)",
    moves:"1. b3 e5 2. Fb2 Cc6 3. e3 d5 4. Fb5 Fd6 5. Ca3 Cf6 6. Ce2 0-0 7. 0-0 Te8 8. f4 exf4 9. exf4 d4 10. Fxc6 bxc6 11. c4 Ff5 12. cxd5 cxd5 13. Cg3 Fg6 14. Tc1 c5 15. Df3 c4 16. b4 Tb8 17. b5 d3 18. Dxd5 Txb5 19. Cxb5 Dxd5 20. Cxd6 Txe2 21. Txe2 Df3 22. Rh1 Da4 23. Cxf5 c3 24. Txc3 Qa6 25. Ce7+ Rf8 26. Cd5 Ce4 27. Cxc3 Cxc3 28. Fxc3 Qa6 29. Ce7 Qa6 30. Cc6 Re8 31. Ca7 Rd7 32. Cc6 Re6 33. Ce5 1-0",
    result:"1-0 — Nimzowitsch gagne avec sa propre Attaque",
    analysis:"Le Fou b2 contrôle les cases du centre à distance. Après 10.Fxc6, Blanc obtient une avance de développement. La manœuvre finale du Cavalier illustre la flexibilité de cette ouverture. Thèmes : hypermodernisme, Fou de fianchetto, Cavalier actif.",
    result_en:"1-0 — Nimzowitsch wins with his own Attack",
    analysis_en:"The b2-Bishop controls the center squares from a distance. After 10.Bxc6, White obtains a development lead. The final Knight maneuver illustrates the flexibility of this opening."
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
