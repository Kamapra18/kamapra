import Navbar from "./components/Navbar";
import Sidebar from "./Home/Sidebar";
import HeroSection from "./Home/Hero";
import AboutSection from "./components/About";
import Skills from "./about/components/Skills";
import Education from "./about/components/Education";
import ProjectCarousel from "./Home/Project";
import ContactSection from "./Home/ContactForm";
import FooterSection from "./components/Footer";

// import WhatsAppButton from "./components/Wa";

export default function Home() {
  return (
    <div className="bg-[#1E1E1E]">
      <HeroSection text="Welcome to My Personal Website" ButtonHref="#about" />
      <Sidebar />
      <Navbar />
      <AboutSection isHomePage={true} />
      <Skills />
      <Education />
      <ProjectCarousel />
      <ContactSection />
      <FooterSection />
      {/* <WhatsAppButton /> */}
    </div>
  );
}
