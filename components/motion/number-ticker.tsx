"use client";
import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
interface Props { value: number; delay?: number; decimals?: number; prefix?: string; suffix?: string; className?: string; direction?: "up" | "down"; }
export function NumberTicker({value, delay = 0, decimals = 0, prefix = "", suffix = "", className = "", direction = "up"}: Props) {
 const ref = useRef<HTMLSpanElement>(null); const visible = useInView(ref, {once:true}); const reduced = useReducedMotion();
 const format = (n:number) => prefix + n.toLocaleString("en-US", {minimumFractionDigits:decimals, maximumFractionDigits:decimals}) + suffix;
 const final = direction === "down" ? 0 : value;
 useEffect(() => { if (reduced) { if (ref.current) ref.current.textContent = prefix + final.toLocaleString("en-US", {minimumFractionDigits:decimals, maximumFractionDigits:decimals}) + suffix; return; } if (!visible) return; const controls = animate(direction === "down" ? value : 0, final, {duration: .6, delay, onUpdate: n => { if (ref.current) ref.current.textContent = prefix + n.toLocaleString("en-US", {minimumFractionDigits:decimals, maximumFractionDigits:decimals}) + suffix; }}); return () => controls.stop(); }, [visible, reduced, value, final, direction, delay, prefix, suffix, decimals]);
 return <span className={className}><span className="sr-only">{format(final)}</span><span ref={ref} aria-hidden="true">{format(final)}</span></span>;
}
