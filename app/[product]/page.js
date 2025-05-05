import React from "react";
import Image from "next/image";
import sample from "../../public/sample.webp";
import { Button } from "@/components/ui/button";
import CustomButton from "@/custom-components/CustomButton";

const Page = (props) => {
  return (
    <section className="min-h-dvh flex flex-col lg:flex-row pt-8 pb-8 ">
      <div className="w-full p-8 lg:w-1/2 bg-[#f0f0f0] flex items-center justify-center">
        <Image src={sample} alt="sample img" className="w-1/2" />
      </div>
      <div className="w-full lg:w-1/2 p-4 pl-8 pr-8 bg-black text-white flex flex-col">
        <h1 className="text-lg lg:text-2xl">
          POCO C61 (Ethereal Blue, 64 GB) (4 GB RAM)
        </h1>
        <h2 className="text-lg lg:text-2xl mt-2">₹25000</h2>
        <p className="text-sm pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          nostrum assumenda repellendus minus magnam eius maxime, nihil
          consectetur sit optio sint rerum quod. Ducimus consequatur itaque
          voluptatem nam, perferendis accusamus!
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-8 text-md lg:text-lg">
          <CustomButton bg=" bg-blue-600" color="text-white" text="Buy Now" />
          <CustomButton
            bg=" bg-[#f0f0f0]"
            color="text-black"
            text="Add to Cart"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
