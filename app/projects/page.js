"use client";
import React from "react";
import Headline from "@/custom-components/Headline";
import expert_img from "../../public/expert.jpg";
import developer_img from "../../public/developer.jpg";
import project_img from "../../public/project.jpg";
import Category from "@/custom-components/Category";

const page = () => {
  return (
    <section className="bg-black text-white h-full pt-2 lg:pt-8 p-4 pb-8 lg:p-8 min-h-dvh">
      <Headline
        text="Get your projects done right - hire experts, ace your assignments!"
        heading="CAMPUSX ASSIGNMENTS"
      />
      <div className="text-center tracking-wide">
        <h3 className="font-light text-sm lg:text-lg">
          Are you an Expert?{" "}
          <span className="text-blue-700 cursor-pointer hover:underline">
            Register Now!
          </span>
        </h3>
      </div>
      <div className="mt-8 lg:mt-4 p-2 lg:p-8 w-full flex flex-row justify-between lg:justify-around gap-2">
        <Category
          img_src={expert_img}
          category_name={"Hire an Expert"}
          address={"/projects/hire-expert"}
        />
        <Category
          img_src={project_img}
          category_name={"Get Some Working Projects"}
          address={"/projects/project-library"}
        />
        <Category
          img_src={developer_img}
          category_name={"Connect with a Developer"}
          address={"/projects/connect-developer"}
        />
      </div>
    </section>
  );
};

export default page;
