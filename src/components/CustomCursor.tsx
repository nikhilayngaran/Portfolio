"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches)

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-hover]")) setIsHovering(true)
    }
    const handleOut = () => setIsHovering(false)
    const handleLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", handleOver)
    window.addEventListener("mouseout", handleOut)
    document.addEventListener("mouseleave", handleLeave)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", handleOver)
      window.removeEventListener("mouseout", handleOut)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  if (isTouch) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full border-2 mix-blend-difference"
      style={{ borderColor: "var(--burnt-orange)" }}
      animate={{
        x: position.x - (isHovering ? 24 : 10),
        y: position.y - (isHovering ? 24 : 10),
        width: isHovering ? 48 : 20,
        height: isHovering ? 48 : 20,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  )
}
