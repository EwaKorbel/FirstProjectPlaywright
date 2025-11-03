import path from 'path';
import { test } from '@playwright/test';
import { FormPage } from '../pages/form.page';

test.describe('Form page tests', () => {

  test('Should fill and submit the form successfully', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.open();

    await formPage.fillForm('Anna Tester', 'anna@tester.com', 'This is a test message');
    await formPage.submitForm();

    await formPage.expectText(formPage.confirmationMessage, 'Thank you for your message');
  });
});
