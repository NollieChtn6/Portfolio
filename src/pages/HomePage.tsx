import { ArrowRight, Download } from "lucide-react";

import cv from "../assets/CHATAIN_SIX_CV_2025.pdf";
import { Button } from "@/ui/Button";
import { Twine } from "@/ui/Twine";
import { downloadFile } from "../utils/downloadFile";

const LABEL_ROWS = [
  { term: "Profil", detail: "Développeuse web fullstack" },
  { term: "Origine", detail: "Paris" },
  { term: "Variétés", detail: "Angular, Laravel, React, Node.js" },
  { term: "Recherche", detail: "Des projets à impact social et environnemental positif" },
];

export function HomePage() {
  const handleFileDownload = (): void => {
    downloadFile(cv, "CHATAIN_SIX_Web_developer_CV_2025.pdf");
  };

  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-5 pb-16 pt-6 lg:grid-cols-12 md:px-10">
      <section className="lg:col-span-8">
        <h1 className="display display-name">
          Noëllie
          <br />
          Chatain Six
          <span className="sr-only"> : développeuse web fullstack</span>
        </h1>
        <p className="heading mt-8 max-w-[22ch] text-2xl md:text-3xl" aria-hidden="true">
          Développeuse web fullstack
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            onClick={handleFileDownload}
            icon={<Download aria-hidden="true" size={20} />}
            ariaLabel="Télécharger le CV au format PDF"
          >
            Télécharger mon CV
          </Button>
          <Button
            variant="ghost"
            href="/projects"
            icon={<ArrowRight aria-hidden="true" size={20} />}
          >
            Voir mes projets
          </Button>
        </div>
      </section>

      <section
        aria-label="Fiche de présentation"
        className="stamp-in lg:col-span-4 lg:justify-self-end"
        style={{ "--r": "2.5deg", "--r0": "-6deg", "--i": 2 } as React.CSSProperties}
      >
        <div className="label-card relative w-full max-w-md p-6 md:p-7">
          <span className="hole right-[1.25rem] top-[1.25rem]" aria-hidden="true" />
          <Twine />
          <p className="display text-4xl">NC6</p>
          <dl className="mt-5">
            {LABEL_ROWS.map((row) => (
              <div key={row.term} className="label-row">
                <dt>{row.term}</dt>
                <dd>{row.detail}</dd>
              </div>
            ))}
          </dl>
          <div className="barcode mt-5" aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}
