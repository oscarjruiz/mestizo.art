"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { HERO_TITLE, HERO_SUBTITLE } from "@/lib/constants"
import { Button } from "@/components/ui/button-custom"
import { Logo } from "@/components/common/Logo"
import { prefix } from "@/lib/path"

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={prefix("/images/hero.webp")}
          alt="Mujer contemplando las montañas junto a su perro al atardecer"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mestizo-bg/10 via-mestizo-beige/15 to-mestizo-bg/30" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading text-4xl leading-tight font-medium text-mestizo-text whitespace-pre-line sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {HERO_TITLE}
            </motion.h1>

            <div className="my-8 flex items-center gap-5">
              <div className="h-px w-16 bg-mestizo-brown-light/50" />
              <motion.div
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-mestizo-brown-light"
              >
                <Logo width={28} fill="#A7845C" />
              </motion.div>
              <div className="h-px w-16 bg-mestizo-brown-light/50" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-10 font-sans text-base leading-relaxed text-mestizo-text-secondary whitespace-pre-line sm:text-lg"
            >
              {HERO_SUBTITLE}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap gap-4"
            >
              <Button asLink href={prefix("/personas")} size="lg">
                PERSONAS
              </Button>
              <Button asLink href={prefix("/mascotas")} variant="outline" size="lg">
                MASCOTAS
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const el = document.querySelector("#colecciones")
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[14px] font-bold uppercase tracking-[0.3em] text-[#F5F0E8]">
            Descubre
          </span>
          <ChevronDown className="size-6 text-[#F5F0E8]" />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.04]">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <path
            d="M100 20C80 80 20 120 20 200C20 280 80 320 100 380"
            stroke="#5B4331"
            strokeWidth="1"
          />
          <path
            d="M80 40C65 90 10 125 10 200C10 275 65 310 80 360"
            stroke="#5B4331"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.04] scale-x-[-1]">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <path
            d="M100 20C80 80 20 120 20 200C20 280 80 320 100 380"
            stroke="#5B4331"
            strokeWidth="1"
          />
          <path
            d="M80 40C65 90 10 125 10 200C10 275 65 310 80 360"
            stroke="#5B4331"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  )
}
