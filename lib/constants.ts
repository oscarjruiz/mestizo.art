import type {
  NavLink,
  Product,
  Collection,
  Benefit,
  SocialLink,
  InstagramImage,
  FooterSection,
} from "@/types"

export const SITE_NAME = "Mestizo"
export const SITE_TAGLINE = "Hecho a mano"
export const SITE_URL = "https://oscarjruiz.github.io/mestizo.art"
export const SITE_DESCRIPTION =
  "Artesanía para personas y mascotas, inspirada en la naturaleza, los viajes y los lazos que nos acompañan."
export const SITE_EMAIL = "hola@mestizo.art"
export const SITE_PHONE = "+573124200746"
export const SITE_INSTAGRAM = "@mestizoarte.co"
export const INSTAGRAM_URL = "https://www.instagram.com/mestizoarte.co/"

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Personas", href: "#colecciones" },
  { label: "Mascotas", href: "#colecciones" },
  { label: "Historia", href: "#historia" },
  { label: "Contacto", href: "#contacto" },
]

export const COLLECTIONS: Collection[] = [
  {
    id: "personas",
    label: "COLECCIÓN",
    title: "PERSONAS",
    description: "Piezas que te acompañan\nen cada aventura.",
    image: "/images/productos/joya-2.webp",
    href: "/personas",
  },
  {
    id: "mascotas",
    label: "COLECCIÓN",
    title: "MASCOTAS",
    description: "Accesorios hechos con amor\npara sus mejores compañeros.",
    image: "/images/productos/collar-2.webp",
    href: "/mascotas",
  },
]

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "pulsera-caminante",
    name: "Pulsera Caminante",
    price: "$55.000 COP",
    image: "/images/productos/pulsera-caminante.webp",
    slug: "pulsera-caminante",
  },
  {
    id: "collar-aventurina",
    name: "Collar Aventurina",
    price: "$65.000 COP",
    image: "/images/productos/collar-aventurina.webp",
    slug: "collar-aventurina",
  },
  {
    id: "collar-bosque",
    name: "Collar Bosque",
    price: "$60.000 COP",
    image: "/images/productos/collar-bosque.webp",
    slug: "collar-bosque",
  },
  {
    id: "cuaderno-viaje",
    name: "Cuaderno de Viaje",
    price: "$45.000 COP",
    image: "/images/productos/cuaderno-viaje.webp",
    slug: "cuaderno-viaje",
  },
]

export const BENEFITS: Benefit[] = [
  {
    icon: "hand",
    title: "Hecho a Mano",
    description: "Cada pieza es única, creada con dedicación artesanal.",
  },
  {
    icon: "gem",
    title: "Materiales de Calidad",
    description: "Seleccionados con cuidado para perdurar en el tiempo.",
  },
  {
    icon: "compass",
    title: "Diseños con Propósito",
    description: "Inspirados en la naturaleza, los viajes y la conexión.",
  },
  {
    icon: "truck",
    title: "Envíos a Colombia",
    description: "Seguros, rápidos y responsables con el medio ambiente.",
  },
]

export const INSTAGRAM_IMAGES: InstagramImage[] = [
  { id: "ig-1", src: "/images/instagram/ig-1.webp", alt: "Joyería artesanal Mestizo" },
  { id: "ig-2", src: "/images/instagram/ig-2 (1).webp", alt: "Cuaderno artesanal hecho a mano" },
  { id: "ig-3", src: "/images/instagram/ig-3.webp", alt: "Compañero de aventuras con collar Mestizo" },
  { id: "ig-4", src: "/images/instagram/ig-4.webp", alt: "Proceso artesanal en el taller Mestizo" },
  { id: "ig-5", src: "/images/instagram/ig-5.webp", alt: "Paisajes que inspiran nuestras colecciones" },
  { id: "ig-6", src: "/images/instagram/ig-6.webp", alt: "Pulsera Caminante en la naturaleza" },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", href: INSTAGRAM_URL, label: "Síguenos en Instagram" },
  { platform: "Facebook", href: "https://facebook.com/mestizo.artesania", label: "Síguenos en Facebook" },
  { platform: "WhatsApp", href: `https://wa.me/${SITE_PHONE.replace("+", "")}`, label: "Escríbenos por WhatsApp" },
]

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: "Enlaces",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Personas", href: "/personas" },
      { label: "Mascotas", href: "/mascotas" },
      { label: "Historia", href: "/historia" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Envíos y entregas", href: "/envios" },
      { label: "Cambios y garantías", href: "/cambios" },
      { label: "Preguntas frecuentes", href: "/faq" },
    ],
  },
]

export const HERO_TITLE = "Hecho a mano\npara quienes\nencuentran belleza\nen el camino."
export const HERO_SUBTITLE =
  "Artesanía inspirada en la naturaleza,\nlos viajes y los lazos que nos acompañan."

export const STORY_TEXT =
  "Mestizo nace del amor por la naturaleza, los viajes y los animales.\n\nCada pieza está hecha a mano con materiales seleccionados cuidadosamente, pensando en la conexión que existe entre las historias que vivimos y quienes nos acompañan en el camino."
