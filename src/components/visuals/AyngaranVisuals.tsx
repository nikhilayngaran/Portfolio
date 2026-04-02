"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

const GOLD = "#C9A84C"
const TEAL = "#5DD3C8"

// ─── Visual 1: Three-Layer Reveal ────────────────────────────────────────────

export function AyngaranThreeLayerReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!inView) return
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 1700),
      setTimeout(() => setStep(3), 3200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [inView])

  function replay() {
    setStep(0)
    setTimeout(() => {
      setStep(1)
      setTimeout(() => setStep(2), 1300)
      setTimeout(() => setStep(3), 2600)
    }, 80)
  }

  return (
    <div ref={ref} className="mt-10 mb-2">
      <p className="text-[10px] tracking-[0.35em] uppercase mb-6" style={{ color: `${GOLD}70` }}>
        The Hidden Mark — Three Layers
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {/* Stage 1 — The Mark */}
        <StageCard active={step >= 1} number="01" label="The Mark" sublabel="A clean, professional lockup">
          <div
            className="w-full rounded-xl overflow-hidden transition-all duration-700"
            style={{ opacity: step >= 1 ? 1 : 0 }}
          >
            <img
              src="/logos/ayngaran.png"
              alt="Ayngaran logo"
              className="w-full h-auto object-contain"
              style={{ filter: "brightness(0) invert(1) opacity(0.85)" }}
            />
          </div>
        </StageCard>

        {/* Stage 2 — The Anatomy */}
        <StageCard active={step >= 2} number="02" label="The Anatomy" sublabel="Elephant geometry revealed">
          <div className="w-full relative">
            <img
              src="/logos/ayngaran.png"
              alt="Ayngaran logo annotated"
              className="w-full h-auto object-contain transition-all duration-700"
              style={{
                filter: "brightness(0) invert(1) opacity(0.75)",
                opacity: step >= 2 ? 1 : 0,
              }}
            />
            {/* SVG annotation overlay — matches logo aspect ratio ~2.28:1 */}
            <svg
              viewBox="0 0 228 100"
              className="absolute inset-0 w-full h-full transition-all duration-700"
              style={{ opacity: step >= 2 ? 1 : 0 }}
              fill="none"
            >
              {/* Left ear circle */}
              <circle cx="16" cy="42" r="13" stroke={TEAL} strokeWidth="1.2" strokeDasharray="3 2.5" />
              <text x="2" y="61" fontSize="5" fill={TEAL} fontFamily="monospace">EAR</text>

              {/* Right ear / crown area */}
              <circle cx="48" cy="18" r="14" stroke={TEAL} strokeWidth="1.2" strokeDasharray="3 2.5" />
              <text x="36" y="10" fontSize="5" fill={TEAL} fontFamily="monospace">CROWN</text>

              {/* Trunk arrow */}
              <line x1="62" y1="65" x2="62" y2="88" stroke={TEAL} strokeWidth="1.2" strokeDasharray="2.5 2" />
              <polygon points="62,93 58,83 66,83" fill={TEAL} opacity="0.85" />
              <text x="64" y="80" fontSize="5" fill={TEAL} fontFamily="monospace">TRUNK</text>

              {/* Crown apex dot */}
              <circle cx="41" cy="4" r="3" fill={TEAL} opacity="0.9" />
              <circle cx="41" cy="4" r="6" stroke={TEAL} strokeWidth="0.8" opacity="0.4" />
            </svg>
          </div>
        </StageCard>

        {/* Stage 3 — The Meaning */}
        <StageCard active={step >= 3} number="03" label="The Meaning" sublabel="Ganesha, encoded">
          <div
            className="w-full rounded-xl overflow-hidden transition-all duration-700 relative"
            style={{ opacity: step >= 3 ? 1 : 0 }}
          >
            <img
              src="/logos/ayngaran.png"
              alt="Ayngaran final mark"
              className="w-full h-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            {/* Gold glow ring behind the mark */}
            <div
              className="absolute inset-0 rounded-xl transition-all duration-1000 pointer-events-none"
              style={{
                boxShadow: step >= 3
                  ? `inset 0 0 40px ${GOLD}22, 0 0 0 1px ${GOLD}40`
                  : "none",
              }}
            />
          </div>
        </StageCard>
      </div>

      {/* Progress bar */}
      <div className="mt-6 flex gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className="h-[2px] flex-1 rounded-full transition-all duration-700"
            style={{ backgroundColor: step >= s ? GOLD : `${GOLD}20` }}
          />
        ))}
      </div>

      {step >= 3 && (
        <button
          onClick={replay}
          className="mt-3 text-[10px] tracking-[0.25em] uppercase transition-opacity duration-300 hover:opacity-100"
          style={{ color: `${GOLD}50` }}
        >
          Replay ↺
        </button>
      )}
    </div>
  )
}

