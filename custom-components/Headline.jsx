import React from "react";

const Headline = ({ heading, text, className }) => {
  return (
    <div className="p-2 lg:p-4 flex flex-col items-center justify-center">
      <h1
        className={`audiowide text-white text-center p-1 tracking-wider ${className}`}
      >
        <span className="text-blue-500">{heading.charAt(0)}</span>
        {heading.slice(1)}
      </h1>
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#e7f1f3] to-blue-300 quicksand text-center text-sm lg:text-lg tracking-wider">
        {text}
      </p>
    </div>
  );
};

export default Headline;
