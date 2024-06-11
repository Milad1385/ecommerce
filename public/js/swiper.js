const secondSlider = new Swiper(".secondSwiper", {
  slidesPerView: 6,
  spaceBetween: 15,
  // Navigation arrows
});

const mainSwiper = new Swiper(".mainSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper2,
  },
});
