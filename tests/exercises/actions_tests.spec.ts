import { test } from "@playwright/test";

test("click test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator('//button[@type="submit"]').click();
});

test("fill and pressSequentially", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("start");
  await page.locator("#username").fill("end");
  await page.locator("#username").pressSequentially("kde");
});

test("select tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator('//select[@id="dropdowm-menu-1"]').selectOption("sql");
  await page
    .locator('//select[@id="dropdowm-menu-2"]')
    .selectOption({ label: "TestNG" });
});

test("checkbox radio button test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator('//input[@value="option-1"]').check();
  await page.locator('//input[@value="orange"]').check();
});

test("iFrame test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  const frame = await page.frameLocator("#frame");
  await frame.locator("#button-find-out-more").click();
});

test("Hover test", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  await page
    .locator('//div[@class="dropdown hover"]//button[@class="dropbtn"]')
    .hover();
  await page
    .locator('//div[@class="dropdown hover"]//a[@class="list-alert"]')
    .click();
});
