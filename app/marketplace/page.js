"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  ShoppingBag,
  Tag,
  Bookmark,
  ChevronRight,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Headline from "@/custom-components/Headline";
import { CTASection } from '@/custom-components/ui/cta-section';

const categories = [
  {
    id: "men",
    name: "Men's Fashion",
    image: "/men.jpg",
    address: "/marketplace/men",
    description: "Stylish apparel and accessories for men",
  },
  {
    id: "women",
    name: "Women's Fashion",
    image: "/women.jpg",
    address: "/marketplace/women",
    description: "Trendy clothing and accessories for women",
  },
  {
    id: "electronics",
    name: "Electronics",
    image: "/electronics.jpg",
    address: "/marketplace/electronics",
    description: "Gadgets, devices, and tech accessories",
  },
  {
    id: "stationary",
    name: "Stationery",
    image: "/stationary.jpg",
    address: "/marketplace/stationary",
    description: "School and office supplies",
  },
];

const topDeals = [
  {
    id: "deal1",
    title: "Apple MacBook Air",
    discount: "15% OFF",
    category: "Electronics",
    image: "/electronics.jpg",
    originalPrice: 92000,
    discountedPrice: 78200,
  },
  {
    id: "deal2",
    title: "Nike Air Zoom Pegasus",
    discount: "20% OFF",
    category: "Men's Fashion",
    image: "/men.jpg",
    originalPrice: 12000,
    discountedPrice: 9600,
  },
  {
    id: "deal3",
    title: "Sony WH-1000XM4 Headphones",
    discount: "25% OFF",
    category: "Electronics",
    image: "/electronics.jpg",
    originalPrice: 29990,
    discountedPrice: 22490,
  },
];

const trendingItems = [
  {
    id: "trend1",
    title: "Smart Watch Series 5",
    image: "/electronics.jpg",
    price: 18999,
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: "trend2",
    title: "Leather Messenger Bag",
    image: "/men.jpg",
    price: 3499,
    category: "Men's Fashion",
    rating: 4.5,
  },
  {
    id: "trend3",
    title: "Wireless Earbuds Pro",
    image: "/electronics.jpg",
    price: 7999,
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: "trend4",
    title: "Casual Summer Dress",
    image: "/women.jpg",
    price: 2499,
    category: "Women's Fashion",
    rating: 4.6,
  },
];

const featuredCategories = [
  {
    name: "Campus Essentials",
    image: "/stationary.jpg",
    count: 24,
    items: ["Notebooks", "Backpacks", "Pens", "Calculators"],
  },
  {
    name: "Tech Gadgets",
    image: "/electronics.jpg",
    count: 42,
    items: ["Headphones", "Power Banks", "Webcams", "Speakers"],
  },
  {
    name: "Dorm Decor",
    image: "/women.jpg",
    count: 18,
    items: ["Posters", "Lights", "Storage", "Plants"],
  },
];

export default function MarketplacePage() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/electronics.jpg"
            alt="Marketplace background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Headline
              heading="MARKETPLACE"
              text="Trade Smart, Shop Easy — Your Campus Marketplace Awaits!"
              className="text-3xl lg:text-5xl mb-8"
            />

            <div className="max-w-2xl mx-auto mt-8">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search for products, categories, or brands..."
                  className="h-14 pl-12 pr-4 bg-white/10 backdrop-blur-sm border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 bg-blue-600 hover:bg-blue-700"
                >
                  Search
                </Button>
              </form>

              <div className="flex flex-wrap justify-center mt-4 gap-2">
                <span className="text-gray-400 text-sm">Popular:</span>
                {[
                  "Headphones",
                  "Textbooks",
                  "Winter Clothing",
                  "Dorm Essentials",
                ].map((tag) => (
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
          </motion.div>
        </div>
      </section>

      {/* Main Categories Section */}
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

      {/* Top Deals Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-blue-500">F</span>LASH DEALS
            </h2>
            <div className="flex items-center text-sm bg-gray-800 px-3 py-1 rounded-lg font-mono">
              <span className="text-yellow-400 mr-2">Ends in:</span>
              <span>12:34:56</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topDeals.map((deal) => (
              <Link
                href={`/product/${deal.id}`}
                key={deal.id}
                className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative h-48">
                  <Image
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {deal.discount}
                  </div>
                  <div className="absolute top-3 right-3 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs">
                    {deal.category}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-blue-400 transition-colors">
                    {deal.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">
                        ₹{deal.discountedPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        ₹{deal.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-xs text-blue-400 font-medium flex items-center">
                      Shop Now <ChevronRight className="h-3 w-3 ml-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-gray-700 hover:border-gray-600"
            >
              View All Deals
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <TrendingUp className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-500">T</span>RENDING NOW
            </h2>
            <Link
              href="/marketplace/trending"
              className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
            >
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingItems.map((item) => (
              <Link
                href={`/product/${item.id}`}
                key={item.id}
                className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative">
                  <div className="relative h-48">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2">
                      <button className="bg-white text-black hover:bg-gray-200 p-2 rounded-full transition-colors">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                      <button className="bg-white text-black hover:bg-gray-200 p-2 rounded-full transition-colors">
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-xs text-gray-400 mb-1">
                    {item.category}
                  </div>
                  <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm ml-1">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-blue-500">F</span>EATURED COLLECTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-gray-300 text-sm">
                      {category.count} items
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Tag className="h-4 w-4 text-blue-400 mr-2" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Explore Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    
      <CTASection
        title="Ready to start selling?"
        description="Got items you no longer need? List them on CampusX Marketplace and
            turn them into cash today!"
        primaryAction={{
          label: "Start Selling",
          icon: <ShoppingBag className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Learn More",
        }}
      />
    </div>
  );
}
