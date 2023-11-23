var navToggle = document.querySelector('.hamburger');
const primaryNav = document.querySelector('.primary-nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

navToggle.addEventListener('click', () => {
  primaryNav.classList.toggle('opened');
  main.toggleAttribute('data-visible');
  footer.toggleAttribute('data-visible');
});
