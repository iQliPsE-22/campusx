"use client";

import Headline from "@/custom-components/Headline";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Code, Clock, Briefcase, MessageSquare } from "lucide-react";
import { PageHero } from "@/custom-components/ui/page-hero";

const ConnectDeveloperPage = () => {
  const [filter, setFilter] = useState("all");

  const developers = [
    {
      id: "dev1",
      name: "Arjun Mehta",
      title: "Full Stack Developer",
      specialty: "web",
      rate: "800",
      period: "hour",
      image: "/developer.jpg",
      skills: ["React", "Node.js", "MongoDB"],
      experience: "5+ years",
      response: "Usually within 1 hour",
      projects: 47,
      rating: 4.8,
      reviews: 32,
    },
    {
      id: "dev2",
      name: "Sneha Reddy",
      title: "Mobile App Developer",
      specialty: "mobile",
      rate: "900",
      period: "hour",
      image: "/developer.jpg",
      skills: ["Flutter", "React Native", "Firebase"],
      experience: "4+ years",
      response: "Usually within 2 hours",
      projects: 38,
      rating: 4.7,
      reviews: 29,
    },
    {
      id: "dev3",
      name: "Rahul Sharma",
      title: "Backend Developer",
      specialty: "backend",
      rate: "850",
      period: "hour",
      image: "/developer.jpg",
      skills: ["Python", "Django", "AWS"],
      experience: "6+ years",
      response: "Usually within 3 hours",
      projects: 52,
      rating: 4.9,
      reviews: 41,
    },
    {
      id: "dev4",
      name: "Kavita Patel",
      title: "UI/UX Designer & Developer",
      specialty: "web",
      rate: "750",
      period: "hour",
      image: "/developer.jpg",
      skills: ["Figma", "HTML/CSS", "JavaScript"],
      experience: "3+ years",
      response: "Usually within 1 hour",
      projects: 31,
      rating: 4.6,
      reviews: 24,
    },
    {
      id: "dev5",
      name: "Vikram Malhotra",
      title: "Game Developer",
      specialty: "game",
      rate: "950",
      period: "hour",
      image: "/developer.jpg",
      skills: ["Unity", "C#", "3D Modeling"],
      experience: "7+ years",
      response: "Usually within 4 hours",
      projects: 29,
      rating: 4.8,
      reviews: 22,
    },
    {
      id: "dev6",
      name: "Aisha Khan",
      title: "AR/VR Developer",
      specialty: "game",
      rate: "1000",
      period: "hour",
      image: "/developer.jpg",
      skills: ["Unity", "ARKit", "VR Development"],
      experience: "4+ years",
      response: "Usually within 2 hours",
      projects: 25,
      rating: 4.7,
      reviews: 19,
    },
  ];

  const filteredDevelopers =
    filter === "all"
      ? developers
      : developers.filter((dev) => dev.specialty === filter);

  return (
    <section className="bg-black text-white min-h-dvh py-16">
      <PageHero
        heading="CONNECT WITH DEVELOPERS"
        text="Find the Perfect Developer for Your Project"
        backgroundImage="/developer.jpg"
        popularSearches={["Camera", "Calculator", "Mobiles", "Chargers"]}
        // searchValue={searchQuery}
        // onSearchChange={setSearchQuery}
        // onSearch={handleSearch}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mt-8 mb-12 flex justify-center">
          <div className="inline-flex bg-gray-800 rounded-lg p-1 flex-wrap justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              All Developers
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "web"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "mobile"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter("backend")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "backend"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setFilter("game")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "game"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Game/AR/VR
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDevelopers.map((dev) => (
            <Link href={`/projects/connect-developer/${dev.id}`} key={dev.id}>
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-4px]">
                <div className="relative h-48 w-full">
                  <Image
                    src={dev.image || "/placeholder.svg"}
                    alt={dev.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ₹{dev.rate}/{dev.period}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{dev.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{dev.title}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {dev.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span className="text-sm">{dev.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Code className="h-4 w-4 mr-2" />
                      <span className="text-sm">{dev.projects} Projects</span>
                    </div>
                    <div className="flex items-center text-gray-300 col-span-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Response: {dev.response}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-sm font-medium">{dev.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">
                        ({dev.reviews} reviews)
                      </span>
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
  );
};

export default ConnectDeveloperPage;
