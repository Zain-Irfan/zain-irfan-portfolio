import { BarChart3, Code2, Globe, LayoutTemplate, Plug, ShoppingBag } from "lucide-react";
import { services } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

const icons = {
  layout: LayoutTemplate,
  bag: ShoppingBag,
  plug: Plug,
  chart: BarChart3,
  code: Code2,
  globe: Globe,
};

export default function Services() {
  return (
    <Section id="services" index="02" title="What I do">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal
              key={s.title}
              delay={(i % 3) * 0.08}
              className="group rounded-xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60"
            >
              <div className="mb-5 inline-flex rounded-lg bg-accent-soft p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="leading-relaxed text-muted">{s.description}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
