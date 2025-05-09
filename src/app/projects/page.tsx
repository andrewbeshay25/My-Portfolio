import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-8 text-center">
        Projects
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isNew={project.isNew} />

        ))}
      </div>
    </main>
  );
}
