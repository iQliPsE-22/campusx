import React from "react";
import Image from "next/image"; // Assuming you are using Next.js for image optimization
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ShopByCategory = ({ categories = [] }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-blue-500">S</span>HOP BY CATEGORY
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={fadeInUp}>
              <Link
                href={category.address}
                className="group block relative h-64 rounded-xl overflow-hidden"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                    Shop Now <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShopByCategory;
