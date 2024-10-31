import React from "react";
import Link from "next/link";
import Image from "next/image";
import Home from "../public/home.svg";
const Header = () => {
  return (
    <div className="shadow-sm shadow-[#407bff] p-4 flex flex-row justify-between items-center ">
      <h1 className="pl-4 text-xl lg:text-2xl quicksand">CAMPUSX</h1>
      <nav>
        <ul className="flex space-x-4 font-light">
          <li>
            <Link href="/" className="hover:text-[#E90074]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:text-[#E90074]">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-[#E90074]">
              Login/Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
