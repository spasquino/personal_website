// pages/projects/[id].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectById, type Project } from "../../data/projects";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((p) => ({ params: { id: p.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const project = getProjectById(id);
  return { props: { project } };
};

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <Head>
        <title>{project.title} • Sara Pasquino</title>
      </Head>

      <article className="space-y-8">
        <Link
          href="/projects"
          className="text-base underline hover:text-[#1e3a8a] mb-4 inline-block"
        >
          &larr; Back to Projects
        </Link>

        <header className="space-y-4">
          <h1 className="text-2xl font-bold whitespace-pre-line tracking-wider uppercase text-gray-900">
            {project.title}
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs bg-[#E8F1FB] px-2 py-1 rounded text-gray-800"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Action buttons above slides */}
        <section className="flex flex-wrap gap-3">
          {project.reportUrl && (
            <a
              className="px-4 py-2 rounded-md bg-[#1e3a8a] text-white hover:bg-[#162c65] transition-colors transform hover:scale-105"
              href={project.reportUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Report
            </a>
          )}
          {project.codeUrl && (
            <a
              className="px-4 py-2 rounded-md bg-[#1e3a8a] text-white hover:bg-[#162c65] transition-colors transform hover:scale-105"
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          )}
        </section>

        {project.coverImage && (
          <div className="relative h-56 w-full rounded-lg overflow-hidden border">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {project.slidesUrl && (
          <section>
            <h2 className="font-semibold text-lg mb-2 text-gray-900">
              Presentation
            </h2>
            <div className="border rounded-lg overflow-hidden h-[70vh]">
              <iframe
                src={project.slidesUrl}
                className="w-full h-full"
                title={`${project.title} slides`}
              />
            </div>
          </section>
        )}
      </article>
    </>
  );
}
