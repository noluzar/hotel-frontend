import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      <div className="md:text-7xl text-6xl p-6 md:pl-20 md:w-[45%] md:pt-50 mb-20">
        <h1 className="font-corinthia  text-[var(--secondary-color)] md:text-8xl">
          Memoriable
        </h1>
        <h1>Hotels for </h1>
        <h1>
          moments{" "}
          <span className="font-corinthia text-[var(--secondary-color)]">
            Rich
          </span>
        </h1>
        <h1>in emotions</h1>
        <p className="md:text-2xl text-lg pt-6 md:pt-8">Book now and get the best prices</p>
      </div>
      <div className="md:w-[55%] h-[60vh] md:h-full">
        <img src="./room.jpg" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
