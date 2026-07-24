"use client"

import { useState, useEffect, useCallback, useSyncExternalStore } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShoppingBag,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE, INSTAGRAM_URL } from "@/lib/constants"
import { Logo } from "@/components/common/Logo"
import { InstagramLogo } from "@/components/common/InstagramLogo"

function useIsClient() {
  return useSyncExternalStore(
    useCallback(() => () => {}, []),
    () => true,
    () => false,
  )
}

export function Navbar() {
  const { scrolled } = useScrollPosition(80)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isClient = useIsClient()

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
          window.history.pushState(null, "", href)
        }
      }
      setMobileOpen(false)
    },
    []
  )

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[90px] transition-all duration-500 ease-out",
        isClient && scrolled
          ? "bg-mestizo-bg/90 shadow-[0_1px_20px_rgba(43,36,31,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 lg:px-12 xl:px-16"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="group relative z-50 flex flex-row items-center gap-3"
          aria-label={`${SITE_NAME} - Ir al inicio`}
        >
          <Logo
            width={52}
            className="text-mestizo-text transition-colors duration-300"
          />
          <div className="flex flex-col">
            <span
              className={cn(
                "font-heading text-2xl font-medium tracking-[0.05em] leading-tight uppercase transition-colors duration-300",
                isClient && scrolled ? "text-mestizo-text" : "text-mestizo-text"
              )}
            >
              {SITE_NAME}
            </span>
            <span
              className={cn(
                "font-sans text-[8px] tracking-[0.3em] uppercase transition-colors duration-300",
                isClient && scrolled
                  ? "text-mestizo-text-secondary"
                  : "text-mestizo-text-secondary"
              )}
            >
              {SITE_TAGLINE}
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
              <li key={`${link.label}-${link.href}`}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative font-sans text-sm font-medium text-mestizo-text transition-colors duration-300 hover:text-mestizo-olive"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-mestizo-olive transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden text-mestizo-text-secondary transition-colors duration-300 hover:text-mestizo-olive sm:block"
          >
            <InstagramLogo className="size-6" />
            </a>

            <button
              aria-label="Carrito de compras"
              className="relative hidden text-mestizo-text-secondary transition-colors duration-300 hover:text-mestizo-olive sm:block"
          >
            <ShoppingBag className="size-5" />
            <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-mestizo-olive text-[10px] font-semibold text-white">
              0
            </span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="z-50 text-mestizo-text transition-colors duration-300 hover:text-mestizo-olive lg:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-mestizo-bg/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={`${link.label}-${link.href}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-heading text-3xl font-medium text-mestizo-text transition-colors duration-200 hover:text-mestizo-olive"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="flex items-center gap-8 mt-4"
              >
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-mestizo-text-secondary transition-colors duration-200 hover:text-mestizo-olive"
                >
            <InstagramLogo className="size-7" />
                </a>
                <button
                  aria-label="Carrito de compras"
                  className="relative text-mestizo-text-secondary transition-colors duration-200 hover:text-mestizo-olive"
                >
                  <ShoppingBag className="size-6" />
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-mestizo-olive text-[10px] font-semibold text-white">
                    0
                  </span>
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
