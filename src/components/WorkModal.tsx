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
        className="fixed inset-x-0 bottom-0 top-[3vh] z-50 flex flex-col bg-[#f5f3ee] rounded-t-2xl overflow-hidden"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 280 }}
      >
        {/* Top accent line */}
        <div className="h-[3px] w-full shrink-0" style={{ backgroundColor: project.accent }} />

        {/* Sticky header */}
        <div className="shrink-0 bg-[#f5f3ee] border-b border-black/10 px-8 md:px-16 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {project.clientLogo && (
              <img
                src={project.clientLogo}
                alt={project.client}
                className="h-6 w-auto object-contain opacity-70"
              />
            )}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-black/35 mb-0.5">
                {project.number} · Case Study
              </p>
              <h2 className="text-[22px] font-semibold text-black tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-black/15 text-black/40 hover:text-black hover:border-black/30 transition-all duration-200"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">
          <div className="max-w-5xl mx-auto px-8 md:px-16 py-16">

            {/* Client + Tags row */}
            <div className="flex flex-wrap items-start justify-between gap-6 mb-16 pb-10 border-b border-black/10">
              <p className="text-[13px] text-black/50 leading-relaxed max-w-lg">
                {project.client}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 rounded-full border border-black/15 text-black/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Objective */}
            <CaseSection label="Objective">
              <p className="text-[15px] text-black/70 leading-[1.9]">
                {project.objective}
              </p>
              {visuals.afterObjective}
            </CaseSection>

            {/* Analysis */}
            <CaseSection label="Analysis">
              <p className="text-[15px] text-black/70 leading-[1.9]">
                {project.analysis}
              </p>
              {visuals.afterAnalysis}
            </CaseSection>

            {/* Competition (optional) */}
            {project.competition && (
              <CaseSection label="Competition">
                <p className="text-[15px] text-black/70 leading-[1.9]">
                  {project.competition}
                </p>
                {visuals.afterCompetition}
              </CaseSection>
            )}

            {/* Recommendations */}
            <CaseSection label="Recommendations">
              {visuals.replaceRecommendations ? (
                visuals.replaceRecommendations
              ) : (
                <>
                  {project.recommendations.intro && (
                    <p className="text-[11px] tracking-[0.25em] uppercase text-black/35 mb-8">
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
                            idx < 2 ? project.accent + "66" : "rgba(0,0,0,0.1)",
                        }}
                      >
                        <p className="text-[11px] tracking-widest uppercase text-black/35 mb-2">
                          {String(idx + 1).padStart(2, "0")}
                        </p>
                        <p className="text-[15px] font-semibold text-black mb-3">
                          {pillar.title}
                        </p>
                        <p className="text-[13px] text-black/55 leading-relaxed">
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
            <CaseSection label="Skills Demonstrated">
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
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-16">
      <p className="text-[48px] font-bold uppercase text-black mb-6 leading-none">
        {label}
      </p>
      {children}
    </div>
  )
}
