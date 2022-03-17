// Aвто-тесты на функции проверки номера карты и принадлежности определённой платёжной системе

import Validate from './validator';

// document.body.innerHTML = '<div class="container"></div>';
const validatorOfTrue = new Validate('4532741546675545');
const validatorOfFalse = new Validate('4532741546675547');
const validatorOfIncomplete = new Validate('453274154667554');

test('Class Validate should validate inputed value', () => {
  expect(validatorOfTrue.cardValidator()).toBeTruthy();
  expect(validatorOfFalse.cardValidator()).toBeFalsy();
  expect(() => validatorOfIncomplete.cardValidator()).toThrowError(new Error('Номер не полный!'));
  expect(validatorOfTrue.chekCard()).toBe('visa');
  expect(validatorOfFalse.chekCard()).toBe('visa'); // т.к. скорее всего это попытка ввести визу
});

// test.each([
//   ['true for valid organization Inn', '7715964180', true],
//   ['false for invalid organization Inn', '7715964999', false],
// ...
// ])(('it should be %s'), (_, input, expected) => {
// expect(isValidInn(input)).toBe(expected); })
