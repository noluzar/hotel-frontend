import React from "react";
import { IoIosClose } from "react-icons/io";
import { Button } from "./Button";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  return (
    <div className="absolute right-0 mt-2 bg-white shadow-md w-md z-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Login</h1>
        <button
          onClick={onClose}
          className="text-xl text-gray-600 hover:text-black border"
        >
          <IoIosClose />
        </button>
      </div>

      <form className="flex flex-col gap-3">
        <input placeholder="Username" className="border px-3 py-2 " />
        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2"
        />
        <Button
          name="LOGIN"
          buttonFunction={() => console.log("Button clicked")}
        />
      </form>
      <div className="text-sm mt-3 space-y-1">
        <p className="cursor-pointer text-blue-500 hover:underline">
          Login with Google
        </p>
        <p className="cursor-pointer text-blue-500 hover:underline">
          Forgot Password?
        </p>
        <p>
          No account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
