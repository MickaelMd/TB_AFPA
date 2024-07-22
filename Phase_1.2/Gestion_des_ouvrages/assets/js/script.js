const reponse = await fetch("assets/json/books.json");
const data = await reponse.json();

const list_authors = data.map((book) => book.authors);
const all_authors = [].concat(...list_authors);
const newlist_authors = [...new Set(all_authors)];
newlist_authors.sort((a, b) => a.localeCompare(b));
console.log(newlist_authors);

const list_categories = data.map((book) => book.categories);
const all_categories = [].concat(...list_categories);
const newlist_categories = [...new Set(all_categories)];
newlist_categories.sort((a, b) => a.localeCompare(b));
console.log(newlist_categories);

const authors_select = document.getElementById("auteurs_select");
const categorie_select = document.getElementById("categorie_select");

newlist_authors.forEach((author) => {
  let name = document.createElement("option");
  name.text = author;
  authors_select.add(name);
});

newlist_categories.forEach((category) => {
  let cate = document.createElement("option");
  cate.text = category;
  categorie_select.add(cate);
});

categorie_select.addEventListener("click", () => {
  authors_select.value = "";
});

authors_select.addEventListener("click", () => {
  categorie_select.value = "";
});

function testdisplay(data) {
  let listelivres = document.getElementById("displaycards");
  listelivres.innerHTML = "";

  data.forEach((book) => {
    let displaybook = document.createElement("div");
    displaybook.className = "card";
    listelivres.appendChild(displaybook);

    let thumbnail = document.createElement("img");
    thumbnail.src = book.thumbnailUrl;
    thumbnail.alt = book.title;
    thumbnail.className = "thumbnail";
    displaybook.appendChild(thumbnail);

    let nomlivre = document.createElement("h4");
    nomlivre.textContent = `Titre: ${book.title}`;
    displaybook.appendChild(nomlivre);

    let auteur = document.createElement("p");
    auteur.textContent = `Auteur(s): ${book.authors.join(", ")}`;
    displaybook.appendChild(auteur);

    let categorie = document.createElement("p");
    categorie.textContent = `Catégorie(s): ${book.categories.join(", ")}`;
    displaybook.appendChild(categorie);

    let description = document.createElement("p");
    description.textContent = `Description: ${book.shortDescription}`;
    displaybook.appendChild(description);
  });
}

testdisplay(data);
