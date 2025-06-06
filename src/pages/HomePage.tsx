import { Button } from "@/ui/Button";
import { Download } from "lucide-react";
import ScreenComponent from "../components/screen/Screen";

import { downloadFile } from "../utils/downloadFile";

import cv from "../assets/CHATAIN_SIX_CV_2025.pdf";
import { PageTitle } from "@/ui/PageTitle";

export function HomePage() {
  const handleFileDownload = (): void => {
    downloadFile(cv, "CHATAIN_SIX_Web_developer_CV_2025.pdf");
  };

  return (
    <main className="homepage-container flex flex-col md:flex-row max-sm:overflow-y-scroll h-full">
      <PageTitle title="" />
      <section className="homepage-content-left flex flex-col md:flex-row w-full md:w-2/4 p-10">
        <div className="about-text-container text-iron-200 flex flex-col grow md:h-full p-9 md:w-2/4 space-y-6 md:place-content-center place-self-center">
          <h1>Noëllie Chatain Six</h1>
          <h1 className="sr-only">Portfolio de Noëllie Chatain Six</h1>
          <p className="hero-subtitle flex w-[75%] text-sm md:text-md xl:text-xl animate-typing overflow-hidden whitespace-nowrap font-mono border-r-4">
            Développeuse web junior
          </p>
          <p>
            J&rsquo;ai troqué les dictionnaires linguistiques pour les lignes de code.
            <br /> Bienvenue sur mon portfolio&nbsp;!
          </p>
          <div className="homepage-btns-container flex justify-evenly w-full md:w-[60%]">
            <Button
              type="button"
              onClick={handleFileDownload}
              size="md"
              variant="primary"
              icon={<Download aria-hidden="true" />}
              ariaLabel="Télécharger le CV au format PDF"
            >
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </section>
      <section
        className="homepage-content-right flex h-full p-3 md:p-9 md:w-2/4 place-content-center items-center"
        aria-label="Animation représentant un écran d'ordinateur"
      >
        <ScreenComponent />
      </section>
    </main>
  );
}
