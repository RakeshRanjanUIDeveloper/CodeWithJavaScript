const {test, expect} = require('@playwright/test');

test("valid login", async({page})=>{
    test.setTimeout(30000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').type('Admin', {delay:200});
    await page.locator("input[placeholder='Password']").type('admin123', {delay:100});
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL(/dashboard/);
    await page.getByAltText("profile picture").click();
    await page.getByText("Logout").click();
    await expect(page).toHaveURL(/login/);
})