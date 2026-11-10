"use client";

import { useState } from "react";
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu";
import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

export function AboutSection() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const messages = { ID: id, EN: en, BAN: ban };
  const language = (lang in messages ? lang : "ID") as keyof typeof messages;
  const t = messages[language].about;

  return (
    <section
      id="about"
      className="overflow-hidden bg-background text-foreground px-8 py-12 sm:px-10 lg:px-22">
      <div className="mx-auto ">
        <h2 className="text-[clamp(3.5rem,10.5vw,10rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
          {t.headline}
        </h2>

        <div className="mt-16 grid gap-8 md:mt-24 md:grid-cols-2">
          <p className="text-sm text-(--text-muted)">{t.introduction}</p>

          <div className="max-w-xl">
            <p className="text-base leading-8 text-(--text-muted) md:text-lg md:leading-9">
              {t.paragraph1}
            </p>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              className="group mt-8 inline-flex items-center gap-4 border-b border-(--border) pb-3 text-sm transition-colors hover:border-(--accent-text)">
              <span>{isOpen ? t.less : t.more}</span>

              <span className="flex size-9 items-center justify-center rounded-full border border-(--border) transition-all duration-300 group-hover:-rotate-45 group-hover:border-(--accent-text)">
                {isOpen ? (
                  <LuArrowUpRight size={17} />
                ) : (
                  <LuArrowDownRight size={17} />
                )}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out ${
            isOpen
              ? "mt-16 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}>
          <div className="overflow-hidden">
            <div className="grid gap-8 border-t border-(--border) pt-10 md:grid-cols-2 md:gap-12">
              <p className="text-xs tracking-[0.15em] text-(--text-muted)">
                {t.story}
              </p>

              <div className="max-w-xl space-y-6">
                <p className="text-base leading-8 md:text-xl md:leading-9">
                  {t.paragraph2}
                </p>

                <p className="text-sm text-(--text-muted)">{t.closing}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-5 border-t border-(--border) pt-6 md:mt-36 md:flex-row md:items-center">
          <p className="text-xs tracking-[0.15em] text-(--text-muted)">
            {t.footer}
          </p>

          <p className="text-3xl font-medium tracking-tighter md:text-5xl">
            {t.mantra}
          </p>
        </div>
      </div>
    </section>
  );
}
