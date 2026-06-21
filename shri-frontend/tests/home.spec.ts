import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/SHRI/);
});

test('hero section is visible', async ({ page }) => {
  await page.goto('/');
  const hero = page.locator('section').first();
  await expect(hero).toBeVisible();
});
