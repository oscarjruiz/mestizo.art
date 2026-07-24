"use client"

import { motion } from "framer-motion"

interface StaggerChildrenProps {
  staggerDelay?: number
  childrenDelay?: number
  className?: string
  children: React.ReactNode
}

interface StaggerItemProps {
  direction?: "up" | "down" | "left" | "right"
  className?: string
  children: React.ReactNode
}

const directionVariants = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
}

export function StaggerChildren({
  staggerDelay = 0.1,
  childrenDelay = 0,
  className,
  children,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childrenDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  className,
  children,
  direction = "up",
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directionVariants[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
