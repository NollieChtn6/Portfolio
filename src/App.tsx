import { useEffect } from "react";
import { Outlet } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import ScreenSize from './components/devComponent/ScreenSize';

import { useProjectsStore } from "./store/projectsStore";
import { useSkillsStore } from "./store/skillsStore";
import { useMilestonesStore } from "./store/milestonesStore";

export function App() {
  const { fetchProjects } = useProjectsStore();
  const { fetchSkills } = useSkillsStore();
  const { fetchMilestones } = useMilestonesStore();

  useEffect(() => {
    fetchMilestones();
    fetchProjects();
    fetchSkills();
  }, [fetchMilestones, fetchProjects, fetchSkills]);
  return (
    <body className="body h-screen w-screen flex flex-col bg-[url('/background/hexagon.svg')]">
      <div className="app-container flex flex-col h-full w-full xl:self-center">
        <Header />
        <Outlet />
        <Footer />
        {/* <ScreenSize /> */}
      </div>
    </body>
  );
}
