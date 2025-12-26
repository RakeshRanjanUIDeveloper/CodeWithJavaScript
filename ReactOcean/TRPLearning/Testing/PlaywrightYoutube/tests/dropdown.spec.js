const { test, expect } = require('@playwright/test');

test("select values from dropdown", async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    await page.locator("#state").selectOption({ label: "Goa" });
    await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({ value: "Himachal Pradesh" });
    await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({ index: 4 });

    let state = await page.$("#state");
    let allElements = await state.$$("option");

    let ddStatus = false;

    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i];
        let value = await element.textContent();

        // Trim to remove extra spaces
        value = value.trim();

        console.log(value);

        if (value === 'Rajasthan') {
            ddStatus = true;
            break;
        }
    }

    await expect(ddStatus).toBeTruthy();
});
