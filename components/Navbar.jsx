import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="hidden bg-black text-white w-full lg:flex flex-row justify-around font-light">
      <NavLink address="/trading" link_name="Trading" />
      <NavLink address="/rental" link_name="Rental" />
      <NavLink address="/projects" link_name="Project & Assignments" />
      <NavLink address="/food_&_travel" link_name="Food & Travel" />
      <NavLink address="/furniture" link_name="Furniture" />
      <NavLink address="/counselling" link_name="Counselling" />
    </nav>
  );
};

export default Navbar;
