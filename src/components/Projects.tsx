"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, FolderGit2, Github } from "lucide-react";
import { projectCategories, projects, type ProjectCategory } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

type Filter = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section id="projects" index="04" title="Things I've built">
      <div className="mb-8 flex flex-wrap gap-2">
        {(["All", ...projectCategories] as Filter[]).map((f) => {
          const count =
            f === "All" ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === f
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {f} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={(i % 2) * 0.1}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-accent/60"
          >
            <div className="relative aspect-video overflow-hidden border-b border-line bg-accent-soft">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-accent/50">
                  <FolderGit2 size={56} strokeWidth={1.2} />
                </div>
              )}
              {p.featured && (
                <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-white">
                  Featured
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                  {/* Stretched link: the whole card opens the project page. */}
                  <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0">
                    {p.title}
                  </Link>
                </h3>
                <div className="relative z-10 flex shrink-0 gap-3 text-muted">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      aria-label={`${p.title} source code`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      <Github size={19} />
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      aria-label={`${p.title} live site`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      <ExternalLink size={19} />
                    </a>
                  )}
                </div>
              </div>

              {p.highlight && (
                <p className="mb-3 text-sm">
                  <span className="font-semibold text-accent">{p.highlight.value}</span>{" "}
                  <span className="text-muted">{p.highlight.label}</span>
                </p>
              )}

              <p className="mb-5 flex-1 leading-relaxed text-muted">{p.description}</p>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View details
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
