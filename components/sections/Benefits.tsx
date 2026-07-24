"use client"

import { Hand, Gem, Compass, Truck } from "lucide-react"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { BENEFITS } from "@/lib/constants"
import { StaggerChildren, StaggerItem } from "@/components/common/Stagger"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  hand: Hand,
  gem: Gem,
  compass: Compass,
  truck: Truck,
}

export function Benefits() {
  return (
    <section id="beneficios" className="bg-mestizo-bg-secondary py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          label="Por Qué Elegirnos"
          title="La diferencia está en los detalles."
        />

        <StaggerChildren className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {BENEFITS.map((benefit) => {
            const Icon = iconMap[benefit.icon]
            return (
              <StaggerItem key={benefit.title}>
                <div className="group flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-mestizo-beige/50 text-mestizo-olive transition-all duration-500 ease-out group-hover:bg-mestizo-olive group-hover:text-white group-hover:shadow-lg group-hover:scale-105">
                    {Icon && <Icon className="size-7" />}
                  </div>
                  <h3 className="font-heading text-xl font-medium text-mestizo-text">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 max-w-[220px] font-sans text-sm leading-relaxed text-mestizo-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </Container>
    </section>
  )
}
