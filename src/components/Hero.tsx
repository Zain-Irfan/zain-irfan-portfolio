"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { about, profile, techStrip } from "@/data/portfolio";
import SystemFlow from "./SystemFlow";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-12 pt-28 sm:px-6 md:pt-32 lg:grid-cols-[1.2fr_1fr]">
        <div>
          {profile.available && (
            <motion.div
              {...fade(0)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </motion.div>
          )}

          <motion.p {...fade(0.1)} className="mb-3 font-mono text-accent">
            Hi, my name is
          </motion.p>
          <motion.h1
            {...fade(0.2)}
            className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl"
          >
            {profile.name}.
          </motion.h1>
          <motion.h2
            {...fade(0.3)}
            className="mt-2 text-3xl font-bold tracking-tight text-muted sm:text-4xl xl:text-5xl"
          >
            {profile.role}.
          </motion.h2>
          <motion.p
            {...fade(0.4)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.5)} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
              Get in touch
            </a>
          </motion.div>

          <motion.div {...fade(0.6)} className="mt-8 flex flex-wrap gap-3">
            <SocialLink href={profile.socials.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialLink>
            <SocialLink href={profile.socials.github} label="GitHub">
              <Github size={18} />
            </SocialLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mx-auto w-full max-w-md"
        >
          <SystemFlow />
        </motion.div>
      </div>

      <motion.div
        {...fade(0.7)}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 md:grid-cols-4"
      >
        {about.stats.map((s) => (
          <div key={s.label} className="border-t border-line py-6 md:pr-6">
            <div className="text-3xl font-bold text-fg sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="relative mt-6 overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="animate-marquee flex w-max gap-10 font-mono text-sm text-muted">
          {[...techStrip, ...techStrip].map((t, i) => (
            <li key={i} aria-hidden={i >= techStrip.length} className="flex items-center gap-10">
              {t}
              <span className="text-accent/50">◆</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      {label}
    </a>
  );
}
