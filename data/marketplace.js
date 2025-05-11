// All marketplace data in one file for easy import
export const marketCategories = [
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

export const topDeals = [
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

export const trendingItems = [
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

export const featuredCategories = [
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
