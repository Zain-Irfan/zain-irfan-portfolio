import { Database, Layout, Server, ShoppingBag } from "lucide-react";
import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

const icons = [Layout, Server, ShoppingBag, Database];

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Skills & tools">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal
              key={group.title}
              delay={i * 0.08}
              className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent-soft p-2.5 text-accent">
                <Icon size={22} />
              </div>
              <h3 className="mb-4 font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
