import { NavLink } from 'react-router-dom';

import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import ScreenComponent from './screen/Screen';

function HomePage() {
  // Source code from: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
  const onButtonClick = () => {
    fetch('../../assets/CHATAIN_SIX_CV_2024.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CHATAIN_SIX_CV.pdf';
        alink.click();
      });
    });
  };
  return (
    <main className="homepage-container flex flex-col md:flex-row max-sm:overflow-y-scroll h-full">
      <div className="homepage-content-left flex flex-col md:flex-row w-full md:w-2/4">
        <div className="about-text-container text-woodsmoke-200 flex flex-col grow md:h-full  p-9 md:w-2/4 space-y-6 md:place-content-center">
          <h1 className="text-woodsmoke-200 text-3xl md:text-4xl uppercase font-mono">
            Noëllie Chatain Six
          </h1>
          <p className="hero-subtitle flex w-4/5 text-lg md:text-xl animate-typing overflow-hidden whitespace-nowrap font-mono border-r-4">
            Développeuse web junior
          </p>
          <p>
            J&rsquo;ai troqué les dictionnaires linguistiques pour les lignes de
            code.
            <br /> Bienvenue sur mon portfolio&nbsp;!
          </p>
          <div className="homepage-btns-container flex justify-evenly w-full md:w-[60%]">
            {/* <NavLink to="/about">
              <Button>À propos</Button>
            </NavLink>
            <NavLink to="/projects">
              <Button>Projets</Button>
            </NavLink> */}
            <Button
              className="w-[200px] space-x-2"
              variant="outline"
              onClick={onButtonClick}
            >
              <Download className="mr-2" />
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
      <div className="homepage-content-right flex h-full p-9 md:w-2/4 place-content-center items-center">
        <ScreenComponent />
      </div>
    </main>
  );
}

export default HomePage;
