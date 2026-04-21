"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const ORANGE = "#D4622A"
const DARK = "#111111"

const steps = [
  {
    number: "01",
    label: "Diagnose",
    body: "Surface the real problem. Most briefs describe symptoms, not causes. I audit the brand, the audience, and the competitive space before touching a single deliverable.",
  },
  {
    number: "02",
    label: "Position",
    body: "Find the angle no one else owns. I define what makes you distinct, who you\u2019re for, and what story your brand needs to tell \u2014 then build the strategic foundation everything else runs on.",
  },
  {
    number: "03",
    label: "Activate",
    body: "Turn strategy into content, identity, and community that moves people. This is where the work lands \u2014 in feeds, in rooms, in growth numbers.",
  },
]

export default function MethodSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      id="process"
      className="py-24 md:py-32"
      style={{ backgroundColor: DARK }}
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
          My Method
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold leading-tight uppercase mb-16 text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          My Proven{" "}
          <span style={{ color: ORANGE }}>3-Step</span>
          <br />
          Brand Strategy
        </motion.h2>

        {/* Two-column layout: steps + quote */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">

          {/* Steps */}
          <div className="md:col-span-3 flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex gap-6 py-8 border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              >
                {/* Left accent bar */}
                <div
                  className="w-0.5 shrink-0 rounded-full"
                  style={{ backgroundColor: ORANGE, minHeight: "100%" }}
                />

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[11px] font-bold tracking-[0.18em]"
                      style={{ color: ORANGE }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight"
                    >
                      {step.label}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote card */}
          <motion.div
            className="md:col-span-2 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div
              className="w-full rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                className="text-2xl md:text-3xl font-bold leading-tight text-white uppercase mb-6"
                style={{ letterSpacing: "-0.01em" }}
              >
                &ldquo;A brand is born when you dare to be{" "}
                <em className="not-italic" style={{ color: ORANGE, fontStyle: "italic", fontFamily: "var(--font-serif)" }}>
                  different
                </em>
                &rdquo;
              </p>
              <div
                className="w-8 h-px mb-4"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              />
              <p
                className="text-[11px] tracking-[0.2em] uppercase font-medium"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                &mdash; Nikil Ayngaran Pandian
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
