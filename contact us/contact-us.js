
const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

});
const themeSwitch = document.getElementById("theme-switch");
const themeIcon = themeSwitch.querySelector("i");
themeSwitch.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
    else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
});
document.querySelector(".send").onclick = function () {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim();
    let note = document.getElementById("text").value.trim();
    if (name === "" || email === "" || number === "" || note === "") {
        alert("Please fill all fields!");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email!");
        return;
    }
    if (isNaN(number)) {
        alert("Phone number must be numbers only!");
        return;
    }
    alert("Message sent successfully!");
};