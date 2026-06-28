"use client";
import Navbar from "../components/Navbar";
import HeroSection from "../Home/Hero";
// import Skills from "./components/Skills";
import LearningSection from "../components/Layout/LearningSection";
import Education from "./components/Education";
import FooterSection from "../components/Footer";
import CertificateSection from "../components/certificattion";
import { RevealBento } from "../components/About";
import GithubSection from "./components/GitHubSection";
// import WakaTimeSection from "./components/WakaTimeSection";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      <Navbar />
      <HeroSection text="Want to Get to Know Me?" ButtonHref="#about" />
      <RevealBento />
      {/* <Skills /> */}
            <LearningSection />
      <CertificateSection />
      <Education />
      <GithubSection />
      {/* <WakaTimeSection /> */}
      <FooterSection />
    </div>
  );
}
