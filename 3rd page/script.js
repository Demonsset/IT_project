const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", function (e) {
  e.preventDefault();

  document.body.classList.toggle("dark-mode");
});

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.onclick = function () {
  navbar.classList.toggle("active");
};


