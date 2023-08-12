const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://dimoyanev77.onrender.com');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  