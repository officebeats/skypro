# Brainstorm: Image Optimization & SEO

## Goal

Optimize website images for performance, responsiveness, and conversion, while implementing comprehensive SEO best practices to drive traffic.

## Constraints

- Must maintain "premium" visual quality (no visible artifacts).
- Must work across all modern mobile and desktop devices.
- No paid external services (ideally).
- Static site structure (no backend image processing).

## Known context

- Site is currently static HTML/CSS.
- Images are stored in `public/assets/images/`.
- Recently added a video header.
- "Sky Pro" brand: high-tech, premium, B2B cleaning automation.

## Risks

- **Visual Degradation**: Over-compression could make the product look cheap.
- **Layout Shifts**: Lazy loading without defined dimensions causes CLS (Cumulative Layout Shift).
- **Broken Links**: Renaming/moving images might break references if not careful.

## Options

### Option 1: Modern Format Conversion & Responsive Syntax (Recommended)

- Convert all assets to WebP (high quality).
- Use `<picture>` tags or `srcset` to serve proper sizes for mobile vs desktop.
- Implement explicit `width`/`height` attributes and CSS `aspect-ratio` to prevent layout shifts.
- Add `loading="lazy"` to all non-hero images.
- Audit and rewriting `alt` tags for SEO keyword richness.

### Option 2: Image CDN Integration

- Use a service like Cloudinary or ImageKit to auto-optimize.
- **Pros**: Automatic format selection, easiest maintenance.
- **Cons**: External dependency, potential cost, might require JS SDK or URL rewriting.

### Option 3: Build Tool Implementation

- distinct build step (e.g., Vite/Parcel) to optimize assets on build.
- **Pros**: Automated.
- **Cons**: Adds complexity to a simple static setup.

## Recommendation

**Proceed with Option 1.** It provides the best balance of performance control and simplicity for this codebase. We will manually generate optimized assets (or script it once) and update the HTML to use modern best practices.

## Acceptance criteria

- [ ] All major images have WebP variants.
- [ ] Primary images use `srcset` or `<picture>` for responsive switching.
- [ ] All meaningful images have descriptive, keyword-rich `alt` text.
- [ ] Below-the-fold images have `loading="lazy"`.
- [ ] Page passes generic SEO checks (meta tags, h1 structure).
- [ ] Lighthouse Performance score increases.
