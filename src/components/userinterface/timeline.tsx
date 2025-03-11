import { motion } from "framer-motion";
import { Briefcase, University, CalendarDays } from "lucide-react";
import milestones from "../../data/milestones.json";

export default function VerticalTimeline() {
  // TODO: Responsive design
  return (
    <div className="relative w-full max-w-4xl mx-auto p-6">
      <div className="absolute left-1/2 top-0 h-full w-1 bg-iron-300 transform -translate-x-1/2" />

      <div className="flex flex-col gap-4 relative">
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div className="milestone-card bg-iron-600 shadow-lg rounded-lg p-6 w-96 border border-iron-200 space-y-3">
                <h3 className="text-xl font-semibold">{milestone.fr.organisation}</h3>
                <p className="text-gray-600 text-lg">{milestone.fr.position}</p>
                <p className="text-gray-500 flex items-center gap-2 text-sm">
                  <CalendarDays size={16} />
                  {milestone.fr.startMonth} {milestone.fr.startYear} - {milestone.fr.endMonth}{" "}
                  {milestone.fr.endYear}
                </p>
              </div>
              <div
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-iron-700 border-2 border-iron-300 rounded-full p-2 ${milestone.isEducation === "false" ? "bg-hibiscus-600" : "bg-persian-green-500"}`}
              >
                {milestone.isEducation === "false" ? (
                  <Briefcase size={32} className="text-iron-300" />
                ) : (
                  <University size={32} className="text-iron-300" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
