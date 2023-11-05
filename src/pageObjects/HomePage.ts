import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  pageTitleLabel = this.page.locator('#pageTitle');
}
