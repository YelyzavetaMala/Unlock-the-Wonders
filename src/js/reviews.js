import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper3 = new Swiper('.swiper-container-3', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },
  pagination: {
    el: '.swiper-pagination-3',
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
