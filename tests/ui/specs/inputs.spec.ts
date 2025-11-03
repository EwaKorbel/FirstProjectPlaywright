import path from 'path';
import { test } from '@playwright/test';
import { InputsPage } from '../pages/inputs.page';

test.describe('Inputs tests', () => {
  test('Should accept numeric input', async ({ page }) => {
    const inputsPage = new InputsPage(page);
    await inputsPage.open();

    await inputsPage.enterValue('123');
    await inputsPage.expectValueToBe('123');
  });

  test('Should replace old value with new one', async ({ page }) => {
    const inputsPage = new InputsPage(page);
    await inputsPage.open();

    await inputsPage.enterValue('10');
    await inputsPage.enterValue('42');
    await inputsPage.expectValueToBe('42');
  });

  test('Should not crash on non-numeric input', async ({ page }) => {
    const inputsPage = new InputsPage(page);
    await inputsPage.open();

    await inputsPage.enterValue('abc');
    const value = await inputsPage.getInputValue();
    console.log('Input after typing abc:', value); // często pozostaje puste
  });
});
