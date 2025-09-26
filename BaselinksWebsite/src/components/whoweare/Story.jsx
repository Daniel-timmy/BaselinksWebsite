import React from "react";
import { BALO, CIRCLE } from "../../constants";

const Story = () => {
  return (
    <div
      className="relative rounded-[48px] p-6 lg:p-10 mt-40 w-screen "
      style={{
        backgroundImage: `url(${CIRCLE})`,
      }}
    >
      <div className="absolute rounded-[48px] inset-0 h-full bg-[#F5EBD6] opacity-50  lg:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-300 z-0"></div>

      <div className="rounded-4xl z-10 p-4 space-y-6 flex lg:flex-row-reverse lg:space-x-6  max-lg:flex-col bg-story">
        <div className="py-6 z-10 space-y-4 text-left">
          <h4 className="font-trajan text-[40px]/15 lg:text-[60px]/20 text-baselinks-teal -tracking-tighter">
            The Baselinks Story & Personality
          </h4>
          <p className="text-xl/6 text-hero-text">
            Our story didn't start in a polished boardroom. It began with a
            single slow laptop and the stubborn, restless dream of our founder
            to build something extraordinary out of sheer will. This origin is
            our DNA: a company born from the drive to create powerful solutions,
            regardless of the circumstances.{" "}
          </p>
          <p className="text-xl/6 text-hero-text">
            {" "}
            This is why we excel at crafting custom solutions for challenges
            that others meet with a conventional template. Whether a convenient
            path exists or not, we engineer strategies that are uniquely
            effective for our clients' specific needs.{" "}
          </p>{" "}
          <p className="text-xl/6 text-hero-text">
            Like any top-tier agency, we have the latest technology and tools.
            Unlike them, we possess a ruthless desire to build solutions that
            don't just stand out, they deliver with devastating effectiveness.
            We know that playing by the rules keeps you in the game, which is
            exactly why we don't play the game. Instead, we help you transcend
            the game entirely, turning you into the brand your competitors
            aspire to be.
          </p>
          <p className="text-xl/6 text-hero-text">
            That’s how we deliver your unfair advantage.
          </p>{" "}
        </div>
        <div className="flex z-10 flex-col space-y-4 w-fit lg:w-full text-center items-center  text-black ">
          <img
            src={BALO}
            className="rounded-2xl sm:max-lg:w-66.5 lg:w-111 lg:h-144.5"
          />
          <h6 className="font-trajan text-2xl/6 lg:text-[32px]/10 font-bold">
            Samson Balogun
          </h6>
          <p className="text-[16px]/5 text-hero-text">
            Founder, Baselinks Business Consult
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
