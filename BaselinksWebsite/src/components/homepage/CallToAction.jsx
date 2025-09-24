import React from "react";
import { CTA_IMAGE, IDEA_IMAGE } from "../../constants";

const CallToAction = () => {
  return (
    <div className="w-screen">
      <div
        style={{
          backgroundImage: `url(${CTA_IMAGE})`,
        }}
        className="bg-no-repeat bg-cover lg:h-136 bg-center flex max-lg:flex-col py-14 px-4 gap-12"
      >
        <div className="h-full w-full lg:h-full lg:w-1/2 mx-auto">
          <img src={IDEA_IMAGE} className="h-full w-full object-contain" />
        </div>
        <div className="gap-10 flex flex-col ">
          <h3 className="font-trajan text-4xl/15 sm:text-6xl/20 text-black text-left font-bold">
            Ready to <span className="text-baselinks-teal">transform</span> your
            business?
          </h3>
          <p className="text-hero-text text-left text-lg/5 sm:text-[20px]/5 -tracking-tight">
            Let us build a cohesive strategy that works. Schedule a
            no-obligation brand discovery call today to see how we can amplify
            your business.
          </p>
          <button className=" bg-baselinks-teal hover:opacity-70 cursor-pointer w-fit px-8 space-x-3 rounded-3xl font-bold text-md py-2.5 flex items-center gap-3">
            Book A Free Brand Discovery Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
