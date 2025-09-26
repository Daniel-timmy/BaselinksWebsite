import React from "react";
import { STEP1, STEP2, STEP3, STEP4 } from "../../constants";

import { useState, useEffect, useRef } from "react";
import "./Stepbar.css";

const Stepbar = ({ setCurrentStep, currentStep }) => {
  const steps = [
    { label: "discover" },
    { label: "strategy" },
    { label: "design" },
    { label: "deliver" },
  ];

  return (
    <div className="progress-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className="step-container">
            <div
              className={`step-outer size-13 sm:size-21 lg:size-37.5 shadow-2xl border-0.5 border-[#E8E8E8] 
                ${index <= currentStep ? "bg-[#cce0e0]" : "bg-[#fffefe]"}`}
            >
              <div
                className={`step size-8 sm:size-13.5 lg:size-29.5 ${
                  index <= currentStep ? "active" : ""
                }`}
              >
                <div
                  className={`step-number font-trajan text-lg lg:text-3xl ${
                    index <= currentStep ? "text-[#338585]" : "text-[#8D8D8D]"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="label"></div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`connector h-50 sm:h-87 lg:h-133 w-1 sm:w-2 ${
                  index < currentStep ? "active" : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (index !== -1) {
            setCurrentStep(index);
          }
        }
      });
    }, options);

    stepRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      stepRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [stepRefs]);

  return (
    <div className="px-4 lg:px-6 mt-40 w-screen flex justify-between sm:gap-2 ">
      <div className=" h-screen w-1/4 lg:w-1/3 sm:pt-3 b">
        <Stepbar setCurrentStep={setCurrentStep} currentStep={currentStep} />
      </div>

      <div className="flex flex-col text-left sm:space-y-15 space-y-8">
        <div ref={stepRefs[0]} className="lg:space-y-6 overflow-hidden">
          <h3 className="text-xl/15 sm:text-3xl/15 lg:text-5xl/20 px-4 font-trajan text-hero-text">
            Discover
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP1})`,
            }}
            className="relative group flex flex-col max-sm:items-center max-sm:justify-center sm:justify-end bg-cover bg-no-repeat rounded-xl sm:rounded-[32px] w-full h-33.5 sm:w-160.5 sm:h-76.5 lg:w-281 lg:h-134.5 p-4"
          >
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0  lg:opacity-20 lg:group-hover:opacity-0 transition-opacity duration-300 z-0"></div>

            <div className="p-6 w-76.5 lg:w-134.5 bottom-0 bg-inner-card rounded-[7px] lg:rounded-2xl text-white lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <p className="text-[12px] lg:text-xl/6 font-medium">
                We dive deep into your goals, audience, and challenges,
                uncovering your brand’s unique story through insightful
                consultations and research
              </p>
            </div>
          </div>
        </div>
        <div ref={stepRefs[1]} className="space-y-6 relative overflow-hidden">
          <h3 className="text-xl/15 sm:text-3xl/15 lg:text-5xl/20 px-4 font-trajan text-hero-text">
            Strategy
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP2})`,
            }}
            className="relative group flex flex-col max-sm:items-center max-sm:justify-center sm:justify-end bg-cover bg-no-repeat rounded-xl sm:rounded-[32px] w-full h-33.5 sm:w-160.5 sm:h-76.5 lg:w-281 lg:h-134.5 p-4"
          >
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0  lg:opacity-20 lg:group-hover:opacity-0 transition-opacity duration-300 z-0"></div>

            <div className="p-6 w-76.5 lg:w-134.5 bottom-0 bg-inner-card rounded-[7px] lg:rounded-2xl text-white lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <p className="text-[12px] lg:text-xl/6 font-medium">
                We craft a dynamic roadmap, fusing creativity with data-driven
                insights to define your identity, positioning, and objectives
                with unmatched clarity
              </p>
            </div>
          </div>
        </div>
        <div ref={stepRefs[2]} className="space-y-6 relative overflow-hidden">
          <h3 className="text-xl/15 sm:text-3xl/15 lg:text-5xl/20 px-4 font-trajan text-hero-text">
            Design
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP3})`,
            }}
            className="relative group flex flex-col max-sm:items-center max-sm:justify-center sm:justify-end bg-cover bg-no-repeat rounded-xl sm:rounded-[32px] w-full h-33.5 sm:w-160.5 sm:h-76.5 lg:w-281 lg:h-134.5 p-4"
          >
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0  lg:opacity-20 lg:group-hover:opacity-0 transition-opacity duration-300 z-0"></div>

            <div className="p-6 w-76.5 lg:w-134.5 bottom-0 bg-inner-card rounded-[7px] lg:rounded-2xl text-white lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <p className="text-[12px] lg:text-xl/6 font-medium">
                Our expert team brings your vision to life with premium logos,
                rebranding, and digital innovations, refining every detail based
                on your feedback for perfection
              </p>
            </div>
          </div>
        </div>
        <div ref={stepRefs[4]} className="space-y-6 relative overflow-hidden">
          <h3 className="text-xl/15 sm:text-3xl/15 lg:text-5xl/20 px-4 font-trajan text-hero-text">
            Deliver
          </h3>{" "}
          <div
            style={{
              backgroundImage: `url(${STEP4})`,
            }}
            className="relative group flex flex-col max-sm:items-center max-sm:justify-center sm:justify-end bg-cover bg-no-repeat rounded-xl sm:rounded-[32px] w-full h-33.5 sm:w-160.5 sm:h-76.5 lg:w-281 lg:h-134.5 p-4"
          >
            <div className="absolute inset-0 h-full bg-[#EBEBD6] opacity-0  lg:opacity-20 lg:group-hover:opacity-0 transition-opacity duration-300 z-0"></div>

            <div className="p-6 w-76.5 lg:w-134.5 bottom-0 bg-inner-card rounded-[7px] lg:rounded-2xl text-white lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <p className="text-[12px] lg:text-xl/6 font-medium">
                We dive deep into your goals, audience, and challenges,
                uncovering your brand’s unique story through insightful
                consultations and research
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
