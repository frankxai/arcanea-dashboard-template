# Component contracts

Motion for React owns component entry and optional numeric interpolation. Reduced motion renders final values immediately; charts stay static. GSAP has no justified job here.

| Module | Contract |
| --- | --- |
| `components/dashboard/stat-card.tsx` | Reuse the exported component and existing data model. Keep responsive rules, semantic controls and reduced-motion behavior. |
| `components/dashboard/revenue-chart.tsx` | Reuse the exported component and existing data model. Keep responsive rules, semantic controls and reduced-motion behavior. |
| `components/motion/reveal.tsx` | Reuse the exported component and existing data model. Keep responsive rules, semantic controls and reduced-motion behavior. |

Documented code remains the authority until a product-specific Figma component is mapped and rendered parity is reviewed. Test long labels, a 320px viewport, keyboard focus, empty/error states relevant to the route and the real primary action. Charts need textual/table equivalents; decorative layers stay out of the accessibility tree.
