// Initialize Swiper 
var mySwiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetweenSlides: 30
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetweenSlides: 40
    }
  }
});
