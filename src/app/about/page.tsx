import Navbar from "../components/Navbar";
import HeroSection from "../Home/Hero";
import AboutSection from "../components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import WhatsAppButton from "../components/Wa";
import FooterSection from "../components/Footer";
import GetContact from "../components/GetContact";

export default function About() {
  return (
    <div className="justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <HeroSection text="Want to Get to Know Me?" ButtonHref="#about" />
      <AboutSection />
      <Skills />
      <Education />
      <GetContact />
      <WhatsAppButton/>
      <FooterSection />
    </div>
  );
}