import React from "react";
import { FaArrowRight } from 'react-icons/fa6';
import Link  from 'next/link';
import Item from './../Item';

const Category_hightlight = (props) => {
  return (
    <div className="pt-4 p-2 mt-4 lg:mt-8 ">
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="itim text-center underline font-semibold text-lg lg:text-xl">
          From {props.category} Collection
        </h2>
        <Link
          href="/"
          className="text-xl lg:text-3xl text-blue-700 cursor-pointer hover:underline"
        >
          <FaArrowRight />
        </Link>
      </div>
      <div className="w-full  grid grid-cols-2 lg:grid-cols-4 lg:place-items-center gap-2 mt-4">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};


export default Category_hightlight;
