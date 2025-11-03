import path from 'path';
import { test } from '@playwright/test';
import { CheckboxesPage } from '../pages/checkboxes.page';

test.describe('Checkboxes tests', () => {
  test('Should check and uncheck checkboxes', async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.open();

    await checkboxesPage.checkFirst();
    await checkboxesPage.uncheckSecond();

    await checkboxesPage.expectFirstChecked();
    await checkboxesPage.expectSecondUnchecked();
  });
});
