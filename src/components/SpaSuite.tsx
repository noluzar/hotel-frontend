import React from "react";
import { Button } from "./Button";

const SpaSuite: React.FC = () => {
  return (
    <div className="relative border-y">
      <img src="./spa.jpg" className="w-full md:h-full h-80 object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center md:px-8 text-white bg-black/70 md:space-y-4">
        <h2 className="md:text-lg font-semibold">SPA SUITE AT HOTEL SCAPE</h2>
        <h1 className="md:text-8xl my-2">Beauty & Wellness</h1>
        <p className="md:max-w-3xl md:py-6 text-center text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quasi distinctio illum, placeat illo sunt officia omnis? 
        </p>
        <div className="md:w-[200px] w-full p-4 hidden md:block">
          <Button
            name="READ MORE"
            buttonFunction={() => console.log("Button clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default SpaSuite;
