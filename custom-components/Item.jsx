import React from "react";
import Image from "next/image";
import Link from "next/link";
import item_img from "../public/hero1.jpeg";

const Item = ({ imgsrc, title, price }) => {
  return (
    <Link
      href="/product-page"
      className="block min-w-[300px] max-w-[600px] w-full"
    >
      <section className="bg-[#121212] border border-[#2a2a2a] rounded-xl overflow-hidden transition-all hover:scale-[1.01] duration-200">
        {/* Image */}
        <div className="relative w-full h-48 md:h-60">
          <Image
            src={imgsrc || item_img}
            alt="item"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-gray-200 text-base md:text-lg font-medium line-clamp-2">
            {title || "Sample title goes here with two line clamp."}
          </h2>

          <div className="mt-3 flex justify-between items-center">
            <span className="text-white text-lg font-semibold">
              ₹{price || "999"}
            </span>
            <span className="text-sm text-gray-400">View →</span>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Item;
