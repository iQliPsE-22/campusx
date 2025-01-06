import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="hidden w-full lg:flex flex-row justify-around font-light">
      <NavLink address="/" link_name="Trading" />
      <NavLink address="/rental" link_name="Rental Properties" />
      <NavLink address="/stationary" link_name="Stationary" />
      <NavLink address="/content_writing" link_name="Content Writing" />
      <NavLink address="/food_&_travel" link_name="Food & Travel" />
      <NavLink address="/furniture" link_name="Furniture" />
    </nav>
  );
};

export default Navbar;
