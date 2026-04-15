"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { LiquidGlass } from "@/components/motion/liquid-glass";
import { REVENUE_SERIES } from "@/lib/mock-data";

export function RevenueChart() {
  const total = REVENUE_SERIES.reduce((acc, d) => acc + d.value, 0);

  return (
    <LiquidGlass className="p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/50">
            Revenue · 7d
          </p>
          <p className="text-2xl font-semibold text-white mt-1">
            ${total.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="size-2 rounded-full bg-[#00bcd4] shadow-[0_0_8px_#00bcd4]" />
          <span className="text-[11px] font-mono text-white/50">live</span>
        </div>
      </div>

      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={REVENUE_SERIES} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00bcd4" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#00bcd4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(10, 14, 22, 0.95)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                fontSize: 12,
              }}
              labelStyle={{ color: "rgba(255,255,255,0.6)" }}
              formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#00bcd4"
              strokeWidth={2}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </LiquidGlass>
  );
}
