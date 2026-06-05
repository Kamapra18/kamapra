"use client";

import useInView from "../components/hooks/InView";
import KamapraButton from "@/app/coba/components/Button";

interface TextProps {
  text: string;
  ButtonHref?: string;
}

export default function HeroSection({ text, ButtonHref }: TextProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView ? "animate-fadeIn" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      <section
        id="home"
        className="flex w-full flex-col justify-center items-center h-screen px-9 text-center relative">
        <div
          className="h-1 w-52 md:w-80 mb-4 rounded-full"
          style={{ backgroundImage: "var(--gradient-secondary)" }}
        />
        <div
          className="h-1 w-80 md:w-[32rem] mb-5 rounded-full"
          style={{ backgroundImage: "var(--gradient-secondary)" }}
        />

        <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl uppercase font-extrabold mb-12 font-heading tracking-tighter">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}>
            {text}
          </span>
        </h1>

        <KamapraButton
          text="Scroll Down"
          href={ButtonHref ?? "#about"}
          iconType="arrowDown"
          className="!text-lg md:!text-xl !px-12"
        />
      </section>
    </div>
  );
}
