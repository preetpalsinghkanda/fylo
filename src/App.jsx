import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[hsl(218,28%,13%)]">
      <div className=" max-w-7xl w-full mx-auto">
        <Navbar />
        <Hero/>
      </div>
    </div>
  );
};

export default App;
