export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GoalFin - Aplikasi Mobile",
    description:
      "Aplikasi mobile untuk manajemen keuangan pribadi dengan fitur tracking transaksi, goals, dan dashboard interaktif",
    image: "/galeri/goalfin.png",
    tech: ["Expo", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/Kamapra18/goalfin",
    demo: "https://expo.dev/accounts/kamapra/projects/goalfin/builds/e4068660-50c2-4105-b4c2-5ff9bb509810",
  },
  {
    id: 2,
    title: "Brasika 1 – Website",
    description: "Website Brasika 1 adalah website STT.",
    image: "/galeri/brasika.png",
    tech: ["NextJS", "TailwindCSS", "Typescript"],
    github: "https://github.com/Kamapra18/brasika1",
    demo: "https://brasika1.vercel.app/",
  },
  {
    id: 3,
    title: "Inferno Creative – Website",
    description:
      "Website Inferno Creative adalah company profile bisnis jasa docum dan web undangan.",
    image: "/galeri/inferno-creative.png",
    tech: ["NextJS", "TailwindCSS", "Typescript"],
    github: "https://github.com/Kamapra18/brasika1",
    demo: "https://inferno-production.com",
  },
  {
    id: 4,
    title: "Project UTS – Landing Page",
    description: "Landing page menggunakan Next.js dan Tailwind.",
    image: "/galeri/uts.png",
    tech: ["NextJS", "TailwindCSS", "Typescript"],
    github: "https://github.com/Kamapra18/mario",
    demo: "https://mario-njz.vercel.app/",
  },

  {
    id: 5,
    title: "Warung Mennara – Landing Page",
    description:
      "Landing Page untuk Warung Mennara, sebuah usaha kuliner lokal.",
    image: "/galeri/warungmennara.png",
    tech: ["NextJs", "TailwindCSS"],
    github: "https://github.com/Kamapra18/warungmennara",
    demo: "https://warungmennara.vercel.app/",
  },
  {
    id: 6,
    title: "Voice Reader – Website",
    description:
      "website pengubah teks jadi suara menggunakan html, css, dan javascript.",
    image: "/galeri/voice.png",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/Kamapra18/voice",
    demo: "https://kamapra18.github.io/voice/",
  },
  // {
  //   id: 7,
  //   title: "Todo-List – Website",
  //   description: "Project sederhana menggunakan html, css, dan javascript",
  //   image: "/galeri/todo-list.png",
  //   tech: ["HTML", "CSS", "JS"],
  //   github: "https://github.com/Kamapra18/todo-list",
  //   demo: "https://kamapra18.github.io/todo-list/",
  // },
  // {
  //   id: 8,
  //   title: "Chordbox – Website",
  //   description: "Website Chordbox adalah web untuk kamu yang suka gitaran.",
  //   image: "/galeri/chordbox.png",
  //   tech: ["HTML", "CSS", "JS"],
  //   github: "https://github.com/Kamapra18/chordbox",
  //   demo: "https://kamapra18.github.io/chordbox/",
  // },
];
