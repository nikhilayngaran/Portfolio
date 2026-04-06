"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShoppingBag, Calendar, BookOpen, ArrowRight } from "lucide-react"

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

// ─── VISUAL 1: Segmentation Matrix (unchanged) ────────────────────────────────

const personas = [
  {
    name: "Bedtime Readers",
    color: "#00B4A6",
    age: "20–35", market: "30%", frequency: "Very High",
    where: "Home", books: "Novels, Light Fiction",
    channel: "Instagram, TikTok, Influencers",
    priorities: [{ label: "Ease of use", dots: 3 }, { label: "Portability", dots: 2 }],
    highlight: true,
  },
  {
    name: "Outdoor Readers",
    color: "#F4845F",
    age: "15–40", market: "15%", frequency: "Moderate",
    where: "Anywhere", books: "Comics, Magazines",
    channel: "Instagram, TikTok, Online Ads",
    priorities: [{ label: "Portability", dots: 3 }, { label: "Price", dots: 2 }],
    highlight: false,
  },
  {
    name: "Travel & Transit",
    color: "#6C63FF",
    age: "18–30", market: "15%", frequency: "Moderate",
    where: "Public Transport", books: "Novels, Magazines",
    channel: "Instagram, TikTok, Online Ads",
    priorities: [{ label: "Portability", dots: 3 }, { label: "Ease of use", dots: 2 }],
    highlight: false,
  },
  {
    name: "Elderly Readers",
    color: "#F5A623",
    age: "60+", market: "40%", frequency: "Good",
    where: "Home", books: "Newspapers, Biographies",
    channel: "TV Ads, Facebook, Family",
    priorities: [{ label: "Ease of use", dots: 3 }, { label: "Personalisation", dots: 2 }],
    highlight: false,
  },
]

