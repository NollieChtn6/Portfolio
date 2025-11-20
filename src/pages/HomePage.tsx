import { Button } from "@/ui/Button";
import { Download } from "lucide-react";

import { downloadFile } from "../utils/downloadFile";

import cv from "../assets/CHATAIN_SIX_CV_2025.pdf";
import DecryptedText from "@/ui/DecryptText";

export function HomePage() {
  const handleFileDownload = (): void => {
    downloadFile(cv, "CHATAIN_SIX_Web_developer_CV_2025.pdf");
  };

  return (
    <main className="homepage-container flex flex-col h-full w-full">
      <section className="homepage-content flex flex-col h-full justify-center pl-8 space-y-8">
        <div className="hero-text-container flex flex-col space-y-4">
          <h1 className="text-4xl tracking-wide">Noëllie Chatain Six</h1>
          <h1 className="sr-only">Portfolio de Noëllie Chatain Six</h1>
          <DecryptedText
            text="Développeuse web fullstack"
            animateOn="view"
            revealDirection="center"
            className="hero-subtitle text-xl font-mono text-navy-blue-200"
            encryptedClassName="text-xl font-mono text-navy-blue-400"
          />
        </div>
        <div className="home-btn-container">
          <Button
            type="button"
            onClick={handleFileDownload}
            size="md"
            variant="ghost"
            icon={<Download aria-hidden="true" />}
            ariaLabel="Télécharger le CV au format PDF"
          >
            Télécharger mon CV
          </Button>
        </div>
      </section>
    </main>
  );
}
