import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-around font-light shadow-sm shadow-[#FF4191]">
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#E90074] hover:text-[#E90074]">
          <Link href="/">Men</Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#E90074] hover:text-[#E90074]">
          <Link href="/register">Women</Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#E90074] hover:text-[#E90074]">
          <Link href="/login" className="hover:text-[#E90074]">
            Stationary
          </Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#E90074] hover:text-[#E90074]">
          <Link href="/login" className="hover:text-[#E90074]">
            Electronics & Gadgets
          </Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#E90074] hover:text-[#E90074]">
          <Link href="/login" className="hover:text-[#E90074]">
            Books & Stuff
          </Link>
        </li>
        <li className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#E90074] hover:text-[#E90074]">
          <Link href="/login" className="hover:text-[#E90074]">
            Furniture
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
