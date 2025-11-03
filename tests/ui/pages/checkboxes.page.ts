import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckboxesPage extends BasePage {
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    super(page);
    this.checkbox1 = page.locator('#checkboxes input').nth(0);
    this.checkbox2 = page.locator('#checkboxes input').nth(1);
  }

  async open() {
    await this.navigateTo('https://the-internet.herokuapp.com/checkboxes');
  }

  async checkFirst() {
    await this.checkbox1.check();
  }

  async uncheckSecond() {
    await this.checkbox2.uncheck();
  }

  async expectFirstChecked() {
    await expect(this.checkbox1).toBeChecked();
  }

  async expectSecondUnchecked() {
    await expect(this.checkbox2).not.toBeChecked();
  }
}
