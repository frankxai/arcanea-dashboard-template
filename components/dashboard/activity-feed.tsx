"use client";

import { LiquidGlass } from "@/components/motion/liquid-glass";
import { RECENT_ACTIVITY } from "@/lib/mock-data";

export function ActivityFeed() {
  return (
    <LiquidGlass className="p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/50">
          Recent activity
        </p>
        <span className="text-[10px] font-mono text-white/30">
          {RECENT_ACTIVITY.length} events
        </span>
      </div>

      <div className="space-y-3.5">
        {RECENT_ACTIVITY.map((event, i) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <div className="relative shrink-0 size-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
              <span className="text-[10px] font-mono text-[#00bcd4]">
                {event.who.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/85 truncate">
                <span className="text-white">{event.who}</span>{" "}
                <span className="text-white/60">{event.what}</span>
              </p>
              <p className="text-[10px] font-mono text-white/30 mt-0.5">
                {event.when} · {event.gate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LiquidGlass>
  );
}
