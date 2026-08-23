import React from "react";
import productive from "../assets/illustration-stay-productive.png";
import arrow from "../assets/icon-arrow.svg";

const Productive = () => {
  return (
    <div className="flex items-center gap-18 py-26">
      <img src={productive} alt="" />
      <div className="flex flex-col gap-6">
        <h3 className="text-5xl font-bold text-white">
          Stay productive, <span className="block">wherever you are</span>
        </h3>
        <div className="flex gap-4 flex-col">
          <p className="text-lg text-[#ffffffaf]">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-lg text-[#ffffffaf]">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <span className="flex items-center gap-2 border-b-1 pb-1 border-[hsl(176,68%,64%)] w-fit">
          <a href="" className="text-[hsl(176,68%,64%)]">
            See how Fylo works
          </a>
          <img src={arrow} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Productive;
