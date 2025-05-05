import React from "react";
import Image from "next/image"; // Assuming you are using Next.js for image optimization

const ShopByCategory = ({ categories = [] }) => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="text-blue-500">S</span>HOP BY CATEGORY
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(1, 5).map((category) => (
            <div
              key={category.id}
              className="relative h-40 md:h-60 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={category.image} // Default to "/stationary.jpg" if no image provided
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-medium">{category.name}</h3>
                <p className="text-sm text-gray-300 group-hover:text-blue-300 transition-colors">
                  Shop Now →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
