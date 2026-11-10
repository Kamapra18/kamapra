import type aboutID from "@/message/about/id";

type Props = {
  t: typeof aboutID;
};

export default function PersonalStatement({ t }: Props) {
  return (
    <section className="relative border-t border-(--border) px-5 py-28 sm:px-8 md:py-40 lg:px-16">
      <div className="mx-auto max-w-8xl">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-(--accent-text) sm:text-sm">
            {t.statement.label}
          </p>
          <span className="text-xs tracking-widest text-(--text-muted)">
            01 / 05
          </span>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <h2 className="max-w-5xl font-(--font-space-grotesk) text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.85] tracking-[-0.08em]">
            {t.statement.headline}
          </h2>

          <div className="md:pb-3 md:text-right">
            <span className="mb-5 block text-5xl font-light text-(--accent-text) transition-transform duration-500 hover:translate-x-2 sm:text-7xl">
              ↗
            </span>

            <p className="ml-auto max-w-sm text-base leading-8 text-(--text-muted) sm:text-lg">
              {t.statement.description}
            </p>
          </div>
        </div>

        <div className="mt-20 flex justify-end border-t border-(--border) pt-8">
          <p className="max-w-3xl text-right font-(--font-space-grotesk) text-2xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t.statement.emphasis}
          </p>
        </div>
      </div>
    </section>
  );
}
