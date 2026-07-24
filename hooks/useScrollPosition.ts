"use client"

import { useState, useEffect } from "react"

export function useScrollPosition(threshold = 50): {
  scrolled: boolean
  scrollY: number
} {
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setScrolled(currentScrollY > threshold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return { scrolled, scrollY }
}
