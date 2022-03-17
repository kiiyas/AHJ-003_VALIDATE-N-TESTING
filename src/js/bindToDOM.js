// DOM influence module

export default class DOMStatusUP {
  constructor(validity, system) {
    this.validity = validity;
    this.system = system;
    this.input = document.querySelector('#control');
    this.tooltip = document.querySelector('.tooltip');
    this.card = document.querySelector('.card');
    this.cardlist = document.querySelector('.cardlist');
    this.recievedNumber = null;
  }

  generateTooltip() {
    if (this.validity === 'Карта валидна!') {
      this.tooltip.classList.remove('forInvalid');
      this.tooltip.classList.add('forValid');
    } else {
      this.tooltip.classList.remove('forValid');
      this.tooltip.classList.add('forInvalid');
    }
    this.tooltip.textContent = this.validity;
  }

  showCardSystem() {
    const blured = document.getElementsByClassName('blur');
    if (blured[0]) {
      blured[0].classList.remove('blur');
    }
    if (this.validity === 'Карта валидна!') {
      const selected = document.getElementsByClassName(this.system);
      selected[0].classList.add('blur');
    }
  }
}
