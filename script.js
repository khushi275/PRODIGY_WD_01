// JavaScript to handle scroll effect and menu interactions
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Check if the page has scrolled down more than 100px
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
