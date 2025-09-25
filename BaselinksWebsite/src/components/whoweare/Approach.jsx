import React from "react";
import { APPROACH, APPROACH1, APPROACH2, ABG } from "../../constants";

const Approach = () => {
  return (
    <div className="space-y-14 flex flex-col mt-40 w-screen">
      <div className="space-y-3">
        <h2 className="font-trajan font-bold text-[32px]/10 sm:text-[40px]/15 lg:text-6xl/20 text-baselinks-yellow">
          The Baselinks Approach
        </h2>
        <p className="text-[16px]/5 lg:text-[20px]/6 text-hero-text px-4">
          To deliver on our promise, we focus on three core principles:
        </p>
      </div>
      <div className="flex flex-col space-y-15.5  ">
        <div className="px-4 space-y-10 flex max-sm:flex-col justify-between sm:gap-25">
          <div className="space-y-4 text-left lg:w-169">
            <h4 className="text-black font-trajan font-bold text-2xl/7.5 lg:text-[40px]/15">
              <span className="text-baselinks-teal">Data</span>-driven Solution
            </h4>
            <p className="text-hero-text text-[16px]/5 lg:text-[20px]/6">
              Every solution we architect, no matter how innovative, is embedded
              with clear parameters for tracking performance. This allows us to
              measure what matters, adapt in real-time, and prove our impact on
              your bottom line. We see the entire landscape and build with a
              holistic, data-driven perspective.
            </p>
          </div>
          <img src={APPROACH} />
        </div>
        <div
          className="px-4 bg-cover -mt-10 space-y-10 flex max-sm:flex-col justify-between sm:gap-25 sm:flex-row-reverse
          "
          style={{
            backgroundImage: `url(${ABG})`,
          }}
        >
          <div className="space-y-4 text-left lg:w-169">
            <h4 className="text-black font-trajan font-bold text-2xl/7.5 lg:text-[40px]/15">
              Engineering <span className="text-baselinks-teal">Systems</span>{" "}
              for Sustainable Growth:
            </h4>
            <p className="text-hero-text text-[16px]/5 lg:text-[20px]/6">
              Goals are destinations; systems are the engines that get you
              there. We design and implement robust, adaptive systems that are
              meticulously matched to your objectives. These frameworks aren't
              rigid, they're built to be responsive, evolving with market shifts
              and new challenges to ensure long-term, self-perpetuating growth.
            </p>
          </div>
          <img src={APPROACH1} className="size-89 lg:size-123" />
        </div>
        <div className="px-4 space-y-10 flex max-sm:flex-col justify-between sm:gap-25">
          <div className="space-y-4 text-left lg:w-169">
            <h4 className="text-black font-trajan font-bold text-2xl/7.5 lg:text-[40px]/15">
              <span className="text-baselinks-teal">Innovation</span>-driven
              Solution as a Standard:
            </h4>
            <p className="text-hero-text text-[16px]/5 lg:text-[20px]/6">
              Where others see a client's problem, we see an opportunity to set
              a new benchmark for excellence. Our dedication to our clients is
              uncompromising. We don't just treat the symptoms; our process
              involves a deep diagnostic approach to uncover the root cause,
              allowing us to build foundational solutions that solve today's
              challenges and prevent tomorrow's.
            </p>
          </div>
          <img src={APPROACH2} className="size-89 lg:size-123" />
        </div>
      </div>
    </div>
  );
};

export default Approach;
