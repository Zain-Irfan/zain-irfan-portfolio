"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Check,
  LayoutDashboard,
  Server,
  ShoppingBag,
  Truck,
  Webhook,
  type LucideIcon,
} from "lucide-react";

// A looping animation of the order-to-delivery flow from the Haligone project.
const steps: { icon: LucideIcon; title: string; sub: string; log: string; time: string }[] = [
  {
    icon: ShoppingBag,
    title: "Shopify Store",
    sub: "new order #1042",
    log: "orders/create received · #1042",
    time: "12 ms",
  },
  {
    icon: Webhook,
    title: "Webhook",
    sub: "POST /api/webhooks/orders",
    log: "HMAC verified · payload queued",
    time: "8 ms",
  },
  {
    icon: Server,
    title: "Laravel API",
    sub: "validate · job · MySQL",
    log: "OrderJob processed · saved to MySQL",
    time: "41 ms",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    sub: "assign driver · optimise route",
    log: "driver assigned · route optimised",
    time: "0.6 s",
  },
  {
    icon: Truck,
    title: "Driver App",
    sub: "picked up → delivered",
    log: "status: delivered · customer notified",
    time: "0.3 s",
  },
];

const STEP_MS = 1300;
const HOLD_MS = 2600;

export default function SystemFlow() {
  const reduce = useReducedMotion();
  // Number of completed steps; the step at index `done` is running.
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (reduce) {
      setDone(steps.length);
      return;
    }
    const t = setTimeout(
      () => setDone((d) => (d >= steps.length ? 0 : d + 1)),
      done >= steps.length ? HOLD_MS : STEP_MS,
    );
    return () => clearTimeout(t);
  }, [done, reduce]);

  const logs = steps.slice(0, done).slice(-3);
  const complete = done >= steps.length;

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10 blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="font-mono text-xs text-muted">
              flow / <span className="text-fg">order_to_door</span>
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        <ol className="px-4 py-4">
          {steps.map((s, i) => {
            const state = i < done ? "done" : i === done ? "running" : "waiting";
            const Icon = s.icon;
            return (
              <li key={s.title} className="relative flex items-center gap-3 py-2">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[19px] top-[44px] h-[calc(100%-32px)] w-px bg-line"
                  >
                    <span
                      className="absolute inset-x-0 top-0 bg-accent transition-all duration-700"
                      style={{ height: i < done ? "100%" : "0%" }}
                    />
                  </span>
                )}
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-500 ${
                    state === "waiting"
                      ? "border-line bg-bg text-muted"
                      : "border-accent/50 bg-accent-soft text-accent"
                  } ${state === "running" ? "ring-4 ring-accent/15" : ""}`}
                >
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-medium transition-colors ${
                      state === "waiting" ? "text-muted" : "text-fg"
                    }`}
                  >
                    {s.title}
                  </p>
                  <p className="truncate font-mono text-[11px] text-muted">{s.sub}</p>
                </div>
                <StatusPill state={state} />
              </li>
            );
          })}
        </ol>

        <div className="h-[100px] overflow-hidden border-t border-line bg-bg/60 px-4 py-3 font-mono text-[11px] leading-6">
          <AnimatePresence initial={false}>
            {logs.map((s) => (
              <motion.div
                key={s.log}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between gap-3"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span className="truncate text-muted">{s.log}</span>
                </span>
                <span className="shrink-0 text-muted/70">{s.time}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {logs.length === 0 && (
            <span className="text-muted/70">waiting for orders…</span>
          )}
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[11px] text-muted">
        {complete ? "✓ delivered — zero phone calls" : "Shopify order → doorstep, automated"}
      </p>
    </div>
  );
}

function StatusPill({ state }: { state: "done" | "running" | "waiting" }) {
  if (state === "done") {
    return (
      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-500">
        <Check size={13} /> done
      </span>
    );
  }
  if (state === "running") {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-accent" /> running
      </span>
    );
  }
  return <span className="font-mono text-[11px] text-muted/60">waiting</span>;
}
