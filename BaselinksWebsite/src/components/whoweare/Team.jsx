import React from "react";
import { TEAM3, TEAM1, TEAM2, TEAM4 } from "../../constants";

const Team = () => {
  return (
    <div className="flex flex-col mt-40 px-4  items-center  space-y-14 w-screen">
      <h2 className="text-hero-text text-left w-full font-trajan font-bold text-[32px]/10 sm:text-5xl/15 lg:text-6xl/20">
        Meet The Team{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center  justify-center lg:grid-cols-3 gap-8 sm:gap-5 xl:w-fit">
        <div className="space-y-6 mb-4">
          <div className="w-86 sm:w-95 lg:w-111 sm:h-128 h-110.5 overflow-hidden">
            <img src={TEAM1} className="h-full w-full object-cover" />
          </div>
          <h6 className="font-trajan text-baselinks-yellow text-2xl/6 lg:text-2xl/10 font-bold">
            Samson Balogun
          </h6>
          <p className="text-[16px]/5 font-medium text-hero-text">
            Creative Director & Founder
          </p>
        </div>
        <div className="space-y-6 mb-4">
          <div className="w-86 sm:w-95 lg:w-111 sm:h-128 h-110.5 overflow-hidden">
            <img src={TEAM2} className="h-full w-full object-cover" />
          </div>
          <h6 className="font-trajan text-baselinks-yellow text-2xl/6 lg:text-2xl/10 font-bold">
            Femi Adebayo{" "}
          </h6>
          <p className="text-[16px]/5 font-medium text-hero-text">
            Operations Manager
          </p>
        </div>
        <div className="space-y-6 mb-4">
          <div className="w-86 sm:w-95 lg:w-111 sm:h-128 h-110.5 overflow-hidden">
            <img src={TEAM3} className="h-full w-full object-cover" />
          </div>
          <h6 className="font-trajan text-baselinks-yellow text-2xl/6 lg:text-2xl/10 font-bold">
            Timileyin Ajayi
          </h6>
          <p className="text-[16px]/5 font-medium text-hero-text">
            Tech & Development Lead
          </p>
        </div>
        <div className="space-y-6 mb-4">
          <div className="w-86 sm:w-95 lg:w-111 sm:h-128 h-110.5 overflow-hidden">
            <img src={TEAM4} className="h-full w-full object-cover" />
          </div>
          <h6 className="font-trajan text-baselinks-yellow text-2xl/6 lg:text-2xl/10 font-bold">
            Williams Daniel
          </h6>
          <p className="text-[16px]/5 font-medium text-hero-text">
            Creative & Design Lead
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
