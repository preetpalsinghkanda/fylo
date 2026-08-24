import React from "react";
import profile1 from "../assets/profile-1.jpg";
import profile2 from "../assets/profile-2.jpg";
import profile3 from "../assets/profile-3.jpg";
import quotes from "../assets/bg-quotes.png";

const Feedback = () => {
  return (
    <div className=" flex  py-5  grid-cols-3 gap-8">
      <div className="px-9 rounded-lg z-51 flex flex-col gap-6 py-10 pb-8 bg-[#202A3C]">
        <p className="text-[16px] text-[#ffffffca]">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center-safe gap-3">
          <img src={profile1} className="h-8 w-8 rounded-full" alt="" />
          <span>
            <h6 className="text-[17px] font-bold text-white">Satish Patel</h6>
            <p className="text-[12px] text-[#ffffffba]">
              Founder & CEO, Huddle
            </p>
          </span>
        </div>
      </div>

      <div className="px-9 rounded-lg  flex flex-col gap-6 pt-10 pb-8 bg-[#202A3C]">
        <p className="text-[#ffffffca] text-[16px]">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3">
          <img src={profile2} className="h-8 w-8 rounded-full" alt="" />
          <span>
            <h6 className="text-white  font-bold text-[17px]">
              Bruce McKenzie
            </h6>
            <p className="text-[12px] text-[#ffffffba]">
              Founder & CEO, Huddle
            </p>
          </span>
        </div>
      </div>

      <div className="px-9  rounded-lg flex flex-col gap-6 pt-10 pb-8 bg-[#202A3C]">
        <p className="text-[#ffffffca] text-[16px]">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3">
          <img src={profile3} alt="" className="h-8 w-8 rounded-full" />
          <span>
            <h6 className="text-white font-bold text-[17px]">Lva Boyd</h6>
            <p className="text-[12px] text-[#ffffffba]">
              Founder & CEO, Huddle
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
