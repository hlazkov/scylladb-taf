import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class HeaderPageFragment extends BasePage {
  private locator: Locator;
  dropdownMenu: DropdownMenuPageFragment;

  constructor(page: Page) {
    super(page);
    this.locator = this.page.locator('[data-component="Header"]');
    this.dropdownMenu = new DropdownMenuPageFragment(this.page);
  }

  get dropdownButton() {
    return this.locator.getByTestId('ArrowDropDownIcon');
  }
  get userNameLabel() {
    return this.locator.getByTestId('username');
  }
  get accountNameLabel() {
    return this.locator.getByTestId('currentAccountName');
  }
}

class DropdownMenuPageFragment extends BasePage {
  username = this.page.getByTestId('dropdownUsername');
  email = this.page.getByTestId('dropdownEmail');
  billing = this.page.getByTestId('dropdownBilling');
  bringYourOwnAccount = this.page.getByTestId('dropdownByoa');
  settings = this.page.getByTestId('dropdownSettings');
  signOut = this.page.getByTestId('dropdownSignOut');
}
