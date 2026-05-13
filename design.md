# Design

Design language for hultan.com. Source of truth — implementation in `src/styles/global.css`, `src/layouts/`, and `src/components/` must match this document. If the two diverge, this file wins.

---

## 1. Principles

Five rules. Everything else follows.

1. **Restraint over decoration.** No gradients, no shadows, no glass, no glow. If a visual element doesn't serve reading, it doesn't ship.
2. **Type carries the design.** Hierarchy comes from size, weight, and spacing — not color, not boxes.
3. **Warm, not stark.** Off-white on near-black. Never `#000` on `#fff`. Pure values feel cheap and tire the eye.
4. **One accent, used sparingly.** A single muted fjord blue marks links and the current page. Nothing else competes.
5. **Honest defaults.** System fonts where they hold up. Plain semantic HTML. No animation that isn't a hover or focus state.

Aesthetic reference points: Aftenposten, *Monocle* magazine, Vercel Geist, *Are.na*, Nordic Modernism (Aalto, Jacobsen — restraint, natural materials, function-first).

---

## 2. Color tokens

Dark mode is primary. Light mode is a mirror, available via `prefers-color-scheme` and a manual toggle.

### Dark (default)

| Token              | Hex       | Use                                         |
| ------------------ | --------- | ------------------------------------------- |
| `--bg`             | `#0f0f10` | Page background. Warm near-black.           |
| `--bg-elevated`    | `#17171a` | Code blocks, subtle surfaces.               |
| `--surface`        | `#1c1c20` | Reserved for future cards / pulled quotes.  |
| `--border-subtle`  | `#24242a` | Hairline dividers (list items, hr).         |
| `--border`         | `#2e2e34` | Visible borders (code block outline).       |
| `--fg`             | `#e7e5e1` | Body text. Warm off-white, like birch.      |
| `--fg-secondary`   | `#a8a59f` | Meta (dates, tags), secondary nav.          |
| `--fg-muted`       | `#6e6c66` | Captions, timestamps, footer.               |
| `--accent`         | `#8ca0b3` | Links, current-page underline. Fjord blue.  |
| `--accent-hover`   | `#a8bccd` | Link hover, focus ring.                     |
| `--selection-bg`   | `#2a3441` | `::selection` background.                   |

### Light (mirror)

| Token              | Hex       |
| ------------------ | --------- |
| `--bg`             | `#faf9f6` |
| `--bg-elevated`    | `#f3f1ec` |
| `--surface`        | `#ebe8e1` |
| `--border-subtle`  | `#e3dfd6` |
| `--border`         | `#d4cfc3` |
| `--fg`             | `#1a1a1c` |
| `--fg-secondary`   | `#5c5a55` |
| `--fg-muted`       | `#8a8780` |
| `--accent`         | `#3a5d80` |
| `--accent-hover`   | `#284363` |
| `--selection-bg`   | `#d4dfeb` |

### Contrast checks

Body text on background must meet WCAG AA (≥4.5:1 for normal text, ≥3:1 for ≥18pt). Verified pairs:
- Dark `--fg` on `--bg`: ~14.8:1
- Dark `--fg-secondary` on `--bg`: ~7.6:1
- Dark `--accent` on `--bg`: ~6.9:1
- Light `--fg` on `--bg`: ~16.5:1
- Light `--accent` on `--bg`: ~7.4:1

---

## 3. Typography

### Font families

```css
--font-sans:
  "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto,
  "Helvetica Neue", Arial, sans-serif;
--font-mono:
  "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  monospace;
```

Inter is loaded as a variable font (`@fontsource-variable/inter`) — one weight axis, no FOUT. JetBrains Mono is loaded only on pages that render code blocks. System fonts are honest fallbacks; they're not embarrassing.

No serif. Tried it; clashes with code-heavy posts. Single sans is the Scandinavian choice anyway.

### Scale

Modular scale, ratio **1.200** (minor third). Base 16px.

| Token       | rem        | px   | Use                          |
| ----------- | ---------- | ---- | ---------------------------- |
| `--text-xs` | 0.75rem    | 12   | Footer, captions             |
| `--text-sm` | 0.875rem   | 14   | Meta, dates, tags            |
| `--text-base` | 1rem     | 16   | Body                         |
| `--text-md` | 1.125rem   | 18   | Lead paragraph (post intro)  |
| `--text-lg` | 1.333rem   | 21   | h3                           |
| `--text-xl` | 1.6rem     | 26   | h2                           |
| `--text-2xl` | 1.92rem   | 31   | h1 on listing pages          |
| `--text-3xl` | 2.3rem    | 37   | Post title                   |

### Weights

Only three weights ship: **400** (body), **500** (UI emphasis, nav, titles in lists), **600** (h1, h2). Anything heavier reads as marketing.

