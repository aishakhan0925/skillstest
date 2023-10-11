import React, { useState } from "react";

interface TabsProps {
  handleTabClick: (tab: Tab) => void;
  activeTab: Tab;
}

type Tab = "mountain1" | "mountain2";

export const Tabs: React.FC<TabsProps> = ({ handleTabClick, activeTab }) => {
  const [isAccordionVisible] = useState(false);


  return (
    <div className="sm:flex items-center">
      <ul className={`sm:flex items-center ${isAccordionVisible ? "hidden" : "block"}`}>
        <li className="cursor-pointer">
          <button
            onClick={() => handleTabClick("mountain1")}
            className={`w-full sm:w-auto uppercase font-bold text-center sm:text-left px-3 py-2 shadow ${
              activeTab === "mountain1"
                ? "bg-white/80 text-[#3c4b6a] underline tracking-wide"
                : "bg-transparent text-white/70"
            } hover:bg-white/80 hover:text-[#3c4b6a] underline hover:underline tracking-wide`}
          >
            mountain 1
          </button>
        </li>
        <li className="cursor-pointer">
          <button
            onClick={() => handleTabClick("mountain2")}
            className={`w-full sm:w-auto uppercase font-bold text-center sm:text-left px-3 py-2 shadow ${
              activeTab === "mountain2"
                ? "bg-white/80 text-[#3c4b6a] underline tracking-wide"
                : "bg-transparent text-white/70"
            } hover:bg-white/80 hover:text-[#3c4b6a] underline hover:underline tracking-wide`}
          >
            mountain 2
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
