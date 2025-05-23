import type { SkillType } from "@/@types/types";
import { useSkillsStore } from "@/store/skillsStore";
import { SkillsBlock } from "@/ui/SkillBlock";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function Skills() {
  const { skills } = useSkillsStore();

  const { frontEndSkills, backEndSkills, databaseSkills, toolsSkills, softSkills } = useMemo(() => {
    if (!skills) {
      return {
        frontEndSkills: [],
        backEndSkills: [],
        databaseSkills: [],
        toolsSkills: [],
        softSkills: [],
      };
    }

    return skills.reduce(
      (acc, skill) => {
        switch (skill.type) {
          case "front":
            acc.frontEndSkills.push(skill);
            break;
          case "back":
            acc.backEndSkills.push(skill);
            break;
          case "database":
            acc.databaseSkills.push(skill); // ✅ correction ici
            break;
          case "outil":
            acc.toolsSkills.push(skill);
            break;
          case "soft-skill":
            acc.softSkills.push(skill);
            break;
        }
        return acc;
      },
      {
        frontEndSkills: [] as SkillType[],
        backEndSkills: [] as SkillType[],
        databaseSkills: [] as SkillType[], // ✅ ajout ici
        toolsSkills: [] as SkillType[],
        softSkills: [] as SkillType[],
      },
    );
  }, [skills]);

  return (
    <main className="skills-container flex flex-col md:flex-row h-full overflow-hidden">
      <div className="skills-title flex w-full h-[10%] md:h-full md:w-[10%] items-center md:justify-center">
        <h2 className="page-title">Compétences</h2>
      </div>
      <div className="skills-content flex-col md:flex-row w-full md:h-full justify-evenly p-6 space-y-6 lg:overflow-y-scroll">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SkillsBlock title="Front-End" skills={frontEndSkills} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SkillsBlock title="Back-End" skills={backEndSkills} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SkillsBlock title="Base de données" skills={databaseSkills} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SkillsBlock title="Outils" skills={toolsSkills} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SkillsBlock title="Soft Skills" skills={softSkills} />
        </motion.div>
      </div>
    </main>
  );
}
