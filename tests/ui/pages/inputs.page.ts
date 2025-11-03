import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class InputsPage extends BasePage {
  readonly numberInput: Locator;

  constructor(page: Page) {
    super(page);
    this.numberInput = page.locator('input[type="number"]');
  }

  async open() {
    await this.navigateTo('https://the-internet.herokuapp.com/inputs');
  }

  async enterValue(value: string) {
    await this.numberInput.fill(''); // wyczyść pole
    await this.numberInput.type(value);
  }

  async getInputValue() {
    return await this.numberInput.inputValue();
  }

  async expectValueToBe(expectedValue: string) {
    const actualValue = await this.getInputValue();
    await expect(actualValue).toBe(expectedValue);
  }
}
