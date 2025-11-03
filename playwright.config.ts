import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // 👈 Playwright będzie szukał testów tutaj i w podfolderach
  testMatch: '**/*.spec.ts', // 👈 Wymagane, żeby widział testy .spec.ts
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});


