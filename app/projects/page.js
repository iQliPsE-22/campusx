"use client";

import React from "react";
import Headline from "@/custom-components/Headline";
import Category from "@/custom-components/Category";

import expert_img from "../../public/expert.jpg";
import developer_img from "../../public/developer.jpg";
import project_img from "../../public/project.jpg";

const Page = () => {
  const categories = [
    {
      img_src: expert_img,
      category_name: "Hire an Expert",
      address: "/projects/hire-expert",
    },
    {
      img_src: project_img,
      category_name: "Get Some Working Projects",
      address: "/projects/project-library",
    },
    {
      img_src: developer_img,
      category_name: "Connect with a Developer",
      address: "/projects/connect-developer",
    },
  ];

  return (
    <section className="bg-black text-white min-h-dvh py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Headline
          text="Collaborate, Learn, Deliver — Your Assignment Hub!"
          heading="ASSIGNMENTS"
          className="text-3xl lg:text-5xl"
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
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
