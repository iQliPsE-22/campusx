"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ACCENT = "#3B82F6"; // same blue as your “C”

const Category = ({ img_src, category_name, address = "#" }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={address}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`
        relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur shadow-md
        group transform transition-all duration-300
        hover:scale-[1.03] hover:shadow-xl
        border-t-4 border-transparent max-w-80
        ${hover ? `border-t-[${ACCENT}]` : ""}
      `}
    >
      <Image
        src={img_src}
        alt={category_name}
        width={500}
        height={500}
        className="w-full h-64 md:h-80 lg:h-100 object-cover rounded-2xl
                   filter lg:grayscale group-hover:filter-none
                   transition-all duration-300"
        loading="lazy"
      />

      {/* always‑on overlay, slide up on hover */}
      <div
        className={`
          absolute inset-x-0 bottom-0
          bg-black/80 text-white text-center
          py-3 transition-transform duration-300
          ${
            hover
              ? "translate-y-0"
              : "translate-y-0 lg:translate-y-full group-hover:translate-y-0"
          }
        `}
      >
        <h2 className="text-sm md:text-base font-medium tracking-wide">
          {category_name}
        </h2>
      </div>
    </Link>
  );
};

export default Category;
