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
          {/* Lindt: Bad */}
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

          {/* L'Oréal: Good */}
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
            11x more carbon per visit: a measurable, urgent, and fixable gap.
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
    title: "Measure It",
    desc: "Track carbon across ad impressions, data centres, supply chain partners, and geographic delivery patterns. Without a baseline, there is no strategy. Align with Lindt's existing Scope 3 data commitments to avoid duplicating effort.",
  },
  {
    num: "02",
    icon: Users,
    title: "Fix It",
    desc: "Reduce programmatic waste by auditing the ad supply chain with Scope3. Migrate to green hosting. Shift budget toward lower-energy formats and direct publisher deals over open exchanges.",
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "Embed It",
    desc: "Introduce sustainability KPIs for marketing teams. Tie performance reviews to carbon reduction targets. Reward teams that reduce emissions through in-house content and employee advocacy rather than high-energy external channels.",
  },
  {
    num: "04",
    icon: Megaphone,
    title: "Communicate It",
    desc: "Once reductions are measurable and verified, build a brand narrative around them. Publish carbon credentials. Target eco-conscious consumers, retail partners facing their own Scope 3 pressure, and talent who expect purpose from an employer.",
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
    desc: "Reduction in digital ad emissions via Scope3's diagnostics-to-delivery model. Achieved over 18 months. Entry point: Scope3 platform audit of programmatic supply chain. Replicable by any brand with significant display spend.",
    color: "#C9A84C",
  },
  {
    stat: "−30%",
    company: "L'Oréal",
    desc: "Carbon footprint reduction, shortlisted for Ad Net Zero Best Practice Award. Driven by media agency partner mandates and green hosting migration over 2 years. Lindt's F-to-C target follows the same path.",
    color: "#C9A84C",
  },
  {
    stat: "+60%",
    company: "Mars",
    desc: "Revenue growth alongside -8% carbon emissions. Mars Sustainable in a Generation Plan launched 2017. The +60% revenue figure over 7 years shows the sustainability-growth tradeoff is a false dilemma for FMCG brands.",
    color: "#22c55e",
  },
]

// ─── 18-Month Roadmap ─────────────────────────────────────────────────────────

const phases = [
  {
    num: "01",
    label: "Audit",
    months: "Months 1–6",
    desc: "Full Scope 3 digital carbon audit. Baseline lindt.fr against Scope3 diagnostics. Set measurable reduction targets.",
  },
  {
    num: "02",
    label: "Optimise",
    months: "Months 7–12",
    desc: "Reduce programmatic waste, shift to green hosting, pilot in-house content and employee advocacy channels.",
  },
  {
    num: "03",
    label: "Communicate",
    months: "Months 13–18",
    desc: "Translate reductions into brand narrative. Publish carbon credentials. Target premium and eco-conscious consumer segments.",
  },
]

const GREEN = "#1B5E3B"
const GOLD = "#C9A84C"

export function LindtRoadmap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp>
      <div ref={ref} className="mt-8">
        <p className="text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
          18-Month Roadmap
        </p>

        {/* Phase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              className="relative p-6 flex flex-col"
              style={{
                backgroundColor: "#1a1a1a",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            >
              {/* Phase top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: i === 0 ? `${GREEN}60` : i === 1 ? `${GREEN}90` : GREEN }}
              />
              <span className="text-[10px] tracking-[0.25em] uppercase mb-3 font-bold" style={{ color: `${GREEN}` }}>
                {phase.months}
              </span>
              <p className="text-white font-bold text-[17px] mb-3 uppercase tracking-tight">{phase.label}</p>
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                {phase.desc}
              </p>
              <div className="mt-4 text-[11px] font-bold tracking-[0.15em]" style={{ color: `${GREEN}70` }}>
                Phase {phase.num}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target card */}
        <motion.div
          className="mt-4 rounded-2xl p-6 flex items-center justify-between gap-6"
          style={{ backgroundColor: "#1a1a1a", borderTop: `3px solid ${GREEN}` }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase mb-2 font-medium" style={{ color: GREEN }}>
              Target
            </p>
            <p className="text-white font-bold text-[16px] md:text-[18px] leading-snug">
              From F to C within 18 months.
            </p>
            <p className="text-[14px] mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              50% reduction in Scope 3 digital emissions.
            </p>
          </div>
          {/* Rating badges */}
          <div className="shrink-0 flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px] font-bold"
              style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.35)" }}
            >
              C
            </div>
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px] font-bold"
              style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)", textDecoration: "line-through" }}
            >
              F
            </div>
          </div>
        </motion.div>
      </div>
    </FadeUp>
  )
}

// ─── So What? ─────────────────────────────────────────────────────────────────

const audiences = [
  {
    title: "Eco-conscious consumers",
    body: "Purchase decisions are increasingly shaped by brand environmental records. A published carbon rating differentiates Lindt in premium gifting occasions.",
  },
  {
    title: "Retail & B2B partners",
    body: "Supermarkets and distributors face their own Scope 3 reporting pressure. Lindt's credentials become a procurement advantage.",
  },
  {
    title: "Talent & internal culture",
    body: "Purpose-driven brands attract stronger candidates. Visible sustainability action reinforces Lindt's employer brand among Gen Z marketers.",
  },
]

export function LindtSoWhat() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp>
      <div ref={ref} className="mt-8">
        {/* Left-border accent block */}
        <div
          className="rounded-2xl p-7 mb-6"
          style={{
            backgroundColor: "#1a1a1a",
            borderLeft: `4px solid ${GOLD}`,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderRight: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: `${GOLD}80` }}>
            So What?
          </p>
          <p className="text-white font-bold text-[18px] md:text-[20px] leading-snug mb-4">
            If Lindt achieves a C rating, what story can it tell and to whom?
          </p>
          <p className="text-[14px] leading-[1.85]" style={{ color: "rgba(255,255,255,0.5)" }}>
            Greening the feed is not just an operational fix. For a premium chocolate brand whose equity rests on craft,
            care, and provenance, a measurable reduction in digital carbon footprint becomes a credible brand signal.
            Sustainability communicated at the right touchpoints, with data rather than claims, can deepen trust among
            three distinct audiences.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div
                className="w-6 h-[2px] rounded-full mb-4"
                style={{ backgroundColor: GOLD }}
              />
              <p className="text-white font-semibold text-[14px] mb-3">{a.title}</p>
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                {a.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeUp>
  )
}

export function LindtBenchmarkStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp>
      <div ref={ref} className="mt-8">
        <p className="text-[11px] tracking-[0.3em] uppercase text-black/40 mb-1">Industry Benchmarks</p>
        <p className="text-[13px] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>These are not aspirational references. Each has a replicable model Lindt can draw from directly.</p>
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
