import path from 'path';
import { test } from '@playwright/test';
import { DynamicControlsPage } from '../pages/dynamicControls.page';

test.describe('Dynamic Controls tests', () => {

  test('Should remove and add checkbox', async ({ page }) => {
    const dynamicPage = new DynamicControlsPage(page);
    await dynamicPage.open();

    await dynamicPage.removeCheckbox();
    await dynamicPage.addCheckbox();
  });

  test('Should enable and disable input field', async ({ page }) => {
    const dynamicPage = new DynamicControlsPage(page);
    await dynamicPage.open();

    await dynamicPage.enableInput();
    await dynamicPage.disableInput();
  });

});
