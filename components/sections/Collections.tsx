"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { COLLECTIONS } from "@/lib/constants"

export function Collections() {
  return (
    <section id="colecciones" className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          label="Nuestras Colecciones"
          title={"Diseños únicos,\nhechos a mano\ncon intención y significado."}
          subtitle="Cada colección está inspirada en los elementos de la naturaleza y los lazos que nos unen a quienes amamos."
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link
                href={collection.href}
                className="group relative block aspect-[16/9] overflow-hidden rounded-3xl"
              >
                <Image
                  src={collection.image}
                  alt={`Colección ${collection.title}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mestizo-text/50 via-mestizo-text/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 lg:p-12">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-white/80 uppercase">
                    {collection.label}
                  </span>
                  <h3 className="mt-2 font-heading text-3xl font-medium text-white md:text-4xl lg:text-5xl">
                    {collection.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-sans text-base leading-relaxed text-white/80 whitespace-pre-line">
                    {collection.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-[0.05em] text-white uppercase transition-all duration-300 group-hover:gap-3">
                    EXPLORAR
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
