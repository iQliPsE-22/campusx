"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Heroimg from "../public/hero1.jpeg";
import campus from "../public/campus.svg";
import CartPink from "../public/cartPink.svg";
import Writer from "../public/Left hander-pana.svg";
import seller from "../public/Cash Payment-amico.svg";
import Developer from "../public/Developer.svg";
import { motion, useScroll } from "framer-motion";

import CustomButton from "./CustomButton";
import Headline from "./Headline";
import HopBtn from "./HopBtn";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Hero section starts */}
      <section className="mt-4 hero-container min-h-dvh w-full p-8 bg-black flex flex-col items-center">
        <Headline />
        <HopBtn />
        <Image src={campus} alt="Heroimg" className="w-full lg:w-1/2" />
      </section>
      <hr className="border-white border-2" />

      {/* Hire a writer */}

      <section className="min-h-dvh flex flex-col lg:flex-row items-center justify-around p-12 rounded-lg shadow-lg">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-4 p-8">
          <Image
            src={Writer}
            alt="Writer"
            width="50"
            height="50"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-8 space-y-4 text-justify ">
          <h2 className="quicksand text-2xl font-bold text-blue-600">
            Ace Your Assignments with Expert Help!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Need top-notch support? Hire a pro writer today and watch your work
            shine!
          </p>
          <CustomButton
            text="Get Professional Help"
            color="bg-blue-600"
            hover_color="bg-blue-700"
          />
        </div>
      </section>
      <hr className="border-white border-2" />
      {/* Buy & Sell things */}
      <section className="min-h-dvh flex flex-col lg:flex-row items-center justify-around p-12 rounded-lg shadow-lg">
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-8 space-y-4 text-justify ">
          <h2 className="quicksand text-2xl font-bold text-blue-600">
            Buy or Sell, Anytime!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you’re looking for something new or pre-loved, find the best
            deals or list your items for sale right here!
          </p>
          <CustomButton
            text="Start Trading"
            color="bg-blue-600"
            hover_color="bg-blue-700"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start p-8">
          <Image
            src={seller}
            alt="seller"
            width="50"
            height="50"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
      <hr className="border-white border-2" />
      {/* Learn from peers */}
      <section className="min-h-dvh  flex flex-col lg:flex-row items-center justify-around p-12 rounded-lg shadow-lg">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start p-8">
          <Image
            src={Developer}
            alt="Developer"
            width="50"
            height="50"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-8 space-y-4 text-justify ">
          <h2 className="quicksand text-2xl font-bold text-blue-600">
            Learn from Experienced Seniors!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Gain valuable insights and guidance from seniors who have mastered
            the path. Leverage their expertise to boost your own journey to
            success!
          </p>
          <CustomButton
            text="Learn from Experience"
            color="bg-blue-600"
            hover_color="bg-blue-700"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
