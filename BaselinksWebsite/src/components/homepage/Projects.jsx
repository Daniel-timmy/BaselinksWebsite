import React from "react";
import { PROJECT1 } from "../../constants";

const Projects = () => {
  return (
    <div className="my-20 min-w-screen space-y-14">
      <h1 className="font-trajan text-5xl/15 sm:text-6xl/20 text-black text-center font-bold">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 px-4 sm:px-6 lg:px-8">
        <div
          style={{
            backgroundImage: `url(${PROJECT1})`,
          }}
          className="bg-no-repeat bg-cover bg-center w-full h-86 lg:h-111 lg:w-107 rounded-[20px] lg:overflow-hidden p-3 flex flex-col justify-between space-y-10 group"
        >
          <div className="flex space-x-2 lg:opacity-0 lg:group-hover:opacity-100 lg:-translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
            <button className="w-fit bg-pill text-xs text-pill-text px-3 py-1 h-6.5 rounded-4xl">
              Brand Identity
            </button>
            <button className="w-fit bg-pill text-xs text-pill-text px-3 py-1 h-6.5 rounded-4xl">
              Website Design
            </button>
            <button className="w-fit bg-pill text-xs text-pill-text px-3 py-1 h-6.5 rounded-4xl">
              Printing
            </button>
          </div>
          <div className="space-y-3 p-3 w-full bg-project-banner text-left rounded-xl h-21 text-hero-text lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
            <h6 className="font-trajan font-bold text-2xl/7.5">
              Psaltry International
            </h6>
            <p className="text-lg/5">Revolutionalizing Nigeria's Agro Sector</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
