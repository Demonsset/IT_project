const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
const parent = document.querySelector(".perant");

if (localStorage.getItem("darkmode") === "active") {
    document.body.classList.add("darkmode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("darkmode", "active");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("darkmode", null);
    }
});

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    parent.classList.toggle("menu-open");
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