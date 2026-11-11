import { notFound } from "next/navigation";

import ProjectDetail from "@/components/projects/ProjectDetail";
import { getProjectBySlug } from "@/lib/Projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
