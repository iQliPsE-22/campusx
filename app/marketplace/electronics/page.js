"use client";

import { useState, useEffect } from "react";
import Headline from "@/custom-components/Headline";
import ProductCard from "@/custom-components/ProductCard";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Star,
  ArrowUpDown,
  Tag,
  Zap,
} from "lucide-react";
import Link from "next/link";
import PageHeader from "./../../../custom-components/PageHeader";
import Loading from "./../../../custom-components/Loading";
import ShopByCategory from "./../../../custom-components/ShopByCategory";

const ElectronicsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);

  // Simulated product data
  useEffect(() => {
    const electronicsProducts = [
      {
        id: "e1",
        title: 'Apple MacBook Pro 13" M2 Chip',
        price: 89999,
        category: "laptops",
        rating: 4.8,
        reviews: 56,
        image: "/electronics.jpg",
        trending: true,
        tags: ["Apple", "Laptop"],
      },
      {
        id: "e2",
        title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
        price: 24999,
        category: "audio",
        rating: 4.9,
        reviews: 87,
        image: "/electronics.jpg",
        trending: true,
        discount: "10% OFF",
        tags: ["Sony", "Headphones"],
      },
      {
        id: "e3",
        title: "Samsung Galaxy S22 Ultra 256GB",
        price: 74999,
        category: "phones",
        rating: 4.7,
        reviews: 112,
        image: "/electronics.jpg",
        discount: "15% OFF",
        tags: ["Samsung", "Smartphone"],
      },
      {
        id: "e4",
        title: 'Apple iPad Air 10.9" 64GB WiFi',
        price: 54999,
        category: "tablets",
        rating: 4.6,
        reviews: 43,
        image: "/electronics.jpg",
        trending: true,
        tags: ["Apple", "Tablet"],
      },
      {
        id: "e5",
        title: "Dell XPS 15 Laptop - 11th Gen i7",
        price: 129999,
        category: "laptops",
        rating: 4.5,
        reviews: 38,
        image: "/electronics.jpg",
        tags: ["Dell", "Laptop"],
      },
      {
        id: "e6",
        title: "Bose QuietComfort Earbuds",
        price: 19999,
        category: "audio",
        rating: 4.7,
        reviews: 65,
        image: "/electronics.jpg",
        discount: "20% OFF",
        tags: ["Bose", "Earbuds"],
      },
      {
        id: "e7",
        title: "Canon EOS R6 Mirrorless Camera",
        price: 215999,
        category: "cameras",
        rating: 4.9,
        reviews: 29,
        image: "/electronics.jpg",
        trending: true,
        tags: ["Canon", "Camera"],
      },
      {
        id: "e8",
        title: "Nintendo Switch OLED Model",
        price: 29999,
        category: "gaming",
        rating: 4.8,
        reviews: 74,
        image: "/electronics.jpg",
        discount: "5% OFF",
        tags: ["Nintendo", "Gaming"],
      },
      {
        id: "e9",
        title: "Logitech MX Master 3 Wireless Mouse",
        price: 7999,
        category: "accessories",
        rating: 4.7,
        reviews: 92,
        image: "/electronics.jpg",
        tags: ["Logitech", "Accessories"],
      },
      {
        id: "e10",
        title: "Samsung 32-inch 4K UHD Monitor",
        price: 32999,
        category: "monitors",
        rating: 4.6,
        reviews: 47,
        image: "/electronics.jpg",
        discount: "12% OFF",
        tags: ["Samsung", "Monitor"],
      },
      {
        id: "e11",
        title: "JBL Flip 5 Portable Bluetooth Speaker",
        price: 8999,
        category: "audio",
        rating: 4.5,
        reviews: 118,
        image: "/electronics.jpg",
        trending: true,
        tags: ["JBL", "Speaker"],
      },
      {
        id: "e12",
        title: "Anker PowerCore 26800 Power Bank",
        price: 4999,
        category: "accessories",
        rating: 4.7,
        reviews: 203,
        image: "/electronics.jpg",
        discount: "25% OFF",
        tags: ["Anker", "Power Bank"],
      },
    ];

    setTimeout(() => {
      setProducts(electronicsProducts);
      setIsLoading(false);
    }, 500);
  }, []);

  // Filter products based on active filter and price range
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeFilter === "all" || product.category === activeFilter;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    // Default: featured/trending items first
    return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
  });

  // Get trending products
  const trendingProducts = products.filter((product) => product.trending);

  // Categories for filter
  const categories = [
    {
      id: "all",
      name: "All Electronics",
      image: "/electronics.jpg",
      address: "market",
    },
    {
      id: "laptops",
      name: "Laptops",
      image: "/electronics.jpg",
      address: "market",
    },
    {
      id: "phones",
      name: "Smartphones",
      image: "/electronics.jpg",
      address: "market",
    },
    {
      id: "tablets",
      name: "Tablets",
      image: "/electronics.jpg",
      address: "market",
    },
    {
      id: "audio",
      name: "Audio",
      image: "/electronics.jpg",
      address: "market",
    },
    {
      id: "cameras",
      name: "Cameras",
      image: "/electronics.jpg",
      address: "market",
    },
    {
      id: "gaming",
      name: "Gaming",
      image: "/electronics.jpg",
      address: "market",
    },
    {
      id: "monitors",
      name: "Monitors",
      image: "/electronics.jpg",
      address: "market",
    },
    {
      id: "accessories",
      name: "Accessories",
      image: "/electronics.jpg",
      address: "market",
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-black text-white min-h-dvh">
      <PageHeader
        imageSrc="/electronics.jpg"
        title="ELECTRONICS"
        titleAccent="E"
        subtitle="Find the Latest Tech at Student-Friendly Prices"
        primaryBtnText="Trending Tech"
        primaryBtnLink="#trending"
        secondaryBtnText="Browse All"
        secondaryBtnLink="#all-products"
      />
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-yellow-400 mr-2" />
              <h2 className="text-xl md:text-2xl font-bold">FLASH DEALS</h2>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded-lg">
              <span className="text-yellow-400 font-medium">Ends in:</span>
              <span className="bg-gray-800 px-2 py-1 rounded text-white font-mono">
                23:45:19
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter((p) => p.discount)
              .slice(0, 4)
              .map((product) => (
                <ProductCard
                  key={`flash-${product.id}`}
                  productId={product.id}
                  imgsrc={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews}
                  discount={product.discount}
                  tags={product.tags}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div id="trending" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-blue-500">T</span>RENDING TECH
          </h2>
          <Link
            href="#all-products"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            View All <ChevronDown className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              imgsrc={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              discount={product.discount}
              tags={product.tags}
            />
          ))}
        </div>
      </div>

      {/* Main Products Section */}
      <div id="all-products" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <Headline
          text="Find the Latest Tech at Student-Friendly Prices"
          heading="BROWSE ELECTRONICS"
          className="text-3xl lg:text-4xl mb-8"
        />

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ArrowUpDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="bg-gray-900 rounded-lg p-4 mb-6 border border-gray-800 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3 text-gray-300">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeFilter === category.id
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-gray-800"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3 text-gray-300">
                    Price Range
                  </h3>
                  <div className="px-3">
                    <div className="flex justify-between mb-2 text-sm text-gray-400">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([
                          priceRange[0],
                          Number.parseInt(e.target.value),
                        ])
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3 text-gray-300">Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        className="flex items-center w-full px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-600"
                            } mr-0.5`}
                          />
                        ))}
                        <span className="ml-2">{rating}+ Stars</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4 pt-4 border-t border-gray-800">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg mr-2">
                  Reset Filters
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              imgsrc={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              discount={product.discount}
              tags={product.tags}
            />
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <Tag className="h-12 w-12 mx-auto mb-4 text-gray-500" />
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setPriceRange([0, 100000]);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors">
              &lt;
            </button>
            <button className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <ShopByCategory categories={categories} />

      {/* Tech Guides */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-blue-500">T</span>ECH GUIDES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="relative h-48">
                <Image
                  src="/electronics.jpg"
                  alt="Laptop Buying Guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">
                  Laptop Buying Guide for Students
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Find the perfect laptop for your academic needs and budget.
                </p>
                <Link
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="relative h-48">
                <Image
                  src="/electronics.jpg"
                  alt="Smartphone Comparison"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">
                  Top 5 Smartphones for 2023
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Compare the latest smartphones to find your perfect match.
                </p>
                <Link
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="relative h-48">
                <Image
                  src="/electronics.jpg"
                  alt="Audio Guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">
                  Ultimate Audio Guide for Students
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  From headphones to speakers - find the best audio gear.
                </p>
                <Link
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicsPage;
