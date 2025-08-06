import React from "react";

type ButtonProps = {
  name: string;
  buttonFunction: () => void;
};

export const Button: React.FC<ButtonProps> = ({ name, buttonFunction }) => {
  return (
    <button onClick={buttonFunction} className="p-6 bg-[var(--secondary-color)] text-[var(--accent-color)] w-full cursor-pointer">
      {name}
    </button>
  );
};
