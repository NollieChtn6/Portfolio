import { Button } from '../ui/button';
import ScreenComponent from './screen/Screen';

function HomePage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 p-6 text-woodsmoke-200 h-full">
      <div className="flex flex-col homepage-left-side space-y-6 p-12 place-content-center">
        <h2 className="hero-title flex w-full text-4xl">Noëllie Chatain Six</h2>
        <p className="hero-subtitle flex w-4/5 text-xl animate-typing overflow-hidden whitespace-nowrap font-mono border-r-4">
          Développeuse web junior
        </p>
        <p>
          J&rsquo;ai troqué les dictionnaires pour les lignes de code. Bienvenue
          sur mon portfolio&nbsp;!
        </p>
        <div className="homepage-btn-container flex w-3/4 self-center justify-around">
          <Button>À propos</Button>
          <Button>Mes projets</Button>
        </div>
      </div>
      <div className="homepage-right-side flex space-y-6 md:p-12 justify-center items-center overflow-y-auto">
        <ScreenComponent />
      </div>
    </main>
  );
}

export default HomePage;
