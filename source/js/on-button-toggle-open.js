import {buttonsBlock, data} from './variables';

const toggleDisplay = (element, isVisible) => {
  element.style.display = isVisible ? 'block' : 'none';
};

const changeDisplayStatus = (element, evt, isVisible) => {
  element[evt.target.parentNode.dataset.id][0] = isVisible;
};

const onButtonToggleOpen = (evt) => {

  const typeActive = buttonsBlock.querySelector('.faq__button--active').dataset.name;
  const currentTarget = evt.target.nodeName;
  const currentBlock = evt.target.parentNode;
  const textBlock = currentBlock.children[2];

  if (currentTarget === 'BUTTON' || currentTarget === 'H3') {
    if (currentBlock.classList.contains('js-close')) {
      changeDisplayStatus(data[typeActive], evt, true);
      toggleDisplay(textBlock, true);
      setTimeout(() => {
        currentBlock.classList.toggle('js-close');
      }, 50);
    } else {
      changeDisplayStatus(data[typeActive], evt, false);
      currentBlock.classList.toggle('js-close');
      setTimeout(() => {
        toggleDisplay(textBlock, false);
      }, 300);
    }
  }
};

export {onButtonToggleOpen};
