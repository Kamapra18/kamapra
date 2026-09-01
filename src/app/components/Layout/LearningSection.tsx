"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaVideo,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiX,
  SiVuedotjs,
  SiTailwindcss,
  SiMysql,
  SiSupabase,
  SiVercel,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNotion,
  SiGooglecolab,
  SiCanva,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import Heading from "@/app/components/ui/Heading";

interface SkillItem {
  name: string;
  detail: string;
  icon: React.ReactNode;
  category: "language" | "framework" | "tools" | "ai" | "design";
}

// Data Skill yang sudah diperbarui & dikategorikan
const allSkills: SkillItem[] = [
  // --- LANGUAGES ---
  {
    name: "HTML",
    detail: "Dasar Utama",
    icon: <FaHtml5 className="w-4 h-4" style={{ color: "#e34f26" }} />,
    category: "language",
  },
  {
    name: "CSS",
    detail: "Styling",
    icon: <FaCss3Alt className="w-4 h-4" style={{ color: "#1572b6" }} />,
    category: "language",
  },
  {
    name: "JavaScript",
    detail: "Logika Web",
    icon: <FaJs className="w-4 h-4" style={{ color: "#f7df1e" }} />,
    category: "language",
  },
  {
    name: "TypeScript",
    detail: "Tipe Data",
    icon: <SiTypescript className="w-4 h-4" style={{ color: "#3178c6" }} />,
    category: "language",
  },
  {
    name: "SQL",
    detail: "Dasar Manajemen Data",
    icon: <TbSql className="w-4 h-4" style={{ color: "#6366f1" }} />,
    category: "language",
  },
  {
    name: "Python",
    detail: "Logika Pemrograman",
    icon: <FaPython className="w-4 h-4" style={{ color: "#3b82f6" }} />,
    category: "language",
  },

  // --- FRAMEWORKS and CMS ---
  {
    name: "React",
    detail: "Library UI",
    icon: <FaReact className="w-4 h-4" style={{ color: "#61dafb" }} />,
    category: "framework",
  },
  {
    name: "Next.js",
    detail: "Keahlian Utama",
    icon: <SiNextdotjs className="w-4 h-4" style={{ color: "#ffffff" }} />,
    category: "framework",
  },
  {
    name: "Vue Js",
    detail: "baru belajar",
    icon: <SiVuedotjs className="w-4 h-4" style={{ color: "#ffffff" }} />,
    category: "framework",
  },
  {
    name: "TailwindCSS",
    detail: "Fast CSS",
    icon: <SiTailwindcss className="w-4 h-4" style={{ color: "#06b6d4" }} />,
    category: "framework",
  },
  {
    name: "Bootstrap",
    detail: "Framework UI",
    icon: <FaBootstrap className="w-4 h-4" style={{ color: "#7952b3" }} />,
    category: "framework",
  },
  {
    name: "WordPress",
    detail: "CMS & Web Dev",
    icon: <FaWordpress className="w-4 h-4" style={{ color: "#21759b" }} />,
    category: "framework",
  },
  {
    name: "Node.js",
    detail: "Runtime Server",
    icon: <FaNodeJs className="w-4 h-4" style={{ color: "#68a063" }} />,
    category: "framework",
  },

  // --- TOOLS & PRODUCTIVITY ---
  {
    name: "VS Code",
    detail: "Editor Utama",
    icon: <VscCode className="w-4 h-4" style={{ color: "#007acc" }} />,
    category: "tools",
  },
  {
    name: "Git",
    detail: "Version Control",
    icon: <FaGitAlt className="w-4 h-4" style={{ color: "#f05032" }} />,
    category: "tools",
  },
  {
    name: "GitHub",
    detail: "Kode Hosting",
    icon: <FaGithub className="w-4 h-4" style={{ color: "#e2e8f0" }} />,
    category: "tools",
  },
  {
    name: "MySQL",
    detail: "Relasi DB",
    icon: <SiMysql className="w-4 h-4" style={{ color: "#4479a1" }} />,
    category: "tools",
  },
  {
    name: "Supabase",
    detail: "BaaS Backend",
    icon: <SiSupabase className="w-4 h-4" style={{ color: "#3ecf8e" }} />,
    category: "tools",
  },
  {
    name: "Vercel",
    detail: "Deploy Web",
    icon: <SiVercel className="w-4 h-4" style={{ color: "#ffffff" }} />,
    category: "tools",
  },
  {
    name: "Notion",
    detail: "Dokumentasi",
    icon: <SiNotion className="w-4 h-4" style={{ color: "#e2e8f0" }} />,
    category: "tools",
  },
  {
    name: "Google Colab",
    detail: "Python Notebook",
    icon: <SiGooglecolab className="w-4 h-4" style={{ color: "#f9ab00" }} />,
    category: "tools",
  },
  {
    name: "Excel",
    detail: "Olah Data",
    icon: <FaFileExcel className="w-4 h-4" style={{ color: "#107c41" }} />,
    category: "tools",
  },
  {
    name: "Word",
    detail: "Dokumen",
    icon: <FaFileWord className="w-4 h-4" style={{ color: "#2b579a" }} />,
    category: "tools",
  },
  {
    name: "PowerPoint",
    detail: "Presentasi",
    icon: <FaFilePowerpoint className="w-4 h-4" style={{ color: "#b53b1b" }} />,
    category: "tools",
  },

  // --- INTELLIGENCE & AUTOMATION (AI) ---
  {
    name: "ChatGPT",
    detail: "Riset Asisten",
    icon: <RiOpenaiFill className="w-4 h-4" style={{ color: "#10a37f" }} />,
    category: "ai",
  },
  {
    name: "Claude AI",
    detail: "Analisis Kode",
    icon: <span className="text-xs font-bold text-[#d97706]">🪶</span>,
    category: "ai",
  },
  {
    name: "Gemini",
    detail: "Konteks Luas",
    icon: (
      <span className="text-xs font-bold text-[#1e1b4b] bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text">
        ✦
      </span>
    ),
    category: "ai",
  },
  {
    name: "grok",
    detail: "analisis trend",
    icon: <SiX className="w-4 h-4" style={{ color: "#10a37f" }} />,
    category: "ai",
  },
  {
    name: "n8n",
    detail: "Automasi Alur",
    icon: <span className="text-[10px] font-black text-[#ff6d5a]">n8n</span>,
    category: "ai",
  },

  // --- DIGITAL DESIGN ---
  {
    name: "Figma",
    detail: "Desain UI/UX",
    icon: <FaFigma className="w-4 h-4" style={{ color: "#f24e1e" }} />,
    category: "design",
  },
  {
    name: "Photoshop",
    detail: "Edit Gambar",
    icon: <SiAdobephotoshop className="w-4 h-4" style={{ color: "#31a8ff" }} />,
    category: "design",
  },
  {
    name: "Illustrator",
    detail: "Vektor Grafis",
    icon: (
      <SiAdobeillustrator className="w-4 h-4" style={{ color: "#ff9a00" }} />
    ),
    category: "design",
  },
  {
    name: "Canva",
    detail: "Desain Cepat",
    icon: <SiCanva className="w-4 h-4" style={{ color: "#00c4cc" }} />,
    category: "design",
  },
  {
    name: "CapCut",
    detail: "Editor Video",
    icon: <FaVideo className="w-4 h-4" style={{ color: "#2563eb" }} />,
    category: "design",
  },
];

