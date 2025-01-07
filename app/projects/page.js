"use client";
import React from "react";
import Headline from "./../../components/Headline";
import Category from "./../../components/Category";
import expert_img from "../../public/expert.jpg";
import developer_img from "../../public/developer.jpg";
import project_img from "../../public/project.jpg";
const page = () => {
  return (
    <section className="bg-black text-white h-full pt-8 p-4 pb-8 lg:p-8 min-h-dvh">
      <Headline
        text="Get your projects done right - hire experts, ace your assignments!"
        heading="CAMPUSX ASSIGNMENTS"
      />
      <div className="text-center tracking-wide">
        <h3 className="font-light">
          Are you an Expert?{" "}
          <span className="text-blue-700 cursor-pointer hover:underline">
            Register Now!
          </span>
        </h3>
      </div>
      <div className="mt-4 w-full flex flex-row justify-around gap-2">
        <Category img_src={expert_img} category_name={"Hire a Expert"} />
        <Category img_src={developer_img} category_name={"Need a Developer?"} />
        <Category img_src={project_img} category_name={"Buy Projects"} />
      </div>
    </section>
  );
};

export default page;
