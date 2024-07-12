let mytextbox = document.getElementById("message");
let mydropdown = document.getElementById("f_envir_bis");

mydropdown.onchange = function () {
  let mydropdownValue = mydropdown.options[mydropdown.selectedIndex].value;
  mytextbox.value = mytextbox.value + " " + mydropdownValue;
};

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (checkform()) {
      alert("Formulaire validé !");
    }
  });

function checkform() {
  let societe = document.getElementById("societe").value;
  let personne = document.getElementById("f_personne").value;
  let postal = document.getElementById("f_postal").value;
  let ville = document.getElementById("f_ville").value;
  let email = document.getElementById("f_email").value;

  if (societe.length < 1) {
    alert("La 'Société' doit comporter au moins 1 caractère.");
    return false;
  }

  if (personne.length < 1) {
    alert("La 'Personne à contacter' doit comporter au moins 1 caractère.");
    return false;
  }

  if (!/^\d{5}$/.test(postal)) {
    alert("Le 'Code postal' doit comporter 5 caractères numériques.");
    return false;
  }

  if (ville.length < 1) {
    alert("La 'Ville' doit comporter au moins 1 caractère.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Le Email doit comporter au moins le caractère '@'.");
    return false;
  }

  return true;
}

// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const mouseTracker = document.getElementById("mouse-tracker");

  document.addEventListener("mousemove", function (souris) {
    mouseTracker.style.left = souris.clientX + "px";
    mouseTracker.style.top = souris.clientY + "px";
  });
});
