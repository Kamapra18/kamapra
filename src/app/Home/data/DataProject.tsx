export type Category =
  | "all"
  | "application"
  | "landing-page"
  | "company-profile"
  | "college"
  | "tools"
  | "portfolio"
  | "blog"
  | "e-commerce";

export interface FilterTab {
  value: Category;
  label: string;
}

export const filterTabs: FilterTab[] = [
  { value: "all", label: "All" },
  { value: "application", label: "Application" },
  { value: "landing-page", label: "Landing Page" },
  { value: "company-profile", label: "Company Profile" },
  { value: "e-commerce", label: "E-Commerce" },
  { value: "portfolio", label: "Portfolio" },
  { value: "blog", label: "Blog" },
  { value: "tools", label: "Tools" },
  { value: "college", label: "College" },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tech: string[];
  github?: string;
  demo: string;
  category: Category;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GoalFin - Mobile App",
    description:
      "Mobile app for personal finance management with transaction tracking, goals, and interactive dashboard.",
    fullDescription:
      "GoalFin adalah aplikasi mobile yang dibangun menggunakan Expo dan TypeScript untuk membantu pengguna mengelola keuangan pribadi secara efisien. Fitur utama mencakup pencatatan pemasukan dan pengeluaran harian, kategorisasi transaksi otomatis, pembuatan goals keuangan dengan tracking progress real-time, serta dashboard interaktif berisi grafik dan statistik. Data pengguna disimpan secara aman di Supabase dengan database PostgreSQL, dilengkapi sistem autentikasi yang terenkripsi.",
    image: "/galeri/goalfin.png",
    tech: ["Expo", "TypeScript", "Supabase", "PostgreSQL"],
    github: "https://github.com/Kamapra18/goalfin",
    demo: "https://expo.dev/accounts/kamapra/projects/goalfin/builds/e4068660-50c2-4105-b4c2-5ff9bb509810",
    category: "application",
  },
  {
    id: 2,
    title: "MyStar Spa – Landing Page",
    description:
      "Landing page for MyStar Spa, a local beauty and wellness business.",
    fullDescription:
      "Landing page profesional untuk MyStar Spa, bisnis kecantikan dan perawatan tubuh lokal. Dibangun menggunakan WordPress dengan page builder Elementor, halaman ini menampilkan daftar layanan perawatan, harga, profil tim terapis, galeri, dan formulir booking online. Desain mengutamakan kesan mewah dan menenangkan sesuai branding bisnis spa.",
    image: "/galeri/mystarspa.png",
    tech: ["WordPress", "Elementor"],
    demo: "https://mystarspa.com/",
    category: "landing-page",
  },
  {
    id: 3,
    title: "Clamonic Property Website",
    description:
      "Property and reservation website for Clamonic built with WordPress.",
    fullDescription:
      "Website properti dan reservasi untuk divisi Clamonic yang dikembangkan selama program magang. Dikerjakan oleh tim beranggotakan 2 orang, pengembangan website mulai dari implementasi desain, halaman, konten, hingga responsivitas menggunakan WordPress.",
    image: "/galeri/clamonic.com_.png",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    demo: "https://clamonic.com/",
    category: "company-profile",
  },
  {
    id: 4,
    title: "Madhava Enterprises Website",
    description:
      "website compro for Madhava Enterprises, currently under development.",
    fullDescription:
      "Rebranding website company profile untuk Madhava Enterprises yang dikembangkan selama program magang. Proyek ini dibangun menggunakan WordPress dan saat ini masih dalam tahap pengembangan (in development) menggunakan URL staging, yang nantinya akan dimigrasi ke domain utama setelah selesai sepenuhnya.",
    image: "/galeri/madhavaenterprises.mava.co.id_.png",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    demo: "http://madhavaenterprises.mava.co.id",
    category: "company-profile",
  },
  {
    id: 5,
    title: "Brasika 1 – Website",
    description: "College project — official website for STT Brasika 1.",
    fullDescription:
      "Website resmi STT Brasika 1 yang dikembangkan sebagai proyek kuliah. Dibangun menggunakan Next.js, TailwindCSS, dan TypeScript, website ini menampilkan informasi akademik, profil institusi, program studi, berita, dan kontak. Desain responsif dan performa tinggi menjadi fokus utama pengembangan.",
    image: "/galeri/brasika.png",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/Kamapra18/brasika1",
    demo: "https://brasika1.vercel.app/",
    category: "college",
  },
  {
    id: 6,
    title: "Inferno Creative – Company Profile",
    description:
      "Company profile for Inferno Creative, a creative agency offering documentation and wedding invitation web services.",
    fullDescription:
      "Website company profile untuk Inferno Creative, sebuah agensi kreatif yang bergerak di bidang jasa dokumentasi acara dan pembuatan web undangan pernikahan digital. Dibangun dengan Next.js, TailwindCSS, dan TypeScript. Website ini menampilkan portofolio layanan, galeri karya, testimonial klien, serta halaman kontak yang terintegrasi. Fokus pada estetika visual yang elegan dan performa loading yang cepat.",
    image: "/galeri/inferno-creative.png",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/Kamapra18/brasika1",
    demo: "https://inferno-production.com",
    category: "company-profile",
  },
  {
    id: 7,
    title: "Warung Mennara – Landing Page",
    description: "Landing page for Warung Mennara, a local food business.",
    fullDescription:
      "Landing page untuk Warung Mennara, sebuah usaha kuliner lokal yang menyajikan berbagai menu makanan khas daerah. Dibangun dengan Next.js dan TailwindCSS, halaman ini menampilkan menu unggulan, informasi lokasi, jam operasional, dan galeri foto makanan. Dirancang agar mudah diakses dari perangkat mobile karena mayoritas pengunjung berasal dari smartphone.",
    image: "/galeri/warungmennara.png",
    tech: ["Next.js", "TailwindCSS"],
    github: "https://github.com/Kamapra18/warungmennara",
    demo: "https://warungmennara.vercel.app/",
    category: "landing-page",
  },
  {
    id: 8,
    title: "Project UTS – Landing Page",
    description:
      "College assignment — landing page built with Next.js and Tailwind.",
    fullDescription:
      "Proyek UTS mata kuliah Pemrograman Web yang menugaskan pembuatan landing page modern menggunakan Next.js dan TailwindCSS. Halaman ini dirancang dengan layout responsif, animasi scroll, hero section, dan beberapa section konten. Menjadi ajang eksplorasi komponen React dan utility-first CSS secara mendalam.",
    image: "/galeri/uts.png",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/Kamapra18/mario",
    demo: "https://mario-njz.vercel.app/",
    category: "college",
  },
  {
    id: 9,
    title: "Voice Reader – Tools",
    description:
      "Text-to-speech web tool built with vanilla HTML, CSS, and JavaScript.",
    fullDescription:
      "Voice Reader adalah web tool sederhana yang mengubah teks menjadi suara menggunakan Web Speech API bawaan browser. Dibangun hanya dengan HTML, CSS, dan JavaScript murni tanpa framework apapun. Pengguna dapat mengetik atau paste teks, memilih bahasa dan kecepatan bicara, lalu mendengarkan hasilnya langsung di browser. Project ini menjadi eksplorasi mendalam terhadap Web API native dan manipulasi DOM.",
    image: "/galeri/voice.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kamapra18/voice",
    demo: "https://kamapra18.github.io/voice/",
    category: "tools",
  },
];
