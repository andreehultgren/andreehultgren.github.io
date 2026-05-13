# hultan.com

Personal blog by Andree Hultgren. Built with [Astro](https://astro.build/) and deployed to GitHub Pages on the custom domain **hultan.com**.

## Stack

- Astro v5 + Content Collections
- MDX for posts that need embedded components
- `@astrojs/sitemap` for `/sitemap-index.xml`
- GitHub Pages via `withastro/action` + `actions/deploy-pages`

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview  # serves the build
```

## Writing a post

Drop a Markdown or MDX file in `src/content/blog/`. Filename becomes the slug.

```md
---
title: "My post"
description: "Short summary used for meta + the list page."
pubDate: 2026-05-13
# optional
updatedDate: 2026-05-20
tags: ["astro", "notes"]
draft: false
heroImage: "/uploads/some-image.png"
---

Post body in Markdown / MDX.
```

Drafts (`draft: true`) are hidden from listings and don't generate routes.

## Project layout

```
src/
  components/       # Astro components (Header, Footer, BaseHead, etc.)
  content/blog/     # Markdown / MDX posts
  content.config.ts # Content collection schema
  layouts/          # BaseLayout, BlogPost
  pages/            # Route files
  styles/global.css # Minimal placeholder styles (see design.md)
  consts.ts         # SITE_TITLE, SITE_URL, etc.
public/
  CNAME             # hultan.com — required for custom domain
  icon.png          # favicon + OG image
  manifest.json
  robots.txt
.github/workflows/
  deploy.yml        # Astro build → GitHub Pages
  codeql-analysis.yml
```

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds with Astro and publishes to GitHub Pages.

One-time GitHub setup:

1. **Repo Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Custom domain `hultan.com` is served from `public/CNAME` (already in repo). Make sure DNS points to GitHub Pages.

## Design

Visual design is intentionally minimal right now. Real design language will be defined in [`design.md`](./design.md) and then applied across components/styles.
