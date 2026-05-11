const modeSwitch=document.getElementById('modeSwitch');
const modeIcon=document.getElementById('modeIcon')
const bodyElement =document.body;
modeSwitch.addEventListener('click',(e) => {
    bodyElement.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    } else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
} );
function showConfirmation() { 
    alert(" Thank you! Your journey to Palestine awaits. Explore Jerusalem, Acre & more. Tickets will be reserved.") ; }
