"use client";
import React, { useState } from "react";
import signupimg from "../../public/signup.svg";
import Image from "next/image";
import CustomButton from "./../../components/CustomButton";
import Link from "next/link";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-black p-8">
        <h1 className="julius text-white text-center text-4xl">
          CAMPUSX MARKETPLACE
        </h1>
        <p className="quicksand text-[#71717a] text-center text-lg">
          Everything you need, is right here!
        </p>
      </div>
      <section className="bg-black h-full flex flex-col lg:flex-row items-center justify-around pt-0 p-12">
        <div className="w-full lg:w-1/2 flex justify-center p-8">
          <Image
            src={signupimg}
            alt="Writer"
            width="50"
            height="50"
            className="w-3/4 lg:w-full rounded-lg"
          />
        </div>
        <form className="bg-[#262626] w-full h-full lg:w-1/2 lg:text-left p-8 space-y-4 rounded-lg">
          <h2 className="julius text-white text-xl text-center ">SIGN UP</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="Full Name"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your Full Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-blue-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-white"
              >
                Confirm Password
              </label>
              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            <div>
              <CustomButton
                type="submit"
                className="w-full"
                text="Sign Up"
                color="bg-blue-600"
              />
            </div>
            <div>
              <p className="text-slate-700 text-md leading-relaxed">
                Already have an Account?{" "}
                <Link href="/login">
                  <span className="text-[#407bff] cursor-pointer">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
