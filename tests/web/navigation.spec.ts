import { authorisedContext as test } from '../../src/fixture';
import { expect } from '@playwright/test';
import { users } from '../../src/utils/users.util';

test.describe('Navigation scenarios', () => {
  const withUser = users['pavlo'];
  test.use({ withUser });

  test.beforeEach(async ({ homePage }) => homePage.navigate());

  test('Navigate to create new dedicated cluster page', async ({ homePage, deploymentStepPage }) => {
    await homePage.navigation.newClusterButton.click();
    await homePage.navigation.newClusterDropdownMenu.dedicatedVM.click();

    await expect.soft(deploymentStepPage.pageTitleLabel).toBeVisible();
    await expect.soft(deploymentStepPage.pageTitleLabel).toHaveText('New Cluster');
    expect.soft(deploymentStepPage.page.url()).toEqual(deploymentStepPage.url);
  });
});
