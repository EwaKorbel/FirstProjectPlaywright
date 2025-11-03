// tests/ui/login.spec.ts
import path from 'path';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { validUser, invalidUser } from '../utils/testData';

test.describe('Login tests', () => {
  test('Should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(validUser.username, validUser.password);
    await expect(loginPage.successMessage).toContainText('You logged into a secure area!');
  });

  test('Should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(invalidUser.username, invalidUser.password);
    await expect(loginPage.errorMessage).toContainText('Your username is invalid!');
  });
});


