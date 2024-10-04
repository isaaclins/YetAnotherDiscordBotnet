const { PlaywrightTestConfig } = require('@playwright/test');

const config = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
};

module.exports = config;