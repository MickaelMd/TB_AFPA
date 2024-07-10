// function getmsg() {
//   let input = document
//     .getElementById("textBox1")
//     .addEventListener("click", value);
//   {
//     alert(input);
//   }
// }

// let chiffre = document.getElementById("textBox1");

// console.log(chiffre);

// form data

// https://www.youtube.com/watch?v=55EXq7ZjL4Q

let input = "";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button1").addEventListener("click", function () {
    input = document.getElementById("textBox1").value;
    alert(input);
    useInputValue();
  });
});

function useInputValue() {
  console.log(input);
}
