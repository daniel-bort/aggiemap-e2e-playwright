import { test, expect } from '@playwright/test';
import { BusPage } from '../po/bus.page';

test.describe('Group L: Bus Routes', () => {
  test('Bus route toggle is available', async ({ page }) => {
    const busPage = new BusPage(page);
    await busPage.goto();
    
    // Verify the button exists
    await expect(busPage.busLayerBtn).toBeVisible();
    
    // Optional: Click it to ensure no errors occur
    await busPage.busLayerBtn.click();
  });
});
