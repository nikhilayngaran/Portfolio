"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Megaphone, Handshake, Truck, ArrowRight } from "lucide-react"

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

// ─── VISUAL 1: SWOT Matrix ─────────────────────────────────────────────────────

const swotQuadrants = [
  {
    letter: "S",
    label: "Strengths",
    color: "#BFFF00",
    items: [
      "Proprietary carbon blade suspension architecture",
      "15 years founding team expertise",
      "Solutrans 2025 Special Award winner",
    ],
  },
  {
    letter: "W",
    label: "Weaknesses",
    color: "#FF4444",
    items: [
      "No digital brand presence",
      "Capital-intensive industrialisation path",
      "Limited commercial track record",
    ],
  },
  {
    letter: "O",
    label: "Opportunities",
    color: "#00B4A6",
    items: [
      "ZFE regulations favouring lightweight vehicles",
      "E-commerce driving last-mile demand",
      "Peak investor interest in sustainable mobility",
    ],
  },
  {
    letter: "T",
    label: "Threats",
    color: "#F5A623",
    items: [
      "Established electric mobility competitors",
      "Long French certification timelines",
      "Risk of faster-moving competitors",
    ],
  },
]

export function OneBoardSWOTMatrix() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="mt-10">
      <FadeUp>
        <p className="text-[11px] tracking-[0.3em] uppercase text-black/40 mb-6">SWOT Analysis</p>
        <div className="grid grid-cols-2 gap-3">
          {swotQuadrants.map((q, i) => (
            <motion.div
              key={q.letter}
              className="rounded-xl p-5"
              style={{ backgroundColor: "#1a1a1a", borderTop: `3px solid ${q.color}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-[28px] font-bold leading-none"
                  style={{ color: q.color, fontFamily: "var(--font-serif)" }}
                >
                  {q.letter}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: q.color }}>
                  {q.label}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {q.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: q.color }} />
                    <span className="text-[12px] text-white/65 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </FadeUp>

      {/* Callout */}
      <FadeUp delay={0.45}>
        <div
          className="mt-5 px-6 py-4 rounded-xl flex items-center gap-3"
          style={{ backgroundColor: "#BFFF0012", border: "1px solid #BFFF0035" }}
        >
          <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: "#BFFF00" }} />
          <p className="text-[14px] font-semibold" style={{ color: "#BFFF00" }}>
            The challenge is not innovation. It is execution.
          </p>
        </div>
      </FadeUp>
    </div>
  )
}

// ─── VISUAL 2: SWOT → Strategy Flow ───────────────────────────────────────────

const strategyFlow = [
  {
    type: "WO Strategy",
    borderColor: "#BFFF00",
    swotTags: [
      { label: "W", color: "#FF4444" },
      { label: "O", color: "#00B4A6" },
    ],
    equation: "No brand presence + investor interest at peak",
    result: "Build brand NOW while the funding window is open",
    rec: "Recommendation 01",
  },
  {
    type: "WT Strategy",
    borderColor: "#FF4444",
    swotTags: [
      { label: "W", color: "#FF4444" },
      { label: "T", color: "#F5A623" },
    ],
    equation: "Capital intensity + certification delays",
    result: "Industrial partnerships reduce both risks simultaneously",
    rec: "Recommendation 02",
  },
  {
    type: "SO Strategy",
    borderColor: "#00B4A6",
    swotTags: [
      { label: "S", color: "#BFFF00" },
      { label: "O", color: "#00B4A6" },
    ],
    equation: "Unique architecture + ZFE regulations",
    result: "Own the last-mile niche before competitors pivot into it",
    rec: "Recommendation 03",
  },
]

export function OneBoardStrategyFlow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="mt-10">
      <FadeUp>
        <p className="text-[11px] tracking-[0.3em] uppercase text-black/40 mb-6">SWOT → Strategy</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {strategyFlow.map((s, i) => (
            <motion.div
              key={s.type}
              className="rounded-xl p-5"
              style={{
                backgroundColor: "#1a1a1a",
                borderLeft: `3px solid ${s.borderColor}`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            >
              {/* Strategy type */}
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: s.borderColor }}>
                {s.type}
              </p>

              {/* SWOT tags */}
              <div className="flex items-center gap-1.5 mb-3">
                {s.swotTags.map((t, idx) => (
                  <span key={t.label}>
                    <span
                      className="text-[12px] font-bold px-2 py-0.5 rounded"
                      style={{ backgroundColor: t.color + "20", color: t.color }}
                    >
                      {t.label}
                    </span>
                    {idx < s.swotTags.length - 1 && (
                      <span className="text-white/30 text-[11px] mx-1">+</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Equation */}
              <p className="text-[12px] text-white/45 leading-snug mb-3">{s.equation}</p>

              {/* Arrow + result */}
              <div className="flex items-start gap-2 mb-4">
                <ArrowRight size={14} className="shrink-0 mt-0.5" style={{ color: s.borderColor }} />
                <p className="text-[13px] font-semibold text-white leading-snug">{s.result}</p>
              </div>

              {/* Rec badge */}
              <div
                className="text-[10px] font-bold px-2 py-1 rounded-full inline-block tracking-wider"
                style={{ backgroundColor: s.borderColor + "18", color: s.borderColor }}
              >
                {s.rec}
              </div>
            </motion.div>
          ))}
        </div>
      </FadeUp>
    </div>
  )
}

// ─── VISUAL 3: Strategic Sequencing Timeline ───────────────────────────────────

const phases = [
  {
    num: "1",
    timing: "Immediate",
    title: "Brand & Communication",
    desc: "Credibility is the prerequisite for everything else",
  },
  {
    num: "2",
    timing: "3 – 6 Months",
    title: "Industrial Partnerships",
    desc: "Reduce capital and certification risk",
  },
  {
    num: "3",
    timing: "6 – 12 Months",
    title: "Last-Mile Pilot",
    desc: "Convert interest into investment, investment into scale",
  },
]

export function OneBoardTimeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp>
      <div ref={ref} className="mt-6 rounded-2xl overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="px-7 pt-7 pb-4">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-1" style={{ color: "#BFFF00" }}>Strategic Sequencing</p>
          <p className="text-white text-[18px] font-bold">Three phases. In order.</p>
        </div>

        <div className="px-7 pb-7">
          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-start gap-0">
            {phases.map((p, i) => (
              <div key={p.num} className="flex items-start flex-1">
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-[14px] font-bold shrink-0 mb-4"
                    style={{ borderColor: "#BFFF00", color: "#BFFF00", backgroundColor: "#BFFF0015" }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.15, type: "spring" }}
                  >
                    {p.num}
                  </motion.div>
                  <p className="text-[10px] uppercase tracking-wider mb-1 text-center" style={{ color: "#BFFF00" }}>{p.timing}</p>
                  <p className="text-white text-[13px] font-bold text-center mb-1">{p.title}</p>
                  <p className="text-white/40 text-[11px] text-center leading-snug">{p.desc}</p>
                </div>
                {i < phases.length - 1 && (
                  <div className="flex items-center pt-5 px-1">
                    <motion.div
                      className="h-px w-8"
                      style={{ backgroundColor: "#BFFF0040" }}
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    />
                    <ArrowRight size={12} style={{ color: "#BFFF0060" }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="flex md:hidden flex-col gap-6">
            {phases.map((p, i) => (
              <motion.div
                key={p.num}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              >
                <div
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[13px] font-bold shrink-0"
                  style={{ borderColor: "#BFFF00", color: "#BFFF00", backgroundColor: "#BFFF0015" }}
                >
                  {p.num}
                </div>
                <div className="pt-1">
                  <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "#BFFF00" }}>{p.timing}</p>
                  <p className="text-white text-[14px] font-bold mb-0.5">{p.title}</p>
                  <p className="text-white/40 text-[12px] leading-snug">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

// ─── VISUAL 4: Recommendation Cards ───────────────────────────────────────────

const recCards = [
  {
    num: "01",
    type: "WO",
    typeColor: "#BFFF00",
    icon: Megaphone,
    title: "Brand & Communication Strategy",
    desc: "With investor interest in sustainable mobility peaking, OneBoard's weak digital presence is actively costing it credibility. Industrial mobility startups are not bought — they are trusted into.",
    actions: ["Website redesign", "Investor pitch deck", "Use-case content"],
  },
  {
    num: "02",
    type: "WT",
    typeColor: "#FF4444",
    icon: Handshake,
    title: "Industrial Partnerships",
    desc: "Capital intensity combined with France's lengthy certification process is OneBoard's most dangerous vulnerability. Going it alone risks allowing competitors to reach market first.",
    actions: ["Manufacturing partner", "Engineering labs", "Co-development agreements"],
  },
  {
    num: "03",
    type: "SO",
    typeColor: "#00B4A6",
    icon: Truck,
    title: "Last-Mile Domination",
    desc: "OneBoard's architecture gives it a defensible advantage in sub-300kg urban cargo in ZFE-restricted city centres — territory cargo bikes cannot reliably serve at scale.",
    actions: ["Logistics pilot", "Cost-of-ownership data", "Investor evidence"],
  },
]

export function OneBoardRecommendationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recCards.map((r, i) => {
        const Icon = r.icon
        return (
          <FadeUp key={r.num} delay={i * 0.1}>
            <div
              className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300"
              style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-[52px] font-bold leading-none"
                  style={{ color: "#BFFF0018", fontFamily: "var(--font-serif)" }}
                >
                  {r.num}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-bold px-2 py-1 rounded-full tracking-wider"
                    style={{ backgroundColor: r.typeColor + "20", color: r.typeColor }}
                  >
                    {r.type}
                  </span>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#BFFF0012" }}>
                    <Icon size={16} style={{ color: "#BFFF00" }} />
                  </div>
                </div>
              </div>

              <p className="text-white text-[15px] font-bold mb-3 leading-snug">{r.title}</p>
              <p className="text-white/50 text-[12px] leading-relaxed flex-1 mb-5">{r.desc}</p>

              {/* Actions */}
              <div className="border-t pt-4" style={{ borderColor: "#BFFF0020" }}>
                <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "#BFFF0060" }}>
                  Proposed Actions
                </p>
                <div className="flex flex-col gap-1.5">
                  {r.actions.map((a) => (
                    <div key={a} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#BFFF00" }} />
                      <span className="text-[12px] text-white/65">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        )
      })}
    </div>
  )
}

// ─── Combined after-recommendations visual ─────────────────────────────────────

export function OneBoardAfterRecommendations() {
  return (
    <>
      <OneBoardStrategyFlow />
      <OneBoardTimeline />
    </>
  )
}
