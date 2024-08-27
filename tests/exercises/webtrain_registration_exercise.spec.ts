import { test } from "@playwright/test";

test.skip("E2E Registration", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#name").fill("MC");
  await page.locator("#datepicker").fill("2024-08-26");
  await page.locator("#email").fill("mc@mc.cz");
  await page.locator("#password").fill("123456");
  await page.locator("#confirm-password").fill("123456");
  await page.locator('//input[@value="basic"]').check();
  await page.locator('//input[@id="age"]').fill("33");
  await page.locator("#gender").selectOption("male");
  await page.locator("#address").fill("123456");
  await page.locator('//input[@id="gender"]').selectOption("Sports");
  await page.locator('//input[@id="newsletter"]').check();
  await page.locator('button[type="submit"]').click();
});
