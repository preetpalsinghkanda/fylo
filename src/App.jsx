import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

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
        <Features />
      </div>
    </div>
  );
};

export default App;
