import { test } from '../../src/fixture';
import { expect } from '@playwright/test';
import { users } from '../../src/utils/users.util';
import { faker } from '@faker-js/faker';

test.describe(' a. User Login:', () => {
  const user = users['pavlo'];

  test('Perform login using email and password', async ({ loginPage, homePage }) => {
    await loginPage.navigate();
    await loginPage.emailInput.fill(user.email);
    await loginPage.submitButton.click();
    await loginPage.passwordInput.fill(user.password);
    await loginPage.submitButton.click();

    await expect(homePage.pageTitleLabel).toBeVisible();
    await expect(homePage.pageTitleLabel).toHaveText('My Clusters');
  });

  [
    {
      name: ' a correct email and a wrong password',
      email: user.email,
      password: `!%@#${faker.string.alphanumeric({ length: 8 })}`,
    },
    {
      name: ' an incorrect password and a wrong email (user does not exist)',
      email: faker.internet.email(),
      password: `!%@#${faker.string.alphanumeric({ length: 8 })}`,
    },
  ].forEach(testData =>
    test(`Check login flow with${testData.name}`, async ({ loginPage, homePage }) => {
      await loginPage.navigate();
      await loginPage.emailInput.fill(testData.email);
      await loginPage.submitButton.click();
      await loginPage.passwordInput.fill(testData.password);
      await loginPage.submitButton.click();

      await expect(loginPage.loginErrorLabel).toHaveText('Incorrect email or password');
      await expect(homePage.pageTitleLabel).toBeHidden();
    }),
  );

  test(`Check login flow with incorrect email like jonh.doe@gmail`, async ({ loginPage, homePage }) => {
    await loginPage.navigate();
    await loginPage.emailInput.fill(faker.internet.email({ provider: 'gmail' }));
    await loginPage.submitButton.click();

    await expect(loginPage.emailBoxErrorLabel).toHaveText('Must be a valid email');
    await expect(homePage.pageTitleLabel).toBeHidden();
  });
});
