import VerticalTimeline from "../userinterface/timeline";

function Timeline() {
  return (
    <main className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="flex w-full md:w-1/12 h-16 md:h-auto items-center justify-center">
        <h2 className="page-title">Parcours</h2>
      </div>
      <div className="timeline-section-container flex flex-col w-full overflow-y-auto p-3">
        <VerticalTimeline />
      </div>
    </main>
  );
}

export default Timeline;
