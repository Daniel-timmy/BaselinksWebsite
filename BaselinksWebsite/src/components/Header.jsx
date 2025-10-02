import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State for Resources dropdown

  return (
    <div className="max-lg:bg-white/25 max-lg:backdrop-blur-xs z-10 flex flex-col xl:px-8 py-2.5 sm:px-6 px-4">
      <div className="flex justify-between items-center p-4 max-w-[100vw]">
        <Link to="/">
          <img src={LOGO} className="size-10" alt="Logo" />
        </Link>
        <div className="hidden lg:flex border-2 bg-white/25 backdrop-blur-2xl md:px-6 md:py-3 w-fit justify-between text-lg md:space-x-10 border-header-border rounded-full p-2">
          <Link
            to="/who-we-are"
            className="hover:text-baselinks-yellow text-gray-800 mx-2"
          >
            Who We Are
          </Link>
          <Link
            to="#"
            className="hover:text-baselinks-yellow text-gray-800 mx-2"
          >
            What We Do
          </Link>
          <Link
            to="/process"
            className="hover:text-baselinks-yellow text-gray-800 mx-2"
          >
            Our Process
          </Link>
          <Link
            to="#"
            className="hover:text-baselinks-yellow text-gray-800 mx-2"
          >
            Case Studies
          </Link>
          <Link
            to="#"
            className="hover:text-baselinks-yellow text-gray-800 mx-2"
          >
            Resources
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/contact"
            className="hidden hover:opacity-70 md:block bg-baselinks-teal px-8 space-x-3 rounded-3xl font-bold text-md py-2.5"
          >
            Get in Touch
          </Link>
          <svg
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#006666"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden fixed top-0 right-0 h-fit pb-2 w-69 bg-white shadow-md flex flex-col z-50 transform transition-transform duration-300 ease-in-out"
        style={{
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex justify-end p-4">
          <svg
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#006666"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </div>
        <div className="flex flex-col flex-1 bg-white text-left p-4">
          <Link
            to="/who-we-are"
            className="text-gray-800 hover:text-gray-600 p-4 border-b-1 border-card1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Who We Are
          </Link>
          <Link
            to="#"
            className="text-gray-800 hover:text-gray-600 p-4 border-b-1 border-card1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            What We Do
          </Link>
          <Link
            to="/process"
            className="text-gray-800 hover:text-gray-600 p-4 border-b-1 border-card1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Process
          </Link>
          <Link
            to="#"
            className="text-gray-800 hover:text-gray-600 p-4 border-b-1 border-card1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Case Studies
          </Link>

          <div
            className="text-gray-800 hover:text-gray-600 p-4 border-b border-gray-200 flex justify-between items-center cursor-pointer"
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
          >
            <span>Resources</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                isResourcesOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#006666"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>

          {isResourcesOpen && (
            <div className="flex flex-col bg-white pl-6">
              <Link
                to="/resources/blog"
                className="text-gray-700 hover:text-gray-500 py-3 border-b-1 border-card1"
                onClick={() => {
                  setIsResourcesOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Blog
              </Link>
              <Link
                to="/resources/guides"
                className="text-gray-700 hover:text-gray-500 py-3 border-b-1 border-card1"
                onClick={() => {
                  setIsResourcesOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Guides
              </Link>
              <Link
                to="/resources/webinars"
                className="text-gray-700 hover:text-gray-500 py-3 border-b-1 border-card1"
                onClick={() => {
                  setIsResourcesOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Webinars
              </Link>
            </div>
          )}
        </div>
        <div className="mt-25 justify-end flex pb-6 px-4">
          <Link
            to="/contact"
            className="w-fit  bg-baselinks-teal px-8 space-x-3 rounded-3xl font-bold text-[14px] py-2.5"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
