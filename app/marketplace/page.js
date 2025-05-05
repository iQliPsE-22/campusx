"use client";

import Headline from "@/custom-components/Headline";
import men_img from "../../public/men.jpg";
import women_img from "../../public/women.jpg";
import electronic_img from "../../public/electronics.jpg";
import stationary_img from "../../public/stationary.jpg";
import Category from "@/custom-components/Category";

const Page = () => {
  const categories = [
    { img_src: men_img, category_name: "Men", address: "/marketplace/men" },
    { img_src: women_img, category_name: "Women", address: "/marketplace/women" },
    {
      img_src: electronic_img,
      category_name: "Electronics",
      address: "/marketplace/electronics",
    },
    {
      img_src: stationary_img,
      category_name: "Stationary",
      address: "/marketplace/stationary",
    },
  ];

  return (
    <section className="bg-black text-white min-h-dvh py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Headline
          text="Trade Smart, Shop Easy — Your Campus Marketplace Awaits!"
          heading="MARKETPLACE"
          className="text-3xl lg:text-5xl"
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {categories.map((category, index) => (
            <Category
              key={index}
              img_src={category.img_src}
              category_name={category.category_name}
              address={category.address}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
