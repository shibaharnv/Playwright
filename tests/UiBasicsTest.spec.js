const {test}=require('@playwright/test')





test('First Playwright Test',async ({browser})=>
{
    //step1
    //await
    //step 2
    //step 3

    const context= await browser.newContext();
    
    const page =await context.newPage();

    await page.goto("https://www.google.com/")
});


test('Page Playwright Test',async ({page})=>
{
// default context and page

    await page.goto("https://www.google.com/")
});


