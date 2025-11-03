import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SecureAreaPage extends BasePage {
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.logoutButton = page.locator('a[href="/logout"]');
  }

  async logout() {
    await this.logoutButton.click();
  }
}
