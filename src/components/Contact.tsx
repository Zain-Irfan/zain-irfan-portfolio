"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const input =
    "w-full rounded-lg border border-line bg-bg px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

  return (
    <Section id="contact" index="06" title="Get in touch">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <h3 className="text-3xl font-bold tracking-tight">
            Let&apos;s build something together.
          </h3>
          <p className="mt-4 leading-relaxed text-muted">
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open — I usually reply within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-w-0 items-center gap-3 text-lg hover:text-accent"
            >
              <span className="rounded-lg bg-accent-soft p-2.5 text-accent">
                <Mail size={20} />
              </span>
              <span className="break-all">{profile.email}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <SocialCard
              href={profile.socials.linkedin}
              label="LinkedIn"
              handle="in/zain-irfan"
              icon={<Linkedin size={20} />}
            />
            <SocialCard
              href={profile.socials.github}
              label="GitHub"
              handle="Zain-Irfan"
              icon={<Github size={20} />}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-xl border border-line bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className={input} />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className={input}
              />
            </div>
            <input name="subject" placeholder="Subject" className={input} />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className={`${input} resize-none`}
            />
            {/* Honeypot field: hidden from people, filled in by bots. */}
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={18} /> Send message
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="flex items-center gap-2 text-sm text-emerald-500">
                <CheckCircle2 size={16} /> Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && <p className="text-sm text-red-500">{error}</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function SocialCard({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/60"
    >
      <span className="rounded-lg bg-accent-soft p-2.5 text-accent">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium">{label}</span>
        <span className="block truncate font-mono text-xs text-muted">{handle}</span>
      </span>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-muted transition-colors group-hover:text-accent"
      />
    </a>
  );
}
