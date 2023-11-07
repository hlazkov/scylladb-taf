import { BasePage } from './BasePage';
import { HeaderPageFragment } from './HeaderPageFragment';
import { NavigationPageFragment } from './NavigationPageFragment';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
  header: HeaderPageFragment;
  navigation: NavigationPageFragment;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderPageFragment(page);
    this.navigation = new NavigationPageFragment(page);
  }

  pageTitleLabel = this.page.locator('#pageTitle');
}
