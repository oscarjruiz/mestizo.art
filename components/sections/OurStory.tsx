"use client"

import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/button-custom"
import { STORY_TEXT } from "@/lib/constants"
import { FadeIn } from "@/components/common/FadeIn"
import { prefix } from "@/lib/path"

export function OurStory() {
  return (
    <section id="historia" className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="right">
            <span className="mb-4 inline-block font-sans text-xs font-semibold tracking-[0.25em] text-mestizo-brown-light uppercase">
              Nuestra Historia
            </span>
            <h2 className="font-heading text-3xl leading-tight font-medium text-mestizo-text sm:text-4xl md:text-5xl lg:text-6xl">
              El arte de
              <br />
              lo hecho a mano.
            </h2>
            <p className="mt-8 max-w-lg font-sans text-base leading-relaxed text-mestizo-text-secondary whitespace-pre-line sm:text-lg">
              {STORY_TEXT}
            </p>
            <div className="mt-8">
              <Button asLink href={prefix("/historia")} variant="primary" size="lg">
                CONOCE MÁS
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mestizo-beige/30">
              <Image
                src={prefix("/images/artesano.webp")}
                alt="Cuaderno de viaje artesanal abierto con paisaje ilustrado y cristales naturales"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
