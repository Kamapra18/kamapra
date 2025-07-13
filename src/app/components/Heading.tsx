"use client";
import useInView from "./hooks/InView";

type HeadingProps = {
  text: string;
  highlight?: string;
  className?: string;
};

export default function Heading({
  text,
  highlight,
  className = "",
}: HeadingProps) {
  const { ref, isInView } = useInView<HTMLHeadingElement>(0.3);
  return (
    <h1
    ref={ref}
      className={`text-center text-4xl uppercase font-bold text-white mb-6 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0 animate-FadeIn": "opacity-0 translate-y-5"} ${className}`}>
      {text} {highlight && <span className="text-amber-200">{highlight}</span>}
    </h1>
  );
}
