import Navbar from "../components/Navbar";
import HeroSection from "../Home/Hero";
import AboutSection from "../components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
// import WhatsAppButton from "../components/Wa";
import FooterSection from "../components/Footer";
import GetContact from "../components/GetContact";
import CertificateSection from "../components/certificattion";

export default function About() {
  return (
    <div className="bg-[#1E1E1E]">
      <Navbar />
      <HeroSection text="Want to Get to Know Me?" ButtonHref="#about" />
      <AboutSection />
      <Skills />
      <CertificateSection />
      <Education />
      <GetContact />
      {/* <WhatsAppButton/> */}
      <FooterSection />
    </div>
  );
}
