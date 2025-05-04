"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/custom-components/CustomButton";
import Link from "next/link";
import Headline from "@/custom-components/Headline";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="h-full pt-8 p-4 pb-8 lg:p-8 min-h-dvh">
        <Headline
          heading={"CAMPUSX SPACE"}
          text={"Assignments, Trades, and Rentals — All in One Place!"}
        />
        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-around">
          <div className="w-4/5 lg:w-1/2 flex justify-center p-2 lg:p-4 ">
            <Image
              src="/login.svg"
              alt="Writer"
              width="50"
              height="50"
              className="w-3/4 lg:w-full rounded-lg"
            />
          </div>

          <form className="inter text-sm lg:text-md bg-[#262626] w-full h-full lg:w-1/2 lg:text-left p-4 pt-8 lg:p-8 space-y-4 rounded-lg">
            <h2 className="text-white text-xl text-center font-medium">
              LOGIN
            </h2>
            <div className="space-y-4">
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
                  className="outline-none bg-white text-black mt-1 block w-full p-2 text-sm lg:text-md border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="outline-none bg-white text-black text-sm lg:text-md mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              <CustomButton
                type="submit"
                className="w-full bg-blue-600 font-medium"
              >
                Login
              </CustomButton>
              <div className="text-sm">
                <p className="text-[#4c4c4c] text-md leading-relaxed">
                  Don&apos;t have an Account?{" "}
                  <Link href="/signup">
                    <span className="text-[#407bff] cursor-pointer">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
