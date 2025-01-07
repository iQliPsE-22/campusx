import React, { useState } from "react";
import Image from "next/image";

const Category = ({ img_src, category_name }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative w-1/4 bg-white cursor-pointer overflow-hidden"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Image
        src={img_src}
        alt="men"
        className="block w-full h-full object-cover"
        // loading="lazy"
      />
      <div
        className={`absolute bottom-0 left-0 w-full bg-[#000] opacity-90 text-white text-center p-3 transition-transform duration-300 ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h2 className="inter text-lg">{category_name}</h2>
      </div>
    </div>
  );
};

export default Category;
