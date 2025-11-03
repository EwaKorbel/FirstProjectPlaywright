import path from 'path';
import { test } from '@playwright/test';
import { AlertsPage } from '../pages/alerts.page';

test.describe('JavaScript Alerts tests', () => {

  test('Should handle simple JS alert', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();

    await alertsPage.handleJsAlert();
    await alertsPage.verifyResult('You successfully clicked an alert');
  });

  test('Should handle JS confirm - accept', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();

    await alertsPage.handleJsConfirm(true);
    await alertsPage.verifyResult('You clicked: Ok');
  });

  test('Should handle JS confirm - dismiss', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();

    await alertsPage.handleJsConfirm(false);
    await alertsPage.verifyResult('You clicked: Cancel');
  });

  test('Should handle JS prompt', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();

    await alertsPage.handleJsPrompt('Playwright rocks!');
    await alertsPage.verifyResult('You entered: Playwright rocks!');
  });

});
