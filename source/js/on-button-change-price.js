import {monthButtons, cardPrice} from './variables';

const data = {
  1: {
    trainer: 5000,
    day: 1700,
    fullDay: 2700,
  },
  6: {
    trainer: 30000,
    day: 10200,
    fullDay: 16200,
  },
  12: {
    trainer: 60000,
    day: 20400,
    fullDay: 32400,
  },
};

const onButtonChangePrice = (evt) => {
  if (evt.target.nodeName === 'BUTTON') {
    const buttonCurrent = monthButtons.querySelector('.price__month-button--active');
    const keysMonth = Object.keys(data[evt.target.dataset.month]);

    buttonCurrent.classList.remove('price__month-button--active');
    evt.target.classList.add('price__month-button--active');
    for (let x = 0; x < cardPrice.length; x++) {
      cardPrice[x].dataset.price = data[evt.target.dataset.month][keysMonth[x]];
      cardPrice[x].textContent = data[evt.target.dataset.month][keysMonth[x]];
    }
  }
};

export {onButtonChangePrice};
