import React from "react";
import { DEV, BRANDING, DIGITAL, MEDIA } from "../../constants";

const Services = () => {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 w-screen">
      <h1 className="font-trajan text-4xl/15 sm:text-6xl/20 text-black text-left my-20">
        <span className="text-baselinks-yellow">Beyond</span> a single service,
        <br className="hidden sm:block" />A{" "}
        <span className="text-baselinks-teal">complete</span> solution.{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mx-auto">
        <div className=" shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] sm:h-125 rounded-sm pb-8 gap-8 flex flex-col items-center justify-center">
          <img
            src={BRANDING}
            className="bg-contain sm:h-3/5 sm:overflow-hidden  sm:w-1/1"
          />
          <div className="flex flex-col text-left px-6">
            <h2 className="font-trajan text-2xl text-black font-bold mb-1 sm:text-[32px]">
              Branding & Design
            </h2>
            <p className="text-hero-text text-md/5 mb-10 font-normal sm:text-xl/5">
              From personal and corporate branding to elegant graphic and motion
              design, we craft an identity that resonates and endures.
            </p>
            <button className=" border-baselinks-teal border-2 w-fit px-8 space-x-3 rounded-3xl font-bold text-md py-2.5 text-black flex items-center gap-3">
              Explore
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21.2012C5.62 21.2012 1.25 16.8312 1.25 11.4512C1.25 6.07117 5.62 1.70117 11 1.70117C11.41 1.70117 11.75 2.04117 11.75 2.45117C11.75 2.86117 11.41 3.20117 11 3.20117C6.45 3.20117 2.75 6.90117 2.75 11.4512C2.75 16.0012 6.45 19.7012 11 19.7012C15.55 19.7012 19.25 16.0012 19.25 11.4512C19.25 11.0412 19.59 10.7012 20 10.7012C20.41 10.7012 20.75 11.0412 20.75 11.4512C20.75 16.8312 16.38 21.2012 11 21.2012Z"
                  fill="#025454"
                />
                <path
                  d="M20 6.20117H14C13.59 6.20117 13.25 5.86117 13.25 5.45117C13.25 5.04117 13.59 4.70117 14 4.70117H20C20.41 4.70117 20.75 5.04117 20.75 5.45117C20.75 5.86117 20.41 6.20117 20 6.20117Z"
                  fill="#025454"
                />
                <path
                  d="M17 9.20117H14C13.59 9.20117 13.25 8.86117 13.25 8.45117C13.25 8.04117 13.59 7.70117 14 7.70117H17C17.41 7.70117 17.75 8.04117 17.75 8.45117C17.75 8.86117 17.41 9.20117 17 9.20117Z"
                  fill="#025454"
                />
                <path
                  d="M20.1601 23.2412C20.0801 23.2412 20.0001 23.2312 19.9301 23.2212C19.4601 23.1612 18.6101 22.8412 18.1301 21.4112C17.8801 20.6612 17.9701 19.9112 18.3801 19.3412C18.7901 18.7712 19.4801 18.4512 20.2701 18.4512C21.2901 18.4512 22.0901 18.8412 22.4501 19.5312C22.8101 20.2212 22.7101 21.1012 22.1401 21.9512C21.4301 23.0212 20.6601 23.2412 20.1601 23.2412ZM19.5601 20.9412C19.7301 21.4612 19.9701 21.7212 20.1301 21.7412C20.2901 21.7612 20.5901 21.5712 20.9001 21.1212C21.1901 20.6912 21.2101 20.3812 21.1401 20.2412C21.0701 20.1012 20.7901 19.9512 20.2701 19.9512C19.9601 19.9512 19.7301 20.0512 19.6001 20.2212C19.4801 20.3912 19.4601 20.6512 19.5601 20.9412Z"
                  fill="#025454"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] sm:h-125 rounded-sm  gap-8 flex flex-col items-center justify-center">
          <div className="flex flex-col text-left px-6 pt-8">
            <h2 className="font-trajan text-2xl text-black font-bold mb-1 sm:text-[32px]">
              Digital Marketing
            </h2>
            <p className="text-hero-text text-md/5 mb-10 font-normal sm:text-xl/5">
              We go beyond likes and shares. Our strategies in social media
              management, content marketing, and SEO/SEM are designed to
              attract, engage, and convert your ideal customers.
            </p>
            <button className=" border-baselinks-teal border-2 w-fit px-8 space-x-3 rounded-3xl font-bold text-md py-2.5 text-black flex items-center gap-3">
              Explore
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21.2012C5.62 21.2012 1.25 16.8312 1.25 11.4512C1.25 6.07117 5.62 1.70117 11 1.70117C11.41 1.70117 11.75 2.04117 11.75 2.45117C11.75 2.86117 11.41 3.20117 11 3.20117C6.45 3.20117 2.75 6.90117 2.75 11.4512C2.75 16.0012 6.45 19.7012 11 19.7012C15.55 19.7012 19.25 16.0012 19.25 11.4512C19.25 11.0412 19.59 10.7012 20 10.7012C20.41 10.7012 20.75 11.0412 20.75 11.4512C20.75 16.8312 16.38 21.2012 11 21.2012Z"
                  fill="#025454"
                />
                <path
                  d="M20 6.20117H14C13.59 6.20117 13.25 5.86117 13.25 5.45117C13.25 5.04117 13.59 4.70117 14 4.70117H20C20.41 4.70117 20.75 5.04117 20.75 5.45117C20.75 5.86117 20.41 6.20117 20 6.20117Z"
                  fill="#025454"
                />
                <path
                  d="M17 9.20117H14C13.59 9.20117 13.25 8.86117 13.25 8.45117C13.25 8.04117 13.59 7.70117 14 7.70117H17C17.41 7.70117 17.75 8.04117 17.75 8.45117C17.75 8.86117 17.41 9.20117 17 9.20117Z"
                  fill="#025454"
                />
                <path
                  d="M20.1601 23.2412C20.0801 23.2412 20.0001 23.2312 19.9301 23.2212C19.4601 23.1612 18.6101 22.8412 18.1301 21.4112C17.8801 20.6612 17.9701 19.9112 18.3801 19.3412C18.7901 18.7712 19.4801 18.4512 20.2701 18.4512C21.2901 18.4512 22.0901 18.8412 22.4501 19.5312C22.8101 20.2212 22.7101 21.1012 22.1401 21.9512C21.4301 23.0212 20.6601 23.2412 20.1601 23.2412ZM19.5601 20.9412C19.7301 21.4612 19.9701 21.7212 20.1301 21.7412C20.2901 21.7612 20.5901 21.5712 20.9001 21.1212C21.1901 20.6912 21.2101 20.3812 21.1401 20.2412C21.0701 20.1012 20.7901 19.9512 20.2701 19.9512C19.9601 19.9512 19.7301 20.0512 19.6001 20.2212C19.4801 20.3912 19.4601 20.6512 19.5601 20.9412Z"
                  fill="#025454"
                />
              </svg>
            </button>
          </div>
          <img
            src={DIGITAL}
            className="bg-cover sm:h-3/5 sm:overflow-hidden  sm:w-1/1"
          />
        </div>
        <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] sm:h-125 rounded-sm  gap-8 flex flex-col items-center justify-center">
          <div className="flex flex-col text-left px-6 pt-8">
            <h2 className="font-trajan text-2xl text-black font-bold mb-1 sm:text-[32px]">
              Web & App Development
            </h2>
            <p className="text-hero-text text-md/5 mb-10 font-normal sm:text-xl/5">
              Your digital foundation is your most valuable asset. We build
              stunning, high-performing websites and mobile applications that
              deliver exceptional user experiences, converting curious visitors
              to customers.
            </p>
            <button className=" border-baselinks-teal border-2 w-fit px-8 space-x-3 rounded-3xl font-bold text-md py-2.5 text-black flex items-center gap-3">
              Explore
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21.2012C5.62 21.2012 1.25 16.8312 1.25 11.4512C1.25 6.07117 5.62 1.70117 11 1.70117C11.41 1.70117 11.75 2.04117 11.75 2.45117C11.75 2.86117 11.41 3.20117 11 3.20117C6.45 3.20117 2.75 6.90117 2.75 11.4512C2.75 16.0012 6.45 19.7012 11 19.7012C15.55 19.7012 19.25 16.0012 19.25 11.4512C19.25 11.0412 19.59 10.7012 20 10.7012C20.41 10.7012 20.75 11.0412 20.75 11.4512C20.75 16.8312 16.38 21.2012 11 21.2012Z"
                  fill="#025454"
                />
                <path
                  d="M20 6.20117H14C13.59 6.20117 13.25 5.86117 13.25 5.45117C13.25 5.04117 13.59 4.70117 14 4.70117H20C20.41 4.70117 20.75 5.04117 20.75 5.45117C20.75 5.86117 20.41 6.20117 20 6.20117Z"
                  fill="#025454"
                />
                <path
                  d="M17 9.20117H14C13.59 9.20117 13.25 8.86117 13.25 8.45117C13.25 8.04117 13.59 7.70117 14 7.70117H17C17.41 7.70117 17.75 8.04117 17.75 8.45117C17.75 8.86117 17.41 9.20117 17 9.20117Z"
                  fill="#025454"
                />
                <path
                  d="M20.1601 23.2412C20.0801 23.2412 20.0001 23.2312 19.9301 23.2212C19.4601 23.1612 18.6101 22.8412 18.1301 21.4112C17.8801 20.6612 17.9701 19.9112 18.3801 19.3412C18.7901 18.7712 19.4801 18.4512 20.2701 18.4512C21.2901 18.4512 22.0901 18.8412 22.4501 19.5312C22.8101 20.2212 22.7101 21.1012 22.1401 21.9512C21.4301 23.0212 20.6601 23.2412 20.1601 23.2412ZM19.5601 20.9412C19.7301 21.4612 19.9701 21.7212 20.1301 21.7412C20.2901 21.7612 20.5901 21.5712 20.9001 21.1212C21.1901 20.6912 21.2101 20.3812 21.1401 20.2412C21.0701 20.1012 20.7901 19.9512 20.2701 19.9512C19.9601 19.9512 19.7301 20.0512 19.6001 20.2212C19.4801 20.3912 19.4601 20.6512 19.5601 20.9412Z"
                  fill="#025454"
                />
              </svg>
            </button>
          </div>
          <img
            src={DEV}
            className="bg-cover sm:h-3/5 sm:overflow-hidden  sm:w-1/1"
          />
        </div>
        <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] rounded-sm sm:h-125 pb-8 gap-8 flex flex-col items-center justify-center">
          <img
            src={MEDIA}
            className="bg-cover sm:h-3/5 sm:overflow-hidden  sm:w-1/1"
          />
          <div className="flex flex-col text-left px-6 ">
            <h2 className="font-trajan text-2xl text-black font-bold mb-1 sm:text-[32px]">
              Media Production
            </h2>
            <p className="text-hero-text text-md/5 mb-10 font-normal sm:text-xl/5">
              Our in-house media team captures your story with professional
              photography, videography, and podcast production that captivates
              your audience.
            </p>
            <button className=" border-baselinks-teal border-2 w-fit px-8 space-x-3 rounded-3xl font-bold text-md py-2.5 text-black flex items-center gap-3">
              Explore
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21.2012C5.62 21.2012 1.25 16.8312 1.25 11.4512C1.25 6.07117 5.62 1.70117 11 1.70117C11.41 1.70117 11.75 2.04117 11.75 2.45117C11.75 2.86117 11.41 3.20117 11 3.20117C6.45 3.20117 2.75 6.90117 2.75 11.4512C2.75 16.0012 6.45 19.7012 11 19.7012C15.55 19.7012 19.25 16.0012 19.25 11.4512C19.25 11.0412 19.59 10.7012 20 10.7012C20.41 10.7012 20.75 11.0412 20.75 11.4512C20.75 16.8312 16.38 21.2012 11 21.2012Z"
                  fill="#025454"
                />
                <path
                  d="M20 6.20117H14C13.59 6.20117 13.25 5.86117 13.25 5.45117C13.25 5.04117 13.59 4.70117 14 4.70117H20C20.41 4.70117 20.75 5.04117 20.75 5.45117C20.75 5.86117 20.41 6.20117 20 6.20117Z"
                  fill="#025454"
                />
                <path
                  d="M17 9.20117H14C13.59 9.20117 13.25 8.86117 13.25 8.45117C13.25 8.04117 13.59 7.70117 14 7.70117H17C17.41 7.70117 17.75 8.04117 17.75 8.45117C17.75 8.86117 17.41 9.20117 17 9.20117Z"
                  fill="#025454"
                />
                <path
                  d="M20.1601 23.2412C20.0801 23.2412 20.0001 23.2312 19.9301 23.2212C19.4601 23.1612 18.6101 22.8412 18.1301 21.4112C17.8801 20.6612 17.9701 19.9112 18.3801 19.3412C18.7901 18.7712 19.4801 18.4512 20.2701 18.4512C21.2901 18.4512 22.0901 18.8412 22.4501 19.5312C22.8101 20.2212 22.7101 21.1012 22.1401 21.9512C21.4301 23.0212 20.6601 23.2412 20.1601 23.2412ZM19.5601 20.9412C19.7301 21.4612 19.9701 21.7212 20.1301 21.7412C20.2901 21.7612 20.5901 21.5712 20.9001 21.1212C21.1901 20.6912 21.2101 20.3812 21.1401 20.2412C21.0701 20.1012 20.7901 19.9512 20.2701 19.9512C19.9601 19.9512 19.7301 20.0512 19.6001 20.2212C19.4801 20.3912 19.4601 20.6512 19.5601 20.9412Z"
                  fill="#025454"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
