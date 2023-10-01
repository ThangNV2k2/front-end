const hamburger = document.querySelector('.header--hamburger');
const navbar = document.querySelector('.header--navbar');

hamburger.addEventListener('click', function(e) {
    if(navbar.style.display === 'block') {
        navbar.style.display = "none";
    }
    else {
        navbar.style.display = "block";
    }
    
});