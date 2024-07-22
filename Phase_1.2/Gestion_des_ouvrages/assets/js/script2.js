let aut_select;
let cat_select;

// fetch("books.json").then((reponse) => console.table(reponse));

aut_select = document.getElementById("auteurs_select");
cat_select = document.getElementById("categorie_select");

window.addEventListener("load", (event) => {
  console.log("aut test");
  // display_aut_slect();
  // tri_aut_list();
  test();
});

function test(list) {
  let data = books.parse(jstring);
  return data.authors.filter((item, index) => list.indexOf(item) === index);
}

console.log(test(list));

// window.addEventListener("load", (event) => {
//   console.log("cat test");
//   display_cat_slect();
// });

// function tri_aut_list() {
// fetch("books.json")
// .then((response) => response.json())
// .then((data) => {
// data.forEach((data) => {
// console.log(data.authors);
// let newdata = data.filter((c, index) => {
// return data.authors(c) !== index;
// console.log(newdata);
// });
// });
// });
// }

// console.log(tri_aut_list());

// let i = 0;

// function display_aut_slect() {
//   fetch("books.json")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((data) => {
//         let name = document.createElement("option");
//         // i++;
//         name.text = data.authors.join(", ");
//         aut_select.add(name);
//         console.log(data.authors);
//         // console.log(i);
//       });
//     });
// }

// --------------------------------------------------

// function tri_aut_list() {
// fetch("books.json")
// .then((response) => response.json())
// .then((data) => {});
// }
