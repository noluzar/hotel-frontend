import React from "react";
import { Button } from "./Button";

const About: React.FC = () => {
  return (
      <div className="flex flex-col items-center p-4 md:p-40 border-y border-gray-400 md:border-none">
        <img src="./1.jpg" className="w-full md:h-[70vh]" />
        <div className="space-y-10 pt-10 flex flex-col md:items-center">
          <p className="md:text-4xl md:text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea.
            Repellat obcaecati, dolores nam, delectus ipsam itaque laudantium
            dolor eius ipsa architecto commodi nostrum ut corporis deleniti rem
            totam quam!
          </p>
          <div className="md:w-[20%]">
            <Button
              name="SUBMIT"
              buttonFunction={() => console.log("Button clicked")}
            />
          </div>
        </div>
      </div>
  );
};

export default About;
