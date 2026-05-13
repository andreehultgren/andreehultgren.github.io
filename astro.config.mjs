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
      themes: {
        light: "min-light",
        dark: "vesper",
      },
      wrap: false,
    },
  },
});
