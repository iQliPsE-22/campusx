import React from "react";
import Link from "next/link";
import { BiFoodMenu } from "react-icons/bi";
import { GiBed, GiBookshelf } from "react-icons/gi";
import { AiOutlineProject, AiOutlineCar } from "react-icons/ai";
import { MdCategory } from "react-icons/md";

const Res_category_menu = ({ setShowCategories }) => {
  const categories = [
    { name: "Trading", link: "/trading", icon: <MdCategory /> },
    { name: "Rental", link: "/rental", icon: <AiOutlineCar /> },
    {
      name: "Projects",
      link: "/projects",
      icon: <AiOutlineProject />,
    },
    {
      name: "Blogs",
      link: "/category/food-travel",
      icon: <BiFoodMenu />,
    },
    { name: "Furniture", link: "/category/furniture", icon: <GiBookshelf /> },
    { name: "Counselling", link: "/category/counselling", icon: <GiBed /> },
  ];

  return (
    <div className="absolute flex items-center justify-center w-dvw left-[100%] transform -translate-x-1/2 bottom-[2rem] shadow-lg  pt-8 pb-8 p-4  transition-all duration-300 ease-in-out">
      <ul className="w-full text-sm p-4 grid grid-cols-3 font-light bg-black bg-opacity-30 backdrop-blur-lg text-white rounded-md">
        {categories.map((category, index) => (
          <li
            key={index}
            className="p-2 flex justify-center items-center hover:text-[#E90074]"
            onClick={() => setShowCategories(false)}
          >
            <Link
              href={category.link}
              className="flex flex-col justify-center items-center "
            >
              <div className="w-[60px] h-[60px] bg-[#E90074] space-x-2 text-lg rounded-full flex items-center justify-center">
                {category.icon}
              </div>
              <p className = "text-xs p-2">{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Res_category_menu;
