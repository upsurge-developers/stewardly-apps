import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer: React.FC<object> = () => {
  return (
    <footer className="shadow-sharp h-fit bg-black text-white">
      <div className="xs:px-4 xs:py-6 container mx-auto px-3 py-4">
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              width={32}
              height={32}
              alt="logo"
              className="mr-2 h-10 w-10"
            />
            <span className=" xs:text-xl text-base font-semibold">
              Stewardly
            </span>
          </div>
          <div className="hidden lg:flex">
            <h3 className=" text-base text-slate-600">
              © {new Date().getFullYear()} Stewardly, Kenya. All rights
              reserved.
            </h3>
          </div>
          <div className="xs:gap-2 flex flex-row items-center gap-[6px]">
            <SocialIcon
              href="#"
              network="facebook"
              bgColor="#000"
              color="#fff"
              className="transform transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-70"
            />

            <SocialIcon
              href="#"
              network="twitter"
              bgColor="#000"
              color="#fff"
              className="transform transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-70"
            />

            <SocialIcon
              href="#"
              network="instagram"
              bgColor="#000"
              color="#fff"
              className="transform transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
