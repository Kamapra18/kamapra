import type aboutID from "@/message/about/id";

type Props = {
  t: typeof aboutID;
};

export default function JourneySection({ t }: Props) {
  return (
    <section className="border-t border-(--border) px-5 py-24 sm:px-8 md:py-36 lg:px-16">
      <div className="mx-auto max-w-8xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-[0.18em] text-(--accent-text) sm:text-sm">
                {t.journey.label}
              </p>
              <span className="text-xs text-(--text-muted)">02 / 05</span>
            </div>

            <h2 className="mt-12 font-(--font-space-grotesk) text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.85] tracking-[-0.075em]">
              {t.journey.headline}
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-(--text-muted) sm:text-lg">
              {t.journey.intro}
            </p>
          </div>

          <div>
            <div className="space-y-0 border-t border-(--border)">
              {t.journey.paragraphs.map((paragraph, index) => (
                <article
                  key={index}
                  className="group grid gap-5 border-b border-(--border) py-9 transition-all duration-300 hover:pl-3 sm:grid-cols-[70px_1fr] sm:gap-8 sm:py-12">
                  <span className="font-(--font-space-grotesk) text-3xl font-semibold tracking-tight text-(--accent-text) transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-2xl text-base leading-8 text-(--text-muted) transition-colors duration-300 group-hover:text-foreground sm:text-lg sm:leading-9">
                    {paragraph}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-10 max-w-xl font-(--font-space-grotesk) text-xl font-semibold leading-tight tracking-tight text-(--accent-text) sm:text-3xl">
              {t.journey.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
