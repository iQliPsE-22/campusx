import Link from "next/link";
import { FaUser, FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";

const Res_navbar = () => {
  return (
    <nav className="lg:hidden w-full fixed bottom-0 p-4 bg-black text-white flex justify-center shadow-inner shadow-lg shadow-[#407bff]">
      <ul className="w-full flex space-x-4 font-light justify-around">
        <li>
          <Link href="/" className="hover:text-[#E90074]">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link href="/register" className="hover:text-[#E90074]">
            <MdCategory />
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-[#E90074]">
            <FaUser />
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-[#E90074]">
            <FaCartShopping />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Res_navbar;
