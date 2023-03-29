import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.caasco.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Username or Membership #').click();
  await page.getByLabel('Username or Membership #').fill('tingtong');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('navigation', { name: 'Desktop Header' }).getByRole('link', { name: 'My Account' }).click();
  await page.getByRole('link', { name: 'Personal Details' }).click();
  await page.locator('#linkEditName').click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('JAADUt');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('link', { name: 'Cancel' }).click();
});