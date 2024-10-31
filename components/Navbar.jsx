import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-around font-light shadow-lg shadow-[#407bff]">
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#2d56b3] hover:text-[#2d56b3]">
          <Link href="/">Men</Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#2d56b3] hover:text-[#2d56b3]">
          <Link href="/register">Women</Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#2d56b3] hover:text-[#2d56b3]">
          <Link href="/login" className="hover:text-[#2d56b3]">
            Stationary
          </Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#2d56b3] hover:text-[#2d56b3]">
          <Link href="/login" className="hover:text-[#2d56b3]">
            Electronics & Gadgets
          </Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#2d56b3] hover:text-[#2d56b3]">
          <Link href="/login" className="hover:text-[#2d56b3]">
            Books & Stuff
          </Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#2d56b3] hover:text-[#2d56b3]">
          <Link href="/login" className="hover:text-[#2d56b3]">
            Furniture
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
