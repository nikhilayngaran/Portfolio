"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const ORANGE = "#D4622A"

const options = [
  "A brand strategy from scratch",
  "A growth system that scales",
  "Content that actually converts",
  "A clearer story for your brand",
  "Something else entirely",
]

export default function NeedSection() {
  const [selected, setSelected] = useState<string | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const handleSelect = (option: string) => {
    setSelected(option)
    setTimeout(() => {
      const contact = document.getElementById("contact")
      if (contact) contact.scrollIntoView({ behavior: "smooth" })
    }, 400)
  }

  return (
    <section
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        {/* Label */}
        <motion.p
          className="text-[11px] tracking-[0.35em] uppercase mb-8 font-medium"
          style={{ color: ORANGE }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Before You Go
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-tight tracking-tight mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          What Do You<br />Really Need?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl max-w-xl mb-14 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Not every brief is the same. Whether you need a full brand strategy
          or just someone to make sense of the noise &mdash; let&apos;s find the right fit.
        </motion.p>

        {/* Pills */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="text-[13px] px-6 py-3 rounded-full border font-medium transition-all duration-200"
              style={{
                borderColor: selected === option ? ORANGE : "rgba(255,255,255,0.15)",
                color: selected === option ? "white" : "rgba(255,255,255,0.55)",
                backgroundColor: selected === option ? ORANGE : "transparent",
              }}
              onMouseEnter={e => {
                if (selected !== option) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"
                  e.currentTarget.style.color = "rgba(255,255,255,0.85)"
                }
              }}
              onMouseLeave={e => {
                if (selected !== option) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)"
                }
              }}
            >
              {option}
            </button>
          ))}
        </motion.div>

        {/* Decorative dot */}
        <motion.div
          className="mt-16 w-3 h-3 rounded-full"
          style={{ backgroundColor: ORANGE }}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
        />

      </div>
    </section>
  )
}
