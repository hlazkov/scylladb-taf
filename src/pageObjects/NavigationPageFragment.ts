import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class NavigationPageFragment extends BasePage {
  private locator: Locator;
  newClusterDropdownMenu: NewClusterDropdownMenuPageFragment;

  constructor(page: Page) {
    super(page);
    this.locator = this.page.locator('[data-component="NavItemsComponent"]');
    this.newClusterDropdownMenu = new NewClusterDropdownMenuPageFragment(
      this.page,
    );
  }

  get newClusterButton() {
    return this.locator.locator('#NewClusterNav');
  }

  get myClustersButton() {
    return this.locator.locator('#MyClustersNav');
  }

  get supportLink() {
    return this.locator.locator('#SupportNav');
  }

  get docsLink() {
    return this.locator.locator('#DocsNav');
  }
  get scyllaUniversityLink() {
    return this.locator.getByTestId('OpenInNewIcon');
  }
}

class NewClusterDropdownMenuPageFragment extends BasePage {
  // todo update with proper locators
  dedicatedVM = this.page.locator('[data-element="NavLink"]', {
    hasText: 'Dedicated VM',
  });
  serverless = this.page.locator('[data-element="NavLink"]', {
    hasText: 'Serverless',
  });
}
