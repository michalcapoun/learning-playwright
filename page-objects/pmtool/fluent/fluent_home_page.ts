import { expect, type Locator, type Page } from "@playwright/test";
import { LoginPage } from "./fluent_login_page";

export class HomePage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
  }

  async clickProfile(): Promise<HomePage> {
    await this.profileButton.click();
    await expect(this.logoutButton).toBeVisible();

    return this;
  }

  async clickLogout(): Promise<LoginPage> {
    await this.logoutButton.click();

    return new LoginPage(this.page);
  }
}
