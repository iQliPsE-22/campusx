"use client"

import Headline from "@/custom-components/Headline"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Briefcase, Award, MessageSquare } from "lucide-react"

const HireExpertPage = () => {
  const [filter, setFilter] = useState("all")

  const experts = [
    {
      id: "exp1",
      name: "Dr. Rajesh Kumar",
      title: "Computer Science Professor",
      specialty: "programming",
      rate: "1500",
      period: "hour",
      image: "/expert.jpg",
      experience: "15+ years",
      response: "Usually within 2 hours",
      projects: 124,
      rating: 4.9,
      reviews: 87,
    },
    {
      id: "exp2",
      name: "Priya Sharma",
      title: "Data Science Specialist",
      specialty: "data",
      rate: "1200",
      period: "hour",
      image: "/expert.jpg",
      experience: "8+ years",
      response: "Usually within 1 hour",
      projects: 93,
      rating: 4.8,
      reviews: 65,
    },
    {
      id: "exp3",
      name: "Amit Patel",
      title: "Web Development Expert",
      specialty: "programming",
      rate: "1000",
      period: "hour",
      image: "/expert.jpg",
      experience: "10+ years",
      response: "Usually within 3 hours",
      projects: 156,
      rating: 4.7,
      reviews: 112,
    },
    {
      id: "exp4",
      name: "Neha Gupta",
      title: "Marketing Strategist",
      specialty: "business",
      rate: "1300",
      period: "hour",
      image: "/expert.jpg",
      experience: "7+ years",
      response: "Usually within 4 hours",
      projects: 78,
      rating: 4.6,
      reviews: 54,
    },
    {
      id: "exp5",
      name: "Vikram Singh",
      title: "Machine Learning Engineer",
      specialty: "data",
      rate: "1800",
      period: "hour",
      image: "/expert.jpg",
      experience: "9+ years",
      response: "Usually within 2 hours",
      projects: 87,
      rating: 4.9,
      reviews: 73,
    },
    {
      id: "exp6",
      name: "Ananya Desai",
      title: "Business Analytics Consultant",
      specialty: "business",
      rate: "1400",
      period: "hour",
      image: "/expert.jpg",
      experience: "6+ years",
      response: "Usually within 1 hour",
      projects: 64,
      rating: 4.7,
      reviews: 48,
    },
  ]

  const filteredExperts = filter === "all" ? experts : experts.filter((expert) => expert.specialty === filter)

  return (
    <section className="bg-black text-white min-h-dvh py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Headline
          text="Connect with Top Academic and Industry Professionals"
          heading="HIRE AN EXPERT"
          className="text-3xl lg:text-5xl"
        />

        <div className="mt-8 mb-12 flex justify-center">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              All Experts
            </button>
            <button
              onClick={() => setFilter("programming")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "programming" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Programming
            </button>
            <button
              onClick={() => setFilter("data")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "data" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Data Science
            </button>
            <button
              onClick={() => setFilter("business")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "business" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Business
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map((expert) => (
            <Link href={`/projects/hire-expert/${expert.id}`} key={expert.id}>
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-4px]">
                <div className="relative h-48 w-full">
                  <Image src={expert.image || "/placeholder.svg"} alt={expert.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ₹{expert.rate}/{expert.period}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{expert.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{expert.title}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span className="text-sm">{expert.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm">{expert.projects} Projects</span>
                    </div>
                    <div className="flex items-center text-gray-300 col-span-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Response: {expert.response}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-sm font-medium">{expert.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">({expert.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-blue-400 text-sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HireExpertPage
