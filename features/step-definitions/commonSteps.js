const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');

Given('I open the Lemonade homepage', async () => {
  await browser.url('/');
  await browser.pause(2000); // Give it a moment to fully load
});

When('I click on the "Renters" link in the header', async () => {
  const rentersLink = await $('=Renters'); // Finds link by text "Renters"
  await rentersLink.waitForClickable({ timeout: 10000 });
  await rentersLink.click();
});

Then('I should be redirected to the Renters Insurance page', async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()) === 'https://www.lemonade.com/renters',
    {
      timeout: 10000,
      timeoutMsg: 'Expected URL to be https://www.lemonade.com/renters',
    }
  );
});




