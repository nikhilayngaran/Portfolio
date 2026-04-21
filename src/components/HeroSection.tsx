"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col pt-16"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Main content */}
      <div className="flex-1 flex items-center w-full px-8 md:px-16 py-20">
        <div className="relative w-full max-w-7xl mx-auto">

          {/* Heading */}
          <motion.h1
            className="font-bold leading-none uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block text-white"
              style={{ fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)", letterSpacing: "-0.02em" }}
            >
              Bridging
            </span>
            <span
              className="block text-white"
              style={{ fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)", letterSpacing: "-0.02em" }}
            >
              Strategy
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)",
                letterSpacing: "-0.02em",
                color: "#D4622A",
              }}
            >
              &amp; Storytelling.
            </span>
          </motion.h1>

          {/* Right-side bio */}
          <motion.div
            className="absolute right-0 bottom-0 max-w-[260px] text-right hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p
              className="text-[10px] tracking-[0.28em] uppercase mb-3 font-medium"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Brand Strategist · Creative Marketer
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              I work with brands in India and France that want more than visibility —
              they want resonance.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="px-8 md:px-16 pb-10 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
          />
          <span
            className="text-[10px] tracking-[0.28em] uppercase font-medium"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Scroll to explore
          </span>
        </div>

        {/* Decorative dot */}
        <div
          className="w-3 h-3 rounded-full border"
          style={{ borderColor: "#D4622A", backgroundColor: "transparent" }}
        >
          <div
            className="w-1 h-1 rounded-full m-auto mt-[3px]"
            style={{ backgroundColor: "#D4622A" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
