import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import Script from "next/script"
import { Navbar } from "@/components/navigation/Navbar"
import { Footer } from "@/components/footer/Footer"
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants"
import { prefix } from "@/lib/path"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_DESCRIPTION.split(",")[0]}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "artesanía",
    "hecho a mano",
    "accesorios para mascotas",
    "accesorios artesanales",
    "joyería artesanal",
    "naturaleza",
    "montaña",
    "viajes",
    "diseño colombiano",
    "Mestizo",
    "artesanal",
    "collar",
    "pulsera",
    "cuaderno",
    "cristales",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Artesanía para personas y mascotas`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: prefix("/images/og-image.svg"),
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Artesanía para personas y mascotas`,
    description: SITE_DESCRIPTION,
    images: [prefix("/images/og-image.svg")],
    creator: "@mestizo_artesania",
  },
  icons: {
    icon: [
      { url: prefix("/favicon.ico") },
      { url: prefix("/icons/icon-32x32.svg"), sizes: "32x32", type: "image/svg+xml" },
      { url: prefix("/icons/icon-16x16.svg"), sizes: "16x16", type: "image/svg+xml" },
    ],
    apple: [{ url: prefix("/icons/apple-touch-icon.svg"), sizes: "180x180" }],
  },
  manifest: prefix("/manifest.json"),
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      email: "hola@mestizo.art",
      sameAs: [
        "https://www.instagram.com/mestizoarte.co/",
        "https://facebook.com/mestizo.artesania",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "CO",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME} - Inicio`,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: SITE_URL,
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-mestizo-bg font-sans text-mestizo-text">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
