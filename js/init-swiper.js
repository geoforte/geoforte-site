// Initialize Swiper
var mySwiper = new Swiper('.swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
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
      spaceBetween: 30 // Corrected property name
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 2, // Adjusted for better responsiveness
      slidesPerGroup: 2,
      spaceBetween: 40 // Corrected property name
    }
  }
});