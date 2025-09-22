import React, { useState } from "react";
import { LOGO } from "../constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-white/25 backdrop-blur-2xl flex flex-col xl:px-8 py-2.5 sm:px-6  px-4">
      <div className="flex justify-between items-center p-4 max-w-[100vw]">
        <img src={LOGO} className="size-10" />
        <div className="hidden lg:flex border-2 md:px-6 md:py-3 w-xl justify-between text-lg md:space-x-10  border-header-border rounded-full p-2">
          <a href="#about" className="text-gray-800 hover:text-gray-600 mx-2">
            Home
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600 mx-2">
            Process
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600 mx-2">
            Who We Are
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600 mx-2">
            About
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hidden md:block bg-baselinks-teal px-8 space-x-3 rounded-3xl font-bold text-md py-2.5">
            Get in Touch.
          </button>
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
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col shadow-md">
          <a href="#about" className="text-gray-800 hover:text-gray-600 p-4">
            Home
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600 p-4">
            Process
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600 p-4">
            Contact
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600 p-4">
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
