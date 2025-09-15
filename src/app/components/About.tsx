"use client";

import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";
import { FaLaptopCode, FaCode } from "react-icons/fa";
import useInView from "../components/hooks/InView";

interface AboutSectionProps {
  isHomePage?: boolean;
}

export default function AboutSection({
  isHomePage = false,
}: AboutSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center px-4 py-10 sm:px-6 md:px-10 lg:px-0">
      <Heading text="About" highlight="Me" />

      <main
        ref={ref}
        className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 lg:gap-16 mt-10  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foto */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? "animate-slideInLeft" : "opacity-0 translate-y-10"
          }`}>
          <div className="rounded-3xl overflow-hidden flex-shrink-0 w-[280px] sm:w-[480px] lg:w-[500px]">
            <Image
              src="/mario23.jpg"
              alt="profile"
              width={450}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Teks */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? "animate-slideInRight" : "opacity-0 translate-y-10"
          }`}>
          <div className="max-w-4xl text-center lg:text-left p-6 sm:p-10 rounded-3xl">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-4">
              <span className="flex items-center gap-1 text-sm bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)] bg-clip-text text-transparent font-medium">
                <FaLaptopCode className="text-blue-600" /> Web Learner
              </span>
              <span className="flex items-center gap-1 text-sm bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)] bg-clip-text text-transparent font-medium">
                <FaCode className="text-blue-600" /> Beginner Dev
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-4 leading-snug">
              Perjalanan Belajar Web Development Saya 🚀
            </h1>

            <h2 className="text-lg sm:text-2xl bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent font-bold mb-6">
              I Kadek Mario Prayoga
            </h2>

            <p className="text-[#959595] mb-6 text-base md:text-xl leading-relaxed">
              Hai, saya Mario! Sekarang saya{" "}
              <strong className="font-medium bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
                lagi mempelajari dasar-dasar web development
              </strong>{" "}
              mulai dari HTML, CSS, Tailwind CSS, dan Python (basic). Saya juga
              baru mulai coba-coba Next.js meskipun belum mendalami JavaScript
              sepenuhnya. Di sisi database, saya sudah mengenal SQL dasar
              seperti membuat database, tabel, dan melakukan insert data.
              <br />
              <br />
              Saya suka belajar hal baru dan pelan-pelan membangun proyek kecil
              untuk ngasah skill saya. Yuk intip karya-karya awal saya!
            </p>

            {isHomePage ? (
              <Button href="/about">Learn More</Button>
            ) : (
              <Button href="/MyCV.pdf" download>
                Download CV
              </Button>
            )}
          </div>
        </div>
      </main>

      <div className="w-full mt-16">{/* <SkillGrid /> */}</div>
    </section>
  );
}
