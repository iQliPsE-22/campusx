// components/Res_category_menu.jsx
import React from "react";
import Link from "next/link";
import { BiFoodMenu } from "react-icons/bi";
import { GiBed, GiBookshelf } from "react-icons/gi";
import { AiOutlineProject, AiOutlineCar } from "react-icons/ai";
import { MdCategory } from "react-icons/md";

const categories = [
  {
    name: "Trading",
    link: "/trading",
    icon: <MdCategory className="w-6 h-6" />,
  },
  {
    name: "Rental",
    link: "/rental",
    icon: <AiOutlineCar className="w-6 h-6" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <AiOutlineProject className="w-6 h-6" />,
  },
];

export default function ResCategoryMenu({ onClose }) {
  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 grid grid-cols-3 gap-4 origin-bottom animate-scale-in">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          href={cat.link}
          onClick={onClose}
          className="flex flex-col items-center space-y-1 p-2 hover:bg-blue-600 rounded-lg transition-colors"
        >
          <div className="text-blue-400">{cat.icon}</div>
          <span className="text-xs text-white font-light">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
}
