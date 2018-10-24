const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");
const iPhonex = devices["iPhone X"];
const NotImplementedError = require("./NotImplemented");

describe("Google screenshots", () => {
  let browser, page;
  let url = "https://google.com";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Save an iPhone X screenshot", async () => {
    await page.emulate(iPhonex);
    await page.goto(url);
    // Grab a screenshot and save it as "iPhoneX-screenshot.png"
    await page.screenshot({path: 'screenshot.png'});
  });

  test("Save a desktop screenshot", async () => {
    await page.setViewport({ width: 1440, height: 800 });
    await page.goto(url);
    // Grab a screenshot and save it as "desktop-screenshot.png"
    await page.screenshot({path: 'desktop-screenshot.png'});
  });
});
