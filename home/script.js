const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", function (e) {
  e.preventDefault();

  document.body.classList.toggle("darkmode");
});

