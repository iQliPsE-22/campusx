"use client";
import React from "react";
import Image from "next/image";

const handleExploreClick = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

const HopBtn = () => {
  return (
    <div
      className="z-0 arrow mt-4 h-20 w-20 bg-transparent rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer hover:border-[#407bff]"
      onClick={handleExploreClick}
    >
      <Image src="/arrow.png" alt="scroll down" width="40" height="40" />
    </div>
  );
};

export default HopBtn;
