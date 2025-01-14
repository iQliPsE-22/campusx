"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import Header from "./../../components/Header";
import Headline from "./../../components/Headline";
import men_img from "../../public/men.jpg";
import women_img from "../../public/women.jpg";
import electronic_img from "../../public/electronics.jpg";
import stationary_img from "../../public/stationary.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Category from "./../../components/category_items/Category";
import Category_hightlight from "./../../components/category_items/Category_hightlight";

const page = () => {
  return (
    <section className="bg-black text-white h-full pt-2 lg:pt-8 p-4 pb-8 lg:p-8 min-h-dvh">
      <Headline
        text="Trade Smart, Shop Easy Your Campus Marketplace Awaits!"
        heading="CAMPUSX TRADING"
      />
      <div className="text-center tracking-wide">
        <h3 className="font-light text-sm lg:text-lg">
          Want to sell Something?{" "}
          <span className="text-blue-700 cursor-pointer hover:underline">
            List it Now!
          </span>
        </h3>
      </div>
      <div className="mt-8 lg:mt-4 p-2 lg:p-8 w-full flex flex-row justify-between lg:justify-around">
        <Category img_src={men_img} category_name={"Men"} />
        <Category img_src={women_img} category_name={"Women"} />
        <Category img_src={electronic_img} category_name={"Electronics"} />
        <Category img_src={stationary_img} category_name={"Stationary"} />
      </div>

      <Category_hightlight category={"Men"} />
      <Category_hightlight category={"Women"} />
      <Category_hightlight category={"Electronics"} />
      <Category_hightlight category={"Stationary"} />
    </section>
  );
};

export default page;
