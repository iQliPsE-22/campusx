"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Heroimg from "../../public/hero1.jpeg";
import campus from "../../public/campus.svg";
import CartPink from "../../public/cartPink.svg";
import Writer from "../../public/Left hander-pana.svg";
import seller from "../../public/Cash Payment-amico.svg";
import Developer from "../../public/Developer.svg";
import { motion, useScroll } from "framer-motion";

import Headline from "./../Headline";
import HopBtn from "./../HopBtn";
import CustomButton from "./../CustomButton";
import Hero_Block from "./Hero_Block";

const Hero = () => {
  return (
    <>
      {/* Hero section starts */}

      <section className="text-sm lg:text-md hero-container min-h-dvh w-full pt-2 p-8 lg:p-8 bg-black flex flex-col items-center">
        <Headline
          heading={"CAMPUSX MARKETPLACE"}
          text={"Everything you need, is right here!"}
        />
        <HopBtn />
        <Image src={campus} alt="Heroimg" className="w-full lg:w-1/2" />
      </section>
      <hr className="border-white border-2" />

      {/* Hire a writer */}

      <section className=" min-h-dvh flex flex-col lg:flex-row items-center justify-center lg:justify-around p-12 rounded-lg shadow-lg">
        <Hero_Block
          img={Writer}
          heading="Ace Your Assignments with Expert Help!"
          text="Need top-notch support? Hire a pro writer today and watch your work shine!"
          button_text="Get Professional Help"
          color="bg-blue-600"
          hover_color="bg-blue-700"
        />
      </section>
      <hr className="border-white border-2" />

      {/* Buy & Sell things */}
      <section className="min-h-dvh flex flex-col lg:flex-row items-center justify-center  lg:justify-around p-12 rounded-lg shadow-lg">
        <Hero_Block
          img={seller}
          heading="Buy & Sell Items with Ease!"
          text="Looking to buy or sell items? Our platform makes it easy to connect with buyers and sellers!"
          button_text="Buy & Sell Now"
          color="bg-blue-600"
          hover_color="bg-blue-700"
        />
      </section>
      <hr className="border-white border-2" />

      {/* Learn from peers */}
      <section className="min-h-dvh  flex flex-col lg:flex-row items-center justify-center  lg:justify-around p-12 rounded-lg shadow-lg">
        <Hero_Block
          img={Developer}
          heading="Learn from Peers!"
          text="Connect with other developers and learn from the best in the industry!"
          button_text="Connect Now"
          color="bg-blue-600"
          hover_color="bg-blue-700"
        />
      </section>
    </>
  );
};

export default Hero;
