import React from "react";
import { CAROUSEL_IMAGES } from "../constants";

const HeroSection = () => {
  return (
    <div>
      {CAROUSEL_IMAGES.map((img, index) => (
        <img key={index} src={img} class="w-full h-auto" />
      ))}
    </div>
  );
};

export default HeroSection;
