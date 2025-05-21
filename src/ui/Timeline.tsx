import type { MilestoneType } from "@/@types/types";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, CalendarDays, University } from "lucide-react";
import { useState } from "react";

import data from "../data/milestones.json";

import { Button } from "./Button";
import Dialog from "./Dialog";

export function VerticalTimeline() {
  const milestones: MilestoneType[] = data as MilestoneType[];
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneType | null>(null);

  const milestoneIsEducationColors = {
    primary: "text-persian-green-700",
    secondary: "text-persian-green-400",
  };

  const milestoneIsNotEducationColors = {
    primary: "text-hibiscus-700",
    secondary: "text-hibiscus-500",
  };

  const handleOpenDetails = (milestone: MilestoneType): void => {
    setSelectedMilestone(milestone);
    console.log("Selected milestone:", milestone);
  };
  const handleCloseDetails = (): void => {
    setSelectedMilestone(null);
  };

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
              <div className="milestone-card flex flex-col relative bg-iron-500 shadow-lg rounded-lg p-4 w-96 border border-iron-200 space-y-3">
                <div className="dialog-header">
                  <h3
                    className={`text-xl font-semibold ${milestone.isEducation === false ? `${milestoneIsNotEducationColors.primary}` : `${milestoneIsEducationColors.primary}`}`}
                  >
                    {milestone.fr.organisation}
                  </h3>
                  <p
                    className={`text-lbase ${milestone.isEducation === false ? `${milestoneIsNotEducationColors.secondary}` : `${milestoneIsEducationColors.secondary}`}`}
                  >
                    {milestone.fr.position}
                  </p>
                </div>
                <p className="text-iron-50 flex items-center gap-2 text-sm">
                  <CalendarDays size={16} />
                  {milestone.fr.startMonth} {milestone.fr.startYear} - {milestone.fr.endMonth}{" "}
                  {milestone.fr.endYear}
                </p>
                <Button
                  type="button"
                  icon={<ArrowRight />}
                  size="sm"
                  variant="secondary"
                  className="justify-end self-end text-iron-50"
                  onClick={() => handleOpenDetails(milestone)}
                />
              </div>
              <div
                className={`milestone-tag hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-iron-300 rounded-full p-2 ${
                  milestone.isEducation === false ? "bg-hibiscus-700" : "bg-persian-green-700"
                }`}
              >
                {milestone.isEducation === false ? (
                  <Briefcase size={32} className="text-iron-50" />
                ) : (
                  <University size={32} className="text-iron-50" />
                )}
              </div>
            </motion.div>
          );
        })}
        {selectedMilestone && (
          <Dialog
            milestoneData={selectedMilestone}
            onClose={() => handleCloseDetails()}
            style={
              selectedMilestone?.isEducation === false
                ? milestoneIsNotEducationColors
                : milestoneIsEducationColors
            }
          />
        )}
      </div>
    </div>
  );
}
