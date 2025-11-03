import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class UploadPage extends BasePage {
  readonly chooseFileInput: Locator;
  readonly uploadButton: Locator;
  readonly uploadedFiles: Locator;

  constructor(page: Page) {
    super(page);
    this.chooseFileInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async open() {
    await this.navigateTo('https://the-internet.herokuapp.com/upload');
  }

  async uploadFile(filePath: string) {
    await this.chooseFileInput.setInputFiles(filePath);
    await this.uploadButton.click();
  }

  async verifyUploadedFile(fileName: string) {
    await expect(this.uploadedFiles).toHaveText(fileName);
  }
}
