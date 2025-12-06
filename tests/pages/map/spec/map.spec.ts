import { test, expect } from '@playwright/test';
import { MapPage } from '../po/map.page';

test.describe('Group B: Map Canvas & Interactions', () => {
  test('Map loads and zoom controls are visible', async ({ page }) => {
    const mapPage = new MapPage(page);
    
    // 1. Load the application
    await mapPage.goto();
    
    // 2. Verify the map canvas is visible
    await expect(mapPage.mapCanvas).toBeVisible();
    
    // 3. Verify the UI controls are loaded
    await expect(mapPage.zoomInBtn).toBeVisible();
    
    // Optional: Click to ensure it's interactive (Smoke Test)
    await mapPage.zoomInBtn.click();
  });
});
