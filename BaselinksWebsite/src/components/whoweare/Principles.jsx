import React from "react";
import { ROT, GEAR, MISSION } from "../../constants";

const Principles = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex relative justify-center items-center size-70 text-black">
        <img src={ROT} className="animate-spin" />
        <div className="">
          <img
            src={GEAR}
            className="absolute border-2 border-border-color left-1/2 top-1/2 size-42 object-cover rounded-full -translate-x-1/2 -translate-y-1/2 transform"
          />
        </div>
      </div>
      <div className="relative space-y-4 rounded-3xl pb-10 px-6 border-2 border-border-color text-center bg-story w-82 h-82.5 sm:w-100 flex flex-col items-center justify-center">
        {/* <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div> */}
        <div className="bg-principle rounded-full -mt-10 size-28 flex items-center justify-center">
          <img
            src={MISSION}
            className="border-2 border-border-color object-cover rounded-full size-20"
          />
        </div>
        <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
          Mission
        </h4>
        <p className="text-hero-text text-[20px]/6 z-20">
          To develop innovative designs and digital solutions that serve,
          educate, and inspire, ensuring our clients realize the full potential
          of their brands.
        </p>
      </div>
    </div>
  );
};

export default Principles;
