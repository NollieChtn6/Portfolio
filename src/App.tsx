import { useEffect } from "react";
import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ScreenSize from "./components/devComponent/ScreenSize";

import { useWindowSize } from "./customHooks/useWindowSize";
import { useProjectsStore } from "./store/projectsStore";
import { useUserSettingsStore } from "./store/userSettings";

import BackgroundToggler from "./ui/BackgroundToggler";
import LiquidEther from "./ui/LiquidEther";

export function App() {
  const { fetchProjects } = useProjectsStore();

  const { backgroundEnabled } = useUserSettingsStore();

  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <div className="app-wrapper relative h-screen w-screen overflow-hidden">
      <BackgroundToggler />
      <div className={"absolute top-0 left-0 w-full h-full bg-black-950 -z-10 "} />
      <LiquidEther
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        autoDemo={true}
        autoSpeed={1.0}
        autoIntensity={3.0}
        takeoverDuration={0.1}
        autoResumeDelay={0}
        autoRampDuration={0.6}
        className={`${backgroundEnabled ? "" : "hidden"}`}
      />

      <div className="app-container flex flex-col h-full w-full xl:self-center relative z-10">
        <Header />
        <div className="flex h-full w-full bg-transparent overflow-hidden">
          {!isMobile && <NavBar />}
          <Outlet />
        </div>
        <Footer />
        <ScreenSize />
      </div>
    </div>
  );
}
