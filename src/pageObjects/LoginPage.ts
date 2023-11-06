import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // todo recheck if we need this
  rootElement = this.page.locator('#frontegg-app-default');

  signupLabel = this.page.locator('[data-test-id=redirect-to-signup]');
  emailInput = this.page.locator('[data-test-id=input-email]');
  passwordInput = this.page.locator('[data-test-id=input-password]');
  submitButton = this.page.locator('[data-test-id=submit-btn]');
  loginErrorLabel = this.page.locator('[data-test-id="login-error"]');
  emailBoxErrorLabel = this.page.locator('[data-test-id="email-box_error"]');
}
