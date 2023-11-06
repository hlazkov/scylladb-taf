import { test } from '../../src/fixture';
import { expect } from '@playwright/test';
import { users } from '../../src/utils/users.util';

test.describe('Auth flow', () => {
  const user = users['pavlo'];

  test('Perform login', async ({ loginPage, homePage }) => {
    await loginPage.navigate();
    await loginPage.emailInput.fill(user.email);
    await loginPage.submitButton.click();
    await loginPage.passwordInput.fill(user.password);
    await loginPage.submitButton.click();

    await expect(homePage.pageTitleLabel).toBeVisible();
    await expect(homePage.pageTitleLabel).toHaveText('My Clusters');
  });
});
