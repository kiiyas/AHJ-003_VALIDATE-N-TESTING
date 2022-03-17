import Validate from './validator';
import DOMStatusUP from './bindToDOM';
import InputData from './getFromDOM';

document.addEventListener('click', (event) => {
  if (event.target === document.querySelector('#submitform')) {
    event.preventDefault();

    // получает значение инпута
    const cardnameData = new InputData();
    const cardname = cardnameData.getCardNumber();

    // ставит значение инпута в валидатор
    const validator = new Validate(cardname);
    const validationResult = validator.cardValidator();
    const resultTooltip = validationResult ? 'Карта валидна!' : 'Что-то не так, повторите снова.';

    // проверяет платежную систему
    const paySystemName = validator.chekCard();

    // генерирует визуальные элементы
    const dom = new DOMStatusUP(resultTooltip, paySystemName);
    dom.generateTooltip();
    dom.showCardSystem();
  }
});
