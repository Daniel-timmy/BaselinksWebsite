import React, { useState } from "react";
import { TESTIMONIALS } from "../../constants";

const Testimonials = () => {
  // Sample testimonials array (replace with your actual data)
  const testimonials = [
    {
      quote:
        "Before Baselinks, our brand asset was all over the place. They’re the one-stop shop that turned our vision into a tangible reality, bringing every piece of our brand together in a way multiple agencies never could.",
      name: "~ Bonnke Adams",
      title: "C.E.O Alero Foods",
      rating: 5,
      color: "bg-card",
      text: "text-hero-text",
    },
    // Add more testimonials here
    {
      quote:
        "Baselinks transformed our marketing strategy with their innovative approach. Highly recommended!",
      name: "~ Jane Doe",
      title: "CMO, TechTrend Innovations",
      rating: 4,
      color: "bg-card1",
      text: "text-hero-text",
    },
    {
      quote:
        "The team at Baselinks delivered beyond our expectations, creating a cohesive brand identity.",
      name: "~ John Smith",
      title: "Founder, Creative Solutions",
      rating: 5,
      color: "bg-card2",
      text: "text-white",
    },
  ];

  // State to track the stack order (bottom to top)
  const [stackIndices, setStackIndices] = useState(
    testimonials.map((_, i) => i)
  );

  // Handle navigation to the previous testimonial (move bottom to top)
  const handlePrev = () => {
    setStackIndices((prev) => {
      const newStack = [...prev];
      const bottom = newStack.shift();
      newStack.push(bottom);
      return newStack;
    });
  };

  // Handle navigation to the next testimonial (move top to bottom)
  const handleNext = () => {
    setStackIndices((prev) => {
      const newStack = [...prev];
      const top = newStack.pop();
      newStack.unshift(top);
      return newStack;
    });
  };

  // Calculate max offset
  const offsetStep = 20; // pixels per layer, adjust as needed
  const maxOffset = (testimonials.length - 1) * offsetStep;

  return (
    <div className="sm:p-6 px-4 py-6 my-15 space-y-15 lg:w-screen">
      <h1 className="font-trajan text-black font-bold text-center text-5xl/15 sm:text-6xl/20 lg:text-7xl/25">
        What Our Clients Say
      </h1>
      <div
        style={{
          backgroundImage: `url(${TESTIMONIALS})`,
        }}
        className="bg-no-repeat bg-contain bg-center w-full rounded-3xl p-6 flex flex-col justify-between items-center space-y-10"
      >
        {/* Stack container */}
        <div
          className="relative w-full overflow-visible "
          style={{
            height: `calc(30rem + ${maxOffset}px)`,
          }}
        >
          {stackIndices.map((tIndex, pos) => {
            const testimonial = testimonials[tIndex];
            // Offset magnitude increases for lower (back) cards
            const offsetMagnitude =
              (stackIndices.length - 1 - pos) * offsetStep;
            // Scale for depth effect
            const scale = 1 - (stackIndices.length - 1 - pos) * 0.02;
            // Optional opacity for depth
            const opacity = 1 - (stackIndices.length - 1 - pos) * 0.2;
            const marginRight = (stackIndices.length - 1 - pos) * 300;
            const cardStyle = {
              top: `${maxOffset}px`,
              zIndex: pos + 1,
              transform: `translate(-50%, -${offsetMagnitude}px) scale(${scale})`,
              transition:
                "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
              transformOrigin: "center bottom",
              opacity,
              marginRight: `${marginRight}px`,

              //   width: `calc(45rem + ${maxOffset - offsetMagnitude}px)`,
            };
            return (
              <div
                key={tIndex}
                className={`absolute left-1/2 h-120 sm:h-96.5  ${testimonial.color} text-left w-100  sm:w-198 sm:p-10 py-10 px-4 space-y-10 rounded-[54px] shadow-[0_-6px_10px_rgba(0,0,0,0.2)]`}
                style={cardStyle}
              >
                <svg
                  width="64"
                  height="51"
                  viewBox="0 0 64 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1384 19.5627C27.9654 21.4284 33.1833 29.6374 31.6925 37.8463C30.5743 46.8015 23.1201 50.906 14.5478 50.906C6.34813 50.1597 0.0120457 43.4433 0.0120457 34.8612C0.0120457 34.8612 -1.4788 0.906006 28.7108 0.906006C28.7108 0.906006 20.1384 2.02542 20.1384 19.5627ZM52.1916 19.5627C60.0185 21.4284 65.2364 29.6374 63.7456 37.8463C62.6275 46.8015 55.1732 50.906 46.6009 50.906C38.4013 50.1597 32.0652 43.4433 32.0652 34.8612C32.0652 34.8612 30.5743 0.906006 60.7639 0.906006C60.7639 0.906006 52.1916 2.02542 52.1916 19.5627Z"
                    fill="#606060"
                  />
                </svg>
                <p
                  className={`text-xl/6 font-medium italic ${testimonial.text}`}
                >
                  {testimonial.quote}
                </p>
                <div className="flex max-sm:flex-col space-x-4 max-sm:space-y-4 justify-between sm:items-center">
                  <div className={`${testimonial.text}`}>
                    <h5 className="font-trajan text-[32px]">
                      {testimonial.name}
                    </h5>
                    <p className="text-[16px]">{testimonial.title}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="33"
                        height="31"
                        viewBox="0 0 33 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.105 10.1101L32.5894 12.365L25.4419 20.3083L26.522 30.906L16.7065 26.6101L6.89111 30.906L7.97119 20.3083L0.82373 12.365L11.3081 10.1101L16.7065 0.906006L22.105 10.1101Z"
                          fill="#FFCB45"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex space-x-14 justify-center items-center">
          <button
            onClick={handlePrev}
            className="h-12 w-22 rounded-3xl cursor-pointer hover:bg-baselinks-teal/15 border-baselinks-teal border-2 flex justify-center items-center"
          >
            <svg
              width="24"
              height="35"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9998 21.576C14.8098 21.576 14.6198 21.506 14.4698 21.356L7.94979 14.836C6.88979 13.776 6.88979 12.036 7.94979 10.976L14.4698 4.45603C14.7598 4.16603 15.2398 4.16603 15.5298 4.45603C15.8198 4.74603 15.8198 5.22603 15.5298 5.51603L9.00979 12.036C8.52979 12.516 8.52979 13.296 9.00979 13.776L15.5298 20.296C15.8198 20.586 15.8198 21.066 15.5298 21.356C15.3798 21.496 15.1898 21.576 14.9998 21.576Z"
                fill="#025454"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="h-12 w-22 rounded-3xl cursor-pointer hover:bg-baselinks-teal/15 border-baselinks-teal border-2 flex justify-center items-center"
          >
            <svg
              width="24"
              height="35"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.9101 21.576C8.7201 21.576 8.5301 21.506 8.3801 21.356C8.0901 21.066 8.0901 20.586 8.3801 20.296L14.9001 13.776C15.3801 13.296 15.3801 12.516 14.9001 12.036L8.3801 5.51603C8.0901 5.22603 8.0901 4.74603 8.3801 4.45603C8.6701 4.16603 9.1501 4.16603 9.4401 4.45603L15.9601 10.976C16.4701 11.486 16.7601 12.176 16.7601 12.906C16.7601 13.636 16.4801 14.326 15.9601 14.836L9.4401 21.356C9.2901 21.496 9.1001 21.576 8.9101 21.576Z"
                fill="#025454"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
