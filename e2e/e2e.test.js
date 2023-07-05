/*
* @jest-environment node
*/

import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Credit Card Validator form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,

      // slowMo: 50,
      // devtools: true,
    });

    page = await browser.newPage();
    await page.goto('http://localhost:9000');
  });

  afterEach(async () => {
    await browser.close();
  });

  test('form should render on page start', async () => {
    await page.waitForSelector('form');
  });

  test('status-box should add .valid class if the value is valid', async () => {
    const form = await page.$('.form');
    const input = await form.$('.input');
    const btn = await form.$('.btn');

    await page.waitForSelector('.status-box');

    await input.type('371449635398431');
    await btn.click();

    await page.waitForSelector('.status-box.valid');
  });

  test('status-box should add .invalid class if the value is invalid', async () => {
    const form = await page.$('.form');
    const input = await form.$('.input');
    const btn = await form.$('.btn');

    await page.waitForSelector('.status-box');

    await input.type('12325sdfkj');
    await btn.click();

    await page.waitForSelector('.status-box.invalid');
  });
});
