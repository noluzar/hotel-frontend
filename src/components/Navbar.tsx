import React from "react";

const Navbar: React.FC = () => {

  return (
    <div>
      <nav className="flex space-x-[10%] p-8 items-center justify-evenly font-sans bg-opacity-90">
        <div className="w-[10%] h-10">
          <img
          src="./LOGO.png"
          className="w-full h-full object-cover"
          />
        </div>
        <div className="space-x-20">
          <a href="/">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <hr className="w-full text-gray-400" />
    </div>
  );
};

export default Navbar;
