"use client";

import Link from "next/link";
import Headline from "@/custom-components/Headline";
import men_img from "../../public/men.jpg";
import women_img from "../../public/women.jpg";
import electronic_img from "../../public/electronics.jpg";
import stationary_img from "../../public/stationary.jpg";
import Category from "@/custom-components/Category";

const page = () => {
  return (
    <section className="bg-black text-white h-full pt-2 lg:pt-8 p-4 pb-8 lg:p-8 min-h-dvh">
      <Headline
        text="Trade Smart, Shop Easy Your Campus Marketplace Awaits!"
        heading="CAMPUSX MARKETPLACE"
        className="text-2xl md:text-3xl lg:text-4xl"
      />

      <div className="mt-8 lg:mt-4 gap-2 p-2 lg:p-8 w-full flex flex-row justify-between lg:justify-around">
        <Category img_src={men_img} category_name={"Men"} address={"/men"} />
        <Category
          img_src={women_img}
          category_name={"Women"}
          address={"/women"}
        />
        <Category img_src={electronic_img} category_name={"Electronics"} />
        <Category img_src={stationary_img} category_name={"Stationary"} />
      </div>
    </section>
  );
};

export default page;
