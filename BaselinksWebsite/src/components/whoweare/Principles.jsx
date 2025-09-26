import React from "react";
import { ROT, GEAR, MISSION, VISION, PURPOSE } from "../../constants";

const Principles = () => {
  return (
    <div className="flex flex-col items-center w-screen py-10 bg-card-principle">
      <div className="lg:hidden space-y-20  grid grid-cols-1 items-center  justify-items-center sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 sm:space-y-5 ">
        <div className="flex relative sm:col-span-2 lg:col-span-3 justify-center items-center size-86 sm:size-111 text-black">
          <img src={ROT} className="animate-spin" />
          <div className="">
            <img
              src={GEAR}
              className="absolute border-2 border-border-color left-1/2 top-1/2 size-48 sm:size-62.2 object-cover rounded-full -translate-x-1/2 -translate-y-1/2 transform"
            />
          </div>
        </div>
        <div className="relative space-y-4 rounded-3xl pb-10 px-6 border-2 border-border-color text-center bg-story w-82 h-82.5 sm:w-100 flex flex-col items-center justify-center max-sm:mt-10">
          <div className="bg-principle rounded-full absolute -top-15 size-28 flex items-center justify-center">
            <img
              src={VISION}
              className="border-2 border-border-color object-cover rounded-full size-20"
            />
          </div>
          <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
            Vision
          </h4>
          <p className="text-hero-text text-[16px]/5 z-20">
            To be recognized as a global leader in branding and business
            consultancy, empowering clients to achieve their goals through
            creativity and strategic insight.
          </p>
        </div>
        <div className="relative space-y-4 rounded-3xl pb-10 px-4 border-2 border-border-color text-center bg-story w-82 h-82.5 sm:w-100 flex flex-col items-center justify-center">
          <div className="bg-principle rounded-full absolute -top-15 size-28 flex items-center justify-center">
            <img
              src={PURPOSE}
              className="border-2 border-border-color object-cover rounded-full size-20"
            />
          </div>
          <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
            Purpose
          </h4>
          <p className="text-hero-text text-[16px]/5 z-20">
            To empower visionaries. We were born from a restless need to build,
            and we exist to provide the strategic and creative firepower that
            turns our clients' boldest dreams into tangible reality.
          </p>
        </div>
        <div className="relative space-y-4 rounded-3xl pb-10 px-6 border-2 border-border-color text-center bg-story w-82 h-82.5 sm:w-100 flex flex-col items-center justify-center">
          <div className="bg-principle rounded-full absolute -top-15 size-28 flex items-center justify-center">
            <img
              src={MISSION}
              className="border-2 border-border-color object-cover rounded-full size-20"
            />
          </div>
          <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
            Mission
          </h4>
          <p className="text-hero-text text-[16px]/5 z-20">
            To develop innovative designs and digital solutions that serve,
            educate, and inspire, ensuring our clients realize the full
            potential of their brands.
          </p>
        </div>
      </div>
      <div className=" max-lg:hidden space-y-20  grid grid-cols-1 items-center  justify-items-center sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 sm:space-y-5 ">
        <div className="group relative space-y-4 rounded-3xl pb-10 px-6 border-2 border-border-color text-center bg-story w-82 h-82.5 sm:w-100 flex flex-col items-center justify-center max-sm:mt-10">
          <div className="bg-principle lg:opacity-40 lg:group-hover:opacity-100 transition-all ease-in-out duration-600 lg:-top-8 group-hover:-top-15 rounded-full absolute -top-15 size-28 flex items-center justify-center">
            <img
              src={VISION}
              className="border-2 border-border-color object-cover rounded-full size-20"
            />
          </div>
          <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
            Vision
          </h4>
          <p className="text-hero-text text-[16px]/5 z-20">
            To be recognized as a global leader in branding and business
            consultancy, empowering clients to achieve their goals through
            creativity and strategic insight.
          </p>
        </div>
        <div className="space-y-25">
          <div className="flex relative sm:col-span-2 lg:col-span-3 justify-center items-center size-86 sm:size-111 text-black">
            <img src={ROT} className="animate-spin" />
            <div className="">
              <img
                src={GEAR}
                className="absolute border-2 border-border-color left-1/2 top-1/2 size-48 sm:size-62.2 object-cover rounded-full -translate-x-1/2 -translate-y-1/2 transform"
              />
            </div>
          </div>
          <div className="group relative space-y-4 rounded-3xl pb-10 px-4 border-2 border-border-color text-center bg-story w-82 h-82.5 sm:w-100 flex flex-col items-center justify-center">
            <div className="bg-principle lg:opacity-40 lg:group-hover:opacity-100 transition-all ease-in-out duration-600 lg:-top-8 group-hover:-top-15 rounded-full absolute -top-15  size-28 flex items-center justify-center">
              <img
                src={PURPOSE}
                className="border-2 border-border-color object-cover rounded-full size-20"
              />
            </div>
            <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
              Purpose
            </h4>
            <p className="text-hero-text text-[16px]/5 z-20">
              To empower visionaries. We were born from a restless need to
              build, and we exist to provide the strategic and creative
              firepower that turns our clients' boldest dreams into tangible
              reality.
            </p>
          </div>
        </div>

        <div className="group relative space-y-4 rounded-3xl pb-10 px-6 border-2 border-border-color text-center bg-story w-82 h-82.5 sm:w-100 flex flex-col items-center justify-center">
          <div className="bg-principle lg:opacity-40 lg:group-hover:opacity-100 transition-all ease-in-out duration-600 lg:-top-8 group-hover:-top-15 rounded-full absolute -top-15 size-28 flex items-center justify-center">
            <img
              src={MISSION}
              className="border-2 border-border-color object-cover rounded-full size-20"
            />
          </div>
          <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
            Mission
          </h4>
          <p className="text-hero-text text-[16px]/5 z-20">
            To develop innovative designs and digital solutions that serve,
            educate, and inspire, ensuring our clients realize the full
            potential of their brands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principles;
