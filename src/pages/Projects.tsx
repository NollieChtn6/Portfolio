import CardSwap, { Card } from "../ui/CardSwap";
import type { Project } from "@/@types/types";
import { Button } from "@/ui/Button";
import { PageTitle } from "@/ui/PageTitle";
import { Github, Rocket } from "lucide-react";
import { motion } from "motion/react";

import projects from "@/data/projects.json";

const PROJECTS: Project[] = projects as Project[];

export function Projects() {
  return (
    <main className="projects-container flex flex-col md:flex-row w-full h-full overflow-hidden p-10 gap-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex w-full md:w-1/2 h-auto md:h-full p-4 md:p-8 items-start md:items-center justify-start md:justify-center"
      >
        <PageTitle title="Projets" />
      </motion.div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              onCardClick={() => console.log(`Click from ${project.title}`)}
              className="text-iron-50 flex flex-col space-y-4"
            >
              <header className="card-header flex space-x-4">
                <h3 className="self-center">{project.title}</h3>
                <section className="flex">
                  <Button
                    type="button"
                    icon={<Github strokeWidth={1} />}
                    variant="ghost"
                    size="sm"
                    href={project.githubUrl}
                    title={`Voir le code source de ${project.title} sur GitHub`}
                    target="_blank"
                  />
                  {project.deploymentUrl && (
                    <Button
                      type="button"
                      icon={<Rocket strokeWidth={1} />}
                      variant="ghost"
                      size="sm"
                      href={project.deploymentUrl}
                      title={`Accéder à ${project.deploymentUrl}`}
                      target="_blank"
                    />
                  )}
                </section>
              </header>
              <div className="card-body">
                <p>{project.summary}</p>
                <img
                  src={project.illustrationUrl}
                  alt={project.illustrationAlt}
                  className="saturate-50 "
                />
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </main>
  );
}