export function LiziaSegmentationMatrix() {
  return (
    <div className="mt-10">
      <FadeUp>
        <p className="text-[11px] tracking-[0.3em] uppercase text-black/40 mb-6">Reader Personas</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {personas.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.08}>
              <div
                className="rounded-xl p-5 border"
                style={{
                  borderTopWidth: 3,
                  borderTopColor: p.color,
                  borderColor: p.highlight ? p.color + "40" : "rgba(0,0,0,0.08)",
                  backgroundColor: p.highlight ? p.color + "08" : "white",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-[15px]" style={{ color: p.color }}>{p.name}</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: p.color + "20", color: p.color }}>
                    {p.market}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] mb-3">
                  <div>
                    <p className="text-black/35 text-[10px] uppercase tracking-wider mb-0.5">Age</p>
                    <p className="text-black/75 font-medium">{p.age}</p>
                  </div>
                  <div>
                    <p className="text-black/35 text-[10px] uppercase tracking-wider mb-0.5">Frequency</p>
                    <p className="text-black/75 font-medium">{p.frequency}</p>
                  </div>
                  <div>
                    <p className="text-black/35 text-[10px] uppercase tracking-wider mb-0.5">Where</p>
                    <p className="text-black/75 font-medium">{p.where}</p>
                  </div>
                  <div>
                    <p className="text-black/35 text-[10px] uppercase tracking-wider mb-0.5">Books</p>
                    <p className="text-black/75 font-medium">{p.books}</p>
                  </div>
                </div>
                <div className="border-t border-black/06 pt-3">
                  <p className="text-black/35 text-[10px] uppercase tracking-wider mb-1">Top Channel</p>
                  <p className="text-black/60 text-[11px] mb-3">{p.channel}</p>
                  <div className="flex flex-col gap-1">
                    {p.priorities.map(pr => (
                      <div key={pr.label} className="flex items-center justify-between">
                        <span className="text-[11px] text-black/50">{pr.label}</span>
                        <span className="text-[13px] font-bold" style={{ color: p.color }}>
                          {"+".repeat(pr.dots)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* Callout */}
      <FadeUp delay={0.35}>
        <div
          className="mt-6 p-5 rounded-xl flex items-start gap-3"
          style={{ backgroundColor: "#00B4A615", border: "1px solid #00B4A640" }}
        >
          <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: "#00B4A6" }} />
          <p className="text-[14px] font-semibold leading-relaxed" style={{ color: "#00B4A6" }}>
            Target: Bedtime Readers. Highest frequency, easiest to reach, most value-driven.
          </p>
        </div>
      </FadeUp>
    </div>
  )
}

// ─── VISUAL 2: Revenue Chart (unchanged) ──────────────────────────────────────

const revenueData = [
  {
    label: "Lizia Today",
    value: 42,
    max: 1080,
    color: "#00B4A6",
    equation: "1M buyers × 1.2 units × €35",
    formatted: "€42M",
  },
  {
    label: "Physical Books Market",
    value: 187.5,
    max: 1080,
    color: "#6C63FF",
    equation: "25M buyers × 1.5 units × €5",
    formatted: "€187.5M",
  },
  {
    label: "Digital Books Market",
    value: 1080,
    max: 1080,
    color: "#F4845F",
    equation: "9M buyers × 1 unit × €120",
    formatted: "€1.08B",
  },
]

export function LiziaRevenueChart() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp>
      <div ref={ref} className="mt-10 rounded-2xl overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="px-7 pt-7 pb-2">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-1" style={{ color: "#00B4A6" }}>Market Sizing</p>
          <p className="text-white text-[20px] font-bold">The Market Opportunity</p>
        </div>
        <div className="px-7 pb-7 pt-5 flex flex-col gap-7">
          {revenueData.map((d, i) => {
            const widthPct = Math.max((d.value / d.max) * 100, 4)
            return (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-white/70 text-[13px]">{d.label}</span>
                  <span className="text-[22px] font-bold" style={{ color: d.color }}>{d.formatted}</span>
                </div>
                <div className="h-2 rounded-full mb-2" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: d.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${widthPct}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  />
                </div>
                <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{d.equation}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </FadeUp>
  )
}

// ─── VISUAL 3: Competition Map (unchanged) ────────────────────────────────────

const competitors = [
  { name: "Chinese\nCompetitors", x: 14, y: 78, color: "#ef4444", size: 10 },
  { name: "Lizia", x: 52, y: 36, color: "#00B4A6", size: 14, highlight: true },
  { name: "Kindle\nPaperwhite", x: 83, y: 12, color: "#6C63FF", size: 12 },
]

export function LiziaCompetitionMap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp>
      <div ref={ref} className="mt-10 rounded-2xl p-6 border border-black/08" style={{ backgroundColor: "white" }}>
        <p className="text-[11px] tracking-[0.3em] uppercase text-black/40 mb-1">Positioning Map</p>
        <p className="text-black text-[18px] font-bold mb-6">Competitive Landscape</p>

        <div className="relative" style={{ height: 280 }}>
          {[25, 50, 75].map(v => (
            <div key={v}>
              <div className="absolute w-full border-t border-black/06" style={{ top: `${v}%` }} />
              <div className="absolute h-full border-l border-black/06" style={{ left: `${v}%` }} />
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
            <span className="text-[10px] text-black/30">Low Price</span>
            <span className="text-[10px] text-black/30">High Price</span>
          </div>
          <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between pb-4">
            <span className="text-[10px] text-black/30 -rotate-90 origin-left translate-y-3">High Brand</span>
            <span className="text-[10px] text-black/30 -rotate-90 origin-left translate-y-3">Low Brand</span>
          </div>
          <div className="absolute bottom-4 left-6 right-2 h-px bg-black/15" />
          <div className="absolute top-2 bottom-4 left-6 w-px bg-black/15" />
          {competitors.map((c, i) => (
            <motion.div
              key={c.name}
              className="absolute"
              style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15, type: "spring" }}
            >
              <div
                className="rounded-full"
                style={{
                  width: c.size * 2,
                  height: c.size * 2,
                  backgroundColor: c.color + (c.highlight ? "ff" : "cc"),
                  boxShadow: c.highlight ? `0 0 0 6px ${c.color}30` : "none",
                }}
              />
              <div
                className="absolute top-full mt-1.5 text-center whitespace-pre-line font-semibold"
                style={{ fontSize: 10, color: c.color, left: "50%", transform: "translateX(-50%)", lineHeight: 1.3 }}
              >
                {c.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-black/08">
          <p className="text-[13px] font-medium" style={{ color: "#00B4A6" }}>
            Lizia's opportunity: own the mid-market with brand story, not price war.
          </p>
        </div>
      </div>
    </FadeUp>
  )
}

// ─── VISUAL 4: Strategy Cards (updated text + priority/timeline) ───────────────

const strategies = [
  {
    num: "01",
    icon: ShoppingBag,
    title: "Retail Placement (FMOT)",
    subtitle: "Start Here",
    priority: "Low investment · Fast return · No product dev needed",
    desc: "A reader browsing the bestseller table who sees a Lizia display immediately adjacent is already primed, in physical-book mode, thinking about the reading experience, in a buying mindset. Counter-display placement converts discovery into purchase without requiring advertising spend.",
    driver: 'Fixes the "I didn\'t know this existed" problem at zero media cost.',
    timeline: "Immediate",
  },
  {
    num: "02",
    icon: Calendar,
    title: "Usage Occasion Marketing",
    subtitle: "Second",
    priority: "Medium investment · Emotional brand building",
    desc: "A consumer who thinks \"always keep one in your current book\" owns multiple units simultaneously: one at home, one for travel, one as a gift. Usage occasion marketing creates this multi-unit behaviour by making each context feel distinct and worth equipping separately.",
    driver: "Transforms Lizia's addressable market from readers to everyone who buys gifts for readers.",
    timeline: "6–12 months",
  },
  {
    num: "03",
    icon: BookOpen,
    title: "Co-branding with Bestsellers",
    subtitle: "Third",
    priority: "Higher complexity · Maximum differentiation",
    desc: "A Lizia designed in the visual language of a bestselling novel transforms the product from a reading accessory into a collector's object, differentiating through cultural relevance rather than product features.",
    driver: "Limited editions create urgency, bookstore placement captures highest-intent buyers, co-branding builds associations no Chinese competitor can replicate.",
    timeline: "12+ months",
  },
]

export function LiziaStrategyCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {strategies.map((s, i) => {
        const Icon = s.icon
        return (
          <FadeUp key={s.num} delay={i * 0.1}>
            <div className="rounded-2xl p-6 h-full flex flex-col" style={{ backgroundColor: "#1a1a1a" }}>
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-[52px] font-bold leading-none"
                  style={{ color: "#00B4A620", fontFamily: "var(--font-serif)" }}
                >
                  {s.num}
                </span>
                <div className="p-2 rounded-lg" style={{ backgroundColor: "#00B4A615" }}>
                  <Icon size={18} style={{ color: "#00B4A6" }} />
                </div>
              </div>
              <p className="text-[10px] mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>{s.priority}</p>
              <p className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: "#00B4A6" }}>{s.subtitle}</p>
              <p className="text-white text-[16px] font-bold mb-3">{s.title}</p>
              <p className="text-white/50 text-[13px] leading-relaxed flex-1 mb-5">{s.desc}</p>
              <div className="border-t pt-4" style={{ borderColor: "#00B4A625" }}>
                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "#00B4A670" }}>Why it drives revenue</p>
                <p className="text-[12px] font-medium mb-3" style={{ color: "#00B4A6" }}>{s.driver}</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-white/30 uppercase tracking-wider">Timeline:</span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#00B4A620", color: "#00B4A6" }}
                  >
                    {s.timeline}
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        )
      })}
    </div>
  )
}

