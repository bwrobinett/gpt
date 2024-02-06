import { test } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6,777,000+ articles' }).click();
  await page.getByTitle('Discuss improvements to the').click();
  await page.getByTitle('Main Paxxge').click();
  await page.getByTitle('Main Page').click();
  await page.getByTitle('Main Page').click();
}); 
