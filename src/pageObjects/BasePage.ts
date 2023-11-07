import { Page } from '@playwright/test';

export class BasePage {
  url = process.env.BASE_URL;
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  navigate() {
    return this.page.goto(this.url);
  }

  waitForNavigation() {
    return this.page.waitForURL(this.url);
  }
}
