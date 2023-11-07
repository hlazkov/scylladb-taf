import { test as base } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';
import { DeploymentStepPage } from './pageObjects/newCluster/DeploymentStepPage';
import { HomePage } from './pageObjects/HomePage';
import { NetworkStepPage } from './pageObjects/newCluster/NetworkStepPage';
import { PaymentStepPage } from './pageObjects/newCluster/PaymentStepPage';

type Pages = {
  loginPage: LoginPage;
  homePage: HomePage;
  deploymentStepPage: DeploymentStepPage;
  networkStepPage: NetworkStepPage;
  paymentStepPage: PaymentStepPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  deploymentStepPage: async ({ page }, use) => {
    await use(new DeploymentStepPage(page));
  },
  networkStepPage: async ({ page }, use) => {
    await use(new NetworkStepPage(page));
  },
  paymentStepPage: async ({ page }, use) => {
    await use(new PaymentStepPage(page));
  },
});
