"use client";

import Headline from "@/custom-components/Headline";
import Category from "@/custom-components/Category";

import properties_img from "../../public/properties.jpg";
import vehicle_img from "../../public/vehicle.jpg";
import electronic_img from "../../public/electronics.jpg";

const Page = () => {
  const categories = [
    {
      img_src: properties_img,
      category_name: "Properties",
      address: "/rentals/properties",
    },
    {
      img_src: vehicle_img,
      category_name: "Vehicles",
      address: "/rentals/vehicles",
    },
    {
      img_src: electronic_img,
      category_name: "Electronics",
      address: "/rentals/electronics",
    },
  ];

  return (
    <section className="bg-black text-white min-h-dvh py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Headline
          text="Trade Smart, Shop Easy — Your Campus Marketplace Awaits!"
          heading="RENTALS"
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
