import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Maintenance from "@/components/maintenance"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import About from "@/components/about"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Maintenance />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
