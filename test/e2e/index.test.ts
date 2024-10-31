import { expect, test } from "@playwright/test"

const title: RegExp = /OPENUP ラボ滝沢/

test("has title", async ({ page }) => {
  await page.goto("/")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(title)
})
