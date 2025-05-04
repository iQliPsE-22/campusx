import React from "react";

const CustomButtom = ({ children, className, onClick }) => {
  return (
    <button
      className={` group w-1/2 h-fit font-medium rounded-lg px-[16px] py-[10px] text-sm lg:text-base  flex flex-row gap-2 items-center justify-center  transition-all duration-200 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButtom;
