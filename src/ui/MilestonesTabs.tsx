import { useState } from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

interface TabsProps {
  tabs: string[];
  onTabChange?: (tab: string) => void;
}

export default function Tabs({ tabs, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  return (
    <div className="flex justify-center w-full space-x-4">
      {tabs.map((tab) => (
        <motion.div
          key={tab}
          layout
          initial={{ opacity: 0.6, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="ghost"
            type="button"
            onClick={() => handleClick(tab)}
            className={`w-1/5 cursor-pointer py-3 text-center text-lg font-mono font-light
              transition-all duration-500
              ${
                activeTab === tab
                  ? "text-iron-50 shadow-[0_0_10px_#7f5af0] hover:shadow-[0_0_20px_#7f5af0]"
                  : "text-iron-100 hover:text-cornflower-blue-400 hover:shadow-none"
              }`}
            aria-current={activeTab === tab ? "page" : undefined}
          >
            {tab}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
