import React from "react";
import { NEWSLETTER_IMAGE } from "../../constants";

const Newsletter = () => {
  return (
    <div className="w-screen bg-black py-1 px-4 h-fit">
      <div
        style={{
          backgroundImage: `url(${NEWSLETTER_IMAGE})`,
        }}
        className="bg-no-repeat w-full h-fit mt-38 bg-cover bg-center rounded-full flex flex-col items-center  gap-8"
      >
        {/* <img src={NEWSLETTER_IMAGE} className="w-full" /> */}
        <h3 className="font-trajan text-2xl">Subscribe to Our Newsletter</h3>
        <p> Get up-to-date insights delivered right into your inbox </p>
        <div className="flex h-14 w-75  bg-white/45 backdrop-blur-lg p-1 justify-between lg:py-2 items-center rounded-4xl ">
          <input
            className="rounded-l-4xl h-14 pl-1 outline-none text-white"
            placeholder="Enter your email"
          />
          <button className=" bg-baselinks-teal w-full px-4 space-x-3 rounded-3xl font-bold text-md py-2.5">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
