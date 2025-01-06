import Link from "next/link";
const NavLink = ({ address, link_name }) => {
  return (
    <div className="shadow w-full text-center p-2 cursor-pointer hover:shadow-[#2d56b3] hover:text-[#2d56b3]">
      <Link href={address}>{link_name}</Link>
    </div>
  );
};

export default NavLink;
