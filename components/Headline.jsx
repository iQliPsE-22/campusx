import React from "react";

const Headline = ({ heading, text }) => {
  return (
    <div className="bg-black p-2 lg:p-4 pb-0">
      <h1 className="julius text-white text-center text-3xl lg:text-4xl tracking-wider">
        {heading}
      </h1>
      <p className="quicksand text-[#71717a] text-center text-sm lg:text-lg tracking-wide">
        {text}
      </p>
    </div>
  );
};

export default Headline;
