"use client";
import React, { useState } from "react";
import loginimg from "../../public/Nerd-rafiki.svg";
import Image from "next/image";
import CustomButton from "./../../components/CustomButton";
import Link from "next/link";
import Headline from "./../../components/Headline";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="bg-black h-full pt-8 p-4 pb-8 lg:p-8 min-h-dvh">
        <Headline />
        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-around">
          <div className="w-4/5 lg:w-1/2 flex justify-center p-2 lg:p-4 ">
            <Image
              src={loginimg}
              alt="Writer"
              width="50"
              height="50"
              className="w-3/4 lg:w-full rounded-lg"
            />
          </div>

          <form className="inter text-sm lg:text-md bg-[#262626] w-full h-full lg:w-1/2 lg:text-left p-4 pt-8 lg:p-8 space-y-4 rounded-lg">
            <h2 className="julius text-white text-xl text-center ">LOGIN</h2>
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
                  className="outline-none mt-1 block w-full p-2 text-sm lg:text-md border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="outline-none text-sm lg:text-md mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="w-full"
                text="Login"
                color="bg-blue-600"
              />
              <div className="text-sm">
                <p className="text-slate-700 text-md leading-relaxed">
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
