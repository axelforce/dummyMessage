import { test as base, expect as baseExpect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    // 👇 Mock the send-message API
    await page.route('**/api/send-message', async route => {
      const request = route.request();
      const body = await request.postDataJSON();
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: body.message }),
      });
    });

    await use(page);
  }
});
export const expect = baseExpect;