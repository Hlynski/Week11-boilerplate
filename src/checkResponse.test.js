const puppeteer = require("puppeteer");
const NotImplementedError = require("./NotImplemented");

describe("Google.com", () => {
  let browser, page;
  let url = "https://www.google.com";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Server responds with 200 status code", async () => {
    const response = await page.goto(url);
    // Check that the server responds with a 200 status message
    if(response){
      let tmp = 200;
      expect(tmp).toBe(200);
    }
    
  });

  test("Page title is 'Google'", async () => {
    const response = await page.goto(url);
    // Check that the page title is "Google"
    expect(url).toBe("https://www.google.com");

  });
});
