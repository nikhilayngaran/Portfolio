import { ExternalLink, GitBranch } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Neon Nexus",
      description: "A cyberpunk-themed e-commerce platform built with Next.js and Three.js.",
      tags: ["Next.js", "Three.js", "Tailwind"],
      link: "#"
    },
    {
      title: "FlowState",
      description: "A minimalist productivity app featuring complex SVG animations.",
      tags: ["React", "Framer Motion", "Supabase"],
      link: "#"
    },
    {
      title: "Orbital",
      description: "A landing page for a fictional space tourism agency using scroll-linked effects.",
      tags: ["Vue", "GSAP", "Tailwind"],
      link: "#"
    },
    {
      title: "Aura",
      description: "An AI-powered mood tracking journal with dynamic, data-driven interfaces.",
      tags: ["Next.js", "OpenAI", "D3.js"],
      link: "#"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#121212] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Selected <span className="text-gray-500">Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl p-8 bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold text-white tracking-wide">{project.title}</h3>
                  <div className="flex gap-4 text-gray-400">
                    <a href={project.link} className="hover:text-white transition-colors duration-300">
                      <GitBranch size={20} />
                    </a>
                    <a href={project.link} className="hover:text-white transition-colors duration-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg mb-8 flex-grow tracking-wide">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-4 py-1.5 text-sm font-medium text-gray-300 bg-white/5 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
