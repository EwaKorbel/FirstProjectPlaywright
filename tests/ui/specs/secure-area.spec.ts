import path from 'path';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { SecureAreaPage } from '../pages/secureArea.page';

test.describe('Secure Area tests', () => {
  test('should login and logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecureAreaPage(page);

    // Otwórz stronę logowania
    await loginPage.open();

    // Zaloguj się
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Sprawdź komunikat po zalogowaniu
    await securePage.expectFlashMessage('You logged into a secure area!');

    // Wyloguj się
    await securePage.logout();

    // Sprawdź komunikat po wylogowaniu
    await securePage.expectFlashMessage('You logged out of the secure area!');
  });
});

