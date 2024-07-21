const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async ({browser})=>
{
    //openbrowser
    const context = await browser.newContext();
    const page = await context.newPage();
    //object 
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    //open address web
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //false username 
    await userName.type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    //assertion 
    await expect(page.locator("[style*='block']")).toContainText('Incorrect ');
    //true username & grab data cardTitle dashboard
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    //race condition
    await Promise.all([
        page.waitForNavigation(),
        await signIn.click(),
    ]);

    // console.log(await page.locator(".card-body a").first().textContent());
    // console.log(await page.locator(".card-body a").nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);


});

test('Page Playwright test', async ({page})=>
{
   await page.goto("https://www.google.com/");
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");

});