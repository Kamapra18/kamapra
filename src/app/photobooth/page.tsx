import Hero from "./components/HeroSection";
import FrameSelection from "./components/FrameSection";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

export default function PhotoboxInvitation() {
  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      <Navbar />
      <Hero />
      <FrameSelection />
      <FooterSection />
    </div>
  );
}
