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

const Hero = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Hero section starts */}
      <section className="hero-container min-h-dvh">
        <div className="bg-black p-8">
          <div>
            <h1 className="julius text-white text-center text-4xl">
              CAMPUSX MARKETPLACE
            </h1>
            <p className="quicksand text-[#71717a] text-center text-lg">
              Everything you need, is right here!
            </p>
          </div>
          <div className="poppins font-light flex items-center justify-center gap-8 mt-8 ">
            <Button className="inter p-4 pl-6 pr-6">EXPLORE</Button>
          </div>
          <div className="flex items-center justify-center ">
            <Image src={campus} alt="Heroimg" className="w-full lg:w-1/2 " />
          </div>
        </div>
      </section>
      <hr className="border-white border-2" />

      {/* Hire a writer */}
      <section className="flex flex-col lg:flex-row items-center justify-around p-12 rounded-lg shadow-lg">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start p-8">
          <Image
            src={Writer}
            alt="Writer"
            width="50"
            height="50"
            className="w-3/4 lg:w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left px-8 space-y-4">
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
      <section className="flex flex-col lg:flex-row items-center justify-around p-12 rounded-lg shadow-lg">
        <div className="w-full lg:w-1/2 text-center lg:text-left px-8 space-y-4">
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
            className="w-3/4 lg:w-full rounded-lg shadow-md"
          />
        </div>
      </section>
      <hr className="border-white border-2" />

      {/* Learn from peers */}
      <section className="min-h-dvh flex flex-col lg:flex-row items-center justify-around p-12 rounded-lg shadow-lg">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start p-8">
          <Image
            src={Developer}
            alt="Developer"
            width="50"
            height="50"
            className="w-3/4 lg:w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left px-8 space-y-4">
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
