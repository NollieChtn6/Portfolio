function Projects() {
  return (
    <main className="projects-container flex flex-col md:flex-row max-sm:overflow-y-scroll h-full">
      <div className="projects-title flex w-full h-[10%] md:h-full md:w-[10%] items-center md:justify-center">
        <h2 className="text-woodsmoke-200 md:rotate-180 md:[writing-mode:vertical-rl] text-3xl p-6 uppercase tracking-wide font-mono">
          Projets
        </h2>
      </div>
      <div className="projects-content flex flex-col md:flex-row w-full h-[90%] md:h-full">
        <div className="projects-content-container text-woodsmoke-200 flex flex-col grow md:h-full p-9 md:p-6 md:w-2/4 space-y-6 md:place-content-center">
          <p className="text-content text-md font-light">
            Oups&nbsp;! Cette page est en cours de construction&nbsp;! Elle sera
            bientôt accessible.
          </p>
        </div>
        <div className="projects-img-container flex h-2/4 md:h-full p-9 md:w-2/4 max-sm:hidden place-content-center items-center" />
      </div>
    </main>
  );
}

export default Projects;
