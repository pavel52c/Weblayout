const burgerBtn = document.querySelector('.header__burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});
