import { test } from '../src/fixture';
import { expect } from '@playwright/test';

test.describe('Auth flow', () => {
  test('Perform login', async ({ loginPage, homePage }) => {
    await loginPage.navigate();
    await loginPage.emailInput.fill('cute.box@hotmail.com');
    await loginPage.submitButton.click();
    await loginPage.passwordInput.fill('');
    await loginPage.submitButton.click();

    await expect(homePage.pageTitleLabel).toBeVisible();
    await expect(homePage.pageTitleLabel).toHaveText('My Clusters');
  });
});
