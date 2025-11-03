import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class AlertsPage extends BasePage {
  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    super(page);
    this.jsAlertButton = page.locator('button:has-text("Click for JS Alert")');
    this.jsConfirmButton = page.locator('button:has-text("Click for JS Confirm")');
    this.jsPromptButton = page.locator('button:has-text("Click for JS Prompt")');
    this.resultText = page.locator('#result');
  }

  async open() {
    await this.navigateTo('https://the-internet.herokuapp.com/javascript_alerts');
  }

  async handleJsAlert() {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    });
    await this.jsAlertButton.click();
  }

  async handleJsConfirm(accept: boolean) {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Confirm');
      if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });
    await this.jsConfirmButton.click();
  }

  async handleJsPrompt(inputText: string) {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.accept(inputText);
    });
    await this.jsPromptButton.click();
  }

  async verifyResult(expectedText: string) {
    await expect(this.resultText).toHaveText(expectedText);
  }
}
