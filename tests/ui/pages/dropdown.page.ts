import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DropdownPage extends BasePage {
  readonly dropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.locator('#dropdown');
  }

  async open() {
    await this.navigateTo('https://the-internet.herokuapp.com/dropdown');
  }

  async selectOptionByValue(value: string) {
    await this.dropdown.selectOption(value);
  }

  async expectSelectedOption(expectedText: string) {
    const selectedOption = await this.dropdown.inputValue();
    const selected = await this.dropdown.locator(`option[value="${selectedOption}"]`).textContent();
    await expect(selected).toContain(expectedText);
  }
}
