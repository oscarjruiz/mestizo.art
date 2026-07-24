"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "mb-16 md:mb-20",
        centered && "text-center",
        className
      )}
    >
      <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-mestizo-brown-light">
        {label}
      </span>
      <h2 className="font-heading text-3xl leading-tight font-medium text-mestizo-text sm:text-4xl md:text-5xl lg:text-6xl whitespace-pre-line">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-mestizo-text-secondary sm:text-lg mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
