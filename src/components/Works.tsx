"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { projects, Project } from "@/data/projects"
import WorkModal from "./WorkModal"

export default function Works() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <>
      <section ref={ref} id="work" className="py-24 md:py-32 px-8 md:px-20" style={{ backgroundColor: "#f5f2ed" }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-[11px] tracking-[0.35em] text-black/40 uppercase mb-5 font-medium">
              Selected Works
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight leading-none uppercase">
              Selected<br />Works
            </h2>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-black/10 mb-0" />

          {/* Project rows */}
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + idx * 0.08 }}
            >
              <button
                onClick={() => setSelected(project)}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative w-full text-left border-b border-black/10 py-8 md:py-10 flex items-center gap-6 cursor-pointer px-2 -mx-2 overflow-hidden"
              >
                {/* Hover bg */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.02)",
                    opacity: hovered === project.id ? 1 : 0,
                  }}
                />

                {/* Number */}
                <span
                  className="relative z-10 text-[13px] font-bold tabular-nums shrink-0 w-8 transition-colors duration-300"
                  style={{ color: hovered === project.id ? "#D4622A" : "rgba(0,0,0,0.25)" }}
                >
                  {project.number}
                </span>

                {/* Title + Client */}
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-black tracking-tight mb-1 transition-colors duration-300 group-hover:text-black">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-black/40 truncate">
                    {project.client}
                  </p>
                </div>

                {/* Tags / Preview panel */}
                <div className="relative z-10 shrink-0 w-[200px] hidden md:block" style={{ minHeight: 64 }}>
                  {/* Normal tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 justify-end"
                    animate={{ opacity: hovered === project.id ? 0 : 1 }}
                    transition={{ duration: 0.18 }}
                  >
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-3 py-1 rounded-full border border-black/15 text-black/45 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Preview card — fixed height so layout never collapses */}
                  <AnimatePresence>
                    {hovered === project.id && (
                      <motion.div
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        style={{ backgroundColor: "#111111", minHeight: 64 }}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {/* Accent top bar */}
                        <div
                          className="absolute top-0 left-0 right-0 h-[2px]"
                          style={{ backgroundColor: project.accent }}
                        />

                        {/* Content — padded, stacked */}
                        <div className="h-full flex flex-col justify-between p-4 pt-5">
                          {/* Number */}
                          <span
                            className="text-[9px] tracking-[0.22em] uppercase font-bold"
                            style={{ color: `${project.accent}90` }}
                          >
                            {project.number}
                          </span>

                          {/* View Project + arrow */}
                          <div className="flex items-center justify-between">
                            <p
                              className="font-bold text-[13px] leading-tight uppercase tracking-tight"
                              style={{ color: "#ffffff" }}
                            >
                              View Project
                            </p>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="2.5" strokeLinecap="round">
                              <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </button>
            </motion.div>
          ))}

        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <WorkModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
