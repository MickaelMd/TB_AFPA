// ### Boucles en JavaScript

// #### Boucle `for`
// Permet de répéter un bloc de code un nombre de fois déterminé.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// #### Boucle `while`
// Répète un bloc de code tant qu'une condition est vraie.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// #### Boucle `do...while`
// Exécute un bloc de code une fois, puis répète la boucle tant qu'une condition est vraie.
i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// #### Boucle `for...of`
// Parcourt les objets itérables (comme les tableaux).
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}

// #### Boucle `for...in`
// Parcourt les propriétés énumérables d'un objet.
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}

// #### `break` et `continue`
// `break` interrompt une boucle, `continue` passe à l'itération suivante.
for (let i = 0; i < 10; i++) {
  if (i === 3) break; // interrompt la boucle
  if (i === 5) continue; // passe à l'itération suivante
  console.log(i);
}

// ### Conditions en JavaScript

// #### `if...else`
// Permet d'exécuter du code basé sur une condition.
let x = 10;
if (x > 10) {
  console.log("x est supérieur à 10");
} else if (x === 10) {
  console.log("x est égal à 10");
} else {
  console.log("x est inférieur à 10");
}

// #### Opérateur ternaire
// Une version compacte d'un `if...else`.
let message = x > 10 ? "x est supérieur à 10" : "x n'est pas supérieur à 10";
console.log(message);

// ### Gestion des exceptions

// #### `try...catch`
// Permet de gérer les erreurs qui peuvent se produire dans un bloc de code.
try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.error("Une erreur s'est produite : ", error);
} finally {
  console.log("Exécution terminée.");
}

// ### Structures additionnelles

// #### `switch`
// Permet de tester une variable contre plusieurs valeurs possibles.
let fruit = "pomme";
switch (fruit) {
  case "orange":
    console.log("C'est une orange");
    break;
  case "pomme":
    console.log("C'est une pomme");
    break;
  default:
    console.log("Fruit non reconnu");
}

// #### `setTimeout` et `setInterval`
// Permet d'exécuter du code après un délai ou à intervalles réguliers.
setTimeout(() => {
  console.log("Message après 2 secondes");
}, 2000);

const intervalId = setInterval(() => {
  console.log("Message toutes les secondes");
}, 1000);

clearInterval(intervalId); // arrête l'intervalle

// ### Variables

// #### Déclaration de variables
// Trois mots-clés principaux pour déclarer des variables : `var`, `let`, et `const`.
var a = 10; // portée fonctionnelle, redéclarable
let b = 20; // portée de bloc, non redéclarable
const c = 30; // portée de bloc, non redéclarable, non réassignable

// ### Fonctions

// #### Fonctions classiques
// Déclaration de fonctions avec le mot-clé `function`.
function maFonction(param1, param2) {
  return param1 + param2;
}
console.log(maFonction(5, 10)); // 15

// #### Fonctions fléchées
// Syntaxe plus concise pour les fonctions anonymes.
const maFonctionArrow = (param1, param2) => param1 + param2;
console.log(maFonctionArrow(5, 10)); // 15

// #### Fonctions d'ordre supérieur
// Les fonctions qui acceptent d'autres fonctions comme arguments ou qui retournent des fonctions.
function appliquerOperation(a, b, operation) {
  return operation(a, b);
}
const addition = (x, y) => x + y;
console.log(appliquerOperation(5, 10, addition)); // 15

// ### Objets

// #### Déclaration d'objets
// Les objets sont des collections de propriétés et méthodes.
const personne = {
  nom: "John",
  age: 30,
  saluer: function () {
    console.log("Bonjour, " + this.nom);
  },
};
console.log(personne.nom); // John
personne.saluer(); // Bonjour, John

// #### Déstructuration d'objets
// Permet d'extraire des propriétés d'un objet dans des variables distinctes.
const { nom, age } = personne;
console.log(nom); // John
console.log(age); // 30

// ### Tableaux

// #### Déclaration de tableaux
// Les tableaux sont des collections d'éléments.
const fruits = ["pomme", "banane", "orange"];
console.log(fruits[0]); // pomme

// #### Méthodes de tableaux
// Quelques méthodes courantes pour manipuler les tableaux.
fruits.push("mangue");
console.log(fruits); // ["pomme", "banane", "orange", "mangue"]
fruits.pop();
console.log(fruits); // ["pomme", "banane", "orange"]
fruits.shift();
console.log(fruits); // ["banane", "orange"]
fruits.unshift("fraise");
console.log(fruits); // ["fraise", "banane", "orange"]

// #### Boucle `forEach`
// Permet de parcourir les éléments d'un tableau.
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// ### Iterators et Generators

//   #### Iterators
// Permet de parcourir des collections d'éléments de manière personnalisée.
const iterable = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: "one", done: false };
        } else if (step === 2) {
          return { value: "two", done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
for (const value of iterable) {
  console.log(value); // 'one', 'two'
}

//   #### Generators
// Une fonction spéciale qui permet de créer des iterators plus facilement.
function* generatorFunction() {
  yield "one";
  yield "two";
  return "done";
}
const generator = generatorFunction();
console.log(generator.next().value); // 'one'
console.log(generator.next().value); // 'two'
console.log(generator.next().value); // 'done'

// ### Promises et Async/Await

// #### Promises
// Utilisées pour la programmation asynchrone.
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Succès après 2 secondes");
  }, 2000);
});
maPromesse
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// #### Async/Await
// Syntaxe plus lisible pour travailler avec les promesses.
async function attendre() {
  const result = await maPromesse;
  console.log(result);
}
attendre();

