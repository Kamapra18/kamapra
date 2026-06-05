import HeroSection from "./components/HeroSection";
import Navbar from "@/app/components/Navbar";
import { RevealBento } from "./components/about";
import LearningSection from "./components/herocek";

export default function Coba() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <RevealBento />
      <LearningSection />
    </div>
  );
}
