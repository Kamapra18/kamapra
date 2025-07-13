"use client";

import useInView from "../components/hooks/InView";
import Button from "../components/Button";

interface TextProps {
  text: string;
  ButtonHref?: string;
}

export default function HeroSection({ text, ButtonHref }: TextProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
    ref={ref}
    className={`transition-all duration-1000 ${isInView ? "animate-slideIn" : "opacity-0 translate-y-10"}`}>
      <section
        id="home"
        className="flex w-full flex-col justify-center items-center h-screen px-4 text-center">
        <div className="h-1 bg-black w-50 sm:w-32 md:w-40 lg:w-52 xl:w-64 mb-1.5"></div>
        <div className="h-1 bg-black w-70 sm:w-56 md:w-72 lg:w-96 xl:w-[28rem] mb-1.5"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-white uppercase font-bold mb-5">
          {text}
        </h1>
        <Button href={ButtonHref ?? "#"}>scroll down</Button>
      </section>
    </div>
  );
}
