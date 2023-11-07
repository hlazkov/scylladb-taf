// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { request, test as base } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';
import { DeploymentStepPage } from './pageObjects/newCluster/DeploymentStepPage';
import { HomePage } from './pageObjects/HomePage';
import { NetworkStepPage } from './pageObjects/newCluster/NetworkStepPage';
import { PaymentStepPage } from './pageObjects/newCluster/PaymentStepPage';
import { users } from './utils/users.util';
import { authApi } from './api/AuthApi';

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

export const authorisedContext = test.extend({
  withUser: users['pavlo'], // default user

  storageState: async ({ withUser }, use) => {
    const requestContext = await request.newContext();
    const url = authApi.instance.getUri() + '/v1/user';
    await requestContext.post(url, {
      form: {
        email: withUser.email,
        password: withUser.password,
      },
    });
    const state = await requestContext.storageState();
    await use(state);
  },
});
