import React from "react";
import illustration1 from "../assets/illustration-intro.png";

const Hero = () => {
  return (
    <div className="border flex flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-12">
        <img src={illustration1} alt="" />
        <h5 className="text-4xl font-[600] text-center text-white">
          All your files in one secure location,
          <span className="block"> accessible anywhere.</span>
        </h5>
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <p className="text-[22px] text-white text-center ">
          <span className="block">
            Fylo stores all your most important files in one secure location.
          </span>
          <span className="block">
            Access them wherever you need, share and collaborate with
          </span>{" "}
          friends family, and co-workers.
        </p>
        <button className="bg-[hsl(198,60%,50%)] self-center text-[20px] text-white font-[500] rounded-full px-20 py-2">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
