"use client";

import { ArrowUpRightIcon, ArrowDownRightIcon } from "lucide-react";
import { LiquidGlass } from "@/components/motion/liquid-glass";
import { NumberTicker } from "@/components/motion/number-ticker";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delta: number;
  accent: string;
}

export function StatCard({ label, value, prefix, suffix, delta, accent }: StatCardProps) {
  const positive = delta >= 0;

  return (
    <LiquidGlass className="p-6">
      <div className="flex items-start justify-between mb-3">
        <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/50">
          {label}
        </span>
        <span
          className={cn(
            "flex items-center gap-0.5 text-[11px] font-mono",
            positive ? "text-emerald-400" : "text-rose-400"
          )}
        >
          {positive ? (
            <ArrowUpRightIcon className="size-3" />
          ) : (
            <ArrowDownRightIcon className="size-3" />
          )}
          {Math.abs(delta).toFixed(1)}%
        </span>
      </div>

      <div className="flex items-baseline gap-1">
        {prefix && <span className="text-xl text-white/60">{prefix}</span>}
        <NumberTicker value={value} className="text-3xl font-semibold text-white" />
        {suffix && <span className="text-xl text-white/60">{suffix}</span>}
      </div>

      <div
        className="mt-4 h-0.5 w-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />
    </LiquidGlass>
  );
}
