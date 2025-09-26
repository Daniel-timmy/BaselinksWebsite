import React from "react";
import Hero from "../components/whoweare/Hero";
import Header from "../components/Header";
import Approach from "../components/whoweare/Approach";
import Story from "../components/whoweare/Story";
import Footer from "../components/Footer";
import WhoWeServe from "../components/whoweare/WhoWeServe";
import Team from "../components/whoweare/Team";
import Partners from "../components/whoweare/Partners";
import Principles from "../components/whoweare/Principles";

const WhoWeAre = () => {
  return (
    <div>
      <div className="fixed w-full z-50 top-0">
        <Header />
      </div>{" "}
      <Hero />
      <Story />
      <Approach />
      <WhoWeServe />
      <Team />
      <Partners />
      <Principles />
      <Footer />
    </div>
  );
};

export default WhoWeAre;
