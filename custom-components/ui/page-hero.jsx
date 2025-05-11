"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Headline from "@/custom-components/Headline"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function PageHero({
  heading,
  text,
  backgroundImage,
  actions = [],
  headingClassName = "text-3xl lg:text-5xl mb-8",
}) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image src={backgroundImage || "/placeholder.svg"} alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeInUp}>
          <Headline heading={heading} text={text} className={headingClassName} />

          {actions.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {actions.map((action, index) => (
                <Link href={action.href} key={index}>
                  <Button
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white"
                  >
                    {action.icon}
                    <span className="ml-2">{action.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
