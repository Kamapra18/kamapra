import { AboutSection } from "@/components/layout/About";
import { Blog } from "@/components/home/Blog";
import { EducationTimeline } from "@/components/home/EducationTimeline";
import { RolesHero } from "@/components/home/HeroSection";
import { Certificates } from "@/components/home/Certificates";
import { LearningSection } from "@/components/home/LearningSection";
import { ProjectSection } from "@/components/home/ProjectSection";

export const instant = false;

export default function Home() {
  return (
    <>
      <RolesHero />
      <AboutSection />
      <EducationTimeline />
      <Certificates />
      <LearningSection />
      <ProjectSection />
      <Blog />
    </>
  );
}
