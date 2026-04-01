"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects, Project } from "@/data/projects"
import WorkModal from "./WorkModal"

export default function Works() {
  const [selected, setSelected] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <>
      <section ref={ref} className="relative bg-[#0a0a0a] py-28 px-6 md:px-20">

        {/* Section header */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-end justify-between border-b border-white/[0.07] pb-10 mb-2"
          >
            <div>
              <p className="text-[10px] tracking-[0.35em] text-white/30 uppercase mb-4">
                Selected Works
              </p>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                Projects
              </h2>
            </div>
            <span className="text-[7rem] md:text-[10rem] font-bold text-white/[0.04] leading-none select-none tabular-nums">
              {String(projects.length).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Project rows */}
          <div>
            {projects.map((project, idx) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, x: -32 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + idx * 0.1, ease: "easeOut" }}
                onClick={() => setSelected(project)}
                className="group w-full text-left border-b border-white/[0.07] py-9 flex items-center gap-6 md:gap-10 relative overflow-hidden cursor-pointer"
              >
                {/* Left accent bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] origin-bottom"
                  style={{ backgroundColor: project.accent }}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />

                {/* Subtle background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at left center, ${project.accent}0d 0%, transparent 70%)`,
                  }}
                />

                {/* Number */}
                <span className="relative text-white/20 font-bold text-sm w-10 shrink-0 pl-5 group-hover:text-white/40 transition-colors duration-300 tabular-nums">
                  {project.number}
                </span>

                {/* Title + Tags */}
                <div className="relative flex-1 min-w-0">
                  <h3 className="text-[22px] font-bold text-white tracking-tight mb-3 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] px-3 py-1 rounded-full border border-white/[0.08] text-white/35 group-hover:border-white/15 group-hover:text-white/55 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client logo or name — hidden on mobile */}
                <div className="relative hidden lg:block shrink-0">
                  {project.clientLogo ? (
                    <img
                      src={project.clientLogo}
                      alt={project.client.split("|")[0].trim()}
                      className="h-7 w-auto object-contain opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                    />
                  ) : (
                    <p className="text-white/25 text-sm text-right max-w-[220px] group-hover:text-white/40 transition-colors duration-300 leading-snug">
                      {project.client.split("|")[0].trim()}
                    </p>
                  )}
                </div>

                {/* Arrow */}
                <motion.div
                  className="relative shrink-0 text-white/20 group-hover:text-white/80 transition-colors duration-300"
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={22} />
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <WorkModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
