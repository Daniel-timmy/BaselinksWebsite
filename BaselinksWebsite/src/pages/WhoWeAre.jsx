import React from "react";
import Hero from "../components/whoweare/Hero";
import Header from "../components/Header";
import Approach from "../components/whoweare/Approach";
import Story from "../components/whoweare/Story";

const WhoWeAre = () => {
  return (
    <div>
      <div className="fixed w-full z-50 top-0">
        <Header />
      </div>{" "}
      <Hero />
      <Story />
      <Approach />
    </div>
  );
};

export default WhoWeAre;