### Line height & measure

| Context        | line-height | max-width   |
| -------------- | ----------- | ----------- |
| Body prose     | 1.65        | 65ch        |
| Headings       | 1.2         | inherit     |
| UI / nav       | 1.4         | n/a         |
| Code blocks    | 1.55        | 100%        |

Measure (line length) is the most important typography rule on this site. Body prose **never exceeds 65 characters per line**. Use `max-width: 65ch` on `main` or the prose container.

### Tracking

Default `letter-spacing: 0`. Exceptions:
- Headings: `-0.01em` (slight tighten — Inter at large sizes opens up)
- All-caps labels (tags, "PUBLISHED IN"): `0.05em`
- Monospace code: `0`

---

## 4. Spacing

Base unit: **4px**. Scale uses multiples only.

| Token        | px  | Common use                            |
| ------------ | --- | ------------------------------------- |
| `--space-1`  | 4   | Icon padding                          |
| `--space-2`  | 8   | Inline gap                            |
| `--space-3`  | 12  | Compact stack                         |
| `--space-4`  | 16  | Default stack between sibling blocks  |
| `--space-6`  | 24  | Paragraph gap                         |
| `--space-8`  | 32  | Section gap inside post               |
| `--space-12` | 48  | Major section gap (header → list)     |
| `--space-16` | 64  | Page top/bottom padding               |
| `--space-24` | 96  | Above h1 on post pages                |

Rhythm rule: **vertical rhythm beats grid**. Stack siblings with margin/gap from this scale only. No magic numbers.

---

## 5. Layout

- Single column. No sidebars, no widgets, no tag clouds.
- Page max-width: **65ch** for prose, **720px** for list pages.
- Horizontal padding: `1.5rem` (24px) at all viewports.
- Header and footer share that same width — no full-bleed bars.
- No grid system. Flex when needed, otherwise normal flow.

### Vertical structure of a page

```
┌─ header (text nav, ~64px tall) ─┐
│                                 │
│ (--space-12)                    │
│                                 │
│ ─── main content ───            │
│                                 │
│ (--space-16)                    │
│                                 │
└─ footer (text only)             ┘
```

---

## 6. Components

### Header / nav

- Site name as wordmark (text, weight 500). No icon.
- Two links: **Blog**, **About**.
- Current page: underline using `--accent`, 1px, offset 4px (`text-underline-offset`).
- Inactive links: `--fg` color, no underline.
- Hover: `--accent`, no underline.
- Border-bottom on `<header>`: `1px solid --border-subtle`.

### Footer

- One line: `© {year} Andree Hultgren` in `--fg-muted`, `--text-xs`.
- Border-top: `1px solid --border-subtle`.
- No social icons. If links are needed later, plain text inline.

### Post list (home + /blog)

```
┌────────────────────────────────────────────┐
│ Post title                       13 May 26 │  ← title 500 weight, date mono sm
│ One-line description in --fg-secondary     │  ← --text-sm
│                                            │
│ ─── --border-subtle hairline ───           │
│                                            │
│ Next post title                  ...       │
└────────────────────────────────────────────┘
```

- Date in `--font-mono`, `--text-sm`, `--fg-muted`. Right-aligned, tabular-nums.
- Title font weight 500, `--text-base` (home) or `--text-md` (blog index).
- Description on its own line, `--text-sm`, `--fg-secondary`. One line, ellipsis if longer.
- Vertical padding: `--space-4` top + bottom. Hairline border-bottom.
- Whole row is hover target: title becomes `--accent`. No other visual change.

### Post page

```
[← Blog]                              ← --fg-muted, --text-sm
                                          (--space-8)
Post title here                       ← --text-3xl, weight 600, tracking -0.01em
13 May 2026 · 4 min read              ← --text-sm, --fg-muted
#tag #tag                             ← --text-xs, uppercase, tracking 0.05em
                                          (--space-12)
Body paragraphs at --text-base ...
```

- Title is the only h1. No "Posts" or "Article" prelude label.
- Reading time computed at build time (~200 wpm), shown only if ≥2 min.
- Tags: lowercase in source, displayed UPPERCASE with `--text-xs`, `--fg-muted`.
- Paragraph spacing: `--space-6` between `<p>`.
- h2 inside post: `--space-12` top, `--space-4` bottom.
- h3: `--space-8` top, `--space-2` bottom.

### Code blocks

- Background: `--bg-elevated`.
- Border: `1px solid --border`.
- Border-radius: `6px`.
- Padding: `--space-4` (16px) all sides.
- Font: `--font-mono`, `--text-sm`, line-height 1.55.
- Overflow-x: scroll. No wrapping.
- Shiki theme: **`vesper`** (dark) / **`min-light`** (light). Both restrained, no neon.
- Inline `code`: same mono font, `--text-sm` size relative to surrounding text, no background tint, `--fg` color slightly off (use `--accent` only inside link text).

