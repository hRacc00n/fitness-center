import {videoButton, monthButtons} from './variables';
import {onButtonPlayVideo} from './on-button-play-video';
import {onButtonChangePrice} from './on-button-change-price';

// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

videoButton.addEventListener('click', onButtonPlayVideo);
monthButtons.addEventListener('click', onButtonChangePrice);
