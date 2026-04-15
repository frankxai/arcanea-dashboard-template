"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { LiquidGlass } from "@/components/motion/liquid-glass";
import { TRAFFIC_SOURCES } from "@/lib/mock-data";

export function TrafficDonut() {
  return (
    <LiquidGlass className="p-6">
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/50 mb-4">
        Traffic sources
      </p>

      <div className="flex items-center gap-6">
        <div className="relative h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={TRAFFIC_SOURCES}
                dataKey="value"
                innerRadius={48}
                outerRadius={68}
                paddingAngle={2}
                strokeWidth={0}
              >
                {TRAFFIC_SOURCES.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-white">100%</span>
            <span className="text-[10px] font-mono text-white/40">total</span>
          </div>
        </div>

        <div className="flex-1 space-y-2.5">
          {TRAFFIC_SOURCES.map((source) => (
            <div key={source.name} className="flex items-center gap-2.5 text-sm">
              <div
                className="size-2.5 rounded-sm"
                style={{ background: source.color }}
              />
              <span className="flex-1 text-white/80">{source.name}</span>
              <span className="font-mono text-white/60">{source.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </LiquidGlass>
  );
}
