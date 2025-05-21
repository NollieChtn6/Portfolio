import { X, CalendarDays, GraduationCap } from "lucide-react";
import { Button } from "./Button";
import type { MilestoneType } from "@/@types/types";

export interface DialogProps {
  //isOpen: boolean;
  milestoneData: MilestoneType;
  onClose: () => void;
  style: {
    primary: string;
    secondary: string;
  };
}

export default function Dialog({ milestoneData, onClose, style }: DialogProps) {
  return (
    <div className="overlay bg-iron-950/70 w-full h-full fixed inset-0 flex items-center justify-center">
      <div className="dialog flex-col fixed w-full h-full md:w-[500px] md:h-[600px] bg-iron-600 border border-1 border-iron-50 rounded-none md:rounded-lg p-4 md:p-6 shadow-lg space-y-6 overflow-y-auto">
        <Button
          type="button"
          icon={<X />}
          className="absolute top-3 right-3"
          variant="icon"
          onClick={onClose}
        />
        <div className="dialog-header">
          <h3 className={`${style.primary} text-2xl font-semibold`}>
            {milestoneData.fr.organisation} ({milestoneData.fr.city})
          </h3>
          <p className={`${style.secondary} text-base font-semibold`}>
            {milestoneData.fr.position}
          </p>
        </div>
        <hr className="border-1 border-iron-50" />

        <div className="dialog-dates flex-col space-y-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="text-iron-50" size={20} />
            <p className="text-gray-50 flex items-center gap-2 text-sm">
              {milestoneData.fr.startMonth} {milestoneData.fr.startYear} -{" "}
              {milestoneData.fr.endMonth} {milestoneData.fr.endYear}{" "}
            </p>
          </div>
          {milestoneData.fr.details.diploma && (
            <div className="milestone-diploma flex items-center gap-2">
              <GraduationCap className="text-iron-50" size={20} />
              <p className="text-gray-50 flex items-center gap-2 text-sm">
                {milestoneData.fr.details.diploma} ({milestoneData.fr.details.yearOfGraduation})
              </p>
            </div>
          )}
        </div>
        <div className="milestone-details-container space-y-4">
          {milestoneData.fr.details.positionDescription?.length > 0 ? (
            milestoneData.fr.details.positionDescription.map((job) => (
              <div key={job.id} className="job-description space-y-4">
                <h4 className="text-lg font-semibold text-iron-950">{job.title}</h4>
                {job.tasks?.length > 0 ? (
                  <ul className="list-disc pl-5 text-iron-50 text-sm space-y-1">
                    {job.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-iron-50 text-sm">—</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-iron-50 text-sm">Aucune description disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
}