const tabs = [
  { id: "all", label: "All Stack" },
  { id: "language", label: "Languages" },
  { id: "framework", label: "Frameworks" },
  { id: "tools", label: "Tools & Productivity" },
  { id: "ai", label: "AI & Automation" },
  { id: "design", label: "Digital Design" },
];

function SkillCard({ item }: { item: SkillItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="
        group
        flex items-center gap-2.5
        p-2.5
        rounded-xl
        cursor-default
        transition-all duration-300
        border border-white/[0.06]
        bg-white/[0.02]
        hover:border-sky-400/30
        hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]
      ">
      <div
        className="
          w-8 h-8
          rounded-lg
          flex items-center justify-center
          shrink-0
          transition-transform duration-300
          group-hover:scale-110
          border border-white/[0.08]
          bg-white/[0.04]
        ">
        {item.icon}
      </div>

      <div className="overflow-hidden">
        <span
          className="block text-xs font-bold truncate"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-heading)",
          }}>
          {item.name}
        </span>

        <span
          className="block truncate text-[9px] font-mono"
          style={{
            color: "rgba(148,163,184,0.6)",
          }}>
          {item.detail}
        </span>
      </div>
    </motion.div>
  );
}

export default function LearningSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="proses-belajar"
      className="py-24 relative overflow-hidden px-4 sm:px-6 md:px-1z0">
      {/* Background glows */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "var(--bg-glow)",
          filter: "blur(120px)",
          opacity: 0.4,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Heading text="Skill" highlight="Stack." />

        <div className="flex items-center justify-center gap-3 mb-10">
          <div
            className="w-10 h-[2px]"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="font-bold uppercase tracking-widest text-xs"
            style={{ color: "var(--accent)" }}>
            Workflow & Ecosystem
          </span>
          <div
            className="w-10 h-[2px]"
            style={{ background: "var(--accent)" }}
          />
        </div>

        {/* Dynamic Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-white/[0.06]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 relative`}
              style={{
                color:
                  activeTab === tab.id
                    ? "var(--foreground)"
                    : "rgba(148, 163, 184, 0.6)",
              }}>
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.08]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Unified Responsive Container */}
        <div
          className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "var(--btn-glass-shadow-base)",
          }}>
          {/* Subtle Glow Decorator */}
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #38bdf8 0%, transparent 70%)",
              filter: "blur(40px)",
              opacity: 0.1,
            }}
          />

          {/* Grid Layout with AnimatePresence for smooth filter transitions */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((item) => (
                <SkillCard key={item.name} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
