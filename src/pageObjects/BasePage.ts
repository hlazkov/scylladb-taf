import { Page } from '@playwright/test';

export class BasePage {
  url = '';

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // async below added to show the function returns a promise
  async getUrl() {
    return this.page.url();
  }

  async navigate() {
    await this.page.goto(this.url);
  }
}
