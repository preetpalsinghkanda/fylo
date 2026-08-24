import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Productive from "./components/Productive";
import Feedback from "./components/Feedback";
import quotes from "./assets/bg-quotes.png";
import EarlyAccess from "./components/EarlyAccess";

const App = () => {
  return (
    <div className="w-full">
      <div className="min-h-screen w-full bg-[hsl(219,30%,18%)]">
        <div className=" max-w-7xl w-full mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className=" w-full bg-[hsl(218,28%,13%)]">
        <div className="max-w-7xl w-full mx-auto">
          <Features />
          <Productive />
          <img className="relative top-7 -left-2 z-50" src={quotes} alt="" />
          <Feedback />
          <EarlyAccess/>
        </div>
      </div>
    </div>
  );
};

export default App;
