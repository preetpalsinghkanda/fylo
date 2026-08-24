import React from "react";

const EarlyAccess = () => {
  return (
    <div
      style={{ boxShadow: "0px 2px 30px #0000004d" }}
      className=" rounded-xl gap-6 max-w-4xl mx-auto px-20 flex py-12 bg-[#1C2230] flex-col justify-center items-center"
    >
      <h4 className="text-4xl font-[600] text-white">Get early access today</h4>
      <p className="text-[#ffffffbb]  text-center">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <div className="flex  my-1.5 gap-10 w-full ">
        <input
          type="text"
          placeholder="email@example.com"
          className="bg-white  px-10 border-0 w-full rounded-full "
        />
        <button className="text-white whitespace-nowrap px-10 py-3 font-[600] rounded-full bg-[#43B1D2]">
          Get Started for free
        </button>
      </div>
    </div>
  );
};

export default EarlyAccess;
