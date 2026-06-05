"use client";

import React, { FormEvent } from "react";
import Image from "next/image";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiFileText, FiDownload } from "react-icons/fi";
import { SiGithub, SiSpotify, SiLinkedin, SiShutterstock } from "react-icons/si";
import useInView from "@/app/components/hooks/InView";

// ============================================================
// BLOCK COMPONENT (Glassmorphism)
// ============================================================
type BlockProps = { className?: string; children?: React.ReactNode } & MotionProps;

const Block = ({ className, children, ...rest }: BlockProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>(0.2);
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={{
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
      }}
      transition={{ type: "spring", mass: 1, stiffness: 100, damping: 20 }}
      className={twMerge(
        "rounded-[2rem] border p-6 backdrop-blur-xl shadow-lg",
        "border-[var(--btn-glass-border)]",
        className
      )}
      style={{ background: "var(--btn-glass-bg)" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// ============================================================
// BENTO SECTIONS
// ============================================================
const HeaderBlock = () => (
  <Block className="col-span-12 md:col-span-6 row-span-2">
    <Image src="/Mario15.jpg" alt="Mario" width={60} height={60} className="mb-4 size-14 rounded-full border border-white/10" />
    <h1 className="mb-6 text-2xl font-bold leading-tight font-heading">
      Halo, saya I Kadek Mario Prayoga, biasa dipanggil Mario.{" "}
      <span className="text-zinc-400 font-body">Seorang Mahasiswa yang sedang fokus belajar dan membangun website modern.</span>
    </h1>
    <a href="#contact" className="flex items-center gap-1 text-[var(--accent)] hover:underline">
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => {
  const socials = [
    { icon: <SiShutterstock />, color: "bg-red-500/20", href: "https://www.shutterstock.com/g/Kamapra" },
    { icon: <SiSpotify />, color: "bg-green-600/20", href: "#" },
    { icon: <SiGithub />, color: "bg-zinc-500/20", href: "https://github.com/Kamapra18/" },
    { icon: <SiLinkedin />, color: "bg-blue-500/20", href: "https://www.linkedin.com/in/i-kadek-mario-prayoga" },
  ];
  return (
    <>
      {socials.map((s, i) => (
        <Block key={i} whileHover={{ scale: 1.05 }} className="col-span-3 flex flex-col items-center justify-center">
          <a href={s.href} target="_blank" className={`p-4 rounded-full ${s.color} text-2xl text-white`}>{s.icon}</a>
        </Block>
      ))}
    </>
  );
};

const AboutBlock = () => (
  <Block className="col-span-12 text-lg text-justify font-body text-zinc-300">
    Saat ini saya mahasiswa yang sedang mendalami dunia Web Development. Perjalanan ini dimulai dari dasar HTML dan CSS, hingga sekarang saya sudah mengeksplorasi Next.js serta Tailwind CSS.
  </Block>
);

const CVBlock = () => (
  <Block className="col-span-12 md:col-span-3 flex flex-col items-center justify-center gap-3">
    <FiFileText className="text-3xl text-blue-400" />
    <a href="/MyCV.pdf" target="_blank" className="text-sm text-zinc-400 hover:text-[var(--accent)]">CV <FiDownload /></a>
  </Block>
);

const EmailListBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Hubungi saya</p>
      <form className="flex items-center gap-2">
        <input type="email" placeholder="Masukkan email kamu" className="w-full rounded-xl border border-[var(--btn-glass-border)] bg-black/20 px-4 py-2 text-white focus:outline-none focus:border-[var(--accent)]" />
        <button type="submit" className="px-6 py-2 rounded-xl bg-[var(--accent)] text-black font-bold">Kirim</button>
      </form>
    </Block>
  );
};

export const RevealBento = () => {
  return (
    <div 
      className="min-h-screen py-12 px-4 sm:px-6 md:px-12"
      style={{
        backgroundColor: "var(--bg-base)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <motion.div
        transition={{ staggerChildren: 0.05 }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <CVBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};