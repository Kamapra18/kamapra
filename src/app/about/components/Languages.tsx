"use client";

import useInView from "@/app/components/hooks/InView";

export default function Languages() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);
  return (
    <div
      className="flex justify-center items-center flex-col mb-5"
      >
      <h2
      ref={ref}
      className={`text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-white text-center transition-all duration-1000 ${isInView ? "animate-slideIn" : "opacity-0 translate-y-10"}`}>
        Language & Framework
      </h2>
      <p
      ref={ref}
      className={`text-gray-200 text-center tracking-widest md:px-5 transition-all duration-1000 ${isInView ? "animate-slideInLeft" : "opacity-0 translate-y-10"}`}>
        <span className="text-white font-bold">HTML</span> |{" "}
        <span className="text-white font-bold">CSS</span> |{" "}
        <span className="text-white font-medium">JavaScript</span> |{" "}
        <span className="text-white font-medium">Typescript</span> |{" "}
        <span className="text-white font-medium">React</span> |{" "}
        <span className="text-white font-bold">NextJS</span> |{" "}
        <span className="text-white font-bold">TailwindCSS</span> |{" "}
        <span className="text-white font-bold">Bootstrap</span> |{" "}
        <span className="text-white font-bold">SQL</span> |{" "}
        <span className="text-white font-medium">NodeJS</span> |{" "}
        <span className="text-white font-bold">MySQL</span> |{" "}
        <span className="text-white font-medium">Python</span>
      </p>
    </div>
  );
}
