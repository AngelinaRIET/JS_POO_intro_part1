"use strict"

// IMPORTE LE MODULE "ANSIColours"
import ANSIColours from'./lib/ANSIColours.js';

// 1/ ICI, IL FAUT INSTANCIER LA CLASSE "ANSIColours" ET CRÉER UN NOUVEL OBJET
// SYNTAXE :
// let monObjet = new MaClasse();
//        ↑               ↑
//  objet à créer    classe à instancier
let monObjetdeCouleur = new ANSIColours

let toto = new ANSIColours();

// 2/ ENSUITE VOUS POURREZ TESTER L'AFFICHAGE DES COULEURS DANS LE TERMINAL
// EXEMPLE : 
// console.log(monObjet.BG_RED + "Texte sur fond rouge" + monObjet.RESET);
//                         ↑                                        ↑
//                  couleur souhaitée                        reset des couleurs

console.log(monObjetdeCouleur.BG_RED + "DFSLIFD" + monObjetdeCouleur.RESET)