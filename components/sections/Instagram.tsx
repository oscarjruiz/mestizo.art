"use client"

import Image from "next/image"
import { Container } from "@/components/common/Container"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Button } from "@/components/ui/button-custom"
import { INSTAGRAM_IMAGES, SITE_INSTAGRAM, INSTAGRAM_URL } from "@/lib/constants"
import { StaggerChildren, StaggerItem } from "@/components/common/Stagger"
import { InstagramLogo } from "@/components/common/InstagramLogo"

export function InstagramSection() {
  return (
    <section id="instagram" className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          label="Síguenos en Instagram"
          title={SITE_INSTAGRAM}
          subtitle="Descubre el detrás de cámaras de nuestro proceso artesanal, nuestras
          aventuras y las historias que inspiran cada pieza."
        />

        <StaggerChildren className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {INSTAGRAM_IMAGES.map((image) => (
            <StaggerItem key={image.id}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-mestizo-beige/30"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-mestizo-text/0 opacity-0 transition-all duration-400 ease-out group-hover:bg-mestizo-text/30 group-hover:opacity-100">
                  <InstagramLogo className="size-8 text-white" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-14 flex justify-center">
          <Button
            asLink
            href={INSTAGRAM_URL}
            variant="outline"
            size="lg"
          >
            VER MÁS EN INSTAGRAM
          </Button>
        </div>
      </Container>
    </section>
  )
}
