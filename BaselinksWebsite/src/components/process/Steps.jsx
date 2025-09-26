import React from "react";
import { STEP1 } from "../../constants";

const Steps = () => {
  return (
    <div className="px-4 mt-40">
      <div></div>

      <div className="flex flex-col text-left ">
        <div className="space-y-6">
          <h3 className="text-2xl/15 px-4 font-trajan text-hero-text">
            Discover
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP1})`,
            }}
            className="bg-cover bg-no-repeat rounded-xl w-70 h-33.5 p-4"
          >
            <div className="p-6 w-33.5 h-19.5 bg-inner-card rounded-[7px] text-white">
              <p className="text-[10px]">
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
