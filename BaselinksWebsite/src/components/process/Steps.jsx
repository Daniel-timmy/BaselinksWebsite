import React from "react";
import { STEP1, STEP2, STEP3, STEP4 } from "../../constants";

const Steps = () => {
  return (
    <div className="px-4 mt-40 w-screen flex">
      <div></div>

      <div className="flex flex-col text-left w-screen sm:space-y-15 space-y-10">
        <div className="space-y-6 overflow-hidden">
          <h3 className="text-xl/15 sm:text-3xl/15 lg:text-5xl/20 px-4 font-trajan text-hero-text">
            Discover
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP1})`,
            }}
            className="relative group flex flex-col justify-end bg-cover bg-no-repeat rounded-xl sm:rounded-[32px] w-full h-33.5 sm:w-160.5 sm:h-76.5 lg:w-281 lg:h-134.5 p-4"
          >
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0  lg:opacity-20 lg:group-hover:opacity-0 transition-opacity duration-300 z-0"></div>

            <div className="p-6 w-76.5 lg:w-134.5 bottom-0 bg-inner-card rounded-[7px] lg:rounded-2xl text-white lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              {/* <div className="p-6 bg-inner-card rounded-[7px] lg:rounded-2xl text-white w-full"> */}
              <p className="text-[12px] lg:text-xl/6 font-medium">
                We dive deep into your goals, audience, and challenges,
                uncovering your brand’s unique story through insightful
                consultations and research
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 relative overflow-hidden">
          <h3 className="text-xl/15 sm:text-3xl/15 lg:text-5xl/20 px-4 font-trajan text-hero-text">
            Strategy
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP2})`,
            }}
            className="group flex flex-col justify-end bg-cover bg-no-repeat rounded-xl sm:rounded-[32px] w-full h-33.5 sm:w-160.5 sm:h-76.5 lg:w-281 lg:h-134.5 p-4"
          >
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0  lg:opacity-20 lg:group-hover:opacity-0 transition-opacity duration-300 z-0"></div>

            <div className="p-6 w-76.5 lg:w-134.5 bottom-0 bg-inner-card rounded-[7px] lg:rounded-2xl text-white lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <p className="text-[12px] lg:text-xl/6 font-medium">
                We craft a dynamic roadmap, fusing creativity with data-driven
                insights to define your identity, positioning, and objectives
                with unmatched clarity
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 relative overflow-hidden">
          <h3 className="text-xl/15 sm:text-3xl/15 lg:text-5xl/20 px-4 font-trajan text-hero-text">
            Design
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP3})`,
            }}
            className="group flex flex-col justify-end bg-cover bg-no-repeat rounded-xl sm:rounded-[32px] w-full h-33.5 sm:w-160.5 sm:h-76.5 lg:w-281 lg:h-134.5 p-4"
          >
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0  lg:opacity-20 lg:group-hover:opacity-0 transition-opacity duration-300 z-0  lg:pointer-events-none lg:group-hover:pointer-events-auto"></div>

            <div className="p-6 w-76.5 lg:w-134.5 bottom-0 bg-inner-card rounded-[7px] lg:rounded-2xl text-white lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <p className="text-[12px] lg:text-xl/6 font-medium">
                Our expert team brings your vision to life with premium logos,
                rebranding, and digital innovations, refining every detail based
                on your feedback for perfection
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 relative overflow-hidden">
          <h3 className="text-xl/15 sm:text-3xl/15 lg:text-5xl/20 px-4 font-trajan text-hero-text">
            Deliver
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP4})`,
            }}
            className=" group flex flex-col justify-end bg-cover bg-no-repeat rounded-xl sm:rounded-[32px] w-full h-33.5 sm:w-160.5 sm:h-76.5 lg:w-281 lg:h-134.5 p-4"
          >
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0  lg:opacity-20 lg:group-hover:opacity-0 transition-opacity duration-300 z-0"></div>

            <div className="p-6 w-76.5 lg:w-134.5 bottom-0 bg-inner-card rounded-[7px] lg:rounded-2xl text-white lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <p className="text-[12px] lg:text-xl/6 font-medium">
                We dive deep into your goals, audience, and challenges,
                uncovering your brand’s unique story through insightful
                consultations and research
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
