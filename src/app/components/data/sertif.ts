export interface Certificate {
  id: number;
  title: string;
  provider: string;
  description: string;
  year: string;
  image: string;
  pdf: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Junior Web Developer",
    provider: "VSGA Kominfo",
    description:
      "Program pelatihan intensif pengembangan antarmuka web modern menggunakan standar industri.",
    year: "2025",
    image: "/sertif/vsga1.jpg",
    pdf: "/sertif/vsga.pdf",
  },
  {
    id: 2,
    title: "Kelas Membuat Website dengan Wordpress",
    provider: "skillpedia",
    description: "Kelas membuat website dengan wordpress durasi 6 jam (6JP)",
    year: "2026",
    image: "/sertif/sertifikat-website-wordpress.png",
    pdf: "/sertif/sertifikat-website-wordpress.pdf",
  },
  {
    id: 3,
    title: "Website Development Fundamental",
    provider: "MySkill",
    description:
      "Sertifikat spesialisasi dalam Website Development Fundamental yang mencakup 9 kursus intensif selama 9 jam pelatihan, diverifikasi oleh Education Alliance Finland dan AWS EdStart.",
    year: "2025",
    image: "/sertif/myskillID.jpg",
    pdf: "/sertif/myskillID.pdf",
  },
  {
    id: 4,
    title: "Web Development Intern Training Program",
    provider: "Madhava Enterprises",
    description:
      "Sertifikat penyelesaian program job training sebagai Web Development Intern di Madhava Enterprises, berlangsung dari 25 Februari hingga 29 Juni 2026, ditandatangani oleh Founder & Chief Visionary Officer.",
    year: "2026",
    image: "/sertif/magang-madhava.jpeg",
    pdf: "/sertif/magang-madhava.jpeg",
  },
];
