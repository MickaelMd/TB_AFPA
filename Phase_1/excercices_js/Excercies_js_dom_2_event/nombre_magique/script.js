// let input = "";
// let testinput = "test";
// function clickclick() {
//   document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("button1").addEventListener("click", function (e) {
//       input = document.getElementById("textBox1").value;
//       inputvalue();
//       e.preventDefault();
//     });
//   });
// }

// // }

// function inputvalue() {
//   console.log(input);
// }

// let number = "";

// function getRandomInt(max) {
//   return (number = Math.floor(Math.random() * max));
// }

// console.log(getRandomInt(100));

// // console.log(number);
// // console.log(input);
// function verif(input, number) {
//   if (input < number) {
//     console.log("plus petit");
//   }
//   if (input > number) {
//     console.log("plus grand");
//   }
//   if (input === number) {
//     console.log("good");
//   } else {
//     console.log("error");
//   }
// }
// console.log("test " + number);
// console.log("test " + input);

// -----------------------------------------------

let input = "";
let button = "";
let number = rnumber(1, 100);

function rnumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getvalue() {
  var n = document.getElementById("textBox1").value;
  console.log(n);
}

function verif() {
  if (input == number) {
    console.log("good");
  } else if (input < number) {
    console.log("trop petit");
  } else if (input > number) {
    console.log("trop grand");
  }
}

console.log("chiffre " + number);
console.log(input);
