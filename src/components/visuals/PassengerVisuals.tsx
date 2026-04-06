"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Package, Star, Zap, Shield, Check, X } from "lucide-react"

const GREEN = "#4A7C59"
const BROWN = "#8B5E3C"
const ORANGE = "#D4622A"
const TEAL = "#2E7D6B"
const ESPRESSO = "#1C1008"

// ─── Visual 1: Segmentation Matrix ───────────────────────────────────────────

const SEGMENTS = [
  {
    name: "Active Urbanites",
    market: "50%",
    benefits: ["Versatility", "Lightweight"],
    channel: ["Company social", "Workshops"],
    color: GREEN,
    selected: false,
  },
  {
    name: "Style Sharers",
    market: "30%",
    benefits: ["Aesthetic", "Multiple designs", "Social benefit"],
    channel: ["Instagram", "TikTok", "Fans & Friends"],
    color: ORANGE,
    selected: true,
  },
  {
    name: "Short-Trip Lovers",
    market: "15%",
    benefits: ["Portability", "Versatility", "Comfort"],
    channel: ["Social media"],
    color: "#6C63FF",
    selected: false,
  },
  {
    name: "Beginner Explorers",
    market: "15%",
    benefits: ["Versatility", "Lightweight"],
    channel: ["Social media"],
    color: "#F5A623",
    selected: false,
  },
  {
    name: "Eco-minded Users",
    market: "20%",
    benefits: ["Sustainability", "Social benefit"],
    channel: ["Social media", "Events"],
    color: TEAL,
    selected: false,
  },
]

