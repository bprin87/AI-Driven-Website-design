// Show menu on mobile screen
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

// Swap departure and destination inputs
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

// Hide return date if one way trip is selected
let returnDate = document.querySelector('.return-date');
let selectTripType = document.querySelector('#trip');

selectTripType.addEventListener('change', (event) => {
    
    let selectedValue = event.target.value;

    if (selectedValue === 'one-way') {
        returnDate.classList.add('return-date-none');
    } else {
        returnDate.classList.remove('return-date-none');
    }
    
});


// Zoom in and out of world map

// get original width of map
let originalWidth;

window.onload = function() {
    
    let map = document.querySelector('.map-container img');
    originalWidth = map.clientWidth;
}

// Zoom in by 100px
function zoomIn() {

    let map = document.querySelector('.map-container img');
    let currentWidth = map.clientWidth;
    
    map.style.width = (currentWidth + 100) + 'px';
    
}

// Zoom out by 100px
function zoomOut() {

    let map = document.querySelector('.map-container img');
    let currentWidth = map.clientWidth;
    
    // if the current width is greater than the original width
    // zoom out
    if (currentWidth > originalWidth){
        map.style.width = (currentWidth - 100) + 'px'
    }
    
}


