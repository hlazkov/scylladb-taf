import { Page } from '@playwright/test';
import { NewClusterBasePage } from './newClusterBasePage';

export class PaymentStepPage extends NewClusterBasePage {
  constructor(page: Page) {
    super(page);
    this.url += 'clusters/new/billing';
  }
}
