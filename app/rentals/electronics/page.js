"use client";

import Headline from "@/custom-components/Headline";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Shield, Star } from "lucide-react";
import { PageHero } from "@/custom-components/ui/page-hero";

const ElectronicsRentalPage = () => {
  const [filter, setFilter] = useState("all");

  const electronics = [
    {
      id: "e1",
      title: "Canon EOS 5D Mark IV DSLR Camera",
      type: "camera",
      price: "1500",
      period: "day",
      image: "/electronic.jpg",
      deposit: "15000",
      availability: "Immediate",
      minRental: "1 day",
      rating: 4.9,
      reviews: 42,
    },
    {
      id: "e2",
      title: 'MacBook Pro 16" M1 Pro',
      type: "laptop",
      price: "1200",
      period: "day",
      image: "/electronic.jpg",
      deposit: "20000",
      availability: "2 days notice",
      minRental: "3 days",
      rating: 4.8,
      reviews: 35,
    },
    {
      id: "e3",
      title: "DJI Mavic Air 2 Drone",
      type: "camera",
      price: "1800",
      period: "day",
      image: "/electronic.jpg",
      deposit: "18000",
      availability: "1 day notice",
      minRental: "1 day",
      rating: 4.7,
      reviews: 28,
    },
    {
      id: "e4",
      title: 'iPad Pro 12.9" with Apple Pencil',
      type: "tablet",
      price: "800",
      period: "day",
      image: "/electronic.jpg",
      deposit: "10000",
      availability: "Immediate",
      minRental: "2 days",
      rating: 4.6,
      reviews: 31,
    },
    {
      id: "e5",
      title: "Sony PlayStation 5 Console",
      type: "gaming",
      price: "700",
      period: "day",
      image: "/electronic.jpg",
      deposit: "15000",
      availability: "Immediate",
      minRental: "2 days",
      rating: 4.9,
      reviews: 47,
    },
    {
      id: "e6",
      title: "Dell XPS 15 Laptop",
      type: "laptop",
      price: "900",
      period: "day",
      image: "/electronic.jpg",
      deposit: "15000",
      availability: "1 day notice",
      minRental: "3 days",
      rating: 4.5,
      reviews: 23,
    },
  ];

  const filteredElectronics =
    filter === "all"
      ? electronics
      : electronics.filter((item) => item.type === filter);

  return (
    <section className="bg-black text-white min-h-dvh py-16 ">
      <PageHero
        heading="ELECTRONICS RENTAL"
        text="Rent Premium Electronics Without Breaking the Bank"
        backgroundImage="/electronics.jpg"
        popularSearches={["Camera", "Calculator", "Mobiles", "Chargers"]}
        // searchValue={searchQuery}
        // onSearchChange={setSearchQuery}
        // onSearch={handleSearch}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mt-8 mb-12 flex justify-center">
          <div className="inline-flex bg-gray-800 rounded-lg p-1 flex-wrap justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("laptop")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "laptop"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Laptops
            </button>
            <button
              onClick={() => setFilter("camera")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "camera"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Cameras
            </button>
            <button
              onClick={() => setFilter("gaming")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "gaming"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Gaming
            </button>
            <button
              onClick={() => setFilter("tablet")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "tablet"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Tablets
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredElectronics.map((item) => (
            <Link href={`/rentals/electronics/${item.id}`} key={item.id}>
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-4px]">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ₹{item.price}/{item.period}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Shield className="h-4 w-4 mr-2" />
                      <span className="text-sm">Deposit: ₹{item.deposit}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Min: {item.minRental}</span>
                    </div>
                    <div className="flex items-center text-gray-300 col-span-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        Availability: {item.availability}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">
                        ({item.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-blue-400 text-sm">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectronicsRentalPage;
