import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();
beforeEach(() => {
  cy.visit("https://opensource-demo.orangehrmlive.com");
});
describe("POM Demo Test Suite", () => {
  it("Login Test 1", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
  });
  it("Login Test 2", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
  });
});
