const mode=document.getElementById('modeSwitch');
const bodyElement =document.body;
mode.addEventListener('click',(e) => {
bodyElement.classList.toggle('dark')
} );
function showConfirmation() {
    alert(" Thank you! Your journey to Palestine awaits. Explore Jerusalem, Acre & more. Tickets will be reserved.");
};