### Blockquote

- Border-left: `2px solid --border` (NOT accent — too loud).
- Padding-left: `--space-4`.
- Color: `--fg-secondary`.
- No italics. Italics in body prose are reserved for true emphasis.

### Horizontal rule

- `border-top: 1px solid --border-subtle`, no other styling.
- Margin: `--space-12` top and bottom.

### Images in posts

- Full content-width.
- Border-radius: `6px`.
- `--space-8` top and bottom margin.
- Optional `<figcaption>` below: `--text-sm`, `--fg-muted`, centered.

### Links (in prose)

- Color: `--accent`.
- `text-decoration: underline`.
- `text-underline-offset: 3px`.
- `text-decoration-thickness: 1px`.
- Hover: color `--accent-hover`, thickness `2px`.

---

## 7. Motion

- Transitions allowed on `color`, `text-decoration-color`, `border-color` only. Duration `120ms`, easing `ease-out`.
- No transitions on layout, transform, opacity, filter.
- No scroll-linked animation, no parallax, no reveal-on-scroll.
- Page transitions: none. Hard cuts. Astro's view transitions intentionally off.
- Respect `prefers-reduced-motion: reduce` — disables all transitions.

---

## 8. Accessibility

Non-negotiable. If a design choice breaks one of these, the design changes.

- **Contrast:** WCAG AA minimum (4.5:1 body, 3:1 large). Tokens above pre-verified.
- **Focus ring:** `2px solid --accent-hover`, `outline-offset: 3px`, `border-radius: 4px` on the outline. Visible on every interactive element via `:focus-visible`.
- **Skip link:** "Skip to content" link as first focusable element, visually hidden until focused.
- **Heading order:** one `<h1>` per page, no skipped levels.
- **Semantic HTML:** `<article>`, `<nav>`, `<main>`, `<time>`. No `<div>` soup.
- **Alt text:** required on every `<img>`. Decorative images use `alt=""` explicitly.
- **Reduced motion:** all transitions disabled under `prefers-reduced-motion: reduce`.
- **Color is never the only signal.** Current page has underline, not just color. Errors (if any) carry text + icon, not color alone.

---

## 9. Dark / light mode

- Default: dark, regardless of system. (Site identity is dark; light is opt-in.)
- Honor `prefers-color-scheme: light` only when the user has not set an explicit override.
- Manual toggle in header, far right. Three states: **system / dark / light**. Persist to `localStorage` under key `theme`.
- Apply via `data-theme` attribute on `<html>`. CSS variables redefined in `[data-theme="light"]`.
- No flash of wrong theme: inline script in `<head>` reads `localStorage` and sets `data-theme` before paint.

---

## 10. Iconography

Avoided where possible. When used:

- Source: Lucide (`lucide-static` for SVG). Stroke width `1.5`, size matches surrounding text line-height.
- Color: `currentColor`.
- Always paired with a visible or sr-only text label. No icon-only buttons.

---

## 11. Open questions

Things deliberately deferred — decide before implementing them, not now.

- **Pagination on /blog.** Not needed below 30 posts. Decide at 25.
- **Tag pages.** Not yet. Decide when there are 5+ tags with 3+ posts each.
- **Search.** Not yet. If/when added: client-side, `pagefind`.
- **RSS feed.** Currently no. Add if requested.
- **Comments.** No.

---

## 12. Out of scope (explicitly)

These are not coming. If you find yourself building them, stop:

- Hero sections with gradient text or animated backgrounds
- "Featured post" cards
- Author avatars on post pages
- Newsletter signup
- Sticky headers
- Reading progress bars
- Estimated reading time as a big badge
- Glassmorphism, neumorphism, any -morphism
- Logo / monogram / favicon beyond the existing `icon.png`

---

## Implementation checklist

When applying this document to code:

- [ ] Replace `src/styles/global.css` with token-based stylesheet (sections 2, 3, 4)
- [ ] Load Inter Variable + JetBrains Mono via `@fontsource-variable/*`
- [ ] Switch Shiki theme in `astro.config.mjs` to `vesper` (dark) / `min-light` (light)
- [ ] Update `Header.astro` per section 6
- [ ] Update `Footer.astro` per section 6
- [ ] Update `BlogPost.astro` per section 6
- [ ] Update `index.astro` and `blog/index.astro` per section 6 (post list)
- [ ] Add theme toggle component + no-flash inline script in `BaseHead.astro`
- [ ] Add skip-to-content link in `BaseLayout.astro`
- [ ] Add reading-time computation in `BlogPost.astro` (remark plugin or inline)
- [ ] Verify contrast on every token pair after implementation
