import Image from "next/image"
import Link from "next/link"
import { Star, Clock, BookOpen, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FeaturedServiceCard({ item, category }) {
  return (
    <Link
      href={`/projects/${category}/${item.id}`}
      className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="relative h-48">
        <Image src={item.image || "/placeholder.svg"} alt={item.title || item.name} fill className="object-cover" />
        {(item.rate || item.price) && (
          <Badge className="absolute top-3 right-3 bg-blue-600">
            ₹{item.rate || item.price}/{category === "project-library" ? "project" : "hour"}
          </Badge>
        )}
      </div>

      <div className="p-4">
        {category !== "project-library" ? (
          <>
            <h3 className="text-lg font-medium mb-1 group-hover:text-blue-400 transition-colors">{item.name}</h3>
            <p className="text-blue-400 text-sm mb-3">{item.title}</p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-medium mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
            <div className="flex items-center text-gray-400 mb-3">
              <BookOpen className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-sm">{item.category}</span>
            </div>
          </>
        )}

        {(category === "hire-expert" || category === "connect-developer") && (
          <div className="flex items-center text-gray-400 mb-3">
            <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm">{item.experience}</span>
          </div>
        )}

        {category === "project-library" && (
          <div className="flex items-center text-gray-400 mb-3">
            <Users className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm">Complexity: {item.complexity}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
            <span className="text-sm font-medium">{item.rating}</span>
            <span className="text-sm text-gray-400 ml-1">({item.reviews})</span>
          </div>
          <span className="text-blue-400 text-sm group-hover:underline">View Profile</span>
        </div>
      </div>
    </Link>
  )
}
