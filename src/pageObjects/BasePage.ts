import { Page } from '@playwright/test';

export class BasePage {
  url = '';

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(this.url);
  }
}