function SegmentCard({
  name,
  market,
  benefits,
  channel,
  color,
  selected,
}: {
  name: string
  market: string
  benefits: string[]
  channel: string[]
  color: string
  selected: boolean
}) {
  return (
    <div
      className="rounded-xl p-4 border-2 relative h-full"
      style={{
        backgroundColor: selected ? `${color}12` : "rgba(0,0,0,0.03)",
        borderColor: selected ? color : "rgba(0,0,0,0.08)",
      }}
    >
      {selected && (
        <span
          className="absolute top-3 right-3 text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full font-semibold"
          style={{ backgroundColor: color, color: "white" }}
        >
          Selected
        </span>
      )}
      <p className="text-[26px] font-black mb-0.5 leading-none" style={{ color }}>
        {market}
      </p>
      <p
        className="text-[13px] font-semibold mb-3"
        style={{ color: selected ? color : "rgba(0,0,0,0.7)" }}
      >
        {name}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {benefits.map((b) => (
          <span
            key={b}
            className="text-[10px] px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${color}18`, color }}
          >
            {b}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1">
        {channel.map((c) => (
          <span
            key={c}
            className="text-[10px] px-2 py-0.5 rounded border"
            style={{ borderColor: "rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.4)" }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}

export function PassengerSegmentationMatrix() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="mt-8 mb-2">
      <p
        className="text-[10px] tracking-[0.35em] uppercase mb-5"
        style={{ color: `${GREEN}99` }}
      >
        WHO: Five Segments Scored
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {SEGMENTS.slice(0, 3).map((seg, i) => (
          <motion.div
            key={seg.name}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SegmentCard {...seg} />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SEGMENTS.slice(3).map((seg, i) => (
          <motion.div
            key={seg.name}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
          >
            <SegmentCard {...seg} />
          </motion.div>
        ))}
      </div>

      {/* Bold callout */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-5 rounded-xl p-5 border-l-4"
        style={{ backgroundColor: `${ORANGE}10`, borderLeftColor: ORANGE }}
      >
        <p className="text-[15px] font-semibold" style={{ color: ORANGE }}>
          Style Sharers: not the biggest segment. The most strategically aligned one.
        </p>
      </motion.div>

      {/* Three selection criteria */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-3 rounded-xl p-5 border"
        style={{
          backgroundColor: "rgba(0,0,0,0.04)",
          borderColor: "rgba(0,0,0,0.08)",
        }}
      >
        <p
          className="text-[10px] tracking-[0.25em] uppercase mb-4"
          style={{ color: "rgba(0,0,0,0.35)" }}
        >
          Three selection criteria
        </p>
        <div className="space-y-3">
          {[
            ["01", "Most Reachable", "Instagram + TikTok native audience"],
            ["02", "Best Need-Offer Fit", "Aesthetics + social benefit + design variety"],
            ["03", "Multiplier Effect", "Every purchase is potential organic reach"],
          ].map(([num, title, sub]) => (
            <div key={num} className="flex items-start gap-3">
              <span
                className="text-[10px] tracking-widest font-mono shrink-0 mt-0.5"
                style={{ color: ORANGE }}
              >
                {num}
              </span>
              <div>
                <p className="text-[13px] font-semibold" style={{ color: "rgba(0,0,0,0.75)" }}>
                  {title}
                </p>
                <p className="text-[12px]" style={{ color: "rgba(0,0,0,0.45)" }}>
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ─── Visual 2: Consumer Insight Card ─────────────────────────────────────────

export function PassengerInsightCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="mt-6 rounded-2xl overflow-hidden"
      style={{ backgroundColor: ESPRESSO }}
    >
      <div className="px-8 py-10 md:px-12 md:py-14">
        <p
          className="text-[10px] tracking-[0.35em] uppercase mb-6"
          style={{ color: `${BROWN}99` }}
        >
          Consumer Insight
        </p>
        <p
          className="text-[26px] md:text-[34px] font-bold leading-tight mb-1"
          style={{ color: "rgba(255,255,255,0.92)", fontStyle: "italic" }}
        >
          "They are not buying a bag.
        </p>
        <p
          className="text-[26px] md:text-[34px] font-bold leading-tight mb-8"
          style={{ color: BROWN, fontStyle: "italic" }}
        >
          They are buying evidence of the person they want to be."
        </p>
        <div
          className="border-t pt-6"
          style={{ borderColor: `${BROWN}30` }}
        >
          <p
            className="text-[14px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Style Sharers face a specific tension. They want to be seen as adventurers but
            live predominantly urban lives. Passenger gives them permission to perform that
            identity all the time, not just when they are in nature. The bag is a signal.
            It says something about who they are and who they are becoming, before they
            have even left the city.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Visual 3: Positioning Table ─────────────────────────────────────────────

export function PassengerPositioningTable() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const cards = [
    {
      icon: <Package size={18} />,
      label: "Description",
      body: "Sustainably produced outdoor lifestyle bags in bold colorways for people who want their gear to reflect who they are, not just where they are going.",
      extra: null as React.ReactNode,
    },
    {
      icon: <Star size={18} />,
      label: "Benefits",
      body: null as string | null,
      extra: (
        <div className="mt-2">
          <div className="flex flex-wrap gap-2 mb-3">
            {([["Functional", GREEN], ["Aesthetic", BROWN], ["Social", ORANGE]] as [string, string][]).map(
              ([t, c]) => (
                <span
                  key={t}
                  className="text-[11px] px-3 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: `${c}20`,
                    color: c,
                    border: `1px solid ${c}40`,
                  }}
                >
                  {t}
                </span>
              )
            )}
          </div>
          <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Lightweight, portable, versatile across urban and outdoor contexts. Vibrant
            palette genuinely distinctive in a category dominated by black and grey.
          </p>
        </div>
      ),
    },
    {
      icon: <Zap size={18} />,
      label: "Point of Difference",
      body: "Designed to be seen on trails and timelines, without costing the planet anything extra.",
      extra: (
        <p
          className="text-[12px] font-semibold mt-3 px-3 py-2 rounded-lg"
          style={{ backgroundColor: `${GREEN}22`, color: GREEN }}
        >
          The color IS the sustainability signal.
        </p>
      ),
    },
    {
      icon: <Shield size={18} />,
      label: "Proof",
      body: "Recycled materials. Real communities. Real outdoor photography. No studio shoots. No staged adventures.",
      extra: null as React.ReactNode,
    },
  ]

  return (
    <div ref={ref} className="mt-8 mb-2">
      <p
        className="text-[10px] tracking-[0.35em] uppercase mb-5"
        style={{ color: `${GREEN}99` }}
      >
        WHAT: Brand Positioning
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="rounded-xl p-5 border"
            style={{
              backgroundColor: ESPRESSO,
              borderColor: `${GREEN}35`,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: GREEN }}>{card.icon}</span>
              <p
                className="text-[11px] tracking-[0.2em] uppercase font-semibold"
                style={{ color: `${GREEN}99` }}
              >
                {card.label}
              </p>
            </div>
            {card.body && (
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {card.body}
              </p>
            )}
            {card.extra}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Visual 4: Dual Track Funnel ─────────────────────────────────────────────

const ACQUISITION_STAGES = [
  {
    stage: "Awareness",
    tactic: "Evergreen organic content: nature-immersed product imagery and community hashtags",
    kpi: "Reach growth · Follower growth rate",
  },
  {
    stage: "Interest",
    tactic: "KOL partnerships with micro-influencers + green-living hashtag campaigns",
    kpi: "Saves · Shares · Profile visits",
  },
  {
    stage: "Consideration",
    tactic: "Plant-one-tree campaign · Sustainability credentials at point of decision",
    kpi: "Website conversion rate · Add-to-cart",
  },
  {
    stage: "Conversion",
    tactic: "Revenue tracking by channel · Performance optimisation",
    kpi: "Revenue · CAC · Conversion rate",
  },
]

const LOYALTY_STAGES = [
  {
    stage: "Awareness",
    tactic: "Expert content on LinkedIn + podcasts · Sustainability progress updates",
    kpi: "Engagement rate from existing community",
  },
  {
    stage: "Interest",
    tactic: "Online workshops with outdoor experts · Community events digital + physical",
    kpi: "Participants · Repeat attendance",
  },
  {
    stage: "Consideration",
    tactic: "Photo-sharing events · UGC gallery on website",
    kpi: "Participation rate · UGC volume",
  },
  {
    stage: "Conversion",
    tactic: "Personalised thank-you comms · Impact reports · Community invitations",
    kpi: "Repeat purchase rate · NPS score",
  },
]

function FunnelTrack({
  label,
  labelColor,
  stages,
  inView,
  delayBase,
}: {
  label: string
  labelColor: string
  stages: { stage: string; tactic: string; kpi: string }[]
  inView: boolean
  delayBase: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delayBase }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: `${labelColor}20`, color: labelColor }}
        >
          {label}
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {stages.map((s, i) => (
          <div key={s.stage + i} className="relative">
            <div
              className="rounded-xl p-4 h-full border"
              style={{
                backgroundColor: "rgba(0,0,0,0.35)",
                borderColor: `${labelColor}25`,
              }}
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-1"
                style={{ color: labelColor }}
              >
                {s.stage}
              </p>
              <p
                className="text-[11px] leading-snug mb-2"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {s.tactic}
              </p>
              <p
                className="text-[10px] italic"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {s.kpi}
              </p>
            </div>
            {i < stages.length - 1 && (
              <div
                className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 items-center justify-center w-5 h-5 text-[11px] font-bold"
                style={{ color: labelColor }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function PassengerDualTrackFunnel() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div ref={ref} className="mt-8 mb-2">
      <p
        className="text-[10px] tracking-[0.35em] uppercase mb-1"
        style={{ color: `${GREEN}99` }}
      >
        HOW: Communication Funnel
      </p>
      <p
        className="text-[22px] font-bold mb-1"
        style={{ color: "rgba(0,0,0,0.85)" }}
      >
        The Leaky Bucket Principle
      </p>
      <p
        className="text-[13px] mb-6"
        style={{ color: "rgba(0,0,0,0.45)" }}
      >
        Growth requires filling the bucket AND sealing the leaks.
      </p>
      <div className="space-y-6">
        <FunnelTrack
          label="Acquisition"
          labelColor={ORANGE}
          stages={ACQUISITION_STAGES}
          inView={inView}
          delayBase={0}
        />
        <FunnelTrack
          label="Loyalty"
          labelColor={GREEN}
          stages={LOYALTY_STAGES}
          inView={inView}
          delayBase={0.15}
        />
      </div>
    </div>
  )
}

// ─── Visual 5: Content Pillars ────────────────────────────────────────────────

const CONTENT_PILLARS = [
  {
    num: "01",
    title: "Joy in Nature",
    color: GREEN,
    funnel: "Awareness + Interest",
    quote: "Find joy in discovering nature through every outdoor journey.",
    purpose: "Emotional Brand Territory",
  },
  {
    num: "02",
    title: "Urban Escape",
    color: BROWN,
    funnel: "Awareness + Interest",
    quote: "Take a break. Breathe, reset, reconnect with nature.",
    purpose: "Speaks to Target Tension",
  },
  {
    num: "03",
    title: "Product Proof",
    color: ORANGE,
    funnel: "Consideration + Conversion",
    quote: "Great adventures start with good preparation. Passenger has your back.",
    purpose: "Functional Proof Content",
  },
  {
    num: "04",
    title: "Community",
    color: TEAL,
    funnel: "Consideration + Conversion + Loyalty",
    quote: "Join a community inspiring each other to explore and protect the outdoors.",
    purpose: "Turns Buyers into Advocates",
  },
]

export function PassengerContentPillars() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div ref={ref} className="mt-8 mb-2">
      <p
        className="text-[10px] tracking-[0.35em] uppercase mb-5"
        style={{ color: `${GREEN}99` }}
      >
        Content Strategy: Four Pillars
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CONTENT_PILLARS.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="rounded-xl p-6 border relative overflow-hidden"
            style={{
              backgroundColor: ESPRESSO,
              borderColor: `${p.color}35`,
            }}
          >
            {/* Large ghost number */}
            <p
              className="absolute top-2 right-4 text-[80px] font-black leading-none select-none pointer-events-none"
              style={{ color: `${p.color}12` }}
            >
              {p.num}
            </p>
            {/* Funnel badge */}
            <span
              className="inline-block text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full mb-4"
              style={{ backgroundColor: `${p.color}22`, color: p.color }}
            >
              {p.funnel}
            </span>
            <p
              className="text-[11px] tracking-[0.25em] uppercase mb-1"
              style={{ color: `${p.color}80` }}
            >
              {p.num}
            </p>
            <p
              className="text-[17px] font-bold mb-3"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              {p.title}
            </p>
            <p
              className="text-[13px] leading-relaxed mb-3 italic"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              "{p.quote}"
            </p>
            <p
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ color: p.color }}
            >
              {p.purpose}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Visual 6: Tone of Voice ──────────────────────────────────────────────────

export function PassengerToneOfVoice() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const WOULD_SAY = [
    "Somewhere between the second hill and the third snack break, we forgot what day it was.",
    "Your next adventure is closer than you think.",
    "Made for this. And this. And definitely that.",
  ]
  const WOULD_NOT_SAY = [
    "Our sustainably-crafted premium lifestyle solution.",
    "Elevate your outdoor experience.",
    "Leverage authentic engagement across key touchpoints.",
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mt-8 mb-2"
    >
      <p
        className="text-[10px] tracking-[0.35em] uppercase mb-5"
        style={{ color: `${GREEN}99` }}
      >
        Tone of Voice
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Would Say */}
        <div
          className="rounded-xl border-l-4 p-5"
          style={{ backgroundColor: ESPRESSO, borderLeftColor: GREEN }}
        >
          <p
            className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-4"
            style={{ color: GREEN }}
          >
            Would Say
          </p>
          <div className="space-y-3">
            {WOULD_SAY.map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Check
                  size={13}
                  className="shrink-0 mt-0.5"
                  style={{ color: GREEN }}
                />
                <p
                  className="text-[12px] leading-snug italic"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  "{s}"
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Would Never Say */}
        <div
          className="rounded-xl border-l-4 p-5"
          style={{ backgroundColor: ESPRESSO, borderLeftColor: "#E05252" }}
        >
          <p
            className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-4"
            style={{ color: "#E05252" }}
          >
            Would Never Say
          </p>
          <div className="space-y-3">
            {WOULD_NOT_SAY.map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <X
                  size={13}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#E05252" }}
                />
                <p
                  className="text-[12px] leading-snug italic"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  "{s}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Format definition */}
      <div
        className="rounded-xl p-5 border"
        style={{
          backgroundColor: `${BROWN}12`,
          borderColor: `${BROWN}30`,
        }}
      >
        <p
          className="text-[12px] leading-relaxed text-center italic"
          style={{ color: "rgba(0,0,0,0.55)" }}
        >
          A friend who just got back from an incredible weekend trip and cannot wait to tell
          you about it. Warm. Personal. Never corporate. Never preachy.
        </p>
      </div>
    </motion.div>
  )
}

// ─── Visual 7: Strategic Sequencing Timeline ─────────────────────────────────

export function PassengerTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const phases = [
    {
      time: "Month 1–2",
      title: "Lock Brand Assets",
      body: "Consistency is impossible without a rulebook. Every future piece of content measured against this standard.",
    },
    {
      time: "Month 3–6",
      title: "Build Awareness & Interest",
      body: "Organic content + micro-KOL partnerships. Establish visual trigger before spending on paid amplification.",
    },
    {
      time: "Month 6–12",
      title: "Activate Consideration & Conversion",
      body: "Sustainability campaign, community events, performance tracking.",
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mt-8 rounded-2xl p-6 md:p-8 border"
      style={{
        backgroundColor: "rgba(0,0,0,0.04)",
        borderColor: `${GREEN}25`,
      }}
    >
      <p
        className="text-[10px] tracking-[0.35em] uppercase mb-6"
        style={{ color: `${GREEN}99` }}
      >
        Strategic Sequencing
      </p>

      {/* Phases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
        {/* Connector line desktop */}
        <div
          className="hidden md:block absolute top-5 left-[16.67%] right-[16.67%] h-px"
          style={{ backgroundColor: `${GREEN}35` }}
        />

        {phases.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }}
            className="flex flex-col items-center md:items-start px-4 pb-6 md:pb-0"
          >
            {/* Node */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[12px] mb-4 shrink-0 z-10"
              style={{ backgroundColor: GREEN, color: "white" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <p
              className="text-[9px] tracking-[0.2em] uppercase mb-1"
              style={{ color: `${GREEN}80` }}
            >
              {p.time}
            </p>
            <p
              className="text-[14px] font-semibold mb-2 text-center md:text-left"
              style={{ color: "rgba(0,0,0,0.85)" }}
            >
              {p.title}
            </p>
            <p
              className="text-[12px] leading-relaxed text-center md:text-left"
              style={{ color: "rgba(0,0,0,0.45)" }}
            >
              {p.body}
            </p>
            {i < phases.length - 1 && (
              <div
                className="md:hidden mt-4 text-sm"
                style={{ color: `${GREEN}50` }}
              >
                ↓
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Loyalty bar */}
      <div
        className="mt-6 pt-5 border-t"
        style={{ borderColor: `${GREEN}20` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex-1 h-[3px] rounded-full"
            style={{ backgroundColor: `${GREEN}40` }}
          />
          <p
            className="text-[11px] shrink-0 text-center"
            style={{ color: `${GREEN}99` }}
          >
            Loyalty Track: runs from Month 3, parallel to all phases
          </p>
          <div
            className="flex-1 h-[3px] rounded-full"
            style={{ backgroundColor: `${GREEN}40` }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// ─── Slot Wrappers ────────────────────────────────────────────────────────────

export function PassengerAfterAnalysisFull() {
  return (
    <>
      <PassengerSegmentationMatrix />
      <PassengerInsightCard />
    </>
  )
}

export function PassengerRecommendationsFull() {
  return (
    <div className="space-y-2">
      <PassengerPositioningTable />
      <PassengerDualTrackFunnel />
      <PassengerContentPillars />
      <PassengerToneOfVoice />
    </div>
  )
}

export function PassengerAfterRecommendationsFull() {
  return <PassengerTimeline />
}
