import { test } from "@playwright/test";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { HomePage } from "../../page-objects/pmtool/home_page";

test("Login test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openPMTool();
  await loginPage.fillUsername("pw_skoleni");
  await loginPage.fillPassword("TEG2023");
  await loginPage.clickLogin();
});

test("Logout test", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await loginPage.openPMTool();
  await loginPage.login("pw_skoleni", "TEG2023");
  await homePage.clickProfile();
  await homePage.clickLogout();
});
