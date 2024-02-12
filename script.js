// Show menu on mobile screen
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});