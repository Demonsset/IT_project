if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-icons').className = 'fas fa-moon';
}
const icon = document.getElementById('theme-icons');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // تبديل شكل الأيقونة فقط
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-moon'; 
        localStorage.setItem('theme', 'dark');
    } else {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light'); 
    }
}


document.getElementById('theme-toggle').onclick = toggleDarkMode;
const layoutBtn = document.getElementById('layout-toggle');


if (localStorage.getItem('layout') === 'sidebar') {
    document.body.classList.add('sidebar-layout');
}


layoutBtn.onclick = function() {
    document.body.classList.toggle('sidebar-layout');
    
    
    if (document.body.classList.contains('sidebar-layout')) {
        localStorage.setItem('layout', 'sidebar');
    } else {
        localStorage.setItem('layout', 'topbar');
    }
}
 