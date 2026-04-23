"use client"

import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "#0a0a0a",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="text-white font-bold text-sm tracking-[0.18em] uppercase hover:opacity-70 transition-opacity"
        >
          NAP
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {(["WORK", "PROCESS", "ABOUT"] as const).map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] tracking-[0.2em] font-medium transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:nikhilayngaran13@gmail.com"
            className="text-[11px] tracking-[0.15em] font-bold px-5 py-2 transition-colors duration-200"
            style={{ backgroundColor: "#D4622A", color: "white" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#b84f1f")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#D4622A")}
          >
            HIRE ME →
          </a>
        </nav>
      </div>
    </header>
  )
}
