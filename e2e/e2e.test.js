import puppetteer from 'puppeteer';
// import { fork } from 'child_process';
const childProcess = require('child_process');

jest.setTimeout(30000);
describe('Creditcard validator service', () => {
  let browser = null;
  let page = null;
  let server = null;

  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = await childProcess.fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      /* headless: true,
      slowMo: 100,
      devtools: false, */
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  describe('Creditcard validator service', () => {
    test('open browser', async () => {
      await page.goto(baseUrl);
    });

    test('should show success tooltip if card number is valid.', async () => {
      await page.goto(baseUrl);
      const formgroup = await page.$('.formgroup');
      const form = await formgroup.$('#form');
      // const tooltip = await formgroup.$('.tooltip');
      const input = await form.$('#control');
      await input.type('4532741546675545');
      const submit = await form.$('#submitform');
      submit.click();
      await page.waitForSelector('.tooltip.forValid');
      // await tooltip.content('Карта валидна!');
    });

    test('should show current card pushing class "blur" to it, if card number is valid.', async () => {
      await page.goto(baseUrl);
      // const cardlist = await page.$('.cardlist');
      // const card = await cardlist.$('.card');
      const form = await page.$('#form');
      const input = await form.$('#control');
      await input.type('4532741546675545');
      const submit = await form.$('#submitform');
      submit.click();
      await page.waitForSelector('.card.visa.blur'); // ?
    });

    test('should show error tooltip if card number is invalid', async () => {
      await page.goto(baseUrl);
      const formgroup = await page.$('.formgroup');
      const form = await formgroup.$('#form');
      // const tooltip = await formgroup.$('.tooltip');
      const input = await form.$('#control');
      await input.type('4532741546675547');
      const submit = await form.$('#submitform');
      submit.click();
      await page.waitForSelector('.tooltip.forInvalid');
      // await tooltip.content('Что-то не так, повторите снова.');
    });
  });
});
