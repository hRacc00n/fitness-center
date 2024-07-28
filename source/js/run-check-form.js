import {currentName, currentTel, form, guestName, GuestTelephone} from './variables';


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

const onFormCheck = (evt) => {
  guestName.value = guestName.value.trimEnd();
  checkSpace(GuestTelephone, GuestTelephone.parentElement, 'Обязательное поле', evt);
  checkInput(GuestTelephone, GuestTelephone.parentElement, 'Некорректный номер. 10 знаков', evt, currentTel);
  checkSpace(guestName, guestName.parentElement, 'Обязательное поле', evt);
  checkInput(guestName, guestName.parentElement, 'Допускаются буквы и пробелы', evt, currentName);
};

const onTelInputCheck = () => {
  GuestTelephone.value = GuestTelephone.value.replace(/^\s+|\s+$/g, '');
  if (currentTel.test(GuestTelephone.value)) {
    deleteElement(GuestTelephone, GuestTelephone.parentElement);
  }
};

const onNameCheck = () => {
  guestName.value = guestName.value.replace(/\s+/g, ' ');
  if (currentName.test(guestName.value) && guestName.classList.contains('form__input--error')) {
    deleteElement(guestName, guestName.parentElement);
  }
};

const runCheckForm = () => {
  form.addEventListener('submit', onFormCheck);
  GuestTelephone.addEventListener('input', onTelInputCheck);
  guestName.addEventListener('input', onNameCheck);
};

export {runCheckForm};
