import React from "react";
import { Button } from "./Button";

const BookStay: React.FC = () => { 

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 p-4 bg-gray-50 w-full font-sans md:space-x-8">
      <div className="flex flex-col ">
        <p className="text-[var(--secondary-color)] font-bold">Arrival date</p>
        <p className="md:px-2 md:py-1 text-gray-500">06/04/2022
        </p>
      </div>
      <hr className="md:h-8 md:w-[1px] w-full bg-gray-400" />
      <div className="flex flex-col items-start">
        <p className="text-[var(--secondary-color)] font-bold">Departure date</p>
        <p className="md:px-2 md:py-1 text-gray-500">06/04/2022
        </p>
      </div>
      <hr className="md:h-8 md:w-[1px] w-full bg-gray-400" />
      <div className="flex flex-col items-start">
        <p className="text-[var(--secondary-color)] font-bold">Number of people</p>
        <p className="md:px-2 md:py-1 text-gray-500">2
        </p>
      </div>
      <div>
        <Button name="BOOK A STAY" buttonFunction={() => console.log('2')} />
      </div>
    </div>
  )};

export default BookStay;
