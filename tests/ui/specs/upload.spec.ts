import path from 'path';
import { test } from '@playwright/test';
import { UploadPage } from '../pages/upload.page';

test.describe('File Upload tests', () => {
  test('Should upload a file successfully', async ({ page }) => {
    const uploadPage = new UploadPage(page);
    await uploadPage.open();

    const filePath = path.join(process.cwd(), 'tests', 'ui', 'utils', 'testfile.txt');
    await uploadPage.uploadFile(filePath);
    await uploadPage.verifyUploadedFile('testfile.txt');
  });
});

