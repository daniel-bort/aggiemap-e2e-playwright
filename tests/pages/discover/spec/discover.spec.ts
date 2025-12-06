import { test, expect } from '@playwright/test';
import { DiscoverPage } from '../po/discover.page';

test.describe('Group F: Discover', () => {
  test('Search bar is present and interactive', async ({ page }) => {
    const discoverPage = new DiscoverPage(page);
    
    // 1. Go to the page
    await discoverPage.goto();
    
    // 2. Wait up to 15 seconds for the search bar to appear
    // (The website is heavy, so we need to be patient)
    await expect(discoverPage.searchInput).toBeVisible({ timeout: 15000 });
    
    // 3. Click it to prove it works
    await discoverPage.searchInput.click();
  });
});
