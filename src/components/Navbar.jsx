import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full py-10 text-white flex justify-between">
      <img src={logo} className="h-12" alt="" />
      <div className="gap-20 flex items-center">
        <span className="cursor-pointer hover:underline">Features</span>
        <span className="cursor-pointer hover:underline">Team</span>
        <span className="cursor-pointer hover:underline">Sign In</span>
      </div>
    </div>
  );
};

export default Navbar;
