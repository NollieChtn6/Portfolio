import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './timelineStyle.css';

import {
  Briefcase,
  GraduationCap,
  University,
  CalendarDays,
} from 'lucide-react';
import timelineElements from '../../data/data.json';

function Timeline() {
  const workIconStyles = { background: '#565c77', color: '#b5c0d0' };
  const schoolIconStyles = { background: '#1c1a4c', color: '#b5c0d0' };
  const arrowStyles = { borderRight: '7px solid  #1c1a4c' };

  return (
    <main className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="flex w-full md:w-1/12 h-16 md:h-auto items-center justify-center">
        <h2 className="text-woodsmoke-200 md:rotate-180 md:[writing-mode:vertical-rl] text-3xl p-6 uppercase tracking-wide font-mono">
          Parcours
        </h2>
      </div>
      <div className="timeline-section-container flex flex-col w-full overflow-y-auto p-3">
        <VerticalTimeline className="flex-grow" lineColor="#d1d1d1">
          {timelineElements.map((element) => {
            const isWorkElement = element.type === 'work';
            return (
              <VerticalTimelineElement
                key={element.id}
                iconStyle={isWorkElement ? workIconStyles : schoolIconStyles}
                icon={isWorkElement ? <Briefcase /> : <University />}
                className="vertical-timeline-element"
                contentArrowStyle={arrowStyles}
              >
                <div className="timeline-element-content">
                  <h3 className="timeline-title">
                    {element.location} • {element.city} ({element.zipcode})
                  </h3>
                  <p className="timeline-subtitle">
                    {element.position}{' '}
                    {element.details.positionType !== 'formation initiale' && (
                      <span>({element.details.positionType})</span>
                    )}
                  </p>
                  <p className="timeline-range items-center flex">
                    <CalendarDays size={24} className="mr-3" />
                    {element.startMonth} {element.startYear} —{' '}
                    {element.endMonth} {element.endYear}
                  </p>
                  {element.type === 'training' && element.diploma && (
                    <p className="timeline-diploma items-center flex">
                      <GraduationCap size={24} className="mr-3" />
                      {element.diploma} ({element.yearOfGraduation})
                    </p>
                  )}
                  <p className="timeline-description">
                    {element.details.positionDescription}
                  </p>
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
