import { type Locator, type Page } from "@playwright/test";

export class EmployeePage {
  readonly page: Page;
  readonly employeesTab: Locator;
  readonly addEmployeeButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailAddressInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly startDateSelector: Locator;
  readonly todaysDatePicker: Locator;
  readonly jobTitleInput: Locator;
  readonly saveNewEmployeeButton: Locator;

  constructor(page: Page, todayPicker: string, formatDay: string) {
    this.page = page;
    this.employeesTab = page.getByRole("link", { name: "Employees" });
    this.addEmployeeButton = page.getByRole("button", { name: "Add employee" });
    this.firstNameInput = page.getByRole("textbox", { name: "First name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last name" });
    this.emailAddressInput = page.getByRole("textbox", {
      name: "Email address",
    });
    this.phoneNumberInput = page.getByRole("textbox", {
      name: "Phone number (optional)",
    });
    this.startDateSelector = page.getByTestId("input-selector");
    this.todaysDatePicker = page.getByLabel(todayPicker).getByText(formatDay);
    this.jobTitleInput = page.getByRole("textbox", {
      name: "Job title (optional)",
    });
    this.saveNewEmployeeButton = page.getByRole("button", {
      name: "Save new employee",
    });
  }

  async goTo() {
    await this.page.goto("https://sandbox-app.brighthr.com/employee-hub");
  }

  async addNewEmployee(firstName: string, lastName: string, email: string) {
    await this.employeesTab.click();
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailAddressInput.fill(email);
    await this.phoneNumberInput.fill("07802595514");
    await this.startDateSelector.click();
    await this.todaysDatePicker.click();
    await this.jobTitleInput.fill("QA");
    await this.saveNewEmployeeButton.click();
  }
}
