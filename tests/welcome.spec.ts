// tests/app.spec.ts
import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.click('internal:text="login"i >> nth=0');
	const element = await page.getByText("Welcome").all();
	expect(element).toBeTruthy();
});
