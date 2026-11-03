import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { profile, projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} /> All projects
        </Link>

        <Reveal>
          <p className="font-mono text-sm text-accent">{project.type}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
              >
                {project.liveLabel ?? "Visit live site"} <ExternalLink size={16} />
              </a>
            )}
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {project.image && (
          <Reveal delay={0.1} className="mt-12">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        )}

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {project.results.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 0.08}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <div className="text-3xl font-bold text-accent">{r.value}</div>
              <div className="mt-1 font-semibold">{r.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.detail}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
              The challenge
            </h2>
            <div className="space-y-4 leading-relaxed text-muted">
              {project.challenge.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
              What I built
            </h2>
            <div className="space-y-4 leading-relaxed text-muted">
              {project.approach.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">What I shipped</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.shipped.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {project.gallery.length > 0 && (
          <section className="mt-16">
            <Reveal>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">Screenshots</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.gallery.map((g, i) => (
                <Reveal
                  key={g.src}
                  delay={(i % 2) * 0.1}
                  className={i === 0 ? "sm:col-span-2" : undefined}
                >
                  <figure>
                    <div className="overflow-hidden rounded-xl border border-line bg-surface">
                      <Image
                        src={g.src}
                        alt={g.caption}
                        width={1600}
                        height={1000}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-muted">{g.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <p className="text-sm text-muted">Next project</p>
            <p className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold group-hover:text-accent">
              {next.title}
              <ArrowRight size={20} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
          <Link
            href="/#contact"
            className="group rounded-2xl border border-accent/40 bg-accent-soft p-6 transition-colors hover:border-accent"
          >
            <p className="text-sm text-muted">Building something similar?</p>
            <p className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold text-accent">
              Let&apos;s talk
              <Mail size={20} className="shrink-0" />
            </p>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
