const {test}=require('@playwright/test')



test('Revise Playwright Test1',async ({page})=>
{

    const context=await browser.newContext
    const page=await context.newPage();
    await page.goto("https://www.google.com/")

}


);

test('Revise Playwright Test2',async ({page})=>
{

    const context=await browser.newContext
    const page=await context.newPage();
    await page.goto("https://www.google.com/")

}


);