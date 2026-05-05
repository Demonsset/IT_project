const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
});
const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
const parent = document.querySelector(".perant");
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    parent.classList.toggle("menu-open");
});