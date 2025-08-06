import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./Button";

const RoomsCarousel: React.FC = () => {
  const hotel = {
    name: "Luxury Suite",
    images: ["/3.jpg", "/hotel.webp", "/ho.webp"],
  };

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === hotel.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? hotel.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between md:border-y border-gray-400 md:divide-x divide-gray-400 overflow-hidden">
      <div className="p-4 md:w-[60%] md:pt-20 md:pl-20 md:p-8 pb-10 md:pb-0">
        <img src="./room.jpg" className="w-full md:h-[100vh] object-cover" alt="Room" />
        <p className="text-6xl">
          Award
          <span className="font-corinthia md:text-[150px] text-[var(--secondary-color)]">
            winning
          </span>{" "}
          <br />
          style and <br />
          comfort
        </p>
      </div>

      <div className="pt-10 p-4 md:pl-20 md:p-8 md:w-[50%] border-y md:border-none border-gray-400">
        <div className="flex justify-between py-8">
          <h1 className="text-4xl">
            ROOM <br /> & SUITE
          </h1>
          <div className="flex space-x-4 items-center">
            <FaArrowLeftLong
              onClick={prevSlide}
              className="border p-4 size-16 cursor-pointer text-[var(--secondary-color)] border-[var(--secondary-color)]"
            />
            <FaArrowRightLong
              onClick={nextSlide}
              className="border p-4 size-16 cursor-pointer bg-[var(--secondary-color)] text-[var(--primary-color)]"
            />
          </div>
        </div>

        <div className="md:w-[600px] md:h-[600px] h-80 overflow-hidden">
          <img
            src={hotel.images[current]}
            alt={hotel.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        <div className="md:space-y-20 md:pt-20 space-y-10 pt-10">
          <p className="md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            omnis harum molestias libero error vero, laboriosam quasi fugit. Nam
            officia velit fuga qui praesentium voluptas enim deserunt non
            assumenda eveniet?
          </p>
          <div className="md:w-[50%]">
            <Button
              name="BOOK NOW"
              buttonFunction={() => console.log("Button clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCarousel;
