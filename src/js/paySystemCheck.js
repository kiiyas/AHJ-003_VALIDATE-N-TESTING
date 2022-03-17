// PaySystem extracting emulation module

export default class PaySystemCheck {
  constructor(cardnumber) {
    this.cardnumber = cardnumber;
    this.systems = {
      mir: 2,
      amex: 3,
      visa: 4,
      master: 5,
      discover: 6,
    };
  }

  getSystem() {
    const checkFirstDigit = this.cardnumber.substring(0, 1).split('').map(Number)[0];
    const digitsArray = Object.entries(this.systems);
    const matching = digitsArray.find(((element) => element[1] === checkFirstDigit));
    return matching[0];
  }
}
