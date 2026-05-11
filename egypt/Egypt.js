const menuToggle = document.getElementById("menuToggle");
const perant = document.querySelector(".perant");
menuToggle.addEventListener("click", function () {
    perant.classList.toggle("active");
});

const themeSwitch = document.getElementById("theme-switch");
const themeIcon = themeSwitch.querySelector("i");

themeSwitch.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
});
document.getElementById("bookBtn").addEventListener("click", function () {
    alert("Your booking has been confirmed!");
});