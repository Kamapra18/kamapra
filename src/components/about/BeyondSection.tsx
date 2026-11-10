import type aboutID from "@/message/about/id";

type Props = {
  t: typeof aboutID;
};

export default function BeyondScreenSection({ t }: Props) {
  return (
    <section className="border-t border-(--border) px-5 py-24 sm:px-8 md:py-36 lg:px-16">
      <div className="mx-auto max-w-8xl">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.18em] text-(--accent-text) sm:text-sm">
            {t.beyond.label}
          </p>
          <span className="text-xs text-(--text-muted)">04 / 05</span>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="max-w-3xl font-(--font-space-grotesk) text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              {t.beyond.headline}
            </h2>

            <p className="mt-10 max-w-md text-base leading-8 text-(--text-muted) sm:text-lg">
              {t.beyond.description}
            </p>

            <p className="mt-10 max-w-md border-l-2 border-(--accent) pl-5 text-sm leading-7 text-(--text-muted)">
              {t.beyond.closing}
            </p>
          </div>

          <div className="self-end border-t border-(--border)">
            {t.beyond.interests.map((interest, index) => (
              <div
                key={interest}
                className="group flex cursor-default items-center justify-between gap-4 border-b border-(--border) py-6 transition-all duration-300 hover:px-3">
                <span className="font-(--font-space-grotesk) text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-(--accent-text) sm:text-2xl md:text-3xl">
                  {interest}
                </span>

                <span className="shrink-0 font-(--font-space-grotesk) text-sm text-(--text-muted) transition-all duration-300 group-hover:translate-x-1 group-hover:text-(--accent-text)">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
