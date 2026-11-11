import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export type ProjectLanguage = "ID" | "EN" | "BAN";

export type ProjectContent = {
  title: string;
  category: string;
  year: number;
  status: string;
  description: string;
  coverImage: string;
  roles: string[];
  technologies: string[];
  links: {
    demo?: string;
    repository?: string;
  };
  featured: boolean;
  content: string;
};

export type Project = ProjectContent & {
  slug: string;
  translations: Record<ProjectLanguage, ProjectContent>;
};

const languageFiles: Record<ProjectLanguage, string> = {
  ID: "id.md",
  EN: "en.md",
  BAN: "ban.md",
};

function parseProjectFile(
  filePath: string,
  fallbackSlug: string,
): ProjectContent & { slug: string } {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    title: String(data.title ?? ""),
    slug: String(data.slug ?? fallbackSlug),
    category: String(data.category ?? ""),
    year: Number(data.year ?? new Date().getFullYear()),
    status: String(data.status ?? "Completed"),
    description: String(data.description ?? ""),
    coverImage: String(data.coverImage ?? ""),
    roles: Array.isArray(data.roles) ? data.roles : [],
    technologies: Array.isArray(data.technologies) ? data.technologies : [],
    links: {
      demo: data.links?.demo || undefined,
      repository: data.links?.repository || undefined,
    },
    featured: Boolean(data.featured),
    content: content.trim(),
  };
}

function createProjectFromDirectory(directoryName: string): Project | null {
  const projectDirectory = path.join(projectsDirectory, directoryName);

  if (!fs.statSync(projectDirectory).isDirectory()) {
    return null;
  }

  const availableFiles = Object.values(languageFiles).filter((file) =>
    fs.existsSync(path.join(projectDirectory, file)),
  );

  if (availableFiles.length === 0) {
    return null;
  }

  const idFile = path.join(projectDirectory, languageFiles.ID);

  // Gunakan ID sebagai sumber utama.
  // Jika belum tersedia, gunakan file bahasa pertama yang ditemukan.
  const fallbackFile = fs.existsSync(idFile)
    ? idFile
    : path.join(projectDirectory, availableFiles[0]);

  const baseProject = parseProjectFile(fallbackFile, directoryName);
  const slug = baseProject.slug || directoryName;

  const parsedTranslations: Partial<Record<ProjectLanguage, ProjectContent>> =
    {};

  for (const [language, fileName] of Object.entries(languageFiles) as [
    ProjectLanguage,
    string,
  ][]) {
    const filePath = path.join(projectDirectory, fileName);

    if (!fs.existsSync(filePath)) continue;

    parsedTranslations[language] = parseProjectFile(filePath, slug);
  }

  const fallbackContent: ProjectContent = {
    title: baseProject.title,
    category: baseProject.category,
    year: baseProject.year,
    status: baseProject.status,
    description: baseProject.description,
    coverImage: baseProject.coverImage,
    roles: baseProject.roles,
    technologies: baseProject.technologies,
    links: baseProject.links,
    featured: baseProject.featured,
    content: baseProject.content,
  };

  const idContent = parsedTranslations.ID ?? fallbackContent;

  const translations: Record<ProjectLanguage, ProjectContent> = {
    ID: idContent,
    EN: parsedTranslations.EN ?? idContent,
    BAN: parsedTranslations.BAN ?? idContent,
  };

  return {
    ...idContent,
    slug,
    translations,
  };
}

function createLegacyProject(fileName: string): Project {
  const filePath = path.join(projectsDirectory, fileName);
  const parsed = parseProjectFile(filePath, fileName.replace(/\.md$/, ""));

  const { slug, ...content } = parsed;

  return {
    ...content,
    slug,
    translations: {
      ID: content,
      EN: content,
      BAN: content,
    },
  };
}

export function getProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const entries = fs.readdirSync(projectsDirectory, {
    withFileTypes: true,
  });

  const projects: Project[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const project = createProjectFromDirectory(entry.name);

      if (project) {
        projects.push(project);
      }
    }

    // Mendukung file Markdown lama selama masa migrasi.
    if (entry.isFile() && entry.name.endsWith(".md")) {
      projects.push(createLegacyProject(entry.name));
    }
  }

  return projects.sort((a, b) => {
    if (a.featured !== b.featured) {
      return Number(b.featured) - Number(a.featured);
    }

    return b.year - a.year;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return undefined;
  }

  return getProjects().find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}
