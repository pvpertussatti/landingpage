import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Maintenance from "@/components/maintenance"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import About from "@/components/about"
import GatewaySection from "@/components/gateway-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <GatewaySection />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
