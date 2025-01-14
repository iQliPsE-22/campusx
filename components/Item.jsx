import React from "react";
import Image from "next/image";
import item_img from "../public/hero1.jpeg";

const Item = () => {
  return (
    <section className="itim pt-2 pb-2 p-1 lg:p-4 cursor-pointer border border-white rounded-lg shadow shadow-white hover:shadow-lg hover:shadow-white transition-all transform duration-300  bg-black text-white">
      {/* Image Section */}
      <div className="lg:w-full lg:p-4 bg-black border-b-2 rounded-t-lg overflow-hidden">
        <Image
          src={item_img}
          alt="item"
          className="object-cover object-center w-full lg:w-11/12 h-40 lg:h-60 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="inter text-sm p-2 lg:pt-4 lg:p-3 w-full">
        {/* Title */}
        <h2 className="lg:text-lg line-clamp-1 lg:line-clamp-2  text-gray-200 hover:text-white transition-colors duration-200">
          Lorem ips dolor sit amet consectetur adipisicing elit. Veniam
          voluptatum nemo, officia adipisci quia impedit sit atque, dolore
          repellat odio praesentium porro, consectetur voluptatem et a tempore
          qui animi tenetur.
        </h2>
        {/* Price */}
        <h3 className="mt-2 lg:mt-3 text-green-500 text-lg font-bold">$744</h3>
      </div>
    </section>
  );
};

export default Item;
