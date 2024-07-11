let mytextbox = document.getElementById("message");
let mydropdown = document.getElementById("f_envir_bis");

mydropdown.onchange = function () {
  let mydropdownValue = mydropdown.options[mydropdown.selectedIndex].value;
  mytextbox.value = mytextbox.value + " " + mydropdownValue;
};

function checkform() {}

let email_error = document.getElementById("f_email");
