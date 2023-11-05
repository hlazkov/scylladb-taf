import { test as base } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';
import { NewClusterPage } from './pageObjects/newClusterPage';
import { HomePage } from './pageObjects/HomePage';

type Pages = {
  loginPage: LoginPage;
  newClusterPage: NewClusterPage;
  homePage: HomePage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  newClusterPage: async ({ page }, use) => {
    await use(new NewClusterPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});
