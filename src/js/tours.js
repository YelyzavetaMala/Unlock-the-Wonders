import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const reviewsSwiper = new Swiper('.tours-swiper', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  navigation: {
    nextEl: '.tours-button-next',
    prevEl: '.tours-button-prev',
  },
  pagination: {
    el: '.tours-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    834: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
