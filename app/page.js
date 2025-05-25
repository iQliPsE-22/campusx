
'use client';
import {useState} from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Headline from "@/custom-components/Headline";
import { ArrowRight, ChevronDown } from "lucide-react";
import Testimonial from "./../custom-components/Testimonial";
import Link from "next/link";

const heroBlocks = [
  {
    img: "/students.svg",
    heading: "Conquer Your Assignments",
    text: "Hire top-tier writers and crush deadlines stress-free.",
    buttonText: "Get Started",
    textColor: "text-[#ffd867]",
    bgColor: "bg-white/5",
    accent: "#ffd867",
    url: "/projects",
  },
  {
    img: "/shopping.svg",
    heading: "Buy & Sell with Ease",
    text: "List items or snag student deals in seconds.",
    buttonText: "Trade Now",
    textColor: "text-[#c47acc]",
    bgColor: "bg-white/10",
    accent: "#c47acc",
    url: "/marketplace",
  },
  {
    img: "/rent.svg",
    heading: "Rent Smart, Live Better",
    text: "Find your perfect rental without the hassle.",
    buttonText: "Connect Me",
    textColor: "text-[#a58ad4]",
    bgColor: "bg-white/5",
    accent: "#a58ad4",
    url: "/rentals",
  },
];



export default function Home() {
  const [activeTab,setActiveTab] = useState(0);
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1f2937_0%,_#000000_100%)] z-0"></div>

        <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-center space-y-8 text-center animate-fadeIn">
          <Headline
            heading="Roast & Co."
            text="Gather ’round deals & deadlines.."
            className="text-3xl lg:text-5xl"
          />

          <div className="relative w-full mt-4 animate-float">
            <Image
              src="/campus.svg"
              alt="Campus Life"
              width={800}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="w-full flex justify-center animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* Hero Blocks */}
      {heroBlocks.map((block, index) => (
        <section key={index} className="py-16 px-4 md:px-8 lg:px-16">
          <div
            className={`min-h-[80vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 md:p-10 lg:p-16 ${
              block.bgColor
            } rounded-3xl shadow-lg mx-auto max-w-7xl hover:shadow-xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-[1.01] ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2 flex justify-center p-4 md:p-8 mb-8 lg:mb-0">
              <Image
                src={block.img || "/placeholder.svg"}
                alt={block.heading}
                width={600}
                height={400}
                layout="responsive"
                className="h-auto w-[600px] object-stretch"
              />
            </div>

            <div className="w-full lg:w-1/2 p-4 md:p-8 text-center lg:text-left space-y-6">
              <h2
                className={`${block.textColor} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight`}
              >
                {block.heading}
              </h2>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                {block.text}
              </p>
              <Button
                style={{ backgroundColor: block.accent }}
                className="mt-6 px-8 py-6 text-black font-semibold rounded-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
              >
                <Link href={block.url} className="w-full flex items-center">
                  {block.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ))}
    
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-center border border-white/10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Ready to Transform Your Campus Experience?
          </h2>
          <p className="text-base lg:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already making the most of their
            college life with CampusX Space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-sm lg:text-base font-semibold rounded-xl transition-all duration-300">
              Sign Up Now
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-sm lg:text-base font-semibold rounded-xl transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <Testimonial testimonials = {testimonials}/> */}
    </main>
  );
}
