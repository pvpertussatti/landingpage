import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import GetwaySection from "@/components/getway-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <GetwaySection />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
