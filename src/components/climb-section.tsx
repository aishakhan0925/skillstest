import React, { useState } from "react";
import { NumberTitles } from "./number-titles";
import Tabs from "./tabs";
import bgImage from "../assets/images/schedule-bg.png";
import { ScheduleCard } from "./schedule-card";

type Tab = "mountain1" | "mountain2";

const ClimbSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("mountain1"); // Initialize with the first tab active

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const mountain1Data = {
    dates: ["25 Nov, 2016", "28 Nov, 2016", "18 Dec, 2016", "7 Jan, 2017"],
    events: [
      "Vestibulum viverra",
      "Vestibulum viverra",
      "Vestibulum viverra",
      "Vestibulum viverra",
    ],
  };

  const mountain2Data = {
    dates: ["8 Jan 2017", "10 Jan 20217", "20 Jan 2017", "30 Jan 2017"],
    events: [
      "Vestibulum viverra",
      "Vestibulum viverra",
      "Vestibulum viverra",
      "Vestibulum viverra",
    ],
  };

  return (
    <div id="teams-section">
      <div className="bg-white">
        <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-6 items-center px-5 sm:px-0">
          <div className="col-span-1">
            <NumberTitles
              number={"02"}
              title={"Climb"}
              titleMarginLeft="left-28"
            />
          </div>
          <div className="col-span-5">
            <p className="pl-20 font-thin leading-8 tracking-wide text-[#3c4b6a] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              nam tenetur quos unde ducimus esse harum, perspiciatis quas fuga,
              corporis odio fugiat accusantium commodi suscipit sapiente iure
              nostrum architecto voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#3c4b6a]">
        <div className="container mx-auto">
          <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
        </div>
      </div>
      <div
        className="bg-cover h-auto lg:h-[100vh] bg-no-repeat pt-20 bg-bottom"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto p-5 md:px-10">
          {activeTab === "mountain1" && (
            <ScheduleCard
              dates={mountain1Data.dates}
              events={mountain1Data.events}
            />
          )}
          {activeTab === "mountain2" && (
            <ScheduleCard
              dates={mountain2Data.dates}
              events={mountain2Data.events}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClimbSection;
