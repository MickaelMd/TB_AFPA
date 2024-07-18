let aut_select;
let cat_select;

// fetch("books.json").then((reponse) => console.table(reponse));

aut_select = document.getElementById("auteurs_select");
cat_select = document.getElementById("categorie_select");

aut_select.addEventListener("click", () => {
  console.log("aut test");
  autlist;
});

cat_select.addEventListener("click", () => {
  console.log("cat test");
});

function autlist() {
  fetch("books.json")
    .then((response) => response.json())
    .then((books) => {});
  console.log(response);
}
