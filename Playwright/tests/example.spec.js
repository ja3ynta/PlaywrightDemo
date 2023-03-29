// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.caasco.com/Account/Login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Login/);
  await page.locator('#UserIdentity').fill('tingtong');
  await page.locator('#Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveTitle(/My Account/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
