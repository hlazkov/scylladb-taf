import { Page } from '@playwright/test';
import { NewClusterBasePage } from './newClusterBasePage';

export class NetworkStepPage extends NewClusterBasePage {
  constructor(page: Page) {
    super(page);
    this.url += 'clusters/new/network';
  }
}
