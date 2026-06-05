import HeroSection from "@/app/Home/Hero";
import ContactForm from "@/app/Home/ContactForm";
import ContactBento from "../about/components/Contact";
import Navbar from "@/app/components/Navbar";
import FooterSection from "../components/Footer";

export default function ContactPage() {
  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      <Navbar />
      <HeroSection text="Get in touch with me" ButtonHref="#contact" />
      <ContactBento />
      <ContactForm />
      <FooterSection />
    </div>
  );
}
