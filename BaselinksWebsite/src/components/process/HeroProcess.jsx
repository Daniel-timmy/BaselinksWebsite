import React from "react";

const Hero = () => {
  return (
    <div className="mt-36 px-4 space-y-6 w-screen">
      <h5 className="font-trajan text-[32px]/10 sm:text-[40px]/15 lg:text-[60px]/20 text-center text-black sm:px-10">
        How We Make It
        <span className="text-baselinks-yellow"> Happen</span>
      </h5>
      <p className="text-[16px]/5 text-hero-text lg:text-[20px]/6 sm:w-161">
        Since 2008, our team has refined a four-step approach, blending creative
        mastery with technical precision to deliver standout results with
        tailored solutions.
      </p>
    </div>
  );
};

export default Hero;
