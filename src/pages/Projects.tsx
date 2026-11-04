import { ExternalLink, Github } from "lucide-react";

import type { Project } from "@/@types/types";
import projectsData from "@/data/projects.json";

const PROJECTS = projectsData as Project[];

export function Projects() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 pb-16 pt-6 md:px-10">
      <h1 className="display display-lg">Projets</h1>

      <ul className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <li
            key={project.id}
            className="stamp-in"
            style={{ "--r": index % 2 ? "0.6deg" : "-0.6deg", "--r0": "-3deg", "--i": index } as React.CSSProperties}
          >
            <article className="label-card lot flex h-full flex-col p-4">
              <div className="overflow-hidden rounded-[3px] bg-tangerine">
                <img
                  src={project.illustrationUrl}
                  alt={project.illustrationAlt}
                  loading="lazy"
                  className="lot-img block aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                <p className="caps">Lot n° {String(index + 1).padStart(2, "0")}</p>
                <h2 className="heading mt-2 text-3xl">{project.title}</h2>
                <p className="mt-3 text-lg font-semibold leading-snug">{project.summary}</p>
                <p className="mt-3 text-base leading-snug opacity-85">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-5 pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link inline-flex items-center gap-2"
                    aria-label={`Voir le code source de ${project.title} sur GitHub`}
                  >
                    <Github aria-hidden="true" size={18} />
                    Code
                  </a>
                  {project.deploymentUrl && (
                    <a
                      href={project.deploymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link inline-flex items-center gap-2"
                      aria-label={`Voir ${project.title} en ligne`}
                    >
                      <ExternalLink aria-hidden="true" size={18} />
                      Démo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
