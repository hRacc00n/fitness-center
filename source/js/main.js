import {videoButton, monthButtons} from './variables';
import {onButtonPlayVideo} from './on-button-play-video';
import {onButtonChangePrice} from './on-button-change-price';
import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';

// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';

videoButton.addEventListener('click', onButtonPlayVideo);
monthButtons.addEventListener('click', onButtonChangePrice);

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
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
