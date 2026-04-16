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
              My work starts where most agencies skip straight past figuring out what the real problem
              actually is.
              <br /><br />
              A brand can only build a meaningful relationship with its audience after it understands
              what it stands for. That's not reach, that's resonance. I've always cared more about
              finding the right people than chasing numbers.
              <br /><br />
              I've worked with brands in India and France that wanted more than visibility. Currently
              finishing an MSc in Innovation and Entrepreneurship at Grenoble École de Management,
              and looking for a 4–6 month fin d'études internship from April 2026.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
