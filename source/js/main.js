import {videoButton, monthButtons, questionsBlock, buttonsBlock} from './variables';
import {onButtonPlayVideo} from './on-button-play-video';
import {onButtonChangePrice} from './on-button-change-price';
import './swiper-slider';
import {onButtonToggleOpen} from './on-button-toggle-open';
import {addListener} from './on-button-change-content';
import {runCheckForm} from './run-check-form';


videoButton.addEventListener('click', onButtonPlayVideo);
monthButtons.addEventListener('click', onButtonChangePrice);
questionsBlock.addEventListener('click', onButtonToggleOpen);
addListener(buttonsBlock);
runCheckForm();
