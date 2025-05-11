"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Zap, CheckCircle, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHero } from "@/custom-components/ui/page-hero";
import { SectionHeader } from "@/custom-components/ui/section-header";
import { FeatureCard } from "@/custom-components/ui/feature-card";
import { TestimonialCard } from "@/custom-components/ui/testimonial-card";
import { CTASection } from "@/custom-components/ui/cta-section";
import { FeaturedServiceCard } from "@/custom-components/projects/featured-service-card";
import { projectCategories, projectTestimonials } from "@/data/projects-data";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <PageHero
        heading="ASSIGNMENTS"
        text="Collaborate, Learn, Deliver — Your Assignment Hub!"
        backgroundImage="/project.jpg"
        actions={projectCategories.map((category) => ({
          label: category.name,
          icon: category.icon,
          href: category.address,
        }))}
      />

      {/* Featured Services Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="FEATURED SERVICES" />

          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="w-full max-w-md mx-auto mb-8 bg-gray-800">
              <TabsTrigger value="all" className="flex-1">
                All Services
              </TabsTrigger>
              <TabsTrigger value="hire-expert" className="flex-1">
                Experts
              </TabsTrigger>
              <TabsTrigger value="connect-developer" className="flex-1">
                Developers
              </TabsTrigger>
              <TabsTrigger value="project-library" className="flex-1">
                Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              {projectCategories.map((category) => (
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.featured.map((item) => (
                      <FeaturedServiceCard
                        key={item.id}
                        item={item}
                        category={category.id}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {projectCategories.map((category) => (
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
                    <FeaturedServiceCard
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

      {/* Benefits Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="WHY CHOOSE US" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Award className="h-8 w-8 text-blue-400" />}
              title="Verified Experts"
              description="All our experts and developers are thoroughly vetted for their qualifications and experience."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-400" />}
              title="Quick Turnaround"
              description="Get your assignments completed on time with our efficient service delivery system."
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-blue-400" />}
              title="Quality Guaranteed"
              description="We ensure high-quality work with our satisfaction guarantee and revision policy."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="HOW IT WORKS" align="center" />

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-800 hidden md:block"></div>

            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Describe Your Needs
                  </h3>
                  <p className="text-gray-400">
                    Tell us about your assignment, project requirements, or what
                    kind of expert you&apos;re looking for.
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 order-1 md:order-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/2 md:pr-12 order-2"></div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 order-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3">
                  <h3 className="text-xl font-semibold mb-2">
                    Connect & Collaborate
                  </h3>
                  <p className="text-gray-400">
                    Browse profiles, chat with experts or developers, or select
                    from our project library.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-2">Get Results</h3>
                  <p className="text-gray-400">
                    Receive your completed work, collaborate on revisions, and
                    achieve your academic goals.
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 order-1 md:order-2">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="STUDENT SUCCESS STORIES" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Ace Your Assignments?"
        description="Get started today and connect with experts, developers, or access our project library."
        primaryAction={{
          label: "Get Started",
          icon: <Briefcase className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Learn More",
        }}
      />
    </div>
  );
}
