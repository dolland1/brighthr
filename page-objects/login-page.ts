import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailAddressInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailAddressInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async goTo() {
    await this.page.goto("https://sandbox-login.brighthr.com/login");
  }

  async login() {
    await this.emailAddressInput.fill("dmholland3@gmail.com");
    await this.passwordInput.fill("NmdbsSu57SByA7S");
    await this.loginButton.click();
  }
}
