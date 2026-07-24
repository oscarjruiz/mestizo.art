export interface NavLink {
  label: string
  href: string
}

export interface Product {
  id: string
  name: string
  price: string
  image: string
  slug: string
}

export interface Collection {
  id: string
  label: string
  title: string
  description: string
  image: string
  href: string
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface SocialLink {
  platform: string
  href: string
  label: string
}

export interface InstagramImage {
  id: string
  src: string
  alt: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}
