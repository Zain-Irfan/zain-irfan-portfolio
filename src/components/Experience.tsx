import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="05" title="Where I've worked">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((job, i) => (
          <li key={job.role + job.company} className="relative mb-12 ml-8 last:mb-0">
            <span className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
            <Reveal delay={i * 0.08}>
              <p className="font-mono text-sm text-accent">{job.period}</p>
              <h3 className="mt-1 text-xl font-semibold">
                {job.role}{" "}
                <span className="text-muted">@ {job.company}</span>
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
