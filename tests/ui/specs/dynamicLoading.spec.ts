import path from 'path';
import { test } from '@playwright/test';
import { DynamicLoadingPage } from '../pages/dynamicLoading.page';

test.describe('Dynamic Loading tests', () => {

  test('Should load hidden element (Example 1)', async ({ page }) => {
    const dynamicPage = new DynamicLoadingPage(page);
    await dynamicPage.open();
    await dynamicPage.openExample1();

    await dynamicPage.startAndWaitForFinish();
    await dynamicPage.verifyTextVisible('Hello World!');
  });

  test('Should render element dynamically (Example 2)', async ({ page }) => {
    const dynamicPage = new DynamicLoadingPage(page);
    await dynamicPage.open();
    await dynamicPage.openExample2();

    await dynamicPage.startAndWaitForFinish();
    await dynamicPage.verifyTextVisible('Hello World!');
  });

});
