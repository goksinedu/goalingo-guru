import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

mkdirSync(new URL("../verify", import.meta.url), { recursive: true });
const out = new URL("../verify/", import.meta.url).pathname.replace(/^\//, "");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
page.on("console", (m) => {
  if (m.type() === "error") console.log("CONSOLE", m.text());
});

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForSelector("text=England keep Europe");
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/01-hook.png", fullPage: true });

await page.getByText("0 shots", { exact: false }).first().click();
await page.waitForSelector("text=Evidence");
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/02-evidence.png" });
await page.getByRole("button", { name: "Close", exact: true }).click();

await page.getByRole("button", { name: "England" }).first().click();
await page.getByRole("button", { name: "Show market vs fans" }).click();
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/03-pulse.png" });

await page.getByText("30–39").first().click();
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/04-window.png" });

await page.getByRole("button", { name: "Sources" }).first().click();
await page.waitForSelector("text=Four folders");
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/05-sources.png", fullPage: true });

await page.getByRole("button", { name: "Today" }).click();
await page.waitForSelector("text=1 match");
await page.screenshot({ path: "e:/Goalingo/guru-app/verify/06-home.png" });

await page.getByRole("button", { name: "GURU", exact: true }).click();
await page.waitForSelector("text=England keep Europe");

const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await desktop.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await desktop.screenshot({ path: "e:/Goalingo/guru-app/verify/07-desktop.png", fullPage: true });

console.log("OK", out);
await browser.close();
