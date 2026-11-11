import type { Metadata } from "next";

import ProjectsContent from "@/components/projects/ProjectContent";
import { getProjects } from "@/lib/Projects";

export const metadata: Metadata = {
  title: "Projects | Kamapra",
  description: "Selected projects by Kamapra.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return <ProjectsContent projects={projects} />;
}
