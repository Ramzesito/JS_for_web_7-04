let page;

describe("Github page tests", () => {

  jest.setTimeout(60000);

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team", {timeout: 10000});
  });
  
  afterEach(() => {
    page.close();
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1', {timeout: 10000});
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'), {timeout: 10000} );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
      timeout: 60000,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent, {timeout: 10000} );
    expect(actual).toContain("Sign up for free")
  });
});


describe("Github page additional test (about page)", () => {

  jest.setTimeout(60000);

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/about", {timeout: 10000});
  });
  
  afterEach(() => {
    page.close();
  });

  test("H1 content", async () => {
    const descSel = "h1.h1-mktg.mb-3";
    await page.waitForSelector(descSel, {timeout: 10000});
    const actual = await page.$eval(descSel, link => link.textContent, {timeout: 10000} );
    expect(actual).toContain("Let's build from here");
  });

});


describe("Github page additional test (shop page)", () => {

  jest.setTimeout(60000);

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://www.thegithubshop.com");
  });
  
  afterEach(() => {
    page.close();
  });

  test("1 block content", async () => {
    const descSel = "#FJFND9P";
    await page.waitForSelector(descSel);
    const actual = await page.$eval(descSel, link => link.textContent );
    expect(actual).toContain("New Collections");
  });

});

describe("Github page additional test (pricing page)", () => {

  jest.setTimeout(60000);

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/pricing");
  });
  
  afterEach(() => {
    page.close();
  });

  test("H2 content", async () => {
    const descSel = "h2.h6-mktg.mb-3";
    await page.waitForSelector(descSel);
    const actual = await page.$eval(descSel, link => link.textContent );
    expect(actual).toContain("How often do you want to pay?");
  });

});