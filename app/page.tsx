import { Hero } from "@/components/hero/Hero"
import { Collections } from "@/components/sections/Collections"
import { FeaturedProducts } from "@/components/sections/FeaturedProducts"
import { OurStory } from "@/components/sections/OurStory"
import { Benefits } from "@/components/sections/Benefits"
import { InstagramSection } from "@/components/sections/Instagram"
import { TornEdge } from "@/components/common/TornEdge"
import { BackToTop } from "@/components/sections/BackToTop"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TornEdge topFill="none" bottomFill="#F8F4EE" height={80} overlapTop={64} />
      <Collections />
      <TornEdge topFill="#F8F4EE" bottomFill="#FCFAF8" height={72} />
      <FeaturedProducts />
      <TornEdge topFill="#FCFAF8" bottomFill="#F8F4EE" height={72} />
      <OurStory />
      <TornEdge topFill="#F8F4EE" bottomFill="#FCFAF8" height={56} overlapTop={56} />
      <Benefits />
      <TornEdge topFill="#FCFAF8" bottomFill="#F8F4EE" height={72} />
      <InstagramSection />
      <BackToTop />
    </>
  )
}
