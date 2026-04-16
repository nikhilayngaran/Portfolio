"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { projects, Project } from "@/data/projects"
import WorkModal from "./WorkModal"

export default function Works() {
  const [selected, setSelected] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <>
      <section ref={ref} className="bg-[#f2f0eb] py-32 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-[11px] tracking-[0.35em] text-black/40 uppercase mb-6">
              Selected Works
            </p>
            <div className="flex items-end justify-between">
              <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-none">
                Projects
              </h2>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-black/10 mb-0" />

          {/* Project rows */}
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
            >
              <button
                onClick={() => setSelected(project)}
                className="group w-full text-left border-b border-black/10 py-10 grid grid-cols-12 gap-6 items-center cursor-pointer hover:bg-black/[0.02] transition-colors duration-300 px-2 -mx-2 rounded-sm"
              >
                {/* Logo */}
                <div className="col-span-1 flex items-center">
                  {project.clientLogo ? (
                    <img
                      src={project.clientLogo}
                      alt={project.client}
                      className="w-9 h-9 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-9 h-9" />
                  )}
                </div>

                {/* Title + Client */}
                <div className="col-span-8">
                  <h3 className="text-[22px] font-semibold text-black tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-black/40 leading-relaxed">
                    {project.client}
                  </p>
                </div>

                {/* Tags */}
                <div className="col-span-3 flex flex-wrap gap-2 justify-end">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded-full border border-black/15 text-black/50 group-hover:border-black/30 group-hover:text-black/70 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
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
