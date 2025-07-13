"use client";

import useInView from "@/app/components/hooks/InView";

export default function Tools() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);
  return (
    <div className="flex justify-start items-center flex-col mb-5">
      <h2
      ref={ref}
      className={`text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-white transition-all duration-1000 ${isInView ? "animate-slideIn" : "opacity-0 translate-y-10"}`}>
        Tools
      </h2>
      <p
      ref={ref}
      className={`text-gray-200 text-center tracking-wider md:px- transition-all duration-1000 ${isInView ? "animate-slideInRight" : "opacity-0 translate-y-10"}`}>
        <span className="text-white font-bold">Visual Studio Code</span> |{" "}
        <span className="text-white font-bold">Trae</span> |{" "}
        <span className="text-white font-bold">Git</span> |{" "}
        <span className="text-white font-bold">Github</span> |{" "}
        <span className="text-white font-medium">Figma</span> |{" "}
        <span className="text-white font-bold">Supabase</span> |{" "}
        <span className="text-white font-bold">Vercel</span> |{" "}
        <span className="text-white font-medium">Adobe Photoshop</span> |{" "}
        <span className="text-white font-medium">Adobe Ilustrator</span> |{" "}
        <span className="text-white font-bold">Canva</span> |{" "}
        <span className="text-white font-bold">ChatGPT</span> |{" "}
        <span className="text-white font-medium">Wordpress</span> |
      </p>
    </div>
  );
}
