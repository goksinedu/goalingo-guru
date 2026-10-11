import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForSelector("text=not played");
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/10-pre-hero.png" });
await page.evaluate(() => window.scrollTo(0, 720));
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/11-pre-stack.png" });
await page.getByText("See evidence").first().click();
await page.waitForSelector("text=Evidence");
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/12-pre-evidence.png" });
console.log("OK");
await browser.close();
