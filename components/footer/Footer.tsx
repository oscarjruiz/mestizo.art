"use client"

import Link from "next/link"
import {
  Globe,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react"
import { Container } from "@/components/common/Container"
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_PHONE,
  SOCIAL_LINKS,
  FOOTER_LINKS,
} from "@/lib/constants"
import { FadeIn } from "@/components/common/FadeIn"
import { Logo } from "@/components/common/Logo"
import { InstagramLogo } from "@/components/common/InstagramLogo"

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: InstagramLogo,
  Facebook: Globe,
  WhatsApp: MessageCircle,
}

export function Footer() {
  return (
    <footer id="contacto" className="bg-mestizo-beige/40 py-20 md:py-24">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <FadeIn>
            <div>
              <Link href="/" className="inline-block">
                <Logo width={48} fill="#2B241F" />
              </Link>
              <p className="mt-3 font-sans text-[10px] font-medium tracking-[0.3em] text-mestizo-brown-light uppercase">
                {SITE_TAGLINE}
              </p>
              <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-mestizo-text-secondary">
                {SITE_DESCRIPTION}
              </p>
              <div className="mt-6 flex items-center gap-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.platform]
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-mestizo-beige text-mestizo-text-secondary transition-all duration-300 hover:bg-mestizo-olive hover:text-white"
                    >
                      {Icon && <Icon className="size-4" />}
                    </a>
                  )
                })}
              </div>
            </div>
          </FadeIn>

          {FOOTER_LINKS.map((section, i) => (
            <FadeIn key={section.title} delay={0.1 * (i + 1)}>
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-mestizo-text uppercase">
                  {section.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-mestizo-text-secondary transition-colors duration-200 hover:text-mestizo-olive"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-mestizo-text uppercase">
                Hablemos
              </h3>
              <div className="mt-5 space-y-4">
                <a
                  href={`https://wa.me/${SITE_PHONE.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-mestizo-olive px-4 py-2.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-mestizo-forest"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                  <ArrowUpRight className="size-3" />
                </a>
                <p className="font-sans text-sm text-mestizo-text-secondary">
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="transition-colors duration-200 hover:text-mestizo-olive"
                  >
                    {SITE_EMAIL}
                  </a>
                </p>
                <p className="font-sans text-xs text-mestizo-text-secondary/70">
                  Envíos a toda Colombia
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 border-t border-mestizo-border pt-8 md:mt-20">
          <p className="text-center font-sans text-xs text-mestizo-text-secondary/60">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
