import { iconMapping } from "@/assets/skills_icons/iconMapping";
import { motion } from "framer-motion";

export type Skill = {
  id: number;
  name: string;
  type: "front" | "back" | "outil" | "soft-skill";
  "icon-mapping": keyof typeof iconMapping;
  alt: string;
};

type SkillBlockProps = {
  title: string;
  skills: Skill[];
};

export function SkillsBlock({ title, skills }: SkillBlockProps) {
  return (
    <div className="skills w-full bg-gray-100 p-6 rounded-lg">
      <h3 className="text-3xl font-mono text-center my-6 text-gray-800">{title}</h3>
      <motion.div
        className="skills-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }} // Animation plus douce
      >
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={`${skill.id}-${index}`}
              className="skill flex flex-col items-center justify-center rounded-lg bg-iron-600 shadow-lg p-4 space-y-3 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-hibiscus-300/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // Subtile délai par bloc
            >
              <div className="icon-container bg-gray-200 p-3 rounded-full">
                <img
                  src={iconMapping[skill["icon-mapping"]]}
                  alt={skill.alt}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="skill-name text-center text-lg font-semibold text-gray-700">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
