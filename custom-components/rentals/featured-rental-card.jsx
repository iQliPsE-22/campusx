import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Users, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FeaturedRentalCard({ item, category }) {
  return (
    <Link
      href={`/rentals/${category}/${item.id}`}
      className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="relative h-48">
        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
        <Badge className="absolute top-3 right-3 bg-blue-600">{`₹${item.price}/${
          category === "properties" ? "mo" : "day"
        }`}</Badge>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>

        {category === "properties" && (
          <div className="flex items-center text-gray-400 mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{item.location}</span>
          </div>
        )}

        {category === "vehicles" && (
          <div className="flex items-center text-gray-400 mb-3">
            <Users className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm">{item.capacity}</span>
          </div>
        )}

        {category === "electronics" && (
          <div className="flex items-center text-gray-400 mb-3">
            <Shield className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm">Deposit: {item.deposit}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
            <span className="text-sm font-medium">{item.rating}</span>
            <span className="text-sm text-gray-400 ml-1">({item.reviews})</span>
          </div>
          <span className="text-blue-400 text-sm group-hover:underline">View Details</span>
        </div>
      </div>
    </Link>
  )
}
