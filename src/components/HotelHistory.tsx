import React from "react";

const HotelHistory: React.FC = () => {
  return (
    <div className="md:border border-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center h-full w-full">
        <div className="md:text-[45px] md:w-[45%] border-y border-gray-400 py-6 md:py-0 w-full md:border-none text-3xl md:px-30">
          <h1 className="p-4">Here, local talents <br/>come together.</h1>
          <div/>
        </div>
        <div className="md:w-[1px] bg-gray-400 h-full"/>
        <div className="flex justify-between md:border-l border-gray-400 md:w-[55%] md:px-20">
        <div/>
          <p className="md:text-right text-xl font-sans md:my-20 p-4 py-10 md:py-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            fugiat repudiandae, iure ratione qui eveniet in quas cumque
            provident tenetur laudantium velit blanditiis voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelHistory;
