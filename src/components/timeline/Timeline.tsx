import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-vertical-timeline-component/style.min.css';
import './timelineStyle.css';

import {
  Briefcase,
  GraduationCap,
  University,
  CalendarDays,
  X,
  CircleChevronRight,
} from 'lucide-react';
import { MilestoneData } from '../../@types/dataTypes';

import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

// import timelineElements from '../../data/data.json';
import milestones from '../../data/milestones.json';

function Timeline() {
  const workIconStyles = { background: '#e7e7e7', color: '#888888' };
  const schoolIconStyles = { background: '#ffcb74', color: '#888888' };
  const arrowStyles = { borderRight: '7px solid  #888888' };

  const [selectedMilestone, setSelectedMilestone] =
    useState<MilestoneData | null>(null);

  const handleClickOnDetails = (item: MilestoneData) => {
    setSelectedMilestone(item);
    console.log(selectedMilestone);
  };

  const handleClickOnClose = () => {
    setSelectedMilestone(null);
  };

  return (
    <main className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="flex w-full md:w-1/12 h-16 md:h-auto items-center justify-center">
        <h2 className="page-title">Parcours</h2>
      </div>
      <div className="timeline-section-container flex flex-col w-full overflow-y-auto p-3">
        <VerticalTimeline className="flex-grow" lineColor="#d1d1d1">
          {(milestones as MilestoneData[]).map((milestoneItem) => {
            const isWorkElement = milestoneItem.isEducation === 'false';
            return (
              <VerticalTimelineElement
                key={milestoneItem.id}
                iconStyle={isWorkElement ? workIconStyles : schoolIconStyles}
                icon={isWorkElement ? <Briefcase /> : <University />}
                className="vertical-timeline-element"
                contentArrowStyle={arrowStyles}
              >
                <div className="timeline-element-content">
                  <h3 className="timeline-title text-3xl uppercase font-mono">
                    {milestoneItem.fr.organisation} • {milestoneItem.fr.city} (
                    {milestoneItem.fr.zipcode})
                  </h3>
                  <p className="timeline-subtitle">
                    {milestoneItem.fr.position}{' '}
                    <span>({milestoneItem.fr.details.positionType})</span>
                  </p>
                  <p className="timeline-range items-center flex">
                    <CalendarDays size={24} className="mr-3" />
                    {milestoneItem.fr.startMonth} {milestoneItem.fr.startYear} —{' '}
                    {milestoneItem.fr.endMonth} {milestoneItem.fr.endYear}
                  </p>
                  {milestoneItem.isEducation &&
                    milestoneItem.fr.details.diploma && (
                      <p className="timeline-diploma items-center flex">
                        <GraduationCap size={24} className="mr-3" />
                        {milestoneItem.fr.details.diploma} (
                        {milestoneItem.fr.details.yearOfGraduation})
                      </p>
                    )}
                  <div className="milestoneItem-bnt-container flex justify-end">
                    {milestoneItem.fr.details.positionDescription &&
                      milestoneItem.fr.details.positionDescription.length >
                        0 && (
                        <AlertDialog>
                          <Button
                            className="details-button flex right-0"
                            variant="ghost"
                            size="icon"
                            onClick={() => handleClickOnDetails(milestoneItem)}
                          >
                            <AlertDialogTrigger>
                              <CircleChevronRight color="#ffcb74" />
                            </AlertDialogTrigger>
                          </Button>
                          <AlertDialogContent>
                            <div className="dialog-header flex justify-end">
                              <Button
                                size="icon"
                                className="flex self-end"
                                onClick={() => handleClickOnClose}
                              >
                                <AlertDialogCancel>
                                  <X />
                                </AlertDialogCancel>
                              </Button>
                            </div>
                            <div className="dialog-content space-y-6">
                              {selectedMilestone && (
                                <>
                                  <h3 className="text-mine-shaft-700">
                                    {selectedMilestone.fr.organisation}
                                  </h3>
                                  <p className="text-grandis-300 font-semibold">
                                    {selectedMilestone.fr.position} (
                                    {selectedMilestone.fr.details.positionType})
                                  </p>
                                  <p className="items-center flex">
                                    <CalendarDays size={24} className="mr-3" />
                                    {selectedMilestone.fr.startMonth}{' '}
                                    {selectedMilestone.fr.startYear} —{' '}
                                    {selectedMilestone.fr.endMonth}{' '}
                                    {selectedMilestone.fr.endYear}
                                  </p>
                                  {selectedMilestone.fr.details.positionDescription.map(
                                    (description) => (
                                      <div key={description.id}>
                                        <h5>{description.title}</h5>
                                        <ul>
                                          {description.tasks.map((task) => (
                                            <li key={selectedMilestone.id}>
                                              •&nbsp;{task}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </>
                              )}
                            </div>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                  </div>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </main>
  );
}

export default Timeline;
