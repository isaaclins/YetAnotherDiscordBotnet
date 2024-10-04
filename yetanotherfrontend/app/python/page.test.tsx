import { test, expect } from '@playwright/test';

test.describe('Page Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000'); // Adjust the URL as needed
    });

    test('should render the form correctly', async ({ page }) => {
        await expect(page.locator('form')).toBeVisible();
        await expect(page.locator('input[placeholder="Username"]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test('should display validation error for empty username', async ({ page }) => {
        await page.click('button[type="submit"]');
        await expect(page.locator('text=Username is required')).toBeVisible(); // Adjust the error message as needed
    });

    test('should submit the form successfully', async ({ page }) => {
        await page.fill('input[placeholder="Username"]', 'testuser');
        await page.click('button[type="submit"]');

        // Mock the API response
        await page.route('/api/save-settings', route => {
            route.fulfill({
                status: 200,
                body: JSON.stringify({ success: true }),
            });
        });

        await expect(page.locator('text=Settings saved successfully.')).toBeVisible();
    });

    test('should handle API error', async ({ page }) => {
        await page.fill('input[placeholder="Username"]', 'testuser');
        await page.click('button[type="submit"]');

        // Mock the API response
        await page.route('/api/save-settings', route => {
            route.fulfill({
                status: 500,
                body: JSON.stringify({ success: false }),
            });
        });

        await expect(page.locator('text=Failed to save settings.')).toBeVisible();
    });
});