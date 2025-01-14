import Link from "next/link";
const NavLink = ({ address, link_name }) => {
  return (
      <Link
        href={address}
        className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#2d56b3] hover:text-[#2d56b3]"
      >
        {link_name}
      </Link>
  );
};

export default NavLink;
