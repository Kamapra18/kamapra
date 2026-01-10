"use client";
import Navbar from "../components/Navbar";
import HeroSection from "../Home/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import FooterSection from "../components/Footer";
import CertificateSection from "../components/certificattion";
import { RevealBento } from "../components/About";
import GithubSection from "./components/GitHubSection";
import WakaTimeSection from "./components/WakaTimeSection";

export default function About() {
  return (
    <div className="bg-[#1E1E1E]">
      <Navbar />
      <HeroSection text="Want to Get to Know Me?" ButtonHref="#about" />
      <RevealBento />
      <Skills />
      <CertificateSection />
      <Education />
      <GithubSection />
      <WakaTimeSection />
      <FooterSection />
    </div>
  );
}
