import React from "react";
import Logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-center">
        <div className="relative h-20 md:h-28 w-auto">
          <img
            src={Logo}
            alt="Orange County Orthopaedics & Sports Medical Group Logo"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
