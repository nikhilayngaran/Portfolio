"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function IntroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 border-b"
      style={{
        backgroundColor: "var(--cream)",
        color: "var(--espresso)",
        borderColor: "rgba(28,16,8,0.1)",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--espresso)" }}
            >
              "A brand is born when you dare to be{" "}
              <span className="italic" style={{ color: "var(--burnt-orange)" }}>
                different
              </span>"
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--espresso)", opacity: 0.75 }}>
              I'm a Brand Strategist and Creative Marketer with a background in design and innovation.
              I work for brands in knowing and analysing the real problem first. The real value exchange
              between a brand and their consumers happen only when the brand is able to analyse and identify
              itself first and knowing who they would want to exchange value with effective communication.
              It is not about reaching how many people, rather it is about reaching the right people,
              I have always believed. I have previously worked in India and France with brands that want
              to really make a difference. Currently pursuing an MSc in Innovation and Entrepreneurship
              from Grenoble Ecole de Management which was a very passionate study for me. Luckily,
              I am open to work seeking a 4–6 month fin d'études internship.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