// ### Fonctions constructeur

// Les fonctions constructeurs sont utilisées pour créer des objets.
function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
  this.saluer = function () {
    console.log("Bonjour, " + this.nom);
  };
}
const personne1 = new Personne("Alice", 25);
const personne2 = new Personne("Bob", 30);
console.log(personne1.nom); // Alice
personne2.saluer(); // Bonjour, Bob

// ### Prototypes

// Chaque fonction constructeur a une propriété prototype qui permet d'ajouter des méthodes et des propriétés partagées par toutes les instances.
Personne.prototype.direAge = function () {
  console.log(this.age);
};
personne1.direAge(); // 25
personne2.direAge(); // 30

// ### Classes

// Les classes sont une syntaxe plus moderne pour créer des objets et des prototypes.
class PersonneClass {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
  saluer() {
    console.log("Bonjour, " + this.nom);
  }
  direAge() {
    console.log(this.age);
  }
}
const personneClass1 = new PersonneClass("Alice", 25);
personneClass1.saluer(); // Bonjour, Alice
personneClass1.direAge(); // 25

// ### Closure (Fermeture)

// Une fermeture est une fonction qui se souvient de l'environnement lexical dans lequel elle a été créée.
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// ### Symboles

// Les symboles sont des identifiants uniques et immuables.
const sym1 = Symbol("identifiant");
const sym2 = Symbol("identifiant");
console.log(sym1 === sym2); // false

const objWithSymbols = {
  [sym1]: "valeur1",
  [sym2]: "valeur2",
};
console.log(objWithSymbols[sym1]); // valeur1
console.log(objWithSymbols[sym2]); // valeur2

// ### Map et Set

// #### Map
// Une collection de paires clé/valeur où les clés peuvent être de n'importe quel type.
const map = new Map();
map.set("cle1", "valeur1");
map.set("cle2", "valeur2");
console.log(map.get("cle1")); // valeur1
console.log(map.size); // 2

// #### Set
// Une collection de valeurs uniques.
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Ignoré car la valeur est déjà présente
console.log(set.size); // 2
console.log(set.has(1)); // true

// ### Modules

// #### Exportation et importation de modules

// module.js
// export const PI = 3.14;
// export function addition(a, b) {
//     return a + b;
// }

// main.js
// import { PI, addition } from './module.js';
// console.log(PI);  // 3.14
// console.log(addition(2, 3));  // 5

// ### JSON

// #### Conversion d'un objet en JSON
const objToJson = { nom: "Alice", age: 25 };
const json = JSON.stringify(objToJson);
console.log(json); // {"nom":"Alice","age":25}

// #### Conversion de JSON en objet
const jsonString = '{"nom":"Alice","age":25}';
const objFromJson = JSON.parse(jsonString);
console.log(objFromJson.nom); // Alice

// ### AJAX avec Fetch

// Utilisation de l'API Fetch pour faire des requêtes HTTP asynchrones.
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erreur:", error));

// ### LocalStorage et SessionStorage

// #### LocalStorage
// Stockage persistant des données dans le navigateur.
localStorage.setItem("nom", "Alice");
const nomLocalStorage = localStorage.getItem("nom");
console.log(nomLocalStorage); // Alice
localStorage.removeItem("nom");
localStorage.clear(); // Efface tout le stockage local

// #### SessionStorage
// Stockage des données pour la session actuelle (disparaît après la fermeture de l'onglet).
sessionStorage.setItem("nom", "Alice");
const nomSessionStorage = sessionStorage.getItem("nom");
console.log(nomSessionStorage); // Alice
sessionStorage.removeItem("nom");
sessionStorage.clear(); // Efface tout le stockage de session

// ### Opérateurs avancés

//   #### Opérateur de déstructuration
// Permet d'extraire des valeurs des tableaux ou des objets.
const [first, second] = [1, 2, 3];
console.log(first, second); // 1, 2

const { nom: nomPersonne, age: agePersonne } = personne;
console.log(nomPersonne, agePersonne); // John, 30

//   #### Opérateur de propagation
// Permet d'étendre les éléments d'un tableau ou les propriétés d'un objet.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a: 1, b: 2, c: 3}

// ### DOM Manipulation

// Manipulation du Document Object Model (DOM).
document.getElementById("id"); // Sélectionne un élément par son ID
document.querySelector(".classe"); // Sélectionne le premier élément avec la classe spécifiée
document.querySelectorAll(".classe"); // Sélectionne tous les éléments avec la classe spécifiée

const element = document.createElement("div");
element.textContent = "Bonjour";
document.body.appendChild(element); // Ajoute l'élément à la fin du body

// ### Evenements

//   #### Gestion des événements
// Permet de répondre aux interactions de l'utilisateur.
element.addEventListener("click", () => {
  console.log("Element cliqué");
});

// ### Utilitaires divers

//   #### `typeof`
// Permet de connaître le type d'une variable.
console.log(typeof 123); // "number"
console.log(typeof "abc"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (cela peut prêter à confusion)
console.log(typeof function () {}); // "function"

// ### `eval()`
// `eval()` évalue du code JavaScript représenté sous forme de chaîne de caractères.
const code = "2 + 2";
const resultatEval = eval(code); // 4
console.log(resultatEval);
