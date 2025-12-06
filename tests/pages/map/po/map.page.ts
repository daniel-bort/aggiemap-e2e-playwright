import { type Locator, type Page, expect } from '@playwright/test';

export class MapPage {
  readonly page: Page;
  readonly mapCanvas: Locator;
  readonly zoomInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mapCanvas = page.locator('canvas').first();
    
    this.zoomInBtn = page.getByTitle('Zoom In');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.mapCanvas).toBeVisible({ timeout: 15000 });
  }
}
