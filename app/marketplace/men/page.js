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
} from "lucide-react";
import Link from "next/link";
import PageHeader from "./../../../custom-components/PageHeader";
import Loading from "./../../../custom-components/Loading";
import ShopByCategory from "./../../../custom-components/ShopByCategory";

const MenPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);

  // Simulated product data
  useEffect(() => {
    const menProducts = [
      {
        id: "m1",
        title: "Premium Cotton Graphic T-Shirt",
        price: 799,
        category: "tshirts",
        rating: 4.5,
        reviews: 28,
        image: "/men.jpg",
        trending: true,
        discount: "20% OFF",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "m2",
        title: "Slim Fit Denim Jeans",
        price: 1499,
        category: "jeans",
        rating: 4.7,
        reviews: 42,
        image: "/men.jpg",
        trending: true,
        sizes: ["30", "32", "34", "36"],
      },
      {
        id: "m3",
        title: "Casual Hooded Sweatshirt",
        price: 1299,
        category: "hoodies",
        rating: 4.3,
        reviews: 19,
        image: "/men.jpg",
        discount: "15% OFF",
        sizes: ["M", "L", "XL"],
      },
      {
        id: "m4",
        title: "Classic Oxford Button-Down Shirt",
        price: 999,
        category: "shirts",
        rating: 4.6,
        reviews: 35,
        image: "/men.jpg",
        sizes: ["S", "M", "L", "XL", "XXL"],
      },
      {
        id: "m5",
        title: "Lightweight Bomber Jacket",
        price: 2499,
        category: "jackets",
        rating: 4.8,
        reviews: 23,
        image: "/men.jpg",
        trending: true,
        sizes: ["M", "L", "XL"],
      },
      {
        id: "m6",
        title: "Athletic Running Shoes",
        price: 3499,
        category: "shoes",
        rating: 4.4,
        reviews: 31,
        image: "/men.jpg",
        discount: "10% OFF",
        sizes: ["8", "9", "10", "11"],
      },
      {
        id: "m7",
        title: "Minimalist Analog Watch",
        price: 1999,
        category: "accessories",
        rating: 4.9,
        reviews: 47,
        image: "/men.jpg",
        trending: true,
      },
      {
        id: "m8",
        title: "Canvas Backpack with Laptop Sleeve",
        price: 1299,
        category: "accessories",
        rating: 4.2,
        reviews: 18,
        image: "/men.jpg",
        discount: "25% OFF",
      },
      {
        id: "m9",
        title: "Striped Polo T-Shirt",
        price: 899,
        category: "tshirts",
        rating: 4.3,
        reviews: 22,
        image: "/men.jpg",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "m10",
        title: "Cargo Jogger Pants",
        price: 1199,
        category: "jeans",
        rating: 4.1,
        reviews: 15,
        image: "/men.jpg",
        sizes: ["30", "32", "34", "36"],
      },
      {
        id: "m11",
        title: "Leather Wallet",
        price: 799,
        category: "accessories",
        rating: 4.7,
        reviews: 39,
        image: "/men.jpg",
      },
      {
        id: "m12",
        title: "Formal Blazer",
        price: 3999,
        category: "jackets",
        rating: 4.8,
        reviews: 27,
        image: "/men.jpg",
        sizes: ["M", "L", "XL"],
      },
    ];

    setTimeout(() => {
      setProducts(menProducts);
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
    { id: "all", name: "All Items", image: "/men.jpg" },
    { id: "tshirts", name: "T-Shirts", image: "/men.jpg" },
    { id: "shirts", name: "Shirts", image: "/men.jpg" },
    { id: "jeans", name: "Jeans & Pants", image: "/men.jpg" },
    { id: "hoodies", name: "Hoodies", image: "/men.jpg" },
    { id: "jackets", name: "Jackets", image: "/men.jpg" },
    { id: "shoes", name: "Shoes", image: "/men.jpg" },
    { id: "accessories", name: "Accessories", image: "/men.jpg" },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-black text-white min-h-dvh">
      {/* Hero Banner */}
      <PageHeader
        imageSrc="/men.jpg"
        title="MEN'S FASHION"
        titleAccent="M"
        subtitle="Elevate your campus style with our premium collection"
        primaryBtnText="Trending Now"
        primaryBtnLink="#trending"
        secondaryBtnText="Shop All"
        secondaryBtnLink="#all-products"
      />
      {/* Trending Section */}
      <div id="trending" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-blue-500">T</span>RENDING NOW
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
            <div key={product.id} className="relative group">
              {product.discount && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </div>
              )}
              <ProductCard
                imgsrc={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Products Section */}
      <div id="all-products" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <Headline
          text="Stylish Essentials for the Modern Student"
          heading="SHOP MEN'S COLLECTION"
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
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
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
            <div key={product.id} className="relative group">
              {product.discount && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </div>
              )}
              <ProductCard
                imgsrc={product.image}
                title={product.title}
                price={product.price}
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col gap-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Quick View
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
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
                setPriceRange([0, 5000]);
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
    </section>
  );
};

export default MenPage;
