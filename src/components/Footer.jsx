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
      <img src={logo} className="h-10" alt="" />
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
              <span className="hover:text-[white] cursor-pointer">
                About Us
              </span>
              <span className="hover:text-[white] cursor-pointer">Jobs</span>
              <span className="hover:text-[white] cursor-pointer">Press</span>
              <span className="hover:text-[white] cursor-pointer">Blog</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="hover:text-[white] cursor-pointer">
                Contact Us
              </span>
              <span className="hover:text-white cursor-pointer">Terms</span>
              <span className="hover:text-white cursor-pointer">Privacy</span>
            </div>
          </div>
          <div className="flex gap-3 items-start ">
            <a
              href="https://facebook.com/"
              className="rounded-full text-white hover:text-[hsl(176,68%,64%)] cursor-pointer hover:border-[hsl(176,68%,64%)] flex items-center justify-center border border-white  w-8 h-8"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://x.com/"
              className="rounded-full cursor-pointer text-white hover:text-[hsl(176,68%,64%)] hover:border-[hsl(176,68%,64%)] flex items-center justify-center border border-white w-8 h-8 "
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="rounded-full w-8 text-white hover:border-[hsl(176,68%,64%)] hover:text-[hsl(176,68%,64%)] cursor-pointer h-8 flex items-center justify-center border-white border "
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
