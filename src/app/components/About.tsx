import React, { FormEvent } from "react";
import Image from "next/image";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiFileText, FiDownload } from "react-icons/fi";
import {
  SiGithub,
  SiSpotify,
  SiLinkedin,
  SiShutterstock,
} from "react-icons/si";
import useInView from "./hooks/InView";

export const RevealBento = () => {
  return (
    <div>
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
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
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <Image
      src={"/mario15.jpg"}
      alt=""
      width={50}
      height={50}
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-2xl font-medium leading-tight">
      Halo, saya I Kadek Mario Prayoga, biasa dipanggil Mario.{" "}
      <span className="text-zinc-400">
        Seorang Mahasiswa yang sedang fokus belajar dan membangun website
        modern.
      </span>
    </h1>
    <a
      href="#contact"
      className="flex items-center gap-1 text-blue-700 hover:underline">
      Contact me <FiArrowRight />
    </a>
  </Block>
);

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
        href="https://www.shutterstock.com/g/Kamapra"
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
  <Block className="col-span-12 text-2xl text-justify leading-snug">
    <p>
      Saat ini saya mahasiswa yang sedang mendalami dunia Web Development.{" "}
      <span className="text-zinc-400">
        Perjalanan ini dimulai dari dasar HTML dan CSS, hingga sekarang saya
        sudah jauh mengeksplorasi Next.js serta Tailwind CSS untuk membangun
        website yang lebih kompleks. Baru-baru ini saya juga mulai mencoba
        membangun aplikasi Android via Expo. Buat yang penasaran, bisa langsung
        cek di halaman proyek portofolio saya ya! Selain itu, saya memiliki
        dasar pemrograman Python yang saya gunakan untuk melatih logika
        berpikir. target saya berikutnya adalah mulai mempelajari Vue untuk
        memperluas skill front-end saya. Saya sangat tertarik untuk terus
        belajar dan mempraktikkan teknologi web terbaru dalam proyek-proyek
        saya.
      </span>
    </p>
  </Block>
);

const CVBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-3 md:col-span-3">
    <FiFileText className="text-3xl text-blue-400" />

    <a
      href="/MyCV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-sm text-zinc-400 hover:text-blue-400 transition-colors">
      Lihat / Unduh CV <FiDownload />
    </a>
  </Block>
);

const EmailListBlock = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = (target.elements.namedItem("email") as HTMLInputElement)
      .value;

    window.location.href = `mailto:marioprayoga18@gmail.com?subject=Kolaborasi&body=Halo, email saya: ${email}`;
  };

  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Hubungi saya</p>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="email"
          name="email"
          placeholder="Masukkan email kamu"
          required
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-zinc-200 focus:border-blue-400 focus:outline-0"
        />

        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300">
          <FiMail /> Kirim
        </button>
      </form>
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
