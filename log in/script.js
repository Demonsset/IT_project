const modeToggle = document.querySelector('.sync-icon');
const body = document.body;

modeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.toggle('light-mode');

    const icon = this.querySelector('i');

    if (body.classList.contains('light-mode')) {

        icon.classList.replace('fa-moon', 'fa-sun');
        icon.style.color = '#f4b400';
    } else {

        icon.classList.replace('fa-sun', 'fa-moon');
        icon.style.color = '#ad936d'; 
    }
});;
