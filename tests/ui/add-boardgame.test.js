const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto('https://dimoyanev77.onrender.com');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  