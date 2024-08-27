import { expect, test } from "@playwright/test";

test.skip("Failing test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  expect(page.locator("#abcd")).toBeVisible();
});
