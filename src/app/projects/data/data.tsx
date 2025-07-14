export interface Data {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github?: string;
}

const projects: Data[] = [
  {
    title: "Client Personal Company Portfolio Website",
    description:
      "A personal portfolio website I created for a client. Built using native tech (HTML, CSS, JS) and ReactJS, TailwindCSS, Typescript.",
    image: "/galeri/brasika.png",
    tech: ["NextJs", "TailwindCSS", "Typescript"],
    link: "https://brasika1.vercel.app",
    github: "https://github.com/Kamapra18/brasika1",
  },
  {
    title: "Warung Mennara – Landing Page",
    description:
      "Landing Page untuk Warung Mennara, sebuah usaha kuliner lokal.",
    image: "/galeri/warungmennara.png",
    tech: ["NextJs", "TailwindCSS"],
    link: "https://warungmennara.vercel.app",
    github: "https://github.com/Kamapra18/warungmennara",
  },
  {
    title: "Landing Page UTS Pemrograman Web",
    description:
      "Landing page for the UTS Pemrograman Web course. Built using native tech (HTML, CSS, JS) and ReactJS, TailwindCSS, Typescript.",
    image: "/galeri/uts.png",
    tech: ["NextJs", "TailwindCSS", "Typescript"],
    link: "https://mario-njz.vercel.app",
    github: "https://github.com/Kamapra18/mario",
  },
  {
    title: "Todo-List Website",
    description:
      "Sebuah proyek sederhana To-Do List yang memungkinkan pengguna menambahkan daftar, mencentang tugas yang telah selesai, menyimpan data di localStorage, menghapus daftar, dan beralih ke mode gelap.",
    image: "/galeri/todo-list.png",
    tech: ["HTML", "CSS", "JS"],
    link: "https://todo-list-mario-njz.vercel.app",
    github: "https://github.com/Kamapra18/todo-list",
  },
  {
    title: "Chordbox Website",
    description:
      "Aplikasi web sederhana untuk menambahkan, menampilkan, menghapus chord dan lirik lagu, dengan fitur scroll otomatis dan mode gelap",
    image: "/galeri/chordbox.png",
    tech: ["HTML", "CSS", "JS"],
    link: "https://chordbox-mario-njz.vercel.app",
    github: "https://github.com/Kamapra18/chordbox",
  },
  {
    title: "Voice Reader Website",
    description:
      "Website sederhana untuk mengubah teks yang Anda ketik menjadi suara dengan berbagai pilihan suara.",
    image: "/galeri/voice.png",
    tech: ["HTML", "CSS", "JS"],
    link: "https://voice-reader-mario-njz.vercel.app",
    github: "https://github.com/Kamapra18/voice",
  },
  {
    title: "UAS – Website Koleksi Buku Pribadi",
    description:
      "Aplikasi CRUD untuk mengelola koleksi buku pribadi berbasis Supabase dan Next.js.",
    image: "/galeri/bookcollection.png",
    tech: ["NextJs", "TailwindCSS", "Supabase", "Typescript"],
    link: "https://uas-azure.vercel.app",
    github: "https://github.com/namakamu/uas-koleksi-buku",
  },
];

export default projects;
