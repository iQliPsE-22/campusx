"use client";

import Headline from "@/custom-components/Headline";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fuel, Users, Clock, Star } from "lucide-react";
import { PageHero } from "@/custom-components/ui/page-hero";

const VehiclesPage = () => {
  const [filter, setFilter] = useState("all");

  const vehicles = [
    {
      id: "v1",
      title: "Honda Activa 6G",
      type: "scooter",
      price: "300",
      period: "day",
      image: "/vehicle.jpg",
      fuel: "Petrol",
      capacity: "2 Persons",
      availability: "Immediate",
      rating: 4.7,
      reviews: 32,
    },
    {
      id: "v2",
      title: "Royal Enfield Classic 350",
      type: "motorcycle",
      price: "800",
      period: "day",
      image: "/vehicle.jpg",
      fuel: "Petrol",
      capacity: "2 Persons",
      availability: "2 days notice",
      rating: 4.9,
      reviews: 45,
    },
    {
      id: "v3",
      title: "Maruti Suzuki Swift",
      type: "car",
      price: "1500",
      period: "day",
      image: "/vehicle.jpg",
      fuel: "Petrol",
      capacity: "5 Persons",
      availability: "1 day notice",
      rating: 4.6,
      reviews: 28,
    },
    {
      id: "v4",
      title: "Hyundai i20",
      type: "car",
      price: "1800",
      period: "day",
      image: "/vehicle.jpg",
      fuel: "Petrol",
      capacity: "5 Persons",
      availability: "Immediate",
      rating: 4.5,
      reviews: 19,
    },
    {
      id: "v5",
      title: "TVS Jupiter",
      type: "scooter",
      price: "250",
      period: "day",
      image: "/vehicle.jpg",
      fuel: "Petrol",
      capacity: "2 Persons",
      availability: "Immediate",
      rating: 4.4,
      reviews: 23,
    },
    {
      id: "v6",
      title: "Bajaj Pulsar NS200",
      type: "motorcycle",
      price: "700",
      period: "day",
      image: "/vehicle.jpg",
      fuel: "Petrol",
      capacity: "2 Persons",
      availability: "1 day notice",
      rating: 4.8,
      reviews: 37,
    },
  ];

  const filteredVehicles =
    filter === "all"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.type === filter);

  return (
    <section className="bg-black text-white min-h-dvh py-16">
      <PageHero
        heading="VEHICLES"
        text="Rent Vehicles for Your Campus Commute"
        backgroundImage="/vehicle.jpg"
        popularSearches={["Camera", "Calculator", "Mobiles", "Chargers"]}
        // searchValue={searchQuery}
        // onSearchChange={setSearchQuery}
        // onSearch={handleSearch}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mt-8 mb-12 flex justify-center">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
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
              onClick={() => setFilter("car")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "car"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Cars
            </button>
            <button
              onClick={() => setFilter("motorcycle")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "motorcycle"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Motorcycles
            </button>
            <button
              onClick={() => setFilter("scooter")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "scooter"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Scooters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <Link href={`/rentals/vehicles/${vehicle.id}`} key={vehicle.id}>
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-4px]">
                <div className="relative h-48 w-full">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ₹{vehicle.price}/{vehicle.period}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {vehicle.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Fuel className="h-4 w-4 mr-2" />
                      <span className="text-sm">{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-300 col-span-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        Availability: {vehicle.availability}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-sm font-medium">
                        {vehicle.rating}
                      </span>
                      <span className="text-sm text-gray-400 ml-1">
                        ({vehicle.reviews} reviews)
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

export default VehiclesPage;
