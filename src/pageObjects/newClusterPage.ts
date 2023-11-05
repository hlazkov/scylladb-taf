import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';
import { HeaderPageFragment } from './HeaderPageFragment';
import { NavigationPageFragment } from './NavigationPageFragment';

export class NewClusterPage extends BasePage {
  header: HeaderPageFragment;
  navigation: NavigationPageFragment;
  stepper: NewClusterStepper;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderPageFragment(page);
    this.navigation = new NavigationPageFragment(page);
    this.stepper = new NewClusterStepper(page);
  }

  clusterNameInput = this.page.getByTestId('clusterNameInp');
  launchClusterButton = this.page.locator('#launchClusterBtn');
  cloudProviders = {
    aws: this.page.getByTestId('cloudProviderAWS'),
    gcp: this.page.getByTestId('cloudProviderGCP'),
  };
  runUnderAccount = {
    scyllaAWS: this.page.getByTestId('accountCredentialOptionScylla'),
    // todo recheck on disabled
    personalAWS: this.page.getByTestId('accountCredentialOptionCustomDisabled'),
  };
  // todo add this once we need it :)
  versionDropdown = null;
  regionDropdown = null;
}

class NewClusterStepper extends BasePage {
  // [class$='step']
  private locator: Locator;

  constructor(page: Page) {
    super(page);
    this.locator = this.page.locator('[data-component="WizardStepper"]');
  }

  getStep(name: string) {
    return this.locator.locator("[class$='step']", { hasText: name });
  }
}
