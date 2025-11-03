import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DynamicControlsPage extends BasePage {
  readonly removeButton: Locator;
  readonly addButton: Locator;
  readonly checkbox: Locator;
  readonly message: Locator;
  readonly inputField: Locator;
  readonly enableButton: Locator;
  readonly disableButton: Locator;

  constructor(page: Page) {
    super(page);
    this.removeButton = page.locator('button', { hasText: 'Remove' });
    this.addButton = page.locator('button', { hasText: 'Add' });
    this.checkbox = page.locator('#checkbox');
    this.message = page.locator('#message');
    this.inputField = page.locator('input[type="text"]');
    this.enableButton = page.locator('button', { hasText: 'Enable' });
    this.disableButton = page.locator('button', { hasText: 'Disable' });
  }

  async open() {
    await this.navigateTo('https://the-internet.herokuapp.com/dynamic_controls');
  }

  async removeCheckbox() {
    await this.removeButton.click();
    await expect(this.message).toHaveText("It's gone!");
  }

  async addCheckbox() {
    await this.addButton.click();
    await expect(this.checkbox).toBeVisible();
  }

  async enableInput() {
    await this.enableButton.click();
    await expect(this.message).toHaveText("It's enabled!");
    await expect(this.inputField).toBeEnabled();
  }

  async disableInput() {
    await this.disableButton.click();
    await expect(this.message).toHaveText("It's disabled!");
    await expect(this.inputField).toBeDisabled();
  }
}
