const { chromium } = require("playwright");

(async () => {
  console.log("Launching browser...");
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("Navigating to live site...");
  await page.goto("https://officebeats.github.io/skypro/");

  console.log("Filling form...");
  await page.fill("#firstName", "Antigravity");
  await page.fill("#lastName", "Playwright");
  await page.fill("#phone", "1234567890");
  await page.fill("#email", "skypro@yopmail.com");
  await page.fill("#company", "Testing Lab");
  await page.fill("#city", "San Francisco");
  await page.fill("#country", "USA");
  await page.fill("#message", "Playwright automated test submission.");

  console.log("Submitting...");
  await page.click('button[type="submit"]');

  // Wait for success message or alert
  try {
    await page.waitForSelector(".form-success", { timeout: 10000 });
    console.log("✅ Success message found!");
  } catch (e) {
    console.log("❌ Success message not found. Checking for alert...");
    // In playwright, alerts are handled via page.on('dialog')
  }

  await browser.close();
})();
