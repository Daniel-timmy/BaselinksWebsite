import React from "react";
import Header from "../components/Header";
import Hero from "../components/process/HeroProcess";
import Footer from "../components/Footer";
import Success from "../components/process/Success";

const Process = () => {
  return (
    <div>
      <div className="fixed w-full z-50 top-0">
        <Header />
      </div>
      <Hero />
      <Success />
      <Footer />
    </div>
  );
};

export default Process;
