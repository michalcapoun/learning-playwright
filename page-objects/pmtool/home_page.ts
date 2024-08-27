import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
  }

  async clickProfile() {
    await this.profileButton.click();
    await this.page.waitForTimeout(100);
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async logout() {
    this.clickProfile();
    this.clickLogout();
  }
}
