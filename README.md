# Arcanea Dashboard Template

Cosmic analytics dashboard with **6 liquid glass widgets**, **6 motion primitives**, and zero backend dependencies. Mock data included — wire your API when ready.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/frankxai/arcanea-dashboard-template)

## What's Inside

| Widget | What it does |
|--------|-------------|
| **StatCard** × 4 | Animated number tickers with delta + accent line |
| **RevenueChart** | Recharts area chart, gradient fill, custom tooltip |
| **TrafficDonut** | Pie chart with center label and color-coded legend |
| **TopProducts** | Ranked list with gradient progress bars |
| **FunnelCard** | Multi-stage conversion funnel with drop-off % |
| **ActivityFeed** | Recent events with avatar + Gate label |

Plus 6 motion primitives in `components/motion/`:
- LiquidGlass · SplitText · Reveal · GradientMesh · NumberTicker · GlowCard

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Recharts** for charts (no D3 directly)
- **Framer Motion 11** for primitives
- **Tailwind CSS v3** + custom design tokens
- **TypeScript** strict
- **Zero env vars required** — runs with mock data out of the box

## Quick Start

```bash
git clone https://github.com/frankxai/arcanea-dashboard-template.git
cd arcanea-dashboard-template
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Architecture — 3 Key Files

| File | What it does |
|------|-------------|
| `app/page.tsx` | The dashboard layout — grid + widgets + motion |
| `lib/mock-data.ts` | All chart/list data — replace with API calls |
| `components/dashboard/*.tsx` | The 6 widgets — each is self-contained, copy individually |

## Customization

- **Replace mock data**: edit `lib/mock-data.ts` and swap exports for your fetcher
- **Rebrand colors**: change accent values in `lib/mock-data.ts` STATS array and `tailwind.config.ts`
- **Add widgets**: drop a new component in `components/dashboard/` and add to the grid
- **Real-time data**: wrap any widget in a `useSWR` or `useQuery` hook — the components render synchronously from props

## Design Tokens

- Background: `#09090b` (cosmic void)
- Glass: `bg-white/[0.03] border-white/[0.06]` (in `LiquidGlass`)
- Accents: teal `#00bcd4`, violet `#a78bfa`, emerald `#34d399`, gold `#fbbf24`, rose `#f472b6`
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (numbers)

## License

MIT — use commercially, modify freely, no attribution required.

---

Built by [Arcanea](https://arcanea.ai) · [GitHub](https://github.com/frankxai) · [More templates](https://arcanea.ai/templates)
