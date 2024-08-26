import { test, expect } from "@playwright/test";

test("error text test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator('//button[@type="submit"]').click();
  expect.soft(page.locator("#username-error")).toBeVisible;
  await expect
    .soft(page.locator("#username-error"))
    .toHaveText("This field is required!");
  expect.soft(page.locator("#password-error")).toBeVisible;
  await expect
    .soft(page.locator("#password-error"))
    .toHaveText("This field is required!");
});
