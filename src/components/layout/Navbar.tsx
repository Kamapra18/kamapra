"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuGlobe, LuMoon, LuSun, LuChevronDown, LuCheck } from "react-icons/lu";

import { useLanguage } from "../../context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

const languages = [
  { code: "ID", label: "Indonesia" },
  { code: "EN", label: "English" },
  { code: "BAN", label: "Basa Bali" },
] as const;

type Theme = "light" | "dark";

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): Theme {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

export function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  const t = lang === "ID" ? id : lang === "EN" ? en : ban;

  // Sinkronisasi class theme dengan DOM
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navLinks = [
    { label: t.navbar.about, href: "/about" },
    { label: t.navbar.portfolio, href: "/projects" },
    { label: t.navbar.gallery, href: "/gallery" },
    { label: t.navbar.blog, href: "/blog" },
    { label: t.navbar.contact, href: "/contact" },
  ];

  const mobileLinks = [{ label: t.navbar.home, href: "/" }, ...navLinks];

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    window.dispatchEvent(new Event("theme-change"));
  };

  const handleItemClick = () => {
    setIsNavOpen(false);
  };

  const handleLanguageChange = (language: "ID" | "EN" | "BAN") => {
    setLang(language);
    setIsLangOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center w-full min-h-18 px-6 md:px-10 lg:px-20 border-b border-(--border)/30 backdrop-blur-2xl transition-all duration-300 ${
          isNavOpen ? "bg-(--accent)" : "bg-(--bg)/35 shadow-sm"
        }`}>
        {/* Logo */}
        <div className="flex items-center justify-self-start">
          <Link
            href="/"
            onClick={handleItemClick}
            className="text-[20px] flex flex-row items-center font-extrabold tracking-tight text-foreground">
            <Image
              src="/Kamapra.png"
              alt="Kamapra"
              width={40}
              height={40}
              className="rounded-full"
            />
            Kamapra<span className="text-(--accent)">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[20px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-(--accent-text)"
                    : "text-(--text-muted) hover:text-foreground"
                }`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center justify-self-end gap-4 lg:gap-6">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-(--text-muted) hover:text-foreground transition-colors"
              aria-label="Change language"
              aria-expanded={isLangOpen}>
              <LuGlobe size={23} strokeWidth={1.8} />

              <span className="text-sm font-medium">{lang}</span>

              <LuChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <>
                <button
                  aria-label="Close language menu"
                  className="fixed inset-0 z-40 cursor-default"
                  onClick={() => setIsLangOpen(false)}
                />

                <div className="absolute right-0 top-full z-50 mt-3 w-44 overflow-hidden rounded-xl border border-(--border) bg-background p-1.5 shadow-lg">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => handleLanguageChange(language.code)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-(--surface)">
                      <span>{language.label}</span>

                      {lang === language.code && (
                        <LuCheck size={16} className="text-(--accent-text)" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Desktop Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-13.5 h-13.5 rounded-full border border-(--border) bg-(--surface) text-(--text-muted) hover:text-foreground transition-all duration-200"
            aria-label="Toggle theme">
            {theme === "light" ? (
              <LuMoon size={25} strokeWidth={1.8} />
            ) : (
              <LuSun size={25} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          style={{ gridColumn: "3" }}
          className="md:hidden justify-self-end flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-60 text-foreground"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}>
          <span
            className={`w-8 h-0.75 rounded-full transition-all duration-300 ${
              isNavOpen
                ? "rotate-45 translate-y-[4.5px] bg-(--on-accent)"
                : "bg-foreground"
            }`}
          />

          <span
            className={`w-8 h-0.75 rounded-full transition-all duration-300 ${
              isNavOpen
                ? "-rotate-45 translate-y-[-4.5px] bg-(--on-accent)"
                : "bg-foreground"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-49 md:hidden flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${
          isNavOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}>
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-(--accent)">
          <div className="flex flex-col items-center gap-8 py-24">
            <h1 className="text-5xl font-bold text-white mb-4">Menu</h1>

            {mobileLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleItemClick}
                className={`group relative text-2xl font-bold text-white transition-all duration-300 ${
                  pathname === item.href
                    ? "opacity-100"
                    : "opacity-80 hover:opacity-100"
                }`}>
                <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                  {item.label}
                </span>
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="flex items-center gap-8 mt-8">
              {/* Mobile Language Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 text-white"
                  aria-label="Change language"
                  aria-expanded={isLangOpen}>
                  <LuGlobe size={22} />

                  <span className="font-medium">{lang}</span>

                  <LuChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLangOpen && (
                  <div className="absolute bottom-full left-1/2 z-50 mb-3 w-40 -translate-x-1/2 overflow-hidden rounded-xl border border-white/20 bg-background p-1.5 shadow-lg">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        type="button"
                        onClick={() => handleLanguageChange(language.code)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-(--surface)">
                        <span>{language.label}</span>

                        {lang === language.code && (
                          <LuCheck size={16} className="text-(--accent-text)" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/40 text-white"
                aria-label="Toggle theme">
                {theme === "light" ? <LuMoon size={22} /> : <LuSun size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
