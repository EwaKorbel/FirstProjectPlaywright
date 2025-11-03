import path from 'path';
import { test } from '@playwright/test';
import { DropdownPage } from '../pages/dropdown.page';

test.describe('Dropdown tests', () => {
  test('Should select options from dropdown', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.open();

    await dropdownPage.selectOptionByValue('1');
    await dropdownPage.expectSelectedOption('Option 1');

    await dropdownPage.selectOptionByValue('2');
    await dropdownPage.expectSelectedOption('Option 2');
  });
});
