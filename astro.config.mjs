// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Custom domain — site is served at root.
export default defineConfig({
  site: "https://hultan.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    // Two Shiki themes; CSS variables drive which one is shown.
    // See design.md §6 "Code blocks".
    shikiConfig: {
      // Both themes emitted as CSS vars (--shiki-dark, --shiki-light).
      // No inline default color — global.css picks the variable per theme.
      themes: {
        dark: "vesper",
        light: "min-light",
      },
      defaultColor: false,
      wrap: false,
    },
  },
});
