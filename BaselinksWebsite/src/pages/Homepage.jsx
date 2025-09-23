import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import Awards from "../components/homepage/Awards";
import Header from "../components/Header";
import Partners from "../components/homepage/Partners";
import Achievements from "../components/homepage/Achievements";

const Homepage = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <Awards />
      <Partners />
      <Achievements />

      {/* <Awards /> */}
    </div>
  );
};

export default Homepage;