// ─── VISUAL 5: Line Extension (updated text) ──────────────────────────────────

export function LiziaLineExtension() {
  return (
    <FadeUp>
      <div
        className="mt-8 rounded-2xl p-7 relative overflow-hidden"
        style={{ backgroundColor: "#1a1a1a", border: "1px solid #00B4A640" }}
      >
        <div
          className="absolute top-5 right-5 text-[10px] font-bold px-3 py-1 rounded-full tracking-widest"
          style={{ backgroundColor: "#00B4A6", color: "white" }}
        >
          NEW
        </div>

        <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#00B4A6" }}>Line Extension</p>
        <p className="text-white text-[22px] font-bold mb-1">Lizia Clip+</p>
        <p className="text-[13px] mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>Premium Edition · €49</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { spec: "Adjustable brightness", sub: "3-level warm/cool light" },
            { spec: "Matte black edition", sub: "Scratch-resistant finish" },
            { spec: "10-hour battery", sub: "USB-C fast charge" },
          ].map(f => (
            <div key={f.spec} className="rounded-lg p-4" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
              <p className="text-white text-[13px] font-semibold mb-1">{f.spec}</p>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{f.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-between flex-wrap gap-6 pt-5 border-t" style={{ borderColor: "#00B4A625" }}>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-white/40 mb-2">Strategic Rationale</p>
            <p className="text-[13px] text-white/70 leading-relaxed">
              Lizia currently has a single price point in a market ranging from €2 to €120. This leaves the brand exposed to downward price pressure with no premium capture. The Clip+ creates a two-tier architecture: the entry product stays accessible and volume-driven, the premium product captures higher-value buyers and anchors perception of the standard product as reasonable value.
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#00B4A6" }}>Revenue Impact</p>
            <p className="text-[24px] font-bold" style={{ color: "#00B4A6" }}>+€5M</p>
            <p className="text-[11px] text-white/40">illustrative estimate,</p>
            <p className="text-[11px] text-white/40">subject to market validation</p>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

// ─── NEW: Market Context (before segmentation) ────────────────────────────────

export function LiziaMarketContext() {
  return (
    <FadeUp>
      <div className="mt-10 p-6 rounded-xl" style={{ backgroundColor: "rgba(0,180,166,0.05)", border: "1px solid rgba(0,180,166,0.15)" }}>
        <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: "#00B4A6" }}>Market Context</p>
        <p className="text-[14px] text-black/70 leading-relaxed mb-3">
          France is one of Europe's strongest reading markets. Research indicates that 79% of French people read at least one book per year, with 92% having read a book in the past 12 months. This establishes a large and culturally embedded addressable market for reading accessories, but size alone does not determine opportunity. The question is which reader segment represents the most commercially attractive target for Lizia specifically.
        </p>
        <p className="text-[12px] text-black/40 leading-relaxed italic">
          Note: The segmentation framework below is based on market reasoning and behavioural logic rather than primary research. It provides a structured basis for targeting decisions that should be validated with real customer data before full execution.
        </p>
      </div>
    </FadeUp>
  )
}

// ─── NEW: Why Bedtime Readers callout ─────────────────────────────────────────

export function WhyBedtimeReadersCallout() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <FadeUp delay={0.1}>
      <div
        ref={ref}
        className="mt-6 rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#1a1a1a", border: "1px solid #00B4A630" }}
      >
        <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "#00B4A620" }}>
          <p className="text-[11px] tracking-[0.3em] uppercase mb-2" style={{ color: "#00B4A6" }}>Targeting Decision</p>
          <p className="text-white text-[17px] font-bold leading-snug">
            Why Bedtime Readers, Not Elderly Readers
          </p>
        </div>

        <div className="px-6 py-5">
          <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
            Elderly Readers are the largest segment at 40% of the market, but they present a significant channel mismatch. They are reached primarily through TV advertising and family recommendations: channels that are expensive and slow for a brand of Lizia's scale.
          </p>

          <p className="text-[11px] uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
            Bedtime Readers were prioritised for three reasons
          </p>

          <div className="flex flex-col gap-3 mb-6">
            {[
              "Highest reading frequency → stronger word-of-mouth and repeat usage",
              "Concentrated on digital channels → Instagram, TikTok, influencers → cost-efficient acquisition",
              "Core product values (ease of use, portability) align precisely with Lizia's existing strengths",
            ].map((reason, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
                  style={{ backgroundColor: "#00B4A6", color: "white" }}
                >
                  {i + 1}
                </span>
                <p className="text-[13px] leading-snug" style={{ color: "rgba(255,255,255,0.7)" }}>{reason}</p>
              </motion.div>
            ))}
          </div>

          <div
            className="px-5 py-4 rounded-xl"
            style={{ backgroundColor: "#00B4A610", border: "1px solid #00B4A630" }}
          >
            <p className="text-[14px] font-bold italic" style={{ color: "#00B4A6" }}>
              "The best target is not the biggest segment. It is the most reachable one."
            </p>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

