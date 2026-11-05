"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { LiquidGlass } from "@/components/motion/liquid-glass";
import { GradientMesh } from "@/components/motion/gradient-mesh";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (error?.digest) {
      console.error(error.digest);
    }
  }, [error]);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#09090b]" />
        <GradientMesh colors={["#f472b6", "#a78bfa", "#00bcd4"]} intensity={0.05} />
      </div>

      <LiquidGlass className="max-w-md w-full p-8 text-center" intensity="heavy">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
          System Notice
        </p>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl font-display font-semibold tracking-tight text-white mb-3 outline-none"
        >
          Something went wrong
        </h1>
        <p className="text-sm text-white/60 mb-8 leading-relaxed">
          An unexpected error occurred while rendering this page. You can try refreshing the view or return home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-mono text-xs tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
          >
            Go home
          </Link>
        </div>
      </LiquidGlass>
    </div>
  );
}
