import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/pmtool/fluent/fluent_login_page";

test("Fluent login and logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .openPMTool()
    .then((page) => page.fillUsername("pw_skoleni"))
    .then((page) => page.fillPassword("TEG2023"))
    .then((page) => page.clickLogin())
    .then((page) => page.clickProfile())
    .then((page) => page.clickLogout());
});
