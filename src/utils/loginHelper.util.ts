import { LoginPage } from '../pageObjects/LoginPage';
import { User } from './users.util';
import { HomePage } from '../pageObjects/HomePage';

export async function loginAsUser(loginPage: LoginPage, user: User) {
  await loginPage.navigate();
  await loginPage.emailInput.fill(user.email);
  await loginPage.submitButton.click();
  await loginPage.passwordInput.fill(user.password);
  await loginPage.submitButton.click();
  await new HomePage(loginPage.page).waitForNavigation();
}
