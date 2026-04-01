"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BarChart2, Users, Lightbulb, Megaphone } from "lucide-react"

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── VISUAL A: Carbon Audit Comparison ────────────────────────────────────────

export function LindtCarbonAudit() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp>
      <div ref={ref} className="mt-10 rounded-2xl overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="px-7 pt-7 pb-4">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-1" style={{ color: "#C9A84C" }}>Carbon Audit</p>
          <p className="text-white text-[20px] font-bold">The Carbon Gap</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {/* Lindt — Bad */}
          <motion.div
            className="p-7"
            style={{ backgroundColor: "rgba(239,68,68,0.08)", borderTop: "3px solid #ef4444" }}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-white/50 text-[12px] mb-1">lindt.fr</p>
                <p className="text-white text-[15px] font-semibold">Lindt & Sprüngli</p>
              </div>
              <div
                className="text-[28px] font-bold w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#ef444420", color: "#ef4444" }}
              >
                F
              </div>
            </div>
            <p className="text-[32px] font-bold mb-1" style={{ color: "#ef4444" }}>2.74g</p>
            <p className="text-white/40 text-[12px] mb-4">CO₂ per page visit</p>
            <div className="rounded-lg px-3 py-2" style={{ backgroundColor: "#ef444415" }}>
              <p className="text-[12px] font-medium" style={{ color: "#ef4444" }}>
                Dirtier than 93% of websites globally
              </p>
            </div>
          </motion.div>

          {/* L'Oréal — Good */}
          <motion.div
            className="p-7"
            style={{ backgroundColor: "rgba(34,197,94,0.06)", borderTop: "3px solid #22c55e" }}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-white/50 text-[12px] mb-1">loreal.fr</p>
                <p className="text-white text-[15px] font-semibold">L'Oréal</p>
              </div>
              <div
                className="text-[28px] font-bold w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#22c55e20", color: "#22c55e" }}
              >
                B
              </div>
            </div>
            <p className="text-[32px] font-bold mb-1" style={{ color: "#22c55e" }}>0.23g</p>
            <p className="text-white/40 text-[12px] mb-4">CO₂ per page visit</p>
            <div className="rounded-lg px-3 py-2" style={{ backgroundColor: "#22c55e12" }}>
              <p className="text-[12px] font-medium" style={{ color: "#22c55e" }}>
                Cleaner than 75% of websites globally
              </p>
            </div>
          </motion.div>
        </div>
        <div className="px-7 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            11× more carbon per visit — a measurable, urgent, and fixable gap.
          </p>
        </div>
      </div>
    </FadeUp>
  )
}

// ─── VISUAL B: Four Strategic Pillars ─────────────────────────────────────────

const pillars = [
  {
    num: "01",
    icon: BarChart2,
    title: "Track & Optimise Data",
    desc: "Measure carbon across ad impressions, data centres, supply chain partners, and geographic delivery patterns. Align with Lindt's Scope 3 data commitments.",
  },
  {
    num: "02",
    icon: Users,
    title: "Sustainable Internal Mindset",
    desc: "Sustainability KPIs for marketing teams, performance reviews tied to carbon reduction, and rewards for employees who reduce advertising emissions footprint.",
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "Intrapreneurial Mindset",
    desc: "Annual hackathon for employees to pitch and pilot green marketing campaigns — drawing on benchmarks from Mars and Unilever's Sustainable Living Lab.",
  },
  {
    num: "04",
    icon: Megaphone,
    title: "Empower Internal Voices",
    desc: "Shift toward in-house content production and employee advocacy to reduce dependence on high-energy external advertising channels.",
  },
]

export function LindtPillarCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {pillars.map((p, i) => {
        const Icon = p.icon
        return (
          <FadeUp key={p.num} delay={i * 0.1}>
            <div className="rounded-2xl p-6 h-full" style={{ backgroundColor: "#1a1a1a" }}>
              <div className="flex items-start justify-between mb-5">
                <span
                  className="text-[48px] font-bold leading-none"
                  style={{ color: "#C9A84C20", fontFamily: "var(--font-serif)" }}
                >
                  {p.num}
                </span>
                <div className="p-2 rounded-lg" style={{ backgroundColor: "#C9A84C15" }}>
                  <Icon size={18} style={{ color: "#C9A84C" }} />
                </div>
              </div>
              <p className="text-white text-[15px] font-bold mb-2">{p.title}</p>
              <p className="text-white/50 text-[13px] leading-relaxed">{p.desc}</p>
            </div>
          </FadeUp>
        )
      })}
    </div>
  )
}

// ─── VISUAL C: Benchmark Results Strip ────────────────────────────────────────

const benchmarks = [
  {
    stat: "−25%",
    company: "Dentsu × Nestlé",
    desc: "reduction in digital ad emissions via Scope3 diagnostics-to-delivery model",
    color: "#C9A84C",
  },
  {
    stat: "−30%",
    company: "L'Oréal",
    desc: "carbon footprint reduction — shortlisted for Ad Net Zero Best Practice Award",
    color: "#C9A84C",
  },
  {
    stat: "+60%",
    company: "Mars",
    desc: "revenue growth alongside −8% carbon emissions — proving sustainability ≠ sacrifice",
    color: "#22c55e",
  },
]

export function LindtBenchmarkStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp>
      <div ref={ref} className="mt-8">
        <p className="text-[11px] tracking-[0.3em] uppercase text-black/40 mb-4">Industry Benchmarks</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {benchmarks.map((b, i) => (
            <motion.div
              key={b.company}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#1a1a1a" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            >
              <p
                className="text-[40px] font-bold leading-none mb-2"
                style={{ color: b.color, fontFamily: "var(--font-serif)" }}
              >
                {b.stat}
              </p>
              <p className="text-white text-[13px] font-semibold mb-2">{b.company}</p>
              <p className="text-white/40 text-[12px] leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeUp>
  )
}
