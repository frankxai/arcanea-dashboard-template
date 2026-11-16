# Component contracts

The `/` dashboard is the working component catalogue. `lib/mock-data.ts` owns fictional samples. It has no live analytics service or authenticated backend.

| Module | Inputs and behavior | Release contract |
| --- | --- | --- |
| `components/dashboard/stat-card.tsx` | `label`, numeric `value`, signed `delta`, `accent`; optional `prefix`, `suffix`, `decimals` (default zero). | Preserve decimal precision explicitly: 3.42 and 4.6 must remain distinct. The delta includes a signed-direction icon and absolute percentage. Values must remain readable before/without interpolation. |
| `components/dashboard/revenue-chart.tsx` | Reads `REVENUE_SERIES`; computes the seven-day total and renders a static Recharts area plot. | The badge says sample. The decorative chart is hidden from assistive technology; the accompanying table exposes every day and USD value. Keep `isAnimationActive={false}` for stable captures. |
| `components/motion/reveal.tsx` | `children`, `className`, `delay`, `y`, `blur`, semantic `as`; `StaggerReveal` adds stagger/delay. | Use `motion/react` LazyMotion with existing easing/viewport constants. Reduced motion disables the hidden initial state and renders visible content. Preserve the requested semantic element. |
| `components/motion/number-ticker.tsx` | Numeric value, decimals, affixes and direction; interpolates once in view. | The screen-reader value is static; interpolated digits are decorative. Reduced motion displays the final formatted number immediately. Stop the animation on cleanup. |

Motion for React owns component entry and optional interpolation. GSAP has no demonstrated job in this template. Update `app/globals.css` token authority and regenerate projections; do not edit generated files.

The browser suite covers 1280, 390 and 320px, automated WCAG rules, keyboard focus, reduced-motion stability, decimal precision, accessible revenue values and three decoded-pixel baselines. Technical image replacement requires inspecting the captured UI; publication approval remains separate.

Product-specific Figma nodes remain unmapped in `release/component-map.json`. Code is canonical until mapped desktop/phone references and parity evidence are reviewed.
