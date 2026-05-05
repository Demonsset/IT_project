const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", function (e) {
  e.preventDefault();

  document.body.classList.toggle("dark-mode");
});

const btn = document.getElementById("layoutToggle");
const body = document.getElementById("body");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("layout");
});