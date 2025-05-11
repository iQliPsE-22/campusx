"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Calendar, Key } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHero } from "@/custom-components/ui/page-hero";
import { SectionHeader } from "@/custom-components/ui/section-header";
import { FeatureCard } from "@/custom-components/ui/feature-card";
import { TestimonialCard } from "@/custom-components/ui/testimonial-card";
import { CTASection } from "@/custom-components/ui/cta-section";
import { FeaturedRentalCard } from "@/custom-components/rentals/featured-rental-card";
import { rentalCategories, rentalTestimonials } from "@/data/rentals-data";
import ShopByCategory from "./../../custom-components/ShopByCategory";

export default function RentalsPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <PageHero
        heading="RENTALS"
        text="Find the Perfect Space, Ride, or Gear for Your Campus Life"
        backgroundImage="/properties.jpg"
        // actions={rentalCategories.map((category) => ({
        //   label: category.name,
        //   icon: category.icon,
        //   href: category.address,
        // }))}
        popularSearches={["Bikes", "Apartments", "Cars", "Cameras"]}
      />
      <ShopByCategory categories={rentalCategories} />

      
      {/* Featured Rentals Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="FEATURED RENTALS" />

          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="hidden lg:flex w-full px-1 py-6 mb-8 bg-gray-800">
              <TabsTrigger value="all" className="flex-1 p-5">
                All Rentals
              </TabsTrigger>
              <TabsTrigger value="properties" className="flex-1 p-5">
                Properties
              </TabsTrigger>
              <TabsTrigger value="vehicles" className="flex-1 p-5">
                Vehicles
              </TabsTrigger>
              <TabsTrigger value="electronics" className="flex-1 p-5">
                Electronics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              {rentalCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </h3>
                    <Link
                      href={category.address}
                      className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                    >
                      View All <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {category.featured.map((item) => (
                      <FeaturedRentalCard
                        key={item.id}
                        item={item}
                        category={category.id}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {rentalCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </h3>
                  <Link
                    href={category.address}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                  >
                    View All <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.featured.map((item) => (
                    <FeaturedRentalCard
                      key={item.id}
                      item={item}
                      category={category.id}
                    />
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link href={category.address}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Explore All {category.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="HOW IT WORKS" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className="h-8 w-8 text-blue-400" />}
              title="Browse & Find"
              description="Search through verified listings to find the perfect rental for your needs and budget."
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-blue-400" />}
              title="Book & Pay"
              description="Reserve your rental with secure payment options and flexible rental periods."
            />
            <FeatureCard
              icon={<Key className="h-8 w-8 text-blue-400" />}
              title="Collect & Enjoy"
              description="Pick up your rental item or get it delivered, then enjoy your rental hassle-free."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="WHAT STUDENTS SAY" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rentalTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have Something to Rent Out?"
        description="Turn your unused items into income! List your property, vehicle, or electronics for rent on CampusX."
        primaryAction={{
          label: "List Your Rental",
          icon: <ArrowRight className="ml-2 h-4 w-4" />,
        }}
        secondaryAction={{
          label: "Learn More",
        }}
      />
    </div>
  );
}
