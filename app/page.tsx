import { GradientMesh } from "@/components/motion/gradient-mesh";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { TrafficDonut } from "@/components/dashboard/traffic-donut";
import { TopProducts } from "@/components/dashboard/top-products";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { FunnelCard } from "@/components/dashboard/funnel-card";
import { STATS } from "@/lib/mock-data";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#09090b]" />
        <GradientMesh colors={["#00bcd4", "#a78bfa", "#f472b6"]} intensity={0.05} />
      </div>

      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main" className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <header className="flex flex-wrap gap-6 items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/70 mb-2">
              Arcanea · Dashboard Template
            </p>
            <SplitText
              as="h1"
              text="Cosmic analytics."
              className="text-4xl font-display font-semibold tracking-tight text-white"
            />
          </div>
          <Reveal y={8} blur>
            <a
              href="https://github.com/frankxai/arcanea-dashboard-template"
              className="min-h-11 inline-flex items-center font-mono text-[11px] tracking-wider text-white/70 hover:text-[#00bcd4] transition-colors"
            >
              github →
            </a>
          </Reveal>
        </header>

        {/* Stat row */}
        <Reveal y={12} blur>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            <Reveal y={12} blur delay={0.1}>
              <RevenueChart />
            </Reveal>
          </div>
          <Reveal y={12} blur delay={0.15}>
            <TrafficDonut />
          </Reveal>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Reveal y={12} blur delay={0.2}>
            <TopProducts />
          </Reveal>
          <Reveal y={12} blur delay={0.25}>
            <FunnelCard />
          </Reveal>
          <Reveal y={12} blur delay={0.3}>
            <ActivityFeed />
          </Reveal>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-white/[0.05] flex flex-wrap gap-3 items-center justify-between text-[11px] font-mono text-white/70">
          <span>MIT · Fork freely · Built by Arcanea</span>
          <span>Mock data — wire your own API</span>
        </footer>
      </main>
    </div>
  );
}
