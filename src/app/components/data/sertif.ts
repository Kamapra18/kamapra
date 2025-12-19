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
    title: "Frontend Web Developer",
    provider: "VSGA Kominfo",
    description:
      "Program pelatihan intensif pengembangan antarmuka web modern menggunakan standar industri.",
    year: "2025",
    image: "/sertif/vsga1.jpg",
    pdf: "/sertif/vsga.pdf",
  },
  {

    id: 2,
    title: "Website Development Fundamental",
    provider: "MySkill",
    description:
      "Sertifikat spesialisasi dalam Website Development Fundamental yang mencakup 9 kursus intensif selama 9 jam pelatihan, diverifikasi oleh Education Alliance Finland dan AWS EdStart.",
    year: "2025",
    image: "/sertif/myskillID.jpg", 
    pdf: "/sertif/myskillID.pdf",

  },
  // {
  //   id: 3,
  //   title: "",
  //   provider: "",
  //   description:
  //     "",
  //   year: "",
  //   image: "/sertif/",
  //   pdf: "/sertif/",
  // },
];
