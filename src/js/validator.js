// Validation logic module

import PaySystemCheck from './paySystemCheck';

export default class Validate {
  constructor(cardnumber) {
    this.cardnumber = cardnumber;
  }

  cardValidator() {
    const hasValidLength = this.cardnumber.toString().length === 16;
    if (!hasValidLength) {
      throw new Error('Номер не полный!');
    } else {
      return this.hasSameDigitValidator();
    }
  }

  hasSameDigitValidator() {
    const checkLastDigitValidate = this.cardnumber.substring(15, 16).split(''); // последнее число
    const transformToNumbers = checkLastDigitValidate.map(Number); // в число
    // eslint-disable-next-line max-len
    const isSameDigitValidator = this.validateDigitCalculate() === transformToNumbers[0];

    return isSameDigitValidator;
  }

  // считает сумму ост.чисел номера
  validateDigitCalculate() {
    const sumResult = this.digitsSumCalculate();

    const floatNumber = sumResult / 10;
    const roundNumber = Math.ceil(floatNumber) * 10;
    const differenceToValidate = roundNumber - sumResult;
    // console.log('differenceToValidate', differenceToValidate);
    return differenceToValidate;
  }

  digitsSumCalculate() {
    const getDigitsToCalculate = this.cardnumber.substring(0, 15).split('');
    const transformToNumbers = getDigitsToCalculate.map(Number);
    // eslint-disable-next-line max-len
    const arrayToSum = transformToNumbers.map((num, index) => ((index % 2 === 0) ? (num * 2) : num));
    // eslint-disable-next-line no-unused-vars
    const subtractDecimalNumber = arrayToSum.map((num, index) => ((num > 9) ? (num - 9) : num));
    const allDigitsSum = subtractDecimalNumber.reduce((a, b) => a + b);

    return allDigitsSum;
  }

  chekCard() {
    const getSystemName = new PaySystemCheck(this.cardnumber);
    return getSystemName.getSystem(); // имя
  }
}
