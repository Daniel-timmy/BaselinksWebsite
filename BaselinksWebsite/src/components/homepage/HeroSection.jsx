import React, { useState, useEffect } from "react";
import Header from "../Header";
import { CAROUSEL_IMAGES } from "../../constants";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-1/1 min-w-[100vw] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${CAROUSEL_IMAGES[currentImage]})`,
      }}
    >
      <Header />
      <div className="flex flex-col mt-48 sm:mt-42 lg:mt-24 max-w-full py-6 px-4 md:p-6 lg:px-8 space-y-28 max-sm:items-center">
        <div className="hidden sm:block bg-white/25 backdrop-blur-xs w-1/1 lg:w-fit rounded-3xl p-6 text-left space-y-8">
          <p className="text-black font-trajan text-bold text-5xl/10 lg:text-7xl/25">
            Integrated <span className="text-baselinks-teal">Solutions...</span>{" "}
          </p>
        </div>

        <div className="sm:hidden block bg-white/25 backdrop-blur-xs h-52 w-86 rounded-3xl p-6 text-left space-y-8">
          <p className="text-black font-trajan text-bold text-3xl/10">
            Integrated <span className="text-baselinks-teal">Solutions</span>{" "}
            That Amplify Your <span className="text-amber-400">Business</span>
          </p>
        </div>
        <div className="bg-white/25 backdrop-blur-xs h-47 sm:h-42 lg:h-50 w-86 sm:w-98 rounded-3xl p-6 text-left space-y-8">
          <p className="text-hero-text text-md lg:text-xl/6">
            Baselinks is your all-in-one partner for branding, digital
            marketing, media, and web development.
          </p>
          <button className="block bg-baselinks-teal px-8 space-x-3 rounded-3xl font-bold text-md py-2.5">
            Start Your Journey
          </button>
        </div>

        <div className="hidden sm:block bg-white/25 backdrop-blur-xs w-1/1 lg:w-fit rounded-3xl p-6 text-left space-y-8 ml-auto">
          <p className="font-trajan text-bold text-[42px] lg:text-7xl/25">
            ...That Amplify Your{" "}
            <span className="text-amber-400">Business</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
