"use client";
import Navbar from "./components/Navbar";
import Sidebar from "./Home/Sidebar";
import HeroSection from "./Home/Hero";
// import AboutSection from "./components/About";
// import Skills from "./about/components/Skills";
import Education from "./about/components/Education";
// import ProjectCarousel from "./Home/Project";
import PhotoboxInvitation from "./Home/Photobox";
import ContactSection from "./Home/ContactForm";
import FooterSection from "./components/Footer";
import CertificateSection from "./components/certificattion";
import { RevealBento } from "@/app/components/About";
import LearningSection from "./components/Layout/LearningSection";
import PortfolioSection from "@/app/Home/Project";
// import WakaTimeSummary from "./Home/WakatimeSummary";

// import WhatsAppButton from "./components/Wa";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      <HeroSection text="Welcome to My Personal Website" ButtonHref="#about" />
      <Sidebar />
      <Navbar />
      {/* <AboutSection isHomePage={true} /> */}
      <RevealBento />
      {/* <Skills /> */}
      <LearningSection />
      <CertificateSection />
      <Education />
      <PortfolioSection />
      <PhotoboxInvitation />
      {/* <WakaTimeSummary /> */}
      <ContactSection />
      <FooterSection />
      {/* <WhatsAppButton /> */}
    </div>
  );
}
