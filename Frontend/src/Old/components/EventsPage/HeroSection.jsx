import React, { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex items-center justify-center relative z-10 pointer-events-none">
      <div className="     overflow-hidden flex flex-col gap-6  rounded-[20px]">
        <div className="flex flex-col items-center justify-center">
          <div className="   text-[#fcfcfc]  leading-normal ">
            <div className="space-x-3 md:pr-36"><span className="text-6xl md:text-8xl font-bold">Explore</span><span className="text-3xl md:text-5xl">the</span></div>
           <div className="space-x-3 md:pl-4"> <span className="text-4xl md:text-6xl">future</span> <span className="text-3xl md:text-5xl">of</span></div>
          </div>
          <div className="text-7xl  md:pl-16  w-fit font-medium space-x-3">
            <span className="text-7xl md:text-9xl font-extrabold text-[#39FF14]">finance</span>
            <span className="text-4xl text-[#fcfcfc]">with us!</span>
          </div>
        </div>
        <div className="text-2xl  flex items-center justify-center text-[#fcfcfc]/[70%] text-center w-full font-medium ">
          Discover our upcoming events to learn, connect, and innovate with
          peers and industry experts.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
