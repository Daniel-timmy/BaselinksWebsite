import React from "react";
import { BLOG1, BLOG2 } from "../../constants";

const Blog = () => {
  return (
    <div className="space-y-10 px-4 mt-40">
      <h1 className="font-trajan font-bold text-[32px]/10 text-black text-left">
        Our Blog
      </h1>
      <p className="text-md/10 text-black text-left">
        The best analysis of cross-industry updates and trends
      </p>
      <div className="flex w-screen bg-red-400">
        <div
          style={{
            backgroundImage: `url(${BLOG1})`,
          }}
          className="w-1/2 rounded-2xl py-8 px-4 flex flex-col"
        >
          <h5>The best analysis of cross-industry updates and trends</h5>
          <button className="hover:opacity-70 bg-white px-8 space-x-3 rounded-3xl font-bold text-md py-2.5">
            Learn More.
          </button>
          <img className="rounded-xl " src={BLOG2} />
        </div>
        <div
          style={{
            backgroundImage: `url(${BLOG1})`,
          }}
          className="rounded-2xl w-1/2 py-8 px-4 flex flex-col"
        >
          <h5>The best analysis of cross-industry updates and trends</h5>
          <button className="hover:opacity-70 bg-white px-8 space-x-3 rounded-3xl font-bold text-md py-2.5">
            Learn More.
          </button>
          <img className="rounded-xl " src={BLOG2} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
