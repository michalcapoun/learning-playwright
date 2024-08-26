import { test } from "@playwright/test";

test("click projects test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('//button[@type="submit"]').click();
  await page.locator("//li[@id='Projects']").click();
});
