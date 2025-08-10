import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
<section className="mx-auto max-w-7xl px-6 md:px-12">

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-wider uppercase text-gray-900">Projects</h1>
        <p className="text-gray-600 mt-1">
          {/* Selected work across Machine Learning, Deep Learning, Optimization and Applied Analytics. */}
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
