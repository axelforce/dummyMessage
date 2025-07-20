import { test, expect } from '../fixtures';
import { MessagingPage } from '../pages/MessagingPage';

test.describe('Dummy Messaging App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/dummy-messaging-app.html');
  });

  test('should send message and display it in the list', async ({ page }) => {
    const messagingPage = new MessagingPage(page);
    await messagingPage.sendMessage('Hello!');
    await page.pause(); // Pause to allow the message to be sent and displayed
    await expect(messagingPage.lastMessage()).toHaveText('Hello!');
  });
});