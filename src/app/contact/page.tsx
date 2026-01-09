import HeroSection from "@/app/Home/Hero";
import ContactForm from "@/app/Home/ContactForm";
import ContactBento from "../about/components/Contact";
import Navbar from "@/app/components/Navbar";
import FooterSection from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-[#1E1E1E]">
      <Navbar />
      <HeroSection text="Get in touch with me" ButtonHref="#contact" />
      <ContactBento />
      <ContactForm />
      <FooterSection />
    </div>
  );
}
