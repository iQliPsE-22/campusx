"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaUser, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import ResCategoryMenu from "./Res_category_menu";

export default function ResNavbar() {
  const [showCategories, setShowCategories] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowCategories(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <nav className="lg:hidden pt-2 fixed bottom-0 w-full bg-transparent bg-opacity-80 backdrop-blur-sm border-t border-gray-800 shadow-inner z-50">
      {showCategories && (
        <ResCategoryMenu onClose={() => setShowCategories(false)} />
      )}

      <ul className="flex justify-around py-2">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition-colors"
          >
            <FaHome className="w-4 h-4 mb-1" />
            Home
          </Link>
        </li>
        {/* Categories */}
        <li ref={ref} className="relative">
          <button
            onClick={() => setShowCategories((s) => !s)}
            className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition-colors focus:outline-none"
          >
            <MdCategory className="w-4 h-4 mb-1" />
            Categories
          </button>
        </li>
        {/* Login */}
        <li>
          <Link
            href="/login"
            className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition-colors"
          >
            <FaUser className="w-4 h-4 mb-1" />
            Login
          </Link>
        </li>
        {/* Cart */}
        <li>
          <Link
            href="/cart"
            className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition-colors"
          >
            <FaShoppingCart className="w-4 h-4 mb-1" />
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
