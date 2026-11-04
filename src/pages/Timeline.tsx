import { Briefcase, GraduationCap } from "lucide-react";
import { useMemo, useState } from "react";

import educationData from "@/data/milestones_education.json";
import jobsData from "@/data/milestones_jobs.json";
import type { EducationalMilestone, ProfessionalMilestone } from "@/@types/types";

type Kind = "job" | "education";
type Filter = "all" | Kind;

interface Entry {
  kind: Kind;
  number: number;
  organisation: string;
  heading: string;
  note: string;
  city: string;
  start: number;
  period: string;
  tasks: string[];
}

const MONTHS = [
  "janvier",
  "fevrier",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "decembre",
];

const monthIndex = (name: string): number =>
  Math.max(0, MONTHS.indexOf(name.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()));

const toTime = (year: number, month: string): number => year + monthIndex(month) / 12;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Tout" },
  { value: "job", label: "Expériences" },
  { value: "education", label: "Formation" },
];

const buildEntries = (): Entry[] => {
  const jobs = (jobsData as ProfessionalMilestone[]).map((job) => ({
    kind: "job" as const,
    organisation: job.organisation,
    heading: job.position,
    note: job.details.positionType,
    city: job.city,
    start: toTime(job.startYear, job.startMonth),
    period: `${job.startMonth} ${job.startYear} – ${job.endYear ? `${job.endMonth} ${job.endYear}` : "aujourd’hui"}`,
    tasks: job.details.tasks,
  }));
  const schools = (educationData as EducationalMilestone[]).map((school) => ({
    kind: "education" as const,
    organisation: school.organisation,
    heading: school.title,
    note: school.diploma,
    city: school.city,
    start: toTime(school.startYear, school.startMonth),
    period:
      school.startYear === school.endYear && school.startMonth === school.endMonth
        ? `${school.startMonth} ${school.startYear}`
        : `${school.startMonth} ${school.startYear} – ${school.endMonth} ${school.endYear}`,
    tasks: [],
  }));
  return [...jobs, ...schools]
    .sort((a, b) => a.start - b.start)
    .map((entry, index) => ({ ...entry, number: index + 1 }));
};

const W = 1000;
const H = 220;
const PAD = 40;

/** Courbe de torréfaction : chaque étape est un point, dans l'ordre du temps. */
function RoastCurve({ entries }: { entries: Entry[] }) {
  const first = entries[0].start;
  const last = new Date().getFullYear() + new Date().getMonth() / 12;
  const points = entries.map((entry, index) => ({
    x: PAD + ((entry.start - first) / (last - first)) * (W - PAD * 2),
    y: H - PAD - (index / (entries.length - 1)) * (H - PAD * 2),
    number: entry.number,
    kind: entry.kind,
  }));
  const path = points.reduce((acc, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    const prev = points[index - 1];
    const mid = (prev.x + point.x) / 2;
    return `${acc} C ${mid} ${prev.y}, ${mid} ${point.y}, ${point.x} ${point.y}`;
  }, "");
  const years = Array.from(
    { length: Math.floor(last) - Math.ceil(first) + 1 },
    (_, i) => Math.ceil(first) + i,
  ).filter((_, i, all) => all.length < 9 || i % 2 === 0);

  return (
    <svg
      viewBox={`0 0 ${W} ${H + 24}`}
      role="img"
      aria-label="Courbe chronologique de mon parcours, de la première à la dernière étape"
      className="w-full overflow-visible"
    >
      {years.map((year) => {
        const x = PAD + ((year - first) / (last - first)) * (W - PAD * 2);
        return (
          <g key={year}>
            <line x1={x} x2={x} y1={PAD / 2} y2={H - 12} stroke="currentColor" opacity="0.28" strokeDasharray="3 6" />
            <text x={x} y={H + 14} textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor" style={{ fontVariantNumeric: "tabular-nums" }}>
              {year}
            </text>
          </g>
        );
      })}
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        className="curve-line"
        pathLength={1200}
        style={{ "--len": 1200 } as React.CSSProperties}
      />
      {points.map((point) => (
        <g key={point.number}>
          {point.kind === "job" ? (
            <circle cx={point.x} cy={point.y} r="17" fill="var(--chalk)" stroke="var(--ink)" strokeWidth="3" />
          ) : (
            <rect
              x={point.x - 16}
              y={point.y - 16}
              width="32"
              height="32"
              rx="3"
              fill="var(--lime)"
              stroke="var(--ink)"
              strokeWidth="3"
              strokeDasharray="6 3"
              transform={`rotate(45 ${point.x} ${point.y})`}
            />
          )}
          <text x={point.x} y={point.y + 5.5} textAnchor="middle" fontSize="16" fontWeight="800" fill="var(--ink)">
            {point.number}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Timeline() {
  const [filter, setFilter] = useState<Filter>("all");
  const entries = useMemo(buildEntries, []);
  const visible = entries.filter((entry) => filter === "all" || entry.kind === filter).reverse();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 pb-16 pt-6 md:px-10">
      <h1 className="display display-lg">Parcours</h1>

      <div className="mt-10 hidden md:block">
        <RoastCurve entries={entries} />
        <p className="mt-3 flex gap-6 text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="h-4 w-4 rounded-full border-2 border-current bg-chalk" />
            Expérience
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="h-3.5 w-3.5 rotate-45 rounded-[2px] border-2 border-dashed border-current bg-lime" />
            Formation
          </span>
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Filtrer les étapes">
        {FILTERS.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
            className={`btn !min-h-0 !px-5 !py-2 ${filter === item.value ? "" : "btn-ghost"}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <ol className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((entry, index) => (
          <li
            key={`${entry.organisation}-${entry.start}`}
            className="stamp-in"
            style={{ "--r": index % 2 ? "0.6deg" : "-0.6deg", "--r0": "-3deg", "--i": index } as React.CSSProperties}
          >
            <article
              className={`h-full p-6 ${entry.kind === "job" ? "label-card" : "edu-card"}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="caps inline-flex items-center gap-2">
                  {entry.kind === "job" ? (
                    <Briefcase aria-hidden="true" size={16} />
                  ) : (
                    <GraduationCap aria-hidden="true" size={18} />
                  )}
                  N° {entry.number} · {entry.kind === "job" ? "Expérience" : "Formation"}
                </span>
                <span className="caps">{entry.city}</span>
              </div>
              <h2 className="heading mt-4 text-3xl">{entry.organisation}</h2>
              <p className="mt-2 text-lg font-semibold">{entry.heading}</p>
              <p className="caps mt-3">{entry.period}</p>
              {entry.note &&
                (entry.kind === "job" ? (
                  <p className="mt-2 text-base italic">{entry.note}</p>
                ) : (
                  <p className="mt-4 border-t-2 border-dashed border-current pt-3 text-base font-semibold">
                    {entry.note}
                  </p>
                ))}
              {entry.tasks.length > 0 && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-base leading-snug">
                  {entry.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </main>
  );
}
