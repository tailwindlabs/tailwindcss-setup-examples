import React from "react";
import Profile from "../src/assets/images/profile.jpg";

function App() {
  return (
    <div className=" container px-4 mx-auto flex flex-wrap mb-4 justify-center">
      <div className="w-full md:w-1/2 lg:w-1/2 mt-12">
        <h2 className="text-2xl font-thin">Hi, my name is</h2>
        <h1 className="text-5xl font-semibold">Harsh Shah</h1>
        <div className="flex flex-row ">
          <div className="flex items-center justify-center sm:flex-col z-10 absolute">
            <img
              src={Profile}
              alt="profile pic"
              className="logo mt-10 rounded-full h-48 w-48"
            />
          </div>
          <div className="rounded-full mt-10 ml-12 h-48 w-48 flex items-center justify-center bg-orange-500"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
