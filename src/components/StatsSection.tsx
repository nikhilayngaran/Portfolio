"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import BrandStrategy from "./BrandStrategy"

const stats = [
  { value: 1,   suffix: "",   label: "Brand built from scratch" },
  { value: 2,   suffix: "+",  label: "Years of experience" },
  { value: 2,   suffix: "+",  label: "Countries lived & worked" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    tick()
  }, [inView, value])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold" style={{ color: "var(--burnt-orange)", fontFamily: "var(--font-serif)" }}>
      {display}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: "var(--cream)", color: "var(--espresso)" }}>
      <div className="max-w-5xl mx-auto px-8 md:px-16">

        {/* Quote + Bio */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-serif)", color: "var(--espresso)" }}>
              "I find what's unsaid.{" "}
              <br />
              Then I make it{" "}
              <span className="italic" style={{ color: "var(--burnt-orange)" }}>unforgettable.</span>"
            </h2>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--espresso)", opacity: 0.75 }}>
              I'm a Brand Strategist and Creative Marketer with a background in design and innovation.
              I work at the intersection of strategy, storytelling, and culture, building brands that
              earn attention and communities that actually grow. Currently studying at Grenoble Ecole de Management.
              Open to a 4–6 month Marketing & Communications internship.
            </p>
          </motion.div>
        </div>

        {/* Brand Strategy stepper */}
        <BrandStrategy />

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-16" style={{ borderColor: "var(--espresso)", borderTopColor: "rgba(28,16,8,0.15)" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm" style={{ color: "var(--espresso)", opacity: 0.55 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
