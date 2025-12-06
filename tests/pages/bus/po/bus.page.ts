import { type Locator, type Page, expect } from '@playwright/test';

export class BusPage {
  readonly page: Page;
  readonly busLayerBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    // UPDATE: Using the exact selector found via codegen
    // We use 'exact: false' because the name you found seemed to cut off at the end
    this.busLayerBtn = page.getByRole('button', { name: 'Toggle bus controls', exact: false });
  }

  async goto() {
    await this.page.goto('/');
  }
}