function StageCard({
  active,
  number,
  label,
  sublabel,
  children,
}: {
  active: boolean
  number: string
  label: string
  sublabel: string
  children: React.ReactNode
}) {
  return (
    <div
      className="flex-1 rounded-2xl p-5 flex flex-col transition-all duration-700"
      style={{
        backgroundColor: active ? `${GOLD}10` : `${GOLD}05`,
        border: `1px solid ${active ? GOLD + "45" : GOLD + "15"}`,
        opacity: active ? 1 : 0.3,
        transform: active ? "translateY(0)" : "translateY(14px)",
      }}
    >
      <p className="text-[9px] tracking-[0.3em] uppercase mb-0.5" style={{ color: `${GOLD}55` }}>
        {number}
      </p>
      <p className="text-[13px] font-semibold mb-0.5" style={{ color: GOLD }}>
        {label}
      </p>
      <p className="text-[11px] mb-4" style={{ color: `${GOLD}45` }}>
        {sublabel}
      </p>
      {children}
    </div>
  )
}

// ─── Visual 2: Hidden Meaning Comparison ─────────────────────────────────────

export function AyngaranHiddenMeaning() {
  return (
    <div className="mt-10 mb-2">
      <p className="text-[10px] tracking-[0.35em] uppercase mb-2" style={{ color: `${GOLD}60` }}>
        The Tradition of the Hidden Mark
      </p>
      <p className="text-[13px] leading-relaxed mb-6" style={{ color: `${GOLD}50` }}>
        The greatest brand marks encode meaning that reveals itself only when you know where to look.
        This is not trickery — it is strategic depth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <HiddenCard
          brand="FedEx"
          hidden="Arrow between E and x"
          meaning="Speed and precision — hidden in plain sight"
          isHighlight={false}
          visual={<FedExMark />}
        />
        <HiddenCard
          brand="Amazon"
          hidden="Smile from A to Z"
          meaning="Everything from A to Z, delivered with joy"
          isHighlight={false}
          visual={<AmazonMark />}
        />
        <HiddenCard
          brand="Ayngaran"
          hidden="Elephant in the A"
          meaning="Ganesha encoded — wisdom, strength, new beginnings"
          isHighlight={true}
          visual={
            <img
              src="/logos/ayngaran.png"
              alt="Ayngaran logo"
              className="w-full h-auto object-contain"
              style={{ filter: "brightness(0) invert(1)", maxHeight: 56 }}
            />
          }
        />
      </div>
    </div>
  )
}

function HiddenCard({
  brand,
  hidden,
  meaning,
  isHighlight,
  visual,
}: {
  brand: string
  hidden: string
  meaning: string
  isHighlight: boolean
  visual: React.ReactNode
}) {
  return (
    <div
      className="rounded-xl p-5 border flex flex-col"
      style={{
        backgroundColor: isHighlight ? `${GOLD}12` : `${GOLD}06`,
        borderColor: isHighlight ? `${GOLD}50` : `${GOLD}18`,
      }}
    >
      <div className="flex items-center justify-center h-14 mb-4">{visual}</div>
      <p className="text-[14px] font-semibold mb-1" style={{ color: GOLD }}>
        {brand}
      </p>
      <p className="text-[10px] font-mono mb-2" style={{ color: `${GOLD}55` }}>
        {hidden}
      </p>
      <p className="text-[11px] leading-relaxed" style={{ color: `${GOLD}45` }}>
        {meaning}
      </p>
    </div>
  )
}

function FedExMark() {
  return (
    <svg viewBox="0 0 110 36" width="110" height="36" fill="none">
      <text x="2" y="28" fontSize="30" fontWeight="900" fontFamily="Arial, sans-serif" fill="#4D148C">Fed</text>
      <text x="58" y="28" fontSize="30" fontWeight="900" fontFamily="Arial, sans-serif" fill="#FF6600">Ex</text>
      <polygon points="94,16 85,10 85,22" fill="#FF6600" />
    </svg>
  )
}

