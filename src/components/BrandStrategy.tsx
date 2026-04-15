"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Users, Gem, Layers, MapPin, CalendarDays } from "lucide-react"

const GREEN = "#4A7C59"
const ESPRESSO = "#1C1008"
const CREAM = "#F5F0E8"

type Step = {
  number: number
  label: string
  subtitle: string
  body: string
  questions: string[]
}

const steps: Step[] = [
  {
    number: 1,
    label: "Know who",
    subtitle: "Audience and insight",
    body: "Most briefs are written for the wrong person. I start by identifying the real consumer, not the assumed one. Who actually has the need? Who is the value exchange for? Get this wrong and everything downstream is wasted effort.",
    questions: ["Who is the real consumer?", "What is their actual need?", "What do they believe today?"],
  },
  {
    number: 2,
    label: "Know what",
    subtitle: "Value and differentiation",
    body: "Not features. Not product specs. What do you actually do for people, and why should they believe you over anyone else? This is where most brands go vague. I push until there is a clear, honest answer.",
    questions: ["What do I genuinely offer?", "What makes me different?", "Why should they trust me?"],
  },
  {
    number: 3,
    label: "Know how",
    subtitle: "Brand identity and voice",
    body: "Once the strategy is clear, the brand needs a face. Consistent visual assets, a tone that holds across every format, and a selling line that actually means something. No scattered aesthetics. No copy that sounds like everyone else.",
    questions: ["What are the consistent visual assets?", "What is the tone of voice?", "What is the core selling line?"],
  },
  {
    number: 4,
    label: "Know where",
    subtitle: "Channels and touchpoints",
    body: "Reach your audience where they actually are, not where you assume they are. I prioritise the right channels and formats so the brand's energy goes to places that convert, not just places that look busy.",
    questions: [
      "Which channels does my audience use?",
      "Which touchpoints deserve the most investment?",
      "Which content formats work here?",
    ],
  },
  {
    number: 5,
    label: "Know when",
    subtitle: "Content and activation",
    body: "Strategy only matters if it runs. I build a content system with a clear rhythm. The right message, in the right format, at the right moment. Consistently. This is where the brand stops being a document and starts being something people actually see.",
    questions: [
      "What is the publishing rhythm?",
      "What does the content plan look like?",
      "How do we measure what is working?",
    ],
  },
]

const STEP_ICONS = [Users, Gem, Layers, MapPin, CalendarDays]

export default function BrandStrategy() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const totalSteps = steps.length
  const progressScale = active / (totalSteps - 1)

  return (
    <div ref={ref} className="border-t pt-16 pb-20" style={{ borderColor: "rgba(28,16,8,0.12)" }}>

      {/* Heading */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)", color: ESPRESSO }}
        >
          My proven{" "}
          <span style={{ color: GREEN }}>5-step</span>{" "}
          brand strategy
        </h2>
        <p className="text-lg max-w-2xl" style={{ color: `${ESPRESSO}99` }}>
          I don't believe in generic strategy decks. Every brand I work with gets a framework built on
          one thing: the truth of their audience.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative flex justify-between items-center mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Track */}
        <div
          className="absolute left-[18px] right-[18px] h-px top-1/2 -translate-y-1/2"
          style={{ backgroundColor: "rgba(28,16,8,0.1)" }}
        />
        {/* Animated fill */}
        <motion.div
          className="absolute left-[18px] right-[18px] h-px top-1/2 -translate-y-1/2 origin-left"
          style={{ backgroundColor: GREEN }}
          animate={{ scaleX: progressScale }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        />
        {/* Dots */}
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative z-10 focus:outline-none"
            aria-label={`Step ${step.number}: ${step.label}`}
          >
            <motion.div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 cursor-pointer"
              animate={{
                backgroundColor: i <= active ? GREEN : CREAM,
                borderColor: i <= active ? GREEN : "rgba(28,16,8,0.2)",
                color: i <= active ? "#ffffff" : "rgba(28,16,8,0.35)",
              }}
              transition={{ duration: 0.3 }}
            >
              {step.number}
            </motion.div>
          </button>
        ))}
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-5 gap-3 mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {steps.map((step, i) => {
          const Icon = STEP_ICONS[i]
          const isActive = i === active
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="text-left p-4 rounded-xl border transition-all duration-300 focus:outline-none"
              style={{
                borderColor: isActive ? GREEN : "rgba(28,16,8,0.1)",
                backgroundColor: isActive ? `${GREEN}0e` : "transparent",
              }}
            >
              <div className="mb-3">
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  color={isActive ? GREEN : "rgba(28,16,8,0.35)"}
                />
              </div>
              <p
                className="font-semibold text-sm leading-tight mb-0.5"
                style={{ color: ESPRESSO }}
              >
                {step.label}
              </p>
              <p
                className="text-xs leading-snug"
                style={{ color: "rgba(28,16,8,0.5)" }}
              >
                {step.subtitle}
              </p>
            </button>
          )
        })}
      </motion.div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-xl border p-8 mb-8"
          style={{
            borderColor: "rgba(28,16,8,0.1)",
            backgroundColor: "rgba(28,16,8,0.025)",
          }}
        >
          {/* Pill */}
          <span
            className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border mb-5"
            style={{
              color: GREEN,
              borderColor: `${GREEN}55`,
              backgroundColor: `${GREEN}12`,
            }}
          >
            Step {steps[active].number}
          </span>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-serif)", color: ESPRESSO }}
          >
            {steps[active].label}
          </h3>

          {/* Body */}
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "rgba(28,16,8,0.65)" }}
          >
            {steps[active].body}
          </p>

          {/* Question pills */}
          <div className="flex flex-wrap gap-2">
            {steps[active].questions.map((q) => (
              <span
                key={q}
                className="text-sm px-4 py-2 rounded-full border"
                style={{
                  borderColor: "rgba(28,16,8,0.15)",
                  color: "rgba(28,16,8,0.58)",
                }}
              >
                {q}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActive((p) => Math.max(0, p - 1))}
          disabled={active === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200"
          style={{
            borderColor: active === 0 ? "rgba(28,16,8,0.1)" : "rgba(28,16,8,0.2)",
            color: active === 0 ? "rgba(28,16,8,0.25)" : ESPRESSO,
            cursor: active === 0 ? "not-allowed" : "pointer",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        <span
          className="text-sm tabular-nums font-medium"
          style={{ color: "rgba(28,16,8,0.4)" }}
        >
          {active + 1} of {totalSteps}
        </span>

        <button
          onClick={() => setActive((p) => Math.min(totalSteps - 1, p + 1))}
          disabled={active === totalSteps - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200"
          style={{
            borderColor: active === totalSteps - 1 ? "rgba(28,16,8,0.1)" : "rgba(28,16,8,0.2)",
            color: active === totalSteps - 1 ? "rgba(28,16,8,0.25)" : ESPRESSO,
            cursor: active === totalSteps - 1 ? "not-allowed" : "pointer",
          }}
        >
          Next
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  )
}
