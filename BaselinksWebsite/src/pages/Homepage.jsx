import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import Awards from "../components/homepage/Awards";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <Awards />
      {/* <Awards /> */}
    </div>
  );
};

export default Homepage;