function AmazonMark() {
  return (
    <svg viewBox="0 0 110 46" width="110" height="46" fill="none">
      <text x="2" y="28" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif" fill="rgba(255,255,255,0.85)">amazon</text>
      <path d="M 6 36 Q 55 52 104 36" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round" />
      <polygon points="104,36 96,32 97,40" fill="#FF9900" />
    </svg>
  )
}

// ─── Visual 3: Color Palette ──────────────────────────────────────────────────

export function AyngaranColorPalette() {
  const palettes = [
    {
      name: "Deep Navy",
      hex: "#1A3A6B",
      note: "Authority, trust, depth — primary brand colour",
      bg: "#1A3A6B",
    },
    {
      name: "Midnight",
      hex: "#0F2147",
      note: "Modal backgrounds, dark surfaces, gravitas",
      bg: "#0F2147",
    },
    {
      name: "Royal Blue",
      hex: "#2357B0",
      note: "Elephant silhouette — vibrancy within restraint",
      bg: "#2357B0",
    },
    {
      name: "Light Blue",
      hex: "#4A9BC4",
      note: "Tagline, supporting text — approachable warmth",
      bg: "#4A9BC4",
    },
  ]

  return (
    <div className="mt-8 mb-2">
      <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: `${GOLD}60` }}>
        Brand Colour System
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {palettes.map((p) => (
          <div key={p.hex} className="rounded-xl overflow-hidden border" style={{ borderColor: `${GOLD}20` }}>
            <div className="h-20 w-full" style={{ backgroundColor: p.bg }} />
            <div className="px-3 py-3" style={{ backgroundColor: `${GOLD}08` }}>
              <p className="text-[12px] font-semibold mb-0.5" style={{ color: GOLD }}>
                {p.name}
              </p>
              <p className="text-[10px] font-mono mb-1" style={{ color: `${GOLD}55` }}>
                {p.hex}
              </p>
              <p className="text-[10px] leading-snug" style={{ color: `${GOLD}45` }}>
                {p.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Visual 4: Brand Values ───────────────────────────────────────────────────

const VALUES = [
  {
    icon: "🐘",
    title: "Obstacle Removal",
    body: "Ganesha is the remover of obstacles — the first deity invoked before any new venture. Ayngaran promises the same.",
  },
  {
    icon: "🌱",
    title: "New Beginnings",
    body: "Every engagement starts with a clean slate. The brand signals fresh thinking, not inherited convention.",
  },
  {
    icon: "📖",
    title: "Wisdom",
    body: "Ganesha carries both a pen and a broken tusk — the tools of knowledge, even at personal cost.",
  },
  {
    icon: "⚡",
    title: "Intelligence",
    body: "Pattern recognition, structural clarity, and the ability to see around corners — encoded in the mark itself.",
  },
  {
    icon: "✦",
    title: "Good Fortune",
    body: "The elephant is an ancient symbol of prosperity and blessing. The brand carries this forward deliberately.",
  },
]

export function AyngaranBrandValues() {
  return (
    <div className="mt-8 mb-2">
      <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: `${GOLD}60` }}>
        Brand Values — Encoded in the Name
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {VALUES.slice(0, 3).map((v) => (
          <ValueCard key={v.title} {...v} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {VALUES.slice(3).map((v) => (
          <ValueCard key={v.title} {...v} />
        ))}
      </div>
    </div>
  )
}

function ValueCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div
      className="rounded-xl p-5 border"
      style={{ backgroundColor: `${GOLD}08`, borderColor: `${GOLD}20` }}
    >
      <div className="text-2xl mb-3">{icon}</div>
      <p className="text-[13px] font-semibold mb-2" style={{ color: GOLD }}>
        {title}
      </p>
      <p className="text-[12px] leading-relaxed" style={{ color: `${GOLD}55` }}>
        {body}
      </p>
    </div>
  )
}

// ─── Slot Wrappers ────────────────────────────────────────────────────────────

export function AyngaranAfterObjectiveFull() {
  return <AyngaranThreeLayerReveal />
}

export function AyngaranAfterAnalysisFull() {
  return <AyngaranHiddenMeaning />
}

export function AyngaranRecommendationsFull() {
  return (
    <div className="space-y-2">
      <AyngaranColorPalette />
      <AyngaranBrandValues />
    </div>
  )
}
