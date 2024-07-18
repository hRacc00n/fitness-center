// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

const swiperJuri = new Swiper('.swiper:not(.swiper--reviews)', {
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

const swiperReviews = new Swiper('.swiper--reviews', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    1366: {
      simulateTouch: false,
    },
  },
  observeParents: true,
});

export {swiperJuri, swiperReviews};
