const { chromium } = require('playwright');

describe('Example Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto('https://example.com');
  });

  test('Page Title', async () => {
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  test('Page Content', async () => {
    const content = await page.textContent('body');
    expect(content).toContain('This domain is for use');
  });
});
