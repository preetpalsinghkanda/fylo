import React from "react";
import logo from "../assets/logo.svg";
import location from "../assets/icon-location.svg";
import call from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="  pt-50 gap-10 flex flex-col items-start pb-20">
      <img src={logo} alt="" />
      <div className=" w-full justify-between flex gap-40">
        <div className="flex gap-20 justify-between">
          <p className="flex gap-7 max-w-sm text-start items-start text-xl text-[#ffffffbc]">
            <img src={location} className="pt-1" alt="" />
            PricewaterhouseCoopers LLP 1140 SW Washington Street Suite 400
            Portland, Oregon 97205
          </p>
          <div className="flex flex-col gap-8">
            <span className="flex items-center gap-5">
              <img src={call} alt="" />
              <p className="text-[#ffffffbc]">+1-543-123-4567</p>
            </span>
            <span className="flex items-center gap-5">
              <img src={email} alt="" />
              <p className="text-[#ffffffbc]">example@fylo.com</p>
            </span>
          </div>
        </div>

        <div className="flex gap-30">
          <div className="flex gap-16 text-[#ffffffbc]">
            <div className="flex flex-col gap-4">
              <span>About Us</span>
              <span>Jobs</span>
              <span>Press</span>
              <span>Blog</span>
            </div>
            <div className="flex flex-col gap-4">
              <span>Contact Us</span>
              <span>Terms</span>
              <span>Privacy</span>
            </div>
          </div>
          <div className="flex gap-3 items-start ">
            <span className="rounded-full cursor-pointer flex items-center justify-center border border-white  w-8 h-8">
              <FontAwesomeIcon style={{ color: "white" }} icon={faFacebookF} />
            </span>
            <span className="rounded-full cursor-pointer flex items-center justify-center border border-white w-8 h-8 ">
              <FontAwesomeIcon style={{ color: "white" }} icon={faTwitter} />
            </span>
            <span className="rounded-full w-8 cursor-pointer h-8 flex items-center justify-center border-white border ">
              <FontAwesomeIcon style={{ color: "white" }} icon={faInstagram} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
