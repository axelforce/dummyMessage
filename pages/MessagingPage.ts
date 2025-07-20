import { Page, Locator } from '@playwright/test';

export class MessagingPage {
  readonly page: Page;
  readonly input: Locator;
  readonly sendButton: Locator;
  readonly messages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('#messageInput');
    this.sendButton = page.locator('#sendBtn');
    this.messages = page.locator('#messageList li');
  }

  async sendMessage(text: string) {
    await this.input.fill(text);
    await this.sendButton.click();
  }

  lastMessage() {
    return this.messages.last();
  }
}