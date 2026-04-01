"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Project } from "@/data/projects"

export default function WorkModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal panel — slides up from bottom */}
      <motion.div
        className="fixed inset-x-0 bottom-0 top-[4vh] z-50 flex flex-col bg-[#0f0f0f] rounded-t-3xl overflow-hidden shadow-2xl"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 280 }}
      >
        {/* Top accent bar */}
        <div className="h-[3px] w-full shrink-0" style={{ backgroundColor: project.accent }} />

        {/* Sticky header */}
        <div className="shrink-0 sticky top-0 z-10 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/[0.06] px-6 md:px-12 py-5 flex items-center justify-between">
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase mb-1" style={{ color: project.accent }}>
              {project.number} · Case Study
            </p>
            <h2 className="text-[22px] font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-12">

            {/* Client */}
            <div className="flex items-center gap-5 mb-8 pl-4 border-l-2" style={{ borderColor: project.accent }}>
              {project.clientLogo && (
                <img
                  src={project.clientLogo}
                  alt={project.client.split("|")[0].trim()}
                  className="h-8 w-auto object-contain opacity-60"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              )}
              <p className="text-sm text-white/50 leading-relaxed">{project.client}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-14">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Objective */}
            <CaseSection label="Objective" accent={project.accent}>
              <p className="text-white/70 leading-[1.85] text-[15px]">{project.objective}</p>
            </CaseSection>

            {/* Analysis */}
            <CaseSection label="Analysis" accent={project.accent}>
              <p className="text-white/70 leading-[1.85] text-[15px]">{project.analysis}</p>
            </CaseSection>

            {/* Recommendations */}
            <CaseSection label="Recommendations" accent={project.accent}>
              {project.recommendations.intro && (
                <p className="text-white/40 text-sm mb-7 uppercase tracking-widest">
                  {project.recommendations.intro}
                </p>
              )}
              <div className="space-y-7">
                {project.recommendations.pillars.map((pillar, idx) => (
                  <div key={idx} className="pl-5 border-l border-white/[0.08]">
                    <p className="font-semibold text-white text-[15px] mb-2">
                      <span style={{ color: project.accentSecondary }}>{idx + 1}. </span>
                      {pillar.title}
                    </p>
                    <p className="text-white/55 text-sm leading-relaxed">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            {/* Skills */}
            <CaseSection label="Skills Demonstrated" accent={project.accent}>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      backgroundColor: project.accent + "22",
                      color: project.accentSecondary,
                      border: `1px solid ${project.accent}55`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CaseSection>

          </div>
        </div>
      </motion.div>
    </>
  )
}

function CaseSection({
  label,
  accent,
  children,
}: {
  label: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
        <p className="text-sm font-bold tracking-wide text-white">{label}</p>
      </div>
      {children}
    </div>
  )
}
