import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Nawigacja do strony
  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  // Pobranie tytułu strony
  async getPageTitle() {
    return this.page.title();
  }

  // Oczekiwanie aż element będzie widoczny
  async waitForVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible', timeout: 5000 });
  }

  // Kliknięcie w element z oczekiwaniem
  async click(locator: Locator) {
    await this.waitForVisible(locator);
    await locator.click();
  }

  // Wpisanie tekstu (czyszczenie inputa przed wpisaniem)
  async typeText(locator: Locator, text: string) {
    await this.waitForVisible(locator);
    await locator.fill('');
    await locator.type(text);
  }

  // Oczekiwanie na konkretny tekst
  async expectText(locator: Locator, text: string) {
    await expect(locator).toContainText(text);
  }

  // Sprawdzenie widoczności elementu
  async expectVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }
  async selectDropdownOption(locator: Locator, value: string) {
  await this.waitForVisible(locator);
  await locator.selectOption(value);
}
}


