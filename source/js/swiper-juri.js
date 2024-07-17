// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

const swiperJuri = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
    },
  },
  observeParents: true,
  loop: true,
});

export {swiperJuri};
