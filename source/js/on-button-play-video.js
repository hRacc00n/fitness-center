import {videoButton, videoFrame} from './variables';

const onButtonPlayVideo = () => {
  videoFrame.classList.remove('about__iframe--js');
  videoButton.classList.add('about__button--js');
  videoFrame.src += '?controls=1&fs=0&modestbranding=1&rel=0&mute=1&showinfo=0&autoplay=1';
  videoButton.removeEventListener('click', onButtonPlayVideo);
};

export {onButtonPlayVideo};
