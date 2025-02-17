import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper1 = new Swiper('.swiper-container-1', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    834: {
      slidesPerView: 1,
      spaceBetween: 32,
    },

    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});
