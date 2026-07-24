import type { MetadataRoute } from "next"
import { SITE_NAME } from "@/lib/constants"
import { prefix } from "@/lib/path"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: "Artesanía para personas y mascotas, inspirada en la naturaleza y los viajes.",
    start_url: prefix("/"),
    display: "standalone",
    background_color: "#F8F4EE",
    theme_color: "#6E6A42",
    icons: [
      {
        src: prefix("/icons/icon-192x192.svg"),
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: prefix("/icons/icon-512x512.svg"),
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
    lang: "es-CO",
  }
}
