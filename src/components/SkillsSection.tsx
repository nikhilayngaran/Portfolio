"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  "Brand Strategy & Positioning",
  "Growth Marketing",
  "Content Strategy & Creation",
  "Community Building",
  "Social Media Marketing",
  "SEO & Digital Presence",
  "Sustainability Marketing",
  "Competitive Analysis & Research",
  "Storytelling & Copywriting",
  "Campaign Planning",
]

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: "var(--cream)", color: "var(--espresso)" }}>
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-16 leading-none"
          style={{ fontFamily: "var(--font-serif)", color: "var(--espresso)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What I <span className="italic" style={{ color: "var(--burnt-orange)" }}>Bring</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="group relative p-6 rounded-xl border transition-all duration-300"
              style={{ borderColor: "rgba(28,16,8,0.1)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              data-hover
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(212,98,42,0.5)"
                el.style.backgroundColor = "rgba(212,98,42,0.05)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(28,16,8,0.1)"
                el.style.backgroundColor = ""
              }}
            >
              <span className="absolute top-3 right-4 text-xs font-bold" style={{ color: "rgba(28,16,8,0.25)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg font-medium transition-colors" style={{ color: "var(--espresso)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--burnt-orange)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--espresso)")}
              >
                {skill}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
