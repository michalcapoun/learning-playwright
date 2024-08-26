import { test } from "@playwright/test";

test("second test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("test");
  await page.locator("#password").fill("test");
});
