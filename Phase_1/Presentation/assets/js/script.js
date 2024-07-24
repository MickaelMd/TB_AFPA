let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle_nav");
  const navbar = document.getElementById("navbar");

  toggleButton.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
  });
});

AOS.init();
