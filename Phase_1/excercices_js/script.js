// let nom;
// let prenom;

// nom = prompt("Saisissez votre nom");
// prenom = prompt("Saisissez votre prenom");

// alert(nom + " " + prenom);

//  ----------------------------------------------------------Afficher du texte

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

// ------------------------------------------------------------------Opérateurs

// let a = 100;
// let b = 100;
// let c = 1.0;
// let d = true;

// console.log("Ceci est une chaîne de caractères : " + a);
// console.log(b - 1);
// console.log(a + c);
// console.log(d != d);

// ---------------------------------Instructions conditionnelles et alternatives

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

// ---------------------------------------------------------------Les boucles

let prenom = "";
let compteur = 0;

do {
  prenom = prompt("Prénom ?");
  compteur++;
} while (prenom !== "");
console.log(compteur);

// ----------------------------------------------------------------------------
