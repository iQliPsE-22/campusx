"use client";
import Headline from "./../../components/Headline";
import Category from "./../../components/Category";
import properites_img from "../../public/properties.jpg";
import vehicle_img from "../../public/vehicle.jpg";
import electronic_img from "../../public/electronics.jpg";
const page = () => {
  return (
    <section className="bg-black text-white h-full pt-2 lg:pt-8 p-4 pb-8 lg:p-8 min-h-dvh">
      <Headline
        text="Rent bikes, rooms, and more—campus life made easy!"
        heading="CAMPUSX RENTAL"
      />
      <div className="text-center tracking-wide">
        <h3 className="font-light text-sm lg:text-lg">
          Make money by renting it out!{" "}
          <span className="text-blue-700 cursor-pointer hover:underline">
            Register Now!
          </span>
        </h3>
      </div>
      <div className="mt-8 lg:mt-4 p-2 lg:p-8 w-full flex flex-row justify-between lg:justify-around gap-2">
        <Category img_src={properites_img} category_name="Properties" />
        <Category img_src={vehicle_img} category_name="Vehicles" />
        <Category img_src={electronic_img} category_name={"Electronics"} />
      </div>
    </section>
  );
};

export default page;
