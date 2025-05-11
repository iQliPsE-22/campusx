"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Headline from "@/custom-components/Headline";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function PageHero({
  heading,
  text,
  backgroundImage,
  actions = [],
  searchQuery,
  setSearchQuery,
  handleSearch,
  popularSearches = [],
  headingClassName = "text-3xl lg:text-5xl mb-4 lg:mb-8",
}) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 "></div>
      </div>

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Headline
            heading={heading}
            text={text}
            className={headingClassName}
          />
          <div className="hidden md:block max-w-2xl mx-auto mt-8">
            <form
              // onSubmit={handleSearch}
              className="relative"
            >
              <Input
                type="text"
                placeholder="Search for products, categories, or brands..."
                className="h-14 pl-12 pr-4 text-sm lg:text-base bg-white/10 backdrop-blur-sm border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button
                type="submit"
                className="absolute text-white right-2 top-1/2 transform -translate-y-1/2 h-10 bg-blue-600 hover:bg-blue-700"
              >
                Search
              </Button>
            </form>

            <div className="flex flex-wrap justify-center mt-4 gap-2">
              <span className="text-gray-400 text-sm">Popular:</span>
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  className="text-sm text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition"
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          {/* {actions.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mt-5">
              {actions.map((action, index) => (
                <Link href={action.href} key={index}>
                  <Button
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white"
                  >
                    {action.icon}
                    <span className="ml-2">{action.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          )} */}
        </motion.div>
      </div>
    </section>
  );
}
