import React from "react";
import { NEWSLETTER_IMAGE } from "../../constants";

const Newsletter = () => {
  return (
    <div
      className="lg:w-screen mx-3 sm:max-lg:mx-5 py-1 px-4 lg:h-fit h-100 mt-38 bg-cover lg:bg-contain bg-no-repeat bg-center rounded-[40px]"
      style={{ backgroundImage: `url(${NEWSLETTER_IMAGE})` }}
    >
      <div className=" lg:h-163 rounded-xl flex flex-col justify-center items-center h-full gap-8">
        <h3 className="font-trajan text-2xl sm:text-[32px] lg:text-5xl">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-sm lg:text-[20px]">
          Get up-to-date insights delivered right into your inbox
        </p>
        <div className="flex h-14 lg:w-126 sm:max-lg:w-100 bg-white/45 backdrop-blur-lg p-1 justify-between lg:py-2 items-center rounded-4xl">
          <input
            className="rounded-l-4xl h-14 pl-1 outline-none w-8/11 text-white "
            // className="rounded-l-4xl h-14 pl-1 outline-none w-8/11 text-white focus:ring-2 focus:ring-white/50"
            placeholder="Enter your email"
          />
          <button className="bg-baselinks-teal hover:opacity-70 w- px-4 rounded-3xl font-bold text-md py-2.5">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
