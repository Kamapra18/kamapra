import type aboutID from "@/message/about/id";

type Props = {
  t: typeof aboutID;
};

export default function ApproachSection({ t }: Props) {
  return (
    <section className="border-t border-(--border) px-5 py-24 sm:px-8 md:py-36 lg:px-16">
      <div className="mx-auto max-w-8xl">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.18em] text-(--accent-text) sm:text-sm">
            {t.approach.label}
          </p>
          <span className="text-xs text-(--text-muted)">03 / 05</span>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <h2 className="max-w-5xl font-(--font-space-grotesk) text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
            {t.approach.headline}
          </h2>

          <p className="max-w-md pb-2 text-base leading-8 text-(--text-muted) sm:text-lg">
            {t.approach.description}
          </p>
        </div>

        <div className="mt-20 grid border-t border-(--border) md:grid-cols-3">
          {t.approach.steps.map((step, index) => (
            <article
              key={step.number}
              className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden border-b border-(--border) py-8 transition-colors duration-300 hover:bg-(--surface) md:border-b-0 md:py-10 md:pr-8 ${
                index !== 0 ? "md:border-l md:border-(--border) md:pl-8" : ""
              }`}>
              <div className="flex items-start justify-between">
                <span className="font-(--font-space-grotesk) text-5xl font-semibold tracking-[-0.07em] text-(--accent-text) transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl">
                  {step.number}
                </span>

                <span className="text-2xl text-(--text-muted) transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-(--accent-text)">
                  ↗
                </span>
              </div>

              <div className="mt-16">
                <h3 className="font-(--font-space-grotesk) text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-xs text-base leading-7 text-(--text-muted)">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