// ─── NEW: Revenue model disclaimer ────────────────────────────────────────────

export function LiziaRevenueDisclaimer() {
  return (
    <FadeUp delay={0.1}>
      <p className="mt-4 text-[12px] leading-relaxed italic text-black/40">
        Note: These figures are illustrative estimates intended to frame the strategic opportunity rather than precise market measurements. They should be stress-tested against Lizia's actual sales data before informing investment decisions.
      </p>
    </FadeUp>
  )
}

// ─── NEW: Competition callout ──────────────────────────────────────────────────

export function LiziaCompetitionCallout() {
  return (
    <FadeUp delay={0.1}>
      <div
        className="mt-6 p-5 rounded-xl flex items-start gap-3"
        style={{ backgroundColor: "#00B4A615", border: "1px solid #00B4A640" }}
      >
        <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: "#00B4A6" }} />
        <p className="text-[15px] font-bold" style={{ color: "#00B4A6" }}>
          Lizia's competitive advantage is not price. It is meaning.
        </p>
      </div>
    </FadeUp>
  )
}

// ─── NEW: Strategy section intro ──────────────────────────────────────────────

export function LiziaStrategyIntro() {
  return (
    <FadeUp>
      <p className="text-[14px] text-black/60 leading-relaxed mb-8 max-w-2xl">
        These three strategies are not equal alternatives presented for consideration. They are explicitly prioritised by investment level, complexity, and speed of return, sequenced to build momentum from quick wins before committing to higher-complexity plays.
      </p>
    </FadeUp>
  )
}

