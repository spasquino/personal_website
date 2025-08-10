import Link from "next/link";
import Image from "next/image";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white
           transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gray-200/60 h-full"

    >
      {/* Left accent line */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[#1e3a8a]/20 transition-colors duration-200 group-hover:bg-[#1e3a8a]/60" />

      {project.coverImage && (
        <div className="relative h-44 w-full">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 items-center justify-center p-6 text-center space-y-3
                bg-gradient-to-br from-white to-[#f8fafc]">
        <h3 className="font-semibold text-lg tracking-wider uppercase text-gray-900 group-hover:underline decoration-[#1e3a8a] underline-offset-4">
          {project.title}
        </h3>
        <p className="text-base text-gray-800 leading-relaxed mt-3">{project.summary}</p>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs bg-[#e6f0fa] px-2 py-1 rounded text-gray-800"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
