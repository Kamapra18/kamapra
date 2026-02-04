"use client";

import useInView from "../components/hooks/InView";
import KamapraButton from "../components/ui/ButtonKamapra"; // Update import ke KamapraButton

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
        isInView ? "animate-slideIn" : "opacity-0 translate-y-10"
      }`}>
      <section
        id="home"
        className="flex w-full flex-col justify-center items-center h-screen px-5 text-center">
        {/* Dekorasi Garis */}
        <div className="h-1 bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)] w-50 sm:w-32 md:w-40 lg:w-52 xl:w-64 mb-4"></div>
        <div className="h-1 bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)] w-70 sm:w-56 md:w-72 lg:w-96 xl:w-[28rem] mb-4"></div>

        {/* Nama/Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)] bg-clip-text text-transparent uppercase font-bold mb-12">
          {text}
        </h1>

        <KamapraButton
          text="Scroll Down"
          href={ButtonHref ?? "#about"}
          variant="blue"
          className="!text-lg md:!text-xl !px-12"
        />
      </section>
    </div>
  );
}
