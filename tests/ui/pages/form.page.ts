import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class FormPage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    super(page);
    // Dla przykładu — inputy z innego formularza testowego
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.messageInput = page.locator('#message');
    this.submitButton = page.locator('button[type="submit"]');
    this.confirmationMessage = page.locator('#flash'); // komunikat po wysłaniu formularza
  }

  async open() {
    await this.navigateTo('https://the-internet.herokuapp.com/contact-form'); // przykładowa strona
  }

  async fillForm(name: string, email: string, message: string) {
    await this.typeText(this.nameInput, name);
    await this.typeText(this.emailInput, email);
    await this.typeText(this.messageInput, message);
  }

  async submitForm() {
    await this.click(this.submitButton);
  }
}
