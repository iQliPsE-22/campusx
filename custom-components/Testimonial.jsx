import React from "react";
import Image from "next/image";
const Testimonial = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "Computer Science",
              quote:
                "CampusX helped me find quality tutors for my programming assignments. Saved my semester!",
              avatar: "/placeholder.svg?height=80&width=80",
            },
            {
              name: "Sarah Williams",
              role: "Business Major",
              quote:
                "Sold my old textbooks in minutes. The trading platform is super intuitive and secure.",
              avatar: "/placeholder.svg?height=80&width=80",
            },
            {
              name: "Michael Chen",
              role: "Engineering Student",
              quote:
                "The developer community here is amazing. I've learned more from study groups than in class!",
              avatar: "/placeholder.svg?height=80&width=80",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-300">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
