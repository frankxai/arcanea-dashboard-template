"use client";

import { LiquidGlass } from "@/components/motion/liquid-glass";
import { TOP_PRODUCTS } from "@/lib/mock-data";

export function TopProducts() {
  const max = Math.max(...TOP_PRODUCTS.map((p) => p.revenue));

  return (
    <LiquidGlass className="p-6">
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/50 mb-4">
        Top products · 30d
      </p>

      <div className="space-y-3">
        {TOP_PRODUCTS.map((product, i) => (
          <div key={product.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-white/30 w-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/85">{product.name}</span>
              </span>
              <span className="font-mono text-white/50 text-xs">
                ${product.revenue.toLocaleString()}
              </span>
            </div>
            <div className="h-[3px] w-full rounded-full bg-white/[0.03] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(product.revenue / max) * 100}%`,
                  background: `linear-gradient(90deg, #00bcd4, #a78bfa)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </LiquidGlass>
  );
}
