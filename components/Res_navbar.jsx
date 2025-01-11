"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const ResNavbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="lg:hidden w-full fixed bottom-0 p-4 bg-black text-white shadow-inner shadow-lg shadow-[#407bff]">
      <ul className="flex justify-around items-center space-x-4 text-xs">
        {/* Home Link */}
        <li className="relative">
          <Link href="/" className="flex flex-col items-center hover:text-[#E90074]">
            <FaHome />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </li>

        {/* Categories with Dropdown */}
        <li className="relative">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="flex flex-col items-center hover:text-[#E90074] focus:outline-none"
          >
            <MdCategory />
            <span className="text-xs mt-1">Categories</span>
          </button>
          {showCategories && (
            <div className="itim fancy-border absolute bottom-[3.5rem] bg-black opacity-90 text-white w-40 shadow-lg p-8 ">
              <ul className="flex flex-col items-start p-2 space-y-1 font-light">
                <li>
                  <Link href="/trading" className="hover:text-[#E90074]">
                    Trading
                  </Link>
                </li>
                <li>
                  <Link href="/rental" className="hover:text-[#E90074]">
                    Rental
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#E90074]">
                    Projects & Assignment
                  </Link>
                </li>
                <li>
                  <Link href="/category/sports" className="hover:text-[#E90074]">
                    Food & Travel
                  </Link>
                </li>
                <li>
                  <Link href="/category/sports" className="hover:text-[#E90074]">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/category/sports" className="hover:text-[#E90074]">
                    Counselling
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* User/Login Link */}
        <li className="relative">
          <Link href="/login" className="flex flex-col items-center hover:text-[#E90074]">
            <FaUser />
            <span className="text-xs mt-1">Login</span>
          </Link>
        </li>

        {/* Cart Link */}
        <li className="relative">
          <Link href="/cart" className="flex flex-col items-center hover:text-[#E90074]">
            <FaShoppingCart />
            <span className="text-xs mt-1">Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ResNavbar;
