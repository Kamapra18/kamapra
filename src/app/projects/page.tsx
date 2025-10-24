"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../Home/Hero";
// import WhatsAppButton from "../components/Wa";
import FooterSection from "../components/Footer";
import MyProjects from "./components/MyProject";
import GetContact from "../components/GetContact";

export default function Project() {
  return (
    <div id="project" className="bg-[#1E1E1E]">
      <Navbar />
      <HeroSection text="See What I've Built" ButtonHref="#projects" />
      <MyProjects />
      <GetContact />
      {/* <WhatsAppButton /> */}
      <FooterSection />
    </div>
  );
}
