import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const Footer: React.FC = () => {
  return (
    <div className="relative h-[55vh]">
      <img src="./1.jpg" className="w-full h-full" />
      <div className="absolute inset-0 text-white/70 bg-black/80 flex flex-col items-center text-center justify-center text-lg">
        <div className="mt-20">
        <p>Logo</p>
          <p>2230 Madison Street</p>
          <p>Yountville, CA 92129</p>
          <p>(888) 921-3546</p>
          <p>reservations@hotelscape.com</p>
          <div className="flex items-center justify-center space-x-4 py-8">
            <FaInstagram className="size-7" />
            <FaYoutube className="size-7" />
            <FaFacebook className="size-7" />
          </div>
        </div>
        <div className="border-y md:p-4 p-3 w-full flex justify-center items-center md:space-x-10">
          <a href="#">Our Story</a>
          <LuDot />
          <a href="#">Packages</a>
          <LuDot />
          <a href="#">Contact</a>
          <LuDot />
          <a href="#">Gallery</a>
          <LuDot />
          <a href="#">News</a>
        </div>
        <p className="my-10 md:mb-20 px-2 md:px-0">#Copyright 2025. By Noluthando Ndlovu. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
