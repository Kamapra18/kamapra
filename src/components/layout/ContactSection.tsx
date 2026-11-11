"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

import { LuArrowUpRight, LuCheck, LuCopy, LuMail } from "react-icons/lu";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";

import { LuImage } from "react-icons/lu";

const messages = { ID: id, EN: en, BAN: ban };
type Language = keyof typeof messages;

const email = "marioprayoga18@gmail.com";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/kamapra18/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/kamapra/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Kamapra18",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@kadekmariaprayoga",
  },
  {
    name: "Spotify",
    icon: FaSpotify,
    href: "https://open.spotify.com/user/kadekmarioprayoga",
  },
  {
    name: "Shutterstock",
    icon: LuImage,
    href: "https://www.shutterstock.com/g/Kamapra",
  },
];

export default function ContactSection() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const language: Language = lang in messages ? (lang as Language) : "ID";
  const t = messages[language].contactSection;

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section
      id="contact"
      className="bg-background px-5 py-20 text-foreground sm:px-8 md:px-20 md:py-28">
      <div className="mx-auto max-w-8xl">
        {/* Heading */}
        <header className="mb-20 md:mb-28">
          <p className="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-(--text-muted)">
            <span className="h-2 w-2 rounded-full bg-(--accent)" />
            {t.eyebrow}
          </p>

          <h1 className="font-(--font-space-grotesk) text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
            {t.title}
            <span className="block text-(--accent)">
              {t.titleHighlight}
              <span className="text-foreground">.</span>
            </span>
          </h1>
        </header>

        {/* Email */}
        <div className="mb-24 md:mb-32">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-(--text-muted)">
              {t.emailLabel}
            </span>
            <LuMail size={20} className="text-(--accent)" />
          </div>

          <div className="border-y border-(--border) py-8 md:py-12">
            <a href={`mailto:${email}`} className="group block">
              <h2 className="break-all font-(--font-space-grotesk) text-3xl font-medium leading-tight tracking-[-0.045em] transition-colors duration-200 group-hover:text-(--accent) sm:text-4xl md:text-5xl lg:text-6xl">
                {email}
                <LuArrowUpRight
                  size={28}
                  className="ml-2 inline-block align-top transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </h2>
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-80">
                <LuMail size={18} />
                {t.sendEmail}
                <LuArrowUpRight size={17} />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-(--border) px-6 py-3.5 text-sm font-medium transition-colors hover:border-(--accent) hover:text-(--accent)">
                {copied ? <LuCheck size={18} /> : <LuCopy size={18} />}
                {copied ? t.copied : t.copyEmail}
              </button>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-(--font-space-grotesk) text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {t.socialTitle}
            </h2>
            <span className="text-xs font-medium tracking-widest text-(--text-muted)">
              06 / 06
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-t border-(--border) py-6 transition-colors duration-200 hover:text-(--accent) sm:mr-8">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs text-(--text-muted)">
                      0{index + 1}
                    </span>
                    <span className="font-(--font-space-grotesk) text-xl font-medium sm:text-2xl">
                      {social.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Icon
                      size={21}
                      className="text-(--text-muted) transition-colors group-hover:text-(--accent)"
                    />
                    <LuArrowUpRight
                      size={19}
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-16 flex justify-end border-t border-(--border) pt-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-(--accent)">
            {t.backHome}
            <LuArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
