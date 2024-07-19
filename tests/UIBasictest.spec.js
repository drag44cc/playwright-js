const {test} = require('@playwright/test');



test('First Playwright test', async ({browser})=>
{
    //chrome
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");

});