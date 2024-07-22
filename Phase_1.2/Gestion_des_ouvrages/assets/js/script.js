const reponse = await fetch("assets/json/books.json");
const data = await reponse.json();

const list_authors = data.map((data) => data.authors);
const list_cetegories = data.map((data) => data.categories);

console.log(list_authors.length);
console.log(list_cetegories.lvalue);
