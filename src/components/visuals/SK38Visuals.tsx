"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const GOLD = "#C9A84C"

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── 1. Logo hero ──────────────────────────────────────────────────────────────

function SK38Hero() {
  return (
    <FadeUp>
      <div
        className="w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center mt-10 relative"
        style={{ backgroundColor: "#080808", border: `1px solid rgba(201,168,76,0.14)`, padding: "96px 40px 72px" }}
      >
        {/* Radial ambient light behind logo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 55% 45% at 50% 46%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />

        <img
          src="/sk38/logo.png"
          alt="SK38 Nettoyage logo"
          className="w-44 md:w-56 h-auto object-contain relative z-10 mb-10"
          style={{ filter: "drop-shadow(0 8px 32px rgba(201,168,76,0.15))" }}
        />

        <div className="flex items-center gap-4 relative z-10">
          <div className="w-8 h-px" style={{ backgroundColor: `${GOLD}35` }} />
          <p
            className="text-[11px] tracking-[0.3em] uppercase font-medium"
            style={{ color: `${GOLD}80` }}
          >
            La propreté qui fait la différence&nbsp;!
          </p>
          <div className="w-8 h-px" style={{ backgroundColor: `${GOLD}35` }} />
        </div>

        <p
          className="text-[10px] tracking-[0.22em] uppercase mt-3 relative z-10"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          Grenoble &amp; Isère · Département 38
        </p>
      </div>
    </FadeUp>
  )
}

// ─── 2. Logo + brand mark side by side ────────────────────────────────────────

function SK38BrandIdentity() {
  return (
    <FadeUp delay={0.06}>
      <div className="grid grid-cols-2 gap-4 mt-4">

        {/* Logo badge — dark card */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl py-12 px-8 gap-7"
          style={{ backgroundColor: "#111111", border: "1px solid rgba(201,168,76,0.12)" }}
        >
          <img
            src="/sk38/logo.png"
            alt="SK38 logo badge"
            className="w-24 md:w-32 h-auto object-contain"
            style={{ filter: "drop-shadow(0 4px 20px rgba(201,168,76,0.12))" }}
          />
          <div className="text-center">
            <p className="text-[10px] tracking-[0.28em] uppercase font-medium mb-1" style={{ color: `${GOLD}60` }}>
              Logo Badge
            </p>
            <p className="text-[10px] tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.2)" }}>
              Primary mark
            </p>
          </div>
        </div>

        {/* Brand mark — light card */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl py-12 px-8 gap-7"
          style={{ backgroundColor: "#F5F2ED" }}
        >
          <img
            src="/sk38/brand-asset.png"
            alt="SK38 mountain mark"
            className="w-28 md:w-40 h-auto object-contain"
          />
          <div className="text-center">
            <p className="text-[10px] tracking-[0.28em] uppercase font-medium mb-1 text-black/40">
              Brand Mark
            </p>
            <p className="text-[10px] tracking-[0.14em] text-black/25">
              Alps illustration
            </p>
          </div>
        </div>

      </div>
    </FadeUp>
  )
}

// ─── 3. Brand copy ────────────────────────────────────────────────────────────

function SK38BrandCopy() {
  return (
    <FadeUp delay={0.04}>
      <div className="mt-10 mb-2">
        <p
          className="text-[11px] tracking-[0.3em] uppercase mb-6 font-medium"
          style={{ color: `${GOLD}80` }}
        >
          Brand Direction
        </p>
        <p
          className="text-[16px] md:text-[18px] leading-relaxed mb-5 font-medium"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Bold and minimal. Built to stand out in a category that blends in.
        </p>
        <p
          className="text-[14px] md:text-[15px] leading-[1.9]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          The name SK38 carries real meaning. SK are letters with personal significance to the client.
          38 is the postal code for Isère, the region where the business operates.
          To make that geography visual, I created a small alps illustration placed directly above the
          number 38 in the logo mark. The Isère mountains, encoded into the identity.
          The result is a dark, professional brand that reads nothing like a typical cleaning company.
        </p>
      </div>
    </FadeUp>
  )
}

// ─── 4. Billboard ─────────────────────────────────────────────────────────────

function SK38Billboard() {
  return (
    <FadeUp delay={0.04}>
      <div className="mt-8">
        <div className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <img
            src="/sk38/billboard.jpg"
            alt="SK38 Nettoyage outdoor billboard"
            className="w-full h-auto object-cover"
          />
        </div>
        <p
          className="text-[10px] tracking-[0.28em] uppercase mt-3"
          style={{ color: `${GOLD}50` }}
        >
          Outdoor Advertising · Billboard Mockup
        </p>
      </div>
    </FadeUp>
  )
}

// ─── 5. Reference images ──────────────────────────────────────────────────────

function SK38ReferenceImages() {
  return (
    <div className="mt-6 space-y-4">
      <FadeUp delay={0.04}>
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/sk38/ref2.png"
            alt="SK38 team cleaning a commercial space"
            className="w-full h-auto object-cover"
          />
        </div>
      </FadeUp>
      <FadeUp delay={0.08}>
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/sk38/ref3.png"
            alt="SK38 office cleaning"
            className="w-full h-auto object-cover"
          />
        </div>
      </FadeUp>
    </div>
  )
}

// ─── Slot wrappers ─────────────────────────────────────────────────────────────

export function SK38WorkSection() {
  return (
    <div>
      <SK38Hero />
      <SK38BrandIdentity />
      <div className="mt-12">
        <SK38BrandCopy />
        <SK38Billboard />
        <SK38ReferenceImages />
      </div>
    </div>
  )
}
