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
  // todo add this once we need it :)
  versionDropdown = null;
  regionDropdown = null;
}
