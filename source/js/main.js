import {videoButton, monthButtons} from './variables';
import {onButtonPlayVideo} from './on-button-play-video';
import {onButtonChangePrice} from './on-button-change-price';
import './swiper-juri';

videoButton.addEventListener('click', onButtonPlayVideo);
monthButtons.addEventListener('click', onButtonChangePrice);

const data = {
  centre: {
    1: [true, 'Как стать членом фитнес‑центра?', 'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придёт вам на почту.'],
    2: [false, 'Где можно посмотреть расписание?', 'Расписание фитнес-центра можно найти в холодильнике, рядом с мороженым. Ведь после тренировки нужно знать, чем себя порадовать!'],
    3: [false, 'Есть кулеры в центре? Предоставляются полотенца?', 'Да, у нас есть кулеры, чтобы вы могли утолить жажду после тренировки. А полотенца? Конечно, предоставляются! Ведь чем-то же нужно вытирать слезы после интенсивной тренировки!'],
    4: [false, 'Сколько тренеров работает в клубе и какова их квалификация?', 'В нашем клубе работает столько тренеров, что их можно было бы собрать в футбольную команду! А их квалификация? Они могут заставить вас почувствовать мышцы, о существовании которых вы даже не подозревали!'],
  },
  season: {
    1: [false, 'Можно ли использовать абонемент как пропуск на концерт?', 'Конечно, если концерт проходит в тренажерном зале и вместо музыки играют звуки беговых дорожек!'],
    2: [false, 'Абонемент включает в себя бесплатные пирожные после каждой тренировки?', 'Да, но только если вы сможете съесть их, стоя на одной ноге на фитболе!'],
    3: [false, 'Можно ли передать абонемент своему коту, если я не могу прийти?', 'Конечно, если ваш кот умеет делать приседания и подтягивания!'],
    4: [false, 'Абонемент дает право на бесплатный массаж от тренера?', 'Да, но только если вы сможете догнать тренера после интенсивной кардио-тренировки!'],
  },
  services: {
    1: [false, 'Можно ли заказать доставку пиццы прямо в тренажерный зал?', 'Конечно, но только если вы готовы делать приседания с коробкой пиццы в руках!'],
    2: [false, 'У вас есть услуга “тренировка во сне”?', 'Да, но результаты зависят от того, насколько интенсивно вы храпите!'],
    3: [false, 'Можно ли взять с собой на тренировку домашнего питомца?', 'Конечно, если ваш питомец умеет делать йогу и не забудет принести свой коврик!'],
    4: [false, 'У вас есть тренажеры, которые сами тренируются за меня?', 'Да, но они такие ленивые, что предпочитают просто стоять и смотреть на вас!'],
  },
  rules: {
    1: [false, 'Обязательно ли делать селфи после каждой тренировки?', 'Да, ведь как иначе доказать, что вы действительно были в зале?'],
    2: [false, 'Обязательно ли здороваться с каждым тренажером?', 'Да, ведь тренажеры тоже любят внимание и комплименты!'],
    3: [false, 'Обязательно ли улыбаться во время тренировки?', 'Да, ведь улыбка помогает сжигать дополнительные калории!'],
    4: [false, 'Можно ли тренироваться в костюме супергероя?', 'Конечно, если вы готовы спасать мир от лишних килограммов!'],
  }
};

const buttonsBlock = document.querySelector('.faq__buttons-list');
const questionsList = document.querySelectorAll('.faq__content li');
const questionsBlock = document.querySelector('.faq__content ul');
const textP = document.querySelectorAll('.faq__content p');

for (let x = 0; x < questionsList.length; x++) {
  questionsList[x].dataset.id = x + 1;
  if (data.centre[x + 1][0] === false) {
    questionsList[x].classList.add('js-close');
    questionsList[x].children[2].style.display = 'none';
  }
}

buttonsBlock.addEventListener('click', (evt) => {
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

      questionsList[x].children[0].textContent = data[evt.target.dataset.name][x + 1][1];
      questionsList[x].children[2].textContent = data[evt.target.dataset.name][x + 1][2];

      setTimeout(() => {
        for (let i = 0; i < textP.length; i++) {
          textP[i].style.transition = 'all 0.5s';
        }
      }, 50);
    }
  }
});

questionsBlock.addEventListener('click', (evt) => {
  const typeActive = buttonsBlock.querySelector('.faq__button--active').dataset.name;
  if (evt.target.nodeName === 'BUTTON' || evt.target.nodeName === 'H3') {
    if (evt.target.parentNode.classList.contains('js-close')) {
      data[typeActive][evt.target.parentNode.dataset.id][0] = true;
      evt.target.parentNode.children[2].style.display = 'block';
      setTimeout(() => {
        evt.target.parentNode.classList.toggle('js-close');
      }, 50);
    } else {
      data[typeActive][evt.target.parentNode.dataset.id][0] = false;
      evt.target.parentNode.classList.toggle('js-close');
      setTimeout(() => {
        evt.target.parentNode.children[2].style.display = 'none';
      }, 300);
    }
  }
});

/* Ошибки */

const currentTel = /^\d{10}$/;
const currentName = /^[A-Za-zА-Яа-яЁё]+(\s[A-Za-zА-Яа-яЁё]+)*$/;

const GuestTelephone = document.querySelector('#telephone');
const guestName = document.querySelector('#name');
const form = document.querySelector('.form__container');

const makeElement = (element, parent, text) => {
  const spanError = document.createElement('span');
  spanError.classList.add('form__text-error');
  spanError.textContent = text;
  parent.appendChild(spanError);
  element.classList.add('form__input--error');
};

const deleteElement = (element, parent) => {
  const elementDel = parent.querySelector('.form__text-error');
  elementDel.remove();
  element.classList.remove('form__input--error');
};

const checkSpace = (element, parent, text, evt) => {
  if (element.value === '' && !element.classList.contains('form__input--error')) {
    evt.preventDefault();
    makeElement(element, parent, text);
  }
  if (element.value === '' && element.classList.contains('form__input--error')) {
    evt.preventDefault();
    parent.querySelector('.form__text-error').textContent = text;
  }
};

const checkInput = (element, parent, text, evt, currentValue) => {
  if (element.value !== '' && !currentValue.test(element.value) && !element.classList.contains('form__input--error')) {
    evt.preventDefault();
    makeElement(element, parent, text);
  }
  if (element.value !== '' && !currentValue.test(element.value) && element.classList.contains('form__input--error')) {
    evt.preventDefault();
    parent.querySelector('.form__text-error').textContent = text;
  }
};

form.addEventListener('submit', (evt) => {
  guestName.value = guestName.value.trimEnd();
  checkSpace(GuestTelephone, GuestTelephone.parentElement, 'Обязательное поле', evt);
  checkInput(GuestTelephone, GuestTelephone.parentElement, 'Некорректный номер. 10 знаков', evt, currentTel);
  checkSpace(guestName, guestName.parentElement, 'Обязательное поле', evt);
  checkInput(guestName, guestName.parentElement, 'Допускаются буквы и пробелы', evt, currentName);
});

GuestTelephone.addEventListener('input', () => {
  GuestTelephone.value = GuestTelephone.value.replace(/^\s+|\s+$/g, '');
  if (currentTel.test(GuestTelephone.value)) {
    deleteElement(GuestTelephone, GuestTelephone.parentElement);
  }
});

guestName.addEventListener('input', () => {
  guestName.value = guestName.value.replace(/\s+/g, ' ');
  if (currentName.test(guestName.value) && guestName.classList.contains('form__input--error')) {
    deleteElement(guestName, guestName.parentElement);
  }
});
