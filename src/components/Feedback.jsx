import React from "react";
import profile1 from "../assets/profile-1.jpg";
import profile2 from "../assets/profile-2.jpg"

const Feedback = () => {
  return (
    <div className="border flex  grid-cols-3 gap-8">
      <div className="px-9 flex flex-col gap-6 py-10">
        <p className="text-[16px] text-[white]">
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

      <div className="px-9 flex flex-col gap-6 py-10">
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div>
          <img src={} alt="" />
          <span>
            <h6></h6>
            <p></p>
          </span>
        </div>
      </div>

      <div>
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div>
          <img src={} alt="" />
          <span>
            <h6></h6>
            <p></p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
