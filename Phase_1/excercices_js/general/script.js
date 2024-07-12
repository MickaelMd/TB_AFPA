// let nom;
// let prenom;

// nom = prompt("Saisissez votre nom");
// prenom = prompt("Saisissez votre prenom");

// alert(nom + " " + prenom);

//  -------Afficher du texte------------------------------------------------------------

// let premiernombre;
// let deuxiemenombre;

// premiernombre = prompt("Premier nombre ?");
// deuxiemenombre = prompt("Deuxieme nombre ?");
// let result = parseInt(premiernombre) + parseInt(deuxiemenombre);
// alert(result);

// ----------------------------------------------------------------------------

// let temp;

// temp = prompt("degrés celsius");
// temp = (temp * 9) / 5 + 32;

// alert(temp);

// --------Opérateurs----------------------------------------------------------

// let a = 100;
// let b = 100;
// let c = 1.0;
// let d = true;

// console.log("Ceci est une chaîne de caractères : " + a);
// console.log(b - 1);
// console.log(a + c);
// console.log(d != d);

// -----------Instructions conditionnelles et alternatives---------------------------------

// let nombre;
// nombre = prompt("Ecrivez un nombre");
// result = nombre % 2;
// if (result == 0) {
//   alert("Le nombre est pair");
// } else alert("Le nombre est impair");

// ----------------------------------------------------------------------------

// let age;
// age = prompt("Quelle est votre année de naissance");

// if (age <= 2006) {
//   console.log("Majeur");
// } else {
//   console.log("Mineur");
// }

// ----------------------------------------------------------------------------

// let premiernombre;
// let deuxiemenombre;
// let operateur;
// let result;

// premiernombre = prompt("Premier nombre ?");
// operateur = prompt("Entrer un opérateur (+, -, *, /)");
// deuxiemenombre = prompt("Deuxieme nombre ?");

// if (operateur == "+") {
//   result = parseInt(premiernombre) + parseInt(deuxiemenombre);

//   alert(result);
// } else if (operateur == "-") {
//   result = parseInt(premiernombre) - parseInt(deuxiemenombre);

//   alert(result);
// } else if (operateur == "*") {
//   result = parseInt(premiernombre) * parseInt(deuxiemenombre);

//   alert(result);
// } else if (operateur == "/") {
//   result = parseInt(premiernombre) / parseInt(deuxiemenombre);

//   alert(result);
// } else if ((operateur != "+", "-", "*", "/")) {
//   alert("Erreur !, il faut utiliser un opérateur correct (+, -, *, /)");
// }

// ---Les boucles----------Pas fini------------------------------------------------------

// let prenom = "";
// let compteur = 0;

// do {
//   prenom = prompt("Prénom ?");
//   compteur++;
// } while (prenom !== "");
// console.log(compteur);

// ----------------------------------------------------------------------------

// let number;

// number = prompt("Donne moi un nombre !");

// while (number >= 0) {
//   console.log(number);
//   number--;
// }

// -----------------???????????????????????---------------------------------------

// let numberone;
// let numbertwo;
// let numberthree;
// let somme;
// let result;
// numberone = parseInt(prompt("Donne moi un nombre !"));
// numbertwo = parseInt(prompt("Donne moi un autre nombre !"));
// numberthree = parseInt(prompt("Donne moi encore un autre nombre !"));
// somme = numberone + numbertwo + numberthree;
// result = (numberone + numbertwo + numberthree) / 3;
// console.log("La somme est de " + somme + " et la moyenne est de " + result);

// while (result >= 0) {
//   console.log(result);
//   result--;
// }

// --------------------------------------------------------------------------------

// let n = parseInt(prompt("Donne moi un nombre !"));
// let x = parseInt(prompt("Multiplier par quel nombre ?"));
// let i;
// let result;
// for (i = 1; i <= n; i++) {
//   result = i * x;
//   console.log(i + " x " + x + " = " + result);
// }

// -----------a revenir---------------------------------------------------

// let mot;
// let count = 0;
// mot = prompt("Ecrit moi un mot");
// for (let i = 0; i < mot.length; i++) {
//   let voyelle = mot[i];
//   if (
//     voyelle === "a" ||
//     voyelle === "e" ||
//     voyelle === "i" ||
//     voyelle === "o" ||
//     voyelle === "u" ||
//     voyelle === "y"
//   ) {
//     count++;
//   }
// }
// console.log("Nombre de voyelles : " + count);

// ------Fonctions----------------------------------------------------------

// Dans un autre fichier (function/)

// ------Tableaux---------------------------------------------------------

// let tableau;
// let taille;

// taille = parseInt(prompt("Taille du tableau ?"));
// tableau = [];
// i = taille;
// do {
//   tableau.push(prompt("mot a ajouter ?"));
//   taille = taille - 1;
// } while (taille > 0);
// console.log(tableau);

// ------Les objets natifs------------------------------------------------

let tab = [];
let nvalue = 0;
let somme;
let moyenne;
let uservalue;
let taille;

do {
  uservalue = parseInt(prompt("Nombre a rajouter ?"));
  nvalue = nvalue + 1;
  tab.push(uservalue);
} while (uservalue > 0);

tab.pop();

// console.log(tab[uservalue]);

// console.log([tab]);
// console.log(tab);
// console.log(nvalue);
// console.log(tab.length);

moyenne = tab.sort() / tab.length;
console.log(moyenne);

console.log(tab.sort());
