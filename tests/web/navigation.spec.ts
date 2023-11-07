import { test } from '../../src/fixture';
import { expect } from '@playwright/test';
import { users } from '../../src/utils/users.util';
import { loginAsUser } from '../../src/utils/loginHelper.util';

test.describe('Navigation scenarios', () => {
  const user = users['pavlo'];

  test.beforeEach(async ({ loginPage }) => {
    await loginAsUser(loginPage, user);
  });

  test('Navigate to create new dedicated cluster page', async ({ homePage, deploymentStepPage }) => {
    await homePage.navigation.newClusterButton.click();
    await homePage.navigation.newClusterDropdownMenu.dedicatedVM.click();

    await expect.soft(deploymentStepPage.pageTitleLabel).toBeVisible();
    await expect.soft(deploymentStepPage.pageTitleLabel).toHaveText('New Cluster');
    expect.soft(deploymentStepPage.page.url()).toEqual(deploymentStepPage.url);
  });
});
