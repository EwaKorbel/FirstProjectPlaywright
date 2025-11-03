import { test, expect } from '@playwright/test';

test.describe('API tests', () => {
  test('GET users list', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
  });

  test('POST create user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: { name: 'Ewa', job: 'Tester' },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.name).toBe('Ewa');
  });
});
