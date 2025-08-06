import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center p-8 md:px-16 font-sans bg-opacity-90">
        <div className="w-[10%] h-10">
          <img src="./LOGO.png" className="w-full h-full object-cover" alt="Logo" />
        </div>

        <div className="hidden md:flex space-x-20">
          <a href="/">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>

        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </div>
      </nav>

      <div
        className={`md:hidden bg-[var(--primary-color)] shadow-2xl absolute top-20 right-0 w-full p-6 space-y-6 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="/" className="block">Home</a>
        <a href="#" className="block">About Us</a>
        <a href="#" className="block">Contact</a>
      </div>

      <hr className="w-full text-gray-400" />
    </div>
  );
};

export default Navbar;
