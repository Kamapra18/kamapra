"use client";

import Stack from "./Languages";
import Tools from "./Tools";
import Heading from "../../components/ui/Heading";
import { ReactNode } from "react";
import useInView from "@/app/components/hooks/InView";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      <div className="flex flex-col justify-center items-center text-center">
        {children}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);
  return (
    <>
      <Wrapper>
        <section className="space-y-4">
          <Heading text="Proses" highlight="Belajar" />
          <p
            ref={ref}
            className={`text-gray-300 max-w-2xl mx-auto text-lg transition-all duration-1000 ${isInView ? "animate-slideIn" : "opacity-0 translate-y-10"}`}>
            Berikut adalah tools dan bahasa yang sedang saya latih dan ingin
            saya kuasai
          </p>
        </section>
      </Wrapper>

      <div
        style={{
          backgroundColor: "var(--background)",
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
          backgroundSize: "24px 24px",
        }}
        className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <Stack />
        <Tools />
      </div>
    </>
  );
}
