import type { Metadata } from "next";
import Projects from "./components/Project";

export const metadata: Metadata = {
  title: "Projects Kamapra | Website & Aplikasi Web",
  description:
    "Jelajahi kumpulan proyek Kamapra, mulai dari pengembangan website dan aplikasi hingga eksplorasi UI/UX, lengkap dengan teknologi dan proses di balik pembuatannya.",
};

export default function ProjectsPage() {
  return <Projects />;
}
// "use client";

// import Navbar from "../components/Navbar";
// import HeroSection from "../Home/Hero";
// // import WhatsAppButton from "../components/Wa";
// import FooterSection from "../components/Footer";
// import PortofolioSection from "./components/MyProject";
// // import GetContact from "../components/GetContact";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Projects Kamapra | Website & Aplikasi Web",
//   description:
//     "Jelajahi kumpulan proyek Kamapra, mulai dari pengembangan website dan aplikasi hingga eksplorasi UI/UX, lengkap dengan teknologi dan proses di balik pembuatannya.",
// };

// export default function Project() {
//   return (
//     <div
//       id="project"
//       style={{
//         backgroundColor: "var(--background)",
//         backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
//         backgroundSize: "24px 24px",
//       }}>
//       <Navbar />
//       <HeroSection text="See What I've Built" ButtonHref="#projects" />
//       <PortofolioSection />
//       {/* <GetContact /> */}
//       {/* <WhatsAppButton /> */}
//       <FooterSection />
//     </div>
//   );
// }
