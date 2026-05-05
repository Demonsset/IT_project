const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
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
}
const menuBtn = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
const parent = document.querySelector(".perant");
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    parent.classList.toggle("menu-open");
});