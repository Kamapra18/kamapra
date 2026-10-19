"use client";

import Navbar from "../../components/Navbar";
import HeroSection from "../../Home/Hero";
import FooterSection from "../../components/Footer";
import PortofolioSection from "../components/MyProject";

export default function ProjectsClient() {
  return (
    <div
      id="project"
      style={{
        backgroundColor: "var(--background)",
        backgroundImage:
          "radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)",
        backgroundSize: "24px 24px",
      }}
    >
      <Navbar />
      <HeroSection
        text="See What I've Built"
        ButtonHref="#projects"
      />
      <PortofolioSection />
      <FooterSection />
    </div>
  );
}