"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const ORANGE = "#D4622A"

const capabilities = [
  {
    number: "01",
    title: "Brand Strategy & Positioning",
    body: "I help you find what you actually stand for, the position that is yours and no one else's, and build everything else on that foundation.",
  },
  {
    number: "02",
    title: "Growth Marketing",
    body: "Sustainable growth requires the right signals in the right places. I identify the levers that compound, not just the ones that spike.",
  },
  {
    number: "03",
    title: "Content Strategy & Creation",
    body: "Strategy without execution is just a deck. I build content systems that stay consistent, convert, and sound like a real person.",
  },
  {
    number: "04",
    title: "Community Building",
    body: "Audiences buy once. Communities come back. I design the conditions for real belonging around your brand.",
  },
  {
    number: "05",
    title: "Social Media Marketing",
    body: "Platform-native, not platform-generic. I create for the scroll, the feed, and the moment. Not a repurposed newsletter.",
  },
  {
    number: "06",
    title: "SEO & Digital Presence",
    body: "Your brand needs to be findable by the right people. I work with digital presence as a long-game asset, not an afterthought.",
  },
  {
    number: "07",
    title: "Sustainability Marketing",
    body: "I help you set your impact story in a way that actually lands. Turning your values into a brand advantage people trust, not just a badge you wear.",
  },
  {
    number: "08",
    title: "Competitive Analysis & Research",
    body: "Before you move, I help you understand the board. Who is in the space, what they own, and where the opening actually is.",
  },
  {
    number: "09",
    title: "Storytelling & Copywriting",
    body: "Words that work as hard as your strategy. I write for brand, not for content calendars.",
  },
  {
    number: "10",
    title: "Campaign Planning",
    body: "From brief to brief-sheet to execution plan. I bring structure to creative ambition so the campaign actually lands.",
  },
]

export default function SkillsSection() {
  const [hovered, setHovered] = useState<string | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="capabilities"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        {/* Label */}
        <motion.p
          className="text-[11px] tracking-[0.35em] uppercase mb-6 font-medium"
          style={{ color: ORANGE }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          What I Bring
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white uppercase leading-none mb-16 tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          I can help you with
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-l"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              className="relative border-b border-r p-5 cursor-pointer transition-colors duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: hovered === cap.number ? "rgba(212,98,42,0.06)" : "transparent",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.04 }}
              onMouseEnter={() => setHovered(cap.number)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <span
                className="block text-[11px] font-bold mb-3 tabular-nums transition-colors duration-200"
                style={{ color: hovered === cap.number ? ORANGE : "rgba(255,255,255,0.2)" }}
              >
                {cap.number}
              </span>

              {/* Title */}
              <p
                className="text-[13px] font-semibold leading-snug transition-colors duration-200"
                style={{ color: hovered === cap.number ? "white" : "rgba(255,255,255,0.65)" }}
              >
                {cap.title}
              </p>

              {/* Expanded description */}
              <AnimatePresence>
                {hovered === cap.number && (
                  <motion.p
                    className="text-[12px] leading-relaxed mt-3"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    {cap.body}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Orange dot on hover */}
              {hovered === cap.number && (
                <motion.div
                  className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: ORANGE }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.15 }}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
