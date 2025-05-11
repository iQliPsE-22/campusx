"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  RefreshCcw,
  Shield,
  CheckCircle,
  Minus,
  Plus,
  ThumbsUp,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

export default function ProductDetailPage({ params }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");

  // This would typically be fetched from an API based on the product ID
  const product = {
    id: params.product,
    name: "POCO C61 (Ethereal Blue, 64 GB) (4 GB RAM)",
    price: 25000,
    originalPrice: 30000, // 16.7% off
    rating: 4.5,
    reviews: 128,
    stock: 15,
    description: `Experience lightning-fast performance and stunning visuals with the POCO C61 smartphone. Featuring 4GB RAM and 64GB storage, this device offers smooth multitasking and ample space for your apps and media. The vibrant display and powerful camera system deliver an immersive viewing and photography experience. Perfect for everyday use, gaming, and staying connected.`,
    features: [
      "4GB RAM | 64GB Storage (Expandable)",
      "Powerful Octa-core Processor",
      "5000mAh Long-lasting Battery",
      "13MP AI Dual Camera System",
      "6.5-inch HD+ Display",
      "Fast Charging Support",
      "Fingerprint and Face Unlock",
    ],
    colors: ["blue", "black", "green"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/sample.webp?height=600&width=600",
      "/sample.webp?height=600&width=600&color=gray",
      "/sample.webp?height=600&width=600&color=darkgray",
      "/sample.webp?height=600&width=600&color=lightgray",
    ],
    specifications: {
      general: [
        { name: "Brand", value: "POCO" },
        { name: "Model", value: "C61" },
        { name: "Color", value: "Ethereal Blue" },
        { name: "Operating System", value: "Android 13" },
      ],
      display: [
        { name: "Screen Size", value: "6.5 inches" },
        { name: "Resolution", value: "HD+ (1600 x 720 pixels)" },
        { name: "Display Type", value: "IPS LCD" },
        { name: "Refresh Rate", value: "60Hz" },
      ],
      performance: [
        { name: "Processor", value: "MediaTek Helio G85" },
        { name: "RAM", value: "4 GB" },
        { name: "Storage", value: "64 GB (Expandable up to 1TB)" },
        { name: "Battery", value: "5000 mAh" },
      ],
      camera: [
        { name: "Rear Camera", value: "13MP + 2MP" },
        { name: "Front Camera", value: "8MP" },
        { name: "Flash", value: "LED Flash" },
        { name: "Camera Features", value: "Night Mode, Portrait Mode, HDR" },
      ],
    },
    reviews: [
      {
        id: 1,
        user: "Rahul M.",
        rating: 5,
        date: "2 weeks ago",
        title: "Excellent value for money",
        comment:
          "I've been using this phone for 2 weeks now and I'm impressed with the performance. Battery life is exceptional and the camera quality is good for the price point.",
        helpful: 24,
      },
      {
        id: 2,
        user: "Priya S.",
        rating: 4,
        date: "1 month ago",
        title: "Great budget phone",
        comment:
          "Good performance for day-to-day tasks. The battery lasts all day with moderate usage. Camera could be better in low light but works well otherwise.",
        helpful: 18,
      },
      {
        id: 3,
        user: "Vikram K.",
        rating: 3,
        date: "3 weeks ago",
        title: "Decent but has some issues",
        comment:
          "The phone is good for basic usage but I experienced some lag while playing games. The camera is average and the build quality is okay.",
        helpful: 10,
      },
    ],
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex text-sm">
            <li className="hover:text-blue-400">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2">/</li>
            <li className="hover:text-blue-400">
              <Link href="/marketplace">Marketplace</Link>
            </li>
            <li className="mx-2">/</li>
            <li className="hover:text-blue-400">
              <Link href="/marketplace/electronics">Electronics</Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-gray-400 truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] md:h-[500px] bg-white rounded-xl overflow-hidden border border-gray-800">
              <Image
                src={product.images[selectedImage] || "/sample.webp"}
                alt={product.name}
                fill
                className="object-contain p-4"
                priority
              />
              <Button
                size="icon"
                variant="outline"
                className="absolute top-4 right-4 bg-black/50 border-gray-700 hover:bg-black/70"
                onClick={toggleFavorite}
              >
                <Heart
                  className={isFavorite ? "fill-red-500 text-red-500" : ""}
                />
              </Button>
            </div>

            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-700"
                  }`}
                >
                  <Image
                    src={image || "/sample.webp"}
                    alt={`Product thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="bg-blue-500/10 text-blue-400 border-blue-400 mb-2"
            >
              New Arrival
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-500"
                    }`}
                  />
                ))}
                <span className="ml-2 text-yellow-400 font-medium">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">
                {product.reviews.length} Reviews
              </span>
              <span className="text-gray-400">|</span>
              <span
                className={
                  product.stock > 5 ? "text-green-500" : "text-orange-500"
                }
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of Stock"}
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-green-500 font-medium">
                      {discount}% off
                    </span>
                  </>
                )}
              </div>
              <p className="text-gray-400 text-sm">Inclusive of all taxes</p>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-300 mb-6">{product.description}</p>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-medium">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.colors.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-medium">
                      Color: <span className="capitalize">{selectedColor}</span>
                    </h3>
                    <div className="flex space-x-3">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-10 h-10 rounded-full border-2 ${
                            selectedColor === color
                              ? "border-blue-500"
                              : "border-gray-700"
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Select ${color} color`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-medium">Size: {selectedSize}</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-10 h-10 rounded-md flex items-center justify-center ${
                            selectedSize === size
                              ? "bg-blue-600 text-white"
                              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <h3 className="font-medium">Quantity</h3>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="border-gray-700 hover:bg-gray-800"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center text-lg">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                      className="border-gray-700 hover:bg-gray-800"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button className="flex-1 h-12 bg-white text-black hover:bg-gray-100">
                Buy Now
              </Button>
            </div>

            {/* Shipping Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                <Truck className="h-6 w-6 text-blue-400 mb-2" />
                <h4 className="font-medium mb-1">Free Delivery</h4>
                <p className="text-sm text-gray-400">On orders above ₹1000</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                <RefreshCcw className="h-6 w-6 text-blue-400 mb-2" />
                <h4 className="font-medium mb-1">7-Day Returns</h4>
                <p className="text-sm text-gray-400">Easy returns policy</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                <Shield className="h-6 w-6 text-blue-400 mb-2" />
                <h4 className="font-medium mb-1">Secure Payments</h4>
                <p className="text-sm text-gray-400">Trusted payment methods</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-gray-900 p-1">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">
                Reviews ({product.reviews.length})
              </TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(product.specifications).map(
                  ([category, specs]) => (
                    <div key={category} className="space-y-4">
                      <h3 className="text-lg font-semibold capitalize">
                        {category}
                      </h3>
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <table className="w-full text-left">
                          <tbody>
                            {specs.map((spec, index) => (
                              <tr
                                key={index}
                                className={`border-b border-gray-800 ${
                                  index === specs.length - 1 ? "border-b-0" : ""
                                }`}
                              >
                                <td className="py-3 px-4 text-gray-400">
                                  {spec.name}
                                </td>
                                <td className="py-3 px-4 font-medium">
                                  {spec.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                )}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="pt-4">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 md:w-1/3">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-2">
                        {product.rating.toFixed(1)}
                      </h3>
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-400">
                        Based on {product.reviews.length} reviews
                      </p>
                    </div>

                    <div className="mt-6 space-y-3">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const count = product.reviews.filter(
                          (r) => Math.floor(r.rating) === rating
                        ).length;
                        const percentage =
                          (count / product.reviews.length) * 100;

                        return (
                          <div key={rating} className="flex items-center">
                            <div className="flex items-center w-12">
                              <span>{rating}</span>
                              <Star className="h-4 w-4 text-yellow-400 ml-1" />
                            </div>
                            <div className="flex-1 h-2 mx-2 bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-yellow-400"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-400 w-10 text-right">
                              {percentage.toFixed(0)}%
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                      Write a Review
                    </Button>
                  </div>

                  <div className="md:w-2/3 space-y-6">
                    {product.reviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-gray-900 p-6 rounded-lg border border-gray-800"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-medium">{review.title}</h4>
                            <div className="flex items-center mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-yellow w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400'
                                        : "text-gray-500"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-400 text-sm ml-2">
                                {review.date}
                              </span>
                            </div>
                          </div>
                          <div className="text-sm text-gray-400">
                            by {review.user}
                          </div>
                        </div>

                        <p className="mb-4">{review.comment}</p>

                        <div className="flex items-center justify-between">
                          <button className="flex items-center text-sm text-gray-400 hover:text-white">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful ({review.helpful})
                          </button>
                          <button className="flex items-center text-sm text-gray-400 hover:text-white">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Reply
                          </button>
                        </div>
                      </div>
                    ))}

                    <Button
                      variant="outline"
                      className="w-full border-gray-700"
                    >
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="pt-4">
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4">
                    Shipping Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Truck className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Delivery</h4>
                        <p className="text-gray-400 mt-1">
                          Orders are typically processed and shipped within 1-2
                          business days. Standard shipping takes 3-5 business
                          days, depending on your location. Express shipping
                          options are available at checkout.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <RefreshCcw className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Returns Policy</h4>
                        <p className="text-gray-400 mt-1">
                          We offer a 7-day return policy for most items. To be
                          eligible for a return, your item must be unused and in
                          the same condition that you received it. It must also
                          be in the original packaging. To complete your return,
                          we require a receipt or proof of purchase.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Important Note</h4>
                        <p className="text-gray-400 mt-1">
                          Electronics can only be returned if they are defective
                          or damaged upon arrival. Please inspect your items
                          carefully upon receipt and contact customer service
                          immediately if you receive a damaged product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4">
                    Warranty Information
                  </h3>
                  <p className="text-gray-400">
                    This product comes with a standard 1-year manufacturer
                    warranty covering defects in materials and workmanship.
                    Extended warranty options are available at checkout.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
