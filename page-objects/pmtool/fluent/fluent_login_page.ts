import { type Locator, type Page } from "@playwright/test";
import { HomePage } from "./fluent_home_page";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool/";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("//button[@type='submit']");
  }

  async openPMTool(): Promise<LoginPage> {
    await this.page.goto(this.url);

    return this;
  }

  async fillUsername(username: string): Promise<LoginPage> {
    await this.usernameInput.fill(username);

    return this;
  }

  async fillPassword(password: string): Promise<LoginPage> {
    await this.passwordInput.fill(password);

    return this;
  }

  async clickLogin(): Promise<HomePage> {
    await this.loginButton.click();

    return new HomePage(this.page);
  }

  async login(username: string, password: string): Promise<HomePage> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();

    return new HomePage(this.page);
  }
}
