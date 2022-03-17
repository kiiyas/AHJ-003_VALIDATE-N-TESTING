// DOM extracting module

export default class InputData {
  constructor() {
    this.input = document.querySelector('#control');
    this.button = document.querySelector('#submitform');
    this.recievedNumber = null;
  }

  getCardNumber() {
    this.recievedNumber = this.input.value;
    return this.recievedNumber;
  }
}
