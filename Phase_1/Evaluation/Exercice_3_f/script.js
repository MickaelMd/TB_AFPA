let tab = [
  "Audrey",
  "Aurélien",
  "Flavien",
  "Jérémy",
  "Laurent",
  "Melik",
  "Nouara",
  "Salem",
  "Samuel",
  "Stéphane",
];
let uservalue;
let pos;

console.log(tab.length);
do {
  uservalue = prompt("Donne moi un prénom !");
  if (tab.includes(uservalue)) {
    pos = tab.indexOf(uservalue);
    tab.splice(pos, 1);
    console.log(tab);
  } else {
    console.log("Prénom non trouvé");
  }
} while (tab.length > 0);

// Fonctionne sur firefox mais pas sur chrome, aucune idée du pourquoi
