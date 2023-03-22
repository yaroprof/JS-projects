// Selecting elements
const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

// Toggle navbar menu on burger menu click
navbarBurger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  navbarBurger.classList.toggle('active');
});

// Hide navbar menu when clicking on a menu item
navbarMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navbarMenu.classList.remove('active');
    navbarBurger.classList.remove('active');
  }
});
