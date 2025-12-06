import { type Locator, type Page, expect } from '@playwright/test';

export class DiscoverPage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    // UPDATE: Using the exact selector found via codegen
    this.searchInput = page.getByRole('textbox', { name: 'Find Building or Parking' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async search(term: string) {
    // We click it to make sure it's interactive
    await this.searchInput.click();
    await this.searchInput.fill(term);
  }
}
