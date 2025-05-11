"use client";

import Headline from "@/custom-components/Headline";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize, Star } from "lucide-react";
import { PageHero } from "@/custom-components/ui/page-hero";

const PropertiesPage = () => {
  const [filter, setFilter] = useState("all");

  const properties = [
    {
      id: "prop1",
      title: "Modern Studio Apartment Near Campus",
      location: "0.5 miles from University",
      price: "12000",
      type: "apartment",
      beds: 1,
      baths: 1,
      area: "450 sq ft",
      image: "/properties.jpg",
      rating: 4.8,
      reviews: 24,
    },
    {
      id: "prop2",
      title: "Shared 3BR House with Backyard",
      location: "1.2 miles from University",
      price: "8000",
      type: "shared",
      beds: 1,
      baths: 1.5,
      area: "Single Room in 1200 sq ft house",
      image: "/properties.jpg",
      rating: 4.5,
      reviews: 18,
    },
    {
      id: "prop3",
      title: "Luxury 2BR Apartment with Gym Access",
      location: "0.8 miles from University",
      price: "22000",
      type: "apartment",
      beds: 2,
      baths: 2,
      area: "850 sq ft",
      image: "/properties.jpg",
      rating: 4.9,
      reviews: 32,
    },
    {
      id: "prop4",
      title: "Cozy Private Room in Family Home",
      location: "1.5 miles from University",
      price: "7500",
      type: "shared",
      beds: 1,
      baths: 1,
      area: "180 sq ft",
      image: "/properties.jpg",
      rating: 4.6,
      reviews: 15,
    },
    {
      id: "prop5",
      title: "Furnished Studio with Utilities Included",
      location: "0.3 miles from University",
      price: "14500",
      type: "apartment",
      beds: 1,
      baths: 1,
      area: "400 sq ft",
      image: "/properties.jpg",
      rating: 4.7,
      reviews: 29,
    },
    {
      id: "prop6",
      title: "Spacious 1BR in Student Complex",
      location: "On Campus",
      price: "16000",
      type: "apartment",
      beds: 1,
      baths: 1,
      area: "550 sq ft",
      image: "/properties.jpg",
      rating: 4.4,
      reviews: 41,
    },
  ];

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((property) => property.type === filter);

  return (
    <section className="bg-black text-white min-h-dvh py-16">
      <PageHero
        heading="PROPERTIES"
        text="Find Your Perfect Student Housing"
        backgroundImage="/properties.jpg"
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
              onClick={() => setFilter("apartment")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "apartment"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Apartments
            </button>
            <button
              onClick={() => setFilter("shared")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "shared"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Shared Spaces
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Link href={`/rentals/properties/${property.id}`} key={property.id}>
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-4px]">
                <div className="relative h-48 w-full">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ₹{property.price}/mo
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-gray-400 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="flex items-center text-gray-300">
                      <BedDouble className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.beds} Bed</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.baths} Bath</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Maximize className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-sm font-medium">
                        {property.rating}
                      </span>
                      <span className="text-sm text-gray-400 ml-1">
                        ({property.reviews} reviews)
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

export default PropertiesPage;
