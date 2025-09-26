import React from "react";
import { BGSERVE, SERVE1, SERVE2, SERVE3, SERVE4 } from "../../constants";

const WhoWeServe = () => {
  return (
    <div className="space-y-10 w-screen lg:px-4 mt-40 flex flex-col items-center">
      <h2 className="font-trajan font-bold text-[32px]/10 sm:text-5xl/15 lg:text-6xl/20">
        Who We <span className="text-baselinks-teal">Serve</span>{" "}
      </h2>
      <div className="xl:w-fit xl:bg-black max-lg:flex max-lg:flex-col justify-center lg:grid lg:grid-cols-2 max-lg:space-y-6 gap-6 items-center  ">
        <div
          style={{
            backgroundImage: `url(${BGSERVE})`,
          }}
          className="flex max-sm:flex-col w-86 sm:w-169 sm:h-81.5 bg-cover pb-6 space-y-7 relative group lg:hover:opacity-100 lg:opacity-80 transition-all duration-300"
        >
          <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-50  lg:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div>

          <div className="sm:h-81.5 z-10 sm:w-73 overflow-hidden">
            <img src={SERVE1} className="sm:w-full sm:h-full object-cover" />
          </div>
          <div className="relative space-y-4 sm:h-81.5 text-left sm:w-96.5 px-8 flex flex-col items-center justify-center">
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div>
            <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
              Business Owners & Entrepreneurs
            </h4>
            <p className="text-hero-text text-[20px]/6 z-20">
              Whether you’re running a small shop or leading a growing company,
              we help you build a brand and online presence that truly stands
              out.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BGSERVE})`,
          }}
          className="flex max-sm:flex-col w-86 sm:w-169 sm:h-81.5 bg-cover pb-6 space-y-7 relative group lg:hover:opacity-100 lg:opacity-80 transition-all duration-300"
        >
          <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-50  lg:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div>

          <div className="sm:h-81.5 z-10 sm:w-73 overflow-hidden">
            <img src={SERVE2} className="sm:w-full sm:h-full object-cover" />
          </div>
          <div className="relative space-y-4 sm:h-81.5 text-left sm:w-96.5 px-8 flex flex-col items-center justify-center">
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div>
            <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
              Startups & Creators
            </h4>
            <p className="text-hero-text text-[20px]/6 z-20">
              Big ideas deserve big impact. We work with founders and innovators
              who need design and strategy that attract investors and win early
              customers.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BGSERVE})`,
          }}
          className="flex max-sm:flex-col w-86 sm:w-169 sm:h-81.5 bg-cover pb-6 space-y-7 relative group lg:hover:opacity-100 lg:opacity-80 transition-all duration-300"
        >
          <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-50  lg:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div>

          <div className="sm:h-81.5 sm:w-73 z-10 overflow-hidden">
            <img src={SERVE3} className="sm:w-full sm:h-full object-cover" />
          </div>
          <div className="relative space-y-4 sm:h-81.5 text-left sm:w-96.5 px-8 flex flex-col items-center justify-center">
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div>
            <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
              Leaders & Professionals
            </h4>
            <p className="text-hero-text text-[20px]/6 z-20">
              From executives to changemakers, we help you create a confident,
              credible image that opens doors and builds trust.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BGSERVE})`,
          }}
          className="flex max-sm:flex-col w-86 sm:w-169 sm:h-81.5 bg-cover pb-6 space-y-7 relative group lg:hover:opacity-100 lg:opacity-80 transition-all duration-300"
        >
          <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-50  lg:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div>

          <div className="sm:h-81.5 sm:w-73 overflow-hidden z-10">
            <img src={SERVE4} className="sm:w-full sm:h-full object-cover" />
          </div>
          <div className="relative space-y-4 sm:h-81.5 text-left sm:w-96.5 px-8 flex flex-col items-center justify-center">
            {/* <div className="absolute inset-0 h-full overflow-visible bg-[#EBEBD6] opacity-50  lg:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div> */}
            <h4 className="text-baselinks-teal z-10 font-trajan font-bold text-2xl/7.5 lg:group-hover:text-baselinks-teal lg:text-black">
              Purpose-Driven Organizations
            </h4>
            <p className="text-hero-text text-[20px]/6 z-20">
              Nonprofits, NGOs, and community projects turn to us to share their
              stories, inspire support, and showcase their impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
