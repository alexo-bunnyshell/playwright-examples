import {expect, test} from "@playwright/test"; 
      
test('Hello world', async ({page}) => {       
  const str = "Hello world";
  console.log(str);
  expect(str).toEqual("Hello world");
})


test('Go To Google', async ({page}) => {       
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);     
})

test('Open Application https', async ({page}) => {       
  await page.goto('https://application-2mcuau.bunnyenv.com/');
  await expect(page).toHaveTitle(/Simple Bootstrap Page/);     
})

test('Open Application http', async ({page}) => {       
  await page.goto('http://application:8080/');
  await expect(page).toHaveTitle(/Simple Bootstrap Page/);     
})

test('Fail Application http', async ({page}) => {       
  await page.goto('http://application:8080/');
  await expect(page).toHaveTitle(/NOT Simple Bootstrap Page/);     
})