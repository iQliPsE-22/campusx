import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialCard({ testimonial }) {
  const { name, role, image, quote, rating } = testimonial

  return (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
          ))}
        </div>

        <p className="text-gray-300 italic">"{quote}"</p>
      </CardContent>
    </Card>
  )
}
