import { Page } from '@playwright/test';
import { NewClusterBasePage } from './newClusterBasePage';

export class DeploymentStepPage extends NewClusterBasePage {
  constructor(page: Page) {
    super(page);
    this.url += 'clusters/new';
  }

  clusterNameInput = this.page.getByTestId('clusterNameInp').locator('input');
  clusterNameWarningLabel = this.page.locator('#clusterNameInp-helper-text');

  cloudProviders = {
    aws: this.page.getByTestId('cloudProviderAWS'),
    gcp: this.page.getByTestId('cloudProviderGCP'),
  };
  runUnderAccount = {
    scyllaAWS: this.page.getByTestId('accountCredentialOptionScylla'),
    // todo recheck on disabled
    personalAWS: this.page.getByTestId('accountCredentialOptionCustomDisabled'),
  };
  regionSelector = this.page.getByTestId('region');
  regionDropdown = this.page.locator('div[tabindex="-1"]'); // bad locator :(
  regionDropdownItem = (id: number) => this.regionDropdown.locator(`#cloudProviderRegion${id}`);

  // todo add this once we need it :)
  versionDropdown = null;
  table = {
    prices: this.page.locator('[data-component="CostsCell"] [class$= costPerHour]'),
  };
}
