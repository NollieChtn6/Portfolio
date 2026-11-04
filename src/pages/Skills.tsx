import type { SkillType } from "@/@types/types";
import { iconMapping } from "@/assets/skills_icons/iconMapping";
import skillsData from "@/data/skills.json";

const SKILLS = skillsData as SkillType[];

const GROUPS: { type: SkillType["type"]; title: string }[] = [
  { type: "front", title: "Front-end" },
  { type: "back", title: "Back-end" },
  { type: "database", title: "Bases de données" },
  { type: "outil", title: "Outils" },
  { type: "soft-skill", title: "Savoir-être" },
];

export function Skills() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 pb-16 pt-6 md:px-10">
      <h1 className="display display-lg">Compétences</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {GROUPS.map((group, index) => (
          <section
            key={group.type}
            aria-labelledby={`skills-${group.type}`}
            className="label-card stamp-in p-6"
            style={{ "--r": index % 2 ? "0.7deg" : "-0.7deg", "--r0": "-3deg", "--i": index } as React.CSSProperties}
          >
            <h2 id={`skills-${group.type}`} className="heading text-2xl">
              {group.title}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {SKILLS.filter((skill) => skill.type === group.type).map((skill) => (
                <li key={skill.id} className="stamp !bg-white">
                  <img
                    src={iconMapping[skill["icon-mapping"]]}
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] object-contain"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
