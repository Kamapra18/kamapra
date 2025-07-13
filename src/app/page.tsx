import HeroSection from "./Home/Hero";
import Sidebar from "./Home/Sidebar";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ContactSection from "./Home/ContactForm";
import FooterSection from "./components/Footer";

import WhatsAppButton from "./components/Wa";
import ProjectCarousel from "./Home/Project";

export default function Home() {
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <HeroSection text="Welcome to My Personal Website" ButtonHref="#about" />
      <Sidebar />
      <Navbar />
      <AboutSection isHomePage={true}/>
      <ProjectCarousel />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
