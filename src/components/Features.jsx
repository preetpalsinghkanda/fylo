import React from "react";
import anywhere from "../assets/icon-access-anywhere.svg";
import security from "../assets/icon-security.svg";
import realTime from "../assets/icon-collaboration.svg";
import store from "../assets/icon-any-file.svg";

const Features = () => {
  return (
    <div className=" max-w-5xl gap-24 py-8 mx-auto   grid-cols-2 justify-items-center place-items-center grid grid-rows-2">
      <div className="flex items-center z-40 gap-5 flex-col justify-center">
        <img src={anywhere} alt="" />
        <div className="flex flex-col gap-1">
          <h6 className="text-[20px] text-center text-[#ffffffdb] font-bold">
            Access your files, anywhere
          </h6>
          <p className="text-center max-w-sm text-[#ffffffba]">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </div>

      <div className="flex items-center z-40 gap-5 flex-col justify-center">
        <img src={security} alt="" />
        <div className="flex flex-col gap-1">
          <h6 className="text-[20px] text-center text-[#ffffffdb] font-bold">
            Security you can trust
          </h6>
          <p className="text-center max-w-sm text-[#ffffffba]">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col gap-5 justify-center">
        <img src={realTime} alt="" />
        <div className="flex flex-col gap-1">
          <h6 className="text-[20px] text-center text-[#ffffffdb] font-bold">
            Real-time collaboration
          </h6>
          <p className="text-center max-w-sm text-[#ffffffba]">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col gap-5 justify-center">
        <img src={store} alt="" />
        <div>
          <h6 className="text-[20px] text-center text-[#ffffffdb] font-bold">
            Store any type of file
          </h6>
          <p className="text-center max-w-sm text-[#ffffffba]">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
