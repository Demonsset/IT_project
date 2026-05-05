
const btn = document.getElementById("layoutToggle");
const body = document.getElementById("body");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("layout");
});