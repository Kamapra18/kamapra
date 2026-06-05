import React, {  useEffect, useRef } from "react";
import Image from "next/image";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiFileText, FiDownload } from "react-icons/fi";
import {
  SiGithub,
  SiSpotify,
  SiLinkedin,
  SiShutterstock,
} from "react-icons/si";
import useInView from "./hooks/InView";

const TYPING_WORDS = ["Frontend Developer", "Web Developer", "Student"];

export const RevealBento = () => {
  return (
    <div
      className="min-h-screen py-24 px-4 sm:px-6 md:px-12"
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        id="about">
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <CVBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>(0.5);
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 2,
        stiffness: 200,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-[var(--btn-glass-bg)] p-6",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const word = TYPING_WORDS[wordIdx];

      if (!deleting) {
        el.textContent = word.slice(0, ++charIdx);

        if (charIdx === word.length) {
          deleting = true;
          timeout = setTimeout(type, 3500);
          return;
        }
      } else {
        el.textContent = word.slice(0, --charIdx);

        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % TYPING_WORDS.length;
        }
      }

      timeout = setTimeout(type, deleting ? 50 : 80);
    };

    timeout = setTimeout(type, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Block className="col-span-12 md:col-span-6 row-span-2 flex flex-col justify-between">
      <div>
        <Image
          src="/Mario15.jpg"
          alt="Mario"
          width={60}
          height={60}
          className="mb-4 size-14 rounded-full border border-[var(--btn-glass-border)]"
        />

        <h1 className="mb-6 text-lg font-bold leading-tight font-heading text-white">
          Hi, I&apos;m I Kadek Mario Prayoga,
          <br /> and I&apos;m a{" "}
          <span
            ref={typingRef}
            className="text-[var(--accent)] border-r-2 border-[var(--accent)] animate-pulse"
          />
          . <br />
          <span className="text-zinc-400 font-body">
            {" "}
            Passionate about building fast, responsive, and modern digital
            experiences.
          </span>
        </h1>
      </div>

      <a
        href="#contact"
        className="inline-flex items-center text-sm gap-2 text-[var(--accent)] hover:text-white transition-colors font-body font-semibold">
        Contact me <FiArrowRight />
      </a>
    </Block>
  );
};

const SocialsBlock = () => (
  <>
    {/* Shutterstock */}
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3">
      <a
        href="https://www.shutterstock.com/id/g/Kamapra"
        target="blank"
        className="grid h-full place-content-center text-3xl text-white">
        <SiShutterstock />
      </a>
      <p className="text-center">Shutterstock</p>
    </Block>
    {/* Spotify */}
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3">
      <a
        href="https://open.spotify.com/user/31jqt6j6rne2z6ib545q27zo3ecu?si=2f8cc4723ac9445a"
        target="blank"
        className="grid h-full place-content-center text-3xl text-white">
        <SiSpotify />
      </a>
      <p className="text-center">Spotify</p>
    </Block>
    {/* Github */}
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3">
      <a
        href="https://github.com/Kamapra18/"
        target="blank"
        className="grid h-full place-content-center text-3xl text-black">
        <SiGithub />
      </a>
      <p className="text-center text-black">Github</p>
    </Block>
    {/* LinkedIn */}
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3">
      <a
        href="https://www.linkedin.com/in/i-kadek-mario-prayoga"
        target="blank"
        className="grid h-full place-content-center text-3xl text-white">
        <SiLinkedin />
      </a>
      <p className="text-center">LinkedIn</p>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-lg text-justify leading-snug">
    <p className="text-white">
      Passionate about creating modern web experiences.
      <span className="text-zinc-400">
        {" "}
        I specialize in Next.js, React, Tailwind CSS, Supabase, and WordPress,
        constantly exploring new technologies to build better digital products.
      </span>
    </p>
  </Block>
);

const CVBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-3 md:col-span-3">
    <FiFileText className="text-3xl text-[var(--accent)]" />

    <a
      href="/MyCV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-sm text-zinc-400 hover:text-[var(--accent)] transition-colors">
      Lihat / Unduh CV <FiDownload />
    </a>
  </Block>
);

const EmailListBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg text-white font-semibold">Available For</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {["Freelance Projects", "Collaboration", "Internship"].map((item) => (
          <div
            key={item}
            className="
              rounded-lg
              border border-[var(--btn-glass-border)]
              bg-[var(--btn-glass-bg)]
              p-3
              text-sm text-zinc-300
              backdrop-blur-md
            ">
            {item}
          </div>
        ))}
      </div>
    </Block>
  );
};
// Logo
const Logo = () => {
  return (
    <div>
      <Image
        src="/Kamapra.png"
        alt="Logo"
        width={50}
        height={50}
        className="mx-auto mb-10 fill-zinc-50 rounded-full"
      />
    </div>
  );
};
