import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const reviewsSwiper = new Swiper('.gallery', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  pagination: {
    el: '.gallery-pagination',
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
