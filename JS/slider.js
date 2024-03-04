const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    720: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".swiper-button.next",
    prevEl: ".swiper-button.prev",
  },
});