// ─── NEW: Strategic Sequencing Timeline (4 nodes) ─────────────────────────────

const seqPhases = [
  {
    num: "1",
    timing: "Immediate",
    title: "Retail Placement (FMOT)",
    desc: "Low cost · Fast return · No product dev needed",
    parallel: false,
  },
  {
    num: "2",
    timing: "6–12 months",
    title: "Usage Occasion Marketing",
    desc: "Medium investment · Emotional brand building",
    parallel: false,
  },
  {
    num: "3",
    timing: "12+ months",
    title: "Co-branding with Bestsellers",
    desc: "Higher complexity · Maximum differentiation",
    parallel: false,
  },
  {
    num: "4",
    timing: "Parallel to Phase 1",
    title: "Lizia Clip+ Launch",
    desc: "Leverages existing manufacturing · No new channel dev needed",
    parallel: true,
  },
]

export function LiziaSequencingTimeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  const mainPhases = seqPhases.filter(p => !p.parallel)
  const parallelPhase = seqPhases.find(p => p.parallel)!

  return (
    <FadeUp>
      <div ref={ref} className="mt-6 rounded-2xl overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="px-7 pt-7 pb-4">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-1" style={{ color: "#00B4A6" }}>Strategic Sequencing</p>
          <p className="text-white text-[18px] font-bold">The Sequence Matters</p>
        </div>

        <div className="px-7 pb-7">
          {/* Main track: desktop horizontal */}
          <div className="hidden md:flex items-start gap-0 mb-6">
            {mainPhases.map((p, i) => (
              <div key={p.num} className="flex items-start flex-1">
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-[14px] font-bold shrink-0 mb-3"
                    style={{ borderColor: "#00B4A6", color: "#00B4A6", backgroundColor: "#00B4A615" }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.12, type: "spring" }}
                  >
                    {p.num}
                  </motion.div>
                  <p className="text-[10px] uppercase tracking-wider mb-1 text-center" style={{ color: "#00B4A6" }}>{p.timing}</p>
                  <p className="text-white text-[12px] font-bold text-center mb-1">{p.title}</p>
                  <p className="text-white/40 text-[11px] text-center leading-snug">{p.desc}</p>
                </div>
                {i < mainPhases.length - 1 && (
                  <div className="flex items-center pt-5 px-1">
                    <motion.div
                      className="h-px w-8"
                      style={{ backgroundColor: "#00B4A640" }}
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                    />
                    <ArrowRight size={12} style={{ color: "#00B4A660" }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Parallel track: desktop */}
          <div className="hidden md:block border-t pt-5" style={{ borderColor: "#00B4A620" }}>
            <div className="flex items-center gap-4">
              <div
                className="text-[10px] font-bold px-2 py-1 rounded border tracking-wider shrink-0"
                style={{ borderColor: "#00B4A640", color: "#00B4A6", borderStyle: "dashed" }}
              >
                PARALLEL TRACK
              </div>
              <motion.div
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-[14px] font-bold shrink-0"
                style={{ borderColor: "#00B4A6", borderStyle: "dashed", color: "#00B4A6", backgroundColor: "#00B4A610" }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
              >
                {parallelPhase.num}
              </motion.div>
              <div>
                <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "#00B4A6" }}>{parallelPhase.timing}</p>
                <p className="text-white text-[13px] font-bold">{parallelPhase.title}</p>
                <p className="text-white/40 text-[11px]">{parallelPhase.desc}</p>
              </div>
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="flex md:hidden flex-col gap-5">
            {seqPhases.map((p, i) => (
              <motion.div
                key={p.num}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              >
                <div
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[13px] font-bold shrink-0"
                  style={{
                    borderColor: "#00B4A6",
                    borderStyle: p.parallel ? "dashed" : "solid",
                    color: "#00B4A6",
                    backgroundColor: "#00B4A615",
                  }}
                >
                  {p.num}
                </div>
                <div className="pt-1">
                  {p.parallel && (
                    <span className="text-[10px] font-bold tracking-wider mb-1 block" style={{ color: "#00B4A660" }}>
                      PARALLEL TRACK
                    </span>
                  )}
                  <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "#00B4A6" }}>{p.timing}</p>
                  <p className="text-white text-[13px] font-bold mb-0.5">{p.title}</p>
                  <p className="text-white/40 text-[11px] leading-snug">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

// ─── Slot wrappers (used by visual registry) ──────────────────────────────────

export function LiziaAfterObjectiveFull() {
  return (
    <>
      <LiziaMarketContext />
      <LiziaSegmentationMatrix />
      <WhyBedtimeReadersCallout />
    </>
  )
}

export function LiziaAfterAnalysisFull() {
  return (
    <>
      <LiziaRevenueChart />
      <LiziaRevenueDisclaimer />
    </>
  )
}

export function LiziaAfterCompetitionFull() {
  return (
    <>
      <LiziaCompetitionMap />
      <LiziaCompetitionCallout />
    </>
  )
}

export function LiziaRecommendationsFull() {
  return (
    <>
      <LiziaStrategyIntro />
      <LiziaStrategyCards />
    </>
  )
}

export function LiziaAfterRecommendationsFull() {
  return (
    <>
      <LiziaLineExtension />
      <LiziaSequencingTimeline />
    </>
  )
}
