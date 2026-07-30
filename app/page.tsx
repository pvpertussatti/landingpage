import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import GetwaySection from "@/components/getway-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <GetwaySection />
      <CTA />
      <Footer />
    </main>
  )
}
