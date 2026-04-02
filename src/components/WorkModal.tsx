"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Project } from "@/data/projects"
import { getProjectVisuals } from "@/components/visuals"

export default function WorkModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const visuals = getProjectVisuals(project.id)

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

  const isDark = project.modalDark === true
  const modalBg = project.modalBg ?? "#f5f3ee"
  const textPrimary = isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.85)"
  const textSecondary = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"
  const textMuted = isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)"
  const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
  const headerBg = isDark ? (project.modalBg ?? "#0F2147") : "#f5f3ee"

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-x-0 bottom-0 top-[3vh] z-50 flex flex-col rounded-t-2xl overflow-hidden"
        style={{ backgroundColor: modalBg }}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 280 }}
      >
        {/* Top accent line */}
        <div className="h-[3px] w-full shrink-0" style={{ backgroundColor: project.accent }} />

        {/* Sticky header */}
        <div
          className="shrink-0 border-b px-8 md:px-16 py-5 flex items-center justify-between"
          style={{ backgroundColor: headerBg, borderColor }}
        >
          <div className="flex items-center gap-4">
            {project.clientLogo && (
              <img
                src={project.clientLogo}
                alt={project.client}
                className="h-6 w-auto object-contain opacity-70"
                style={isDark ? { filter: "brightness(0) invert(1)" } : undefined}
              />
            )}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-0.5" style={{ color: textMuted }}>
                {project.number} · Case Study
              </p>
              <h2 className="text-[22px] font-semibold tracking-tight" style={{ color: textPrimary }}>
                {project.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border transition-all duration-200"
            style={{ borderColor, color: textSecondary }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">
          <div className="max-w-5xl mx-auto px-8 md:px-16 py-16">

            {/* Client + Tags row */}
            <div className="flex flex-wrap items-start justify-between gap-6 mb-16 pb-10 border-b" style={{ borderColor }}>
              <p className="text-[13px] leading-relaxed max-w-lg" style={{ color: textSecondary }}>
                {project.client}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 rounded-full border"
                    style={{ borderColor, color: textSecondary }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Objective */}
            <CaseSection label="Objective" accent={project.accent} isDark={isDark} textMuted={textMuted}>
              <p className="text-[15px] leading-[1.9]" style={{ color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.7)" }}>
                {project.objective}
              </p>
              {visuals.afterObjective}
            </CaseSection>

            {/* Analysis */}
            <CaseSection label="Analysis" accent={project.accent} isDark={isDark} textMuted={textMuted}>
              <p className="text-[15px] leading-[1.9]" style={{ color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.7)" }}>
                {project.analysis}
              </p>
              {visuals.afterAnalysis}
            </CaseSection>

            {/* Competition (optional) */}
            {project.competition && (
              <CaseSection label="Competition" accent={project.accent} isDark={isDark} textMuted={textMuted}>
                <p className="text-[15px] leading-[1.9]" style={{ color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.7)" }}>
                  {project.competition}
                </p>
                {visuals.afterCompetition}
              </CaseSection>
            )}

            {/* Recommendations */}
            <CaseSection label="Recommendations" accent={project.accent} isDark={isDark} textMuted={textMuted}>
              {visuals.replaceRecommendations ? (
                visuals.replaceRecommendations
              ) : (
                <>
                  {project.recommendations.intro && (
                    <p className="text-[11px] tracking-[0.25em] uppercase mb-8" style={{ color: textMuted }}>
                      {project.recommendations.intro}
                    </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.recommendations.pillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="border-t-2 pt-5"
                        style={{
                          borderTopColor:
                            idx < 2 ? project.accent + "66" : borderColor,
                        }}
                      >
                        <p className="text-[11px] tracking-widest uppercase mb-2" style={{ color: textMuted }}>
                          {String(idx + 1).padStart(2, "0")}
                        </p>
                        <p className="text-[15px] font-semibold mb-3" style={{ color: textPrimary }}>
                          {pillar.title}
                        </p>
                        <p className="text-[13px] leading-relaxed" style={{ color: textSecondary }}>
                          {pillar.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {visuals.afterRecommendations}
            </CaseSection>

            {/* Skills */}
            <CaseSection label="Skills Demonstrated" accent={project.accent} isDark={isDark} textMuted={textMuted}>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[12px] px-4 py-2 rounded-full font-medium"
                    style={
                      project.darkSkills
                        ? {
                            backgroundColor: project.accentSecondary,
                            color: project.accent,
                            border: `1px solid ${project.accent}60`,
                          }
                        : {
                            backgroundColor: project.accent + "18",
                            color: project.accent,
                            border: `1px solid ${project.accent}40`,
                          }
                    }
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
  children,
  accent,
  isDark,
  textMuted,
}: {
  label: string
  children: React.ReactNode
  accent: string
  isDark: boolean
  textMuted: string
}) {
  return (
    <div className="mb-16">
      <p
        className="text-[48px] font-bold uppercase mb-6 leading-none"
        style={{ color: isDark ? accent : "rgba(0,0,0,0.85)" }}
      >
        {label}
      </p>
      {children}
    </div>
  )
}
