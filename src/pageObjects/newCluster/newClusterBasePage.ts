import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';
import { HeaderPageFragment } from '../HeaderPageFragment';
import { NavigationPageFragment } from '../NavigationPageFragment';

export class NewClusterBasePage extends BasePage {
  header: HeaderPageFragment;
  navigation: NavigationPageFragment;
  stepper: NewClusterStepper;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderPageFragment(page);
    this.navigation = new NavigationPageFragment(page);
    this.stepper = new NewClusterStepper(page);
  }

  pageTitleLabel = this.page.locator('#pageTitle');

  totalCostLabel = this.page.locator('#totalCostPerHour');
  launchClusterButton = this.page.locator('#launchClusterBtn');
}

class NewClusterStepper extends BasePage {
  private locator: Locator;

  constructor(page: Page) {
    super(page);
    this.locator = this.page.locator('[data-component="WizardStepper"]');
  }

  getStep(name: string) {
    return this.locator.locator("[class$='step']", { hasText: name });
  }
}
