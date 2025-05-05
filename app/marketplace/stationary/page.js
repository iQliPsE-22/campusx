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
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import PageHeader from "./../../../custom-components/PageHeader";
import Loading from "./../../../custom-components/Loading";
import ShopByCategory from "./../../../custom-components/ShopByCategory";

const StationaryPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);

  // Simulated product data
  useEffect(() => {
    const stationaryProducts = [
      {
        id: "s1",
        title: "Premium Leather-Bound Journal Set",
        price: 1299,
        category: "notebooks",
        rating: 4.7,
        reviews: 42,
        image: "/stationary.jpg",
        trending: true,
        tags: ["Premium", "Journal"],
      },
      {
        id: "s2",
        title: "Pilot G2 Gel Pens (Pack of 12)",
        price: 499,
        category: "pens",
        rating: 4.9,
        reviews: 87,
        image: "/stationary.jpg",
        trending: true,
        discount: "10% OFF",
        tags: ["Pilot", "Gel Pens"],
      },
      {
        id: "s3",
        title: "Moleskine Classic Notebook",
        price: 899,
        category: "notebooks",
        rating: 4.8,
        reviews: 65,
        image: "/stationary.jpg",
        discount: "15% OFF",
        tags: ["Moleskine", "Notebook"],
      },
      {
        id: "s4",
        title: "Staedtler Drawing Pencil Set",
        price: 599,
        category: "pencils",
        rating: 4.6,
        reviews: 38,
        image: "/stationary.jpg",
        trending: true,
        tags: ["Staedtler", "Drawing"],
      },
      {
        id: "s5",
        title: "HP Premium Printer Paper (500 Sheets)",
        price: 399,
        category: "paper",
        rating: 4.3,
        reviews: 29,
        image: "/stationary.jpg",
        tags: ["HP", "Paper"],
      },
      {
        id: "s6",
        title: "Wireless Charging Desk Organizer",
        price: 1499,
        category: "organizers",
        rating: 4.5,
        reviews: 34,
        image: "/stationary.jpg",
        discount: "20% OFF",
        tags: ["Organizer", "Charging"],
      },
      {
        id: "s7",
        title: "Scientific Calculator - TI-84 Plus",
        price: 7999,
        category: "calculators",
        rating: 4.9,
        reviews: 112,
        image: "/stationary.jpg",
        trending: true,
        tags: ["TI-84", "Calculator"],
      },
      {
        id: "s8",
        title: "Ergonomic Desk Lamp with USB Port",
        price: 1299,
        category: "accessories",
        rating: 4.4,
        reviews: 47,
        image: "/stationary.jpg",
        discount: "5% OFF",
        tags: ["Lamp", "USB"],
      },
      {
        id: "s9",
        title: "Oxford Index Cards (Pack of 300)",
        price: 199,
        category: "paper",
        rating: 4.2,
        reviews: 56,
        image: "/stationary.jpg",
        tags: ["Oxford", "Index Cards"],
      },
      {
        id: "s10",
        title: "Adjustable Laptop Stand",
        price: 899,
        category: "accessories",
        rating: 4.6,
        reviews: 73,
        image: "/stationary.jpg",
        discount: "12% OFF",
        tags: ["Laptop", "Stand"],
      },
      {
        id: "s11",
        title: "Watercolor Paint Set - 24 Colors",
        price: 1199,
        category: "art",
        rating: 4.7,
        reviews: 41,
        image: "/stationary.jpg",
        trending: true,
        tags: ["Art", "Watercolor"],
      },
      {
        id: "s12",
        title: "Compact Stapler with 1000 Staples",
        price: 349,
        category: "accessories",
        rating: 4.3,
        reviews: 89,
        image: "/stationary.jpg",
        discount: "25% OFF",
        tags: ["Stapler", "Office"],
      },
    ];

    setTimeout(() => {
      setProducts(stationaryProducts);
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
    { id: "all", name: "All Stationery", image: "/stationary.jpg" },
    { id: "notebooks", name: "Notebooks & Journals", image: "/stationary.jpg" },
    { id: "pens", name: "Pens & Markers", image: "/stationary.jpg" },
    { id: "pencils", name: "Pencils & Drawing", image: "/stationary.jpg" },
    { id: "paper", name: "Paper Products", image: "/stationary.jpg" },
    { id: "organizers", name: "Organizers", image: "/stationary.jpg" },
    { id: "calculators", name: "Calculators", image: "/stationary.jpg" },
    { id: "art", name: "Art Supplies", image: "/stationary.jpg" },
    { id: "accessories", name: "Accessories", image: "/stationary.jpg" },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-black text-white min-h-dvh">
      <PageHeader
        imageSrc="/stationary.jpg"
        title="STATIONERY"
        titleAccent="S"
        subtitle="Quality Supplies for Academic Excellence"
        primaryBtnText="Top Picks"
        primaryBtnLink="#trending"
        secondaryBtnText="Shop All"
        secondaryBtnLink="#all-products"
      />
      <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-blue-400 mr-2" />
              <h2 className="text-xl md:text-2xl font-bold">
                BACK TO SCHOOL ESSENTIALS
              </h2>
            </div>
            <Link
              href="#all-products"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter((p) =>
                ["notebooks", "pens", "calculators"].includes(p.category)
              )
              .slice(0, 4)
              .map((product) => (
                <ProductCard
                  key={`school-${product.id}`}
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
            <span className="text-blue-500">T</span>RENDING ITEMS
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
          text="Quality Supplies for Academic Excellence"
          heading="SHOP STATIONERY"
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
                      max="10000"
                      step="500"
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
                setPriceRange([0, 10000]);
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
      {/* Study Tips */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-blue-500">S</span>TUDY TIPS & ORGANIZATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="relative h-48">
                <Image
                  src="/stationary.jpg"
                  alt="Note Taking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">
                  Effective Note-Taking Strategies
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Learn how to take better notes and improve retention.
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
                  src="/stationary.jpg"
                  alt="Desk Organization"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">
                  Desk Organization for Productivity
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Set up your workspace for maximum focus and efficiency.
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
                  src="/stationary.jpg"
                  alt="Study Planner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">
                  Creating the Perfect Study Planner
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Plan your semester with these organizational tips.
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

export default StationaryPage;
