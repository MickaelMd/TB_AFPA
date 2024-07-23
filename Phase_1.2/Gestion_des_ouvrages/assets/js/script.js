const reponse = await fetch("assets/json/books.json");
const data = await reponse.json();

const list_authors = data.map((book) => book.authors);
const all_authors = [].concat(...list_authors);
const newlist_authors = [...new Set(all_authors)];
newlist_authors.sort((a, b) => a.localeCompare(b));
// console.log(newlist_authors);

const list_categories = data.map((book) => book.categories);
const all_categories = [].concat(...list_categories);
const newlist_categories = [...new Set(all_categories)];
newlist_categories.sort((a, b) => a.localeCompare(b));
// console.log(newlist_categories);

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

// ----------------------------------------------------

// function filtre() {}

// ----------------------------------------------------

function displaybook(data) {
  let listelivres = document.getElementById("displaycards");
  listelivres.innerHTML = "";

  data.forEach((book) => {
    let displaybook = document.createElement("div");
    displaybook.className = "card";
    listelivres.appendChild(displaybook);

    // ---------------------------------------

    let thumbnail = document.createElement("img");
    // if (book.thumbnailUrl == undefined) {
    //   thumbnail.src =
    //     "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
    // } else {
    //   thumbnail.src = book.thumbnailUrl;
    //   displaybook.appendChild(thumbnail);
    // }
    thumbnail.src = book.thumbnailUrl;
    displaybook.appendChild(thumbnail);

    console.log(book.thumbnailUrl);

    // ---------------------------------------

    let nomlivre = document.createElement("h4");
    nomlivre.textContent = `${book.title}`;
    displaybook.appendChild(nomlivre);

    let isbn = document.createElement("p");
    isbn.textContent = `ISBN : ${book.isbn}`;
    displaybook.appendChild(isbn);

    let datepubli = document.createElement("p");
    if (book.publishedDate == null) {
      datepubli.textContent = "";
    } else {
      datepubli.textContent = `Date de publication : ${book.publishedDate.dt_txt}`;
      // datepubli.textContent = `Date de publication : ${date.book.publishedDate.dt_txt.setUTCDate()}`;
    }
    displaybook.appendChild(datepubli);

    let numberpage = document.createElement("p");
    if (book.pageCount == 0) {
      numberpage.textContent = "";
    } else {
      numberpage.textContent = `Nombre de pages : ${book.pageCount}`;
    }
    displaybook.appendChild(numberpage);

    let auteur = document.createElement("p");
    auteur.textContent = `Auteur : ${book.authors.join(", ")}`;
    displaybook.appendChild(auteur);

    let categorie = document.createElement("p");
    categorie.textContent = `Catégorie : ${book.categories.join(", ")}`;
    displaybook.appendChild(categorie);

    let description = document.createElement("p");
    if (book.shortDescription == null) {
      categorie.textContent = "";
    } else {
      description.textContent = ` Description : ${book.shortDescription}`;
    }
    displaybook.appendChild(description);
  });
}

// ----------------------------------------------------
// ----------------------------------------------------

displaybook(data);
