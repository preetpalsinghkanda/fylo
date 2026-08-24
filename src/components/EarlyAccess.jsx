import React, { useState } from "react";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (x) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  return (
    <div
      style={{ boxShadow: "0px 2px 30px #0000004d" }}
      className=" rounded-xl relative top-30 gap-6 max-w-4xl mx-auto px-20 flex py-12 bg-[#1C2230] flex-col justify-center items-center"
    >
      <h4 className="text-4xl font-[600] text-white">Get early access today</h4>
      <p className="text-[#ffffffbb]  text-center">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <div className="flex  my-1.5 gap-10 w-full ">
        <div className="w-full flex flex-col gap-1 ">
          <input
            value={email}
            onChange={(x) => {
              (setEmail(x.target.value), setError(""));
            }}
            type="text"
            placeholder="email@example.com"
            className="bg-white focus:outline-0 py-3 px-10 border-0 w-full rounded-full "
          />
          {error && (
            <p className="text-[12px]  pl-8 text-[hsl(0,100%,63%)] ">{error}</p>
          )}
        </div>
        <button
          onClick={() => handleSubmit()}
          className="text-white self-start whitespace-nowrap hover:bg-[hsl(176,68%,64%)] cursor-pointer px-10 py-3 font-[600] rounded-full bg-[#43B1D2]"
        >
          Get Started for free
        </button>
      </div>
    </div>
  );
};

export default EarlyAccess;
