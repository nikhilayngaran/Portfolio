"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 text-center" style={{ backgroundColor: "var(--espresso)" }}>
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
          style={{ fontFamily: "var(--font-serif)", color: "var(--cream)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's build{" "}
          <span className="italic" style={{ color: "var(--burnt-orange)" }}>something.</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-xl mx-auto mb-12"
          style={{ color: "rgba(245,240,232,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Open to brand strategy, marketing, and creative roles. Internships and freelance projects welcome.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="mailto:nikhilayngaran@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-colors"
            style={{ backgroundColor: "var(--burnt-orange)", color: "var(--cream)" }}
            data-hover
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/nikilayngaran/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border font-medium transition-colors"
            style={{ borderColor: "rgba(245,240,232,0.2)", color: "var(--cream)" }}
            data-hover
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 text-sm"
          style={{ color: "rgba(245,240,232,0.4)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MapPin className="w-4 h-4" />
          <span>Paris, France · Available from Summer 2026</span>
        </motion.div>

      </div>
    </section>
  )
}
