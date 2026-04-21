"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const ORANGE = "#D4622A"

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="contact"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Main content */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-24 md:py-32">

        {/* Label */}
        <motion.p
          className="text-[11px] tracking-[0.35em] uppercase mb-8 font-medium"
          style={{ color: ORANGE }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Work Together
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-none tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let&apos;s Build
          <br />
          Something
          <span style={{ color: ORANGE }}>.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl max-w-xl mb-14 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Open to brand strategy, marketing, and creative roles.
          Internships and freelance projects welcome.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:nikhilayngaran13@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 border font-semibold text-sm tracking-[0.06em] uppercase transition-all duration-200"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "white"
              e.currentTarget.style.color = "#111"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "white"
            }}
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/nikilayngaran/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border font-semibold text-sm tracking-[0.06em] uppercase transition-all duration-200"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "white"
              e.currentTarget.style.color = "#111"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "white"
            }}
          >
            LinkedIn ↗
          </a>
        </motion.div>

      </div>

      {/* Footer */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-5xl mx-auto px-8 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
            Paris, France · Available Summer 2026
          </span>
          <span className="text-[11px] tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.2)" }}>
            © Nikhil Ayngaran Pandian 2026
          </span>
          <a
            href="/cv.pdf"
            className="text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.3)" }}
            onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            Download CV →
          </a>
        </div>
      </div>
    </section>
  )
}
