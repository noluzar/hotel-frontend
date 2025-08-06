import React from "react";
import { IoIosMail } from "react-icons/io";
import { Button } from "./Button";

const Newsletter: React.FC = () => {
  return (
    <div className="border-y flex flex-col items-center text-center py-20">
      <div className="md:space-y-4 space-y-2">
        <h3 className="font-semibold text-xl text-[var(--secondary-color)]">NEWSLETTER</h3>
        <h1 className="md:text-5xl text-3xl">Subscribe to recieve our</h1>
        <h1 className="md:text-5xl text-3xl">latest news and information</h1>
        <div className="flex items-center justify-between p-4 mt-10 shadow w-full bg-white space-x-2">
          <div className="flex items-center space-x-2">
            <IoIosMail className="size-7 text-[var(--secondary-color)]" />
            <input placeholder="Your Email" className="outline-none" />
          </div>
          <div>
            <Button
              name="SUBMIT"
              buttonFunction={() => console.log("Button clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
