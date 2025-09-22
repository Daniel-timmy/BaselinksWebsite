import React, { useState } from "react";
import { LOGO } from "../constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-white/25 backdrop-blur-2xl flex flex-col px-8">
      <div className="flex justify-between items-center p-4 max-w-[100vw]">
        <img src={LOGO} />
        <div className="hidden md:flex border-2 md:px-6 md:py-3 text-lg md:space-x-10  border-header-border rounded-full p-2">
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
        <button className="hidden md:block bg-baselinks-teal px-8 space-x-3 rounded-3xl font-bold text-md py-2.5">
          Get in Touch.
        </button>
        <svg
          className="md:hidden cursor-pointer"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-md">
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
          <button className="bg-baselinks-teal m-4">Get in Touch.</button>
        </div>
      )}
    </div>
  );
};

export default Header;
