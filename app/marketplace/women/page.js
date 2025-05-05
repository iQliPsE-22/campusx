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

const WomenPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);

  // Simulated product data
  useEffect(() => {
    const womenProducts = [
      {
        id: "w1",
        title: "Floral Print Summer Dress",
        price: 1299,
        category: "dresses",
        rating: 4.6,
        reviews: 32,
        image: "/women.jpg",
        trending: true,
        discount: "15% OFF",
        tags: ["Summer", "Casual"],
        sizes: ["XS", "S", "M", "L"],
      },
      {
        id: "w2",
        title: "High-Waisted Skinny Jeans",
        price: 1599,
        category: "jeans",
        rating: 4.8,
        reviews: 47,
        image: "/women.jpg",
        trending: true,
        sizes: ["26", "28", "30", "32"],
      },
      {
        id: "w3",
        title: "Oversized Knit Sweater",
        price: 1399,
        category: "tops",
        rating: 4.4,
        reviews: 23,
        image: "/women.jpg",
        discount: "20% OFF",
        tags: ["Winter", "Cozy"],
        sizes: ["S", "M", "L"],
      },
      {
        id: "w4",
        title: "Faux Leather Crossbody Bag",
        price: 999,
        category: "accessories",
        rating: 4.7,
        reviews: 38,
        image: "/women.jpg",
        trending: true,
      },
      {
        id: "w5",
        title: "Block Heel Ankle Boots",
        price: 2499,
        category: "shoes",
        rating: 4.5,
        reviews: 29,
        image: "/women.jpg",
        sizes: ["36", "37", "38", "39", "40"],
      },
      {
        id: "w6",
        title: "Satin Finish Blouse",
        price: 899,
        category: "tops",
        rating: 4.2,
        reviews: 17,
        image: "/women.jpg",
        discount: "10% OFF",
        tags: ["Formal", "Office"],
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        id: "w7",
        title: "Minimalist Gold Hoop Earrings",
        price: 599,
        category: "accessories",
        rating: 4.9,
        reviews: 52,
        image: "/women.jpg",
        trending: true,
      },
      {
        id: "w8",
        title: "Yoga Leggings with Pockets",
        price: 1199,
        category: "activewear",
        rating: 4.8,
        reviews: 64,
        image: "/women.jpg",
        discount: "25% OFF",
        tags: ["Fitness", "Comfort"],
        sizes: ["XS", "S", "M", "L"],
      },
      {
        id: "w9",
        title: "Flowy Maxi Skirt",
        price: 1099,
        category: "skirts",
        rating: 4.3,
        reviews: 21,
        image: "/women.jpg",
        sizes: ["S", "M", "L"],
      },
      {
        id: "w10",
        title: "Casual Denim Jacket",
        price: 1899,
        category: "jackets",
        rating: 4.6,
        reviews: 33,
        image: "/women.jpg",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "w11",
        title: "Boho Style Tote Bag",
        price: 899,
        category: "accessories",
        rating: 4.4,
        reviews: 19,
        image: "/women.jpg",
      },
      {
        id: "w12",
        title: "Elegant Cocktail Dress",
        price: 2999,
        category: "dresses",
        rating: 4.7,
        reviews: 28,
        image: "/women.jpg",
        tags: ["Party", "Elegant"],
        sizes: ["XS", "S", "M", "L"],
      },
    ];

    setTimeout(() => {
      setProducts(womenProducts);
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
    { id: "all", name: "All Items", image: "/women.jpg" },
    { id: "dresses", name: "Dresses", image: "/women.jpg" },
    { id: "tops", name: "Tops & Blouses", image: "/women.jpg" },
    { id: "jeans", name: "Jeans & Pants", image: "/women.jpg" },
    { id: "skirts", name: "Skirts", image: "/women.jpg" },
    { id: "activewear", name: "Activewear", image: "/women.jpg" },
    { id: "jackets", name: "Jackets", image: "/women.jpg" },
    { id: "shoes", name: "Shoes", image: "/women.jpg" },
    { id: "accessories", name: "Accessories", image: "/women.jpg" },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-black text-white min-h-dvh">
      <PageHeader
        imageSrc="/women.jpg"
        title="WOMEN'S FASHION"
        titleAccent="W"
        subtitle="Discover the latest trends for your campus style"
        primaryBtnText="Trending Now"
        primaryBtnLink="#trending"
        secondaryBtnText="Shop All"
        secondaryBtnLink="#all-products"
      />
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
          text="Trendy Fashion for the Modern Campus Life"
          heading="SHOP WOMEN'S COLLECTION"
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

export default WomenPage;
