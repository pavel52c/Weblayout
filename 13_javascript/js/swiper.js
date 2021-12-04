const swiper = new Swiper('.slider__container', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
    el: '.slider__pagination',
  },
  // навигация
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  // скроллбар
  scrollbar: {
    el: '.slider__scrollbar',
  },
});
