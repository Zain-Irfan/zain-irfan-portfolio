import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="font-mono text-base text-accent">{index}.</span>
          {title}
          <span className="h-px flex-1 bg-line" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
