"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const pills = [
  "MSC Innovation & Entrepreneurship · GEM",
  "Paris",
  "Available Summer 2026",
]

export default function IntroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--cream)", color: "var(--espresso)" }}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        {/* Label */}
        <motion.p
          className="text-[11px] tracking-[0.35em] uppercase mb-10 font-medium"
          style={{ color: "var(--burnt-orange)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Nikil
        </motion.p>

        {/* Bio */}
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl leading-relaxed mb-7" style={{ color: "var(--espresso)" }}>
            I&apos;m a Brand Strategist and Creative Marketer with a background in design and innovation.
            My work starts where most agencies skip straight past: figuring out what the real problem actually is.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed" style={{ color: "var(--espresso)", opacity: 0.65 }}>
            A brand can only build a meaningful relationship with its audience after it understands
            what it stands for. That&apos;s not reach, that&apos;s resonance. I&apos;ve always cared more about
            finding the right people than chasing numbers.
          </p>
        </motion.div>

        {/* Pills */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {pills.map((pill) => (
            <span
              key={pill}
              className="text-[12px] tracking-[0.08em] px-5 py-2 rounded-full border font-medium"
              style={{
                borderColor: "rgba(28,16,8,0.2)",
                color: "rgba(28,16,8,0.55)",
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
