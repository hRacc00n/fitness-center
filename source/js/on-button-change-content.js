import {buttonsBlock, data, questionsList, textP} from './variables';

const updateQuestionContent = (currentNumber, evt) => {
  questionsList[currentNumber].children[0].textContent = data[evt.target.dataset.name][currentNumber + 1][1];
  questionsList[currentNumber].children[2].textContent = data[evt.target.dataset.name][currentNumber + 1][2];
};

const onButtonChangeContent = (evt) => {
  if (evt.target.nodeName === 'BUTTON') {
    const buttonActive = buttonsBlock.querySelector('.faq__button--active');

    buttonActive.classList.toggle('faq__button--active');
    evt.target.classList.add('faq__button--active');

    for (let x = 0; x < questionsList.length; x++) {
      if (data[evt.target.dataset.name][x + 1][0] === false) {
        questionsList[x].classList.add('js-close');
      } else {
        questionsList[x].classList.remove('js-close');
        questionsList[x].children[2].style.display = 'block';
      }

      for (let y = 0; y < textP.length; y++) {
        textP[y].style.transition = 'none';
      }

      updateQuestionContent(x, evt);

      setTimeout(() => {
        for (let i = 0; i < textP.length; i++) {
          textP[i].style.transition = 'all 0.5s';
        }
      }, 50);
    }
  }
};

const addListener = (element) => {
  for (let x = 0; x < questionsList.length; x++) {
    questionsList[x].dataset.id = x + 1;
    if (data.centre[x + 1][0] === false) {
      questionsList[x].classList.add('js-close');
      questionsList[x].children[2].style.display = 'none';
    }
  }

  element.addEventListener('click', onButtonChangeContent);
};

export {addListener};
