import { useState } from "react";
import Tabs from "@/ui/MilestonesTabs";
import { PageTitle } from "@/ui/PageTitle";
import JobCarousel from "@/ui/JobCarousel";
import EducationCarousel from "@/ui/EducationCarousel";
import { motion, AnimatePresence } from "framer-motion";

export function Timeline() {
  const [activeTab, setActiveTab] = useState<"jobs" | "education">("jobs");

  return (
    <main className="timeline-page flex flex-col w-full h-full overflow-hidden space-y-8 p-10">
      <PageTitle title="Parcours" />

      <section className="tabs-container justify-center items-center flex">
        <Tabs
          tabs={["Expériences", "Formation"]}
          onTabChange={(tab) => setActiveTab(tab === "Expériences" ? "jobs" : "education")}
        />
      </section>

      <section className="milestones-container flex justify-center items-center h-[calc(100%-200px)] p-16 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "jobs" ? (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full flex justify-center items-center"
            >
              <JobCarousel />
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full flex justify-center items-center"
            >
              <EducationCarousel />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
