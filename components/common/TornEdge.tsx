"use client"

import { useId, useMemo } from "react"

interface TornEdgeProps {
  topFill: string
  bottomFill: string
  height?: number
  overlapTop?: number
  overlapBottom?: number
  className?: string
}

function r(n: number): number {
  return Math.round(n * 1000) / 1000
}

function generateTornPoints(
  width: number,
  height: number,
  seed: number
): { x: number; y: number }[] {
  const segments = 60
  const step = width / segments
  const points: { x: number; y: number }[] = []

  const pseudoRandom = (i: number, s: number) => {
    const n = Math.sin(i * 12.9898 + s * 78.233 + seed) * 43758.5453
    return n - Math.floor(n)
  }

  for (let i = 0; i <= segments; i++) {
    const x = r(i * step)
    const midY = height * 0.5

    const wave1 = Math.sin(i * 0.35 + seed) * height * 0.14
    const wave2 = Math.sin(i * 1.7 + seed * 2) * height * 0.04
    const wave3 = Math.sin(i * 4.1 + seed * 3) * height * 0.02
    const micro = (pseudoRandom(i, seed) - 0.5) * height * 0.03

    const y = r(Math.max(height * 0.2, Math.min(height * 0.8, midY + wave1 + wave2 + wave3 + micro)))
    points.push({ x, y })
  }

  return points
}

function buildForwardPath(points: { x: number; y: number }[], height: number, seed: number): string {
  const pseudoRandom = (i: number, s: number) => {
    const n = Math.sin(i * 12.9898 + s * 78.233 + seed) * 43758.5453
    return n - Math.floor(n)
  }

  return points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`
      const prev = points[i - 1]
      const cpx = r((prev.x + p.x) / 2)
      const cpy = r((prev.y + p.y) / 2 + (pseudoRandom(i, seed + 10) - 0.5) * height * 0.08)
      return `Q ${cpx} ${cpy} ${p.x} ${p.y}`
    })
    .join(" ")
}

function buildBackwardPath(points: { x: number; y: number }[], height: number, seed: number): string {
  const reversed = [...points].reverse()
  const n = points.length - 1

  const pseudoRandom = (i: number, s: number) => {
    const m = Math.sin(i * 12.9898 + s * 78.233 + seed) * 43758.5453
    return m - Math.floor(m)
  }

  return reversed
    .map((p, i) => {
      if (i === 0) return `L ${p.x} ${p.y}`
      const prev = reversed[i - 1]
      const cpx = r((prev.x + p.x) / 2)
      const forwardIdx = n - i
      const cpy = r((prev.y + p.y) / 2 + (pseudoRandom(forwardIdx, seed + 10) - 0.5) * height * 0.08)
      return `Q ${cpx} ${cpy} ${p.x} ${p.y}`
    })
    .join(" ")
}

export function TornEdge({
  topFill = "none",
  bottomFill = "none",
  height = 72,
  overlapTop,
  overlapBottom,
  className,
}: TornEdgeProps) {
  const uid = useId()
  const shadowId = `torn-shadow-${uid}`

  const points = useMemo(
    () => generateTornPoints(1440, height, 1),
    [height]
  )

  const forwardPath = useMemo(
    () => buildForwardPath(points, height, 1),
    [points]
  )

  const backwardPath = useMemo(
    () => buildBackwardPath(points, height, 1),
    [points]
  )

  const startY = points[0].y
  const endY = points[points.length - 1].y

  const showTop = topFill !== "none" && topFill !== "transparent"
  const showBottom = bottomFill !== "none" && bottomFill !== "transparent"

  const overlap = Math.round(height * 0.45)
  const topOverlap = overlapTop ?? overlap
  const bottomOverlap = overlapBottom ?? overlap

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: `${height}px`,
        position: "relative",
        zIndex: 2,
        marginTop: `-${topOverlap}px`,
        marginBottom: `-${bottomOverlap}px`,
      }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <defs>
          <filter id={shadowId}>
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="2"
              floodColor="#2B241F"
              floodOpacity="0.08"
            />
          </filter>
        </defs>

        {showTop && (
          <path
            d={`M 0 0 L 1440 0 L 1440 ${endY} ${backwardPath} Z`}
            fill={topFill}
          />
        )}

        {showBottom && (
          <path
            d={`${forwardPath} L 1440 ${height} L 0 ${height} Z`}
            fill={bottomFill}
          />
        )}

        <path
          d={forwardPath}
          fill="none"
          stroke="#2B241F"
          strokeWidth="1.5"
          opacity="0.07"
          filter={`url(#${shadowId})`}
        />

        <path
          d={forwardPath}
          fill="none"
          stroke="#D8C4A8"
          strokeWidth="0.7"
          opacity="0.25"
        />

        <path
          d={forwardPath}
          fill="none"
          stroke="#F8F4EE"
          strokeWidth="0.4"
          opacity="0.25"
          transform={`translate(0, -1.5)`}
        />
      </svg>
    </div>
  )
}
