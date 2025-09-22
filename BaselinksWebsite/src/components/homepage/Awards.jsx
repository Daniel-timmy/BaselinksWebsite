import React from "react";
import { AWARD } from "../../constants";

const Awards = () => {
  return (
    <div className="my-20 min-w-[100vw] sm:my-40 lg:my-60 px-8 space-x-8 sm:space-x-10 h-69 sm:h-138 lg:h-143">
      <p className="font-trajan text-black text-center font-bold text-2xl/7.5 sm:text-5xl/10 lg:text-6xl/20">
        Awards And Recognition
      </p>
      <div className=" flex flex-col items-center">
        <img src={AWARD} className="sm:w-140 lg:w-155" />
        <div className="w-80 sm:w-130 lg:w-150 h-7 flex items-center justify-center sm:h-11.5  rounded-full -mt-3 sm:-mt-5 border-awards border-1 bg-awards/8">
          <p className="text-awards text-md py-1">Marketing Edge Award 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
