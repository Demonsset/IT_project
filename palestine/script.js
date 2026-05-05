const modeSwitch=document.getElementById('modeSwitch');
const modeIcon=document.getElementById('modeIcon')
const bodyElement =document.body;
modeSwitch.addEventListener('click',(e) => {
    bodyElement.classList.toggle('darkmode');

    if (document.body.classList.contains('darkmode')) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    } else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
} );
function showConfirmation() { 
    alert(" Thank you! Your journey to Palestine awaits. Explore Jerusalem, Acre & more. Tickets will be reserved.") ; }
