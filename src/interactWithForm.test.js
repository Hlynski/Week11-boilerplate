const puppeteer = require("puppeteer");
const NotImplementedError = require("./NotImplemented");

describe("Google.com", () => {
  let browser, page;
  let url = "https://www.google.com";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 400 });
    page = await browser.newPage();
    jest.setTimeout(100000);
  });

  afterEach(() => {
    browser.close();
  });

  test("Search results found for 'Puppeteer'", async () => {
    await page.goto(url);
    // 1. Click on the input form
    const selector = '.gsfi';
    await page.waitForSelector(selector);
    await page.type(selector, "Puppeteer");
    // 2. Type "Puppeteer" into the search box
    // 3. Submit the form
    // 4. Wait for the search results to load
    // 5. Verify at least one search result is found

  });
});
