import type { IconType } from "react-icons";

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
  FaImage,
  FaPenNib,
  FaPalette,
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
  SiNotion,
  SiGooglecolab,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";

export interface Skill {
  id: string;
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillGroup {
  id: string;
  number: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "development",
    number: "01",
    skills: [
      { id: "html", name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { id: "css", name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { id: "javascript", name: "JavaScript", icon: FaJs, color: "#D6A900" },
      {
        id: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      { id: "python", name: "Python", icon: FaPython, color: "#3776AB" },
      { id: "sql", name: "SQL", icon: TbSql, color: "#4479A1" },
      { id: "react", name: "React", icon: FaReact, color: "#61DAFB" },
      { id: "nextjs", name: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { id: "vue", name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "#7952B3",
      },
      {
        id: "wordpress",
        name: "WordPress",
        icon: FaWordpress,
        color: "#21759B",
      },
      { id: "nodejs", name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
    ],
  },
  {
    id: "tools",
    number: "02",
    skills: [
      { id: "vscode", name: "VS Code", icon: VscCode, color: "#007ACC" },
      { id: "git", name: "Git", icon: FaGitAlt, color: "#F05032" },
      { id: "github", name: "GitHub", icon: FaGithub, color: "#888888" },
      { id: "mysql", name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { id: "supabase", name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { id: "vercel", name: "Vercel", icon: SiVercel, color: "#888888" },
      { id: "notion", name: "Notion", icon: SiNotion, color: "#888888" },
      {
        id: "colab",
        name: "Google Colab",
        icon: SiGooglecolab,
        color: "#F9AB00",
      },
      { id: "excel", name: "Excel", icon: FaFileExcel, color: "#217346" },
      { id: "word", name: "Word", icon: FaFileWord, color: "#2B579A" },
      {
        id: "powerpoint",
        name: "PowerPoint",
        icon: FaFilePowerpoint,
        color: "#D24726",
      },
    ],
  },
  {
    id: "design",
    number: "03",
    skills: [
      { id: "figma", name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { id: "photoshop", name: "Photoshop", icon: FaImage, color: "#31A8FF" },
      {
        id: "illustrator",
        name: "Illustrator",
        icon: FaPenNib,
        color: "#FF9A00",
      },
      { id: "canva", name: "Canva", icon: FaPalette, color: "#7D2AE8" },
      { id: "capcut", name: "CapCut", icon: FaVideo, color: "#888888" },
    ],
  },
  {
    id: "ai",
    number: "04",
    skills: [
      { id: "chatgpt", name: "ChatGPT", icon: RiOpenaiFill, color: "#10A37F" },
      { id: "claude", name: "Claude AI", icon: FaPalette, color: "#D97757" },
      { id: "gemini", name: "Gemini", icon: FaImage, color: "#4285F4" },
      { id: "grok", name: "Grok", icon: SiX, color: "#888888" },
      { id: "n8n", name: "n8n", icon: VscCode, color: "#EA4B71" },
    ],
  },
];
