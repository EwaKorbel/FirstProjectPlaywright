import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class DynamicLoadingPage extends BasePage {
  readonly example1Link: Locator;
  readonly example2Link: Locator;
  readonly startButton: Locator;
  readonly loadingBar: Locator;
  readonly finishText: Locator;

  constructor(page: Page) {
    super(page);
    this.example1Link = page.locator('a[href="/dynamic_loading/1"]');
    this.example2Link = page.locator('a[href="/dynamic_loading/2"]');
    this.startButton = page.locator('button', { hasText: 'Start' });
    this.loadingBar = page.locator('#loading');
    this.finishText = page.locator('#finish h4');
  }

  async open() {
    await this.navigateTo('https://the-internet.herokuapp.com/dynamic_loading');
  }

  async openExample1() {
    await this.example1Link.click();
  }

  async openExample2() {
    await this.example2Link.click();
  }

  async startAndWaitForFinish() {
    await this.startButton.click();
    await this.loadingBar.waitFor({ state: 'hidden' });
  }

  async verifyTextVisible(expectedText: string) {
    await expect(this.finishText).toHaveText(expectedText);
  }
}
