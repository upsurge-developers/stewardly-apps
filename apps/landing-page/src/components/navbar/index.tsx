import React from "react";
import { Button } from "../ui/button";

const NavigationBar: React.FC<object> = () => {
  return (
    <nav
      className={`shadow-custom fixed top-0 z-20 w-full transform px-14 pb-2 pt-2 transition-all duration-200 ease-in-out min-[375px]:px-3 min-[425px]:px-4 min-[768px]:px-5 min-[1024px]:px-8 bg-black`}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-2">
        <a href="/" className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            height={32}
            width={32}
            alt="Stewardly Logo"
            className="mr-2 h-8"
          />
          <span
            className={`font-sans text-xl font-bold tracking-wider min-[375px]:hidden min-[425px]:block text-white`}
          >
            Stewardly
          </span>
        </a>
        <div className="flex items-center font-sans tracking-wider">
          <Button variant="success" className="mr-4">
            Login
          </Button>
          <Button variant="secondary">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
