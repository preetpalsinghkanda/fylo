import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full py-10 text-white flex justify-between">
      <img src={logo} className="h-12" alt="" />
      <div className="gap-20 flex items-center">
        <span>Features</span>
        <span>Team</span>
        <span>Sign In</span>
      </div>
    </div>
  );
};

export default Navbar;
