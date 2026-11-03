import Image from "next/image";
import { MapPin } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.6fr]">
        <Reveal className="mx-auto w-56 sm:w-64 md:w-full md:max-w-xs">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-accent/40"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="flex items-center gap-2 text-base">
            <MapPin size={18} className="text-accent" />
            {profile.location}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
