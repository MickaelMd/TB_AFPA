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

newlist_authors.forEach((newlist_authors) => {
  let name = document.createElement("option");
  name.text = newlist_authors;
  authors_select.add(name);
});

newlist_categories.forEach((newlist_categories) => {
  let cate = document.createElement("option");
  cate.text = newlist_categories;
  categorie_select.add(cate);
});

categorie_select.addEventListener("click", () => {
  authors_select.value = "";
});

authors_select.addEventListener("click", () => {
  categorie_select.value = "";
});

// document.getElementById("displaycards").innerHTML = "";

// test

// function gencard() {
//   fetch("assets/json/books.json")
//     .then((response) => response.json())
//     .then((data) => {
//       let cardDiv = document.getElementById("displaycards");
//       cardDiv.innerHTML = "";
//       data.forEach(() => {
//         let cardbook = document.createElement("Div");
//         cardbook.className = "cardbook";
//         cardDiv.appendChild(cardbook);

//         let img = document.createElement("p");
//         img.textContent = data.thumbnailUrl;
//         console.log("test");
//         cardDiv.appendChild(img);
//       });
//     });
// }

// gencard();

function testdisplay() {
  fetch("assets/json/books.json").then((response) =>
    response.json().then((date) => {
      let test = 0;
    })
  );
}
