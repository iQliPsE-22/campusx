"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, ShoppingCart, Heart, Star } from 'lucide-react'

const ProductCard = ({ 
  imgsrc, 
  title, 
  price, 
  rating = 4.5, 
  reviews = 0, 
  discount = null, 
  tags = [], 
  productId = "product-1" 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const formattedPrice = typeof price === 'string' ? price : price?.toString() || "999"
  
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Cart functionality would be implemented here
    console.log("Added to cart:", title)
  }

  const handleToggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const handleQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Quick view functionality would be implemented here
    console.log("Quick view:", title)
  }

  return (
    <Link
      href={`/product/${productId}`}
      className="group block w-full transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 h-full hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-4px] flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}
            </div>
          )}
          
          {/* Favorite Button */}
          <button
            onClick={handleToggleFavorite}
            className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
          >
            <Heart 
              className={`h-4 w-4 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-white'}`} 
            />
          </button>

          {/* Product Image */}
          <Image
            src={imgsrc || "/placeholder.svg?height=300&width=400"}
            alt={title || "Product image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Hover Actions Overlay */}
          <div 
            className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex gap-2">
              <button
                onClick={handleQuickView}
                className="bg-white text-black hover:bg-gray-200 p-2 rounded-full transition-colors"
                aria-label="Quick view"
              >
                <Eye className="h-5 w-5" />
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-white text-sm md:text-base font-medium line-clamp-2 mb-1 group-hover:text-blue-400 transition-colors">
            {title || "Sample product title"}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${
                    i < Math.floor(rating) 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-600'
                  }`} 
                />
              ))}
            </div>
            {reviews > 0 && (
              <span className="text-xs text-gray-400 ml-1">({reviews})</span>
            )}
          </div>

          {/* Price */}
          <div className="mt-auto flex items-center justify-between">
            <div>
              {discount ? (
                <div className="flex items-center gap-2">
                  <span className="text-white text-lg font-semibold">₹{formattedPrice}</span>
                  <span className="text-gray-400 text-sm line-through">
                    ₹{Math.round(parseInt(formattedPrice) * (1 + parseInt(discount) / 100))}
                  </span>
                </div>
              ) : (
                <span className="text-white text-lg font-semibold">₹{formattedPrice}</span>
              )}
            </div>
            <span className="text-xs text-gray-400 hover:text-blue-400 transition-colors">View Details</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
