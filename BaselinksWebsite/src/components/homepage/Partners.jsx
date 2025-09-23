import React from "react";
import { PARTNER_LOGOS } from "../../constants";

const Partners = () => {
  return (
    <div className="min-w-[100vw] my-40 sm:my-60 lg:my-80 px-0 space-y-14 sm:space-y-14 h-59 sm:h-54 lg:h-54 flex flex-col items-center">
      <h3 className="font-trajan text-3xl sm:text-[40px] px-8 lg:text-5xl text-black text-center">
        Partners who count on us
      </h3>
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll">
          <div className="flex shrink-0 space-x-8 sm:space-x-10 lg:space-x-12">
            {PARTNER_LOGOS.map((logo, index) => (
              <img
                key={`set1-${index}`}
                src={logo}
                className="h-20 sm:h-24 lg:h-28 object-contain"
                alt="Partner Logo"
              />
            ))}
          </div>
          <div className="flex shrink-0 space-x-8 sm:space-x-10 lg:space-x-12">
            {PARTNER_LOGOS.map((logo, index) => (
              <img
                key={`set2-${index}`}
                src={logo}
                className="h-20 sm:h-24 lg:h-28 object-contain"
                alt="Partner Logo"
              />
            ))}
          </div>
          <div className="flex shrink-0 space-x-8 sm:space-x-10 lg:space-x-12">
            {PARTNER_LOGOS.map((logo, index) => (
              <img
                key={`set3-${index}`}
                src={logo}
                className="h-20 sm:h-24 lg:h-28 object-contain"
                alt="Partner Logo"
              />
            ))}
          </div>
          <div className="flex shrink-0 space-x-8 sm:space-x-10 lg:space-x-12">
            {PARTNER_LOGOS.map((logo, index) => (
              <img
                key={`set4-${index}`}
                src={logo}
                className="h-20 sm:h-24 lg:h-28 object-contain"
                alt="Partner Logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
