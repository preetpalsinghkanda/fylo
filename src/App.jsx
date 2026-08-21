import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[hsl(218,28%,13%)]">
      <div className=" max-w-7xl w-full mx-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
