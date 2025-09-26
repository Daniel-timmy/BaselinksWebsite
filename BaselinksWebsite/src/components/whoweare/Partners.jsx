import React from "react";
import { CUBE } from "../../constants";

const Partners = () => {
  return (
    <div className="w-screen mt-40">
      <div className=" lg:h-136  flex lg:justify-between max-lg:flex-col py-14 px-4 gap-12">
        <div className="h-full w-full sm:w-116 lg:h-full lg:w-1/2 ">
          <img src={CUBE} className="h-full w-full object-contain" />
        </div>
        <div className="gap-4 flex sm:w-154 flex-col lg:w-1/2 ">
          <h3 className="font-trajan text-[40px]/15 sm:text-6xl/20 text-black text-left">
            Let's be partners in growth
          </h3>
          <p className="text-hero-text text-left text-[20px]/6 sm:text-[20px]/5 -tracking-tight">
            The point of a new partner isn't just to move forward, it's to
            ascend. We're the partner that takes you to new heights.
          </p>
          <button className="mt-14 bg-baselinks-teal hover:opacity-70 cursor-pointer w-fit px-8 space-x-3 rounded-3xl font-bold text-md py-2.5 flex items-center gap-3">
            Take the First Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
