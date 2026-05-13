import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

/**
 * Full-page screenshots of every public route × every theme × every viewport
 * (viewport is driven by Playwright projects). Output lives in
 * `.screenshots/<project>/<theme>/<slug>.png` and is gitignored.
 */

const ROUTES: { name: string; path: string }[] = [
  { name: "home", path: "/" },
  { name: "blog-index", path: "/blog" },
  { name: "post-hello-world", path: "/blog/hello-world" },
  { name: "about", path: "/about" },
  { name: "colophon", path: "/colophon" },
  { name: "404", path: "/this-does-not-exist" },
];

const THEMES = ["dark", "light"] as const;

for (const theme of THEMES) {
  for (const route of ROUTES) {
    test(`${theme} — ${route.name}`, async ({ page }, testInfo) => {
      // Set theme before navigation so no-flash script picks it up.
      await page.addInitScript((t) => {
        try {
          localStorage.setItem("theme", t);
        } catch (_) {}
      }, theme);

      const response = await page.goto(route.path, { waitUntil: "networkidle" });
      // 404 page legitimately returns 404 status; everything else 200.
      if (route.name !== "404") {
        expect(response?.status(), `status for ${route.path}`).toBe(200);
      }

      // Wait a tick for variable fonts to swap in.
      await page.evaluate(() => document.fonts?.ready);
      await page.waitForTimeout(150);

      const project = testInfo.project.name;
      const outDir = path.join(
        process.cwd(),
        ".screenshots",
        project,
        theme,
      );
      fs.mkdirSync(outDir, { recursive: true });
      await page.screenshot({
        path: path.join(outDir, `${route.name}.png`),
        fullPage: true,
      });
    });
  }
}
