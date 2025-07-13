"use client";

import useInView from "@/app/components/hooks/InView";
import { ReactNode } from "react";

function Title() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div
      ref={ref}
      className={`flex justify-center items-center flex-col my-5 self-start transition-all duration-1000 ${isInView ? "animate-slideIn" : "opacity-0 translate-y-10"}`}>
        <h1 className="text-4xl font-bold text-white">
          Latar <span className="text-amber-200">Pendidikan</span>
        </h1>
      </div>
    </div>
  );
}

function Wrapper({ children }: { children: ReactNode }) {
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);
  return (
    <div
    ref={ref}
    className={`mx-auto container gap-10 p-10 grid grid-cols-1 my-10 transition-all duration-1000 ${isInView ? "animate-slideIn" : "opacity-0 translate-y-10"}`}>
      <div className="flex justify-center items-start flex-col mb-5">
        <section className="grid gap-8 md:gap-12">
          <div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <>
      <Title />
      <Wrapper>
        {educationData.map((item, index) => (
          <div
          
          key={index} className="grid gap-4 text-white relative">
            <div className="aspect-square w-5 bg-amber-200 rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
            <div className="font-medium text-lg text-white">{item.year}</div>
            <div>
              <h3 className="font-semibold text-xl text-white">
                {item.school}
              </h3>
              <h4 className="font-light text-md mb-4">{item.degree}</h4>
              <p className="text-justify">{item.description}</p>
              {/* <div className="flex flex-wrap gap-2 mt-4 text-sm">
								{item.skills.map((skill, idx) => (
									<div key={idx} className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
										{skill}
									</div>
								))}
							</div> */}
            </div>
          </div>
        ))}
      </Wrapper>
    </>
  );
}

const educationData = [
  {
    year: "2023 - Present",
    school: "Primakara University",
    degree: "Informatika",
    description:
      "Fokus belajar pengembangan web dengan minat mendalam untuk mengeksplorasi baik front-end maupun back-end",
    // skills: ["Web Development", "Software Engineering", "Database Management"],
  },
  {
    year: "2020 - 2023",
    school: "SMK Negeri 3 Sukawati",
    degree: "Tari",
    description:
      "Fokus pada seni tari tradisional. Berpartisipasi dalam beberapa pertunjukan meski masa belajar terdampak pandemi.",
    // skills: ["Dance"],
  },
  {
    year: "2017 - 2019",
    school: "SMP Negeri 3 Banjarangkan",
    degree: "SMP",
    description: "Menyelesaikan pendidikan dasar ",
    // skills: ["Math"],
  },
];
