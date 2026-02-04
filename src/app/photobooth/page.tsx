import Hero from "./components/HeroSection";
import FrameSelection from "./components/FrameSection";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

export default function PhotoboxInvitation() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FrameSelection />
      <FooterSection />
    </div>
  );
}
