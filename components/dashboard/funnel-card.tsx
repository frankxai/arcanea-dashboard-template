"use client";

import { LiquidGlass } from "@/components/motion/liquid-glass";
import { FUNNEL_STEPS } from "@/lib/mock-data";

export function FunnelCard() {
  const top = FUNNEL_STEPS[0].count;

  return (
    <LiquidGlass className="p-6">
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/50 mb-4">
        Conversion funnel · 30d
      </p>

      <div className="space-y-3">
        {FUNNEL_STEPS.map((step, i) => {
          const pct = (step.count / top) * 100;
          const dropoff = i > 0 ? ((FUNNEL_STEPS[i - 1].count - step.count) / FUNNEL_STEPS[i - 1].count) * 100 : 0;

          return (
            <div key={step.stage}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-white/85">{step.stage}</span>
                <span className="font-mono text-white/60 text-xs">
                  {step.count.toLocaleString()}
                  {i > 0 && (
                    <span className="ml-2 text-rose-400/70">−{dropoff.toFixed(0)}%</span>
                  )}
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/[0.03]">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${pct}%`,
                    background:
                      i === 0
                        ? "linear-gradient(90deg, #00bcd4, #a78bfa)"
                        : i === FUNNEL_STEPS.length - 1
                        ? "linear-gradient(90deg, #fbbf24, #f97316)"
                        : "linear-gradient(90deg, #a78bfa, #f472b6)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
        <span className="text-[11px] font-mono text-white/40">Overall</span>
        <span className="text-sm font-mono text-[#00bcd4]">
          {((FUNNEL_STEPS.at(-1)!.count / top) * 100).toFixed(2)}%
        </span>
      </div>
    </LiquidGlass>
  );
}
