---
description: Create distinctive, production-grade frontend interfaces with high design quality
---

# /design Workflow

Use this workflow when building web components, pages, artifacts, posters, or applications. This includes websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI.

## Pre-Flight: Design Thinking (MANDATORY)

Before writing ANY code, complete this discovery phase:

1. **Purpose Analysis**
   - What problem does this interface solve?
   - Who is the target user?
   - What is the core action/goal?

2. **Aesthetic Direction Selection**
   Pick ONE extreme and commit fully:
   - Brutally minimal
   - Maximalist chaos
   - Retro-futuristic
   - Organic/natural
   - Luxury/refined
   - Playful/toy-like
   - Editorial/magazine
   - Brutalist/raw
   - Art deco/geometric
   - Soft/pastel
   - Industrial/utilitarian
   - Custom hybrid (describe it)

3. **Differentiation Hook**
   - What's the ONE thing someone will remember?
   - What unexpected choice will make this unforgettable?

4. **Constraints Check**
   - Framework requirements (React, Vue, vanilla, etc.)
   - Performance targets
   - Accessibility requirements
   - Browser/device support

## Phase 1: Foundation

// turbo 5. Set up project structure with CSS variables for the color palette and design tokens

6. Choose typography:
   - **BANNED FONTS**: Inter, Roboto, Arial, system-ui, sans-serif defaults
   - Select a distinctive display font
   - Pair with a refined body font
   - Implement font loading strategy

## Phase 2: Core Implementation

7. Build the layout structure:
   - Consider asymmetry, overlap, diagonal flow
   - Grid-breaking elements where appropriate
   - Generous negative space OR controlled density
   - Unexpected spatial compositions

8. Implement color and theme:
   - Dominant colors with sharp accents
   - Cohesive palette (NOT evenly-distributed)
   - CSS variables for consistency
   - Light/dark considerations based on aesthetic

## Phase 3: Visual Atmosphere

9. Create depth and atmosphere (choose what fits the aesthetic):
   - Gradient meshes
   - Noise textures
   - Geometric patterns
   - Layered transparencies
   - Dramatic shadows
   - Decorative borders
   - Grain overlays
   - Custom backgrounds (NOT solid colors)

10. Add contextual effects:
    - Custom cursors (if appropriate)
    - Hover state surprises
    - Scroll-triggered elements
    - Subtle parallax or depth

## Phase 4: Motion & Polish

11. Implement animations:
    - CSS-only for HTML projects
    - Motion library for React when available
    - Focus on high-impact moments:
      - Page load orchestration with staggered reveals (animation-delay)
      - Meaningful transitions between states
      - Micro-interactions on key actions only

12. Final polish pass:
    - Typography refinement (letter-spacing, line-height)
    - Spacing consistency
    - Edge cases and empty states
    - Responsive behavior

## Anti-Patterns to AVOID

❌ Generic AI aesthetics:

- Purple gradients on white backgrounds
- Overused font families (Inter, Roboto, Arial)
- Predictable layouts and component patterns
- Cookie-cutter design lacking context

❌ Safe, boring choices:

- Converging on common selections (e.g., Space Grotesk)
- Timid, evenly-distributed color palettes
- Scattered, purposeless micro-animations
- Solid color backgrounds by default

## Verification

// turbo 13. Run the application and visually verify: - Does it match the committed aesthetic direction? - Is there a clear "wow" moment? - Would this be mistaken for generic AI output? (If yes, iterate) - Does complexity match vision? (Maximalist = elaborate, Minimal = precise)

14. Take screenshots or visual review of key states

## Remember

**Claude is capable of extraordinary creative work. Don't hold back. Show what can truly be created when thinking outside the box and committing fully to a distinctive vision.**

Match implementation complexity to aesthetic vision:

- Maximalist designs → elaborate code, extensive animations
- Minimalist designs → restraint, precision, careful spacing
- Elegance comes from executing the vision well
