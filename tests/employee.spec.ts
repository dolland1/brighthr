import { test, expect } from "@playwright/test";
import moment from "moment";
import { LoginPage } from "../page-objects/login-page";
import { EmployeePage } from "../page-objects/employee-page";

test("add employee", async ({ page }) => {
  const firstName = "Test1";
  const lastName = "User1";
  const timestamp = Date.now().toString();
  const email = "dmholland3+" + timestamp + "@gmail.com";
  const date = moment();
  const todayPicker = date.format("ddd MMM DD");
  const formatDay = date.format("DD");
  const loginPage = new LoginPage(page);
  const employeePage = new EmployeePage(page, todayPicker, formatDay);

  await loginPage.goTo();
  await loginPage.login();
  await employeePage.addNewEmployee(firstName, lastName, email);
  await expect(
    page.getByRole("heading", { name: "Test1 User1" })
  ).toBeVisible();
});

test("add another employee", async ({ page }) => {
  const firstName = "Test2";
  const lastName = "User2";
  const timestamp = Date.now().toString();
  const email = "dmholland3+" + timestamp + "@gmail.com";
  const date = moment();
  const todayPicker = date.format("ddd MMM DD");
  const formatDay = date.format("DD");
  const loginPage = new LoginPage(page);
  const employeePage = new EmployeePage(page, todayPicker, formatDay);

  await loginPage.goTo();
  await loginPage.login();
  await employeePage.addNewEmployee(firstName, lastName, email);
  await expect(
    page.getByRole("heading", { name: "Test2 User2" })
  ).toBeVisible();
});
