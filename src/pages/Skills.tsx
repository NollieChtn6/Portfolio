import type { SkillType } from "@/@types/types";
import { useSkillsStore } from "@/store/skillsStore";
import { SkillsBlock } from "@/ui/SkillBlock";

export function Skills() {
  const { skills } = useSkillsStore();
  const frontEndSkills = (skills as SkillType[]).filter((skill) => skill.type === "front");
  const backEndSkills = (skills as SkillType[]).filter((skill) => skill.type === "back");
  const toolsSkills = (skills as SkillType[]).filter((skill) => skill.type === "outil");
  const softSkills = (skills as SkillType[]).filter((skill) => skill.type === "soft-skill");

  return (
    <main className="skills-container flex flex-col md:flex-row h-full overflow-hidden">
      <div className="skills-title flex w-full h-[10%] md:h-full md:w-[10%] items-center md:justify-center">
        <h2 className="page-title">Compétences</h2>
      </div>
      <div className="skills-content flex-col md:flex-row w-full md:h-full justify-evenly p-6 space-y-6 lg:overflow-y-scroll">
        <SkillsBlock title="Front-End" skills={frontEndSkills} />
        <SkillsBlock title="Back-End" skills={backEndSkills} />
        <SkillsBlock title="Outils" skills={toolsSkills} />
        <SkillsBlock title="Soft Skills" skills={softSkills} />
      </div>
    </main>
  );
}
