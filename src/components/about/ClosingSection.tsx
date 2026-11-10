import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import type aboutID from "@/message/about/id";

type Props = {
  t: typeof aboutID;
};

export default function ClosingSection({ t }: Props) {
  return (
    <section className="border-t border-(--border) px-5 py-28 sm:px-8 md:py-40 lg:px-16">
      <div className="mx-auto max-w-8xl">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.18em] text-(--accent-text) sm:text-sm">
            {t.closing.label}
          </p>
          <span className="text-xs text-(--text-muted)">05 / 05</span>
        </div>

        <h2 className="mt-20 max-w-7xl font-(--font-space-grotesk) text-[clamp(3.8rem,11vw,10rem)] font-semibold leading-[0.83] tracking-[-0.085em]">
          {t.closing.headline}
        </h2>

        <div className="mt-20 grid gap-10 border-t border-(--border) pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-base leading-8 text-(--text-muted) sm:text-lg sm:leading-9">
            {t.closing.description}
          </p>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-5 border-b border-(--border) pb-4 text-base font-semibold transition-colors duration-300 hover:border-(--accent) hover:text-(--accent-text)">
            {t.closing.contactLink}

            <span className="flex size-12 items-center justify-center border border-(--border) transition-all duration-300 group-hover:border-(--accent) group-hover:bg-(--accent) group-hover:text-white">
              <LuArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>

        <p className="mt-20 text-xs font-semibold tracking-[0.15em] text-(--text-muted)">
          {t.closing.contact}
        </p>
      </div>
    </section>
  );
}
