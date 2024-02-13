// Show menu on mobile screen
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

// function to swap departure and destination inputs
function swap() {

    let fromInput = document.querySelector('#fromInput');
    let toInput = document.querySelector('#toInput');

    let tempValue = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = tempValue;

    let tempPlaceholder = fromInput.placeholder;
    fromInput.placeholder = toInput.placeholder;
    toInput.placeholder = tempPlaceholder;

    // if label is from, from input must say where from
    // if label is to, to input must say where to
    let departureLabel = document.querySelector('#from');
    
    if (departureLabel.innerText === 'From') {
        fromInput.placeholder = 'Where from?';
        toInput.placeholder = 'Where to?'
    } 

}