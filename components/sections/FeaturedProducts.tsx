"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Button } from "@/components/ui/button-custom"
import { FEATURED_PRODUCTS } from "@/lib/constants"
import { StaggerChildren, StaggerItem } from "@/components/common/Stagger"

export function FeaturedProducts() {
  return (
    <section id="productos" className="bg-mestizo-bg-secondary py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          label="Productos Destacados"
          title="Piezas que cuentan historias."
        />

        <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <StaggerItem key={product.id}>
              <Link
                href={`/productos/${product.slug}`}
                className="group block"
              >
                <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-2xl bg-mestizo-beige/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-heading text-xl font-medium text-mestizo-text transition-colors duration-300 group-hover:text-mestizo-olive">
                  {product.name}
                </h3>
                <p className="mt-1.5 font-sans text-sm text-mestizo-text-secondary">
                  {product.price}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <Button asLink href="/productos" variant="outline" size="lg">
            VER TODOS LOS PRODUCTOS
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
