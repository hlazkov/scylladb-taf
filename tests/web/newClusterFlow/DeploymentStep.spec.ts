import { test } from '../../../src/fixture';
import { expect } from '@playwright/test';
import { users } from '../../../src/utils/users.util';
import { loginAsUser } from '../../../src/utils/loginHelper.util';

test.describe('New Dedicated Cluster User flow: Step "Deployment"', () => {
  const user = users['pavlo'];

  test.beforeEach(async ({ loginPage, deploymentStepPage }) => {
    await loginAsUser(loginPage, user);
    await deploymentStepPage.navigate();
    await deploymentStepPage.waitForNavigation();
  });

  /*
  - Name input - Cluster name should start and end with an alphanumeric character and can contain @ _ & # -.
  It should contain a maximum of 30 characters. Please verify the appropriate message is displayed.
   */
  test.describe(`Name input validations`, () => {
    const clusterNameWarningMessage = {
      wrongChars: 'Cluster name should start and end with an alphanumeric character and can contain @ _ & # -',
      wrongLength: 'Cluster name should contain a maximum of 30 characters',
    };

    [
      { clusterName: 'validClusterName' },
      { clusterName: 'valid@_&#-Name' },
      { clusterName: '0@_&#-0' },
      { clusterName: 's2qBTkGOym0HIXKZmxlrEwrmOzcTYi' },
    ].forEach(testData =>
      test(`Valid name check: ${testData.clusterName}`, async ({ deploymentStepPage, networkStepPage }) => {
        await deploymentStepPage.clusterNameInput.fill(testData.clusterName);
        await expect.soft(deploymentStepPage.clusterNameWarningLabel).toBeHidden();
        await deploymentStepPage.launchClusterButton.click();
        await networkStepPage.waitForNavigation();
        expect.soft(networkStepPage.page.url()).toEqual(networkStepPage.url);
      }),
    );
    [
      { clusterName: '_invalidClusterName', tooltipText: clusterNameWarningMessage.wrongChars },
      { clusterName: 'invalidClusterName-', tooltipText: clusterNameWarningMessage.wrongChars },
      { clusterName: '@_&#-', tooltipText: clusterNameWarningMessage.wrongChars },
      { clusterName: 'The_name_longer_than_30_symbols', tooltipText: clusterNameWarningMessage.wrongLength },
    ].forEach(testData =>
      test(`Invalid name check: ${testData.clusterName}`, async ({ deploymentStepPage }) => {
        await deploymentStepPage.clusterNameInput.fill(testData.clusterName);
        await expect.soft(deploymentStepPage.clusterNameWarningLabel).toBeVisible();
        await expect.soft(deploymentStepPage.clusterNameWarningLabel).toHaveText(testData.tooltipText);
        await deploymentStepPage.launchClusterButton.click();
        expect.soft(deploymentStepPage.page.url()).toEqual(deploymentStepPage.url);
      }),
    );
  });
});
