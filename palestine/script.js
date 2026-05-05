const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const layoutToggle = document.getElementById("layoutToggle");
const layoutIcon = layoutToggle.querySelector("i");

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

layoutToggle.addEventListener("click", function () {
    document.body.classList.toggle("sidebar-layout");
    if (document.body.classList.contains("sidebar-layout")) {
        layoutIcon.classList.replace("fa-grip", "fa-table-list");
    } else {
        layoutIcon.classList.replace("fa-table-list", "fa-grip");
    }
});

function showConfirmation() {
    alert("Thank you! Your journey to Palestine awaits. Explore Jerusalem, Acre & more. Tickets will be reserved.");
}