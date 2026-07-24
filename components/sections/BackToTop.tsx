"use client"

import { ArrowUp } from "lucide-react"
import { Container } from "@/components/common/Container"

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function BackToTop() {
  return (
    <section className="py-12 text-center">
      <Container>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full border border-mestizo-border px-6 py-3 font-sans text-sm font-medium text-mestizo-text-secondary transition-all duration-300 hover:border-mestizo-olive hover:text-mestizo-olive"
        >
          <ArrowUp className="size-4" />
          Volver al inicio
        </button>
      </Container>
    </section>
  )
}
